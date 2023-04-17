import Layout from "@/components/Layout"



export default function Jsx(){

    const a = 4 
    const b = 3 
    console.log(a * b  )

    const obj = {nome: 'jose' , idade: 45}  // é um obj
        const titulo =   <h1>JSX e um conceito </h1>

            function subtitulo() {
                return  <h2 > {'muito legal'.toLocaleUpperCase()} </h2>
                // testar retornar array 
                
            }
        return (
            <Layout titulo="Entendendo o JSX"> 
            <div>
                {titulo}
                {subtitulo()}
                
                {
                    a * b  // usando js puro
                }
                    
                         <p>
                              {JSON.stringify( {nome: 'jose' , idade:45} )}

                              
                             
                         </p>
            </div>
            </Layout>
        )



}