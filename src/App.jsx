import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Brands from './components/Brands';
import About from './components/About';
import QuoteBanner from './components/QuoteBanner';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle Anchor Links independently for Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'));
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-body antialiased overflow-x-hidden">
      <Header />
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
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
