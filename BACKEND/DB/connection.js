const mongoose=require('mongoose');
mongoose.connect(process.env.MongoDB_URL)
.then(()=>{console.log("connected to db")})
.catch((err)=>{console.log('error')})