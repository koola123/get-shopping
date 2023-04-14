import React from 'react';
// import Images
import WomanImg from '../img/woman1-hero.png';
// import Link
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-between h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="fon-semibold flex items-center uppercase">
          <div className="w-10 h-[2px] bg-orange-500 mr-3"></div>
            <div>New Trend
            </div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br/>
          <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-primary">Discover More</Link>
          </div>
          </div>
         {/* image */}
         <div className="hidden lg:block">
            <img src={WomanImg} className="w-[835px] object-fit absolute top-0 right-0" alt="" />
         </div>
    </section>
  );
};
