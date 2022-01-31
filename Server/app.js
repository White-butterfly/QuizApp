const express = require('express');
const mongoose = require("mongoose");

require('dotenv').config({path: './config.env'}); 
require('./server');

const errorHandler = require('./middleware/error');

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/authRoute')); 

app.use('/api/private', require('./routes/private')); 

// Error Handler (should be last piece of middleware ) 
app.use(errorHandler);



const port = process.env.port;

app.listen(port, ()=> console.log(`App is running on port ${port}`));

