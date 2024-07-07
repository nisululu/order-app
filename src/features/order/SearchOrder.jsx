import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-md bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 sm:w-64"
      />
    </form>
  );
};

export default SearchOrder;
