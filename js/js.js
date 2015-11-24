// http://dev.markitondemand.com/
// global variable
var tableid=1;
var curr_table = "myTable0";
var Motifs = [];
var force_refresh = true;
var step=1;
var detail_SYM='GOOG';
var newsPage=0;
var newsPageStep =4;
var loadingNews = false;
// var newData=[];
var YAHOO = { Finance: { SymbolSuggest: {} }};
var favoriteCacheKey = "RealTimeStockMonitorCache";

 

$.ajaxSetup({
	scriptCharset: "utf-8", //maybe "ISO-8859-1"
	contentType: "application/json; charset=utf-8"
});

////////////////////////////////////////////////////////////////////////////////////////////////
//	Events Listener
////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	
	//string.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
	$('#headerSearchText').keyup(function(e){
		if(e.keyCode == 13){ addCustom(); }
		var queryString = (($('#headerSearchText').val()).replace(/.*,(\w*)/,"$1"));
		$.ajax({
			type: "GET",
			url: "http://d.yimg.com/autoc.finance.yahoo.com/autoc",
			data: {query: queryString, region: "US", lang: "en"},
			dataType: "jsonp",
			jsonp : "callback",
			jsonpCallback: "YAHOO.Finance.SymbolSuggest.ssCallback",
		});

		YAHOO.Finance.SymbolSuggest.ssCallback = function (data) {
			var queryResult = data.ResultSet.Result;
			var autoCompleteArray = []
			for(var i=0;i<queryResult.length;i++){
				autoCompleteArray[i] = queryResult[i].name + "(" + queryResult[i].symbol + ")"
			}
			$("#headerSearchText").autocomplete({
				source: autoCompleteArray
		    });
			
		}
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
	$("#cleanFavorites").click(function(){
		cleanFavorites();
	});

	
	
	$("#test").click(function(){
		console.log("use for testing!");

		// new quote("GOOG");

////////////////////////////////////////////////////////////////////////////////////////////////


		
////////////////////////////////////////////////////////////////////////////////////////////////
		
		// console.log(localStorage.abcdefg );
		// localStorage.symbols = "YHOO";
		// delete localStorage.abcdefg;
		// delete localStorage.name;
		


		
		// $(".newsContainer").animate({display:'inline-block'});
		// createMotifChart("BigData");
	});
	$("#main").click(function(){
		// $(".newsContainer").animate({display:'block'});
	});
	
	$(".list").click(function(){	addMotif(this.id);	});
	$("#testSearch").autocomplete({
		source: ["Shale Oil","Frack Attack","Finding Momo","Dr Copper","Black Gold","Big Data","Bear International Market","Bear US Market","Bear US Sectors","Shale Gas","No Glass Ceilings","Biotech Breakthroughs","Social Networking","High Spirits","Natural Gas Glut","Onward Online Ads","Drug Patent Cliffs","Office Space","Online Gaming World","Energetic MLPs","Battling Cancer","Used Car Tune up","Recycled Steel","Hot Retail","Low Beta","Tablet Takeover","Precious Metals","Repeal Obamacare","Dividend Stars","Caffeine Fix","Junk Foods","Income Inequality","Defensive Dividends","Home Improvement","Dogs of the Dow","Discount Nation","China Internet","Chinese Solar","Cleantech Everywhere","Couch Commerce","Rest In Peace","Retiring 2055","High Yield Dividends","Sell in May","Retiring 2050","New Era Portfolio","7Twelve Core Portfolio","Utility Bills","Bullet Proof Balance Sheets","Retiring 2045","All American","Classic 60 40","Retiring 2040","Nuclear Renaissance","Cash Flow Kings","Lots of Likes","Fossil Free","On The Road","Modern Warfare","Growing Dividends","Retiring 2035","Renter Nation","Digital Dollars","Ivy League","BRICS Building","Retiring 2030","Socially Responsible","Pet Passion","Online Video","No Brainer Portfolio","Higher Highs","Healthy and Tasty","Retiring 2025","Lazy 3 Portfolio","Electronic Trading","Vanity Flair","Senior Care","Disappointing the Street","Content is King","Horizon Model 5 Year Aggressive","Horizon Model 15 Year Aggressive","Horizon Model 1 Year Aggressive","Horizon Model 5 Year Moderate","Horizon Model 1 Year Moderate","Horizon Model 15 Year Moderate","Index Fans","GARP","Childs Play","Robotic Revolution","Transporting America","Small Cap Stars","Democratic Donors","World of Sports","No Brainer Portfolio","No Glass Ceilings","Nuclear Renaissance","Obamacare","Office Space","Online Gaming World","Online Video","On The Road","Onward Online Ads","Permanent Strategy","Pet Passion","Precious Metals","Private Equity","Property Casualty Insurance","QE Japan","Recent IPOs","Recycled Steel","Renter Nation","Repeal Obamacare","Republican Donors","Rest In Peace","Retiring 2020","Retiring 2025","Retiring 2030","Retiring 2035","Retiring 2040","Retiring 2045","Retiring 2050","Retiring 2055","Rising Food Prices1","Rising Interest Rates","Robotic Revolution","Senior Care","Seven Deadly Sins","Shale Gas","Shale Oil","Small Cap Stars","Smart Grid","Socially Responsible","Social Networking","Software as a Service","Spinoffs","Stable Earnings","Tablet Takeover","Taking Flight","Tax Inversion Targets","Tech Takeout Targets","That New Car Smell","Too Big to Fail","Transporting America","Used Car Tune up","US Treasury Ladder","Utility Bills","Vanity Flair","Wall Street","Water Shortage","Wearable Tech","World of Sports","CustomDrugPatentCliffs"]
    });
	
	getMarketNews();
	var favorites = getFavorites();
	for(var i=0;i<favorites.length;i++){
		new quote(favorites[i],i==(favorites.length-1));
	}
	
	/* Facebook and Google+ like button: */
	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
	(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/platform.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);	})();
	documentDidLoad();
});

