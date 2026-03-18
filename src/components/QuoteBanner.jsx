import React from 'react';
import { motion } from 'framer-motion';

const QuoteBanner = () => {
    return (
        <section className="py-20 sm:py-28 bg-white text-black overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.blockquote
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-2"
                >
                    <p className="text-4xl md:text-5xl font-heading font-bold uppercase leading-none tracking-tight max-w-4xl mx-auto">
                        "De Towner a Tiggo, cada peça reflete nossa paixão pela qualidade e pela confiança que entregamos em cada quilômetro da sua história"
                    </p>
                </motion.blockquote>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xs sm:text-sm uppercase text-gray-500 font-body mb-10"
                >
                    Garantindo tudo o que o seu carro asiático precisa desde 2013.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="https://wa.me/5511988366393?text=Ol%C3%A1!%20%F0%9F%91%8B%F0%9F%88%B4%0AQuero%20saber%20sobre%20uma%20pe%C3%A7a."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-primary hover:bg-red-700 text-white font-body font-bold py-3 px-8 uppercase tracking-wider transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                        Quero Cotar Agora
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteBanner;
