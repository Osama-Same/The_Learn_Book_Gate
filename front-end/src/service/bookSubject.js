import axios from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:5000/";

export async function _getBookSubject() {
  const res = await axios.get(url + "book_Subject");
  if (res.data) {
    return res.data;
  } else {
    toast.error("Error server");
  }
}

export async function _newBookSubject(book_Subject) {
  const res = await axios.get(url + "book_Subject", book_Subject);
  if (res.data) {
    return res.data;
  } else {
    toast.error("Error server");
  }
}
