import React, { Component } from "react";
import shopData from "../../data/shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData
    };
  }
  render() {
    const {collections} = this.state;
    return <div className="shop-page">
     {
       collections.map(collection => (<CollectionPreview key={collection.id} {...collection}/>))
     }
    </div>;
  }
}

export default Shop;
