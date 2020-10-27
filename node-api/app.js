const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
var uuidv1 = require('uuidv1');
const fs=require('fs');
const { body, validationResult } = require('express-validator');
const jwt=require('jsonwebtoken');
var expressJwt = require('express-jwt');
const app=express();
var cookieParser = require('cookie-parser');
const cors=require('cors');
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true }).then(()=>console.log('DB connected')).catch((err)=>{console.log('dv connection error: '+err.message)});

//bring in routes
const postRoutes=require('./routes/post');
const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user');

app.get('/',(req,res)=>{
    fs.readFile('docs/apiDocs.json',(err,data)=>{
        if(err){
            res.status(400).json({
                error:err
            })
        }
        const docs= JSON.parse(data);
        res.json(docs);
    });
})

//bring the middleware
app.use(morgan('dev'));
/*app.use(myOwnMiddleware);*/
app.use(bodyParser.json());
app.use(cookieParser());
//api docs

app.use(cors());
app.use('/',postRoutes);
app.use('/',authRoutes);
app.use('/',userRoutes);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({error:'unauthorized!'});
  }
});


const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log('A node js api is listening on port: \${port}');
});