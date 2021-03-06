﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta name="tp_page" content="2.0">
	<meta http-equiv="X-UA-Compatible" content="IE=8" />
	<meta name="renderer" content="webkit">
	<title>1号店登录</title>
	<link href="/css/pc_login_new.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="/js/common_yhd.js"></script>
	<script type="text/javascript" src="/js/pc_login_new.js"></script>
	<script type="text/javascript" src="/js/login_slidecaptcha.js"></script>

    <link rel="shortcut icon" href="https://passport.yhd.com/front-passport/passport/images/yhd_favicon.ico"/>

<script>
	var LOGIN_RESULT = {SUCCESS:0,FAIL:1};                  
	var REGISTER_RESULT = {SUCCESS:10,FAIL:11};             
	var DOMAIN_TYPE = {YHD:1,MALL:2,YW_111:3};              
	var LOGIN_SOURCE={NORMAL:1,FRAME:2};                        var URLPrefix = {"yhd_domain":".yhd.com","global_statics":"https://passport.yhd.com/front-passport","sam_passport_statics":"https://security.samsclub.cn/front-passport/passport","chinese":"1号店","passportother":"https://passport.1mall.com","sam_domain":".samsclub.cn","sam_captcha_js_url":"https://security.samsclub.cn/captcha/js/api.js","helpUrl":"http://www.yihaodian.com/cms/view.do?topicId=9864","hk_passport_statics":"https://passport.yihaodian.com.hk/front-passport/passport","yhd_captcha_host":"https://captcha.yhd.com","tracker":"tracker.yhd.com","sam_login_url":"https://security.samsclub.cn/customer/login_input.do","sam_passport_host":"https://security.samsclub.cn","central":"http://www.yhd.com","out3wurl":"www.yihaodian.com","yhd_passport_host":"https://passport.yhd.com","sam_request_namespace":"/customer","mySite":"http://my.yihaodian.com/member/my.do","passport_statics":"https://passport.yhd.com/front-passport/passport","yaowang":"http://www.111.com.cn","sam_captcha_host":"https://security.samsclub.cn","my":"http://my.yhd.com","httpurl":"http://www.yhd.com","mymall":"http://my.1mall.com","yhd_login_url":"https://passport.yhd.com/passport/login_input.do","agreementUrl":"http://cms.yhd.com/cms/view.do?topicId=10","no3wUrl":"yhd.com","h5AgreementUrl":"http://cms.yhd.com/cms/view.do?topicId=54","yiwangauth":"http://mall.yiwang.cn","webStaticResourceUrl":"http://image.yihaodianimg.com","passport":"https://passport.yhd.com","shapeClientUrl":"https://passport.yhd.com/front-passport/passport/js/framework/common_yhd.js","validCodeShowUrl":"https://captcha.yhd.com/public/validcode.do","mall":"http://www.1mall.com"};
	var currSiteId = 1;                         
	
	var returnUrl = "http://www.yhd.com";               
	var autoLoginFlag= "1";        
	var valid_code_service_flag="1"; 
	var showValidCode = "0"; 
    var validCodeType = "2"; 
    var mUrl = ""; 
	
	var no3wUrl = "yhd.com";
	var imgPath = "https://passport.yhd.com/front-passport/passport/images";
	var fromDomain = "";         
	var resetIframeUrl = fromDomain + "/login/callback.do";       
	
	var yhdUrl="http://www.yhd.com";
    var yhdPassportUrl="https://passport.yhd.com";
	var ywPassportUrl="";
	var pubkey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDXQG8rnxhslm+2f7Epu3bB0inrnCaTHhUQCYE+2X+qWQgcpn+Hvwyks3A67mvkIcyvV0ED3HFDf+ANoMWV1Ex56dKqOmSUmjrk7s5cjQeiIsxX7Q3hSzO61/kLpKNH+NE6iAPpm96Fg15rCjbm+5rR96DhLNG7zt2JgOd2o1wXkQIDAQAB";
</script></head>

