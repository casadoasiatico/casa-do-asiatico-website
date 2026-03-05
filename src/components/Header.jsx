import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const isHomePage = location.pathname === '/';

    const navLinks = [
        { title: "SOBRE NÓS", href: isHomePage ? "#sobre-nos" : "/#sobre-nos" },
        { title: "PEÇAS", href: isHomePage ? "#pecas" : "/#pecas" },
        { title: "CONTATO", href: isHomePage ? "#localizacao" : "/#localizacao" },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled || isOpen ? 'bg-black border-b border-white/10' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="/">
                            <img src={logo} alt="Casa do Asiático" className="h-9 w-auto max-w-[140px] object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-gray-300 hover:text-white hover:text-primary transition-colors font-body font-medium text-sm tracking-wide"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/5511988366393"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-primary hover:bg-red-700 text-white font-body font-bold py-1.5 px-5 text-sm uppercase tracking-wider transition-all transform hover:scale-105 whitespace-nowrap"
                        >
                            Peça uma Cotação
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white hover:text-primary transition-colors">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-lg font-body font-medium text-white hover:text-primary hover:bg-white/5 rounded-md transition-colors"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5511988366393"
                                target="_blank"
                                rel="noreferrer"
                                className="block mt-4 w-full text-center bg-primary text-white font-body font-bold py-3 uppercase tracking-wider whitespace-nowrap"
                            >
                                Peça uma Cotação
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
