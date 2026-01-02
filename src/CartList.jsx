import { useDispatch } from "react-redux";
import {removeItem} from "./utils/cartSlice";

const CartList = ({ items, length }) => {
  console.log(items);
  const dispatch=useDispatch();
  const handleDeleteItem=(eachitem)=>{
    dispatch(removeItem(eachitem));
  }
  return (
    <div>
      {items.map((eachitem) => (
        <div
          key={eachitem?.id}
          className="p-2 m-2 border-gray-200 gap-2 border-b-2 text-left flex justify-between border-black border-2 "
        >
        <div className="w-9/12">
          <div className="py-2 font-bold">
            <span>{eachitem?.name}</span>
          </div>
            <p>{eachitem?.desc}</p>
        </div>
          <div className="w-3/12 p-4 flex-column justify-between">
            <img src={eachitem?.media[0]?.image?.url}></img>
            <div>
            <button className="font-bold border-black border-2 bg-blue rounded-xl p-2 m-2" onClick={()=>handleDeleteItem(eachitem)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartList;
