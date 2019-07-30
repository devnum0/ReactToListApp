const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  todoList: [
    {
      name: String,
      discription: String,
      status: String
    }
  ]
});

module.exports = User = mongoose.model('user', UserSchema);