import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img
            src="https://mmf.mehmetakif.edu.tr/upload/mmf/7-logo-67348100-big-mmf.png"
            alt=""
            className="h-44 ml-auto mr-auto mb-10"
          />
        </figure>
        <div className="rounded-lg p-2 bg-gray-700 flex flex-col ">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              Mühendislik-Mimarlık
            </h5>
          </div>
          <div className="flex items-center">
            <div className="md:w-1/3 my-4 pl-2">
              <Link to="/home">
                <button
                  className="shadow-xl mb-2 bg-indigo-300 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Bölümler
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
