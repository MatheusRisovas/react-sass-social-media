const express = require('express');
const education = express.Router();
const cors = require('cors');
var banco = require('../app-banco');

// const Education = require('../models/Education');
education.use(cors());

process.env.SECRET_KEY = 'secret';

// education.post('/create', (req, res) => {
//     const educationData = {
//         institution: req.body.institution,
//         degree: req.body.degree,
//         field_of_study: req.body.field_of_study,
//         from_date: req.body.from_date,
//         to_date: req.body.to_date,
//         description: req.body.description
//     }
//     Education.create(educationData)
//         .then(education => {
//             res.json({ status: education.id + 'registered' });
//         })
//         .catch(err => {
//             res.send('Error: ' + err)
//         });
// });

education.post('/create', (req, res) => {
    banco.conectar().then(pool => {
        let { instituicao, grau, area_de_estudo, data_inicio, data_fim, descricao } = req.body;
        return pool.request().query(`INSERT INTO Edu VALUES
        ('${instituicao}','${grau}','${area_de_estudo}','${data_inicio}','${data_fim}','${descricao}')`);
    }).then(() => {
        res.sendStatus(200);
    }).finally(() => {
        banco.sql.close();
    })
})

// education.get('/select',(req,res)=>{
//     Education.findAll()
//     .then(educations => res.send(educations));
// });

education.get('/select', (req, res) => {
    banco.conectar().then(pool => {
        return pool.request().query(`SELECT 
            id,
            instituicao,
            grau,
            descricao,
            FORMAT(data_inicio,'dd/MM/yyyy') as data_inicio, 
            FORMAT(data_fim,'dd/MM/yyyy') as data_fim
        FROM Edu`);
    }).then(consulta => {
        res.send(consulta.recordset);
    }).finally(() => {
        banco.sql.close();
    })
})

education.post('/delete', (req, res) => {
    banco.conectar().then(pool => {
        let { id } = req.body;
        console.log(`ID: ${JSON.stringify(id)}`);
        return pool.request().query(`DELETE FROM Edu WHERE id = ${id}`);
    }).then(() => {
        res.sendStatus(200);
    }).finally(() => {
        banco.sql.close();
    })
});

module.exports = education;