import "./App.css";

import {
  dragon1,
  dragon2,
  dragon3,
  dragon4,
  dragon5,
  dragon6,
  dragon7,
  dragon8,
  dragon9,
  dragon10,
} from "./assets/images";

function App() {
  const dragons = [
    dragon1,
    dragon2,
    dragon3,
    dragon4,
    dragon5,
    dragon6,
    dragon7,
    dragon8,
    dragon9,
    dragon10,
  ];

  console.log(dragons.length);
  return (
    <div className="banner">
      <div
        className="slider"
        style={{ "--quantity": dragons.length } as React.CSSProperties}
      >
        {dragons.map((dragon, index) => (
          <div
            key={`${index}_${dragon}`}
            className="item"
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <img src={dragon} alt={`dragon_${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
