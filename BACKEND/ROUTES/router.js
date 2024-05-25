const express=require('express');
const router=express.Router();
const todo=require('../MODEL/todos')

router.use(express.json());

router.get('/todos', async (req, res) => {
    
       todo.find().then(data=>res.json(data))
       .catch(err=>res.json(err))
  });





  router.post('/todos', async (req, res) => {
    const todo = new todo({
      des: req.body.des,
      status: req.body.st || 'ongoing',
    });
    try {
      const newTodo = await todo.save();
      res.status(201).json(newTodo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
module.exports=router;