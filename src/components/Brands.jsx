import React from 'react';
import { motion } from 'framer-motion';

import chanaLogo from '../assets/brands/CHANA_LOGO.png';
import changanLogo from '../assets/brands/CHANGAN_LOGO.png';
import cheryLogo from '../assets/brands/CHERY_LOGO.png';
import effaLogo from '../assets/brands/EFFA_LOGO.png';
import jacLogo from '../assets/brands/JAC_LOGO.png';
import lifanLogo from '../assets/brands/LIFAN_LOGO.png';
import relyLogo from '../assets/brands/RELY_LOGO.png';
import shinerayLogo from '../assets/brands/SHINERAY_LOGO.png';
import topicLogo from '../assets/brands/TOPIC_LOGO.png';

const brands = [
    { name: "Chana", logo: chanaLogo },
    { name: "Changan", logo: changanLogo },
    { name: "Chery", logo: cheryLogo },
    { name: "Effa", logo: effaLogo },
    { name: "JAC", logo: jacLogo },
    { name: "Lifan", logo: lifanLogo },
    { name: "Rely", logo: relyLogo },
    { name: "Shineray", logo: shinerayLogo },
    { name: "Topic", logo: topicLogo }
];

// Duplicate brands for seamless loop
const marqueeBrands = [...brands, ...brands, ...brands];

const Brands = () => {
    return (
        <section className="py-16 md:py-32 bg-white text-black overflow-hidden relative border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none">
                    Marcas que Trabalhamos
                </h2>

            </div>

            <div className="w-full overflow-hidden mask-gradient-fade">
                <motion.div
                    className="flex gap-8 sm:gap-12 md:gap-24 w-max"
                    animate={{ x: "-33.33%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {marqueeBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            {/* Placeholder for Logo - Styled Text */}
                            <img src={brand.logo} alt={brand.name} className="h-12 md:h-16 w-auto object-contain" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Brands;
