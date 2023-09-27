import React from "react";

const BookDetails = ({ books, selectedBook }) => {
  // const filteredBooks = books.filter((book) => book.id === selectedBook);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{book.title}</h2>
          <p>Edition: {book.edition}</p>
          <p>Format: {book.format}</p>
          <p>Number of Pages: {book.num_pages}</p>
          <p>Rating: {book.rating}</p>
          <p>Rating Count: {book.rating_count}</p>
          <p>Review Count: {book.review_count}</p>
          <p>Genres: {book.genres}</p>
          <p>Genre List: {book.genre_list}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
