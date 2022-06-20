
const express=require('express');
const db=require('./config/mongoose');
const cookieParser=require('cookie-parser');
const app=express();

const port=8000;


app.use(express.urlencoded());
app.use(cookieParser());

//use express router

app.use('/',require('./routes'));

//set up  view engine
app.set('view engine','ejs');
app.set('views','./views');
 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`);

    }
  
        console.log(`Server is running on port : ${port}`);
    

})
