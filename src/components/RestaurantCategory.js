import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ menu, showItems, setShowIndex }) => {
  const [isActive, setIsActive] = useState(false);
  const { items } = menu?.menu?.categories[0]?.category;

  return (
    <div className="mb-4">
      <div className="accordian-item">
        <div
          className="flex justify-between bg-gray-300 px-2 mb-4 hover:cursor-pointer rounded-md shadow py-1"
          onClick={() => {
            setShowIndex();
            setIsActive(!isActive);
          }}
        >
          <div>{menu?.menu?.name}</div>
          <div>{showItems && isActive ? "\u25B4" : "\u25BE"}</div>
        </div>
        {showItems && isActive && <ItemList items={items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
