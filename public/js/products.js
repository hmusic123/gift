$(function(){
  $.ajax({
    url:"http://localhost:3000/index/getIndexProducts",
    type:"get",
    data:{},
    dataType:"json",
    success:function(res){
      console.log(res);
     /* var [products]=res;
      console.log(products)*/
      var html="";
      for(var p of res.slice(0,60)){
        var {pid,title,details,price,href}=p;
        html+=` <div class="products_zhuti_detail">
        <a href="details.html?lid=${pid}"><img src="${href}" class="girlfrendImg"></a>
        <span class="price_color"> ￥${price.toFixed(2)}</span>
        <h3> <a href="details.html?lid=${pid}"> ${title}</a></h3>  
        <a href="details.html?lid=${pid}">${details}</a>
    </div>`;
      }
      $("#plist").html(html);

    }

    
    })

    
   
 

 
  })
 