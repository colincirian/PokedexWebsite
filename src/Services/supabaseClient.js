import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mpacxgtjfozgyrmvfgso.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYWN4Z3RqZm96Z3lybXZmZ3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5MTc1NjEsImV4cCI6MjAwMzQ5MzU2MX0.dqvnTblN87Z-0HmcpOs777rGT0Tb17kFVnkb1tlKvgg'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;