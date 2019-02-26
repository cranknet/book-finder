import React from "react";
import booksDataHelper from "../helpers/booksDataHelper";
const BookCard = props => {
  const booksData = props.data.items;
  const {
    titleHandler,
    authorsHandler,
    descriptionHandler,
    imageHandler,
    linkHandler,
    publishedDateHandler,
    publisherHandler
  } = booksDataHelper;
  return (
    <React.Fragment>
      {booksData.map(book => {
        const {
          title,
          authors,
          description,
          imageLinks,
          infoLink,
          publishedDate,
          publisher
        } = book.volumeInfo;
        return (
          <div className="column is-one-quarter-desktop is-half-tablet is-half-mobile">
            <div className="card">
              <div className="card-image">
                <figure className="image is-square">
                  <img src={imageHandler(imageLinks)} alt="Book" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-5">
                      <a
                        href={linkHandler(infoLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {titleHandler(title)}
                      </a>
                    </p>
                    <span className="subtitle is-6 has-text-weight-bold">
                      Author: {authorsHandler(authors)}
                    </span>
                    <br />
                    <span className="subtitle is-6 has-text-weight-bold">
                      Publisher: {publisherHandler(publisher)}
                    </span>
                  </div>
                </div>
                <div className="content">
                  {descriptionHandler(description)}
                  <br />
                  <span className="has-text-grey has-text-weight-bold">
                    Date: 
                    <time dateTime={publishedDateHandler(publishedDate)}>
                      {publishedDateHandler(publishedDate)}
                    </time>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default BookCard;
