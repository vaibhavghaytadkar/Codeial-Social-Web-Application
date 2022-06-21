
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

module.exports.destroy = function(req, res){
    Comment.findById(req.params.id, function(err, comment){
        // console.log("cant delelte comment 1");
        if (comment.user == req.user.id){

            let postId = comment.post;

            comment.remove();

            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                // console.log("cant delelte comment 2");
                return res.redirect('back');
            })
        }else{
            // console.log("cant delelte comment 3");
            return res.redirect('back');
        }
    });
   
}

