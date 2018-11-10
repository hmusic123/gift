$(function(){
    if(location.search.indexOf("kwords=")!=-1){//用户可能没带kwords过来，所以先判断
        console.log(location.search)
        var kwords=decodeURI(//空格的ascode码解码
            location.search.split("=")[1] )//获取用户输入的关键词  
        var pno=0
       
        function pageLoad(no=0){
            pno=no    
            $.ajax({
                url:"http://localhost:3000/search",
                type:"get",
                data:{kwords,pno},
                dataType:"json",
                success:function(output){
                    
                    console.log(output)
                    var {products,pageCount}=output
                    var html="";
                    var $zhuti=$("#search")
                    var $ul=$("ul.search_right")
                    for(var p of products){
                    var {pid,title,details,price,href}=p
                    html+=`<div class="products_zhuti_detail">
                            <a href="details.html?lid=${pid}"><img src="${href}" class="girlfrendImg"></a>
                            <span class="price_color"> ￥${price.toFixed(2)}</span>
                            <h3> <a href="details.html?lid=${pid}"> ${title}</a></h3>  
                            <a href="details.html?lid=${pid}">${details}</a>
                        </div>`
                    }
                    $zhuti.html(html)
                    var html="";
                    for(var i=1;i<=pageCount;i++){
                        html+=`<li class="i==pno+1?active:''">  <a href="#">${i}</a></li>`
                    }
                    $ul.children(":not(:first-child):not(:last-child)").remove()
                    $ul.children().first().after(html)
                    if(pno==0){
                        $ul.children().first().addClass("disabled")  
                }else{
                        $ul.children().first().removeClass("disabled")  
                }
                if(pno==pageCount-1){
                    $ul.children().last().addClass("disabled")  
                    }else{
                    $ul.children().last().removeClass("disabled")  
                    } 
                }
            })
        }
        pageLoad()
        var $ul=$("ul.search_right")
        $ul.on("click","a",function(e){
             e.preventDefault();   
            var $a=$(this); //除禁用和当前正在激活按钮之外才能点击
            if(!$a.parent().is(".disable,.active")){
                 if($a.parent().is(":first-child")){//上一页按钮
                        var no=pno-1    //新页号=当前页面-1
                    }else if($a.parent().is(":last-child")){//下一页按钮
                        no=pno+1        //新页号=当前页面+1
                    }else{  //页码数1、2/3的按钮
                        no=$a.html()-1;//新页号=按钮内容-1
                    }
                pageLoad(no)   //重新加载新页号页面内容
                    
                }
            })
            
        
        

    }
})