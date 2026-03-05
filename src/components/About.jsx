import React from 'react';
import { motion } from 'framer-motion';
import fachadaImage from '../../assets/SOBRE/CASA_DO_ASIATICO_FACHADA.jpg';

const About = () => {
    return (
        <section id="sobre-nos" className="py-24 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none mb-8 text-center lg:text-left">
                            Sobre a Casa do Asiático
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 font-body font-light leading-relaxed text-center lg:text-left">
                            <p>
                                A Casa do Asiático nasceu para ser referência em peças para carros de origem oriental no Brasil. Desde o início, construímos nossa reputação pela especialização, pela confiança e pela capacidade de entregar aquilo que parecia difícil de encontrar no mercado.
                            </p>
                            <p>
                                Hoje, seguimos com o mesmo propósito: oferecer qualidade, procedência e tranquilidade para quem precisa manter seu carro em ordem. Seja para o mecânico que busca agilidade na oficina ou para o motorista que valoriza segurança e durabilidade, nossa missão é simples — encontrar a peça certa e entregar a confiança que nossos clientes esperam.
                            </p>

                        </div>

                        {/* Button - desktop only */}
                        <div className="mt-10 text-left hidden lg:block">
                            <a
                                href="https://wa.me/5511988366393"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-primary hover:bg-red-700 text-white font-body font-bold py-3 px-8 uppercase tracking-wider transition-colors whitespace-nowrap text-sm sm:text-base"
                            >
                                Peça Agora
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full order-2"
                    >

                        {/* Main Image */}
                        <div className="relative z-10 h-full min-h-[300px] lg:min-h-0 bg-neutral-900 overflow-hidden group">
                            <img
                                src={fachadaImage}
                                alt="Fachada Casa do Asiático"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="font-heading font-bold text-2xl uppercase">Tradição e Modernidade</p>
                                <p className="text-gray-400 text-sm">Especialistas em asiáticos desde 2013</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Button - mobile only, after image */}
                    <div className="order-3 text-center lg:hidden">
                        <a
                            href="https://wa.me/5511988366393"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-primary hover:bg-red-700 text-white font-body font-bold py-3 px-8 uppercase tracking-wider transition-colors whitespace-nowrap text-sm sm:text-base"
                        >
                            Peça Agora
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
