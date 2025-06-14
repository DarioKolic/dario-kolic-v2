import { Login } from "@/components/pages/Login/Login"
import { createClient } from "@/lib/utils/supabase/server"
import { redirect } from "next/navigation"

const LoginPage = async () => {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if(user && !error) {
    return redirect("/")
  } 

  return (
    <Login />
  )
}

export default LoginPage