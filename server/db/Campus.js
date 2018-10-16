

const db = require('./database.js')
const SEQUELIZE = require('sequelize') 




const Campus = db.define('campuses', {
    name:{
        type: SEQUELIZE.STRING,
        allowNull: false
    },
    imageUrl:{
        type:SEQUELIZE.STRING,
        defaultValue: null
    },

    address:{
     type: SEQUELIZE.STRING,
    allowNull: false
    },
    description: {
        type: SEQUELIZE.TEXT,
    }
})

module.exports = Campus