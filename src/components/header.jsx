import React, { useContext } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/sidebar-context';
// import icons
import { BsBag } from 'react-icons/bs';

export const Header = () => {
const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-orange-200">
    <div>
      <div>Header</div>
      <div
      className="cursor-pointer flex relative"
      onClick={() => setIsOpen(!isOpen)}>
      <BsBag
      className="text-2xl" />
      </div>
    </div>
    </header>
  );
};
