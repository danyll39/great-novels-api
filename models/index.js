const Sequelize = require('sequelize')
const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModal = require('./novelsGenres')

const connection = new Sequelize('novels', 'novels', 'N0v3ls!', {
  host: 'localhost', dialect: 'mysql'
})

const Novels = NovelsModel(connection, Sequelize)
const Authors = AuthorsModel(connection, Sequelize, Novels)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModal(connection, Sequelize, Novels, Genres)

Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = { Authors, Genres, Novels, NovelsGenres }
