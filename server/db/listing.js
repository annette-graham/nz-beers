var Knex = require('knex')
var config = require('../../knexfile')[process.env.NODE_ENV || 'development']
var db = Knex(config)


function getAllBeers(testDb) {
  const conn = testDb || db
  return conn('beers')
  .select()
}


module.exports = {
  getAllBeers
}
