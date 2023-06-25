import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  cookies().set('token', '', { maxAge: 0 })
  cookies().set('redirectTo', '', { maxAge: 0 })

  return NextResponse.redirect(redirectURL)
}
