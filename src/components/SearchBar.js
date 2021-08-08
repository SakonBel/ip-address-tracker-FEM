import React, { useEffect, useState } from "react";
import arrow from "../images/icon-arrow.svg";

const SearchBar = ({ pattern }) => {
  const { domain, ipAddress, ifDomain, ifIP } = pattern;
  const [size, setSize] = useState(window.innerWidth);
  const [typeText, setTypeText] = useState("");
  const [typeAddress, setTypeAddress] = useState("");

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const typeValue = e.target.value;
    if (ifIP.test(typeValue)) {
      const result = ipAddress.test(typeValue);

      if (result) {
        setTypeAddress("valid");
        console.log(typeAddress);
      } else {
        setTypeAddress("invalid");
        console.log(typeAddress);
      }
    } else if (ifDomain.test(typeValue)) {
      const result = domain.test(typeValue);

      if (result) {
        setTypeText("valid");
        console.log(typeText);
      } else {
        setTypeText("invalid");
        console.log(typeText);
      }
    } else {
      setTypeAddress("");
      setTypeText("");
    }
  };

  return (
    <div className="search-box">
      <form className="flex justify-center items-center mx-auto max-w-lg">
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
        <button className="bg-black h-14 w-16 px-2 flex items-center justify-center rounded-r-xl hover:bg-gray-800">
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
