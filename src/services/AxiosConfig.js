import axios from "axios";
import { API_URL } from "../const/consts";

const API = () =>
  axios.create({
    baseURL: API_URL,
    withCredentials: false,
  });

export default API;
