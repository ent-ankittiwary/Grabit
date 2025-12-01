import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import "./shimmer.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);   // 🔹 added
  

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
    setLoading(false);   // 🔹 stop shimmer
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Show shimmer until data loads
  if (loading) {
    return <Shimmer />;
  }

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
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((resItem) => (
          <ResCard key={resItem?.info?.id} resDetail={resItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
