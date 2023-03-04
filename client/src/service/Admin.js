import axios from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:5000/";

export async function login(admin) {
  const res = await axios.post(url + "login",admin);
  if (res.data.result) {
    return res.data.result;
  }else {
    toast.error("Error server");
  }
}
