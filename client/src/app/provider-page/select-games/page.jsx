import Image from "next/image";
import styles from "./styles/globalStyles.css"; // Make sure this CSS file exists and is properly configured
import mono from "./images/mono.jpeg";
import minecraft from "./images/minecraft.jpeg";
import rgb from "./images/rgb.jpeg";
import React from "react";

//fix
export default function Desktop() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <img
            src="https://futurereadyfive.org/wp-content/uploads/2022/08/FR5-horizontal-logo.png"
            alt="Future Ready Five Logo"
            className="w-[25%]"
          />
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
            <Image src={mono} alt="candy" className="rounded-t-lg mb-4" />
            <h2 className="my-5 text-lg md:text-xl">
              View your child's progress!
            </h2>
            <a
              href="http://localhost:3000/provider-page/content"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-500 text-white p-3 rounded">
                Parent
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            {
              <Image
                src={minecraft}
                alt="minecraft"
                className="rounded-t-lg mb-4"
              />
            }
            <h2 className="my-5 text-lg md:text-xl">
              Play games and view progress!
            </h2>
            <a
              href="http://localhost:3000/student-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-500 text-white p-3 rounded">
                Student
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            {<Image src={rgb} alt="RPG" className="rounded-t-lg mb-4" />}
            <h2 className="my-5 text-lg md:text-xl">Create learning game!</h2>
            <a
              href="http://localhost:3000/provider-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-500 text-white p-3 rounded">
                Provider
              </button>
            </a>
          </div>
        </div>

        <div className="mt-8 bg-[#005959]">
          <div className="flex justify-between items-center mb-4">
            <img
              src="https://futurereadyfive.org/wp-content/uploads/2022/08/foot-logo03@4x.png"
              alt="Future Ready Five"
              className="w-[25%]"
            />
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
