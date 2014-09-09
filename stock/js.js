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
		combination(quotes,quotes_weight,"Customized" + tableid);
		
		
	});	
		
	$("#submit2").click(function(){
		$(".datagrid table thead,tbody").fadeToggle();
	});
	
	$("#ChinaSolar").click(function(){
		getMotifs("ChinaSolar");
		
	});
	
	$("#ChinaInternet").click(function(){
		getMotifs("ChinaInternet");
		
	});
	
	
	
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
	for(i=0;i<quotes.length;i++){
		if(i%2===1) rows+="<tr>"+row;
		else 		rows+="<tr class = \"alt\">"+row;
	}
	rows += "</tbody>";
	this.tableID = "myTable"+tableid++;
	var table = '<div class="title">'+t+'</div><table id="'+this.tableID+'"><thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Change %</th><th>Last Trade Time</th><th>change % after</th><th>Last Trade Time after</th></tr></thead>'+rows+'</table>';
	
	$("#"+curr_table).after(table);
	curr_table = this.tableID;
	this.url = 'http://finance.google.com/finance/info?client=ig&q='+quotes[0];
	for(i=1;i<quotes.length;i++){
		this.url += ","+quotes[i];
	}
	
	get_quotes_data();
	window.setInterval(function() {
		get_quotes_data();
	}, 3000);
	
	
	this.get_quotes_data = function(){
		var tID = this.tableID;
		var wt = this.weight;
		var title = this.title;
		var return_data = $.ajax({
			url: this.url,
			dataType: "jsonp",
			success: function (data){
				console.log(data);
				var x=document.getElementById(tID).rows;
				var weighted_changes_p=0;
				for(i=0;i<data.length;i++){
					y=x[i+1].cells;
					
					y[0].innerHTML=data[i].t;
					y[1].innerHTML=data[i].l;
					y[2].innerHTML=(data[i].c>0? "<red>"+data[i].c+"</red>" : "<green>"+data[i].c+"</green>");
					y[3].innerHTML=(data[i].cp>0? "<red>"+data[i].cp+"%</red>" : "<green>"+data[i].cp+"%</green>");
					y[4].innerHTML=data[i].lt;
					if(typeof(data[i].ecp ) !== "undefined") y[5].innerHTML=(data[i].ecp>0? "<red>"+data[i].ecp+"%</red>" : "<green>"+data[i].ecp+"%</green>");
					if(typeof(data[i].elt ) !== "undefined")y[6].innerHTML=data[i].elt;
					// console.log(wt[i]);
					weighted_changes_p += data[i].cp*wt[i];
				}
				// console.log(weighted_changes_p);
				$("#"+tID).prev().html(
					(weighted_changes_p >0?"<green>"+Math.round(weighted_changes_p*10)/1000+"%</green>":"<red>"+Math.round(weighted_changes_p)*10/1000+"%</red>")+title
				);
				
				
			}
		});
	};
	
}


function get_quotes_data(url,quotes_weight){
	
	
}