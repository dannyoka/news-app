import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const onTermSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={onTermSubmit} className="form-group">
        <label>Query Term</label>
        <input
          className="form-control"
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
