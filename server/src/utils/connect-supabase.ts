import { SupabaseClient, createClient } from "@supabase/supabase-js";

let supabase: any;
if (process.env.DB_URL && process.env.DB_SECRET_KEY) {
  supabase = createClient(process.env.DB_URL, process.env.DB_SECRET_KEY) ;
  if (supabase)
  {
    console.log("connect supabase successfully");
  }
  else{
    console.log("connect supabase failed");
  }
}


export default supabase;
