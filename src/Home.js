import React from "react";
import SearchBar from "./SearchBar";

const Home = ({ onSearch }) => {
  const backgroundImg =
    "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80";

  return (
    <div
      className="fw-full h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 mb-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="text-4xl font-bold text-blue mt-1">
        Welcome To Your BookFinder App
      </h1>

      <p className="text-lg  text-center">
        Discover your next favorite book with ease. BookFinder is your one-stop
        destination for finding books on various topics, genres, and interests.
        Whether you're an avid reader, a student, or just looking for your next
        adventure, we've got you covered.<br></br>
        Use our powerful search bar to explore a vast collection of books from
        renowned authors and publishers. Simply enter the book title, author, or
        keywords, and let BookFinder do the magic.
      </p>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Home;
