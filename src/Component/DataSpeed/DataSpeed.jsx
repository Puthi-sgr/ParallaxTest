import React, { useEffect } from "react";
import cat1 from "../../Assets/cat1.jpg";
import cat2 from "../../Assets/cat2.jpg";
import cat3 from "../../Assets/cat3.jpg";
import cat4 from "../../Assets/cat4.jpg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./DataSpeed.css";

const DataSpeed = () => {
  const w = 1240;
  const h = 874;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] = index % 2 ? ["100%", "-200%"] : ["100%", "-300%"];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  const generateCatImages = (count) => {
    const catImages = [cat1, cat2, cat3, cat4];
    return Array.from({ length: count }, (_, i) => (
      <li key={i}>
        <img src={catImages[i % 4]} width={w} height={h} alt={`Cat ${i + 1}`} />
      </li>
    ));
  };

  return (
    <div className="data-speed">
      <div className="demo-wrapper">
        <header className="df aic jcc">
          <div>
            <h1>ScrollTrigger</h1>
            <h2>demo</h2>
          </div>
        </header>

        <section className="demo-text">
          <div className="wrapper text">
            The
            prettiestttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
          </div>
        </section>

        {[...Array(5)].map((_, i) => (
          <section className="demo-gallery" key={i}>
            <ul className="wrapper">
              {i % 2 === 0
                ? generateCatImages(Math.floor(Math.random() * 2) + 3).reverse()
                : generateCatImages(Math.floor(Math.random() * 2) + 3)}
            </ul>
          </section>
        ))}

        <section className="demo-text">
          <div className="wrapper text">
            and the
            sweetesttttttttttttttttttttttttttttttttttttttttttttttttttttttt
          </div>
        </section>

        <footer className="df aic jcc">
          <p>
            Images from <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DataSpeed;
