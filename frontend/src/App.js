import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Browse from "./components/Browse"
import ProductPage from "./components/ProductPage";

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

          <Route path="/browse">
            <Browse isLoaded={isLoaded}/>
          </Route>

          <Route path="/item/:id">
            <ProductPage isLoaded={isLoaded}/>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
