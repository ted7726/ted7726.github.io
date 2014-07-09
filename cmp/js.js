$(document).ready(function(){
	var compare_mode=0;
	var str1;
	var str2;
	$("#about").click(function(){
		// $("#wrap").fadeOut(50);
		// $("#wrap2").delay(50).fadeIn(50);
	});
	
	
	$("#paragraph").click(function(){
		$("#cmp1").animate({			width:'49%'		,height:'700px'});
		$("#cmp2").animate({			width:'49%'		,height:'700px'});
		toggleclass_to_B($("#paragraph"));
		toggleclass_to_A($("#line"));
		compare_mode = 1;
	});
	
	$("#line").click(function(){

		$("#cmp1").animate({			width:'99%'	,height:'350px'	});
		$("#cmp2").animate({			width:'99%'	,height:'330px'	});

		toggleclass_to_B($("#line"));
		toggleclass_to_A($("#paragraph"));
		compare_mode = 0;
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
	$("#submit").click(function(){
		if(compare_mode === 0){
			str1=($("#cmp1").val()).split('');
			str2=($("#cmp2").val()).split('');
		}else{
			str1=($("#cmp1").val()).split("\n");
			str2=($("#cmp2").val()).split("\n");
		}
		
/*


  x a b c
x 0 1 2 3
a 1 0 1 2
z 2 1 1 2
b 3 2 1 2
c 4 3 2 1
*/
		var d = new Array(str2.length+1);
		for(var i=0;i<str1.length;i++){
			for(var j=0;j<str2.length;j++){
				
			}
		}
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
	

/* Facebook and Google+ like button:
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
*/
});
