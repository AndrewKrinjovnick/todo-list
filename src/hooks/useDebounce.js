import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 300) => {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debValue;
};
