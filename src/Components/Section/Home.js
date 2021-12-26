import React from "react";
import { Link } from "react-router-dom";
import MmfCard from "../Card/MmfCard";
import FefCard from "../Card/FefCard";
import EgtCard from "../Card/EgtCard";
import SbfCard from "../Card/SbfCard";

function Home() {
  return (
    <div
      className="flex items-center bg-indigo-100 w-screen min-h-screen"
      style={{ fontFamily: "Muli, sans-serif" }}
    >
      <div className="container ml-auto mr-auto flex flex-wrap items-start">
        <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
          <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
            Fakülteler
          </h1>
        </div>
        <MmfCard />
        <FefCard />
        <EgtCard />
        <SbfCard />
      </div>
    </div>
  );
}

export default Home;
