const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const AuthorsModel = require('./authors')

const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModal = require('./novelsGenres')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Novels = NovelsModel(connection, Sequelize)
const Authors = AuthorsModel(connection, Sequelize, Novels)
const Genres = GenresModel(connection, Sequelize)
const NovelsGenres = NovelsGenresModal(connection, Sequelize, Novels, Genres)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)


Novels.belongsToMany(Genres, { through: NovelsGenres })
Genres.belongsToMany(Novels, { through: NovelsGenres })
module.exports = {
  Authors, Genres, Novels, NovelsGenres, Op: Sequelize.Op,
}
