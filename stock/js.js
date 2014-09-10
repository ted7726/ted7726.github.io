var tableid=1;
var curr_table = "myTable0";

$(document).ready(function(){
	$("#submit").click(function(){
		// analysis input
		if($("#text1").val() ===""){
			var input = $("#text2").val().split("\n");
			var quotes = new Array(input.length);
			var quotes_weight = new Array(input.length);
			for(i=0;i<input.length;i++){
				var matches = input[i].split("	");
				quotes[i]=matches[0];
				quotes_weight[i]=parseInt(matches[2]);
			}
		}else{
			var quotes = $("#text1").val().split(",");
			var quotes_weight = new Array(quotes.length);
			for(i=0;i<quotes.length;i++){
				quotes_weight[i] = 100/quotes.length;
			}
		}
		Motifs.push(new combination(quotes,quotes_weight,"Custom " + tableid));
		
		
	});	
		
	$("#fold").click(function(){
		$(".datagrid table").fadeOut();
	});
	$("#unfold").click(function(){
		$(".datagrid table").fadeIn();
	});
	$("#ChinaSolar").click(function(){		getMotifs("ChinaSolar");			});
	$("#ChinaInternet").click(function(){	getMotifs("ChinaInternet");			});
	$("#RecentIPO").click(function(){		getMotifs("RecentIPO");				});
	$("#Obamacare").click(function(){		getMotifs("Obamacare");				});
	$("#PreciousMetals").click(function(){	getMotifs("PreciousMetals");		});
	$("#BigData").click(function(){			getMotifs("BigData");				});
	$("#SoftwareService").click(function(){	getMotifs("SoftwareService");		});
	$("#OnlineGamingWorld").click(function(){	getMotifs("OnlineGamingWorld");	});
	$("#CleantechEverywhere").click(function(){	getMotifs("CleantechEverywhere");	});
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



function combination(qs,qs_weight,t){
	
	this.quotes = qs;
	this.weight = qs_weight;
	this.title = t;
	
	if (this.quotes.length<1) return;
	// create table
	var column = 7;
	var row = Array(column+1).join("<td></td>")+"</tr>";
	var rows = "<tbody>";
	// var title = "<tbody><tr><td>Motif 1</td><tr></tbody>";
	for(i=0;i<this.quotes.length;i++){
		if(i%2===1) rows+="<tr>"+row;
		else 		rows+="<tr class = \"alt\">"+row;
	}
	rows += "</tbody>";
	this.tableID = "myTable"+tableid++;
	
	var table = '<table id="'+this.tableID+'"><thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Change %</th><th>Last Trade Time</th><th>change % after</th><th>Last Trade Time after</th></tr></thead>'+rows+'</table>';
	
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
					if		(updateP>weighted_changes_p){
						element_caption				.animate( {backgroundColor:'#00AA00'},50);
						element_caption.delay(100)	.animate({ backgroundColor:'#fff'});
					}else if(updateP<weighted_changes_p){
						element_caption				.animate( {backgroundColor:'#CC0000'},50);
						element_caption.delay(100)	.animate({ backgroundColor:'#fff'});
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




