"use client";
import { useState, useCallback, useEffect } from "react";
import "./style.scss";
import { useAppContext } from "@/app/context/AppContextProvider";
import Image from "next/image";
import DropdownIcon from "../../../assets/images/icons/down.svg";
import useOpen from "@/app/hooks/useOpen";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function GameNav({ category }) {
  const [active, setActive] = useState(null);
  // const { mediaQuery } = useAppContext();
  const { isOpen, toggle, close } = useOpen();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      setActive(value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    let search_term = searchParams.get("search");
    if (!search_term) {
      setActive(category[0].value);
    } else {
      setActive(search_term);
    }
  }, []);

  {
    return (
      <>
        <div className="game_nav row">
          {category.map((item, index) => (
            <span
              key={index}
              className={`${
                item.value == active ? "game_nav_active" : ""
              } game_nav_item`}
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("search", item.value)
                );
              }}
            >
              {item.display}
            </span>
          ))}
        </div>
        <div className="small_game_nav">
          <div className="selected_game rowc" onClick={toggle}>
            <span>{category.find((cat) => cat.value == active)?.display}</span>
            <Image src={DropdownIcon} alt="dropdown" />
          </div>
          {isOpen && (
            <div className="game_dropdown col">
              {category.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="option"
                    onClick={() => {
                      close();
                      router.push(
                        pathname + "?" + createQueryString("search", item.value)
                      );
                    }}
                  >
                    {item.display}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default GameNav;
