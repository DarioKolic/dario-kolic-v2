"use server"

import { createClient } from "@/lib/utils/supabase/server"
import { redirect } from "next/navigation"

export const signInWithGoogle = async () => {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`
    }
  })
  
  if (error) {
    console.error("Error:", error)
    return
  }

  if (data.url) {
    redirect(data.url)
  }
}

export const signInAnonymously = async (captchaToken: string) => {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signInAnonymously({
    options: {
      captchaToken
    }
  })

  if (error) {
    console.error("Error:", error)
    return
  }

  redirect("/chat")
}

export const signOut = async () => {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if(error) {
    console.error("Error:", error)
    return
  }

  redirect("/")
}