import axios from "axios";
import { type Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_API_KEY;


interface FetchMoviesProps {
  query: string;
  page?: number;
}

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies({
  query,
  page = 1, 
}: FetchMoviesProps): Promise<MovieResponse> {
  const url = "https://api.themoviedb.org/3/search/movie";

  const response = await axios.get<MovieResponse>(url, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page, 
    },
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  });

  return response.data;
}