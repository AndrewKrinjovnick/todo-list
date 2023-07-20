import { useLayoutEffect, useState } from "react";

export const useFilter = (list, initFilter) => {
  const [filteredList, setFilteredList] = useState(list);
  const [filterValue, setFilterValue] = useState(initFilter);

  const onFilter = (event) => {
    setFilterValue(event.target.value);
  };

  useLayoutEffect(() => {
    setFilteredList(
      filterValue === "all"
        ? list
        : list.filter((item) => {
            if (filterValue.slice(0, 3) === "not") {
              return !item[filterValue.slice(3).toLowerCase()];
            }

            return item[filterValue];
          })
    );
  }, [filterValue, list]);

  return { filteredList, filterValue, onFilter, setFilteredList };
};
