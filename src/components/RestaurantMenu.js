import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { city, resName } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(city, resName);

  if (resInfo === null) return <Shimmer />;

  const { name, rating, cuisine_string, res_status_text, timing } =
    resInfo?.sections?.SECTION_BASIC_INFO;
  const { address, phoneDetails } = resInfo?.sections?.SECTION_RES_CONTACT;
  const { menus } = resInfo?.order?.menuList;

  console.log(menus);

  return (
    <div className=" mt-4 p-4 flex justify-center">
      <div className="w-256">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{name}</h1>
          <div className="flex gap-2">
            <span
              className="pl-1.5 rounded-md w-12 h-6 text-white pb-7"
              style={{ backgroundColor: `#${rating?.rating_color}` }}
            >
              {rating?.rating_text}
              {"\u2605"}
            </span>
            <div className="flex-col">
              <p>{rating?.votes}</p>
              <p className="border-b-2 border-dotted">Delivery Ratings</p>
            </div>
          </div>
        </div>
        <p>{cuisine_string}</p>
        <p>{address}</p>
        <div className="flex gap-1.5">
          <span className="border-2 rounded-2xl px-2">
            <span className="text-amber-600">{res_status_text}</span> -{" "}
            {timing?.timing_desc}
          </span>
          <span> | </span>
          <span>
            {"\u260E"}
            {phoneDetails?.phoneStr}
          </span>
        </div>
        <h2 className="text-center text-lg my-4">Menu</h2>
        <div>
          {menus.map((data, index) => (
            <RestaurantCategory
              key={data?.menu?.id}
              menu={data}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
