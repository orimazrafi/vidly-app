import aioxs from "axios";
import { toast } from "react-toastify";

aioxs.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    toast("An unexpected error occourred.");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  aioxs.defaults.headers.common["x-auth-token"] = jwt;
}
export default {
  get: aioxs.get,
  post: aioxs.post,
  put: aioxs.put,
  delete: aioxs.delete,
  setJwt
};
