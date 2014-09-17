function getMotifs(motif){
	if( typeof(this.DashBoard) === 'undefined'){
		this.DashBoard = {};
	}
	if( typeof(this.db) === 'undefined'){
		this.db = {};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'CWEI', 'FANG', 'RSPP', 'AREX', 'CPE', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[0.2283, 0.0815, 0.0623, 0.0545, 0.0416, 0.0149, 0.0101, 0.0095, 0.1537, 0.0665, 0.0355, 0.0155, 0.0102, 0.0101, 0.01, 0.0099, 0.0097, 0.0094, 0.0484, 0.0312, 0.0385, 0.0189, 0.0102, 0.0096, 0.0101],
			"name":"Shale Oil"};
		db["FrackAttack"]={
			"quotes":['HAL', 'NOV', 'BHI', 'CAM', 'RES', 'WFT', 'SPN', 'CJES', 'TPLM', 'BAS', 'KEG', 'OIS', 'HP', 'PTEN', 'NBR', 'UNT', 'PES', 'KEX', 'CLH', 'NR', 'TTI', 'NES', 'SLCA', 'CRR', 'FTK'],
			"weight":[0.1657, 0.0827, 0.0572, 0.0518, 0.0505, 0.0477, 0.0457, 0.0243, 0.0116, 0.0087, 0.0069, 0.0059, 0.1073, 0.0651, 0.0208, 0.01, 0.0092, 0.0754, 0.0282, 0.025, 0.0101, 0.0084, 0.0405, 0.0323, 0.0093],
			"name":"Frack Attack"};
		db["FindingMomo"]={
			"quotes":['NYLD', 'PTR', 'NFX', 'ELP', 'CIG', 'CALM', 'BRFS', 'SKX', 'BIG', 'PPC', 'LUV', 'PAC', 'PBA', 'GLNG', 'SLCA', 'AA', 'GPRE', 'INTC', 'EEFT', 'WIN', 'CHL', 'ITUB', 'TPL', 'Z', 'AKRX'],
			"weight":[0.0784, 0.0515, 0.0455, 0.0279, 0.0187, 0.0486, 0.0357, 0.0344, 0.029, 0.0268, 0.0696, 0.0488, 0.0298, 0.0229, 0.0644, 0.0599, 0.0243, 0.0561, 0.0319, 0.034, 0.0317, 0.0445, 0.0199, 0.0335, 0.0321],
			"name":"Finding Momo"};
		db["DrCopper"]={
			"quotes":['SCCO', 'BHP', 'FCX', 'RIO', 'VALE', 'TRQ', 'TCK', 'TC'],
			"weight":[0.2462, 0.2112, 0.1975, 0.1369, 0.1013, 0.0602, 0.0329, 0.0137],
			"name":"Dr Copper"};
		db["BlackGold"]={
			"quotes":['XOM', 'CVX', 'RDS.A', 'PTR', 'TOT', 'COP', 'IMO', 'BP', 'SNP', 'E', 'STO', 'EC', 'SU', 'MRO', 'PBR', 'MDU', 'YPF', 'HES', 'XEC', 'MUR', 'DO', 'RIG', 'HERO', 'CKH', 'PBT'],
			"weight":[0.1774, 0.1182, 0.1007, 0.0801, 0.0637, 0.0469, 0.0445, 0.0421, 0.042, 0.0371, 0.0316, 0.0282, 0.0244, 0.023, 0.0185, 0.0133, 0.013, 0.0123, 0.0108, 0.0098, 0.0163, 0.0145, 0.0071, 0.0146, 0.0098],
			"name":"Black Gold"};
		db["BigData"]={
			"quotes":['TDC', 'SPLK', 'TIBX', 'MSTR', 'DATA', 'NICE', 'VRNT', 'PRO', 'QLIK', 'VRNS', 'DWCH', 'RHT', 'SGI', 'INFA', 'CVLT', 'VMEM'],
			"weight":[0.2525, 0.1383, 0.1283, 0.1105, 0.0954, 0.0253, 0.0224, 0.0167, 0.0155, 0.0142, 0.0136, 0.0618, 0.0176, 0.0457, 0.0308, 0.0113],
			"name":"Big Data"};
		db["BearInternationalMarket"]={
			"quotes":['BZQ', 'EEV', 'EPV', 'FXP', 'EWV'],
			"weight":[0.2968, 0.2171, 0.1893, 0.1719, 0.1249],
			"name":"Bear International Market"};
		db["BearUSMarket"]={
			"quotes":['QID', 'SDS', 'DXD', 'TWM', 'MZZ'],
			"weight":[0.2006, 0.1948, 0.1747, 0.2312, 0.1987],
			"name":"Bear US Market"};
		db["BearUSSectors"]={
			"quotes":['SKF', 'SRS', 'DUG', 'SMN'],
			"weight":[0.2468, 0.1988, 0.3376, 0.2168],
			"name":"Bear US Sectors"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[0.1605, 0.128, 0.0919, 0.0462, 0.0408, 0.0361, 0.0241, 0.0105, 0.0104, 0.0101, 0.0099, 0.0095, 0.1393, 0.0087, 0.1415, 0.0425, 0.0097, 0.0108, 0.0105, 0.0102, 0.0096, 0.0092, 0.0103, 0.01, 0.0099],
			"name":"Shale Gas"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[0.18, 0.0596, 0.0557, 0.0495, 0.0318, 0.0137, 0.0097, 0.1457, 0.048, 0.0223, 0.0172, 0.0118, 0.01, 0.0776, 0.0476, 0.0351, 0.0145, 0.058, 0.0255, 0.01, 0.0238, 0.0149, 0.0161, 0.0125, 0.0093],
			"name":"No Glass Ceilings"};
		db["BiotechBreakthroughs"]={
			"quotes":['AMGN', 'CELG', 'SGEN', 'IMGN', 'CRIS', 'GILD', 'CBST', 'EBS', 'ALXN', 'REGN', 'VRTX', 'UTHR', 'MDCO', 'LGND', 'ACOR', 'BIIB', 'BMRN', 'INCY', 'RIGL', 'ILMN', 'QGEN', 'TECH', 'CRL', 'VIVO', 'TRIB'],
			"weight":[0.1718, 0.1122, 0.0097, 0.0097, 0.0092, 0.1948, 0.024, 0.0092, 0.0427, 0.0419, 0.0363, 0.021, 0.0102, 0.01, 0.0094, 0.0919, 0.0343, 0.0249, 0.0088, 0.0454, 0.0277, 0.0244, 0.011, 0.0098, 0.0095],
			"name":"Biotech Breakthroughs"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[0.2381, 0.2001, 0.1442, 0.0649, 0.0159, 0.0143, 0.014, 0.0094, 0.1548, 0.0227, 0.0794, 0.0148, 0.0138, 0.0137],
			"name":"Social Networking"};
		db["HighSpirits"]={
			"quotes":['BUD', 'ABEV', 'TAP', 'SAM', 'FMX', 'DEO', 'BF.B', 'STZ', 'CCU'],
			"weight":[0.1971, 0.1911, 0.1412, 0.0291, 0.0143, 0.1899, 0.1485, 0.0501, 0.0387],
			"name":"High Spirits"};
		db["NaturalGasGlut"]={
			"quotes":['LYB', 'DOW', 'DD', 'WLK', 'NEU', 'HUN', 'MEOH', 'EMN', 'GRA', 'CE', 'POL', 'LXU', 'MPC', 'VLO', 'PSX', 'PBF', 'HFC', 'TSO', 'ALJ', 'DK', 'CVI', 'WNR', 'APD', 'CF', 'RTK'],
			"weight":[0.136, 0.1283, 0.0747, 0.0313, 0.0313, 0.0107, 0.0105, 0.0104, 0.0102, 0.0101, 0.0098, 0.0097, 0.0931, 0.0666, 0.0645, 0.0314, 0.0234, 0.013, 0.01, 0.01, 0.0099, 0.0095, 0.157, 0.0293, 0.0091],
			"name":"Natural Gas Glut"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'WBMD', 'ZPIN', 'MWW', 'EVDY', 'DHX', 'TRUE', 'RUBI', 'MKTO', 'FUEL', 'SCOR', 'CTCT', 'CRTO', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[0.2526, 0.2148, 0.0506, 0.1179, 0.0527, 0.0291, 0.0708, 0.0243, 0.0111, 0.0101, 0.0101, 0.01, 0.0099, 0.0099, 0.0093, 0.0115, 0.0105, 0.0104, 0.0103, 0.0102, 0.0101, 0.0096, 0.0235, 0.0105, 0.0101],
			"name":"Onward Online Ads"};
		db["DrugPatentCliffs"]={
			"quotes":['ACT', 'PRGO', 'MYL', 'HSP', 'TARO', 'RDY', 'AKRX', 'LCI', 'SGNT', 'IPXL'],
			"weight":[0.2137, 0.199, 0.1822, 0.1003, 0.0989, 0.0972, 0.043, 0.0252, 0.0231, 0.0176],
			"name":"Drug Patent Cliffs"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[0.0776, 0.0615, 0.0614, 0.0461, 0.0376, 0.014, 0.0102, 0.1321, 0.0481, 0.0476, 0.0359, 0.0189, 0.0749, 0.0631, 0.0174, 0.0105, 0.0527, 0.0471, 0.025, 0.0101, 0.0422, 0.0306, 0.0101, 0.0143, 0.0111],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[0.2383, 0.1975, 0.1087, 0.0668, 0.0475, 0.0104, 0.1756, 0.0295, 0.0222, 0.0183, 0.0157, 0.0112, 0.0104, 0.0101, 0.0098, 0.0094, 0.0093, 0.0093],
			"name":"Online Gaming World"};
		db["EnergeticMLPs"]={
			"quotes":['RRMS', 'KMP', 'EPD', 'EEP', 'SMLP', 'OKS', 'WES', 'TCP', 'ETP', 'SXE', 'AMID', 'MMP', 'BPL', 'ENLK', 'EPB', 'SXL', 'EXLP', 'TLP', 'APL', 'SEP', 'ACMP', 'DMLP', 'BBEP', 'EVEP', 'LGCY'],
			"weight":[0.07, 0.067, 0.062, 0.0566, 0.054, 0.0455, 0.0447, 0.0408, 0.0389, 0.0366, 0.0345, 0.0321, 0.0315, 0.0296, 0.0292, 0.0285, 0.0271, 0.026, 0.0233, 0.0216, 0.0471, 0.0468, 0.0435, 0.0415, 0.0216],
			"name":"Energetic MLPs"};
		db["BattlingCancer"]={
			"quotes":['CELG', 'SGEN', 'MDVN', 'PCYC', 'INSY', 'NVS', 'INFI', 'KITE', 'IMGN', 'EPZM', 'SNSS', 'TSRO', 'PGNX', 'DYAX', 'THLD', 'MGNX', 'IMMU', 'NLNK', 'VSTM', 'CRIS', 'CLDX', 'GHDX', 'EXAS', 'ARAY', 'FMI'],
			"weight":[0.2464, 0.066, 0.0584, 0.0458, 0.0154, 0.2526, 0.0283, 0.0235, 0.0186, 0.0168, 0.0166, 0.0159, 0.0142, 0.0129, 0.0116, 0.0109, 0.0109, 0.0105, 0.0103, 0.0097, 0.0093, 0.0344, 0.0267, 0.0246, 0.0096],
			"name":"Battling Cancer"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[0.2015, 0.1697, 0.1406, 0.1007, 0.0747, 0.0096, 0.101, 0.0597, 0.0252, 0.0101, 0.01, 0.0089, 0.0255, 0.0145, 0.0083, 0.0296, 0.0105],
			"name":"Used Car Tune up"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[0.255, 0.1588, 0.1182, 0.1491, 0.138, 0.0704, 0.0409, 0.0106, 0.0486, 0.0103],
			"name":"Recycled Steel"};
		db["HotRetail"]={
			"quotes":['UA', 'RL', 'VFC', 'NKE', 'JWN', 'CRI', 'FL', 'KORS', 'GCO', 'TJX', 'COST', 'ROST', 'DLTR', 'FIVE', 'PSMT', 'WMT', 'TUES', 'HD', 'LOW', 'HVT', 'TSCO', 'HIBB', 'DKS', 'LB', 'SIG'],
			"weight":[0.0657, 0.0533, 0.0498, 0.0479, 0.0444, 0.0325, 0.024, 0.023, 0.0181, 0.0591, 0.0565, 0.0422, 0.037, 0.0363, 0.0235, 0.0144, 0.1208, 0.0581, 0.0529, 0.0127, 0.0468, 0.0186, 0.0146, 0.0274, 0.0206],
			"name":"Hot Retail"};
		db["LowBeta"]={
			"quotes":['EDE', 'AWK', 'DUK', 'ED', 'LG', 'XEL', 'CMS', 'DTE', 'SO', 'NWN', 'PPL', 'D', 'WEC', 'DPS', 'PEP', 'PG', 'CHD', 'GIS', 'WMT', 'KMB', 'K', 'MCD', 'BRK.B', 'SRCL', 'CHT'],
			"weight":[0.0418, 0.0411, 0.0409, 0.0409, 0.0408, 0.0403, 0.0401, 0.0398, 0.0397, 0.039, 0.039, 0.0389, 0.0385, 0.0439, 0.0424, 0.041, 0.0407, 0.0391, 0.039, 0.0379, 0.0373, 0.0359, 0.0431, 0.0409, 0.0378],
			"name":"Low Beta"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'MXIM', 'ATML', 'CRUS', 'SIMG', 'NVDA', 'INVN', 'HIMX', 'STM', 'FCS', 'SIMO', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[0.146, 0.0939, 0.0808, 0.047, 0.0156, 0.0099, 0.0099, 0.0097, 0.0097, 0.0097, 0.0097, 0.0096, 0.0095, 0.0094, 0.0092, 0.2486, 0.0107, 0.0103, 0.1435, 0.097, 0.0103],
			"name":"Tablet Takeover"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[0.1737, 0.0896, 0.061, 0.0546, 0.0443, 0.0297, 0.0209, 0.1478, 0.0868, 0.0517, 0.0362, 0.0146, 0.0144, 0.0103, 0.066, 0.0309, 0.0056, 0.0029, 0.046, 0.0129],
			"name":"Precious Metals"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'PODD', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[0.2286, 0.1489, 0.098, 0.0561, 0.0352, 0.0265, 0.024, 0.0145, 0.0143, 0.0137, 0.0109, 0.009, 0.0075, 0.0633, 0.0601, 0.0267, 0.0101, 0.01, 0.0096, 0.0096, 0.0092, 0.0717, 0.0226, 0.0099, 0.0098],
			"name":"Repeal Obamacare"};
		db["DividendStars"]={
			"quotes":['TGT', 'OMC', 'CLX', 'K', 'PEP', 'PG', 'MCD', 'KMB', 'KO', 'CVX', 'D', 'OKE', 'COP', 'XOM', 'SO', 'DTE', 'PEG', 'ED', 'DE', 'ETN', 'DD', 'CB', 'ADP', 'MRK', 'VZ'],
			"weight":[0.0996, 0.0648, 0.0636, 0.0571, 0.056, 0.0489, 0.0472, 0.0243, 0.01, 0.0451, 0.0415, 0.0415, 0.0405, 0.0337, 0.024, 0.0224, 0.0103, 0.0099, 0.0438, 0.0327, 0.0227, 0.059, 0.0584, 0.0333, 0.0099],
			"name":"Dividend Stars"};
		db["CaffeineFix"]={
			"quotes":['THI', 'GMCR', 'SBUX', 'SJM', 'DNKN', 'MDLZ', 'MCD', 'KKD', 'KO', 'PEP', 'DPS', 'COT', 'MNST'],
			"weight":[0.1751, 0.1359, 0.1219, 0.0438, 0.0364, 0.017, 0.0123, 0.0081, 0.115, 0.0672, 0.0448, 0.009, 0.2134],
			"name":"Caffeine Fix"};
		db["JunkFoods"]={
			"quotes":['KO', 'PEP', 'MNST', 'DPS', 'MCD', 'YUM', 'BKW', 'JACK', 'DNKN', 'DPZ', 'TAST', 'SONC', 'WEN', 'PLKI', 'PZZA', 'KKD', 'RRGB', 'MDLZ', 'HSY', 'LNCE', 'FRSH', 'KRFT', 'TR', 'DMND', 'UL'],
			"weight":[0.2067, 0.1995, 0.0316, 0.0211, 0.1727, 0.0438, 0.0166, 0.0108, 0.0106, 0.0106, 0.0104, 0.0104, 0.0103, 0.0094, 0.0094, 0.0093, 0.0077, 0.1125, 0.0385, 0.0103, 0.0099, 0.0099, 0.0098, 0.0085, 0.0098],
			"name":"Junk Foods"};
		db["IncomeInequality"]={
			"quotes":['WMT', 'TJX', 'TGT', 'DLTR', 'ROST', 'DG', 'BIG', 'BURL', 'FIVE', 'FRED', 'CTRN', 'SHLD', 'LUX', 'RL', 'KORS', 'WFM', 'COH', 'SFM', 'TIF', 'JWN', 'SHOO', 'CHS', 'BID', 'MOV', 'TFM'],
			"weight":[0.2489, 0.0803, 0.0623, 0.0597, 0.025, 0.0126, 0.0113, 0.0107, 0.0103, 0.01, 0.0097, 0.0092, 0.1225, 0.0785, 0.0567, 0.0483, 0.0392, 0.0202, 0.0168, 0.015, 0.0131, 0.0103, 0.0098, 0.0098, 0.0097],
			"name":"Income Inequality"};
		db["DefensiveDividends"]={
			"quotes":['OGE', 'CVX', 'ATO', 'NU', 'XOM', 'OXY', 'TGT', 'PG', 'MCD', 'HAS', 'MAT', 'WMT', 'ADI', 'MSFT', 'MXIM', 'TXN', 'INTC', 'MMM', 'EMR', 'APD', 'AGU', 'POT', 'ADP', 'JNJ', 'HRS'],
			"weight":[0.0541, 0.0528, 0.0514, 0.0353, 0.0336, 0.0294, 0.0528, 0.0413, 0.0404, 0.0362, 0.0298, 0.0272, 0.0551, 0.0496, 0.0302, 0.03, 0.0205, 0.0687, 0.0396, 0.0515, 0.0159, 0.0099, 0.0589, 0.0518, 0.0337],
			"name":"Defensive Dividends"};
		db["HomeImprovement"]={
			"quotes":['HD', 'LOW', 'BLDR', 'LL', 'BBBY', 'BEAM', 'WSM', 'HVT', 'TPX', 'PIR', 'KIRK', 'WHR', 'NWL', 'LCUT', 'MKTAY'],
			"weight":[0.3167, 0.2792, 0.0339, 0.0315, 0.0701, 0.0524, 0.0373, 0.0176, 0.0167, 0.0145, 0.0133, 0.0482, 0.0304, 0.0064, 0.0318],
			"name":"Home Improvement"};
		db["DogsoftheDow"]={
			"quotes":['INTC', 'CSCO', 'MRK', 'PFE', 'T', 'VZ', 'PG', 'MCD', 'CVX', 'GE'],
			"weight":[0.1211, 0.0988, 0.1004, 0.0998, 0.098, 0.0968, 0.1027, 0.091, 0.0976, 0.0937],
			"name":"Dogs of the Dow"};
		db["DiscountNation"]={
			"quotes":['WMT', 'TGT', 'BURL', 'SHLD', 'COST', 'PSMT', 'TJX', 'ROST', 'TUES', 'DSW', 'CATO', 'CTRN', 'DLTR', 'DG', 'BIG', 'FIVE', 'SVU', 'FRED', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP'],
			"weight":[0.1664, 0.1137, 0.0106, 0.0091, 0.2126, 0.0099, 0.1438, 0.033, 0.0103, 0.0102, 0.0101, 0.0096, 0.0642, 0.0588, 0.0102, 0.0102, 0.0101, 0.01, 0.039, 0.0168, 0.013, 0.01, 0.01, 0.0084],
			"name":"Discount Nation"};
		db["ChinaInternet"]={
			"quotes":['BIDU', 'WUBA', 'ATHM', 'SINA', 'QIHU', 'LEJU', 'SOHU', 'YOKU', 'XNET', 'BITA', 'JD', 'VIPS', 'QUNR', 'CTRP', 'JMEI', 'DANG', 'TOUR', 'NTES', 'DSKY', 'WBAI', 'WB', 'RENN', 'YY', 'SFUN', 'ZPIN'],
			"weight":[0.194, 0.0517, 0.0411, 0.0371, 0.0347, 0.0272, 0.0195, 0.0134, 0.0095, 0.0093, 0.1111, 0.072, 0.0421, 0.037, 0.0188, 0.0101, 0.0091, 0.1092, 0.015, 0.0091, 0.0606, 0.0201, 0.0181, 0.0154, 0.0148],
			"name":"China Internet"};
		db["ChineseSolar"]={
			"quotes":['TSL', 'CSIQ', 'JKS', 'YGE', 'DQ', 'JASO', 'HSOL', 'SOL'],
			"weight":[0.2127, 0.191, 0.1509, 0.1298, 0.0443, 0.1498, 0.0727, 0.0487],
			"name":"Chinese Solar"};
		db["CleantechEverywhere"]={
			"quotes":['TERP', 'FSLR', 'SCTY', 'SPWR', 'ENPH', 'JASO', 'YGE', 'GTAT', 'TSL', 'HSOL', 'ESE', 'OPWR', 'BMI', 'ENOC', 'AMSC', 'TSLA', 'CREE', 'RBCN', 'CPST', 'FCEL', 'BLDP', 'MXWL', 'ORA', 'PEGI', 'MY'],
			"weight":[0.0718, 0.0715, 0.0688, 0.0618, 0.0238, 0.0178, 0.0144, 0.0132, 0.0099, 0.0098, 0.056, 0.0521, 0.0434, 0.0235, 0.0095, 0.1502, 0.125, 0.0089, 0.0236, 0.0193, 0.0143, 0.0096, 0.0567, 0.0345, 0.0106],
			"name":"Cleantech Everywhere"};
		db["CouchCommerce"]={
			"quotes":['AMZN', 'JD', 'FTD', 'LITB', 'NILE', 'EHTH', 'SFLY', 'JMEI', 'EBAY', 'MELI', 'CPRT', 'LQDT', 'CRCM', 'PCLN', 'EXPE', 'CTRP', 'MMYT', 'TOUR', 'VIPS', 'GRPN', 'ZU', 'SALE', 'OSTK', 'COUP', 'AAPL'],
			"weight":[0.2024, 0.055, 0.0107, 0.0106, 0.0105, 0.0101, 0.01, 0.0091, 0.2247, 0.0266, 0.0248, 0.0101, 0.01, 0.1624, 0.0609, 0.0254, 0.0098, 0.0089, 0.0315, 0.0147, 0.0114, 0.0103, 0.0103, 0.0087, 0.0311],
			"name":"Couch Commerce"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[0.232, 0.1787, 0.1285, 0.1138, 0.263, 0.0587, 0.0128, 0.0124],
			"name":"Rest In Peace"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[0.0624, 0.0551, 0.0401, 0.0399, 0.0361, 0.0318, 0.0273, 0.0128, 0.0104, 0.0071, 0.1414, 0.1084, 0.0548, 0.1135, 0.0561, 0.0331, 0.0076, 0.0075, 0.0074, 0.0, 0.1059, 0.0413],
			"name":"Retiring 2055"};
		db["HighYieldDividends"]={
			"quotes":['GAS', 'PPL', 'NWN', 'SCG', 'AEP', 'ETR', 'PNW', 'SO', 'XEL', 'ED', 'CNP', 'WR', 'PBCT', 'ACC', 'TRMK', 'NYCB', 'MCY', 'MAA', 'DLR', 'CINF', 'CBRL', 'DRI', 'T', 'VZ', 'POT'],
			"weight":[0.0801, 0.0574, 0.0497, 0.0428, 0.0419, 0.0416, 0.0339, 0.0313, 0.0289, 0.0261, 0.024, 0.0098, 0.0522, 0.0507, 0.0498, 0.0479, 0.0421, 0.0414, 0.0361, 0.0284, 0.045, 0.0339, 0.0441, 0.0329, 0.0279],
			"name":"High Yield Dividends"};
		db["SellinMay"]={
			"quotes":['JNJ', 'MRK', 'PFE', 'AGN', 'GILD', 'BDX', 'ABC', 'TMO', 'LLY', 'CAH', 'AMGN', 'ABT', 'BMY', 'PG', 'WMT', 'PM', 'KO', 'PEP', 'MO', 'COST', 'SYY', 'K', 'CL', 'BF.B', 'GIS'],
			"weight":[0.0702, 0.0642, 0.05, 0.0453, 0.0437, 0.0409, 0.0374, 0.0353, 0.031, 0.0284, 0.0278, 0.023, 0.0145, 0.0693, 0.068, 0.0539, 0.0508, 0.0461, 0.0449, 0.0412, 0.031, 0.0259, 0.0252, 0.0166, 0.0155],
			"name":"Sell in May"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.0594, 0.0524, 0.0381, 0.038, 0.0344, 0.0302, 0.0259, 0.0122, 0.0099, 0.0067, 0.1345, 0.103, 0.0521, 0.0672, 0.0396, 0.0091, 0.009, 0.0088, 0.0, 0.1295, 0.1007, 0.0392],
			"name":"Retiring 2050"};
		db["NewEraPortfolio"]={
			"quotes":['VTI', 'VEA', 'VWO', 'PSP', 'DBC', 'VNQ', 'IGF', 'VTIP', 'BWX', 'AGG', 'ALFA', 'CSD', 'QAI'],
			"weight":[0.1561, 0.1452, 0.127, 0.068, 0.0648, 0.0597, 0.0504, 0.0497, 0.1169, 0.0793, 0.0287, 0.0274, 0.0269],
			"name":"New Era Portfolio"};
		db["7TwelveCorePortfolio"]={
			"quotes":['VO', 'SPY', 'VBR', 'VWO', 'VEU', 'BSV', 'VTIP', 'IGE', 'DBC', 'SHY', 'VNQ', 'IGOV'],
			"weight":[0.0865, 0.0864, 0.0857, 0.0878, 0.0821, 0.0826, 0.0825, 0.084, 0.0768, 0.0829, 0.0825, 0.0804],
			"name":"7Twelve Core Portfolio"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[0.1836, 0.1768, 0.0273, 0.0097, 0.0093, 0.092, 0.0703, 0.057, 0.031, 0.0258, 0.0256, 0.0202, 0.0201, 0.0159, 0.0105, 0.0102, 0.0099, 0.0649, 0.01, 0.01, 0.0433, 0.0431, 0.0124, 0.0108, 0.0102],
			"name":"Utility Bills"};
		db["BulletProofBalanceSheets"]={
			"quotes":['MSFT', 'CSCO', 'GOOGL', 'QCOM', 'ORCL', 'AAPL', 'ADBE', 'ACN', 'EMC', 'INTC', 'INTU', 'SYMC', 'ALTR', 'LRCX', 'CA', 'GLW', 'ADI', 'CTSH', 'COST', 'NKE', 'JNJ', 'MDT', 'V', 'ADP', 'BA'],
			"weight":[0.185, 0.0982, 0.0979, 0.073, 0.0567, 0.0563, 0.0351, 0.023, 0.022, 0.0209, 0.0199, 0.0133, 0.0131, 0.0113, 0.0094, 0.0092, 0.0089, 0.0088, 0.0676, 0.0505, 0.0634, 0.0103, 0.027, 0.0099, 0.0093],
			"name":"Bullet Proof Balance Sheets"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.0559, 0.0494, 0.0359, 0.0358, 0.0324, 0.0285, 0.0245, 0.0115, 0.0093, 0.0063, 0.1269, 0.0972, 0.0491, 0.0797, 0.047, 0.0108, 0.0107, 0.0105, 0.1464, 0.095, 0.037],
			"name":"Retiring 2045"};
		db["AllAmerican"]={
			"quotes":['PB', 'BXP', 'O', 'EXR', 'MAA', 'SBNY', 'OHI', 'ESS', 'ISBC', 'GAS', 'NU', 'DNR', 'CXO', 'ITC', 'BRK.B', 'JBHT', 'WCN', 'KEX', 'CVS', 'TSCO', 'NVR', 'FLO', 'JKHY', 'VNTV', 'MD'],
			"weight":[0.0532, 0.0472, 0.0436, 0.0302, 0.0287, 0.0263, 0.0224, 0.0162, 0.0097, 0.0849, 0.0516, 0.042, 0.0339, 0.0212, 0.0567, 0.0505, 0.0442, 0.0377, 0.0652, 0.0378, 0.0345, 0.0257, 0.072, 0.0132, 0.0514],
			"name":"All American"};
		db["Classic6040"]={
			"quotes":['VWO', 'VTI', 'VEA', 'BNDX', 'AGG'],
			"weight":[0.2086, 0.2052, 0.1909, 0.2, 0.1954],
			"name":"Classic 60 40"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.0522, 0.0461, 0.0335, 0.0334, 0.0303, 0.0266, 0.0228, 0.0108, 0.0087, 0.0059, 0.1184, 0.0907, 0.0459, 0.0939, 0.0553, 0.0127, 0.0126, 0.0123, 0.1645, 0.0887, 0.0346],
			"name":"Retiring 2040"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[0.0546, 0.0528, 0.0472, 0.041, 0.0334, 0.0291, 0.0187, 0.0156, 0.0154, 0.0126, 0.0102, 0.133, 0.1075, 0.042, 0.0123, 0.0105, 0.01, 0.1861, 0.0329, 0.0901, 0.0247, 0.0202],
			"name":"Nuclear Renaissance"};
		db["CashFlowKings"]={
			"quotes":['LLL', 'DOX', 'ORCL', 'ALTR', 'SYMC', 'CA', 'EMC', 'CSC', 'WU', 'XRX', 'WDC', 'CSCO', 'NTAP', 'NVDA', 'DCM', 'NTT', 'CHL', 'AZN', 'HUM', 'SPLS', 'BBY', 'SNE', 'TYC', 'FLEX', 'CF'],
			"weight":[0.0844, 0.0836, 0.0579, 0.0488, 0.0474, 0.0362, 0.0315, 0.0247, 0.0212, 0.0198, 0.0181, 0.0118, 0.011, 0.0095, 0.0705, 0.0652, 0.0541, 0.076, 0.0404, 0.0434, 0.0238, 0.0201, 0.0806, 0.0101, 0.0099],
			"name":"Cash Flow Kings"};
		db["LotsofLikes"]={
			"quotes":['KO', 'NKE', 'DIS', 'VIA', 'SNE', 'SBUX', 'WMT', 'MDLZ', 'PEP', 'MNST', 'PG', 'MCD', 'LB', 'TGT', 'AMZN', 'GOOGL', 'MSFT', 'BBRY', 'AAPL', 'INTC'],
			"weight":[0.0887, 0.0881, 0.0757, 0.0689, 0.0504, 0.041, 0.0382, 0.0372, 0.0365, 0.0349, 0.031, 0.0308, 0.0304, 0.0281, 0.0264, 0.1082, 0.0645, 0.048, 0.0388, 0.0341],
			"name":"Lots of Likes"};
		db["FossilFree"]={
			"quotes":['IBM', 'MSFT', 'INTC', 'CSCO', 'AAPL', 'EMC', 'ORCL', 'GOOGL', 'MSI', 'AMAT', 'JNJ', 'CL', 'CAG', 'KSS', 'SBUX', 'EL', 'M', 'BDX', 'BAX', 'DVA', 'MDT', 'A', 'SYK', 'FDX', 'DE'],
			"weight":[0.0647, 0.0575, 0.0406, 0.0396, 0.0387, 0.0347, 0.0339, 0.0301, 0.0273, 0.0249, 0.0649, 0.0599, 0.0513, 0.0366, 0.0356, 0.0314, 0.0213, 0.0527, 0.0477, 0.0425, 0.0365, 0.0337, 0.0273, 0.0372, 0.0292],
			"name":"Fossil Free"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'JBLU', 'RJET', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'PEB', 'LHO', 'CLDT', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[0.1078, 0.0996, 0.0817, 0.05, 0.036, 0.0221, 0.0112, 0.0107, 0.0101, 0.0099, 0.0742, 0.0519, 0.0345, 0.0222, 0.0114, 0.0097, 0.0097, 0.0097, 0.0096, 0.0096, 0.1787, 0.0582, 0.0336, 0.0318, 0.0161],
			"name":"On The Road"};
		db["ModernWarfare"]={
			"quotes":['LMT', 'NOC', 'BA', 'ESLT', 'AVAV', 'KAMN', 'GD', 'COL', 'LLL', 'HRS', 'LDOS', 'MANT', 'CACI', 'SAIC', 'XLS', 'VSAT', 'MRCY', 'FLIR', 'KTOS', 'RTN', 'ATK', 'DCO', 'GY', 'CUB', 'IRBT'],
			"weight":[0.2457, 0.1199, 0.0934, 0.0209, 0.0095, 0.0092, 0.1103, 0.0354, 0.0329, 0.021, 0.0197, 0.015, 0.0121, 0.0116, 0.0105, 0.0103, 0.0092, 0.0092, 0.0082, 0.1376, 0.0213, 0.0107, 0.009, 0.0088, 0.0085],
			"name":"Modern Warfare"};
		db["GrowingDividends"]={
			"quotes":['CVS', 'TJX', 'CHD', 'HD', 'YUM', 'CNI', 'UNP', 'LII', 'TTC', 'HON', 'BDX', 'CAH', 'TECH', 'QCOM', 'JKHY', 'ORCL', 'OMC', 'CTAS', 'FDS', 'PX', 'SIAL', 'AFG', 'TRV', 'XOM', 'OXY'],
			"weight":[0.0436, 0.0432, 0.0404, 0.0347, 0.0207, 0.0399, 0.0363, 0.0337, 0.0245, 0.0118, 0.0654, 0.0397, 0.0344, 0.0536, 0.0504, 0.0353, 0.0463, 0.0402, 0.0387, 0.0678, 0.0524, 0.0421, 0.0328, 0.0432, 0.0291],
			"name":"Growing Dividends"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.048, 0.0424, 0.0308, 0.0307, 0.0278, 0.0244, 0.021, 0.0099, 0.008, 0.0055, 0.1089, 0.0834, 0.0423, 0.1102, 0.065, 0.015, 0.0148, 0.0145, 0.184, 0.0816, 0.0319],
			"name":"Retiring 2035"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[0.2053, 0.0687, 0.0679, 0.0497, 0.037, 0.036, 0.0348, 0.0196, 0.3062, 0.1277, 0.0299, 0.0172],
			"name":"Renter Nation"};
		db["DigitalDollars"]={
			"quotes":['MA', 'V', 'AXP', 'GPN', 'TSS', 'FIS', 'FISV', 'USB', 'VNTV', 'JKHY', 'HPY', 'EVTC', 'EEFT', 'ONE', 'FLT', 'EBAY', 'QIWI', 'HAWK', 'GDOT', 'UEPS', 'WEX', 'ACIW', 'PAY', 'NCR', 'GCA'],
			"weight":[0.2003, 0.1954, 0.137, 0.0421, 0.0421, 0.0362, 0.0271, 0.0265, 0.0103, 0.01, 0.01, 0.0097, 0.0093, 0.0088, 0.072, 0.0641, 0.011, 0.0104, 0.0101, 0.0099, 0.0099, 0.0169, 0.0109, 0.0103, 0.0099],
			"name":"Digital Dollars"};
		db["IvyLeague"]={
			"quotes":['VTI', 'VNQ', 'VEA', 'VWO', 'VTIP', 'IEF'],
			"weight":[0.31, 0.1975, 0.1442, 0.0525, 0.1481, 0.1475],
			"name":"Ivy League"};
		db["BRICSBuilding"]={
			"quotes":['CHL', 'PTR', 'SNP', 'LFC', 'BIDU', 'CHA', 'CHU', 'CEO', 'NTES', 'HNP', 'JD', 'MR', 'HTHT', 'MPEL', 'QIHU', 'ABEV', 'ITUB', 'UGP', 'VIV', 'CPL', 'HDB', 'WIT', 'VIP', 'MBT', 'SSL'],
			"weight":[0.1554, 0.0927, 0.0641, 0.0527, 0.045, 0.0448, 0.0335, 0.0288, 0.0241, 0.0209, 0.013, 0.0103, 0.01, 0.0096, 0.0092, 0.0436, 0.0389, 0.0224, 0.0221, 0.0158, 0.0977, 0.0103, 0.0438, 0.0369, 0.0547],
			"name":"BRICS Building"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.1291, 0.0771, 0.0174, 0.0173, 0.017, 0.0432, 0.0381, 0.0277, 0.0276, 0.025, 0.022, 0.0188, 0.0089, 0.0072, 0.005, 0.098, 0.0751, 0.038, 0.2053, 0.0734, 0.0286],
			"name":"Retiring 2030"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[0.0595, 0.0546, 0.0515, 0.05, 0.0498, 0.0492, 0.0511, 0.0502, 0.0495, 0.0485, 0.048, 0.0453, 0.0523, 0.0506, 0.0493, 0.0487, 0.0477, 0.0479, 0.0479, 0.0482],
			"name":"Socially Responsible"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[0.1421, 0.1182, 0.1021, 0.0727, 0.0529, 0.0481, 0.0341, 0.0325, 0.023, 0.0132, 0.0067, 0.0056, 0.1879, 0.0651, 0.0109, 0.0652, 0.0104, 0.0094],
			"name":"Pet Passion"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[0.2487, 0.1469, 0.1423, 0.049, 0.0418, 0.0227, 0.0154, 0.0122, 0.0095, 0.0354, 0.0205, 0.0196, 0.0164, 0.0146, 0.0137, 0.08, 0.0163, 0.0952],
			"name":"Online Video"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[0.2566, 0.2549, 0.2445, 0.2441],
			"name":"No Brainer Portfolio"};
		db["HigherHighs"]={
			"quotes":['CME', 'CSBK', 'VRSK', 'IBKR', 'PG', 'COST', 'LGF', 'NVGS', 'CAH', 'KAI', 'FB', 'GNCMA', 'PFPT', 'ACT', 'ALNY', 'IT', 'CNQR'],
			"weight":[0.0596, 0.0591, 0.059, 0.0589, 0.0598, 0.0597, 0.0596, 0.0595, 0.0594, 0.0591, 0.0582, 0.0562, 0.0539, 0.0608, 0.06, 0.0589, 0.0582],
			"name":"Higher Highs"};
		db["HealthyandTasty"]={
			"quotes":['HAIN', 'UNFI', 'FDP', 'WWAV', 'BDBD', 'CVGW', 'CALM', 'STKL', 'BNNY', 'CQB', 'JMBA', 'WFM', 'SFM', 'TFM', 'NGVC', 'FWM', 'VSI', 'GNC', 'USNA', 'OME'],
			"weight":[0.124, 0.1024, 0.0994, 0.0924, 0.0284, 0.0253, 0.0202, 0.0172, 0.0163, 0.01, 0.0099, 0.1593, 0.0811, 0.0302, 0.0126, 0.0088, 0.0811, 0.0537, 0.0179, 0.0099],
			"name":"Healthy and Tasty"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[0.1513, 0.0905, 0.0204, 0.0203, 0.0199, 0.2297, 0.0377, 0.0333, 0.0242, 0.0241, 0.0218, 0.0191, 0.0164, 0.0078, 0.0063, 0.0043, 0.0854, 0.0655, 0.0331, 0.064, 0.0249],
			"name":"Retiring 2025"};
		db["Lazy3Portfolio"]={
			"quotes":['VTI', 'BND', 'VXUS'],
			"weight":[0.3443, 0.3281, 0.3276],
			"name":"Lazy 3 Portfolio"};
		db["ElectronicTrading"]={
			"quotes":['CME', 'ICE', 'CBOE', 'NDAQ', 'TRI', 'MKTX', 'FXCM', 'GCAP', 'IBKR', 'ITG', 'COWN', 'KCG'],
			"weight":[0.1899, 0.1884, 0.1348, 0.1188, 0.1373, 0.0462, 0.0118, 0.0107, 0.1136, 0.0296, 0.0096, 0.0091],
			"name":"Electronic Trading"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'IPAR', 'NUS', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[0.258, 0.1571, 0.0668, 0.0419, 0.04, 0.0253, 0.0234, 0.0226, 0.0191, 0.0103, 0.0095, 0.0094, 0.006, 0.1344, 0.0144, 0.0141, 0.0112, 0.0103, 0.0099, 0.0066, 0.0057, 0.0503, 0.0352, 0.0094, 0.0093],
			"name":"Vanity Flair"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'VASC', 'ABMD', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[0.1647, 0.0359, 0.0277, 0.0171, 0.2183, 0.0098, 0.1393, 0.0119, 0.01, 0.0445, 0.0339, 0.0155, 0.0119, 0.0096, 0.0962, 0.0102, 0.0326, 0.0102, 0.01, 0.0099, 0.0098, 0.0404, 0.0106, 0.0103, 0.0096],
			"name":"Senior Care"};
		db["DisappointingtheStreet"]={
			"quotes":['LLL', 'CLGX', 'MANT', 'GLW', 'FEIC', 'MXIM', 'CTSH', 'FNSR', 'ALB', 'DHR', 'EMN', 'SCS', 'CIR', 'ENS', 'CRS', 'SPLS', 'CL', 'CAG', 'KRFT', 'DHI', 'BBT', 'KMPR', 'CMP', 'XOM', 'MDAS'],
			"weight":[0.0424, 0.0405, 0.0402, 0.0401, 0.0399, 0.0396, 0.0395, 0.037, 0.0411, 0.0406, 0.0406, 0.0402, 0.0395, 0.0391, 0.0382, 0.0446, 0.0403, 0.0402, 0.0399, 0.0398, 0.0409, 0.0391, 0.0405, 0.0391, 0.037],
			"name":"Disappointing the Street"};
		db["ContentisKing"]={
			"quotes":['FOXA', 'TWX', 'DIS', 'CMCSA', 'VIAB', 'CBS', 'DISCA', 'SNI', 'IMAX', 'STRZA', 'AMCX', 'TV', 'LGF', 'DWA', 'EROS', 'MSG', 'WWE', 'ISCA'],
			"weight":[0.1828, 0.1784, 0.1744, 0.1209, 0.1121, 0.019, 0.0606, 0.0229, 0.0101, 0.0098, 0.0097, 0.0097, 0.0363, 0.0134, 0.0093, 0.0104, 0.0102, 0.0101],
			"name":"Content is King"};
		db["HorizonModel5YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[0.2851, 0.2753, 0.1658, 0.1565, 0.0721, 0.0452],
			"name":"Horizon Model 5 Year Aggressive"};
		db["HorizonModel15YearAggressive"]={
			"quotes":['BNDX', 'VTI', 'VXUS', 'BND', 'IYR', 'GSG'],
			"weight":[0.2791, 0.2761, 0.1638, 0.1546, 0.0803, 0.0461],
			"name":"Horizon Model 15 Year Aggressive"};
		db["HorizonModel1YearAggressive"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'GSG', 'IYR'],
			"weight":[0.2961, 0.2778, 0.1739, 0.1657, 0.0449, 0.0416],
			"name":"Horizon Model 1 Year Aggressive"};
		db["HorizonModel5YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[0.3, 0.2954, 0.1903, 0.1324, 0.0485, 0.0335],
			"name":"Horizon Model 5 Year Moderate"};
		db["HorizonModel1YearModerate"]={
			"quotes":['VTI', 'BNDX', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[0.3265, 0.2523, 0.2252, 0.1252, 0.0383, 0.0324],
			"name":"Horizon Model 1 Year Moderate"};
		db["HorizonModel15YearModerate"]={
			"quotes":['BNDX', 'VTI', 'BND', 'VXUS', 'IYR', 'GSG'],
			"weight":[0.318, 0.26, 0.1828, 0.1337, 0.0716, 0.034],
			"name":"Horizon Model 15 Year Moderate"};
		db["IndexFans"]={
			"quotes":['VTI', 'BND', 'VXUS', 'IAU'],
			"weight":[0.3715, 0.3539, 0.1767, 0.0979],
			"name":"Index Fans"};
		db["GARP"]={
			"quotes":['AAP', 'BIG', 'DECK', 'ABV', 'NUS', 'CBD', 'ROST', 'DV', 'STRA', 'AAPL', 'OTEX', 'CA', 'AMX', 'BAP', 'CACC', 'TGH', 'EZPW', 'NEU', 'ACM', 'HS'],
			"weight":[0.0891, 0.0549, 0.0424, 0.0424, 0.042, 0.0394, 0.0363, 0.0289, 0.0182, 0.0809, 0.07, 0.0481, 0.0374, 0.0693, 0.0565, 0.0441, 0.0113, 0.0903, 0.0523, 0.0459],
			"name":"GARP"};
		db["ChildsPlay"]={
			"quotes":['PG', 'KMB', 'DIS', 'SIX', 'DWA', 'SEAS', 'SCHL', 'VIAB', 'HAS', 'MAT', 'LF', 'JAKK', 'MJN', 'PRGO', 'CRI', 'PLCE', 'KSS', 'GPS', 'FL', 'BWS', 'CROX', 'BFAM', 'CRCM'],
			"weight":[0.1668, 0.1213, 0.1606, 0.0574, 0.0298, 0.015, 0.0128, 0.0099, 0.0754, 0.0566, 0.0098, 0.0096, 0.1291, 0.01, 0.0411, 0.0167, 0.0103, 0.0099, 0.0102, 0.0098, 0.009, 0.0192, 0.0097],
			"name":"Childs Play"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'ARAY', 'QGEN', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[0.1244, 0.099, 0.0327, 0.0211, 0.0155, 0.0136, 0.0094, 0.0093, 0.1799, 0.0209, 0.0099, 0.0098, 0.0088, 0.0677, 0.0477, 0.0454, 0.0244, 0.0114, 0.0093, 0.0092, 0.009, 0.076, 0.0454, 0.0114, 0.089],
			"name":"Robotic Revolution"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[0.1968, 0.1408, 0.0566, 0.0547, 0.0372, 0.0103, 0.0453, 0.0443, 0.0364, 0.0234, 0.0203, 0.011, 0.0072, 0.1577, 0.0339, 0.0222, 0.0092, 0.0139, 0.0105, 0.0103, 0.01, 0.0096, 0.009, 0.0164, 0.0132],
			"name":"Transporting America"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[0.0764, 0.0521, 0.0519, 0.0487, 0.0486, 0.0482, 0.0477, 0.0324, 0.0263, 0.0127, 0.0098, 0.0645, 0.0461, 0.0441, 0.0382, 0.0325, 0.0162, 0.0544, 0.0472, 0.0323, 0.026, 0.0357, 0.0339, 0.0455, 0.0287],
			"name":"Small Cap Stars"};
		db["DemocraticDonors"]={
			"quotes":['MSFT', 'GOOGL', 'IPG', 'WPPGY', 'CMCSA'],
			"weight":[0.2195, 0.198, 0.1876, 0.1842, 0.2107],
			"name":"Democratic Donors"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'SNOW', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[0.2105, 0.1538, 0.0947, 0.0815, 0.0499, 0.0228, 0.0204, 0.0166, 0.0117, 0.0106, 0.0102, 0.0096, 0.1296, 0.0658, 0.0098, 0.0136, 0.0097, 0.0096, 0.0092, 0.0089, 0.0088, 0.0067, 0.0209, 0.0082, 0.0069],
			"name":"World of Sports"};
		db["NoBrainerPortfolio"]={
			"quotes":['VTI', 'VB', 'BND', 'VXUS'],
			"weight":[0.2566, 0.2549, 0.2445, 0.2441],
			"name":"No Brainer Portfolio"};
		db["NoGlassCeilings"]={
			"quotes":['IBM', 'LMT', 'GD', 'HPQ', 'YHOO', 'XRX', 'ST', 'PEP', 'TJX', 'CPB', 'MDLZ', 'RGC', 'ISCA', 'PBR', 'DUK', 'SRE', 'LNT', 'DD', 'ADM', 'INGR', 'NLY', 'KEY', 'MYL', 'FTR', 'CLW'],
			"weight":[0.18, 0.0596, 0.0557, 0.0495, 0.0318, 0.0137, 0.0097, 0.1457, 0.048, 0.0223, 0.0172, 0.0118, 0.01, 0.0776, 0.0476, 0.0351, 0.0145, 0.058, 0.0255, 0.01, 0.0238, 0.0149, 0.0161, 0.0125, 0.0093],
			"name":"No Glass Ceilings"};
		db["NuclearRenaissance"]={
			"quotes":['AME', 'EMR', 'CIR', 'MKSI', 'HOLI', 'FLS', 'PH', 'BDC', 'CW', 'BGC', 'TISI', 'TMO', 'ECOL', 'LDR', 'FSS', 'MSA', 'LDOS', 'CCJ', 'URG', 'BWC', 'CBI', 'FLR'],
			"weight":[0.0546, 0.0528, 0.0472, 0.041, 0.0334, 0.0291, 0.0187, 0.0156, 0.0154, 0.0126, 0.0102, 0.133, 0.1075, 0.042, 0.0123, 0.0105, 0.01, 0.1861, 0.0329, 0.0901, 0.0247, 0.0202],
			"name":"Nuclear Renaissance"};
		db["Obamacare"]={
			"quotes":['UHS', 'LPNT', 'HCA', 'SEM', 'THC', 'CYH', 'HLS', 'SCAI', 'KND', 'CERN', 'QSII', 'CPSI', 'ATHN', 'MDRX', 'ESRX', 'CTRX', 'HSP', 'IPXL', 'SGNT', 'LCI', 'CNC', 'HMSY', 'MOH', 'TW', 'EHTH'],
			"weight":[0.0778, 0.0582, 0.0572, 0.0312, 0.0309, 0.012, 0.01, 0.0099, 0.0098, 0.1562, 0.0229, 0.0215, 0.0213, 0.0095, 0.199, 0.0156, 0.063, 0.0293, 0.0238, 0.013, 0.0571, 0.0415, 0.0096, 0.0099, 0.0097],
			"name":"Obamacare"};
		db["OfficeSpace"]={
			"quotes":['HLT', 'FRT', 'HST', 'SKT', 'EGP', 'FPO', 'RLJ', 'SPG', 'EQY', 'TCO', 'GGP', 'BFS', 'ARCP', 'ELS', 'HIW', 'FUR', 'HCP', 'OHI', 'LTC', 'HR', 'SLG', 'GOV', 'KRC', 'COR', 'MNR'],
			"weight":[0.0776, 0.0615, 0.0614, 0.0461, 0.0376, 0.014, 0.0102, 0.1321, 0.0481, 0.0476, 0.0359, 0.0189, 0.0749, 0.0631, 0.0174, 0.0105, 0.0527, 0.0471, 0.025, 0.0101, 0.0422, 0.0306, 0.0101, 0.0143, 0.0111],
			"name":"Office Space"};
		db["OnlineGamingWorld"]={
			"quotes":['ATVI', 'EA', 'KING', 'TTWO', 'ZNGA', 'GLUU', 'NTES', 'RENN', 'CYOU', 'PWRD', 'CMGE', 'WB', 'FENG', 'MOBI', 'SOHU', 'YY', 'XNET', 'CMCM'],
			"weight":[0.2383, 0.1975, 0.1087, 0.0668, 0.0475, 0.0104, 0.1756, 0.0295, 0.0222, 0.0183, 0.0157, 0.0112, 0.0104, 0.0101, 0.0098, 0.0094, 0.0093, 0.0093],
			"name":"Online Gaming World"};
		db["OnlineVideo"]={
			"quotes":['GOOGL', 'NFLX', 'YOKU', 'BCOV', 'BIDU', 'ADBE', 'SOHU', 'SINA', 'RENN', 'YUME', 'CNVR', 'TUBE', 'FUEL', 'XNET', 'MM', 'YHOO', 'FENG', 'AKAM'],
			"weight":[0.2487, 0.1469, 0.1423, 0.049, 0.0418, 0.0227, 0.0154, 0.0122, 0.0095, 0.0354, 0.0205, 0.0196, 0.0164, 0.0146, 0.0137, 0.08, 0.0163, 0.0952],
			"name":"Online Video"};
		db["OnTheRoad"]={
			"quotes":['DAL', 'LUV', 'AAL', 'UAL', 'ALGT', 'SAVE', 'JBLU', 'RJET', 'HA', 'SKYW', 'RLJ', 'HPT', 'CHSP', 'INN', 'DRH', 'PEB', 'LHO', 'CLDT', 'HT', 'AHT', 'MAR', 'LQ', 'EXPE', 'HTZ', 'IILG'],
			"weight":[0.1078, 0.0996, 0.0817, 0.05, 0.036, 0.0221, 0.0112, 0.0107, 0.0101, 0.0099, 0.0742, 0.0519, 0.0345, 0.0222, 0.0114, 0.0097, 0.0097, 0.0097, 0.0096, 0.0096, 0.1787, 0.0582, 0.0336, 0.0318, 0.0161],
			"name":"On The Road"};
		db["OnwardOnlineAds"]={
			"quotes":['GOOGL', 'BIDU', 'YNDX', 'FB', 'TWTR', 'YELP', 'TRIP', 'QUNR', 'Z', 'WBMD', 'ZPIN', 'MWW', 'EVDY', 'DHX', 'TRUE', 'RUBI', 'MKTO', 'FUEL', 'SCOR', 'CTCT', 'CRTO', 'MM', 'YOKU', 'TUBE', 'YUME'],
			"weight":[0.2526, 0.2148, 0.0506, 0.1179, 0.0527, 0.0291, 0.0708, 0.0243, 0.0111, 0.0101, 0.0101, 0.01, 0.0099, 0.0099, 0.0093, 0.0115, 0.0105, 0.0104, 0.0103, 0.0102, 0.0101, 0.0096, 0.0235, 0.0105, 0.0101],
			"name":"Onward Online Ads"};
		db["PermanentStrategy"]={
			"quotes":['VTI', 'FXI', 'EWJ', 'EWG', 'EWQ', 'EWU', 'EWZ', 'EWI', 'EPI', 'EWC', 'RSX', 'EWP', 'EWA', 'EWW', 'EWY', 'EWN', 'TUR', 'EZA', 'SHV', 'PZA', 'TLT', 'VCLT', 'IAU'],
			"weight":[0.0775, 0.0336, 0.0273, 0.0154, 0.012, 0.011, 0.0107, 0.0096, 0.0083, 0.0083, 0.008, 0.0067, 0.0058, 0.0057, 0.0049, 0.0038, 0.0034, 0.0017, 0.2507, 0.0843, 0.0828, 0.0816, 0.2471],
			"name":"Permanent Strategy"};
		db["PetPassion"]={
			"quotes":['IDXX', 'ZTS', 'WOOF', 'MRK', 'HSIC', 'MWIV', 'NEOG', 'ABAX', 'PAHC', 'PDCO', 'PETX', 'KIN', 'PETM', 'TSCO', 'PETS', 'CL', 'SPB', 'CLX'],
			"weight":[0.1421, 0.1182, 0.1021, 0.0727, 0.0529, 0.0481, 0.0341, 0.0325, 0.023, 0.0132, 0.0067, 0.0056, 0.1879, 0.0651, 0.0109, 0.0652, 0.0104, 0.0094],
			"name":"Pet Passion"};
		db["PreciousMetals"]={
			"quotes":['GG', 'SLW', 'AEM', 'AU', 'KGC', 'BVN', 'PAAS', 'ABX', 'GOLD', 'EGO', 'GFI', 'AUQ', 'IAG', 'RIC', 'RGLD', 'TRQ', 'VGZ', 'THM', 'SWC', 'SSRI'],
			"weight":[0.1737, 0.0896, 0.061, 0.0546, 0.0443, 0.0297, 0.0209, 0.1478, 0.0868, 0.0517, 0.0362, 0.0146, 0.0144, 0.0103, 0.066, 0.0309, 0.0056, 0.0029, 0.046, 0.0129],
			"name":"Precious Metals"};
		db["PrivateEquity"]={
			"quotes":['MCC', 'PSEC', 'ARCC', 'GBDC', 'NMFC', 'GLAD', 'MAIN', 'TSLX', 'TCAP', 'HRZN', 'SLRC', 'MCGC', 'AINV', 'FSC', 'TCRD', 'GAIN', 'TICC', 'FDUS', 'KKR', 'ACTA', 'ACAS', 'ARES', 'TCPC', 'TAXI', 'SFE'],
			"weight":[0.1026, 0.0964, 0.0615, 0.0476, 0.0427, 0.04, 0.0333, 0.0251, 0.0221, 0.0193, 0.0169, 0.012, 0.0106, 0.0105, 0.0104, 0.0101, 0.0099, 0.0098, 0.1857, 0.0699, 0.065, 0.0417, 0.03, 0.0165, 0.0104],
			"name":"Private Equity"};
		db["PropertyCasualtyInsurance"]={
			"quotes":['TRV', 'PGR', 'Y', 'MCY', 'CB', 'MKL', 'SIGI', 'CINF', 'ENH', 'SAFT', 'WRB', 'IPCC', 'AXS', 'PRA', 'RLI', 'ACGL', 'RE', 'MRH', 'TPRE', 'GLRE', 'VR', 'RNR', 'AJG', 'WSH', 'VRSK'],
			"weight":[0.1253, 0.1073, 0.0898, 0.0725, 0.0617, 0.0612, 0.0472, 0.0323, 0.0302, 0.025, 0.0107, 0.0104, 0.0103, 0.0098, 0.0098, 0.0094, 0.0584, 0.0349, 0.0194, 0.0106, 0.0104, 0.0097, 0.073, 0.06, 0.0108],
			"name":"Property Casualty Insurance"};
		db["QEJapan"]={
			"quotes":['YCS', 'TM', 'HMC', 'NJ', 'DCM', 'NTT', 'CAJ', 'SNE', 'MTU', 'SMFG', 'MFG', 'NMR', 'IX'],
			"weight":[0.3377, 0.1555, 0.0714, 0.0273, 0.0973, 0.0822, 0.0504, 0.0125, 0.0677, 0.0391, 0.0314, 0.0161, 0.0115],
			"name":"QE Japan"};
		db["RecentIPOs"]={
			"quotes":['CTLT', 'AAVL', 'OTIC', 'KITE', 'XENT', 'ADPT', 'ZFGN', 'TTOO', 'MBLY', 'RYI', 'WMS', 'OEC', 'ICD', 'GPRO', 'LOCO', 'MIK', 'SERV', 'HQY', 'FCB', 'TRUP', 'GNBC', 'ECR', 'TERP', 'MRKT', 'TUBE'],
			"weight":[0.044, 0.043, 0.0399, 0.0385, 0.0381, 0.0365, 0.035, 0.0304, 0.0476, 0.0421, 0.0421, 0.0417, 0.0387, 0.0521, 0.0453, 0.0414, 0.0385, 0.0405, 0.0384, 0.0372, 0.037, 0.0391, 0.0375, 0.0381, 0.0374],
			"name":"Recent IPOs"};
		db["RecycledSteel"]={
			"quotes":['NUE', 'GGB', 'STLD', 'RS', 'VMI', 'WOR', 'HSC', 'CAS', 'CMC', 'SCHN'],
			"weight":[0.255, 0.1588, 0.1182, 0.1491, 0.138, 0.0704, 0.0409, 0.0106, 0.0486, 0.0103],
			"name":"Recycled Steel"};
		db["RenterNation"]={
			"quotes":['EQR', 'CPT', 'UDR', 'AIV', 'ACC', 'MAA', 'HME', 'EDR', 'AVB', 'BRE', 'AEC', 'IRET'],
			"weight":[0.2053, 0.0687, 0.0679, 0.0497, 0.037, 0.036, 0.0348, 0.0196, 0.3062, 0.1277, 0.0299, 0.0172],
			"name":"Renter Nation"};
		db["RepealObamacare"]={
			"quotes":['TECH', 'LH', 'DGX', 'CPHD', 'TRIB', 'LMNX', 'DXCM', 'NEO', 'MYGN', 'BRLI', 'RDNT', 'GNMK', 'TTOO', 'ICUI', 'ALGN', 'NXTM', 'ELGX', 'SPNC', 'CSII', 'EXAS', 'PODD', 'CHE', 'ENSG', 'AFAM', 'AMED'],
			"weight":[0.2286, 0.1489, 0.098, 0.0561, 0.0352, 0.0265, 0.024, 0.0145, 0.0143, 0.0137, 0.0109, 0.009, 0.0075, 0.0633, 0.0601, 0.0267, 0.0101, 0.01, 0.0096, 0.0096, 0.0092, 0.0717, 0.0226, 0.0099, 0.0098],
			"name":"Repeal Obamacare"};
		db["RepublicanDonors"]={
			"quotes":['NOC', 'CSX', 'UNP', 'LMT', 'GD', 'FDX', 'RTN', 'HON', 'GE', 'UPS', 'BA', 'UTX', 'GS', 'MS', 'BAC', 'BRK.B', 'JPM', 'WFC', 'AFL', 'UBS', 'HD', 'MO', 'WMT', 'T', 'EXC'],
			"weight":[0.042, 0.0419, 0.0419, 0.0419, 0.0418, 0.0415, 0.0403, 0.0394, 0.0378, 0.0365, 0.0364, 0.0361, 0.0445, 0.044, 0.0427, 0.0418, 0.0418, 0.0398, 0.0372, 0.0337, 0.0435, 0.0413, 0.0385, 0.0381, 0.0355],
			"name":"Republican Donors"};
		db["RestInPeace"]={
			"quotes":['SCI', 'MATW', 'CSV', 'HI', 'CHE', 'GTIV', 'BIOS', 'AMED'],
			"weight":[0.232, 0.1787, 0.1285, 0.1138, 0.263, 0.0587, 0.0128, 0.0124],
			"name":"Rest In Peace"};
		db["Retiring2020"]={
			"quotes":['SCHR', 'VCSH', 'SHM', 'AGZ', 'SJNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'SHV', 'IYR', 'GSG'],
			"weight":[0.1585, 0.095, 0.0213, 0.0212, 0.0208, 0.229, 0.0311, 0.0274, 0.02, 0.0198, 0.018, 0.0158, 0.0136, 0.0064, 0.0051, 0.0035, 0.0703, 0.0539, 0.0273, 0.0651, 0.0555, 0.0216],
			"name":"Retiring 2020"};
		db["Retiring2025"]={
			"quotes":['IEF', 'VCIT', 'TFI', 'AGZ', 'JNK', 'BNDX', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'IYR', 'GSG'],
			"weight":[0.1513, 0.0905, 0.0204, 0.0203, 0.0199, 0.2297, 0.0377, 0.0333, 0.0242, 0.0241, 0.0218, 0.0191, 0.0164, 0.0078, 0.0063, 0.0043, 0.0854, 0.0655, 0.0331, 0.064, 0.0249],
			"name":"Retiring 2025"};
		db["Retiring2030"]={
			"quotes":['TLH', 'VCIT', 'TFI', 'AGZ', 'JNK', 'VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.1291, 0.0771, 0.0174, 0.0173, 0.017, 0.0432, 0.0381, 0.0277, 0.0276, 0.025, 0.022, 0.0188, 0.0089, 0.0072, 0.005, 0.098, 0.0751, 0.038, 0.2053, 0.0734, 0.0286],
			"name":"Retiring 2030"};
		db["Retiring2035"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.048, 0.0424, 0.0308, 0.0307, 0.0278, 0.0244, 0.021, 0.0099, 0.008, 0.0055, 0.1089, 0.0834, 0.0423, 0.1102, 0.065, 0.015, 0.0148, 0.0145, 0.184, 0.0816, 0.0319],
			"name":"Retiring 2035"};
		db["Retiring2040"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.0522, 0.0461, 0.0335, 0.0334, 0.0303, 0.0266, 0.0228, 0.0108, 0.0087, 0.0059, 0.1184, 0.0907, 0.0459, 0.0939, 0.0553, 0.0127, 0.0126, 0.0123, 0.1645, 0.0887, 0.0346],
			"name":"Retiring 2040"};
		db["Retiring2045"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.0559, 0.0494, 0.0359, 0.0358, 0.0324, 0.0285, 0.0245, 0.0115, 0.0093, 0.0063, 0.1269, 0.0972, 0.0491, 0.0797, 0.047, 0.0108, 0.0107, 0.0105, 0.1464, 0.095, 0.037],
			"name":"Retiring 2045"};
		db["Retiring2050"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'BNDX', 'IYR', 'GSG'],
			"weight":[0.0594, 0.0524, 0.0381, 0.038, 0.0344, 0.0302, 0.0259, 0.0122, 0.0099, 0.0067, 0.1345, 0.103, 0.0521, 0.0672, 0.0396, 0.0091, 0.009, 0.0088, 0.0, 0.1295, 0.1007, 0.0392],
			"name":"Retiring 2050"};
		db["Retiring2055"]={
			"quotes":['VGT', 'VFH', 'VCR', 'VHT', 'VIS', 'VDE', 'VDC', 'VAW', 'VPU', 'VOX', 'VWO', 'VGK', 'VPL', 'BNDX', 'TLT', 'VCLT', 'PZA', 'AGZ', 'JNK', 'MLN', 'IYR', 'GSG'],
			"weight":[0.0624, 0.0551, 0.0401, 0.0399, 0.0361, 0.0318, 0.0273, 0.0128, 0.0104, 0.0071, 0.1414, 0.1084, 0.0548, 0.1135, 0.0561, 0.0331, 0.0076, 0.0075, 0.0074, 0.0, 0.1059, 0.0413],
			"name":"Retiring 2055"};
		db["RisingFoodPrices1"]={
			"quotes":['GIS', 'K', 'HSY', 'CAG', 'LANC', 'POST', 'HAIN', 'PF', 'TR', 'FLO', 'BNNY', 'BDBD', 'LNCE', 'BGS', 'HRL', 'TSN', 'SAFM', 'PPC', 'CALM', 'BG', 'STKL', 'FDP', 'CVGW', 'CQB', 'DF'],
			"weight":[0.1963, 0.1518, 0.0942, 0.051, 0.0304, 0.0301, 0.0245, 0.0237, 0.0196, 0.0168, 0.0135, 0.0106, 0.01, 0.0093, 0.0715, 0.0421, 0.0174, 0.0115, 0.0108, 0.0887, 0.0098, 0.0359, 0.0107, 0.01, 0.0099],
			"name":"Rising Food Prices1"};
		db["RisingInterestRates"]={
			"quotes":['BK', 'STT', 'NTRS', 'SCHW', 'IBKR', 'SWS', 'BGCP', 'ADP', 'PAYX', 'CBZ', 'MGI', 'EBAY', 'WU', 'UEPS', 'GPN'],
			"weight":[0.2365, 0.1845, 0.0966, 0.196, 0.0513, 0.0088, 0.0064, 0.1031, 0.0163, 0.0078, 0.0382, 0.019, 0.0161, 0.0103, 0.009],
			"name":"Rising Interest Rates"};
		db["RoboticRevolution"]={
			"quotes":['CGNX', 'LECO', 'HLX', 'DHR', 'BRKS', 'TDY', 'ADEP', 'NDSN', 'ISRG', 'MZOR', 'ARAY', 'QGEN', 'NVDQ', 'RTN', 'LMT', 'AVAV', 'NOC', 'SAIC', 'COL', 'ESLT', 'TXT', 'FTI', 'OII', 'FET', 'IRBT'],
			"weight":[0.1244, 0.099, 0.0327, 0.0211, 0.0155, 0.0136, 0.0094, 0.0093, 0.1799, 0.0209, 0.0099, 0.0098, 0.0088, 0.0677, 0.0477, 0.0454, 0.0244, 0.0114, 0.0093, 0.0092, 0.009, 0.076, 0.0454, 0.0114, 0.089],
			"name":"Robotic Revolution"};
		db["SeniorCare"]={
			"quotes":['HCN', 'AVIV', 'BKD', 'CSU', 'NVO', 'TNDM', 'DVA', 'NXTM', 'RMTI', 'CHE', 'ENSG', 'AMED', 'BIOS', 'AFAM', 'HUM', 'UAM', 'THOR', 'ELGX', 'VASC', 'ABMD', 'SPNC', 'WMGI', 'GMED', 'NUVA', 'OFIX'],
			"weight":[0.1647, 0.0359, 0.0277, 0.0171, 0.2183, 0.0098, 0.1393, 0.0119, 0.01, 0.0445, 0.0339, 0.0155, 0.0119, 0.0096, 0.0962, 0.0102, 0.0326, 0.0102, 0.01, 0.0099, 0.0098, 0.0404, 0.0106, 0.0103, 0.0096],
			"name":"Senior Care"};
		db["SevenDeadlySins"]={
			"quotes":['MO', 'BUD', 'STZ', 'BF.B', 'BTI', 'RAI', 'LO', 'PM', 'DEO', 'YUM', 'MCD', 'CHTR', 'DISH', 'CMCSA', 'FOXA', 'CBS', 'MGM', 'WYNN', 'LVS', 'MPEL', 'GS', 'MS', 'LB', 'EL', 'RGR'],
			"weight":[0.0434, 0.0423, 0.0421, 0.0406, 0.0395, 0.0393, 0.0389, 0.0389, 0.0385, 0.0378, 0.0376, 0.0458, 0.0454, 0.0446, 0.0399, 0.0388, 0.036, 0.034, 0.0325, 0.0311, 0.0468, 0.0462, 0.0467, 0.0396, 0.0336],
			"name":"Seven Deadly Sins"};
		db["ShaleGas"]={
			"quotes":['EQT', 'RRC', 'COG', 'RICE', 'AR', 'CHK', 'UPL', 'CNX', 'REXX', 'MHR', 'SGY', 'GST', 'DVN', 'KWK', 'SWN', 'XEC', 'PQ', 'XCO', 'FST', 'MTDR', 'CRK', 'GDP', 'ROSE', 'SM', 'SFY'],
			"weight":[0.1605, 0.128, 0.0919, 0.0462, 0.0408, 0.0361, 0.0241, 0.0105, 0.0104, 0.0101, 0.0099, 0.0095, 0.1393, 0.0087, 0.1415, 0.0425, 0.0097, 0.0108, 0.0105, 0.0102, 0.0096, 0.0092, 0.0103, 0.01, 0.0099],
			"name":"Shale Gas"};
		db["ShaleOil"]={
			"quotes":['HES', 'CLR', 'WLL', 'NOG', 'OAS', 'HK', 'TPLM', 'EOX', 'PXD', 'PE', 'ATHL', 'LPI', 'AXAS', 'CWEI', 'FANG', 'RSPP', 'AREX', 'CPE', 'BCEI', 'PDCE', 'EPE', 'PVA', 'CRZO', 'SN', 'ECR'],
			"weight":[0.2283, 0.0815, 0.0623, 0.0545, 0.0416, 0.0149, 0.0101, 0.0095, 0.1537, 0.0665, 0.0355, 0.0155, 0.0102, 0.0101, 0.01, 0.0099, 0.0097, 0.0094, 0.0484, 0.0312, 0.0385, 0.0189, 0.0102, 0.0096, 0.0101],
			"name":"Shale Oil"};
		db["SmallCapStars"]={
			"quotes":['JJSF', 'MNRO', 'CORE', 'MWIV', 'TXRH', 'CHDN', 'GCO', 'LTM', 'BJRI', 'DORM', 'SCVL', 'MGLN', 'MASI', 'NEOG', 'CHE', 'ENSG', 'VASC', 'SLAB', 'EGOV', 'CPSI', 'SYKE', 'EXLS', 'EXPO', 'AEGN', 'HCSG'],
			"weight":[0.0764, 0.0521, 0.0519, 0.0487, 0.0486, 0.0482, 0.0477, 0.0324, 0.0263, 0.0127, 0.0098, 0.0645, 0.0461, 0.0441, 0.0382, 0.0325, 0.0162, 0.0544, 0.0472, 0.0323, 0.026, 0.0357, 0.0339, 0.0455, 0.0287],
			"name":"Small Cap Stars"};
		db["SmartGrid"]={
			"quotes":['ROP', 'BMI', 'ITRI', 'ESE', 'PWER', 'AMSC', 'ENOC', 'POWR', 'LIME'],
			"weight":[0.3811, 0.1292, 0.1212, 0.1386, 0.076, 0.0136, 0.0744, 0.0452, 0.0206],
			"name":"Smart Grid"};
		db["SociallyResponsible"]={
			"quotes":['INTC', 'MSFT', 'AAPL', 'GOOGL', 'ADP', 'IBM', 'COST', 'NKE', 'PG', 'JNJ', 'KO', 'CL', 'LLY', 'BMY', 'MDT', 'MRK', 'PFE', 'MMM', 'ITW', 'WFC'],
			"weight":[0.0595, 0.0546, 0.0515, 0.05, 0.0498, 0.0492, 0.0511, 0.0502, 0.0495, 0.0485, 0.048, 0.0453, 0.0523, 0.0506, 0.0493, 0.0487, 0.0477, 0.0479, 0.0479, 0.0482],
			"name":"Socially Responsible"};
		db["SocialNetworking"]={
			"quotes":['LNKD', 'FB', 'WB', 'TWTR', 'RENN', 'UNTD', 'YOKU', 'YY', 'YELP', 'ANGI', 'ZNGA', 'KING', 'IACI', 'JIVE'],
			"weight":[0.2381, 0.2001, 0.1442, 0.0649, 0.0159, 0.0143, 0.014, 0.0094, 0.1548, 0.0227, 0.0794, 0.0148, 0.0138, 0.0137],
			"name":"Social Networking"};
		db["SoftwareasaService"]={
			"quotes":['CRM', 'WDAY', 'NOW', 'ULTI', 'N', 'CNQR', 'SPSC', 'CVT', 'SQI', 'CALD', 'CSOD', 'PCTY', 'ATHN', 'TRAK', 'VEEV', 'QTWO', 'AMBR', 'MDSO', 'CTCT', 'LPSN', 'PGI', 'LOGM', 'DWRE', 'BV', 'PFPT'],
			"weight":[0.2471, 0.1206, 0.08, 0.0778, 0.0608, 0.0387, 0.0357, 0.0174, 0.0116, 0.0109, 0.0105, 0.0417, 0.0372, 0.0272, 0.0238, 0.0217, 0.0131, 0.0094, 0.0299, 0.01, 0.0212, 0.0148, 0.0189, 0.0101, 0.0099],
			"name":"Software as a Service"};
		db["Spinoffs"]={
			"quotes":['TMST', 'XYL', 'BWC', 'NX', 'WBC', 'RYAM', 'CLW', 'WWAV', 'DPS', 'SBH', 'HSNI', 'AMCX', 'TPUB', 'TIME', 'CBSO', 'JBT', 'SAIC', 'NAME', 'RSE', 'NSAM', 'WPG', 'DNOW', 'PSX', 'PGN', 'TBPH'],
			"weight":[0.0411, 0.0407, 0.0402, 0.0402, 0.0382, 0.0382, 0.0378, 0.043, 0.0418, 0.0408, 0.0399, 0.0393, 0.0445, 0.0409, 0.0385, 0.0418, 0.0413, 0.0395, 0.0414, 0.0393, 0.0371, 0.041, 0.0402, 0.0347, 0.0385],
			"name":"Spinoffs"};
		db["StableEarnings"]={
			"quotes":['ROL', 'MCD', 'HRL', 'LO', 'KMX', 'UNFI', 'HSIC', 'MD', 'VAR', 'WAT', 'WEC', 'SWX', 'ATO', 'IDA', 'XEL', 'IBM', 'TDY', 'ERIE', 'FFIN', 'AON', 'FDS', 'USTR', 'SIAL', 'BCPC', 'FTI'],
			"weight":[0.0522, 0.0499, 0.0424, 0.0394, 0.0275, 0.0179, 0.0861, 0.048, 0.0368, 0.0269, 0.0567, 0.0371, 0.0364, 0.0247, 0.0169, 0.089, 0.0358, 0.0506, 0.0478, 0.0096, 0.0499, 0.0314, 0.0644, 0.0106, 0.012],
			"name":"Stable Earnings"};
		db["TabletTakeover"]={
			"quotes":['BRCM', 'QCOM', 'SWKS', 'ARMH', 'SYNA', 'MXIM', 'ATML', 'CRUS', 'SIMG', 'NVDA', 'INVN', 'HIMX', 'STM', 'FCS', 'SIMO', 'AAPL', 'BBRY', 'MSFT', 'MU', 'SNDK', 'LPL'],
			"weight":[0.146, 0.0939, 0.0808, 0.047, 0.0156, 0.0099, 0.0099, 0.0097, 0.0097, 0.0097, 0.0097, 0.0096, 0.0095, 0.0094, 0.0092, 0.2486, 0.0107, 0.0103, 0.1435, 0.097, 0.0103],
			"name":"Tablet Takeover"};
		db["TakingFlight"]={
			"quotes":['DAL', 'AAL', 'LUV', 'RYAAY', 'UAL', 'LFL', 'ALK', 'CPA', 'SAVE', 'JBLU', 'AVH', 'VLRS', 'GOL', 'HA', 'RJET', 'SKYW', 'AL', 'AER', 'AYR', 'FLY', 'AAWW', 'ATSG', 'PAC', 'ASR', 'MIC'],
			"weight":[0.1435, 0.1089, 0.1046, 0.0941, 0.0831, 0.046, 0.0444, 0.0343, 0.0334, 0.0188, 0.0119, 0.0102, 0.0101, 0.0098, 0.0097, 0.0077, 0.0458, 0.0456, 0.0106, 0.0097, 0.0096, 0.009, 0.0613, 0.0269, 0.011],
			"name":"Taking Flight"};
		db["TaxInversionTargets"]={
			"quotes":['ICLR', 'ACT', 'JAZZ', 'TRIB', 'IR', 'ETN', 'IHG', 'AZN', 'GWPH', 'GSK', 'ARMH', 'RDC', 'TRNX', 'VPRT', 'ENL', 'QGEN', 'STM', 'TEL', 'PNR', 'LOGI', 'G', 'HELE', 'IMOS', 'FDP', 'SIMO'],
			"weight":[0.0437, 0.0424, 0.0419, 0.0395, 0.0389, 0.0383, 0.0411, 0.0404, 0.0399, 0.0398, 0.0387, 0.0377, 0.0453, 0.0415, 0.0403, 0.0398, 0.0387, 0.0401, 0.0387, 0.0373, 0.0381, 0.038, 0.0379, 0.0428, 0.0394],
			"name":"Tax Inversion Targets"};
		db["TechTakeoutTargets"]={
			"quotes":['LOGM', 'CVT', 'TXTR', 'PGI', 'MKTO', 'SAAS', 'WAGE', 'ELLI', 'CTCT', 'FLTX', 'SPSC', 'LPSN', 'RP', 'DWRE', 'NICE', 'PRO', 'MSTR', 'CVLT', 'LXFT', 'DWCH', 'RDWR', 'IMPV', 'QLYS', 'AVG', 'PFPT'],
			"weight":[0.0433, 0.0419, 0.0414, 0.041, 0.0409, 0.0404, 0.0403, 0.0401, 0.04, 0.0393, 0.0393, 0.0391, 0.0391, 0.0382, 0.0426, 0.0407, 0.0403, 0.0393, 0.037, 0.0338, 0.0416, 0.0415, 0.0407, 0.0396, 0.0386],
			"name":"Tech Takeout Targets"};
		db["ThatNewCarSmell"]={
			"quotes":['TM', 'GM', 'HMC', 'F', 'TSLA', 'TTM', 'MGA', 'DLPH', 'STRT', 'CPS', 'CXDC', 'LEA', 'GNTX', 'THRM', 'VC', 'ALV', 'BWA', 'FDML', 'AXL', 'SHLO', 'TEN', 'TRW', 'TOWR', 'SUP'],
			"weight":[0.2536, 0.1344, 0.1233, 0.1035, 0.0496, 0.0281, 0.0528, 0.0512, 0.0125, 0.0094, 0.0048, 0.0413, 0.0158, 0.0116, 0.0114, 0.0094, 0.0191, 0.0095, 0.0094, 0.0092, 0.0088, 0.0118, 0.0102, 0.0093],
			"name":"That New Car Smell"};
		db["TooBigtoFail"]={
			"quotes":['JPM', 'BAC', 'C', 'AXP', 'WFC', 'USB', 'PNC', 'COF', 'BBT', 'STI', 'FITB', 'KEY', 'RF', 'AIG', 'MET', 'GS', 'MS', 'BK', 'STT'],
			"weight":[0.1354, 0.0977, 0.0882, 0.0609, 0.1804, 0.0533, 0.0297, 0.0247, 0.0173, 0.0138, 0.0124, 0.0086, 0.0084, 0.069, 0.0382, 0.0611, 0.0443, 0.0324, 0.0242],
			"name":"Too Big to Fail"};
		db["TransportingAmerica"]={
			"quotes":['UNP', 'CNI', 'CSX', 'CP', 'NSC', 'KSU', 'AAL', 'LUV', 'DAL', 'UAL', 'ALK', 'JBLU', 'SKYW', 'UPS', 'CHRW', 'LSTR', 'QLTY', 'R', 'HTLD', 'ODFL', 'KNX', 'JBHT', 'WERN', 'EXPD', 'FWRD'],
			"weight":[0.1968, 0.1408, 0.0566, 0.0547, 0.0372, 0.0103, 0.0453, 0.0443, 0.0364, 0.0234, 0.0203, 0.011, 0.0072, 0.1577, 0.0339, 0.0222, 0.0092, 0.0139, 0.0105, 0.0103, 0.01, 0.0096, 0.009, 0.0164, 0.0132],
			"name":"Transporting America"};
		db["UsedCarTuneup"]={
			"quotes":['AZO', 'ORLY', 'GPC', 'AAP', 'LKQ', 'PBY', 'KMX', 'CPRT', 'KAR', 'LAD', 'ABG', 'SAH', 'MNRO', 'DORM', 'SMP', 'GT', 'CTB'],
			"weight":[0.2015, 0.1697, 0.1406, 0.1007, 0.0747, 0.0096, 0.101, 0.0597, 0.0252, 0.0101, 0.01, 0.0089, 0.0255, 0.0145, 0.0083, 0.0296, 0.0105],
			"name":"Used Car Tune up"};
		db["USTreasuryLadder"]={
			"quotes":['BSV', 'TLT', 'TLH', 'SCHR', 'IEF'],
			"weight":[0.2508, 0.1249, 0.1249, 0.2499, 0.2495],
			"name":"US Treasury Ladder"};
		db["UtilityBills"]={
			"quotes":['T', 'VZ', 'S', 'SHEN', 'TDS', 'XEL', 'PCG', 'UTL', 'NEE', 'IDA', 'MGEE', 'EIX', 'AEE', 'PNW', 'EDE', 'POR', 'GXP', 'SRE', 'CPK', 'OGS', 'DISH', 'WM', 'CWCO', 'CWT', 'SJW'],
			"weight":[0.1836, 0.1768, 0.0273, 0.0097, 0.0093, 0.092, 0.0703, 0.057, 0.031, 0.0258, 0.0256, 0.0202, 0.0201, 0.0159, 0.0105, 0.0102, 0.0099, 0.0649, 0.01, 0.01, 0.0433, 0.0431, 0.0124, 0.0108, 0.0102],
			"name":"Utility Bills"};
		db["VanityFlair"]={
			"quotes":['PG', 'EL', 'UN', 'COTY', 'ULTA', 'IFF', 'AVP', 'LB', 'SBH', 'REV', 'IPAR', 'NUS', 'RDEN', 'AGN', 'ALGN', 'ZLTQ', 'VRX', 'CYNO', 'USNA', 'RVNC', 'PHMD', 'TIF', 'SIG', 'NILE', 'MOV'],
			"weight":[0.258, 0.1571, 0.0668, 0.0419, 0.04, 0.0253, 0.0234, 0.0226, 0.0191, 0.0103, 0.0095, 0.0094, 0.006, 0.1344, 0.0144, 0.0141, 0.0112, 0.0103, 0.0099, 0.0066, 0.0057, 0.0503, 0.0352, 0.0094, 0.0093],
			"name":"Vanity Flair"};
		db["WallStreet"]={
			"quotes":['GS', 'MS', 'CS', 'RY', 'BNS', 'JPM', 'BCS', 'DB', 'UBS', 'BAC', 'NMR', 'BMO', 'C', 'LAZ', 'SF', 'LTS', 'PJC', 'RJF', 'COWN', 'GHL', 'EVR', 'FBRC', 'BAM', 'ACAS', 'SFE'],
			"weight":[0.2307, 0.1129, 0.0939, 0.079, 0.0707, 0.0475, 0.0426, 0.039, 0.039, 0.0315, 0.0189, 0.0158, 0.0099, 0.0304, 0.014, 0.0105, 0.0099, 0.0099, 0.0099, 0.0098, 0.0098, 0.0096, 0.0274, 0.0173, 0.0099],
			"name":"Wall Street"};
		db["WaterShortage"]={
			"quotes":['XYL', 'FELE', 'RXN', 'GRC', 'NES', 'LAYN', 'MWA', 'WMS', 'NWPX', 'IEX', 'VE', 'ECL', 'PNR', 'CCC', 'ROP', 'WTS', 'BMI', 'AEGN', 'ESE', 'ITRI', 'LNN', 'VMI', 'TTC', 'PICO', 'CWCO'],
			"weight":[0.12, 0.0431, 0.0428, 0.038, 0.0246, 0.0134, 0.0112, 0.0109, 0.0101, 0.0099, 0.1228, 0.0835, 0.0766, 0.0222, 0.0936, 0.0762, 0.0546, 0.0247, 0.0101, 0.0098, 0.0618, 0.0101, 0.0098, 0.01, 0.01],
			"name":"Water Shortage"};
		db["WearableTech"]={
			"quotes":['GPRO', 'GRMN', 'GOOGL', 'AAPL', 'ARMH', 'TXN', 'MXIM', 'MCHP', 'SLAB', 'STM', 'SMTC', 'ADI', 'INVN', 'SYNA', 'HIMX', 'CY', 'KN', 'QCOM', 'BRCM', 'SWKS', 'GLW', 'LPL', 'AUO', 'TNDM', 'PODD'],
			"weight":[0.1346, 0.1251, 0.121, 0.1177, 0.0341, 0.0305, 0.0305, 0.0305, 0.0239, 0.0189, 0.0157, 0.0348, 0.0344, 0.0303, 0.022, 0.0213, 0.0119, 0.0373, 0.0348, 0.0286, 0.0142, 0.0137, 0.0092, 0.0147, 0.01],
			"name":"Wearable Tech"};
		db["WorldofSports"]={
			"quotes":['NKE', 'VFC', 'UA', 'FL', 'COLM', 'LULU', 'FINL', 'HIBB', 'DECK', 'NLS', 'JAH', 'WWW', 'DIS', 'MSG', 'ISCA', 'LTM', 'CODI', 'BC', 'MBUU', 'SNOW', 'ELY', 'BDE', 'DKS', 'BGFV', 'SPWH'],
			"weight":[0.2105, 0.1538, 0.0947, 0.0815, 0.0499, 0.0228, 0.0204, 0.0166, 0.0117, 0.0106, 0.0102, 0.0096, 0.1296, 0.0658, 0.0098, 0.0136, 0.0097, 0.0096, 0.0092, 0.0089, 0.0088, 0.0067, 0.0209, 0.0082, 0.0069],
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
