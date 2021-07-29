import Cell from "./cell";

function Row({ book }) {
  const tableCells = (book) => {
    let bookInfo = [];

    for (let prop in book) {
      bookInfo.push(<Cell key={book.id} data={book[prop]} />);
    }

    return bookInfo;
  };

  return <tr>{tableCells(book)}</tr>;
}

Row.propTypes = {};

export default Row;
