import classNames from "classnames";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { ErrorMessage } from "../ErrorMessage";
import styles from "./Input.module.scss";

export const Input = forwardRef(
  ({ className, error, Icons, ...props }, ref) => {
    if (Icons) {
      return (
        <>
          <div className={styles.input_wrapper}>
            <input
              className={classNames(styles.input, {
                [className]: className,
                [styles.error]: error,
              })}
              {...props}
              ref={ref}
            />
            {Icons}
          </div>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      );
    }

    return (
      <>
        <input
          className={classNames(styles.input, {
            [className]: className,
            [styles.error]: error,
          })}
          {...props}
          ref={ref}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
);

Input.propTypes = {
  classNames: PropTypes.string,
};
