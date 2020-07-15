const router = require('express').Router()
const Title = require('../db/models/titles')

router.get('/', async function(req, res, next) {
  try {
    let titles = await Title.findAll()
    res.json(titles)
  } catch (err) {
    next(err)
  }
})

module.exports = router
