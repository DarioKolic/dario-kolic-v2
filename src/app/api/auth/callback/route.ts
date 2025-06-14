// app/auth/callback/route.ts
import { createClient } from '@/lib/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  console.log({ origin })
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/chat'

  if (code) {
    const supabase = await createClient()
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      console.log('Session exchange result:', {
        success: !error,
        hasUser: !!data?.user,
        hasSession: !!data?.session,
        error: error?.message
      })
      
      if (!error && data.session) {
        console.log('Redirecting to:', `${origin}${next}`)
        return NextResponse.redirect(`${origin}${next}`)
      }
      
      console.error('Session exchange failed:', error)
    } catch (err) {
      console.error('Exchange error:', err)
    }
  }

  console.log('Redirecting to error page')
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}