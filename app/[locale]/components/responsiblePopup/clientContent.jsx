"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "../../../assets/images/18.svg";

function ClientContent({ content }) {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    let isAgreed = localStorage?.getItem("responsible_agreed");
    if (isAgreed) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, []);

  return hide ? (
    <></>
  ) : (
    <div className="responsible_overlay rowc">
      <div className="responsible colc">
        <Image src={Icon} alt={content.title} />
        <h2>{content.title}</h2>
        <p>{content.message}</p>
        <div className="btns row">
          <button
            className="confirm"
            onClick={() => {
              setHide(true);
              localStorage?.setItem("responsible_agreed", "true");
            }}
          >
            {content.confirm}
          </button>
          <button className="cancel">{content.cancel}</button>
        </div>
      </div>
    </div>
  );
}

export default ClientContent;
