import http from "./http";
import { apiEndPoint } from "./config.json";
const apiUrl = `${apiEndPoint}/movies`;

export function getMovies() {
  return http.get(apiUrl);
}
export function getMovie(movieId) {
  return http.get(idUrl(movieId));
}
export function addMovie(movie) {
  return http.post(`${apiUrl}`, movie);
}
export function updateMovie(movie) {
  const body = { ...movie };
  delete body._id;
  return http.put(idUrl(movie._id), body);
}
export function deleteMovie(movieId) {
  return http.delete(idUrl(movieId));
}
function idUrl(movieId) {
  return `${apiUrl}/${movieId}`;
}
