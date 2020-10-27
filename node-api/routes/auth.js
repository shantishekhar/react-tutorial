const express=require('express');
const {signup,signin,signout}= require('../controllers/auth');

const {userById}= require('../controllers/user');
const validator=require('../validator');
const router=express.Router();
const { body, validationResult } = require('express-validator');
//router.get('/',getPosts);
router.post('/signup',[
    //name is not null between 4 to 10 characters
    body('name').notEmpty().withMessage('name is required'),
    //email is not null valid and normalized


    body('email').isEmail().withMessage('must be email').isLength({
        min:4,max:150
    }).withMessage('must be at least 4 chars long and max 150 charactrs'),

    //check for password
      body('password').notEmpty().withMessage('password must not be empty'),
    body('password').isLength({
        min:6
    }).withMessage('password must be at least 6 chars long ').matches(/\d/).withMessage('password must contain a number')
    ],(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
         return res.status(400).json({ error: errors.array()[0].msg});
    }
    next();
},signup);


router.post('/signin',signin);

router.get('/signout',signout);

//any route containing userId our app will execute userById()
router.param('userId',userById);

//router.post('/signup',signup);

module.exports=router;
