import styles from "./IconButton.module.scss";

export const IconButton = ({ children, ...props }) => {
  return (
    <button className={styles.wrapper} {...props}>
      {children}
    </button>
  );
};
