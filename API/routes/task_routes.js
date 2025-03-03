const { create_task, get_tasks, get_task, update_task, delete_task } = require("../controllers/task_controller")

const routes = require("express").Router()

routes.get('/',(req,res)=>{res.send("Hello welcome to your todo app")})

routes.post('/task',create_task) 
routes.get("/tasks", get_tasks)
routes.get('/task/:id', get_task)
routes.patch('/task/:id', update_task)
routes.delete('/task/:id', delete_task)



module.exports = routes;