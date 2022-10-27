import React, { useState } from "react";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
