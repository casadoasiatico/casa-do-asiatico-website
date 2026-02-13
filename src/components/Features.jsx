import React from 'react';
import carIcon from '../assets/features/car_icon.png';
import shieldIcon from '../assets/features/shield_icon.png';
import handsIcon from '../assets/features/hands_icon.png';
import { motion } from 'framer-motion';

const features = [
    {
        icon: carIcon,
        title: "PEÇAS QUE VOCÊ PRECISA",
        description: "De Towner a Chery, temos a peça certa para o seu carro.",
        size: "h-14"
    },
    {
        icon: shieldIcon,
        title: "CONFIANÇA GARANTIDA",
        description: "Garantia e qualidade em todas as peças.",
        size: "h-20"
    },
    {
        icon: handsIcon,
        title: "ATENDIMENTO DE VERDADE",
        description: "Entregamos para todo o Brasil.",
        size: "h-16"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-white text-black border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-6 text-black h-20 flex items-end justify-center">
                                <img src={feature.icon} alt={feature.title} className={`${feature.size} w-auto object-contain`} />
                            </div>
                            <h3 className="font-heading font-bold text-2xl uppercase tracking-tight mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
