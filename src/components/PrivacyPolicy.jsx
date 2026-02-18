import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">POLÍTICA DE PRIVACIDADE</h1>
                    <p className="text-gray-400 mb-8">Última atualização: 18 de fevereiro de 2026</p>

                    <div className="space-y-6 text-gray-300 font-body leading-relaxed">
                        <p>
                            A Casa do Asiático é responsável por esta loja e site, incluindo todas as informações, conteúdos, funcionalidades, ferramentas, produtos e serviços relacionados, com o objetivo de oferecer a você, cliente, uma experiência de compra personalizada (os “Serviços”). Esta Política de privacidade descreve como coletamos, usamos e compartilhamos suas informações pessoais quando você visita, utiliza ou realiza uma compra ou outra transação por meio dos Serviços, ou ainda quando se comunica conosco de qualquer outra forma. Em caso de conflito entre nossos Termos de Serviço e esta Política de privacidade, prevalecerá o disposto nesta Política de privacidade no que diz respeito à coleta, ao processamento e ao compartilhamento das suas informações pessoais.
                        </p>
                        <p>
                            Leia esta Política de privacidade com atenção. Ao utilizar e acessar qualquer um dos Serviços, você reconhece que leu esta Política de privacidade e compreende a forma como suas informações são coletadas, usadas e compartilhadas, conforme descrito nesta Política.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">INFORMAÇÕES PESSOAIS QUE COLETAMOS OU PROCESSAMOS</h2>
                        <p>
                            Quando usamos o termo "informações pessoais", estamos nos referindo a informações que identificam ou podem estar associadas a você ou outra pessoa. Informações pessoais não incluem dados coletados de forma anônima ou que tenham sido desvinculados da identidade do titular, de modo que não possam identificar nem ser associados a você. Podemos coletar ou processar as seguintes categorias de informações pessoais, incluindo inferências obtidas a partir dessas informações, dependendo de como você interage com os Serviços, do local onde você reside e conforme permitido ou exigido pela legislação aplicável:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Informações de contato</strong> incluindo seu nome, endereço, endereço de faturamento, endereço de entrega, telefone e e-mail.</li>
                            <li><strong>Informações financeiras</strong> incluindo números de cartão de crédito, cartão de débito e contas financeiras, informações de cartões de pagamento, dados de contas bancárias, informações de transações, forma de pagamento, comprovantes e demais informações relacionadas ao pagamento.</li>
                            <li><strong>Informações da conta</strong> incluindo seu nome de usuário, senha, perguntas de segurança, preferências e configurações.</li>
                            <li><strong>Informações de transações</strong> incluindo os itens que você visualiza, adiciona ao carrinho, adiciona à lista de desejos, compra, devolve, troca ou cancela, além de suas transações anteriores.</li>
                            <li><strong>Comunicações conosco</strong> incluindo a informação que você fornece quando se comunica conosco, como quando consulta nosso atendimento ao cliente.</li>
                            <li><strong>Informações de dispositivo</strong> incluindo informações sobre dispositivo, navegador ou rede de conexão, seu endereço de IP ou outros identificadores únicos.</li>
                            <li><strong>Informações de uso</strong> incluindo informações sobre a sua interação com os Serviços, como e quando você acessa ou navega por algum deles.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">FONTES DE INFORMAÇÕES PESSOAIS</h2>
                        <p>Podemos coletar informações pessoais das seguintes formas:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Diretamente de você</strong> incluindo quando você cria uma conta, visita ou utiliza os Serviços, comunica-se conosco ou fornece suas informações pessoais de qualquer outra forma.</li>
                            <li><strong>Automaticamente, através dos Serviços</strong> incluindo seu dispositivo quando você utiliza nossos produtos ou serviços ou visita nossos sites, e através de cookies ou tecnologias similares.</li>
                            <li><strong>Dos nossos provedores de serviços</strong> incluindo quando os contratamos para viabilizar determinadas tecnologias e quando eles coletam ou processam suas informações pessoais em nosso nome;</li>
                            <li><strong>Dos nossos parceiros ou de terceiros.</strong></li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">COMO USAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
                        <p>Dependendo de como você interage conosco ou de quais Serviços utiliza, podemos usar suas informações pessoais para os seguintes fins:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Fornecer, personalizar e melhorar os Serviços.</strong> Usamos suas informações pessoais para oferecer Serviços a você, o que inclui cumprir o contrato firmado, processar seus pagamentos e pedidos, lembrar suas preferências e os itens do seu interesse, enviar notificações relacionadas à sua conta, processar compras, devoluções, trocas ou outras transações, criar, manter e gerenciar sua conta, organizar o envio de pedidos, facilitar eventuais devoluções e trocas, permitir que você publique avaliações e proporcionar uma experiência de compra personalizada, como a recomendação de produtos relacionados às suas compras. Isso pode incluir usar suas informações pessoais para personalizar e melhorar os Serviços.</li>
                            <li><strong>Marketing e publicidade.</strong> Usamos suas informações pessoais para fins de marketing e promoção, como o envio de comunicações promocionais, publicitárias e de marketing por e-mail, mensagem de texto ou correspondência, além da exibição de anúncios online sobre produtos ou serviços, tanto nos nossos Serviços quanto em outros sites, inclusive com base em itens que você já comprou, adicionou ao carrinho ou em outras atividades realizadas nos Serviços.</li>
                            <li><strong>Segurança e prevenção contra fraudes.</strong> Usamos suas informações pessoais para autenticar sua conta, garantir uma experiência de compra e pagamento segura, detectar, investigar ou tomar medidas em relação a possíveis atividades fraudulentas, ilegais, inseguras ou mal-intencionadas, proteger a segurança pública e manter a segurança dos nossos serviços. Se você optar por usar os Serviços e criar uma conta, será responsável por manter suas credenciais de acesso em segurança. Para sua segurança, evite compartilhar seu nome de usuário, senha ou qualquer informação de acesso com outras pessoas.</li>
                            <li><strong>Comunicações com você.</strong> Usamos suas informações pessoais para oferecer atendimento ao cliente, responder às suas solicitações, fornecer serviços eficientes e manter nosso relacionamento comercial com você.</li>
                            <li><strong>Razões jurídicas.</strong> Usamos suas informações pessoais para cumprir a legislação aplicável ou responder a processos legais válidos, incluindo solicitações de autoridades policiais ou órgãos governamentais, para investigar ou participar de processos judiciais civis, potenciais ou efetivos, ou outras disputas legais, bem como para aplicar ou investigar possíveis violações dos nossos termos ou políticas.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">COMO COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
                        <p>Em determinadas circunstâncias, podemos compartilhar suas informações pessoais com terceiros para fins legítimos, conforme estabelecido nesta Política de privacidade. Entre essas circunstâncias, estão:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Com fabricantes e outros parceiros que prestam serviços em nosso nome (como gestão de TI, processamento de pagamentos, análise de dados, atendimento ao cliente, armazenamento em nuvem, processamento de pedidos e frete).</li>
                            <li>Com parceiros comerciais e de marketing para oferecer serviços de marketing e propaganda para você. Nossos parceiros comerciais e de marketing utilizarão suas informações de acordo com os próprios avisos sobre políticas de privacidade. Dependendo da sua localização, você pode ter o direito de nos solicitar que não compartilhemos suas informações para exibir anúncios e ações de marketing personalizados com base na sua atividade online em diferentes sites e lojistas. É possível solicitar que seus dados não sejam usados para essas finalidades aqui.</li>
                            <li>Quando você nos autoriza, solicita ou consente com o compartilhamento de determinadas informações com terceiros, por exemplo, para o envio de produtos ou ao utilizar widgets de redes sociais ou integrações de login.</li>
                            <li>Com nossos afiliados ou outras empresas do mesmo grupo econômico.</li>
                            <li>Em conexão com transações comerciais, como fusões ou falências, para cumprir obrigações legais aplicáveis (incluindo o atendimento a intimações, mandados de busca e solicitações similares), para fazer valer os termos de serviço ou políticas vigentes, e para proteger ou defender os Serviços, nossos direitos e os direitos de nossos usuários ou terceiros.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">SITES E LINKS DE TERCEIROS</h2>
                        <p>
                            Os Serviços podem conter links para sites ou outras plataformas online operadas por terceiros. Caso você acesse esses links para sites que não são afiliados nem controlados por nós, recomendamos que revise as políticas de privacidade e de segurança, bem como os termos e condições desses terceiros. Não garantimos nem nos responsabilizamos pelas práticas de privacidade ou segurança desses sites, incluindo a precisão, integridade ou confiabilidade das informações que eles disponibilizam. As informações que você compartilha em ambientes públicos ou semipúblicos, como redes sociais de terceiros, também podem ser visualizadas por outros usuários dos Serviços e/ou dessas plataformas, sem qualquer limitação de uso por nós ou por terceiros. A inclusão desses links nos Serviços não representa, por si só, qualquer endosso do conteúdo dessas plataformas ou de seus proprietários e operadores, salvo se indicado expressamente nos próprios Serviços.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">INFORMAÇÕES DE CRIANÇAS</h2>
                        <p>
                            Os Serviços não são destinados ao uso por crianças e não coletamos, intencionalmente, nenhuma informação pessoal de menores de idade, conforme definido pela legislação aplicável em sua jurisdição. Se você for pai, mãe ou responsável legal de uma criança que compartilhou informações pessoais conosco, poderá entrar em contato pelos canais indicados abaixo para solicitar a exclusão desses dados. No início da vigência desta Política de privacidade, não temos conhecimento real de que "compartilhamos" ou "vendemos" (nos termos definidos pela legislação aplicável) informações pessoais de pessoas com menos de 16 anos.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">SEGURANÇA E RETENÇÃO DAS SUAS INFORMAÇÕES</h2>
                        <p>
                            Embora adotemos medidas de segurança adequadas para proteger suas informações pessoais, nenhum sistema é completamente infalível. Por isso, não podemos garantir “segurança absoluta”. Além disso, os dados transmitidos para nós podem não estar protegidos durante o trajeto. Por esse motivo, recomendamos que você evite enviar informações sensíveis ou confidenciais por meios não seguros.
                        </p>
                        <p>
                            O período pelo qual retemos suas informações pessoais pode variar conforme diversos fatores, incluindo a necessidade de manter sua conta ativa, fornecer os Serviços, cumprir obrigações legais, resolver contestações ou fazer cumprir contratos e políticas aplicáveis.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">SEUS DIREITOS E ESCOLHAS</h2>
                        <p>
                            Dependendo da sua localização, você pode ter alguns ou todos os direitos listados abaixo em relação às suas informações pessoais. No entanto, esses direitos não são absolutos, podem se aplicar apenas em determinadas circunstâncias e, em alguns casos, poderemos recusar a solicitação, conforme permitido por lei.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Direito de acesso/conhecimento.</strong> Você pode ter o direito de solicitar acesso às informações pessoais que mantemos sobre você.</li>
                            <li><strong>Direito de exclusão.</strong> Você pode ter o direito de solicitar que excluamos as informações pessoais que temos sobre você.</li>
                            <li><strong>Direito de correção.</strong> Você pode ter o direito de solicitar a correção de informações pessoais imprecisas que mantemos sobre você.</li>
                            <li><strong>Direito à portabilidade.</strong> Você pode ter o direito de receber uma cópia das suas informações pessoais e de solicitar que elas sejam transferidas para terceiros, em determinadas circunstâncias e com algumas exceções.</li>
                            <li><strong>Gerenciamento das preferências de comunicação.</strong> Podemos enviar e-mails promocionais para você, e você pode desativá-los a qualquer momento, utilizando a opção de cancelamento de inscrição disponível nos próprios e-mails. Mesmo que você desative as comunicações promocionais, ainda poderemos enviar mensagens não promocionais, como notificações sobre sua conta ou pedidos realizados.</li>
                        </ul>
                        <p className="mt-4">
                            Nós não discriminaremos você por exercer qualquer um desses direitos. Você pode ter que verificar sua identidade antes de processarmos suas solicitações, como permitido ou exigido pela lei aplicável. Conforme as leis aplicáveis, você pode nomear um representante autorizado para fazer solicitações em seu nome para exercer seus direitos. Antes de aceitar esse tipo de solicitação feita por um representante, exigiremos a comprovação de autorização para agir em seu nome. Também poderemos solicitar que você confirme sua identidade diretamente conosco. Responderemos à solicitação dentro do prazo exigido pela legislação aplicável.
                        </p>


                        <h2 className="text-xl font-bold text-white mt-8 mb-4">RECLAMAÇÕES</h2>
                        <p>
                            Se você tiver alguma reclamação sobre o modo como processamos suas informações pessoais, entre em contato conosco usando os dados informados abaixo. Dependendo da sua localização, você pode ter o direito de contestar nossa decisão entrando em contato conosco novamente pelos mesmos canais, ou de apresentar uma reclamação diretamente à autoridade local de proteção de dados.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">TRANSFERÊNCIAS INTERNACIONAIS</h2>
                        <p>
                            É possível que suas informações pessoais sejam transferidas, armazenadas e processadas fora do país em que você reside.
                        </p>
                        <p>
                            Se transferirmos suas informações pessoais para fora do Espaço Econômico Europeu ou do Reino Unido, utilizaremos mecanismos de transferência reconhecidos, como as Cláusulas contratuais padrão da Comissão Europeia ou contratos equivalentes emitidos pela autoridade competente do Reino Unido, conforme o caso, exceto quando a transferência for feita para um país considerado como tendo um nível adequado de proteção.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8 mb-4">ALTERAÇÕES NESTA POLÍTICA DE PRIVACIDADE</h2>
                        <p>
                            Podemos atualizar esta Política de privacidade periodicamente, seja para refletir mudanças em nossas práticas ou por outras razões operacionais, legais ou regulatórias. Publicaremos a versão revisada desta Política de privacidade neste site, atualizaremos a data de “Última atualização” e forneceremos aviso conforme exigido pela legislação aplicável.
                        </p>


                        <h2 className="text-xl font-bold text-white mt-8 mb-4">CONTATO</h2>
                        <p>
                            Se você tiver alguma dúvida sobre nossas práticas de privacidade ou sobre esta Política de privacidade, ou se desejar exercer qualquer um dos seus direitos, entre em contato conosco pelo telefone ou pelo e-mail <a href="mailto:contato.casadoasiatico@gmail.com" className="text-primary hover:underline">contato.casadoasiatico@gmail.com</a> ou no endereço Avenida Itaberaba, São Paulo, SP, 39, 02739-000, BR.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
