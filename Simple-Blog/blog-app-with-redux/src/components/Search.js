import React, { useEffect, useState } from "react";
import searchImg from "../assets/search.svg";
import { useDispatch } from "react-redux";
import { change_by_search } from "../redux/blogs/actions";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const debounceSearch = useDebounce(text, 2000);
  useEffect(() => {
    dispatch(change_by_search(debounceSearch));
  }, [dispatch, debounceSearch]);

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        // type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setText(e.target.value)}
      />

      <img className="inline h-6 cursor-pointer" src={searchImg} alt="Search" />
    </div>
  );
};

export default Search;
