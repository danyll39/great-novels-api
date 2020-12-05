const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll({

  })

  return response.send(authors)
}

const getAuthorById = async (request, response) => {
  try {
    const { id } = request.params

    const foundAuthor = await models.Authors.findOne({ where: { id } })

    return foundAuthor


      ? response.send(foundAuthor)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again')
  }
}



module.exports = { getAllAuthors, getAuthorById }
