

const db = require('./database');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
    name: { type: Sequelize.STRING, allowNull: false },
    imageUrl: { type: Sequelize.TEXT, defaultvalue: '/' },
    address: { type: Sequelize.TEXT, allowNull: false },
    description: { type: Sequelize.TEXT }
})


module.exports = Campus