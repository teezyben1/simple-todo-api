const Task = require('../models/task_model');

exports.create_task = async(req, res) =>{ 

    try {
        const {name, description} = req.body;
        const new_task = await Task.create({name, description});
        res.status(201).json({
            message: "Task created successfully",
            data: new_task
        })

        
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
 }
 

exports.get_tasks = async(req, res) =>{  
    try {
        tasks = await Task.find({})
        res.status(200).json({data: tasks})

    } catch (error) {
        res.status(500).json({error: error.message})
        
    }

}


exports.get_task = async(req, res) =>{ 
    try {
        task = await Task.findById(req.params.id)
        res.status(200).json({data: task})

    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
 }


exports.update_task = async(req, res) =>{ 
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message: "Task updated successfully", 
            data: task
        })

    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
 }


exports.delete_task = async(req, res) =>{ 
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Task deleted successfully", 
            data: task
        })

    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
 }