const express = require('express');
const user = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
var banco = require('../app-banco');

// const User = require('../models/User');
user.use(cors());

process.env.SECRET_KEY = 'secret';

// Select com Sequelize

// user.get(`/select`, (req, res) => {
//     User.findOne({
//             where: {
//                 id: req.query.id
//             }
//         })
//         .then(user => {
//             res.send(user);
//         });
// })

// Select com SQL Server

user.get('/select', (req, res) => {
    banco.conectar().then(pool => {
        let id = req.query.id;
        return pool.request().query(`SELECT * FROM Usuario2 where id = ${id}`);
    }).then(consulta => {
        res.send(consulta.recordset[0]);
    }).finally(() => {
        banco.sql.close();
    })
});

// user.get(`/select_all`, (req, res) => {
//     User.findAll()
//         .then(user => {
//             res.send(user);
//         });
// })

user.get('/select_all', (req, res) => {
    banco.conectar().then(pool => {
        return pool.request().query(`SELECT * FROM Usuario2`);
    }).then(consulta => {
        res.send(consulta.recordset);
    }).finally(() => {
        banco.sql.close();
    })
});

// user.post('/update', (req, res) => {
//     User.update({
//             name: req.body.name,
//             position: req.body.position,
//             company: req.body.company,
//             city: req.body.city,
//             state: req.body.state,
//             bio: req.body.bio,
//             email: req.body.email,
//             password: req.body.password,
//             img_link: req.body.img_link
//         }, {
//             where: {
//                 id: req.body.id
//             }
//         })
//         .then(res => { return res; });
// });

user.post('/update', (req, res) => {
    banco.conectar().then(pool => {
        let { nome, cargo, empresa, cidade, estado, bio, email, img_link } = req.body;
        return pool.request().query(`UPDATE Usuario2 SET nome = '${nome}', cargo = '${cargo}', empresa = '${empresa}', cidade = '${cidade}'
        , estado = '${estado}',bio = '${bio}', email = '${email}', img_link = '${img_link}' WHERE id = ${req.body.id}`);
    }).then(() => {

    }).finally(() => {
        banco.sql.close();
    })
});

// Cadastro com Sequelize

// user.post('/register',(req,res)=>{
//     const today = new Date();

//     const userData = {
//         name: req.body.name,
//         email: req.body.email,
//         img_link: req.body.img_link,
//         password: req.body.password,
//         created: today
//     }
//     console.log(userData);

//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     })
//     .then(user=>{
//         if(!user){
//             bcrypt.hash(req.body.password,10,(err,hash)=>{
//                 userData.password = hash;
//                 User.create(userData)
//                 .then(user=>{
//                     res.json({status: user.email + 'registered'});
//                 })
//                 .catch(err=>{
//                     res.send('Error: '+ err)
//                 })
//             });
//         }else{
//             res.json({error: "User already exists"})
//         }
//     })
//     .catch(err=>{
//         res.send('Error: '+ err);
//     })
// });

// Cadastro com SQL Server

user.post('/register', (req, res) => {
    banco.conectar2().then(() => {
        let { name, email, img_link, password } = req.body;
        console.log(`Chegou p/ registro: ${JSON.stringify(req.body)}`);
        return banco.sql.query(`INSERT INTO Usuario2 (nome,email,img_link,senha) VALUES ('${name}','${email}','${img_link}','${password}');`);
    }).then(() => {
        res.send(200);
    }).finally(() => {
        banco.sql.close();
    })
});

// Login com Sequelize

// user.post('/login', (req, res) => {
//     User.findOne({
//             where: {
//                 email: req.body.email
//             }
//         })
//         .then(user => {
//             if (user) {
//                 if (bcrypt.compareSync(req.body.password, user.password)) {
//                     let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
//                         expiresIn: 1440
//                     })
//                     res.send(token);
//                 }
//             } else {
//                 res.status(400).json({ error: 'User does not exist.' })
//             }
//         })
//         .catch(err => {
//             res.status(400).json({ error: err })
//         })
// })

// Login com SQL Server

user.post('/login', (req, res) => {
    banco.conectar2().then(() => {
        console.log(`Chegou p/ login: ${JSON.stringify(req.body)}`);
        let { email, password } = req.body;
        if (email == undefined || password == undefined) {
            throw new Error(`Dados de email não chegaram completos: ${email} / ${password}`);
        }
        return banco.sql.query(`select * from Usuario2 where email='${email}' and senha='${password}'`);
    }).then(consulta => {

        console.log(`Usuários encontrados: ${JSON.stringify(consulta.recordset)}`);

        if (consulta.recordset.length == 1) {
            let token = jwt.sign({ id: consulta.recordset[0].id, nome: consulta.recordset[0].nome }, process.env.SECRET_KEY, {
                expiresIn: 1440
            })
            console.log(jwt.decode(token));
            res.send(token);
        } else {
            res.sendStatus(404);
        }

    }).catch(err => {

        var erro = `Erro no login: ${err}`;
        console.error(erro);
        res.status(500).send(erro);

    }).finally(() => {
        banco.sql.close();
    });
});

module.exports = user;