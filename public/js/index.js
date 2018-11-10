
$(function(){
 var lbkuang=document.getElementById("lbkuang")
var circle=document.getElementById("circle")
function  task(){
 var img=lbkuang.querySelector(".show") 
 var yq=circle.querySelector(".show1")

       img.className="";
      yq.className="yq";
var next=img.nextElementSibling;
var nextyq=yq.nextElementSibling;
if(next!=null){
   
   next.className="show"
   nextyq.className="yq show1"
}
      
 else{
   img.parentNode.children[0].className="show"      
   yq.parentNode.children[0].className="yq show1"
 }
       
}
var timer=setInterval(task,2000);
lbkuang.onmouseover=function(){
   clearInterval(timer)
}
lbkuang.onmouseout=function(){
   timer=setInterval(task,2000);
}

var third1=document.getElementById("third_1")
    var third2=document.getElementById("third_2")
    var third3=document.getElementById("third_3")
    var n1=document.getElementById("n1")
    var n2=document.getElementById("n2")
    var n3=document.getElementById("n3")
    n1.onclick=function(){
        third1.style.display="block";
        third2.style.display="none";
        third3.style.display="none";
    }
    n2.onclick=function(){
        third1.style.display="none";
        third2.style.display="block";
        third3.style.display="none";
    }
    n3.onclick=function(){
        third1.style.display="none";
        third2.style.display="none";
        third3.style.display="block";}
    $.ajax({
        url:"http://localhost:3000/index/getIndexProducts",
        type:"get",
        data:{},
        dataType:"json",
        success:function(res){
                       
          var html="";
          
          var {pid,title,want,details,price,href}=res[60];
          html=` <div class="second_part1" id="fenlei_1"><img src="${href}" alt=""></div>`
          $(".sec2").html(html)
          var html="";
      for(var p of res.slice(61,63)){
        var {pid,href}=p;
        html+=`  <div class="second_partTop">
        <a href="details.html?lid=${pid}"><img src="${href}" width="591px"></a> 
    </div>`;
      }
      $("#fenlei_1").after(html)
      var html=""
      for(var p of res.slice(63,67)){
        var {pid,title,want,details,price,href}=p;
        html+=`<div class="second_partbottom">
          <a href="details.html?lid=${pid}"><img src="${href}" class="zhuti"></a>
          <ul>
              <li>￥${price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${want}人想要</li>
              <li><a href="details.html?lid=${pid}"><h3>${title}</h3></a></li>
              <li> <a href="details.html?lid=${pid}">${details}</a></li>
                     
          </ul>
  </div>`
      }
      $(".third1").html(html)
        
     var html="";
     for(var p of res.slice(67,71)){
        
        var {pid,title,want,details,price,href}=p;
        html+=`<div class="second_partbottom ">
        <a href="details.html?lid=${pid}"><img src="${href}" class="zhuti"></a>
        <ul>
            <li>￥${price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${want}人想要</li>
            <li><a href="details.html?lid=${pid}"><h3>${title}</h3></a></li>
            <li> <a href="details.html?lid=${pid}">${details}</a>/li>
        </ul>
    </div>`
      }
      $(".third2").html(html)

      var html="";
      for(var p of res.slice(1,5)){
          console.log(p)
         var {pid,title,want,details,price,href}=p;
         html+=`<div class="second_partbottom ">
         <a href="details.html?lid=${pid}"><img src="${href}" class="zhuti"></a>
         <ul>
             <li>￥${price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${want}人想要</li>
             <li><a href="details.html?lid=${pid}"><h3>${title}</h3></a></li>
             <li> <a href="details.html?lid=${pid}">${details}</a>/li>
         </ul>
     </div>`
       }
       $(".third3").html(html)

       var html="";
       











        }
    })
})

