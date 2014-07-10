$(document).ready(function(){





	var compare_mode=0;
	var str1;
	var str2;
	var d;
	$("#about").click(function(){
		
		$("body").addClass("loading");
		// $("#wrap").fadeOut(50);
		// $("#wrap2").delay(50).fadeIn(50);
	});
	
	
	$("#paragraph").click(function(){
		$("#cmp1").animate({			width:'49%'		,height:'700px'});
		$("#cmp2").animate({			width:'49%'		,height:'700px'});
		toggleclass_to_B($("#paragraph"));
		toggleclass_to_A($("#line"));
		compare_mode = 1;
		$("body").removeClass("loading");
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
		alignment_algorithms();
		
	});
	
	function alignment_algorithms(){
		if(compare_mode === 0){
			str1=($("#cmp1").val()).split('');
			str2=($("#cmp2").val()).split('');
		}else{
			str1=($("#cmp1").val()).split("\n");
			str2=($("#cmp2").val()).split("\n");
		}
		
/*
		O(n) space:
		var d = new Array(str2.length+1);
		var m1;
		var m2;
		var m_value;
		var x;
		for(var j=0;j<str2.length+1;j++)d[j] = j;
		for(var i=0;i<str1.length;i++){
			m1 = d[0];
			d[0] = i+1;
			for(var j=0;j<str2.length;j++){
				m2 = d[j+1];
				if(str1[i] === str2[j])	m_value = 0;
				else					m_value = 1;
				if(d[j]<d[j+1])d[j+1] = d[j];
				if(m1+m_value<d[j+1]+1) d[j+1] = m1+m_value;
				else d[j+1] = d[j+1] +1;
				m1 = m2;
			}
		}
*/
/* Sequence alignment algorithms: */
		d = new Array(str1.length+1);
		var m1;
		var m2;
		var m_value;
		var x;
		d[0] = new Array(str2.length+1);
		for(var j=0;j<str2.length+1;j++)d[0][j] = j;
		for(var i=0;i<str1.length;i++){
			d[i+1] = new Array(str2.length+1);
			d[i+1][0]= i+1;
			for(var j=0;j<str2.length;j++){
				if(str1[i] === str2[j])	m_value = 0;
				else					m_value = 1;
				d[i+1][j+1] = min(d[i][j]+m_value,d[i][j+1]+1,d[i+1][j]+1);
			}
		}
		$("#ttt").html("");
		for(var i=0;i<str1.length+1;i++) console.log(d[i]);
		/* trace back the path */
		var path = trace_back_path2(str1.length,str2.length);
		for(var k=0;k<path.length;k++){
			console.log(path[k][0]);
			console.log(path[k][1]);
			console.log("======");
		}
	}
	/* trace back the path */
	function trace_back_path(i,j){
		var s = new Array(0);
		if (i===0 && j===0) return [["",""]];
		if (i>0 && j>0){
			var x = min(d[i-1][j-1],d[i-1][j],d[i][j-1]);
			if(	x === d[i-1][j-1] && (
					(d[i-1][j-1]   === d[i][j] && str1[i-1] === str2[j-1]) || 
					(d[i-1][j-1]+1 === d[i][j] && str1[i-1] !== str2[j-1])
				)
			){
				A = trace_back_path(i-1,j-1);
				for (var k=0;k<A.length;k++) s.push([A[k][0]+str1[i-1],A[k][1]+str2[j-1]]);
			}if(x === d[i-1][j] && d[i-1][j]+1 === d[i][j]){
				A = trace_back_path(i-1,j);
				for (var k=0;k<A.length;k++) s.push([A[k][0]+str1[i-1],A[k][1]+"-"]);
			}if(x === d[i][j-1] && d[i][j-1]+1 === d[i][j]){
				A = trace_back_path(i,j-1);
				for (var k=0;k<A.length;k++) s.push([A[k][0]+"-",A[k][1]+str2[j-1]]);
			}
		}
		else if (i>0 && j===0){
			A = trace_back_path(i-1,0);
			for (var k=0;k<A.length;k++) s.push([A[k][0]+str1[i-1],A[k][1]+"-"]);
		}
		else if (j>0 && i===0){
			A = trace_back_path(0,j-1);
			for (var k=0;k<A.length;k++) s.push([A[k][0]+"-",A[k][1]+str2[j-1]]);
		}
		return s;
	}
	/* easier method without multiple solutions where conflict first */
	function trace_back_path2(i,j){
		var s = new Array(0);
		if (i===0 && j===0) return [["",""]];
		if (i>0 && j>0){
			var x = min(d[i-1][j-1],d[i-1][j],d[i][j-1]);
			if(	x === d[i-1][j-1] && (
					(d[i-1][j-1]   === d[i][j] && str1[i-1] === str2[j-1]) || 
					(d[i-1][j-1]+1 === d[i][j] && str1[i-1] !== str2[j-1])
				)
			){
				A = trace_back_path(i-1,j-1);
				for (var k=0;k<A.length;k++) s.push([A[k][0]+str1[i-1],A[k][1]+str2[j-1]]);
			}else if(x === d[i-1][j] && d[i-1][j]+1 === d[i][j]){
				A = trace_back_path(i-1,j);
				for (var k=0;k<A.length;k++) s.push([A[k][0]+str1[i-1],A[k][1]+"-"]);
			}else if(x === d[i][j-1] && d[i][j-1]+1 === d[i][j]){
				A = trace_back_path(i,j-1);
				for (var k=0;k<A.length;k++) s.push([A[k][0]+"-",A[k][1]+str2[j-1]]);
			}
		}
		else if (i>0 && j===0){
			A = trace_back_path(i-1,0);
			for (var k=0;k<A.length;k++) s.push([A[k][0]+str1[i-1],A[k][1]+"-"]);
		}
		else if (j>0 && i===0){
			A = trace_back_path(0,j-1);
			for (var k=0;k<A.length;k++) s.push([A[k][0]+"-",A[k][1]+str2[j-1]]);
		}
		return s;
	}
		
	
	function display_processor(x){
		x = x.replace(/</g,'&lt;');
		x = x.replace(/\r\n|\r|\n/g,'<br>');
		x = x.replace(/\s/g,'&nbsp;');
		x = x.replace(/\[!@#!@#\](.*?)\[#@!#@!\]/g,'<hi>$1</hi>');
		return x;
	}
	function min(){
		var m = Number.MAX_VALUE;
		for(var i=0;i<arguments.length;i++)
			if (arguments[i]<m)m = arguments[i];
		return m;
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
