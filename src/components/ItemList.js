import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    alert(item?.item?.name + " Added to Cart");
  };
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div className="flex gap-4 px-2 mb-2 w-full" key={item?.item?.id}>
          <div className="w-1/7 w-32.5 h-32.5 relative">
            <img
              className="w-32.5 h-32.5 w-full rounded-lg"
              src={item?.item?.item_image_url}
            />
            <img
              className="absolute top-1 right-1 w-3.5"
              src={item?.item?.item_tag_image}
            />
            <button
              className="border-1 border-gray-500 bg-white text-green-600 absolute top-28 left-1/8 w-3/4  py-1 rounded-md shadow-lg cursor-pointer shadow-lg flex justify-around"
              onClick={() => handleAddItem(item)}
            >
              {/* <button className="cursor-pointer font-bold text-md">-</button> */}
              <div className="font-bold">Add</div>
              {/* <button className="cursor-pointer font-bold text-md">+</button> */}
            </button>
          </div>
          <div className="w-6/7">
            <div className="flex justify-between pr-4">
              <h2>{item?.item?.name}</h2>
            </div>
            <p> ₹{item?.item?.display_price}</p>
            <span className="block">{item?.item?.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