////////////////////////////////////////////////////////////////////////////////////////////////
//	Favorites Stock
////////////////////////////////////////////////////////////////////////////////////////////////
function setFavorites(myFavorites){
	localStorage.setItem(favoriteCacheKey,myFavorites);
}

function getFavorites(){
	var favoriteStr = localStorage.getItem(favoriteCacheKey);
	if(favoriteStr){
		return favoriteStr.split(",");
	}else{
		favorites = [];
		setFavorites(favorites);
		return favorites;
	}
}

function addFavorites(newQuote){
	var favorites = getFavorites();
	favorites.push(newQuote);
	setFavorites(favorites);
	//screenSizeChanged();
}
function cleanFavorites(){
	setFavorites([]);
	$('.quoteContainer').css({opacity:0});
	$('.quoteContainerFake').css({opacity:0});
	$('.quoteContainer').remove();
	$('.quoteContainerFake').remove();

}
function removeFavorites(removeQuote, container){
	var favorites = getFavorites();
	var index = favorites.indexOf(removeQuote);
	console.log(index);
	if (index>-1){
		favorites.splice(index,1);
		console.log(favorites);
		setFavorites(favorites);

	}


	//container.fadeOut();
	container.css({opacity:0});
	container.next().css({opacity:0});



	for(var currentFake = container.next();(currentFake !=null && currentFake.next() !=null);currentFake = currentContainer.next()){
		var currentContainer = currentFake.next();
		if(currentContainer.offset()==null){
			break;
		}
		updateQuoteContainerOffset(currentContainer,currentFake);
	}

	//container.delay(300).hide();
	container.next().remove();
	container.remove();
	console.log(container);



	//});


}


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
	var customTitle;
	if($("#text2").val() !==""){
		var input = $("#text2").val().split("\n");
		var quotes = new Array(input.length);
		var quotes_weight = new Array(input.length);
		for(var i=0;i<input.length;i++){
			var matches = input[i].split("	");
			quotes[i]=matches[0];
			quotes_weight[i]=parseInt(matches[2]);
		}
		customTitle = ("Custom " + tableid);
	}else if($("#headerSearchText").val() !==""){
		var quotes_weight = new Array(1);	
		var quotes = new Array(1);
		var customTitle = $("#headerSearchText").val();
		quotes[0] = (customTitle).replace(/.*\((\w*)\)/,"$1");
		quotes_weight[0] = 100;
	}


	if(quotes){
		Motifs.push(new combination(quotes,quotes_weight,customTitle));
		new quote(quotes,true);
		addFavorites(quotes);
		
	}
	$("#headerSearchText").val("");
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

