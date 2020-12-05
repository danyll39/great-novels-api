const Novels = (connection, Sequelize, Authors) => {
  return connection.define('Novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    authorId: { type: Sequelize.INTEGER, allowNull: false, references: { model: Authors, key: 'id' } },

  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt', 'AuthorId'] }
    }
  }, { paranoid: true })
}


module.exports = Novels
