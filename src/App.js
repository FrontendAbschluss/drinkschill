import './App.css';
// import logo from "logo.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import cocktaildetail from "./components/cocktaildetail";
import cocktaillist from "./components/cocktaillist";
import AddDrink from "./components/AddDrink";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cocktaildetail" exact component={cocktaildetail} />
          <Route path="/cocktaillist" exact component={cocktaillist} />
          <Route path="/add-drink" component={AddDrink} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;