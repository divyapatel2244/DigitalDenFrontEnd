import axios from "axios";
import { API } from "../../backend";

export const signin =  (user) => {
    console.log(user);
    return axios.post(`${API}/customer/signin`,user
    )
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err));
  };

  export const isAuthenticated = () => {
   
    if (localStorage.getItem("Customer")) {
      return JSON.parse(localStorage.getItem("Customer"));
    } else {
      return false;
    }
  };
  
  