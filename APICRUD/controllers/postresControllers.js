//! Traemos el modelo creado
const postresModel = require("../models/postresModel.js")
const fs = require("fs")
//!Empezamos con el CRUD
//?TRAER TODOS
const traerPostres = async (req, res) =>{
    try {
        const postres = await postresModel.findAll()
        res.json(postres)
    } catch (error) {
        res.json({message:error.message})
    }
}
//?TRAER UN POSTRE
const traerUnPostre = async (req, res) =>{
    try {
        const postre = await postresModel.findByPk(req.params.id)
        res.json(postre)
    } catch (error) {
        res.json({message:error.message})
    }
}
//?CREAR UN POSTRE
const crearUnPostre = async (req, res) =>{
    try {
        const {nombre, contenido, precio} = req.body
        const newPath = saveImage(req.file)
        await postresModel.create({
            nombre,
            contenido,
            precio,
            ruta_foto: newPath
        })
        res.json({"message":"Registro creado"})
    } catch (error) {
        res.json({message:error.message})
    }
}

function saveImage(file) {
    const newPath = `../secciones/img/${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
  }

//?Borrar un postre
const borrarUnPostre = async (req,res) =>{
    try {
        await postresModel.destroy({
            where:{id:req.params.id}
            
        })
        res.json({"message":"Registro borrado"})
    } catch (error) {
        res.json({message:error.message})
    }
}
//?Editar un postre
const modificarUnPostre = async (req, res) =>{
    try {
        await postresModel.update(
            req.body,
            { where: { id: req.params.id } }
        );
        res.json({"message":"Registro actualizado"})
    } catch (error) {
        res.json({message:error.message})
    }
}
//!EXPORTAMOS LOS METODOS
module.exports = {modificarUnPostre, borrarUnPostre,crearUnPostre,traerPostres,traerUnPostre}