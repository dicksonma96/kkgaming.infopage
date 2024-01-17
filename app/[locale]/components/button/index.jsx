"use client";

import { useState } from "react";
import { useAppContext } from "@/app/context/AppContextProvider";

export function PlayButton({ click, text, launchUrl }) {
  const { setIframeUrl } = useAppContext();
  const handleClick = () => {
    if (launchUrl) setIframeUrl(launchUrl);
  };

  return (
    <button className="cta_btn1" onClick={handleClick}>
      {text}
    </button>
  );
}
