const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.use(cors());

app.set();

app.get('/', function(req, res) {});

modelu.exports = app;