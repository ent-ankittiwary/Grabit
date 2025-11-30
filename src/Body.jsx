import { useState } from "react";
import ResCard from "./ResCard";
import { resList } from "./utils/resList";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // FIX: show all restaurants initially
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState("");
  return (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={() => {
              const filteredSearch = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredSearch);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.rating?.aggregate_rating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((resItem) => (
          <ResCard
            key={resItem?.info?.resId ?? resItem?.id}
            resDetail={resItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
