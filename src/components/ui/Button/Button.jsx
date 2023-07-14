import classNames from "classnames";
import styles from "./Button.module.scss";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(styles.btn, { [className]: className })}
      {...props}
    >
      {children}
    </button>
  );
};
