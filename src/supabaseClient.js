import { createClient } from '@supabase/supabase-js'

// ✅ This is your correct Project URL (from your Project ID)
const supabaseUrl = 'https://njeigdjupjvnietfpsek.supabase.co' 

// 👇 PASTE THE KEY YOU JUST COPIED HERE (inside the quotes)
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZWlnZGp1cGp2bmlldGZwc2VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNDQwNzcsImV4cCI6MjA3OTYyMDA3N30.VEXnt68cpqE3w0Hub-f40bXzjgoflZUlgc_HgHmdqcU' 

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase