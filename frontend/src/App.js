import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Browse from "./components/Browse"
import ProductPage from "./components/ProductPage";
import UserProfile from "./components/UserProfile";
import Cart from "./components/Cart";
import Splash from "./components/Splash"
import Footer from "./components/Footer";
import LoginFormModal from "./components/LoginFormModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if(!isLoaded) dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    if(user) setSignedIn(true);
  }, [dispatch, user]);

  return (
    <>
      <>
      {!signedIn &&
      (
        <>
            {isLoaded && (
              <Switch>

                {/* <Route path="/demo">
                  <Demo />
                </Route> */}

                <Route path="/login">
                  <Navigation isLoaded={isLoaded} signedIn={signedIn}/>
                  <LoginFormModal setSignedIn={setSignedIn} signedIn={signedIn}/>
                </Route>

                <Route path="/signup">
                  <SignupFormPage setSignedIn={setSignedIn} signedIn={signedIn}/>
                </Route>

                <Route path="/">
                  <Splash />
                </Route>

              </Switch>
        )}
      </>
      )}
      </>
      {signedIn &&
      (
        <>
          <Navigation isLoaded={isLoaded} setSignedIn={setSignedIn}/>
            {isLoaded && (
              <Switch>

                <Route path="/home">
                  <Browse isLoaded={isLoaded} setSignedIn={setSignedIn}/>
                </Route>

                <Route path="/item/:id">
                  <ProductPage isLoaded={isLoaded} setSignedIn={setSignedIn}/>
                </Route>

                <Route path="/profile/:id">
                  <UserProfile isLoaded={isLoaded} setSignedIn={setSignedIn}/>
                </Route>

                <Route path="/cart">
                  <Cart isLoaded={isLoaded} setSignedIn={setSignedIn}/>
                </Route>

                <Route path="/">
                <Browse isLoaded={isLoaded} setSignedIn={setSignedIn}/>
                </Route>

              </Switch>
        )}
        <Footer />
      </>
      )}
    </>
  );
}

export default App;
