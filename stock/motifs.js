function getMotifs(motif){
	if (motif === "ChinaSolar"){
		combination(
			["CSIQ","TSL","YGE","JKS","DQ","JASO","HSOL","SOL"],
			[25.25,17.51,13.54,12.99,3.82,14.16,8.07,4.66],
			"China Solar"
		);
	}
	
	else if (motif === "ChinaInternet"){
		combination(
			["BIDU","QIHU","BITA","ATHM","LEJU","WUBA","SINA","SOHU","YOKU","JD","VIPS","CTRP","JMEI","QUNR","TOUR","DANG","NTES","GAME","CYOU","KZ","WB","YY","RENN","SFUN","CMCM"],
			[20.07,5.38,4.81,4.20,2.74,2.44,1.81,1.11,0.84,13.77,5.93,3.91,3.89,2.63,1.17,1.12,11.11,2.16,1.35,0.64,3.50,1.15,0.85,1.97,1.43],
			"China Internet"
		);
	}
	
	$(".datagrid").fadeIn();
}


