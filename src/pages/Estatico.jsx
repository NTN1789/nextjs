import Layout from "@/components/Layout";


export function getStaticProps(){

        return {
            props: {
                numero: Math.random()

            }
        }
}


export default function(props){

    return (
        <Layout titulo="conteúdo estático">
                <div>{props.numero}</div>
        </Layout>
    )
}