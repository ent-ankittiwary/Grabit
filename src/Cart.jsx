import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {clearCart} from "./utils/cartSlice"
import CartList from "./CartList";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const clearCartHandler=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <CartList items={cartItems} />
        <div className="flex justify-between">
        <button className="px-4 py-1 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition hover:bg-pink-700" onClick={()=>clearCartHandler()}>
          ClearCart
        </button>
        <button className="px-4 py-1 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition hover:bg-pink-700">
          Proceed To checkout
        </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
