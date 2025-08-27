import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.REACT_SUPABASE_URL || "https://rgfvdfynollyeqmlvabz.supabase.co"
const supabaseNonKey = process.env.REACT_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZnZkZnlub2xseWVxbWx2YWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4OTgzMzIsImV4cCI6MjA3MTQ3NDMzMn0.BzqGJ9JHq1IxTpQfkLcXY2eTpgF6yqBtqHuCllBzPw4"
console.log(supabaseUrl)
export const supabase = createClient(supabaseUrl, supabaseNonKey!);

