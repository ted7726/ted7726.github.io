function getMotifs(motif){
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'RSPP', 'LPI', 'FANG', 'CWEI', 'AXAS', 'AREX', 'CPE', 'EPE', 'PVA', 'CRZO', 'SN', 'BCEI', 'PDCE', 'ECR'],
			"weight":[26.25, 8.18, 5.62, 5.23, 3.23, 1.28, 0.84, 0.45, 17.2, 7.46, 1.5, 1.47, 1.19, 1.07, 1.02, 0.94, 0.88, 4.48, 1.5, 1.21, 0.73, 4.12, 3.14, 1.0],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'CAM', 'RES', 'WFT', 'SPN', 'CJES', 'TPLM', 'OIS', 'BAS', 'KEG', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[15.92, 9.72, 7.12, 5.62, 4.97, 4.43, 4.33, 2.24, 0.93, 0.69, 0.55, 0.39, 10.92, 5.62, 1.78, 0.94, 0.61, 8.5, 3.3, 3.15, 0.92, 0.86, 3.38, 2.06, 1.02],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'AA', 'SLCA', 'GPRE', 'INTC', 'EEFT', 'CHL', 'WIN', 'ITUB', 'TPL', 'AKRX', 'Z'],
			"weight":[7.86, 4.52, 4.18, 2.64, 1.49, 4.84, 4.01, 3.53, 3.3, 2.83, 8.33, 5.02, 2.52, 1.84, 6.93, 4.3, 2.11, 6.22, 4.07, 3.38, 3.19, 4.43, 1.81, 3.53, 3.1],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[27.04, 20.73, 19.09, 13.94, 8.83, 6.23, 3.02, 1.12],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'IMO', 'COP', 'BP', 'SNP', 'E', 'STO', 'SU', 'EC', 'MRO', 'YPF', 'MDU', 'PBR', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[19.45, 12.36, 10.21, 7.42, 6.55, 4.75, 4.69, 4.27, 4.16, 3.63, 2.8, 2.45, 2.29, 2.15, 1.37, 1.31, 1.25, 1.16, 1.04, 0.98, 1.69, 1.17, 0.37, 1.58, 0.91],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[23.38, 14.8, 13.13, 12.6, 9.82, 2.67, 2.3, 1.61, 1.57, 1.38, 1.09, 5.81, 1.59, 4.63, 2.52, 1.1],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EPV', 'FXP', 'EEV', 'EWV'],
			"weight":[29.88, 20.27, 19.34, 19.08, 11.44],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[21.44, 19.19, 17.98, 21.18, 20.2],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[55.39, 6.79, 22.06, 15.76],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'MHR', 'SGY', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'XCO', 'FST', 'GDP', 'CRK', 'ROSE', 'SFY', 'SM'],
			"weight":[17.65, 13.48, 10.43, 4.53, 4.1, 3.78, 2.36, 1.21, 0.91, 0.75, 0.66, 0.64, 14.1, 0.61, 13.87, 4.09, 0.74, 0.98, 0.96, 0.75, 0.56, 0.55, 0.89, 0.71, 0.68],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'DUK', 'PBR', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[15.22, 6.41, 6.36, 5.22, 3.87, 1.39, 1.03, 15.68, 5.14, 2.31, 1.89, 1.34, 0.97, 5.08, 4.66, 3.73, 1.56, 6.37, 2.65, 1.05, 2.42, 1.47, 1.89, 1.36, 0.94],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'CRIS', 'IMGN', 'SGEN', 'GILD', 'CBST', 'EBS', 'ALXN', 'REGN', 'VRTX', 'UTHR', 'ACOR', 'LGND', 'MDCO', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[18.4, 12.34, 0.79, 0.79, 0.79, 17.22, 2.47, 0.94, 4.63, 4.45, 4.05, 1.99, 1.05, 0.98, 0.95, 7.87, 4.19, 3.44, 0.75, 4.58, 2.57, 2.16, 1.08, 0.79, 0.73],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'UNTD', 'YOKU', 'RENN', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[27.06, 21.55, 13.27, 5.51, 1.69, 1.49, 1.44, 0.96, 12.88, 1.96, 7.54, 1.87, 1.42, 1.37],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.84, 18.25, 14.01, 3.36, 1.43, 18.7, 15.36, 5.43, 3.62],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['DOW', 'LYB', 'DD', 'NEU', 'WLK', 'EMN', 'POL', 'GRA', 'CE', 'HUN', 'LXU', 'MEOH', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'CVI', 'ALJ', 'DK', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[12.47, 11.11, 8.17, 3.13, 2.37, 1.08, 1.04, 1.02, 1.01, 0.99, 0.9, 0.88, 10.13, 7.03, 6.0, 3.71, 2.2, 1.63, 0.99, 0.99, 0.93, 0.93, 17.46, 3.16, 0.66],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['BIDU', 'GOOGL', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'DHX', 'ZPIN', 'Z', 'EVDY', 'TRUE', 'MWW', 'WBMD', 'RUBI', 'CRTO', 'CTCT', 'SCOR', 'FUEL', 'MKTO', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.14, 24.25, 4.38, 12.05, 4.24, 2.3, 5.41, 2.23, 1.33, 1.03, 0.99, 0.97, 0.94, 0.84, 0.81, 1.61, 1.21, 1.19, 1.19, 1.15, 1.06, 0.85, 2.37, 1.39, 1.07],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'RDY', 'HSP', 'TARO', 'AKRX', 'LCI', 'IPXL', 'SGNT'],
			"weight":[21.87, 19.51, 19.23, 10.26, 10.24, 8.05, 4.02, 2.71, 2.1, 2.01],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ELS', 'ARCP', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.81, 6.38, 6.15, 4.76, 3.85, 1.29, 1.07, 13.53, 4.94, 4.82, 3.76, 2.09, 6.77, 5.08, 1.73, 1.12, 5.41, 4.85, 2.55, 1.04, 4.45, 2.85, 1.05, 1.52, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['EA', 'ATVI', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'SOHU', 'YY', 'XNET', 'CMCM', 'MOBI'],
			"weight":[22.11, 21.74, 11.87, 7.55, 3.91, 0.71, 19.41, 2.31, 1.97, 1.6, 1.5, 0.89, 0.87, 0.84, 0.83, 0.68, 0.63, 0.59],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['KMP', 'RRMS', 'EEP', 'EPD', 'TCP', 'SMLP', 'ETP', 'WES', 'OKS', 'MMP', 'BPL', 'EPB', 'SXE', 'SXL', 'ENLK', 'AMID', 'EXLP', 'SEP', 'APL', 'TLP', 'ACMP', 'DMLP', 'EVEP', 'BBEP', 'LGCY'],
			"weight":[7.59, 6.77, 6.29, 6.26, 5.45, 5.23, 4.6, 4.45, 4.02, 3.44, 3.37, 3.32, 3.22, 2.99, 2.86, 2.81, 2.53, 2.39, 2.36, 2.36, 4.98, 4.52, 3.5, 3.13, 1.57],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'MDVN', 'SGEN', 'PCYC', 'INSY', 'NVS', 'KITE', 'INFI', 'PGNX', 'TSRO', 'DYAX', 'IMGN', 'MGNX', 'EPZM', 'NLNK', 'CLDX', 'IMMU', 'VSTM', 'CRIS', 'THLD', 'SNSS', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[27.04, 6.12, 5.34, 4.71, 1.65, 23.31, 3.74, 2.66, 1.78, 1.77, 1.58, 1.51, 1.31, 1.28, 1.25, 1.23, 1.22, 0.93, 0.83, 0.67, 0.49, 3.59, 3.09, 1.94, 0.95],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'SAH', 'LAD', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.4, 17.97, 14.68, 9.89, 6.99, 0.86, 10.12, 5.83, 2.61, 1.05, 0.88, 0.84, 2.5, 1.57, 0.83, 2.91, 1.07],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'VMI', 'RS', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.67, 13.78, 12.29, 14.65, 14.46, 7.36, 3.77, 0.92, 5.04, 1.04],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'NKE', 'RL', 'VFC', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.2, 5.2, 5.11, 5.02, 4.39, 3.02, 2.14, 2.1, 1.68, 5.68, 5.6, 4.52, 4.01, 3.54, 2.29, 1.45, 12.07, 5.63, 5.62, 1.05, 5.31, 1.89, 1.42, 2.98, 2.05],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['EDE', 'ED', 'LG', 'CMS', 'DUK', 'AWK', 'XEL', 'SO', 'DTE', 'WEC', 'NWN', 'PPL', 'D', 'DPS', 'PEP', 'WMT', 'CHD', 'PG', 'KMB', 'K', 'GIS', 'MCD', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.32, 4.14, 4.11, 4.11, 4.09, 4.07, 4.02, 3.95, 3.91, 3.91, 3.88, 3.84, 3.82, 4.78, 4.27, 4.09, 4.08, 4.07, 3.8, 3.59, 3.58, 3.51, 4.33, 4.2, 3.51],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'SWKS', 'QCOM', 'ARMH', 'SYNA', 'SIMG', 'NVDA', 'MXIM', 'FCS', 'ATML', 'STM', 'SIMO', 'CRUS', 'HIMX', 'INVN', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.45, 8.96, 8.41, 4.13, 1.16, 1.05, 0.98, 0.88, 0.87, 0.84, 0.84, 0.78, 0.73, 0.71, 0.6, 27.4, 0.99, 0.95, 14.94, 9.44, 0.89],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'RIC', 'AUQ', 'IAG', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[16.9, 9.92, 5.44, 4.62, 4.08, 2.7, 2.03, 13.42, 9.61, 5.34, 4.18, 1.77, 1.72, 1.21, 7.67, 3.26, 0.43, 0.23, 4.26, 1.22],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'DXCM', 'TRIB', 'LMNX', 'BRLI', 'RDNT', 'MYGN', 'NEO', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'EXAS', 'SPNC', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AMED', 'AFAM'],
			"weight":[21.12, 13.38, 9.52, 6.65, 2.85, 2.82, 2.43, 1.29, 1.21, 1.2, 1.1, 0.99, 0.74, 8.15, 6.04, 3.35, 1.21, 1.15, 1.1, 0.98, 0.9, 7.2, 2.45, 1.21, 0.97],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'CLX', 'OMC', 'PEP', 'K', 'PG', 'MCD', 'KMB', 'KO', 'D', 'CVX', 'COP', 'OKE', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[10.96, 6.74, 6.7, 5.74, 5.6, 4.94, 4.68, 2.48, 1.03, 4.16, 4.03, 3.46, 3.39, 3.15, 2.43, 2.24, 1.06, 1.02, 4.43, 3.27, 2.37, 6.32, 5.69, 3.16, 0.95],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'MNST', 'KO', 'PEP', 'DPS', 'COT'],
			"weight":[16.71, 13.03, 11.96, 4.04, 3.36, 1.7, 1.17, 0.87, 23.85, 11.25, 6.58, 4.75, 0.74],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'DPZ', 'SONC', 'JACK', 'PLKI', 'PZZA', 'WEN', 'KKD', 'TAST', 'DNKN', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'TR', 'KRFT', 'FRSH', 'DMND', 'UL'],
			"weight":[20.47, 19.77, 3.58, 2.26, 16.57, 4.31, 1.72, 1.2, 1.19, 1.19, 1.19, 1.12, 1.02, 1.01, 1.0, 0.99, 0.87, 11.38, 3.7, 1.03, 0.93, 0.92, 0.86, 0.86, 0.86],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'DLTR', 'TGT', 'ROST', 'DG', 'BURL', 'BIG', 'SHLD', 'FIVE', 'CTRN', 'FRED', 'LUX', 'RL', 'WFM', 'KORS', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'TFM', 'CHS', 'BID', 'MOV'],
			"weight":[25.37, 7.82, 6.56, 6.55, 2.72, 1.19, 1.12, 1.11, 1.08, 1.02, 1.0, 0.96, 11.46, 7.64, 5.57, 5.24, 3.58, 1.96, 1.64, 1.51, 1.21, 1.06, 0.98, 0.98, 0.69],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['ATO', 'OGE', 'CVX', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'WMT', 'MAT', 'ADI', 'MSFT', 'TXN', 'MXIM', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.31, 5.21, 4.75, 3.71, 3.17, 2.49, 5.86, 4.2, 4.04, 3.76, 2.93, 2.64, 5.59, 4.89, 3.18, 2.74, 2.07, 7.26, 3.92, 5.52, 1.64, 0.94, 5.77, 5.05, 3.37],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'KIRK', 'HVT', 'TPX', 'PIR', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[30.98, 29.94, 3.17, 3.03, 7.15, 4.77, 3.73, 1.52, 1.47, 1.45, 1.2, 5.33, 2.88, 0.57, 2.82],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'PG', 'MCD', 'PFE', 'MRK', 'T', 'VZ', 'GE', 'CVX'],
			"weight":[12.4, 10.48, 10.64, 9.26, 9.97, 9.77, 9.57, 9.57, 9.42, 8.93],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'TUES', 'DSW', 'CATO', 'CTRN', 'DLTR', 'DG', 'FIVE', 'BIG', 'FRED', 'SVU', 'VIPS', 'GRPN', 'OSTK', 'ZU', 'COUP', 'SALE'],
			"weight":[16.76, 11.81, 1.09, 1.06, 21.15, 0.97, 13.85, 3.54, 1.04, 1.03, 1.01, 0.98, 6.98, 5.51, 1.0, 0.99, 0.94, 0.89, 3.93, 1.64, 1.25, 0.92, 0.89, 0.76],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'QIHU', 'SINA', 'LEJU', 'SOHU', 'YOKU', 'BITA', 'XNET', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'YY', 'RENN', 'ZPIN', 'SFUN'],
			"weight":[22.09, 6.07, 3.89, 3.31, 3.13, 2.52, 1.78, 1.32, 1.01, 0.74, 9.5, 8.04, 3.77, 3.49, 1.32, 0.88, 0.77, 12.9, 1.43, 0.69, 5.15, 1.71, 1.68, 1.46, 1.32],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.17, 17.41, 14.76, 13.58, 4.27, 17.98, 6.95, 3.88],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'SCTY', 'FSLR', 'SPWR', 'JASO', 'ENPH', 'YGE', 'TSL', 'HSOL', 'ESE', 'BMI', 'OPWR', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'ORA', 'CPST', 'FCEL', 'MXWL', 'BLDP', 'PEGI', 'MY'],
			"weight":[8.94, 6.59, 5.84, 5.54, 1.93, 1.83, 1.36, 0.89, 0.84, 6.32, 5.39, 5.07, 2.04, 0.75, 16.2, 12.42, 0.97, 6.36, 2.0, 1.7, 1.42, 1.19, 3.37, 1.05],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['EBAY', 'MELI', 'CPRT', 'CRCM', 'LQDT', 'AMZN', 'JD', 'NILE', 'LITB', 'FTD', 'EHTH', 'SFLY', 'JMEI', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'GRPN', 'OSTK', 'COUP', 'ZU', 'SALE', 'VIPS', 'AAPL'],
			"weight":[23.96, 3.35, 2.68, 0.98, 0.74, 20.89, 4.75, 1.25, 1.11, 1.1, 1.03, 0.89, 0.64, 16.43, 6.12, 2.42, 1.03, 0.77, 1.61, 1.44, 1.03, 0.9, 0.88, 0.35, 3.67],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[22.83, 17.38, 13.08, 11.28, 26.76, 6.12, 1.55, 1.01],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.48, 5.68, 4.24, 4.16, 3.78, 2.89, 2.86, 1.27, 1.08, 0.71, 13.41, 10.42, 5.22, 5.96, 3.37, 0.76, 0.75, 0.72, 0.0, 11.44, 11.21, 3.57],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'AEP', 'ETR', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'ACC', 'PBCT', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[7.47, 5.73, 5.0, 4.53, 4.2, 4.18, 3.49, 3.14, 2.92, 2.67, 2.26, 1.02, 5.11, 4.98, 4.81, 4.48, 4.48, 4.22, 3.69, 2.85, 5.2, 3.63, 4.18, 3.16, 2.61],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['UNP', 'UTX', 'GE', 'MMM', 'UPS', 'DOW', 'MON', 'DD', 'PX', 'LYB', 'AMZN', 'MCD', 'CMCSA', 'DIS', 'HD', 'AAPL', 'ORCL', 'MSFT', 'FB', 'GOOGL', 'V', 'BRK.B', 'WFC', 'BAC', 'JPM'],
			"weight":[4.09, 4.07, 4.04, 4.0, 3.98, 4.08, 4.06, 4.03, 3.98, 3.85, 4.25, 4.02, 3.96, 3.89, 3.86, 4.24, 4.11, 3.94, 3.91, 3.76, 4.13, 4.09, 3.95, 3.87, 3.86],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.16, 5.4, 4.03, 3.95, 3.59, 2.74, 2.72, 1.21, 1.03, 0.67, 12.74, 9.89, 4.96, 7.13, 4.04, 0.91, 0.9, 0.86, 0.0, 13.05, 10.65, 3.38],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'VNQ', 'DBC', 'IGF', 'VTIP', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[16.29, 14.17, 12.27, 6.74, 6.48, 5.85, 5.05, 5.0, 11.45, 8.14, 3.06, 2.77, 2.73],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['VO', 'SPY', 'VBR', 'BSV', 'VTIP', 'VWO', 'VEU', 'IGE', 'DBC', 'VNQ', 'SHY', 'IGOV'],
			"weight":[9.12, 9.04, 8.87, 8.39, 8.3, 8.48, 8.0, 7.6, 6.93, 8.96, 8.41, 7.89],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['XEL', 'PCG', 'UTL', 'NEE', 'MGEE', 'IDA', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'T', 'VZ', 'S', 'SHEN', 'TDS', 'SRE', 'OGS', 'CPK', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[9.37, 7.24, 6.07, 3.22, 2.74, 2.73, 2.1, 2.08, 1.65, 1.11, 1.06, 0.97, 17.58, 17.12, 1.95, 1.07, 0.87, 6.6, 1.03, 1.01, 4.87, 4.26, 1.15, 1.09, 1.08],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'CSCO', 'GOOGL', 'QCOM', 'AAPL', 'ORCL', 'ADBE', 'ACN', 'EMC', 'INTU', 'INTC', 'SYMC', 'ALTR', 'LRCX', 'CTSH', 'CA', 'GLW', 'ADI', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.04, 10.13, 8.74, 6.62, 6.3, 5.45, 3.43, 2.34, 2.13, 2.11, 2.09, 1.37, 1.25, 1.18, 1.0, 0.97, 0.9, 0.89, 7.1, 5.8, 6.12, 1.08, 3.05, 0.96, 0.94],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.8, 5.08, 3.8, 3.72, 3.38, 2.59, 2.56, 1.14, 0.97, 0.63, 12.0, 9.32, 4.67, 8.45, 4.78, 1.08, 1.07, 1.02, 14.73, 10.03, 3.19],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['BXP', 'PB', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'CXO', 'DNR', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[5.04, 5.03, 4.55, 3.34, 2.96, 2.7, 2.32, 1.71, 0.97, 8.01, 5.4, 2.84, 2.51, 2.12, 5.82, 5.32, 4.18, 3.08, 6.9, 4.58, 3.55, 2.58, 7.37, 1.36, 5.75],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VTI', 'VWO', 'VEA', 'BNDX', 'AGG'],
			"weight":[21.24, 20.0, 18.48, 20.39, 19.89],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.41, 4.74, 3.54, 3.47, 3.15, 2.41, 2.39, 1.07, 0.9, 0.59, 11.18, 8.68, 4.36, 9.94, 5.61, 1.27, 1.25, 1.2, 16.52, 9.35, 2.97],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'LDOS', 'MSA', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.47, 5.37, 4.75, 4.33, 3.87, 2.64, 2.11, 1.62, 1.54, 1.05, 0.89, 13.78, 9.99, 4.0, 1.29, 1.12, 1.09, 18.46, 2.76, 9.71, 2.18, 1.99],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'SYMC', 'ALTR', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'CHL', 'NTT', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'CF', 'FLEX'],
			"weight":[8.97, 8.42, 5.75, 5.03, 4.85, 3.87, 3.16, 2.59, 2.3, 1.97, 1.89, 1.26, 1.09, 1.01, 6.16, 5.36, 5.32, 7.54, 4.18, 4.65, 2.61, 2.15, 7.76, 1.05, 1.03],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['NKE', 'KO', 'DIS', 'VIA', 'SNE', 'SBUX', 'MNST', 'WMT', 'MDLZ', 'PEP', 'LB', 'PG', 'TGT', 'MCD', 'AMZN', 'GOOGL', 'MSFT', 'AAPL', 'BBRY', 'INTC'],
			"weight":[10.01, 8.95, 7.26, 6.1, 5.15, 4.15, 4.03, 4.02, 3.83, 3.68, 3.47, 3.09, 3.04, 3.01, 2.55, 9.54, 6.21, 4.28, 4.27, 3.35],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['MSFT', 'IBM', 'AAPL', 'CSCO', 'INTC', 'EMC', 'ORCL', 'MSI', 'GOOGL', 'AMAT', 'JNJ', 'CL', 'CAG', 'SBUX', 'KSS', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'SYK', 'A', 'KEYS', 'FDX', 'DE'],
			"weight":[5.66, 5.25, 4.37, 4.13, 4.08, 3.39, 3.29, 2.8, 2.71, 2.49, 6.33, 6.06, 5.45, 3.69, 3.42, 2.97, 2.19, 5.99, 4.45, 4.14, 3.89, 2.88, 2.39, 0.92, 4.07, 2.97],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'SKYW', 'RJET', 'JBLU', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.93, 10.14, 8.64, 5.15, 3.56, 2.24, 1.24, 1.22, 1.22, 1.17, 7.41, 4.94, 3.56, 2.15, 1.14, 1.05, 0.98, 0.98, 0.97, 0.83, 17.49, 5.78, 3.03, 2.61, 1.58],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'LDOS', 'HRS', 'MANT', 'CACI', 'SAIC', 'VSAT', 'MRCY', 'XLS', 'FLIR', 'KTOS', 'VEC', 'RTN', 'ATK', 'DCO', 'GY', 'IRBT', 'CUB'],
			"weight":[24.68, 12.1, 9.32, 1.87, 0.87, 0.86, 11.74, 3.67, 3.32, 2.08, 2.04, 1.48, 1.38, 1.18, 1.12, 1.03, 0.97, 0.83, 0.55, 0.08, 13.57, 1.71, 0.9, 0.83, 0.95, 0.88],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['CVS', 'TJX', 'CHD', 'HD', 'YUM', 'UNP', 'CNI', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'JKHY', 'QCOM', 'ORCL', 'SIAL', 'PX', 'OMC', 'CTAS', 'FDS', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.48, 4.31, 4.03, 3.49, 2.06, 3.87, 3.77, 3.68, 2.57, 1.15, 7.21, 3.98, 3.11, 5.02, 4.76, 3.32, 6.52, 6.2, 4.67, 4.1, 3.93, 4.03, 3.4, 3.94, 2.39],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.96, 4.35, 3.25, 3.18, 2.89, 2.21, 2.19, 0.97, 0.83, 0.54, 11.65, 6.59, 1.49, 1.47, 1.4, 10.27, 7.97, 4.0, 18.45, 8.59, 2.73],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[21.24, 6.92, 6.67, 5.12, 3.61, 3.54, 3.44, 1.97, 30.62, 11.76, 3.43, 1.68],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['V', 'MA', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'HPY', 'EEFT', 'VNTV', 'JKHY', 'ONE', 'EVTC', 'FLT', 'EBAY', 'HAWK', 'GDOT', 'WEX', 'UEPS', 'QIWI', 'ACIW', 'PAY', 'GCA', 'NCR'],
			"weight":[21.06, 20.56, 12.89, 4.57, 3.99, 3.49, 2.67, 2.51, 1.02, 1.01, 1.01, 0.97, 0.88, 0.88, 7.13, 6.16, 1.18, 1.11, 0.96, 0.88, 0.81, 1.59, 0.97, 0.89, 0.82],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'IEF', 'VTIP'],
			"weight":[31.37, 20.78, 13.64, 4.92, 14.84, 14.45],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'LFC', 'SNP', 'BIDU', 'CHA', 'CHU', 'NTES', 'CEO', 'HNP', 'JD', 'MR', 'HTHT', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'VIV', 'UGP', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[16.45, 8.06, 6.02, 5.98, 5.41, 4.84, 3.18, 3.01, 2.53, 2.15, 1.17, 1.1, 1.06, 0.99, 0.93, 4.4, 3.85, 2.15, 2.13, 1.46, 11.01, 1.17, 3.21, 2.96, 4.77],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.26, 7.72, 1.74, 1.73, 1.65, 4.48, 3.92, 2.93, 2.87, 2.61, 1.99, 1.98, 0.89, 0.75, 0.5, 20.66, 9.27, 7.21, 3.61, 7.75, 2.47],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['NKE', 'COST', 'PG', 'KO', 'JNJ', 'CL', 'INTC', 'AAPL', 'MSFT', 'ADP', 'GOOGL', 'IBM', 'BMY', 'MDT', 'LLY', 'PFE', 'MRK', 'MMM', 'ITW', 'WFC'],
			"weight":[5.75, 5.36, 4.98, 4.89, 4.67, 4.52, 5.92, 5.74, 5.3, 4.82, 4.45, 3.94, 5.52, 5.17, 5.08, 4.62, 4.6, 4.99, 4.94, 4.74],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[15.02, 12.45, 10.01, 6.3, 5.31, 4.8, 3.27, 3.09, 2.97, 1.36, 0.77, 0.47, 18.26, 7.16, 0.92, 5.98, 0.94, 0.91],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'YOKU', 'NFLX', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'TUBE', 'CNVR', 'FUEL', 'MM', 'XNET', 'YHOO', 'FENG', 'AKAM'],
			"weight":[23.86, 14.38, 11.62, 5.31, 4.89, 2.38, 1.45, 1.05, 0.82, 3.75, 2.6, 2.14, 1.81, 1.21, 1.16, 9.96, 1.49, 10.12],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[26.28, 25.89, 24.58, 23.25],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['LULU', 'LBTYA', 'DSW', 'GPI', 'UNF', 'DG', 'MRH', 'PGR', 'STBZ', 'EXAM', 'PACB', 'GERN', 'UACL', 'DAL', 'RMAX', 'OMC', 'SIMG', 'IDCC', 'NX'],
			"weight":[5.41, 5.36, 5.34, 5.23, 5.17, 5.08, 5.32, 5.2, 5.15, 5.32, 5.3, 5.0, 5.4, 5.32, 5.42, 5.26, 5.35, 5.21, 5.18],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'CVGW', 'BDBD', 'CALM', 'STKL', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.17, 11.26, 9.44, 8.23, 2.5, 1.99, 1.75, 1.5, 0.97, 0.79, 18.64, 7.97, 3.35, 1.4, 0.8, 8.41, 5.67, 2.5, 0.66],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.39, 9.07, 2.04, 2.03, 1.94, 23.13, 3.91, 3.42, 2.55, 2.5, 2.28, 1.74, 1.72, 0.77, 0.66, 0.43, 8.08, 6.28, 3.15, 6.76, 2.15],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[35.47, 33.17, 31.37],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['ICE', 'CME', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'GCAP', 'FXCM', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[19.69, 18.52, 13.62, 11.22, 13.19, 4.7, 1.28, 1.14, 11.58, 3.25, 0.93, 0.88],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'LB', 'IFF', 'SBH', 'AVP', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ZLTQ', 'ALGN', 'USNA', 'VRX', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.53, 14.45, 6.04, 4.56, 4.06, 2.56, 2.38, 2.01, 1.6, 0.98, 0.91, 0.82, 0.62, 15.75, 1.5, 1.42, 1.4, 1.24, 1.17, 0.49, 0.14, 5.01, 3.65, 1.04, 0.67],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'AFAM', 'BIOS', 'HUM', 'UAM', 'THOR', 'ABMD', 'SPNC', 'VASC', 'ELGX', 'WMGI', 'NUVA', 'GMED', 'OFIX'],
			"weight":[17.81, 4.09, 2.77, 1.96, 19.44, 0.96, 13.38, 1.5, 0.88, 4.46, 3.66, 1.9, 0.94, 0.92, 9.6, 1.02, 3.67, 1.35, 1.07, 1.03, 0.91, 3.51, 1.17, 1.17, 0.83],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['WSM', 'F', 'PIR', 'SHOO', 'WAG', 'KO', 'FINL', 'TUP', 'NUAN', 'LLL', 'SYNT', 'AIR', 'MXIM', 'BRC', 'PRLB', 'FUL', 'TILE', 'THOR', 'SEM', 'FNFG'],
			"weight":[5.38, 5.24, 5.11, 5.09, 5.02, 5.0, 4.98, 4.82, 4.95, 4.84, 4.82, 4.78, 4.75, 5.11, 4.97, 4.89, 4.52, 5.47, 5.01, 5.23],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['TWX', 'FOXA', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'IMAX', 'STRZA', 'TV', 'AMCX', 'LGF', 'DWA', 'EROS', 'MSG', 'ISCA', 'WWE'],
			"weight":[18.95, 18.94, 17.46, 11.76, 10.36, 1.8, 5.27, 2.25, 1.13, 1.05, 0.99, 0.97, 3.56, 1.32, 1.3, 1.12, 0.96, 0.8],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.75, 28.19, 15.79, 15.73, 7.64, 3.9],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.26, 28.13, 15.59, 15.53, 8.5, 3.99],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.36, 28.05, 17.51, 15.79, 4.4, 3.89],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.63, 29.71, 19.08, 12.57, 5.12, 2.89],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[33.34, 25.37, 22.57, 11.89, 4.04, 2.8],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[31.96, 26.54, 18.32, 12.69, 7.56, 2.93],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[38.09, 35.63, 16.85, 9.43],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'NUS', 'ROST', 'ABV', 'DECK', 'CBD', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[9.12, 5.59, 4.14, 4.1, 4.04, 4.02, 3.32, 3.03, 2.2, 9.02, 6.6, 4.96, 3.29, 7.14, 6.53, 4.26, 1.12, 8.59, 4.55, 4.37],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SCHL', 'SEAS', 'VIAB', 'HAS', 'MAT', 'JAKK', 'LF', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'BFAM', 'CRCM', 'BWS', 'FL', 'CROX'],
			"weight":[17.03, 12.52, 15.79, 6.39, 2.88, 1.27, 1.2, 0.9, 7.85, 5.03, 0.95, 0.86, 12.91, 1.05, 4.1, 1.7, 0.96, 0.86, 2.0, 0.91, 1.04, 0.97, 0.83],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'NVDQ', 'ARAY', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'TXT', 'COL', 'ESLT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[11.57, 9.66, 3.28, 2.18, 1.6, 1.44, 1.1, 0.9, 18.87, 1.52, 0.96, 0.91, 0.82, 6.83, 4.9, 4.25, 2.52, 1.18, 1.03, 0.99, 0.85, 6.99, 4.59, 0.9, 10.15],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'R', 'KNX', 'ODFL', 'HTLD', 'WERN', 'JBHT', 'CHRW', 'LSTR', 'QLTY', 'EXPD', 'FWRD'],
			"weight":[20.33, 12.88, 6.1, 5.04, 3.63, 0.99, 4.8, 4.52, 3.7, 2.41, 2.21, 1.2, 0.91, 15.69, 1.29, 1.15, 1.05, 1.03, 0.96, 0.95, 3.35, 2.23, 0.74, 1.6, 1.23],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'TXRH', 'CORE', 'MNRO', 'MWIV', 'GCO', 'CHDN', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.61, 5.37, 5.36, 5.16, 5.12, 4.54, 4.49, 3.34, 3.21, 1.38, 0.94, 6.71, 5.22, 4.45, 3.71, 3.41, 1.62, 5.37, 4.3, 2.89, 2.7, 3.52, 3.26, 3.45, 2.88],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[22.25, 18.36, 20.31, 18.42, 20.66],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'HIBB', 'FINL', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'BC', 'CODI', 'SNOW', 'MBUU', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[23.16, 15.72, 9.05, 7.33, 5.33, 2.35, 1.72, 1.67, 1.06, 1.03, 1.0, 0.99, 12.06, 6.61, 0.87, 1.39, 0.97, 0.84, 0.81, 0.81, 0.8, 0.73, 2.08, 0.97, 0.65],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[26.28, 25.89, 24.58, 23.25],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'DUK', 'PBR', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[15.22, 6.41, 6.36, 5.22, 3.87, 1.39, 1.03, 15.68, 5.14, 2.31, 1.89, 1.34, 0.97, 5.08, 4.66, 3.73, 1.56, 6.37, 2.65, 1.05, 2.42, 1.47, 1.89, 1.36, 0.94],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'TISI', 'BGC', 'TMO', 'ECOL', 'LDR', 'FSS', 'LDOS', 'MSA', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.47, 5.37, 4.75, 4.33, 3.87, 2.64, 2.11, 1.62, 1.54, 1.05, 0.89, 13.78, 9.99, 4.0, 1.29, 1.12, 1.09, 18.46, 2.76, 9.71, 2.18, 1.99],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'HCA', 'LPNT', 'SEM', 'THC', 'SCAI', 'HLS', 'CYH', 'KND', 'CERN', 'QSII', 'CPSI', 'ATHN', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[6.91, 5.28, 5.17, 3.21, 2.32, 1.05, 0.98, 0.97, 0.92, 16.11, 2.22, 1.99, 1.88, 0.76, 20.8, 1.55, 6.76, 3.68, 2.17, 1.47, 6.8, 4.0, 1.04, 1.0, 0.94],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ELS', 'ARCP', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.81, 6.38, 6.15, 4.76, 3.85, 1.29, 1.07, 13.53, 4.94, 4.82, 3.76, 2.09, 6.77, 5.08, 1.73, 1.12, 5.41, 4.85, 2.55, 1.04, 4.45, 2.85, 1.05, 1.52, 1.12],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['EA', 'ATVI', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'SOHU', 'YY', 'XNET', 'CMCM', 'MOBI'],
			"weight":[22.11, 21.74, 11.87, 7.55, 3.91, 0.71, 19.41, 2.31, 1.97, 1.6, 1.5, 0.89, 0.87, 0.84, 0.83, 0.68, 0.63, 0.59],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'YOKU', 'NFLX', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'TUBE', 'CNVR', 'FUEL', 'MM', 'XNET', 'YHOO', 'FENG', 'AKAM'],
			"weight":[23.86, 14.38, 11.62, 5.31, 4.89, 2.38, 1.45, 1.05, 0.82, 3.75, 2.6, 2.14, 1.81, 1.21, 1.16, 9.96, 1.49, 10.12],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'SKYW', 'RJET', 'JBLU', 'HA', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'CLDT', 'PEB', 'HT', 'LHO', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.93, 10.14, 8.64, 5.15, 3.56, 2.24, 1.24, 1.22, 1.22, 1.17, 7.41, 4.94, 3.56, 2.15, 1.14, 1.05, 0.98, 0.98, 0.97, 0.83, 17.49, 5.78, 3.03, 2.61, 1.58],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['BIDU', 'GOOGL', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'DHX', 'ZPIN', 'Z', 'EVDY', 'TRUE', 'MWW', 'WBMD', 'RUBI', 'CRTO', 'CTCT', 'SCOR', 'FUEL', 'MKTO', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.14, 24.25, 4.38, 12.05, 4.24, 2.3, 5.41, 2.23, 1.33, 1.03, 0.99, 0.97, 0.94, 0.84, 0.81, 1.61, 1.21, 1.19, 1.19, 1.15, 1.06, 0.85, 2.37, 1.39, 1.07],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['TLT', 'PZA', 'VCLT', 'SHV', 'VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWA', 'EWW', 'EWY', 'EWN', 'TUR', 'EZA', 'IAU'],
			"weight":[8.89, 8.53, 8.41, 25.15, 8.02, 3.3, 2.71, 1.52, 1.16, 1.06, 0.93, 0.9, 0.85, 0.79, 0.69, 0.64, 0.54, 0.53, 0.44, 0.38, 0.35, 0.18, 24.05],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[15.02, 12.45, 10.01, 6.3, 5.31, 4.8, 3.27, 3.09, 2.97, 1.36, 0.77, 0.47, 18.26, 7.16, 0.92, 5.98, 0.94, 0.91],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'RIC', 'AUQ', 'IAG', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[16.9, 9.92, 5.44, 4.62, 4.08, 2.7, 2.03, 13.42, 9.61, 5.34, 4.18, 1.77, 1.72, 1.21, 7.67, 3.26, 0.43, 0.23, 4.26, 1.22],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'HRZN', 'TCAP', 'SLRC', 'MCGC', 'TCRD', 'AINV', 'FSC', 'GAIN', 'TICC', 'FDUS', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[9.69, 9.31, 6.34, 5.24, 4.46, 4.0, 3.46, 2.66, 1.99, 1.88, 1.65, 1.14, 1.05, 1.04, 1.0, 1.0, 0.95, 0.94, 18.87, 6.88, 6.7, 3.98, 3.17, 1.51, 1.09],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'IPCC', 'AXS', 'RLI', 'PRA', 'ACGL', 'RE', 'MRH', 'TPRE', 'VR', 'GLRE', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.9, 10.78, 8.93, 7.53, 6.41, 6.18, 5.02, 3.17, 2.89, 2.63, 1.07, 1.07, 1.0, 0.95, 0.92, 0.92, 5.83, 3.42, 1.73, 1.02, 0.93, 0.87, 7.18, 5.67, 0.97],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[39.17, 15.58, 6.43, 2.64, 8.31, 6.56, 4.68, 1.31, 6.57, 3.52, 2.77, 1.47, 1.0],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['AAC', 'ATRA', 'VTAE', 'PRQR', 'VWR', 'CIVI', 'CALA', 'TKAI', 'OTIC', 'RWLK', 'DPLO', 'PLAY', 'SFS', 'W', 'GWB', 'OMAM', 'CFG', 'MDLY', 'CYBR', 'HUBS', 'YDLE', 'TVPT', 'ATTO', 'FMSA', 'VSLR'],
			"weight":[4.88, 4.81, 4.77, 4.58, 4.32, 3.99, 3.62, 3.5, 3.49, 3.3, 4.77, 4.19, 4.0, 3.52, 4.28, 3.92, 3.83, 3.72, 4.77, 3.9, 3.14, 4.22, 3.72, 3.89, 2.89],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'VMI', 'RS', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[26.67, 13.78, 12.29, 14.65, 14.46, 7.36, 3.77, 0.92, 5.04, 1.04],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[21.24, 6.92, 6.67, 5.12, 3.61, 3.54, 3.44, 1.97, 30.62, 11.76, 3.43, 1.68],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'DXCM', 'TRIB', 'LMNX', 'BRLI', 'RDNT', 'MYGN', 'NEO', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'PODD', 'EXAS', 'SPNC', 'CSII', 'ELGX', 'CHE', 'ENSG', 'AMED', 'AFAM'],
			"weight":[21.12, 13.38, 9.52, 6.65, 2.85, 2.82, 2.43, 1.29, 1.21, 1.2, 1.1, 0.99, 0.74, 8.15, 6.04, 3.35, 1.21, 1.15, 1.1, 0.98, 0.9, 7.2, 2.45, 1.21, 0.97],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['CSX', 'UNP', 'GD', 'FDX', 'NOC', 'LMT', 'RTN', 'HON', 'UPS', 'GE', 'BA', 'UTX', 'GS', 'BRK.B', 'MS', 'BAC', 'JPM', 'WFC', 'AFL', 'OUBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.68, 4.48, 4.46, 4.42, 4.25, 4.21, 3.98, 3.87, 3.76, 3.65, 3.64, 3.51, 4.3, 4.19, 4.16, 4.11, 3.94, 3.87, 3.57, 3.19, 4.4, 4.32, 4.03, 3.57, 3.45],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'AMED', 'BIOS'],
			"weight":[22.83, 17.38, 13.08, 11.28, 26.76, 6.12, 1.55, 1.01],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'AGZ', 'SHM', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[15.99, 9.45, 2.13, 2.12, 2.03, 23.11, 3.24, 2.83, 2.11, 2.07, 1.88, 1.44, 1.43, 0.63, 0.54, 0.35, 6.67, 5.18, 2.6, 6.47, 5.88, 1.87],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.39, 9.07, 2.04, 2.03, 1.94, 23.13, 3.91, 3.42, 2.55, 2.5, 2.28, 1.74, 1.72, 0.77, 0.66, 0.43, 8.08, 6.28, 3.15, 6.76, 2.15],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'BNDX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[13.26, 7.72, 1.74, 1.73, 1.65, 4.48, 3.92, 2.93, 2.87, 2.61, 1.99, 1.98, 0.89, 0.75, 0.5, 20.66, 9.27, 7.21, 3.61, 7.75, 2.47],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.96, 4.35, 3.25, 3.18, 2.89, 2.21, 2.19, 0.97, 0.83, 0.54, 11.65, 6.59, 1.49, 1.47, 1.4, 10.27, 7.97, 4.0, 18.45, 8.59, 2.73],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.41, 4.74, 3.54, 3.47, 3.15, 2.41, 2.39, 1.07, 0.9, 0.59, 11.18, 8.68, 4.36, 9.94, 5.61, 1.27, 1.25, 1.2, 16.52, 9.35, 2.97],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.8, 5.08, 3.8, 3.72, 3.38, 2.59, 2.56, 1.14, 0.97, 0.63, 12.0, 9.32, 4.67, 8.45, 4.78, 1.08, 1.07, 1.02, 14.73, 10.03, 3.19],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.16, 5.4, 4.03, 3.95, 3.59, 2.74, 2.72, 1.21, 1.03, 0.67, 12.74, 9.89, 4.96, 7.13, 4.04, 0.91, 0.9, 0.86, 0.0, 13.05, 10.65, 3.38],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VHT', 'VCR', 'VIS', 'VDC', 'VDE', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[6.48, 5.68, 4.24, 4.16, 3.78, 2.89, 2.86, 1.27, 1.08, 0.71, 13.41, 10.42, 5.22, 5.96, 3.37, 0.76, 0.75, 0.72, 0.0, 11.44, 11.21, 3.57],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'TR', 'LANC', 'FLO', 'HAIN', 'POST', 'LNCE', 'BGS', 'BDBD', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.01, 15.92, 9.74, 6.22, 3.7, 3.11, 1.89, 1.53, 1.52, 1.13, 1.05, 0.81, 8.31, 4.07, 1.54, 1.27, 1.19, 8.17, 0.91, 5.06, 1.44, 1.44, 0.99],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'GPN', 'UEPS'],
			"weight":[23.63, 19.19, 9.5, 18.96, 5.63, 0.88, 0.72, 10.48, 1.85, 0.8, 2.49, 2.01, 1.77, 1.08, 0.99],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'QGEN', 'NVDQ', 'ARAY', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'TXT', 'COL', 'ESLT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[11.57, 9.66, 3.28, 2.18, 1.6, 1.44, 1.1, 0.9, 18.87, 1.52, 0.96, 0.91, 0.82, 6.83, 4.9, 4.25, 2.52, 1.18, 1.03, 0.99, 0.85, 6.99, 4.59, 0.9, 10.15],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'AFAM', 'BIOS', 'HUM', 'UAM', 'THOR', 'ABMD', 'SPNC', 'VASC', 'ELGX', 'WMGI', 'NUVA', 'GMED', 'OFIX'],
			"weight":[17.81, 4.09, 2.77, 1.96, 19.44, 0.96, 13.38, 1.5, 0.88, 4.46, 3.66, 1.9, 0.94, 0.92, 9.6, 1.02, 3.67, 1.35, 1.07, 1.03, 0.91, 3.51, 1.17, 1.17, 0.83],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'STZ', 'RAI', 'BUD', 'BF.B', 'LO', 'YUM', 'PM', 'BTI', 'MCD', 'DEO', 'DISH', 'CHTR', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'LVS', 'WYNN', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.68, 4.41, 4.29, 4.12, 4.06, 4.01, 3.89, 3.84, 3.8, 3.76, 3.66, 5.13, 4.59, 4.25, 4.06, 3.63, 3.48, 3.26, 3.25, 2.94, 4.66, 4.5, 5.46, 3.76, 2.52],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'MHR', 'SGY', 'REXX', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'MTDR', 'XCO', 'FST', 'GDP', 'CRK', 'ROSE', 'SFY', 'SM'],
			"weight":[17.65, 13.48, 10.43, 4.53, 4.1, 3.78, 2.36, 1.21, 0.91, 0.75, 0.66, 0.64, 14.1, 0.61, 13.87, 4.09, 0.74, 0.98, 0.96, 0.75, 0.56, 0.55, 0.89, 0.71, 0.68],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'RSPP', 'LPI', 'FANG', 'CWEI', 'AXAS', 'AREX', 'CPE', 'EPE', 'PVA', 'CRZO', 'SN', 'BCEI', 'PDCE', 'ECR'],
			"weight":[26.25, 8.18, 5.62, 5.23, 3.23, 1.28, 0.84, 0.45, 17.2, 7.46, 1.5, 1.47, 1.19, 1.07, 1.02, 0.94, 0.88, 4.48, 1.5, 1.21, 0.73, 4.12, 3.14, 1.0],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'TXRH', 'CORE', 'MNRO', 'MWIV', 'GCO', 'CHDN', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.61, 5.37, 5.36, 5.16, 5.12, 4.54, 4.49, 3.34, 3.21, 1.38, 0.94, 6.71, 5.22, 4.45, 3.71, 3.41, 1.62, 5.37, 4.3, 2.89, 2.7, 3.52, 3.26, 3.45, 2.88],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[40.21, 13.76, 11.88, 13.49, 7.4, 0.93, 5.57, 4.66, 2.1],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['NKE', 'COST', 'PG', 'KO', 'JNJ', 'CL', 'INTC', 'AAPL', 'MSFT', 'ADP', 'GOOGL', 'IBM', 'BMY', 'MDT', 'LLY', 'PFE', 'MRK', 'MMM', 'ITW', 'WFC'],
			"weight":[5.75, 5.36, 4.98, 4.89, 4.67, 4.52, 5.92, 5.74, 5.3, 4.82, 4.45, 3.94, 5.52, 5.17, 5.08, 4.62, 4.6, 4.99, 4.94, 4.74],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'UNTD', 'YOKU', 'RENN', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[27.06, 21.55, 13.27, 5.51, 1.69, 1.49, 1.44, 0.96, 12.88, 1.96, 7.54, 1.87, 1.42, 1.37],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'CALD', 'SQI', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'QTWO', 'VEEV', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[23.94, 11.53, 7.98, 7.37, 7.01, 4.35, 3.73, 1.77, 1.53, 1.0, 0.76, 5.38, 3.26, 2.65, 2.44, 2.16, 0.95, 0.84, 3.19, 0.98, 1.66, 1.54, 1.99, 0.92, 1.06],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['NX', 'BWC', 'WBC', 'XYL', 'CLW', 'RYAM', 'TMST', 'HSNI', 'DPS', 'SBH', 'WWAV', 'AMCX', 'NSAM', 'RSE', 'WPG', 'SAIC', 'JBT', 'NAME', 'TPUB', 'TIME', 'OUT', 'PSX', 'DNOW', 'PGN', 'TBPH'],
			"weight":[4.61, 4.44, 4.3, 4.25, 3.86, 3.22, 3.2, 4.98, 4.93, 4.66, 4.2, 4.08, 4.43, 4.41, 3.84, 4.56, 4.47, 3.07, 4.43, 4.2, 3.4, 3.79, 3.75, 2.51, 2.39],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'ERIE', 'FFIN', 'AON', 'IBM', 'TDY', 'SIAL', 'BCPC', 'FDS', 'USTR', 'FTI'],
			"weight":[5.22, 4.77, 4.01, 3.87, 2.78, 1.96, 9.13, 5.15, 3.63, 2.83, 5.63, 3.84, 3.59, 2.51, 1.65, 5.24, 4.63, 0.93, 6.9, 3.63, 7.9, 1.13, 4.99, 3.0, 1.06],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'SWKS', 'QCOM', 'ARMH', 'SYNA', 'SIMG', 'NVDA', 'MXIM', 'FCS', 'ATML', 'STM', 'SIMO', 'CRUS', 'HIMX', 'INVN', 'AAPL', 'MSFT', 'BBRY', 'MU', 'SNDK', 'LPL'],
			"weight":[14.45, 8.96, 8.41, 4.13, 1.16, 1.05, 0.98, 0.88, 0.87, 0.84, 0.84, 0.78, 0.73, 0.71, 0.6, 27.4, 0.99, 0.95, 14.94, 9.44, 0.89],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'AAL', 'LUV', 'RYAAY', 'UAL', 'ALK', 'LFL', 'SAVE', 'CPA', 'JBLU', 'HA', 'RJET', 'SKYW', 'AVH', 'GOL', 'VLRS', 'AL', 'AER', 'AYR', 'AAWW', 'FLY', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.64, 11.58, 10.7, 9.59, 8.61, 4.85, 4.19, 3.41, 2.93, 2.05, 1.14, 1.11, 0.97, 0.89, 0.83, 0.83, 4.55, 4.23, 1.11, 1.11, 0.86, 0.8, 5.4, 2.57, 1.05],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ACT', 'JAZZ', 'ICLR', 'IR', 'ETN', 'TRIB', 'IHG', 'AZN', 'GSK', 'GWPH', 'ARMH', 'RDC', 'CMPR', 'TRNX', 'ENL', 'QGEN', 'STM', 'LOGI', 'TEL', 'PNR', 'HELE', 'G', 'IMOS', 'FDP', 'SIMO'],
			"weight":[4.69, 4.23, 4.15, 4.05, 3.9, 3.26, 4.32, 3.97, 3.82, 3.54, 3.53, 3.21, 5.52, 4.99, 4.13, 3.94, 3.52, 4.0, 4.0, 3.88, 4.36, 3.88, 3.37, 4.28, 3.46],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['RP', 'WAGE', 'ELLI', 'LOGM', 'CTCT', 'CVT', 'FLTX', 'SPSC', 'DWRE', 'LPSN', 'MKTO', 'SAAS', 'PGI', 'TXTR', 'IMPV', 'QLYS', 'RDWR', 'AVG', 'PFPT', 'MSTR', 'NICE', 'LXFT', 'PRO', 'CVLT', 'DWCH'],
			"weight":[4.78, 4.76, 4.38, 4.28, 4.08, 4.07, 4.02, 3.92, 3.83, 3.66, 3.64, 3.18, 3.05, 3.0, 5.18, 5.12, 4.36, 4.1, 3.93, 4.51, 4.41, 4.08, 3.84, 3.16, 2.67],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'DLPH', 'MGA', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'VC', 'ALV', 'THRM', 'BWA', 'AXL', 'FDML', 'SHLO', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[26.58, 13.02, 11.61, 9.96, 4.77, 2.85, 5.56, 5.18, 1.6, 0.86, 0.53, 3.98, 1.92, 1.06, 0.95, 0.92, 1.9, 1.12, 0.92, 0.91, 0.86, 1.2, 0.82, 0.9],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'GS', 'MS', 'AIG', 'MET', 'BK', 'STT'],
			"weight":[13.34, 9.82, 9.0, 6.17, 18.28, 5.44, 2.97, 2.43, 1.7, 1.37, 1.2, 0.83, 0.82, 6.16, 4.37, 6.66, 3.78, 3.17, 2.47],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'R', 'KNX', 'ODFL', 'HTLD', 'WERN', 'JBHT', 'CHRW', 'LSTR', 'QLTY', 'EXPD', 'FWRD'],
			"weight":[20.33, 12.88, 6.1, 5.04, 3.63, 0.99, 4.8, 4.52, 3.7, 2.41, 2.21, 1.2, 0.91, 15.69, 1.29, 1.15, 1.05, 1.03, 0.96, 0.95, 3.35, 2.23, 0.74, 1.6, 1.23],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'ABG', 'SAH', 'LAD', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[19.4, 17.97, 14.68, 9.89, 6.99, 0.86, 10.12, 5.83, 2.61, 1.05, 0.88, 0.84, 2.5, 1.57, 0.83, 2.91, 1.07],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['TLT', 'TLH', 'IEF', 'SCHR', 'BSV'],
			"weight":[13.05, 12.64, 24.98, 24.76, 24.57],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['XEL', 'PCG', 'UTL', 'NEE', 'MGEE', 'IDA', 'AEE', 'EIX', 'PNW', 'EDE', 'POR', 'GXP', 'T', 'VZ', 'S', 'SHEN', 'TDS', 'SRE', 'OGS', 'CPK', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[9.37, 7.24, 6.07, 3.22, 2.74, 2.73, 2.1, 2.08, 1.65, 1.11, 1.06, 0.97, 17.58, 17.12, 1.95, 1.07, 0.87, 6.6, 1.03, 1.01, 4.87, 4.26, 1.15, 1.09, 1.08],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'LB', 'IFF', 'SBH', 'AVP', 'REV', 'NUS', 'IPAR', 'RDEN', 'AGN', 'ZLTQ', 'ALGN', 'USNA', 'VRX', 'CYNO', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.53, 14.45, 6.04, 4.56, 4.06, 2.56, 2.38, 2.01, 1.6, 0.98, 0.91, 0.82, 0.62, 15.75, 1.5, 1.42, 1.4, 1.24, 1.17, 0.49, 0.14, 5.01, 3.65, 1.04, 0.67],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'OUBS', 'DB', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'PJC', 'COWN', 'RJF', 'EVR', 'LTS', 'GHL', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.79, 11.4, 9.4, 7.75, 6.65, 4.79, 4.28, 3.93, 3.65, 3.24, 1.8, 1.52, 1.04, 2.85, 1.42, 1.06, 1.03, 1.02, 1.02, 0.95, 0.91, 0.87, 2.92, 1.73, 1.0],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'FELE', 'RXN', 'GRC', 'NES', 'WMS', 'MWA', 'IEX', 'LAYN', 'NWPX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'TTC', 'VMI', 'CWCO', 'PICO'],
			"weight":[12.11, 4.37, 3.97, 3.85, 1.88, 1.24, 1.22, 1.01, 0.95, 0.94, 11.96, 8.06, 7.75, 2.28, 9.98, 7.51, 5.87, 2.0, 0.99, 0.97, 7.22, 1.08, 1.0, 0.95, 0.85],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'AAPL', 'GRMN', 'GOOGL', 'TXN', 'ARMH', 'MXIM', 'MCHP', 'SLAB', 'STM', 'SMTC', 'ADI', 'SYNA', 'INVN', 'CY', 'HIMX', 'KN', 'BRCM', 'QCOM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[15.19, 13.48, 13.15, 11.06, 3.28, 3.11, 2.81, 2.73, 2.5, 1.73, 1.39, 3.58, 2.33, 2.21, 2.13, 1.7, 0.8, 3.58, 3.47, 3.3, 1.42, 1.24, 0.95, 1.49, 1.35],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'HIBB', 'FINL', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'BC', 'CODI', 'SNOW', 'MBUU', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[23.16, 15.72, 9.05, 7.33, 5.33, 2.35, 1.72, 1.67, 1.06, 1.03, 1.0, 0.99, 12.06, 6.61, 0.87, 1.39, 0.97, 0.84, 0.81, 0.81, 0.8, 0.73, 2.08, 0.97, 0.65],
			"name":"World of Sports"};
		db["ETFs"]={
			"quotes":["VTI","IVV","DIA","SPLV","IWB","VXUS","YCS","TECL","ERX","SYLD","UDOW","SOXL","CURE","XIV","MLPL","ZIV","DGZ","MMP","UPRO"],
			"weight":[6.30,6.10,6.00,6.00,5.80,5.20,5.10,4.97,4.96,4.90,4.90,4.80,4.80,4.80,4.80,4.70,4.70,6.00,5.17],
			"name":"ETFs"};
	}
	return db[motif];}
