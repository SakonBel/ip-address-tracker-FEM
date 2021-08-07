import React, { useEffect, useState } from "react";
import arrow from "../images/icon-arrow.svg";

const SearchBar = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="search-box">
      <form className="flex justify-center items-center mx-auto max-w-lg">
        <input
          className="h-14 w-full rounded-l-xl pl-7"
          type="text"
          name="search"
          placeholder={
            size > 460
              ? "Search for any IP address or domain"
              : "Search for IP or domain"
          }
        />
        <button className="bg-black h-14 w-16 px-2 flex items-center justify-center rounded-r-xl hover:bg-gray-800">
          <img src={arrow} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
