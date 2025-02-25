import { useEffect, useRef } from "react";

const useScrollRotate = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const scrollPosition = window.scrollY;
        console.log("Scroll position:", scrollPosition);
        element.style.transform = `rotate(${scrollPosition}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return elementRef;
};

export default useScrollRotate;
