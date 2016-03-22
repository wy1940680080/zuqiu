		// 团队展示部分文字超出影藏并且出现查看更多；
		$(document).ready(function(){ 
			$(".team_nav").find("p").each(function()
				{ var maxwidth=50;
				 if($(this).text().length>maxwidth){
				 $(this).text($(this).text().substring(0,maxwidth)); 
				$(this).html($(this).html()+'...'); 
				} 
				});
			 });
		// 点击显示全文

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
})
