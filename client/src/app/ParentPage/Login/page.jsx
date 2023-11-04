import React from 'react';
import Image from 'next/image';
import parentImage from './image/parents.png';
import LogoWhite from './image/logo white.png';

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
            {/* How has your child grown? */}
          </h1>
        </div>

        <div className="flex justify-center px-4">
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-full border-2 p-5 flex flex-col items-center">
            <Image
              src={parentImage}
              width={1000}
              height={1000}
              alt="Picture of Children Drawing"
            />

            <h2 className="my-5 text-lg md:text-xl">
              View provider info and child progress!
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
              style={{ marginTop: '0.5in' }}
            >
              Login
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 bg-[#005959]">
          <div className="flex justify-between items-center mb-4">
            <Image src={LogoWhite} alt="Logo" className="h-10 w-auto" />
            <div className="text-white">
              <p>215 North Front St, Ste 620</p>
              <p>Columbus, Ohio 43215</p>
            </div>
            <div>
              <p className="text-white">Phone: 614-502-1837</p>
              <p className="text-white">Email: info@futurereadyfive.org</p>
            </div>
          </div>
          <p className="text-center text-white">
            &copy; 2022 Future Ready Five. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
