import React, { createContext, useEffect, useState } from "react";
import { rapidAPIGetMovieByGenre } from "../axiosbase";

const initialData = [];

export const DataContext = createContext(initialData);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    void fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: unknown[] = await rapidAPIGetMovieByGenre();
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};
