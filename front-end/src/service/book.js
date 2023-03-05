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

export async function _newBook(book) {
  const res = await axios.post(url + "book", book);
  if (res.data) {
    return res.data;
  } else {
    toast.error("Error server");
  }
}

export async function _detailsBook(_id) {
  const res = await axios.get(url + `book/${_id}`);
  if (res.data) {
    console.log(res.data.result)
    return res.data.result;
  } else {
    toast.error("Error server");
  }
  
}





