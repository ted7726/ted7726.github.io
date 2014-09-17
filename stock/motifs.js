function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'CWEI', 'FANG', 'RSPP', 'AREX', 'CPE', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[22.830000000000002, 8.15, 6.23, 5.45, 4.16, 1.49, 1.01, 0.95, 15.370000000000001, 6.65, 3.55, 1.55, 1.02, 1.01, 1.0, 0.9900000000000001, 0.97, 0.9400000000000001, 4.84, 3.1199999999999997, 3.85, 1.8900000000000001, 1.02, 0.96, 1.01],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'CAM', 'RES', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[16.57, 8.27, 5.72, 5.18, 5.050000000000001, 4.77, 4.569999999999999, 2.4299999999999997, 1.16, 0.8699999999999999, 0.69, 0.59, 10.73, 6.510000000000001, 2.08, 1.0, 0.9199999999999999, 7.539999999999999, 2.82, 2.5, 1.01, 0.84, 4.05, 3.2300000000000004, 0.9299999999999999],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'SLCA', 'AA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'Z', 'AKRX'],
			"weight":[7.84, 5.1499999999999995, 4.55, 2.79, 1.87, 4.859999999999999, 3.5700000000000003, 3.44, 2.9000000000000004, 2.68, 6.959999999999999, 4.88, 2.98, 2.29, 6.4399999999999995, 5.99, 2.4299999999999997, 5.609999999999999, 3.19, 3.4000000000000004, 3.17, 4.45, 1.9900000000000002, 3.35, 3.2099999999999995],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[24.62, 21.12, 19.75, 13.69, 10.13, 6.02, 3.29, 1.37],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[17.740000000000002, 11.82, 10.07, 8.01, 6.370000000000001, 4.6899999999999995, 4.45, 4.21, 4.2, 3.71, 3.16, 2.82, 2.44, 2.3, 1.8499999999999999, 1.3299999999999998, 1.3, 1.23, 1.08, 0.98, 1.63, 1.4500000000000002, 0.7100000000000001, 1.46, 0.98],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[25.25, 13.83, 12.83, 11.05, 9.54, 2.53, 2.2399999999999998, 1.67, 1.55, 1.4200000000000002, 1.3599999999999999, 6.18, 1.76, 4.569999999999999, 3.08, 1.13],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[29.68, 21.709999999999997, 18.93, 17.19, 12.49],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[20.06, 19.48, 17.47, 23.119999999999997, 19.869999999999997],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[24.68, 19.88, 33.76, 21.68],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.05, 12.8, 9.19, 4.62, 4.08, 3.61, 2.41, 1.05, 1.04, 1.01, 0.9900000000000001, 0.95, 13.930000000000001, 0.8699999999999999, 14.149999999999999, 4.25, 0.97, 1.08, 1.05, 1.02, 0.96, 0.9199999999999999, 1.03, 1.0, 0.9900000000000001],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.0, 5.96, 5.57, 4.95, 3.18, 1.37, 0.97, 14.57, 4.8, 2.23, 1.72, 1.18, 1.0, 7.76, 4.760000000000001, 3.51, 1.4500000000000002, 5.800000000000001, 2.55, 1.0, 2.3800000000000003, 1.49, 1.6099999999999999, 1.25, 0.9299999999999999],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'SGEN', 'IMGN', 'CRIS', 'GILD', 'CBST', 'EBS', 'ALXN', 'REGN', 'VRTX', 'UTHR', 'MDCO', 'LGND', 'ACOR', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[17.18, 11.219999999999999, 0.97, 0.97, 0.9199999999999999, 19.48, 2.4, 0.9199999999999999, 4.2700000000000005, 4.19, 3.63, 2.1, 1.02, 1.0, 0.9400000000000001, 9.19, 3.4299999999999997, 2.4899999999999998, 0.88, 4.54, 2.77, 2.44, 1.0999999999999999, 0.98, 0.95],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.810000000000002, 20.01, 14.42, 6.49, 1.59, 1.43, 1.4000000000000001, 0.9400000000000001, 15.479999999999999, 2.27, 7.9399999999999995, 1.48, 1.38, 1.37],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[19.71, 19.11, 14.12, 2.91, 1.43, 18.990000000000002, 14.85, 5.01, 3.8699999999999997],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'WLK', 'NEU', 'HUN', 'MEOH', 'EMN', 'GRA', 'CE', 'POL', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'ALJ', 'DK', 'CVI', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[13.600000000000001, 12.83, 7.470000000000001, 3.1300000000000003, 3.1300000000000003, 1.0699999999999998, 1.05, 1.04, 1.02, 1.01, 0.98, 0.97, 9.31, 6.660000000000001, 6.45, 3.1399999999999997, 2.34, 1.3, 1.0, 1.0, 0.9900000000000001, 0.95, 15.7, 2.93, 0.91],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'WBMD', 'ZPIN', 'MWW', 'EVDY', 'DHX', 'TRUE', 'RUBI', 'MKTO', 'FUEL', 'SCOR', 'CTCT', 'CRTO', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.259999999999998, 21.48, 5.06, 11.790000000000001, 5.27, 2.91, 7.08, 2.4299999999999997, 1.11, 1.01, 1.01, 1.0, 0.9900000000000001, 0.9900000000000001, 0.9299999999999999, 1.15, 1.05, 1.04, 1.03, 1.02, 1.01, 0.96, 2.35, 1.05, 1.01],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'HSP', 'TARO', 'RDY', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[21.37, 19.900000000000002, 18.22, 10.03, 9.89, 9.719999999999999, 4.3, 2.52, 2.31, 1.76],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.76, 6.15, 6.140000000000001, 4.61, 3.7600000000000002, 1.4000000000000001, 1.02, 13.209999999999999, 4.81, 4.760000000000001, 3.5900000000000003, 1.8900000000000001, 7.489999999999999, 6.3100000000000005, 1.7399999999999998, 1.05, 5.27, 4.71, 2.5, 1.01, 4.22, 3.06, 1.01, 1.43, 1.11],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[23.830000000000002, 19.75, 10.870000000000001, 6.68, 4.75, 1.04, 17.560000000000002, 2.9499999999999997, 2.22, 1.83, 1.5699999999999998, 1.1199999999999999, 1.04, 1.01, 0.98, 0.9400000000000001, 0.9299999999999999, 0.9299999999999999],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'OKS', 'WES', 'TCP', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'ENLK', 'EPB', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[7.000000000000001, 6.7, 6.2, 5.66, 5.4, 4.55, 4.47, 4.08, 3.8899999999999997, 3.66, 3.45, 3.2099999999999995, 3.15, 2.96, 2.92, 2.85, 2.71, 2.6, 2.33, 2.16, 4.71, 4.68, 4.35, 4.15, 2.16],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'EPZM', 'SNSS', 'TSRO', 'PGNX', 'DYAX', 'THLD', 'MGNX', 'IMMU', 'NLNK', 'VSTM', 'CRIS', 'CLDX', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[24.64, 6.6000000000000005, 5.84, 4.58, 1.54, 25.259999999999998, 2.83, 2.35, 1.8599999999999999, 1.68, 1.66, 1.59, 1.4200000000000002, 1.29, 1.16, 1.09, 1.09, 1.05, 1.03, 0.97, 0.9299999999999999, 3.44, 2.67, 2.46, 0.96],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[20.150000000000002, 16.97, 14.06, 10.07, 7.470000000000001, 0.96, 10.100000000000001, 5.970000000000001, 2.52, 1.01, 1.0, 0.89, 2.55, 1.4500000000000002, 0.83, 2.96, 1.05],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.5, 15.879999999999999, 11.82, 14.91, 13.8, 7.04, 4.09, 1.06, 4.859999999999999, 1.03],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'RL', 'VFC', 'NKE', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[6.569999999999999, 5.33, 4.9799999999999995, 4.79, 4.44, 3.25, 2.4, 2.3, 1.81, 5.91, 5.65, 4.22, 3.6999999999999997, 3.63, 2.35, 1.44, 12.08, 5.81, 5.29, 1.27, 4.68, 1.8599999999999999, 1.46, 2.74, 2.06],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['EDE', 'AWK', 'DUK', 'ED', 'LG', 'XEL', 'CMS', 'DTE', 'SO', 'NWN', 'PPL', 'D', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'GIS', 'WMT', 'KMB', 'K', 'MCD', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[4.18, 4.109999999999999, 4.09, 4.09, 4.08, 4.03, 4.01, 3.9800000000000004, 3.9699999999999998, 3.9, 3.9, 3.8899999999999997, 3.85, 4.390000000000001, 4.24, 4.1000000000000005, 4.07, 3.91, 3.9, 3.7900000000000005, 3.73, 3.5900000000000003, 4.31, 4.09, 3.7800000000000002],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'MXIM', 'ATML', 'CRUS', 'SIMG', 'NVDA', 'INVN', 'HIMX', 'STM', 'FCS', 'SIMO', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.6, 9.39, 8.08, 4.7, 1.5599999999999998, 0.9900000000000001, 0.9900000000000001, 0.97, 0.97, 0.97, 0.97, 0.96, 0.95, 0.9400000000000001, 0.9199999999999999, 24.86, 1.0699999999999998, 1.03, 14.35, 9.700000000000001, 1.03],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.37, 8.959999999999999, 6.1, 5.46, 4.43, 2.97, 2.09, 14.78, 8.68, 5.17, 3.62, 1.46, 1.44, 1.03, 6.6000000000000005, 3.09, 0.5599999999999999, 0.29, 4.6, 1.29],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'PODD', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[22.86, 14.89, 9.8, 5.609999999999999, 3.52, 2.65, 2.4, 1.4500000000000002, 1.43, 1.37, 1.09, 0.8999999999999999, 0.75, 6.329999999999999, 6.01, 2.67, 1.01, 1.0, 0.96, 0.96, 0.9199999999999999, 7.17, 2.26, 0.9900000000000001, 0.98],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'OMC', 'CLX', 'K', 'PEP', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'D', 'OKE', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[9.959999999999999, 6.4799999999999995, 6.36, 5.71, 5.6000000000000005, 4.89, 4.72, 2.4299999999999997, 1.0, 4.51, 4.15, 4.15, 4.05, 3.37, 2.4, 2.2399999999999998, 1.03, 0.9900000000000001, 4.38, 3.27, 2.27, 5.8999999999999995, 5.84, 3.3300000000000005, 0.9900000000000001],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[17.51, 13.59, 12.19, 4.38, 3.64, 1.7000000000000002, 1.23, 0.8099999999999999, 11.5, 6.72, 4.4799999999999995, 0.8999999999999999, 21.34],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'DNKN', 'DPZ', 'TAST', 'SONC', 'WEN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'FRSH', 'KRFT', 'TR', 'DMND', 'UL'],
			"weight":[20.669999999999998, 19.950000000000003, 3.16, 2.11, 17.27, 4.38, 1.66, 1.08, 1.06, 1.06, 1.04, 1.04, 1.03, 0.9400000000000001, 0.9400000000000001, 0.9299999999999999, 0.77, 11.25, 3.85, 1.03, 0.9900000000000001, 0.9900000000000001, 0.98, 0.8500000000000001, 0.98],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BIG', 'BURL', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'CHS', 'BID', 'MOV', 'TFM'],
			"weight":[24.89, 8.03, 6.23, 5.970000000000001, 2.5, 1.26, 1.13, 1.0699999999999998, 1.03, 1.0, 0.97, 0.9199999999999999, 12.25, 7.85, 5.67, 4.83, 3.92, 2.02, 1.68, 1.5, 1.31, 1.03, 0.98, 0.98, 0.97],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'MXIM', 'TXN', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[5.41, 5.28, 5.140000000000001, 3.53, 3.36, 2.94, 5.28, 4.130000000000001, 4.04, 3.62, 2.98, 2.7199999999999998, 5.510000000000001, 4.96, 3.02, 3.0, 2.0500000000000003, 6.87, 3.9600000000000004, 5.1499999999999995, 1.59, 0.9900000000000001, 5.89, 5.18, 3.37],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'PIR', 'KIRK', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[31.669999999999998, 27.92, 3.39, 3.15, 7.01, 5.24, 3.73, 1.76, 1.67, 1.4500000000000002, 1.3299999999999998, 4.82, 3.04, 0.64, 3.18],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'MRK', 'PFE', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[12.11, 9.879999999999999, 10.040000000000001, 9.98, 9.8, 9.68, 10.27, 9.1, 9.76, 9.370000000000001],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'TUES', 'DSW', 'CATO', 'CTRN', 'DLTR', 'DG', 'BIG', 'FIVE', 'SVU', 'FRED', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[16.64, 11.37, 1.06, 0.91, 21.26, 0.9900000000000001, 14.38, 3.3000000000000003, 1.03, 1.02, 1.01, 0.96, 6.419999999999999, 5.88, 1.02, 1.02, 1.01, 1.0, 3.9, 1.68, 1.3, 1.0, 1.0, 0.84],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[19.400000000000002, 5.17, 4.109999999999999, 3.71, 3.47, 2.7199999999999998, 1.95, 1.34, 0.95, 0.9299999999999999, 11.110000000000001, 7.199999999999999, 4.21, 3.6999999999999997, 1.8800000000000001, 1.01, 0.91, 10.92, 1.5, 0.91, 6.0600000000000005, 2.01, 1.81, 1.54, 1.48],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[21.27, 19.1, 15.09, 12.98, 4.43, 14.979999999999999, 7.2700000000000005, 4.87],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'TSL', 'HSOL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[7.180000000000001, 7.1499999999999995, 6.88, 6.18, 2.3800000000000003, 1.78, 1.44, 1.32, 0.9900000000000001, 0.98, 5.6000000000000005, 5.21, 4.34, 2.35, 0.95, 15.02, 12.5, 0.89, 2.36, 1.9300000000000002, 1.43, 0.96, 5.67, 3.45, 1.06],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'LITB', 'NILE', 'EHTH', 'SFLY', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[20.24, 5.5, 1.0699999999999998, 1.06, 1.05, 1.01, 1.0, 0.91, 22.470000000000002, 2.6599999999999997, 2.48, 1.01, 1.0, 16.24, 6.09, 2.54, 0.98, 0.89, 3.15, 1.47, 1.1400000000000001, 1.03, 1.03, 0.8699999999999999, 3.11],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[23.200000000000003, 17.87, 12.85, 11.379999999999999, 26.3, 5.87, 1.28, 1.24],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.239999999999999, 5.510000000000001, 4.01, 3.9899999999999998, 3.61, 3.18, 2.73, 1.28, 1.04, 0.7100000000000001, 14.14, 10.84, 5.48, 11.35, 5.609999999999999, 3.3099999999999996, 0.76, 0.75, 0.74, 0.0, 10.59, 4.130000000000001],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'AEP', 'ETR', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[8.01, 5.74, 4.97, 4.279999999999999, 4.19, 4.16, 3.39, 3.1300000000000003, 2.8899999999999997, 2.6100000000000003, 2.4, 0.98, 5.220000000000001, 5.07, 4.9799999999999995, 4.79, 4.21, 4.14, 3.61, 2.8400000000000003, 4.5, 3.39, 4.41, 3.29, 2.79],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'K', 'CL', 'BF.B', 'GIS'],
			"weight":[7.02, 6.419999999999999, 5.0, 4.53, 4.37, 4.09, 3.74, 3.53, 3.1, 2.8400000000000003, 2.78, 2.3, 1.4500000000000002, 6.93, 6.800000000000001, 5.390000000000001, 5.08, 4.61, 4.49, 4.12, 3.1, 2.59, 2.52, 1.66, 1.55],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.94, 5.24, 3.81, 3.8, 3.44, 3.02, 2.59, 1.22, 0.9900000000000001, 0.67, 13.450000000000001, 10.299999999999999, 5.21, 6.72, 3.9600000000000004, 0.91, 0.8999999999999999, 0.88, 0.0, 12.950000000000001, 10.07, 3.92],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'IGF', 'VTIP', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[15.61, 14.52, 12.7, 6.800000000000001, 6.4799999999999995, 5.970000000000001, 5.04, 4.97, 11.690000000000001, 7.93, 2.87, 2.74, 2.69],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['VO', 'SPY', 'VBR', 'VWO', 'VEU', 'BSV', 'VTIP', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[8.649999999999999, 8.64, 8.57, 8.780000000000001, 8.21, 8.260000000000002, 8.25, 8.4, 7.68, 8.290000000000001, 8.25, 8.04],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.360000000000003, 17.68, 2.73, 0.97, 0.9299999999999999, 9.2, 7.03, 5.7, 3.1, 2.58, 2.56, 2.02, 2.01, 1.59, 1.05, 1.02, 0.9900000000000001, 6.49, 1.0, 1.0, 4.33, 4.31, 1.24, 1.08, 1.02],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'CSCO', 'GOOGL', 'QCOM', 'ORCL', 'AAPL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'GLW', 'ADI', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[18.5, 9.82, 9.790000000000001, 7.3, 5.67, 5.63, 3.51, 2.3, 2.1999999999999997, 2.09, 1.9900000000000002, 1.3299999999999998, 1.31, 1.13, 0.9400000000000001, 0.9199999999999999, 0.89, 0.88, 6.76, 5.050000000000001, 6.34, 1.03, 2.7, 0.9900000000000001, 0.9299999999999999],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.59, 4.9399999999999995, 3.5900000000000003, 3.58, 3.2399999999999998, 2.85, 2.45, 1.15, 0.9299999999999999, 0.63, 12.690000000000001, 9.719999999999999, 4.91, 7.969999999999999, 4.7, 1.08, 1.0699999999999998, 1.05, 14.64, 9.5, 3.6999999999999997],
			"name":"Retiring 2045"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.220000000000001, 4.61, 3.35, 3.34, 3.0300000000000002, 2.6599999999999997, 2.2800000000000002, 1.08, 0.8699999999999999, 0.59, 11.84, 9.07, 4.590000000000001, 9.39, 5.53, 1.27, 1.26, 1.23, 16.45, 8.870000000000001, 3.46],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.46, 5.28, 4.72, 4.1000000000000005, 3.34, 2.91, 1.87, 1.5599999999999998, 1.54, 1.26, 1.02, 13.3, 10.75, 4.2, 1.23, 1.05, 1.0, 18.61, 3.29, 9.01, 2.4699999999999998, 2.02],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'FLEX', 'CF'],
			"weight":[8.44, 8.36, 5.79, 4.88, 4.74, 3.62, 3.15, 2.4699999999999998, 2.12, 1.9800000000000002, 1.81, 1.18, 1.0999999999999999, 0.95, 7.049999999999999, 6.52, 5.41, 7.6, 4.04, 4.34, 2.3800000000000003, 2.01, 8.06, 1.01, 0.9900000000000001],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['KO', 'NKE', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'MDLZ', 'PEP', 'MNST', 'PG', 'MCD', 'LB', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[8.870000000000001, 8.81, 7.57, 6.890000000000001, 5.04, 4.1000000000000005, 3.82, 3.7199999999999998, 3.65, 3.49, 3.1, 3.08, 3.04, 2.81, 2.64, 10.82, 6.45, 4.8, 3.88, 3.4099999999999997],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[6.47, 5.75, 4.06, 3.9600000000000004, 3.8699999999999997, 3.47, 3.39, 3.01, 2.73, 2.4899999999999998, 6.49, 5.99, 5.13, 3.66, 3.56, 3.1399999999999997, 2.13, 5.27, 4.77, 4.25, 3.65, 3.37, 2.73, 3.7199999999999998, 2.92],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'JBLU', 'RJET', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'PEB', 'LHO', 'CLDT', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.780000000000001, 9.959999999999999, 8.17, 5.0, 3.5999999999999996, 2.21, 1.1199999999999999, 1.0699999999999998, 1.01, 0.9900000000000001, 7.42, 5.19, 3.45, 2.22, 1.1400000000000001, 0.97, 0.97, 0.97, 0.96, 0.96, 17.87, 5.82, 3.36, 3.18, 1.6099999999999999],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'XLS', 'VSAT', 'MRCY', 'FLIR', 'KTOS', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[24.57, 11.99, 9.34, 2.09, 0.95, 0.9199999999999999, 11.03, 3.54, 3.29, 2.1, 1.97, 1.5, 1.21, 1.16, 1.05, 1.03, 0.9199999999999999, 0.9199999999999999, 0.8200000000000001, 13.76, 2.13, 1.0699999999999998, 0.8999999999999999, 0.88, 0.8500000000000001],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['CVS', 'TJX', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'QCOM', 'JKHY', 'ORCL', 'OMC', 'CTAS', 'FDS', 'PX', 'SIAL', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[4.36, 4.32, 4.04, 3.47, 2.07, 3.9899999999999998, 3.63, 3.37, 2.45, 1.18, 6.54, 3.9699999999999998, 3.44, 5.36, 5.04, 3.53, 4.63, 4.02, 3.8699999999999997, 6.78, 5.24, 4.21, 3.2800000000000002, 4.32, 2.91],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.24, 3.08, 3.0700000000000003, 2.78, 2.44, 2.1, 0.9900000000000001, 0.8, 0.5499999999999999, 10.89, 8.34, 4.2299999999999995, 11.020000000000001, 6.5, 1.5, 1.48, 1.4500000000000002, 18.4, 8.16, 3.19],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.53, 6.87, 6.79, 4.97, 3.6999999999999997, 3.5999999999999996, 3.4799999999999995, 1.96, 30.620000000000005, 12.770000000000001, 2.9899999999999998, 1.72],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'JKHY', 'HPY', 'EVTC', 'EEFT', 'ONE', 'FLT', 'EBAY', 'QIWI', 'HAWK', 'GDOT', 'UEPS', 'WEX', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[20.03, 19.54, 13.700000000000001, 4.21, 4.21, 3.62, 2.71, 2.65, 1.03, 1.0, 1.0, 0.97, 0.9299999999999999, 0.88, 7.199999999999999, 6.41, 1.0999999999999999, 1.04, 1.01, 0.9900000000000001, 0.9900000000000001, 1.69, 1.09, 1.03, 0.9900000000000001],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'VTIP', 'IEF'],
			"weight":[31.0, 19.75, 14.42, 5.25, 14.81, 14.75],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'MR', 'HTHT', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'UGP', 'VIV', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[15.540000000000001, 9.27, 6.41, 5.27, 4.5, 4.4799999999999995, 3.35, 2.88, 2.41, 2.09, 1.3, 1.03, 1.0, 0.96, 0.9199999999999999, 4.36, 3.8899999999999997, 2.2399999999999998, 2.21, 1.58, 9.77, 1.03, 4.38, 3.6900000000000004, 5.47],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[12.91, 7.71, 1.7399999999999998, 1.73, 1.7000000000000002, 4.32, 3.81, 2.77, 2.76, 2.5, 2.1999999999999997, 1.8800000000000001, 0.89, 0.72, 0.5, 9.8, 7.51, 3.8, 20.53, 7.340000000000001, 2.86],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.949999999999999, 5.46, 5.1499999999999995, 5.0, 4.9799999999999995, 4.92, 5.11, 5.0200000000000005, 4.95, 4.8500000000000005, 4.8, 4.53, 5.2299999999999995, 5.06, 4.93, 4.87, 4.77, 4.79, 4.79, 4.82],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.21, 11.82, 10.209999999999999, 7.2700000000000005, 5.29, 4.81, 3.4099999999999997, 3.25, 2.3, 1.32, 0.67, 0.5599999999999999, 18.790000000000003, 6.510000000000001, 1.09, 6.52, 1.04, 0.9400000000000001],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[24.87, 14.69, 14.23, 4.9, 4.18, 2.27, 1.54, 1.22, 0.95, 3.54, 2.0500000000000003, 1.96, 1.6400000000000001, 1.46, 1.37, 8.0, 1.63, 9.520000000000001],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.66, 25.490000000000002, 24.45, 24.41],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['CME', 'CSBK', 'VRSK', 'IBKR', 'PG', 'COST', 'LGF', 'NVGS', 'CAH', 'KAI', 'FB', 'GNCMA', 'PFPT', 'ACT', 'ALNY', 'IT', 'CNQR'],
			"weight":[5.96, 5.91, 5.8999999999999995, 5.89, 5.9799999999999995, 5.970000000000001, 5.96, 5.949999999999999, 5.94, 5.91, 5.82, 5.62, 5.390000000000001, 6.08, 6.0, 5.89, 5.82],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'BDBD', 'CVGW', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[12.4, 10.24, 9.94, 9.24, 2.8400000000000003, 2.53, 2.02, 1.72, 1.63, 1.0, 0.9900000000000001, 15.93, 8.110000000000001, 3.02, 1.26, 0.88, 8.110000000000001, 5.37, 1.79, 0.9900000000000001],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.129999999999999, 9.049999999999999, 2.04, 2.03, 1.9900000000000002, 22.97, 3.7699999999999996, 3.3300000000000005, 2.42, 2.41, 2.18, 1.91, 1.6400000000000001, 0.7799999999999999, 0.63, 0.43, 8.540000000000001, 6.550000000000001, 3.3099999999999996, 6.4, 2.4899999999999998],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[34.43, 32.81, 32.76],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[18.990000000000002, 18.84, 13.48, 11.88, 13.73, 4.62, 1.18, 1.0699999999999998, 11.360000000000001, 2.96, 0.96, 0.91],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'IPAR', 'NUS', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.8, 15.709999999999999, 6.68, 4.19, 4.0, 2.53, 2.34, 2.26, 1.91, 1.03, 0.95, 0.9400000000000001, 0.6, 13.44, 1.44, 1.41, 1.1199999999999999, 1.03, 0.9900000000000001, 0.66, 0.5700000000000001, 5.029999999999999, 3.52, 0.9400000000000001, 0.9299999999999999],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'VASC', 'ABMD', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.470000000000002, 3.5900000000000003, 2.77, 1.71, 21.83, 0.98, 13.930000000000001, 1.1900000000000002, 1.0, 4.45, 3.39, 1.55, 1.1900000000000002, 0.96, 9.62, 1.02, 3.26, 1.02, 1.0, 0.9900000000000001, 0.98, 4.04, 1.06, 1.03, 0.96],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'CLGX', 'MANT', 'GLW', 'FEIC', 'MXIM', 'CTSH', 'FNSR', 'ALB', 'DHR', 'EMN', 'SCS', 'CIR', 'ENS', 'CRS', 'SPLS', 'CL', 'CAG', 'KRFT', 'DHI', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[4.24, 4.05, 4.02, 4.01, 3.9899999999999998, 3.9600000000000004, 3.95, 3.6999999999999997, 4.109999999999999, 4.06, 4.06, 4.02, 3.95, 3.91, 3.82, 4.46, 4.03, 4.02, 3.9899999999999998, 3.9800000000000004, 4.09, 3.91, 4.05, 3.91, 3.6999999999999997],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'IMAX', 'STRZA', 'AMCX', 'TV', 'LGF', 'DWA', 'EROS', 'MSG', 'WWE', 'ISCA'],
			"weight":[18.279999999999998, 17.84, 17.44, 12.09, 11.21, 1.9, 6.0600000000000005, 2.29, 1.01, 0.98, 0.97, 0.97, 3.63, 1.34, 0.9299999999999999, 1.04, 1.02, 1.01],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[28.51, 27.529999999999998, 16.580000000000002, 15.65, 7.21, 4.52],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[27.91, 27.61, 16.38, 15.459999999999999, 8.03, 4.61],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[29.609999999999996, 27.779999999999998, 17.39, 16.57, 4.49, 4.16],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[30.0, 29.54, 19.03, 13.239999999999998, 4.8500000000000005, 3.35],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[32.65, 25.230000000000004, 22.52, 12.520000000000001, 3.83, 3.2399999999999998],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[31.8, 26.0, 18.279999999999998, 13.370000000000001, 7.16, 3.4000000000000004],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[37.15, 35.39, 17.669999999999998, 9.790000000000001],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'DECK', 'ABV', 'NUS', 'CBD', 'ROST', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[8.91, 5.489999999999999, 4.24, 4.24, 4.2, 3.94, 3.63, 2.8899999999999997, 1.82, 8.09, 7.000000000000001, 4.81, 3.74, 6.93, 5.65, 4.41, 1.13, 9.030000000000001, 5.2299999999999995, 4.590000000000001],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'LF', 'JAKK', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'FL', 'BWS', 'CROX', 'BFAM', 'CRCM'],
			"weight":[16.68, 12.13, 16.06, 5.74, 2.98, 1.5, 1.28, 0.9900000000000001, 7.539999999999999, 5.66, 0.98, 0.96, 12.91, 1.0, 4.109999999999999, 1.67, 1.03, 0.9900000000000001, 1.02, 0.98, 0.8999999999999999, 1.92, 0.97],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'ARAY', 'QGEN', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.44, 9.9, 3.27, 2.11, 1.55, 1.3599999999999999, 0.9400000000000001, 0.9299999999999999, 17.990000000000002, 2.09, 0.9900000000000001, 0.98, 0.88, 6.77, 4.77, 4.54, 2.44, 1.1400000000000001, 0.9299999999999999, 0.9199999999999999, 0.8999999999999999, 7.6, 4.54, 1.1400000000000001, 8.9],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.68, 14.08, 5.66, 5.47, 3.7199999999999998, 1.03, 4.53, 4.43, 3.64, 2.34, 2.03, 1.0999999999999999, 0.72, 15.770000000000001, 3.39, 2.22, 0.9199999999999999, 1.39, 1.05, 1.03, 1.0, 0.96, 0.8999999999999999, 1.6400000000000001, 1.32],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.64, 5.21, 5.19, 4.87, 4.859999999999999, 4.82, 4.77, 3.2399999999999998, 2.63, 1.27, 0.98, 6.45, 4.61, 4.41, 3.82, 3.25, 1.6199999999999999, 5.4399999999999995, 4.72, 3.2300000000000004, 2.6, 3.5700000000000003, 3.39, 4.55, 2.87],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[21.95, 19.8, 18.759999999999998, 18.42, 21.07],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'SNOW', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.05, 15.379999999999999, 9.47, 8.15, 4.99, 2.2800000000000002, 2.04, 1.66, 1.17, 1.06, 1.02, 0.96, 12.959999999999999, 6.58, 0.98, 1.3599999999999999, 0.97, 0.96, 0.9199999999999999, 0.89, 0.88, 0.67, 2.09, 0.8200000000000001, 0.69],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[25.66, 25.490000000000002, 24.45, 24.41],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[18.0, 5.96, 5.57, 4.95, 3.18, 1.37, 0.97, 14.57, 4.8, 2.23, 1.72, 1.18, 1.0, 7.76, 4.760000000000001, 3.51, 1.4500000000000002, 5.800000000000001, 2.55, 1.0, 2.3800000000000003, 1.49, 1.6099999999999999, 1.25, 0.9299999999999999],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[5.46, 5.28, 4.72, 4.1000000000000005, 3.34, 2.91, 1.87, 1.5599999999999998, 1.54, 1.26, 1.02, 13.3, 10.75, 4.2, 1.23, 1.05, 1.0, 18.61, 3.29, 9.01, 2.4699999999999998, 2.02],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'LPNT', 'HCA', 'SEM', 'THC', 'CYH', 'HLS', 'SCAI', 'KND', 'CERN', 'QSII', 'CPSI', 'ATHN', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[7.779999999999999, 5.82, 5.72, 3.1199999999999997, 3.09, 1.2, 1.0, 0.9900000000000001, 0.98, 15.620000000000001, 2.29, 2.15, 2.13, 0.95, 19.900000000000002, 1.5599999999999998, 6.3, 2.93, 2.3800000000000003, 1.3, 5.71, 4.15, 0.96, 0.9900000000000001, 0.97],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[7.76, 6.15, 6.140000000000001, 4.61, 3.7600000000000002, 1.4000000000000001, 1.02, 13.209999999999999, 4.81, 4.760000000000001, 3.5900000000000003, 1.8900000000000001, 7.489999999999999, 6.3100000000000005, 1.7399999999999998, 1.05, 5.27, 4.71, 2.5, 1.01, 4.22, 3.06, 1.01, 1.43, 1.11],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[23.830000000000002, 19.75, 10.870000000000001, 6.68, 4.75, 1.04, 17.560000000000002, 2.9499999999999997, 2.22, 1.83, 1.5699999999999998, 1.1199999999999999, 1.04, 1.01, 0.98, 0.9400000000000001, 0.9299999999999999, 0.9299999999999999],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[24.87, 14.69, 14.23, 4.9, 4.18, 2.27, 1.54, 1.22, 0.95, 3.54, 2.0500000000000003, 1.96, 1.6400000000000001, 1.46, 1.37, 8.0, 1.63, 9.520000000000001],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'JBLU', 'RJET', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'PEB', 'LHO', 'CLDT', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[10.780000000000001, 9.959999999999999, 8.17, 5.0, 3.5999999999999996, 2.21, 1.1199999999999999, 1.0699999999999998, 1.01, 0.9900000000000001, 7.42, 5.19, 3.45, 2.22, 1.1400000000000001, 0.97, 0.97, 0.97, 0.96, 0.96, 17.87, 5.82, 3.36, 3.18, 1.6099999999999999],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'WBMD', 'ZPIN', 'MWW', 'EVDY', 'DHX', 'TRUE', 'RUBI', 'MKTO', 'FUEL', 'SCOR', 'CTCT', 'CRTO', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[25.259999999999998, 21.48, 5.06, 11.790000000000001, 5.27, 2.91, 7.08, 2.4299999999999997, 1.11, 1.01, 1.01, 1.0, 0.9900000000000001, 0.9900000000000001, 0.9299999999999999, 1.15, 1.05, 1.04, 1.03, 1.02, 1.01, 0.96, 2.35, 1.05, 1.01],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWA', 'EWW', 'EWY', 'EWN', 'TUR', 'EZA', 'SHV', 'PZA', 'TLT', 'VCLT', 'IAU'],
			"weight":[7.75, 3.36, 2.73, 1.54, 1.2, 1.0999999999999999, 1.0699999999999998, 0.96, 0.83, 0.83, 0.8, 0.67, 0.58, 0.5700000000000001, 0.49, 0.38, 0.33999999999999997, 0.16999999999999998, 25.069999999999997, 8.43, 8.28, 8.16, 24.709999999999997],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[14.21, 11.82, 10.209999999999999, 7.2700000000000005, 5.29, 4.81, 3.4099999999999997, 3.25, 2.3, 1.32, 0.67, 0.5599999999999999, 18.790000000000003, 6.510000000000001, 1.09, 6.52, 1.04, 0.9400000000000001],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[17.37, 8.959999999999999, 6.1, 5.46, 4.43, 2.97, 2.09, 14.78, 8.68, 5.17, 3.62, 1.46, 1.44, 1.03, 6.6000000000000005, 3.09, 0.5599999999999999, 0.29, 4.6, 1.29],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'AINV', 'FSC', 'TCRD', 'GAIN', 'TICC', 'FDUS', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[10.26, 9.64, 6.15, 4.760000000000001, 4.2700000000000005, 4.0, 3.3300000000000005, 2.5100000000000002, 2.21, 1.9300000000000002, 1.69, 1.2, 1.06, 1.05, 1.04, 1.01, 0.9900000000000001, 0.98, 18.57, 6.99, 6.5, 4.17, 3.0, 1.6500000000000001, 1.04],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'IPCC', 'AXS', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'GLRE', 'VR', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[12.53, 10.73, 8.98, 7.249999999999999, 6.17, 6.12, 4.72, 3.2300000000000004, 3.02, 2.5, 1.0699999999999998, 1.04, 1.03, 0.98, 0.98, 0.9400000000000001, 5.84, 3.49, 1.94, 1.06, 1.04, 0.97, 7.3, 6.0, 1.08],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[33.77, 15.55, 7.140000000000001, 2.73, 9.73, 8.219999999999999, 5.04, 1.25, 6.77, 3.91, 3.1399999999999997, 1.6099999999999999, 1.15],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['CTLT', 'AAVL', 'OTIC', 'KITE', 'XENT', 'ADPT', 'ZFGN', 'TTOO', 'MBLY', 'RYI', 'WMS', 'OEC', 'ICD', 'GPRO', 'LOCO', 'MIK', 'SERV', 'HQY', 'FCB', 'TRUP', 'GNBC', 'ECR', 'TERP', 'MRKT', 'TUBE'],
			"weight":[4.3999999999999995, 4.3, 3.9899999999999998, 3.85, 3.81, 3.65, 3.5000000000000004, 3.04, 4.760000000000001, 4.21, 4.21, 4.17, 3.8699999999999997, 5.21, 4.53, 4.14, 3.85, 4.05, 3.84, 3.7199999999999998, 3.6999999999999997, 3.91, 3.75, 3.81, 3.74],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[25.5, 15.879999999999999, 11.82, 14.91, 13.8, 7.04, 4.09, 1.06, 4.859999999999999, 1.03],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[20.53, 6.87, 6.79, 4.97, 3.6999999999999997, 3.5999999999999996, 3.4799999999999995, 1.96, 30.620000000000005, 12.770000000000001, 2.9899999999999998, 1.72],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'PODD', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[22.86, 14.89, 9.8, 5.609999999999999, 3.52, 2.65, 2.4, 1.4500000000000002, 1.43, 1.37, 1.09, 0.8999999999999999, 0.75, 6.329999999999999, 6.01, 2.67, 1.01, 1.0, 0.96, 0.96, 0.9199999999999999, 7.17, 2.26, 0.9900000000000001, 0.98],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['NOC', 'CSX', 'UNP', 'LMT', 'GD', 'FDX', 'RTN', 'HON', 'GE', 'UPS', 'BA', 'UTX', 'GS', 'MS', 'BAC', 'BRK.B', 'JPM', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[4.2, 4.19, 4.19, 4.19, 4.18, 4.15, 4.03, 3.94, 3.7800000000000002, 3.65, 3.64, 3.61, 4.45, 4.3999999999999995, 4.2700000000000005, 4.18, 4.18, 3.9800000000000004, 3.7199999999999998, 3.37, 4.35, 4.130000000000001, 3.85, 3.81, 3.55],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[23.200000000000003, 17.87, 12.85, 11.379999999999999, 26.3, 5.87, 1.28, 1.24],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[15.85, 9.5, 2.13, 2.12, 2.08, 22.900000000000002, 3.11, 2.74, 2.0, 1.9800000000000002, 1.7999999999999998, 1.58, 1.3599999999999999, 0.64, 0.51, 0.35000000000000003, 7.03, 5.390000000000001, 2.73, 6.510000000000001, 5.55, 2.16],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[15.129999999999999, 9.049999999999999, 2.04, 2.03, 1.9900000000000002, 22.97, 3.7699999999999996, 3.3300000000000005, 2.42, 2.41, 2.18, 1.91, 1.6400000000000001, 0.7799999999999999, 0.63, 0.43, 8.540000000000001, 6.550000000000001, 3.3099999999999996, 6.4, 2.4899999999999998],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[12.91, 7.71, 1.7399999999999998, 1.73, 1.7000000000000002, 4.32, 3.81, 2.77, 2.76, 2.5, 2.1999999999999997, 1.8800000000000001, 0.89, 0.72, 0.5, 9.8, 7.51, 3.8, 20.53, 7.340000000000001, 2.86],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[4.8, 4.24, 3.08, 3.0700000000000003, 2.78, 2.44, 2.1, 0.9900000000000001, 0.8, 0.5499999999999999, 10.89, 8.34, 4.2299999999999995, 11.020000000000001, 6.5, 1.5, 1.48, 1.4500000000000002, 18.4, 8.16, 3.19],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.220000000000001, 4.61, 3.35, 3.34, 3.0300000000000002, 2.6599999999999997, 2.2800000000000002, 1.08, 0.8699999999999999, 0.59, 11.84, 9.07, 4.590000000000001, 9.39, 5.53, 1.27, 1.26, 1.23, 16.45, 8.870000000000001, 3.46],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.59, 4.9399999999999995, 3.5900000000000003, 3.58, 3.2399999999999998, 2.85, 2.45, 1.15, 0.9299999999999999, 0.63, 12.690000000000001, 9.719999999999999, 4.91, 7.969999999999999, 4.7, 1.08, 1.0699999999999998, 1.05, 14.64, 9.5, 3.6999999999999997],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[5.94, 5.24, 3.81, 3.8, 3.44, 3.02, 2.59, 1.22, 0.9900000000000001, 0.67, 13.450000000000001, 10.299999999999999, 5.21, 6.72, 3.9600000000000004, 0.91, 0.8999999999999999, 0.88, 0.0, 12.950000000000001, 10.07, 3.92],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[6.239999999999999, 5.510000000000001, 4.01, 3.9899999999999998, 3.61, 3.18, 2.73, 1.28, 1.04, 0.7100000000000001, 14.14, 10.84, 5.48, 11.35, 5.609999999999999, 3.3099999999999996, 0.76, 0.75, 0.74, 0.0, 10.59, 4.130000000000001],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[19.63, 15.18, 9.42, 5.1, 3.04, 3.01, 2.45, 2.37, 1.96, 1.68, 1.35, 1.06, 1.0, 0.9299999999999999, 7.1499999999999995, 4.21, 1.7399999999999998, 1.15, 1.08, 8.870000000000001, 0.98, 3.5900000000000003, 1.0699999999999998, 1.0, 0.9900000000000001],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[23.65, 18.45, 9.66, 19.6, 5.13, 0.88, 0.64, 10.31, 1.63, 0.7799999999999999, 3.82, 1.9, 1.6099999999999999, 1.03, 0.8999999999999999],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'ARAY', 'QGEN', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[12.44, 9.9, 3.27, 2.11, 1.55, 1.3599999999999999, 0.9400000000000001, 0.9299999999999999, 17.990000000000002, 2.09, 0.9900000000000001, 0.98, 0.88, 6.77, 4.77, 4.54, 2.44, 1.1400000000000001, 0.9299999999999999, 0.9199999999999999, 0.8999999999999999, 7.6, 4.54, 1.1400000000000001, 8.9],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'VASC', 'ABMD', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[16.470000000000002, 3.5900000000000003, 2.77, 1.71, 21.83, 0.98, 13.930000000000001, 1.1900000000000002, 1.0, 4.45, 3.39, 1.55, 1.1900000000000002, 0.96, 9.62, 1.02, 3.26, 1.02, 1.0, 0.9900000000000001, 0.98, 4.04, 1.06, 1.03, 0.96],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'BUD', 'STZ', 'BF.B', 'BTI', 'RAI', 'LO', 'PM', 'DEO', 'YUM', 'MCD', 'CHTR', 'DISH', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[4.34, 4.2299999999999995, 4.21, 4.06, 3.95, 3.93, 3.8899999999999997, 3.8899999999999997, 3.85, 3.7800000000000002, 3.7600000000000002, 4.58, 4.54, 4.46, 3.9899999999999998, 3.88, 3.5999999999999996, 3.4000000000000004, 3.25, 3.11, 4.68, 4.62, 4.67, 3.9600000000000004, 3.36],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[16.05, 12.8, 9.19, 4.62, 4.08, 3.61, 2.41, 1.05, 1.04, 1.01, 0.9900000000000001, 0.95, 13.930000000000001, 0.8699999999999999, 14.149999999999999, 4.25, 0.97, 1.08, 1.05, 1.02, 0.96, 0.9199999999999999, 1.03, 1.0, 0.9900000000000001],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'CWEI', 'FANG', 'RSPP', 'AREX', 'CPE', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[22.830000000000002, 8.15, 6.23, 5.45, 4.16, 1.49, 1.01, 0.95, 15.370000000000001, 6.65, 3.55, 1.55, 1.02, 1.01, 1.0, 0.9900000000000001, 0.97, 0.9400000000000001, 4.84, 3.1199999999999997, 3.85, 1.8900000000000001, 1.02, 0.96, 1.01],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[7.64, 5.21, 5.19, 4.87, 4.859999999999999, 4.82, 4.77, 3.2399999999999998, 2.63, 1.27, 0.98, 6.45, 4.61, 4.41, 3.82, 3.25, 1.6199999999999999, 5.4399999999999995, 4.72, 3.2300000000000004, 2.6, 3.5700000000000003, 3.39, 4.55, 2.87],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[38.11, 12.920000000000002, 12.120000000000001, 13.86, 7.6, 1.3599999999999999, 7.4399999999999995, 4.52, 2.06],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[5.949999999999999, 5.46, 5.1499999999999995, 5.0, 4.9799999999999995, 4.92, 5.11, 5.0200000000000005, 4.95, 4.8500000000000005, 4.8, 4.53, 5.2299999999999995, 5.06, 4.93, 4.87, 4.77, 4.79, 4.79, 4.82],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[23.810000000000002, 20.01, 14.42, 6.49, 1.59, 1.43, 1.4000000000000001, 0.9400000000000001, 15.479999999999999, 2.27, 7.9399999999999995, 1.48, 1.38, 1.37],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'SQI', 'CALD', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[24.709999999999997, 12.06, 8.0, 7.779999999999999, 6.08, 3.8699999999999997, 3.5700000000000003, 1.7399999999999998, 1.16, 1.09, 1.05, 4.17, 3.7199999999999998, 2.7199999999999998, 2.3800000000000003, 2.17, 1.31, 0.9400000000000001, 2.9899999999999998, 1.0, 2.12, 1.48, 1.8900000000000001, 1.01, 0.9900000000000001],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['TMST', 'XYL', 'BWC', 'NX', 'WBC', 'RYAM', 'CLW', 'WWAV', 'DPS', 'SBH', 'HSNI', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'JBT', 'SAIC', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[4.109999999999999, 4.07, 4.02, 4.02, 3.82, 3.82, 3.7800000000000002, 4.3, 4.18, 4.08, 3.9899999999999998, 3.93, 4.45, 4.09, 3.85, 4.18, 4.130000000000001, 3.95, 4.14, 3.93, 3.71, 4.1000000000000005, 4.02, 3.47, 3.85],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'FDS', 'USTR', 'SIAL', 'BCPC', 'FTI'],
			"weight":[5.220000000000001, 4.99, 4.24, 3.94, 2.75, 1.79, 8.61, 4.8, 3.6799999999999997, 2.69, 5.67, 3.71, 3.64, 2.4699999999999998, 1.69, 8.9, 3.58, 5.06, 4.78, 0.96, 4.99, 3.1399999999999997, 6.4399999999999995, 1.06, 1.2],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'MXIM', 'ATML', 'CRUS', 'SIMG', 'NVDA', 'INVN', 'HIMX', 'STM', 'FCS', 'SIMO', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[14.6, 9.39, 8.08, 4.7, 1.5599999999999998, 0.9900000000000001, 0.9900000000000001, 0.97, 0.97, 0.97, 0.97, 0.96, 0.95, 0.9400000000000001, 0.9199999999999999, 24.86, 1.0699999999999998, 1.03, 14.35, 9.700000000000001, 1.03],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'AAL', 'LUV', 'RYAAY', 'UAL', 'LFL', 'ALK', 'CPA', 'SAVE', 'JBLU', 'AVH', 'VLRS', 'GOL', 'HA', 'RJET', 'SKYW', 'AL', 'AER', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[14.35, 10.89, 10.459999999999999, 9.41, 8.309999999999999, 4.6, 4.44, 3.4299999999999997, 3.34, 1.8800000000000001, 1.1900000000000002, 1.02, 1.01, 0.98, 0.97, 0.77, 4.58, 4.5600000000000005, 1.06, 0.97, 0.96, 0.8999999999999999, 6.13, 2.69, 1.0999999999999999],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'TRIB', 'IR', 'ETN', 'IHG', 'AZN', 'GWPH', 'GSK', 'ARMH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'QGEN', 'STM', 'TEL', 'PNR', 'LOGI', 'G', 'HELE', 'IMOS', 'FDP', 'SIMO'],
			"weight":[4.37, 4.24, 4.19, 3.95, 3.8899999999999997, 3.83, 4.109999999999999, 4.04, 3.9899999999999998, 3.9800000000000004, 3.8699999999999997, 3.7699999999999996, 4.53, 4.15, 4.03, 3.9800000000000004, 3.8699999999999997, 4.01, 3.8699999999999997, 3.73, 3.81, 3.8, 3.7900000000000005, 4.279999999999999, 3.94],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'CVT', 'TXTR', 'PGI', 'MKTO', 'SAAS', 'WAGE', 'ELLI', 'CTCT', 'FLTX', 'SPSC', 'LPSN', 'RP', 'DWRE', 'NICE', 'PRO', 'MSTR', 'CVLT', 'LXFT', 'DWCH', 'RDWR', 'IMPV', 'QLYS', 'AVG', 'PFPT'],
			"weight":[4.33, 4.19, 4.14, 4.1000000000000005, 4.09, 4.04, 4.03, 4.01, 4.0, 3.93, 3.93, 3.91, 3.91, 3.82, 4.26, 4.07, 4.03, 3.93, 3.6999999999999997, 3.38, 4.16, 4.15, 4.07, 3.9600000000000004, 3.8600000000000003],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'FDML', 'AXL', 'SHLO', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[25.36, 13.44, 12.33, 10.35, 4.96, 2.81, 5.28, 5.12, 1.25, 0.9400000000000001, 0.48, 4.130000000000001, 1.58, 1.16, 1.1400000000000001, 0.9400000000000001, 1.91, 0.95, 0.9400000000000001, 0.9199999999999999, 0.88, 1.18, 1.02, 0.9299999999999999],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'AIG', 'MET', 'GS', 'MS', 'BK', 'STT'],
			"weight":[13.54, 9.77, 8.82, 6.09, 18.04, 5.33, 2.97, 2.4699999999999998, 1.73, 1.38, 1.24, 0.86, 0.84, 6.9, 3.82, 6.11, 4.43, 3.2399999999999998, 2.42],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[19.68, 14.08, 5.66, 5.47, 3.7199999999999998, 1.03, 4.53, 4.43, 3.64, 2.34, 2.03, 1.0999999999999999, 0.72, 15.770000000000001, 3.39, 2.22, 0.9199999999999999, 1.39, 1.05, 1.03, 1.0, 0.96, 0.8999999999999999, 1.6400000000000001, 1.32],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[20.150000000000002, 16.97, 14.06, 10.07, 7.470000000000001, 0.96, 10.100000000000001, 5.970000000000001, 2.52, 1.01, 1.0, 0.89, 2.55, 1.4500000000000002, 0.83, 2.96, 1.05],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['BSV', 'TLT', 'TLH', 'SCHR', 'IEF'],
			"weight":[25.080000000000002, 12.49, 12.49, 24.990000000000002, 24.95],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[18.360000000000003, 17.68, 2.73, 0.97, 0.9299999999999999, 9.2, 7.03, 5.7, 3.1, 2.58, 2.56, 2.02, 2.01, 1.59, 1.05, 1.02, 0.9900000000000001, 6.49, 1.0, 1.0, 4.33, 4.31, 1.24, 1.08, 1.02],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'IPAR', 'NUS', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[25.8, 15.709999999999999, 6.68, 4.19, 4.0, 2.53, 2.34, 2.26, 1.91, 1.03, 0.95, 0.9400000000000001, 0.6, 13.44, 1.44, 1.41, 1.1199999999999999, 1.03, 0.9900000000000001, 0.66, 0.5700000000000001, 5.029999999999999, 3.52, 0.9400000000000001, 0.9299999999999999],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'PJC', 'RJF', 'COWN', 'GHL', 'EVR', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[23.07, 11.29, 9.39, 7.9, 7.07, 4.75, 4.26, 3.9, 3.9, 3.15, 1.8900000000000001, 1.58, 0.9900000000000001, 3.04, 1.4000000000000001, 1.05, 0.9900000000000001, 0.9900000000000001, 0.9900000000000001, 0.98, 0.98, 0.96, 2.74, 1.73, 0.9900000000000001],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'FELE', 'RXN', 'GRC', 'NES', 'LAYN', 'MWA', 'WMS', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'PICO', 'CWCO'],
			"weight":[12.0, 4.31, 4.279999999999999, 3.8, 2.46, 1.34, 1.1199999999999999, 1.09, 1.01, 0.9900000000000001, 12.280000000000001, 8.35, 7.66, 2.22, 9.36, 7.62, 5.46, 2.4699999999999998, 1.01, 0.98, 6.18, 1.01, 0.98, 1.0, 1.0],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GRMN', 'GOOGL', 'AAPL', 'ARMH', 'TXN', 'MXIM', 'MCHP', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[13.459999999999999, 12.509999999999998, 12.1, 11.77, 3.4099999999999997, 3.05, 3.05, 3.05, 2.39, 1.8900000000000001, 1.5699999999999998, 3.4799999999999995, 3.44, 3.0300000000000002, 2.1999999999999997, 2.13, 1.1900000000000002, 3.73, 3.4799999999999995, 2.86, 1.4200000000000002, 1.37, 0.9199999999999999, 1.47, 1.0],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'SNOW', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[21.05, 15.379999999999999, 9.47, 8.15, 4.99, 2.2800000000000002, 2.04, 1.66, 1.17, 1.06, 1.02, 0.96, 12.959999999999999, 6.58, 0.98, 1.3599999999999999, 0.97, 0.96, 0.9199999999999999, 0.89, 0.88, 0.67, 2.09, 0.8200000000000001, 0.69],
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
