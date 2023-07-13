import axios from "axios";

export const rapidAPIGetMovieByGenre = async () => {
  try {
    const baseAxios = axios.create({
      baseURL: "https://advanced-movie-search.p.rapidapi.com/discover/movie",
      params: {
        with_genres: "80",
        page: "1",
      },
      headers: {
        "X-RapidAPI-Key": "cc17bd27bemsh58b41ef101ada87p1a0524jsn16ea5cc06edf",
        "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
      },
    });

    const response = await baseAxios.get("/");
    return response;
  } catch (error) {
    throw new Error("error fetching the movie search");
    return;
  }
};
