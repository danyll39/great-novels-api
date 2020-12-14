const NovelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, allowNull: false, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, allowNull: false, references: { model: Novels, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = NovelsGenres
