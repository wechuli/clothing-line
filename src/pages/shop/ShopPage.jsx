import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CategoryPage from "../category/CategoryPage";

const Shop = props => {
  const { match } = props;
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path='/shop' component={CollectionOverview} />
      <Route exact path={`${match.path}`} component={CollectionOverview} />
    </div>
  );
};

export default withRouter(Shop);