<body>
		    <link rel="shortcut icon" href="https://passport.yhd.com/front-passport/passport/images/yhd_favicon.ico"/>
  <div class="regist_header clearfix">
	<div class="wrap">
        <a href="http://www.yhd.com" class="logo"><img src="/picture/loginlogo.jpg" height="55" alt="1号店" /></a>
        <div class="regist_header_right clearfix">
        	<!--<a href="#" class="english_edition" id="edition" style="display:none">English</a>-->
            <div class="help_wrap">
                <a class="hd_menu" href="http://cms.yhd.com/cms/view.do?topicId=12"><s class="help_ico"></s>帮助中心</a>
                <div class="hd_menu_list">
                    <ul>
                        <li><a href="http://home.yhd.com/order/toOrderList.do">包裹跟踪</a></li>
                        <li><a href="http://cms.yhd.com/cms/view.do?topicId=12">常见问题</a></li>
                        <li><a href="http://rma.yhd.com/return/returnApplyList.do">在线退换货</a></li>
                        <li><a href="http://cms.yhd.com/cms/view.do?topicId=43">在线投诉</a></li>
                        <!--
                        <li><a href="http://www.yhd.com/deliveryinfo/deliveryInfo.do">配送范围</a></li>
                        -->
                    </ul>
                </div>
            </div>
            <span class="fr">您好，欢迎光临1号店！ <a href="/passport/login_input.do" class="blue_link">请登录</a></span>
        </div>
    </div>
  </div>
	<script type="text/javascript">
		var no3wUrl="yhd.com";
		var currSiteId = 1;
        var URLPrefix = {"yhd_domain":".yhd.com","global_statics":"https://passport.yhd.com/front-passport","sam_passport_statics":"https://security.samsclub.cn/front-passport/passport","chinese":"1号店","passportother":"https://passport.1mall.com","sam_domain":".samsclub.cn","sam_captcha_js_url":"https://security.samsclub.cn/captcha/js/api.js","helpUrl":"http://www.yihaodian.com/cms/view.do?topicId=9864","hk_passport_statics":"https://passport.yihaodian.com.hk/front-passport/passport","yhd_captcha_host":"https://captcha.yhd.com","tracker":"tracker.yhd.com","sam_login_url":"https://security.samsclub.cn/customer/login_input.do","sam_passport_host":"https://security.samsclub.cn","central":"http://www.yhd.com","out3wurl":"www.yihaodian.com","yhd_passport_host":"https://passport.yhd.com","sam_request_namespace":"/customer","mySite":"http://my.yihaodian.com/member/my.do","passport_statics":"https://passport.yhd.com/front-passport/passport","yaowang":"http://www.111.com.cn","sam_captcha_host":"https://security.samsclub.cn","my":"http://my.yhd.com","httpurl":"http://www.yhd.com","mymall":"http://my.1mall.com","yhd_login_url":"https://passport.yhd.com/passport/login_input.do","agreementUrl":"http://cms.yhd.com/cms/view.do?topicId=10","no3wUrl":"yhd.com","h5AgreementUrl":"http://cms.yhd.com/cms/view.do?topicId=54","yiwangauth":"http://mall.yiwang.cn","webStaticResourceUrl":"http://image.yihaodianimg.com","passport":"https://passport.yhd.com","shapeClientUrl":"https://passport.yhd.com/front-passport/passport/js/framework/common_yhd.js","validCodeShowUrl":"https://captcha.yhd.com/public/validcode.do","mall":"http://www.1mall.com"};
		var yhdUrl="http://www.yhd.com";
        var yhdPassportUrl="https://passport.yhd.com";
        var loli = window['loli'] || {};
        var valid_code_service_flag="1"; 
	</script>
	<script type="text/javascript" src="/js/jquery.cookie.js"></script>
  
   
	<input type="hidden" id="isAutoLogin" value="0"/>
	<input type="hidden" id="autoLoginFlag" value="1"/>
	<input type="hidden" id="uuid">
	<div class="login_wrap">
		<div class="wrap clearfix">
			<div class="mod_login_wrap">
                <div class="login_pc">
					<p id="error_tips" class="error_tips" style="display:none">您填写的账户名不存在请核对后重新填写</p>
	            	<div class="clearfix">
            		<h3>1号店用户登录</h3>
            		<a  href='/passport/register_input.do'  class="regist_new blue_link">注册新账号</a>
            		</div>
	      
				<div class="login_form">
					<input id="login_source" type="hidden" value="1"/>
					<input id="login_pc_home_page" type="hidden" value="1"/>
	
					
					<div class="form_item_wrap">
					    <div class="form_item">
					        <label class="user_ico">&nbsp;</label>
					        <input id="un" type="text" name="credentials.username" spellcheck="false" tabIndex="1" class="ipt ipt_username" 
					        style="outline: none;" value="" />
					    </div>
					    <div class="form_item">
					        <label class="paswd_ico">&nbsp;</label>
					        <input id="pwd" type="password" oncopy="return false" onpaste="return false" oncut="return false" oncontextmenu="return false" name="credentials.password" tabIndex="2" class="ipt ipt_password gay_text" placeholder="密码 " style="outline: none;"/>
					
					    </div>
					   <div id='vcd_div' class="verify_code clearfix" >
					   	<input id="validateSig" type="hidden"/>
                    	 <div class="form_item cur_right">
                        	<label class="verify_ico">&nbsp;</label>
                            <input id="vcd" type="text" name="validCode" maxlength="4" tabindex="1" value="验证码" class="ipt ipt_code gay_text"
                            onblur="javascript: jsLoginValidatCode.checkValidCodeOnBlur()" 
					        onkeyup="javascript: jsLoginValidatCode.checkValidCodeOnKeyUp();">
                            <span tabindex="-1" class="code_right" id="code_right"></span>
                            <span tabindex="-1" class="code_wrong" id="code_wrong"></span>
                         </div>
                    	 <a class="verify_code_box" onclick="jsLoginValidatCode.passport_refresh_valid_code();return false;" href="#">
                            <img id="valid_code_pic" name="valid_code_pic">
                            <i tabindex="-1" class="btn_change">换一张</i>
                         </a>
                      </div>
					    
					 <div class="auto_login clearfix" >
					 	<p class="clearfix">
                    	<a id="check_agreement" href="#" class="uncheck_agreement">自动登录</a>
                    	<input id="autoLoginCheck" type="hidden" />
                    	<span id="agreement_tips" class="auto_tips"  style="display: none;">请勿在公用电脑上启用</span>
                        </p>
                         <p class="service_agreement">点击登录，表示您同意1号店<a href="http://cms.yhd.com/cms/view.do?topicId=10" class="blue_link" target="_blank">《服务协议及隐私声明》</a></p>
                        <a href="/passport/find_pwd_input.do" target="_blank" class="forget_pswd" tabIndex="-1">忘记密码？</a>
                    </div>
                    	
					    <button id="login_button" type="button" class="login_btn" onclick="javascript:double_submit();return false;">登录</button>
					
					</div>
					
					<div class="joint_landing_wrap">
						<p>更多合作网站账号登录</p>
