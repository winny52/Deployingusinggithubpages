import React from "react";
import SearchBar from "./SearchBar";

const Home = ({ onSearch }) => {
  const backgroundImg =
    "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80";

  return (
    <div
      className="h-96 bg-cover bg-center flex flex-col items-center justify-center p-4 mb-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="text-4xl font-bold text-white mb-4 mt-4">
        Welcome To Your BookFinder App
      </h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Home;
