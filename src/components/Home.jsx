import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Brands from './Brands';
import About from './About';
import QuoteBanner from './QuoteBanner';
import Products from './Products';
import Testimonials from './Testimonials';
import Partners from './Partners';
import FAQ from './FAQ';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <Brands />
            <About />
            <QuoteBanner />
            <Products />
            <Testimonials />
            <Partners />
            <FAQ />
        </main>
    );
};

export default Home;
