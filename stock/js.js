var tableid=1;
var curr_table = "myTable0";
var Motifs = [];
var force_refresh = true;

$(document).ready(function(){
	$("#submit").click(function(){
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
	});	
	
	
	
	
	$("#fold").click(function(){
		$(".datagrid table").fadeOut();
	});
	$("#unfold").click(function(){
		$(".datagrid table").fadeIn();
	});
	$("#test").click(function(){
		
	});
	
	$("#ChinaSolar")	.click(function(){	getMotifs("ChinaSolar");			});
	$("#ChinaInternet")	.click(function(){	getMotifs("ChinaInternet");			});
	$("#RecentIPO")		.click(function(){	getMotifs("RecentIPO");				});
	$("#Obamacare")		.click(function(){	getMotifs("Obamacare");				});
	$("#PreciousMetals").click(function(){	getMotifs("PreciousMetals");		});
	$("#BigData")		.click(function(){	getMotifs("BigData");				});
	$("#WearableTech")	.click(function(){	getMotifs("WearableTech");			});
	$("#SoftwareService").click(function(){	getMotifs("SoftwareService");		});
	$("#OnlineGamingWorld")		.click(function(){	getMotifs("OnlineGamingWorld");		});
	$("#CleantechEverywhere")	.click(function(){	getMotifs("CleantechEverywhere");	});
	$("#SocialNetworking")		.click(function(){	getMotifs("SocialNetworking");		});
	$("#BearInternationalMarket").click(function(){	getMotifs("BearInternationalMarket");	});
	
	
	/* Facebook and Google+ like button: */
	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
	(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/platform.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);	})();

});



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
		rows+="<td href=\"\">"+qs_weight[i]+"%</td><td><img src=\"http://chart.finance.yahoo.com/z?s="+qs[i]+"&t=1d&p=v\"></td></tr>";
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
		var return_data = $.ajax({
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


function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if (motif === "ChinaSolar" && !this.DashBoard[motif]){
		var x = new combination(
			["CSIQ","TSL","YGE","JKS","DQ","JASO","HSOL","SOL"],
			[25.25,17.51,13.54,12.99,3.82,14.16,8.07,4.66],
			"China Solar"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "ChinaInternet" && !this.DashBoard[motif]){
		var x = new combination(
			["BIDU","QIHU","BITA","ATHM","LEJU","WUBA","SINA","SOHU","YOKU","JD","VIPS","CTRP","JMEI","QUNR","TOUR","DANG","NTES","GAME","CYOU","KZ","WB","YY","RENN","SFUN","CMCM"],
			[20.07,5.38,4.81,4.20,2.74,2.44,1.81,1.11,0.84,13.77,5.93,3.91,3.89,2.63,1.17,1.12,11.11,2.16,1.35,0.64,3.50,1.15,0.85,1.97,1.43],
			"China Internet"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "RecentIPO" && !this.DashBoard[motif]){
		var x = new combination(
			["XENT","CTLT","AAVL","OTIC","KITE","ADPT","ZFGN","TTOO","MBLY","OEC","ICD","WMS","RYI","GPRO","LOCO","MIK","SERV","FCB","HQY","GNBC","TRUP","TERP","ECR","TUBE","MRKT"],
			[4.22,4.05,3.98,3.76,3.70,3.55,3.55,3.43,5.38,4.14,3.96,3.93,3.92,5.33,4.50,4.04,3.85,3.86,3.82,3.74,3.74,4.13,3.89,3.82,3.72],
			"Recent IPO"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "Obamacare" && !this.DashBoard[motif]){
		var x = new combination(
				["UHS","HCA","LPNT","CYH","SEM","HLS","SCAI","THC","KND","ACT","TARO","IPXL","SGNT","LCI","CERN","ATHN","CPSI","QSII","MDRX","ESRX","CTRX","CNC","MOH","HMSY","EHTH"],
				[7.72,7.05,5.97,3.02,2.89,1.58,1.32,1.18,1.06,16.95,4.43,1.76,1.71,1.55,10.48,2.55,2.55,1.44,1.18,7.21,4.64,4.49,3.25,3.19,0.85],
			"Obama care"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}

	else if (motif === "PreciousMetals" && !this.DashBoard[motif]){
		var x = new combination(
			["NEM","ABX","GG","AU","GFI","KGC","GOLD","AEM","AUY","EGO","NGD","ANV","IAG","BTG","AUQ","PPP","AGI","EXK","SLW","AG","PAAS","HL","CDE","SVM","SWC"],
			[15.31,14.16,10.13,10.05,8.13,6.44,4.16,3.94,3.73,2.81,2.30,1.56,1.38,1.18,1.05,1.01,0.98,1.20,1.07,1.02,0.99,0.97,0.95,0.94,4.53],
			"Precious Metals"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}

	else if (motif === "BigData" && !this.DashBoard[motif]){
		var x = new combination(
			["SPLK","TDC","NICE","DATA","MSTR","TIBX","QLIK","DWCH","PRO","VRNT","VRNS","BIRT","CVLT","INFA","VMEM","SGI"],
			[34.53,11.38,9.96,8.07,7.58,7.36,4.29,1.63,1.17,1.16,0.94,0.87,4.85,1.81,3.35,1.08],
			"Big Data"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "SoftwareService" && !this.DashBoard[motif]){
		var x = new combination(
			["CRM","WDAY","NOW","ZEN","ULTI","CNQR","N","CSOD","SPSC","HIVE","CALD","PCTY","TRAK","MDSO","AMBR","VEEV","QTWO","LOGM","IL","CTCT","LPSN","ZIXI","QLYS","BV","DWRE"],
			[20.51,15.00,9.60,6.65,5.09,4.79,4.40,2.52,2.20,1.56,1.24,4.73,2.40,2.22,1.82,1.77,1.64,2.77,0.85,2.16,1.22,1.77,1.01,1.05,1.02],
			"Software as a Service"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "OnlineGamingWorld" && !this.DashBoard[motif]){
		var x = new combination(
			["ATVI","EA","KING","TTWO","ZNGA","GLUU","IGT","NTES","RENN","CMGE","CYOU","GAME","CMCM","YY","PWRD","MOBI","WB","FENG","SOHU","KZ"],
			[26.15,19.85,7.70,7.02,2.80,1.34,1.23,18.28,2.25,1.68,1.55,1.53,1.41,1.31,1.30,1.11,1.06,0.89,0.87,0.68],
			"Online Gaming World"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "CleantechEverywhere" && !this.DashBoard[motif]){
		var x = new combination(
			["SUNE","FSLR","SCTY","SPWR","GTAT","JASO","YGE","HSOL","TSL","TSLA","BMI","ESE","OPWR","POWR","ENOC","CREE","RBCN","RVLT","CPST","FCEL","BLDP","MXWL","ORA","PEGI","MY"],
			[8.84,6.79,6.36,3.84,1.46,1.22,1.20,0.98,0.94,21.53,6.24,5.73,4.55,1.32,1.06,10.43,1.00,0.72,1.86,1.59,1.30,0.84,5.53,3.21,1.45],
			"Cleantech Everywhere"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	else if (motif === "BearInternationalMarket" && !this.DashBoard[motif]){
		var x = new combination(
			["BZQ","EEV","EPV","FXP","EWV"],
			[30.24,21.49,19.00,16.72,12.55],
			"Bear International Market"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}

	else if (motif === "SocialNetworking" && !this.DashBoard[motif]){
		var x = new combination(
			["LNKD","TWTR","FB","WB","YOKU","RENN","YY","UNTD","YELP","ANGI","KING","IACI","JIVE","ZNGA"],	
			[20.09,18.41,16.24,9.46,5.37,2.66,1.14,0.94,13.36,0.59,9.09,0.99,0.96,0.70],
			"Social Networking"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}

	else if (motif === "WearableTech" && !this.DashBoard[motif]){
		var x = new combination(
			["GPRO","GRMN","GOOG","AAPL","ARMH","MXIM","MCHP","TXN","SLAB","STM","SMTC","INVN","ADI","SYNA","HIMX","CY","KN","QCOM","BRCM","SWKS","GLW","LPL","AUO","TNDM","PODD"],
			[13.85,12.34,12.02,11.56,3.43,3.01,3.01,3.01,2.40,1.89,1.54,3.57,3.48,3.10,2.18,2.17,1.16,3.70,3.45,2.83,1.43,1.31,0.99,1.50,1.06],
			"Wearable Tech"
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	
	
	$(".datagrid").fadeIn();
}

window.setInterval(function() {
	for(var i=0;i<Motifs.length;i++){
		Motifs[i].get_quotes_data();
	}
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







