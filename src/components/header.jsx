import React, { useContext } from 'react';
// Sidebar Context
import { SidebarContext } from '../contexts/sidebar-context';
// import Icons
import { BsBag } from 'react-icons/bs';
// import Cart Context
import { CartContext } from '../contexts/cart-context';
// imprt Link 
import { Link } from 'react-router-dom';
// import Logo
import Logo from '../img/logo.svg';

export const Header = () => {
const { isOpen, setIsOpen } = useContext(SidebarContext);
const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-orange-200">
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
      <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
      </div>
      </div>
    </header>
  );
};
