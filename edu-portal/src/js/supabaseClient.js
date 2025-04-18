import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://doddmmirfomzukkyykjl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZGRtbWlyZm9tenVra3l5a2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NTkzNTEsImV4cCI6MjA2MDQzNTM1MX0.tX1Ek890e0QDQueeU9zT5nQkwQ-F2DUdSKsXk9y2Ges'

export const supabase = createClient(supabaseUrl, supabaseKey)
