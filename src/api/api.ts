import { Film } from "../models/film";
import { FilmOverview } from "../models/filmOverview";

export const fetchFilms = (
  searchTerm: string,
  page: number
): Promise<{ Search: Film[] }> => {
  return fetch(
    `http://www.omdbapi.com?apikey=2eb96f3f&s=${searchTerm}&type=movie&plot=short&page=${page}`
  ).then((response) => {
    return response.json();
  });
};

export const getFilmById = (imdbID: string): Promise<FilmOverview> => {
  return fetch(
    `http://www.omdbapi.com?apikey=2eb96f3f&i=${imdbID}&plot=short`
  ).then((response) => {
    return response.json();
  });
};
