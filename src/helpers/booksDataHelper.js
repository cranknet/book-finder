const booksDataHelper = {
  titleHandler: title => {
    if (typeof title === "string") return title;
    return "No Title";
  },
  authorsHandler: authors => {
    if (Array.isArray(authors)) return authors[0];
    return "No Authors";
  },
  descriptionHandler: description => {
    if (typeof description === "string")
      return description.slice(0, 90) + "...";
    return "No Description";
  },
  imageHandler: imageLinks => {
    if (
      typeof imageLinks === "object" &&
      imageLinks.hasOwnProperty("thumbnail")
    )
      return imageLinks["thumbnail"];
  },
  linkHandler: link => {
    if (typeof link === "string") return link;
    return "#No-Link-Provided";
  },
  publisherHandler: publisher => {
    if (typeof publisher === "string") return publisher;
    return "No Publisher";
  },
  publishedDateHandler: pubDate => {
    if (typeof pubDate === "string") return pubDate;
    return "No Date";
  }
};

export default booksDataHelper;