function quote(tick,isUpdatingQuotes){
	this.tick = tick;

	this.quoteContainerFake = jQuery('<div/>', {
		class: 'quoteContainerFake'
	});

	this.quoteContainer = jQuery('<div/>', {
		class: 'quoteContainer',
		click: function(){
			console.log('quoteClick' + tick);
		}
	});
	var quoteContainerFake	= this.quoteContainerFake;
	var quoteContainer		= this.quoteContainer;


	var header                 = jQuery('<div/>', {class: 'quoteTitle', text: tick});
	this.quoteName             = jQuery('<div/>', {class: 'quoteName'});
	this.quoteLastTradeTime	   = jQuery('<div/>', {class: 'quoteLastTradeTime'});
	this.price                 = jQuery('<div/>', {class: 'quotePrice'});
	this.priceChange           = jQuery('<div/>', {class: 'quotePriceChange'});
	this.priceChangePercentage = jQuery('<div/>', {class: 'priceChangePercentage'});

	this.close				   = jQuery('<img/>', {class: 'quoteClose', src: 'img/close.png',
		click: function(){
			console.log('quote remove' + tick);

			removeFavorites(tick, quoteContainer);

		}
	});

	var chart = jQuery('<canvas/>', {
		href: "http://finance.yahoo.com/echarts?s="+tick
	});
	

	quoteContainer.prepend(this.close);
	quoteContainer.prepend(chart);

	quoteContainer.prepend(this.priceChangePercentage);
	quoteContainer.prepend(this.priceChange);
	quoteContainer.prepend(this.price);
	quoteContainer.prepend('<br>');
	//quoteContainer.prepend(this.quoteLastTradeTime);
	quoteContainer.prepend(this.quoteName);
	quoteContainer.prepend(header);
	//console.log("height: "+quoteContainer.innerHeight());

	quoteContainer.appendTo('#myTable0');
	quoteContainerFake.appendTo('#myTable0');

	

	this.loadQuote = function(){
		
		var yahoo_url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+this.tick+"%22)%0A%09%09&env=http://datatables.org/alltables.env&format=json";
		var price 					= this.price;
		var priceChange 			= this.priceChange;
		var priceChangePercentage 	= this.priceChangePercentage;
		var quoteLastTradeTime		= this.quoteLastTradeTime;
		var quoteContainer 			= this.quoteContainer;
		var tick 					= this.tick;
		var quoteName 				= this.quoteName;
		
		$.ajax({
			url: yahoo_url,
			dataType: "jsonp",
			success: function (data){
				var quote = data.query.results.quote;

				if(quote == null || quote.Name == null){
					this.quoteContainer.remove();
					this.quoteContainerFake.remove();
					return;
				}

				if(parseFloat(quote.LastTradePriceOnly)>10){
					quote.Change = Math.round(parseFloat(quote.Change)*100)/100;
					quote.LastTradePriceOnly = Math.round(parseFloat(quote.LastTradePriceOnly)*100)/100;
				}
				//console.log(quote);
				//console.log(parseFloat(quote.Change));
				var priceColor = (parseFloat(quote.Change)<0?'red':'green');

				price.text(quote.LastTradePriceOnly);
				priceChange.text(quote.Change);
				priceChange.css({color:priceColor});
				priceChangePercentage.text("("+Math.round(parseFloat(quote.ChangeinPercent)*100)/100+"%)");
				priceChangePercentage.css({color:priceColor});
				quoteLastTradeTime.text(quote.LastTradeTime);


				quoteName.text(quote.Name);
				//console.log(quote);
				quoteContainer.animate({opacity: 1}, 400);
			},
			error:function(){
				loadQuoteFaileHandler(this);
			}

		});
	}
	this.loadQuote();
	loadBasicChart(tick,chart,isUpdatingQuotes);
}

function updateQuoteContainerOffset(quoteContainer,quoteContainerFake){
	quoteContainer.css({
			top:quoteContainerFake.offset().top-10,
			left:quoteContainerFake.offset().left-10}
	);
	quoteContainerFake.height(quoteContainer.height());

}

