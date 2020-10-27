const { body, validationResult } = require('express-validator');
exports.createPostValidator=(req,res,next)=>{
    //title
    body('title').notEmpty(),
    body('title').isLength({
        min:4,max:150
    }),
    
    //body
      body('body','write a body').notEmpty(),
    body('body','body must be between 4 and 2000 characters').isLength({
        min:4,max:2000
    });
    
    //check for errors
    const errors=validationResult(req);
    console.log(errors);
    //if error show the first one if they happen
    if(errors){
        //const firstError=errors.map(error=>error.msg)[0];
        const firstError=errors[0];
        console.log(firstError);
        return res.status(400).json({error:firstError});
    }
    //proceed to next middleware
    next();
    
}
/*

 body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

*/