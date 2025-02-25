import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Parrallax.css";
import Bird from "../Bird/Bird";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Parallax = ({ rangeValue }) => {
  useEffect(() => {
    var tl = gsap.timeline({ delay: 1 });
    //sequenced one-after-the-other
    tl.to(".box1", { duration: 1, rotation: -360 })
      .to(".box2", { duration: 1, x: 100, ease: "back.inOut" })
      .to(".box3", { duration: 1, rotation: 450, x: 100, ease: "expo.inOut" });
  }, []);

  useEffect(() => {
    gsap.to(".box1", {
      duration: 0.5,
      x: rangeValue,
      y: -rangeValue,
      ease: "inOut",
    });
    gsap.to(".box2", {
      duration: 1,
      x: rangeValue * 2,
      y: -rangeValue * 2,
      ease: "inOut",
    });
    gsap.to(".box3", {
      duration: 1.25,
      x: rangeValue * 4,
      y: -rangeValue * 4,
      ease: "inOut",
    });
  }, [rangeValue]);
  return (
    <div className="parallax-container">
      <div
        className="box box1"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#333",
          margin: "20px",
          position: "fixed",
        }}
      ></div>
      <div
        className="box box2"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#666",
          margin: "20px",
          position: "fixed",
        }}
      ></div>
      <div
        className="box box3"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#999",
          margin: "20px",
          position: "fixed",
        }}
      ></div>
    </div>
  );
};

export default Parallax;
