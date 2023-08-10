const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter.js');


const app = express();
app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(mainRouter);


module.exports = app;






