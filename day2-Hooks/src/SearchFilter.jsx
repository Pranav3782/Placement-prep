import { useState } from "react";

function SearchFilter() {

  const [search, setSearch] = useState("");

  const items = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Papaya",
    "Guava"
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredItems.length === 0 && <p>No results found</p>}

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default SearchFilter;