import React, { useState, createContext } from 'react';
// create context
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  // sidebar State
  const [isOpen, setIsOpen] = useState(false);
  // handle sidebar
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
  );
};
