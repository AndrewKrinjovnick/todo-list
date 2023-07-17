import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./AddForm.module.scss";

export const AddForm = ({
  onSubmit,
  btnText,
  initValue = "",
  validator = {},
  ...props
}) => {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      text: initValue,
    },
  });

  const handleSubmit = ({ text }) => {
    text.trim() && onSubmit(text);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={formSubmit(handleSubmit)}>
      <Input
        className={styles.input}
        {...props}
        {...register("text", validator)}
        error={errors?.text?.message}
        Icons={
          <Button type="submit" className={styles.btn}>
            {btnText}
          </Button>
        }
      />
    </form>
  );
};

AddForm.propTypes = {
  btnText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
