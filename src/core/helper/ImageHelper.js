import { CardMedia } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { API } from "../../backend";

const ImageHelper = ({ productId, imageUrl }) => {
  return (
    <ImageHelperMain>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="240"
        image={imageUrl}
        title="Contemplative Reptile"
      />
    </ImageHelperMain>
  );
};

export default ImageHelper;

const ImageHelperMain = styled.div`
  img {
    @media (max-width: 660px) {
      height: 140px;
    }
  }
`;
