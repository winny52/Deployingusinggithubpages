import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import BookList from "./BookList";
import BookDetails from "./BookDetails";

function App() {
  const [books, setBooks] = useState([]);
   const [showDetails, setShowDetails] = useState(false);
   const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    const apiUrl = "https://example-data.draftbit.com/books";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []); 
  const onSearch = (searchQuery) => {
    
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setBooks(filteredBooks);
  };
  const handleShowDetails = (book) => {
    setSelectedBook(book);
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setSelectedBook(null);
    setShowDetails(false);
  };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home onSearch={onSearch} />} />
        <Route
          path="/books"
          element={
            <BookList
              books={books}
              showDetails={showDetails}
              selectedBook={selectedBook}
              onShowDetails={handleShowDetails}
              onHideDetails={handleHideDetails}
            />
          }
        />

        <Route
          path="/books/:id"
          render={({ match }) => {
            const bookId = match.params.id;
            const books = books.find((book) => book.id === bookId);
            return <BookDetails books={books} />;
          }}
        />
      </Routes>
    </div>
  );
}

export default App;
