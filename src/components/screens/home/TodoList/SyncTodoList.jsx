import { AddForm } from "components/ui/AddForm";
import { EditForm } from "components/ui/EditForm";
import { SearchForm } from "components/ui/SearchForm";
import { Todo } from "components/ui/Todo";
import { todoValidator } from "config/validator";
import { useFilter } from "hooks/useFilter";
import { useOpenEditForm } from "hooks/useOpenEditForm";
import { useSearch } from "hooks/useSearch";
import { useSort } from "hooks/useSort";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoFilters } from "../TodoFilters";
import { filters, initTasks, sorting } from "./TodoList.constants";
import styles from "./TodoList.module.scss";

export const SyncTodoList = () => {
  const [tasks, setTasks] = useState(initTasks);
  const { closeEditTask, editTaskId, getEditTaskId } = useOpenEditForm();

  const { filteredList, filterValue, onFilter } = useFilter(
    tasks,
    filters[0].value
  );

  const { sortedList, setSortMode, sortMode } = useSort(
    filteredList,
    "title",
    sorting[0]
  );

  const { onSearch, searchList, searchValue } = useSearch(sortedList, "title");

  const addTask = (title) => {
    if (tasks.some((task) => task.title === title)) return;

    setTasks((prevTasks) => [
      {
        id: uuid(),
        userId: 1,
        title,
        completed: false,
      },
      ...prevTasks,
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (editedTask) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        }

        return task;
      });

      return newTasks;
    });
    closeEditTask("");
  };

  const taskCompleteSwitch = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        }

        return task;
      })
    );
  };

  const onSort = (sortMode) => {
    setSortMode(sortMode);
  };

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
      <div className={styles.list}>
        {searchList.map((task) =>
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
    </>
  );
};
