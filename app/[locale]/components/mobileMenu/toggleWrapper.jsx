"use client";

import { useEffect } from "react";
import { useAppContext } from "@/app/context/AppContextProvider";
import useOpen from "@/app/hooks/useOpen";
import MenuBtn from "../../../assets/images/icons/menu.svg";
import Image from "next/image";
import { usePathname } from "next-intl/client";

function ToggleWrapper({ children }) {
  const { mediaQuery } = useAppContext();
  const { isOpen, toggle, close } = useOpen(false);
  const pathname = usePathname();

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <>
      <Image
        className="menu_btn"
        onClick={() => toggle(!isOpen)}
        src={MenuBtn}
        alt="menu btn"
      />
      {isOpen && <>{children}</>}
    </>
  );
}

export default ToggleWrapper;
