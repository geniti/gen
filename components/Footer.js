import React from 'react'
import ContactForm2 from './ContactForm2'

function Footer() {
    return (
        <div className="dark:bg-black">
             <section className="text-gray-400 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
    <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase" data-aos="fade-down">Ik help je graag verder</h2>
      <h1 className="mt-2 text-5xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white" data-aos="fade">Neem Contact Op</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 w-screen md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col" data-aos="fade-down" data-aos-duration="100">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-semibold">Mijn locatie</h2>
          </div>
          <div className="flex-grow">
          <p className="ml-10 pl-1 leading-relaxed text-base">​Tilburg, Noord-Brabant</p>
            <a className="mt-3 text-yellow-400 inline-flex items-center">
          
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 w-screen md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col" data-aos="fade-down" data-aos-duration="300">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-semibold">Bereikbaar voor vragen</h2>
          </div>
          <div className="flex-grow">
          <p className="ml-10 pl-1 leading-relaxed text-base">​Tel: 06-47611940</p>

            <a className="mt-3 text-yellow-400 inline-flex items-center">
              
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 w-screen md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col" data-aos="fade-down" data-aos-duration="500">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-semibold">Stuur mij een E-mail</h2>
          </div>
          <div className="flex-grow">
          <p className="ml-10 pl-1 leading-relaxed text-base">​Mail naar: hallo@geniti.nl</p>
            <a className="mt-3 text-yellow-400 inline-flex items-center">
              
            </a>
          </div>
          
        </div>
        
      </div>
      </div>
   
        
        <ContactForm2 />
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-yellow-400">Hallo@geniti.nl</a>
          <p className="leading-normal my-5">Nijmegen Breda Almere Tilburg Groningen Eindhoven Utrecht Den Haag Rotterdam Amsterdam
          </p>
          <span className="inline-flex">
            <a className="text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
     
  </div>
</section>
        </div>
    )
}

export default Footer
