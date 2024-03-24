import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEN_URL || 'http://localhost:8080';

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    // ! unsafe-eval is not recommended, but without it the button does not function at all
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'unsafe-eval'; 
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' logos-world.net;
    connect-src 'self' ${BACKEND_URL};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;
    // Replace newline characters and spaces
    const cspHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);

    requestHeaders.set('Content-Security-Policy', cspHeaderValue);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        }
    });

    response.headers.set('Content-Security-Policy', cspHeaderValue);

    return response;
}
