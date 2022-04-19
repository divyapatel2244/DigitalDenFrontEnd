import React, { useEffect, useState } from "react";
import Base from "./Base";
import "../styles.css";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import CardComponent from "./CardComponent";
import { GetAllProducts } from "./helper/coreapicalls";
import {API} from "../backend";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    return axios.get(`${API}/products`, { method: "GET" })
      .then((response) => {
        console.log(response);
        if (response.error) {
          setError(response.error);
        } else {
          setProducts(response.data);
        }
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    loadAllProducts();
  }, []);
  
 if(products.length==0){
   return <CircularProgress />;
 }
  return (
    <Base>
      <Container>
        <HomeMain>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={4} md={3}>
                <CardComponent product={product} />
              </Grid>
            ))}
          </Grid>
        </HomeMain>
      </Container>
    </Base>
  );
};

export default Home;

const HomeMain = styled.div`
  margin: 70px 0px;
  padding: 20px;
`;
