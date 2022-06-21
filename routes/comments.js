
const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentsController = require('../controllers/comments_controller');
// console.log("here in routes to create comment");
router.post('/create', passport.checkAuthentication, commentsController.create);

// console.log("here in comments to destroy it");
router.get('/destroy/:id',passport.checkAuthentication,commentsController.destroy);
module.exports = router;