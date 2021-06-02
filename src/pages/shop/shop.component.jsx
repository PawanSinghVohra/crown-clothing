import React from "react";
import SHOP_DATA from "../../shopingdData";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
export default class Shop extends React.Component {
  state = {
    collections: SHOP_DATA,
  };


  render() {
      const {collections}=this.state;
        return (collections.map((item) => (
      <CollectionPreview key={item.id} {...item} />
    )));
  }
}
