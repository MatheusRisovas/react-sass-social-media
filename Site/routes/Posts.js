const express = require('express');
const posts = express.Router();
const cors = require('cors');
var banco = require('../app-banco');

posts.use(cors());
process.env.SECRET_KEY = 'secret';

posts.get('/select_all', (req, res) => {
    banco.conectar().then(pool => {
        return pool.request().query(`SELECT * FROM Post as p,Usuario2 as a WHERE fkUsuario = a.id order by p.id desc;`);
    }).then(consulta => {
        console.log(`Posts encontrados: ${JSON.stringify(consulta.recordset)}`);
        res.send(consulta.recordset);
    }).finally(() => {
        banco.sql.close();
    })
})

posts.post('/create', (req, res) => {
    banco.conectar().then(pool => {
        console.log(`Post: ${JSON.stringify(req.body)}`);
        let { descricao, likes, dislikes, fkUsuario } = req.body;
        return pool.request().query(`INSERT INTO Post(descricao,fkUsuario) VALUES
        ('${descricao}',${fkUsuario})`);
    }).then(() => {
        res.sendStatus(200);
    }).finally(() => {
        banco.sql.close();
    })
})

module.exports = posts;