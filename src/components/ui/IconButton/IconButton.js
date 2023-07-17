import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./IconButton.module.scss";

export const IconButton = ({
  children,
  className,
  type = "button",
  variant = "dark",
  ...props
}) => {
  return (
    <button
      className={classNames(styles.btn, styles[variant], {
        [className]: className,
      })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
};
