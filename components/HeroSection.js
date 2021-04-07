import React from "react";
import Link from "next/link";
import Stories from "./Stories";
import Typing from "./animations/Typing";

const HeroSection = () => {
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="relative bg-white dark:bg-black  overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white dark:bg-black  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative sticky-top pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  
                    <a>
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-16 mr-10"
                        src="geniti logo.svg"
                      />
                    </a>
                  
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      onClick={handleClick}
                      type="button"
                      className="bg-white dark:bg-black  toggle rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400"
                      id="main-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg viewBox="0 0 100 80" width="20" height="20">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
          
              <Stories className="md:block md:ml-10 md:pr-4 md:ml-4 md:space-x-8" />
            </nav>
          </div>

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg  bg-white dark:bg-black   overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-16 w-auto md:h-10"
                      src="geniti logo.svg"
                      alt="Geniti | Webdiensten | Voor u geregeld"
                    />
                  </div>
                <div className="-mr-2">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="bg-white dark:bg-black  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-400"
                  >
                    <span className="sr-only">Close main menu</span>
                    <svg viewBox="0 0 100 80" width="20" height="20">
                      <rect width="100" height="20"></rect>
                      <rect y="30" width="100" height="20"></rect>
                      <rect y="60" width="100" height="20"></rect>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className={`lg:flex ${isOpen ? "block" : "hidden"} `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                  
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                    </a>
                  
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                    </a>
                  
                
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      
                    </a>
                    <Link href="/contact">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      role="menuitem"
                    >
                      Contact
                    </a>
                    </Link>
                </div>
                  <div role="none" href="mailto:hallo@geniti.nl" >
                    <a
                      className="block w-full px-5 py-3 text-center font-medium  text-white bg-yellow-600 hover:bg-yellow-400"
                      role="menuitem"
                    >
                      Stuur een bericht
                    </a>
                  </div>
              </div>
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center sm:text-center lg:text-left">
            <h1 className="mt-2 text-5xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
        <span className="lg:inline-block dark:text-white">Razendsnelle</span>
        <span className="mt-4  block text-yellow-400"><Typing /></span>
      </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Voor wie opzoek is naar een partner die de juiste handvaten biedt om jouw online droom te verwezenlijken. Geniti denkt graag met je mee! ​
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
              
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-black md:py-4 md:text-lg md:px-10">
Mijn Diensten                    </a>
                </div>

                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="tel:=31647611940"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400  hover:bg-gray-200 hover:text-black md:py-4 md:text-lg md:px-10"
                  >
                    Projecten
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      </div>
  );
};

export default HeroSection;
