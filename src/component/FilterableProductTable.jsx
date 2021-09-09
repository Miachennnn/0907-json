import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends React.Component {
  state = {
    filterText: "",
    inStockOnly: false,
  };
  handleChange(e) {
    if (e.target.name === "filterText") {
      this.setState({ filterText: e.target.value });
    } else {
      this.setState({ inStockOnly: e.target.checked });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <SearchBar
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterText={e => this.handleChange(e)}
              onInStockOnly={e => this.handleChange(e)}
            />
            <ProductTable
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              data={this.props.data}
            />
          </div>
        </div>
      </div>
    );
  }
}
