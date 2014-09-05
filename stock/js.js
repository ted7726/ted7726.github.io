$(document).ready(function(){




	
	$("#submit").click(function(){
		var quotes = ['CSIQ','TSL','YGE', 'JKS', 'DQ',  'JASO','HSOL','SOL'];
		if (quotes.length<1) return;
		// create table
		var column = 7;
		var row = Array(column+1).join("<td></td>")+"</tr>";
		var rows = "<tbody>";
		for(i=0;i<quotes.length;i++){
			 
			if(i%2===1) rows+="<tr>"+row;
			else 		rows+="<tr class = \"alt\">"+row;
		}
		$("#myTable").children("thead").after(rows);
		var url = 'http://finance.google.com/finance/info?client=ig&q='+quotes[0];
		for(i=1;i<quotes.length;i++){
			url += ","+quotes[i];
		}
		$(".datagrid").fadeIn();
		get_quotes_data(url);
		window.setInterval(function() {
			get_quotes_data(url);
		}, 5000);
	});
	function get_quotes_data(url){
		
		var return_data = $.ajax({
			url: url,
			dataType: "jsonp",
			success: function (data){
				console.log(data);
				var x=document.getElementById('myTable').rows;
				for(i=0;i<data.length;i++){
					y=x[i+1].cells;
					
					y[0].innerHTML=data[i].t;
					y[1].innerHTML=data[i].l;
					y[2].innerHTML=(data[i].c>0? "<red>"+data[i].c+"</red>" : "<green>"+data[i].c+"</green>");
					y[3].innerHTML=(data[i].cp>0? "<red>"+data[i].cp+"%</red>" : "<green>"+data[i].cp+"%</green>");
					y[4].innerHTML=data[i].lt;
					if(typeof(data[i].ecp ) !== "undefined") y[5].innerHTML=(data[i].ecp>0? "<red>"+data[i].ecp+"%</red>" : "<green>"+data[i].ecp+"%</green>");
					if(typeof(data[i].elt ) !== "undefined")y[6].innerHTML=data[i].elt;
				}
			}
		});
	}
	
	
	
});