import React from 'react'
import Link from 'next/link'
import Lottie from "lottie-web"
import Typing from '../components/animations/Typing'


function Hero() {
    return (
        <div>
            <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        
      <h1 className="mt-2 text-5xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl">
        <span className="lg:inline-block dark:text-white">Razendsnelle</span>
        <span class="mt-4  block text-yellow-400"><Typing /></span>
      </h1>
     
      
      <p className="mt-4 max-w-2xl text-xl text-gray-400">Voor wie opzoek is naar een partner die de juiste handvaten biedt om jouw online droom te verwezenlijken. Geniti denkt graag met je mee!
​</p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-yellow-400 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 dark:text-black">
                Mijn Diensten
              </a>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-yellow-400 md:py-4 md:text-lg md:px-10">
                Mijn Projecten
              </a>
            </div>
          </div>
          
    </div>
    <Link href="/">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      
      <img className="object-cover object-center rounded" alt="hero" src="geniti.png"/>
    </div>
    </Link>
  </div>
</section>
        </div>
    )
}

export default Hero
