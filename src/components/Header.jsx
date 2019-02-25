import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="hero is-small is-light is-bold">
        {/* Hero Head */}
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a href="#Bulma" className="navbar-item">
                  <img src="book.png" alt="Book Finder" className="is-96x96" />
                </a>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a href="#Home" className="navbar-item is-active">
                    Home
                  </a>
                  <a href="#Project" className="navbar-item">
                    Project
                  </a>
                  <span className="navbar-item">
                    <a
                      href="#Download"
                      className="button is-primary is-inverted"
                    >
                      <span className="icon">
                        <i className="fa fa-github" />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Hero Body */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Book Finder</h1>
            <h2 className="subtitle">Powered By Google API</h2>
            <div id="search-form" className="columns">
              <div className="column is-half is-offset-one-quarter">
                {/* Search Component as a child to Header */}
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
    </React.Fragment>
  );
};

export default Header;
