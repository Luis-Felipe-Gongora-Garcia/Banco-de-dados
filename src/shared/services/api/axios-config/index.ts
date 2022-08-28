import axios from "axios";
import { errorInterceptor, ResponseInterceptor } from "./interceptors";

const Api = axios.create({
  baseURL: "http://localhost:3333",
});

Api.interceptors.response.use(
  (response) => ResponseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { Api };
