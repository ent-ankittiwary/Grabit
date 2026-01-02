import { useState, useEffect } from "react";
import ResCard,{withOfferLabel} from "./ResCard";
import ShimmerMenu from "./ShimmerMenu.jsx";
import "./shimmer.css";
import resList from "./utils/resList";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardLabel = withOfferLabel(ResCard); //Higher Order Component

  const [loading, setLoading] = useState(true); // 🔹 added

  const fetchData = async ( ) => {
    // const response = await fetch(MAIN_API);
    // const json = await response.json();
    // console.log(json);

    const restaurants = await resList;
    // console.log(restaurants);

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
    setLoading(false); // 🔹 stop shimmer
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Show shimmer until data loads
  if (loading) {
    return <ShimmerMenu />;
  }

  return (
    <div className="body">
      <div className="flex justify-between m-3 items-center">
        <div className="flex justify-evenly gap-3">
          <input
            type="text"
            className="border-2 border-black rounded-xl px-3 py-2 font-extrabold"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button className="hover:bg-blue-500 hover:text-white transition rounded-xl font-medium text-gray px-3"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="hover:bg-blue-500 hover:text-white transition rounded-xl font-medium text-gray px-3 py-3"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.rating?.rating_text > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

<div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 px-8 py-6 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
  {filteredRestaurant.map((resItem) =>
    resItem.isPromoted ? (
       <RestaurantCardLabel
        key={resItem?.info?.resId}
        resDetail={resItem} 
        />
     
    ) : (
       <ResCard
        key={resItem?.info?.resId}
        resDetail={resItem}
      />
    )
  )}
</div>

    </div>
  ); 
};

export default Body;
