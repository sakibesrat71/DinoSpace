import './css/index.css';
import Home from './FrontPage/Home';
import LogIn from './auth/LogIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './auth/SignUp';


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
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
