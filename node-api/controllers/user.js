
const _=require('lodash');
const User=require('../models/user');


exports.userById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"User not found"
            })
        }
        
        req.profile=user; //adds profile objectin request with user info
        next();
    })
}

exports.hasAuthorization= (req,res,next)=>{
    const authorized=req.profile && req.auth && req.profile._id===req.auth._id;
    if(!authorised){
        return res.status(403).json({
            error:"user is not authorized to perform this action"
        })
    }
}

exports.allUsers= (req,res,next)=>{
    User.find((err,users)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.json({users})
    }).select("name email updated createdAt")
}

exports.getUser=(req,res)=>{
    req.profile.hashed_password=undefined;
     req.profile.salt=undefined;
    return res.json(req.profile);
}

exports.updateUser=(req,res,next)=>{
    let user=req.profile;
    user=_.extend(user,req.body);//extebd mutate the source object
    user.updated=Date.now()
   
    user.save((err)=>{
        if(err){
            return res.status(400).json({
                "error":"you are not authorized to perform this action"
            })
        }
        req.hashed_password=undefined;
     req.salt=undefined;
        res.json({user});
    })
}

exports.deleteUser=(req,res,next)=>{
    var user=req.profile;
    user.remove((err,user)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
         
        res.json({message:"user deleted successfullly"});
    })
}

