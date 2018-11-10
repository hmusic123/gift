const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/",(req,res)=>{
 var output={//要回发客户端支持分页的对象
    pno:0,  //页号，从0开始，从客户端过来
    pageSize:12 ,//每页9个商品
    count:0 ,//查询结果的总记录
    pageCount:0,  //总页数
    products:[]   //查询结果列表,不能直接给要实现分页
  }
  output.pno=req.query.pno;
  //express中bodyPaser中间件自动将http://....?kwords=保温杯中的？后的东西拿到（url.parse(req.url,true)）
  var kwords=req.query.kwords;
  
  var arr=kwords.split(" ")
  for(var i=0;i<arr.length;i++){
    arr[i]=`title like '%${arr[i]}%'`
  }
  
  var where=" where "+arr.join(" and ")
  var sql=" SELECT * FROM gift_product ";
  
    pool.query(sql+where,[],(err,result)=>{
      if(err)throw err;
     
      output.count=result.length;
      output.pageCount=Math.ceil(output.count/output.pageSize)
     result=result.slice(output.pno*12,output.pno*12+12)   //截取每页的商品,slice含头不含尾
     output.products=result;
     res.writeHead(200,{
       "Content-Type":"application/json;charset=utf-8",
       "Access-Control-Allow-Origin":"*"
     })
     res.write(JSON.stringify(output))  //将客户端写内容，把output对象转成字符串
     
     res.end()  //pool.query是异步，在发送的时候查询请求可能没回来
    })
   
  })
  
module.exports=router;