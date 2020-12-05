const Authors = (connection, Sequelize) => {
  return connection.define('Authors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: Sequelize.STRING, allowNull: false },
    nameLast: { type: Sequelize.STRING, allowNull: false },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = Authors
