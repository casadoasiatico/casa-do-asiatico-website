import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Lenis from 'lenis';
import { useEffect } from 'react';

// Reset scroll on route change (skip if there's a hash in the URL)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}


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

    // Handle initial page load with hash in URL
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.substring(1);
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          if (targetId === 'contato') {
            lenis.scrollTo('bottom', { immediate: true });
          } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              lenis.scrollTo(targetElement, { immediate: true });
            }
          }
        }, 100);
      }
    };

    handleInitialHash();

    // Handle Anchor Links with Event Delegation
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        if (targetId === 'contato') {
          lenis.scrollTo('bottom');
        } else {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            lenis.scrollTo(targetElement);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-body antialiased overflow-x-hidden relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-servico" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </Router>
  );
}

export default App;
