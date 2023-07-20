import { RadioButton } from "components/ui/RadioButton";
import { Select } from "components/ui/Select";
import styles from "./TodoFilters.module.scss";

export const TodoFilters = ({
  filterValue,
  filters,
  onFilter,
  onSort,
  sortMode,
  sorting,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.btn_wrapper}>
        {filters.map(({ label, value }) => (
          <RadioButton
            key={value}
            onChange={onFilter}
            value={value}
            checked={value === filterValue}
          >
            {label}
          </RadioButton>
        ))}
      </div>
      <Select options={sorting} onChange={onSort} value={sortMode} />
    </div>
  );
};
