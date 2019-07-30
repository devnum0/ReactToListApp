const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/server',
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log(err));

const User = require('./models/User');
const Todo = require('./models/Todo');
app.get('/', (req, res) => {
    User.find()
    .then(user => {
        return res.json(user)
    })
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

// app.post('/add', (req, res) => {
//     const {todoList} = req.body;
//     const newUser = new User();
    
//     todoList.map(todo => {    
//         newUser.todoList.push(todo);     
//     })
//     console.log(newUser);
//     newUser.save().then(user => {
//     return  res.json(user)}
//         ).catch(err => res.status(404).json({ msg: 'No items found' }));
// });


app.post('/add', (req, res) => {
  const {name,status,description} = req.body;
  const newTodo = new Todo();
  newTodo.name = name;
  newTodo.status=status;
  newTodo.description=description;

  console.log(req.body);
  newTodo.save().then(todo1 => {
    console.log(todo1)
  return  res.json(todo1)}
      ).catch(err => res.status(404).json({ msg: 'did not save' }));
});

app.put('/remove/:id', (req, res) => {
  console.log(req.params.id);
  const{id} = req.params;
   Todo.find({ _id:id }).deleteOne().exec();
 return res.json("deleted")

});

app.put('/updateStatus', (req, res) => {
  const {status,id} = req.body;

  Todo.updateOne({_id:id },{status:status});

  console.log(req.body);
  return res.json("updated status")
});

const port = 4000;

app.listen(port, () => console.log(`Server running...${port}`));