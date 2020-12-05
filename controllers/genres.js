const models = require('../models')


const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll({

  })

  return response.send(genres)
}
const getGenreById = async (request, response) => {
  try {
    const { id } = request.params

    const foundGenre = await models.Genres.findOne({ where: { id } })

    return foundGenre


      ? response.send(foundGenre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve genre, please try again')
  }
}



module.exports = { getAllGenres, getGenreById }
