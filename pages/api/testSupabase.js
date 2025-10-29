// pages/api/testSupabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bwvtbbrchclumyxfbfer.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3dnRiYnJjaGNsdW15eGZiZmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjM2MzAsImV4cCI6MjA3NzI5OTYzMH0.vp8xiI-GPozV3ZBDSIQEi_mw3xDHa6hVRsE1PhW1dq4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  const { data, error } = await supabase.from('test_table').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ data });
}
