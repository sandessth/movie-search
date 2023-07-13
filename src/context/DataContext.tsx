import React, { createContext, useEffect, useState } from "react";
import {
  rapidAPIGetPoster,
  rapidAPIGetTrendingMovies,
  rapidAPISearchMovies,
} from "../axiosbase";

const initialData = [];

export const DataContext = createContext(initialData);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    void fetchData();
  }, []);

  const fetchSearch = async (searchParam: string) => {
    try {
      const response: unknown[] = await rapidAPISearchMovies(searchParam);
      setData(response.data.movie_results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response: unknown[] = await rapidAPIGetTrendingMovies();
      setData(response.data.movie_results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPoster = async (id: string) => {
    try {
      const response: unknown[] = await rapidAPIGetPoster(id);
      setData(response.data.movie_results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DataContext.Provider value={{ data: data || initialData, fetchSearch }}>
      {children}
    </DataContext.Provider>
  );
};
