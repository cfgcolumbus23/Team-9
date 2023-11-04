import React from "react";

export default function Desktop() {
  return (
    <div className="bg-white flex flex-col items-center w-full h-full">
      <div className="w-[80%] h-[80%] flex flex-col justify-between mt-5">
        <div className="flex justify-between items-center">
          <img
            src="https://futurereadyfive.org/wp-content/uploads/2022/08/foot-logo03@4x.png"
            alt="Future Ready Five"
            className="w-[25%]"
          />
          <button className="bg-purple-600 text-white py-2 px-4 rounded">
            Sign up
          </button>
        </div>

        <div className="text-center my-10">
          <h1 className="text-5xl font-bold">Lets Learn!</h1>
        </div>

        <div className="flex justify-center">
          <div className="w-[60%] h-[50%] border-2 p-5 flex flex-col items-center">
            <img
              src="/image/childDrawing.png"
              alt="Children Playing"
              className="w-full h-[60%]"
            />
            <h2 className="my-5">Play games and view progress!</h2>
            <div className="w-full flex flex-col items-center">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 my-1 border-2"
              />
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 my-1 border-2"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#005959] text-white py-4 flex justify-between items-center">
          <img
            src="https://futurereadyfive.org/wp-content/uploads/2022/08/foot-logo03@4x.png"
            alt="Future Ready Five"
            className="w-[25%]"
          />
          <div className="ml-10">
            <p>© 2022 Future Ready Five. All Rights Reserved</p>
          </div>
          <div className="flex">
            <div className="mr-10">
              <p>215 North Front St, Ste 620</p>
              <p>Columbus, Ohio 43215</p>
            </div>
            <div className="mr-10">
              <p>Phone: 614-502-1837</p>
              <p>Email: info@futurereadyfive.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
    }
