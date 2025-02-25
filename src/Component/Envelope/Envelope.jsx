import React, { useEffect, useRef } from "react";
import "./Envelope.css";

const Envelope = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const frontRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const front = frontRef.current;

    const handleClick = () => {
      if (card.style.top === "-120px") {
        card.style.top = "20px";
      } else {
        card.style.top = "-120px";
      }
    };

    container.addEventListener("click", handleClick);

    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="envelope-container" ref={containerRef}>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front" ref={frontRef}></div>
        <div className="card" ref={cardRef}>
          <div className="text">
            Happy
            <br /> Valentine's
            <br /> Day!
          </div>
          <div className="heart"></div>
        </div>
        <div className="hearts">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default Envelope;
