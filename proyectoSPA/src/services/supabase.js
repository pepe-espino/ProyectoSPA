import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://kxbytrefetjvkyyhqhsi.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4Ynl0cmVmZXRqdmt5eWhxaHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjY3MTMsImV4cCI6MjA3OTYwMjcxM30.QJ-nOUp9fmXbrpszVwHehXwcD_RcCM8k9cypU8ew5ko';

export const supabase =  createClient(supabaseURL, supabaseKEY);