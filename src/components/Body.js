import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

// creating user defined promise(in order to mimic api call) as my api failed

function fetchRestaurantList(data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
  return promise;
}

const Body = () => {
  // local state variable - Super powerful variable
  // this is one of the hoock that react provide to us
  // whenever this state variable get updated, react re-render its component
  // react is keeping an eye on this use state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]); // this is original list of res, only update once while getting it from api

  // this will act as a copy of list of res, and used to filter res from original list of res
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  // whenever state variable updates, react triggers a reconciliation cycle (re-render the component)

  // Api failled

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   setListOfRestaurant(
  //     json?.data?.cads[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurant(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  // this is another hoock that react provide to us.
  // it takes two parameter callback function and dependency array
  // super power: as soon as rendering process is finished it call this callback function.
  // load -> Render -> API -> Re-render

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const list = await fetchRestaurantList(resList);
    // console.log(list);
    setListOfRestaurant(list);
    setFilteredRestaurant(list);
    // after this line body get rendered and update above both state variable in one render.(can see by debuging)
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!!! Please check your internet Connection.
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-4 flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center gap-4">
        <input
          className="pr-4 pl-1 border-2 w-56 rounded-sm"
          type="text"
          placeholder="Search Your Fav Restaurant"
          value={searchText} // this is read only type
          // this will help us to change the searchText and thus make it editable
          onChange={(e) => {
            setSearchText(e.target.value); // and on every key press its changes state variable by re-rendering the entire body component
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg"
          onClick={() => {
            // Filter the cards based of the searchText(input value)
            const searchFilteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchFilteredList);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow-lg"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.rating.rating_text >= 4.0
          );
          setFilteredRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="flex flex-wrap gap-4 p-2 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.resId}
            to={"./restaurant" + restaurant.order.actionInfo.clickUrl}
          >
            {restaurant.isPromoted ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
