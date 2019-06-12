const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');

const app = express();
const port = process.env.PORT  || 5000;

app.use(body_parser.json());
app.use(cors());
app.use(body_parser.urlencoded({extended: false}));

const Users = require('./routes/Users');
const Experiences = require('./routes/Experiences');
const Education = require('./routes/Educations');

app.use('/user',Users);
app.use('/experience',Experiences);
app.use('/education',Education);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});