
const Student = require('../db/Student')

const studentsRouter = require('express').Router()

studentsRouter.get('/', async function (req, res, next) {
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
         
    studentsRouter.post('/', async (req, res, next) => {
        try {
            const studentFromDb = await Student.create({
            firstName: req.body.firstName,
             lastName: req.body.lastName,
             email: req.body.email
            });
                res.json(studentFromDb);
            } catch (err) {
                next(err);
            }
              });
            studentsRouter.delete('/:id', async function  (req, res, next)  {
                try {
                  const studentToDestroy = await Student.findById(req.params.id)
                  await studentToDestroy.destroy()
              
                  res.json(studentToDestroy);
                } catch (err) {
                  next(err);
                }
              });
              
            //   studentsRouter.put('/:id', async (req, res, next) => {
            //     try {
            //       const catFromDb = await Student.findById(req.params.id)
            //       await catFromDb.update({
            //         name: req.body.name || catFromDb.name,
            //         imageURL: req.body.imageURL || catFromDb.imageURL,
            //       })
              
            //       res.json(catFromDb);
            //     } catch (err) {
            //       next(err);
            //     }
            //   });     

              


    module.exports = studentsRouter
