const db = require('./database');
const Sequelize = require('sequelize');

const Students = db.define('student', {
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, isEmail: true },
    imageUrl: { type: Sequelize.TEXT, defaultvalue: '/' },
    gpa: { type: Sequelize.DECIMAL, allowNull: true }

})

module.exports = Students