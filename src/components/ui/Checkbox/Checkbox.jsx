import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { colors } from "../../../config/colors";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({ size = 16, ...props }) => {
  const [checked, setChecked] = useState(props.checked);

  const onChange = (event) => {
    const input = event.target;
    setChecked(input.checked);
    props.onChange && props.onChange(event);
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.checkbox}
        type="checkbox"
        {...props}
        onChange={onChange}
      />
      {checked ? (
        <RiCheckboxCircleFill color={colors.green} size={size} />
      ) : (
        <RiCheckboxBlankCircleLine color={colors.white} size={size} />
      )}
    </label>
  );
};
