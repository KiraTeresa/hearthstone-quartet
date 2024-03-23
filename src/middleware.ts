import {NextRequest, NextResponse} from 'next/server';

export function middleware( request: NextRequest ) {
    const requestHeaders = new Headers( request.headers );

    requestHeaders.set( 'Content-Security-Policy', 'default-src \'self\'; img-src \'self\' logos-world.net' );

    const response = NextResponse.next( {
        request: {
            headers: requestHeaders,
        }
    } );

    response.headers.set( 'Content-Security-Policy', 'default-src \'self\'; img-src \'self\' logos-world.net' );

    return response;
}
