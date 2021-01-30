import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth, db } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Register from "./Register";

const promise = loadStripe(
  "pk_test_51I0QjAK4mwNrkM5B9NvRUgsqlu2HziitAmPJFdQIOUu7nRCDIPsoNTIuyIBrpgIckI2H9xyMTD8gxDCpKdpyo7no00asAU4aOe"
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket1 = ({ title, price, rating, img, id }) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };

  useEffect(() => {
    if (user?.email) {
      db.collection("users")
        .doc(user?.email)
        .collection("cart")
        .doc(user?.email)

        .set({
          basket: basket,
        });
    }
  }, [basket]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        db.collection("users")
          .doc(user?.email)
          .collection("cart")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              const data = doc.data();
              if (data) {
                {
                  data.basket.map((item) => addToBasket1(item));
                }
              }
            });
          });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "EMPTY_BASKET",
        });
        const data = localStorage.getItem("basket");
        const da = JSON.parse(data);
        if (da) {
          {
            da.map((item) => addToBasket1(item));
          }
        }
      }
    });
  }, [user]);

  useEffect(() => {
    if (!user) {
      const data = localStorage.getItem("basket");
      const da = JSON.parse(data);
      if (da) {
        {
          da.map((item) => addToBasket1(item));
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!user) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
