"use client";

import { useState } from "react";


// TEMPORARY STOCK COUNT
const stock = 4
const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type: "increment" | "decrement") => {
    if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "increment" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("decrement")}>-</button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("increment")}>+</button>
          </div>

          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br />
            {"Don't"} miss it
          </div>
        </div>

        <button className="w-36 text-sm rounded-3xl ring-1 ring-myCusNotification text-myCusNotification py-2 px-4 hover:bg-myCusNotification hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
