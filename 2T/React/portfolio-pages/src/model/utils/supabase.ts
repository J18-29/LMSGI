import{createClient} from '@supabase/supabase-js';

const url=import.meta.env.VITE_SUPABASE_URL ;
const apikey=import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ;

export const supabase=createClient(url,apikey);