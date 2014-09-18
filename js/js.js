var tableid=1;
var curr_table = "myTable0";
var Motifs = [];
var force_refresh = true;
var step=1;

$(document).ready(function(){
	$('#text1').keyup(function(e){
		if(e.keyCode == 13){ addCustom(); }
	});
	$('#text2').keyup(function(e){
		if(e.keyCode == 13){ addCustom(); }
	});
	
	$("#submit").click(function(){
		addCustom();
	});	
	
	$('#about').click(function(){
		$('#aboutPage').fadeIn();
	});
	$('#back').click(function(){
		$('#aboutPage').fadeOut();
	});
	$('#testSearch').keyup(function(e){
		if(e.keyCode == 13){
			getMotifs($(this).val().replace(/\s/g,""));
			$(this).val("");
		}
	});
	$('#iconSearch').click(function(){
		getMotifs($('#testSearch').val().replace(/\s/g,""));
		$('#testSearch').val("");
	});
	
	
	
	$('#help').click(function(){
		tourOpen();
	});
	$('#close').click(function(){
		tourClose();
	});
	$('#next').click(function(){
		if(step===2){
			$('#step2').fadeOut();
			toggleDim($('#text2'),$('#step3'));
			step++;
		}else if(step===3){
			$('#step3').fadeOut();
			toggleDim($('#submit'),$('#step4'));
			step++;
		}else if(step===4){
			AllDim();
			tourClose();
			step=1;
			$('#step1').delay(200).fadeIn();
			$('#step4').delay(200).fadeOut();
		}else{
			$('#step'+(step++).toString()).fadeOut();
			$('#step'+step.toString()).fadeIn();
		}
	});
	$('#previous').click(function(){
		if(step===3) AllDim();
		if(step===1) tourClose();
		else if(step === 4){
			$('#step4').fadeOut();
			toggleDim($('#text2'),$('#step3'));
			step--;
		}else{
			$('#step'+(step--).toString()).fadeOut();
			$('#step'+step.toString()).fadeIn();
		}
	});
	
	
	$("#fold").click(function(){
		$(".datagrid table").fadeOut();
	});
	$("#unfold").click(function(){
		$(".datagrid table").fadeIn();
	});
	
	$(".list")	.click(function(){	getMotifs(this.id);	});
	$("#testSearch").autocomplete({
		source: [	"Shale Oil","Frack Attack","Finding Momo","Dr Copper","Black Gold","Big Data","Bear International Market","Bear US Market","Bear US Sectors","Shale Gas","No Glass Ceilings","Biotech Breakthroughs","Social Networking","High Spirits","Natural Gas Glut","Onward Online Ads","Drug Patent Cliffs","Office Space","Online Gaming World","Energetic MLPs","Battling Cancer","Used Car Tune up","Recycled Steel","Hot Retail","Low Beta","Tablet Takeover","Precious Metals","Repeal Obamacare","Dividend Stars","Caffeine Fix","Junk Foods","Income Inequality","Defensive Dividends","Home Improvement","Dogs of the Dow","Discount Nation","China Internet","Chinese Solar","Cleantech Everywhere","Couch Commerce","Rest In Peace","Retiring 2055","High Yield Dividends","Sell in May","Retiring 2050","New Era Portfolio","7Twelve Core Portfolio","Utility Bills","Bullet Proof Balance Sheets","Retiring 2045","All American","Classic 60 40","Retiring 2040","Nuclear Renaissance","Cash Flow Kings","Lots of Likes","Fossil Free","On The Road","Modern Warfare","Growing Dividends","Retiring 2035","Renter Nation","Digital Dollars","Ivy League","BRICS Building","Retiring 2030","Socially Responsible","Pet Passion","Online Video","No Brainer Portfolio","Higher Highs","Healthy and Tasty","Retiring 2025","Lazy 3 Portfolio","Electronic Trading","Vanity Flair","Senior Care","Disappointing the Street","Content is King","Horizon Model 5 Year Aggressive","Horizon Model 15 Year Aggressive","Horizon Model 1 Year Aggressive","Horizon Model 5 Year Moderate","Horizon Model 1 Year Moderate","Horizon Model 15 Year Moderate","Index Fans","GARP","Childs Play","Robotic Revolution","Transporting America","Small Cap Stars","Democratic Donors","World of Sports","No Brainer Portfolio","No Glass Ceilings","Nuclear Renaissance","Obamacare","Office Space","Online Gaming World","Online Video","On The Road","Onward Online Ads","Permanent Strategy","Pet Passion","Precious Metals","Private Equity","Property Casualty Insurance","QE Japan","Recent IPOs","Recycled Steel","Renter Nation","Repeal Obamacare","Republican Donors","Rest In Peace","Retiring 2020","Retiring 2025","Retiring 2030","Retiring 2035","Retiring 2040","Retiring 2045","Retiring 2050","Retiring 2055","Rising Food Prices1","Rising Interest Rates","Robotic Revolution","Senior Care","Seven Deadly Sins","Shale Gas","Shale Oil","Small Cap Stars","Smart Grid","Socially Responsible","Social Networking","Software as a Service","Spinoffs","Stable Earnings","Tablet Takeover","Taking Flight","Tax Inversion Targets","Tech Takeout Targets","That New Car Smell","Too Big to Fail","Transporting America","Used Car Tune up","US Treasury Ladder","Utility Bills","Vanity Flair","Wall Street","Water Shortage","Wearable Tech","World of Sports"]
    });
	
	
	/* Facebook and Google+ like button: */
	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
	(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/platform.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);	})();

});

