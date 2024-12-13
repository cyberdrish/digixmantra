import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://euypdqzsjpydkcugebuf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1eXBkcXpzanB5ZGtjdWdlYnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NjQ1ODMsImV4cCI6MjA0OTI0MDU4M30.fOfxbI5Ls_TfBGaOMo_cDnxGSzStsB9hQIVUvX73Kqw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
