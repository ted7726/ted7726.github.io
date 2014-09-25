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
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'CWEI', 'RSPP', 'FANG', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.18, 7.87, 6.12, 5.25, 3.96, 1.48, 1.02, 0.93, 15.43, 6.82, 3.64, 1.56, 1.04, 1.02, 1.01, 1.0, 0.97, 0.97, 4.88, 3.11, 3.86, 1.87, 1.02, 0.97, 1.01],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'CAM', 'RES', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.46, 8.13, 5.75, 5.15, 5.1, 4.77, 4.57, 2.48, 1.15, 0.87, 0.69, 0.58, 10.72, 6.61, 2.06, 0.98, 0.93, 7.56, 2.88, 2.56, 1.03, 0.84, 4.15, 3.04, 0.95],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'SLCA', 'AA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'Z', 'AKRX'],
			"weight":[7.82, 5.2, 4.59, 2.71, 1.74, 5.05, 3.55, 3.27, 2.87, 2.7, 7.14, 4.55, 2.99, 2.3, 6.59, 6.07, 2.26, 5.64, 3.33, 3.41, 3.15, 4.4, 2.05, 3.36, 3.25],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.87, 21.01, 19.66, 13.7, 10.13, 5.98, 3.28, 1.36],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[17.75, 11.82, 10.18, 8.1, 6.28, 4.67, 4.44, 4.26, 4.14, 3.74, 3.22, 2.82, 2.44, 2.29, 1.86, 1.32, 1.29, 1.23, 1.07, 0.97, 1.6, 1.44, 0.63, 1.47, 0.98],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[25.21, 13.91, 12.43, 11.13, 9.53, 2.53, 2.34, 1.67, 1.56, 1.44, 1.43, 6.21, 1.81, 4.71, 3.06, 1.03],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[30.19, 21.68, 18.45, 17.26, 12.42],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[20.0, 19.51, 17.44, 23.04, 20.0],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.09, 20.23, 34.51, 21.18],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'REXX', 'CNX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.18, 12.74, 9.16, 4.67, 4.16, 3.58, 2.37, 1.05, 1.03, 0.98, 0.97, 0.93, 14.06, 0.87, 14.04, 4.22, 0.96, 1.1, 1.08, 1.04, 0.93, 0.88, 1.02, 1.0, 0.98],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.95, 5.98, 5.6, 5.0, 3.1, 1.38, 0.96, 14.57, 4.76, 2.2, 1.71, 1.18, 1.01, 7.66, 4.65, 3.48, 1.42, 6.23, 2.56, 1.0, 2.33, 1.51, 1.61, 1.26, 0.92],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'IMGN', 'SGEN', 'CRIS', 'GILD', 'CBST', 'EBS', 'REGN', 'ALXN', 'VRTX', 'UTHR', 'LGND', 'MDCO', 'ACOR', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.28, 11.15, 0.98, 0.96, 0.91, 19.4, 2.38, 0.92, 4.23, 4.18, 3.69, 2.11, 1.0, 0.99, 0.95, 9.16, 3.53, 2.48, 0.86, 4.64, 2.76, 2.42, 1.1, 0.97, 0.95],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.56, 20.17, 14.43, 6.53, 1.66, 1.4, 1.39, 0.88, 15.44, 2.17, 8.15, 1.49, 1.37, 1.36],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.89, 18.94, 14.06, 2.9, 1.42, 18.97, 14.93, 5.05, 3.84],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'WLK', 'NEU', 'HUN', 'EMN', 'MEOH', 'GRA', 'CE', 'LXU', 'POL', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'ALJ', 'CVI', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[13.73, 12.85, 8.01, 3.14, 3.12, 1.05, 1.04, 1.04, 1.03, 1.01, 0.95, 0.94, 9.14, 6.45, 6.43, 3.02, 2.3, 1.26, 0.99, 0.96, 0.96, 0.93, 15.79, 2.95, 0.9],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'MWW', 'EVDY', 'DHX', 'ZPIN', 'WBMD', 'TRUE', 'RUBI', 'MKTO', 'CTCT', 'SCOR', 'CRTO', 'FUEL', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.11, 22.33, 4.8, 11.7, 5.21, 2.86, 7.14, 2.44, 1.08, 1.02, 1.0, 0.98, 0.97, 0.97, 0.88, 1.22, 1.05, 1.02, 1.02, 0.97, 0.97, 0.92, 2.31, 1.02, 0.98],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'TARO', 'RDY', 'HSP', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.06, 19.82, 18.12, 10.04, 10.0, 9.98, 4.27, 2.52, 2.35, 1.83],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'HST', 'FRT', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'TCO', 'EQY', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.86, 6.16, 6.14, 4.62, 3.71, 1.4, 1.04, 13.17, 4.8, 4.78, 3.59, 1.9, 7.42, 6.28, 1.73, 1.06, 5.2, 4.72, 2.49, 1.0, 4.31, 3.06, 1.0, 1.45, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'MOBI', 'WB', 'FENG', 'SOHU', 'CMCM', 'YY', 'XNET'],
			"weight":[23.18, 19.72, 10.88, 6.76, 4.85, 1.06, 17.72, 3.07, 2.27, 1.82, 1.77, 1.13, 1.12, 1.01, 0.97, 0.93, 0.88, 0.86],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'OKS', 'WES', 'TCP', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'ENLK', 'EPB', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.09, 6.64, 6.21, 6.02, 5.4, 4.5, 4.44, 4.12, 3.95, 3.64, 3.37, 3.27, 3.18, 2.97, 2.89, 2.73, 2.68, 2.57, 2.28, 2.15, 4.72, 4.58, 4.29, 4.13, 2.17],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'SNSS', 'EPZM', 'TSRO', 'PGNX', 'DYAX', 'THLD', 'MGNX', 'IMMU', 'VSTM', 'NLNK', 'CRIS', 'CLDX', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[24.56, 6.52, 5.97, 4.67, 1.58, 25.19, 2.86, 2.28, 1.88, 1.72, 1.7, 1.57, 1.42, 1.31, 1.16, 1.11, 1.08, 1.07, 1.05, 0.96, 0.92, 3.44, 2.59, 2.4, 0.99],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.79, 17.04, 14.08, 9.97, 7.36, 0.95, 10.37, 6.06, 2.53, 1.02, 1.01, 0.89, 2.59, 1.52, 0.84, 2.95, 1.05],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.88, 15.71, 12.01, 14.91, 13.41, 6.87, 4.1, 1.06, 5.02, 1.03],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'RL', 'VFC', 'NKE', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.71, 5.3, 5.01, 4.8, 4.39, 3.24, 2.36, 2.32, 1.81, 5.87, 5.59, 4.2, 3.76, 3.62, 2.34, 1.42, 12.06, 5.89, 5.31, 1.27, 4.7, 1.83, 1.45, 2.74, 2.01],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['EDE', 'LG', 'AWK', 'ED', 'DUK', 'XEL', 'CMS', 'DTE', 'SO', 'PPL', 'NWN', 'D', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'K', 'MCD', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.14, 4.14, 4.1, 4.08, 4.07, 4.0, 3.97, 3.94, 3.93, 3.89, 3.89, 3.86, 3.82, 4.42, 4.31, 4.14, 4.11, 3.92, 3.81, 3.79, 3.7, 3.61, 4.41, 4.12, 3.84],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'SIMG', 'INVN', 'MXIM', 'ATML', 'CRUS', 'STM', 'NVDA', 'FCS', 'SIMO', 'HIMX', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.61, 9.27, 8.16, 4.73, 1.55, 1.03, 1.01, 0.99, 0.99, 0.97, 0.97, 0.96, 0.95, 0.94, 0.94, 24.63, 1.02, 1.0, 14.48, 9.8, 0.99],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.38, 9.0, 5.87, 5.52, 4.47, 2.96, 2.13, 14.89, 8.75, 5.05, 3.61, 1.46, 1.45, 1.05, 6.67, 3.16, 0.56, 0.28, 4.48, 1.26],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[22.77, 14.68, 9.7, 5.7, 3.52, 2.72, 2.46, 1.45, 1.41, 1.34, 1.11, 0.94, 0.71, 6.35, 6.01, 2.76, 1.06, 1.02, 1.0, 0.96, 0.93, 7.14, 2.27, 1.01, 0.99],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'OMC', 'CLX', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'OKE', 'D', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[10.1, 6.46, 6.3, 5.63, 5.6, 4.89, 4.69, 2.42, 1.0, 4.47, 4.17, 4.08, 4.0, 3.34, 2.35, 2.2, 1.02, 0.98, 4.42, 3.26, 2.45, 5.97, 5.88, 3.32, 1.0],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.49, 13.82, 12.23, 4.33, 3.52, 1.7, 1.22, 0.82, 11.49, 6.75, 4.47, 0.9, 21.27],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'DPZ', 'WEN', 'SONC', 'DNKN', 'TAST', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'TR', 'KRFT', 'FRSH', 'DMND', 'UL'],
			"weight":[20.66, 20.07, 3.15, 2.11, 17.16, 4.41, 1.67, 1.1, 1.06, 1.06, 1.06, 1.03, 1.01, 0.96, 0.95, 0.94, 0.8, 11.23, 3.83, 1.04, 0.97, 0.97, 0.95, 0.86, 0.95],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BIG', 'BURL', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'TFM', 'CHS', 'BID', 'MOV'],
			"weight":[24.66, 7.98, 6.3, 6.08, 2.49, 1.23, 1.11, 1.11, 1.03, 1.02, 0.97, 0.85, 12.2, 7.82, 5.72, 5.0, 3.91, 2.07, 1.65, 1.49, 1.32, 1.04, 1.01, 0.97, 0.97],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'MXIM', 'TXN', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.32, 5.22, 5.04, 3.51, 3.33, 2.91, 5.35, 4.12, 4.01, 3.64, 2.97, 2.7, 5.6, 4.92, 3.07, 3.06, 2.05, 6.93, 3.98, 5.21, 1.59, 0.99, 5.91, 5.21, 3.38],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'KIRK', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[32.13, 28.02, 3.45, 3.2, 6.81, 5.2, 3.75, 1.76, 1.65, 1.3, 1.17, 4.83, 3.01, 0.63, 3.07],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'PFE', 'MRK', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[12.09, 9.86, 10.12, 10.0, 9.81, 9.77, 10.26, 9.04, 9.67, 9.37],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'TUES', 'DSW', 'CATO', 'CTRN', 'DLTR', 'DG', 'FIVE', 'SVU', 'FRED', 'BIG', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[16.53, 11.52, 1.11, 0.85, 21.14, 1.0, 14.33, 3.3, 1.04, 1.02, 1.02, 0.96, 6.56, 5.74, 1.02, 1.01, 1.01, 1.01, 4.08, 1.66, 1.3, 1.0, 0.99, 0.82],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'BITA', 'XNET', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[20.09, 4.95, 3.98, 3.64, 3.38, 2.54, 1.91, 1.31, 0.94, 0.87, 11.5, 7.4, 4.24, 3.62, 1.82, 0.98, 0.94, 10.87, 1.54, 0.94, 5.95, 2.06, 1.67, 1.45, 1.42],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.93, 19.1, 14.75, 12.89, 4.42, 14.88, 7.23, 4.8],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'TSL', 'HSOL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.21, 7.17, 6.77, 6.26, 2.39, 1.87, 1.51, 1.28, 1.08, 1.03, 5.52, 5.2, 4.3, 2.22, 0.94, 15.07, 12.78, 0.85, 2.26, 1.89, 1.4, 0.98, 5.6, 3.37, 1.04],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'LITB', 'NILE', 'EHTH', 'SFLY', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[19.91, 5.75, 1.08, 1.05, 1.05, 1.02, 0.97, 0.88, 22.6, 2.59, 2.49, 1.01, 0.93, 16.41, 6.01, 2.5, 0.99, 0.94, 3.26, 1.44, 1.12, 1.03, 1.02, 0.84, 3.11],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[23.28, 17.61, 12.89, 11.67, 26.23, 5.78, 1.27, 1.26],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.29, 5.58, 4.03, 4.02, 3.64, 3.15, 2.73, 1.29, 1.03, 0.72, 14.07, 10.89, 5.43, 11.35, 5.62, 3.31, 0.76, 0.75, 0.74, 0.0, 10.52, 4.07],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'AEP', 'ETR', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'TRMK', 'ACC', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.97, 5.71, 4.94, 4.23, 4.13, 4.11, 3.34, 3.08, 2.86, 2.59, 2.38, 0.98, 5.28, 5.11, 5.03, 4.86, 4.27, 4.09, 3.58, 2.87, 4.53, 3.45, 4.45, 3.35, 2.81],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'K', 'CL', 'BF.B', 'GIS'],
			"weight":[7.08, 6.39, 5.08, 4.51, 4.39, 4.1, 3.72, 3.57, 3.13, 2.83, 2.82, 2.35, 1.45, 6.92, 6.75, 5.34, 5.07, 4.64, 4.49, 4.09, 3.08, 2.54, 2.52, 1.66, 1.49],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.98, 5.31, 3.83, 3.83, 3.46, 2.99, 2.59, 1.23, 0.98, 0.68, 13.37, 10.35, 5.16, 6.74, 3.96, 0.91, 0.9, 0.89, 0.0, 12.96, 10.0, 3.87],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'IGF', 'VTIP', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[15.73, 14.54, 12.65, 6.83, 6.41, 5.94, 5.01, 4.95, 11.65, 7.94, 2.91, 2.75, 2.7],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['SPY', 'VO', 'VBR', 'VWO', 'VEU', 'BSV', 'VTIP', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.71, 8.71, 8.62, 8.75, 8.23, 8.27, 8.23, 8.32, 7.6, 8.31, 8.22, 8.03],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.43, 17.89, 2.73, 0.98, 0.94, 9.05, 7.0, 5.78, 3.08, 2.54, 2.53, 2.01, 1.98, 1.56, 1.03, 1.01, 0.98, 6.49, 1.0, 1.0, 4.36, 4.32, 1.22, 1.07, 1.03],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'GOOGL', 'CSCO', 'QCOM', 'ORCL', 'AAPL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'GLW', 'ADI', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.36, 9.87, 9.79, 7.33, 5.72, 5.67, 3.36, 2.3, 2.2, 2.09, 2.02, 1.35, 1.33, 1.17, 0.95, 0.92, 0.9, 0.88, 6.71, 5.06, 6.39, 1.03, 2.68, 1.0, 0.93],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.63, 5.01, 3.61, 3.61, 3.26, 2.83, 2.45, 1.16, 0.92, 0.64, 12.62, 9.77, 4.87, 7.99, 4.7, 1.08, 1.07, 1.05, 14.65, 9.44, 3.65],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.38, 4.78, 4.28, 3.05, 2.83, 2.68, 2.22, 1.61, 0.98, 8.41, 5.14, 4.13, 3.34, 2.11, 5.76, 5.01, 4.5, 3.76, 6.45, 3.82, 3.45, 2.62, 7.19, 1.35, 5.17],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VWO', 'VTI', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.75, 20.64, 19.08, 20.0, 19.53],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.26, 4.67, 3.37, 3.37, 3.05, 2.64, 2.28, 1.09, 0.86, 0.6, 11.77, 9.11, 4.55, 9.41, 5.53, 1.27, 1.26, 1.24, 16.45, 8.81, 3.41],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.4, 5.23, 4.62, 4.1, 3.44, 2.84, 1.84, 1.55, 1.54, 1.21, 1.0, 13.27, 10.84, 4.14, 1.2, 1.03, 0.99, 18.93, 3.39, 8.98, 2.44, 2.02],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['DOX', 'LLL', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'FLEX', 'CF'],
			"weight":[8.39, 8.37, 5.85, 4.96, 4.8, 3.64, 3.16, 2.46, 2.14, 2.01, 1.83, 1.18, 1.11, 0.96, 7.03, 6.41, 5.34, 7.65, 4.06, 4.33, 2.39, 1.78, 8.14, 1.01, 1.0],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['KO', 'NKE', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'MDLZ', 'PEP', 'MNST', 'PG', 'MCD', 'LB', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[8.92, 8.91, 7.61, 6.91, 4.48, 4.14, 3.82, 3.74, 3.69, 3.51, 3.12, 3.08, 3.08, 2.87, 2.64, 11.0, 6.45, 4.69, 3.93, 3.42],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.46, 5.69, 4.03, 3.94, 3.89, 3.46, 3.42, 3.02, 2.72, 2.5, 6.53, 5.96, 5.22, 3.71, 3.56, 3.14, 2.15, 5.28, 4.61, 4.25, 3.64, 3.38, 2.7, 3.8, 2.93],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'PEB', 'LHO', 'CLDT', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.65, 10.06, 8.1, 4.99, 3.62, 2.26, 1.19, 1.1, 1.0, 0.97, 7.44, 5.09, 3.45, 2.23, 1.14, 0.98, 0.98, 0.97, 0.97, 0.95, 17.99, 5.76, 3.32, 3.16, 1.63],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'XLS', 'VSAT', 'FLIR', 'MRCY', 'KTOS', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[24.64, 11.93, 9.36, 2.08, 0.94, 0.92, 11.07, 3.52, 3.25, 2.1, 1.97, 1.5, 1.21, 1.16, 1.05, 1.04, 0.93, 0.92, 0.81, 13.72, 2.17, 1.11, 0.87, 0.88, 0.86],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['TJX', 'CVS', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'QCOM', 'JKHY', 'ORCL', 'BDX', 'CAH', 'TECH', 'OMC', 'CTAS', 'FDS', 'PX', 'SIAL', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.3, 4.29, 4.03, 3.53, 2.08, 4.03, 3.67, 3.32, 2.43, 1.19, 5.38, 5.02, 3.57, 6.57, 3.94, 3.43, 4.61, 4.03, 3.8, 6.85, 5.24, 4.22, 3.31, 4.27, 2.88],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.84, 4.3, 3.1, 3.1, 2.8, 2.42, 2.1, 1.0, 0.79, 0.55, 10.83, 8.38, 4.19, 11.04, 6.5, 1.5, 1.47, 1.45, 18.4, 8.11, 3.14],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.42, 6.85, 6.75, 4.93, 3.69, 3.57, 3.47, 1.97, 30.7, 12.9, 3.01, 1.74],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'EVTC', 'HPY', 'JKHY', 'EEFT', 'ONE', 'FLT', 'EBAY', 'QIWI', 'GDOT', 'HAWK', 'UEPS', 'WEX', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[20.05, 19.25, 13.88, 4.2, 4.17, 3.58, 2.7, 2.67, 1.05, 1.0, 1.0, 0.99, 0.95, 0.91, 7.22, 6.45, 1.07, 1.06, 1.03, 1.01, 1.0, 1.67, 1.07, 1.04, 0.99],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VEA', 'VWO', 'VNQ', 'VTIP', 'IEF'],
			"weight":[31.22, 14.43, 5.23, 19.64, 14.75, 14.73],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'MR', 'HTHT', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'VIV', 'UGP', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.44, 9.36, 6.3, 5.24, 4.78, 4.53, 3.28, 2.87, 2.46, 2.04, 1.38, 1.04, 1.03, 1.01, 0.92, 4.32, 3.85, 2.19, 2.16, 1.52, 9.85, 1.05, 4.37, 3.56, 5.45],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[12.9, 7.7, 1.74, 1.73, 1.7, 4.35, 3.86, 2.79, 2.78, 2.52, 2.19, 1.88, 0.9, 0.71, 0.5, 9.75, 7.55, 3.77, 20.54, 7.29, 2.82],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.93, 5.41, 5.18, 5.03, 4.99, 4.92, 5.07, 5.02, 4.93, 4.88, 4.78, 4.51, 5.26, 5.04, 4.92, 4.84, 4.83, 4.82, 4.78, 4.88],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.85, 11.93, 10.14, 7.23, 5.3, 4.82, 3.48, 3.28, 2.53, 1.33, 0.66, 0.58, 18.76, 6.56, 1.09, 6.51, 1.03, 0.93],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.06, 14.72, 14.16, 4.9, 4.4, 2.17, 1.53, 1.21, 0.99, 3.48, 2.04, 1.94, 1.55, 1.36, 1.32, 9.76, 7.83, 1.58],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.75, 25.57, 24.37, 24.31],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['CME', 'IBKR', 'CSBK', 'VRSK', 'NVGS', 'CAH', 'KAI', 'PG', 'LGF', 'COST', 'FB', 'GNCMA', 'PFPT', 'ALNY', 'ACT', 'IT', 'CNQR'],
			"weight":[6.16, 6.09, 5.84, 5.83, 6.07, 5.84, 5.82, 5.9, 5.88, 5.87, 5.79, 5.54, 5.54, 6.38, 5.98, 5.74, 5.73],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'BDBD', 'CVGW', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.22, 10.16, 9.88, 9.19, 2.81, 2.59, 2.05, 1.72, 1.6, 1.0, 0.97, 16.29, 8.19, 3.18, 1.24, 0.86, 8.01, 5.26, 1.78, 1.0],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.11, 9.04, 2.04, 2.03, 2.0, 22.99, 3.8, 3.37, 2.43, 2.43, 2.2, 1.9, 1.64, 0.79, 0.63, 0.43, 8.5, 6.58, 3.28, 6.36, 2.46],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.6, 32.74, 32.66],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.36, 19.1, 13.39, 11.53, 13.23, 4.77, 1.2, 1.06, 11.6, 2.92, 0.94, 0.89],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.79, 15.77, 6.52, 4.29, 4.08, 2.56, 2.32, 2.27, 1.91, 1.02, 1.02, 0.93, 0.61, 13.38, 1.44, 1.41, 1.1, 1.05, 1.01, 0.68, 0.58, 4.94, 3.46, 0.95, 0.93],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'VASC', 'ABMD', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.11, 3.55, 2.73, 1.71, 22.18, 0.98, 13.9, 1.24, 1.02, 4.42, 3.39, 1.57, 1.18, 0.98, 9.61, 1.03, 3.26, 1.03, 1.0, 1.0, 0.97, 4.07, 1.06, 1.03, 0.99],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'MANT', 'CLGX', 'MXIM', 'GLW', 'FEIC', 'CTSH', 'FNSR', 'DHR', 'ALB', 'EMN', 'SCS', 'ENS', 'CIR', 'CRS', 'SPLS', 'CAG', 'DHI', 'CL', 'KRFT', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[4.19, 4.03, 4.02, 4.02, 4.01, 3.97, 3.95, 3.71, 4.12, 4.09, 4.07, 4.05, 3.94, 3.91, 3.76, 4.44, 4.1, 4.06, 4.02, 3.9, 4.13, 3.89, 4.03, 3.86, 3.72],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'IMAX', 'STRZA', 'AMCX', 'TV', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.29, 18.0, 17.38, 11.97, 11.17, 1.87, 6.13, 2.28, 1.02, 0.98, 0.97, 0.96, 3.61, 1.35, 0.96, 1.02, 1.02, 1.01],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.51, 27.69, 16.55, 15.63, 7.17, 4.45],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[27.91, 27.77, 16.35, 15.44, 7.98, 4.55],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.78, 27.77, 17.37, 16.53, 4.42, 4.13],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.16, 29.52, 19.0, 13.21, 4.82, 3.3],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.83, 25.21, 22.48, 12.49, 3.8, 3.19],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[31.79, 26.15, 18.26, 13.34, 7.11, 3.35],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[37.34, 35.32, 17.62, 9.71],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'DECK', 'ABV', 'CBD', 'ROST', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[8.77, 5.4, 4.57, 4.28, 4.23, 3.81, 3.61, 2.89, 1.83, 8.15, 6.92, 4.83, 3.74, 6.9, 5.69, 4.33, 1.17, 9.06, 5.25, 4.57],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'LF', 'JAKK', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'FL', 'BWS', 'CROX', 'BFAM', 'CRCM'],
			"weight":[16.7, 12.1, 16.06, 5.76, 3.02, 1.51, 1.26, 0.99, 7.59, 5.66, 0.99, 0.99, 12.8, 1.01, 4.12, 1.65, 1.05, 0.99, 1.01, 0.99, 0.89, 1.96, 0.91],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.6, 9.84, 3.25, 2.14, 1.58, 1.36, 1.01, 0.92, 17.9, 2.11, 0.98, 0.97, 0.87, 6.76, 4.79, 4.5, 2.43, 1.13, 0.93, 0.92, 0.89, 7.48, 4.46, 1.16, 9.03],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.73, 14.09, 5.66, 5.42, 3.76, 1.04, 4.47, 4.46, 3.58, 2.32, 2.01, 1.08, 0.71, 15.84, 3.4, 2.21, 0.92, 1.38, 1.06, 1.04, 1.03, 0.94, 0.89, 1.61, 1.33],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'CHDN', 'TXRH', 'MWIV', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.62, 5.24, 5.19, 4.89, 4.86, 4.85, 4.76, 3.23, 2.67, 1.31, 0.98, 6.49, 4.56, 4.47, 3.78, 3.25, 1.61, 5.46, 4.67, 3.15, 2.58, 3.56, 3.38, 4.55, 2.88],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[21.8, 19.96, 18.79, 18.6, 20.86],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.07, 15.46, 9.67, 8.02, 4.94, 2.32, 2.03, 1.64, 1.18, 1.1, 1.01, 0.96, 12.9, 6.48, 0.99, 1.36, 0.98, 0.96, 0.93, 0.89, 0.88, 0.67, 2.09, 0.81, 0.67],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.75, 25.57, 24.37, 24.31],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.95, 5.98, 5.6, 5.0, 3.1, 1.38, 0.96, 14.57, 4.76, 2.2, 1.71, 1.18, 1.01, 7.66, 4.65, 3.48, 1.42, 6.23, 2.56, 1.0, 2.33, 1.51, 1.61, 1.26, 0.92],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.4, 5.23, 4.62, 4.1, 3.44, 2.84, 1.84, 1.55, 1.54, 1.21, 1.0, 13.27, 10.84, 4.14, 1.2, 1.03, 0.99, 18.93, 3.39, 8.98, 2.44, 2.02],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'LPNT', 'HCA', 'THC', 'SEM', 'CYH', 'HLS', 'SCAI', 'KND', 'CERN', 'QSII', 'ATHN', 'CPSI', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'EHTH', 'TW'],
			"weight":[7.74, 5.82, 5.74, 3.1, 3.08, 1.2, 0.99, 0.97, 0.95, 15.54, 2.32, 2.14, 2.1, 0.95, 19.85, 1.51, 6.3, 3.05, 2.44, 1.3, 5.8, 4.16, 0.97, 0.98, 0.98],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'HST', 'FRT', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'TCO', 'EQY', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.86, 6.16, 6.14, 4.62, 3.71, 1.4, 1.04, 13.17, 4.8, 4.78, 3.59, 1.9, 7.42, 6.28, 1.73, 1.06, 5.2, 4.72, 2.49, 1.0, 4.31, 3.06, 1.0, 1.45, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'MOBI', 'WB', 'FENG', 'SOHU', 'CMCM', 'YY', 'XNET'],
			"weight":[23.18, 19.72, 10.88, 6.76, 4.85, 1.06, 17.72, 3.07, 2.27, 1.82, 1.77, 1.13, 1.12, 1.01, 0.97, 0.93, 0.88, 0.86],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'AKAM', 'YHOO', 'FENG'],
			"weight":[25.06, 14.72, 14.16, 4.9, 4.4, 2.17, 1.53, 1.21, 0.99, 3.48, 2.04, 1.94, 1.55, 1.36, 1.32, 9.76, 7.83, 1.58],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'PEB', 'LHO', 'CLDT', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.65, 10.06, 8.1, 4.99, 3.62, 2.26, 1.19, 1.1, 1.0, 0.97, 7.44, 5.09, 3.45, 2.23, 1.14, 0.98, 0.98, 0.97, 0.97, 0.95, 17.99, 5.76, 3.32, 3.16, 1.63],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'MWW', 'EVDY', 'DHX', 'ZPIN', 'WBMD', 'TRUE', 'RUBI', 'MKTO', 'CTCT', 'SCOR', 'CRTO', 'FUEL', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.11, 22.33, 4.8, 11.7, 5.21, 2.86, 7.14, 2.44, 1.08, 1.02, 1.0, 0.98, 0.97, 0.97, 0.88, 1.22, 1.05, 1.02, 1.02, 0.97, 0.97, 0.92, 2.31, 1.02, 0.98],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA', 'SHV', 'PZA', 'TLT', 'VCLT', 'IAU'],
			"weight":[7.81, 3.33, 2.73, 1.55, 1.2, 1.11, 1.05, 0.96, 0.85, 0.82, 0.77, 0.67, 0.57, 0.57, 0.49, 0.38, 0.33, 0.17, 25.11, 8.45, 8.31, 8.17, 24.59],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[13.85, 11.93, 10.14, 7.23, 5.3, 4.82, 3.48, 3.28, 2.53, 1.33, 0.66, 0.58, 18.76, 6.56, 1.09, 6.51, 1.03, 0.93],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.38, 9.0, 5.87, 5.52, 4.47, 2.96, 2.13, 14.89, 8.75, 5.05, 3.61, 1.46, 1.45, 1.05, 6.67, 3.16, 0.56, 0.28, 4.48, 1.26],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'FSC', 'AINV', 'TCRD', 'FDUS', 'GAIN', 'TICC', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.35, 9.67, 6.18, 4.77, 4.29, 3.87, 3.31, 2.46, 2.2, 1.94, 1.71, 1.22, 1.05, 1.04, 1.04, 1.0, 1.0, 0.98, 18.42, 7.11, 6.51, 4.12, 3.05, 1.67, 1.04],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'AXS', 'IPCC', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'GLRE', 'VR', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.57, 10.75, 8.97, 7.26, 6.2, 6.12, 4.74, 3.22, 3.01, 2.48, 1.07, 1.03, 1.02, 0.99, 0.97, 0.94, 5.83, 3.49, 1.93, 1.05, 1.04, 0.96, 7.27, 6.03, 1.07],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[34.45, 15.63, 7.14, 2.69, 9.63, 8.03, 4.96, 1.1, 6.74, 3.88, 3.06, 1.57, 1.13],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['CTLT', 'AAVL', 'OTIC', 'XENT', 'KITE', 'ADPT', 'ZFGN', 'TTOO', 'RYI', 'MBLY', 'WMS', 'OEC', 'ICD', 'GPRO', 'LOCO', 'MIK', 'SERV', 'HQY', 'FCB', 'GNBC', 'TRUP', 'TERP', 'ECR', 'MRKT', 'TUBE'],
			"weight":[4.4, 4.2, 3.95, 3.8, 3.78, 3.63, 3.53, 2.88, 4.82, 4.53, 4.34, 4.19, 3.87, 5.41, 4.52, 4.0, 3.9, 4.04, 3.78, 3.73, 3.55, 3.81, 3.8, 3.8, 3.72],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.88, 15.71, 12.01, 14.91, 13.41, 6.87, 4.1, 1.06, 5.02, 1.03],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.42, 6.85, 6.75, 4.93, 3.69, 3.57, 3.47, 1.97, 30.7, 12.9, 3.01, 1.74],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[22.77, 14.68, 9.7, 5.7, 3.52, 2.72, 2.46, 1.45, 1.41, 1.34, 1.11, 0.94, 0.71, 6.35, 6.01, 2.76, 1.06, 1.02, 1.0, 0.96, 0.93, 7.14, 2.27, 1.01, 0.99],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'UNP', 'CSX', 'GD', 'LMT', 'NOC', 'RTN', 'HON', 'GE', 'UPS', 'BA', 'UTX', 'GS', 'MS', 'BAC', 'JPM', 'BRK.B', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.22, 4.2, 4.2, 4.19, 4.18, 4.16, 4.0, 3.94, 3.75, 3.66, 3.64, 3.57, 4.49, 4.46, 4.33, 4.21, 4.19, 4.0, 3.67, 3.37, 4.39, 4.09, 3.78, 3.78, 3.51],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[23.28, 17.61, 12.89, 11.67, 26.23, 5.78, 1.27, 1.26],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[15.82, 9.49, 2.13, 2.12, 2.08, 22.91, 3.13, 2.78, 2.01, 2.0, 1.81, 1.57, 1.36, 0.64, 0.51, 0.35, 7.0, 5.42, 2.7, 6.52, 5.51, 2.13],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.11, 9.04, 2.04, 2.03, 2.0, 22.99, 3.8, 3.37, 2.43, 2.43, 2.2, 1.9, 1.64, 0.79, 0.63, 0.43, 8.5, 6.58, 3.28, 6.36, 2.46],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[12.9, 7.7, 1.74, 1.73, 1.7, 4.35, 3.86, 2.79, 2.78, 2.52, 2.19, 1.88, 0.9, 0.71, 0.5, 9.75, 7.55, 3.77, 20.54, 7.29, 2.82],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.84, 4.3, 3.1, 3.1, 2.8, 2.42, 2.1, 1.0, 0.79, 0.55, 10.83, 8.38, 4.19, 11.04, 6.5, 1.5, 1.47, 1.45, 18.4, 8.11, 3.14],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.26, 4.67, 3.37, 3.37, 3.05, 2.64, 2.28, 1.09, 0.86, 0.6, 11.77, 9.11, 4.55, 9.41, 5.53, 1.27, 1.26, 1.24, 16.45, 8.81, 3.41],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.63, 5.01, 3.61, 3.61, 3.26, 2.83, 2.45, 1.16, 0.92, 0.64, 12.62, 9.77, 4.87, 7.99, 4.7, 1.08, 1.07, 1.05, 14.65, 9.44, 3.65],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.98, 5.31, 3.83, 3.83, 3.46, 2.99, 2.59, 1.23, 0.98, 0.68, 13.37, 10.35, 5.16, 6.74, 3.96, 0.91, 0.9, 0.89, 0.0, 12.96, 10.0, 3.87],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.29, 5.58, 4.03, 4.02, 3.64, 3.15, 2.73, 1.29, 1.03, 0.72, 14.07, 10.89, 5.43, 11.35, 5.62, 3.31, 0.76, 0.75, 0.74, 0.0, 10.52, 4.07],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.06, 15.05, 9.48, 5.29, 3.06, 2.96, 2.48, 2.36, 1.97, 1.73, 1.36, 1.07, 1.02, 0.94, 7.2, 4.2, 1.74, 1.16, 1.13, 8.95, 1.0, 3.67, 1.13, 1.03, 0.95],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.22, 18.39, 9.61, 20.11, 5.26, 0.87, 0.63, 10.15, 1.63, 0.76, 3.99, 1.89, 1.58, 1.03, 0.89],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.6, 9.84, 3.25, 2.14, 1.58, 1.36, 1.01, 0.92, 17.9, 2.11, 0.98, 0.97, 0.87, 6.76, 4.79, 4.5, 2.43, 1.13, 0.93, 0.92, 0.89, 7.48, 4.46, 1.16, 9.03],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'VASC', 'ABMD', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.11, 3.55, 2.73, 1.71, 22.18, 0.98, 13.9, 1.24, 1.02, 4.42, 3.39, 1.57, 1.18, 0.98, 9.61, 1.03, 3.26, 1.03, 1.0, 1.0, 0.97, 4.07, 1.06, 1.03, 0.99],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'BUD', 'STZ', 'BF.B', 'BTI', 'RAI', 'LO', 'PM', 'DEO', 'YUM', 'MCD', 'CHTR', 'DISH', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.32, 4.22, 4.19, 4.03, 3.93, 3.87, 3.85, 3.84, 3.79, 3.79, 3.72, 4.56, 4.53, 4.39, 3.97, 3.81, 3.71, 3.56, 3.39, 3.23, 4.74, 4.7, 4.67, 3.95, 3.25],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'REXX', 'CNX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.18, 12.74, 9.16, 4.67, 4.16, 3.58, 2.37, 1.05, 1.03, 0.98, 0.97, 0.93, 14.06, 0.87, 14.04, 4.22, 0.96, 1.1, 1.08, 1.04, 0.93, 0.88, 1.02, 1.0, 0.98],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'CWEI', 'RSPP', 'FANG', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.18, 7.87, 6.12, 5.25, 3.96, 1.48, 1.02, 0.93, 15.43, 6.82, 3.64, 1.56, 1.04, 1.02, 1.01, 1.0, 0.97, 0.97, 4.88, 3.11, 3.86, 1.87, 1.02, 0.97, 1.01],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'CHDN', 'TXRH', 'MWIV', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.62, 5.24, 5.19, 4.89, 4.86, 4.85, 4.76, 3.23, 2.67, 1.31, 0.98, 6.49, 4.56, 4.47, 3.78, 3.25, 1.61, 5.46, 4.67, 3.15, 2.58, 3.56, 3.38, 4.55, 2.88],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.44, 12.89, 12.24, 13.78, 7.56, 1.35, 7.09, 4.58, 2.07],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.93, 5.41, 5.18, 5.03, 4.99, 4.92, 5.07, 5.02, 4.93, 4.88, 4.78, 4.51, 5.26, 5.04, 4.92, 4.84, 4.83, 4.82, 4.78, 4.88],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.56, 20.17, 14.43, 6.53, 1.66, 1.4, 1.39, 0.88, 15.44, 2.17, 8.15, 1.49, 1.37, 1.36],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'SQI', 'CALD', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.63, 12.0, 8.13, 7.78, 6.06, 3.84, 3.43, 1.74, 1.15, 1.13, 0.94, 4.13, 3.72, 2.75, 2.38, 2.21, 1.37, 0.96, 3.01, 1.02, 2.08, 1.53, 1.99, 1.0, 1.02],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['TMST', 'NX', 'XYL', 'BWC', 'WBC', 'RYAM', 'CLW', 'WWAV', 'DPS', 'SBH', 'HSNI', 'AMCX', 'JBT', 'SAIC', 'NAME', 'TPUB', 'TIME', 'CBSO', 'RSE', 'NSAM', 'WPG', 'PSX', 'DNOW', 'PGN', 'TBPH'],
			"weight":[4.14, 4.12, 4.1, 4.08, 3.82, 3.78, 3.78, 4.37, 4.19, 4.09, 4.0, 3.93, 4.26, 4.16, 3.93, 4.18, 4.15, 3.85, 4.16, 3.95, 3.65, 4.05, 4.04, 3.33, 3.89],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'FDS', 'USTR', 'SIAL', 'BCPC', 'FTI'],
			"weight":[5.19, 4.97, 4.23, 3.93, 2.82, 1.81, 8.65, 4.82, 3.66, 2.7, 5.56, 3.66, 3.58, 2.43, 1.66, 8.93, 3.58, 5.16, 4.9, 0.97, 4.91, 3.15, 6.45, 1.09, 1.18],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'SIMG', 'INVN', 'MXIM', 'ATML', 'CRUS', 'STM', 'NVDA', 'FCS', 'SIMO', 'HIMX', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.61, 9.27, 8.16, 4.73, 1.55, 1.03, 1.01, 0.99, 0.99, 0.97, 0.97, 0.96, 0.95, 0.94, 0.94, 24.63, 1.02, 1.0, 14.48, 9.8, 0.99],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'AAL', 'LUV', 'RYAAY', 'UAL', 'LFL', 'ALK', 'CPA', 'SAVE', 'JBLU', 'AVH', 'RJET', 'VLRS', 'HA', 'GOL', 'SKYW', 'AER', 'AL', 'AYR', 'AAWW', 'FLY', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.29, 10.88, 10.65, 9.58, 8.35, 4.59, 4.44, 3.45, 3.45, 1.86, 1.2, 1.09, 1.02, 0.98, 0.96, 0.76, 4.55, 4.55, 1.05, 0.98, 0.97, 0.91, 5.65, 2.69, 1.11],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'TRIB', 'IR', 'ETN', 'IHG', 'AZN', 'GSK', 'ARMH', 'GWPH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'STM', 'QGEN', 'HELE', 'G', 'IMOS', 'TEL', 'PNR', 'LOGI', 'FDP', 'SIMO'],
			"weight":[4.36, 4.19, 4.15, 3.92, 3.85, 3.78, 4.16, 4.04, 3.95, 3.94, 3.94, 3.6, 4.58, 4.26, 4.01, 3.97, 3.97, 3.87, 3.83, 3.82, 3.96, 3.84, 3.69, 4.29, 4.05],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'CVT', 'SAAS', 'MKTO', 'ELLI', 'CTCT', 'DWRE', 'PGI', 'WAGE', 'LPSN', 'RP', 'FLTX', 'TXTR', 'SPSC', 'NICE', 'MSTR', 'PRO', 'LXFT', 'CVLT', 'DWCH', 'RDWR', 'IMPV', 'QLYS', 'PFPT', 'AVG'],
			"weight":[4.45, 4.19, 4.17, 4.12, 4.03, 4.01, 4.0, 4.0, 3.98, 3.95, 3.94, 3.94, 3.86, 3.75, 4.18, 3.99, 3.97, 3.91, 3.84, 3.5, 4.14, 4.11, 4.07, 3.97, 3.93],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'SHLO', 'FDML', 'AXL', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[25.51, 13.48, 12.34, 10.31, 5.0, 2.85, 5.25, 5.0, 1.24, 0.96, 0.48, 4.05, 1.56, 1.18, 1.13, 0.94, 1.89, 0.95, 0.95, 0.93, 0.88, 1.17, 1.01, 0.92],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'AIG', 'MET', 'GS', 'MS', 'BK', 'STT'],
			"weight":[13.54, 9.83, 8.88, 6.11, 17.99, 5.31, 2.96, 2.47, 1.73, 1.38, 1.24, 0.86, 0.85, 6.87, 3.81, 6.12, 4.45, 3.19, 2.43],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.73, 14.09, 5.66, 5.42, 3.76, 1.04, 4.47, 4.46, 3.58, 2.32, 2.01, 1.08, 0.71, 15.84, 3.4, 2.21, 0.92, 1.38, 1.06, 1.04, 1.03, 0.94, 0.89, 1.61, 1.33],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.79, 17.04, 14.08, 9.97, 7.36, 0.95, 10.37, 6.06, 2.53, 1.02, 1.01, 0.89, 2.59, 1.52, 0.84, 2.95, 1.05],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['BSV', 'TLT', 'TLH', 'SCHR', 'IEF'],
			"weight":[25.09, 12.53, 12.49, 24.96, 24.92],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'OGS', 'CPK', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.43, 17.89, 2.73, 0.98, 0.94, 9.05, 7.0, 5.78, 3.08, 2.54, 2.53, 2.01, 1.98, 1.56, 1.03, 1.01, 0.98, 6.49, 1.0, 1.0, 4.36, 4.32, 1.22, 1.07, 1.03],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.79, 15.77, 6.52, 4.29, 4.08, 2.56, 2.32, 2.27, 1.91, 1.02, 1.02, 0.93, 0.61, 13.38, 1.44, 1.41, 1.1, 1.05, 1.01, 0.68, 0.58, 4.94, 3.46, 0.95, 0.93],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'RJF', 'PJC', 'GHL', 'COWN', 'EVR', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.16, 11.39, 9.4, 7.85, 6.95, 4.77, 4.34, 3.93, 3.88, 3.18, 1.83, 1.57, 1.0, 3.03, 1.44, 1.04, 1.0, 1.0, 0.97, 0.97, 0.96, 0.94, 2.74, 1.7, 0.97],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'MWA', 'WMS', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'PICO', 'CWCO'],
			"weight":[12.0, 4.25, 4.24, 3.83, 2.45, 1.4, 1.13, 1.12, 1.01, 0.99, 12.02, 8.39, 7.65, 2.19, 9.45, 7.81, 5.45, 2.48, 1.0, 0.99, 6.2, 1.0, 0.96, 1.0, 0.98],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GRMN', 'GOOGL', 'AAPL', 'ARMH', 'TXN', 'MXIM', 'MCHP', 'SLAB', 'STM', 'SMTC', 'INVN', 'ADI', 'SYNA', 'CY', 'HIMX', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[13.7, 12.14, 12.01, 11.68, 3.44, 3.06, 3.05, 3.05, 2.37, 1.93, 1.57, 3.6, 3.49, 3.02, 2.22, 2.16, 1.22, 3.69, 3.49, 2.9, 1.4, 1.33, 0.92, 1.46, 1.13],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.07, 15.46, 9.67, 8.02, 4.94, 2.32, 2.03, 1.64, 1.18, 1.1, 1.01, 0.96, 12.9, 6.48, 0.99, 1.36, 0.98, 0.96, 0.93, 0.89, 0.88, 0.67, 2.09, 0.81, 0.67],
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
