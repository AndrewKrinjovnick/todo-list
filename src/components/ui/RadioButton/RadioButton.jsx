import styles from "./RadioButton.module.scss";

export const RadioButton = ({ children, ...props }) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="radio" {...props} />
      <div className={styles.btn}>{children}</div>
    </label>
  );
};
