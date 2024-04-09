import { useState } from "react";
import CancelSvg from "../../assets/_svg/CancelSvg";
import SearchSvg from "../../assets/_svg/SearchSvg";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleCancel = () => {
    setInput("");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="p-2 pt-0 border-2 border-slate-300 rounded focus-within:border-calypso-600">
        <legend className="ml-4 text-calypso-400 text-sm">Search</legend>
        <div className="flex items-center">
          <button
            className="w-5 h-5 flex justify-center items-center"
            onClick={handleSubmit}
          >
            <SearchSvg />
          </button>
          <input
            className="border-none focus:outline-none bg-transparent w-full"
            type="text"
            placeholder="Search by profile, setting, artifact etc..."
            value={input}
            onChange={handleChange}
          />
          <button
            className={`w-5 h-5 rounded-full hover:shadow-[0px_2px_4px_1px_rgba(0,0,0,0.3)] transition flex justify-center items-center ${
              input ? "" : "invisible"
            }`}
            type="cancel"
            onClick={handleCancel}
          >
            <CancelSvg />
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchBar;
