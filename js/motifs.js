function getMotifs(motif){
	
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'FANG', 'CWEI', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.12, 7.76, 5.99, 5.06, 3.98, 1.29, 0.96, 0.78, 15.4, 7.02, 4.92, 1.58, 1.07, 1.06, 0.99, 0.94, 0.93, 0.9, 4.69, 3.06, 3.93, 1.81, 0.97, 0.87, 0.93],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'RES', 'CAM', 'SPN', 'WFT', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.94, 8.35, 5.85, 5.53, 5.13, 4.66, 4.63, 2.65, 1.12, 0.81, 0.66, 0.62, 10.51, 6.79, 2.05, 0.99, 0.89, 7.76, 2.85, 2.61, 1.0, 0.94, 3.67, 2.03, 0.97],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'AA', 'SLCA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'AKRX', 'Z'],
			"weight":[7.9, 5.23, 4.55, 2.69, 1.64, 5.39, 3.74, 3.16, 2.87, 2.82, 7.17, 4.89, 2.87, 2.21, 6.23, 5.7, 2.12, 5.89, 3.46, 3.53, 3.2, 3.99, 2.2, 3.42, 3.13],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.39, 21.05, 20.15, 13.86, 9.93, 6.31, 3.12, 1.2],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[18.28, 11.92, 10.27, 7.99, 6.51, 4.67, 4.36, 4.23, 4.18, 3.71, 3.18, 2.76, 2.38, 2.28, 1.52, 1.33, 1.24, 1.22, 1.04, 1.0, 1.56, 1.39, 0.5, 1.51, 0.98],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'TIBX', 'SPLK', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[24.15, 14.65, 13.93, 10.95, 9.28, 2.57, 2.36, 1.51, 1.5, 1.45, 1.36, 6.01, 1.73, 4.73, 2.72, 1.11],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'FXP', 'EPV', 'EWV'],
			"weight":[39.56, 20.22, 18.41, 14.81, 7.0],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[21.14, 18.71, 17.84, 22.81, 19.5],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.09, 15.9, 35.6, 24.41],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'REXX', 'MHR', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'CRK', 'FST', 'XCO', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.7, 13.1, 9.48, 4.45, 4.15, 3.49, 2.4, 1.08, 0.99, 0.92, 0.91, 0.87, 14.26, 0.52, 14.39, 4.22, 0.95, 1.02, 0.88, 0.83, 0.75, 0.71, 1.05, 0.95, 0.94],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.07, 6.15, 5.51, 4.88, 3.12, 1.35, 0.94, 15.11, 4.96, 2.24, 1.7, 1.15, 1.02, 6.15, 4.97, 3.63, 1.45, 6.42, 2.6, 0.97, 2.33, 1.48, 1.61, 1.27, 0.91],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'IMGN', 'SGEN', 'CRIS', 'GILD', 'CBST', 'EBS', 'ALXN', 'REGN', 'VRTX', 'UTHR', 'ACOR', 'LGND', 'MDCO', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.1, 11.37, 0.94, 0.84, 0.84, 19.65, 2.39, 0.88, 4.44, 4.21, 4.09, 2.17, 1.09, 0.91, 0.91, 9.09, 3.62, 2.41, 0.77, 4.23, 2.67, 2.45, 1.11, 0.95, 0.86],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'JIVE', 'IACI'],
			"weight":[24.58, 21.47, 12.97, 7.02, 1.7, 1.36, 1.32, 0.88, 14.8, 2.46, 7.29, 1.46, 1.36, 1.33],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.64, 18.8, 14.07, 2.97, 1.43, 18.9, 15.04, 5.17, 3.96],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'NEU', 'WLK', 'EMN', 'MEOH', 'POL', 'HUN', 'GRA', 'CE', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'DK', 'ALJ', 'WNR', 'CVI', 'APD', 'CF', 'RTK'],
			"weight":[13.24, 12.75, 8.4, 3.09, 2.92, 1.02, 1.02, 1.01, 1.0, 0.99, 0.99, 0.95, 9.01, 6.51, 6.17, 3.22, 2.28, 1.33, 1.0, 0.96, 0.96, 0.95, 16.04, 3.35, 0.86],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'DHX', 'MWW', 'EVDY', 'Z', 'TRUE', 'ZPIN', 'WBMD', 'RUBI', 'MKTO', 'FUEL', 'SCOR', 'CRTO', 'CTCT', 'MM', 'YOKU', 'YUME', 'TUBE'],
			"weight":[25.65, 22.03, 4.53, 12.29, 5.53, 2.71, 6.72, 2.39, 1.03, 1.01, 0.98, 0.97, 0.97, 0.92, 0.84, 1.22, 1.12, 1.1, 1.0, 0.98, 0.96, 0.96, 2.16, 0.98, 0.96],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'RDY', 'HSP', 'TARO', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.14, 20.77, 17.68, 10.19, 9.67, 9.42, 4.19, 2.7, 2.51, 1.73],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.78, 6.23, 6.02, 4.63, 3.76, 1.34, 1.01, 13.38, 4.82, 4.81, 3.57, 1.95, 7.23, 6.38, 1.69, 1.07, 5.32, 4.76, 2.46, 1.01, 4.25, 2.97, 1.0, 1.43, 1.14],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'SOHU', 'MOBI', 'XNET', 'YY', 'CMCM'],
			"weight":[23.48, 20.36, 10.88, 6.95, 4.42, 1.12, 17.61, 3.19, 2.2, 1.89, 1.43, 1.02, 1.0, 0.95, 0.94, 0.91, 0.89, 0.76],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'TCP', 'OKS', 'WES', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'EPB', 'ENLK', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.14, 6.93, 6.1, 5.89, 5.33, 4.86, 4.57, 4.45, 4.33, 3.53, 3.27, 3.2, 3.17, 3.02, 2.99, 2.75, 2.7, 2.56, 2.32, 2.11, 4.55, 4.5, 3.92, 3.73, 2.09],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'MDVN', 'SGEN', 'PCYC', 'INSY', 'NVS', 'KITE', 'INFI', 'IMGN', 'EPZM', 'TSRO', 'SNSS', 'PGNX', 'DYAX', 'IMMU', 'VSTM', 'MGNX', 'NLNK', 'THLD', 'CRIS', 'CLDX', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[25.02, 6.05, 5.76, 4.38, 1.94, 25.22, 3.06, 2.81, 1.81, 1.75, 1.61, 1.59, 1.4, 1.27, 1.25, 1.12, 1.05, 0.96, 0.91, 0.89, 0.87, 3.49, 2.62, 2.23, 0.96],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[20.02, 17.29, 14.38, 10.34, 7.54, 0.87, 9.34, 5.8, 2.43, 1.05, 1.03, 0.96, 2.61, 1.65, 0.84, 2.8, 1.06],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.82, 15.48, 11.75, 14.88, 14.36, 7.01, 3.8, 1.01, 4.87, 1.04],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'NKE', 'RL', 'VFC', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.54, 5.33, 5.21, 5.05, 4.44, 3.31, 2.3, 2.25, 1.73, 5.95, 5.67, 4.28, 3.74, 3.47, 2.29, 1.45, 11.76, 5.99, 5.27, 1.18, 4.75, 1.81, 1.41, 2.79, 2.01],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['DUK', 'ED', 'EDE', 'CMS', 'SO', 'AWK', 'LG', 'DTE', 'XEL', 'D', 'PPL', 'NWN', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'WMT', 'KMB', 'GIS', 'MCD', 'K', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.18, 4.12, 4.09, 4.06, 4.05, 4.04, 4.01, 4.01, 3.96, 3.94, 3.91, 3.84, 3.8, 4.46, 4.3, 4.11, 4.09, 3.95, 3.84, 3.74, 3.66, 3.6, 4.34, 4.13, 3.79],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'ATML', 'NVDA', 'STM', 'INVN', 'SIMO', 'CRUS', 'FCS', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.28, 9.3, 7.9, 4.51, 1.49, 1.11, 1.02, 0.97, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 25.08, 1.02, 0.94, 15.7, 9.31, 0.94],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[18.1, 8.7, 5.93, 5.36, 4.36, 2.84, 2.0, 14.65, 8.76, 5.31, 3.73, 1.5, 1.3, 1.09, 6.89, 3.26, 0.54, 0.25, 4.28, 1.14],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'SPNC', 'EXAS', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.36, 14.58, 9.6, 5.79, 3.22, 2.79, 2.44, 1.47, 1.38, 1.35, 1.06, 0.89, 0.79, 6.73, 5.55, 2.69, 1.09, 0.97, 0.95, 0.92, 0.87, 7.21, 2.31, 1.0, 1.0],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'CLX', 'OMC', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'D', 'OKE', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[10.14, 6.92, 6.3, 5.73, 5.55, 4.94, 4.84, 2.49, 1.05, 4.33, 4.25, 3.99, 3.83, 3.3, 2.47, 2.27, 1.03, 1.01, 4.41, 3.11, 2.48, 6.03, 5.2, 3.34, 1.02],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.26, 13.33, 12.24, 4.31, 3.4, 1.64, 1.25, 0.8, 11.94, 6.81, 4.55, 0.84, 21.62],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'SONC', 'DPZ', 'WEN', 'TAST', 'DNKN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'TR', 'LNCE', 'KRFT', 'DMND', 'FRSH', 'UL'],
			"weight":[21.24, 20.01, 3.17, 2.12, 17.38, 4.36, 1.59, 1.18, 1.09, 1.08, 1.03, 1.01, 0.98, 0.96, 0.95, 0.91, 0.77, 10.75, 3.86, 0.97, 0.97, 0.95, 0.89, 0.88, 0.92],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BURL', 'BIG', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'TFM', 'CHS', 'MOV', 'BID'],
			"weight":[25.3, 8.13, 6.32, 6.08, 2.56, 1.23, 1.11, 1.04, 0.99, 0.98, 0.97, 0.83, 12.24, 7.74, 5.6, 4.83, 3.78, 2.01, 1.61, 1.51, 1.27, 1.03, 0.99, 0.93, 0.92],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'WMT', 'MAT', 'ADI', 'MSFT', 'TXN', 'MXIM', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.64, 5.12, 5.04, 3.62, 3.33, 2.94, 5.44, 4.22, 4.2, 3.88, 2.81, 2.81, 5.54, 5.03, 3.04, 3.0, 2.04, 6.81, 3.96, 5.17, 1.52, 0.98, 5.3, 5.25, 3.31],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'KIRK', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[32.89, 28.02, 3.03, 3.01, 7.08, 5.32, 3.71, 1.65, 1.56, 1.28, 1.14, 4.59, 3.05, 0.61, 3.06],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'T', 'VZ', 'MRK', 'PFE', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[11.87, 10.03, 10.01, 9.96, 10.06, 9.85, 10.37, 9.33, 9.35, 9.17],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'DSW', 'TUES', 'CATO', 'CTRN', 'DLTR', 'DG', 'FIVE', 'FRED', 'SVU', 'BIG', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[16.87, 11.49, 1.1, 0.83, 21.47, 0.97, 14.53, 3.37, 1.03, 1.01, 1.0, 0.96, 6.52, 5.71, 0.98, 0.97, 0.94, 0.94, 3.76, 1.61, 1.31, 0.93, 0.92, 0.77],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[20.71, 5.2, 4.11, 3.5, 3.2, 2.65, 1.89, 1.28, 0.92, 0.91, 11.0, 7.33, 4.33, 3.52, 1.78, 0.95, 0.94, 10.94, 1.45, 0.98, 5.51, 2.16, 1.71, 1.6, 1.4],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[20.34, 19.73, 14.23, 12.76, 5.02, 15.48, 7.53, 4.9],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'HSOL', 'TSL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.14, 7.07, 6.44, 5.99, 1.92, 1.81, 1.39, 1.36, 1.0, 0.93, 5.87, 5.55, 4.61, 2.21, 0.97, 15.88, 11.48, 0.85, 2.25, 1.85, 1.5, 1.02, 5.98, 3.78, 1.13],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'LITB', 'NILE', 'SFLY', 'EHTH', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'CRCM', 'LQDT', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[20.01, 5.17, 1.09, 1.06, 1.06, 1.01, 0.97, 0.82, 24.31, 2.65, 2.35, 0.95, 0.91, 16.07, 6.0, 2.29, 0.96, 0.88, 3.04, 1.42, 1.15, 0.97, 0.95, 0.79, 3.13],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.52, 17.24, 12.8, 11.33, 27.02, 5.63, 1.29, 1.18],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.27, 5.55, 4.04, 4.01, 3.57, 3.06, 2.79, 1.26, 1.05, 0.72, 13.48, 10.54, 5.33, 6.01, 3.47, 0.8, 0.78, 0.75, 0.0, 11.8, 10.58, 4.14],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'ETR', 'SCG', 'AEP', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.86, 5.79, 4.93, 4.27, 4.21, 4.16, 3.31, 3.2, 2.86, 2.64, 2.45, 0.97, 5.18, 5.01, 4.87, 4.7, 4.3, 4.09, 3.62, 2.83, 4.56, 3.59, 4.5, 3.38, 2.72],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'CL', 'K', 'BF.B', 'GIS'],
			"weight":[6.95, 6.35, 4.88, 4.75, 4.4, 4.12, 3.76, 3.46, 3.08, 2.85, 2.76, 2.23, 1.43, 6.91, 6.85, 5.4, 5.25, 4.65, 4.64, 4.13, 3.05, 2.53, 2.49, 1.59, 1.48],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.95, 5.26, 3.84, 3.8, 3.39, 2.9, 2.64, 1.2, 1.0, 0.68, 12.79, 9.99, 5.06, 7.18, 4.15, 0.95, 0.93, 0.9, 0.0, 13.44, 10.04, 3.92],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'VTIP', 'IGF', 'BWX', 'AGG', 'ALFA', 'QAI', 'CSD'],
			"weight":[15.66, 14.2, 12.17, 6.62, 6.45, 6.0, 5.15, 5.04, 12.01, 8.3, 2.91, 2.75, 2.74],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['SPY', 'VO', 'VBR', 'BSV', 'VTIP', 'VWO', 'VEU', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.69, 8.65, 8.42, 8.58, 8.52, 8.4, 7.99, 8.02, 7.62, 8.6, 8.28, 8.24],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.64, 18.06, 2.56, 0.96, 0.86, 9.04, 6.99, 5.8, 3.1, 2.53, 2.48, 2.02, 1.99, 1.55, 1.03, 1.0, 0.97, 6.57, 0.98, 0.95, 4.36, 4.27, 1.18, 1.06, 1.02],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'CSCO', 'GOOGL', 'QCOM', 'AAPL', 'ORCL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'ADI', 'CTSH', 'GLW', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'BA', 'ADP'],
			"weight":[18.44, 9.94, 9.84, 7.23, 5.68, 5.37, 3.39, 2.32, 2.16, 2.05, 2.05, 1.31, 1.28, 1.12, 0.91, 0.88, 0.87, 0.85, 6.85, 5.66, 6.34, 0.99, 2.66, 0.92, 0.88],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.59, 4.95, 3.61, 3.57, 3.18, 2.73, 2.49, 1.13, 0.94, 0.64, 12.04, 9.4, 4.76, 8.49, 4.91, 1.13, 1.1, 1.06, 15.15, 9.45, 3.69],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.2, 4.87, 4.31, 3.15, 2.88, 2.65, 2.26, 1.63, 0.98, 8.43, 5.27, 3.86, 3.15, 2.11, 5.82, 5.22, 4.41, 3.58, 6.56, 3.92, 3.46, 2.58, 7.17, 1.35, 5.18],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VTI', 'VWO', 'VEA', 'BNDX', 'AGG'],
			"weight":[20.46, 19.88, 18.55, 20.78, 20.32],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.21, 4.61, 3.36, 3.33, 2.97, 2.54, 2.31, 1.05, 0.87, 0.6, 11.19, 8.74, 4.43, 9.98, 5.76, 1.32, 1.29, 1.25, 16.96, 8.79, 3.43],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.43, 5.31, 4.65, 4.25, 3.51, 2.86, 1.85, 1.46, 1.42, 0.99, 0.97, 13.49, 11.54, 4.16, 1.13, 1.01, 1.0, 17.87, 2.89, 9.94, 2.28, 1.99],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'CF', 'FLEX'],
			"weight":[8.7, 8.44, 5.67, 4.94, 4.82, 3.63, 3.2, 2.57, 2.15, 1.98, 1.85, 1.24, 1.12, 0.96, 6.79, 6.31, 5.27, 7.53, 4.09, 4.19, 2.36, 1.83, 8.27, 1.13, 0.98],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['NKE', 'KO', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'PEP', 'MDLZ', 'MNST', 'MCD', 'LB', 'PG', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[9.87, 9.25, 7.41, 6.56, 4.43, 4.14, 3.89, 3.71, 3.61, 3.55, 3.15, 3.13, 3.12, 2.85, 2.61, 10.87, 6.42, 4.18, 3.91, 3.33],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'CSCO', 'INTC', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.4, 5.74, 4.02, 3.97, 3.92, 3.41, 3.22, 3.03, 2.75, 2.33, 6.5, 6.08, 5.3, 3.72, 3.6, 3.16, 2.11, 5.37, 4.65, 4.31, 3.54, 3.31, 2.71, 3.9, 2.94],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'LHO', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.28, 10.0, 7.8, 4.98, 3.74, 2.25, 1.24, 1.11, 0.94, 0.91, 7.65, 5.13, 3.57, 2.38, 1.16, 1.07, 1.02, 0.98, 0.98, 0.94, 17.92, 5.97, 3.47, 2.92, 1.6],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'KAMN', 'AVAV', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'VSAT', 'XLS', 'MRCY', 'FLIR', 'KTOS', 'VEC', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[25.14, 11.86, 9.37, 2.23, 0.92, 0.91, 10.81, 3.61, 3.31, 2.05, 1.94, 1.45, 1.22, 1.18, 1.03, 0.96, 0.95, 0.88, 0.75, 0.07, 13.59, 2.05, 1.05, 0.86, 0.96, 0.87],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['TJX', 'CVS', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'QCOM', 'JKHY', 'ORCL', 'SIAL', 'PX', 'OMC', 'CTAS', 'FDS', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.33, 4.27, 4.04, 3.57, 2.07, 3.78, 3.59, 3.21, 2.46, 1.14, 6.58, 3.97, 3.45, 5.25, 4.89, 3.3, 6.95, 6.47, 4.43, 4.13, 3.75, 4.1, 3.28, 4.16, 2.83],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.77, 4.22, 3.08, 3.05, 2.72, 2.33, 2.12, 0.96, 0.8, 0.55, 11.67, 6.75, 1.54, 1.51, 1.46, 10.26, 8.02, 4.06, 18.91, 8.07, 3.15],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.82, 6.88, 6.67, 4.87, 3.65, 3.55, 3.46, 1.93, 30.44, 13.0, 2.99, 1.74],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'HPY', 'JKHY', 'EVTC', 'EEFT', 'ONE', 'FLT', 'EBAY', 'HAWK', 'GDOT', 'WEX', 'QIWI', 'UEPS', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[19.71, 19.35, 13.66, 4.37, 4.16, 3.62, 2.75, 2.65, 1.05, 1.02, 0.99, 0.97, 0.95, 0.68, 7.18, 6.99, 1.2, 1.18, 1.0, 0.98, 0.93, 1.69, 1.0, 0.99, 0.93],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[30.82, 19.67, 13.97, 4.99, 15.35, 15.19],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'HTHT', 'MR', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'VIV', 'UGP', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.69, 9.4, 6.49, 5.33, 4.9, 4.81, 3.17, 2.86, 2.47, 2.05, 1.31, 1.11, 1.08, 0.99, 0.87, 4.4, 3.49, 2.12, 2.05, 1.47, 10.17, 1.13, 3.78, 3.28, 5.56],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.41, 7.91, 1.79, 1.77, 1.71, 4.29, 3.79, 2.77, 2.74, 2.44, 2.1, 1.9, 0.87, 0.72, 0.5, 21.1, 9.23, 7.22, 3.66, 7.25, 2.83],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'IBM', 'ADP', 'NKE', 'COST', 'KO', 'PG', 'JNJ', 'CL', 'LLY', 'BMY', 'MRK', 'MDT', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.84, 5.46, 5.21, 5.04, 4.87, 4.42, 5.64, 5.2, 5.03, 5.0, 4.86, 4.6, 5.26, 5.08, 4.88, 4.78, 4.71, 4.69, 4.58, 4.84],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.29, 12.14, 9.56, 7.24, 5.27, 5.01, 3.54, 3.26, 2.43, 1.38, 0.68, 0.55, 18.27, 6.64, 1.07, 6.58, 1.08, 1.01],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[25.69, 15.14, 13.32, 4.89, 4.36, 2.25, 1.46, 1.12, 1.0, 3.5, 2.12, 1.83, 1.77, 1.39, 1.38, 7.94, 1.54, 9.31],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'BND', 'VB', 'VXUS'],
			"weight":[25.66, 25.48, 25.14, 23.73],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['HSNI', 'CBRL', 'PG', 'CLC', 'XNPT', 'CERN', 'ALNY', 'DYAX', 'FXCM', 'BAC', 'RENT', 'HEES', 'BRCD', 'MTSN', 'KAI'],
			"weight":[6.87, 6.72, 6.7, 6.67, 6.91, 6.88, 6.58, 6.52, 6.96, 6.76, 6.75, 6.32, 6.73, 6.21, 6.43],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'CVGW', 'BDBD', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.64, 10.12, 9.91, 9.08, 2.74, 2.54, 2.08, 1.74, 1.65, 1.03, 0.96, 15.91, 8.07, 3.2, 1.11, 0.87, 8.28, 5.31, 1.89, 0.88],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.58, 9.25, 2.1, 2.07, 2.0, 23.54, 3.73, 3.3, 2.4, 2.38, 2.12, 1.82, 1.65, 0.76, 0.63, 0.43, 8.02, 6.27, 3.18, 6.3, 2.46],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.27, 34.03, 31.7],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.29, 19.09, 13.5, 11.47, 13.48, 4.92, 1.23, 0.97, 11.43, 2.81, 0.92, 0.89],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'ULTA', 'COTY', 'IFF', 'LB', 'AVP', 'SBH', 'NUS', 'REV', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'USNA', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[26.06, 15.84, 6.41, 4.06, 3.99, 2.47, 2.33, 2.08, 1.94, 1.02, 1.01, 0.93, 0.63, 14.27, 1.32, 1.27, 1.19, 1.06, 0.99, 0.52, 0.48, 4.82, 3.48, 0.95, 0.89],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'SPNC', 'ELGX', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.39, 3.51, 2.74, 1.8, 22.15, 0.95, 14.12, 1.2, 0.96, 4.46, 3.44, 1.56, 1.07, 0.96, 9.43, 0.97, 3.38, 1.1, 0.99, 0.94, 0.87, 3.9, 1.09, 1.03, 0.98],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['DORM', 'KRFT', 'WSM', 'DHI', 'CL', 'YUM', 'SPLS', 'TPX', 'NTGR', 'CTSH', 'LLL', 'RVBD', 'MXIM', 'XLNX', 'FEIC', 'SWFT', 'DHR', 'ALB', 'PNR', 'FUL', 'SCS', 'EMN', 'MASI', 'MDAS', 'RNR'],
			"weight":[4.27, 4.03, 4.03, 4.02, 4.01, 4.0, 3.99, 3.86, 4.04, 4.02, 4.0, 4.0, 3.95, 3.91, 3.88, 4.01, 3.99, 3.99, 3.97, 3.97, 3.89, 3.88, 4.32, 3.92, 4.05],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'STRZA', 'IMAX', 'TV', 'AMCX', 'LGF', 'DWA', 'EROS', 'ISCA', 'MSG', 'WWE'],
			"weight":[18.47, 17.88, 17.62, 11.73, 10.99, 1.83, 5.86, 2.4, 1.09, 1.01, 0.98, 0.93, 3.7, 1.5, 0.93, 1.04, 1.04, 1.0],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[29.29, 27.14, 16.08, 15.9, 7.13, 4.47],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[28.68, 27.22, 15.89, 15.71, 7.94, 4.56],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.19, 28.53, 17.87, 15.88, 4.44, 4.1],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.27, 29.5, 19.5, 12.66, 4.78, 3.3],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.11, 25.86, 23.09, 11.97, 3.77, 3.2],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.56, 25.55, 18.72, 12.77, 7.05, 3.35],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[36.72, 36.46, 16.98, 9.84],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'ABV', 'DECK', 'ROST', 'CBD', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[9.1, 5.17, 4.67, 4.42, 4.22, 3.79, 3.64, 2.97, 1.91, 8.34, 6.87, 4.76, 3.69, 7.02, 5.92, 4.02, 1.13, 8.81, 4.8, 4.77],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'JAKK', 'LF', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'FL', 'BWS', 'CROX'],
			"weight":[16.84, 12.39, 15.78, 5.7, 3.26, 1.41, 1.21, 0.94, 7.96, 5.28, 1.05, 0.98, 12.64, 1.06, 4.22, 1.58, 1.04, 0.97, 2.0, 0.93, 0.99, 0.92, 0.85],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'ESLT', 'COL', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[11.9, 9.56, 2.91, 2.12, 1.63, 1.35, 1.09, 0.91, 18.66, 1.92, 0.98, 0.93, 0.93, 6.82, 4.98, 4.44, 2.46, 1.17, 1.01, 0.97, 0.9, 7.46, 4.61, 1.07, 9.23],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CP', 'CSX', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'HTLD', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.01, 13.67, 5.78, 5.75, 3.88, 1.07, 4.31, 4.18, 3.36, 2.25, 1.93, 1.06, 0.65, 16.17, 3.45, 2.28, 0.81, 1.36, 1.11, 1.06, 1.04, 0.99, 0.9, 1.61, 1.33],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'TXRH', 'MWIV', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.47, 5.24, 5.16, 5.14, 5.06, 4.97, 4.57, 3.28, 2.57, 1.39, 0.92, 6.58, 4.91, 4.57, 3.79, 3.28, 1.76, 5.29, 4.52, 3.16, 2.56, 3.39, 3.28, 4.23, 2.89],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[22.5, 20.46, 18.74, 17.91, 20.38],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[23.28, 15.53, 9.39, 7.77, 4.82, 2.24, 1.62, 1.61, 1.13, 1.03, 0.98, 0.92, 12.53, 6.3, 0.97, 1.37, 0.94, 0.92, 0.88, 0.84, 0.78, 0.66, 2.02, 0.77, 0.7],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'BND', 'VB', 'VXUS'],
			"weight":[25.66, 25.48, 25.14, 23.73],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.07, 6.15, 5.51, 4.88, 3.12, 1.35, 0.94, 15.11, 4.96, 2.24, 1.7, 1.15, 1.02, 6.15, 4.97, 3.63, 1.45, 6.42, 2.6, 0.97, 2.33, 1.48, 1.61, 1.27, 0.91],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'CW', 'BDC', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.43, 5.31, 4.65, 4.25, 3.51, 2.86, 1.85, 1.46, 1.42, 0.99, 0.97, 13.49, 11.54, 4.16, 1.13, 1.01, 1.0, 17.87, 2.89, 9.94, 2.28, 1.99],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'HCA', 'LPNT', 'THC', 'SEM', 'CYH', 'HLS', 'KND', 'SCAI', 'CERN', 'QSII', 'ATHN', 'CPSI', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.58, 5.71, 5.64, 2.99, 2.98, 1.2, 1.0, 0.98, 0.98, 16.28, 2.29, 2.27, 2.15, 0.93, 19.54, 1.43, 6.27, 2.98, 2.66, 1.44, 6.02, 3.86, 0.94, 0.97, 0.95],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.78, 6.23, 6.02, 4.63, 3.76, 1.34, 1.01, 13.38, 4.82, 4.81, 3.57, 1.95, 7.23, 6.38, 1.69, 1.07, 5.32, 4.76, 2.46, 1.01, 4.25, 2.97, 1.0, 1.43, 1.14],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'SOHU', 'MOBI', 'XNET', 'YY', 'CMCM'],
			"weight":[23.48, 20.36, 10.88, 6.95, 4.42, 1.12, 17.61, 3.19, 2.2, 1.89, 1.43, 1.02, 1.0, 0.95, 0.94, 0.91, 0.89, 0.76],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[25.69, 15.14, 13.32, 4.89, 4.36, 2.25, 1.46, 1.12, 1.0, 3.5, 2.12, 1.83, 1.77, 1.39, 1.38, 7.94, 1.54, 9.31],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'RJET', 'JBLU', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'LHO', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.28, 10.0, 7.8, 4.98, 3.74, 2.25, 1.24, 1.11, 0.94, 0.91, 7.65, 5.13, 3.57, 2.38, 1.16, 1.07, 1.02, 0.98, 0.98, 0.94, 17.92, 5.97, 3.47, 2.92, 1.6],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'DHX', 'MWW', 'EVDY', 'Z', 'TRUE', 'ZPIN', 'WBMD', 'RUBI', 'MKTO', 'FUEL', 'SCOR', 'CRTO', 'CTCT', 'MM', 'YOKU', 'YUME', 'TUBE'],
			"weight":[25.65, 22.03, 4.53, 12.29, 5.53, 2.71, 6.72, 2.39, 1.03, 1.01, 0.98, 0.97, 0.97, 0.92, 0.84, 1.22, 1.12, 1.1, 1.0, 0.98, 0.96, 0.96, 2.16, 0.98, 0.96],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['TLT', 'PZA', 'VCLT', 'SHV', 'IAU', 'VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWW', 'EWA', 'EWY', 'EWN', 'TUR', 'EZA'],
			"weight":[8.7, 8.65, 8.41, 25.41, 24.62, 7.59, 3.14, 2.66, 1.45, 1.14, 1.05, 0.92, 0.91, 0.81, 0.78, 0.73, 0.64, 0.55, 0.55, 0.45, 0.37, 0.31, 0.16],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.29, 12.14, 9.56, 7.24, 5.27, 5.01, 3.54, 3.26, 2.43, 1.38, 0.68, 0.55, 18.27, 6.64, 1.07, 6.58, 1.08, 1.01],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[18.1, 8.7, 5.93, 5.36, 4.36, 2.84, 2.0, 14.65, 8.76, 5.31, 3.73, 1.5, 1.3, 1.09, 6.89, 3.26, 0.54, 0.25, 4.28, 1.14],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'FSC', 'AINV', 'TCRD', 'GAIN', 'FDUS', 'TICC', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.18, 9.7, 6.35, 4.94, 4.44, 3.85, 3.33, 2.56, 2.19, 1.93, 1.72, 1.1, 1.06, 1.04, 1.04, 1.0, 0.98, 0.98, 18.37, 6.95, 6.29, 4.27, 3.04, 1.63, 1.04],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'AXS', 'IPCC', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'VR', 'GLRE', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.62, 10.94, 8.96, 7.35, 6.25, 6.17, 4.65, 3.2, 2.96, 2.54, 1.08, 1.02, 1.01, 0.98, 0.98, 0.96, 5.86, 3.48, 1.82, 1.05, 0.99, 0.96, 7.29, 5.83, 1.02],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[35.55, 15.57, 6.89, 2.77, 9.15, 7.77, 5.04, 1.11, 6.64, 3.94, 3.03, 1.48, 1.07],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['ADPT', 'SAGE', 'CTLT', 'TTOO', 'XENT', 'RWLK', 'OCUL', 'AAVL', 'OTIC', 'FCB', 'SYF', 'GNBC', 'HQY', 'TRUP', 'MIK', 'LOCO', 'SERV', 'GPRO', 'ICD', 'WMS', 'OEC', 'RYI', 'IMPR', 'TUBE', 'TERP'],
			"weight":[4.34, 4.33, 4.15, 4.1, 4.1, 3.94, 3.93, 3.89, 3.81, 4.14, 4.1, 4.0, 3.93, 3.88, 4.1, 4.07, 3.98, 3.87, 4.06, 4.03, 3.99, 3.92, 3.8, 3.73, 3.81],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.82, 15.48, 11.75, 14.88, 14.36, 7.01, 3.8, 1.01, 4.87, 1.04],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.82, 6.88, 6.67, 4.87, 3.65, 3.55, 3.46, 1.93, 30.44, 13.0, 2.99, 1.74],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'MYGN', 'NEO', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'SPNC', 'EXAS', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[23.36, 14.58, 9.6, 5.79, 3.22, 2.79, 2.44, 1.47, 1.38, 1.35, 1.06, 0.89, 0.79, 6.73, 5.55, 2.69, 1.09, 0.97, 0.95, 0.92, 0.87, 7.21, 2.31, 1.0, 1.0],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['FDX', 'LMT', 'CSX', 'UNP', 'NOC', 'GD', 'RTN', 'HON', 'GE', 'UPS', 'BA', 'UTX', 'GS', 'BAC', 'MS', 'BRK.B', 'JPM', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.32, 4.22, 4.18, 4.17, 4.09, 4.04, 3.92, 3.83, 3.67, 3.66, 3.6, 3.48, 4.48, 4.37, 4.35, 4.2, 4.15, 3.97, 3.69, 3.35, 4.5, 4.29, 3.89, 3.86, 3.69],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[23.52, 17.24, 12.8, 11.33, 27.02, 5.63, 1.29, 1.18],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[16.19, 9.64, 2.16, 2.16, 2.09, 23.41, 3.07, 2.71, 1.97, 1.96, 1.75, 1.5, 1.36, 0.62, 0.51, 0.35, 6.59, 5.15, 2.61, 6.61, 5.45, 2.13],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.58, 9.25, 2.1, 2.07, 2.0, 23.54, 3.73, 3.3, 2.4, 2.38, 2.12, 1.82, 1.65, 0.76, 0.63, 0.43, 8.02, 6.27, 3.18, 6.3, 2.46],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.41, 7.91, 1.79, 1.77, 1.71, 4.29, 3.79, 2.77, 2.74, 2.44, 2.1, 1.9, 0.87, 0.72, 0.5, 21.1, 9.23, 7.22, 3.66, 7.25, 2.83],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.77, 4.22, 3.08, 3.05, 2.72, 2.33, 2.12, 0.96, 0.8, 0.55, 11.67, 6.75, 1.54, 1.51, 1.46, 10.26, 8.02, 4.06, 18.91, 8.07, 3.15],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.21, 4.61, 3.36, 3.33, 2.97, 2.54, 2.31, 1.05, 0.87, 0.6, 11.19, 8.74, 4.43, 9.98, 5.76, 1.32, 1.29, 1.25, 16.96, 8.79, 3.43],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.59, 4.95, 3.61, 3.57, 3.18, 2.73, 2.49, 1.13, 0.94, 0.64, 12.04, 9.4, 4.76, 8.49, 4.91, 1.13, 1.1, 1.06, 15.15, 9.45, 3.69],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.95, 5.26, 3.84, 3.8, 3.39, 2.9, 2.64, 1.2, 1.0, 0.68, 12.79, 9.99, 5.06, 7.18, 4.15, 0.95, 0.93, 0.9, 0.0, 13.44, 10.04, 3.92],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.27, 5.55, 4.04, 4.01, 3.57, 3.06, 2.79, 1.26, 1.05, 0.72, 13.48, 10.54, 5.33, 6.01, 3.47, 0.8, 0.78, 0.75, 0.0, 11.8, 10.58, 4.14],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'LNCE', 'BDBD', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.04, 14.84, 9.68, 5.31, 3.01, 2.89, 2.52, 2.44, 2.0, 1.68, 1.38, 0.97, 0.96, 0.94, 7.47, 4.53, 1.73, 1.14, 1.12, 8.69, 1.0, 3.62, 1.17, 1.04, 0.84],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.34, 18.72, 9.77, 20.1, 5.31, 0.91, 0.64, 9.3, 1.75, 0.76, 3.78, 2.1, 1.61, 0.97, 0.95],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'ARAY', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'ESLT', 'COL', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[11.9, 9.56, 2.91, 2.12, 1.63, 1.35, 1.09, 0.91, 18.66, 1.92, 0.98, 0.93, 0.93, 6.82, 4.98, 4.44, 2.46, 1.17, 1.01, 0.97, 0.9, 7.46, 4.61, 1.07, 9.23],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'VASC', 'ABMD', 'SPNC', 'ELGX', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.39, 3.51, 2.74, 1.8, 22.15, 0.95, 14.12, 1.2, 0.96, 4.46, 3.44, 1.56, 1.07, 0.96, 9.43, 0.97, 3.38, 1.1, 0.99, 0.94, 0.87, 3.9, 1.09, 1.03, 0.98],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'STZ', 'RAI', 'BUD', 'LO', 'PM', 'BF.B', 'BTI', 'MCD', 'YUM', 'DEO', 'DISH', 'CHTR', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.58, 4.2, 4.11, 4.07, 4.02, 3.98, 3.96, 3.88, 3.88, 3.87, 3.69, 4.53, 4.35, 4.23, 3.95, 3.67, 3.57, 3.54, 3.38, 3.01, 4.79, 4.65, 4.85, 4.02, 3.22],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'SGY', 'REXX', 'MHR', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'CRK', 'FST', 'XCO', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.7, 13.1, 9.48, 4.45, 4.15, 3.49, 2.4, 1.08, 0.99, 0.92, 0.91, 0.87, 14.26, 0.52, 14.39, 4.22, 0.95, 1.02, 0.88, 0.83, 0.75, 0.71, 1.05, 0.95, 0.94],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'RSPP', 'FANG', 'CWEI', 'AXAS', 'CPE', 'AREX', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[23.12, 7.76, 5.99, 5.06, 3.98, 1.29, 0.96, 0.78, 15.4, 7.02, 4.92, 1.58, 1.07, 1.06, 0.99, 0.94, 0.93, 0.9, 4.69, 3.06, 3.93, 1.81, 0.97, 0.87, 0.93],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'CORE', 'MNRO', 'TXRH', 'MWIV', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.47, 5.24, 5.16, 5.14, 5.06, 4.97, 4.57, 3.28, 2.57, 1.39, 0.92, 6.58, 4.91, 4.57, 3.79, 3.28, 1.76, 5.29, 4.52, 3.16, 2.56, 3.39, 3.28, 4.23, 2.89],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.7, 12.99, 12.04, 13.75, 7.88, 1.31, 6.62, 4.5, 2.22],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'IBM', 'ADP', 'NKE', 'COST', 'KO', 'PG', 'JNJ', 'CL', 'LLY', 'BMY', 'MRK', 'MDT', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.84, 5.46, 5.21, 5.04, 4.87, 4.42, 5.64, 5.2, 5.03, 5.0, 4.86, 4.6, 5.26, 5.08, 4.88, 4.78, 4.71, 4.69, 4.58, 4.84],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'JIVE', 'IACI'],
			"weight":[24.58, 21.47, 12.97, 7.02, 1.7, 1.36, 1.32, 0.88, 14.8, 2.46, 7.29, 1.46, 1.36, 1.33],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'CALD', 'SQI', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.81, 11.67, 7.9, 7.41, 6.36, 4.62, 3.5, 1.75, 1.26, 1.12, 0.91, 4.09, 3.91, 2.67, 2.22, 2.13, 1.42, 0.96, 2.78, 1.03, 2.0, 1.51, 1.99, 0.99, 1.01],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['BWC', 'NX', 'RYAM', 'XYL', 'TMST', 'WBC', 'CLW', 'DPS', 'WWAV', 'HSNI', 'SBH', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'SAIC', 'JBT', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.46, 4.26, 4.16, 3.99, 3.83, 3.83, 3.77, 4.4, 4.36, 4.34, 4.25, 3.74, 4.42, 4.13, 3.77, 4.27, 4.21, 3.58, 4.04, 3.98, 3.9, 3.88, 3.82, 3.09, 3.52],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['MCD', 'ROL', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'SIAL', 'BCPC', 'FDS', 'USTR', 'FTI'],
			"weight":[5.06, 5.01, 4.35, 3.99, 2.45, 1.76, 8.54, 4.72, 3.58, 2.6, 5.56, 3.52, 3.48, 2.41, 1.65, 8.7, 3.4, 5.13, 4.61, 0.97, 8.56, 1.06, 4.84, 2.93, 1.13],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'HIMX', 'SIMG', 'MXIM', 'ATML', 'NVDA', 'STM', 'INVN', 'SIMO', 'CRUS', 'FCS', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.28, 9.3, 7.9, 4.51, 1.49, 1.11, 1.02, 0.97, 0.94, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 25.08, 1.02, 0.94, 15.7, 9.31, 0.94],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'LUV', 'AAL', 'RYAAY', 'UAL', 'LFL', 'ALK', 'SAVE', 'CPA', 'JBLU', 'RJET', 'AVH', 'VLRS', 'HA', 'GOL', 'SKYW', 'AL', 'AER', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[13.89, 10.65, 10.55, 10.09, 8.39, 4.65, 4.42, 3.45, 3.43, 1.89, 1.14, 1.12, 1.0, 0.93, 0.85, 0.72, 4.53, 4.47, 1.05, 0.96, 0.94, 0.86, 6.08, 2.81, 1.15],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'IR', 'ETN', 'TRIB', 'IHG', 'GSK', 'AZN', 'ARMH', 'GWPH', 'RDC', 'VPRT', 'TRNX', 'ENL', 'QGEN', 'STM', 'HELE', 'IMOS', 'G', 'PNR', 'LOGI', 'TEL', 'FDP', 'SIMO'],
			"weight":[4.65, 4.38, 4.12, 3.77, 3.72, 3.67, 4.07, 4.02, 3.97, 3.81, 3.76, 3.51, 4.83, 4.79, 4.05, 3.96, 3.86, 3.83, 3.82, 3.76, 3.88, 3.75, 3.66, 4.39, 3.97],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'MKTO', 'CVT', 'RP', 'WAGE', 'ELLI', 'DWRE', 'LPSN', 'TXTR', 'SAAS', 'PGI', 'SPSC', 'FLTX', 'CTCT', 'NICE', 'LXFT', 'MSTR', 'PRO', 'CVLT', 'DWCH', 'QLYS', 'RDWR', 'AVG', 'PFPT', 'IMPV'],
			"weight":[4.42, 4.34, 4.24, 4.22, 4.1, 4.04, 4.04, 4.02, 4.0, 3.91, 3.88, 3.86, 3.76, 3.73, 4.3, 4.19, 3.97, 3.65, 3.46, 3.38, 4.63, 4.21, 3.96, 3.94, 3.75],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'DLPH', 'MGA', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'VC', 'THRM', 'ALV', 'BWA', 'SHLO', 'FDML', 'AXL', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[26.16, 14.02, 12.25, 9.67, 5.07, 2.88, 5.05, 4.94, 1.27, 0.92, 0.51, 3.86, 1.59, 1.11, 1.09, 0.95, 1.87, 0.99, 0.97, 0.97, 0.87, 1.24, 0.85, 0.91],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'GS', 'MS', 'AIG', 'MET', 'BK', 'STT'],
			"weight":[13.58, 10.1, 8.83, 6.05, 18.13, 5.31, 2.96, 2.49, 1.74, 1.35, 1.22, 0.84, 0.83, 6.21, 4.42, 6.67, 3.71, 3.15, 2.42],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CP', 'CSX', 'NSC', 'KSU', 'LUV', 'AAL', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'KNX', 'HTLD', 'ODFL', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[20.01, 13.67, 5.78, 5.75, 3.88, 1.07, 4.31, 4.18, 3.36, 2.25, 1.93, 1.06, 0.65, 16.17, 3.45, 2.28, 0.81, 1.36, 1.11, 1.06, 1.04, 0.99, 0.9, 1.61, 1.33],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[20.02, 17.29, 14.38, 10.34, 7.54, 0.87, 9.34, 5.8, 2.43, 1.05, 1.03, 0.96, 2.61, 1.65, 0.84, 2.8, 1.06],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['TLT', 'TLH', 'IEF', 'SCHR', 'BSV'],
			"weight":[12.81, 12.57, 24.94, 24.85, 24.84],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'WM', 'DISH', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.64, 18.06, 2.56, 0.96, 0.86, 9.04, 6.99, 5.8, 3.1, 2.53, 2.48, 2.02, 1.99, 1.55, 1.03, 1.0, 0.97, 6.57, 0.98, 0.95, 4.36, 4.27, 1.18, 1.06, 1.02],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'ULTA', 'COTY', 'IFF', 'LB', 'AVP', 'SBH', 'NUS', 'REV', 'IPAR', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'USNA', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[26.06, 15.84, 6.41, 4.06, 3.99, 2.47, 2.33, 2.08, 1.94, 1.02, 1.01, 0.93, 0.63, 14.27, 1.32, 1.27, 1.19, 1.06, 0.99, 0.52, 0.48, 4.82, 3.48, 0.95, 0.89],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'RJF', 'COWN', 'GHL', 'PJC', 'FBRC', 'EVR', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.61, 11.35, 9.57, 7.74, 6.74, 4.8, 4.19, 3.94, 3.93, 3.28, 1.74, 1.54, 1.0, 2.91, 1.39, 1.24, 0.98, 0.96, 0.96, 0.95, 0.94, 0.93, 2.68, 1.65, 0.97],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'RXN', 'FELE', 'GRC', 'NES', 'LAYN', 'WMS', 'MWA', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'PICO', 'CWCO'],
			"weight":[11.73, 4.3, 4.23, 3.83, 2.58, 1.25, 1.17, 1.12, 1.01, 0.98, 12.13, 8.54, 7.71, 2.19, 9.61, 7.23, 5.54, 2.38, 1.01, 0.99, 6.48, 1.03, 1.02, 0.98, 0.98],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GOOGL', 'AAPL', 'GRMN', 'ARMH', 'TXN', 'MCHP', 'MXIM', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[17.42, 11.79, 11.52, 11.47, 3.17, 2.95, 2.9, 2.9, 2.26, 1.79, 1.55, 3.34, 3.19, 2.8, 2.47, 2.02, 0.99, 3.58, 3.3, 2.72, 1.27, 1.22, 0.84, 1.38, 1.14],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'ELY', 'SNOW', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[23.28, 15.53, 9.39, 7.77, 4.82, 2.24, 1.62, 1.61, 1.13, 1.03, 0.98, 0.92, 12.53, 6.3, 0.97, 1.37, 0.94, 0.92, 0.88, 0.84, 0.78, 0.66, 2.02, 0.77, 0.7],
			"name":"World of Sports"};
	}
	
	return db[motif];
}
