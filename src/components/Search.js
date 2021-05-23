import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        name="event"
        id="event"
        className="search__input"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
