import React from "react";
import { Link } from "react-router-dom";


const BookList = ({
  books,
  showDetails,
  select
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mx-auto mb-4">Available books:</h2>
      <ul className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <li key={book.id} className="mb-6">
            <strong className="text-lg">{book.title}</strong>
            <br />
            <p className="text-gray-600">Author: {book.authors}</p>
            <img
              src={book.image_url}
              alt={book.title}
              className="w-32 h-48 object-cover rounded"
            />
            <div className="mt-2">
              
              <Link to={`/books/${book.id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Show Details
                </button>
              </Link>
            </div>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
