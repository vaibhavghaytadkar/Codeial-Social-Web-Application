module.exports.profile=function(req,res){
    return res.end('<h1>User Profile accessed</h1>');
}

//Render the sign up page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}

//Render the sign in page
module.exports.signIn =function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

//get the Sign up Data
module.exports.create=function(req,res){
    
}