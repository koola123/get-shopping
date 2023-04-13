import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import reat icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';

export const Product = ({product}) => {
  console.log(product)
  // destructure product
  const {id, title, image, description, price } = product;


  return (
    <div>
      <div className="border border-[#e4e4e4 h-[300px] mb-4 relative overflow-hidden group transition">
      <div>
        {/*image*/}
        <div>
          <img src={image} alt=""/>
        </div>
      </div>
      </div>
      <div>2</div>
    </div>
  );
};
