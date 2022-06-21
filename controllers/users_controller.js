const User=require('../models/user');


module.exports.profile=function(req,res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

//Render the sign up page
module.exports.signUp=function(req,res){
   if(req.isAuthenticated()){
    return res.redirect('/users/profile');
   }
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}

//Render the sign in page
module.exports.signIn =function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
       }
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

//get the Sign up Data
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email : req.body.email},function(err,user){
        if(err){
            console.log('Error in finding user in Signing up');
            return ;
        }
        //when user is not there create user
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error in creating user while signing up");
                }
                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

//Sign in and create a session for users
module.exports.createSession = function(req,res){
    return res.redirect('/');
}
module.exports.destroySession =function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
}