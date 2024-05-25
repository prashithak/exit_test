const mongoose=require('mongoose');
const schema=mongoose.Schema({
    des:String,
    status:String,
});
const todomodel=mongoose.model('todo',schema);
module.exports=todomodel;