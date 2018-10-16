
const campusRouter = require('express').Router()
const Campus = require('../db/Campus')






campusRouter.get('/', async function (req, res, next){

try {
    const allCampus = await Campus.findAll()
    console.log(allCampus)
    res.json(allCampus)
  } catch (err){
    next(err)
  }
  })

module.exports = campusRouter




