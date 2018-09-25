const express=require('express');
const bodyParser=require('body-parser');
const index=require('./routes/index.js');
const homeBase=require('./routes/homeBase.js');
const header=require('./routes/header.js');
const login=require('./routes/login.js');
const register=require('./routes/register.js')
var app=express();
app.listen(3000,()=>{
    console.log('server start success');
});
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(express.static('static'));
app.use('/index',index);
app.use('/homeBase',homeBase);
app.use('/header',header);
app.use('/login',login);
app.use('/register',register);
