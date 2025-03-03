const express = require('express');
const routes = require('./routes/task_routes');
const error_handler = require('./middlewares/error_handler')
require('dotenv').config()


const app = express()

// middleware
app.use(express.json())
app.use(error_handler)


// routes
app.use("/api/v1",routes)



module.exports = app