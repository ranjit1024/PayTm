import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

function SignUp() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-tr flex-col  to-lime-100 from-slate-300 ">
      <h1 className="text-4xl font-poppins font-semibold text-center mb-10 text-green-700">sign Up</h1>

    <div className="w-[90%] flex items-center gap-3">
      <div class="w-full ">
        <label htmlFor="first-name" className="font-medium font-poppins">First Name</label>
        <input
          class="w-full bg-slate-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
          placeholder="First Name" id="first-name"
        />
      </div>

      <div class="w-full max-w-sm ">
        <label htmlFor="last-name" className="font-medium font-poppins">Last Name</label>
        <input
          class="w-full bg-slate-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
          placeholder="Last Name" id="last-name"
        />
      </div>

    </div>


    <div class="w-[90%] my-3">
        <label htmlFor="email" className="font-medium font-poppins">Email</label>
        <input
          class="w-full bg-slate-100 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
          placeholder="youremail@gmail.com" id="email"
        />
      </div>

    <div class="w-[90%]">
      <label htmlFor="" className="font-medium font-poppins">Password</label>
  <div class="relative">
    <input type="password" class="w-full pl-3 pr-3 py-2 bg-white placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your password" />
    <p class="flex items-start mt-2 text-xs text-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1.5">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
      </svg>
 
      Use at least 8 characters
    </p>    
  </div>
</div>

    <div className="w-[90%] mt-5">
      <button className="bg-emerald-800 w-full font-poppins text-white py-2 rounded-md font-semibold hover:bg-emerald-600">Sign Up</button>
    </div>
      
    </div>
  );
}

export default App;
