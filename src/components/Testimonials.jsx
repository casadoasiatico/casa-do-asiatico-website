import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { motion } from 'framer-motion';
import andreiaFeedback from '../assets/feedback/ANDREIA_FEEDBACK.png';
import flavioFeedback from '../assets/feedback/FLAVIO_FEEDBACK.png';
import reinaldoFeedback from '../assets/feedback/REINALDO_FEEDBACK.png';

const testimonials = [
    {
        name: "Andréia V.",
        car: "Lifan X60",
        rating: 5,
        text: "Preço e atendimento excelente! Recomendo.",
        image: andreiaFeedback
    },
    {
        name: "Flávio A.",
        car: "Effa Towner",
        rating: 4.5,
        text: "Levei meu carro e o atendimento foi legal, boa experiência na recepção! Pessoal parece entender bem o que faz e tem coerência na conversa. Sem tentativa de empurrar nada. Preço ok e entrega rápida sem enrolação.",
        image: flavioFeedback
    },
    {
        name: "Reinaldo C.",
        car: "Tiggo 5x 2023",
        rating: 5,
        text: "Lugar maravilhoso, profissionais competentes e muito bom senso no orçamento.",
        image: reinaldoFeedback
    }
];

const Testimonials = () => {
    return (
        <section id="depoimentos" className="py-24 bg-gray-50 text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none mb-16 text-center md:text-left">
                    O Que Falam de Nós
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-lg uppercase">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.car}</p>
                                </div>
                            </div>

                            <div className="flex mb-4 text-primary">
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <span key={i} className="relative">
                                            {testimonial.rating >= ratingValue ? (
                                                <Star size={16} fill="currentColor" className="text-primary" />
                                            ) : testimonial.rating >= ratingValue - 0.5 ? (
                                                <div className="relative inline-block">
                                                    <Star size={16} fill="currentColor" className="text-gray-200" />
                                                    <div className="absolute top-0 left-0 overflow-hidden w-[50%]">
                                                        <Star size={16} fill="currentColor" className="text-primary" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <Star size={16} fill="currentColor" className="text-gray-200" />
                                            )}
                                        </span>
                                    );
                                })}
                            </div>

                            <p className="text-gray-600 leading-relaxed italic break-words">
                                "{testimonial.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
