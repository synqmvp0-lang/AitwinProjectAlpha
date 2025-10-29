import { supabase } from '../../lib/supabaseClient'

export default async function handler(req, res) {
  const { data, error } = await supabase.from('test_table').select('*')

  if (error) {
    console.error('Supabase connection error:', error.message)
    return res.status(500).json({ success: false, message: error.message })
  }

  return res.status(200).json({ success: true, data })
}
