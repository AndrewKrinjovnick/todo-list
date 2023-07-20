import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { colors } from "../../../config/colors";
import { Checkbox } from "../Checkbox";
import { IconButton } from "../IconButton";
import styles from "./Todo.module.scss";

export const Todo = ({
  id,
  completed,
  onEdit,
  onDelete,
  onComplete,
  userId,
  title,
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    onEdit(id);
  };

  const handleComplete = () => {
    setIsCompleted((prevState) => {
      return !prevState;
    });

    onComplete({
      id,
      title,
      completed: !isCompleted,
      userId,
    });
  };

  const iconButtons = [
    {
      color: colors.white,
      onClick: () => 1,
      Icon: BiSolidUser,
    },
    {
      color: colors.white,
      onClick: handleEdit,
      Icon: FaRegEdit,
    },
    {
      color: colors.white,
      onClick: handleDelete,
      Icon: MdDelete,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons_list}>
        <Checkbox onChange={handleComplete} checked={isCompleted} />
        {iconButtons.map(({ color, onClick, Icon }, index) => (
          <IconButton onClick={onClick} key={index}>
            <Icon color={color} />
          </IconButton>
        ))}
      </div>
    </div>
  );
};
