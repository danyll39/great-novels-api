const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll({
  })

  return response.send(authors)
}
const getAuthorById = async (request, response) => {
  try {
    const { identifier } = request.params
    const foundAuthor = await models.Authors.findOne({
      include: [{
        model: models.Novels,
        include: [{ model: models.Genres }]
      }],
      where: {
        [models.Op.or]: [
          { id: identifier },
          { nameLast: { [models.Op.like]: `%${identifier}%` } },
        ],
      }
    })

    return foundAuthor
      ? response.send(foundAuthor)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again')
  }
}

module.exports = { getAllAuthors, getAuthorById }
