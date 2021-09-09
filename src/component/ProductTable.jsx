import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends React.Component {
  render() {
    let last;
    const categoryList = [];
    this.props.data.forEach(item => {
      if (item.name.indexOf(this.props.filterText) === -1) return;
      if (this.props.inStockOnly && !item.stocked) {
        return;
      }
      if (item.category !== last) {
        categoryList.push(
          <ProductCategoryRow key={item.category} data={item.category} />
        );
      }
      categoryList.push(<ProductRow key={item.name} data={item} />);
      last = item.category;
    });
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>{categoryList}</tbody>
        </table>
      </div>
    );
  }
}
