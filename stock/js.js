$(document).ready(function(){




	
	$("#submit").click(function(){
		
		
		var input = $("#text1").val().split("\n");
		// var patt1 = new RegExp("(\w{2,4})\s*.*\s*(\d{1,2}\.\d{1,2})\%.*","g");
		
		var quotes = new Array(input.length);
		var quotes_weight = new Array(input.length);
		for(i=0;i<input.length;i++){
			var matches = input[i].split("	");
			quotes[i]=matches[0];
			quotes_weight[i]=parseFloat(matches[2]);
			
		}

		

		// console.log($("#text1").val());
		


		// var quotes = ['CSIQ','TSL','YGE', 'JKS', 'DQ',  'JASO','HSOL','SOL'];
		// CSIQ,TSL,YGE,JKS,DQ,JASO,HSOL,SOL
		// var quotes = $("#text1").val().split(",");
		if (quotes.length<1) return;
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
		$("#myTable").children("thead").after(rows);
		// $("#myTable").children("thead").after(title);
		var url = 'http://finance.google.com/finance/info?client=ig&q='+quotes[0];
		for(i=1;i<quotes.length;i++){
			url += ","+quotes[i];
		}
		
		get_quotes_data(url,quotes_weight);
		window.setInterval(function() {
			get_quotes_data(url,quotes_weight);
		}, 4000);
	});
	function get_quotes_data(url,quotes_weight){
		
		var return_data = $.ajax({
			url: url,
			dataType: "jsonp",
			success: function (data){
				console.log(data);
				var x=document.getElementById('myTable').rows;
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
					weighted_changes_p += data[i].cp*quotes_weight[i];
					
				}
				console.log(weighted_changes_p);
				$("#summary").html(weighted_changes_p >0?"<green>"+Math.round(weighted_changes_p*10)/1000+"%</green>":"<red>"+Math.round(weighted_changes_p)*10/1000+"%</red>");
				$(".datagrid").fadeIn();
				$("#summary").fadeIn();
			}
		});
		
	}
	
	
	
});
