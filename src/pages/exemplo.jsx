import Layout from "@/components/Layout";
import Cabecalho from "../components/Cabecalho";


export default function Exemplo (){
    return(
      <Layout titulo="usando components" >
        <div>   
          
        <Cabecalho algo= "next.js & React" />
        <Cabecalho algo="Aprende next na prática"/>
      </div>
      </Layout>

    )
}