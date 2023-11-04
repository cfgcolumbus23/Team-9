import React from 'react';
import Image from 'next/image';
import childDrawing from './Image/parents.png';
import LogoWhite from './Image/logo white.png';

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
        </div>

<<<<<<< HEAD
        <div className="text-center my-10 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lets Learn!
          </h1>
        </div>
        {/* Healthcare Providers Selection Form */}
        <div className="text-center my-10 px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Choose Your Healthcare Provider
          </h2>
          <div className="w-full max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="provider"
                  className="block text-lg font-medium text-gray-700"
                >
                  Provider
                </label>
                <select
                  id="provider"
                  name="provider"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                >
                  <option>Select a provider</option>
                  {/* Map through your providers array to render options */}
                  {/* This is just an example; you would replace with actual data */}
                  <option>Provider A</option>
                  <option>Provider B</option>
                  <option>Provider C</option>
                </select>
              </div>
              {/* Additional fields can be added here if necessary */}
              <div className="text-right mt-4">
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Child Drawing Section */}
        <div className="flex justify-center px-4">
          {/* ... existing code ... */}
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
              View your child's progress!
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
=======
        <h2 class="text-2xl font-bold mb-4">Child Statistics</h2>
        <p class="mb-2">Sections Completed: 10</p>
        <p class="mb-2">Assessments Taken: 2</p>
        <p>Percentage of Correct Answers: 82%</p>
>>>>>>> 497a715f6bf58b207462c8cdfc47c1f312760b60

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
