const Sequelize = require('sequelize')



const AuthorsModel = require('./Authors')
const NovelsModel = require('./Novels')

const connection = new Sequelize('novels', 'novels', 'N0v3ls!', {
  host: 'localhost', dialect: 'mysql'

})
const Authors = AuthorsModel(connection, Sequelize)

Authors.associate = function () {
  Authors.hasMany(NovelsModel)
}


module.exports = { Authors }
