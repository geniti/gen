import React from 'react'
import Stories from '../components/Stories';

function Header2() {

    return (
        
             // header nav
    <div className="bg-gray-100 dark:bg-black">
      {/*nav*/}
      <nav className="bg-white dark:bg-black h-max md:h-14 w-full shadow flex flex-col md:flex-row items-center justify-center md:justify-between  border-b dark:border-yellow-400">
        {/*nav left*/}
        <div className="flex items-center justify-between w-full md:w-max px-4 py-2">
          <a className="mr-2 hidden md:inline-block">
            <img
              className="w-24 sm:w-20 h-auto"
              src="geniti logo.svg"
              alt="logo"
            />
          </a>
          <a className="inline-block md:hidden">
            <img
              className="w-32 h-auto"
              src="geniti logo.svg"
              alt="logo"
            />
          </a>
          <div className="flex items-center justify-between space-x-1 hidden">
            <div className="relative bg-gray-100 dark:bg-dark-third px-2 py-2 w-10 h-10 sm:w-11 sm:h-11 lg:h-10 lg:w-10 xl:w-max xl:pl-3 xl:pr-8 rounded-full flex items-center justify-center cursor-pointer">
              <i className="bx bx-search-alt-2 text-xl xl:mr-2 dark:text-white"></i>
              <input
                type="text"
                placeholder="Search Festiwall"
                className="outline-none bg-transparent hidden xl:inline-block"
              ></input>
            </div>
          </div>
          {/*nav left end*/}
         <Stories />
        </div>
        {/*nav main*/}
        
          
        
        {/*end of main*/}
  
      </nav>

            
        </div>
    )
}

export default Header2
