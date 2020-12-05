const Sequelize = require('sequelize')



const AuthorsModel = require('./Authors')
const GenresModel = require('./Genres')

const connection = new Sequelize('novels', 'novels', 'N0v3ls!', {
  host: 'localhost', dialect: 'mysql'

})
const Authors = AuthorsModel(connection, Sequelize)

const Genres = GenresModel(connection, Sequelize)


module.exports = { Authors, Genres }
