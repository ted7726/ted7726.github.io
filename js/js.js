// http://dev.markitondemand.com/
// global variable
var tableid=1;
var curr_table = "myTable0";
var Motifs = [];
var force_refresh = true;
var step=1;
var detail_SYM='GOOG';
// var newData=[];



$.ajaxSetup({
	scriptCharset: "utf-8", //maybe "ISO-8859-1"
	contentType: "application/json; charset=utf-8"
});

$(document).ready(function(){
	
	$('#text1').keyup(function(e){
		if(e.keyCode == 13){ addCustom(); }
	});
	$('#text2')
	.keyup(function(e){
		if(e.keyCode == 13){ addCustom(); }
	})
	.mouseenter(function(){
		$('#help_label').css({
			left:$('#help').offset().left-94,
			top:($('#help').offset().top+$('#help').outerHeight())
		});
		$('#help_label').show();
	})
	.mouseleave(function(){
		$('#help_label').hide();
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
	$('#closeChart').click(function(){
		$('#detail').hide();
	});
	$('#testSearch').keyup(function(e){
		if(e.keyCode == 13){
			addMotif($(this).val().replace(/\s/g,""));
			$(this).val("");
		}
	});
	$('#iconSearch').click(function(){
		addMotif($('#testSearch').val().replace(/\s/g,""));
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
	
	$("#test").click(function(){
		createMotifChart("BigData");
	});
	
	$(".list")	.click(function(){	addMotif(this.id);	});
	$("#testSearch").autocomplete({
		source: [	"Shale Oil","Frack Attack","Finding Momo","Dr Copper","Black Gold","Big Data","Bear International Market","Bear US Market","Bear US Sectors","Shale Gas","No Glass Ceilings","Biotech Breakthroughs","Social Networking","High Spirits","Natural Gas Glut","Onward Online Ads","Drug Patent Cliffs","Office Space","Online Gaming World","Energetic MLPs","Battling Cancer","Used Car Tune up","Recycled Steel","Hot Retail","Low Beta","Tablet Takeover","Precious Metals","Repeal Obamacare","Dividend Stars","Caffeine Fix","Junk Foods","Income Inequality","Defensive Dividends","Home Improvement","Dogs of the Dow","Discount Nation","China Internet","Chinese Solar","Cleantech Everywhere","Couch Commerce","Rest In Peace","Retiring 2055","High Yield Dividends","Sell in May","Retiring 2050","New Era Portfolio","7Twelve Core Portfolio","Utility Bills","Bullet Proof Balance Sheets","Retiring 2045","All American","Classic 60 40","Retiring 2040","Nuclear Renaissance","Cash Flow Kings","Lots of Likes","Fossil Free","On The Road","Modern Warfare","Growing Dividends","Retiring 2035","Renter Nation","Digital Dollars","Ivy League","BRICS Building","Retiring 2030","Socially Responsible","Pet Passion","Online Video","No Brainer Portfolio","Higher Highs","Healthy and Tasty","Retiring 2025","Lazy 3 Portfolio","Electronic Trading","Vanity Flair","Senior Care","Disappointing the Street","Content is King","Horizon Model 5 Year Aggressive","Horizon Model 15 Year Aggressive","Horizon Model 1 Year Aggressive","Horizon Model 5 Year Moderate","Horizon Model 1 Year Moderate","Horizon Model 15 Year Moderate","Index Fans","GARP","Childs Play","Robotic Revolution","Transporting America","Small Cap Stars","Democratic Donors","World of Sports","No Brainer Portfolio","No Glass Ceilings","Nuclear Renaissance","Obamacare","Office Space","Online Gaming World","Online Video","On The Road","Onward Online Ads","Permanent Strategy","Pet Passion","Precious Metals","Private Equity","Property Casualty Insurance","QE Japan","Recent IPOs","Recycled Steel","Renter Nation","Repeal Obamacare","Republican Donors","Rest In Peace","Retiring 2020","Retiring 2025","Retiring 2030","Retiring 2035","Retiring 2040","Retiring 2045","Retiring 2050","Retiring 2055","Rising Food Prices1","Rising Interest Rates","Robotic Revolution","Senior Care","Seven Deadly Sins","Shale Gas","Shale Oil","Small Cap Stars","Smart Grid","Socially Responsible","Social Networking","Software as a Service","Spinoffs","Stable Earnings","Tablet Takeover","Taking Flight","Tax Inversion Targets","Tech Takeout Targets","That New Car Smell","Too Big to Fail","Transporting America","Used Car Tune up","US Treasury Ladder","Utility Bills","Vanity Flair","Wall Street","Water Shortage","Wearable Tech","World of Sports","CustomDrugPatentCliffs"]
    });
	
	
	/* Facebook and Google+ like button: */
	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
	(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/platform.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);	})();
	
});


////////////////////////////////////////////////////////////////////////////////////////////////
//	Toggle Functions
////////////////////////////////////////////////////////////////////////////////////////////////

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
function addMotif(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	var q = getMotifs(motif);
	if (q !== "undefined" && !this.DashBoard[motif]){
		var x = new combination(
			q.quotes,q.weight,q.name
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	x.get_quotes_data();
	$(".datagrid").fadeIn();
}

function rowClick(){
	var SYM = $(this).context.firstChild.innerText;
	detail_SYM = SYM;
	// $('#chart').attr('src','http://chart.finance.yahoo.com/z?s='+SYM+'&t=1d&q=c&p=v');
	
	$('#detail').css({
		left:($(this).offset().left),
		top:($(this).offset().top+$(this).outerHeight()+4)
	});
	
	
	$.ajax({
		url: 'http://chartapi.finance.yahoo.com/instrument/1.0/'+detail_SYM+'/chartdata;type=quote;range=1d/json',
		dataType:"jsonp",
		success: function (data){
			IntraDayChart(data.series,data.meta["Company-Name"],data.meta.gmtoffset,data.meta.previous_close);
		}
	});
	$('#detail').show();
}

function toggleCaption(){
	$('#detail').css({
		left:($(this).offset().left),
		top:($(this).offset().top+$(this).outerHeight()+4)
	});
	
	createMotifChart(($(this).text().replace(/-{0,1}[\d|\.]*\%([\w|\s]*)/g,"$1")).replace(/\s/g,""));
	// $(this).next().fadeToggle();
	$('#detail').show();
}



////////////////////////////////////////////////////////////////////////////////////////////////
//	Test Functions
////////////////////////////////////////////////////////////////////////////////////////////////

function crossDomain(url){
	$.getJSON('http://whateverorigin.org/get?url=' + 
		encodeURIComponent(url) + '&callback=?',
		function(data) {
			console.log(data);
		}
	);
}


////////////////////////////////////////////////////////////////////////////////////////////////
//	Add Motif Functions
////////////////////////////////////////////////////////////////////////////////////////////////

function combination(qs,qs_weight,t){
	
	this.quotes = qs;
	this.weight = qs_weight;
	this.title = t;
	
	if (this.quotes.length<1) return;
	// create table
	var column = 5;
	var row = Array(column+1).join("<td></td>");
	var rows = $('<tbody/>');
	for(i=0;i<this.quotes.length;i++){
		rows.append($('<tr/>',{
			'class':(i%2===1?'alt':''),
			// 'html':(row+"<td href=\"\">"+Math.round(qs_weight[i]*10)/10+"%</td><td><div><a href = \"http://finance.yahoo.com/echarts?s="+qs[i]+"\"><img src=\"http://chart.finance.yahoo.com/z?s="+qs[i]+"&t=1d&q=c&p=v\"></div></td>"),
			'html':(row+"<td href=\"\">"+Math.round(qs_weight[i]*10)/10+"%</td>"),
			'click':rowClick
		}));
	}
	this.tableID = "myTable"+tableid++;
	
	var table = $('<table/>',{
		'id':this.tableID,
		// 'html':'<thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Change %</th><th>Last Trade Time</th><th>change % after</th><th>Last Trade Time after</th><th>Weight</th></tr></thead>'
		'html':'<thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Change %</th><th>Last Trade Time</th><th>Weight</th></tr></thead>'
	});
	table.append(rows);
	$("#"+curr_table).after(table);
	$("#"+curr_table).after($('<div/>', {
		'class':'caption',
		'html':'<div>'+t+'</div>',
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
					// if(data[i].ecp) y[5].innerHTML=(data[i].ecp>0? "<red>"+data[i].ecp+"%</red>" : "<green>"+data[i].ecp+"%</green>");
					// if(typeof(data[i].elt ) !== "undefined")y[6].innerHTML=data[i].elt;
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
					"<img src='img/accordion.png' id='expand'>"+
					(weighted_changes_p >0?"<green>"+weighted_changes_p+"%</green>":"<red>"+weighted_changes_p+"%</red>")+title
				);
			}
		});
	};
	
}


////////////////////////////////////////////////////////////////////////////////////////////////
//	Timer			
////////////////////////////////////////////////////////////////////////////////////////////////

window.setInterval(function() {
	for(var i=0;i<Motifs.length;i++){
		Motifs[i].get_quotes_data();
	}
	update_INDEXs();

	// update_detail();
}, 16000);
window.setInterval(function() {
	$(".chart img").attr('src',function(){
		var img_url = $(this).attr('src');
		if (img_url.charAt(img_url.length-1) === '?'){
			return img_url.substring(0,img_url.length-1);
		}else{
			return $(this).attr('src')+"?";
		}
	});
	
	// $.ajax({
		// url: 'http://chartapi.finance.yahoo.com/instrument/1.0/'+detail_SYM+'/chartdata;type=quote;range=1d/json',
		// dataType:"jsonp",
		// success: function (data){
			// updateChart(data.series,data.meta.gmtoffset);
		// }
	// });
	
}, 15000);

////////////////////////////////////////////////////////////////////////////////////////////////
//	Update Functions
////////////////////////////////////////////////////////////////////////////////////////////////


function update_INDEXs(){
	$.ajax({
		url: "http://finance.google.com/finance/info?client=ig&q=INDEXSP:.INX,INDEXDJX:.DJI,INDEXNASDAQ:.IXIC,"+detail_SYM,
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

function update_detail(){
}

function yqlUpdate(SYM){
	var yqlURL = "http://query.yahooapis.com/v1/public/yql?q=";
	var dataFormat = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	var query = 'select * from yahoo.finance.quote where symbol in ("'+SYM+'")';
	var q;
	$.getJSON(yqlURL + encodeURIComponent(query) + dataFormat,
		function(data) {
			console.log(data);
		}
	);
}

function createMotifChart(motifName){
	var q=getMotifs(motifName)
		quote = q.quotes,
		newData=[];
	
	for (var i=0;i<quote.length;i++){
		(function(i){
			$.ajax({
				url: 'http://chartapi.finance.yahoo.com/instrument/1.0/'+quote[i]+'/chartdata;type=quote;range=1d/json',
				dataType:"jsonp",
				success: function (data){
					data ['weight'] =  q.weight[i];
					newData.push(data);
					if(i===quote.length-1) createMotifChartAjax(q.name,newData);
				}
			});
		})(i);
	}
}
// function createMotifChartAjax(quote,weight,k,motifName){

function createMotifChartAjax(motifName,newData){
	var minTimestamp = Number.MAX_VALUE,
		maxTimestamp = 0,
		maxLength = 0,
		step,i,d,time,preClose,chartData=[];
	// console.log(newData);
	for(i=0;i<newData.length;i++){
		if (newData[i].Timestamp.min<minTimestamp) minTimestamp = newData[i].Timestamp.min;
		if (newData[i].Timestamp.max>maxTimestamp) maxTimestamp = newData[i].Timestamp.max;
		if (newData[i].series.length>maxLength) maxLength = newData[i].series.length;
	}
	step = Math.round((maxTimestamp - minTimestamp)/maxLength);
	for(i=0;i<newData.length;i++){
		d = newData[i].series;
		time = minTimestamp;
		preClose = newData[i].meta.previous_close;
		// console.log(maxLength);
		for(var j=0,k=0;k<maxLength;k++){
			time+=step;
			if(d[j].Timestamp<time && j<d.length-1)j++;
			if (chartData.length<maxLength){
				chartData.push({
					open:	Math.round((d[j].open-preClose)/preClose*newData[i].weight*1000)/1000,
					close:	Math.round((d[j].close-preClose)/preClose*newData[i].weight*1000)/1000,
					high:	Math.round((d[j].high-preClose)/preClose*newData[i].weight*1000)/1000,
					low:	Math.round((d[j].low-preClose)/preClose*newData[i].weight*1000)/1000,
					volume:	d[j].volume*d[j].open,
					Timestamp:	time
				});
			}else{
				chartData[k].open	+= Math.round((d[j].open-preClose)/preClose*newData[i].weight*1000)/1000;
				chartData[k].close	+= Math.round((d[j].close-preClose)/preClose*newData[i].weight*1000)/1000;
				chartData[k].high	+= Math.round((d[j].high-preClose)/preClose*newData[i].weight*1000)/1000;
				chartData[k].low	+= Math.round((d[j].low-preClose)/preClose*newData[i].weight*1000)/1000;
				chartData[k].volume	+= (d[j].volume*newData[i].weight);
			}
			
		}
	}
	IntraDayChart(chartData,motifName,newData[0].meta.gmtoffset,0);
}
	
	
	
	



function IntraDayChart(d,companyName,gmtoffset,previous_close) {
	if(previous_close===0)detail_SYM = companyName;
	$('#detailText').text( companyName+"("+detail_SYM+")");
	var ohlc = [],
		volume = [],// split the data set into ohlc and volume
	// set the allowed units for data grouping
		groupingUnits = [
		['minute',	[1, 2, 5, 10, 15, 30]],
		['hour',	[1, 2, 3, 4, 6]],
		['day',		[1]]];
	
	for (var i=0; i < d.length; i++) {
		ohlc.push([
			(d[i].Timestamp+gmtoffset)*1000, // the date
			d[i].open, // open
			d[i].high, // high
			d[i].low, // low
			d[i].close // close
		]);
		volume.push([
			(d[i].Timestamp+gmtoffset)*1000, // the date
			d[i].volume, // the date
		]);
	}
	// create the chart
	$('#detailChart').highcharts('StockChart', {
		rangeSelector : {
			buttons : [
				{type : 'hour',count : 1,text : '1h'},
				{type : 'hour',count : 2,text : '2h'},
				{type : 'all' ,count : 1,text : 'Day'}
			],
			selected : 2,
			inputEnabled : false
		},
		yAxis: [{
			labels: { align: 'right', x: -3 },
			title: 	{ text: (previous_close===0?'%':'Price') },
			height: '75%',
			lineWidth: 2,
			plotLines : [{
				value : previous_close,
				color : 'red',
				dashStyle : 'longdash',
				width : 1
			}]
		}, {
			labels: { align: 'right', x: -3 },
			title: 	{ text: 'Volume' },
			top: '80%',
			height: '20%',
			offset: 0,
			lineWidth: 2
		}],
		series: [{
			type: 'candlestick',
			name: detail_SYM,
			data: ohlc,
			dataGrouping: {	units: groupingUnits }
		}, {
			type: 'column',
			name: 'Volume',
			data: volume,
			yAxis: 1,
			dataGrouping: { units: groupingUnits }
		}]
	});
}

function updateChart(d,gmtoffset){
	
	var ohlc = [],
		volume = [];
	
	for (var i=0; i < d.length; i++) {
		ohlc.push([
			(d[i].Timestamp+gmtoffset)*1000, // the date
			d[i].open, // open
			d[i].high, // high
			d[i].low, // low
			d[i].close, // close
		]);
		volume.push([
			(d[i].Timestamp+gmtoffset)*1000, // the date
			d[i].volume, // the volume
		]);
	}
	($('#detailChart').highcharts()).series[0].setData(ohlc);
	($('#detailChart').highcharts()).series[1].setData(volume);
	// set the allowed units for data grouping
}

