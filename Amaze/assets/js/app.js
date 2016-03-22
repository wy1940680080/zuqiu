//------------- 本JS代码注释均往下走，即注释在代码之上-----------
$(document).ready(function(){

	$(".am-gallery-item").mouseover(function(){
		$(this).find("img").hide();
		$(this).css("background","#c33a28");
	})
	$(".am-gallery-item").mouseout(function(){
		$(this).find("img").show();
		$(this).css("background","white");
		$(this).find("h3").animate({left:"50px"})
	})
	 var e;
	 var f=0;
	 var h;
	 var k;
	 var t;
	 var ne =0;
	 var ti;
	 var new_2=0;
	 var x=0;//新闻部分的大图所需变量；
	 var y=0;
	 var z;
	 if($(window).width()>=1025){
	 	 function move(e,h,k){
	 	
		j=e*h+'px';
		$(k).animate({scrollLeft: j});
	}
	function clock1(){
		t = setInterval(autoMove,4000);
	}
	function autoMove(){
		move(f,1000,'#team_pic');
		f++;
		color($('.teactrl :eq('+(f-1)+')'))
		if(f==3){
			f=0;
		}
	}
	clock1();
	function color(xulu){
		$('.teactrl').find("li").css({background:"white"});
		xulu.css({background:"#cd472e"});
	}
	$('.teactrl').find("li").click(function(){
		clearInterval(t);
		f=$(this).index();
		ti = setTimeout(autoMove,0)
		clock1();
	})
	$(".tecspa_1").click(function(){
		clearInterval(t);
		clearTimeout(ti);
		if(f==-1){
			f=2
		}
		setTimeout(autoMove,0)
		clock1();
	})
	 }
	// if($(window).width()>640){

	// }
	// 投资板块的JS背景变化
	$(".invest_tr_dl1").eq(0).mouseover(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/rtech.png)"})
	});
	$(".invest_tr_dl1").eq(0).mouseout(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/btech.png)"})
	});
	$(".invest_tr_dl1").eq(1).mouseover(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/rcons.png)"})
	});
	$(".invest_tr_dl1").eq(1).mouseout(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/bcons.png)"})
	});
	//第三个医疗；
	$(".invest_tr_dl1").eq(2).mouseover(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/rmedical.png)"})
	});
	$(".invest_tr_dl1").eq(2).mouseout(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/bmedical.png)"})
	});
	// 第二行
	$(".invest_tr_dl1").eq(3).mouseover(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/rmedia.png)"})
	});
	$(".invest_tr_dl1").eq(3).mouseout(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/bmedia.png)"})
	});
	$(".invest_tr_dl1").eq(4).mouseover(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/rbalter.png)"})
	});
	$(".invest_tr_dl1").eq(4).mouseout(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/balter.png)"})
	});
	$(".invest_tr_dl1").eq(5).mouseover(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/rcomp.png)"})
	});
	$(".invest_tr_dl1").eq(5).mouseout(function(){
		$(this).find("dl").find("dt").css({background:"url(assets/i/images/bcomp.png)"})
	});
	// 屏幕宽度

	// 新闻部分大图滚动
	if($(window).width()>=641){
		var t=null;
     var i=0;
     var j=0;
      $('.new_control_ul2').find('li').click(function()
              {
                     clearTimeout(t);
                     $('.new_slider').stop();
                     i=$(this).index();
                     run(i);
                     $('.new_control_ul2').find('li').removeClass('ond');
                     $('span').eq(i).addClass('ond');
                     t=setTimeout(next,3000);
              })
       $('.new_btn1').click(function(){
                     clearTimeout(t);
                     $('.new_slider').stop();
                     i--;
                     if(i<0)
                     {
                           i=$('.new_slider').find('ul').find('li').length-1;
                     }
                    $('.new_control_ul2').find('li').removeClass('ond');
                    $('.new_control_ul2').find('li').eq(i).addClass('ond');
                    run(i);
                    t=setTimeout(next,3000);
             })
       //向右的按钮
     $('.new_btn2').click(function()
             {
                   clearTimeout(t);
                   $('.new_slider').stop(true,false);
                   i++;
                  if(i>=3)
                  {
                        i=0;
                  }
                 $('.new_control_ul2').find('li').removeClass('ond');
                 $('.new_control_ul2').find('li').eq(i).addClass('ond');
                 run(i);
                 t=setTimeout(next,3000);
            });
             function next()
           { 
                i++;

               if(i>=3)
               {
                    i=0;
               }
              run(i);
              $('.new_control_ul2').find('li').removeClass('ond');
                 $('.new_control_ul2').find('li').eq(i).addClass('ond');
           }
           next();
          function run(i)
          {
                 j=i*1000;
                 $('.new_slider').animate({scrollLeft:j},1000);
          }

	}
	
	function new_slid2move(){
		move(new_2,1000,'.new_slider2');
		new_2++;
		if(new_2==10){
			new_2=0;
		}
	}
	function color3(xulu){
		$('.new_2contr').find("li").css({background:"white"});
		xulu.css({background:"#cd472e"});
	}
	// 新闻翻动函数
	function autoMove_new(){
		move(a_new,1000,'.new_slider2')
	}
	$('.new_2contr').find("li").click(function(){
		clearInterval(t);
		a_new=$(this).index();
		ti = setTimeout(autoMove_new,0)
		color3($(this));
	})
	var tea_num;
	// 专家展示窗口的JS效果
	$('.team_ul1').find("li").click(function(){
		$('.display_window').css({display:"block"})
		// 
		$('.dis_pic').html($(this).find('div').html());
		tea_num=$(this).index();
	})
	// 详细资料窗口关闭
	$(".dis_close").click(function(){
		$('.display_window').css({display:"none"});
	})
	// 上一页按钮
	$('.team_dis_span1').click(function(){
		$('.dis_pic').html($('.team_ul1').find("li").eq(tea_num-1).find('div').html());
		tea_num--;
		if(tea_num==-1){
			tea_num=23;
		}
	})
	// 下一页按钮
	$('.team_dis_span2').click(function(){
		$('.dis_pic').html($('.team_ul1').find("li").eq(tea_num+1).find('div').html());
		tea_num++;
		if(tea_num==24){
			tea_num=0;
		}
	})




