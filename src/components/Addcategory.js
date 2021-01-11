import React, { useState } from "react";
import PropTypes from "prop-types";

const Addcategory = ({ addCategories }) => {
  const [inputValue, setInputValue] = useState(" ");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      addCategories(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        name=""
        id=""
      />
    </form>
  );
};

Addcategory.propTypes = {
  addCategories: PropTypes.func.isRequired,
};

export default Addcategory;
