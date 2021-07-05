const express = require('express')
const path = require('path') 
const mongoose = require('mongoose')
const { PORT, MONGODB_URI } = require('./config')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views/'))
app.use('/assets', express.static( './src/assets'))

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.listen(PORT, () => console.log('Ready on port ' + PORT))