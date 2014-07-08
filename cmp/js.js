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
	$("#library").click(function(){
		ToLibrary();
	});
	$("#command").click(function(){
		ToCommand();
	});
	
	$("#about").click(function(){
		$("#wrap").fadeOut(50);
		$("#wrap2").delay(50).fadeIn(50);
	});
	
	
	
	$(".hor").click(function(){
		$("#reg_cmd").val($("#reg_cmd").val()+($(this).children(".espresso").text()));
		Regexr();
	});
	$(".menu2").click(function(){
		var item_warp = $(this).next();
		if(item_warp.css('display') === "none"){
			item_warp.slideDown();
		}else{
			item_warp.slideUp();
		}
		
	});
	function ToLibrary(){
		$("#sidebar2").delay(50).fadeIn(50);
		$("#sidebar1").fadeOut(50);
		$("#library").removeClass('buttonC');
		$("#library").addClass('buttonD');
		$("#command").removeClass('buttonD');
		$("#command").addClass('buttonC');
	}
	function ToCommand(){
		$("#sidebar1").delay(50).fadeIn(50);
		$("#sidebar2").fadeOut(50);
		$("#command").removeClass('buttonC');
		$("#command").addClass('buttonD');
		$("#library").removeClass('buttonD');
		$("#library").addClass('buttonC');
	}
	
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
		
		replace_mode=1;
	});
	$("#Match").click(function(){match_animate()});

	function match_animate(){
		$("#reg_cmd").animate({			width:'100%'		});
		$("#rep_cmd").fadeOut();
		$("#disp_match").animate({		width:'99.5%'	,height:'695px',	'margin-right':'0'		});
		$("#code").animate({			width:'100%'	,height:'700px'								});
		$("#disp_replace").fadeOut();
		toggleclass_to_B($("#Match"));
		toggleclass_to_A($("#stacked"));
		toggleclass_to_A($("#sidebyside"));
		replace_mode=0;
	}
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
	$("img").mouseenter(function(){
		$("#sidebar_left").fadeIn();
	});
	

	$("#wrap").click(function(){
		$("#sidebar_left").fadeOut();
	});
	$("#code").scroll(function(){
		$("#disp_match").scrollTop($(this).scrollTop());
		$("#disp_replace").scrollTop($(this).scrollTop());
	});
	
	$("#disp_replace").scroll(function(){
		$("#disp_match").scrollTop($(this).scrollTop());
		$("#code").scrollTop($(this).scrollTop());
	});
	
	$("#code").keyup(function(){ Regexr();	});
    $(".cmd_class").keyup(function(){Regexr();});    
	$("#check_i,#check_g,#check_m").click(function(){ Regexr();});
		
	
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
	
	function find_brackets(input_str,i,obj){
		if (i===1){
			obj.nextAll("p").remove();
		}
		var myRe = /(?!\\)\((.*?)\)(.*)/;
		var myArray = myRe.exec(input_str);
		if (myArray !== null){
			find_brackets(myArray[2],i+1,obj);
			obj.after("<p></p>");
			obj.next().text("match[" + i + "]: " + myArray[1]);
			
		}

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
