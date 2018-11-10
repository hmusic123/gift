const express=require('express');
const users=require('./routes/users.js');
const bodyParser=require('body-parser');
const index=require("./routes/index");
const details=require("./routes/details");
const search=require("./routes/search")
const cart=require("./routes/cart")
const session=require('express-session')

//构建web服务器
var app=express();
app.listen(3000);
//托管静态资源
app.use(express.static('./public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: '128位随机字符串',
resave: false,
saveUninitialized: true,
}))
//使用路由器
//把用户路由器挂载到 /user下
// /user/register
app.use('/users',users);
app.use("/index",index);
app.use("/details",details);
app.use("/search",search);
app.use("/search",search);
app.use("/cart",cart);