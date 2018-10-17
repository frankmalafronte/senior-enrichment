
const Student = require('../db/Student')

const studentsRouter = require('express').Router()

studentsRouter.get('/', async function (req, res, next) {
  console.log("hit students router")
  try {
   const allStudents = await Student.findAll()
      res.json(allStudents)
  } catch (err){
      next(err)
  }
    })

    studentsRouter.get('/:id', async function (req,res,next){
        try {
            const student = await Student.findById(req.params.id)
               res.json(student)
           } catch (err){
               next(err)
           }
             })
         


    module.exports = studentsRouter