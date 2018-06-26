const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', (req,res) =>{
    console.log(req.body);
})

app.listen(port, ()=>{
    conosle.log(`Server is listening on port ${port}`);
});

