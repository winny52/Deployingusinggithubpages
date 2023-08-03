import React from "react";

const BookDetails = ({ book }) => {
  
  return (
    <div>
      <h2>Book Details</h2>
    
      
            <p>Edition: {book.edition}</p>
            <p>Format: {book.format}</p>
            <p>Number of Pages: {book.num_pages}</p>
            <p>Rating: {book.rating}</p>
            <p>Rating Count: {book.rating_count}</p>
            <p>Review Count: {book.review_count}</p>
            <p>Genres: {book.genres}</p>
            <p>Genre List: {book.genre_list}</p>
        
      
    </div>
  );
};

export default BookDetails;
