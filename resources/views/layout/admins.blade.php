<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="/admins/css/font.css">
    <link rel="stylesheet" href="/admins/css/xadmin.css">
    <link rel="stylesheet" href="/admins/css/bootstrap.css">
    <link rel="stylesheet" href="/admins/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css">
    <script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.jquery.min.js"></script>
    <script src="/admins/lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="/admins/js/xadmin.js"></script>
    <script type="text/javascript" src="/admins/js/bootstrap.js"></script>
    <script type="text/javascript" src="/admins/js/bootstrap.min.js"></script>
    

</head>
<body>
    <!-- 顶部开始 -->
    <div class="container">
        <div class="logo"><a href="./index.html">AWESOME-TANG</a></div>
        <div class="open-nav"><i class="iconfont">&#xe699;</i></div>
        <ul class="layui-nav right" lay-filter="">
          <li class="layui-nav-item">
            <a href="javascript:;">admin</a>
            <dl class="layui-nav-child"> <!-- 二级菜单 -->
              <dd><a href="">个人信息</a></dd>
              <dd><a href="">切换帐号</a></dd>
              <dd><a href="./login.html">退出</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item"><a href="/">前台首页</a></li>
        </ul>
    </div>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
    <div class="wrapper">
        <!-- 左侧菜单开始 -->
        <div class="left-nav">
          <div id="side-nav">
            <ul id="nav">
               
                <!-- 会员管理 -->
                <li class="list">
                    <a href="javascript:;">
                        <i class="iconfont">&#xe70b;</i>
                        会员管理
                        <i class="iconfont nav_right">&#xe697;</i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="/admin/show">
                                <i class="iconfont">&#xe6a7;</i>
                                会员列表
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- 广告管理 -->
                 <li class="list">
                    <a href="javascript:;">
                        <i class="iconfont">&#xe70b;</i>
                        广告管理
                        <i class="iconfont nav_right">&#xe697;</i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="{{route('advert_show')}}">
                                <i class="iconfont">&#xe6a7;</i>
                                广告列表
                            </a>
                        </li>
                        <li>
                            <a href="{{route('advert_add')}}">
                                <i class="iconfont">&#xe6a7;</i>
                                添加广告
                            </a>
                        </li>
                        <li>
                            <a href="/admin/show">
                                <i class="iconfont">&#xe6a7;</i>
                                删除广告
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- 管理员管理 -->
                <li class="list">
                    <a href="javascript:;">
                        <i class="iconfont">&#xe70b;</i>
                        管理员管理
                        <i class="iconfont nav_right">&#xe697;</i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="">
                                <i class="iconfont">&#xe6a7;</i>
                                添加用户
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
        <!-- 左侧菜单结束 -->
        <!-- 右侧主体开始 -->
        <div class="page-content">
          <div class="content">
            <!-- 右侧内容框架，更改从这里开始 -->
            @section('content')
            

            @show
            <!-- 右侧内容框架，更改从这里结束 -->
          </div>
        </div>
        <!-- 右侧主体结束 -->
    </div>
    <!-- 中部结束 -->
    <!-- 底部开始 -->
    <div class="footer">
        <div class="copyright">Copyright ©2017 x-admin v2.3 All Rights Reserved. 本后台系统由X前端框架提供前端技术支持</div>  
    </div>
    <!-- 底部结束 -->
    <!-- 背景切换开始 -->
    <div class="bg-changer">
        <div class="swiper-container changer-list">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="item" src="/admins/images/a.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/b.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/c.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/d.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/e.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/f.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/g.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/h.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/i.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/j.jpg" alt=""></div>
                <div class="swiper-slide"><img class="item" src="/admins/images/k.jpg" alt=""></div>
                <div class="swiper-slide"><span class="reset">初始化</span></div>
            </div>
        </div>
        <div class="bg-out"></div>
        <div id="changer-set"><i class="iconfont">&#xe696;</i></div>   
    </div>
    <!-- 背景切换结束 -->
    <script>
    //百度统计可去掉
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    </script>
</body>
</html>