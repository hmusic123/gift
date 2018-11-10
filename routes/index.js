const express=require("express")
const router=express.Router()
const pool=require("../pool")

router.get("/getIndexProducts",(req,res)=>{
  var sql="SELECT * FROM gift_product";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    
    res.write(JSON.stringify(result));
    res.end();
  })
})
//接口地址: http://localhost:3000/index/getIndexProducts
module.exports=router;