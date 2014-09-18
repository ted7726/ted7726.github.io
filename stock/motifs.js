function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'RSPP', 'CWEI', 'FANG', 'AREX', 'CPE', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[22.75, 8.29, 6.18, 5.36, 4.13, 1.49, 1.03, 0.95, 15.34, 6.69, 3.6, 1.54, 1.03, 1.01, 1.0, 0.99, 0.97, 0.96, 4.84, 3.08, 3.85, 1.91, 1.01, 0.99, 1.01],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'CAM', 'RES', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.42, 8.19, 5.74, 5.18, 5.04, 4.76, 4.57, 2.46, 1.19, 0.87, 0.7, 0.59, 10.76, 6.58, 2.09, 1.0, 0.91, 7.57, 2.87, 2.54, 1.01, 0.83, 4.1, 3.1, 0.94],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'SLCA', 'AA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'Z', 'AKRX'],
			"weight":[7.88, 5.28, 4.58, 2.78, 1.76, 4.96, 3.56, 3.21, 2.88, 2.68, 6.96, 4.76, 2.95, 2.34, 6.51, 6.06, 2.34, 5.62, 3.22, 3.42, 3.17, 4.49, 2.02, 3.35, 3.23],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.69, 21.01, 19.76, 13.65, 10.11, 6.08, 3.32, 1.37],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[17.68, 11.84, 10.09, 8.16, 6.34, 4.69, 4.42, 4.23, 4.18, 3.73, 3.16, 2.81, 2.43, 2.32, 1.88, 1.32, 1.27, 1.23, 1.08, 0.98, 1.59, 1.43, 0.71, 1.46, 0.98],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[25.13, 13.87, 12.52, 11.15, 9.54, 2.53, 2.26, 1.67, 1.55, 1.45, 1.44, 6.27, 1.83, 4.59, 3.07, 1.12],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[29.61, 21.64, 18.78, 17.22, 12.74],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[20.14, 19.55, 17.5, 23.03, 19.78],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.68, 19.81, 34.1, 21.41],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.31, 12.66, 9.2, 4.63, 4.06, 3.61, 2.4, 1.05, 1.05, 1.04, 0.98, 0.93, 13.84, 0.89, 14.08, 4.24, 0.97, 1.1, 1.05, 1.03, 0.95, 0.9, 1.02, 1.0, 1.0],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.91, 5.96, 5.55, 4.96, 3.15, 1.39, 0.96, 14.53, 4.75, 2.2, 1.71, 1.16, 1.0, 7.83, 4.75, 3.52, 1.44, 6.06, 2.53, 1.0, 2.38, 1.48, 1.59, 1.26, 0.92],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'IMGN', 'SGEN', 'CRIS', 'GILD', 'CBST', 'EBS', 'ALXN', 'REGN', 'VRTX', 'UTHR', 'MDCO', 'LGND', 'ACOR', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.3, 11.21, 0.99, 0.98, 0.93, 19.2, 2.4, 0.92, 4.23, 4.2, 3.6, 2.14, 1.03, 1.0, 0.95, 9.17, 3.49, 2.51, 0.87, 4.6, 2.78, 2.45, 1.11, 0.97, 0.96],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.6, 20.14, 14.08, 6.5, 1.67, 1.43, 1.4, 0.92, 15.52, 2.26, 8.23, 1.49, 1.38, 1.37],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.73, 19.11, 14.11, 2.89, 1.44, 18.93, 14.86, 5.04, 3.9],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'NEU', 'WLK', 'HUN', 'EMN', 'MEOH', 'GRA', 'CE', 'LXU', 'POL', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'CVI', 'ALJ', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[13.64, 13.0, 7.83, 3.15, 3.14, 1.07, 1.04, 1.04, 1.03, 1.01, 0.97, 0.97, 9.19, 6.57, 6.44, 3.02, 2.31, 1.27, 0.99, 0.97, 0.97, 0.94, 15.62, 2.94, 0.91],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'MWW', 'WBMD', 'EVDY', 'ZPIN', 'DHX', 'TRUE', 'RUBI', 'MKTO', 'CTCT', 'CRTO', 'SCOR', 'FUEL', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.34, 21.59, 4.9, 11.8, 5.24, 2.9, 7.03, 2.47, 1.1, 1.02, 1.01, 1.0, 1.0, 0.99, 0.91, 1.2, 1.04, 1.04, 1.02, 1.02, 1.02, 0.93, 2.34, 1.06, 1.02],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'HSP', 'TARO', 'RDY', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.14, 19.95, 18.12, 10.04, 9.9, 9.83, 4.31, 2.54, 2.34, 1.82],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.84, 6.17, 6.11, 4.62, 3.73, 1.39, 1.02, 13.25, 4.79, 4.77, 3.58, 1.89, 7.47, 6.31, 1.73, 1.05, 5.24, 4.71, 2.49, 1.0, 4.26, 3.04, 1.0, 1.43, 1.11],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'CMCM', 'XNET', 'YY'],
			"weight":[23.24, 19.62, 10.95, 6.7, 4.93, 1.05, 17.75, 3.1, 2.24, 1.86, 1.64, 1.1, 1.03, 1.0, 0.98, 0.95, 0.94, 0.92],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'OKS', 'WES', 'TCP', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'ENLK', 'EPB', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.0, 6.66, 6.2, 5.84, 5.38, 4.58, 4.45, 4.08, 3.9, 3.68, 3.4, 3.22, 3.17, 2.98, 2.9, 2.72, 2.7, 2.6, 2.33, 2.17, 4.72, 4.66, 4.33, 4.14, 2.18],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'EPZM', 'SNSS', 'TSRO', 'PGNX', 'DYAX', 'THLD', 'MGNX', 'VSTM', 'IMMU', 'NLNK', 'CRIS', 'CLDX', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[24.41, 6.59, 5.8, 4.53, 1.57, 25.33, 2.9, 2.34, 1.88, 1.74, 1.7, 1.58, 1.46, 1.31, 1.17, 1.1, 1.09, 1.09, 1.07, 0.97, 0.94, 3.48, 2.56, 2.43, 0.97],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[20.03, 16.9, 14.02, 10.01, 7.41, 0.95, 10.39, 6.01, 2.55, 1.03, 1.01, 0.9, 2.57, 1.4, 0.82, 2.95, 1.05],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.03, 15.54, 12.01, 14.77, 13.58, 6.89, 4.14, 1.05, 4.97, 1.03],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'RL', 'VFC', 'NKE', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.69, 5.31, 4.95, 4.8, 4.43, 3.22, 2.38, 2.3, 1.8, 5.87, 5.63, 4.22, 3.71, 3.68, 2.35, 1.44, 12.12, 5.84, 5.3, 1.27, 4.67, 1.82, 1.46, 2.71, 2.04],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['EDE', 'LG', 'DUK', 'AWK', 'ED', 'XEL', 'CMS', 'DTE', 'SO', 'PPL', 'NWN', 'D', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'K', 'MCD', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.16, 4.12, 4.11, 4.1, 4.09, 4.03, 4.02, 3.98, 3.96, 3.93, 3.89, 3.89, 3.87, 4.38, 4.26, 4.12, 4.09, 3.91, 3.8, 3.78, 3.68, 3.59, 4.34, 4.09, 3.8],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'MXIM', 'ATML', 'SIMG', 'CRUS', 'INVN', 'HIMX', 'NVDA', 'STM', 'SIMO', 'FCS', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.66, 9.37, 8.0, 4.79, 1.57, 0.99, 0.99, 0.98, 0.97, 0.97, 0.97, 0.96, 0.96, 0.94, 0.94, 24.82, 1.07, 1.02, 14.39, 9.63, 1.03],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.45, 8.89, 6.04, 5.44, 4.43, 2.92, 2.11, 14.81, 8.64, 5.19, 3.64, 1.45, 1.45, 1.05, 6.64, 3.11, 0.58, 0.28, 4.58, 1.28],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'ELGX', 'PODD', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[22.88, 14.8, 9.72, 5.67, 3.55, 2.69, 2.41, 1.43, 1.43, 1.35, 1.12, 0.93, 0.74, 6.3, 5.98, 2.72, 1.02, 0.98, 0.98, 0.95, 0.93, 7.14, 2.28, 1.0, 0.98],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'OMC', 'CLX', 'K', 'PEP', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'OKE', 'D', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[9.95, 6.46, 6.32, 5.62, 5.61, 4.91, 4.71, 2.43, 1.0, 4.52, 4.16, 4.14, 4.05, 3.36, 2.39, 2.24, 1.03, 0.99, 4.41, 3.27, 2.38, 5.92, 5.83, 3.32, 1.0],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.56, 13.61, 12.24, 4.34, 3.59, 1.7, 1.23, 0.81, 11.5, 6.72, 4.46, 0.9, 21.36],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'DPZ', 'DNKN', 'WEN', 'SONC', 'TAST', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'FRSH', 'TR', 'KRFT', 'DMND', 'UL'],
			"weight":[20.69, 19.97, 3.17, 2.1, 17.22, 4.4, 1.68, 1.09, 1.06, 1.05, 1.05, 1.04, 1.02, 0.95, 0.94, 0.93, 0.77, 11.24, 3.85, 1.03, 1.0, 0.97, 0.97, 0.85, 0.96],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BIG', 'BURL', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'CHS', 'TFM', 'MOV', 'BID'],
			"weight":[24.81, 7.96, 6.21, 5.98, 2.5, 1.26, 1.12, 1.07, 1.04, 1.02, 0.96, 0.89, 12.35, 7.81, 5.66, 4.97, 3.89, 2.04, 1.66, 1.5, 1.32, 1.02, 1.0, 0.98, 0.98],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'MXIM', 'TXN', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.39, 5.29, 5.11, 3.53, 3.35, 2.94, 5.27, 4.14, 4.03, 3.62, 2.98, 2.72, 5.55, 4.94, 3.03, 3.03, 2.05, 6.88, 3.99, 5.13, 1.59, 0.99, 5.87, 5.19, 3.38],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'PIR', 'KIRK', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[31.77, 27.88, 3.44, 3.22, 6.96, 5.22, 3.73, 1.76, 1.67, 1.47, 1.32, 4.83, 3.01, 0.65, 3.07],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'PFE', 'MRK', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[12.06, 9.88, 10.03, 9.99, 9.8, 9.75, 10.29, 9.06, 9.77, 9.36],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'TUES', 'DSW', 'CATO', 'CTRN', 'DLTR', 'DG', 'FIVE', 'SVU', 'FRED', 'BIG', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[16.64, 11.36, 1.07, 0.89, 21.24, 1.0, 14.31, 3.31, 1.04, 1.02, 1.0, 0.96, 6.45, 5.9, 1.04, 1.02, 1.01, 1.01, 3.93, 1.68, 1.29, 1.01, 1.01, 0.82],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[19.48, 5.12, 4.09, 3.71, 3.51, 2.65, 1.93, 1.33, 0.95, 0.95, 11.16, 7.24, 4.3, 3.67, 1.82, 0.99, 0.92, 10.96, 1.56, 0.93, 5.9, 2.09, 1.77, 1.49, 1.47],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.38, 19.19, 14.98, 13.13, 4.39, 14.93, 7.24, 4.74],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['FSLR', 'TERP', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'TSL', 'HSOL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.21, 7.15, 6.81, 6.23, 2.41, 1.84, 1.51, 1.28, 1.03, 1.01, 5.55, 5.19, 4.32, 2.31, 0.95, 14.93, 12.65, 0.91, 2.31, 1.92, 1.41, 0.98, 5.6, 3.43, 1.07],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'LITB', 'NILE', 'EHTH', 'SFLY', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[20.11, 5.54, 1.09, 1.05, 1.05, 1.0, 0.98, 0.88, 22.55, 2.67, 2.5, 1.02, 1.01, 16.3, 6.01, 2.53, 0.99, 0.91, 3.17, 1.47, 1.13, 1.05, 1.04, 0.85, 3.11],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[23.23, 17.79, 12.82, 11.53, 26.22, 5.87, 1.29, 1.25],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.24, 5.52, 4.01, 3.99, 3.62, 3.17, 2.73, 1.29, 1.04, 0.71, 14.1, 10.85, 5.42, 11.36, 5.64, 3.32, 0.77, 0.75, 0.74, 0.0, 10.62, 4.12],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'AEP', 'ETR', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[8.01, 5.78, 4.96, 4.27, 4.17, 4.15, 3.39, 3.11, 2.88, 2.6, 2.38, 0.98, 5.24, 5.07, 4.94, 4.82, 4.26, 4.15, 3.6, 2.84, 4.44, 3.41, 4.42, 3.32, 2.79],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'K', 'CL', 'BF.B', 'GIS'],
			"weight":[7.05, 6.4, 5.05, 4.52, 4.32, 4.1, 3.7, 3.55, 3.11, 2.82, 2.8, 2.33, 1.44, 6.96, 6.8, 5.39, 5.09, 4.62, 4.5, 4.11, 3.1, 2.55, 2.53, 1.65, 1.5],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.94, 5.26, 3.81, 3.79, 3.44, 3.01, 2.58, 1.23, 0.99, 0.67, 13.41, 10.31, 5.15, 6.76, 3.97, 0.92, 0.9, 0.89, 0.0, 12.96, 10.1, 3.91],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'IGF', 'VTIP', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[15.63, 14.47, 12.66, 6.81, 6.46, 5.99, 5.02, 4.97, 11.72, 7.95, 2.89, 2.74, 2.69],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['VO', 'SPY', 'VBR', 'VWO', 'VEU', 'BSV', 'VTIP', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.66, 8.64, 8.58, 8.75, 8.19, 8.27, 8.24, 8.37, 7.66, 8.3, 8.28, 8.07],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.34, 17.77, 2.68, 0.98, 0.93, 9.14, 7.05, 5.73, 3.1, 2.55, 2.54, 2.02, 2.01, 1.58, 1.04, 1.01, 0.99, 6.52, 0.99, 0.99, 4.39, 4.31, 1.24, 1.07, 1.02],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'GOOGL', 'CSCO', 'QCOM', 'ORCL', 'AAPL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'GLW', 'ADI', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.44, 9.86, 9.85, 7.32, 5.66, 5.65, 3.37, 2.29, 2.19, 2.09, 2.0, 1.35, 1.32, 1.16, 0.95, 0.92, 0.9, 0.88, 6.75, 5.06, 6.37, 1.02, 2.69, 0.99, 0.93],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.59, 4.96, 3.6, 3.58, 3.25, 2.84, 2.44, 1.15, 0.93, 0.64, 12.65, 9.73, 4.86, 8.01, 4.71, 1.09, 1.07, 1.05, 14.65, 9.53, 3.69],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.27, 4.79, 4.36, 3.05, 2.87, 2.61, 2.24, 1.62, 0.98, 8.47, 5.15, 4.21, 3.42, 2.12, 5.7, 5.05, 4.41, 3.75, 6.51, 3.77, 3.51, 2.56, 7.16, 1.32, 5.11],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VWO', 'VTI', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.81, 20.55, 19.02, 20.03, 19.6],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.22, 4.62, 3.36, 3.34, 3.04, 2.65, 2.27, 1.08, 0.87, 0.6, 11.8, 9.07, 4.54, 9.44, 5.54, 1.28, 1.26, 1.24, 16.45, 8.89, 3.45],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.45, 5.28, 4.7, 4.09, 3.37, 2.87, 1.86, 1.54, 1.54, 1.25, 1.01, 13.3, 10.85, 4.13, 1.22, 1.03, 1.0, 18.7, 3.31, 9.07, 2.44, 2.02],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'FLEX', 'CF'],
			"weight":[8.44, 8.37, 5.78, 4.95, 4.81, 3.63, 3.13, 2.47, 2.15, 2.02, 1.79, 1.19, 1.1, 0.95, 7.07, 6.51, 5.39, 7.57, 4.04, 4.35, 2.36, 1.89, 8.05, 1.01, 1.0],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['KO', 'NKE', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'MDLZ', 'PEP', 'MNST', 'PG', 'MCD', 'LB', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[8.91, 8.85, 7.61, 6.9, 4.74, 4.13, 3.83, 3.73, 3.66, 3.51, 3.12, 3.08, 3.03, 2.81, 2.63, 10.92, 6.44, 4.8, 3.9, 3.41],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.47, 5.73, 4.05, 3.97, 3.89, 3.44, 3.38, 3.03, 2.74, 2.49, 6.51, 6.0, 5.07, 3.68, 3.58, 3.14, 2.15, 5.29, 4.65, 4.21, 3.63, 3.39, 2.72, 3.84, 2.95],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'LHO', 'CLDT', 'PEB', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.65, 9.92, 8.07, 4.98, 3.63, 2.22, 1.17, 1.1, 1.0, 0.98, 7.47, 5.18, 3.47, 2.22, 1.15, 0.98, 0.98, 0.98, 0.98, 0.96, 18.01, 5.81, 3.32, 3.15, 1.62],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'XLS', 'VSAT', 'FLIR', 'MRCY', 'KTOS', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[24.62, 11.99, 9.32, 2.1, 0.95, 0.92, 11.0, 3.52, 3.28, 2.1, 1.97, 1.5, 1.21, 1.15, 1.05, 1.03, 0.93, 0.92, 0.83, 13.76, 2.13, 1.07, 0.9, 0.88, 0.86],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['CVS', 'TJX', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'QCOM', 'JKHY', 'ORCL', 'OMC', 'CTAS', 'FDS', 'PX', 'SIAL', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.36, 4.3, 4.06, 3.5, 2.08, 4.02, 3.67, 3.38, 2.44, 1.19, 6.56, 3.94, 3.45, 5.37, 5.02, 3.52, 4.61, 4.0, 3.77, 6.79, 5.26, 4.2, 3.29, 4.3, 2.91],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.25, 3.09, 3.07, 2.79, 2.43, 2.09, 0.99, 0.8, 0.55, 10.85, 8.34, 4.18, 11.08, 6.51, 1.5, 1.48, 1.45, 18.41, 8.18, 3.17],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.52, 6.86, 6.76, 4.96, 3.7, 3.6, 3.47, 1.97, 30.68, 12.76, 3.0, 1.72],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'HPY', 'JKHY', 'EVTC', 'EEFT', 'ONE', 'FLT', 'EBAY', 'QIWI', 'HAWK', 'GDOT', 'UEPS', 'WEX', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[19.85, 19.45, 13.8, 4.21, 4.18, 3.62, 2.71, 2.67, 1.03, 1.0, 1.0, 0.98, 0.93, 0.9, 7.24, 6.44, 1.09, 1.04, 1.03, 1.03, 0.99, 1.68, 1.09, 1.03, 1.0],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[31.01, 19.8, 14.36, 5.24, 14.8, 14.79],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'MR', 'HTHT', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'UGP', 'VIV', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.49, 9.45, 6.39, 5.28, 4.55, 4.5, 3.32, 2.9, 2.43, 2.07, 1.31, 1.04, 1.02, 0.98, 0.93, 4.34, 3.92, 2.22, 2.21, 1.57, 9.68, 1.03, 4.41, 3.54, 5.43],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[12.95, 7.73, 1.74, 1.73, 1.7, 4.32, 3.82, 2.77, 2.76, 2.5, 2.19, 1.88, 0.9, 0.72, 0.5, 9.76, 7.51, 3.76, 20.54, 7.36, 2.85],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.95, 5.43, 5.17, 5.03, 4.96, 4.92, 5.1, 5.03, 4.97, 4.86, 4.81, 4.54, 5.23, 5.03, 4.89, 4.86, 4.81, 4.79, 4.79, 4.82],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.05, 11.84, 10.17, 7.24, 5.32, 4.81, 3.4, 3.25, 2.44, 1.33, 0.67, 0.57, 18.79, 6.51, 1.1, 6.53, 1.03, 0.93],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[24.99, 14.6, 14.21, 4.96, 4.21, 2.17, 1.53, 1.22, 1.0, 3.57, 2.04, 1.99, 1.61, 1.47, 1.33, 7.97, 1.61, 9.53],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.66, 25.53, 24.5, 24.31],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['IBKR', 'CME', 'CSBK', 'VRSK', 'PG', 'COST', 'LGF', 'NVGS', 'KAI', 'CAH', 'FB', 'GNCMA', 'PFPT', 'ALNY', 'ACT', 'CNQR', 'IT'],
			"weight":[6.03, 5.96, 5.93, 5.88, 5.97, 5.93, 5.92, 6.04, 5.87, 5.86, 5.82, 5.59, 5.41, 6.22, 5.99, 5.79, 5.78],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'BDBD', 'CVGW', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.19, 10.2, 9.95, 9.14, 2.86, 2.53, 2.03, 1.72, 1.61, 1.0, 0.99, 16.28, 8.16, 3.09, 1.21, 0.9, 8.06, 5.33, 1.76, 0.99],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.17, 9.07, 2.04, 2.03, 2.0, 22.98, 3.76, 3.33, 2.42, 2.4, 2.18, 1.91, 1.64, 0.78, 0.63, 0.43, 8.51, 6.54, 3.27, 6.41, 2.48],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.46, 32.89, 32.65],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['ICE', 'CME', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.03, 18.92, 13.44, 11.82, 13.53, 4.6, 1.2, 1.06, 11.6, 2.94, 0.95, 0.91],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.86, 15.7, 6.55, 4.26, 4.14, 2.53, 2.31, 2.24, 1.92, 1.02, 0.98, 0.94, 0.61, 13.38, 1.43, 1.4, 1.11, 1.05, 0.99, 0.66, 0.57, 4.98, 3.5, 0.94, 0.93],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'ABMD', 'VASC', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.5, 3.55, 2.75, 1.7, 22.05, 0.97, 13.75, 1.22, 1.0, 4.43, 3.41, 1.55, 1.19, 0.97, 9.61, 1.02, 3.23, 1.03, 1.01, 1.0, 0.95, 4.02, 1.06, 1.03, 0.98],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'CLGX', 'MANT', 'GLW', 'MXIM', 'FEIC', 'CTSH', 'FNSR', 'ALB', 'DHR', 'EMN', 'SCS', 'CIR', 'ENS', 'CRS', 'SPLS', 'DHI', 'CL', 'CAG', 'KRFT', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[4.22, 4.04, 4.01, 4.01, 3.97, 3.96, 3.94, 3.74, 4.12, 4.12, 4.06, 4.02, 3.95, 3.9, 3.83, 4.46, 4.09, 4.04, 3.97, 3.93, 4.09, 3.89, 4.05, 3.89, 3.69],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'IMAX', 'STRZA', 'TV', 'AMCX', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.3, 17.85, 17.46, 12.05, 11.15, 1.9, 6.13, 2.29, 1.01, 0.98, 0.96, 0.96, 3.62, 1.34, 0.94, 1.04, 1.01, 1.0],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.53, 27.53, 16.52, 15.68, 7.23, 4.5],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[27.93, 27.61, 16.31, 15.49, 8.06, 4.6],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.62, 27.81, 17.43, 16.5, 4.47, 4.17],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.0, 29.56, 19.06, 13.18, 4.86, 3.34],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.65, 25.24, 22.57, 12.47, 3.84, 3.23],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[31.81, 26.0, 18.32, 13.31, 7.18, 3.38],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[37.15, 35.46, 17.6, 9.8],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'ABV', 'DECK', 'CBD', 'ROST', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[8.84, 5.42, 4.37, 4.24, 4.23, 3.91, 3.62, 2.89, 1.83, 8.11, 6.98, 4.81, 3.75, 6.92, 5.65, 4.38, 1.16, 9.07, 5.22, 4.59],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'LF', 'JAKK', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'FL', 'BWS', 'CROX'],
			"weight":[16.75, 12.15, 16.1, 5.7, 2.99, 1.51, 1.27, 0.99, 7.54, 5.66, 0.99, 0.98, 12.81, 1.01, 4.07, 1.66, 1.03, 0.99, 1.94, 0.98, 1.01, 0.98, 0.89],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'ARAY', 'QGEN', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'ESLT', 'COL', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.61, 9.83, 3.26, 2.13, 1.56, 1.35, 0.97, 0.92, 17.86, 2.13, 0.98, 0.98, 0.87, 6.76, 4.77, 4.55, 2.43, 1.13, 0.93, 0.92, 0.89, 7.56, 4.48, 1.15, 8.98],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.8, 14.08, 5.66, 5.49, 3.78, 1.05, 4.42, 4.38, 3.57, 2.31, 1.99, 1.08, 0.71, 15.9, 3.41, 2.21, 0.91, 1.38, 1.05, 1.03, 1.0, 0.95, 0.89, 1.63, 1.31],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.64, 5.24, 5.23, 4.87, 4.85, 4.83, 4.74, 3.24, 2.64, 1.22, 0.98, 6.47, 4.58, 4.39, 3.8, 3.28, 1.62, 5.45, 4.72, 3.22, 2.6, 3.52, 3.4, 4.59, 2.89],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[21.9, 19.95, 18.77, 18.35, 21.03],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'SNOW', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.07, 15.3, 9.64, 8.06, 4.96, 2.3, 2.04, 1.63, 1.17, 1.07, 1.0, 0.96, 12.98, 6.55, 0.98, 1.36, 0.97, 0.96, 0.94, 0.89, 0.89, 0.68, 2.1, 0.82, 0.68],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.66, 25.53, 24.5, 24.31],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.91, 5.96, 5.55, 4.96, 3.15, 1.39, 0.96, 14.53, 4.75, 2.2, 1.71, 1.16, 1.0, 7.83, 4.75, 3.52, 1.44, 6.06, 2.53, 1.0, 2.38, 1.48, 1.59, 1.26, 0.92],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.45, 5.28, 4.7, 4.09, 3.37, 2.87, 1.86, 1.54, 1.54, 1.25, 1.01, 13.3, 10.85, 4.13, 1.22, 1.03, 1.0, 18.7, 3.31, 9.07, 2.44, 2.02],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'LPNT', 'HCA', 'SEM', 'THC', 'CYH', 'SCAI', 'HLS', 'KND', 'CERN', 'QSII', 'CPSI', 'ATHN', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.74, 5.82, 5.72, 3.11, 3.1, 1.21, 1.0, 1.0, 0.96, 15.61, 2.27, 2.14, 2.13, 0.95, 19.87, 1.54, 6.32, 3.03, 2.41, 1.31, 5.74, 4.13, 0.97, 0.99, 0.96],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.84, 6.17, 6.11, 4.62, 3.73, 1.39, 1.02, 13.25, 4.79, 4.77, 3.58, 1.89, 7.47, 6.31, 1.73, 1.05, 5.24, 4.71, 2.49, 1.0, 4.26, 3.04, 1.0, 1.43, 1.11],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'CMCM', 'XNET', 'YY'],
			"weight":[23.24, 19.62, 10.95, 6.7, 4.93, 1.05, 17.75, 3.1, 2.24, 1.86, 1.64, 1.1, 1.03, 1.0, 0.98, 0.95, 0.94, 0.92],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[24.99, 14.6, 14.21, 4.96, 4.21, 2.17, 1.53, 1.22, 1.0, 3.57, 2.04, 1.99, 1.61, 1.47, 1.33, 7.97, 1.61, 9.53],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'LHO', 'CLDT', 'PEB', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.65, 9.92, 8.07, 4.98, 3.63, 2.22, 1.17, 1.1, 1.0, 0.98, 7.47, 5.18, 3.47, 2.22, 1.15, 0.98, 0.98, 0.98, 0.98, 0.96, 18.01, 5.81, 3.32, 3.15, 1.62],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'MWW', 'WBMD', 'EVDY', 'ZPIN', 'DHX', 'TRUE', 'RUBI', 'MKTO', 'CTCT', 'CRTO', 'SCOR', 'FUEL', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.34, 21.59, 4.9, 11.8, 5.24, 2.9, 7.03, 2.47, 1.1, 1.02, 1.01, 1.0, 1.0, 0.99, 0.91, 1.2, 1.04, 1.04, 1.02, 1.02, 1.02, 0.93, 2.34, 1.06, 1.02],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA', 'SHV', 'PZA', 'TLT', 'VCLT', 'IAU'],
			"weight":[7.75, 3.34, 2.7, 1.53, 1.2, 1.1, 1.07, 0.96, 0.83, 0.82, 0.78, 0.67, 0.57, 0.56, 0.49, 0.38, 0.33, 0.17, 25.07, 8.44, 8.32, 8.18, 24.74],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.05, 11.84, 10.17, 7.24, 5.32, 4.81, 3.4, 3.25, 2.44, 1.33, 0.67, 0.57, 18.79, 6.51, 1.1, 6.53, 1.03, 0.93],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.45, 8.89, 6.04, 5.44, 4.43, 2.92, 2.11, 14.81, 8.64, 5.19, 3.64, 1.45, 1.45, 1.05, 6.64, 3.11, 0.58, 0.28, 4.58, 1.28],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'FSC', 'AINV', 'TCRD', 'GAIN', 'FDUS', 'TICC', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.25, 9.71, 6.19, 4.76, 4.26, 3.95, 3.3, 2.46, 2.21, 1.94, 1.7, 1.22, 1.05, 1.04, 1.03, 1.0, 0.99, 0.98, 18.54, 7.05, 6.5, 4.15, 3.03, 1.64, 1.04],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'IPCC', 'AXS', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'GLRE', 'VR', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.53, 10.71, 8.98, 7.29, 6.17, 6.15, 4.71, 3.22, 3.01, 2.49, 1.07, 1.03, 1.03, 0.98, 0.97, 0.94, 5.84, 3.5, 1.94, 1.06, 1.04, 0.97, 7.29, 6.02, 1.08],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[34.16, 15.52, 7.12, 2.68, 9.75, 8.21, 5.02, 1.17, 6.69, 3.88, 3.09, 1.58, 1.12],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['AAVL', 'CTLT', 'OTIC', 'KITE', 'XENT', 'ADPT', 'ZFGN', 'TTOO', 'MBLY', 'RYI', 'WMS', 'OEC', 'ICD', 'GPRO', 'LOCO', 'MIK', 'SERV', 'HQY', 'FCB', 'GNBC', 'TRUP', 'ECR', 'TERP', 'MRKT', 'TUBE'],
			"weight":[4.44, 4.39, 3.94, 3.78, 3.77, 3.64, 3.57, 2.99, 4.72, 4.49, 4.2, 4.17, 3.86, 5.29, 4.54, 4.13, 3.83, 3.98, 3.77, 3.68, 3.67, 3.86, 3.75, 3.78, 3.77],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.03, 15.54, 12.01, 14.77, 13.58, 6.89, 4.14, 1.05, 4.97, 1.03],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.52, 6.86, 6.76, 4.96, 3.7, 3.6, 3.47, 1.97, 30.68, 12.76, 3.0, 1.72],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'ELGX', 'PODD', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[22.88, 14.8, 9.72, 5.67, 3.55, 2.69, 2.41, 1.43, 1.43, 1.35, 1.12, 0.93, 0.74, 6.3, 5.98, 2.72, 1.02, 0.98, 0.98, 0.95, 0.93, 7.14, 2.28, 1.0, 0.98],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'UNP', 'CSX', 'NOC', 'LMT', 'GD', 'RTN', 'HON', 'GE', 'UPS', 'BA', 'UTX', 'GS', 'MS', 'BAC', 'BRK.B', 'JPM', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.27, 4.22, 4.21, 4.19, 4.19, 4.17, 4.02, 3.95, 3.77, 3.69, 3.63, 3.59, 4.44, 4.41, 4.25, 4.18, 4.16, 3.97, 3.69, 3.37, 4.36, 4.11, 3.82, 3.8, 3.53],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[23.23, 17.79, 12.82, 11.53, 26.22, 5.87, 1.29, 1.25],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[15.88, 9.5, 2.13, 2.13, 2.08, 22.9, 3.11, 2.75, 2.0, 1.98, 1.8, 1.58, 1.35, 0.64, 0.51, 0.35, 7.01, 5.39, 2.7, 6.51, 5.56, 2.16],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.17, 9.07, 2.04, 2.03, 2.0, 22.98, 3.76, 3.33, 2.42, 2.4, 2.18, 1.91, 1.64, 0.78, 0.63, 0.43, 8.51, 6.54, 3.27, 6.41, 2.48],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[12.95, 7.73, 1.74, 1.73, 1.7, 4.32, 3.82, 2.77, 2.76, 2.5, 2.19, 1.88, 0.9, 0.72, 0.5, 9.76, 7.51, 3.76, 20.54, 7.36, 2.85],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.25, 3.09, 3.07, 2.79, 2.43, 2.09, 0.99, 0.8, 0.55, 10.85, 8.34, 4.18, 11.08, 6.51, 1.5, 1.48, 1.45, 18.41, 8.18, 3.17],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.22, 4.62, 3.36, 3.34, 3.04, 2.65, 2.27, 1.08, 0.87, 0.6, 11.8, 9.07, 4.54, 9.44, 5.54, 1.28, 1.26, 1.24, 16.45, 8.89, 3.45],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.59, 4.96, 3.6, 3.58, 3.25, 2.84, 2.44, 1.15, 0.93, 0.64, 12.65, 9.73, 4.86, 8.01, 4.71, 1.09, 1.07, 1.05, 14.65, 9.53, 3.69],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.94, 5.26, 3.81, 3.79, 3.44, 3.01, 2.58, 1.23, 0.99, 0.67, 13.41, 10.31, 5.15, 6.76, 3.97, 0.92, 0.9, 0.89, 0.0, 12.96, 10.1, 3.91],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.24, 5.52, 4.01, 3.99, 3.62, 3.17, 2.73, 1.29, 1.04, 0.71, 14.1, 10.85, 5.42, 11.36, 5.64, 3.32, 0.77, 0.75, 0.74, 0.0, 10.62, 4.12],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.09, 15.09, 9.52, 5.1, 3.06, 2.99, 2.46, 2.4, 1.97, 1.7, 1.37, 1.08, 1.01, 0.95, 7.22, 4.2, 1.74, 1.15, 1.11, 9.0, 1.0, 3.67, 1.09, 1.03, 0.99],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.5, 18.3, 9.66, 19.77, 5.24, 0.87, 0.63, 10.2, 1.63, 0.77, 3.97, 1.9, 1.62, 1.05, 0.9],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'ARAY', 'QGEN', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'ESLT', 'COL', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.61, 9.83, 3.26, 2.13, 1.56, 1.35, 0.97, 0.92, 17.86, 2.13, 0.98, 0.98, 0.87, 6.76, 4.77, 4.55, 2.43, 1.13, 0.93, 0.92, 0.89, 7.56, 4.48, 1.15, 8.98],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'ABMD', 'VASC', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.5, 3.55, 2.75, 1.7, 22.05, 0.97, 13.75, 1.22, 1.0, 4.43, 3.41, 1.55, 1.19, 0.97, 9.61, 1.02, 3.23, 1.03, 1.01, 1.0, 0.95, 4.02, 1.06, 1.03, 0.98],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'BUD', 'STZ', 'BF.B', 'BTI', 'RAI', 'PM', 'LO', 'DEO', 'YUM', 'MCD', 'DISH', 'CHTR', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.33, 4.21, 4.21, 4.03, 3.96, 3.89, 3.89, 3.88, 3.81, 3.8, 3.74, 4.61, 4.6, 4.44, 3.99, 3.89, 3.6, 3.43, 3.29, 3.15, 4.69, 4.65, 4.63, 3.96, 3.32],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.31, 12.66, 9.2, 4.63, 4.06, 3.61, 2.4, 1.05, 1.05, 1.04, 0.98, 0.93, 13.84, 0.89, 14.08, 4.24, 0.97, 1.1, 1.05, 1.03, 0.95, 0.9, 1.02, 1.0, 1.0],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'RSPP', 'CWEI', 'FANG', 'AREX', 'CPE', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[22.75, 8.29, 6.18, 5.36, 4.13, 1.49, 1.03, 0.95, 15.34, 6.69, 3.6, 1.54, 1.03, 1.01, 1.0, 0.99, 0.97, 0.96, 4.84, 3.08, 3.85, 1.91, 1.01, 0.99, 1.01],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.64, 5.24, 5.23, 4.87, 4.85, 4.83, 4.74, 3.24, 2.64, 1.22, 0.98, 6.47, 4.58, 4.39, 3.8, 3.28, 1.62, 5.45, 4.72, 3.22, 2.6, 3.52, 3.4, 4.59, 2.89],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.32, 12.86, 12.07, 13.79, 7.57, 1.36, 7.33, 4.53, 2.17],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.95, 5.43, 5.17, 5.03, 4.96, 4.92, 5.1, 5.03, 4.97, 4.86, 4.81, 4.54, 5.23, 5.03, 4.89, 4.86, 4.81, 4.79, 4.79, 4.82],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.6, 20.14, 14.08, 6.5, 1.67, 1.43, 1.4, 0.92, 15.52, 2.26, 8.23, 1.49, 1.38, 1.37],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'SQI', 'CALD', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.63, 11.97, 8.06, 7.75, 6.05, 3.86, 3.53, 1.75, 1.14, 1.1, 1.01, 4.27, 3.71, 2.73, 2.34, 2.26, 1.34, 0.95, 3.04, 1.01, 2.09, 1.5, 1.91, 1.01, 1.0],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['TMST', 'NX', 'BWC', 'XYL', 'WBC', 'CLW', 'RYAM', 'WWAV', 'DPS', 'SBH', 'HSNI', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'JBT', 'SAIC', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.2, 4.1, 4.07, 4.05, 3.83, 3.77, 3.76, 4.29, 4.16, 4.1, 3.98, 3.87, 4.34, 4.08, 3.9, 4.25, 4.1, 3.87, 4.25, 3.94, 3.7, 4.02, 4.01, 3.5, 3.87],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'FDS', 'USTR', 'SIAL', 'BCPC', 'FTI'],
			"weight":[5.22, 4.99, 4.24, 3.93, 2.83, 1.81, 8.68, 4.78, 3.67, 2.69, 5.69, 3.69, 3.62, 2.46, 1.68, 8.9, 3.58, 5.09, 4.78, 0.96, 4.86, 3.11, 6.47, 1.07, 1.2],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'MXIM', 'ATML', 'SIMG', 'CRUS', 'INVN', 'HIMX', 'NVDA', 'STM', 'SIMO', 'FCS', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.66, 9.37, 8.0, 4.79, 1.57, 0.99, 0.99, 0.98, 0.97, 0.97, 0.97, 0.96, 0.96, 0.94, 0.94, 24.82, 1.07, 1.02, 14.39, 9.63, 1.03],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'AAL', 'LUV', 'RYAAY', 'UAL', 'LFL', 'ALK', 'CPA', 'SAVE', 'JBLU', 'AVH', 'RJET', 'VLRS', 'GOL', 'HA', 'SKYW', 'AL', 'AER', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.26, 10.79, 10.48, 9.43, 8.33, 4.59, 4.41, 3.39, 3.38, 1.86, 1.2, 1.06, 1.02, 0.99, 0.98, 0.77, 4.65, 4.59, 1.07, 0.99, 0.98, 0.92, 6.04, 2.72, 1.11],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'TRIB', 'IR', 'ETN', 'IHG', 'AZN', 'GWPH', 'GSK', 'ARMH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'QGEN', 'STM', 'TEL', 'PNR', 'LOGI', 'HELE', 'G', 'IMOS', 'FDP', 'SIMO'],
			"weight":[4.4, 4.19, 4.11, 3.98, 3.87, 3.81, 4.11, 4.01, 4.0, 3.97, 3.95, 3.69, 4.56, 4.17, 4.01, 3.98, 3.89, 3.98, 3.87, 3.69, 3.84, 3.8, 3.77, 4.32, 4.02],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'CVT', 'SAAS', 'MKTO', 'ELLI', 'CTCT', 'TXTR', 'WAGE', 'PGI', 'LPSN', 'RP', 'FLTX', 'SPSC', 'DWRE', 'NICE', 'MSTR', 'PRO', 'CVLT', 'LXFT', 'DWCH', 'RDWR', 'IMPV', 'QLYS', 'AVG', 'PFPT'],
			"weight":[4.35, 4.2, 4.1, 4.07, 4.07, 4.04, 4.02, 4.02, 4.01, 3.94, 3.9, 3.9, 3.86, 3.84, 4.22, 4.02, 4.01, 3.89, 3.77, 3.56, 4.17, 4.14, 4.08, 3.93, 3.88],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'FDML', 'AXL', 'SHLO', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[25.3, 13.54, 12.28, 10.41, 4.98, 2.8, 5.25, 5.09, 1.25, 0.95, 0.49, 4.11, 1.58, 1.17, 1.13, 0.94, 1.9, 0.95, 0.94, 0.93, 0.88, 1.18, 1.01, 0.93],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'AIG', 'MET', 'GS', 'MS', 'BK', 'STT'],
			"weight":[13.54, 9.76, 8.83, 6.11, 18.01, 5.35, 2.97, 2.48, 1.73, 1.38, 1.24, 0.86, 0.84, 6.9, 3.8, 6.11, 4.45, 3.23, 2.41],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.8, 14.08, 5.66, 5.49, 3.78, 1.05, 4.42, 4.38, 3.57, 2.31, 1.99, 1.08, 0.71, 15.9, 3.41, 2.21, 0.91, 1.38, 1.05, 1.03, 1.0, 0.95, 0.89, 1.63, 1.31],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[20.03, 16.9, 14.02, 10.01, 7.41, 0.95, 10.39, 6.01, 2.55, 1.03, 1.01, 0.9, 2.57, 1.4, 0.82, 2.95, 1.05],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['BSV', 'TLT', 'TLH', 'SCHR', 'IEF'],
			"weight":[25.05, 12.51, 12.5, 24.98, 24.95],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.34, 17.77, 2.68, 0.98, 0.93, 9.14, 7.05, 5.73, 3.1, 2.55, 2.54, 2.02, 2.01, 1.58, 1.04, 1.01, 0.99, 6.52, 0.99, 0.99, 4.39, 4.31, 1.24, 1.07, 1.02],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.86, 15.7, 6.55, 4.26, 4.14, 2.53, 2.31, 2.24, 1.92, 1.02, 0.98, 0.94, 0.61, 13.38, 1.43, 1.4, 1.11, 1.05, 0.99, 0.66, 0.57, 4.98, 3.5, 0.94, 0.93],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'PJC', 'RJF', 'GHL', 'EVR', 'COWN', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.04, 11.33, 9.37, 7.92, 7.05, 4.75, 4.29, 3.92, 3.9, 3.14, 1.85, 1.58, 0.99, 3.06, 1.41, 1.03, 1.0, 0.99, 0.98, 0.98, 0.97, 0.95, 2.77, 1.73, 0.99],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'MWA', 'WMS', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'CWCO', 'PICO'],
			"weight":[11.94, 4.26, 4.23, 3.85, 2.42, 1.46, 1.12, 1.1, 1.0, 0.99, 12.24, 8.35, 7.68, 2.2, 9.45, 7.61, 5.45, 2.49, 1.0, 0.98, 6.2, 1.02, 0.97, 1.0, 1.0],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GRMN', 'GOOGL', 'AAPL', 'ARMH', 'TXN', 'MCHP', 'MXIM', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[13.68, 12.32, 12.07, 11.71, 3.46, 3.06, 3.04, 3.04, 2.38, 1.9, 1.57, 3.48, 3.44, 3.03, 2.21, 2.16, 1.21, 3.71, 3.48, 2.82, 1.41, 1.37, 0.93, 1.45, 1.06],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'SNOW', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.07, 15.3, 9.64, 8.06, 4.96, 2.3, 2.04, 1.63, 1.17, 1.07, 1.0, 0.96, 12.98, 6.55, 0.98, 1.36, 0.97, 0.96, 0.94, 0.89, 0.89, 0.68, 2.1, 0.82, 0.68],
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
