const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv').config();
const cors=require('cors');
 require('./DB/connection');
 const router=require('./ROUTES/router');


const PORT=process.env.PORT;
const app= new express();
app.use(morgan('dev'));
app.use(cors());
app.use('/api',router);


app.listen(PORT,()=>{
    console.log(`${PORT} is running`);
})
