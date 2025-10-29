import { supabase } from '../../lib/supabaseClient'

export default async function handler(req, res) {
  // Simple query: check if we can connect to Supabase
  const { data, error } = await supabase.from('test_table').select('*')

  if (error) {
    console.error('Error connecting to Supabase:', error.message)
    return res.status(500).json({ success: false, message: error.message })
  }

  return res.status(200).json({ success: true, data })
}
