import Layout from "../components/Layout";

import styles from "../styles/Estiloso.module.css"


export default function Estiloso (){
        return (
            <Layout titulo=" exemplo de css modularizado">

            <div className={styles.roxo}>
                
             
                    <h1> olá estou estiloso</h1>

            </div>
            </Layout>
        )


}