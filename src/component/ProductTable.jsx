import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name</li>
          <li>Price</li>
        </ul>
        <ProductCategoryRow></ProductCategoryRow>
        <ProductRow></ProductRow>
      </div>
    );
  }
}
