const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll({

  })

  return response.send(novels)
}
const getNovelById = async (request, response) => {
  try {
    const { id } = request.params

    const foundGenre = await models.Genres.findOne({ where: { id } })

    return foundGenre


      ? response.send(foundGenre)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again')
  }
}


module.exports = { getAllNovels }
