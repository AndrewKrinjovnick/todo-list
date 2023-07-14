import { BiSolidUser } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { colors } from "../../../config/colors";
import { IconButton } from "../IconButton";
import { Input } from "../Input";
import styles from "./Todo.module.scss";

export const Todo = ({ isEdit, title }) => {
  if (isEdit) {
    return (
      <div className={styles.wrapper}>
        <Input />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons_list}>
        <IconButton>
          <BiSolidUser color={colors.white} />
        </IconButton>
        <IconButton>
          <FaRegEdit color={colors.white} />
        </IconButton>
        <IconButton>
          <MdDelete color={colors.white} />
        </IconButton>
      </div>
    </div>
  );
};
