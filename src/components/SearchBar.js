import React from "react";
import arrow from "../images/icon-arrow.svg";

const SearchBar = () => {
  return (
    <div className="search-box">
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search for any IP address or domain"
        />
        <button>
          <img src={arrow} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
