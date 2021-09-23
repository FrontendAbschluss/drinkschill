import './App.css';
import AddDrink from './components/AddDrink';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import cocktaildetail from "./components/cocktaillist";
import AddDrink from './components/AddDrink';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cocktaildetail" exact component={cocktaildetail} />
          <Route path="/adddrink" component={AddDrink} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;