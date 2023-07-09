import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// The middleware function can be marked `async` if using `await` inside

// Example 1: parse nextUrl object
// test: http://localhost:3000/about?name=John
// -----------------------------------------
// export function middleware(request: NextRequest) {
//   const {pathname,searchParams} = request.nextUrl
//   console.log({pathname, name: searchParams.get('name')})
//   return NextResponse.next()

// }
// export const config = { matcher: '/about/:path*' }

// Example 2: redirect to team page
// test: http://localhost:3000/about
// -----------------------------------------
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/team', request.url))
// }
// export const config = { matcher: '/about/:path*' }

// Example 3: setting headers 
// We can set cookies via response headers, but note there's another way, see example 4)
// test: http://localhost:3000/about
// -----------------------------------------
// export function middleware(request: NextRequest) {
//   // Clone the request headers and set a new header `x-hello-from-middleware1`
//   const requestHeaders = new Headers(request.headers)
//   requestHeaders.set('x-hello-from-middleware1', 'hello')

//   // You can also set request headers in NextResponse.rewrite
//   const response = NextResponse.next({
//     request: {
//       // New request headers
//       headers: requestHeaders,
//     },
//   })

//   // Set a new response header `x-hello-from-middleware2`
//   // set a cookie via response header `set-cookie` (see below for alternative)
//   response.headers.set('x-hello-from-middleware2', 'hello')
//   response.headers.set('set-cookie','nextjs=fast')
//   return response
// }
// export const config = { matcher: '/about/:path*' }

// Example 4: Setting cookies on the response using the `ResponseCookies` API
// test: http://localhost:3000/about
// -----------------------------------------
// export function middleware(request: NextRequest) {
//   const response = NextResponse.next()
//   response.cookies.set('name', 'John')
//   return response
// }
// export const config = { matcher: '/about/:path*' }

// Example 5: reading request cookies
// test: http://localhost:3000/about
// -----------------------------------------
// export function middleware(request: NextRequest) {
//   const allCookies = request.cookies.getAll()
//   console.log({allCookies})
//   return NextResponse.next()
// }
// export const config = { matcher: '/about/:path*' }

// Example 6: responding with json
// test: http://localhost:3000/about
// -----------------------------------------
export function middleware(request: NextRequest) {
  return NextResponse.json({ message: 'hello from middleware' })
}
