const express = require('express');
const experience = express.Router();
const cors = require('cors');
var banco = require('../app-banco');

// const Experience = require('../models/Experience');
experience.use(cors());

process.env.SECRET_KEY = 'secret';

// experience.post('/create', (req, res) => {
//     const experienceData = {
//         company: req.body.company,
//         position: req.body.position,
//         from_date: req.body.from_date,
//         to_date: req.body.to_date,
//         description: req.body.description
//     }
//     Experience.create(experienceData)
//         .then(experience => {
//             res.json({ status: experience.id + 'registered' });
//         })
//         .catch(err => {
//             res.send('Error: ' + err)
//         });
// });

experience.post('/create', (req, res) => {
    banco.conectar().then(pool => {
        console.log(`Chegou pro cadastro: ${JSON.stringify(req.body)}`);
        let { empresa, cargo, data_inicio, data_fim, descricao } = req.body;
        return pool.request().query(`INSERT INTO Exp VALUES ('${empresa}','${cargo}','${data_inicio}','${data_fim}',
        '${descricao}')`);
    }).then(() => {
        res.sendStatus(200);
    }).finally(() => {
        banco.sql.close();
    })
});

// experience.get('/select', (req, res) => {
//     Experience.findAll()
//         .then(experiences => res.send(experiences));
// });

experience.get('/select', (req, res) => {
    banco.conectar().then(pool => {
        return pool.request().query(`SELECT 
            empresa,
            cargo,
            FORMAT(data_inicio,'dd/MM/yyyy') as data_inicio,
            FORMAT(data_fim,'dd/MM/yyyy') as data_fim,
            descricao
        FROM Exp`);
    }).then(consulta => {
        res.send(consulta.recordset);
    }).finally(() => {
        banco.sql.close();
    })
})

module.exports = experience;