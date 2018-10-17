
const campusRouter = require('express').Router()
const Campus = require('../db/Campus')






campusRouter.get('/', async function (req, res, next){

try {
    const allCampus = await Campus.findAll()
    res.json(allCampus)
  } catch (err){
    next(err)
  }
  })


  campusRouter.get('/:id', async function (req,res,next){
    console.log("hit the route")
    try {
        const campus = await Campus.findById(req.params.id)
           res.json(campus)
       } catch (err){
           next(err)
       }
         })

module.exports = campusRouter




