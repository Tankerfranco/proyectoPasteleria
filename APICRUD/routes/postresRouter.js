const express = require ("express")
const router = express.Router()

const {traerUnPostre,traerPostres, crearUnPostre, modificarUnPostre, borrarUnPostre} = require("../controllers/postresControllers.js")

router.get ("/",traerPostres) // 
router.get ("/:id",traerUnPostre) // 

router.post ("/",crearUnPostre)

router.put ("/:id",modificarUnPostre)
router.delete ("/:id",borrarUnPostre) 


module.exports = router