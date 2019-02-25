import axios from "axios";

const getBooks = (URL, params = {}) => {
  axios
    .get(URL)
    .then(result => {
      console.log(result.data );
    })
    .catch(err => {
      console.log(err);
    });
};

export default getBooks;
