import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
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
    if (e.keyCode === 13) {
      if (this.state.searchValue.length >= 3) {
        alert(this.state.searchValue);
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
