const express = require('express')
const router = express.Router()
const server = require('../server')

const listing = require('../db/listing')

const request = require('superagent')


router.get('/', function (req, res) {
  listing.getAllBeers()
    .then(beers => {
      res.json(beers)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
