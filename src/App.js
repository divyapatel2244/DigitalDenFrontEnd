import './App.css';
import SignIn from './SignIn.js';
 import Product from './Products.js';
 import axios from 'axios';
import Home from './core/Home.js';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ProductDetail from './core/ProductDetail';



// import Switch from "react-router-dom"; 
function App() {
  // return (
    // <div className="App">
    //   <Switch>
    //     <Route path="/" exact component={Product} />
    //   </Switch>
    // {/* <Product/> */}
    // </div>
    let routes = (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/signin'>
              <SignIn />
            </Route>
            <Route exact path="/product">
              <ProductDetail></ProductDetail>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/product/:id">
              <ProductDetail></ProductDetail>
            </Route>
          </Switch>
        </BrowserRouter>
        
        
        {/* <BrowserRouter>
      <Routes> */}
        {/* <Route exact path="/product">
          <Product />
        </Route>

        {/* <Route path="/" exact component={Product} /> */}
        {/* <Route path="/signin" exact component={SignIn} />
      </Routes>
      </BrowserRouter> */}
      </div>
    );
  // );
  return routes;
}

export default App;
