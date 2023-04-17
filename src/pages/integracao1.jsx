import Layout from "@/components/Layout"
import { useState } from "react"

export default  function integracao(){
    const [cliente,setCliente] = useState({})
    const [codigo,setCodigo] = useState(1)
    async  function obterCliente(){

        const resp = await fetch(` http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliente(dados)
        
        //fetch(` http://localhost:3000/api/clientes/${codigo}`)
    //    .then(resp => resp.json())
      //  .then(dados => setCliente(dados))

    }

    
        return(

            
                <Layout titulo="Exemplo de integração a API #1"> 
                <div>
                <input type="number"  value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter cliente</button>
                </div>
                <ul>
                    <li> código:{cliente.id} </li>
                    <li> nome:{cliente.nome}</li>
                    <li> email:{cliente.email} </li>
                </ul>
                </Layout>
           
         
        )


}