function loadQuoteFaileHandler(quoteContainer){
	var google_url = "http://finance.google.com/finance/info?client=ig&q="+ quoteContainer.tick;
	$.ajax({
		url: google_url,
		dataType: "jsonp",
		success: function (data){
			var quote = data[0];
			console.log("google");
			if(quote == null){
				return;
			}
			quoteContainer.price.text(quote.l);
			quoteContainer.priceChange.text(quote.c);
			quoteContainer.priceChangePercentage.text(quote.cp);
		}
	});
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
}, 5000);
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

var lastScroll = 0;
var navShown = false;
var navAnimating = false;
$(window).scroll(function(handler){
	var scroll = $(window).scrollTop();
	var delta = scroll-lastScroll;
	var height = $('body').outerHeight();
	var screenHeight = window.innerHeight;

	if(scroll > height*0.9 - screenHeight ){
		getMarketNews();
		console.log("end of table", scroll, height, screenHeight);
	}
	if(scroll< 400){
		searchHeaderPosition(scroll);
	}else{
		searchHeaderPosition(400);
	}
});

function searchHeaderPosition(scroll){
	$('#searchContainer').animate({
		top:120-scroll/2
	},0);
	$('#headerSearchBackGroundImage').css({
		'background-position': 'center '+(-scroll/2-80)+'px'
	});
	$('#headerSearch').css({
		background: 'rgba(48,48,48,'+(0.75*(1-scroll/240))+')'
	});
	$('#headerSearchBackGroundImage').css({
		opacity:(1-scroll/240)
	});
}

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
	screenSizeChanged();
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

function loadBasicChart(tick,c,isUpdatingQuotesGrid){
	var options = {
        animation: false,
        pointDot: false,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: false,
		// pointDotStrokeWidth : 0.1,

		// pointDotRadius : 0.5,
        bezierCurve : true,
        bezierCurveTension : 0.3,
	    pointHitDetectionRadius : 0.3,
	    showScale:true,
	    scaleShowLabels:false,
	    scaleLineColor: "#FFFFFF",
		scaleFontSize: 11,



	    // scaleSteps:5,
	    // scaleLineWidth:0

    };
    /*************************************************************************/

	var ct = c.get(0).getContext('2d');
    var gradient = ct.createLinearGradient(0, 0, 0,200);
    // gradient.addColorStop(0, 'rgba(131,167,185,1.0)');
    gradient.addColorStop(0, 'rgba(90, 175, 245,0.9)');

    gradient.addColorStop(1, 'rgba(255,255,255,0.0)');

	

	$.ajax({
		url: 'http://chartapi.finance.yahoo.com/instrument/1.0/'+tick+'/chartdata;type=quote;range=1d/json',
		dataType:"jsonp",
		success: function (data){
			var series = data.series;
			var previous_close = data.meta.previous_close;
			var chartReferenceData = [];
			var chartData = [];
			var chartXLabels = [];
			var step = (series[series.length-1].Timestamp- series[0].Timestamp)/series.length;
			var i=0;
			var d = new Date((series[0].Timestamp - data.meta.gmtoffset)*1000);
			var currentHour;

			console.log(series);
	
			for(;i<series.length;i=i+1){
				chartData.push(series[i].close);
				d.setTime((series[i].Timestamp - data.meta.gmtoffset)*1000);
				if(d.getHours()%2==0 && d.getHours()!= currentHour){
					currentHour = d.getHours();
					chartXLabels.push(calculateHoursPmAm(currentHour));
				}else{
					chartXLabels.push("");
				}
				chartReferenceData.push(previous_close);
			}

			while(d.getTime()<(data.Timestamp.max - data.meta.gmtoffset)*1000){
				d.setTime(d.getTime()+step*1000);
				currentHour = d.getHours();
				chartXLabels.push("");
				chartReferenceData.push(previous_close);
			}
			
			var data = {
			    labels: chartXLabels,
			    datasets: [
			    	{
			            label: tick,
			            fillColor: "rgba(255,255,255,0)",
			            strokeColor: "rgba(212, 106, 106,0.7)",
			            data: chartReferenceData
			        },
			        {
			            label: tick,
			            fillColor: gradient,
			            strokeColor: "rgba(111,147,165,1.0)",
			            data: chartData
			        }
			        
			    ]
			};
			var myLineChart = new Chart(ct).Line(data, options);


			//quoteContainerFake.height(quoteContainer.height());

			updateQuoteContainerOffset(c.parent(),c.parent().next());

			//if(isUpdatingQuotesGrid){
			//	screenSizeChanged();
			//}
		}
	});
}



