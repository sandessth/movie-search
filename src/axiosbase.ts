import axios from "axios";

export const rapidAPIGetTrendingMovies = async () => {
  try {
    const baseAxios = axios.create({
      baseURL: "https://movies-tv-shows-database.p.rapidapi.com/",
      params: { page: "1" },
      headers: {
        Type: "get-trending-movies",
        "X-RapidAPI-Key": "cc17bd27bemsh58b41ef101ada87p1a0524jsn16ea5cc06edf",
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
