const express = require ("express")
const app = express()
const port = 3030
const cors = require("cors")
const posteosRouter = require("./routes/postresRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use (express.json())


app.use ("/postres",posteosRouter)


const conexiondb = async ()=>{
 try {
    await db.authenticate()
    console.log(`Conexion ok a la base de datos`);
 } catch (error) {
    console.log(`el error es : ${error}`)
 }
}

app.listen(port,()=>{
    conexiondb()
    console.log(`Server ok en el puerto ${port}`);
})