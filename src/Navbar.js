// Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // Make sure you have installed react-router-dom

const Navbar = () => {
  return (
    <div className="flex justify-end p-6 bg-blue-500">
      <nav>
      
            <Link to="/">Home</Link>
      
            <Link to="/books" className="m-6">Library</Link>
          
            <Link to="/books.id">More</Link>
         
        
      </nav>
    </div>
  );
};

export default Navbar;
