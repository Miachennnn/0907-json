import React from "react";

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            name="filterText"
            value={this.props.filterText}
            onChange={e => this.props.onFilterText(e)}
            type="text"
            placeholder="Search..."
          ></input>
          <p>
            <input
              onChange={e => this.props.onFilterText(e)}
              name="inStock"
              id="onlyInStock"
              type="checkbox"
            ></input>
            <label htmlFor="onlyInStock">Only show products in stock</label>
          </p>
        </form>
      </div>
    );
  }
}
