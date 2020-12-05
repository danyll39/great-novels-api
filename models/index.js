const Sequelize = require('sequelize')



const AuthorsModel = require('./Authors')
const GenresModel = require('./Genres')
const NovelsModel = require('./Novels')

const connection = new Sequelize('novels', 'novels', 'N0v3ls!', {
  host: 'localhost', dialect: 'mysql'

})
const Authors = AuthorsModel(connection, Sequelize)

const Genres = GenresModel(connection, Sequelize)

const Novels = NovelsModel(connection, Sequelize)


module.exports = { Authors, Genres, Novels }
