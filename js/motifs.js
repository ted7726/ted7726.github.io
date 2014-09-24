function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["Alibaba"]={
			"quotes":['BABA'],
			"weight":[100],
			"name":"Alibaba"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'CWEI', 'FANG', 'RSPP', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.61, 7.85, 6.08, 5.2, 4.03, 1.38, 0.99, 0.91, 15.5, 6.76, 3.62, 1.52, 1.02, 1.0, 1.0, 0.99, 0.97, 0.94, 4.84, 3.22, 3.94, 1.73, 1.01, 0.94, 0.96],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'CAM', 'RES', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.68, 8.28, 5.83, 5.25, 5.16, 4.68, 4.59, 2.59, 1.12, 0.86, 0.67, 0.6, 10.61, 6.74, 2.05, 1.0, 0.9, 7.61, 2.94, 2.57, 1.04, 0.92, 3.97, 2.35, 0.97],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'SLCA', 'AA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'AKRX', 'Z'],
			"weight":[7.8, 5.16, 4.55, 2.6, 1.7, 5.2, 3.53, 3.31, 2.86, 2.74, 7.15, 4.61, 2.93, 2.39, 6.26, 6.09, 2.19, 5.78, 3.33, 3.52, 3.24, 4.29, 2.19, 3.29, 3.29],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.09, 21.33, 20.25, 13.79, 9.96, 6.1, 3.24, 1.24],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'BP', 'IMO', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[18.02, 11.98, 10.35, 7.92, 6.35, 4.75, 4.31, 4.29, 4.09, 3.67, 3.27, 2.8, 2.37, 2.28, 1.75, 1.31, 1.29, 1.23, 1.03, 0.98, 1.59, 1.42, 0.52, 1.46, 1.0],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'DWCH', 'VRNS', 'INFA', 'CVLT', 'RHT', 'SGI', 'VMEM'],
			"weight":[25.39, 14.0, 11.91, 11.15, 9.82, 2.57, 2.38, 1.64, 1.57, 1.46, 1.42, 4.78, 3.09, 6.04, 1.78, 1.01],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[31.7, 21.52, 17.77, 17.27, 11.74],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[19.79, 19.28, 17.1, 23.59, 20.25],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.14, 20.1, 34.79, 20.98],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'SGY', 'MHR', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'FST', 'MTDR', 'XCO', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.15, 12.85, 9.27, 4.55, 4.21, 3.62, 2.37, 1.06, 0.99, 0.97, 0.93, 0.87, 14.22, 0.83, 14.32, 4.15, 0.95, 1.05, 1.01, 0.99, 0.91, 0.77, 1.01, 0.99, 0.98],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.11, 6.05, 5.62, 5.0, 2.89, 1.38, 0.95, 14.82, 4.75, 2.2, 1.71, 1.16, 0.98, 7.18, 4.75, 3.52, 1.44, 6.34, 2.57, 0.98, 2.36, 1.49, 1.57, 1.28, 0.9],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'IMGN', 'SGEN', 'CRIS', 'GILD', 'CBST', 'EBS', 'REGN', 'ALXN', 'VRTX', 'UTHR', 'LGND', 'MDCO', 'ACOR', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.43, 11.11, 0.94, 0.93, 0.84, 19.5, 2.36, 0.89, 4.22, 4.15, 4.02, 2.2, 0.94, 0.94, 0.92, 9.22, 3.53, 2.41, 0.84, 4.45, 2.77, 2.44, 1.1, 0.94, 0.92],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.89, 20.8, 13.65, 6.83, 1.64, 1.45, 1.34, 0.88, 14.94, 2.11, 8.26, 1.48, 1.37, 1.36],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.95, 19.05, 14.08, 2.84, 1.4, 18.68, 15.06, 5.08, 3.86],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'WLK', 'NEU', 'EMN', 'HUN', 'CE', 'MEOH', 'GRA', 'POL', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'CVI', 'ALJ', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[13.75, 12.7, 8.13, 3.12, 3.1, 1.04, 1.02, 1.01, 1.01, 1.01, 1.0, 0.96, 9.11, 6.48, 6.32, 3.03, 2.31, 1.25, 0.98, 0.94, 0.94, 0.92, 16.06, 2.95, 0.88],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'MWW', 'EVDY', 'ZPIN', 'DHX', 'WBMD', 'TRUE', 'RUBI', 'MKTO', 'CTCT', 'SCOR', 'CRTO', 'FUEL', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.84, 21.59, 4.72, 12.0, 5.43, 2.75, 7.03, 2.39, 1.05, 1.03, 1.03, 1.0, 0.99, 0.94, 0.83, 1.26, 1.02, 1.01, 1.01, 1.01, 0.99, 0.85, 2.2, 1.03, 0.99],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'RDY', 'TARO', 'HSP', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.01, 20.44, 17.61, 10.11, 9.93, 9.84, 4.23, 2.68, 2.35, 1.79],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.94, 6.16, 6.12, 4.6, 3.69, 1.38, 1.02, 13.25, 4.83, 4.8, 3.57, 1.91, 7.4, 6.24, 1.71, 1.07, 5.22, 4.74, 2.47, 1.01, 4.28, 3.03, 1.0, 1.44, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'MOBI', 'FENG', 'SOHU', 'CMCM', 'XNET', 'YY'],
			"weight":[23.63, 19.83, 10.76, 6.93, 4.87, 1.05, 17.6, 3.01, 2.2, 1.79, 1.68, 1.05, 1.01, 0.98, 0.97, 0.91, 0.87, 0.87],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'TCP', 'OKS', 'WES', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'ENLK', 'EPB', 'EXLP', 'SXL', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.07, 6.58, 6.23, 6.15, 5.26, 4.57, 4.43, 4.37, 4.0, 3.62, 3.36, 3.29, 3.21, 2.95, 2.88, 2.75, 2.73, 2.61, 2.23, 2.13, 4.66, 4.46, 4.23, 4.1, 2.14],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'SNSS', 'TSRO', 'EPZM', 'PGNX', 'DYAX', 'IMMU', 'VSTM', 'MGNX', 'THLD', 'NLNK', 'CLDX', 'CRIS', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[24.83, 6.44, 6.2, 4.55, 1.54, 25.47, 2.8, 2.25, 1.84, 1.72, 1.65, 1.63, 1.35, 1.32, 1.07, 1.07, 1.06, 1.01, 0.98, 0.91, 0.9, 3.55, 2.57, 2.34, 0.93],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'LAD', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.33, 17.04, 14.36, 9.99, 7.32, 0.94, 10.5, 6.05, 2.48, 1.03, 1.02, 0.91, 2.59, 1.58, 0.84, 2.95, 1.07],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.18, 15.42, 11.86, 15.0, 13.58, 6.88, 4.04, 1.06, 4.98, 1.02],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'RL', 'VFC', 'NKE', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.54, 5.32, 5.09, 4.83, 4.43, 3.21, 2.38, 2.29, 1.8, 5.89, 5.7, 4.23, 3.82, 3.52, 2.36, 1.46, 11.7, 6.0, 5.34, 1.26, 4.72, 1.83, 1.44, 2.8, 2.02],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['EDE', 'DUK', 'ED', 'LG', 'AWK', 'XEL', 'CMS', 'SO', 'DTE', 'PPL', 'NWN', 'D', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'K', 'MCD', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.13, 4.09, 4.09, 4.07, 4.07, 4.0, 3.97, 3.96, 3.95, 3.9, 3.86, 3.85, 3.81, 4.55, 4.32, 4.17, 4.13, 3.93, 3.85, 3.76, 3.66, 3.62, 4.36, 4.1, 3.8],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'SIMG', 'MXIM', 'ATML', 'NVDA', 'HIMX', 'CRUS', 'SIMO', 'FCS', 'STM', 'INVN', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.63, 9.52, 8.26, 4.78, 1.48, 1.0, 0.99, 0.96, 0.96, 0.96, 0.94, 0.94, 0.94, 0.9, 0.9, 25.06, 1.07, 1.04, 14.04, 9.63, 0.99],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.54, 8.86, 5.77, 5.61, 4.41, 3.04, 2.12, 15.04, 8.81, 4.99, 3.63, 1.44, 1.39, 0.99, 6.56, 3.18, 0.55, 0.27, 4.6, 1.19],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.18, 14.66, 9.69, 5.72, 3.44, 2.65, 2.38, 1.45, 1.44, 1.35, 1.07, 0.89, 0.74, 6.27, 6.04, 2.69, 1.03, 1.02, 0.99, 0.96, 0.92, 7.16, 2.27, 1.0, 0.99],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'CLX', 'OMC', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'OKE', 'D', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[9.99, 6.83, 6.39, 5.63, 5.55, 4.91, 4.71, 2.44, 1.01, 4.44, 4.08, 4.07, 3.98, 3.33, 2.36, 2.2, 1.02, 0.98, 4.4, 3.18, 2.45, 5.89, 5.8, 3.35, 1.01],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.37, 13.38, 12.11, 4.33, 3.4, 1.68, 1.23, 0.8, 11.66, 6.79, 4.61, 0.88, 21.76],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'WEN', 'DPZ', 'SONC', 'TAST', 'DNKN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'TR', 'KRFT', 'FRSH', 'DMND', 'UL'],
			"weight":[20.89, 20.1, 3.21, 2.16, 17.24, 4.38, 1.66, 1.1, 1.05, 1.05, 1.05, 1.0, 0.99, 0.95, 0.95, 0.91, 0.79, 11.06, 3.81, 1.01, 0.96, 0.95, 0.94, 0.84, 0.95],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BURL', 'BIG', 'FRED', 'FIVE', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'TFM', 'CHS', 'MOV', 'BID'],
			"weight":[25.14, 7.97, 6.35, 6.14, 2.5, 1.24, 1.11, 1.09, 1.0, 0.99, 0.94, 0.84, 12.08, 7.81, 5.63, 4.95, 3.88, 2.04, 1.63, 1.49, 1.3, 1.0, 1.0, 0.95, 0.93],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'TXN', 'MXIM', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.32, 5.23, 5.03, 3.49, 3.34, 2.9, 5.34, 4.17, 4.06, 3.63, 2.87, 2.73, 5.6, 5.0, 3.06, 3.0, 2.05, 6.93, 3.96, 5.27, 1.58, 0.98, 5.88, 5.28, 3.31],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'KIRK', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[32.42, 27.95, 3.2, 3.01, 6.85, 5.27, 3.74, 1.74, 1.64, 1.29, 1.16, 4.88, 3.1, 0.64, 3.13],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'MRK', 'PFE', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[12.0, 9.75, 10.11, 9.99, 9.92, 9.89, 10.33, 9.09, 9.62, 9.29],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'DSW', 'CATO', 'TUES', 'CTRN', 'DLTR', 'DG', 'FRED', 'FIVE', 'BIG', 'SVU', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[16.78, 11.55, 1.1, 0.83, 21.34, 0.99, 14.25, 3.29, 1.03, 1.0, 1.0, 0.94, 6.59, 5.76, 0.99, 0.98, 0.98, 0.97, 3.99, 1.66, 1.29, 0.97, 0.94, 0.79],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[19.93, 4.69, 3.9, 3.68, 3.43, 2.73, 1.95, 1.28, 0.91, 0.91, 11.12, 7.53, 4.24, 3.69, 1.86, 0.98, 0.96, 11.11, 1.56, 1.0, 5.74, 2.07, 1.7, 1.53, 1.5],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.83, 19.38, 14.54, 13.0, 4.12, 15.1, 7.42, 4.6],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'TSL', 'HSOL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.09, 7.02, 6.45, 6.06, 2.33, 1.83, 1.47, 1.29, 1.04, 1.02, 5.74, 5.51, 4.47, 2.24, 0.97, 14.89, 12.84, 0.88, 2.29, 1.83, 1.35, 1.01, 5.81, 3.5, 1.07],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'NILE', 'FTD', 'LITB', 'SFLY', 'EHTH', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[20.19, 5.38, 1.09, 1.09, 1.06, 1.03, 0.98, 0.88, 23.01, 2.62, 2.47, 0.98, 0.94, 16.26, 5.95, 2.47, 0.99, 0.92, 3.21, 1.45, 1.13, 1.0, 0.96, 0.81, 3.14],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.31, 17.22, 12.92, 11.54, 26.68, 5.81, 1.28, 1.24],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.26, 5.56, 4.03, 3.99, 3.62, 3.12, 2.75, 1.29, 1.03, 0.72, 13.85, 10.9, 5.44, 11.48, 5.74, 3.36, 0.77, 0.76, 0.75, 0.0, 10.5, 4.07],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'ETR', 'AEP', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'TRMK', 'ACC', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.88, 5.76, 4.93, 4.27, 4.2, 4.17, 3.35, 3.12, 2.87, 2.61, 2.36, 0.98, 5.21, 5.03, 4.99, 4.79, 4.26, 4.06, 3.57, 2.87, 4.53, 3.48, 4.52, 3.41, 2.78],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'CL', 'K', 'BF.B', 'GIS'],
			"weight":[7.13, 6.46, 5.01, 4.4, 4.39, 4.02, 3.73, 3.5, 3.1, 2.84, 2.83, 2.32, 1.46, 6.97, 6.78, 5.38, 5.13, 4.65, 4.58, 4.08, 3.04, 2.54, 2.52, 1.66, 1.48],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.95, 5.29, 3.83, 3.8, 3.43, 2.96, 2.61, 1.23, 0.98, 0.68, 13.15, 10.35, 5.17, 6.87, 4.03, 0.92, 0.91, 0.89, 0.0, 13.1, 9.98, 3.86],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'IGF', 'VTIP', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[15.72, 14.59, 12.47, 6.73, 6.4, 5.94, 5.02, 5.01, 11.76, 8.04, 2.88, 2.73, 2.71],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['SPY', 'VO', 'VBR', 'VWO', 'VEU', 'BSV', 'VTIP', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.7, 8.68, 8.53, 8.64, 8.22, 8.37, 8.32, 8.23, 7.59, 8.4, 8.23, 8.1],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.65, 18.12, 2.74, 0.98, 0.9, 9.06, 6.91, 5.77, 3.08, 2.54, 2.5, 1.99, 1.99, 1.56, 1.03, 0.99, 0.98, 6.46, 0.99, 0.97, 4.3, 4.2, 1.24, 1.06, 1.0],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'GOOGL', 'CSCO', 'QCOM', 'AAPL', 'ORCL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'ADI', 'GLW', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.64, 9.95, 9.73, 7.37, 5.65, 5.46, 3.34, 2.28, 2.22, 2.08, 2.04, 1.34, 1.3, 1.15, 0.93, 0.9, 0.9, 0.87, 6.74, 5.03, 6.47, 1.03, 2.66, 0.99, 0.94],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.6, 4.98, 3.61, 3.58, 3.23, 2.8, 2.46, 1.16, 0.92, 0.64, 12.4, 9.76, 4.87, 8.14, 4.77, 1.09, 1.08, 1.06, 14.79, 9.41, 3.64],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.32, 4.81, 4.31, 3.06, 2.84, 2.68, 2.25, 1.63, 0.98, 8.4, 5.17, 4.02, 3.26, 2.12, 5.79, 5.07, 4.45, 3.69, 6.49, 3.82, 3.49, 2.58, 7.16, 1.37, 5.25],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VTI', 'VWO', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.57, 20.4, 19.09, 20.21, 19.73],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.23, 4.65, 3.37, 3.34, 3.02, 2.61, 2.29, 1.09, 0.86, 0.6, 11.56, 9.1, 4.55, 9.58, 5.61, 1.29, 1.26, 1.24, 16.6, 8.78, 3.39],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.51, 5.33, 4.67, 4.13, 3.42, 2.9, 1.86, 1.52, 1.51, 1.19, 1.0, 13.39, 11.01, 4.21, 1.2, 1.04, 1.0, 18.32, 3.3, 9.05, 2.42, 2.02],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['DOX', 'LLL', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'CF', 'FLEX'],
			"weight":[8.44, 8.29, 5.64, 4.92, 4.82, 3.62, 3.21, 2.43, 2.12, 2.0, 1.83, 1.19, 1.12, 0.95, 7.06, 6.32, 5.4, 7.81, 4.17, 4.33, 2.34, 1.75, 8.21, 1.01, 1.01],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['KO', 'NKE', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'PEP', 'MDLZ', 'MNST', 'PG', 'MCD', 'LB', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[9.04, 8.81, 7.53, 6.9, 4.35, 4.09, 3.84, 3.71, 3.69, 3.58, 3.15, 3.1, 3.09, 2.85, 2.63, 11.04, 6.52, 4.77, 3.9, 3.4],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.48, 5.79, 4.03, 3.92, 3.88, 3.48, 3.26, 3.05, 2.73, 2.44, 6.62, 6.04, 5.32, 3.7, 3.54, 3.16, 2.09, 5.2, 4.59, 4.28, 3.64, 3.34, 2.66, 3.79, 2.95],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'SKYW', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.5, 10.0, 7.77, 4.9, 3.68, 2.23, 1.23, 1.09, 1.0, 0.97, 7.44, 5.11, 3.48, 2.29, 1.15, 1.01, 0.98, 0.97, 0.97, 0.96, 18.26, 5.93, 3.31, 3.15, 1.62],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'VSAT', 'XLS', 'MRCY', 'FLIR', 'KTOS', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[24.77, 11.97, 9.42, 2.09, 0.91, 0.9, 11.03, 3.63, 3.19, 2.06, 1.95, 1.47, 1.2, 1.14, 1.02, 1.02, 0.91, 0.91, 0.78, 13.83, 2.13, 1.05, 0.87, 0.92, 0.86],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['CVS', 'TJX', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'SIAL', 'PX', 'QCOM', 'JKHY', 'ORCL', 'OMC', 'CTAS', 'FDS', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.22, 4.2, 4.03, 3.49, 2.05, 3.93, 3.6, 3.23, 2.45, 1.16, 6.38, 3.94, 3.41, 6.87, 6.75, 5.34, 4.88, 3.35, 4.53, 3.98, 3.75, 4.13, 3.27, 4.23, 2.83],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.27, 3.09, 3.06, 2.77, 2.39, 2.11, 0.99, 0.79, 0.55, 10.62, 8.36, 4.18, 11.24, 6.59, 1.51, 1.48, 1.46, 18.55, 8.07, 3.12],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.59, 6.82, 6.68, 4.91, 3.65, 3.53, 3.42, 1.93, 30.85, 12.89, 3.0, 1.72],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'TSS', 'GPN', 'FIS', 'FISV', 'USB', 'VNTV', 'HPY', 'EVTC', 'JKHY', 'EEFT', 'ONE', 'FLT', 'EBAY', 'GDOT', 'QIWI', 'HAWK', 'UEPS', 'WEX', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[20.06, 19.36, 13.89, 4.21, 4.18, 3.65, 2.72, 2.71, 1.06, 1.01, 0.99, 0.99, 0.94, 0.92, 7.02, 6.56, 1.04, 1.03, 1.02, 0.99, 0.97, 1.62, 1.05, 1.03, 0.97],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[31.09, 19.59, 14.43, 5.14, 14.91, 14.85],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'MR', 'HTHT', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'VIV', 'UGP', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.79, 9.23, 6.3, 5.21, 4.63, 4.53, 3.19, 2.9, 2.46, 2.03, 1.3, 1.06, 1.04, 0.99, 0.91, 4.44, 3.73, 2.21, 2.15, 1.51, 9.97, 1.05, 4.26, 3.63, 5.47],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[13.05, 7.77, 1.75, 1.74, 1.71, 4.32, 3.84, 2.79, 2.75, 2.49, 2.16, 1.89, 0.9, 0.71, 0.5, 9.56, 7.53, 3.76, 20.71, 7.26, 2.81],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'PG', 'NKE', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MRK', 'MDT', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.89, 5.47, 5.14, 5.05, 4.94, 4.9, 5.07, 4.98, 4.97, 4.92, 4.85, 4.55, 5.23, 5.1, 4.9, 4.89, 4.77, 4.8, 4.72, 4.86],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.43, 11.99, 10.01, 7.42, 5.37, 4.87, 3.41, 3.32, 2.47, 1.34, 0.68, 0.57, 18.78, 6.54, 1.1, 6.65, 1.04, 1.02],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.99, 14.67, 13.62, 4.99, 4.29, 2.22, 1.54, 1.2, 0.98, 3.52, 2.09, 1.98, 1.59, 1.39, 1.23, 9.69, 7.46, 1.55],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.75, 25.25, 24.71, 24.28],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['PG', 'COST', 'TXRH', 'JAH', 'CLC', 'LGF', 'CME', 'IBKR', 'FXCM', 'VRSK', 'GNCMA', 'MTSN', 'ALNY', 'ACT', 'HEES', 'ULTI', 'KAI', 'GTT', 'TREC'],
			"weight":[5.37, 5.32, 5.27, 5.23, 5.23, 5.05, 5.33, 5.32, 5.28, 5.27, 5.36, 5.21, 5.32, 5.21, 5.24, 5.18, 5.34, 5.26, 5.18],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'BDBD', 'CVGW', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.23, 10.3, 9.75, 8.96, 2.73, 2.64, 2.07, 1.68, 1.62, 1.0, 0.95, 16.12, 8.08, 3.07, 1.2, 0.93, 8.53, 5.47, 1.73, 0.94],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.24, 9.11, 2.05, 2.04, 2.01, 23.15, 3.76, 3.35, 2.42, 2.4, 2.17, 1.87, 1.65, 0.79, 0.62, 0.43, 8.33, 6.56, 3.27, 6.32, 2.44],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.45, 33.06, 32.49],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.49, 19.08, 13.33, 11.6, 13.34, 4.74, 1.22, 1.0, 11.46, 2.94, 0.93, 0.88],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[26.16, 15.9, 6.57, 4.24, 4.12, 2.54, 2.3, 2.29, 1.92, 1.05, 0.97, 0.93, 0.62, 13.18, 1.44, 1.34, 1.07, 1.05, 0.97, 0.64, 0.57, 4.84, 3.43, 0.97, 0.9],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'ABMD', 'VASC', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.25, 3.57, 2.68, 1.75, 22.05, 0.94, 14.01, 1.19, 0.98, 4.4, 3.36, 1.55, 1.12, 0.96, 9.78, 0.99, 3.44, 1.02, 1.0, 0.99, 0.95, 3.98, 1.05, 1.01, 0.95],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'CLGX', 'MANT', 'GLW', 'MXIM', 'CTSH', 'FEIC', 'FNSR', 'DHR', 'EMN', 'ALB', 'SCS', 'ENS', 'CIR', 'CRS', 'SPLS', 'CAG', 'CL', 'DHI', 'KRFT', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[4.16, 4.01, 4.0, 3.98, 3.97, 3.97, 3.86, 3.62, 4.14, 4.11, 4.05, 4.04, 3.94, 3.91, 3.72, 4.45, 4.22, 4.12, 3.99, 3.92, 4.17, 3.92, 4.02, 3.92, 3.76],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'IMAX', 'STRZA', 'AMCX', 'TV', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.41, 17.83, 17.49, 11.97, 11.29, 1.85, 6.13, 2.31, 1.02, 0.97, 0.96, 0.95, 3.51, 1.33, 0.98, 1.05, 1.0, 0.96],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.74, 27.52, 16.43, 15.76, 7.13, 4.42],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.14, 27.6, 16.23, 15.56, 7.94, 4.52],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.59, 27.99, 17.51, 16.41, 4.4, 4.1],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[29.95, 29.74, 19.14, 13.1, 4.79, 3.28],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.6, 25.4, 22.65, 12.39, 3.78, 3.17],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.02, 25.96, 18.39, 13.23, 7.07, 3.32],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[37.15, 35.66, 17.52, 9.67],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'DECK', 'ABV', 'CBD', 'ROST', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[8.75, 5.31, 4.39, 4.37, 4.31, 3.79, 3.64, 2.89, 1.85, 8.24, 6.88, 4.83, 3.75, 6.95, 5.78, 4.28, 1.13, 9.07, 5.14, 4.66],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'LF', 'JAKK', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'FL', 'BWS', 'CROX'],
			"weight":[16.97, 12.32, 16.02, 5.75, 2.95, 1.5, 1.27, 0.99, 7.59, 5.49, 0.98, 0.98, 12.77, 1.04, 4.03, 1.61, 1.04, 0.98, 1.96, 0.91, 1.0, 0.97, 0.86],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.68, 9.81, 3.09, 2.16, 1.6, 1.36, 0.99, 0.91, 6.93, 4.89, 4.42, 2.48, 1.13, 0.97, 0.94, 0.9, 17.6, 2.08, 1.0, 0.95, 0.84, 7.51, 4.51, 1.14, 9.11],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'KNX', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.92, 14.1, 5.73, 5.43, 3.81, 1.05, 4.41, 4.27, 3.52, 2.27, 1.98, 1.06, 0.73, 15.9, 3.39, 2.25, 0.89, 1.37, 1.06, 1.05, 1.04, 0.95, 0.9, 1.62, 1.3],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'TXRH', 'MWIV', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.67, 5.33, 5.2, 4.93, 4.91, 4.88, 4.72, 3.21, 2.63, 1.35, 0.95, 6.6, 4.52, 4.38, 3.8, 3.26, 1.6, 5.49, 4.59, 3.11, 2.54, 3.53, 3.31, 4.51, 2.98],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'WPPGY', 'IPG', 'CMCSA'],
			"weight":[22.16, 20.14, 18.7, 18.36, 20.63],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.18, 15.69, 9.41, 8.06, 4.9, 2.22, 1.96, 1.63, 1.2, 1.12, 1.0, 0.95, 12.98, 6.62, 0.97, 1.35, 0.97, 0.96, 0.92, 0.87, 0.85, 0.67, 2.07, 0.8, 0.64],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.75, 25.25, 24.71, 24.28],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.11, 6.05, 5.62, 5.0, 2.89, 1.38, 0.95, 14.82, 4.75, 2.2, 1.71, 1.16, 0.98, 7.18, 4.75, 3.52, 1.44, 6.34, 2.57, 0.98, 2.36, 1.49, 1.57, 1.28, 0.9],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.51, 5.33, 4.67, 4.13, 3.42, 2.9, 1.86, 1.52, 1.51, 1.19, 1.0, 13.39, 11.01, 4.21, 1.2, 1.04, 1.0, 18.32, 3.3, 9.05, 2.42, 2.02],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'LPNT', 'HCA', 'THC', 'SEM', 'CYH', 'HLS', 'SCAI', 'KND', 'CERN', 'QSII', 'ATHN', 'CPSI', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.89, 5.82, 5.82, 3.13, 3.05, 1.2, 0.99, 0.94, 0.93, 15.69, 2.37, 2.16, 2.07, 0.94, 19.64, 1.47, 6.23, 3.01, 2.43, 1.39, 5.93, 4.04, 0.97, 0.95, 0.94],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.94, 6.16, 6.12, 4.6, 3.69, 1.38, 1.02, 13.25, 4.83, 4.8, 3.57, 1.91, 7.4, 6.24, 1.71, 1.07, 5.22, 4.74, 2.47, 1.01, 4.28, 3.03, 1.0, 1.44, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'MOBI', 'FENG', 'SOHU', 'CMCM', 'XNET', 'YY'],
			"weight":[23.63, 19.83, 10.76, 6.93, 4.87, 1.05, 17.6, 3.01, 2.2, 1.79, 1.68, 1.05, 1.01, 0.98, 0.97, 0.91, 0.87, 0.87],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.99, 14.67, 13.62, 4.99, 4.29, 2.22, 1.54, 1.2, 0.98, 3.52, 2.09, 1.98, 1.59, 1.39, 1.23, 9.69, 7.46, 1.55],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'SKYW', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.5, 10.0, 7.77, 4.9, 3.68, 2.23, 1.23, 1.09, 1.0, 0.97, 7.44, 5.11, 3.48, 2.29, 1.15, 1.01, 0.98, 0.97, 0.97, 0.96, 18.26, 5.93, 3.31, 3.15, 1.62],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'MWW', 'EVDY', 'ZPIN', 'DHX', 'WBMD', 'TRUE', 'RUBI', 'MKTO', 'CTCT', 'SCOR', 'CRTO', 'FUEL', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.84, 21.59, 4.72, 12.0, 5.43, 2.75, 7.03, 2.39, 1.05, 1.03, 1.03, 1.0, 0.99, 0.94, 0.83, 1.26, 1.02, 1.01, 1.01, 1.01, 0.99, 0.85, 2.2, 1.03, 0.99],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['PZA', 'TLT', 'VCLT', 'SHV', 'VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA', 'IAU'],
			"weight":[8.51, 8.45, 8.29, 25.22, 7.76, 3.25, 2.74, 1.54, 1.2, 1.11, 1.0, 0.94, 0.84, 0.81, 0.76, 0.67, 0.56, 0.56, 0.48, 0.38, 0.32, 0.17, 24.45],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.43, 11.99, 10.01, 7.42, 5.37, 4.87, 3.41, 3.32, 2.47, 1.34, 0.68, 0.57, 18.78, 6.54, 1.1, 6.65, 1.04, 1.02],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.54, 8.86, 5.77, 5.61, 4.41, 3.04, 2.12, 15.04, 8.81, 4.99, 3.63, 1.44, 1.39, 0.99, 6.56, 3.18, 0.55, 0.27, 4.6, 1.19],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'FSC', 'TCRD', 'AINV', 'GAIN', 'FDUS', 'TICC', 'KKR', 'ACAS', 'ACTA', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.37, 9.87, 6.29, 4.82, 4.33, 3.59, 3.35, 2.53, 2.23, 1.94, 1.71, 1.19, 1.05, 1.05, 1.05, 1.0, 0.99, 0.98, 18.8, 6.5, 6.22, 4.31, 3.06, 1.71, 1.04],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'AXS', 'IPCC', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'GLRE', 'VR', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.69, 10.8, 8.99, 7.28, 6.2, 6.13, 4.64, 3.25, 3.0, 2.48, 1.07, 1.04, 1.03, 0.99, 0.97, 0.95, 5.86, 3.47, 1.93, 1.04, 1.03, 0.95, 7.21, 5.95, 1.06],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[34.55, 15.64, 7.19, 2.71, 9.55, 7.81, 5.05, 1.07, 6.79, 3.95, 3.05, 1.55, 1.11],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['OTIC', 'AAVL', 'CTLT', 'KITE', 'XENT', 'ZFGN', 'ADPT', 'TTOO', 'RYI', 'MBLY', 'OEC', 'WMS', 'ICD', 'GPRO', 'LOCO', 'MIK', 'SERV', 'HQY', 'FCB', 'GNBC', 'TRUP', 'TERP', 'ECR', 'MRKT', 'TUBE'],
			"weight":[4.49, 4.4, 4.4, 3.68, 3.68, 3.54, 3.43, 3.02, 4.97, 4.71, 4.17, 4.15, 3.94, 5.5, 4.37, 3.96, 3.93, 4.01, 3.82, 3.75, 3.46, 3.62, 3.52, 3.79, 3.69],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.18, 15.42, 11.86, 15.0, 13.58, 6.88, 4.04, 1.06, 4.98, 1.02],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.59, 6.82, 6.68, 4.91, 3.65, 3.53, 3.42, 1.93, 30.85, 12.89, 3.0, 1.72],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.18, 14.66, 9.69, 5.72, 3.44, 2.65, 2.38, 1.45, 1.44, 1.35, 1.07, 0.89, 0.74, 6.27, 6.04, 2.69, 1.03, 1.02, 0.99, 0.96, 0.92, 7.16, 2.27, 1.0, 0.99],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'LMT', 'CSX', 'UNP', 'NOC', 'GD', 'RTN', 'HON', 'GE', 'BA', 'UPS', 'UTX', 'GS', 'MS', 'BAC', 'JPM', 'BRK.B', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.21, 4.2, 4.19, 4.19, 4.17, 4.17, 4.03, 3.91, 3.74, 3.65, 3.63, 3.52, 4.46, 4.38, 4.32, 4.21, 4.17, 4.0, 3.67, 3.32, 4.4, 4.19, 3.82, 3.85, 3.58],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.31, 17.22, 12.92, 11.54, 26.68, 5.81, 1.28, 1.24],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[15.92, 9.54, 2.14, 2.13, 2.09, 23.07, 3.11, 2.76, 1.99, 1.98, 1.79, 1.55, 1.36, 0.64, 0.51, 0.35, 6.86, 5.4, 2.7, 6.54, 5.48, 2.12],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.24, 9.11, 2.05, 2.04, 2.01, 23.15, 3.76, 3.35, 2.42, 2.4, 2.17, 1.87, 1.65, 0.79, 0.62, 0.43, 8.33, 6.56, 3.27, 6.32, 2.44],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[13.05, 7.77, 1.75, 1.74, 1.71, 4.32, 3.84, 2.79, 2.75, 2.49, 2.16, 1.89, 0.9, 0.71, 0.5, 9.56, 7.53, 3.76, 20.71, 7.26, 2.81],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.27, 3.09, 3.06, 2.77, 2.39, 2.11, 0.99, 0.79, 0.55, 10.62, 8.36, 4.18, 11.24, 6.59, 1.51, 1.48, 1.46, 18.55, 8.07, 3.12],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.23, 4.65, 3.37, 3.34, 3.02, 2.61, 2.29, 1.09, 0.86, 0.6, 11.56, 9.1, 4.55, 9.58, 5.61, 1.29, 1.26, 1.24, 16.6, 8.78, 3.39],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.6, 4.98, 3.61, 3.58, 3.23, 2.8, 2.46, 1.16, 0.92, 0.64, 12.4, 9.76, 4.87, 8.14, 4.77, 1.09, 1.08, 1.06, 14.79, 9.41, 3.64],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.95, 5.29, 3.83, 3.8, 3.43, 2.96, 2.61, 1.23, 0.98, 0.68, 13.15, 10.35, 5.17, 6.87, 4.03, 0.92, 0.91, 0.89, 0.0, 13.1, 9.98, 3.86],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.26, 5.56, 4.03, 3.99, 3.62, 3.12, 2.75, 1.29, 1.03, 0.72, 13.85, 10.9, 5.44, 11.48, 5.74, 3.36, 0.77, 0.76, 0.75, 0.0, 10.5, 4.07],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.12, 15.11, 9.54, 5.39, 3.05, 2.89, 2.47, 2.35, 1.96, 1.69, 1.37, 1.04, 1.01, 0.95, 7.22, 4.17, 1.74, 1.15, 1.13, 8.96, 0.98, 3.61, 1.14, 1.02, 0.92],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.09, 18.44, 9.69, 20.06, 5.2, 0.88, 0.62, 10.24, 1.65, 0.74, 3.98, 1.93, 1.58, 1.01, 0.89],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.68, 9.81, 3.09, 2.16, 1.6, 1.36, 0.99, 0.91, 6.93, 4.89, 4.42, 2.48, 1.13, 0.97, 0.94, 0.9, 17.6, 2.08, 1.0, 0.95, 0.84, 7.51, 4.51, 1.14, 9.11],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'ABMD', 'VASC', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.25, 3.57, 2.68, 1.75, 22.05, 0.94, 14.01, 1.19, 0.98, 4.4, 3.36, 1.55, 1.12, 0.96, 9.78, 0.99, 3.44, 1.02, 1.0, 0.99, 0.95, 3.98, 1.05, 1.01, 0.95],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'BUD', 'STZ', 'BF.B', 'BTI', 'RAI', 'LO', 'PM', 'YUM', 'MCD', 'DEO', 'CHTR', 'DISH', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.46, 4.26, 4.24, 4.09, 3.99, 3.97, 3.94, 3.92, 3.82, 3.78, 3.76, 4.6, 4.42, 4.37, 3.98, 3.74, 3.57, 3.44, 3.22, 3.13, 4.74, 4.66, 4.74, 4.01, 3.15],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'SGY', 'MHR', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'FST', 'MTDR', 'XCO', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.15, 12.85, 9.27, 4.55, 4.21, 3.62, 2.37, 1.06, 0.99, 0.97, 0.93, 0.87, 14.22, 0.83, 14.32, 4.15, 0.95, 1.05, 1.01, 0.99, 0.91, 0.77, 1.01, 0.99, 0.98],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'CWEI', 'FANG', 'RSPP', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.61, 7.85, 6.08, 5.2, 4.03, 1.38, 0.99, 0.91, 15.5, 6.76, 3.62, 1.52, 1.02, 1.0, 1.0, 0.99, 0.97, 0.94, 4.84, 3.22, 3.94, 1.73, 1.01, 0.94, 0.96],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'TXRH', 'MWIV', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.67, 5.33, 5.2, 4.93, 4.91, 4.88, 4.72, 3.21, 2.63, 1.35, 0.95, 6.6, 4.52, 4.38, 3.8, 3.26, 1.6, 5.49, 4.59, 3.11, 2.54, 3.53, 3.31, 4.51, 2.98],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.56, 13.04, 12.11, 13.94, 7.7, 1.36, 6.95, 4.26, 2.07],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'PG', 'NKE', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MRK', 'MDT', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.89, 5.47, 5.14, 5.05, 4.94, 4.9, 5.07, 4.98, 4.97, 4.92, 4.85, 4.55, 5.23, 5.1, 4.9, 4.89, 4.77, 4.8, 4.72, 4.86],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.89, 20.8, 13.65, 6.83, 1.64, 1.45, 1.34, 0.88, 14.94, 2.11, 8.26, 1.48, 1.37, 1.36],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'CALD', 'SQI', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.66, 11.8, 8.12, 7.62, 6.17, 4.56, 3.32, 1.77, 1.18, 1.12, 0.91, 4.13, 3.75, 2.73, 2.34, 2.05, 1.38, 0.94, 2.95, 1.0, 2.09, 1.48, 1.98, 0.95, 1.01],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['NX', 'XYL', 'BWC', 'TMST', 'RYAM', 'WBC', 'CLW', 'DPS', 'WWAV', 'SBH', 'HSNI', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'JBT', 'SAIC', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.21, 4.12, 4.06, 3.97, 3.89, 3.83, 3.71, 4.38, 4.26, 4.15, 4.07, 3.88, 4.44, 4.13, 3.8, 4.22, 4.13, 3.89, 4.13, 3.95, 3.76, 4.04, 4.0, 3.15, 3.85],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'SIAL', 'BCPC', 'FDS', 'USTR', 'FTI'],
			"weight":[5.07, 4.94, 4.15, 3.91, 2.75, 1.79, 8.54, 4.76, 3.57, 2.66, 5.49, 3.56, 3.5, 2.4, 1.64, 8.79, 3.46, 5.01, 4.59, 0.94, 8.44, 1.07, 4.82, 3.0, 1.15],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'SIMG', 'MXIM', 'ATML', 'NVDA', 'HIMX', 'CRUS', 'SIMO', 'FCS', 'STM', 'INVN', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.63, 9.52, 8.26, 4.78, 1.48, 1.0, 0.99, 0.96, 0.96, 0.96, 0.94, 0.94, 0.94, 0.9, 0.9, 25.06, 1.07, 1.04, 14.04, 9.63, 0.99],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'LUV', 'AAL', 'RYAAY', 'UAL', 'LFL', 'ALK', 'SAVE', 'CPA', 'JBLU', 'AVH', 'RJET', 'VLRS', 'HA', 'GOL', 'SKYW', 'AER', 'AL', 'AYR', 'AAWW', 'FLY', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.26, 10.7, 10.56, 9.56, 8.3, 4.68, 4.44, 3.43, 3.42, 1.86, 1.2, 1.14, 1.04, 0.96, 0.95, 0.79, 4.61, 4.58, 1.04, 0.97, 0.96, 0.9, 5.77, 2.73, 1.14],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'TRIB', 'IR', 'ETN', 'IHG', 'AZN', 'GSK', 'GWPH', 'ARMH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'QGEN', 'STM', 'G', 'HELE', 'IMOS', 'TEL', 'PNR', 'LOGI', 'FDP', 'SIMO'],
			"weight":[4.45, 4.21, 4.14, 3.84, 3.79, 3.76, 4.24, 4.12, 4.01, 3.96, 3.94, 3.49, 4.66, 4.38, 4.05, 4.04, 3.67, 3.89, 3.84, 3.79, 3.91, 3.87, 3.68, 4.25, 4.0],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'CVT', 'WAGE', 'PGI', 'DWRE', 'SAAS', 'FLTX', 'MKTO', 'ELLI', 'CTCT', 'LPSN', 'RP', 'TXTR', 'SPSC', 'NICE', 'LXFT', 'MSTR', 'PRO', 'CVLT', 'DWCH', 'RDWR', 'QLYS', 'PFPT', 'AVG', 'IMPV'],
			"weight":[4.37, 4.31, 4.12, 4.07, 4.05, 4.03, 4.0, 3.99, 3.99, 3.98, 3.95, 3.94, 3.9, 3.68, 4.18, 4.11, 3.93, 3.84, 3.81, 3.52, 4.24, 4.13, 4.0, 3.95, 3.91],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'SHLO', 'FDML', 'AXL', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[25.86, 13.44, 12.59, 10.33, 4.79, 2.93, 5.04, 4.99, 1.25, 0.97, 0.48, 3.93, 1.55, 1.16, 1.12, 0.92, 1.88, 0.98, 0.95, 0.93, 0.87, 1.19, 0.95, 0.91],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'AIG', 'MET', 'GS', 'MS', 'BK', 'STT'],
			"weight":[13.64, 9.88, 8.86, 6.08, 18.1, 5.37, 2.98, 2.48, 1.73, 1.37, 1.24, 0.85, 0.84, 6.76, 3.78, 6.1, 4.4, 3.14, 2.41],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'KNX', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.92, 14.1, 5.73, 5.43, 3.81, 1.05, 4.41, 4.27, 3.52, 2.27, 1.98, 1.06, 0.73, 15.9, 3.39, 2.25, 0.89, 1.37, 1.06, 1.05, 1.04, 0.95, 0.9, 1.62, 1.3],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'LAD', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.33, 17.04, 14.36, 9.99, 7.32, 0.94, 10.5, 6.05, 2.48, 1.03, 1.02, 0.91, 2.59, 1.58, 0.84, 2.95, 1.07],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['TLT', 'TLH', 'BSV', 'IEF', 'SCHR'],
			"weight":[12.63, 12.52, 24.99, 24.93, 24.92],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.65, 18.12, 2.74, 0.98, 0.9, 9.06, 6.91, 5.77, 3.08, 2.54, 2.5, 1.99, 1.99, 1.56, 1.03, 0.99, 0.98, 6.46, 0.99, 0.97, 4.3, 4.2, 1.24, 1.06, 1.0],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[26.16, 15.9, 6.57, 4.24, 4.12, 2.54, 2.3, 2.29, 1.92, 1.05, 0.97, 0.93, 0.62, 13.18, 1.44, 1.34, 1.07, 1.05, 0.97, 0.64, 0.57, 4.84, 3.43, 0.97, 0.9],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'RJF', 'PJC', 'COWN', 'EVR', 'GHL', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.26, 11.33, 9.49, 7.81, 6.86, 4.84, 4.31, 4.01, 3.87, 3.22, 1.84, 1.57, 1.01, 2.97, 1.43, 1.0, 1.0, 1.0, 0.96, 0.95, 0.94, 0.93, 2.76, 1.68, 0.96],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'MWA', 'WMS', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'CWCO', 'PICO'],
			"weight":[12.01, 4.23, 4.17, 3.84, 2.59, 1.4, 1.08, 1.08, 1.0, 0.98, 12.31, 8.48, 7.67, 2.19, 9.39, 7.61, 5.46, 2.44, 1.0, 0.97, 6.1, 1.0, 0.99, 1.0, 0.98],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GOOGL', 'GRMN', 'AAPL', 'ARMH', 'TXN', 'MCHP', 'MXIM', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[14.11, 12.29, 12.01, 11.81, 3.46, 3.11, 3.05, 3.03, 2.4, 1.79, 1.55, 3.54, 3.2, 2.86, 2.19, 2.12, 1.21, 3.76, 3.47, 2.92, 1.4, 1.31, 0.89, 1.41, 1.11],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.18, 15.69, 9.41, 8.06, 4.9, 2.22, 1.96, 1.63, 1.2, 1.12, 1.0, 0.95, 12.98, 6.62, 0.97, 1.35, 0.97, 0.96, 0.92, 0.87, 0.85, 0.67, 2.07, 0.8, 0.64],
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
