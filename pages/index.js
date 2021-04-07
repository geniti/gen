import React, { useEffect } from 'react'
import Head from 'next/head'
import Aos from "aos";
import "aos/dist/aos.css";
import Pricing from '../components/Pricing';
import Toolkit from '../components/Toolkit';
import Me from '../components/Me';
import Services from '../components/Services';
import Logos from '../components/Logos';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import HeroSection from '../components/HeroSection';



const index = () => {
   useEffect(() => {
       Aos.init({ duration: 1000});
   }, []);

    return (
        <div className="dark:bg-black">
             <Head>
                <title>Geniti</title>
                <link rel="Icon" href="/favicon.ico"></link>
                <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


            </Head>
            <HeroSection />
<Services />
<Me />
<Reviews />



<Toolkit />
<Pricing />
<Logos />



 <Footer />

        
<script src="./pages/toggle.js"></script>
<script>
    AOS.init();
  </script>


        </div>
    )
}

export default index
