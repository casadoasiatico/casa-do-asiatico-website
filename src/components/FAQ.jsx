import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "QUAL É A POLÍTICA DE DEVOLUÇÃO?",
        answer: "Aceitamos devoluções dentro de 7 dias corridos após o recebimento, desde que o produto esteja sem uso, na embalagem original e com nota fiscal. Entre em contato com nossa equipe para orientações."
    },
    {
        question: "QUANDO RECEBEREI MEU PEDIDO?",
        answer: "O prazo de entrega é informado no momento do atendimento. Ele pode variar conforme a disponibilidade da peça, a região e a forma de envio escolhida. Nosso compromisso é sempre buscar a opção mais ágil e segura para você."
    },
    {
        question: "ONDE SÃO FABRICADOS OS PRODUTOS?",
        answer: "Trabalhamos com peças originais, importadas e nacionais para veículos asiáticos. A origem pode variar de acordo com a peça, mas sempre garantimos qualidade e procedência."
    },
    {
        question: "COMO FUNCIONA O FRETE?",
        answer: "O valor do frete é calculado durante o atendimento, com base no seu endereço e na melhor forma de envio para o seu pedido. Nossos vendedores avaliam cada caso para garantir custo justo e entrega eficiente."
    },
    {
        question: "ATENDEM OFICINAS E MECÂNICOS?",
        answer: "Sim! Oferecemos atendimento especializado e condições comerciais exclusivas para oficinas mecânicas e auto centers parceiros. Entre em contato para realizar seu cadastro."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-16 pb-24 bg-white text-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none mb-12 text-center md:text-left">
                    Perguntas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                            >
                                <span className="text-base sm:text-lg md:text-xl font-heading font-bold uppercase group-hover:text-primary transition-colors pr-4 sm:pr-8">
                                    {faq.question}
                                </span>
                                <span className="text-primary flex-shrink-0">
                                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-gray-600 leading-relaxed text-lg font-light">
                                            {faq.answer}
                                        </p>
                                        {index === 4 && (
                                            <a
                                                href="https://wa.me/5511988366393?text=Ol%C3%A1!%20%F0%9F%91%8B%F0%9F%88%B4%0AQuero%20saber%20sobre%20uma%20pe%C3%A7a."
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block bg-primary text-white font-body font-bold py-2 px-6 text-sm uppercase mb-6"
                                            >
                                                Enviar Mensagem
                                            </a>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
