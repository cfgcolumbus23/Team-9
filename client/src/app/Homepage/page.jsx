import Image from "next/image";
import Parents from "./images/parents.png";
import Children from "./images/children.png";
import Provider from "./images/provider.png";
import Logo from "./images/logo.png";
import styles from "./styles/globalStyles.module.css";

import React from "react";

export default function Desktop() {
  return (
    <div className={styles.container}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="Logo" className="h-10 w-auto" />
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Customize Your Learning!
          </h1>
          <a
            href="https://futurereadyfive.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 text-white px-6 py-2 rounded">
              Sign up
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={Parents} alt="Parent" className="rounded-t-lg mb-4" />
            <h2 className="my-5 text-lg md:text-xl">Find a provider!</h2>
            <button className="w-full bg-blue-500 text-white p-3 rounded">
              Parent
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={Children} alt="Student" className="rounded-t-lg mb-4" />
            <h2 className="my-5 text-lg md:text-xl">
              Play games and view progress!
            </h2>
            <a
              href="http://localhost:3000/student"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-500 text-white p-3 rounded">
                Student
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={Provider}
              alt="Provider"
              className="rounded-t-lg mb-4"
            />
            <h2 className="my-5 text-lg md:text-xl">Create learning game!</h2>
            <a
              href="http://localhost:3000/provider"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-500 text-white p-3 rounded">
                Provider
              </button>
            </a>
          </div>
        </div>

        <div
          className="bg-[#005959] text-white py-4 px-4 flex justify-between items-center"
          style={{ marginTop: "0.5in" }}
        >
          <div className="flex justify-between items-center mb-4">
            <Image
              src="https://futurereadyfive.org/wp-content/uploads/2022/08/foot-logo03@4x.png"
              alt="Logo"
              className="h-10 w-auto"
            />
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