$('.invest_tr_dl1').click(function(){
		$('.invest_dis_window').show();
		$('.invest_bac_pad').css({display:'block'})
	})
	$('.ipad_invest_close').click(function(){
		$('.invest_dis_window').hide();
		$('.invest_bac_pad').css({display:'none'})
	})
	//文本框获取焦点清空内容
	// $('input').focus(function(){
	// 	$(this).attr("value","");
	// });
// 页面自动滚动到适应位置
//专家部分自动
$('.ab_con1').click(function(){
			//屏幕滚动
			 $('html,body').animate({scrollTop:$('.about')[0].offsetTop});
		})
//
$('.invest_tr_dl1').click(function(){
			//屏幕滚动
			 $('html,body').animate({scrollTop:$('.invest_1')[0].offsetTop});
		})
$('.am_div_intro ').find('li').click(function(){
			//屏幕滚动
			 $('html,body').animate({scrollTop:$('.news')[0].offsetTop});
		})
//页面滚动
$('.team_ul1').find("li").click(function(){
			//屏幕滚动
			 $('html,body').animate({scrollTop:$('.team')[0].offsetTop});
		})
	$("[href='#a']").click(function(){
		$('html,body').animate({scrollTop:0},500);
		return false;
	})

		$('.li_1').eq(0).click(function(){
			//屏幕滚动
			 $('html,body').animate({scrollTop:$('.team')[0].offsetTop});
			 $('.li_1').css({background:"#c33a28"});
			 $(this).css({background:"#a5280a"});
		})
		$('.li_1').eq(1).click(function(){
			 $('html,body').animate({scrollTop:$('.about')[0].offsetTop});
			 $('.li_1').css({background:"#c33a28"})
			 $(this).css({background:"#a5280a"})
		})
		$('.li_1').eq(2).click(function(){
			 $('html,body').animate({scrollTop:$('.invest_1')[0].offsetTop})
			 $('.li_1').css({background:"#c33a28"})
			 $(this).css({background:"#a5280a"})
		})
		$('.li_1').eq(3).click(function(){
			 $('html,body').animate({scrollTop:$('.news')[0].offsetTop})
			 $('.li_1').css({background:"#c33a28"})
			 $(this).css({background:"#a5280a"})
		})
		$('.li_1').eq(4).click(function(){
			 $('html,body').animate({scrollTop:$('.contact')[0].offsetTop})
			 $('.li_1').css({background:"#c33a28"})
			 $(this).css({background:"#a5280a"})
		})
		$('.li_1').eq(5).click(function(){
			
			 $('html,body').animate({scrollTop:$('.work_idg')[0].offsetTop-50})

			 $('.li_1').css({background:"#c33a28"})
			 $(this).css({background:"#a5280a"})
		})
