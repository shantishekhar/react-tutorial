const express=require('express');
const {getPosts,createPost,postByUser,postById,isPoster,updatePost,deletePost}= require('../controllers/post');
const {requireSignin}= require('../controllers/auth');
const {userById}= require('../controllers/user');
const validator=require('../validator');
const router=express.Router();
const { body, validationResult } = require('express-validator');
router.get('/posts',getPosts);
router.post('/post/new/:userId',requireSignin,createPost,[ body('title').notEmpty().withMessage('title must not be empty'),
    body('title').isLength({
        min:4,max:150
    }).withMessage('must be at least 4 chars long and max 150 charactrs'),
    
    //body
      body('body','write a body').notEmpty().withMessage('post body must not be empty'),
    body('body','body must be between 4 and 2000 characters').isLength({
        min:4,max:2000
    }).withMessage('post body must be at least 4 chars long and max 2000 characters long')
    ],(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
         return res.status(400).json({ errors: errors.array()[0].msg});
    }
    next();
});

router.get('/posts/by/:userId',requireSignin,postByUser);
router.put('/post/:postId',requireSignin,isPoster, updatePost);
router.delete('/post/:postId',requireSignin,isPoster, deletePost);

//router.post('/signup',signup);
//any route containing postId our app will execute postById()  
router.param('userId',userById);
router.param('postId',postById);

module.exports=router;



