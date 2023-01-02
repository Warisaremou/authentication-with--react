import axios from "axios";
import { LOGIN_URL, REGISTER_URL } from "./config";

export const login = (email, password) => {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
};

export const register = (name, email, password) => {
  return axios.post(REGISTER_URL, {
    name,
    email,
    password,
  });
};