//------------------------------------手机下的独有JS效果-------------------------- 
// 根据不同屏幕宽度加载JS（手机下的独有JS效果）
		$(document).ready(function(){
			if($(window).width()<=640){
	
				// 点击显示全文
if($(window).width()<=640){
	// 新闻列表个数隐藏一部分
	$(".am_div_intro:gt(0)").hide();
	$(".yincan_0 li:gt(1)").hide();
}
				// li超出个数.隐藏
					$(document).ready(function(){ 
					$(".team_ul1").each(function()
						{ $(" .disp_none1 li:gt(5)").hide();
							$(".disp_none2 li:gt(5)").hide();
							$(".disp_none3 li:gt(5)").hide();
						});
					 });
					// 成员轮播部分的内部文档删除
				$(document).ready(function(){ 
					$(".teactrl").find("li").each(function(){
						$(".teactrl").find("li").html(''); 
						});
					 });
					};
				})
		
// 手机端导航条
if($(window).width()<=640){
	$(".dh_ph").click(function(){
		if($('.content').position().left==0){
			$('.content').animate({left: '-280px'})
			$('.nav_1').show();
		}
		else{
			$('.content').animate({left:'0px'})
			$('.nav_1').hide();
		}
	});
}
  //新闻版块
  if($(window).width()<641){
  	 var p=0;
	  function autumove_new(){
	  	move(p,320,'.new_slider');
	  	p++;
	  	color_phone($('.new_control_ul2 :eq('+(p-1)+')'))
	  	if(p==3){
	  		p=0;
	  		}
	  	} 
  function clock_new_phone(){
  	t_phone = setInterval(autumove_new,4000)
  }
  clock_new_phone();
  function color_phone(xulu){
		$('.new_control_ul2').find("li").css({background:"white"});
		xulu.css({background:"#cd472e"});
	}
	$(document).ready(function(){ 
					$(".new_intro_dd").find("h3").find('a').each(function()
						{ var maxwidth=12;
						 if($(this).text().length>maxwidth){
						 $(this).text($(this).text().substring(0,maxwidth)); 
						$(this).html($(this).html()+''); 
						} 
						});
					 });
	// 新闻列表消息部分超出隐藏
$(document).ready(function(){ 
					$(".am-list-item-text").each(function()
						{ var maxwidth=28;
						 if($(this).text().length>maxwidth){
						 $(this).text($(this).text().substring(0,maxwidth)); 
						$(this).html($(this).html()+'...'); 
						} 
						});
					 });
  }



// li超出个数.隐藏
	
		// 投资领域关闭窗口按钮
