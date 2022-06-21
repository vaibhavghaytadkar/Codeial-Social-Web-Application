// const Comment = require('../models/comment');
// const Post=require('../models/post');

// module.exports.create=function(req,res){
//  Post.findById(req.body.post,function(err,post){
//     if(post){
//         Comment.create({
//             content:req.body.content,
//             post:req.body.post,
//             user:req.user_id
//         },function(err,comment){
//             if(err){
//                 console.log("Error while adding comment");
//                 return ;
//             }
//             post.comment.push(comment);
//             post.save();
//             res.redirect('/');
//         });
//     }
//  });
// }
const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){

        if (post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error

                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });
        }

    });
}
// module.exports.create=function(){
//     console.log("not able to create comment");
// }