import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Spinning = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const startX = 100;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".spinning-card",
        start: "top center",
        end: "+=2000",
        scrub: 1,
        pin: true,
        markers: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Add overflow-x: hidden to prevent horizontal expansion
    document.body.style.overflowX = "hidden";

    tl.to(".spinning-card", {
      rotation: 990,
      duration: 2,
      ease: "none",
    }).fromTo(
      ".card_2",
      { x: startX, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      },
      0
    );

    gsap.fromTo(
      ".card_1",
      { x: -startX, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".card_1",
          start: "top center",
          end: "+=200",
          scrub: 1,
          markers: true,
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      },
      ">"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      className="spinning-section"
      style={{ minHeight: "110vh", backgroundColor: "gray" }}
    >
      <h1 className="spinning-header">
        Scroll down to see some parallax effects
      </h1>
      <section>
        <div
          className="spinning-cards-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px",
            width: "100%",
          }}
        >
          <div
            className="card_1"
            style={{ width: "100px", height: "200px", background: "blue" }}
          ></div>
          <div
            className="spinning-card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              className="spinning-image"
              style={{
                width: "300px",
                height: "200px",
                backgroundColor: "#FF6B6B",
                margin: "20px",
              }}
            />
            <div
              className="spinning-content"
              style={{ textAlign: "center", padding: "0 10px" }}
            >
              <h3>Card One</h3>
            </div>
          </div>
          <div
            className="card_2"
            style={{
              width: "100px",
              height: "200px",
              background: "red",
              justifySelf: "end",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};
export default Spinning;
