const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/",(req,res)=>{
    var pid=req.query.pid;
    var sql="select * from gift_product where pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
          })
          
          res.write(JSON.stringify(result));
          res.end();

    })
})


module.exports=router