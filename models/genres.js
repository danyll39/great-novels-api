const Genres = (connection, Sequelize, Novels) => {
  return connection.define('Genres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, references: { model: Novels, key: 'id' } },



  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = Genres
