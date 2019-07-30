const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
 
      name: String,
      description: String,
      status: String

});

module.exports = Todo = mongoose.model('todo', TodoSchema);