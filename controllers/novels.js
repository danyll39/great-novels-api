const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [
      {
        model: models.Authors
      },
      {
        model: models.Genres
      }
    ],
  })

  return response.send(novels)
}
const getNovelById = async (request, response) => {
  try {
    const { id } = request.params
    const foundNovel = await models.Novels.findOne({
      where: { id },
      include: [
        {
          model: models.Authors
        },
        {
          model: models.Genres
        }
      ],
    })

    return foundNovel
      ? response.send(foundNovel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel, please try again')
  }
}

module.exports = { getAllNovels, getNovelById }
