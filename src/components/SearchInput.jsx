import React, { Component } from "react";

export default class SearchInput extends Component {
  handleChange = e => {
    this.props.handler(e.target.value);
  };
  handleKeyUp = e => {
    this.props.keyUpHandler(e);
  };

  render() {
    const { isLoading, searchValue } = this.props;
    const inputSpinner = isLoading ? "is-loading" : "";
    return (
      <React.Fragment>
        <div className="field">
          <div className={`control has-icons-left is-large ${inputSpinner}`}>
            <input
              type="text"
              className="input is-large is-rounded"
              placeholder="Search"
              name="search"
              value={searchValue}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp}
            />
            <span className="icon is-medium is-left">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
