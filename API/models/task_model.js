const { mongoose } = require('mongoose')

const Schema =require('mongoose').Schema

const taskSchema =new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'please enter the user id']
    },
    
    name:{
        type: String,
        required:[true, "please enter your task name"]
    },
    description:{
        type:String,
        required:[true, 'please describe your task']
    },
    status:{
        type: String,
        default:"pending"
    },

    createdAt:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('task', taskSchema)