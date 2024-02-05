import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";

export default function App() {
  const [styleButton, setStyleButton] = useState("white");
  function switchStyle() {
    if (styleButton === "white") {
      setStyleButton("red");
    } else {
      setStyleButton("white");
    }
  }
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>

      <div>
        <p style={{ color: styleButton }}>Style me!</p>
        <button onClick={switchStyle}>Toggle style</button>
      </div>
    </>
  );
}
