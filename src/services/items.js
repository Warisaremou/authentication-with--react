import axios from "axios";
import { ITEMS_URL } from "./config";

const products = () => {
  return axios
    .get(`${ITEMS_URL}/Product`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export default {
  products,
};
