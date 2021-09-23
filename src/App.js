import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import cocktaildetail from "./components/cocktaillist";

function App() {
  return (
    <Router>
            <div>
                <Switch>
                    <Route path="/cocktaildetail" exact component={cocktaildetail} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
