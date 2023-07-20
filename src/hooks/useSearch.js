import { useLayoutEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearch = (list, searchProp, initState = "") => {
  const [searchValue, setSearchValue] = useState(initState);
  const [searchList, setSearchList] = useState(list);
  const debSearchValue = useDebounce(searchValue);

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useLayoutEffect(() => {
    setSearchList(
      list.filter((item) =>
        item[searchProp]
          .toLowerCase()
          .trim()
          .includes(debSearchValue.toLowerCase())
      )
    );
  }, [list, searchProp, debSearchValue]);

  return {
    onSearch,
    searchValue,
    setSearchValue,
    searchList,
  };
};
