import React, { useEffect, useState } from "react";
import arrow from "../images/icon-arrow.svg";

const SearchBar = ({ handleChange, handleSubmit, typeAddress, typeText }) => {
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
      <form
        className="flex justify-center items-center mx-auto max-w-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="h-14 w-full rounded-l-xl pl-7"
          type="text"
          name="search"
          placeholder={
            size && size > 460
              ? "Search for any IP address or domain"
              : "Search for IP or domain"
          }
          onChange={(e) => handleChange(e)}
        />
        <button
          className="bg-black h-14 w-16 px-2 flex items-center justify-center rounded-r-xl hover:bg-gray-800"
          onClick={handleSubmit}
        >
          <img src={arrow} alt="" />
        </button>
      </form>
      {typeText === "invalid" && (
        <p className="text-yellow-400">
          Please insert available domain name. E.g. "google.com"
        </p>
      )}
      {typeAddress === "invalid" && (
        <p className="text-yellow-200">
          Please insert available IP address. E.g. "100.100.100.100"
        </p>
      )}
    </div>
  );
};

export default SearchBar;
