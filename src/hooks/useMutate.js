import { useState } from "react";

export const useMutate = (request) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const mutate = async (...options) => {
    let data;

    try {
      setLoading(true);
      data = await request(...options);
    } catch (err) {
      if (typeof err == "object") {
        setError(err);
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }

    setData(data);
  };

  return { error, data, loading, mutate };
};
