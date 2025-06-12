import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Awards from './Awards';
function HomePage() {
    return ( 
        <>

            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>


        </>
     );
}

export default HomePage;