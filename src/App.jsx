import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SignUp } from "./Components/Signup";

function App() {
  return (
    <div
      className="grid  h-screen"
      style={{
        display: "grid",
        gridTemplateColumns: "60% 40%",
      }}
    >
      <SideImage></SideImage>
      <SignUp></SignUp>
    </div>
  );
}

function SideImage() {
  return (
    <div className="s-full  bg-green-200 bg-hero-pattern flex items-end justify-start "></div>
  );
}



export default App;