if($(window).width()<641){
	$(".ab_dis_close").click(function(){
				$(".about_diswindow").hide();
				$(".mobilebac_ab").css({display:"none"})
			})
			// 点击打开弹出窗口
			$(".ab_con1").click(function(){
				$(".ab_dis_h").text($(this).find('dl').find('dd').find('h3').text())
				$('.ab_dis_ul').html($(this).find('dl').find('ul').html());

				$(".about_diswindow").show();
				$(".mobilebac_ab").css({display:"block"})
			})	
}
		
})
// 手机端专家展示大图滚动
if($(window).width()<641){
	var f=0;
	 function move(e,h,k){
	 	
		j=e*h+'px';
		$(k).animate({scrollLeft: j});
	}
	function clock1(){
		t = setInterval(autoMove,4000);
	}
	function autoMove(){
		move(f,294,'#team_pic');
		f++;
		color($('.teactrl :eq('+(f-1)+')'))
		if(f==3){
			f=0;
		}
	}
	clock1();
	function color(xulu){
		$('.teactrl').find("li").css({background:"white"});
		xulu.css({background:"#cd472e"});
	}
	$('.teactrl').find("li").click(function(){
		clearInterval(t);
		f=$(this).index();
		ti = setTimeout(autoMove,0)
		clock1();
	})
	$(".tecspa_1").click(function(){
		clearInterval(t);
		clearTimeout(ti);
		if(f==-1){
			f=2
		}
		setTimeout(autoMove,0)
		clock1();
	})
}
// 提交部分选项卡；
if($(window).width()<641){
	$(".phone_li1").click(function(){
		$(".phone_pro_sub").hide();
		//移除之前黑色底边
		$('.phone_li1').removeClass('btob');
		$(".cue_pro").show();
		$('.phone_li1').addClass('btor');
		//操作另外一个对象
		$('.phone_li2').removeClass('btor');
		$('.phone_li2').addClass('btob');

	})
	$(".phone_li2").click(function(){
		$(".cue_pro").hide();
		$('.phone_li1').removeClass('btor');
		$('.phone_li1').addClass('btob');
		//移除自身的黑底 便于加红色
		$('.phone_li2').removeClass('btob');
		$('.phone_li2').addClass('btor');
		$(".phone_pro_sub").show();
	})
}
// 团队部分展示详尽窗口弹出之后背景变深与恢复
if($(window).width()<641){
	$('.team_ul1').find("li").click(function(){
		$('.team').css({background:"#cccccc"})
	})
	$(".dis_close").click(function(){
		$('.team').css({background:""})
	})
}
//查看更多
if($(window).width()<641){
	//团队部分
	$('.phone_span').eq(0).click(function(){
		if($('.team_int').height()==75){
			$('.team_int').css({height:"175px"})
			$('.phone_span').eq(0).find('var').text("收起")
		}
		else{
			$('.team_int').css({height:"75px"})
			$(".phone_span").eq(0).find('var').text("查看更多")
		}
		

	})

//关于部分
$('.phone_span').eq(1).click(function(){
		if($('.about_int').height()==75){
			$('.about_int').css({height:"250px"})
			$('.phone_span').eq(1).find('var').text("收起")
		}
		else{
			$('.about_int').css({height:"75px"})
			$(".phone_span").eq(1).find('var').text("查看更多")
		}
	})
}
// 新闻详尽窗口弹出与收回
if($(window).width()<641){
	$('.am_div_intro ').find('li').click(function(){
		$('#new_ph_dis').css({display:"block"});
		$('.new_phone_head').html($(this).html());
		$('.new_pad_bac').css({display:"block"});
	})
	$('.dis_close2').click(function(){
		$('#new_ph_dis').css({display:"none"});
		$('.new_pad_bac').css({display:"none"});
	})
}
if($(window).width()<641){
	$('.con_li1').eq(2).hide();
	$('.con_li1').eq(3).hide();
	$('.con_li1').eq(6).hide();
	$('.con_li1').eq(7).hide();
}
// 工作
if($(window).width()<641){
	$('.phone_span').eq(3).click(function(){
		if($('.work_int').height()==75){
			$('.work_int').css({height:"225px"})
			$('.phone_span').eq(3).find('var').text("收起")
		}
		else{
			$('.work_int').css({height:"75px"})
			$(".phone_span").eq(3).find('var').text("查看更多")
		}
	})
}
// 手机端新闻
if($(window).width()<641){
	$('.phone_span').eq(2).click(function(){
		if($('.news_int').height()==75){
			$('.news_int').css({height:"175px"})
			$('.phone_span').eq(2).find('var').text("收起")
		}
		else{
			$('.news_int').css({height:"75px"})
			$(".phone_span").eq(2).find('var').text("查看更多")
		}
	})
}
if($(window).width()<641){
	$('.ph_wor_li1').click(function(){
		$('.req').hide();
		$('.dev').show();
			//移除之前黑色底边
		$('.ph_wor_li1').removeClass('btob');
		$('.ph_wor_li1').addClass('btor');
		//操作另外一个对象
		$('.ph_wor_li2').removeClass('btor');
		$('.ph_wor_li2').addClass('btob');
	})
	$('.ph_wor_li2').click(function(){
		$('.dev').hide();
		$('.req').show();
		$('.ph_wor_li1').removeClass('btor');
		$('.ph_wor_li1').addClass('btob');
		//移除自身的黑底 便于加红色
		$('.ph_wor_li2').removeClass('btob');
		$('.ph_wor_li2').addClass('btor');
	})
}

// <--------------------ipad端JS效果------------------->
// pad专家展示大图滚动

