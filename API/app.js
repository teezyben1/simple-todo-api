const express = require('express');
const task_routes = require('./routes/task_routes');
const user_routes = require('./routes/user_route');
const auth_routes = require('./routes/auth_route');
const error_handler = require('./middlewares/error_handler')
require('dotenv').config()


const app = express()

// middleware
app.use(express.json())
app.use(error_handler)


// routes
app.use("/api/v1",task_routes)
app.use("/api/v1",user_routes)
app.use("/api/v1",auth_routes) 



module.exports = app