"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../assets/images/loading-logo.gif";
import "./style.scss";

function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setShow(false);
    };

    // Check if the document is already fully loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // If the document is not yet fully loaded, add an event listener
      window.addEventListener("load", handleLoad);

      // Set a timeout to handle the case where the load event might not fire
      const timeoutId = setTimeout(() => {
        handleLoad();
        window.removeEventListener("load", handleLoad);
      }, 8000);

      // Cleanup the event listener and timeout on component unmount
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <div className={`${show ? "showLoader" : ""} page_loader`}>
      <Image src={Logo} alt="KKGaming loading" />
    </div>
  );
}

export default PageLoader;
