const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const items = require('./routes/api/items');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose.connect(db)
.then(()=> console.log("mongodb connected"))
.catch((err)=>console.log(err));

app.use('/api/items',items);

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));
    app.get('*',(req,res)=> {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT||5000;

app.listen(port,()=> console.log(`server started at  ${port}`));



//body parser midlleware
app.use(bodyParser.json());