function toggleDim(obj,label){
	
	$('#topPiece').css({height:obj.offset().top-10});
	$('#bottomPiece').css({top:(obj.offset().top+obj.outerHeight())+10});
	$('#leftPiece').css({width:obj.offset().left-10});
	$('#rightPiece').css({left:(obj.offset().left+obj.outerWidth())+10});
	
	$('#topPiece').css({left:obj.offset().left-10});
	$('#topPiece').css({width:obj.outerWidth()+20});
	$('#bottomPiece').css({left:obj.offset().left-10});
	$('#bottomPiece').css({width:obj.outerWidth()+20});
	
	$('#maskPiece').css({
		left:obj.offset().left-10,
		top:obj.offset().top-10,
		width:obj.outerWidth()+20,
		height:obj.outerHeight()+20
	});
	$('#maskPiece').show();
	label.css({left:obj.offset().left,top:obj.offset().top-label.outerHeight()-10});
	label.fadeIn();
}
function AllDim(){
	$('#maskPiece').hide();
	$('#topPiece').css({height:0});
	$('#bottomPiece').css({top:0,height:'200%'});
}

function tourOpen(){
	$('#tour').fadeIn();
	$('#dim') .fadeIn();
}
function tourClose(){
	$('#tour').fadeOut();
	$('#dim') .fadeOut();
}
function addCustom(){
	// analysis input
	if($("#text2").val() !==""){
		var input = $("#text2").val().split("\n");
		var quotes = new Array(input.length);
		var quotes_weight = new Array(input.length);
		for(i=0;i<input.length;i++){
			var matches = input[i].split("	");
			quotes[i]=matches[0];
			quotes_weight[i]=parseInt(matches[2]);
		}
	}else if($("#text1").val() !==""){
		var quotes = $("#text1").val().split(",");
		var quotes_weight = new Array(quotes.length);
		for(i=0;i<quotes.length;i++){
			quotes_weight[i] = 100/quotes.length;
		}
	}
	if(quotes){
		Motifs.push(new combination(quotes,quotes_weight,"Custom " + tableid));
	}
	$("#text1").val("");
	
}



