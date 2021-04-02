import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IbhHqCio5mE1F62vVdgW0dwKVFIsXNwAwWFXwgBY0cCh9RXFZLaI9t7k7A028tx1gNnKQzztAX2g3uvbLi6X3CL00sNe6mXUt"
);

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
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
