import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) =>
              isAuth ? (
                <Home {...props} setIsAuth={setIsAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuth ? (
                <Login {...props} setIsAuth={setIsAuth} />
              ) : (
                <Redirect to="/home" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuth ? (
                <Register {...props} setIsAuth={setIsAuth} />
              ) : (
                <Redirect to="/home" />
              )
            }
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
