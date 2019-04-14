import http from "./http";
import { apiEndPoint } from "./config.json";

export function getGenres() {
  return http.get(apiEndPoint + "/genres");
}
