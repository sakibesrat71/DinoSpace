import './css/index.css';
import Home from './FrontPage/Home';
import LogIn from './auth/LogIn';
import SearchResult from './components/searchResult';
import UserSignIn from './auth/UserSignIn';
import UserSignUp from './auth/UserSignUp';
import Profile from './auth/Profile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './auth/SignUp';
import Restaurant from './restaurant/Restaurant';
import RestaurantSignUp from './auth/RestaurantSignUp';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/SearchResult">
          <SearchResult />
        </Route>
        <Route path="/UserSignIn">
          <UserSignIn />
        </Route>
        <Route path="/RestaurantSignUp">
          <RestaurantSignUp />
        </Route>
        <Route path="/UserSignUp">
          <UserSignUp />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Restaurant">
          <Restaurant />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
