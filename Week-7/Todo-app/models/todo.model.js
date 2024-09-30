const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.Types.ObjectId;

const todoSchema = new Schema({ 
    userId: {
        type: ObjectId,
        required: [true, 'userId is required'],
    },
    task: {
        type: String,
        required: [true, 'task is required'],
        trim: true,
    },
    priority: {
        type: String,
        required: [true, 'priority is required'],
        trim: true,
    },
    status: {
        type: String,
        required: [true, 'status is required'],
        trim: true,
    },
    deadline: {
        type: String,
        required: [true, 'deadline is required'],
        trim: true,
    },
    deleted: {
        type: Boolean,
        default: false, 
    },
}, { timestamps: true });

const todoModel = mongoose.model('todos', todoSchema);

module.exports = {todoModel};