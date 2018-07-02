const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')


const listing = require('./routes/listing')


const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/api/', listing)


module.exports = server
