const Post = require('../models/post');

module.exports.create = function(req,res){
    Post.create({
        content:req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){
            console.log('error in creatinf the tpost');
            return ;
        }
        return res.redirect('back');
    })
}
// module.exports.create=function(req,res){
//     return console.log("say hii baby");
// }
// module.exports.create=function(req,res){
//     return res.render('user_profile', {
//         title: 'User Profile'
//     })
// }
// module.exports.create = function(req, res){
//     Post.create({
//         content: req.body.content,
//         user: req.user._id
//     }, function(err, post){
//         if(err){console.log('error in creating a post'); return;}

//         return res.redirect('back');
//     });
// }