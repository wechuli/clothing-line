import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";

import "./CategoryPage.scss";

const CategoryPage = props => {
  const { match } = props;
  console.log("match here", match);
  return (
    <div className="category">
      <h2>Catgory Page</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect()(CategoryPage);
