"use client";
import { useAppContext } from "@/app/context/AppContextProvider";
import React from "react";

function ClientWrapper({ children }) {
  const { mediaQuery } = useAppContext();

  {
    return mediaQuery != "small" ? (
      <nav className="mainnav rowc">{children}</nav>
    ) : (
      <></>
    );
  }
}

export default ClientWrapper;
