$(function(){
  /*  $("ul.input_login").on("blur","input",function(){
      var $input=$(this);   
	    var img=$input.val();
	let reg=/^[0-9a-zA-Z]{6,12}$/;
	if(!reg.test(uname)){
		alert("用户名必须为6-12位的数字或字母组成");
		return ;
	}
	if(upwd==null){
		alert("密码不能为空");
		return;
	}else if(upwd!=tpwd){
		console.log(upwd);
		console.log(tpwd);
		alert("两次密码输入不一致");
		return;
	}

    })*/
   /* function get(){
      var uname=$("input.uname").val();
      var upwd=$("input.upwd").val();
      var rupwd=$("input.rupwd").val();
      let reg=/^[0-9a-zA-Z]{6,12}$/;
    };
    $("ul.input_login").on("blur","input",function(){
     get
      var reg=/^[0-9a-zA-Z]{6,12}$/;
      if(!reg.test(msg)){
        alert("6-12位的数字或字母组成");
        return;
      }

    })*/
    
  $("input.register").click(function(){
      var uname=$("input.uname").val();
      var upwd=$("input.upwd").val();
     
      (function(){
        //res 响应的结果
        $.ajax({
          url:"http://localhost:3000/users/register",
          type:"post",
          data:{uname,upwd},
          dataType:"json",
          success: function(res) {
            console.log(res.code==200)
            if(res.code==200){
               alert("注册成功,即将跳转登录页")
              location.href="login.html"
            }
             
            else
            alert('注册失败')
           
        }
          }
        )
        
      })()
    })
  })