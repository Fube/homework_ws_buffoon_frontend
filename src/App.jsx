import { useEffect } from "react";
import { Container } from "react-bootstrap"
import { useCookies } from "react-cookie";
import { useDispatch, useSelector, useStore } from "react-redux";
import getUserInfo from "./api/getUserInfo";
import './App.css';
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import { login, setToken, setUseraname } from "./redux/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector(s=>s);
  const [cookies, setCookie] = useCookies(['token']);

  useEffect(() => {

    if(cookies.token) {
      getUserInfo(cookies.token).then(({ username }) => {

        if(!username)return;
        dispatch(setUseraname({ username }));
        dispatch(setToken({ token: cookies.token }));
        dispatch(login());
      })
      .catch(e => console.log(e.response))
    }
    else {
      console.log('No token cookie found');
    }
  }, []);

  return (
    <Router>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Navigation />
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
      </Container>
    </Router>
  );
}

export default App;
