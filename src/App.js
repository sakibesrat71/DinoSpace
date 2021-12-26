import './css/index.css';
import Home from './FrontPage/Home';
import LogIn from './auth/LogIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './auth/SignUp';
import Restaurant from './restaurant/Restaurant';


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
        <Route path="/Restaurant">
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
