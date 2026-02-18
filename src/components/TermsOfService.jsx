import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">TERMOS DE SERVIÇO</h1>
                    <p className="text-gray-400 mb-8">Última atualização: 18 de fevereiro de 2026</p>

                    <div className="space-y-6 text-gray-300 font-body leading-relaxed">
                        <p>
                            Ao acessar, utilizar e realizar compras na Casa do Asiático, você declara estar ciente e de acordo com os presentes Termos de Serviço, que regem a relação entre nossa loja e você, cliente.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">CONDIÇÕES GERAIS</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>A Casa do Asiático oferece autopeças originais, paralelas e compatíveis para veículos asiáticos.</li>
                            <li>A conclusão da compra está condicionada à confirmação de pagamento.</li>
                            <li>Os preços, promoções e condições comerciais podem ser alterados sem aviso prévio, mas não afetarão pedidos já finalizados.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">RESPONSABILIDADES DO CLIENTE</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Fornecer dados corretos e completos durante a compra.</li>
                            <li>Verificar a compatibilidade da peça com o modelo e ano do veículo.</li>
                            <li>Garantir que a instalação seja realizada por profissional qualificado.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">RESPONSABILIDADES DA CASA DO ASIÁTICO</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Oferecer produtos em conformidade com as descrições e especificações.</li>
                            <li>Garantir embalagens adequadas para envio.</li>
                            <li>Prestar suporte em caso de problemas relacionados ao pedido.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">GARANTIA</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Todos os produtos possuem garantia legal de 90 dias contra defeitos de fabricação.</li>
                            <li>Garantias adicionais, quando aplicáveis, serão informadas na descrição do produto.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">LIMITAÇÃO DE RESPONSABILIDADE</h2>
                        <p>
                            A Casa do Asiático não se responsabiliza por danos decorrentes de instalação inadequada, uso incorreto ou modificações nos produtos.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
