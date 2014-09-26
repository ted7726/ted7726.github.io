function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'CWEI', 'AXAS', 'FANG', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.45, 7.85, 6.06, 5.27, 3.98, 1.35, 1.03, 0.85, 15.48, 6.79, 3.72, 1.49, 1.01, 1.0, 1.0, 0.99, 0.95, 0.94, 4.88, 3.22, 3.92, 1.85, 1.0, 0.92, 1.0],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'RES', 'CAM', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.58, 8.26, 5.82, 5.24, 5.17, 4.67, 4.67, 2.68, 1.17, 0.87, 0.65, 0.61, 10.66, 6.92, 2.07, 0.98, 0.93, 7.57, 2.94, 2.55, 1.03, 0.98, 3.78, 2.19, 1.0],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'AA', 'SLCA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'AKRX', 'Z'],
			"weight":[7.82, 5.35, 4.68, 2.65, 1.68, 5.11, 3.53, 3.1, 2.9, 2.7, 7.21, 4.75, 2.85, 2.34, 6.14, 6.03, 2.28, 5.82, 3.35, 3.53, 3.25, 4.21, 2.16, 3.33, 3.21],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.42, 21.03, 20.12, 14.03, 9.91, 6.03, 3.21, 1.26],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'SNP', 'IMO', 'BP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[17.95, 11.96, 10.23, 8.2, 6.42, 4.72, 4.27, 4.27, 4.19, 3.67, 3.16, 2.74, 2.34, 2.3, 1.72, 1.31, 1.3, 1.24, 1.04, 0.98, 1.57, 1.39, 0.55, 1.49, 0.99],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[24.92, 14.16, 12.36, 11.07, 9.85, 2.61, 2.37, 1.64, 1.57, 1.48, 1.46, 6.05, 1.78, 4.65, 3.04, 1.01],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[32.04, 21.5, 18.13, 16.93, 11.4],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[19.72, 19.25, 17.03, 23.63, 20.37],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.2, 20.01, 34.91, 20.88],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'MHR', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'XCO', 'CRK', 'FST', 'GDP', 'ROSE', 'SFY', 'SM'],
			"weight":[16.38, 12.62, 9.21, 4.47, 4.16, 3.57, 2.38, 1.05, 1.03, 1.03, 0.97, 0.92, 14.35, 0.83, 14.14, 4.22, 0.96, 1.04, 0.96, 0.94, 0.93, 0.79, 1.03, 1.03, 0.97],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.99, 6.09, 5.56, 4.92, 2.96, 1.36, 0.96, 14.88, 4.82, 2.22, 1.72, 1.17, 0.99, 7.02, 4.82, 3.52, 1.41, 6.47, 2.56, 0.97, 2.4, 1.47, 1.57, 1.27, 0.87],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'SGEN', 'IMGN', 'CRIS', 'GILD', 'CBST', 'EBS', 'ALXN', 'VRTX', 'REGN', 'UTHR', 'ACOR', 'LGND', 'MDCO', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.04, 11.16, 0.94, 0.94, 0.8, 19.71, 2.34, 0.88, 4.28, 4.24, 4.14, 2.19, 1.11, 0.95, 0.92, 9.27, 3.62, 2.46, 0.79, 4.25, 2.68, 2.39, 1.08, 0.93, 0.9],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[24.07, 21.16, 13.37, 6.87, 1.68, 1.39, 1.34, 0.9, 14.82, 2.09, 8.17, 1.49, 1.35, 1.3],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.96, 19.07, 14.12, 2.89, 1.4, 18.63, 14.96, 5.16, 3.81],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'NEU', 'WLK', 'EMN', 'MEOH', 'HUN', 'CE', 'POL', 'GRA', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'CVI', 'ALJ', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[13.6, 12.93, 8.28, 3.1, 3.06, 1.03, 1.03, 1.01, 1.01, 1.0, 0.99, 0.96, 8.99, 6.41, 6.23, 3.06, 2.26, 1.24, 0.98, 0.92, 0.92, 0.92, 16.07, 3.15, 0.85],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'MWW', 'Z', 'DHX', 'ZPIN', 'EVDY', 'WBMD', 'TRUE', 'RUBI', 'MKTO', 'FUEL', 'CRTO', 'CTCT', 'SCOR', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.5, 21.86, 4.87, 12.17, 5.44, 2.72, 6.85, 2.41, 1.02, 1.01, 1.0, 0.96, 0.93, 0.92, 0.86, 1.29, 1.02, 1.02, 1.02, 1.0, 1.0, 0.94, 2.2, 1.0, 0.97],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'RDY', 'HSP', 'TARO', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.65, 20.48, 17.3, 10.32, 9.72, 9.6, 4.17, 2.7, 2.31, 1.77],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'TCO', 'EQY', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.94, 6.17, 6.12, 4.58, 3.75, 1.36, 1.02, 13.28, 4.77, 4.75, 3.58, 1.91, 7.44, 6.28, 1.69, 1.07, 5.3, 4.73, 2.48, 1.01, 4.25, 3.01, 1.0, 1.42, 1.11],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[23.36, 19.85, 10.91, 6.92, 4.87, 1.13, 17.54, 3.1, 2.28, 1.79, 1.65, 1.03, 1.0, 0.99, 0.98, 0.9, 0.88, 0.82],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EEP', 'EPD', 'SMLP', 'WES', 'OKS', 'TCP', 'ETP', 'SXE', 'MMP', 'AMID', 'BPL', 'EPB', 'ENLK', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.05, 6.75, 6.18, 6.15, 5.29, 4.47, 4.47, 4.44, 4.01, 3.58, 3.25, 3.24, 3.15, 2.94, 2.86, 2.73, 2.67, 2.61, 2.31, 2.14, 4.66, 4.62, 4.22, 4.12, 2.11],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'SNSS', 'EPZM', 'TSRO', 'PGNX', 'DYAX', 'IMMU', 'VSTM', 'MGNX', 'NLNK', 'THLD', 'CLDX', 'CRIS', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[25.19, 6.59, 5.96, 4.48, 1.69, 25.23, 2.81, 2.35, 1.84, 1.76, 1.71, 1.46, 1.42, 1.31, 1.16, 1.03, 1.02, 0.98, 0.96, 0.94, 0.87, 3.51, 2.58, 2.24, 0.9],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'LAD', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.82, 17.28, 14.55, 10.05, 7.34, 0.95, 9.72, 5.81, 2.48, 1.03, 0.99, 0.9, 2.62, 1.6, 0.87, 2.92, 1.08],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.12, 15.67, 11.78, 14.94, 13.79, 6.78, 3.95, 0.99, 4.98, 0.99],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'RL', 'VFC', 'NKE', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.63, 5.16, 5.0, 4.76, 4.44, 3.17, 2.37, 2.24, 1.78, 5.91, 5.7, 4.24, 3.73, 3.52, 2.31, 1.46, 12.17, 6.0, 5.31, 1.25, 4.76, 1.81, 1.41, 2.85, 2.01],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['DUK', 'EDE', 'ED', 'AWK', 'CMS', 'LG', 'XEL', 'SO', 'DTE', 'PPL', 'D', 'NWN', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'MCD', 'K', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.13, 4.1, 4.09, 4.07, 4.03, 4.0, 3.99, 3.99, 3.98, 3.88, 3.86, 3.85, 3.76, 4.49, 4.32, 4.19, 4.14, 3.96, 3.87, 3.75, 3.67, 3.67, 4.33, 4.1, 3.81],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'NVDA', 'ATML', 'CRUS', 'FCS', 'SIMO', 'STM', 'INVN', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.78, 9.42, 8.46, 4.63, 1.48, 1.03, 1.0, 0.99, 0.95, 0.94, 0.93, 0.92, 0.91, 0.91, 0.87, 24.58, 1.03, 0.97, 14.61, 9.55, 1.03],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.7, 8.73, 5.77, 5.46, 4.4, 3.07, 2.09, 14.94, 8.76, 5.1, 3.64, 1.56, 1.39, 1.09, 6.72, 3.09, 0.57, 0.27, 4.42, 1.24],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.11, 14.49, 9.59, 5.81, 3.43, 2.67, 2.43, 1.45, 1.42, 1.34, 1.06, 0.84, 0.78, 6.54, 5.97, 2.65, 1.06, 1.0, 0.98, 0.94, 0.93, 7.2, 2.29, 1.01, 1.01],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'CLX', 'OMC', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'D', 'OKE', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[10.03, 6.77, 6.36, 5.64, 5.56, 4.95, 4.77, 2.46, 1.01, 4.39, 4.08, 4.03, 3.92, 3.28, 2.38, 2.21, 1.03, 0.98, 4.42, 3.19, 2.5, 5.89, 5.82, 3.33, 1.01],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.54, 13.22, 12.25, 4.35, 3.45, 1.7, 1.26, 0.81, 11.75, 6.84, 4.59, 0.87, 21.37],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'DPZ', 'WEN', 'SONC', 'TAST', 'DNKN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'TR', 'KRFT', 'FRSH', 'DMND', 'UL'],
			"weight":[20.87, 20.07, 3.13, 2.14, 17.44, 4.36, 1.61, 1.1, 1.06, 1.04, 1.03, 1.02, 1.0, 0.94, 0.93, 0.91, 0.8, 11.09, 3.83, 1.0, 0.96, 0.95, 0.94, 0.84, 0.94],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BURL', 'BIG', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'CHS', 'TFM', 'MOV', 'BID'],
			"weight":[25.32, 8.06, 6.36, 6.04, 2.52, 1.23, 1.11, 1.09, 1.0, 1.0, 0.95, 0.79, 12.29, 7.64, 5.54, 4.83, 3.9, 2.01, 1.65, 1.51, 1.3, 0.99, 0.99, 0.94, 0.93],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'TXN', 'MXIM', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.52, 5.17, 4.91, 3.48, 3.3, 2.93, 5.35, 4.2, 4.11, 3.73, 2.76, 2.75, 5.63, 4.95, 3.06, 3.0, 2.04, 6.84, 3.89, 5.26, 1.58, 1.0, 5.9, 5.32, 3.3],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'KIRK', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[32.46, 27.83, 3.13, 3.03, 7.13, 5.27, 3.7, 1.72, 1.62, 1.3, 1.14, 4.79, 3.03, 0.62, 3.24],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'MRK', 'PFE', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[11.97, 9.69, 10.09, 10.05, 9.92, 9.89, 10.42, 9.23, 9.53, 9.21],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'CATO', 'TUES', 'DSW', 'CTRN', 'DLTR', 'DG', 'FIVE', 'FRED', 'BIG', 'SVU', 'VIPS', 'GRPN', 'ZU', 'OSTK', 'SALE', 'COUP'],
			"weight":[16.8, 11.51, 1.1, 0.78, 21.41, 0.98, 14.33, 3.31, 1.04, 1.04, 1.02, 0.93, 6.45, 5.71, 0.99, 0.99, 0.98, 0.96, 3.98, 1.6, 1.4, 0.98, 0.96, 0.77],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'TOUR', 'DANG', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[20.23, 5.12, 3.75, 3.65, 3.32, 2.6, 1.95, 1.28, 0.9, 0.89, 11.07, 7.54, 4.27, 3.66, 1.85, 1.01, 1.0, 10.95, 1.48, 1.01, 5.62, 2.11, 1.75, 1.53, 1.44],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.11, 19.81, 14.11, 13.17, 4.32, 15.22, 7.33, 4.94],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'HSOL', 'TSL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.41, 7.12, 6.65, 6.29, 2.05, 1.84, 1.49, 1.3, 1.01, 1.0, 5.66, 5.35, 4.46, 2.16, 0.93, 14.84, 12.91, 0.81, 2.15, 1.83, 1.43, 1.07, 5.59, 3.56, 1.11],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'NILE', 'FTD', 'SFLY', 'LITB', 'EHTH', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'OSTK', 'SALE', 'COUP', 'AAPL'],
			"weight":[20.15, 5.36, 1.09, 1.09, 1.03, 0.98, 0.95, 0.87, 23.04, 2.65, 2.33, 0.97, 0.95, 16.32, 6.07, 2.45, 1.0, 0.97, 3.22, 1.4, 1.23, 1.02, 0.99, 0.8, 3.07],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.18, 17.42, 12.79, 11.62, 26.79, 5.71, 1.3, 1.18],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.24, 5.52, 4.07, 4.0, 3.6, 3.11, 2.77, 1.3, 1.03, 0.72, 13.66, 10.72, 5.44, 11.65, 5.88, 3.43, 0.79, 0.77, 0.75, 0.0, 10.44, 4.14],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'ETR', 'AEP', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.91, 5.75, 4.93, 4.27, 4.19, 4.16, 3.32, 3.15, 2.88, 2.61, 2.39, 0.97, 5.22, 4.95, 4.95, 4.79, 4.25, 4.05, 3.56, 2.84, 4.55, 3.58, 4.52, 3.4, 2.82],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'CL', 'K', 'BF.B', 'GIS'],
			"weight":[7.12, 6.39, 5.0, 4.65, 4.48, 4.07, 3.75, 3.49, 3.08, 2.87, 2.79, 2.26, 1.46, 6.96, 6.78, 5.32, 5.1, 4.61, 4.57, 4.09, 3.04, 2.54, 2.51, 1.62, 1.46],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.93, 5.24, 3.87, 3.8, 3.42, 2.95, 2.62, 1.23, 0.98, 0.68, 12.96, 10.17, 5.17, 7.03, 4.1, 0.94, 0.92, 0.89, 0.0, 13.28, 9.91, 3.92],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'VTIP', 'IGF', 'BWX', 'AGG', 'ALFA', 'QAI', 'CSD'],
			"weight":[15.65, 14.46, 12.32, 6.7, 6.49, 5.89, 5.08, 4.99, 11.89, 8.16, 2.91, 2.73, 2.73],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['SPY', 'VO', 'VBR', 'BSV', 'VTIP', 'VWO', 'VEU', 'IGE', 'DBC', 'SHY', 'IGOV', 'VNQ'],
			"weight":[8.68, 8.67, 8.47, 8.47, 8.42, 8.51, 8.12, 8.17, 7.69, 8.49, 8.18, 8.14],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.71, 18.19, 2.6, 0.94, 0.9, 9.1, 6.95, 5.75, 3.09, 2.53, 2.47, 2.0, 1.99, 1.55, 1.03, 0.99, 0.97, 6.48, 0.97, 0.93, 4.35, 4.24, 1.2, 1.04, 1.02],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'GOOGL', 'CSCO', 'QCOM', 'AAPL', 'ORCL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'ADI', 'GLW', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.55, 9.9, 9.71, 7.33, 5.58, 5.43, 3.41, 2.31, 2.19, 2.09, 2.05, 1.33, 1.31, 1.16, 0.94, 0.91, 0.9, 0.87, 6.85, 5.03, 6.55, 0.99, 2.66, 1.0, 0.94],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.57, 4.93, 3.64, 3.58, 3.22, 2.78, 2.47, 1.16, 0.92, 0.64, 12.22, 9.58, 4.87, 8.32, 4.85, 1.11, 1.09, 1.05, 14.98, 9.33, 3.69],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.25, 4.75, 4.29, 3.08, 2.83, 2.63, 2.24, 1.64, 0.97, 8.45, 5.17, 4.08, 3.3, 2.11, 5.77, 5.08, 4.47, 3.68, 6.51, 3.9, 3.49, 2.62, 7.12, 1.35, 5.23],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VTI', 'VWO', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.46, 20.13, 18.91, 20.49, 20.01],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.2, 4.6, 3.39, 3.33, 3.0, 2.59, 2.3, 1.08, 0.86, 0.6, 11.38, 8.92, 4.54, 9.78, 5.7, 1.3, 1.28, 1.24, 16.79, 8.69, 3.44],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.5, 5.28, 4.61, 4.18, 3.49, 2.87, 1.86, 1.51, 1.47, 1.05, 1.01, 13.59, 11.54, 4.19, 1.19, 1.04, 0.99, 17.83, 3.23, 9.15, 2.42, 2.0],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['DOX', 'LLL', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'CF', 'FLEX'],
			"weight":[8.4, 8.26, 5.65, 4.97, 4.82, 3.67, 3.18, 2.44, 2.14, 2.0, 1.83, 1.19, 1.12, 0.96, 7.05, 6.39, 5.41, 7.58, 4.15, 4.33, 2.36, 1.77, 8.23, 1.09, 1.01],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['KO', 'NKE', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'MDLZ', 'PEP', 'MNST', 'LB', 'PG', 'MCD', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[9.12, 8.83, 7.56, 6.78, 4.39, 4.14, 3.91, 3.74, 3.74, 3.52, 3.2, 3.19, 3.17, 2.88, 2.65, 11.01, 6.5, 4.39, 3.86, 3.41],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.43, 5.74, 4.02, 3.9, 3.82, 3.43, 3.24, 3.03, 2.78, 2.43, 6.67, 6.11, 5.29, 3.73, 3.57, 3.16, 2.11, 5.32, 4.6, 4.28, 3.52, 3.36, 2.67, 3.83, 2.97],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'SKYW', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.33, 10.06, 7.81, 4.9, 3.73, 2.29, 1.22, 1.06, 0.97, 0.92, 7.46, 4.98, 3.53, 2.29, 1.14, 1.04, 1.0, 0.99, 0.97, 0.95, 18.3, 5.89, 3.41, 3.13, 1.62],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'XLS', 'VSAT', 'MRCY', 'FLIR', 'KTOS', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[24.97, 11.87, 9.45, 2.12, 0.93, 0.91, 10.93, 3.63, 3.15, 2.06, 1.91, 1.46, 1.2, 1.14, 1.02, 1.0, 0.93, 0.9, 0.79, 13.76, 2.11, 1.09, 0.87, 0.92, 0.87],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['TJX', 'CVS', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'SIAL', 'PX', 'QCOM', 'JKHY', 'ORCL', 'OMC', 'CTAS', 'FDS', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.25, 4.23, 4.04, 3.53, 2.05, 3.83, 3.6, 3.24, 2.46, 1.15, 6.51, 4.0, 3.41, 6.89, 6.76, 5.28, 4.84, 3.32, 4.52, 3.96, 3.69, 4.14, 3.28, 4.18, 2.86],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.77, 4.22, 3.11, 3.06, 2.75, 2.38, 2.11, 0.99, 0.79, 0.55, 10.44, 8.19, 4.17, 11.45, 6.68, 1.53, 1.49, 1.45, 18.75, 7.98, 3.16],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.58, 6.87, 6.7, 4.9, 3.65, 3.55, 3.44, 1.92, 30.56, 13.12, 3.0, 1.72],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'TSS', 'GPN', 'FIS', 'FISV', 'USB', 'VNTV', 'HPY', 'JKHY', 'EVTC', 'EEFT', 'ONE', 'FLT', 'EBAY', 'GDOT', 'HAWK', 'QIWI', 'WEX', 'UEPS', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[20.03, 19.37, 13.77, 4.21, 4.18, 3.68, 2.73, 2.68, 1.05, 1.01, 0.99, 0.98, 0.94, 0.69, 7.12, 6.62, 1.23, 1.12, 1.03, 0.98, 0.95, 1.64, 1.05, 1.02, 0.94],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[30.95, 19.43, 14.3, 5.07, 15.16, 15.08],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'HTHT', 'MR', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'VIV', 'UGP', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.66, 9.48, 6.52, 5.21, 4.72, 4.71, 3.19, 2.87, 2.43, 2.09, 1.3, 1.07, 1.03, 1.0, 0.88, 4.41, 3.63, 2.16, 2.11, 1.51, 9.77, 1.04, 4.18, 3.62, 5.4],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.24, 7.84, 1.77, 1.75, 1.7, 4.29, 3.79, 2.8, 2.75, 2.47, 2.14, 1.89, 0.9, 0.71, 0.5, 20.92, 9.4, 7.37, 3.75, 7.18, 2.84],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'PG', 'JNJ', 'NKE', 'KO', 'CL', 'LLY', 'BMY', 'MRK', 'PFE', 'MDT', 'MMM', 'ITW', 'WFC'],
			"weight":[5.89, 5.44, 5.07, 5.03, 4.99, 4.88, 5.15, 5.03, 4.98, 4.97, 4.88, 4.61, 5.26, 5.16, 4.9, 4.82, 4.73, 4.77, 4.64, 4.8],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.78, 11.9, 9.84, 7.32, 5.34, 4.95, 3.51, 3.16, 2.47, 1.37, 0.69, 0.53, 18.76, 6.6, 1.07, 6.64, 1.08, 1.0],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.7, 14.82, 13.67, 4.92, 4.35, 2.25, 1.54, 1.2, 1.0, 3.46, 2.1, 1.92, 1.65, 1.38, 1.36, 9.53, 7.58, 1.57],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.63, 25.2, 25.09, 24.08],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['PG', 'COST', 'TXRH', 'JAH', 'CLC', 'LGF', 'IBKR', 'FXCM', 'VRSK', 'CME', 'ACT', 'ALNY', 'GNCMA', 'MTSN', 'HEES', 'ULTI', 'KAI', 'GTT', 'TREC'],
			"weight":[5.44, 5.41, 5.32, 5.27, 5.25, 4.98, 5.26, 5.24, 5.2, 5.19, 5.49, 5.4, 5.45, 5.1, 5.27, 5.13, 5.31, 5.21, 5.09],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'BDBD', 'CVGW', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.37, 10.16, 9.8, 8.98, 2.71, 2.71, 2.03, 1.65, 1.65, 1.03, 0.98, 15.87, 8.03, 3.06, 1.22, 0.88, 8.77, 5.45, 1.76, 0.89],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.41, 9.19, 2.08, 2.05, 1.99, 23.37, 3.73, 3.3, 2.43, 2.39, 2.15, 1.86, 1.65, 0.78, 0.62, 0.43, 8.17, 6.41, 3.26, 6.24, 2.47],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.28, 33.54, 32.18],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.17, 19.13, 13.44, 11.55, 13.44, 4.82, 1.22, 1.01, 11.45, 2.94, 0.93, 0.88],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'LB', 'AVP', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[26.12, 15.69, 6.4, 4.14, 4.14, 2.45, 2.34, 2.26, 1.89, 1.01, 1.0, 0.89, 0.62, 13.9, 1.41, 1.29, 1.17, 0.99, 0.97, 0.64, 0.54, 4.87, 3.42, 0.97, 0.88],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'ELGX', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.38, 3.53, 2.74, 1.69, 22.06, 0.98, 14.01, 1.18, 0.95, 4.45, 3.41, 1.59, 1.08, 0.97, 9.66, 0.99, 3.31, 1.04, 1.0, 1.0, 0.95, 4.04, 1.07, 1.01, 0.94],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'CLGX', 'MXIM', 'CTSH', 'GLW', 'MANT', 'FEIC', 'FNSR', 'SCS', 'EMN', 'DHR', 'ALB', 'ENS', 'CIR', 'CRS', 'SPLS', 'CAG', 'CL', 'KRFT', 'DHI', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[4.14, 4.06, 4.02, 4.01, 3.99, 3.98, 3.87, 3.6, 4.36, 4.12, 4.09, 3.98, 3.91, 3.88, 3.54, 4.44, 4.24, 4.2, 3.98, 3.95, 4.13, 3.9, 3.99, 3.92, 3.68],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'STRZA', 'IMAX', 'TV', 'AMCX', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.4, 18.13, 17.57, 11.76, 11.14, 1.86, 6.04, 2.35, 1.04, 1.02, 0.96, 0.94, 3.47, 1.32, 0.93, 1.08, 1.01, 0.98],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[29.05, 27.27, 16.22, 15.93, 7.05, 4.48],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.45, 27.36, 16.02, 15.73, 7.86, 4.58],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.32, 28.29, 17.69, 16.19, 4.45, 4.06],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.04, 29.66, 19.33, 12.92, 4.73, 3.32],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.29, 25.66, 22.88, 12.22, 3.74, 3.21],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.33, 25.7, 18.57, 13.04, 6.99, 3.36],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[36.83, 36.05, 17.3, 9.82],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'DECK', 'ABV', 'CBD', 'ROST', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[8.7, 5.34, 4.58, 4.43, 4.37, 3.76, 3.7, 2.83, 1.86, 8.13, 6.8, 4.85, 3.69, 6.99, 5.84, 4.19, 1.11, 9.11, 5.0, 4.73],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'LF', 'JAKK', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'FL', 'BWS', 'CROX'],
			"weight":[17.09, 12.43, 15.98, 5.69, 2.9, 1.47, 1.22, 0.97, 7.82, 5.27, 0.97, 0.95, 12.82, 1.06, 4.02, 1.58, 1.05, 0.97, 1.97, 0.93, 1.01, 0.98, 0.84],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.28, 9.84, 3.04, 2.12, 1.61, 1.35, 1.05, 0.91, 6.89, 4.92, 4.53, 2.45, 1.14, 0.97, 0.96, 0.89, 17.89, 1.96, 0.99, 0.92, 0.87, 7.59, 4.49, 1.13, 9.24],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'ODFL', 'HTLD', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.09, 13.84, 5.78, 5.43, 3.84, 1.06, 4.44, 4.29, 3.47, 2.27, 1.95, 1.04, 0.7, 15.98, 3.39, 2.26, 0.86, 1.38, 1.05, 1.03, 1.03, 0.96, 0.91, 1.62, 1.31],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.58, 5.19, 5.16, 5.02, 4.95, 4.89, 4.7, 3.34, 2.59, 1.34, 0.95, 6.66, 4.6, 4.54, 3.83, 3.28, 1.68, 5.36, 4.62, 3.15, 2.53, 3.47, 3.28, 4.26, 3.01],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'WPPGY', 'IPG', 'CMCSA'],
			"weight":[22.21, 20.18, 18.62, 18.62, 20.37],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.04, 15.54, 9.63, 8.07, 4.86, 2.26, 1.96, 1.63, 1.21, 1.12, 1.0, 0.94, 12.93, 6.73, 0.97, 1.41, 0.96, 0.93, 0.9, 0.87, 0.81, 0.67, 2.04, 0.8, 0.72],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.63, 25.2, 25.09, 24.08],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.99, 6.09, 5.56, 4.92, 2.96, 1.36, 0.96, 14.88, 4.82, 2.22, 1.72, 1.17, 0.99, 7.02, 4.82, 3.52, 1.41, 6.47, 2.56, 0.97, 2.4, 1.47, 1.57, 1.27, 0.87],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.5, 5.28, 4.61, 4.18, 3.49, 2.87, 1.86, 1.51, 1.47, 1.05, 1.01, 13.59, 11.54, 4.19, 1.19, 1.04, 0.99, 17.83, 3.23, 9.15, 2.42, 2.0],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'HCA', 'LPNT', 'THC', 'SEM', 'CYH', 'KND', 'HLS', 'SCAI', 'CERN', 'QSII', 'ATHN', 'CPSI', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.91, 5.81, 5.73, 3.13, 3.0, 1.22, 0.97, 0.97, 0.94, 15.86, 2.26, 2.15, 2.1, 0.91, 19.65, 1.44, 6.26, 3.02, 2.44, 1.42, 6.06, 3.94, 0.95, 0.95, 0.92],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'TCO', 'EQY', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.94, 6.17, 6.12, 4.58, 3.75, 1.36, 1.02, 13.28, 4.77, 4.75, 3.58, 1.91, 7.44, 6.28, 1.69, 1.07, 5.3, 4.73, 2.48, 1.01, 4.25, 3.01, 1.0, 1.42, 1.11],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[23.36, 19.85, 10.91, 6.92, 4.87, 1.13, 17.54, 3.1, 2.28, 1.79, 1.65, 1.03, 1.0, 0.99, 0.98, 0.9, 0.88, 0.82],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.7, 14.82, 13.67, 4.92, 4.35, 2.25, 1.54, 1.2, 1.0, 3.46, 2.1, 1.92, 1.65, 1.38, 1.36, 9.53, 7.58, 1.57],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'SKYW', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.33, 10.06, 7.81, 4.9, 3.73, 2.29, 1.22, 1.06, 0.97, 0.92, 7.46, 4.98, 3.53, 2.29, 1.14, 1.04, 1.0, 0.99, 0.97, 0.95, 18.3, 5.89, 3.41, 3.13, 1.62],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'MWW', 'Z', 'DHX', 'ZPIN', 'EVDY', 'WBMD', 'TRUE', 'RUBI', 'MKTO', 'FUEL', 'CRTO', 'CTCT', 'SCOR', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.5, 21.86, 4.87, 12.17, 5.44, 2.72, 6.85, 2.41, 1.02, 1.01, 1.0, 0.96, 0.93, 0.92, 0.86, 1.29, 1.02, 1.02, 1.02, 1.0, 1.0, 0.94, 2.2, 1.0, 0.97],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['PZA', 'TLT', 'VCLT', 'SHV', 'VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA', 'IAU'],
			"weight":[8.56, 8.55, 8.34, 25.24, 7.63, 3.24, 2.75, 1.49, 1.16, 1.08, 0.98, 0.93, 0.8, 0.79, 0.77, 0.65, 0.55, 0.55, 0.47, 0.37, 0.31, 0.16, 24.62],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.78, 11.9, 9.84, 7.32, 5.34, 4.95, 3.51, 3.16, 2.47, 1.37, 0.69, 0.53, 18.76, 6.6, 1.07, 6.64, 1.08, 1.0],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.7, 8.73, 5.77, 5.46, 4.4, 3.07, 2.09, 14.94, 8.76, 5.1, 3.64, 1.56, 1.39, 1.09, 6.72, 3.09, 0.57, 0.27, 4.42, 1.24],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'FSC', 'TCRD', 'AINV', 'GAIN', 'FDUS', 'TICC', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.22, 9.94, 6.29, 4.86, 4.37, 3.6, 3.36, 2.52, 2.24, 1.95, 1.7, 1.18, 1.06, 1.06, 1.04, 0.99, 0.99, 0.98, 18.47, 6.65, 6.41, 4.36, 3.06, 1.67, 1.03],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'AXS', 'IPCC', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'GLRE', 'VR', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.72, 10.92, 8.98, 7.25, 6.2, 6.15, 4.62, 3.2, 2.97, 2.53, 1.08, 1.04, 1.02, 0.98, 0.98, 0.95, 5.8, 3.45, 1.87, 1.04, 1.04, 0.96, 7.3, 5.92, 1.04],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[34.79, 15.61, 7.19, 2.81, 9.42, 7.8, 4.99, 1.07, 6.75, 3.9, 3.02, 1.53, 1.11],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['OTIC', 'AAVL', 'CTLT', 'XENT', 'KITE', 'ZFGN', 'ADPT', 'TTOO', 'RYI', 'MBLY', 'WMS', 'OEC', 'ICD', 'GPRO', 'LOCO', 'MIK', 'SERV', 'FCB', 'GNBC', 'HQY', 'TRUP', 'TERP', 'ECR', 'MRKT', 'TUBE'],
			"weight":[4.91, 4.61, 4.41, 3.79, 3.74, 3.54, 3.39, 3.09, 4.76, 4.55, 4.06, 4.06, 3.83, 6.32, 4.27, 3.95, 3.8, 3.82, 3.67, 3.58, 3.57, 3.65, 3.54, 3.62, 3.45],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.12, 15.67, 11.78, 14.94, 13.79, 6.78, 3.95, 0.99, 4.98, 0.99],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.58, 6.87, 6.7, 4.9, 3.65, 3.55, 3.44, 1.92, 30.56, 13.12, 3.0, 1.72],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.11, 14.49, 9.59, 5.81, 3.43, 2.67, 2.43, 1.45, 1.42, 1.34, 1.06, 0.84, 0.78, 6.54, 5.97, 2.65, 1.06, 1.0, 0.98, 0.94, 0.93, 7.2, 2.29, 1.01, 1.01],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'LMT', 'CSX', 'UNP', 'NOC', 'GD', 'RTN', 'HON', 'GE', 'BA', 'UPS', 'UTX', 'GS', 'BAC', 'MS', 'JPM', 'BRK.B', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.25, 4.22, 4.21, 4.19, 4.13, 4.12, 4.01, 3.87, 3.71, 3.66, 3.63, 3.51, 4.48, 4.34, 4.3, 4.23, 4.17, 3.95, 3.69, 3.37, 4.47, 4.23, 3.87, 3.85, 3.56],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.18, 17.42, 12.79, 11.62, 26.79, 5.71, 1.3, 1.18],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[16.06, 9.59, 2.15, 2.15, 2.08, 23.26, 3.08, 2.72, 2.0, 1.97, 1.77, 1.53, 1.36, 0.64, 0.5, 0.35, 6.72, 5.27, 2.68, 6.57, 5.41, 2.14],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.41, 9.19, 2.08, 2.05, 1.99, 23.37, 3.73, 3.3, 2.43, 2.39, 2.15, 1.86, 1.65, 0.78, 0.62, 0.43, 8.17, 6.41, 3.26, 6.24, 2.47],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.24, 7.84, 1.77, 1.75, 1.7, 4.29, 3.79, 2.8, 2.75, 2.47, 2.14, 1.89, 0.9, 0.71, 0.5, 20.92, 9.4, 7.37, 3.75, 7.18, 2.84],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.77, 4.22, 3.11, 3.06, 2.75, 2.38, 2.11, 0.99, 0.79, 0.55, 10.44, 8.19, 4.17, 11.45, 6.68, 1.53, 1.49, 1.45, 18.75, 7.98, 3.16],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.2, 4.6, 3.39, 3.33, 3.0, 2.59, 2.3, 1.08, 0.86, 0.6, 11.38, 8.92, 4.54, 9.78, 5.7, 1.3, 1.28, 1.24, 16.79, 8.69, 3.44],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.57, 4.93, 3.64, 3.58, 3.22, 2.78, 2.47, 1.16, 0.92, 0.64, 12.22, 9.58, 4.87, 8.32, 4.85, 1.11, 1.09, 1.05, 14.98, 9.33, 3.69],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.93, 5.24, 3.87, 3.8, 3.42, 2.95, 2.62, 1.23, 0.98, 0.68, 12.96, 10.17, 5.17, 7.03, 4.1, 0.94, 0.92, 0.89, 0.0, 13.28, 9.91, 3.92],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.24, 5.52, 4.07, 4.0, 3.6, 3.11, 2.77, 1.3, 1.03, 0.72, 13.66, 10.72, 5.44, 11.65, 5.88, 3.43, 0.79, 0.77, 0.75, 0.0, 10.44, 4.14],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.08, 15.15, 9.61, 5.35, 3.07, 2.89, 2.48, 2.38, 1.98, 1.71, 1.39, 1.02, 1.0, 0.94, 7.26, 4.2, 1.71, 1.13, 1.1, 8.87, 0.96, 3.6, 1.17, 1.05, 0.89],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.11, 18.61, 9.66, 19.96, 5.15, 0.89, 0.61, 10.37, 1.73, 0.76, 3.76, 1.95, 1.59, 0.97, 0.89],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.28, 9.84, 3.04, 2.12, 1.61, 1.35, 1.05, 0.91, 6.89, 4.92, 4.53, 2.45, 1.14, 0.97, 0.96, 0.89, 17.89, 1.96, 0.99, 0.92, 0.87, 7.59, 4.49, 1.13, 9.24],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'ELGX', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.38, 3.53, 2.74, 1.69, 22.06, 0.98, 14.01, 1.18, 0.95, 4.45, 3.41, 1.59, 1.08, 0.97, 9.66, 0.99, 3.31, 1.04, 1.0, 1.0, 0.95, 4.04, 1.07, 1.01, 0.94],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'STZ', 'BUD', 'BF.B', 'RAI', 'LO', 'BTI', 'PM', 'MCD', 'YUM', 'DEO', 'CHTR', 'DISH', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.49, 4.27, 4.23, 4.03, 4.01, 3.97, 3.92, 3.91, 3.84, 3.82, 3.72, 4.46, 4.45, 4.27, 3.96, 3.74, 3.6, 3.49, 3.25, 3.15, 4.75, 4.56, 4.88, 4.0, 3.22],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'MHR', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'XCO', 'CRK', 'FST', 'GDP', 'ROSE', 'SFY', 'SM'],
			"weight":[16.38, 12.62, 9.21, 4.47, 4.16, 3.57, 2.38, 1.05, 1.03, 1.03, 0.97, 0.92, 14.35, 0.83, 14.14, 4.22, 0.96, 1.04, 0.96, 0.94, 0.93, 0.79, 1.03, 1.03, 0.97],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'CWEI', 'AXAS', 'FANG', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.45, 7.85, 6.06, 5.27, 3.98, 1.35, 1.03, 0.85, 15.48, 6.79, 3.72, 1.49, 1.01, 1.0, 1.0, 0.99, 0.95, 0.94, 4.88, 3.22, 3.92, 1.85, 1.0, 0.92, 1.0],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.58, 5.19, 5.16, 5.02, 4.95, 4.89, 4.7, 3.34, 2.59, 1.34, 0.95, 6.66, 4.6, 4.54, 3.83, 3.28, 1.68, 5.36, 4.62, 3.15, 2.53, 3.47, 3.28, 4.26, 3.01],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.72, 13.12, 11.91, 13.86, 7.82, 1.32, 6.75, 4.51, 2.01],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'PG', 'JNJ', 'NKE', 'KO', 'CL', 'LLY', 'BMY', 'MRK', 'PFE', 'MDT', 'MMM', 'ITW', 'WFC'],
			"weight":[5.89, 5.44, 5.07, 5.03, 4.99, 4.88, 5.15, 5.03, 4.98, 4.97, 4.88, 4.61, 5.26, 5.16, 4.9, 4.82, 4.73, 4.77, 4.64, 4.8],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[24.07, 21.16, 13.37, 6.87, 1.68, 1.39, 1.34, 0.9, 14.82, 2.09, 8.17, 1.49, 1.35, 1.3],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'CALD', 'SQI', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.58, 11.81, 8.02, 7.58, 6.28, 4.63, 3.48, 1.8, 1.19, 1.13, 0.93, 3.82, 3.77, 2.77, 2.33, 2.02, 1.43, 0.95, 2.95, 1.02, 2.03, 1.5, 2.01, 0.96, 1.0],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['NX', 'TMST', 'XYL', 'BWC', 'RYAM', 'WBC', 'CLW', 'DPS', 'WWAV', 'HSNI', 'SBH', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'SAIC', 'JBT', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.29, 4.13, 4.1, 4.09, 3.95, 3.9, 3.61, 4.35, 4.26, 4.23, 4.13, 3.8, 4.54, 4.03, 3.78, 4.14, 4.09, 3.79, 4.03, 3.96, 3.76, 4.01, 3.95, 3.33, 3.73],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'SIAL', 'BCPC', 'FDS', 'USTR', 'FTI'],
			"weight":[5.05, 5.04, 4.2, 3.97, 2.52, 1.76, 8.63, 4.78, 3.62, 2.67, 5.48, 3.55, 3.45, 2.4, 1.65, 8.77, 3.45, 4.96, 4.58, 0.96, 8.52, 1.08, 4.78, 2.96, 1.17],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'NVDA', 'ATML', 'CRUS', 'FCS', 'SIMO', 'STM', 'INVN', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.78, 9.42, 8.46, 4.63, 1.48, 1.03, 1.0, 0.99, 0.95, 0.94, 0.93, 0.92, 0.91, 0.91, 0.87, 24.58, 1.03, 0.97, 14.61, 9.55, 1.03],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'LUV', 'AAL', 'RYAAY', 'UAL', 'LFL', 'ALK', 'SAVE', 'CPA', 'JBLU', 'RJET', 'AVH', 'VLRS', 'GOL', 'HA', 'SKYW', 'AER', 'AL', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.07, 10.78, 10.62, 9.79, 8.3, 4.77, 4.39, 3.53, 3.3, 1.81, 1.13, 1.12, 1.06, 0.94, 0.92, 0.77, 4.54, 4.51, 1.03, 0.97, 0.96, 0.86, 5.94, 2.73, 1.15],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'TRIB', 'ETN', 'IR', 'IHG', 'GSK', 'AZN', 'GWPH', 'ARMH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'QGEN', 'STM', 'PNR', 'TEL', 'LOGI', 'G', 'HELE', 'IMOS', 'FDP', 'SIMO'],
			"weight":[4.5, 4.45, 4.18, 3.87, 3.79, 3.77, 4.2, 4.03, 3.99, 3.87, 3.85, 3.49, 4.7, 4.47, 4.04, 4.0, 3.73, 3.93, 3.86, 3.74, 3.84, 3.82, 3.71, 4.27, 3.92],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'CVT', 'WAGE', 'TXTR', 'ELLI', 'DWRE', 'MKTO', 'FLTX', 'LPSN', 'CTCT', 'SAAS', 'RP', 'PGI', 'SPSC', 'LXFT', 'NICE', 'MSTR', 'PRO', 'CVLT', 'DWCH', 'QLYS', 'RDWR', 'PFPT', 'AVG', 'IMPV'],
			"weight":[4.35, 4.32, 4.28, 4.13, 4.05, 4.04, 4.01, 3.98, 3.96, 3.93, 3.93, 3.92, 3.9, 3.8, 4.27, 4.2, 3.86, 3.82, 3.71, 3.48, 4.25, 4.2, 3.9, 3.88, 3.81],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'FDML', 'SHLO', 'AXL', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[25.97, 13.42, 12.67, 10.4, 4.81, 2.69, 5.06, 5.01, 1.24, 0.97, 0.55, 3.9, 1.54, 1.15, 1.12, 0.92, 1.89, 0.95, 0.93, 0.93, 0.88, 1.2, 0.9, 0.91],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'AIG', 'MET', 'GS', 'MS', 'BK', 'STT'],
			"weight":[13.76, 9.97, 8.85, 6.05, 17.95, 5.32, 2.97, 2.46, 1.71, 1.36, 1.23, 0.85, 0.84, 6.81, 3.79, 6.16, 4.34, 3.15, 2.43],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'ODFL', 'HTLD', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.09, 13.84, 5.78, 5.43, 3.84, 1.06, 4.44, 4.29, 3.47, 2.27, 1.95, 1.04, 0.7, 15.98, 3.39, 2.26, 0.86, 1.38, 1.05, 1.03, 1.03, 0.96, 0.91, 1.62, 1.31],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'LAD', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.82, 17.28, 14.55, 10.05, 7.34, 0.95, 9.72, 5.81, 2.48, 1.03, 0.99, 0.9, 2.62, 1.6, 0.87, 2.92, 1.08],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['TLT', 'TLH', 'IEF', 'BSV', 'SCHR'],
			"weight":[12.72, 12.55, 24.93, 24.92, 24.88],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.71, 18.19, 2.6, 0.94, 0.9, 9.1, 6.95, 5.75, 3.09, 2.53, 2.47, 2.0, 1.99, 1.55, 1.03, 0.99, 0.97, 6.48, 0.97, 0.93, 4.35, 4.24, 1.2, 1.04, 1.02],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'LB', 'AVP', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[26.12, 15.69, 6.4, 4.14, 4.14, 2.45, 2.34, 2.26, 1.89, 1.01, 1.0, 0.89, 0.62, 13.9, 1.41, 1.29, 1.17, 0.99, 0.97, 0.64, 0.54, 4.87, 3.42, 0.97, 0.88],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'PJC', 'RJF', 'COWN', 'GHL', 'FBRC', 'EVR', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.51, 11.2, 9.6, 7.7, 6.69, 4.88, 4.28, 3.98, 3.95, 3.25, 1.83, 1.54, 1.01, 2.94, 1.43, 1.06, 1.01, 1.0, 0.96, 0.95, 0.94, 0.93, 2.71, 1.68, 0.96],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'MWA', 'WMS', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'CWCO', 'PICO'],
			"weight":[11.98, 4.24, 4.17, 3.82, 2.79, 1.34, 1.1, 1.1, 1.0, 0.98, 12.01, 8.52, 7.78, 2.18, 9.46, 7.45, 5.51, 2.34, 1.0, 0.96, 6.34, 1.01, 1.01, 0.98, 0.96],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GOOGL', 'GRMN', 'AAPL', 'ARMH', 'TXN', 'MCHP', 'MXIM', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[16.47, 11.9, 11.69, 11.33, 3.27, 3.03, 2.97, 2.96, 2.29, 1.76, 1.55, 3.48, 3.0, 2.79, 2.3, 2.05, 1.04, 3.64, 3.43, 2.92, 1.35, 1.34, 0.87, 1.43, 1.12],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.04, 15.54, 9.63, 8.07, 4.86, 2.26, 1.96, 1.63, 1.21, 1.12, 1.0, 0.94, 12.93, 6.73, 0.97, 1.41, 0.96, 0.93, 0.9, 0.87, 0.81, 0.67, 2.04, 0.8, 0.72],
			"name":"World of Sports"};
	}
	var q = db[motif];
	if (q !== "undefined" && !this.DashBoard[motif]){
		var x = new combination(
			q.quotes,q.weight,q.name
		);
		this.DashBoard[motif] = true;
		Motifs.push(x);
	}
	$(".datagrid").fadeIn();
}
