import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://xdladxoibrkmjtmtccix.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkbGFkeG9pYnJrbWp0bXRjY2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MDY5MjAsImV4cCI6MjA3NjI4MjkyMH0.1zW6cLE1IP_F6wdi3m9EPvm0KKEVOeh7F2Sa05lFk5I'
)

async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    window.location.href = "login.html"
  }
}

checkAuth()
