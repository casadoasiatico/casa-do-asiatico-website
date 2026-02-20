/**
 * Vercel Serverless Function — API de Conversões da Meta
 *
 * Recebe eventos do front-end e os envia para a Meta via CAPI.
 * As variáveis META_PIXEL_ID e META_ACCESS_TOKEN devem ser
 * configuradas como Environment Variables na Vercel.
 *
 * Endpoint: POST /api/send-event
 */

export default async function handler(req, res) {
    // Apenas POST é permitido
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const PIXEL_ID = process.env.META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

    // Validar que as variáveis de ambiente estão configuradas
    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.error('[Meta CAPI] META_PIXEL_ID ou META_ACCESS_TOKEN não configurados.');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const { event_name, event_time, user_data, custom_data, event_source_url, attribution_data } = req.body;

    const eventTime = event_time || Math.floor(Date.now() / 1000);

    // Montar o payload segundo a especificação da API de Conversões
    const eventData = {
        event_name: event_name || 'PageView',
        event_time: eventTime,
        action_source: 'website',
        event_source_url: event_source_url || req.headers.referer || '',
        user_data: {
            client_ip_address:
                req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
                req.socket?.remoteAddress ||
                '',
            client_user_agent: req.headers['user-agent'] || '',
            ...user_data,
        },
        custom_data: custom_data || {},
        original_event_data: {
            event_name: event_name || 'PageView',
            event_time: eventTime,
        },
    };

    // Incluir attribution_data se fornecido
    if (attribution_data) {
        eventData.attribution_data = attribution_data;
    }

    const payload = {
        data: [eventData],
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error('[Meta CAPI] Erro da API:', result);
            return res.status(response.status).json(result);
        }

        return res.status(200).json(result);
    } catch (error) {
        console.error('[Meta CAPI] Erro interno:', error);
        return res.status(500).json({ error: error.message });
    }
}
