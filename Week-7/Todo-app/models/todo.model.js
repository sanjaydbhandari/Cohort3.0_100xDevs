const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const todoSchema = new Schema({ 
    userId: ObjectId,
    description: String,
    done: Boolean,
})

const todoModel = mongoose.model('todos',todoSchema)

module.exports=todoModel;