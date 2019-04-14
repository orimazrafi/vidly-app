import http from "./http";
import { apiEndPoint } from "./config.json";
const apiUrl = `${apiEndPoint}/users`;

export function register(user) {
  return http.post(apiUrl, user);
}
