function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'CWEI', 'FANG', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[22.8, 7.73, 6.08, 5.12, 3.89, 1.33, 1.04, 0.87, 15.45, 6.9, 4.61, 1.51, 1.06, 1.03, 1.01, 1.0, 0.97, 0.91, 4.9, 3.06, 4.06, 1.83, 0.99, 0.89, 0.99],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'RES', 'CAM', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.82, 8.17, 5.79, 5.45, 5.06, 4.66, 4.65, 2.83, 1.2, 0.87, 0.65, 0.6, 10.6, 6.9, 2.05, 0.97, 0.94, 7.61, 2.82, 2.55, 1.01, 0.94, 3.79, 2.07, 0.98],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'AA', 'SLCA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'AKRX', 'Z'],
			"weight":[7.79, 5.21, 4.77, 2.6, 1.64, 5.08, 3.58, 3.17, 2.91, 2.74, 7.2, 4.74, 2.79, 2.32, 6.26, 6.14, 2.39, 5.94, 3.38, 3.39, 3.21, 4.02, 2.18, 3.36, 3.18],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.81, 20.91, 20.14, 13.81, 9.63, 6.26, 3.17, 1.26],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'YPF', 'MDU', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[17.98, 11.92, 10.3, 7.98, 6.51, 4.73, 4.35, 4.25, 4.14, 3.73, 3.2, 2.73, 2.33, 2.32, 1.63, 1.34, 1.31, 1.25, 1.06, 0.99, 1.53, 1.4, 0.55, 1.49, 1.0],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'TIBX', 'SPLK', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'DWCH', 'VRNS', 'INFA', 'CVLT', 'RHT', 'SGI', 'VMEM'],
			"weight":[24.02, 14.41, 13.82, 10.86, 9.7, 2.54, 2.4, 1.59, 1.54, 1.42, 1.39, 4.75, 2.97, 5.77, 1.74, 1.08],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[33.15, 21.38, 17.65, 16.86, 10.97],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[19.61, 19.29, 17.06, 23.64, 20.41],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.29, 19.85, 34.77, 21.08],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'MHR', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'FST', 'CRK', 'XCO', 'GDP', 'ROSE', 'SFY', 'SM'],
			"weight":[16.46, 12.66, 9.49, 4.45, 4.13, 3.55, 2.4, 1.07, 1.04, 1.01, 0.98, 0.92, 14.25, 0.54, 14.15, 4.23, 0.99, 1.07, 0.97, 0.92, 0.89, 0.81, 1.06, 1.01, 0.97],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.01, 6.21, 5.66, 4.86, 3.07, 1.35, 0.96, 14.93, 4.86, 2.24, 1.69, 1.18, 0.99, 6.64, 4.83, 3.57, 1.42, 6.47, 2.6, 0.98, 2.3, 1.47, 1.56, 1.27, 0.88],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'IMGN', 'SGEN', 'CRIS', 'GILD', 'CBST', 'EBS', 'VRTX', 'ALXN', 'REGN', 'UTHR', 'ACOR', 'LGND', 'MDCO', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[16.97, 11.39, 0.95, 0.88, 0.82, 19.64, 2.34, 0.88, 4.32, 4.32, 4.11, 2.16, 1.11, 0.92, 0.92, 9.12, 3.68, 2.54, 0.78, 4.26, 2.64, 2.39, 1.08, 0.92, 0.86],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[24.48, 21.56, 13.34, 6.86, 1.74, 1.39, 1.35, 0.91, 14.6, 2.07, 7.61, 1.42, 1.36, 1.31],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.88, 18.82, 14.12, 2.99, 1.41, 18.6, 15.11, 5.17, 3.9],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'NEU', 'WLK', 'MEOH', 'EMN', 'HUN', 'CE', 'POL', 'GRA', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'ALJ', 'WNR', 'CVI', 'APD', 'CF', 'RTK'],
			"weight":[13.88, 12.88, 8.22, 3.03, 3.03, 1.03, 1.02, 0.99, 0.99, 0.98, 0.98, 0.95, 8.96, 6.43, 6.18, 3.07, 2.24, 1.27, 1.0, 0.94, 0.93, 0.92, 15.98, 3.22, 0.85],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'MWW', 'EVDY', 'Z', 'DHX', 'WBMD', 'ZPIN', 'TRUE', 'RUBI', 'FUEL', 'MKTO', 'SCOR', 'CRTO', 'CTCT', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.51, 22.22, 4.65, 12.38, 5.42, 2.68, 6.79, 2.28, 1.03, 1.01, 1.0, 0.99, 0.9, 0.9, 0.82, 1.26, 1.09, 1.04, 1.0, 0.99, 0.98, 0.87, 2.21, 1.04, 0.96],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'RDY', 'HSP', 'TARO', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.66, 20.31, 17.22, 10.16, 9.83, 9.68, 4.21, 2.79, 2.36, 1.77],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'TCO', 'EQY', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.89, 6.17, 6.14, 4.59, 3.76, 1.36, 1.03, 13.26, 4.79, 4.77, 3.58, 1.93, 7.48, 6.33, 1.69, 1.07, 5.28, 4.68, 2.45, 1.01, 4.25, 2.98, 1.0, 1.41, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[23.48, 19.97, 10.53, 7.07, 4.59, 1.09, 17.72, 3.25, 2.31, 1.83, 1.56, 1.05, 1.01, 0.99, 0.98, 0.92, 0.89, 0.75],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'TCP', 'OKS', 'WES', 'ETP', 'SXE', 'MMP', 'AMID', 'BPL', 'EPB', 'ENLK', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'DMLP', 'ACMP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.17, 6.73, 6.19, 6.11, 5.31, 4.72, 4.49, 4.42, 4.15, 3.59, 3.18, 3.18, 3.12, 2.93, 2.83, 2.73, 2.63, 2.56, 2.28, 2.16, 4.64, 4.64, 4.14, 3.97, 2.11],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'SNSS', 'EPZM', 'TSRO', 'PGNX', 'DYAX', 'IMMU', 'MGNX', 'VSTM', 'THLD', 'NLNK', 'CLDX', 'CRIS', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[25.44, 6.1, 6.03, 4.51, 1.81, 25.02, 2.8, 2.51, 1.86, 1.78, 1.74, 1.52, 1.43, 1.31, 1.28, 1.02, 0.99, 0.94, 0.91, 0.9, 0.88, 3.5, 2.61, 2.21, 0.87],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'LAD', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.79, 17.37, 14.53, 10.16, 7.4, 0.92, 9.55, 5.81, 2.5, 1.03, 1.0, 0.97, 2.62, 1.56, 0.86, 2.87, 1.06],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.15, 15.15, 11.76, 14.95, 14.15, 6.89, 3.96, 0.99, 5.03, 0.97],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'NKE', 'RL', 'VFC', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.8, 5.26, 5.09, 4.96, 4.38, 3.15, 2.34, 2.14, 1.76, 5.87, 5.59, 4.22, 3.72, 3.52, 2.28, 1.44, 12.26, 5.97, 5.25, 1.2, 4.74, 1.82, 1.42, 2.81, 1.99],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['DUK', 'EDE', 'ED', 'AWK', 'CMS', 'LG', 'SO', 'DTE', 'XEL', 'D', 'PPL', 'NWN', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'MCD', 'K', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.13, 4.09, 4.09, 4.05, 4.02, 4.01, 3.99, 3.98, 3.94, 3.89, 3.88, 3.84, 3.74, 4.48, 4.32, 4.17, 4.16, 3.94, 3.88, 3.77, 3.73, 3.66, 4.35, 4.11, 3.76],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'ATML', 'NVDA', 'CRUS', 'SIMO', 'STM', 'FCS', 'INVN', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.53, 9.19, 8.38, 4.6, 1.42, 1.08, 0.99, 0.97, 0.94, 0.93, 0.92, 0.91, 0.9, 0.9, 0.81, 24.43, 1.01, 0.98, 15.57, 9.56, 0.98],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.78, 8.72, 5.77, 5.39, 4.39, 2.97, 2.07, 14.83, 8.76, 5.09, 3.59, 1.53, 1.36, 1.12, 6.74, 3.24, 0.57, 0.26, 4.61, 1.22],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'SPNC', 'EXAS', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.09, 14.53, 9.6, 5.87, 3.28, 2.69, 2.45, 1.48, 1.39, 1.36, 1.04, 0.86, 0.78, 6.7, 5.97, 2.66, 1.06, 0.96, 0.95, 0.9, 0.8, 7.26, 2.32, 1.0, 1.0],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'CLX', 'OMC', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'D', 'OKE', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[10.02, 6.81, 6.36, 5.65, 5.54, 4.93, 4.85, 2.46, 1.02, 4.37, 4.11, 4.03, 3.91, 3.28, 2.39, 2.22, 1.02, 0.98, 4.36, 3.18, 2.49, 5.88, 5.82, 3.3, 1.01],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.27, 13.28, 12.3, 4.31, 3.49, 1.65, 1.27, 0.82, 11.75, 6.81, 4.55, 0.85, 21.66],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'SONC', 'DPZ', 'WEN', 'TAST', 'DNKN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'TR', 'KRFT', 'FRSH', 'DMND', 'UL'],
			"weight":[20.86, 19.96, 3.17, 2.12, 17.63, 4.39, 1.59, 1.17, 1.08, 1.07, 1.05, 1.02, 1.01, 0.94, 0.93, 0.92, 0.8, 10.77, 3.85, 0.99, 0.96, 0.95, 0.94, 0.9, 0.93],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BURL', 'BIG', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'TFM', 'CHS', 'BID', 'MOV'],
			"weight":[25.27, 8.12, 6.37, 6.11, 2.55, 1.23, 1.13, 1.09, 1.02, 0.99, 0.97, 0.8, 12.26, 7.65, 5.38, 4.84, 3.88, 1.99, 1.65, 1.51, 1.29, 1.01, 1.0, 0.94, 0.94],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'MCD', 'PG', 'HAS', 'WMT', 'MAT', 'ADI', 'MSFT', 'TXN', 'MXIM', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.56, 5.14, 4.96, 3.47, 3.29, 2.93, 5.35, 4.19, 4.19, 3.77, 2.74, 2.69, 5.63, 4.98, 3.06, 3.02, 2.07, 6.82, 3.9, 5.27, 1.55, 0.99, 5.9, 5.26, 3.28],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'LL', 'BLDR', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'KIRK', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[32.66, 27.8, 3.16, 3.08, 7.1, 5.25, 3.69, 1.68, 1.62, 1.28, 1.12, 4.72, 3.05, 0.61, 3.19],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'MRK', 'PFE', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[12.15, 9.88, 9.98, 9.92, 9.91, 9.87, 10.35, 9.37, 9.45, 9.11],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'TUES', 'DSW', 'CATO', 'CTRN', 'DLTR', 'DG', 'FIVE', 'BIG', 'FRED', 'SVU', 'VIPS', 'GRPN', 'ZU', 'OSTK', 'SALE', 'COUP'],
			"weight":[16.76, 11.52, 1.12, 0.79, 21.29, 0.98, 14.42, 3.34, 1.06, 1.03, 1.02, 0.96, 6.52, 5.71, 1.0, 0.98, 0.98, 0.97, 3.9, 1.63, 1.38, 0.97, 0.94, 0.75],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'BITA', 'XNET', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[20.68, 5.17, 3.93, 3.57, 3.27, 2.48, 1.94, 1.3, 0.92, 0.91, 10.97, 7.43, 4.08, 3.55, 1.84, 1.0, 0.97, 10.98, 1.45, 1.05, 5.63, 2.2, 1.77, 1.56, 1.36],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.47, 19.55, 14.31, 12.67, 4.29, 15.45, 7.47, 4.78],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'HSOL', 'TSL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.33, 7.1, 6.53, 6.22, 2.22, 1.85, 1.42, 1.3, 1.02, 1.01, 5.68, 5.42, 4.47, 2.16, 0.95, 14.71, 12.94, 0.81, 2.22, 1.87, 1.44, 1.08, 5.55, 3.57, 1.13],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'LITB', 'NILE', 'SFLY', 'EHTH', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'OSTK', 'SALE', 'COUP', 'AAPL'],
			"weight":[20.12, 5.28, 1.08, 1.08, 1.06, 1.02, 0.94, 0.86, 23.21, 2.6, 2.34, 0.98, 0.96, 16.28, 6.2, 2.37, 1.02, 0.93, 3.15, 1.43, 1.21, 1.01, 0.98, 0.78, 3.12],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.27, 17.38, 12.61, 11.37, 27.14, 5.78, 1.29, 1.16],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.29, 5.54, 4.07, 4.01, 3.61, 3.14, 2.77, 1.3, 1.03, 0.72, 13.46, 10.66, 5.41, 5.92, 3.42, 0.79, 0.77, 0.74, 0.0, 11.64, 10.53, 4.18],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'ETR', 'AEP', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.88, 5.73, 4.91, 4.24, 4.21, 4.13, 3.29, 3.15, 2.83, 2.61, 2.43, 0.96, 5.19, 5.04, 4.91, 4.76, 4.29, 4.06, 3.58, 2.84, 4.64, 3.61, 4.51, 3.39, 2.8],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'MO', 'PEP', 'COST', 'SYY', 'CL', 'K', 'BF.B', 'GIS'],
			"weight":[7.05, 6.34, 4.95, 4.77, 4.48, 4.08, 3.75, 3.51, 3.07, 2.84, 2.79, 2.25, 1.46, 6.95, 6.77, 5.24, 5.14, 4.65, 4.63, 4.07, 3.08, 2.54, 2.5, 1.62, 1.48],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.97, 5.26, 3.87, 3.81, 3.43, 2.97, 2.62, 1.23, 0.98, 0.68, 12.78, 10.12, 5.13, 7.08, 4.09, 0.94, 0.92, 0.89, 0.0, 13.27, 9.99, 3.96],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'VTIP', 'IGF', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[15.75, 14.39, 12.16, 6.67, 6.53, 5.96, 5.08, 5.01, 11.85, 8.18, 2.92, 2.75, 2.74],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['SPY', 'VO', 'VBR', 'BSV', 'VTIP', 'VWO', 'VEU', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.72, 8.71, 8.48, 8.46, 8.41, 8.38, 8.07, 8.22, 7.72, 8.49, 8.22, 8.13],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.7, 18.15, 2.59, 0.95, 0.88, 8.98, 6.93, 5.79, 3.08, 2.53, 2.47, 2.0, 1.96, 1.54, 1.03, 0.99, 0.97, 6.54, 0.99, 0.96, 4.37, 4.34, 1.18, 1.05, 1.02],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'CSCO', 'GOOGL', 'QCOM', 'AAPL', 'ORCL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'ALTR', 'SYMC', 'LRCX', 'CA', 'ADI', 'GLW', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.46, 9.83, 9.83, 7.25, 5.62, 5.32, 3.45, 2.31, 2.16, 2.1, 2.1, 1.3, 1.3, 1.15, 0.92, 0.91, 0.87, 0.87, 6.73, 5.57, 6.42, 0.98, 2.64, 0.99, 0.94],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.61, 4.95, 3.64, 3.59, 3.22, 2.8, 2.48, 1.16, 0.92, 0.64, 12.04, 9.53, 4.83, 8.38, 4.84, 1.11, 1.09, 1.05, 14.97, 9.41, 3.73],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.21, 4.81, 4.28, 3.12, 2.84, 2.63, 2.22, 1.62, 0.97, 8.4, 5.13, 4.09, 3.37, 2.1, 5.78, 5.12, 4.41, 3.73, 6.48, 3.91, 3.47, 2.58, 7.13, 1.34, 5.27],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VTI', 'VWO', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.61, 19.9, 18.84, 20.56, 20.09],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.23, 4.61, 3.39, 3.34, 3.01, 2.61, 2.3, 1.08, 0.86, 0.6, 11.21, 8.87, 4.51, 9.85, 5.69, 1.3, 1.28, 1.23, 16.78, 8.77, 3.47],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.5, 5.24, 4.64, 4.18, 3.56, 2.84, 1.86, 1.49, 1.47, 1.0, 0.97, 13.51, 11.98, 4.1, 1.17, 1.0, 0.98, 17.72, 3.32, 9.07, 2.38, 2.0],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'CF', 'FLEX'],
			"weight":[8.62, 8.37, 5.56, 4.98, 4.72, 3.6, 3.16, 2.55, 2.11, 1.97, 1.83, 1.21, 1.12, 0.95, 7.0, 6.41, 5.33, 7.64, 4.14, 4.17, 2.37, 1.82, 8.27, 1.12, 0.99],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['NKE', 'KO', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'PEP', 'MDLZ', 'MNST', 'MCD', 'LB', 'PG', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[9.71, 9.04, 7.49, 6.64, 4.45, 4.12, 3.83, 3.68, 3.6, 3.54, 3.18, 3.14, 3.13, 2.83, 2.61, 10.85, 6.43, 4.46, 3.86, 3.42],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.41, 5.76, 4.09, 3.98, 3.87, 3.41, 3.19, 3.03, 2.82, 2.44, 6.58, 6.08, 5.27, 3.7, 3.6, 3.17, 2.1, 5.32, 4.61, 4.24, 3.48, 3.35, 2.66, 3.93, 2.92],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'SKYW', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.14, 10.04, 7.79, 4.88, 3.71, 2.33, 1.2, 1.07, 0.93, 0.92, 7.57, 5.04, 3.55, 2.33, 1.15, 1.05, 1.02, 0.99, 0.98, 0.93, 18.28, 5.91, 3.49, 3.1, 1.6],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'VSAT', 'XLS', 'MRCY', 'FLIR', 'KTOS', 'VEC', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[25.13, 11.99, 9.44, 2.11, 0.92, 0.9, 10.99, 3.61, 3.27, 2.02, 1.89, 1.43, 1.19, 1.12, 1.0, 0.93, 0.9, 0.88, 0.79, 0.06, 13.64, 2.05, 1.08, 0.85, 0.94, 0.85],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['TJX', 'CVS', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'SIAL', 'PX', 'QCOM', 'JKHY', 'ORCL', 'OMC', 'CTAS', 'FDS', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.27, 4.22, 4.06, 3.55, 2.08, 3.85, 3.63, 3.21, 2.46, 1.16, 6.52, 3.95, 3.41, 6.92, 6.68, 5.27, 4.87, 3.28, 4.51, 3.94, 3.71, 4.13, 3.27, 4.16, 2.86],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.23, 3.11, 3.07, 2.76, 2.39, 2.11, 0.99, 0.79, 0.55, 11.54, 6.67, 1.53, 1.5, 1.44, 10.28, 8.14, 4.14, 18.73, 8.05, 3.19],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.67, 6.88, 6.69, 4.91, 3.71, 3.55, 3.45, 1.95, 30.35, 13.06, 3.03, 1.75],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'HPY', 'EVTC', 'JKHY', 'EEFT', 'ONE', 'FLT', 'EBAY', 'HAWK', 'GDOT', 'QIWI', 'WEX', 'UEPS', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[19.83, 19.29, 13.87, 4.21, 4.14, 3.65, 2.73, 2.66, 1.05, 1.01, 1.0, 0.99, 0.95, 0.7, 7.26, 6.65, 1.18, 1.18, 1.05, 1.0, 0.93, 1.68, 1.03, 1.03, 0.94],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[31.05, 19.59, 14.19, 4.99, 15.16, 15.03],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'HTHT', 'MR', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'UGP', 'VIV', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.8, 9.4, 6.43, 5.27, 4.89, 4.78, 3.18, 2.88, 2.47, 2.02, 1.31, 1.09, 1.06, 1.0, 0.88, 4.38, 3.52, 2.1, 2.1, 1.5, 10.03, 1.1, 3.94, 3.33, 5.53],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.26, 7.83, 1.78, 1.76, 1.7, 4.32, 3.81, 2.8, 2.75, 2.48, 2.16, 1.9, 0.9, 0.71, 0.5, 20.91, 9.26, 7.34, 3.73, 7.24, 2.87],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'NKE', 'COST', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MRK', 'PFE', 'MDT', 'MMM', 'ITW', 'WFC'],
			"weight":[5.97, 5.43, 5.13, 5.01, 4.96, 4.85, 5.52, 5.08, 4.99, 4.9, 4.89, 4.57, 5.21, 5.13, 4.84, 4.74, 4.67, 4.72, 4.62, 4.78],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.9, 11.97, 9.76, 7.23, 5.33, 5.03, 3.45, 3.17, 2.47, 1.37, 0.71, 0.54, 18.68, 6.62, 1.08, 6.59, 1.09, 1.0],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.6, 14.9, 13.63, 4.79, 4.4, 2.29, 1.52, 1.16, 1.03, 3.4, 2.11, 1.99, 1.74, 1.38, 1.26, 9.43, 7.82, 1.56],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.73, 25.3, 25.08, 23.9],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['CERN', 'XNPT', 'DYAX', 'ALNY', 'CLC', 'CBRL', 'HSNI', 'PG', 'BRCD', 'MTSN', 'RENT', 'HEES', 'BAC', 'FXCM', 'KAI'],
			"weight":[6.77, 6.75, 6.67, 6.63, 6.72, 6.71, 6.65, 6.64, 6.7, 6.62, 6.67, 6.65, 6.64, 6.63, 6.56],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'CVGW', 'BDBD', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.49, 10.14, 9.79, 8.98, 2.8, 2.73, 2.02, 1.69, 1.64, 1.05, 1.0, 15.86, 7.96, 3.13, 1.17, 0.88, 8.62, 5.37, 1.83, 0.86],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.43, 9.18, 2.08, 2.06, 1.99, 23.36, 3.76, 3.32, 2.43, 2.4, 2.16, 1.87, 1.65, 0.78, 0.62, 0.43, 8.06, 6.38, 3.24, 6.3, 2.5],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.45, 33.57, 31.99],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.21, 18.99, 13.37, 11.63, 13.49, 4.98, 1.21, 0.99, 11.48, 2.83, 0.93, 0.88],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'ULTA', 'COTY', 'IFF', 'LB', 'AVP', 'SBH', 'NUS', 'REV', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'USNA', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.95, 15.73, 6.38, 4.08, 4.08, 2.47, 2.32, 2.2, 1.89, 1.01, 1.01, 0.91, 0.62, 14.21, 1.41, 1.32, 1.19, 1.01, 0.98, 0.66, 0.51, 4.83, 3.42, 0.94, 0.88],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'SPNC', 'ELGX', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.32, 3.48, 2.73, 1.72, 22.32, 0.94, 13.91, 1.19, 0.96, 4.49, 3.46, 1.57, 1.06, 0.97, 9.67, 0.98, 3.43, 1.06, 1.01, 0.93, 0.81, 3.97, 1.07, 0.99, 0.97],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'MXIM', 'CLGX', 'CTSH', 'MANT', 'GLW', 'FEIC', 'FNSR', 'SCS', 'EMN', 'DHR', 'CIR', 'ALB', 'ENS', 'CRS', 'SPLS', 'CAG', 'CL', 'KRFT', 'DHI', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[4.35, 4.05, 4.04, 4.03, 3.97, 3.93, 3.83, 3.5, 4.36, 4.13, 4.1, 3.94, 3.92, 3.85, 3.52, 4.31, 4.24, 4.2, 3.98, 3.95, 4.15, 3.93, 3.98, 3.92, 3.83],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'STRZA', 'IMAX', 'AMCX', 'TV', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.37, 17.98, 17.55, 11.7, 11.01, 1.85, 5.93, 2.34, 1.06, 1.03, 0.94, 0.94, 3.65, 1.66, 0.96, 1.06, 1.0, 0.97],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.99, 27.37, 16.09, 15.91, 7.11, 4.52],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.39, 27.45, 15.9, 15.72, 7.92, 4.62],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.43, 28.24, 17.68, 16.07, 4.49, 4.09],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[29.98, 29.76, 19.31, 12.82, 4.77, 3.35],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.4, 25.61, 22.86, 12.13, 3.77, 3.24],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.27, 25.79, 18.55, 12.94, 7.05, 3.39],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[37.0, 36.05, 17.18, 9.77],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'DECK', 'ABV', 'ROST', 'CBD', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[8.84, 5.35, 4.66, 4.42, 4.37, 3.73, 3.68, 2.88, 1.86, 8.26, 6.82, 4.79, 3.64, 6.97, 5.88, 4.08, 1.1, 8.96, 4.98, 4.72],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'JAKK', 'LF', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'FL', 'BWS', 'CROX'],
			"weight":[16.86, 12.33, 15.9, 5.73, 3.65, 1.44, 1.21, 0.96, 7.81, 5.09, 0.99, 0.97, 12.79, 1.04, 4.0, 1.55, 1.03, 0.95, 1.98, 0.92, 1.0, 0.96, 0.85],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.34, 9.72, 3.0, 2.11, 1.58, 1.35, 1.12, 0.92, 6.88, 5.0, 4.52, 2.5, 1.13, 0.97, 0.96, 0.9, 18.04, 1.86, 0.98, 0.92, 0.86, 7.52, 4.6, 1.13, 9.1],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'HTLD', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.12, 13.87, 5.82, 5.54, 3.86, 1.08, 4.39, 4.25, 3.37, 2.24, 1.94, 1.04, 0.67, 15.93, 3.41, 2.27, 0.86, 1.38, 1.06, 1.06, 1.06, 0.97, 0.91, 1.61, 1.3],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.54, 5.3, 5.15, 5.11, 5.1, 4.88, 4.68, 3.32, 2.64, 1.32, 0.94, 6.54, 4.58, 4.47, 3.84, 3.32, 1.71, 5.36, 4.55, 3.13, 2.54, 3.41, 3.3, 4.28, 3.02],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[22.19, 20.11, 18.81, 18.59, 20.3],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[22.94, 15.22, 9.73, 7.9, 4.63, 2.21, 1.64, 1.62, 1.18, 1.05, 0.98, 0.91, 12.67, 6.54, 0.95, 1.37, 0.94, 0.92, 0.88, 0.85, 0.78, 0.65, 2.02, 0.76, 0.68],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.73, 25.3, 25.08, 23.9],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.01, 6.21, 5.66, 4.86, 3.07, 1.35, 0.96, 14.93, 4.86, 2.24, 1.69, 1.18, 0.99, 6.64, 4.83, 3.57, 1.42, 6.47, 2.6, 0.98, 2.3, 1.47, 1.56, 1.27, 0.88],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.5, 5.24, 4.64, 4.18, 3.56, 2.84, 1.86, 1.49, 1.47, 1.0, 0.97, 13.51, 11.98, 4.1, 1.17, 1.0, 0.98, 17.72, 3.32, 9.07, 2.38, 2.0],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'HCA', 'LPNT', 'THC', 'SEM', 'CYH', 'KND', 'HLS', 'SCAI', 'CERN', 'QSII', 'ATHN', 'CPSI', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.71, 5.81, 5.65, 3.07, 3.0, 1.2, 0.97, 0.96, 0.95, 16.14, 2.3, 2.23, 2.1, 0.91, 19.45, 1.42, 6.33, 3.02, 2.49, 1.47, 6.13, 3.92, 0.94, 0.94, 0.91],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'TCO', 'EQY', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.89, 6.17, 6.14, 4.59, 3.76, 1.36, 1.03, 13.26, 4.79, 4.77, 3.58, 1.93, 7.48, 6.33, 1.69, 1.07, 5.28, 4.68, 2.45, 1.01, 4.25, 2.98, 1.0, 1.41, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[23.48, 19.97, 10.53, 7.07, 4.59, 1.09, 17.72, 3.25, 2.31, 1.83, 1.56, 1.05, 1.01, 0.99, 0.98, 0.92, 0.89, 0.75],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.6, 14.9, 13.63, 4.79, 4.4, 2.29, 1.52, 1.16, 1.03, 3.4, 2.11, 1.99, 1.74, 1.38, 1.26, 9.43, 7.82, 1.56],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'SKYW', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.14, 10.04, 7.79, 4.88, 3.71, 2.33, 1.2, 1.07, 0.93, 0.92, 7.57, 5.04, 3.55, 2.33, 1.15, 1.05, 1.02, 0.99, 0.98, 0.93, 18.28, 5.91, 3.49, 3.1, 1.6],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'MWW', 'EVDY', 'Z', 'DHX', 'WBMD', 'ZPIN', 'TRUE', 'RUBI', 'FUEL', 'MKTO', 'SCOR', 'CRTO', 'CTCT', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.51, 22.22, 4.65, 12.38, 5.42, 2.68, 6.79, 2.28, 1.03, 1.01, 1.0, 0.99, 0.9, 0.9, 0.82, 1.26, 1.09, 1.04, 1.0, 0.99, 0.98, 0.87, 2.21, 1.04, 0.96],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['TLT', 'PZA', 'VCLT', 'SHV', 'VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA', 'IAU'],
			"weight":[8.63, 8.57, 8.35, 25.28, 7.68, 3.19, 2.76, 1.48, 1.16, 1.08, 0.95, 0.93, 0.81, 0.79, 0.74, 0.65, 0.55, 0.54, 0.47, 0.37, 0.31, 0.16, 24.55],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.9, 11.97, 9.76, 7.23, 5.33, 5.03, 3.45, 3.17, 2.47, 1.37, 0.71, 0.54, 18.68, 6.62, 1.08, 6.59, 1.09, 1.0],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.78, 8.72, 5.77, 5.39, 4.39, 2.97, 2.07, 14.83, 8.76, 5.09, 3.59, 1.53, 1.36, 1.12, 6.74, 3.24, 0.57, 0.26, 4.61, 1.22],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'TCRD', 'FSC', 'AINV', 'FDUS', 'GAIN', 'TICC', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.06, 9.7, 6.24, 4.79, 4.36, 3.86, 3.35, 2.45, 2.23, 1.94, 1.69, 1.13, 1.05, 1.04, 1.03, 0.99, 0.98, 0.97, 18.81, 6.98, 6.32, 4.3, 3.05, 1.64, 1.03],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'AXS', 'IPCC', 'RLI', 'PRA', 'ACGL', 'RE', 'MRH', 'TPRE', 'VR', 'GLRE', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.68, 10.96, 8.94, 7.34, 6.2, 6.15, 4.59, 3.22, 2.96, 2.53, 1.07, 1.03, 1.01, 0.98, 0.97, 0.96, 5.8, 3.44, 1.86, 1.06, 1.03, 0.96, 7.32, 5.93, 1.03],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[35.14, 15.5, 7.1, 2.85, 9.36, 7.83, 4.99, 1.1, 6.61, 3.91, 3.0, 1.5, 1.11],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['AAVL', 'OTIC', 'CTLT', 'KITE', 'XENT', 'ZFGN', 'ADPT', 'TTOO', 'MBLY', 'RYI', 'WMS', 'ICD', 'OEC', 'GPRO', 'LOCO', 'MIK', 'SERV', 'FCB', 'GNBC', 'TRUP', 'HQY', 'ECR', 'TERP', 'MRKT', 'TUBE'],
			"weight":[4.61, 4.58, 4.36, 3.94, 3.8, 3.46, 3.36, 3.0, 4.93, 4.73, 4.18, 3.91, 3.89, 6.93, 4.18, 3.87, 3.71, 3.74, 3.63, 3.6, 3.51, 3.52, 3.52, 3.53, 3.51],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.15, 15.15, 11.76, 14.95, 14.15, 6.89, 3.96, 0.99, 5.03, 0.97],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.67, 6.88, 6.69, 4.91, 3.71, 3.55, 3.45, 1.95, 30.35, 13.06, 3.03, 1.75],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'SPNC', 'EXAS', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.09, 14.53, 9.6, 5.87, 3.28, 2.69, 2.45, 1.48, 1.39, 1.36, 1.04, 0.86, 0.78, 6.7, 5.97, 2.66, 1.06, 0.96, 0.95, 0.9, 0.8, 7.26, 2.32, 1.0, 1.0],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'LMT', 'CSX', 'UNP', 'NOC', 'GD', 'RTN', 'HON', 'BA', 'GE', 'UPS', 'UTX', 'GS', 'BAC', 'MS', 'JPM', 'BRK.B', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.34, 4.27, 4.23, 4.2, 4.19, 4.16, 3.99, 3.87, 3.67, 3.66, 3.61, 3.49, 4.43, 4.33, 4.31, 4.19, 4.16, 3.92, 3.68, 3.36, 4.46, 4.27, 3.82, 3.83, 3.57],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.27, 17.38, 12.61, 11.37, 27.14, 5.78, 1.29, 1.16],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[16.05, 9.59, 2.15, 2.15, 2.07, 23.25, 3.1, 2.73, 2.0, 1.98, 1.78, 1.55, 1.36, 0.64, 0.51, 0.35, 6.63, 5.25, 2.67, 6.58, 5.46, 2.16],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.43, 9.18, 2.08, 2.06, 1.99, 23.36, 3.76, 3.32, 2.43, 2.4, 2.16, 1.87, 1.65, 0.78, 0.62, 0.43, 8.06, 6.38, 3.24, 6.3, 2.5],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.26, 7.83, 1.78, 1.76, 1.7, 4.32, 3.81, 2.8, 2.75, 2.48, 2.16, 1.9, 0.9, 0.71, 0.5, 20.91, 9.26, 7.34, 3.73, 7.24, 2.87],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.23, 3.11, 3.07, 2.76, 2.39, 2.11, 0.99, 0.79, 0.55, 11.54, 6.67, 1.53, 1.5, 1.44, 10.28, 8.14, 4.14, 18.73, 8.05, 3.19],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.23, 4.61, 3.39, 3.34, 3.01, 2.61, 2.3, 1.08, 0.86, 0.6, 11.21, 8.87, 4.51, 9.85, 5.69, 1.3, 1.28, 1.23, 16.78, 8.77, 3.47],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.61, 4.95, 3.64, 3.59, 3.22, 2.8, 2.48, 1.16, 0.92, 0.64, 12.04, 9.53, 4.83, 8.38, 4.84, 1.11, 1.09, 1.05, 14.97, 9.41, 3.73],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.97, 5.26, 3.87, 3.81, 3.43, 2.97, 2.62, 1.23, 0.98, 0.68, 12.78, 10.12, 5.13, 7.08, 4.09, 0.94, 0.92, 0.89, 0.0, 13.27, 9.99, 3.96],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.29, 5.54, 4.07, 4.01, 3.61, 3.14, 2.77, 1.3, 1.03, 0.72, 13.46, 10.66, 5.41, 5.92, 3.42, 0.79, 0.77, 0.74, 0.0, 11.64, 10.53, 4.18],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.11, 15.02, 9.68, 5.31, 3.04, 2.9, 2.49, 2.43, 1.98, 1.69, 1.38, 1.02, 0.99, 0.92, 7.31, 4.28, 1.7, 1.13, 1.09, 8.86, 0.98, 3.58, 1.2, 1.06, 0.86],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.04, 18.53, 9.66, 20.1, 5.17, 0.89, 0.6, 10.38, 1.75, 0.73, 3.74, 1.97, 1.58, 0.96, 0.9],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.34, 9.72, 3.0, 2.11, 1.58, 1.35, 1.12, 0.92, 6.88, 5.0, 4.52, 2.5, 1.13, 0.97, 0.96, 0.9, 18.04, 1.86, 0.98, 0.92, 0.86, 7.52, 4.6, 1.13, 9.1],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'SPNC', 'ELGX', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.32, 3.48, 2.73, 1.72, 22.32, 0.94, 13.91, 1.19, 0.96, 4.49, 3.46, 1.57, 1.06, 0.97, 9.67, 0.98, 3.43, 1.06, 1.01, 0.93, 0.81, 3.97, 1.07, 0.99, 0.97],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'STZ', 'BUD', 'RAI', 'BF.B', 'LO', 'MCD', 'BTI', 'YUM', 'PM', 'DEO', 'DISH', 'CHTR', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.56, 4.22, 4.14, 4.05, 4.0, 3.99, 3.9, 3.88, 3.87, 3.84, 3.66, 4.56, 4.47, 4.27, 3.97, 3.75, 3.54, 3.43, 3.24, 3.07, 4.73, 4.6, 4.86, 4.01, 3.37],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'MHR', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'FST', 'CRK', 'XCO', 'GDP', 'ROSE', 'SFY', 'SM'],
			"weight":[16.46, 12.66, 9.49, 4.45, 4.13, 3.55, 2.4, 1.07, 1.04, 1.01, 0.98, 0.92, 14.25, 0.54, 14.15, 4.23, 0.99, 1.07, 0.97, 0.92, 0.89, 0.81, 1.06, 1.01, 0.97],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'CWEI', 'FANG', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[22.8, 7.73, 6.08, 5.12, 3.89, 1.33, 1.04, 0.87, 15.45, 6.9, 4.61, 1.51, 1.06, 1.03, 1.01, 1.0, 0.97, 0.91, 4.9, 3.06, 4.06, 1.83, 0.99, 0.89, 0.99],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.54, 5.3, 5.15, 5.11, 5.1, 4.88, 4.68, 3.32, 2.64, 1.32, 0.94, 6.54, 4.58, 4.47, 3.84, 3.32, 1.71, 5.36, 4.55, 3.13, 2.54, 3.41, 3.3, 4.28, 3.02],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.73, 13.07, 11.88, 13.82, 7.77, 1.33, 6.72, 4.64, 2.05],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'NKE', 'COST', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MRK', 'PFE', 'MDT', 'MMM', 'ITW', 'WFC'],
			"weight":[5.97, 5.43, 5.13, 5.01, 4.96, 4.85, 5.52, 5.08, 4.99, 4.9, 4.89, 4.57, 5.21, 5.13, 4.84, 4.74, 4.67, 4.72, 4.62, 4.78],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[24.48, 21.56, 13.34, 6.86, 1.74, 1.39, 1.35, 0.91, 14.6, 2.07, 7.61, 1.42, 1.36, 1.31],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'CALD', 'SQI', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.76, 11.69, 8.05, 7.65, 6.41, 4.57, 3.47, 1.72, 1.2, 1.09, 0.9, 3.91, 3.86, 2.72, 2.34, 1.95, 1.51, 0.95, 2.84, 1.01, 1.99, 1.5, 1.92, 0.97, 1.01],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['NX', 'RYAM', 'BWC', 'TMST', 'XYL', 'WBC', 'CLW', 'DPS', 'WWAV', 'HSNI', 'SBH', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'SAIC', 'JBT', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.27, 4.17, 4.1, 4.07, 4.06, 3.91, 3.64, 4.36, 4.27, 4.25, 4.16, 3.84, 4.38, 4.18, 3.8, 4.13, 4.11, 3.68, 4.02, 4.0, 3.85, 4.07, 3.96, 3.18, 3.54],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['MCD', 'ROL', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'SIAL', 'BCPC', 'FDS', 'USTR', 'FTI'],
			"weight":[5.11, 5.07, 4.24, 3.98, 2.48, 1.75, 8.63, 4.81, 3.59, 2.65, 5.43, 3.52, 3.47, 2.39, 1.63, 8.73, 3.46, 5.02, 4.56, 0.96, 8.52, 1.09, 4.8, 2.95, 1.15],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'ATML', 'NVDA', 'CRUS', 'SIMO', 'STM', 'FCS', 'INVN', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.53, 9.19, 8.38, 4.6, 1.42, 1.08, 0.99, 0.97, 0.94, 0.93, 0.92, 0.91, 0.9, 0.9, 0.81, 24.43, 1.01, 0.98, 15.57, 9.56, 0.98],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'LUV', 'AAL', 'RYAAY', 'UAL', 'LFL', 'ALK', 'SAVE', 'CPA', 'JBLU', 'RJET', 'AVH', 'VLRS', 'HA', 'GOL', 'SKYW', 'AL', 'AER', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[13.9, 10.84, 10.68, 9.84, 8.34, 4.61, 4.43, 3.61, 3.29, 1.85, 1.12, 1.1, 1.06, 0.92, 0.87, 0.74, 4.53, 4.51, 1.04, 0.98, 0.97, 0.86, 5.97, 2.8, 1.16],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'ETN', 'IR', 'TRIB', 'IHG', 'AZN', 'GSK', 'GWPH', 'ARMH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'QGEN', 'STM', 'PNR', 'TEL', 'LOGI', 'IMOS', 'HELE', 'G', 'FDP', 'SIMO'],
			"weight":[4.58, 4.42, 4.21, 3.78, 3.78, 3.69, 4.18, 4.02, 3.97, 3.94, 3.9, 3.51, 4.69, 4.55, 4.09, 3.93, 3.78, 3.87, 3.79, 3.74, 3.82, 3.77, 3.74, 4.25, 4.01],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'WAGE', 'CVT', 'MKTO', 'ELLI', 'FLTX', 'LPSN', 'RP', 'SAAS', 'DWRE', 'PGI', 'SPSC', 'CTCT', 'TXTR', 'LXFT', 'NICE', 'MSTR', 'PRO', 'CVLT', 'DWCH', 'QLYS', 'RDWR', 'PFPT', 'AVG', 'IMPV'],
			"weight":[4.39, 4.28, 4.17, 4.09, 4.07, 4.01, 3.97, 3.97, 3.92, 3.92, 3.87, 3.85, 3.82, 3.72, 4.35, 4.25, 3.93, 3.83, 3.76, 3.51, 4.36, 4.18, 3.97, 3.94, 3.85],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'FDML', 'SHLO', 'AXL', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[26.4, 13.38, 12.8, 9.86, 4.86, 2.77, 5.01, 4.98, 1.26, 0.99, 0.52, 3.85, 1.53, 1.16, 1.1, 0.92, 1.85, 0.95, 0.94, 0.93, 0.86, 1.22, 0.92, 0.92],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'GS', 'MS', 'AIG', 'MET', 'BK', 'STT'],
			"weight":[13.73, 10.03, 8.84, 6.11, 17.97, 5.29, 2.97, 2.48, 1.71, 1.36, 1.22, 0.84, 0.83, 6.15, 4.38, 6.77, 3.75, 3.13, 2.42],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'HTLD', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.12, 13.87, 5.82, 5.54, 3.86, 1.08, 4.39, 4.25, 3.37, 2.24, 1.94, 1.04, 0.67, 15.93, 3.41, 2.27, 0.86, 1.38, 1.06, 1.06, 1.06, 0.97, 0.91, 1.61, 1.3],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'LAD', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.79, 17.37, 14.53, 10.16, 7.4, 0.92, 9.55, 5.81, 2.5, 1.03, 1.0, 0.97, 2.62, 1.56, 0.86, 2.87, 1.06],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['TLT', 'TLH', 'IEF', 'BSV', 'SCHR'],
			"weight":[12.81, 12.56, 24.93, 24.87, 24.83],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.7, 18.15, 2.59, 0.95, 0.88, 8.98, 6.93, 5.79, 3.08, 2.53, 2.47, 2.0, 1.96, 1.54, 1.03, 0.99, 0.97, 6.54, 0.99, 0.96, 4.37, 4.34, 1.18, 1.05, 1.02],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'ULTA', 'COTY', 'IFF', 'LB', 'AVP', 'SBH', 'NUS', 'REV', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'USNA', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.95, 15.73, 6.38, 4.08, 4.08, 2.47, 2.32, 2.2, 1.89, 1.01, 1.01, 0.91, 0.62, 14.21, 1.41, 1.32, 1.19, 1.01, 0.98, 0.66, 0.51, 4.83, 3.42, 0.94, 0.88],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'RJF', 'PJC', 'GHL', 'COWN', 'EVR', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.46, 11.3, 9.65, 7.65, 6.71, 4.87, 4.23, 3.97, 3.96, 3.27, 1.8, 1.54, 1.01, 2.88, 1.43, 1.2, 1.0, 0.97, 0.96, 0.95, 0.93, 0.93, 2.7, 1.67, 0.97],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'WMS', 'MWA', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'PICO', 'CWCO'],
			"weight":[11.86, 4.24, 4.19, 3.86, 2.73, 1.34, 1.16, 1.1, 1.0, 0.98, 12.0, 8.55, 7.7, 2.21, 9.52, 7.37, 5.52, 2.36, 1.0, 0.96, 6.37, 1.02, 1.01, 0.98, 0.97],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GOOGL', 'GRMN', 'AAPL', 'ARMH', 'TXN', 'MXIM', 'MCHP', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[18.05, 11.62, 11.62, 11.24, 3.25, 2.96, 2.9, 2.9, 2.25, 1.75, 1.51, 3.39, 2.79, 2.68, 2.41, 2.02, 0.98, 3.55, 3.37, 2.89, 1.3, 1.28, 0.85, 1.35, 1.1],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[22.94, 15.22, 9.73, 7.9, 4.63, 2.21, 1.64, 1.62, 1.18, 1.05, 0.98, 0.91, 12.67, 6.54, 0.95, 1.37, 0.94, 0.92, 0.88, 0.85, 0.78, 0.65, 2.02, 0.76, 0.68],
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
