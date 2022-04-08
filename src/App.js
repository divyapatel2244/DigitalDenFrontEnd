import './App.css';
// import SignIn from './SignIn.js';
import Product from './Products.js';
import {
  BrowserRouter as Route
} from "react-router-dom";
// import Switch from "react-router-dom"; 
function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      {/* <Route path="/">
        <SignIn />
      </Route> */}
      
      <Route path="/product">
          <Product/>
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;
