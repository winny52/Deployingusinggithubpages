import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate=useNavigate();


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearchClick = () => {
    onSearch(searchQuery); navigate("/books"); 

  };
  return (
    <div className="flex justify-center items-center ">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Enter book title..."
      />
      <button
        onClick={handleSearchClick}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-r-md focus:outline-none focus:ring focus:border-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
