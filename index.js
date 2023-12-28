const express=require('express')
const public=require('./components/public')
const cors=require('cors');
const app=express();
const port=process.env.PORT || 4400;
app.use(cors())
app.use(express.json())
app.use('/public',public)
app.listen(port,()=>{
    console.log("server startd")
})