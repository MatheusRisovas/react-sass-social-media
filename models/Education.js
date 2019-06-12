const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'education',
    {
        id:  {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        institution: {
            type:Sequelize.STRING
        },
        degree: {
            type:Sequelize.STRING
        },
        field_of_study: {
            type:Sequelize.STRING
        },
        from_date: {
            type:Sequelize.DATE
        },
        to_date: {
            type:Sequelize.DATE
        },
        description: {
            type:Sequelize.TEXT
        }
    },{
        timestamps: false,
        tableName:'education'
    }
)