import PropTypes from "prop-types";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./SearchForm.module.scss";

export const SearchForm = ({ onSubmit, btnText, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input {...props} className={styles.input} />
      <Button type="submit" className={styles.btn}>
        {btnText}
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
