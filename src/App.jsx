import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/ShopPage";
import NavBar from "./components/navbar/NavBar";
import SignInUp from "./pages/sign-in-up/SignInUp";

function App() {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignInUp}/>
      </Switch>
    </>
  );
}

export default App;
