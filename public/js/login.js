$(function(){
    $("input.login").click(function(){
      var uname=$("input.uname").val();
      var upwd=$("input.upwd").val();
      (function(){
        //res 响应的结果
        $.ajax({
          url:"http://localhost:3000/users/signin",
          type:"post",
          data:{uname,upwd},
          dataType:"json",
          success: function(res) {
            if(res.ok==0)
          alert(res.msg);
        else{
          alert("登录成功！即将返回来时的页面...")
          if(location.search.startsWith("?back=")){
            //location.search为back后的url
            var url=location.search.slice(6)
          }else{
            var url="index.html"
          }
          location.href=url;
        }
          }
        })
        
      })()
    })
  })