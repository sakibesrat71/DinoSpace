import './css/index.css';
import Home from './FrontPage/Home';
import LogIn from './auth/LogIn';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
