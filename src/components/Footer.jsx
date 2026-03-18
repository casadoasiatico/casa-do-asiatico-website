import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.svg';
import pixLogo from '../assets/footer/PIX_LOGO.svg';
import mastercardLogo from '../assets/footer/MASTERCARD_LOGO.svg';
import visaLogo from '../assets/footer/VISA_LOGO.svg';
import eloLogo from '../assets/footer/ELO_LOGO.svg';
import hipercardLogo from '../assets/footer/HIPERCARD.svg';
import amexLogo from '../assets/footer/AMERICAN_EXPRESS_LOGO.svg';
import dinersLogo from '../assets/footer/DINERS_CLUB_LOGO.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="localizacao" className="bg-black text-white">


            {/* Map Section - Full Width */}
            <div id="location-map" className="w-full h-[300px] sm:h-[350px] md:h-[450px] bg-gray-800 overflow-hidden grayscale relative group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272.0027738423193!2d-46.67277171285983!3d-23.474221120558344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5db91125fa31%3A0x77e20ac608acd632!2sCasa%20do%20Asi%C3%A1tico%20(WEBPARTS)!5e0!3m2!1spt-BR!2sbr!4v1770209820261!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </div>

            {/* Main Footer Information */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    <div className="text-center md:text-left md:w-1/3 order-1">
                        <h3 className="font-heading font-bold text-xl uppercase mb-6">Contato</h3>
                        <ul className="space-y-4 text-gray-400 text-sm inline-block text-left">
                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                <a href="mailto:contato.casadoasiatico@gmail.com" className="hover:text-primary transition-colors">contato.casadoasiatico@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>+55 (11) 98836-6393</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock size={16} />
                                <p>De segunda à sexta, das 08h às 18h</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 flex-shrink-0" />
                                <p>Av. Itaberaba, 4787 - Vila Nova Cachoeirinha<br />02739-000, São Paulo - SP</p>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-center md:w-1/3 self-center order-3 md:order-2">
                        <img src={logo} alt="Casa do Asiático" className="h-24 w-auto" />
                    </div>

                    <div className="text-center md:text-right flex flex-col items-center md:items-end md:w-1/3 order-2 md:order-3">
                        <h3 className="font-heading font-bold text-xl uppercase mb-6">Métodos de Pagamento</h3>
                        <div className="flex flex-col gap-4 items-center md:items-end">
                            <div className="flex gap-4 md:gap-5 items-center">
                                <img src={pixLogo} alt="Pix" className="h-5 md:h-7 w-auto" />
                                <img src={mastercardLogo} alt="Mastercard" className="h-5 md:h-7 w-auto" />
                                <img src={visaLogo} alt="Visa" className="h-4 md:h-5 w-auto" />
                                <img src={eloLogo} alt="Elo" className="h-4 md:h-5 w-auto" />
                            </div>
                            <div className="flex gap-4 md:gap-5 items-center">
                                <img src={hipercardLogo} alt="Hipercard" className="h-4 md:h-5 w-auto" />
                                <img src={amexLogo} alt="American Express" className="h-4 md:h-5 w-auto" />
                                <img src={dinersLogo} alt="Diners Club" className="h-5 md:h-7 w-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; 2026 Casa do Asiático. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link to="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de privacidade</Link>
                        <Link to="/termos-de-servico" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Termos de serviço</Link>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://wa.me/5511988366393?text=Ol%C3%A1!%20%F0%9F%91%8B%F0%9F%88%B4%0AQuero%20saber%20sobre%20uma%20pe%C3%A7a." target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                            <svg viewBox="0 0 24 24" width="20" height="20" className="fill-current">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/casadoasiatico" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="https://www.instagram.com/casadoasiatico/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
