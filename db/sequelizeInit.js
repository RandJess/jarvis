const {sequelize, Datatypes}= require('sequelize')
const userModel= require('../models/user')
const user=userModel(sequelize, Datatypes)
const bodyParser= require('body-parser')
const bcrypt= require('bcryptjs')
const {fistname, lastname, email, sexe, role, dateNaissance, createAt } = req.body

const connexion = new sequelize( "jarvis", "jess", "root123",
{
    host : 'localhost',
    dialect : 'mysql',
    logging : false //eviter des affichages d'avertissement
})

const sequelize = process.env.NODE_ENV === 'production' ? new Sequelize(process.env.DB_URI) : dev;

const initDb= ()=>{
    sequelize.sync({force: true}).then(
        _=>{
            console.log("InitDb réussi 🚦");
            bcrypt.genSalt(10, (error, salt)=>{
                bcrypt.hash("req.body.password", salt, (error, hash)=>{
                    User.create({
                        fistname : req.fistname,
                        lastname : req.lastname,
                        email : req.email,
                        sexe : req.sexe,
                        role : req.role,
                        dateNaissance : req.dateNaissance,
                        password : hash,
                    })
                })
            })
        }
    )
}

module.exports={
    initDb, User
}

sequelize.authentificate()
.then(_=>console.log("authentificate réussi ✅"))
.catch(error=>(console.error(`Erreur ${error}`)))