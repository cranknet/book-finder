import React from "react";
import Spinner from "./Spinner";
import BookCard from "./BookCard";
const Main = props => {
  const Loading = props.isLoading ? <Spinner /> : undefined;
  const isDataLoaded =
    props.isDataLoaded && props.data.totalItems > 0 ? (
      <BookCard data={props.data} />
    ) : (
      <div className="column">
        <h3 className="is-size-5 has-text-danger has-text-centered has-text-weight-bold">
          No Books, Try to search!
        </h3>
      </div>
    );
  return (
    <React.Fragment>
      {/* Books Cards */}
      <section className="section">
        <div className="container">
          {Loading}
          <div className="columns is-mobile is-multiline">{isDataLoaded}</div>
        </div>
      </section>
      {/* End Books Cards */}
    </React.Fragment>
  );
};

export default Main;
