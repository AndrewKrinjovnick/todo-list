import { useState } from "react";

export const useOpenEditForm = (initId = null) => {
  const [editTaskId, setEditTaskId] = useState(initId);

  const getEditTaskId = (taskId) => {
    setEditTaskId(taskId);
  };

  const closeEditTask = () => {
    setEditTaskId("");
  };

  return { editTaskId, closeEditTask, getEditTaskId };
};
