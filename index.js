
const express=require('express');
const app=express();
const port=8000;


const db=require('./config/mongoose');


const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


const cookieParser=require('cookie-parser');

const MongoStore=require('connect-mongo');

const expressLayouts = require('express-ejs-layouts');

const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'

}));
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router

//set up  view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'codeial',
    secret: "something",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        // {
        
        //     mongooseConnection:db,
        //     autoRemove:'disabled'
        
        // },
        {

            mongoUrl:'mongodb://localhost/codeial_development',
        },
        // function(err){
        //     console.log(err || 'connect-mongodb setup ok')
        // }
    )
    // store: MongoStore.create({
    //     mongoUrl: process.env.MONGO_URI  //(URI FROM.env file)
    //   })
    
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));
 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`);

    }
  
        console.log(`Server is running on port : ${port}`);
    

})
