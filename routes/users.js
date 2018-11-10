const express=require('express');
//引入mysql连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//在路由器下添加路由
//1.用户注册
router.post('/register',(req,res)=>{
  //浏览器发送的数据
  //console.log(req.body);
  var obj=req.body;
  //验证表单提交的内容是否为空
  //验证用户名为空
  var $uname=obj.uname;
  if($uname==''){
    res.send({code:401,msg:'uname required'});
	return;//终止函数中的代码继续执行
  }
  //验证密码为空
  var $upwd=obj.upwd;
  if($upwd==''){

    res.send({code:402,msg:'upwd required'});
    return;
  }
  //验证邮箱和电话
 /* var $email=obj.email;
  if($email==''){
    res.send({code:404,msg:'email required'});
	return;
  }
  var $phone=obj.phone;
  if($phone==''){
    res.send({code:403,msg:'phone required'});
	return;
  }*/
  //以上验证都通过了，执行插入数据库操作
  var sql='INSERT INTO gift_user VALUES(NULL,?,?,null,null,NULL,NULL,NULL)';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
    //如何判断插入成功————affectedRows
	if(result.affectedRows>0){
    
    res.write(JSON.stringify({code:200,msg:'reg success'  }));
    //res.send({code:200,msg:'reg success'});
	}else{
    res.write(JSON.stringify({code:301,msg:'reg error'}));
   // res.send({code:301,msg:'reg error'})
  }
  res.end()
  }
  );
 
});
//2.删除用户
router.get('/delete',(req,res)=>{
  res.send('删除成功');
});


//路由器导出

router.post("/signin",(req,res)=>{
  var uname=req.body.uname;
  
  var upwd=req.body.upwd;
 
  var sql="select * from gift_user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
   
      if(err)throw err;
      if(result.length>0){
          res.writeHead(200,{
              "Content-Type":"application/json;charset=utf-8",
              "Access-Control-Allow-Origin":"*"
              })
          var user=result[0];
          req.session.uid=user.uid;
          res.write(JSON.stringify({
              ok:1
            }))
          }else{
            res.write(JSON.stringify({
              ok:0,
              msg:"用户名或密码错误！"
            }))
          }
          res.end()
          }
      
      ) 
  
  
  })
router.get("/islogin",(req,res)=>{
  res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
      })
  if(req.session["uid"]===undefined){
      res.write(JSON.stringify({ ok:0 }));
      res.end()
  } else{
      var uid=req.session["uid"]
     var sql="select * from gift_user where uid=?"
      pool.query(sql,[uid],(err,result)=>{
          if(err) console.llog(err);
          var user=result[0];
          res.write(JSON.stringify({ ok:1,uname:user.uname }))
          res.end()
      })
    
  }
 
})
router.get("/signout",(req,res)=>{
  req.session["uid"]=undefined;
  res.end();
})
module.exports=router;