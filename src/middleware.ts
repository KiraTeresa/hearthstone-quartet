import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEN_URL || 'http://localhost:8080';
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';

export function middleware( request: NextRequest ) {
    const nonce = Buffer.from( crypto.randomUUID() ).toString( 'base64' );
    // ! unsafe-eval is not recommended, but without it the button does not function at all
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'unsafe-eval'; 
    style-src 'self' 'unsafe-inline';
    img-src 'self';
    connect-src 'self' ${BACKEND_URL} ${FRONTEND_URL};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    report-uri ${BACKEND_URL}/csp-reports;
    `;
    // Replace newline characters and spaces
    const cspHeaderValue = cspHeader
        .replace( /\s{2,}/g, ' ' )
        .trim();

    const requestHeaders = new Headers( request.headers );
    requestHeaders.set( 'x-nonce', nonce );

    // requestHeaders.set('Reporting-Endpoints', `csp-endpoint="${BACKEND_URL}/cps-reports"`);
    // requestHeaders.set('Content-Security-Policy', cspHeaderValue);
    requestHeaders.set( 'Content-Security-Policy-Report-Only', cspHeaderValue );

    const response = NextResponse.next( {
        request: {
            headers: requestHeaders,
        }
    } );

    response.headers.set( 'x-nonce', nonce );
    // response.headers.set('Reporting-Endpoints', `csp-endpoint="${BACKEND_URL}/cps-reports"`);
    // response.headers.set('Content-Security-Policy', cspHeaderValue);
    response.headers.set( 'Content-Security-Policy-Report-Only', cspHeaderValue );

    return response;
}
