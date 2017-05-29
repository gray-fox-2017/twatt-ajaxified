const express = require('express');
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

var post = require('./routes/post')
var timeline = require('./routes/timeline')
var search = require('./routes/search')

app.use('/search', search)
app.use('/', timeline)
app.use('/post', post)

app.listen(3000)