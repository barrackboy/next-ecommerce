"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true; // Assuming you have some logic to set this value

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div className="flex flex-col gap-8">
            {/* ITEM */}
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/10459945/pexels-photo-10459945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your actual image path
            alt="Cart item image"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="">
              {/* TITLE */}
              <div className="flex justify-between items-center gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
              </div>
              <div className="">available</div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty 1</span>
                
                <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/10459945/pexels-photo-10459945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your actual image path
            alt="Cart item image"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="">
              {/* TITLE */}
              <div className="flex justify-between items-center gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
              </div>
              <div className="">available</div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
                <span className="text-gray-500">Qty 1</span>
                
                <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
