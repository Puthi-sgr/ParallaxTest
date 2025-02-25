import React, { forwardRef } from "react";
import "./Bird.css";

const Bird = forwardRef(({ velocity, flapping, delay }, ref) => {
  return (
    <div
      className="bird-container"
      style={{
        animationDuration: velocity ? `${velocity}s` : "10s",
        animationDelay: delay ? delay : "0s",
      }}
      ref={ref}
    >
      <div
        className="bird"
        style={{
          animationDuration: flapping ? `${flapping}s` : "1s",
          animationDelay: delay ? `${delay}s` : "0s",
        }}
      ></div>
    </div>
  );
});

export default Bird;
