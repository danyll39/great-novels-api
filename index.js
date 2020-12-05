const express = require('express')
const { getAllAuthors, getAuthorById } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels } = require('./controllers/novels')
const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)

app.all('*', (request, response) => {
  return response.send(400)
})


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
