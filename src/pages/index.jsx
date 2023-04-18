import Navegador from '../components/Navegador'

export  default function inicio (){
   // "<h1>Titulo</h1> "


        return(
            <div style={{
                display: 'flex' , 
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                height: '100vh'
                  // par de cochetes deixa a navegacão dinamica

            }}>
        
               <Navegador texto="Estiloso"   destino="/estiloso" />
               <Navegador texto="exemplo"  destino="/exemplo" />
               <Navegador  texto="Jsx"  destino="/jsx"  />
               <Navegador  texto="Navegação #01"  destino="/navegacao"  cor="green"/>
               <Navegador  texto="Navegação #02"  destino="/cliente/sp-2/321"  cor="tomato"/>    
               <Navegador  texto="Componente com estado"  destino="/estado"  cor="blue"/>    
               <Navegador  texto="integração com API #01"  destino="/integracao_1"  cor="pink"/>  
               <Navegador  texto="conteúdo Estático"  destino="/Estatico"  cor="gold"/>  
            </div>
        )

}