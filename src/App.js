import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
import { API_URL, API_URL_FIELDS } from "./constants/constants";
class App extends Component {
  state = {
    searchValue: "",
    isLoading: false,
    booksData: [],
    error: null
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
        this.getBooks(API);
      } else {
        console.log(e);
      }
    }
  };

  getBooks = URL => {
    this.setState({ isLoading: true });
    axios
      .get(URL)
      .then(result => {
        this.setState({
          booksData: result.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err,
          isLoading: false
        });
      });
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
