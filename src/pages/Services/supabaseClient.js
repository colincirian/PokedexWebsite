import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oviqkduokhvzywiiqafx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92aXFrZHVva2h2enl3aWlxYWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3NTE1MTEsImV4cCI6MjAwNDMyNzUxMX0.X71YXmsI_NMjxWzu0SRt-MnOub3QYS473HEUNYHK2B4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;