import Image from 'next/image';
import Parents from './images/parents.png';
import Children from './images/children.png';
import Provider from './images/provider.png';
import Logo from './images/logo.png';
import LogoWhite from './images/logo white.png';
import styles from './styles/globalStyles.module.css';

import React from 'react';
 //fix
export default function Desktop() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
            <h2 className="my-5 text-lg md:text-xl">
              View your child's progress!
            </h2>
            <a
              href="http://localhost:3000/ParentPage/ParentPageContent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-500 text-white p-3 rounded">
                Parent
              </button>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image src={Children} alt="Student" className="rounded-t-lg mb-4" />
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
            <Image
              src={Provider}
              alt="Provider"
              className="rounded-t-lg mb-4"
            />
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
