function getMotifs(motif){
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'FANG', 'CWEI', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.33, 7.7, 6.03, 5.05, 3.93, 1.22, 0.98, 0.75, 15.47, 6.76, 4.99, 1.55, 1.07, 1.04, 0.97, 0.96, 0.91, 0.89, 4.67, 3.06, 4.05, 1.86, 0.94, 0.88, 0.93],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'RES', 'CAM', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[17.18, 8.33, 5.85, 5.47, 5.09, 4.75, 4.62, 2.65, 1.13, 0.78, 0.66, 0.62, 10.52, 6.77, 2.03, 0.95, 0.88, 7.94, 2.82, 2.59, 1.0, 0.92, 3.51, 1.99, 0.95],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'PPC', 'BIG', 'LUV', 'PAC', 'PBA', 'GLNG', 'AA', 'SLCA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'AKRX', 'Z'],
			"weight":[7.82, 5.23, 4.4, 2.75, 1.62, 5.53, 3.73, 3.17, 2.97, 2.94, 7.28, 4.86, 2.82, 2.21, 6.24, 5.33, 2.16, 5.9, 3.47, 3.55, 3.27, 4.05, 2.14, 3.48, 3.06],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.64, 20.75, 20.56, 13.51, 10.0, 6.3, 3.04, 1.2],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[18.46, 12.02, 10.2, 8.14, 6.42, 4.69, 4.34, 4.2, 4.17, 3.64, 3.12, 2.74, 2.36, 2.27, 1.6, 1.33, 1.26, 1.22, 1.03, 0.99, 1.48, 1.34, 0.51, 1.5, 0.97],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'DWCH', 'VRNS', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[23.81, 14.67, 14.23, 11.01, 9.24, 2.54, 2.4, 1.52, 1.5, 1.4, 1.35, 5.98, 1.7, 4.78, 2.74, 1.12],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'FXP', 'EPV', 'EWV'],
			"weight":[38.68, 20.52, 18.36, 15.4, 7.05],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[21.12, 18.66, 17.72, 22.91, 19.6],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[23.63, 15.83, 35.96, 24.58],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'MHR', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'FST', 'CRK', 'XCO', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.91, 12.99, 9.5, 4.53, 4.11, 3.45, 2.4, 1.07, 0.98, 0.93, 0.92, 0.88, 14.15, 0.49, 14.52, 4.18, 0.96, 1.02, 0.85, 0.84, 0.77, 0.69, 1.02, 0.93, 0.91],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.98, 6.13, 5.51, 4.91, 3.12, 1.34, 0.94, 15.05, 4.98, 2.22, 1.7, 1.15, 1.0, 6.33, 4.92, 3.65, 1.45, 6.37, 2.6, 0.97, 2.3, 1.49, 1.72, 1.27, 0.92],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'IMGN', 'CRIS', 'SGEN', 'GILD', 'CBST', 'EBS', 'ALXN', 'REGN', 'VRTX', 'UTHR', 'ACOR', 'MDCO', 'LGND', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.02, 11.44, 0.91, 0.83, 0.83, 19.64, 2.38, 0.89, 4.62, 4.23, 4.16, 2.13, 1.07, 0.91, 0.89, 9.12, 3.6, 2.4, 0.75, 4.25, 2.64, 2.42, 1.11, 0.92, 0.84],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'JIVE', 'IACI'],
			"weight":[24.75, 21.32, 12.84, 7.21, 1.68, 1.39, 1.33, 0.91, 14.7, 2.61, 7.21, 1.43, 1.31, 1.31],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.55, 19.03, 14.25, 2.96, 1.41, 18.48, 15.15, 5.27, 3.9],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'NEU', 'WLK', 'MEOH', 'EMN', 'POL', 'HUN', 'GRA', 'CE', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'ALJ', 'CVI', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[13.1, 12.82, 8.47, 3.12, 2.89, 1.03, 1.03, 1.01, 1.01, 1.01, 0.99, 0.95, 9.02, 6.47, 6.17, 3.16, 2.22, 1.33, 0.98, 0.95, 0.93, 0.93, 16.21, 3.34, 0.87],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'DHX', 'TRUE', 'MWW', 'EVDY', 'Z', 'ZPIN', 'WBMD', 'RUBI', 'MKTO', 'FUEL', 'CRTO', 'MM', 'SCOR', 'CTCT', 'YOKU', 'YUME', 'TUBE'],
			"weight":[25.64, 21.99, 4.49, 12.23, 5.7, 2.69, 6.68, 2.42, 1.01, 1.01, 1.0, 0.96, 0.95, 0.93, 0.8, 1.21, 1.14, 1.12, 1.0, 1.0, 0.99, 0.99, 2.17, 0.94, 0.94],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'RDY', 'HSP', 'TARO', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.3, 20.56, 18.45, 9.84, 9.55, 9.35, 4.17, 2.64, 2.42, 1.73],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.83, 6.22, 6.07, 4.61, 3.75, 1.34, 1.01, 13.39, 4.81, 4.78, 3.56, 1.94, 7.28, 6.35, 1.69, 1.06, 5.3, 4.77, 2.46, 1.01, 4.24, 2.96, 1.0, 1.43, 1.15],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'SOHU', 'MOBI', 'XNET', 'YY', 'CMCM'],
			"weight":[23.62, 20.38, 10.66, 7.04, 4.38, 1.11, 17.65, 3.17, 2.16, 1.91, 1.43, 1.01, 1.01, 0.95, 0.94, 0.92, 0.92, 0.73],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'TCP', 'OKS', 'WES', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'ENLK', 'EPB', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.17, 6.86, 6.1, 5.88, 5.32, 4.86, 4.57, 4.46, 4.38, 3.57, 3.3, 3.17, 3.16, 3.05, 3.0, 2.74, 2.68, 2.55, 2.34, 2.1, 4.59, 4.41, 3.98, 3.74, 2.02],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'MDVN', 'SGEN', 'PCYC', 'INSY', 'NVS', 'KITE', 'INFI', 'EPZM', 'IMGN', 'SNSS', 'TSRO', 'PGNX', 'DYAX', 'IMMU', 'VSTM', 'MGNX', 'NLNK', 'CLDX', 'THLD', 'CRIS', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[25.41, 6.06, 5.7, 4.44, 1.95, 24.79, 3.04, 2.85, 1.81, 1.76, 1.58, 1.57, 1.42, 1.29, 1.23, 1.13, 1.08, 0.93, 0.91, 0.9, 0.89, 3.48, 2.62, 2.23, 0.92],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.95, 17.32, 14.38, 10.38, 7.53, 0.88, 9.38, 5.76, 2.41, 1.08, 1.07, 0.97, 2.57, 1.68, 0.84, 2.76, 1.05],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.78, 15.71, 11.56, 14.83, 14.52, 6.99, 3.78, 0.96, 4.85, 1.03],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'NKE', 'RL', 'VFC', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.54, 5.3, 5.11, 5.02, 4.46, 3.34, 2.32, 2.26, 1.72, 5.96, 5.64, 4.28, 3.76, 3.48, 2.27, 1.45, 11.91, 5.98, 5.25, 1.17, 4.75, 1.82, 1.41, 2.78, 2.01],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['DUK', 'ED', 'EDE', 'CMS', 'AWK', 'LG', 'SO', 'DTE', 'XEL', 'D', 'PPL', 'NWN', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'MCD', 'K', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.16, 4.1, 4.09, 4.06, 4.02, 4.02, 4.02, 4.01, 3.96, 3.95, 3.92, 3.82, 3.8, 4.5, 4.31, 4.11, 4.08, 3.98, 3.84, 3.74, 3.66, 3.6, 4.36, 4.12, 3.77],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'SIMO', 'NVDA', 'ATML', 'STM', 'CRUS', 'INVN', 'FCS', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.22, 9.41, 8.1, 4.46, 1.5, 1.09, 1.0, 0.97, 0.93, 0.93, 0.93, 0.92, 0.9, 0.89, 0.89, 24.88, 1.03, 0.93, 15.68, 9.39, 0.93],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[18.07, 8.68, 5.72, 5.21, 4.38, 2.86, 1.97, 14.7, 8.87, 5.4, 3.55, 1.52, 1.29, 1.06, 7.04, 3.35, 0.57, 0.26, 4.41, 1.1],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'SPNC', 'EXAS', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AMED', 'AFAM'],
			"weight":[23.32, 14.52, 9.52, 5.84, 3.19, 2.81, 2.53, 1.43, 1.37, 1.36, 1.1, 0.9, 0.79, 6.8, 5.47, 2.75, 1.11, 0.97, 0.95, 0.93, 0.83, 7.23, 2.3, 1.0, 0.99],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'CLX', 'OMC', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'D', 'OKE', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[10.12, 6.89, 6.32, 5.73, 5.54, 4.94, 4.83, 2.48, 1.05, 4.31, 4.25, 3.96, 3.8, 3.29, 2.44, 2.27, 1.02, 1.0, 4.39, 3.14, 2.47, 6.09, 5.31, 3.36, 1.01],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.03, 13.47, 12.32, 4.29, 3.42, 1.64, 1.25, 0.8, 11.88, 6.79, 4.57, 0.84, 21.69],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'SONC', 'DPZ', 'WEN', 'TAST', 'DNKN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'TR', 'LNCE', 'KRFT', 'FRSH', 'DMND', 'UL'],
			"weight":[21.22, 20.02, 3.19, 2.14, 17.36, 4.33, 1.6, 1.19, 1.1, 1.07, 1.04, 1.02, 0.99, 0.97, 0.95, 0.92, 0.76, 10.78, 3.81, 0.97, 0.97, 0.95, 0.9, 0.86, 0.9],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BURL', 'BIG', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'TFM', 'CHS', 'MOV', 'BID'],
			"weight":[25.38, 8.19, 6.3, 6.13, 2.57, 1.24, 1.1, 1.07, 1.0, 0.98, 0.97, 0.86, 12.12, 7.62, 5.64, 4.86, 3.73, 1.98, 1.59, 1.53, 1.26, 1.03, 0.99, 0.94, 0.92],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'TXN', 'MXIM', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.65, 5.11, 5.02, 3.63, 3.33, 2.94, 5.45, 4.23, 4.2, 3.86, 2.85, 2.83, 5.47, 5.02, 3.02, 2.98, 2.06, 6.83, 3.95, 5.18, 1.48, 0.94, 5.43, 5.28, 3.26],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'LL', 'BLDR', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'KIRK', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[33.01, 28.02, 2.98, 2.98, 7.1, 5.27, 3.71, 1.65, 1.56, 1.28, 1.14, 4.55, 3.09, 0.61, 3.07],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'T', 'VZ', 'MRK', 'PFE', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[11.93, 10.02, 10.02, 9.94, 10.14, 9.81, 10.35, 9.31, 9.3, 9.18],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'DSW', 'TUES', 'CATO', 'CTRN', 'DLTR', 'DG', 'FIVE', 'FRED', 'BIG', 'SVU', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[16.84, 11.39, 1.09, 0.85, 21.34, 0.97, 14.56, 3.36, 1.04, 1.02, 1.01, 0.96, 6.54, 5.74, 0.98, 0.96, 0.96, 0.94, 3.84, 1.63, 1.34, 0.92, 0.91, 0.82],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'TOUR', 'DANG', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[20.57, 5.06, 4.06, 3.48, 3.22, 2.92, 1.86, 1.28, 0.94, 0.9, 10.97, 7.51, 4.34, 3.5, 1.8, 0.92, 0.91, 10.91, 1.44, 1.01, 5.44, 2.14, 1.77, 1.62, 1.41],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[20.24, 19.69, 14.19, 13.11, 5.01, 15.61, 7.42, 4.74],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'HSOL', 'TSL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.08, 7.07, 6.6, 6.14, 1.92, 1.8, 1.41, 1.33, 0.97, 0.91, 5.82, 5.67, 4.58, 2.22, 0.94, 16.05, 11.06, 0.85, 2.24, 1.83, 1.48, 1.02, 5.97, 3.86, 1.15],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'NILE', 'LITB', 'SFLY', 'EHTH', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'CRCM', 'LQDT', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[20.14, 5.2, 1.09, 1.08, 1.05, 1.02, 0.98, 0.83, 23.95, 2.65, 2.34, 0.95, 0.89, 15.97, 6.11, 2.3, 0.95, 0.87, 3.14, 1.44, 1.19, 0.96, 0.95, 0.85, 3.1],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.79, 17.0, 12.88, 11.22, 27.01, 5.65, 1.29, 1.16],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.29, 5.59, 4.1, 4.04, 3.6, 3.04, 2.81, 1.26, 1.05, 0.72, 13.52, 10.44, 5.34, 6.0, 3.48, 0.8, 0.78, 0.75, 0.0, 11.74, 10.6, 4.07],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'ETR', 'AEP', 'SCG', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.86, 5.82, 4.91, 4.27, 4.19, 4.16, 3.33, 3.19, 2.86, 2.63, 2.46, 0.97, 5.15, 5.0, 4.92, 4.68, 4.32, 4.09, 3.6, 2.86, 4.62, 3.58, 4.53, 3.39, 2.61],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'AGN', 'PFE', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'MO', 'PEP', 'COST', 'SYY', 'CL', 'K', 'BF.B', 'GIS'],
			"weight":[6.94, 6.38, 4.85, 4.85, 4.43, 4.12, 3.76, 3.48, 3.08, 2.85, 2.76, 2.23, 1.43, 6.88, 6.86, 5.34, 5.22, 4.65, 4.64, 4.12, 3.05, 2.52, 2.47, 1.6, 1.47],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.97, 5.3, 3.89, 3.83, 3.41, 2.88, 2.66, 1.2, 1.0, 0.68, 12.83, 9.9, 5.07, 7.17, 4.16, 0.95, 0.93, 0.9, 0.0, 13.37, 10.05, 3.85],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'VTIP', 'IGF', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[15.81, 14.19, 12.25, 6.6, 6.37, 6.02, 5.13, 5.02, 11.86, 8.28, 2.94, 2.76, 2.75],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['SPY', 'VO', 'VBR', 'BSV', 'VTIP', 'VWO', 'VEU', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.77, 8.72, 8.47, 8.55, 8.49, 8.45, 7.99, 7.98, 7.54, 8.58, 8.32, 8.14],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.67, 18.04, 2.53, 0.94, 0.85, 9.02, 6.99, 5.83, 3.09, 2.52, 2.49, 2.03, 1.98, 1.55, 1.03, 0.99, 0.98, 6.63, 0.98, 0.96, 4.37, 4.33, 1.14, 1.06, 1.02],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'CSCO', 'GOOGL', 'QCOM', 'AAPL', 'ORCL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'CTSH', 'ADI', 'GLW', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'BA', 'ADP'],
			"weight":[18.39, 9.94, 9.84, 7.28, 5.61, 5.4, 3.42, 2.33, 2.15, 2.06, 2.04, 1.3, 1.25, 1.12, 0.91, 0.87, 0.87, 0.85, 6.85, 5.66, 6.35, 1.02, 2.66, 0.93, 0.9],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.61, 4.99, 3.66, 3.6, 3.21, 2.71, 2.51, 1.12, 0.94, 0.64, 12.07, 9.32, 4.77, 8.49, 4.92, 1.12, 1.1, 1.06, 15.08, 9.46, 3.63],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.17, 4.85, 4.3, 3.13, 2.87, 2.64, 2.28, 1.63, 0.97, 8.43, 5.29, 3.79, 3.04, 2.11, 5.86, 5.26, 4.4, 3.61, 6.62, 3.96, 3.48, 2.59, 7.18, 1.36, 5.16],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VTI', 'VWO', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.6, 19.96, 18.5, 20.71, 20.23],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.23, 4.64, 3.41, 3.36, 2.99, 2.53, 2.32, 1.05, 0.88, 0.6, 11.23, 8.67, 4.45, 9.97, 5.77, 1.32, 1.28, 1.25, 16.89, 8.81, 3.38],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'LDOS', 'MSA', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.53, 5.35, 4.66, 4.28, 3.53, 2.82, 1.87, 1.47, 1.45, 1.01, 0.93, 13.77, 11.38, 4.16, 1.11, 1.01, 1.01, 17.59, 2.86, 9.92, 2.28, 2.0],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'CF', 'FLEX'],
			"weight":[8.74, 8.44, 5.71, 4.83, 4.79, 3.64, 3.19, 2.57, 2.16, 1.98, 1.84, 1.24, 1.11, 0.95, 6.78, 6.25, 5.41, 7.53, 4.11, 4.16, 2.39, 1.83, 8.25, 1.12, 0.99],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['NKE', 'KO', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'PEP', 'MDLZ', 'MNST', 'MCD', 'LB', 'PG', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[9.88, 9.23, 7.48, 6.54, 4.42, 4.17, 3.9, 3.71, 3.62, 3.58, 3.14, 3.13, 3.12, 2.84, 2.62, 10.86, 6.41, 4.15, 3.86, 3.34],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'CSCO', 'INTC', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.38, 5.71, 4.01, 3.98, 3.86, 3.39, 3.23, 3.02, 2.73, 2.33, 6.5, 6.07, 5.33, 3.71, 3.63, 3.14, 2.13, 5.39, 4.68, 4.3, 3.62, 3.33, 2.7, 3.94, 2.92],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.49, 10.04, 8.12, 5.08, 3.7, 2.25, 1.25, 1.14, 0.94, 0.9, 7.49, 5.03, 3.54, 2.36, 1.14, 1.06, 1.0, 0.97, 0.97, 0.92, 17.81, 5.87, 3.47, 2.87, 1.57],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'VSAT', 'XLS', 'MRCY', 'FLIR', 'KTOS', 'VEC', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[25.13, 11.87, 9.42, 2.2, 0.92, 0.92, 10.84, 3.6, 3.32, 2.01, 1.94, 1.44, 1.2, 1.19, 1.02, 0.98, 0.93, 0.87, 0.74, 0.07, 13.64, 2.04, 1.04, 0.87, 0.95, 0.85],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['TJX', 'CVS', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'QCOM', 'JKHY', 'ORCL', 'SIAL', 'PX', 'OMC', 'CTAS', 'FDS', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.36, 4.29, 4.01, 3.57, 2.05, 3.8, 3.66, 3.19, 2.44, 1.14, 6.6, 3.98, 3.43, 5.27, 4.88, 3.32, 6.9, 6.4, 4.44, 4.2, 3.76, 4.09, 3.29, 4.14, 2.82],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.79, 4.26, 3.12, 3.08, 2.74, 2.31, 2.13, 0.96, 0.8, 0.55, 11.66, 6.76, 1.54, 1.5, 1.46, 10.3, 7.95, 4.08, 18.83, 8.08, 3.1],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.86, 6.83, 6.65, 4.9, 3.65, 3.55, 3.46, 1.93, 30.48, 12.95, 3.0, 1.75],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'HPY', 'JKHY', 'EVTC', 'EEFT', 'ONE', 'FLT', 'EBAY', 'HAWK', 'GDOT', 'WEX', 'QIWI', 'UEPS', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[19.71, 19.33, 13.7, 4.56, 4.15, 3.64, 2.75, 2.65, 1.05, 1.03, 0.99, 0.98, 0.95, 0.66, 7.16, 6.86, 1.19, 1.17, 0.99, 0.98, 0.9, 1.71, 1.01, 0.98, 0.93],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[31.01, 19.7, 13.92, 5.01, 15.27, 15.09],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'HTHT', 'MR', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'VIV', 'UGP', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[16.06, 9.42, 6.37, 5.35, 4.88, 4.8, 3.16, 2.82, 2.46, 2.06, 1.31, 1.1, 1.07, 0.98, 0.87, 4.44, 3.54, 2.13, 2.04, 1.48, 10.02, 1.12, 3.73, 3.3, 5.48],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.38, 7.89, 1.79, 1.76, 1.71, 4.31, 3.83, 2.81, 2.76, 2.46, 2.09, 1.92, 0.87, 0.72, 0.5, 21.03, 9.27, 7.16, 3.67, 7.27, 2.79],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'IBM', 'ADP', 'NKE', 'COST', 'KO', 'PG', 'JNJ', 'CL', 'LLY', 'BMY', 'MRK', 'MDT', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.86, 5.43, 5.14, 5.03, 4.86, 4.51, 5.63, 5.19, 5.01, 4.98, 4.86, 4.59, 5.27, 5.08, 4.91, 4.88, 4.68, 4.68, 4.56, 4.85],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.19, 12.26, 9.73, 7.29, 5.27, 5.05, 3.51, 3.2, 2.35, 1.39, 0.71, 0.55, 18.11, 6.68, 1.05, 6.58, 1.08, 1.01],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'FUEL', 'TUBE', 'MM', 'XNET', 'YHOO', 'FENG', 'AKAM'],
			"weight":[25.6, 15.27, 13.35, 4.86, 4.34, 2.27, 1.44, 1.12, 0.99, 3.32, 2.11, 1.79, 1.77, 1.43, 1.41, 7.94, 1.54, 9.46],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'BND', 'VB', 'VXUS'],
			"weight":[25.82, 25.33, 25.2, 23.65],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['XNPT', 'LMNX', 'ALXN', 'CRL', 'CERN', 'RENT', 'HSNI', 'CBRL', 'ROX', 'N', 'BRCD', 'CALD', 'PDCO', 'COBZ'],
			"weight":[7.25, 7.14, 7.13, 7.13, 7.13, 7.14, 7.14, 7.13, 7.13, 7.13, 7.13, 7.13, 7.14, 7.14],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'CVGW', 'BDBD', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.55, 10.01, 9.92, 9.13, 2.76, 2.52, 2.14, 1.8, 1.63, 1.03, 0.94, 16.04, 7.97, 3.2, 1.1, 0.87, 8.29, 5.33, 1.91, 0.87],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.53, 9.24, 2.09, 2.07, 2.01, 23.48, 3.75, 3.33, 2.44, 2.4, 2.14, 1.81, 1.67, 0.76, 0.63, 0.43, 8.06, 6.22, 3.19, 6.32, 2.42],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.51, 33.87, 31.62],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.24, 18.98, 13.41, 11.54, 13.57, 4.93, 1.22, 1.0, 11.52, 2.81, 0.91, 0.88],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'ULTA', 'COTY', 'IFF', 'LB', 'AVP', 'SBH', 'NUS', 'REV', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'USNA', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.99, 15.75, 6.3, 4.05, 3.92, 2.45, 2.33, 2.05, 1.96, 1.04, 1.01, 0.92, 0.64, 14.63, 1.3, 1.29, 1.2, 1.07, 0.99, 0.52, 0.46, 4.77, 3.5, 0.97, 0.9],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'SPNC', 'ELGX', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.36, 3.53, 2.75, 1.81, 21.99, 0.95, 14.12, 1.22, 1.11, 4.46, 3.43, 1.56, 1.05, 0.96, 9.47, 0.97, 3.39, 1.1, 1.0, 0.94, 0.84, 3.95, 1.08, 1.02, 0.96],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['DORM', 'WSM', 'KRFT', 'DHI', 'CL', 'YUM', 'SPLS', 'TPX', 'SWFT', 'DHR', 'PNR', 'ALB', 'FUL', 'SCS', 'EMN', 'CTSH', 'LLL', 'NTGR', 'RVBD', 'FEIC', 'MXIM', 'XLNX', 'MASI', 'MDAS', 'RNR'],
			"weight":[4.37, 4.04, 4.03, 4.03, 4.02, 3.98, 3.97, 3.88, 4.04, 3.99, 3.97, 3.96, 3.94, 3.93, 3.86, 4.03, 4.03, 3.96, 3.95, 3.94, 3.92, 3.86, 4.3, 3.94, 4.06],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'STRZA', 'IMAX', 'TV', 'AMCX', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.53, 17.96, 17.67, 11.72, 10.88, 1.83, 5.88, 2.39, 1.09, 0.99, 0.97, 0.92, 3.68, 1.47, 0.93, 1.04, 1.02, 1.0],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[29.21, 27.36, 16.02, 15.87, 7.15, 4.4],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[28.61, 27.44, 15.82, 15.68, 7.96, 4.5],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.42, 28.46, 17.8, 15.85, 4.37, 4.12],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.18, 29.72, 19.42, 12.63, 4.79, 3.25],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.36, 25.78, 22.99, 11.95, 3.78, 3.15],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.47, 25.75, 18.65, 12.75, 7.08, 3.3],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[37.04, 36.35, 16.97, 9.64],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'ABV', 'DECK', 'ROST', 'CBD', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[9.17, 5.32, 4.75, 4.38, 4.25, 3.81, 3.69, 2.96, 1.88, 8.24, 6.86, 4.77, 3.65, 7.01, 5.88, 4.0, 1.09, 8.78, 4.77, 4.73],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'JAKK', 'LF', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'FL', 'BWS', 'CROX'],
			"weight":[16.74, 12.31, 15.85, 5.77, 3.2, 1.4, 1.2, 0.94, 7.87, 5.31, 1.08, 0.98, 12.76, 1.07, 4.27, 1.59, 1.04, 0.95, 1.98, 0.92, 1.0, 0.94, 0.84],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'ESLT', 'COL', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.04, 9.5, 2.88, 2.12, 1.61, 1.35, 1.1, 0.9, 18.75, 1.87, 0.98, 0.94, 0.93, 6.88, 5.0, 4.54, 2.47, 1.19, 1.0, 0.97, 0.91, 7.4, 4.47, 1.06, 9.15],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CP', 'CSX', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'HTLD', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.15, 13.58, 5.75, 5.72, 3.87, 1.07, 4.36, 4.33, 3.43, 2.3, 1.94, 1.09, 0.64, 16.04, 3.42, 2.25, 0.81, 1.35, 1.09, 1.04, 1.03, 0.98, 0.89, 1.58, 1.31],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'TXRH', 'CORE', 'MWIV', 'MNRO', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.5, 5.19, 5.19, 5.13, 5.13, 4.99, 4.59, 3.28, 2.56, 1.43, 0.92, 6.51, 4.89, 4.55, 3.81, 3.28, 1.77, 5.21, 4.48, 3.21, 2.55, 3.42, 3.29, 4.24, 2.88],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[22.44, 20.44, 18.83, 17.81, 20.48],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'HIBB', 'FINL', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[23.23, 15.48, 9.41, 7.84, 4.79, 2.2, 1.63, 1.61, 1.13, 1.05, 0.98, 0.91, 12.61, 6.33, 0.95, 1.35, 0.94, 0.91, 0.88, 0.82, 0.78, 0.66, 2.02, 0.76, 0.72],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'BND', 'VB', 'VXUS'],
			"weight":[25.82, 25.33, 25.2, 23.65],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[17.98, 6.13, 5.51, 4.91, 3.12, 1.34, 0.94, 15.05, 4.98, 2.22, 1.7, 1.15, 1.0, 6.33, 4.92, 3.65, 1.45, 6.37, 2.6, 0.97, 2.3, 1.49, 1.72, 1.27, 0.92],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'LDOS', 'MSA', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.53, 5.35, 4.66, 4.28, 3.53, 2.82, 1.87, 1.47, 1.45, 1.01, 0.93, 13.77, 11.38, 4.16, 1.11, 1.01, 1.01, 17.59, 2.86, 9.92, 2.28, 2.0],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'HCA', 'LPNT', 'THC', 'SEM', 'CYH', 'HLS', 'KND', 'SCAI', 'CERN', 'QSII', 'ATHN', 'CPSI', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.58, 5.78, 5.66, 2.98, 2.96, 1.2, 1.0, 0.99, 0.98, 16.21, 2.27, 2.25, 2.16, 0.92, 19.48, 1.42, 6.31, 3.03, 2.62, 1.43, 6.04, 3.89, 0.94, 0.96, 0.95],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.83, 6.22, 6.07, 4.61, 3.75, 1.34, 1.01, 13.39, 4.81, 4.78, 3.56, 1.94, 7.28, 6.35, 1.69, 1.06, 5.3, 4.77, 2.46, 1.01, 4.24, 2.96, 1.0, 1.43, 1.15],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'SOHU', 'MOBI', 'XNET', 'YY', 'CMCM'],
			"weight":[23.62, 20.38, 10.66, 7.04, 4.38, 1.11, 17.65, 3.17, 2.16, 1.91, 1.43, 1.01, 1.01, 0.95, 0.94, 0.92, 0.92, 0.73],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'FUEL', 'TUBE', 'MM', 'XNET', 'YHOO', 'FENG', 'AKAM'],
			"weight":[25.6, 15.27, 13.35, 4.86, 4.34, 2.27, 1.44, 1.12, 0.99, 3.32, 2.11, 1.79, 1.77, 1.43, 1.41, 7.94, 1.54, 9.46],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.49, 10.04, 8.12, 5.08, 3.7, 2.25, 1.25, 1.14, 0.94, 0.9, 7.49, 5.03, 3.54, 2.36, 1.14, 1.06, 1.0, 0.97, 0.97, 0.92, 17.81, 5.87, 3.47, 2.87, 1.57],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'DHX', 'TRUE', 'MWW', 'EVDY', 'Z', 'ZPIN', 'WBMD', 'RUBI', 'MKTO', 'FUEL', 'CRTO', 'MM', 'SCOR', 'CTCT', 'YOKU', 'YUME', 'TUBE'],
			"weight":[25.64, 21.99, 4.49, 12.23, 5.7, 2.69, 6.68, 2.42, 1.01, 1.01, 1.0, 0.96, 0.95, 0.93, 0.8, 1.21, 1.14, 1.12, 1.0, 1.0, 0.99, 0.99, 2.17, 0.94, 0.94],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['TLT', 'PZA', 'VCLT', 'SHV', 'VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA', 'IAU'],
			"weight":[8.75, 8.68, 8.48, 25.45, 7.69, 3.2, 2.7, 1.45, 1.14, 1.05, 0.94, 0.91, 0.82, 0.78, 0.73, 0.64, 0.55, 0.55, 0.46, 0.37, 0.31, 0.16, 24.2],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.19, 12.26, 9.73, 7.29, 5.27, 5.05, 3.51, 3.2, 2.35, 1.39, 0.71, 0.55, 18.11, 6.68, 1.05, 6.58, 1.08, 1.01],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[18.07, 8.68, 5.72, 5.21, 4.38, 2.86, 1.97, 14.7, 8.87, 5.4, 3.55, 1.52, 1.29, 1.06, 7.04, 3.35, 0.57, 0.26, 4.41, 1.1],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'FSC', 'AINV', 'TCRD', 'GAIN', 'TICC', 'FDUS', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.15, 9.69, 6.33, 4.9, 4.43, 3.79, 3.32, 2.55, 2.21, 1.92, 1.69, 1.09, 1.06, 1.05, 1.05, 1.01, 0.97, 0.96, 18.43, 7.03, 6.36, 4.33, 3.02, 1.63, 1.04],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'AXS', 'IPCC', 'RLI', 'PRA', 'ACGL', 'RE', 'MRH', 'TPRE', 'VR', 'GLRE', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.64, 10.92, 8.95, 7.32, 6.28, 6.16, 4.64, 3.21, 2.99, 2.53, 1.08, 1.02, 0.99, 0.98, 0.98, 0.96, 5.87, 3.49, 1.82, 1.06, 1.0, 0.96, 7.31, 5.85, 1.01],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[35.91, 15.58, 6.89, 2.76, 9.08, 7.65, 4.95, 1.1, 6.6, 3.93, 3.02, 1.46, 1.05],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['SAGE', 'ADPT', 'OCUL', 'TTOO', 'CTLT', 'OTIC', 'XENT', 'RWLK', 'AAVL', 'HQY', 'FCB', 'SYF', 'GNBC', 'TRUP', 'MIK', 'LOCO', 'SERV', 'GPRO', 'WMS', 'ICD', 'OEC', 'RYI', 'TUBE', 'IMPR', 'TERP'],
			"weight":[4.89, 4.24, 4.13, 4.1, 4.07, 4.02, 4.02, 3.8, 3.77, 4.22, 4.12, 4.09, 3.95, 3.82, 4.13, 4.11, 3.9, 3.9, 3.99, 3.97, 3.91, 3.9, 3.63, 3.58, 3.75],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.78, 15.71, 11.56, 14.83, 14.52, 6.99, 3.78, 0.96, 4.85, 1.03],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.86, 6.83, 6.65, 4.9, 3.65, 3.55, 3.46, 1.93, 30.48, 12.95, 3.0, 1.75],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'SPNC', 'EXAS', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AMED', 'AFAM'],
			"weight":[23.32, 14.52, 9.52, 5.84, 3.19, 2.81, 2.53, 1.43, 1.37, 1.36, 1.1, 0.9, 0.79, 6.8, 5.47, 2.75, 1.11, 0.97, 0.95, 0.93, 0.83, 7.23, 2.3, 1.0, 0.99],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'UNP', 'LMT', 'CSX', 'NOC', 'GD', 'RTN', 'HON', 'UPS', 'GE', 'BA', 'UTX', 'GS', 'BAC', 'MS', 'BRK.B', 'JPM', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.36, 4.24, 4.21, 4.19, 4.08, 4.04, 3.92, 3.8, 3.67, 3.66, 3.61, 3.47, 4.54, 4.41, 4.39, 4.2, 4.19, 3.96, 3.65, 3.22, 4.5, 4.29, 3.89, 3.85, 3.66],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.79, 17.0, 12.88, 11.22, 27.01, 5.65, 1.29, 1.16],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[16.14, 9.61, 2.16, 2.16, 2.09, 23.37, 3.09, 2.74, 2.01, 1.98, 1.77, 1.49, 1.38, 0.62, 0.51, 0.35, 6.63, 5.12, 2.62, 6.6, 5.48, 2.1],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.53, 9.24, 2.09, 2.07, 2.01, 23.48, 3.75, 3.33, 2.44, 2.4, 2.14, 1.81, 1.67, 0.76, 0.63, 0.43, 8.06, 6.22, 3.19, 6.32, 2.42],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.38, 7.89, 1.79, 1.76, 1.71, 4.31, 3.83, 2.81, 2.76, 2.46, 2.09, 1.92, 0.87, 0.72, 0.5, 21.03, 9.27, 7.16, 3.67, 7.27, 2.79],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.79, 4.26, 3.12, 3.08, 2.74, 2.31, 2.13, 0.96, 0.8, 0.55, 11.66, 6.76, 1.54, 1.5, 1.46, 10.3, 7.95, 4.08, 18.83, 8.08, 3.1],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.23, 4.64, 3.41, 3.36, 2.99, 2.53, 2.32, 1.05, 0.88, 0.6, 11.23, 8.67, 4.45, 9.97, 5.77, 1.32, 1.28, 1.25, 16.89, 8.81, 3.38],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.61, 4.99, 3.66, 3.6, 3.21, 2.71, 2.51, 1.12, 0.94, 0.64, 12.07, 9.32, 4.77, 8.49, 4.92, 1.12, 1.1, 1.06, 15.08, 9.46, 3.63],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.97, 5.3, 3.89, 3.83, 3.41, 2.88, 2.66, 1.2, 1.0, 0.68, 12.83, 9.9, 5.07, 7.17, 4.16, 0.95, 0.93, 0.9, 0.0, 13.37, 10.05, 3.85],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.29, 5.59, 4.1, 4.04, 3.6, 3.04, 2.81, 1.26, 1.05, 0.72, 13.52, 10.44, 5.34, 6.0, 3.48, 0.8, 0.78, 0.75, 0.0, 11.74, 10.6, 4.07],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'LNCE', 'BDBD', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[18.96, 14.8, 9.55, 5.34, 3.0, 2.91, 2.51, 2.43, 1.99, 1.67, 1.37, 0.97, 0.95, 0.94, 7.42, 4.58, 1.78, 1.2, 1.16, 8.76, 1.04, 3.63, 1.18, 1.05, 0.84],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'GPN', 'UEPS'],
			"weight":[23.29, 18.68, 9.73, 20.15, 5.32, 0.91, 0.63, 9.46, 1.77, 0.75, 3.74, 2.05, 1.6, 0.99, 0.94],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'ESLT', 'COL', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.04, 9.5, 2.88, 2.12, 1.61, 1.35, 1.1, 0.9, 18.75, 1.87, 0.98, 0.94, 0.93, 6.88, 5.0, 4.54, 2.47, 1.19, 1.0, 0.97, 0.91, 7.4, 4.47, 1.06, 9.15],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'SPNC', 'ELGX', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.36, 3.53, 2.75, 1.81, 21.99, 0.95, 14.12, 1.22, 1.11, 4.46, 3.43, 1.56, 1.05, 0.96, 9.47, 0.97, 3.39, 1.1, 1.0, 0.94, 0.84, 3.95, 1.08, 1.02, 0.96],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'STZ', 'RAI', 'BUD', 'LO', 'BF.B', 'PM', 'MCD', 'YUM', 'BTI', 'DEO', 'DISH', 'CHTR', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.59, 4.27, 4.12, 4.04, 4.01, 3.98, 3.94, 3.86, 3.83, 3.79, 3.6, 4.59, 4.41, 4.25, 3.98, 3.68, 3.55, 3.5, 3.37, 2.97, 4.86, 4.69, 4.85, 4.0, 3.27],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'MHR', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'FST', 'CRK', 'XCO', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.91, 12.99, 9.5, 4.53, 4.11, 3.45, 2.4, 1.07, 0.98, 0.93, 0.92, 0.88, 14.15, 0.49, 14.52, 4.18, 0.96, 1.02, 0.85, 0.84, 0.77, 0.69, 1.02, 0.93, 0.91],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'FANG', 'CWEI', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.33, 7.7, 6.03, 5.05, 3.93, 1.22, 0.98, 0.75, 15.47, 6.76, 4.99, 1.55, 1.07, 1.04, 0.97, 0.96, 0.91, 0.89, 4.67, 3.06, 4.05, 1.86, 0.94, 0.88, 0.93],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'TXRH', 'CORE', 'MWIV', 'MNRO', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.5, 5.19, 5.19, 5.13, 5.13, 4.99, 4.59, 3.28, 2.56, 1.43, 0.92, 6.51, 4.89, 4.55, 3.81, 3.28, 1.77, 5.21, 4.48, 3.21, 2.55, 3.42, 3.29, 4.24, 2.88],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.78, 12.82, 12.19, 13.57, 7.8, 1.27, 6.62, 4.69, 2.27],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'IBM', 'ADP', 'NKE', 'COST', 'KO', 'PG', 'JNJ', 'CL', 'LLY', 'BMY', 'MRK', 'MDT', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.86, 5.43, 5.14, 5.03, 4.86, 4.51, 5.63, 5.19, 5.01, 4.98, 4.86, 4.59, 5.27, 5.08, 4.91, 4.88, 4.68, 4.68, 4.56, 4.85],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'JIVE', 'IACI'],
			"weight":[24.75, 21.32, 12.84, 7.21, 1.68, 1.39, 1.33, 0.91, 14.7, 2.61, 7.21, 1.43, 1.31, 1.31],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'CALD', 'SQI', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.86, 11.57, 7.98, 7.41, 6.54, 4.51, 3.48, 1.75, 1.3, 1.13, 0.9, 3.89, 3.82, 2.69, 2.19, 2.05, 1.41, 0.95, 2.81, 1.0, 1.99, 1.53, 2.25, 0.96, 1.03],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['BWC', 'NX', 'RYAM', 'XYL', 'TMST', 'WBC', 'CLW', 'DPS', 'WWAV', 'HSNI', 'SBH', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'SAIC', 'JBT', 'NAME', 'NSAM', 'RSE', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.41, 4.2, 3.99, 3.96, 3.91, 3.82, 3.81, 4.44, 4.4, 4.37, 4.3, 3.75, 4.38, 4.08, 3.81, 4.33, 4.2, 3.63, 4.04, 4.02, 3.89, 3.86, 3.79, 3.1, 3.53],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['MCD', 'ROL', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'SIAL', 'BCPC', 'FDS', 'USTR', 'FTI'],
			"weight":[5.06, 4.98, 4.34, 3.99, 2.48, 1.75, 8.57, 4.7, 3.59, 2.6, 5.57, 3.53, 3.47, 2.41, 1.65, 8.72, 3.41, 5.18, 4.59, 0.97, 8.54, 1.04, 4.88, 2.89, 1.12],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'SIMO', 'NVDA', 'ATML', 'STM', 'CRUS', 'INVN', 'FCS', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.22, 9.41, 8.1, 4.46, 1.5, 1.09, 1.0, 0.97, 0.93, 0.93, 0.93, 0.92, 0.9, 0.89, 0.89, 24.88, 1.03, 0.93, 15.68, 9.39, 0.93],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'AAL', 'LUV', 'RYAAY', 'UAL', 'LFL', 'ALK', 'CPA', 'SAVE', 'JBLU', 'RJET', 'AVH', 'VLRS', 'HA', 'GOL', 'SKYW', 'AL', 'AER', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.07, 10.9, 10.62, 9.87, 8.5, 4.58, 4.4, 3.48, 3.42, 1.92, 1.14, 1.11, 0.97, 0.92, 0.88, 0.7, 4.49, 4.45, 1.04, 0.95, 0.92, 0.84, 5.93, 2.8, 1.13],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'IR', 'ETN', 'TRIB', 'IHG', 'GSK', 'AZN', 'GWPH', 'ARMH', 'RDC', 'VPRT', 'TRNX', 'ENL', 'QGEN', 'STM', 'IMOS', 'HELE', 'G', 'PNR', 'LOGI', 'TEL', 'FDP', 'SIMO'],
			"weight":[4.69, 4.51, 4.25, 3.77, 3.74, 3.62, 4.06, 3.98, 3.96, 3.84, 3.74, 3.44, 4.75, 4.74, 4.02, 3.95, 3.82, 3.82, 3.8, 3.77, 3.86, 3.7, 3.7, 4.39, 4.06],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['DWRE', 'LOGM', 'MKTO', 'CVT', 'WAGE', 'RP', 'ELLI', 'LPSN', 'PGI', 'SPSC', 'TXTR', 'CTCT', 'SAAS', 'FLTX', 'NICE', 'LXFT', 'MSTR', 'PRO', 'CVLT', 'DWCH', 'QLYS', 'RDWR', 'PFPT', 'AVG', 'IMPV'],
			"weight":[4.58, 4.47, 4.37, 4.23, 4.2, 4.09, 4.07, 3.94, 3.86, 3.85, 3.84, 3.78, 3.78, 3.62, 4.22, 4.12, 3.95, 3.64, 3.45, 3.44, 4.65, 4.11, 4.04, 3.85, 3.84],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'DLPH', 'MGA', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'VC', 'THRM', 'ALV', 'BWA', 'AXL', 'FDML', 'SHLO', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[26.25, 14.1, 12.29, 9.58, 5.09, 2.88, 5.05, 4.9, 1.27, 0.92, 0.5, 3.91, 1.58, 1.1, 1.08, 0.93, 1.86, 0.98, 0.96, 0.93, 0.87, 1.23, 0.83, 0.92],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'GS', 'MS', 'AIG', 'MET', 'BK', 'STT'],
			"weight":[13.67, 10.16, 8.85, 6.03, 18.05, 5.26, 2.94, 2.48, 1.72, 1.34, 1.21, 0.85, 0.83, 6.27, 4.44, 6.65, 3.7, 3.13, 2.41],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CP', 'CSX', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'HTLD', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.15, 13.58, 5.75, 5.72, 3.87, 1.07, 4.36, 4.33, 3.43, 2.3, 1.94, 1.09, 0.64, 16.04, 3.42, 2.25, 0.81, 1.35, 1.09, 1.04, 1.03, 0.98, 0.89, 1.58, 1.31],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.95, 17.32, 14.38, 10.38, 7.53, 0.88, 9.38, 5.76, 2.41, 1.08, 1.07, 0.97, 2.57, 1.68, 0.84, 2.76, 1.05],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['TLT', 'TLH', 'IEF', 'SCHR', 'BSV'],
			"weight":[12.86, 12.58, 24.93, 24.82, 24.81],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.67, 18.04, 2.53, 0.94, 0.85, 9.02, 6.99, 5.83, 3.09, 2.52, 2.49, 2.03, 1.98, 1.55, 1.03, 0.99, 0.98, 6.63, 0.98, 0.96, 4.37, 4.33, 1.14, 1.06, 1.02],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'ULTA', 'COTY', 'IFF', 'LB', 'AVP', 'SBH', 'NUS', 'REV', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'USNA', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.99, 15.75, 6.3, 4.05, 3.92, 2.45, 2.33, 2.05, 1.96, 1.04, 1.01, 0.92, 0.64, 14.63, 1.3, 1.29, 1.2, 1.07, 0.99, 0.52, 0.46, 4.77, 3.5, 0.97, 0.9],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'RJF', 'GHL', 'COWN', 'PJC', 'EVR', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[24.03, 11.49, 9.42, 7.64, 6.58, 4.87, 4.15, 3.9, 3.8, 3.32, 1.73, 1.52, 1.01, 2.9, 1.4, 1.24, 0.98, 0.96, 0.95, 0.94, 0.94, 0.94, 2.67, 1.66, 0.97],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'WMS', 'MWA', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ITRI', 'ESE', 'LNN', 'VMI', 'TTC', 'PICO', 'CWCO'],
			"weight":[11.7, 4.3, 4.24, 3.88, 2.49, 1.19, 1.16, 1.13, 0.99, 0.98, 12.07, 8.6, 7.73, 2.21, 9.68, 7.25, 5.5, 2.38, 1.0, 1.0, 6.49, 1.03, 1.02, 1.0, 0.95],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GOOGL', 'GRMN', 'AAPL', 'ARMH', 'TXN', 'MXIM', 'MCHP', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[17.63, 11.83, 11.54, 11.42, 3.14, 2.93, 2.88, 2.87, 2.23, 1.78, 1.53, 3.31, 3.09, 2.82, 2.43, 1.99, 0.98, 3.62, 3.29, 2.78, 1.28, 1.21, 0.85, 1.39, 1.16],
			"name":"Wearable Tech"};
		db["ETFs"]={
			"quotes":["VTI","IVV","DIA","SPLV","IWB","VXUS","YCS","TECL","ERX","SYLD","UDOW","SOXL","CURE","XIV","MLPL","ZIV","DGZ","MMP","UPRO"],
			"weight":[6.30,6.10,6.00,6.00,5.80,5.20,5.10,4.97,4.96,4.90,4.90,4.80,4.80,4.80,4.80,4.70,4.70,6.00,5.17],
			"name":"ETFs"};
		db["CostumBear"]={
			"quotes":["DUG","FXP","BZQ","EPV","SKF","EEV","SRS","EWV","SMN","DXD","SDS","QID","MZZ","TWM"],
			"weight":[6.30,6.28,6.28,6.25,6.23,6.22,6.19,6.18,6.18,10.36,10.01,9.91,6.82,6.80],
			"name":"CostumBear"};
	}
	return db[motif];}