function documentDidLoad(){
	screenSizeChanged();
}
// screen size changed
$( window ).resize(function() {
	screenSizeChanged();
	
  // $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
});

function screenSizeChanged(){
	// $('#headerSearchBackGroundImage').css({
	// 	'background-size':$('#header').innerWidth()
	// });
	// var mainWidth = $('#main').innerWidth();
	// var containerWidth = $('.newsContainer').outerWidth();
	// console.log(containerWidth);

	// if(  680 < mainWidth && containerWidth < 640){
	// 	$('.newsContainer').stop().animate({width:640},100);
	// }else if( containerWidth > 400){
	// 	$('.newsContainer').stop().animate({width:400},100);
	// }
	$( ".quoteContainer" ).each(function( index ) {
		updateQuoteContainerOffset($(this),$(this).next());
	});

}

function getMarketNews(){
	if(loadingNews){
		return;
	}
	loadingNews = true;
	var quoteKeywords = ["market_news","Yahoo finance"];

	for(var i=0;i<quoteKeywords.length;i++){
		var keywords = quoteKeywords[i];
		console.log("http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q="+keywords+"&");
		getNews("http://ajax.googleapis.com/ajax/services/search/news?v=1.0&q="+keywords+"&");

	}
	newsPage = newsPage + 1;

}
////////////////////////////////////////////////////////////////////////////////////////////////
//	Load Finance News
////////////////////////////////////////////////////////////////////////////////////////////////

function getNews(news_url){

    $.ajax({
    url: news_url +"start=" + newsPage*newsPageStep,
    dataType: 'jsonp',
    success: function(data) {
    	if(data["responseData"] == null){
    		return;
    	}
    	var articles = data["responseData"]["results"];
    	console.log(articles);
    	var pages = data["responseData"]["cursor"]["pages"];
    	
    	newsPageStep = articles.length;
    	for(var i=0;i<articles.length;i++){
    		var article = articles[i];
    		var hasImage = (article["image"] != null);
    		var container = jQuery('<a/>', {
				id: 'newsContainer',
				class: 'newsContainer',
				href: article["unescapedUrl"]
			});
			
    		var title = jQuery('<div/>', {
				id: 'news',
				title: article["title"],
				class: (hasImage?'newsImageTitle':'newsTitle'),
				html: replaceBold(article["title"])
			});

			var publisher = jQuery('<div/>', {
				id: 'publisher',
				class: (hasImage?'newsImagePublisher':'newsPublisher'),
				text: article["publisher"]
			});
			

			var content = jQuery('<div/>', {
				id: 'content',
				class: 'newsContent',
				html: replaceBold(article["content"])
			});
			var timeago = (jQuery.timeago(article["publishedDate"]));
			var date = jQuery('<div/>', {
				id: 'date',
				class: 'newsDate',
				html: timeago
			});
			container.prepend(content);
			container.prepend(date);
			if(hasImage){
				var contentContainer = jQuery('<div/>', {
					id: 'titleContainer',
					class: 'newsTitleContainer'
				});
				contentContainer.prepend(title);
				contentContainer.prepend(publisher);
				container.prepend(contentContainer);
			}else{
				container.prepend(publisher);
				container.prepend(title);
			}
			
			

			if (hasImage){
				var imageMask = jQuery('<img/>', {
					id: 'image',
					class: 'newsImageMask',
					src: article["image"]["url"]
				});
				
				
				var image = jQuery('<img/>', {
					id: 'image',
					class: 'newsImage',
					src: article["image"]["url"]
				});
				container.prepend(image);
				container.prepend(imageMask);
			}
    		container.appendTo('#news0');
    		
    		if(hasImage){
    			date.css({'text-align':'left'});
    			var titleOffset = - title.outerHeight() - publisher.outerHeight();
    			contentContainer.css({top:titleOffset});
    			
    			
    		}
    		container.animate({opacity: 1,}, 400);

    	}
		
    	loadingNews = false;
    }
  });

}
function calculateHoursPmAm(hour){
	if (hour ==12){
		return hour+"pm";
	}else if (hour >12){
		return (hour-12)+"pm";
	}else{
		return hour+"am";
	}

}
function replaceBold(str){
	return str.replace(/\<b\>/g,"").replace(/\<\/b\>/g,"");
}

