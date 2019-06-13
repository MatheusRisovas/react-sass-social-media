const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'experience',
    {
        id:  {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type:Sequelize.STRING
        },
        position: {
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
        tableName:'experience'
    }
)