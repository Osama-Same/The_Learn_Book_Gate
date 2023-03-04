import axios from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:5000/";
export async function _getAllBook() {
    const res = await axios.get(url + "book");
    if (res.data) {
      return res.data;
    } else {
      toast.error("Error server");
    }
  }
export async function _searchBookTitle() {
    const res = await axios.get(url + "search");
    if (res.data) {
      return res.data;
    } else {
      toast.error("Error server");
    }
  }


