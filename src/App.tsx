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
      <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <a
            href="https://github.com/ankisami"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my github
          </a>
        </div>
        <div className="model" />
      </div>
    </div>
  );
}

export default App;
