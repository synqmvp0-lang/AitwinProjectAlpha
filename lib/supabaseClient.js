import { createClient } from '@supabase/supabase-js'

// Your Supabase project details
const supabaseUrl = 'https://bwvtbbrchclumyxfbfer.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3dnRiYnJjaGNsdW15eGZiZmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjM2MzAsImV4cCI6MjA3NzI5OTYzMH0.vp8xiI-GPozV3ZBDSIQEi_mw3xDHa6hVRsE1PhW1dq4'

// Create a Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
