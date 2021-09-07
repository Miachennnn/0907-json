import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..."></input>
        <input id="onlyInStock" type="checkbox"></input>
        <label htmlFor="onlyInStock">Only show products in stock</label>
      </form>
    );
  }
}
