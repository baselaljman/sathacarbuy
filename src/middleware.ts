import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (
    request.headers.get('x-purpose') === 'prefetch' ||
    !request.nextUrl.searchParams.has('gclid')
  ) {
    return NextResponse.next();
  }

  const ip = request.ip ?? request.headers.get('x-forwarded-for');
  if (!ip) {
    return NextResponse.next();
  }

  const trackUrl = new URL('/api/track-click', request.url);
  fetch(trackUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ip }),
  }).catch(console.error);

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
