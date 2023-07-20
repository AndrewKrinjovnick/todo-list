import { createContext, useState } from "react";

export const QueryClientContext = createContext({});

export const QueryClientProvider = ({ children }) => {
  const [fetchMap, setFetchMap] = useState({});
  const [dataMap, setDataMap] = useState({});

  const addRequest = (key, callback) => {
    setFetchMap((prevFetchMap) => ({
      ...prevFetchMap,
      [key]: callback,
    }));
  };

  const addData = (key, data) => {
    setDataMap((prevDataMap) => ({
      ...prevDataMap,
      [key]: data,
    }));
  };

  const value = { dataMap, fetchMap, addData, addRequest };

  return (
    <QueryClientContext.Provider value={value}>
      {children}
    </QueryClientContext.Provider>
  );
};
