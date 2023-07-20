import { AddForm } from "components/ui/AddForm";
import { EditForm } from "components/ui/EditForm";
import { Loader } from "components/ui/Loader";
import { SearchForm } from "components/ui/SearchForm";
import { Todo } from "components/ui/Todo";
import { todoValidator } from "config/validator";
import { useDebounce } from "hooks/useDebounce";
import { useInput } from "hooks/useInput";
import { useMutate } from "hooks/useMutate";
import { useOpenEditForm } from "hooks/useOpenEditForm";
import { useQuery } from "hooks/useQuery";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { TodoService } from "services/todo.service";
import { v4 as uuid } from "uuid";
import { TodoFilters } from "../TodoFilters";
import { filters, filtersMap, sorting } from "./TodoList.constants";
import styles from "./TodoList.module.scss";

export const AsyncTodoList = () => {
  const [searchValue, onSearch] = useInput("");
  const [filterValue, onFilter] = useInput(filters[0].value);
  const [sortMode, setSortMode] = useState(sorting[0]);

  const debSearchValue = useDebounce(searchValue);

  const { closeEditTask, editTaskId, getEditTaskId } = useOpenEditForm();

  const {
    error: getTaskError,
    data: tasks = [],
    loading,
    isFetching: getTaskFetching,
    refetch,
  } = useQuery("todos", TodoService.getTasks, false);

  const filtersOption = {
    _order: sortMode.value !== "default" ? sortMode.value : null,
    _sort: sortMode.value !== "default" ? "title" : null,
    completed: filterValue !== "all" ? filtersMap[filterValue] : null,
    title_like: debSearchValue,
  };

  const {
    error: addTaskError,
    loading: addTaskLoading,
    mutate: addTask,
  } = useMutate(async (title) => {
    if (tasks.some((task) => task.title === title)) return;
    await TodoService.addTask({
      id: uuid(),
      userId: 1,
      title,
      completed: false,
    });
    refetch(filtersOption);
  });

  const {
    error: taskCompleteSwitchError,
    loading: taskCompleteSwitchLoading,
    mutate: taskCompleteSwitch,
  } = useMutate(async (editedTask) => {
    await TodoService.editTask(editedTask.id, editedTask);
    refetch(filtersOption);
  });

  const {
    error: deleteTaskError,
    loading: deleteTaskLoading,
    mutate: deleteTask,
  } = useMutate(async (taskId) => {
    await TodoService.deleteTask(taskId);
    refetch(filtersOption);
  });

  const {
    error: editTaskError,
    loading: editTaskLoading,
    mutate: editTask,
  } = useMutate(async (editedTask) => {
    await TodoService.editTask(editedTask.id, editedTask);
    refetch(filtersOption);
    closeEditTask("");
  });

  const onSort = (value) => {
    setSortMode(value);
  };

  useEffect(() => {
    refetch(filtersOption);
  }, [debSearchValue, filterValue, sortMode]);

  const error =
    getTaskError ||
    addTaskError ||
    deleteTaskError ||
    taskCompleteSwitchError ||
    editTaskError;

  const isFetching =
    getTaskFetching ||
    addTaskLoading ||
    deleteTaskLoading ||
    taskCompleteSwitchLoading ||
    editTaskLoading;

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <>
      <AddForm
        btnText="Додати"
        onSubmit={addTask}
        placeholder="Додати задачу"
        validator={todoValidator}
      />
      <SearchForm
        placeholder="Пошук задачі"
        value={searchValue}
        onChange={onSearch}
      />
      <TodoFilters
        filters={filters}
        filterValue={filterValue}
        onFilter={onFilter}
        onSort={onSort}
        sorting={sorting}
        sortMode={sortMode}
      />
      {loading ? (
        <Loader
          style={{
            height: tasks.length
              ? `${tasks.length * 46 + (tasks.length - 1) * 16}px`
              : "auto",
          }}
        />
      ) : isFetching ? (
        <Skeleton count={tasks.length} className={styles.skeleton} />
      ) : (
        <div className={styles.list}>
          {tasks.map((task) =>
            editTaskId === task.id ? (
              <EditForm
                initValue={task.title}
                onClose={closeEditTask}
                onSubmit={editTask}
                key={task.id}
                task={task}
                validator={todoValidator}
                placeholder="Введіть назву задачі"
              />
            ) : (
              <Todo
                {...task}
                key={task.id}
                onDelete={deleteTask}
                onEdit={getEditTaskId}
                onComplete={taskCompleteSwitch}
              />
            )
          )}
        </div>
      )}
    </>
  );
};
