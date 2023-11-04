import React from "react";
import Image from "next/image";
import childDrawing from "./image/childDrawing.png";

export default function Desktop() {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto flex flex-col justify-between my-5">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <img
            src="https://futurereadyfive.org/wp-content/uploads/2022/08/FR5-horizontal-logo.png"
            alt="Future Ready Five"
          />
          <button className="bg-purple-600 text-white py-2 px-4 rounded">
            Sign up
          </button>
        </div>

        <div className="text-center my-10 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lets Learn!
          </h1>
        </div>

        <div className="flex justify-center px-4">
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-full border-2 p-5 flex flex-col items-center">
            <Image
              src={childDrawing}
              width={1000}
              height={1000}
              alt="Picture of Children Drawing"
            />

            <h2 className="my-5 text-lg md:text-xl">
              Play games and view progress!
            </h2>
            <div className="w-full flex flex-col items-center">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 my-1 border-2"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 my-1 border-2"
              />
            </div>
            <button
              className="bg-purple-600 text-white py-2 px-4 rounded"
              style={{ marginTop: "0.5in" }}
            >
              Login
            </button>
          </div>
        </div>
        {/* Footer */}
        <div
          className="bg-[#005959] text-white py-4 px-4 flex justify-between items-center"
          style={{ marginTop: "0.5in" }}
        >
          <img
            src="https://futurereadyfive.org/wp-content/uploads/2022/08/foot-logo03@4x.png"
            alt="Future Ready Five"
            className="w-1/4 md:w-1/6 lg:w-1/8"
          />
          <div className="flex flex-1 flex-col md:flex-row justify-end items-center md:items-end text-sm space-y-4 md:space-y-0 md:space-x-10">
            <div className="text-center md:text-right">
              <p>© 2022 Future Ready Five. All Rights Reserved</p>
            </div>
            <div className="text-center md:text-right">
              <p>215 North Front St, Ste 620</p>
              <p>Columbus, Ohio 43215</p>
            </div>
            <div className="text-center md:text-right">
              <p>Phone: 614-502-1837</p>
              <p>Email: info@futurereadyfive.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
