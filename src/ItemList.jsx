import { useDispatch } from "react-redux";
import {addItem} from "./utils/cartSlice"; // importing reducer

const ItemList = ({ items, length }) => {
  console.log(items);
  const dispatch=useDispatch();

  const handleAddItem=(item)=>{
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((eachitem) => (
        <div
          key={eachitem?.item?.id}
          className="p-2 m-2 border-gray-200 gap-2 border-b-2 text-left flex justify-between border-black border-2 "
        >
        <div className="w-9/12">
          <div className="py-2 font-bold">
            <span>{eachitem?.item?.name}</span>
          </div>
            <p>{eachitem?.item?.desc}</p>
        </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
            <button className="p-1 mx-25 bg-black text-white shadow-lg " onClick={()=>handleAddItem(eachitem.item)}>Add+</button>
            </div>
            <img src={eachitem?.item?.media[0]?.image?.url}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
