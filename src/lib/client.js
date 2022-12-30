import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rhtvoorfglihruxhyoup.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJodHZvb3JmZ2xpaHJ1eGh5b3VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0MDcxMDIsImV4cCI6MTk4Nzk4MzEwMn0.bReQtWiG0nPt28NG9SLr-QtKTeXTMUlXBWl3IKxvRuk";
export const supabase = createClient(supabaseUrl, supabaseKey);
