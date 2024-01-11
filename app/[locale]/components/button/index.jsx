"use client";

import { useState } from "react";
import Image from "next/image";
import PlayButtonBg from "../../../assets/images/play_btn.png";
import PlayButtonHoverBg from "../../../assets/images/play_btn_hover.png";
import { useAppContext } from "@/app/context/AppContextProvider";
import "./style.scss";

export function PlayButton({ click, text }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="play_btn" onClick={click}>
      <span style={{ pointerEvents: "none" }}>{text}</span>
      <Image
        src={isHovered ? PlayButtonHoverBg : PlayButtonBg}
        alt="Play Button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}
