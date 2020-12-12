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
    const { identifier } = request.params
    const foundNovel = await models.Novels.findOne({


      include: [{ model: models.Authors }, { model: models.Genres }],
      where: {
        [models.Op.or]: [
          { id: identifier },
          { title: { [models.Op.like]: `%${identifier}%` } },
        ],

      }
    })

    return foundNovel
      ? response.send(foundNovel)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve novel, please try again')
  }
}

module.exports = { getAllNovels, getNovelById }
