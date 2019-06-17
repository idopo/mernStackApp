const express = require('express');

const mongoose = require('mongoose');

const config = require('config');
const path = require('path');
const app = express();
const db = config.get('mongoURI');

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex:true
})
.then(()=> console.log("mongodb connected"))
.catch((err)=>console.log(err));


//body parser midlleware
app.use(express.json());

//use routes

app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

if (process.env.NODE_ENV ==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=> {
        res.sendfile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT||5000;

app.listen(port,()=> console.log(`server started at  ${port}`));



