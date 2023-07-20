import { BiError } from "react-icons/bi";
import { colors } from "../../../config/colors";
import styles from "./ErrorMessage.module.scss";

export const ErrorMessage = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <BiError color={colors.red} />
      <div className={styles.error}>{children}</div>
    </div>
  );
};
