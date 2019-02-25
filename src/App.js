import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SearchInput from "./components/SearchInput";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <SearchInput />
        </Header>
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
