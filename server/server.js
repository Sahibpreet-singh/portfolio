const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());
const port=3000;

app.get('/',(req,res)=>{
    res.send('app is working');
});




app.listen(port,()=>{console.log(`server is running on port ${port}`);
});


