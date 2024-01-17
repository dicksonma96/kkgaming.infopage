"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //large,medium,small
  const [mediaQuery, setMediaQuery] = useState("big");
  const [getWidth, setGetWidth] = useState(0);
  const [iframeUrl, setIframeUrl] = useState("");

  //--MediaQuery
  useEffect(() => {
    const checkSize = () => {
      let screenWidth = window.innerWidth;
      if (screenWidth >= 1300) setMediaQuery("large");
      else if (screenWidth >= 800) setMediaQuery("medium");
      else if (screenWidth < 800) setMediaQuery("small");

      setGetWidth(screenWidth);
    };

    window.addEventListener("resize", checkSize);
    checkSize();
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const updateIframeUrl = (url) => {
    if (mediaQuery == "small") {
      window.open(url, "_blank");
    } else {
      setIframeUrl(url);
    }
  };

  return (
    <AppContext.Provider
      value={{
        mediaQuery,
        iframeUrl,
        getWidth,
        setIframeUrl: updateIframeUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
