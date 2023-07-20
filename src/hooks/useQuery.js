import { useContext, useEffect, useRef, useState } from "react";
import { QueryClientContext } from "../providers/QueryClientProvider";

export const useQuery = (key, request, enabled = true) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const mountRef = useRef(true);

  const { dataMap, fetchMap, addData, addRequest } =
    useContext(QueryClientContext);

  const refetch = async (...params) => {
    let data;

    const mount = mountRef.current;

    try {
      mount ? setLoading(true) : setIsFetching(true);
      data = await request(...params);
      addRequest(key, request);
      addData(key, data);
    } catch (err) {
      if (typeof err == "object") {
        setError(err.message);
      } else {
        setError(err);
      }
    } finally {
      mount ? setLoading(false) : setIsFetching(false);
    }

    setData(data);
  };

  useEffect(() => {
    if (fetchMap[key]) {
      setData(dataMap[key]);
      return;
    }

    enabled && refetch();
  }, [enabled]);

  useEffect(() => {
    mountRef.current = false;

    let timer = setTimeout(() => {
      addRequest(key, null);
      addData(key, null);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return { error, data, loading, isFetching, refetch };
};
