/* SVN.committedRevision=2775aa9 */
function dnxyBrandImgLoad(b){if(b&&b.height>b.width){$(b).removeClass("img_w");$(b).addClass("img_h")}}define("dongnixiangyao",["addCart"],function(w){var A={};var x;var B=false;var u={pageSize:10,currentPage:1,lim:150};var z;var q=[];var t=0;function y(){$.ajax({type:"GET",url:"//www.yhd.com/homepage/getPcYoulike.do",data:{p:619117,lid:$.cookie("provinceId")||1,provinceId:$.cookie("provinceId")||2,cityId:$.cookie("cityId")||2817,uuid:-1,pin:$.cookie("pin"),lim:120,curPage:1,pageSize:120},dataType:"json",contentType:"application/x-www-form-urlencoded; charset=utf-8",success:function(a){if(a&&a.result&&a.result.data.length>0){q=a.result.data;t=a.result.data.length}},error:function(c,a,b){}})}function D(a,d,g){if(!a||!d||!g){return a}var e=/\/s\d{1,}x\d{1,}_/;if(e.test(a)){return a.replace(e,"/s${width}x${height}_")
}try{var h=a.split(".");var f=h[2].split("/");var b=f[2];f[2]=["s",d,"x",g,"_"+b].join("");h[2]=f.join("/");return h.join(".")}catch(c){return a}}function E(b){var a=[];$.each(b,function(h,c){var g="//item.yhd.com/"+c.sku+".html";var e="";if(c.sku){e+='<li  class="under_list_single" data-skuid="'+c.sku+'">';if(c.source&&c.source=="purchased"){e+='<div class="sin_tag sing_mg">曾经买过</div>'}e+='<div class="under_pro_pic">';e+='<img class="sin_img sin_img_big" src="'+c.img+'" alt="">';e+="</div>";e+='<p class="single_tit text_limit_limp">';if(c.skuDateType&&c.skuDateType==12){e+="<span>自营</span>"}e+=""+c.t+"</p>";if(c.type&&c.type==1){e+='<p class="single_money single_money_dfb">￥<span>'+c.msg+"</span></p>"}else{e+='<p class="single_money">￥<span>'+c.jp+"</span></p>"}e+='<div class="pro_tag clearfix">';
if(c.userCoupon){e+='<div class="goods_icon ticket_icon">';e+='<ul class="ticket_square_left">';e+='<li class="ticket_square">';e+='</li><li class="ticket_square">';e+='</li><li class="ticket_square">';e+='</li><li class="ticket_square">';e+='</li><li class="ticket_square">';e+="</li></ul>";e+="领券";e+='<ul class="ticket_square_right">';e+='<li class="ticket_square">';e+='</li><li class="ticket_square">';e+='</li><li class="ticket_square">';e+='</li><li class="ticket_square">';e+='</li><li class="ticket_square">';e+="</li></ul>";e+="</div>"}var f=c.resultMessage;if(f&&$.inArray("[price1]",f)>-1){e+='<div class="goods_icon off_icon">满减</div>'}if(f&&$.inArray("[price3]",f)>-1){e+='<div class="goods_icon off_icon">满折</div>'}if(f&&$.inArray("[price2]",f)>-1){e+='<div class="goods_icon off_icon">满赠</div>'
}e+="</div>";e+='<div class="sing_btn_con">';if(c.type&&c.type==1){e+='<div class="sin_hove_btn sin_gw"><a class="sin_hove_btn_a" href="'+g+'" target="_blank"><span class="sin_gw_ckxq">查看详情</span></a></div>'}else{e+='<div class="sin_hove_btn sin_gw"><a class="sin_hove_btn_a item-cart" data-addproduct="'+c.sku+',1"><i class="icon iconfont2018">&#xe60d;</i></a></div>'}var i="//www.yhd.com/homepage/getPCSameGood.do?skuId="+c.sku;e+='<div class="sin_hove_btn sin_xs"><a href="'+i+'" target="_blank" class="sin_hove_btn_a">找相似</a></div>';e+="</div>";e+='<a class="border_line" href="'+g+'" target="_blank" ></a>';e+="</li>"}else{if(c.brandList&&c.brandList.length==4){e+='<li class="under_list_pinpai" clstag="pageclick|keycount|shouye_20181018|RecommendedBrand_Overall">';e+='<p class="under_pinpai_font"><span class="under_pinpai_font_lLine"></span><span class="jxpp">精选品牌</span> <span class="under_pinpai_font_rLine"></span> 	</p>';
for(var k=0;k<4;k++){var j="//search.yhd.com/c0-0/k"+c.brandList[k].cnName;e+='<div class="under_list_pinpa_imgCon '+(k%2==0?"":"under_list_pinpa_imgCon_r")+'">';var d="imgbrand_"+h+"_"+k;e+='<img class="under_list_pinpai_hover_img img_w" src="'+D(c.brandList[k].logoUrl,200,200)+'" alt=""  id="'+d+'" onload="dnxyBrandImgLoad(this)">';e+='<a href="'+j+'" target="_blank" class="under_list_pinpai_hover" >';e+="<p>"+c.brandList[k].name+"</p>";e+="</a>";e+="</div>"}e+='<span class="under_list_xt under_list_hx"></span>';e+='<span class="under_list_xt under_list_sx"></span>';e+="</li>"}}a.push(e)});return a}function C(){var b=$("#floor_knowU");var d;var f=36;var c=1;var a=6;var e=0;$(window).scroll(function(){clearTimeout(d);var i=$(window).height();var g=$(window).scrollTop();var h=b.offset().top;
if(e>0){h=h+e}d=setTimeout(function(){if(t<=0){b.hide();return}var m=b.find(".global_loading");var l=b.find(".loading_status");var N=b.find(".you_like_list");var j=Math.ceil(t/f);if(g+i>=h&&h>g){if(c<=j){m.fadeIn();var p=(c-1)*f;var k=c*f-1;if(c>=j){k=t-1}var K=E(q.slice(p,k));if(K!=""){N.find(".under_sp_list:first-child").append(K);var L=N.find("ul li").eq(0);var M=L[0].clientHeight;var o=f/a;if(c==j){o=Math.ceil((t-(j-1)*f)/a)}var n=M*o;if(n>0){e=e+n}if(c==j){N.addClass("you_like_complete");N.css("display","block");m.hide();l.fadeIn()}}}c++}},300)})}function v(d,e){try{var c=new RegExp("(\\?|&|\\$)"+e+"=([^&\\$]*)");var b=d.match(c);if(b!=null){return unescape(b[2])}}catch(a){}return null}function s(){var a={addToCartSuccess:F,addToCartError:r};w.addCartYoulike(a)}function F(){var a=$("#cartYoulikeOk");
var b=undefined;if(!b){a.fadeIn(500);b=setTimeout(function(){a.fadeOut(500);clearTimeout(b);b=undefined},1500)}}function r(b,a){var c=$("#cartYoulikeFail");if(typeof(a)=="undefined"||!a){$("#cartYoulikeFailMsg").html('<i class="icon iconfont icon-shibai">&#xe60f;</i><span>&nbsp;加入购物车失败</span>')}else{$("#cartYoulikeFailMsg").html('<i class="icon iconfont icon-shibai">&#xe60f;</i><span>&nbsp;'+a+"</span>")}var d=undefined;if(!d){c.fadeIn(500);d=setTimeout(function(){c.fadeOut(500);clearTimeout(d);d=undefined},1500)}}A.init=function(){y();C();s()};return A});define("bigSlider",function(){var c={};function d(a){this.option={container:null,content:null,trigger:null,pageButton:[],steps:1,effect:"visible",autoPlay:false,interval:3000,activeClass:"on",speed:300,eventType:"mouseover",delay:0,index:0,pageButtonHide:true};$.extend(this.option,a);this.timer=0;this.handlers={};this.index=this.option.index;this.box=$(this.option.container);if(this.box.length==0){return false}this.sprite=this.box.find(this.option.content);if(this.sprite.length==0){return false}this.trig=this.box.find(this.option.trigger).children();this.btnLast=this.box.find(this.option.pageButton[0]);this.btnNext=this.box.find(this.option.pageButton[1]);this.items=this.sprite.children();if(this.items.length==0){return false}this.total=this.items.length;if(this.total<=this.option.steps){return false
}this.page=Math.ceil(this.total/this.option.steps);this.width=this.items.eq(0).outerWidth(true);this.height=this.items.eq(0).outerHeight(true);this.init()}d.prototype={init:function(){this.initStyle();this.cutover(0);this.bindUI();this.autoPlay()},on:function(a,b){if(typeof this.handlers[a]=="undefined"){this.handlers[a]=[]}this.handlers[a].push(b);return this},fire:function(b,a){if(this.handlers[b] instanceof Array){var i=this.handlers[b];for(var h=0,j=i.length;h<j;h++){i[h](a)}}},initStyle:function(){var f=function(e){for(var h=0;h<e.option.steps;h++){e.items.eq(e.total-(h+1)).clone().prependTo(e.sprite);e.items.eq(h).clone().appendTo(e.sprite)}};switch(this.option.effect){case"scrollx":f(this);this.sprite.css({width:this.sprite.children().length*this.width,left:-this.option.steps*this.width});
this.sprite.children().css("float","left");break;case"scrolly":f(this);this.sprite.css({top:-this.option.steps*this.height});break;case"fade":this.items.css({position:"absolute",zIndex:0}).eq(this.index).css({zIndex:1});break;case"visible":this.items.css({display:"none"}).eq(this.index).css({display:"block"});break}var a=this;var b=setTimeout(function(){clearTimeout(b);a.fire("init")},30)},cutover:function(h){var b=(h==null)?this.option.speed:0;var a=this.index!=this.page?this.index:0;this.trig.eq(a).addClass(this.option.activeClass).siblings().removeClass(this.option.activeClass);switch(this.option.effect){case"visible":this.items.css({display:"none"}).eq(a).css({display:"block"});break;case"fade":this.items.css({position:"absolute",zIndex:0}).fadeOut(b);this.items.eq(a).css({zIndex:1}).fadeIn(b);
break;case"scrollx":var j=this.width*this.option.steps;this.sprite.stop().animate({left:-j*this.index-j},b);break;case"scrolly":var i=this.height*this.option.steps;this.sprite.stop().animate({top:-i*this.index-i},b);break}this.fire("cutover",a)},bindUI:function(){var a=this;var b=0;this.trig.bind(this.option.eventType,function(){var e=this;if(a.option.eventType=="mouseover"||a.option.eventType=="mouseenter"){if(a.index==$(e).index()){return}clearTimeout(b);b=setTimeout(function(){a.index=$(e).index();a.cutover();clearTimeout(b)},a.option.delay)}else{a.index=$(this).index();a.cutover()}});this.btnLast.click(function(){a.lastPage()});this.btnNext.click(function(){a.nextPage()});function f(o,s,t,e){var n=0,p=0,q=0,r=0;o.off("touchstart touchend").on({touchstart:function(g){var h=g.originalEvent.changedTouches[0];
n=h.pageX;p=h.pageY;if(e){e(n,p)}},touchmove:function(g){var h=g.originalEvent.changedTouches[0];q=h.pageX;r=h.pageY;if(Math.abs(q-n)>Math.abs(r-p)){if(t){t(q-n,r-p)}g.preventDefault()}},touchend:function(g){var h=g.originalEvent.changedTouches[0];q=h.pageX;r=h.pageY;if(Math.abs(q-n)>Math.abs(r-p)){if(q-n>0){if(s){s("right")}}else{s("left")}}else{if(r-p>0){s("down")}else{s("up")}}}})}f(this.box,function(e){if(e=="right"){a.lastPage();clearInterval(a.timer);a.autoPlay()}if(e=="left"){a.nextPage();clearInterval(a.timer);a.autoPlay()}});this.box.bind({mouseenter:function(){if(a.option.pageButtonHide){a.btnLast.show();a.btnNext.show()}clearInterval(a.timer)},mouseleave:function(){if(a.option.pageButtonHide){a.btnLast.hide();a.btnNext.hide()}a.autoPlay()}})},lastPage:function(){this.index--;if(this.index<-1){this.index=this.page-1;
this.cutover(0);this.index=this.page-2}this.cutover()},nextPage:function(){this.index++;if(this.index>this.page){this.index=0;this.cutover(0);this.index=1}this.cutover()},autoPlay:function(){var a=this;if(!this.option.autoPlay){return false}clearInterval(this.timer);this.timer=setInterval(function(){a.nextPage()},this.option.interval)}};window.Switchable=d;c.bigSlider=function(){var a=new d({container:".lunbo",content:".lunbo_img ul",pageButton:[".show_pre",".show_next"],trigger:".lb_tab ol",effect:"fade",activeClass:"cur",interval:3000,autoPlay:true,index:0})};c.init=function(){c.bigSlider()};return c});define("index_body",function(){var d={};var e=[];var f=0;d.ieLower="undefined"==typeof(document.body.style.maxHeight);d.isNarrowscreen=screen.width<1228;d.maxHeight=function(h,c){if(jsHeaderFed.ieLower){var a=$(h).height();var b=parseInt(c);if(a>b){$(h).height(b)}}};d.maxWidth=function(h,c){if(jsHeaderFed.ieLower){var a=$(h).width();var b=parseInt(c);if(a>b){$(h).width(b)}}};d.toggleSideBar=function(){var b=$(window).width();var a=$(".yhd_prism_nav");if(b<=1366){a.animate({left:"34px"},400);$(".yhd_prism_wrap").hover(function(){a.animate({left:"0px"},400)},function(){a.animate({left:"34px"},400)})}};d.initReplaceAdvertise=function(){var a="//m.yhd.com/mobile/homePage/getYhdNewUserInfo.do";$.ajax({url:a,dataType:"jsonp",jsonp:"callback",jsonpCallback:"jsonp",cache:false,timeout:5000,success:function(c){if(c&&c.retCode){if(c.retCode==-1){$("#new_person_channel").show()
}else{if(c.retCode==200){var b=c.data;if(b&&b.newUserStatus==0){$("#new_person_channel").show()}}}}},error:function(h,b,c){console.log("getYhdNewUserInfo failed "+b+c)}})};d.switchPageTop=function(){var c=0;var a=3;var i=false;if(c==0){$(".qua_top_left_btn").addClass("qua_top_btn_forbid")}else{if(c==maxPage-1){$(".qua_top_right_btn").addClass("qua_top_btn_forbid")}}function b(g){var r=$(g).parent(".qua_top").attr("id");c=$(g).parent(".qua_top").attr("data_index");var q=$("#"+r+" li").length;var o=q%a==0?q/a:parseInt(q/a)+1;if(i){return}i=true;setTimeout(function(){i=false},600);c--;if(c<0){$("#"+r+" .qua_top_left_btn").addClass("qua_top_btn_forbid");c=0;$(g).parent(".qua_top").attr("data_index",c)}else{if(c==0){$("#"+r+" .qua_top_left_btn").addClass("qua_top_btn_forbid");$(g).parent(".qua_top").find(".qua_imgCon_font").removeClass("tit_four")
}$(g).parent(".qua_top").attr("data_index",c);var p=$("#"+r+" .qua_top_slidInner").position().left;var h=p+90+120+"px";$("#"+r+" .qua_top_slidInner").css({left:h});if(c<o-1){$("#"+r+" .qua_top_right_btn").removeClass("qua_top_btn_forbid")}}}function j(h){var y=$(h).parent(".qua_top").attr("id");var s=$("#"+y+" li").length;var u=s%a==0?s/a:parseInt(s/a)+1;c=$(h).parent(".qua_top").attr("data_index");if(i){return}i=true;setTimeout(function(){i=false},600);c++;$(h).parent(".qua_top").find(".qua_imgCon_font").addClass("tit_four");if(c>u-1){$("#"+y+" .qua_top_right_btn").addClass("qua_top_btn_forbid");c=u-1;$(h).parent(".qua_top").attr("data_index",c);var z="";var v=$(h).parent(".qua_top");var x=v.attr("rank_category_id");var w=v.attr("rank_category_name");var A=v.attr("rank_category_type");if(A==1){z="//channel.yhd.com/ranklist.html?categoryId="+x+"&categoryName="+w
}else{if(A==2){z="//channel.yhd.com/rankSale.html?categoryId="+x+"&categoryName="+w}else{if(A==3){z="//channel.yhd.com/rankSearch.html?categoryId="+x+"&categoryName="+w}else{z="//channel.yhd.com/ranklist.html?categoryId="+x+"&categoryName="+w}}}window.open(z)}else{if(c==u-1){}$(h).parent(".qua_top").attr("data_index",c);var g=$("#"+y+" .qua_top_slidInner").position().left;var B=g-90-120+"px";$("#"+y+" .qua_top_slidInner").css({left:B});if(c>0){$("#"+y+" .qua_top_left_btn").removeClass("qua_top_btn_forbid")}if(c==u-1){$("#"+y+" .qua_top_right_btn").addClass("qua_top_btn_forbid")}}}$(document).on("click",".qua_top_left_btn",function(){b(this)});$(document).on("click",".qua_top_right_btn",function(){j(this)})};d.goTop=function(){$(document).on("click",".h_zd",function(){$("html , body").animate({scrollTop:0},"slow")
})};d.disSlideBrand=function(c,A,x){var E=$(c),J=E.find("ul"),a=J.find("li"),y=a.length,F=a.outerWidth(true),D=1,z=y%A==0?y/A:parseInt(y/A)+1;screenWidth=F*A;if(z>1){$(".qua_brand_left_btn").removeClass("qua_brand_btn_forbid");$(".qua_brand_right_btn").removeClass("qua_brand_btn_forbid");$(".qua_brand_left_btn").show();$(".qua_brand_right_btn").show()}var G=A-(y%A);var w=(z-1)*A;var H=w-G;var I=y-(y%A);var v=a.slice(H,w).clone();var C=a.slice(I,y).clone();a.slice(I,y).remove();v.appendTo(J);C.appendTo(J);function B(){D++;if(D<z){var g=-(screenWidth*(D-1));J.stop(true,true).animate({marginLeft:g},x,function(){})}else{if(D==z){D=z;var g=-(screenWidth*(D-1));J.stop(true,true).animate({marginLeft:g},x,function(){})}else{D=z}}if(D>1){$(".qua_brand_left_btn").removeClass("qua_brand_btn_forbid");$(".qua_brand_right_btn").removeClass("qua_brand_btn_forbid");
$(".qua_brand_left_btn").show();$(".qua_brand_right_btn").show()}if(D>=z){$(".qua_brand_right_btn").addClass("qua_brand_btn_forbid");$(".qua_brand_right_btn").show()}}function b(){D--;if(D<1){D=1}else{if(D>=1){var g=-screenWidth*(D-1);J.stop(true,true).animate({marginLeft:g},x,function(){})}}if(D<=1){$(".qua_brand_left_btn").addClass("qua_brand_btn_forbid");$(".qua_brand_left_btn").show()}if(D<z){$(".qua_brand_right_btn").removeClass("qua_brand_btn_forbid")}}E.on("click",".next_btn",function(){B()});E.on("click",".prev_btn",function(){b()})};d.init=function(){d.switchPageTop();d.initReplaceAdvertise();d.disSlideBrand(".qua_brand","7",800);d.goTop()};return d});require(["index_body","dongnixiangyao","chaojidanpin","bigSlider"],function(j,f,i,g){j.init();f.init();i.init();g.init();try{if(!(loli.util.url.getParams(window.location.href)["from"])&&(window.navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)||window.navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/))){window.location.href="//m.yhd.com"+window.location.pathname+window.location.search
}}catch(h){}});$(window).resize(function(p){var q=$(window).width();try{var l=[$(".mod_brand_sale .left_banner a img"),$(".group_today a img"),$(".mod_on_new .left_banner a img"),$(".brand_buy .brand_banner img")];for(var o=0;o<l.length;o++){var n=l[o];if(q<1228){n.attr("src",loli.webp(n.attr("short"),n.attr("data-nwp"))).attr("data-imgattr","shortimg")}else{n.attr("src",loli.webp(n.attr("wide"),n.attr("data-nwp"))).attr("data-imgattr","wideimg")}}var m=$("#promote_sx15 a img");for(var r=0;r<m.length;r++){var j=$(m[r]);if(q<1228){j.attr("src",loli.webp(j.attr("short"),j.attr("data-nwp"))).attr("data-imgattr","shortimg")}else{j.attr("src",loli.webp(j.attr("wide"),j.attr("data-nwp"))).attr("data-imgattr","wideimg")}}}catch(k){}});define("ajaxPrice",function(){var d={};var b=[];var e=(typeof currSiteId=="undefined")?1:currSiteId;var a=$.cookie("provinceId")||1;var c=$.cookie("cityId")||0;d.ajaxGrouponPrice=function(f,m){var i=$(f);if(i.size()==0){return}var g=[];var l=i.find("[grouponId]");$.each(l,function(o,q){var p=$(q).attr("grouponId");var r=$(q).attr("data-priceDone");if(p&&r!="1"){g.push(p)}});if(g.length==0){return}var n="//tapi.yhd.com/restful/qianggou?callback=?";var h={provinceId:$.cookie("provinceId")||1,channelId:1};var k=$.cookie("cityId")||1;if(k){h.cityId=k}for(var j=0;j<g.length;j++){n+="&grouponIds="+g[j]}$.getJSON(n,h,function(o){if(o==null||o==""||o.length<1){return}$.each(o,function(r,q){var p=i.find("[grouponId='"+q.grouponId+"']");if(p.attr("data-priceDone")!="1"){p.attr("data-priceDone","1");if(m){m(p,q,"groupon")
}}})})};d.ajaxRecommendPrice=function(l,j,h){if((typeof j)!="number"||j<0){return}var k=$(l);if(k.length<1){return}var i="";$.each(k,function(o,m){var p=$(m).attr("data-skuid");var n=$(m).attr("data-priceDone");if(p&&n!="1"){i+=p+","}});i=i.substr(0,i.length-1);if(i==""){return}var g="//www.yhd.com/homepage/ajaxIndexPrice.do?skuIdList="+i;var f={provinceId:$.cookie("provinceId")||1,cityId:$.cookie("cityId")||0};$.getJSON(g,f,function(n){if(n==null||n==""){return}var m=n.data;if(!m||m.length<1){return}$.each(m,function(o,q){if(q.id){$.each(k,function(p,s){var r=$(s);if(r.attr("data-skuid")==q.id){if(r.attr("data-priceDone")!="1"){r.attr("data-priceDone","1");if(h){h(r,q)}}}})}else{if(q.skuId&&q.price>0){$.each(k,function(p,s){var r=$(s);if(r.attr("data-skuid")==q.skuId){if(r.attr("data-priceDone")!="1"){r.attr("data-priceDone","1");
if(h){h(r,q)}}}})}}})})};d.ajaxAdvProdPrice=function(l,h){var g=$(l);if(g.length<1){return}var j=g.find("[data-skuid]");if(!j||j.length<1){return}var i="";$.each(j,function(o,m){var p=$(m).attr("data-skuid");var n=$(m).attr("data-priceDone");if(p&&n!="1"){i+=p+","}});i=i.substr(0,i.length-1);if(i==""){return}var f="//www.yhd.com/homepage/ajaxIndexPrice.do?skuIdList="+i;var k={provinceId:$.cookie("provinceId")||1};$.getJSON(f,k,function(n){if(n==null||n==""){return}var m=n.data;if(!m||m.length<1){return}$.each(m,function(o,q){if(q.id){$.each(j,function(p,s){var r=$(s);if(r.attr("data-skuid")==q.id){if(r.attr("data-priceDone")!="1"){r.attr("data-priceDone","1");if(h){h(r,q)}}}})}else{if(q.skuId&&q.price>0){$.each(j,function(p,s){var r=$(s);if(r.attr("data-skuid")==q.skuId){if(r.attr("data-priceDone")!="1"){r.attr("data-priceDone","1");
if(h){h(r,q)}}}})}}})})};return d});define("addCart",function(){var b={};var e="<div class='pop_add-cart-toast' id='tip'>加入购物车成功！</div>";var d="<div class='pop_add-cart-toast' id='failtip'></div>";function a(){require(["common_cart"],function(i){i.refreshCart()});var h=$("#tip");if(h.length<1){$("body").append(e)}var h=$("#tip");var g=undefined;if(!g){h.addClass("show");g=setTimeout(function(){h.removeClass("show");clearTimeout(g);g=undefined},3000)}}function c(h){var g=$("#failtip");if(g.length<1){$("body").append(d)}var g=$("#failtip");if(typeof(h)!="undefined"&&h){g.html(h)}var i=undefined;if(!i){g.addClass("show");i=setTimeout(function(){g.removeClass("show");clearTimeout(i);i=undefined},3000)}}function f(i,h,g){var j={pid:i,ptype:h,pcount:1};require(["common_cart"],function(k){k.addToCart(j,g)})}b.addCart=function(){$(".touchweb_page-index2017").on("click","a.item-cart",function(){if($(this).attr("data-canBuy")==="false"){return
}var g=$(this).data("addproduct");var i=g.split(",");var h={addToCartSuccess:a,addToCartError:c};f(i[0],i[1],h)})};b.sameAddCart=function(g){$(".xs_bg").on("click","div.item-cart",function(){if($(this).attr("data-canBuy")==="false"){return}var h=$(this).data("addproduct");var i=h.split(",");f(i[0],i[1],g)})};b.addCartYoulike=function(g){$(".you_like_list").on("click","a.item-cart",function(){var h=$(this).data("addproduct");var i=h.split(",");f(i[0],i[1],g)})};return b});define("chaojidanpin",["ajaxPrice"],function(m){var n={};function h(c,a){var b=document.getElementsByTagName("head")[0];var d=document.createElement("script");d.setAttribute("type","text/javascript");d.setAttribute("src",c+"?"+new Date().getTime());b.appendChild(d);if(d.attachEvent){d.attachEvent("onreadystatechange",function(){if(d.readyState=="loaded"){a()}})}else{d.onload=function(){a()};d.onerror=function(){a()}}}function j(a){var b="//www.yhd.com/homepage/dynamictime.do";h(b,a)}var k=function(){var b;if(typeof(nowTime)=="undefined"){var a=new Date();b=new Array(a.getFullYear(),a.getMonth()+1,a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds())}else{b=nowTime.split("-")}return new Date(b[0],b[1]-1,b[2],b[3],b[4],b[5])};var l=function(c){var e=c.getFullYear();var d=c.getMonth()+1;d=d<10?("0"+d):d;
var f=c.getDate();f=f<10?("0"+f):f;var g=c.getHours();g=g<10?("0"+g):g;var b=c.getMinutes();b=b<10?("0"+b):b;var a=c.getSeconds();a=a<10?("0"+a):a;return e+"-"+d+"-"+f+"-"+g+"-"+b+"-"+a};n.countDowntime=function(b){if(!b||b.length==0){return}var a=$(b).find("div.count_time");if(!a||a.length==0){return}j(function(){var c=k();var d=a.attr("data-load");if(d&&d==1){return}a.attr("data-load",1);var r=a.attr("data-endDate");if(r==""||typeof r=="undefined"){return}var g=r.split("-");var f=new Date(g[0],g[1]-1,g[2],g[3],g[4],g[5]);var q=f.getTime()-c.getTime();var e=setInterval(function(){if(q<=0){clearInterval(e);a.attr("data-load",0);n.replaceHtmlNew();return}var p=Math.floor(q/1000%60);var w=Math.floor(q/(1000*60)%60);var x=Math.floor(q/(1000*60*60));var y=a.find(".time_hour");var o=a.find(".time_minit");
var z=a.find(".time_second");y.html(x>99?99:(x<10?"0"+x:x));o.html(w<10?"0"+w:w);z.html(p<10?"0"+p:p);q-=1000},1000)})};function i(a,b){var e=a?a.length:0;var d=0;for(var c=0;c<e;c++){if((a.charCodeAt(c)&65280)!=0){d++}d++;if(b>=0&&d>b){return a.substr(0,c)}}return a}n.replaceHtmlNew=function(){var c="";var d=[];var a=k();var e="//www.yhd.com/homepage/ajaxIndexQianggou.do?callback=?";var b={provinceId:$.cookie("provinceId")||2,cityId:$.cookie("cityId")||2817};$.ajax({url:e,data:b,dataType:"jsonp",timeout:5000,success:function(v){if(v&&v.result){var A=v.result.hourbuyTime;var x=v.result.nextHourbuyTime;var B,g,z,f;if(!A||!x){return}if(A){g=A.activityTime;B=A.endTime}if(x){z=x.activityTime;f=x.endTime}var y=new Date(z);var w=new Date(g);j(function(){var G=k();var H=y.getTime()-G.getTime();if(H>0){c=v.result.productList;
var u=$("#PCchaojidanpin").find("div.count_time");u.attr("data-endDate",l(y));u.attr("data-startDate",l(w));if(c&&c.length>8){for(var s=0;s<c.length&&s<9;s++){var t=c[s];var q;if(t.soldRate){q=t.soldRate}else{q=null}if(t.status&&t.status!=20&&t.status!=30){q=1}if(t){var r="//qianggou.yhd.com/1-"+t.id;d.push("<li grouponId='"+t.id+"'>");d.push("<a href='"+r+"' target='_blank' title='"+t.name+"' class='superSingle_a' clstag='pageclick|keycount|shouye_20181018|SuperSingle"+(s+1)+"'>");d.push("<div class='single_top'>");d.push("<div class='s_bz'>");if(t.sellPoint){d.push("<div class='s_bz_font'>"+t.sellPoint+"</div>")}d.push("</div>");d.push("<img class='single_top_img' src='"+t.imageUrl+"' alt=''>");d.push("</div>");d.push("<div class='single_bottom'>");d.push("<div class='s_title'>"+t.name+"</div>");
if(t.type==1||q==null){d.push("<div class='s_bar s_bar_dfb'></div>")}else{d.push("<div class='s_bar'>");d.push("<div class='s_progress'style='width:"+String(q+"%")+" '></div>");d.push(" </div>")}d.push("<div class='s_con'>");if(t.type&&t.type==1){d.push("<div class='s_num s_num_dfb'><span>￥</span>"+t.msg+"</div>")}else{d.push("<div class='s_num'>");var F=t.price.toString().length;var o=t.jdPrice.toString().length;if(F>7||o>7||t.price==t.jdPrice){d.push("<span class='s_num_unit'>￥</span>");d.push("<span class='s_num_act'>"+t.price+"</span>");d.push("<span class='s_num_underline'></span>")}else{d.push("<span class='s_num_unit'>￥</span>");d.push("<span class='s_num_act' >"+t.price+"</span>");d.push("<span class='s_num_underline'>");d.push("<span class='s_num_unit'>￥</span>");d.push("<span class='s_num_line'>"+t.jdPrice+"</span>");
d.push("</span>")}d.push("</div>")}d.push("</div>");d.push("</div>");d.push("</a>");d.push("</li>")}}$("#PCchaojidanpin").show()}else{return}}if(d.length>100){try{$("#PCchaojidanpin").find("ul li[grouponid]").remove()}catch(p){}}$("#PCchaojidanpin").find("ul").append(d.join(""));n.countDowntime($("#PCchaojidanpin"));m.ajaxGrouponPrice($("#PCchaojidanpin"),function(C,D,E){if(D.type&&D.type==1){$(".s_con",C).html('<div class="s_num s_num_dfb"><span>￥</span>"+qiangProd.msg+"</div>')}else{if(typeof(D.soldRate)=="number"){if(D.soldRate==0){$(".s_bar",C).push("<div class='s_bar s_bar_dfb'></div>")}else{$(".s_bar",C).html("<div class='s_progress'style='width:"+String(D.soldRate+"%")+" '></div>")}}if(typeof(D.price)=="number"){if(D.price>0){$(".s_num",C).html("<span class='s_num_unit'>￥</span><span class='s_num_act'>"+D.price+"</span><span class='s_num_underline'></span>");
if(D.price.toString().length>7){$(".s_num_underline",C).push("")}}else{$(".s_con").hide()}}if(typeof(D.jdPrice)=="number"){if(D.jdPrice.toString().length>7){$(".s_num_underline",C).push("")}else{$(".s_num_underline",C).html("<span class='s_num_unit'>￥</span><span class='s_num_line'>"+D.jdPrice+"</span>")}}}})})}else{return}},error:function(){}})};n.init=function(){n.replaceHtmlNew()};return n});define("paiHangBang",function(){var f={};var g=$.cookie("provinceId")||2;var e=function(){$(".rank_list_class").each(function(d){var l=$(this);if(!l.attr("search_flag")){l.attr("search_flag","1");var b=l.attr("rank_category_id");var c=l.attr("rank_category_name");var a=l.attr("rank_category_type");if(a==1){var k="//channel.yhd.com/api/ajaxQueryRankList.do?source=rank-yhd&cateid="+b+"&areaId="+g}else{if(a==2){var k="//channel.yhd.com/api/ajaxQueryRankSale.do?source=rank-yhd&cateid="+b+"&areaId="+g}else{if(a==3){var k="//channel.yhd.com/api/ajaxQueryRankSearch.do?source=rank-yhd&cateid="+b+"&areaId="+g}else{var k="//channel.yhd.com/api/ajaxQueryRankList.do?source=rank-yhd&cateid="+b+"&areaId="+g}}}$.ajax({url:k,dataType:"jsonp",contentType:"application/x-www-form-urlencoded; charset=utf-8",jsonp:"callback",jsonpCallback:"rank_"+d+"_"+b,success:function(i){if(i){if((i.code==1||i.code==13)&&i.data){var j=i.data;
h(j,l,d)}else{l.hide()}}},error:function(){console.log("网络异常");l.hide()}})}})};var h=function(s,c,b){var u="";var q=c.attr("rank_category_id");var d=c.attr("rank_category_name");var v=c.attr("rank_category_type");if(v==1){u="//channel.yhd.com/ranklist.html?categoryId="+q+"&categoryName="+d}else{if(v==2){u="//channel.yhd.com/rankSale.html?categoryId="+q+"&categoryName="+d}else{if(v==3){u="//channel.yhd.com/rankSearch.html?categoryId="+q+"&categoryName="+d}else{u="//channel.yhd.com/ranklist.html?categoryId="+q+"&categoryName="+d}}}var t=1;var r='<ul class="qua_top_slideCon_ul">';for(var i=0;i<s.length;i++){var a=s[i];if(a.support==0){continue}if(t>9){break}r+='<a href="'+u+'" target="_blank" clstag="pageclick|keycount|shouye_20181018|scenario'+(b+1)+"_RankSku"+(i+1)+'">';r+='<li class="qua_top_imgCon">';
if(t==2||t==5||t==8){r+='<div class="qua_imgCon_font tit_two">TOP'+t+"</div>"}else{if(t==3||t==6||t==9){r+='<div class="qua_imgCon_font tit_three">TOP'+t+"</div>"}else{r+='<div class="qua_imgCon_font">TOP'+t+"</div>"}}r+='<img src="'+loli.util.resizePicJD(a.imgPath,200,200)+'" title="'+a.wareName+'" alt="'+a.wareName+'">';r+="</li>";r+="</a>";if(t%3==0){r+="</ul>";if(t!=9){r+='<ul class="qua_top_slideCon_ul">'}}t++;$(".qua_top_slidInner",c).html("").append(r)}};f.init=function(){e()};return f});$(function(){$("body").lazyImg({indexLoad:true,load:false,scrollLoad:true,attr:"shortimg",wideAttr:"wideimg"});$("#needLazyLoad").lazyDom({load:false,hfix:500,flushPrice:false,indexLoad:true,callback:function(){var b=$(this);b.lazyImg({indexLoad:true,load:false,attr:"shortimg",wideAttr:"wideimg"});require(["paiHangBang"],function(a){a.init()});require(["ajaxPrice"],function(a){a.ajaxAdvProdPrice($(".bursting"),function(e,f){if(!f){$(e).hide();return}if(f.type&&f.type==1){$(e).html("￥<span>"+f.msg+"</span>")}else{if(!f.p||f.p<0){$(e).hide()}else{$(e).html("￥<span>"+f.p+"</span>")}}})})}})});