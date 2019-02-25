import React from "react";

const Main = () => {
  return (
    <React.Fragment>
      {/* Books Cards */}
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <div className="column is-one-quarter-desktop is-half-tablet is-half-mobile">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <img src="content.jpeg" alt="Book" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Book"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Books Cards */}
    </React.Fragment>
  );
};

export default Main;
