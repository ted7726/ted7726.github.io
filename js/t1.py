import urllib
import re
import os
from xlrd import open_workbook
os.system("del *.xlsx")

motifs1 = [
	"Shale-Oil",
	"Frack-Attack",
	"Finding-Momo",
	"Dr-Copper",
	"Black-Gold",
	"Big-Data",
	"Bear-International-Market",
	"Bear-US-Market",
	"Bear-US-Sectors",
	"Shale-Gas",
	"No-Glass-Ceilings",
	"Biotech-Breakthroughs",
	"Social-Networking",
	"High-Spirits",
	"Natural-Gas-Glut",
	"Onward-Online-Ads",
	"Drug-Patent-Cliffs",
	"Office-Space",
	"Online-Gaming-World",
	"Energetic-MLPs",
	"Battling-Cancer",
	"Used-Car-Tune-up",
	"Recycled-Steel",
	"Hot-Retail",
	"Low-Beta",
	"Tablet-Takeover",
	"Precious-Metals",
	"Repeal-Obamacare",
	"Dividend-Stars",
	"Caffeine-Fix",
	"Junk-Foods",
	"Income-Inequality",
	"Defensive-Dividends",
	"Home-Improvement",
	"Dogs-of-the-Dow",
	"Discount-Nation",
	"China-Internet",
	"Chinese-Solar",
	"Cleantech-Everywhere",
	"Couch-Commerce",
	"Rest-In-Peace",
	"Retiring-2055",
	"High-Yield-Dividends",
	"Sell-in-May",
	"Retiring-2050",
	"New-Era-Portfolio",
	"7Twelve-Core-Portfolio",
	"Utility-Bills",
	"Bullet-Proof-Balance-Sheets",
	"Retiring-2045",
	"All-American",
	"Classic-60-40",
	"Retiring-2040",
	"Nuclear-Renaissance",
	"Cash-Flow-Kings",
	"Lots-of-Likes",
	"Fossil-Free",
	"On-The-Road",
	"Modern-Warfare",
	"Growing-Dividends",
	"Retiring-2035",
	"Renter-Nation",
	"Digital-Dollars",
	"Ivy-League",
	"BRICS-Building",
	"Retiring-2030",
	"Socially-Responsible",
	"Pet-Passion",
	"Online-Video",
	"No-Brainer-Portfolio",
	"Higher-Highs",
	"Healthy-and-Tasty",
	"Retiring-2025",
	"Lazy-3-Portfolio",
	"Electronic-Trading",
	"Vanity-Flair",
	"Senior-Care",
	"Disappointing-the-Street",
	"Content-is-King",
	"Horizon-Model-5-Year-Aggressive",
	"Horizon-Model-15-Year-Aggressive",
	"Horizon-Model-1-Year-Aggressive",
	"Horizon-Model-5-Year-Moderate",
	"Horizon-Model-1-Year-Moderate",
	"Horizon-Model-15-Year-Moderate",
	"Index-Fans",
	"GARP",
	"Childs-Play",
	"Robotic-Revolution",
	"Transporting-America",
	"Small-Cap-Stars",
	"Democratic-Donors",
	"World-of-Sports",
	"No-Brainer-Portfolio",
	"No-Glass-Ceilings",
	"Nuclear-Renaissance",
	"Obamacare",
	"Office-Space",
	"Online-Gaming-World",
	"Online-Video",
	"On-The-Road",
	"Onward-Online-Ads",
	"Permanent-Strategy",
	"Pet-Passion",
	"Precious-Metals",
	"Private-Equity",
	"Property-Casualty-Insurance",
	"QE-Japan",
	"Recent-IPOs",
	"Recycled-Steel",
	"Renter-Nation",
	"Repeal-Obamacare",
	"Republican-Donors",
	"Rest-In-Peace",
	"Retiring-2020",
	"Retiring-2025",
	"Retiring-2030",
	"Retiring-2035",
	"Retiring-2040",
	"Retiring-2045",
	"Retiring-2050",
	"Retiring-2055",
	"Rising-Food-Prices1",
	"Rising-Interest-Rates",
	"Robotic-Revolution",
	"Senior-Care",
	"Seven-Deadly-Sins",
	"Shale-Gas",
	"Shale-Oil",
	"Small-Cap-Stars",
	"Smart-Grid",
	"Socially-Responsible",
	"Social-Networking",
	"Software-as-a-Service",
	"Spinoffs",
	"Stable-Earnings",
	"Tablet-Takeover",
	"Taking-Flight",
	"Tax-Inversion-Targets",
	"Tech-Takeout-Targets",
	"That-New-Car-Smell",
	"Too-Big-to-Fail",
	"Transporting-America",
	"Used-Car-Tune-up",
	"US-Treasury-Ladder",
	"Utility-Bills",
	"Vanity-Flair",
	"Wall-Street",
	"Water-Shortage",
	"Wearable-Tech",
	"World-of-Sports"
]



# motifs2= ["IBD-Top-25"]


for x in motifs1:
	try:
		print "download "+x
		urllib.urlretrieve ("https://trader.motifinvesting.com/motifs/"+x+"/export", x+".xlsx")
	except :
		print "Error: "+x
		
f=open('motifs.js','w')


f.write("function getMotifs(motif){\n")
f.write("	if( typeof(this.db) === 'undefined'){\n")
f.write("		this.db = {};\n")
f.close()

for fileName in motifs1:
	try:
		print "loading file: " +fileName+".xlsx"
		f=open('motifs.js','a')
		book = open_workbook(fileName+'.xlsx')
		sheet = book.sheet_by_index(0)
		f.write('		db["'+re.sub('-','',fileName)+'"]={\n')
		f.write('			"quotes":'+re.sub('u','',str( [sheet.cell(i,1).value for i in range(2,sheet.nrows)]))+",\n")
		f.write('			"weight":'+str( [round(sheet.cell(i,3).value*100,2) for i in range(2,sheet.nrows)])+",\n")
		f.write('			"name":"'+re.sub('-',' ',fileName)+'"};\n')
		f.close()
	except :
		print "Loading error:" + fileName+"\n"

f=open('motifs.js','a')
f.write('	}\n')
f.write('	return db[motif];')
f.write('}\n')
f.close()


os.system("del *.xlsx")
