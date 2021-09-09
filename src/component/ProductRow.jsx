import React from "react";

export default class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.price}</td>
      </tr>
    );
  }
}
