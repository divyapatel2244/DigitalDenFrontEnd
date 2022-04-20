import { Button, List, SwipeableDrawer } from "@mui/material";
import { Container } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { isAuthenticated } from "../user/helper/signinHelper";
// import { isAuthenticated, signout } from "../auth/helper";

const Menu = () => {
  const [drawer, setDrawer] = useState(false);

  const history = useHistory();

  
  

  const handleOpen = () => {
    return setDrawer(true);
  };

  const handleClose = () => {
    return setDrawer(false);
  };

  const list = () => {
    return (
      <>
        <Link to="/">
          <Button color="primary" size="large">
            Home
          </Button>
        </Link>
        <Link to="/cart">
          <Button color="primary" size="large">
            Cart
          </Button>
        </Link>
        {isAuthenticated()  && (
          <Link to="/admin/dashboard">
            <Button color="primary" size="large">
              Admin Dashboard
            </Button>
          </Link>
        )} 
        {isAuthenticated() && (
          <Link to="/user/dashboard">
            <Button color="primary" size="large">
              User Dashboard
            </Button>
          </Link>
         )} 

        {!isAuthenticated() && (
          <Fragment>
            <Link to="/signup">
              <Button color="primary" size="large">
                Signup
              </Button>
            </Link>
            <Link to="/signin">
              <Button color="primary" size="large">
                Sign in
              </Button>
            </Link>
          </Fragment>
        )}       

         {isAuthenticated() && ( 
          <Link>
            <Button
              color="secondary"
              size="large"
              onClick={() => {
                localStorage.removeItem("Customer");
                history.push("/");
                window.location.reload(false);
              }}
            >
              LogOut
            </Button>
          </Link>
         )} 
      </>
    );
  };

  return (
    <MenuMain>
      <Container>
        <Brand>
          <Link to="/">
            {/* <Img
              alt="Brand Logo"
              src="https://firebasestorage.googleapis.com/v0/b/myphotobook-f86ff.appspot.com/o/Image%2FDigital_Den__1_-removebg-preview.png?alt=media&token=38e5917c-31aa-4590-982c-07088e406233"
            /> */}

            <H1>
              DIGITAL DEN
            </H1>
          </Link>
        </Brand>
        <MenuLinkButton>{list()}</MenuLinkButton>
        <MenuLinkButtonsMobile>
          <div onClick={handleOpen}>
            <MenuIcon />
          </div>
          <SwipeableDrawer
            anchor="right"
            open={drawer}
            onClose={handleClose}
            onOpen={handleOpen}
          >
            {list()}
          </SwipeableDrawer>
        </MenuLinkButtonsMobile>
      </Container>
    </MenuMain>
  );
};

export default Menu;

const MenuMain = styled.div`
  display: flex;
  // font-family: "Limelight", cursive !important;
  background-color: rgba(0, 0, 0, 0);
  object-fit: contain;
  overflow-x: hidden;

  .MuiContainer-root {
    display: flex;
  }
`;

const Brand = styled.div`
  /* font-size: 30px;
  font-family: "Limelight", cursive;
  font-weight: 600;
  letter-spacing: 1px; */

  a {
    text-decoration: none;
    color: #3f51b5;
  }
`;

const H1 = styled.div`
  width: 150px;
  margin: 10px 0px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 20px;
  font-weight: bold;
`

const MenuLinkButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  float: right;
  width: 100vw;
  a {
    text-decoration: none;
  }

  .MuiButtonBase-root {
    /* font-family: "Limelight", cursive !important; */
    font-family: montserrat, sans-serif;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-self: center;
  }

  @media (max-width: 990px) {
    opacity: 0;
  }
`;

const MenuLinkButtonsMobile = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  position: absolute;
  right: 10px;
  top: 10px;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 990px) {
    opacity: 0;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 100px;
`;
