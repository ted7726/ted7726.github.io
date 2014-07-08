$(document).ready(function(){
	Regexr();
	match_animate();
	ToCommand();
	var replace_mode=0;
	$("#disp_match").css({
		top:(($("#code").offset()).top),
		right:(($("#code").offset()).right)
	});
	// var screen_left=$("#sidebar_right").position().left;
	
	$("#about").click(function(){
		$("#wrap").fadeOut(50);
		$("#wrap2").delay(50).fadeIn(50);
	});
	
	
	$("#sidebyside").click(function(){
		$("#reg_cmd").animate({			width:'49%'		});
		$("#rep_cmd").fadeIn();
		$("#rep_cmd").animate({			width:'49%'		});
		$("#disp_match").animate({		width:'48.5%'	,height:'695px',	'margin-right':'0.5%'	});
		$("#code").animate({			width:'49%'		,height:'700px'								});
		$("#disp_replace").animate({	width:'48.5%'	,height:'695px',	top:'0px'				});
		$("#disp_replace").fadeIn();
		toggleclass_to_A($("#Match"));
		toggleclass_to_A($("#stacked"));
		toggleclass_to_B($("#sidebyside"));

		replace_mode=1;
	});
	
	$("#stacked").click(function(){
		$("#reg_cmd").animate({			width:'100%'		});
		$("#rep_cmd").fadeIn();
		$("#rep_cmd").animate({			width:'100%'		});
		$("#disp_match").animate({		width:'99.5%'	,height:'325px',	'margin-right':'0'		});
		$("#code").animate({			width:'100%'	,height:'330px'								});
		$("#disp_replace").animate({	width:'99.5%'	,height:'325px',							});
		$("#disp_replace").fadeIn();
		toggleclass_to_A($("#Match"));
		toggleclass_to_B($("#stacked"));
		toggleclass_to_A($("#sidebyside"));
		
		
	});

	function toggleclass_to_A(c){
		if(c.is('.buttonB')){
			c.removeClass('buttonB');
			c.addClass('buttonA');
		}
	}
	function toggleclass_to_B(c){
		if(c.is('.buttonA')){
			c.removeClass('buttonA');
			c.addClass('buttonB');
		}
	}
	

	$("#cmp1").scroll(function(){
		$("#cmp2").scrollTop($(this).scrollTop());
	});
	
	$("#cmp2").scroll(function(){
		$("#cmp1").scrollTop($(this).scrollTop());
	});
	
		
	
	function display_processor(x){
		x = x.replace(/</g,'&lt;');
		x = x.replace(/\r\n|\r|\n/g,'<br>');
		x = x.replace(/\s/g,'&nbsp;');
		x = x.replace(/\[!@#!@#\](.*?)\[#@!#@!\]/g,'<hi>$1</hi>');
		return x;
	}

	function newline_Br(x){
		x = (x.replace(/\r\n|\r|\n/g,'<br/>')+'<br/>');
		return x.replace(/\s/g,'&nbsp;');
	}
	function encode_gt_lt(x){
		return x.replace(/</g,'&lt;');
	}
	

/* Facebook and Google+ like button: */
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	(function() {
		var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		po.src = 'https://apis.google.com/js/platform.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	})();
  
	
	
});
