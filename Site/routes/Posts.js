const express = require('express');
const posts = express.Router();
const cors = require('cors');
var banco = require('../app-banco');

posts.use(cors());
process.env.SECRET_KEY = 'secret';

posts.get('/select_all', (req, res) => {
    banco.conectar().then(pool => {
        return pool.request().query(`SELECT p.id,p.descricao,p.dislikes,p.likes,a.nome,a.img_link FROM Post as p,Usuario2 as a WHERE fkUsuario = a.id order by p.id desc;`);
    }).then(consulta => {
        console.log(`Posts encontrados: ${JSON.stringify(consulta.recordset)}`);
        res.send(consulta.recordset);
    }).finally(() => {
        banco.sql.close();
    })
})

posts.get('/select', (req, res) => {
    banco.conectar().then(pool => {
        let { id } = req.query;
        return pool.request().query(`SELECT p.*,a.nome,a.img_link FROM Post as p, Usuario2 as a WHERE p.id = ${id} AND fkUsuario = a.id;`);
    }).then(consulta => {
        console.log(`Posts encontrado: ${JSON.stringify(consulta.recordset[0])}`);
        res.send(consulta.recordset[0]);
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

posts.post('/create_comment', (req, res) => {
    banco.conectar().then(pool => {
        console.log(`Comentário: ${JSON.stringify(req.body)}`);
        let { descricao, fkUsuario, fkPost } = req.body;
        return pool.request().query(`INSERT INTO Comentario(descricao,fkUsuario,fkPost) VALUES
        ('${descricao}',${fkUsuario},${fkPost})`);
    }).then(() => {
        res.sendStatus(200);
    }).finally(() => {
        banco.sql.close();
    })
})

posts.get('/select_comment', (req, res) => {
    banco.conectar().then(pool => {
        let { id } = req.query;
        return pool.request().query(`SELECT c.*,a.nome,a.img_link FROM Comentario as c, Usuario2 as a,Post as p WHERE c.fkPost = p.id and c.fkUsuario = a.id and p.id = ${id} order by c.id desc;`);
    }).then(consulta => {
        console.log(`Comentarios encontrado: ${JSON.stringify(consulta.recordset)}`);
        res.send(consulta.recordset);
    }).finally(() => {
        banco.sql.close();
    })
})

module.exports = posts;