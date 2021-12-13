import './index.css';
import Home from './Home';
import LogIn from './LogIn';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/logIn">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
