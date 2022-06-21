const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');
console.log("Router loaded");

router.get('/',homeController.home);

//for any other routes access from here
//router.use('/routerName',require('./routerfile'));
router.use('/users',require('./users'));

// console.log("calling router from index.js--->/posts");

router.use('/posts',require('./posts'));
// console.log("in routes in index js to cfeate comment");
router.use('/comments',require('./comments'));

module.exports = router;