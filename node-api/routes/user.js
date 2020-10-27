const express=require('express');
//const {signup,signin,signout}= require('../controllers/auth');
const {requireSignin}= require('../controllers/auth');
const {userById, allUsers, getUser,updateUser,deleteUser}= require('../controllers/user');
//const validator=require('../validator');
const router=express.Router();
const { body, validationResult } = require('express-validator');
//router.get('/',getPosts);
/**/
router.get('/users',allUsers);
router.get('/user/:userId',requireSignin,getUser);
router.put('/user/:userId',requireSignin,updateUser);
router.delete('/user/:userId',requireSignin,deleteUser);
//any route containing userId our app will execute userById()  
router.param('userId',userById);

//router.post('/signup',signup);

module.exports=router;