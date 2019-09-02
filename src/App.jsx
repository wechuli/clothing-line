import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/ShopPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop}/>
      </Switch>
    </>
  );
}

export default App;
