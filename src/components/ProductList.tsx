


import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Link href="/product/1" className="flex flex-col gap-4">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
         
        />
        <Image
          src="https://images.pexels.com/photos/18551900/pexels-photo-18551900/free-photo-of-model-posing-in-thongs.jpeg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
         
        />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-myCusNotification py-2 px-4 text-xs hover:bg-myCusNotification hover:text-white ">Add to cart</button>
      </Link>
      <Link href="/product/1" className="flex flex-col gap-4">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
         
        />
        <Image
          src="https://images.pexels.com/photos/18551900/pexels-photo-18551900/free-photo-of-model-posing-in-thongs.jpeg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
         
        />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-myCusNotification py-2 px-4 text-xs hover:bg-myCusNotification hover:text-white ">Add to cart</button>
      </Link>
      <Link href="/product/1" className="flex flex-col gap-4">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
         
        />
        <Image
          src="https://images.pexels.com/photos/18551900/pexels-photo-18551900/free-photo-of-model-posing-in-thongs.jpeg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
         
        />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-myCusNotification py-2 px-4 text-xs hover:bg-myCusNotification hover:text-white ">Add to cart</button>
      </Link>
      <Link href="/product/1" className="flex flex-col gap-4">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500"
         
        />
        <Image
          src="https://images.pexels.com/photos/18551900/pexels-photo-18551900/free-photo-of-model-posing-in-thongs.jpeg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
         
        />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-myCusNotification py-2 px-4 text-xs hover:bg-myCusNotification hover:text-white ">Add to cart</button>
      </Link>


    </div>
  );
};

export default ProductList;
