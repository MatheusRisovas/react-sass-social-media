const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'user',
    {
        id:  {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:Sequelize.STRING
        },
        position: {
            type:Sequelize.STRING
        },
        company: {
            type:Sequelize.STRING
        },
        city: {
            type:Sequelize.STRING
        },
        state: {
            type:Sequelize.STRING
        },
        bio: {
            type:Sequelize.TEXT
        },
        email: {
            type:Sequelize.STRING
        },
        password: {
            type:Sequelize.STRING
        },
        img_link:{
            type:Sequelize.STRING
        }
    },{
        timestamps: false,
        tableName:'user'
    }
)