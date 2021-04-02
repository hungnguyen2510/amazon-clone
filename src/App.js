import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    return auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        ///logged in
        dispatch(
          login({
            user: [
              {
                email: authUser.email,
              },
            ],
          })
        );
      } else {
        ///logged out
        dispatch(
          logout({
            user: null,
          })
        );
      }
    });
  }, []);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
