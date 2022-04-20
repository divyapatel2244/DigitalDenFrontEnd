import axios from "axios";
import { API } from "../../backend";

export const signup = (user) => {
    console.log(user);
  return fetch(`${API}/customer`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
        console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
};