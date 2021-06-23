import axios from "axios";

export const usersClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-type": "application/json"
  }
});