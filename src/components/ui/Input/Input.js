import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

export const Input = ({ className, ...props }) => {
  return (
    <input
      className={classNames(styles.input, { [className]: className })}
      {...props}
    />
  );
};

Input.propTypes = {
  classNames: PropTypes.string,
};
