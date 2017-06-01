"use strict";

const express = require('express');
const index = require('./routes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);

app.listen(3000);
