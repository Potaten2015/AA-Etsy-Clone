import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Browse from "./components/Browse"
import ProductPage from "./components/ProductPage";
import UserProfile from "./components/UserProfile";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path="/home">
            <Browse isLoaded={isLoaded}/>
          </Route>

          <Route path="/item/:id">
            <ProductPage isLoaded={isLoaded}/>
          </Route>

          <Route path="/profile/:id">
            <UserProfile isLoaded={isLoaded}/>
          </Route>

          <Route path="/cart">
            <Cart isLoaded={isLoaded}/>
          </Route>

          <Route path="/">
          <Browse isLoaded={isLoaded}/>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
