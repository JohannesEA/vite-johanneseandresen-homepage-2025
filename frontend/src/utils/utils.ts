import { useState, useEffect } from "react";

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return width;
};

export const isMobile = () => {
  // Set the breakpoint
  const mobileBreakpoint = 600;

  // Get the viewport width
  const viewportWidth = window.innerWidth;

  // Return true if the viewport width is less than or equal to the mobile breakpoint
  return viewportWidth <= mobileBreakpoint;
};
