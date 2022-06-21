const Post=require('../models/post');
const User=require('../models/user');
module.exports.home=function(req,res){

    // return res.end('<h1>Express is up for codeial</h1>');
    // console.log(req.cookies);
    // Post.find({},function(err,post){
    //     return res.render('home',{
    //         title:"Codeial | Home",
    //         posts: post
    //     });
    // })
   Post.find({}).populate('user')
   .populate('user')
   .populate({
    path:'comments',
    populate:{
        path:'user'
    }
   }).exec(function(err,post){
            User.find({},function(err,users){
                return res.render('home',{
                    title:"Codeial | Home",
                    posts: post,
                    all_users:users
                });
            });
        })
    }