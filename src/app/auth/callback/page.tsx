import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

const AuthCallbackPage = async ({ searchParams }: { searchParams: Record<string, string>}) => {
  const { code } = searchParams

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      redirect('/chat')
    }
  }

  redirect('/auth/auth-code-error')
}

export default AuthCallbackPage