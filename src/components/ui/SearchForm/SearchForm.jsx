import { BiSearchAlt2 } from "react-icons/bi";
import { colors } from "../../../config/colors";
import { IconButton } from "../IconButton";
import { Input } from "../Input";
import styles from "./SearchForm.module.scss";

export const SearchForm = ({ onSubmit, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit && onSubmit(event);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        className={styles.input}
        {...props}
        Icons={
          <IconButton className={styles.btn} variant="light" type="submit">
            <BiSearchAlt2 color={colors.white} />
          </IconButton>
        }
      />
    </form>
  );
};
