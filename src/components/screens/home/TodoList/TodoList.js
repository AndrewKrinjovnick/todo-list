import { useState } from "react";
import { v4 as uuid } from "uuid";
import { todoValidator } from "../../../../config/validator";
import { AddForm } from "../../../ui/AddForm";
import { EditForm } from "../../../ui/EditForm";
import { Todo } from "../../../ui/Todo";
import { initTasks } from "./TodoList.constants";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const [tasks, setTasks] = useState(initTasks);
  const [editTaskId, setEditTaskId] = useState("");

  const addTask = (title) => {
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
    console.log(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const getEditTaskId = (taskId) => {
    setEditTaskId(taskId);
  };

  const closeEditTask = () => {
    setEditTaskId("");
  };

  const editTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        }

        return task;
      })
    );
    setEditTaskId("");
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

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Список задач</h1>
      <AddForm
        btnText="Додати"
        onSubmit={addTask}
        placeholder="Введіть задачу"
        validator={todoValidator}
      />
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
    </div>
  );
};
