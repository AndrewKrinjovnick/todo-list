import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

export const Container = ({ children, fullWidth }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.fullWidth]: fullWidth,
      })}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element,
  fullWidth: PropTypes.bool,
};
