import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  let totalPrice = items.reduce((sum, data) => sum + data?.item?.price, 0);
  return (
    <div className="flex justify-center mt-4 p-4">
      <div className="w-256">
        <div>
          {items.map((item) => (
            <div key={item?.item?.id} className="flex justify-between">
              <div className="flex mb-2 gap-1">
                <img className="w-6" src={item?.item?.item_tag_image} />
                {item?.item?.name}
              </div>
              <div className="flex gap-6">
                <div>₹{item?.item?.price || item?.item?.min_price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-300 p-4 my-4">
          " Any suggestions? We will pass it on...
        </div>
        <div className="border-1 border-black p-2 mb-4">
          <input type="checkbox" />
          <label className="font-bold">Opt in for No-contact Delivery</label>
          <p>
            Unwell, or avoiding contact? Please select no-contact delivery.
            Partner will safely place the order outside your door (not for COD)
          </p>
        </div>
        <div>
          <h1 className="font-bold">Bill Details</h1>
          <div className="my-4">
            <p className="flex justify-between mb-2">
              Item Total <span>₹{totalPrice}</span>
            </p>
            <p className="flex justify-between">
              Delivery Fee <span>₹30</span>
            </p>
          </div>
          <hr className="border-gray-300" />
          <p className="flex justify-between my-2">
            GST & Other Charges <span>₹{(totalPrice * 0.18).toFixed(2)}</span>
          </p>
          <hr className="border-1" />
        </div>
        <div>
          <p className="flex justify-between my-2">
            To Pay <span>₹{(totalPrice + totalPrice * 0.18 + 30).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
