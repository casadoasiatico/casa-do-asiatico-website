import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import carImage from '../assets/pecas/CASA_DO_ASIATICO_CARRO_01.png';

const hotspots = [
    {
        id: 1,
        x: 18,
        y: 40,
        title: "MOTOR",
        items: ["Anéis", "Bronzinas", "Bombas (d'Água & Óleo)", "Embreagens", "Filtros", "Juntas", "Pistões"],
        footer: "Entre outros"
    },
    {
        id: 2,
        x: 35,
        y: 53,
        title: "CÂMBIO",
        items: ["Caixa de Câmbio", "Engrenagens", "Rolamentos"],
        footer: "Entre outros"
    },
    {
        id: 3,
        x: 69,
        y: 62,
        title: "SUSPENSÃO",
        items: ["Amortecedores", "Bandejas", "Bieletas", "Buchas", "Coifas", "Molas", "Pivôs"],
        footer: "Entre outros"
    },
    {
        id: 4,
        x: 85,
        y: 32,
        title: "ELÉTRICOS",
        items: ["Chaves de Seta", "Reguladores de Voltagem", "Sensores"],
        footer: "Entre outros"
    }
];

// Detect touch device
const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Desktop Floating Tooltip — only used on md+
const DesktopTooltip = ({ hotspot, position, nudgeX }) => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className={`absolute ${position.top ? 'bottom-full mb-4' : 'top-full mt-4'} left-1/2 w-64 bg-white rounded shadow-xl border border-gray-100 z-20 text-left overflow-hidden`}
        style={{ transform: `translateX(calc(-50% + ${nudgeX}px))` }}
    >
        <TooltipContent hotspot={hotspot} />
    </motion.div>
);

// Shared tooltip content
const TooltipContent = ({ hotspot }) => (
    <>
        <div className="bg-white text-black px-4 pt-4 pb-2 font-heading font-bold uppercase text-base sm:text-lg border-b border-gray-50">
            {hotspot.title}
        </div>
        <ul className="px-4 py-2 list-disc list-inside text-xs sm:text-sm text-black space-y-1 font-medium">
            {hotspot.items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {hotspot.footer && (
            <div className="px-4 pb-2 pt-2 text-xs text-gray-400 font-light">
                {hotspot.footer}
            </div>
        )}
        <div className="px-4 pb-4">
            <a
                href="https://w.app/casadoasiatico"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-primary hover:bg-red-700 text-white text-xs font-bold py-2 uppercase tracking-wide transition-colors"
            >
                Orçar no WhatsApp
            </a>
        </div>
    </>
);

// Hotspot dot component
const HotspotItem = ({ hotspot, active, onToggle, isMobile }) => {
    const [position, setPosition] = useState({ top: true });
    const [nudgeX, setNudgeX] = useState(0);
    const itemRef = React.useRef(null);
    const isTouch = isTouchDevice();

    useEffect(() => {
        if (!isMobile && active && itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const tooltipWidth = 256; // w-64 = 256px

            const spaceBottom = viewportHeight - rect.bottom;
            const isBottomSpaceAvailable = spaceBottom > 300;

            const tooltipLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
            const tooltipRight = tooltipLeft + tooltipWidth;
            let nudge = 0;

            if (tooltipLeft < 16) {
                nudge = 16 - tooltipLeft;
            } else if (tooltipRight > viewportWidth - 16) {
                nudge = (viewportWidth - 16) - tooltipRight;
            }

            setNudgeX(nudge);
            setPosition({
                top: !isBottomSpaceAvailable
            });
        }
    }, [active, isMobile]);

    return (
        <div
            ref={itemRef}
            data-hotspot
            className={`absolute w-6 h-6 -ml-3 -mt-3 md:w-8 md:h-8 md:-ml-4 md:-mt-4 cursor-pointer transition-[z-index] ${active ? 'z-20' : 'z-10'}`}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            {...(!isTouch ? {
                onMouseEnter: () => onToggle(hotspot.id),
                onMouseLeave: () => onToggle(null),
            } : {})}
            onClick={(e) => {
                e.stopPropagation();
                onToggle(active ? null : hotspot.id);
            }}
        >
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-primary ${active ? 'opacity-0' : 'opacity-75'}`}></span>
            <span className={`relative inline-flex rounded-full h-full w-full border-2 border-white items-center justify-center transition-colors ${active ? 'bg-primary' : 'bg-primary/20'}`}>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>

            {!isMobile && (
                <AnimatePresence>
                    {active && (
                        <>
                            <DesktopTooltip hotspot={hotspot} position={position} nudgeX={nudgeX} />
                            {/* Invisible overlay to keep tooltip open when moving mouse to it */}
                            <div className={`absolute ${position.top ? 'bottom-full' : 'top-full'} left-1/2 -translate-x-1/2 w-64 h-4`} />
                        </>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

const Products = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Close tooltip when tapping outside on touch devices
    useEffect(() => {
        if (!isTouchDevice()) return;
        const handleOutsideClick = (e) => {
            if (!e.target.closest('[data-hotspot]') && activeHotspot !== null) {
                setActiveHotspot(null);
            }
        };
        document.addEventListener('touchstart', handleOutsideClick);
        return () => document.removeEventListener('touchstart', handleOutsideClick);
    }, [activeHotspot]);

    const activeData = hotspots.find(h => h.id === activeHotspot);

    return (
        <section id="pecas" className="py-16 sm:py-24 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none mb-4">
                    Peças que Trabalhamos
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-12">Passe o mouse ou toque nos círculos para interagir.</p>

                <div className="relative max-w-5xl mx-auto aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1]">
                    <img
                        src={carImage}
                        alt="Carro Esquemático"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />

                    {hotspots.map((hotspot) => (
                        <HotspotItem
                            key={hotspot.id}
                            hotspot={hotspot}
                            active={activeHotspot === hotspot.id}
                            onToggle={setActiveHotspot}
                            isMobile={isMobile}
                        />
                    ))}
                </div>

                {/* Mobile tooltip — shown below the car image */}
                <AnimatePresence mode="wait">
                    {isMobile && activeData && (
                        <motion.div
                            key={activeData.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-2 mx-auto max-w-sm bg-white rounded shadow-xl border border-gray-100 text-left overflow-hidden"
                        >
                            <TooltipContent hotspot={activeData} />
                        </motion.div>
                    )}
                </AnimatePresence>

                <a
                    href="https://w.app/casadoasiatico"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 sm:mt-12 inline-block bg-primary hover:bg-red-700 text-white font-body font-bold py-3 px-6 sm:px-8 uppercase tracking-wider transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                    Ver Catálogo Completo
                </a>
            </div>
        </section>
    );
};

export default Products;
