import React, { useContext, useState, useEffect } from 'react';
// import sidebar context
import { SidebarContext } from '../contexts/sidebar-context';
// import icons
import { BsBag } from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/cart-context';
// imprt link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../img/logo.png';


export const Header = () => {
  // header state
const [isActive, setIsActive] = useState(false);
const { isOpen, setIsOpen } = useContext(SidebarContext);
const { itemAmount } = useContext(CartContext);
// event listener
useEffect(() => {
 window.addEventListener('scroll', () => {
  window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
 });
},[]);

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-4' }
    fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
      {/* logo */}
      <Link to={'/'}>
        <div>
          <img className="w-[40]" src={Logo} alt="" />
        </div>
      </Link>
      {/* cart */}
      <div 
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer flex relative">
      <BsBag className="text-2xl" />
      <div className="bg-orange-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
      </div>
      </div>
    </header>
  );
};
