
const db = require('./database.js')
const SEQUELIZE = require('sequelize') 




const Student = db.define('students',{
    firstName:{
        type: SEQUELIZE.STRING,
        allowNull: false
    },
    lastName: {
        type: SEQUELIZE.STRING,
        allowNull: false
    },
    email: {
        type: SEQUELIZE.STRING,
        allowNull: false,
        isEmail: true
    },
    // gpa: {
    //     type: SEQUELIZE.NUMBER,
    //     validate:{
    //         min: 0, 
    //         max:4
    //     }
    
    imageUrl: {
        type: SEQUELIZE.STRING,
        defaultValue: null
    }
})



module.exports = Student
