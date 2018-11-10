$(function(){
    //console.log(location.search.split("=")[1])
    var pid=location.search.split("=")[1]
    $.ajax({
        url:"http://localhost:3000/details",
        type:"get",
        data:{pid},
        success:function(res){
           
            var {pid,title,details,price,href}=res[0]   
                   
            var html=`<div class="gift_left">
                    <img src="${href}" width="418px" height="418px">
                    <div class="sm_imgkuang">
                        <a href="#" class="prev">&lt;</a>
                        <div class="sm_imglist">
                            <ul >  
                                <li><img src="${href}" alt=""></li>
                                <li><img src="${href}" alt=""></li>
                                <li><img src="${href}" alt=""></li>
                                <li><img src="${href}" alt=""></li>
                                
                                <li><img src="${href}" alt=""></li>   
                            </ul>
                        </div>
                        
                    <a href="#" class="next">&gt;</a>
                    </div>
                    
                    </div>
                    <div class="gift_right">
                        <div class="gift_buy_top">
                            <span class="gift_buy_right">礼品编号：${pid}</span>
                        <h4>${title}</h4>
                            
                        </div>
                        <div class="gift_buy_one">
                            <span class="left_font"> 礼品内容</span>
                            <span>${title}</span>
                            <br>
                            <span class="left_font">liYI99价格</span>
                            <span>￥<span class="price">${price.toFixed(2)}</span> </span>
                            <span class="left_font">
                                (全国免费送货，新疆，西藏除外)
                            </span>  
                            
                        </div>
                        <div class="gift_buy_two">
                        <span class="left_font">配送地址</span>
                        <span class="left_font">送至</span>
                        <input type="text"><input type="text">
                        
                    </div>
                    <div class="gift_buy_three">
                      <div>
                        <span class="left_font color_three">水晶类型</span>
                        <span class="inline_block">方形水晶</span>
                        <span class="inline_block">心型水晶</span>
                      </div>
                      <div>
                          <span class="left_font color_three">底座类型</span>
                          <span class="inline_block">旋转发光底座</span>
                          <span class="inline_block">发光底座</span>
                      </div>
                      <div>
                        <a href="cart.html?pid=${pid}"><img src="img/lw_lipinxiangqing/gift_goumai.jpg" class="shop"></a>  
                        <a href="#"> <img src="img/lw_lipinxiangqing/gift_cart.jpg" class="shop cart"></a> 
                      </div> 
                      
                    </div>
                   
                    <div class="gift_buy_five">
                            <img src="img/lw_lipinxiangqing/gift_tese.jpg" alt=""><br>
                          <span>九年LiYi99千万用户见证98%准时到达率，好礼吉日送到家</span>
                     </div>
                </div>`
            $("div.gift_basic").html(html)
            $("img.cart").click(function(){
               $.ajax({
                url:"http://localhost:3000/users/islogin",
                type:"get",
                dataType:"json",
                success:function(res){
                    if(res.ok==1){
                        alert("添加购物车成功")
                        var count=1;
                       $.ajax({
                           url:"http://localhost:3000/cart/add",
                           type:"get",
                           data:{pid,count},
                           dataType:"json",
                           success:function(res){
                             
                           }
                       })
                    }else{alert("请先登录!")}
                }
               })
               
               
            }) 

        }
    });
  

})