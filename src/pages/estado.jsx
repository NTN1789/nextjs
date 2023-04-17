import Layout from "@/components/Layout";
import { useState } from "react";


export default function Estado (){
       


   const [state,setState] = useState(0)

  

    return(
    <Layout titulo="componente com Estado" > 
    <div>{state}</div>

        <button onClick={() => setState(state + 1)}  >incrementar</button>
    </Layout>
)

}