export default function handler(req,res) {
//dar para colocar mais coisas que a url vai suportar , como post puthch e delete
    if(req.method === "GET") {

        handleGet(req,res)

    }else {

        res.status(405).send()
    }
   


}

function handleGet(req,res){
    res.status(200).json({
        id:3,
        nome:"joaozinho",
        email:"pedinhopedrinho@gmail.com"
    })
}