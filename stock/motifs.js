var Motifs = []
function getMotifs(motif){
	
	if (motif === "ChinaSolar"){
		var x = new combination(
			["CSIQ","TSL","YGE","JKS","DQ","JASO","HSOL","SOL"],
			[25.25,17.51,13.54,12.99,3.82,14.16,8.07,4.66],
			"China Solar"
		);
		Motifs.push(x);
	}
	
	else if (motif === "ChinaInternet"){
		var x = new combination(
			["BIDU","QIHU","BITA","ATHM","LEJU","WUBA","SINA","SOHU","YOKU","JD","VIPS","CTRP","JMEI","QUNR","TOUR","DANG","NTES","GAME","CYOU","KZ","WB","YY","RENN","SFUN","CMCM"],
			[20.07,5.38,4.81,4.20,2.74,2.44,1.81,1.11,0.84,13.77,5.93,3.91,3.89,2.63,1.17,1.12,11.11,2.16,1.35,0.64,3.50,1.15,0.85,1.97,1.43],
			"China Internet"
		);
		Motifs.push(x);
	}
	
	
	else if (motif === "RecentIPO"){
		var x = new combination(
			["XENT","CTLT","AAVL","OTIC","KITE","ADPT","ZFGN","TTOO","MBLY","OEC","ICD","WMS","RYI","GPRO","LOCO","MIK","SERV","FCB","HQY","GNBC","TRUP","TERP","ECR","TUBE","MRKT"],
			[4.22,4.05,3.98,3.76,3.70,3.55,3.55,3.43,5.38,4.14,3.96,3.93,3.92,5.33,4.50,4.04,3.85,3.86,3.82,3.74,3.74,4.13,3.89,3.82,3.72],
			"Recent IPO"
		);
		Motifs.push(x);
	}
	
	else if (motif === "Obamacare"){
		var x = new combination(
				["UHS","HCA","LPNT","CYH","SEM","HLS","SCAI","THC","KND","ACT","TARO","IPXL","SGNT","LCI","CERN","ATHN","CPSI","QSII","MDRX","ESRX","CTRX","CNC","MOH","HMSY","EHTH"],
				[7.72,7.05,5.97,3.02,2.89,1.58,1.32,1.18,1.06,16.95,4.43,1.76,1.71,1.55,10.48,2.55,2.55,1.44,1.18,7.21,4.64,4.49,3.25,3.19,0.85],
			"Obama care"
		);
		Motifs.push(x);
	}
	else if (motif === "PreciousMetals"){
		var x = new combination(
			["NEM","ABX","GG","AU","GFI","KGC","GOLD","AEM","AUY","EGO","NGD","ANV","IAG","BTG","AUQ","PPP","AGI","EXK","SLW","AG","PAAS","HL","CDE","SVM","SWC"],
			[15.31,14.16,10.13,10.05,8.13,6.44,4.16,3.94,3.73,2.81,2.30,1.56,1.38,1.18,1.05,1.01,0.98,1.20,1.07,1.02,0.99,0.97,0.95,0.94,4.53],
			"Precious Metals"
		);
		Motifs.push(x);
	}
	else if (motif === "BigData"){
		var x = new combination(
			["SPLK","TDC","NICE","DATA","MSTR","TIBX","QLIK","DWCH","PRO","VRNT","VRNS","BIRT","CVLT","INFA","VMEM","SGI"],
			[34.53,11.38,9.96,8.07,7.58,7.36,4.29,1.63,1.17,1.16,0.94,0.87,4.85,1.81,3.35,1.08],
			"Big Data"
		);
		Motifs.push(x);
	}
	
	else if (motif === "SoftwareService"){
		var x = new combination(
			["CRM","WDAY","NOW","ZEN","ULTI","CNQR","N","CSOD","SPSC","HIVE","CALD","PCTY","TRAK","MDSO","AMBR","VEEV","QTWO","LOGM","IL","CTCT","LPSN","ZIXI","QLYS","BV","DWRE"],
			[20.51,15.00,9.60,6.65,5.09,4.79,4.40,2.52,2.20,1.56,1.24,4.73,2.40,2.22,1.82,1.77,1.64,2.77,0.85,2.16,1.22,1.77,1.01,1.05,1.02],
			"Software as a Service"
		);
		Motifs.push(x);
	}
	
	else if (motif === "OnlineGamingWorld"){
		var x = new combination(
			["ATVI","EA","KING","TTWO","ZNGA","GLUU","IGT","NTES","RENN","CMGE","CYOU","GAME","CMCM","YY","PWRD","MOBI","WB","FENG","SOHU","KZ"],
			[26.15,19.85,7.70,7.02,2.80,1.34,1.23,18.28,2.25,1.68,1.55,1.53,1.41,1.31,1.30,1.11,1.06,0.89,0.87,0.68],
			"Online Gaming World"
		);
		Motifs.push(x);
	}
	
	else if (motif === "CleantechEverywhere"){
		var x = new combination(
			["SUNE","FSLR","SCTY","SPWR","GTAT","JASO","YGE","HSOL","TSL","TSLA","BMI","ESE","OPWR","POWR","ENOC","CREE","RBCN","RVLT","CPST","FCEL","BLDP","MXWL","ORA","PEGI","MY"],
			[8.84,6.79,6.36,3.84,1.46,1.22,1.20,0.98,0.94,21.53,6.24,5.73,4.55,1.32,1.06,10.43,1.00,0.72,1.86,1.59,1.30,0.84,5.53,3.21,1.45],
			"Cleantech Everywhere"
		);
		Motifs.push(x);
	}
	

	
	
	
	
	
	
	
	$(".datagrid").fadeIn();
}



window.setInterval(function() {
	for(var i=0;i<Motifs.length;i++){
		Motifs[i].get_quotes_data();
	}
}, 2000);

