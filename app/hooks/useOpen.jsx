"use client";

import { useState } from "react";

function useOpen(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  // Function to open the component
  const open = () => {
    setIsOpen(true);
  };

  // Function to close the component
  const close = () => {
    setIsOpen(false);
  };

  // Function to toggle the component's state
  const toggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}

export default useOpen;
