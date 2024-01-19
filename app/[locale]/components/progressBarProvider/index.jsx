"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#ff9a00"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;