if($(window).width()==1024&&$(window).height()==768){
	var f=0;
	 function move(e,h,k){
	 	
		j=e*h+'px';
		$(k).animate({scrollLeft: j});
	}
	function clock1(){
		t = setInterval(autoMove,4000);
	}
	function autoMove(){
		move(f,785,'#team_pic');
		f++;
		color($('.teactrl :eq('+(f-1)+')'))
		if(f==3){
			f=0;
		}
	}
	clock1();
	function color(xulu){
		$('.teactrl').find("li").css({background:"white"});
		xulu.css({background:"#cd472e"});
	}
	$('.teactrl').find("li").click(function(){
		clearInterval(t);
		f=$(this).index();
		ti = setTimeout(autoMove,0)
		clock1();
	})
	$(".tecspa_1").click(function(){
		clearInterval(t);
		if(f==-1){
			f=2
		}
		setTimeout(autoMove,0)
		clock1();
	})
	//pad端的团队展示部分控制点数字隐藏
	$('.teactrl').find('li').each(function(){
		$('.teactrl').find('li').html('');
	})
	// 关于部分点击弹出详尽
	$('.ab_con1').click(function(){
		$('.about_diswindow').show();
		$('.ab_dis_h').text($(this).find('dl').find('dd').find('h3').text());
		$('.ab_dis_ul').html($(this).find('dl').find('ul').html());
		$('.mobilebac_ab').css({display:'block'});
	})
	// 关于部分窗口关闭
	$('.ab_dis_close').click(function(){
		$('.about_diswindow').hide();
		$('.mobilebac_ab').css({display:'none'});
	})
	$('.invest_tr_dl1').click(function(){
		$(this).css({background:'#fbfbfb'});
	})
	// IDG投资模块点击弹出窗口
	$('.invest_tr_dl1').click(function(){
		$('.invest_dis_window').show();
		$('.invest_bac_pad').css({display:'block'})
	})
	$('.ipad_invest_close').click(function(){
		$('.invest_dis_window').hide();
		$('.invest_bac_pad').css({display:'none'})
	})

	// pad端新闻滚动
	var pf=0;
	var pj;
	var pt;
	 function movep(e,h,k){
	 	
		pj=e*h+'px';
		$(k).animate({scrollLeft: pj});
	}
	function clock_p(){
		pt = setInterval(autoMove_pnew,4000);
	}
	function autoMove_pnew(){
		movep(pf,781,'.new_box');
		pf++;
		colorp($('.new_control_ul2 :eq('+(pf-1)+')'))
		if(pf==3){
			pf=0;
		}
	}
	clock_p();
	function colorp(xulu){
		$('.new_control_ul2').find("li").css({background:"white"});
		xulu.css({background:"#cd472e"});
	}
	$('.new_control_ul2').find("li").click(function(){
		clearInterval(pt);
		pf=$(this).index();
		pti = setTimeout(autoMove_pnew,0)
		clock_p();
	})
	// 新闻部分列表文字超出隐藏
	$(".am-list-item-text").each(function()
						{ var maxwidth=28;
						 if($(this).text().length>maxwidth){
						 $(this).text($(this).text().substring(0,maxwidth)); 
						$(this).html($(this).html()+'...'); 
						} 
						});
	// 大部分新闻列表隐藏
	$('.am_div_intro:gt(0)').hide();
	$(".yincan_0 li:gt(3)").hide();
	// ipad端新闻弹出窗口
	$('.am_div_intro ').find('li').click(function(){
		$('#new_ph_dis').css({display:"block"});
		// pad端点击获取当前内容
		$('.new_phone_head').html($(this).html());
		$('.new_pad_bac').css({display:"block"});
	})
	$('.dis_close2').click(function(){
		$('#new_ph_dis').css({display:"none"});
		$('.new_pad_bac').css({display:"none"});
	})


	// ipad端提交部分选项卡
	$(".phone_li1").click(function(){
		$(".phone_pro_sub").hide();
		$(".cue_pro").show();
	})
	$(".phone_li2").click(function(){
		$(".cue_pro").hide();
		$(".phone_pro_sub").show();
	})
// pad端蒙版控制
	$('.team_ul1').find("li").click(function(){
		$('.mobliebac').css({display:"block"})
	})
	$(".dis_close").click(function(){
		$('.mobliebac').css({display:"none"})
	})
	$(".phone_li1").click(function(){
		$(".phone_pro_sub").hide();
		//移除之前黑色底边
		$('.phone_li1').removeClass('btob');
		$(".cue_pro").show();
		$('.phone_li1').addClass('btor');
		//操作另外一个对象
		$('.phone_li2').removeClass('btor');
		$('.phone_li2').addClass('btob');

	})
	$(".phone_li2").click(function(){
		$(".cue_pro").hide();
		$('.phone_li1').removeClass('btor');
		$('.phone_li1').addClass('btob');
		//移除自身的黑底 便于加红色
		$('.phone_li2').removeClass('btob');
		$('.phone_li2').addClass('btor');
		$(".phone_pro_sub").show();
	})
}