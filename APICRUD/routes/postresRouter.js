const express = require ("express")
const router = express.Router()
const multer = require("multer")
const upload = multer({ dest: "../uploads"})

const {traerUnPostre,traerPostres, crearUnPostre, modificarUnPostre, borrarUnPostre} = require("../controllers/postresControllers.js")

router.get ("/",traerPostres) // 
router.get ("/:id",traerUnPostre) // 
router.post ("/",upload.single("foto"),crearUnPostre)
router.put ("/:id",modificarUnPostre)
router.delete ("/:id",borrarUnPostre) 


module.exports = router