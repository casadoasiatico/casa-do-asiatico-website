/**
 * Meta Pixel — Módulo utilitário
 *
 * Funções auxiliares para disparar eventos do Meta Pixel
 * a partir de qualquer componente React.
 *
 * Eventos padrão da Meta:
 *   PageView, ViewContent, Search, AddToCart,
 *   AddToWishlist, InitiateCheckout, Purchase, Lead,
 *   CompleteRegistration, Contact, Schedule, etc.
 *
 * Uso:
 *   import { trackEvent } from '../utils/metaPixel';
 *   trackEvent('Contact', { method: 'whatsapp' });
 */

/**
 * Dispara um evento padrão do Meta Pixel.
 * @param {string} eventName - Nome do evento (ex: 'Contact', 'ViewContent')
 * @param {object} params - Parâmetros extras do evento (opcional)
 */
export function trackEvent(eventName, params = {}) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', eventName, params);
    }
}

/**
 * Dispara um evento personalizado do Meta Pixel.
 * @param {string} eventName - Nome do evento personalizado
 * @param {object} params - Parâmetros extras do evento (opcional)
 */
export function trackCustomEvent(eventName, params = {}) {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', eventName, params);
    }
}

/**
 * Envia um evento para a API de Conversões (server-side) via Vercel Function.
 * Isso complementa o Pixel do lado do cliente para maior precisão.
 * @param {string} eventName - Nome do evento
 * @param {object} customData - Dados personalizados do evento (opcional)
 */
export async function sendServerEvent(eventName, customData = {}) {
    try {
        await fetch('/api/send-event', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_source_url: window.location.href,
                custom_data: customData,
            }),
        });
    } catch (error) {
        // Falha silenciosa — não impactar a experiência do usuário
        console.warn('[Meta CAPI] Erro ao enviar evento server-side:', error);
    }
}
