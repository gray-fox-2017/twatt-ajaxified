const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const twatt = require('./routes/api');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/api/', twatt);

app.listen(3000, () => console.log("Listening on port 3000"));
