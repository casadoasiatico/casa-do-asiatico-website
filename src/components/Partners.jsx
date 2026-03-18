import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Clock, TrendingUp } from 'lucide-react';

const PartnerItem = ({ item, itemVariants }) => {
    const textRef = useRef(null);
    const [iconSize, setIconSize] = useState(null); // Null means use CSS defaults
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            const matches = window.matchMedia('(min-width: 1024px)').matches;
            setIsDesktop(matches);
            if (!matches) setIconSize(null); // Reset on mobile
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    useEffect(() => {
        if (!isDesktop || !textRef.current) return;

        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.contentRect.height > 0) {
                    setIconSize(entry.contentRect.height);
                }
            }
        });

        observer.observe(textRef.current);
        return () => observer.disconnect();
    }, [isDesktop]);

    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:flex-row lg:items-stretch gap-4 lg:gap-6 group text-center lg:text-left"
        >
            <div
                className={`shrink-0 flex items-center justify-center bg-primary rounded text-white group-hover:bg-red-800 transition-colors duration-300 ${!isDesktop ? 'w-16 h-16 sm:w-20 sm:h-20' : ''}`}
                style={isDesktop && iconSize ? {
                    width: `${iconSize}px`,
                    height: `${iconSize}px`
                } : {}}
            >
                {item.icon}
            </div>
            <div className="flex-1 py-1" ref={textRef}>
                <h3 className="text-xl font-heading font-bold uppercase mb-2 text-white">{item.title}</h3>
                <p className="text-gray-200 font-light leading-relaxed">{item.description}</p>
            </div>
        </motion.div>
    );
};

const Partners = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const benefits = [
        {
            icon: <TrendingUp size={32} />,
            title: "Condições Exclusivas",
            description: "Tabela de preços diferenciada para CNPJ e compras recorrentes."
        },
        {
            icon: <Clock size={32} />,
            title: "Entrega Prioritária",
            description: "Sabemos que o carro não pode ficar parado no elevador. Agilidade é nossa prioridade."
        },
        {
            icon: <Wrench size={32} />,
            title: "Suporte Técnico",
            description: "Time especializado para ajudar na identificação correta da peça, evitando devoluções."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="oficina-parceira" ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Left Content */}
                    <motion.div
                        className="text-center lg:text-left flex flex-col justify-between"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase leading-none mb-8">
                                Sua oficina merece um parceiro especialista
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Cansado de perder tempo procurando a peça certa ou sofrendo com atrasos na entrega?
                                Na Casa do Asiático, entendemos a rotina da sua oficina. Seja nosso parceiro e tenha
                                um estoque completo de peças asiáticas à sua disposição.
                            </p>
                        </div>

                        {/* Desktop-only button — pushed to bottom by justify-between */}
                        <div className="hidden lg:block mt-10">
                            <a
                                href="https://wa.me/5511988366393?text=Ol%C3%A1!%20%F0%9F%91%8B%F0%9F%88%B4%0AQuero%20saber%20sobre%20uma%20pe%C3%A7a."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block bg-primary hover:bg-red-700 text-white font-body font-bold py-3 px-8 uppercase tracking-wider transition-colors whitespace-nowrap text-sm sm:text-base"
                            >
                                Cadastrar Minha Oficina
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Content - Cards */}
                    <motion.div
                        className="grid gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {benefits.map((item, index) => (
                            <PartnerItem key={index} item={item} itemVariants={itemVariants} />
                        ))}
                    </motion.div>
                </div>

                {/* Mobile-only button — appears after features */}
                <div className="mt-10 text-center lg:hidden">
                    <a
                        href="https://wa.me/5511988366393?text=Ol%C3%A1!%20%F0%9F%91%8B%F0%9F%88%B4%0AQuero%20saber%20sobre%20uma%20pe%C3%A7a."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-primary hover:bg-red-700 text-white font-body font-bold py-3 px-8 uppercase tracking-wider transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                        Cadastrar Minha Oficina
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Partners;
