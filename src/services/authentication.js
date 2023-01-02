import axios from "axios";
import { LOGIN_URL } from "./config";
import toast, { Toaster } from "react-hot-toast";

// const notificationError = () => toast("User Not Found !");

const login = (email, password) => {
  return axios
    .post(LOGIN_URL, {
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      toast.error("User Not Found");
      // notificationError();
    });
  
};
<Toaster />
export default {
  login,
};
