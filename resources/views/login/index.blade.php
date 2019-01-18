<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>会员登录</title>
<meta name="csrf-token" content="{{csrf_token()}}">
<link rel="stylesheet" type="text/css" href="/css/style.css" />
<link rel="stylesheet" type="text/css" href="/css/body.css"/> 
</head>
<body>
<div class="container">
	<section id="content">
		<form action="{{route('check')}}" method="post">
			{{csrf_field()}}
			<h1>会员登录</h1>
			<div>
				<input type="text"name="name" placeholder="账号" required="" id="username" />
			</div>
			<div>
				<input type="password" placeholder="密码" required="" name="password" id="password" />
			</div>
			 <div class="">
				<span class="help-block u-errormessage" id="js-server-helpinfo">&nbsp;</span>			</div> 
			<div>
				<!-- <input type="submit" value="Log in" /> -->
				<input type="submit" value="登录" class="btn btn-primary" id="js-btn-login"/>
				<a href="#">忘记密码?</a>
				<!-- <a href="#">Register</a> -->
			</div>
		</form><!-- form -->
		 <div class="button">
			<span class="help-block u-errormessage" id="js-server-helpinfo">&nbsp;</span>
			
		</div> <!-- button -->
	</section><!-- content -->
</div>
<!-- container -->


<br><br><br><br>
<div style="text-align:center;">
</div>
</body>
</html>