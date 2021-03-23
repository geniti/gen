import React from 'react'
import Link from "next/link"

function Me() {
    return (
        <div>
             <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h2 class="text-base text-yellow-400 font-semibold tracking-wide uppercase" data-aos="fade-down" data-aos-duration="300">Oplossingen</h2>

      <h1 className="mt-3 text-5xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white" data-aos="fade-down" data-aos-duration="900">Mijn Toolkit
        <span className="hidden lg:inline-block"></span>
      </h1>
      <p className="mt-8 mb-8 md:pr-24 lg:pr-24 leading-relaxed">Samen maken we impact en boeken wij resultaat in de digitale wereld, in welke branch je ook actief bent, met mij aan je zij, raken we de juiste snaar bij je bezoekers</p>
      <div class="rounded-md shadow">
        <Link href="#prijzen">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-yellow-400 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
               Aan de slag
              </a>
              </Link>
            </div>
      
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <div class="w-full">
        
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="300"> 
        <h4 class="font-semibold mb-1">ReactJS </h4>
                <div class="bg-black text-xs leading-none text-center text-white rounded" style={{width: '85%'}}>85%</div>
        </div>
       
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="500">
        <h4 class="font-semibold mb-1">NextJS</h4>
        <div class="bg-black text-xs leading-none  text-center text-white rounded" style={{width: '75%'}}>75%</div>
        </div>
        
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="700">
        <h4 class="font-semibold mb-1">MongoDB</h4>
        <div class="bg-black text-xs leading-none text-center text-white rounded" style={{width: '85%'}}>85%</div>
        </div>
       
        <div class="shadow w-full bg-grey-light mt-2 bg-white border border-2 p-4 rounded" data-aos="fade-down" data-aos-duration="900">
        <h4 class="font-semibold mb-1">Wordpress</h4>
        <div class="bg-black text-xs leading-none text-center text-white rounded" style={{width: '100%'}}>100%</div>
        </div>
</div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Me
