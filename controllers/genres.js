const models = require('../models')


const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll({

  })

  return response.send(genres)
}


module.exports = { getAllGenres }
