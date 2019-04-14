import http from "./http";
import jwtDecode from "jwt-decode";
import { apiEndPoint } from "./config.json";
const apiUrl = `${apiEndPoint}/auth`;
const tokenKey = "token";

http.setJwt(getUserToken());
export async function login(user) {
  const { data: jwt } = await http.post(apiUrl, user);
  localStorage.setItem(tokenKey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function storeToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export function getUserToken() {
  return localStorage.getItem(tokenKey);
}

export default {
  logout,
  storeToken,
  login,
  getUserToken,
  getCurrentUser
};
