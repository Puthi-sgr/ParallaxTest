import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FakeHorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

const FakeHorizontalScroll = () => {
  const sectionRefs = useRef([]);
  const pinWrapRefs = useRef([]);
  const animWrapRefs = useRef([]);

  useEffect(() => {
    const horizontalSections = sectionRefs.current;

    horizontalSections.forEach((sec, i) => {
      const thisPinWrap = pinWrapRefs.current[i];
      const thisAnimWrap = animWrapRefs.current[i];

      const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

      gsap.fromTo(
        thisAnimWrap,
        {
          x: () =>
            thisAnimWrap.classList.contains("to-right") ? 0 : getToValue(),
        },
        {
          x: () =>
            thisAnimWrap.classList.contains("to-right") ? getToValue() : 0,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top center",
            end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
            pin: thisPinWrap,
            invalidateOnRefresh: true,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="fake-horizontal-scroll">
      <section className="blank">
        <h1>ScrollTrigger Bi-Directional Fake Horizontal Scroll</h1>
        <p>...</p>
      </section>

      <section
        className="horizontal"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="pin-wrap" ref={(el) => (pinWrapRefs.current[0] = el)}>
          <div
            className="animation-wrap to-right"
            ref={(el) => (animWrapRefs.current[0] = el)}
          >
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
          </div>
        </div>
      </section>

      <section
        className="horizontal"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <div className="pin-wrap" ref={(el) => (pinWrapRefs.current[1] = el)}>
          <div
            className="animation-wrap to-left"
            ref={(el) => (animWrapRefs.current[1] = el)}
          >
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
            <div className="item">Card</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FakeHorizontalScroll;
