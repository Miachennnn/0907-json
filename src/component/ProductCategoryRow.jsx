import React from "react";

export default class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="2" className="table-primary">
          {this.props.data}
        </td>
      </tr>
    );
  }
}
