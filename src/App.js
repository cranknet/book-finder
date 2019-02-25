import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import getBooks from "./helpers/Helpers";
import { API_URL, API_URL_FIELDS } from "./constants/constants";
class App extends Component {
  state = {
    searchValue: "",
    isLoading: false
  };
  handleInput = value => {
    this.setState({
      searchValue: value
    });
  };
  handleSearch = e => {
    const { searchValue } = this.state;
    if (e.keyCode === 13) {
      if (searchValue.length >= 3) {
        const API = `${API_URL}${searchValue}&fields=${API_URL_FIELDS}`;
        getBooks(API);
      } else {
        console.log(e);
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header>
          <SearchInput
            handler={this.handleInput}
            keyUpHandler={this.handleSearch}
            {...this.state}
          />
        </Header>
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
