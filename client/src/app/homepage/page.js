import React from "react";

export default function Desktop() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="flex items-center justify-between px-4 py-6 mb-8 bg-white shadow-md">
          <img src="path_to_logo.png" alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl font-semibold text-gray-800">
            Customize Your Learning!
          </h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Sign up
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="path_to_parent_image.jpg"
              alt="Parent"
              className="rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Find a provider!
            </h2>
            <button className="w-full bg-blue-500 text-white p-3 rounded">
              Parent
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="path_to_student_image.jpg"
              alt="Student"
              className="rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Play games and view progress!
            </h2>
            <button className="w-full bg-blue-500 text-white p-3 rounded">
              Student
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="path_to_provider_image.jpg"
              alt="Provider"
              className="rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Create learning game!
            </h2>
            <button className="w-full bg-blue-500 text-white p-3 rounded">
              Provider
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <img src="path_to_logo.png" alt="Logo" className="h-10 w-auto" />
            <div className="text-gray-600">
              <p>215 North Front St, Ste 620</p>
              <p>Columbus, Ohio 43215</p>
            </div>
            <div>
              <p className="text-gray-600">Phone: 614-502-1837</p>
              <p className="text-gray-600">Email: info@futurereadyfive.org</p>
            </div>
          </div>
          <p className="text-center text-gray-600">
            &copy; 2022 Future Ready Five. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
