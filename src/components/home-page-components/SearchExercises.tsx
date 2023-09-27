import { useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { filterExercises } from "../../features/exercise/exerciseSlice";

import { getSearchTerms } from "../../features/searchTerm/searchTermSlice";
import useOutsideClick from "../../hooks/useOutsideClick";

const SearchExercises = () => {
  const wrapperRef = useRef(null);
  const checkOutsideClick = useOutsideClick(wrapperRef);

  const [search, setSearch] = useState<string>("");
  const [searchOnFocused, setSearchOnFocused] = useState(false);

  const dispatch = useAppDispatch();

  const searchTerms: string[] = useAppSelector(getSearchTerms);

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSearch(search);
    }
  };

  const handleSearch = (searchedTerm: string) => {
    if (searchedTerm) {
      dispatch(filterExercises({ search: searchedTerm }));
      setSearch("");
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }
  };

  const handleBlur = () => {
    if (!checkOutsideClick) setSearchOnFocused(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 mt-10 font-sans">
      <p className="font-bold text-3xl lg:text-5xl mb-[50px] text-center">
        Awesome Exercises You <br />
        Should Know
      </p>
      <div className="relative">
        <div className="flex flex-nowrap">
          <input
            className="px-4 h-[46px] sm:h-[56px] text-lg sm:text-xl desktop:text-2xl font-semibold rounded-s-lg w-[60vw] bg-white border-2 outline-none"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            onKeyDown={handleKeyPress}
            onFocus={() => {
              setSearchOnFocused(true);
            }}
            onBlur={handleBlur}
          />
          <button
            className="m-0 search-btn bg-accent-light-color-1 text-white w-[90px] sm:w-[175px] text-lg sm:text-xl h-[46px] sm:h-[56px] rounded-e-lg border-none outline-none font-semibold hover:bg-[#fc4846]"
            onClick={() => handleSearch(search)}
          >
            Search
          </button>
        </div>
        <div
          ref={wrapperRef}
          className={`absolute top-[46px] sm:top-[56px] z-[1000]  bg-white flex flex-col border-2 empty:border-none search-box-w sm:search-box-sm-w rounded-lg ${
            searchOnFocused ? `block` : `hidden`
          }`}
        >
          {searchTerms
            .filter(
              (item) =>
                search &&
                item.toLowerCase().startsWith(search.toLowerCase()) &&
                item.toLowerCase() !== search.toLowerCase()
            )
            .slice(0, 5)
            .map((item) => (
              <div
                key={item}
                onClick={() => handleSearch(item)}
                className="m-1 text-xl text-left capitalize cursor-pointer"
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
