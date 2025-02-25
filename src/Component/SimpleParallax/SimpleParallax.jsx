import React, { useEffect, useState } from "react";
import "./SimpleParallax.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Components from "../index";

const SimpleParallax = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      ScrollTrigger.refresh();
    };

    const startTrigger = isMobile ? "center bottom" : "bottom bottom";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pSection",
        start: startTrigger,
        end: "+=1000",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    const startX = isMobile ? -25 : -100;
    const endX = isMobile ? 25 : 100;

    tl.fromTo(
      ".card-1",
      { xPercent: startX, opacity: 0, rotate: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    ).fromTo(
      ".card-2",
      { xPercent: endX, opacity: 0, rotate: 0 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      ".card-3",
      { xPercent: startX, opacity: 0, rotate: 0 },
      {
        scrollTrigger: {
          trigger: ".card-3",
          start: "top center",
          end: "+=300",
          scrub: 1,
          markers: true,
        },
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );

    gsap.fromTo(
      ".card-4",
      { xPercent: endX, opacity: 0, rotate: 20 },
      {
        scrollTrigger: {
          trigger: ".card-4",
          start: "top center",

          end: "+=20000",
          scrub: 1,
          markers: true,
        },
        xPercent: 0,
        rotate: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div
      className="pSection"
      style={{ minHeight: "110vh", backgroundColor: "gray" }}
    >
      <h1 className="header-section">
        Scroll down to see some parallax effects
      </h1>
      <section>
        <div
          className="cards-container"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "20px" : "40px",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: isMobile ? "20px" : "40px",
            width: "100%",
          }}
        >
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              className="pImage card-1"
              style={{
                width: isMobile ? "100%" : "300px",
                height: isMobile ? "150px" : "200px",
                backgroundColor: "#FF6B6B",
                margin: isMobile ? "10px" : "20px",
              }}
            />
            <div
              className="pContent1"
              style={{ textAlign: "center", padding: "0 10px" }}
            >
              <h3>Card One</h3>
              <p>
                This is the first card with a simple parallax effect using GSAP
                ScrollTrigger.
              </p>
            </div>
          </div>
          <div
            className="card-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              className="pImage"
              style={{
                width: isMobile ? "100%" : "300px",
                height: isMobile ? "200px" : "300px",
                background: "linear-gradient(45deg, #4ECDC4, #556270)",
                margin: isMobile ? "10px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            />
            <div
              className="pContent2"
              style={{ textAlign: "center", padding: "0 10px" }}
            >
              <h3>Card Two</h3>
              <p>
                This is the second card demonstrating smooth scrolling
                animations.
              </p>
            </div>
          </div>
          <div
            className="card-3"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              className="pImage"
              style={{
                width: isMobile ? "100%" : "300px",
                height: isMobile ? "200px" : "300px",
                background: "linear-gradient(45deg, #45B7D1, #2C3E50)",
                margin: isMobile ? "10px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            />
            <div
              className="pContent3"
              style={{ textAlign: "center", padding: "0 10px" }}
            >
              <h3>Card Three</h3>
              <p>
                This is the third card showing off GSAP's powerful animation
                capabilities.
              </p>
            </div>
          </div>
          <div
            className="card-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              className="pImage"
              style={{
                width: isMobile ? "100%" : "300px",
                height: isMobile ? "200px" : "300px",
                background: "linear-gradient(45deg, #96CEB4, #FFEEAD)",
                margin: isMobile ? "10px" : "20px",
                borderRadius: "15px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            />
            <div
              className="pContent4"
              style={{ textAlign: "center", padding: "0 10px" }}
            >
              <h3>Card Four</h3>
              <p>This is the fourth card with ScrollTrigger animations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleParallax;
