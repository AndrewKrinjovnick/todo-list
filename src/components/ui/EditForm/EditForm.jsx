import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { colors } from "../../../config/colors";
import { IconButton } from "../IconButton";
import { Input } from "../Input";
import styles from "./EditForm.module.scss";

export const EditForm = ({
  onClose,
  onEdit,
  onSubmit,
  task,
  validator = {},
}) => {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: task.title,
    },
  });

  const handleSubmit = ({ text }) => {
    text.trim() ? onSubmit({ ...task, title: text }) : onClose();
  };

  const buttons = [
    { className: styles.done, onClick: onEdit, Icon: MdDone, type: "submit" },
    {
      className: styles.close,
      onClick: onClose,
      Icon: IoCloseSharp,
      type: "button",
    },
  ];

  return (
    <form className={styles.form} onSubmit={formSubmit(handleSubmit)}>
      <Input
        className={styles.input}
        {...register("text", validator)}
        autoFocus
        error={errors?.text?.message}
        Icons={buttons.map(({ className, onClick, Icon, type }) => (
          <IconButton
            className={className}
            variant="light"
            key={className}
            onClick={onClick}
            type={type}
          >
            <Icon size={16} color={colors.white} />
          </IconButton>
        ))}
      />
    </form>
  );
};
