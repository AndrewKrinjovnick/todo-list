import { useLayoutEffect, useState } from "react";

const sortMap = {
  asc: (list, sortProp) =>
    [...list].sort((a, b) => (a[sortProp] > b[sortProp] ? 1 : -1)),
  desc: (list, sortProp) =>
    [...list].sort((a, b) => (a[sortProp] < b[sortProp] ? 1 : -1)),
};

export const useSort = (list, sortProp, initMode) => {
  const [sortedList, setSortedList] = useState(list);
  const [sortMode, setSortMode] = useState(initMode);

  const onSort = (event) => {
    setSortMode(event.target.value);
  };

  useLayoutEffect(() => {
    const currentSortMode =
      typeof sortMode === "object" ? sortMode.value : sortMode;

    setSortedList(
      currentSortMode === "default"
        ? list
        : sortMap[currentSortMode](list, sortProp)
    );
  }, [sortMode, sortProp, list]);

  return { onSort, setSortMode, sortedList, sortMode };
};
