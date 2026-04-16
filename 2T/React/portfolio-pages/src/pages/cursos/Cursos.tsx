import { supabase } from "../../model/utils/supabase";




export const Cursos = () => {
   
    const getCursos = async () => { 
        const { data, error } = await supabase
                               .from('cursos')
                               .select('*');
     console.log(data);
     if (error) {
        console.error( error);
        return
     }
}
getCursos();

return (
    
        <h1 className="text-3xl font-bold mb-4">Cursos</h1>
        
)
}