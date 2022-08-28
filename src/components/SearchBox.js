import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { FormSerach } from "../styles/SearchBox.styles";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search/" + inputValue);
    setInputValue("");
  };

  return (
    <FormSerach onSubmit={handleSearch}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </FormSerach>
  );
};

export default SearchBox;
