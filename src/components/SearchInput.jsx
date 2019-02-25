import React from "react";

const SearchInput = (props) => {
  return (
    <React.Fragment>
      <div className="field">
        <div className="control has-icons-left is-large is-loading">
          <input
            type="text"
            className="input is-large is-rounded"
            placeholder="Search"
            name="search"
            value={props.value}
          />
          <span className="icon is-medium is-left">
            <i className="fa fa-search" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchInput;
