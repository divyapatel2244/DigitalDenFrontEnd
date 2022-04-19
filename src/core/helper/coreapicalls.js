import { API } from "../../backend";
import axios from "axios";
import React, { useState } from "react";

export const GetAllProducts = () => {
   const [product, setProduct] = useState([]);
  
  axios.get(`${API}/products`, { method: "GET" })
    .then((response) => {
      //  console.log(response.data);
      // setProduct(response.data);
      var products = [];
      products = response.data;
      setProduct(products);
       console.log(product);
    })
    .catch((err) => console.log(err));
  return product;
};

export const GetProduct=(id)=>{
  const [product, setProduct] = useState(null);
   axios.get(`${API}/products/${id}`,{method:"GET"})
    .then((response)=>{
      console.log(response);
      setProduct(response);
    })
    .catch((err)=>console.log(err));
    return product;
}