function combination(qs,qs_weight,t){
	
	this.quotes = qs;
	this.weight = qs_weight;
	this.title = t;
	
	if (this.quotes.length<1) return;
	// create table
	var column = 7;
	var row = Array(column+1).join("<td></td>");
	var rows = "<tbody>";
	// var title = "<tbody><tr><td>Motif 1</td><tr></tbody>";
	for(i=0;i<this.quotes.length;i++){
		if(i%2===1) rows+="<tr>"+row;
		else 		rows+="<tr class = \"alt\">"+row;
		
		rows+="<td href=\"\">"+Math.round(qs_weight[i]*10)/10+"%</td><td><div><a href = \"http://finance.yahoo.com/echarts?s="+qs[i]+"\"><img src=\"http://chart.finance.yahoo.com/z?s="+qs[i]+"&t=1d&q=c&p=v\"></div></td></tr>";
	}
	rows += "</tbody>";
	this.tableID = "myTable"+tableid++;
	
	var table = '<table id="'+this.tableID+'"><thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Change %</th><th>Last Trade Time</th><th>change % after</th><th>Last Trade Time after</th><th>Weight</th><th></th></tr></thead>'+rows+'</table>';
	$("#"+curr_table).after(table);
	$("#"+curr_table).after($('<div/>', {
		'class':'caption',
		'html':'<div>'+t+'</span>',
		'click':toggleCaption
    }));
	
	curr_table = this.tableID;
	this.url = 'http://finance.google.com/finance/info?client=ig&q='+this.quotes[0];
	for(i=1;i<this.quotes.length;i++){
		this.url += ","+this.quotes[i];
	}
	
	
	this.get_quotes_data = function(){
		
		var tID = this.tableID;
		var wt = this.weight;
		var title = this.title;
		// console.log(title);
		$.ajax({
			url: this.url,
			dataType: "jsonp",
			success: function (data){
				
				var x=document.getElementById(tID).rows;
				var weighted_changes_p=0;
				
				for(i=0;i<data.length;i++){
					y=x[i+1].cells;
					
					y[0].innerHTML=data[i].t;
					y[1].innerHTML=data[i].l;
					y[2].innerHTML=(data[i].c>0? "<red>"+data[i].c+"</red>" : "<green>"+data[i].c+"</green>");
					y[3].innerHTML=(data[i].cp>0? "<red>"+data[i].cp+"%</red>" : "<green>"+data[i].cp+"%</green>");
					y[4].innerHTML=data[i].lt;
					// if(typeof(data[i].ecp ) !== "undefined") y[5].innerHTML=(data[i].ecp>0? "<red>"+data[i].ecp+"%</red>" : "<green>"+data[i].ecp+"%</green>");
					if(data[i].ecp) y[5].innerHTML=(data[i].ecp>0? "<red>"+data[i].ecp+"%</red>" : "<green>"+data[i].ecp+"%</green>");
					if(typeof(data[i].elt ) !== "undefined")y[6].innerHTML=data[i].elt;
					// console.log(wt[i]);
					weighted_changes_p += data[i].cp*wt[i];
				}
				weighted_changes_p = Math.round(weighted_changes_p*10)/1000;
				var element_caption = $("#"+tID).prev();
				var matches = element_caption.html().match(/\<.*\>(-{0,1}\d{1,2}\.{0,1}\d{0,3})\%/);
				// background color change
				if (matches){
					var updateP = parseFloat(matches[1]);
					if		(parseFloat(updateP)<parseFloat(weighted_changes_p)){
						element_caption				.animate( {backgroundColor:'#88FF88'},50);
						element_caption.delay(100)	.animate({ backgroundColor:'white'});
					}else if(parseFloat(updateP)>parseFloat(weighted_changes_p)){
						element_caption				.animate( {backgroundColor:'#FF8888'},50);
						element_caption.delay(100)	.animate({ backgroundColor:'white'});
					}
				}
				element_caption.html(
					(weighted_changes_p >0?"<green>"+weighted_changes_p+"%</green>":"<red>"+weighted_changes_p+"%</red>")+title
				);
			}
		});
	};
	
}

function toggleCaption(){
	$(this).next().fadeToggle();
}



window.setInterval(function() {
	for(var i=0;i<Motifs.length;i++){
		Motifs[i].get_quotes_data();
	}
	update_INDEXs();
}, 2000);
window.setInterval(function() {
	$("img").attr('src',function(){
		var img_url = $(this).attr('src');
		if (img_url.charAt(img_url.length-1) === '?'){
			return img_url.substring(0,img_url.length-1);
		}else{
			return $(this).attr('src')+"?";
		}
	});
}, 30000);



function update_INDEXs(){
	$.ajax({
		url: "http://finance.google.com/finance/info?client=ig&q=INDEXSP:.INX,INDEXDJX:.DJI,INDEXNASDAQ:.IXIC",
		dataType: "jsonp",
		success: function (data){
			var title;
			var changes_p;
			for(var i=0;i<3;i++){
				if(i===0) title = "SP500";
				else if(i===1) title = "Dow";
				else if(i===2) title = "NASDAQ";
				var element_caption = $("#"+title);
				changes_p = Math.round(data[i].cp*100)/100;	
				var matches = element_caption.html().match(/.*\<.*\>(-{0,1}\d{1,2}\.{0,1}\d{0,3})\%/);
				// background color change
				if (matches){
					var updateP = parseFloat(matches[1]);
					if		(parseFloat(updateP)<parseFloat(changes_p)){
						element_caption				.animate( {backgroundColor:'#008800'},50);
						element_caption.delay(100)	.animate({ backgroundColor:'transparent'});
					}else if(parseFloat(updateP)>parseFloat(changes_p)){
						element_caption				.animate( {backgroundColor:'#880000'},50);
						element_caption.delay(100)	.animate({ backgroundColor:'transparent'});
					}
				}
				element_caption.html(
					"<h>"+data[i].l+"</h>"+(changes_p>0?"<green>"+changes_p+"%</green>":"<red>"+changes_p+"%</red>")
				);
			}
		}
	});
	
}



