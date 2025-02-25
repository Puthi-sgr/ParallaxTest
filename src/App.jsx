import Parallax from "./Component/Parrallax/Parrallax";
import { useState } from "react";
import * as Components from "./Component";
function App() {
  const [rangeValue, setRangeValue] = useState(50);
  return (
    <div>
      <Components.HeroParallax />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          onChange={(event) => {
            setRangeValue(event.target.value);
          }}
          type="range"
          className="input"
        />
      </div>

      <Components.SimpleParallax />
      <Components.Spinning />
      <Components.DataSpeed />
      <Components.FakeHorizontalScroll />
      <Components.Envelope />

      <div
        style={{
          height: "200vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          onChange={(event) => {
            setRangeValue(event.target.value);
          }}
          type="range"
          className="input"
        />
      </div>
    </div>
  );
}

export default App;
