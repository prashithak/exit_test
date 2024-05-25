const express=require('express');
const router=express.Router();
const todo=require('../MODEL/todos')

router.use(express.json());


module.exports=router;