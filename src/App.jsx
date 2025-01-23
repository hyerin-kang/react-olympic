// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

// import Basic from "./components/Basic";
import InputForm from "./components/InputForm";

function App() {
  const container = {
    width: "1200px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px #0000001a",
    background: "#fff",
  };
  const title = {
    textAlign: "center",
    borderBottom: "1px solid #ccc",
    padding: "20px 0",
    marginBottom: "30px",
  };
  return (
    <div style={container}>
      <h1 style={title}>2024 파리 올림픽</h1>
      <InputForm></InputForm>
      {/* <Basic></Basic> */}
    </div>
  );
}

export default App;
