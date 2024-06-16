const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:Shivesh12@cluster0.2zajxvl.mongodb.net/Todo-App")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos" , todoSchema);
module.exports = {
    todo
}