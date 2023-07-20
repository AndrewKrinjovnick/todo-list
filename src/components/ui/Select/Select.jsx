import ReactSelect from "react-select";
import { colors } from "../../../config/colors";

const styles = {
  control: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    backgroundColor: colors.purple[100],
    borderColor: colors.white,
    "&:hover": {
      borderColor: colors.white,
      outline: `2px solid ${colors.lightBlue}`,
    },
    minWidth: "130px",
    boxShadow: "none",
    outline: isFocused ? `2px solid ${colors.lightBlue}` : "none",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    "& svg": {
      color: colors.white,
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: colors.white,
  }),
};

export const Select = (props) => {
  return <ReactSelect styles={styles} isSearchable={false} {...props} />;
};
