import axios from "axios";

export const rapidAPIGetTrendingMovies = async () => {
  try {
    const baseAxios = axios.create({
      baseURL: "https://movies-tv-shows-database.p.rapidapi.com/",
      params: {
        title: "Harry Potter",
      },
      headers: {
        Type: "get-movies-by-title",
        "X-RapidAPI-Key": "29d8c874f7msh0ec5096fccc3b3fp16143bjsnfca6b1560938",
        "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
      },
    });

    const response = await baseAxios.get("/");
    return response;
  } catch (error) {
    throw new Error("error fetching the movie search");
    return;
  }
};

export const rapidAPISearchMovies = async (search) => {
  try {
    const baseAxios = axios.create({
      baseURL: "https://movies-tv-shows-database.p.rapidapi.com/",
      params: {
        title: search,
      },
      headers: {
        Type: "get-movies-by-title",
        "X-RapidAPI-Key": "29d8c874f7msh0ec5096fccc3b3fp16143bjsnfca6b1560938",
        "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
      },
    });

    const response = await baseAxios.get("/");
    return response;
  } catch (error) {
    throw new Error("error fetching the movie search");
    return;
  }
};

export const rapidAPIGetPoster = async (search) => {
  try {
    const baseAxios = axios.create({
      baseURL: "https://movies-tv-shows-database.p.rapidapi.com/",
      params: {
        movieid: search,
      },
      headers: {
        Type: "get-movies-images-by-imdb",
        "X-RapidAPI-Key": "29d8c874f7msh0ec5096fccc3b3fp16143bjsnfca6b1560938",
        "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
      },
    });

    const response = await baseAxios.get("/");
    return response;
  } catch (error) {
    throw new Error("error fetching the movie search");
    return;
  }
};
