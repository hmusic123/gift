const express=require("express")
const router=express.Router()
const pool=require("../pool")
    router.get("/",(req,res)=>{
     var pid=req.query.pid;  //商品的id
     
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
    router.get("/add",(req,res)=>{
        var pid=req.query.pid;  //商品的id
        var count=req.query.count;
        var uid=req.session.uid;  //客户的id
        pool.query("select * from gift_shoppingcart_item where user_id=? and product_id=?",[uid,pid],(err,result)=>{
            if (err) throw err;
            //如果没买过，插入
            if(result.length==0){
                var sql="insert into gift_shoppingcart_item values(null,?,?,?,0)";
                pool.query(sql,[uid,pid,count],(err,result)=>{
                    if(err) throw err;
                    res.end()
                })
                //买过更新商品数量
            }else{
                pool.query("update gift_shoppingcart_item set count=count+? where user_id=? and product_id=?",[count,uid,pid],(err,result)=>{
                    if (err) throw err;
                    res.end()
                })
            }
        })
     })
    router.get("/items",(req,res)=>{
        var uid=req.session.uid;
        var sql=`SELECT * FROM gift_shoppingcart_item inner join gift_product on product_id=pid where user_id=?`;
        pool.query(sql,[uid],(err,result)=>{
             if(err) console.log(err);
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"*"
             })
            res.write(JSON.stringify(result))
             res.end();
        })
      })
    router.get("/update",(req,res)=>{
            var iid=req.query.iid;
            var count=req.query.count;
            var sql="update gift_shoppingcart_item set count=? where iid=?";
            var data=[count,iid];  
            pool.query(sql,data,(err,result)=>{
                if(err) console.log(err);   
                res.end();  
            })
      })
    router.get("/delete",(req,res)=>{
            var iid=req.query.iid;
            var sql="delete from gift_shoppingcart_item where iid=?";
            pool.query(sql,[iid],(err,result)=>{
            if(err) console.log(err);
            res.end();
          
        })
      })
 
    
    
    
     








module.exports=router