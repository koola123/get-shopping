import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose } from 'react-icons/io';

export const CartItem = ({ item }) => {
  // destructure the item
  const {id, title, image, price, amount} = item;
  return (
    <div className="flex">
    <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/* image */}
        <Link to={`/product/${id}`}>
      <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div>
        {/*title & remove icon*/}
        <div>
        {/*title*/}
          <Link to={`/product/${id}`}
          className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
          {title}
          </Link>
          {/*remove icon*/}
          <div>
          <IoMdClose />
          </div>
        </div>
        </div>
    </div>
    </div>
  );
};
