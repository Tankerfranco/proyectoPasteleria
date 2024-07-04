const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

const postresModel = db.define ("tortas",{
   nombre:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING},
    precio:{type:DataTypes.INTEGER},
    foto:{type:DataTypes.BLOB}
})

module.exports = postresModel