const Sequelize = require('sequelize')



const AuthorsModel = require('./Authors')
const GenresModel = require('./Genres')
const NovelsModel = require('./Novels')

const connection = new Sequelize('novels', 'novels', 'N0v3ls!', {
  host: 'localhost', dialect: 'mysql'

})
const Novels = NovelsModel(connection, Sequelize)
const Authors = AuthorsModel(connection, Sequelize, Novels)
const Genres = GenresModel(connection, Sequelize)



Authors.hasMany(Novels)
Novels.belongsTo(Authors)

module.exports = { Authors, Genres, Novels }
