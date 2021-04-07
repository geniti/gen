import React from 'react'
import Link from "next/link"

function Pricing() {
    return (
        <div>
            <section className="text-gray-400 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h2 className="text-base text-yellow-400 font-semibold tracking-wide uppercase" data-aos="fade-down">Dit zijn mijn tarieven</h2>
      <h1 id="prijzen" className="mt-2 text-5xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white" data-aos="fade">Mijn Prijzen</h1>
    
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden" data-aos="fade-left" data-aos-duration="700">
          <h2 className="text-sm tracking-widest title-font mb-1 font-semibold dark:text-white">WEBSITE</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white">
            <span>€2250,-</span>
            <span className="text-lg ml-1 font-normal text-gray-400 dark:text-white">/vanaf</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Razendsnel zonder laadtijd
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Technische SEO
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Inclusief alle opties
          </p>
          <Link href="/contact">
          <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-400 rounded">Plan een gesprek
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
          <p className="text-xs text-gray-400 mt-3">100% tevredenheidsgarantie</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-yellow-400 flex flex-col relative overflow-hidden" data-aos="fade-down" data-aos-duration="500">
          <span className="bg-yellow-400 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">VAAK GEKOZEN</span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-semibold dark:text-white">WEBSHOP</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white">
            <span>€2750</span>
            <span className="text-lg ml-1 font-normal text-gray-400 dark:text-white">/vanaf</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Razendsnel zonder laadtijd
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Volledig geautomatiseerd
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Makkelijk in beheer
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Technische SEO
          </p>
          <Link href="/contact">
          <button className="flex items-center mt-auto text-white bg-yellow-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-400 rounded">Plan een gesprek
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
          <p className="text-xs text-gray-400 mt-3">100% tevredenheidsgarantie</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden" data-aos="fade-down" data-aos-duration="500">
          <h2 className="text-sm tracking-widest title-font mb-1 font- dark:text-white">WORDPRESS</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white">
            <span>€1000</span>
            <span className="text-lg ml-1 font-normal text-gray-400 dark:text-white">/vanaf</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Designs met Elementor
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Premium plugins
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Makkelijk in gebruik
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Open source
          </p>
          <p className="flex items-center text-gray-400 mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Voor snelle starters
          </p>
          <Link href="/contact">
          <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-400 rounded">Plan een gesprek
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
          <p className="text-xs text-gray-400 mt-3">100% tevredenheidsgarantie</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden" data-aos="fade-right" data-aos-duration="700">
          <h2 className="text-sm tracking-widest title-font mb-1 font-semibold dark:text-white">UURTJE FACTUURTJE?</h2>
          <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:text-white">
            <span>€52,-</span>
            <span className="text-lg ml-1 font-normal text-gray-400 dark:text-white">/p.u</span>
          </h1>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Wordpress aanpassingen
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Technische hulp
          </p>
          
          <Link href="/contact">
          <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-400 rounded">Plan een gesprek
            <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </Link>
          <p className="text-xs text-gray-400 mt-3">100% tevredenheidsgarantie</p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Pricing
