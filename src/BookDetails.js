import React from "react";

const BookDetails = ({ books,selectedBook }) => {
const filteredBooks=
  books.filter ((book)=>{
    const bookId = selectedBook
    return book.id ===bookId
  })

   
  return (
    <div>
      <h2>Book Details</h2>
    
      
            <p>Edition: {filteredBooks.edition}</p>
            <p>Format: {filteredBooks.format}</p>
            <p>Number of Pages: {filteredBooks.num_pages}</p>
            <p>Rating: {filteredBooks.rating}</p>
            <p>Rating Count: {filteredBooks.rating_count}</p>
            <p>Review Count: {filteredBooks.review_count}</p>
            <p>Genres: {filteredBooks.genres}</p>
            <p>Genre List: {filteredBooks.genre_list}</p>
        
      
    </div>
  );
};

export default BookDetails;
