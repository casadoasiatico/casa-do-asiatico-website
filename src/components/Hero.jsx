import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/hero_video.mp4';

const Hero = () => {
    return (
        <section className="relative h-dvh min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/75 z-10" />
                {/* Video Background */}
                <video
                    className="w-full h-full object-cover opacity-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-normal mb-4 leading-none uppercase drop-shadow-lg">
                        Confiança e Qualidade Que Movem Carros Asiáticos Há Mais de uma Década.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-4 text-base sm:text-lg md:text-xl text-white font-body w-full mx-auto font-light tracking-wide mb-8 uppercase"
                >
                    Peças com procedência, atendimento de verdade e tradição desde 2013.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="https://wa.me/5511988366393"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 bg-primary hover:bg-red-700 text-white font-body font-bold text-sm sm:text-base py-2.5 px-5 sm:px-6 uppercase tracking-widest transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(218,13,38,0.5)] border border-red-500/50 whitespace-nowrap"
                    >
                        Peça Sua Cotação Agora
                        <ArrowRight size={24} />
                    </a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};

export default Hero;
