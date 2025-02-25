import React, { useEffect, useState } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero_Flower from "../../Assets/Hero_Flower_Frame.png";
import seg1 from "../../Assets/seg1.png";
import * as Components from "../index";

const HeroParallax = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top top",
        end: isMobile ? "+=500" : "+=1000",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      ".hero-frame",
      { scale: 1, opacity: 1 },
      {
        scale: isMobile ? 2 : 5,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      },
      ">"
    )
      .fromTo(
        ".hero-img",
        { opacity: 0.5, filter: "brightness(100%)" },
        {
          duration: 1,
          opacity: 1,
          scale: isMobile ? 1.5 : 4,
          filter: "brightness(50%) blur(5px)",
          ease: "power1.inOut",
        },
        ">"
      )
      .fromTo(
        ".hero-content",
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          ease: "power1.inOut",
        },
        ">"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <section
        className="hero_section"
        style={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          className="hero-img"
          src={seg1}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
            width: isMobile ? "100%" : "auto",
            maxWidth: "100%",
            height: isMobile ? "auto" : "auto",
            maxHeight: isMobile ? "100vh" : "none",
            objectFit: "contain",
          }}
        />
        <div
          className="hero-frame"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${Hero_Flower})`,
            backgroundSize: isMobile ? "contain" : "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="hero-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "bold",
            zIndex: "1",
          }}
        >
          Puthi
        </div>
      </section>
    </div>
  );
};
export default HeroParallax;
