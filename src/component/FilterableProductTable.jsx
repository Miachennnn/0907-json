import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="container-sm">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}
