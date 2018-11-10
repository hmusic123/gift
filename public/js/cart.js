$(function(){
    //console.log(location.search.split("=")[1])
    var pid=location.search.split("=")[1]
    async function load(){
     var res=await $.ajax({
        url:"http://localhost:3000/cart/items",
        type:"get",
        data:{pid},
        success:function(res){
          var html="";var totail=0;
         
          for(var p of res){
            var {iid,pid,title,details,price,href,count}=p  
            totail+=price*count
            
          html+=` <tr height="130px">
         <td><img src="${href}" width="67px" height="67px" alt=""></td>
         <td>
            
                <a href="#" class="mar">礼品名称：${title}</a>
                 <p class="mar"> 旋转发光可刻字音乐水晶摆件一件</p>
               <p class="mar">款式：方形水晶-旋转发光底座</p>
                
                     <a href="#" class="mar"><span>[更改款式]</span></a>

               
         </td>
         <td class="count">
             <button class="a" type="button" data-iid="${iid}">-</button>
             <input type="text" value="${count}" class="count_input">
             <button type="button" data-iid="${iid}">+</button>
         </td>
         <td>
             ￥${price}
         </td>
         <td>
                 <a href="#">重定制</a>&nbsp;|&nbsp;
                 <a href="#" class="delete" data-iid="${iid}">删除</a>
           </td>
         </tr>`
        }    
       $(".jiazai").children().remove()
        $(".jiazai").html(html);
        $("span.price").html(`${totail.toFixed(2)}`) 
        
      }
    
      })
 
    }
    load() 
      $(".jiazai").on("click","button,.delete",function(e){             
       e.preventDefault();
        var $btn=$(this);
      
        (async function(){
          if($btn.is("button")){
          
          var iid=$btn.attr("data-iid");
          var $input=$btn.siblings("input")  
          var count=parseInt($input.val())    
          if($btn.html()=="+")
              count++;//n++
          else if(count>1)
            count-- 
         
         $input.val(count); 
       
       
        await  $.ajax({
          url:"http://localhost:3000/cart/update",
          type:"get",
          data:{iid,count},  
        })
      
        load()  
       
      }else{
        var iid=$btn.attr("data-iid");
      await  $.ajax({
          url:"http://localhost:3000/cart/delete",
          type:"get",
          data:{iid}, 
           })
            if(!confirm("是否删除该商品？"))
            return;//退出当前函数
           load() 
       } 
        
      })()
        

      
      
        })
          
  })
  
  
   
           
   
   