<div class="clearfix">
		<ul class="account_list clearfix">
			<li><a href="https://passport.yhd.com/qq/login.do" target="_blank" class="iconfont qq" title="QQ">&#xe606;</a></li>
			<li><a href="https://passport.yhd.com/jingdong/login.do" target="_blank" class="iconfont jingdong" title="京东">&#xe60b;</a></li>
			<li><a href="https://passport.yhd.com/wechat/login.do" target="_blank" class="iconfont weixin" title="微信">&#xe609;</a></li>
			<li><a href="https://passport.yhd.com/sina/login.do" target="_blank" class="iconfont sina" title="新浪微博">&#xe608;</a></li>
		</ul>
		<a href="javascript:void(0);" class="unfold" title="展开">更多合作网站<i></i></a>
	</div>
	<ul class="more_landing clearfix">
				<li><a href="https://passport.yhd.com/alipay/login.do" target="_blank"><i class="iconfont alipay">&#xe601;</i>支付宝</a></li>
				<li><a href="https://passport.yhd.com/netease/login.do" target="_blank"><i class="iconfont wangyi">&#xe600;</i>网易</a></li>
				<li><a href="https://passport.yhd.com/baidu/login.do" target="_blank"><i class="iconfont baidu">&#xe602;</i>百度</a></li>
				<li><a href="https://passport.yhd.com/renren/login.do" target="_blank"><i class="iconfont renren">&#xe607;</i>人人网</a></li>
				<li><a href="https://passport.yhd.com/wanlitong/login.do" target="_blank"><i class="iconfont pingan">&#xe605;</i>平安万里通</a></li>
				<li><a href="https://passport.yhd.com/mogujie/login.do" target="_blank"><i class="iconfont mogujie">&#xe604;</i>蘑菇街</a></li>
	</ul>
					</div>
					<!--
					-->
				</div>
				</div>
                <!--login code-20160613-zhangqian7-S-->
                <div class="login_code">
        	        <div class="login_code_title">用<a href="#">1号店APP</a>登录</div>
                    <div class="login_code_pic">
                    <div class="picture_code" id="login_code_pic">
                    <!--  <img width="180" height="180"  id="login_code_pic"> -->
                      </div>
                      <div class="shade"></div>
                        <div class="meg_error">
                            <h5>二维码已经过期</h5>
                            <a href="#" onclick="codeScan.refreshFunc()" class="refresh_btn">请刷新二维码</a>
                        </div>
                    </div>
                    <div class="login_code_success">
                        <img src="/picture/codesuccess.jpg" alt="yhd" width="209" height="182"/>
                        <p>扫描成功！</p>
                        <h5>请在手机上确认登录</h5>
                    </div>
                    <div class="login_code_handle">
                        <a href="#" onclick="codeScan.refreshFunc()">刷新二维码</a>
                    </div>
                </div>
                <!--login code-E-->


			 <div class="login_switch">
                <em></em>
                <a href="javascript:;" class="two_dimension_code"></a>
                <a href="javascript:;" class="static_pc"></a>
            </div>
        </div>
			<div class="mod_left_banner"><a id="imgLink" target="_blank"><img id="img" src="/images/login_pic.png" /></a></div>
		</div>
	</div>
	
	<div class="mod_login_bindmb_point"></div>
	
	
	<div id="simplefooter"><a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备16050468号</a>|<a>沪B2-20170039</a>|<a href="http://d7.yihaodianimg.com/N09/M07/BD/7B/ChEi11kJnKaAJQMrAAK-LnhML4o60600.jpg" data-ref="YHD_Footer_Licence" target="_blank">营业执照</a><p>Copyright © 1号店网上超市 2007-2018，All Rights Reserved</p></div> 
	
			<script type="text/javascript" src='/js/api.js'></script>
    <script type="text/javascript" src='/js/loader-min.js'></script>
</body>

<script>	
pageInit();



$(document).ready(function(){
var isIE=!!window.ActiveXObject;
var isIE6=isIE&&!window.XMLHttpRequest;
if (isIE6){
	$(".login_switch").hide();
}
if(1==0){
	$(".login_switch").hide();
}

	jsLoginFed.loadImageUrl("1","Passport_Login_Ad_Click");
	
	var host = window.location.host;
	var reg_host = /([a-z0-9_-]+\.)*(yhd|yihaodian|1mall|111)\.(com\.hk)$/;
	if(reg_host.test(host)) {
		var requestUrl = URLPrefix.passport + "/passport/cookie_rurl_synchronization.do";
		cookie_sync.cookieRURLSynchronization(requestUrl);
		
        if(window.addEventListener){
            window.addEventListener("message", handMessage, false);
        }
        else{
            window.attachEvent("onmessage", handMessage);
        }    
        
        $(".login_switch").hide();
	}
});	

function handMessage(event){
    event = event || window.event;
    if(event.origin === 'https://passport.yhd.com'){
       var obj = eval('(' + event.data + ')');
       window.location = obj.returnUrl;
    }
}
</script>

</html>