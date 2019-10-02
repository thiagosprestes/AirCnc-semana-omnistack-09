const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect('url', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = Acessar query params
// req.params = Acessar route params
//req.body = Acessar corpo da requisição

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3001)
