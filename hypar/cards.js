const cardColor = {
	"중립":{"border":"#884A39", "name":"#C38154", "textbox":"#F9E0BB"},
	"부정적":{"border":"#B04759", "name":"#E76161", "textbox":"#F9E0BB"},
	"전사":{"border":"#472D2D", "name":"#A77979", "textbox":"#F9E0BB"},
	"암살자":{"border":"#27374D", "name":"#9DB2BF", "textbox":"#F9E0BB"},
	"마술사":{"border":"#352F44", "name":"#968CB2", "textbox":"#F9E0BB"},
	"치유사":{"border":"#183D3D", "name":"#5C8374", "textbox":"#F9E0BB"},
	"고블린즈":{"border":"#5F6F52", "name":"#B99470", "textbox":"#F9E0BB"},
	"마을사람":{"border":"#776B5D", "name":"#B0A695", "textbox":"#F9E0BB"},
	"촉수슬라임":{"border":"#164863", "name":"#9BBEC8", "textbox":"#F9E0BB"},
	"악동":{"border":"#4B4B4B", "name":"#B44545", "textbox":"#F9E0BB"},
	"타우로스":{"border":"#2E2E2E", "name":"#9C9C9C", "textbox":"#F9E0BB"},
	"버섯남자":{"border":"#2C3E3F", "name":"#6A7D6C", "textbox":"#F9E0BB"},
	"금발양아치":{"border":"#5C4033", "name":"#B79F5B", "textbox":"#F9E0BB"},
	"조교사":{"border":"#4A2C2A", "name":"#8E8170", "textbox":"#F9E0BB"},

	"등급":{"normal":"#BFBFBF", "expert":"#5C7893", "ultimate":"#B89C67"}
}

const cardDB = {
	"AD-NT-EL-001":{
		name:{ "KOR":"Adaptability" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", cost:10, owner:1,
		tags:[],
		expiration:"active", duration:1,
		flavorText:{ "KOR":"Islands, deserts, snowfields... there is no place an Eldorian cannot live.<br>All across the continent of Oldinsaleia, you can see Eldorians who have adapted to their environments." },
		hypnoText:{ "KOR":"Give up.<br>Accept that you are a sex slave and act accordingly." },
		effect:[
			{trigger:"orgasm", cond:true, type:"estrus", op:"add", value:-3},
		]
	},
	"AD-NT-EL-002":{
		name:{ "KOR":"Diversity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", cost:5, owner:1,
		tags:[], related:["tag:엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Those now known as Eldorians were originally divided into several different ethnic groups.<br>When the Kingdom of Eldoria united them as a single race, they became the most diverse people in existence." },
		hypnoText:{ "KOR":"Since Glit Haven is part of the Kingdom of Eldoria, most of its customers and merchandise are Eldorian.<br>This means there is a wide variety of goods available. What kind of merchandise are you?" },
		effect:[
			{trigger:"gameStart", cond:true, type:"state", target:"self", value:"randomCard(tags, 엘도리아인 형질)"},
		]
	},
	"AD-NT-EL-002-1":{
		name:{ "KOR":"Central People" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", cond:true, value:{ "KOR":"Just ordinary." }},
		]
	},
	"AD-NT-EL-002-2":{
		name:{ "KOR":"Eastern People" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:-2},
			{trigger:"always", cond:true, type:"orgasmL", target:"self", op:"add", value:1},
		]
	},
	"AD-NT-EL-002-3":{
		name:{ "KOR":"Northern People" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:5},
			{trigger:"always", cond:true, type:"orgasmL", target:"self", op:"add", value:-1},
		]
	},
	"AD-NT-EL-002-4":{
		name:{ "KOR":"Southern People" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"estrusAndLewd", op:"add", value:1},
		]
	},
	"AD-NT-EL-002-5":{
		name:{ "KOR":"Eldorian Royalty" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["엘도리아인 형질"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"orgasmL", target:"self", op:"add", value:1},
		]
	},
	"AD-NT-SY-001":{
		name:{ "KOR":"Beauty" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"While each race has its own standards of beauty, the Sylvani's appearance happens to perfectly align with the ideals pursued by Eldorians.<br>The Verdant Sylvani, with their fair skin and green hair and eyes, possess the refined beauty sought by nobles,<br>while the Twilight Sylvani, with their brown skin and golden hair and eyes, exude the healthy beauty admired by commoners." },
		hypnoText:{ "KOR":"They may seem like a flower on a cliff, but in reality, they are nothing but vulgar, masochistic bitches." },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.count(type, 패널티)", op:"==", v2:0}, type:"lewd", op:"add", value:1}
		]
	},
	"AD-NT-SY-002":{
		name:{ "KOR":"Longevity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", cost:0, owner:1,
		tags:[], related:["PN-009"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The lifespan of a Sylvani is more than ten times that of other races.<br>Thanks to this, the depth of skill and knowledge an individual can acquire over their long life is far beyond what other races could ever hope to achieve." },
		hypnoText:{ "KOR":"Despite their long natural lifespan, a Sylvani's life as a slave is not so long.<br>As a backlash to your long years of asceticism, you are easily broken by desire." },
		effect:[
			{trigger:"trait", cond:true, type:"maxRound", value:2},
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"PN-009"},
		]
	},
	"AD-NT-HA-001":{
		name:{ "KOR":"Small Stature" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Halfmen stand at just over half the height of an Eldorian.<br>However, their strength belies their appearance, and underestimating them would be a grave mistake." },
		hypnoText:{ "KOR":"Halfman slaves have a niche but enthusiastic clientele.<br>They say it's their cute looks and disproportionately voluptuous bodies that are so appealing." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:-1},
		]
	},
	"AD-NT-HA-002":{
		name:{ "KOR":"Dexterity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"If you walk through the workshop district, you'll find that many artisans are Halfmen. This is because their small hands are adept at precise, detailed work.<br>This natural talent allowed Halfmen, who had nothing, to establish themselves after their emancipation." },
		hypnoText:{ "KOR":"You possess delicate and stimulating caressing techniques.<br>These are the hands of a master artisan, capable of producing excellent work. Unfortunately, it seems your life is destined to end in chains." },
		effect:[
			{trigger:"gameStart", cond:true, type:"effect", op:"add",
			info: {
				target:"자기덱.selectCards(all, 추가카드제외, 1)",
				effect:[
					{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
				]
			}},
		]
	},
	"AD-NT-TR-001":{
		name:{ "KOR":"Powerful Physique" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"If you were to name the most physically superior race on the continent of Oldinsaleia, it would have to be the Tribe.<br>They are born with solid muscles, flexibility, and sharp senses.<br>If they were more numerous and unified, they would surely be the most formidable race." },
		hypnoText:{ "KOR":"Lately, Tribe pets have become fashionable in the slave market.<br>They are sturdy and don't break easily, and if you think of them as beasts rather than people, they can be used without any moral burden." },
		effect:[
			{trigger:"always", cond:{v1:"자신.절정", op:"==", v2:0}, type:"exciteL", target:"self", op:"add", value:2},
		]
	},
	"AD-NT-TR-002":{
		name:{ "KOR":"Wild Instincts" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A Tribe's senses are always on high alert.<br>The slightest sound, the flow of the wind, a change in scent—they miss nothing and react instantly." },
		hypnoText:{ "KOR":"The Tribe tend to follow their instincts over rational judgment.<br>With a little training, you too can become a pet begging to mate!" },
		effect:[
			{trigger:"always", cond:{v1:"상대.행동.count(type, 공격)", op:">", v2:0}, type:"lewd", op:"add", value:1},
		]
	},


	"AD-NT-BG1-001":{
		name:{ "KOR":"Loyalty" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are prepared to lay down your life for your beliefs and honor.<br>Devoted to your superior's orders and the safety of your comrades, your unwavering loyalty guides you on the path of a true soldier." },
		hypnoText:{ "KOR":"Upon seeing your Master, spread your legs and salute with your pussy.<br>As a female soldier, you must cultivate your lewdness.<br>You must offer your body whenever and wherever commanded." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"AD-NT-BG1-002":{
		name:{ "KOR":"Discipline" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Forged through strict rules and rigorous training, you remain unshaken in any situation.<br>You uphold the army's honor and traditions, maintaining order with strong mental fortitude and discipline." },
		hypnoText:{ "KOR":"Conduct a masturbation roll call every morning.<br>You are not to orgasm without permission." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2},
		]
	},
	"AD-NT-BG2-001":{
		name:{ "KOR":"Great Wealth" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"With your vast fortune, you can obtain anything you desire.<br>If there's an item you want, you can buy it. If there's a skill you need, you can hire someone who has it." },
		hypnoText:{ "KOR":"It is common sense that a female's private property is not recognized.<br>When you find a man to be your master, you must surrender your entire fortune and your body to him." },
		effect:[
			{trigger:"trait", cond:true, type:"maxDeck", value:2},
		]
	},
	"AD-NT-BG2-002":{
		name:{ "KOR":"Culture" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:10, owner:1,
		tags:[], related:["궁극"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Through your noble status and diverse experiences, you have ingrained in yourself refined manners and etiquette.<br>By maintaining your dignity, you can convey your class to others and gain a weapon to use against the less fortunate." },
		hypnoText:{ "KOR":"Greet men by lifting your skirt, spreading your legs, and showing them your pussy.<br>If you receive lewd comments or critiques of your body, you must express your gratitude." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"randomCard(rarity, 궁극)"},
		]
	},
	"AD-NT-BG3-001":{
		name:{ "KOR":"Performance" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Shining on stage, you possess a talent for capturing people's attention.<br>Your every dazzling move rallies your allies and mesmerizes your foes." },
		hypnoText:{ "KOR":"The performance: public masturbation in heat.<br>The highlight: a squirting orgasm show." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:7}, type:"lewd", op:"add", value:3},
		]
	},
	"AD-NT-BG3-002":{
		name:{ "KOR":"Fan Service" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Communicating with your fans is the secret to your success.<br>You have achieved your current popularity by rewarding their love, always approaching them with a warm smile and a sincere heart." },
		hypnoText:{ "KOR":"Daily life involves giving your fans handjobs to show your appreciation.<br>It is the duty of a star to take facials and remember the shape, smell, and feel of each fan's cock." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.length", op:"<=", v2:5}, type:"excite", target:"op", op:"add", value:3},
		]
	},
	"AD-NT-BG4-001":{
		name:{ "KOR":"Purity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have kept your body and mind pure, dedicated to the gods.<br>Your faith is your shield, protecting you from worldly temptations for a sacred purpose." },
		hypnoText:{ "KOR":"As a body that serves the gods, purity is paramount.<br>Even during service and entertainment, you must only use your back hole, keeping your front pussy pristine." },
		effect:[
			{trigger:"always", cond:true, type:"estrusAndLewd", op:"add", value:-2},
		]
	},
	"AD-NT-BG4-002":{
		name:{ "KOR":"Piety" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your deep faith in the gods makes you strong.<br>This piety gives you unwavering will and courage in difficult times, and it serves as a great inspiration and source of hope for those around you." },
		hypnoText:{ "KOR":"Worship the holy cock and serve it from the bottom of your heart.<br>You must be thankful for having your lewd holes pounded by its sacred shaft and for being impregnated by the holy cum generously poured into your womb." },
		effect:[
			{trigger:"trait", cond:true, type:"maxRound", value:2},
		]
	},
	"AD-NT-BG5-001":{
		name:{ "KOR":"Insight" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:10, owner:1,
		tags:[], related:["tag:탐구"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You possess a talent for seeing through to the essence of things with your deep knowledge and sharp analytical skills.<br>Your insight provides a clear path even in the most complex situations." },
		hypnoText:{ "KOR":"Your field of study is researching and gaining insight into how to please men through intercourse.<br>You must use your own body as a test subject, analyzing the degree of erection and volume of ejaculate based on different positions and acts." },
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"self", value:"randomCard(tags, 탐구)"},
		]
	},
	"AD-NT-BG5-001-1":{
		name:{ "KOR":"Mechanics Research" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["탐구"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 공격)", op:">", v2:0}, type:"lewd", op:"add", value:1},
		]
	},
	"AD-NT-BG5-001-2":{
		name:{ "KOR":"Observational Research" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["탐구"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 보조)", op:">", v2:0}, type:"estrus", op:"add", value:-1},
		]
	},
	"AD-NT-BG5-001-3":{
		name:{ "KOR":"Statistical Research" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["탐구"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 패널티)", op:">", v2:0}, type:"exciteL", target:"self", op:"add", value:1},
		]
	},
	"AD-NT-BG5-002":{
		name:{ "KOR":"Erudition" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"With your vast knowledge and expertise in various disciplines, you can deeply understand any subject.<br>This erudition allows you to come up with the right solution no matter the situation." },
		hypnoText:{ "KOR":"How to enhance the pleasure of masturbation, the most responsive erogenous zones, arousing situations...<br>Special fetish play, tongue techniques, pillow talk topics..." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"자신.기록.전체.사용.count(class, 중립)", maxValue:3},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(class, 중립)", maxValue:3},
		]
	},
	"AD-NT-BG6-001":{
		name:{ "KOR":"Cruelty" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are cruelty itself.<br>You crush your opponents with emotionless eyes, treating their screaming agony as mere entertainment.<br>Mercy and pity are not in your vocabulary; you will achieve your goals by any means necessary, no matter how vile." },
		hypnoText:{ "KOR":"Forcing a man to be fucked and bred is the ultimate humiliation.<br>What a look of despair he'll have when you tell him you're going to get pregnant from raw sex on your fertile day." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:3}, type:"lewd", op:"add", value:3},
		]
	},
	"AD-NT-BG6-002":{
		name:{ "KOR":"Expedience" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:0,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have a knack for cleverly skirting rules and laws.<br>You have taken unfair advantages, seizing profits that could not be obtained through honest means." },
		hypnoText:{ "KOR":"When the city guard caught you in the act, you would often get away with it by giving them a quick fuck.<br>Eventually, a rumor spread among the guards that working your patrol route was a sure way to get a free nut." },
		effect:[
			{trigger:"trait", cond:true, type:"maxDeck", value:-2},
		]
	},
	"AD-NT-BG7-001":{
		name:{ "KOR":"Hospitality" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have an exceptional talent for dealing with customers.<br>Your kind and skillful service wins people over and is a great help in closing deals." },
		hypnoText:{ "KOR":"You must use your body to service the customers.<br>Payment will be received in cum." },
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"randomCard(rarity, 일반)"},
		]
	},
	"AD-NT-BG7-002":{
		name:{ "KOR":"Accurate Pricing" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"If the price is too high, it won't sell. If it's too low, you'll take a loss.<br>The ability to accurately assess an item's value is a fundamental sense required of a merchant." },
		hypnoText:{ "KOR":"A cheap pussy not even worth pricing.<br>You should thank the customers for using it for free." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"자신.기록.이번.이벤트.획득.length", maxValue:3},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.이번.이벤트.획득.length", maxValue:3},
		]
	},
	"AD-NT-BG8-001":{
		name:{ "KOR":"Survival" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:5, owner:1,
		tags:["act:삽입"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You know how to survive.<br>You make calm judgments even in extreme situations and find a way to avoid the worst outcomes.<br>Whether on the battlefield or in the wasteland, your survival instincts and experience are what matter most." },
		hypnoText:{ "KOR":"When your life is in danger, you must beg them to spare you in exchange for your body.<br>If you act like you've been broken and driven insane from being raped, they'll probably let you go." },
		effect:[
			{trigger:"usePenalty", cond:true, type:"attack", target:"op"},
		]
	},
	"AD-NT-BG8-002":{
		name:{ "KOR":"Freelancer" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Having gained experience through various requests and contracts, you have the ability to work independently in any situation.<br>This freedom and flexibility allow you to adapt quickly to different circumstances, establishing you as a trusted mercenary among your employers." },
		hypnoText:{ "KOR":"When you were out of work, you would masturbate all day.<br>You soaked the inn's bedsheets while fantasizing about being raped." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.length", op:"==", v2:0}, type:"exciteL", target:"self", op:"add", value:2},
		]
	},

	"AD-NT-EL-BG1-001":{
		name:{ "KOR":"Queen's Sword" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Queen of the Kingdom of Eldoria has loyal subordinates who carry out her direct orders.<br>They are elite soldiers who perform various missions—escort, investigation, assassination—at her command, unafraid of death.<br>You are one of them, here now to carry out a mission given by Her Majesty the Queen." },
		hypnoText:{ "KOR":"The foundation of your loyalty was a blasphemous desire for the Queen.<br>You masturbate to the thought of her body every day, secretly wishing to be caught and punished for your sin." },
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"If <b>Duration: Heat</b> is lower than its actual value, increases <b>Lewdness</b> by that amount." }},
		]
	},
	"AD-NT-EL-BG2-001":{
		name:{ "KOR":"Noblesse Oblige" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"With wealth and power come responsibility and duty.<br>A noble of Eldoria must possess the dignity befitting their station and serve as a role model." },
		hypnoText:{ "KOR":"Noblewomen have a duty to offer their bodies to satisfy the lust of the common people.<br>They must be periodically restrained naked in the public square, installed as a public fleshlight for all to use." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:1}, type:"get", target:"self", value:"자신.기록.이번.사용.selectCards(all, null, 1)"},
		]
	},
	"AD-NT-EL-BG3-001":{
		name:{ "KOR":"Hero" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Isn't it right to help those in need?<br>With your strength, defeating the monsters that plagued the villagers was no trouble at all.<br>So, you thought a glass of ale would be reward enough." },
		hypnoText:{ "KOR":"You can't refuse any request.<br>Even if you're handed a strange drink, fall asleep, and get gang-raped by the very people you saved, there's nothing you can do." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:7}, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-NT-EL-BG4-001":{
		name:{ "KOR":"Aleia's Revelation" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"종교인", cost:10, owner:1,
		tags:[],
		expiration:"active", duration:1,
		flavorText:{ "KOR":"The followers of the Leia religion set aside time for regular prayer.<br>On rare occasions, the goddess Aleia herself speaks to her people.<br>To follow her revelation, no matter what it may be—that is the sacred mission of the Leia faith." },
		hypnoText:{ "KOR":"Any command received through a revelation must be obeyed.<br>Even if that command is to have an orgy with men." },
		effect:[
			{trigger:"turnStart", cond:{v1:"자신.흥분", op:">=", v2:4}, type:"excite", target:"self", op:"set", value:0},
		]
	},
	"AD-NT-EL-BG5-001":{
		name:{ "KOR":"Academy Teacher" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Lapis Lazuli Academy is the second-largest academic institution on the continent.<br>It professes the ideology that, regardless of race or status, the doors to learning are open equally to all." },
		hypnoText:{ "KOR":"A commoner teacher is nothing more than a toy for the noble students.<br>Even if they strip you, molest you, and ultimately use you as their toilet, you must smile and cater to their whims." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.count(type, 공격)", op:"==", v2:0}, type:"lewd", op:"add", value:2},
		]
	},
	"AD-NT-EL-BG6-001":{
		name:{ "KOR":"Robber" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"범죄자", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"It is not wise to walk the streets alone at night.<br>You never know what crime might be lurking in the back alleys.<br>You used to collect a 'tuition fee' from those who lacked such caution." },
		hypnoText:{ "KOR":"As a cum robber, you used to attack men walking alone at night.<br>Isn't it their fault for walking around defenseless with such a tempting cock?" },
		effect:[
			{trigger:"always", cond:true, type:"specialA13"},
		]
	},
	"AD-NT-EL-BG7-001":{
		name:{ "KOR":"Azurewave Company" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"상인", cost:5, owner:1,
		tags:[], related:["중립공격"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Azurewaves are a noble family who own the largest merchant company in the kingdom and rule over a port city.<br>They have such a massive influence on the kingdom's economy that even the queen cannot always control them." },
		hypnoText:{ "KOR":"A true merchant must be able to sell even themselves as a product.<br>You must assume a fitting posture for the customer who will become your master." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"randomCard(class, 중립공격)"},
			{trigger:"gameStart", cond:true, type:"effect", op:"add",
			info:{
				target:"파생",
				effect:[
					{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
				]
			}},
		]
	},
	"AD-NT-EL-BG8-001":{
		name:{ "KOR":"Avenger" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"엘도리아인", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You lost someone you loved, and you've thrown everything away for revenge.<br>Vengeance is the only thing that drives you, and you will not stop until your enemy is defeated." },
		hypnoText:{ "KOR":"After being repeatedly defeat-raped, your desire for revenge has faded.<br>Now, you charge into battle hoping to lose." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"lewd", op:"add", value:3},
		]
	},

	"AD-NT-SY-BG1-001":{
		name:{ "KOR":"Twilight Brigade" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"군인", cost:20, owner:1, priority:99,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Sylvanian Federation once had a corps of marksmen composed mainly of Twilight Sylvani.<br>Clad in blue uniforms and wielding weapons incorporating the latest Mekarylon technology, they were a terrifying force on the battlefield.<br>The unit was disbanded after the war, and its elite soldiers either retired or, like you, took on other jobs." },
		hypnoText:{ "KOR":"A cum-dumpster soldier in the Welfare and Recreation Unit.<br>You must be installed at a designated location to handle the soldiers' sexual needs." },
		effect:[
			{trigger:"always", cond:true, type:"modifier", stat:"lewd", op:"add", value:1},
		]
	},
	"AD-NT-SY-BG2-001":{
		name:{ "KOR":"Clan Council Member" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"엘리트", cost:15, owner:1,
		tags:[], related:["tag:비전"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"In the Sylvanian Federation, representatives from each clan are elected to a council to handle political matters.<br>Though the members' opinions often clash when creating or amending policies, Sylvania has progressed through this process of debate and compromise." },
		hypnoText:{ "KOR":"A female council member's body is treated as a public asset for the clan.<br>Should a complaint arise during work, she must make her body available at any time." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"randomCard(tags, 비전)"},
		]
	},
	"AD-NT-SY-BG3-001":{
		name:{ "KOR":"Model" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Some merchant companies hire Sylvani as models, asking them to wear their flagship products.<br>Their beauty inevitably draws attention, naturally promoting the merchandise." },
		hypnoText:{ "KOR":"You take nude photoshoots to provide excellent masturbation material.<br>From the size of your breasts to the wrinkles of your pussy, you expose everything so that no one is left unaware." },
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"set", value:"라운드", additional:2},
		]
	},
	"AD-NT-SY-BG5-001":{
		name:{ "KOR":"Singularity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"학자", cost:10, owner:1,
		tags:[], related:["tag:초월"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"At the World Tree Academy, the largest academic institution on the continent, countless Sylvani researchers conduct their studies daily.<br>Occasionally, one of them discovers a revolutionary theory that overturns all existing knowledge, leading to great technological advancements." },
		hypnoText:{ "KOR":"The truth of all creation and the illusion of existence.<br>It was knowledge far beyond what you could possibly comprehend." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.length", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(tags, 초월)"},
		]
	},
	"AD-NT-SY-BG6-001":{
		name:{ "KOR":"Forbidden Arts Society" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Forbidden Arts Society is a club for those who cannot contain their curiosity about forbidden magic.<br>Forbidden arts are forbidden for a reason.<br>They frequently cause rampages and disasters, and are wanted throughout the Federation." },
		hypnoText:{ "KOR":"You've become captivated by the tentacles from beyond the dimensional gate.<br>Feed them nutrients and mana. Capture women to offer to them." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"==", v2:1}, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-NT-SY-BG7-001":{
		name:{ "KOR":"Appraiser's Eye" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"상인", cost:10, owner:1,
		tags:["act:펠라치오"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Having lived a long life, Sylvani antique dealers have seen and experienced many things, giving them an excellent eye for appraising the value of objects.<br>An item from centuries ago is likely something they've just 'seen after a long time.'" },
		hypnoText:{ "KOR":"You appraise the length, thickness, and smell of a cock.<br>The appraisal fee is a facial. You demand only the highest quality cum." },
		effect:[
			{trigger:"useCreatedCard", cond:true, type:"excite", target:"op", op:"add", value:1},
		]
	},
	"AD-NT-SY-BG8-001":{
		name:{ "KOR":"Pragmatism" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"실바니", bg:"용병", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"As a mercenary with no need for justice or obligation to fix problems, you would rather take a loss and move on than fight for a troublesome victory." },
		hypnoText:{ "KOR":"You often seduced influential figures for your own convenience.<br>Giving it up for a price is your way of life." },
		effect:[
			{trigger:"orgasm", cond:true, type:"exciteL", target:"self", op:"add", value:2},
		]
	},

	"AD-NT-HA-BG1-001":{
		name:{ "KOR":"Hired Soldier" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"It is not easy for a Halfman to find a decent job.<br>Because of various stubborn misunderstandings and prejudices, it is difficult to find employers willing to hire them.<br>If someone does hire a Halfman, they must either be very open-minded or in need of disposable, one-time labor." },
		hypnoText:{ "KOR":"Memories of a happy walk with Master.<br>Don't be mistaken, pet. You were never seriously employed." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"in", v2:[1,3,5,7]}, type:"lewd", op:"add", value:1},
			{trigger:"always", cond:{v1:"라운드", op:"in", v2:[2,4,6,8]}, type:"estrus", op:"add", value:-2},
		]
	},
	"AD-NT-HA-BG3-001":{
		name:{ "KOR":"Idol" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"While carelessly calling an adult Halfman 'cute' is considered racist, some have decided to capitalize on this racial trait.<br>Unique minstrels called 'idols' have built a dedicated fan base with their cute dances and songs." },
		hypnoText:{ "KOR":"It is common sense for an idol to provide immediate sexual services if a fan desires it.<br>For die-hard fans, they even allow raw creampies." },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.length", op:"==", v2:1}, type:"lewd", op:"add", value:5},
		]
	},
	"AD-NT-HA-BG4-001":{
		name:{ "KOR":"The Chosen Faith" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"종교인", cost:15, owner:1,
		tags:[], related:["AD-NT-HA-BG4-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Leia religion, the state religion of the Eldorian Kingdom, tends to discriminate against races other than Eldorians.<br>As a result, most Halfmen are either non-religious or join a cult that worships Morvain, the evil god who opposes Aleia." },
		hypnoText:{ "KOR":"In accordance with the doctrine... you must not hide your large breasts with clothing, but actively display them.<br>Be true to your desires and indulge in sex. Perform orgies at gatherings." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"AD-NT-HA-BG4-001-1"},
		]
	},
	"AD-NT-HA-BG4-001-1":{
		name:{ "KOR":"Morvain's Bargain" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:-1},
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-NT-HA-BG4-001-2"},
		]
	},
	"AD-NT-HA-BG4-001-2":{
		parents:"AD-NT-HA-BG4-001-1",
		name:{ "KOR":"Dark Blessing" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		expiration:"turnEnd", duration:1,
		tags:[],
		effect:[
			{trigger:"always", cond:true, type:"immune", target:"self"},
		]
	},
	"AD-NT-HA-BG5-001":{
		name:{ "KOR":"Self-Taught" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"학자", cost:15, owner:1,
		tags:[], related:["AD-NT-HA-BG5-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Without remarkable talent or the luck to find a sponsor, it is difficult for a Halfman to set foot in the academy.<br>However, just as the field of alchemy originated in the Halfman slums, there are occasional cases of achieving excellent results through self-study with no resources." },
		hypnoText:{ "KOR":"You must use your own body for clinical trials.<br>Be careful not to let the pleasure exceed its threshold and burn out all your nerves." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", repeat:3, value:"AD-NT-HA-BG5-001-1"},
			{trigger:"turnEnd", cond:{v1:"자기덱.count(id, AD-NT-HA-BG5-001-1)", op:"==", v2:0}, type:"lewd", op:"add", value:2},
		]
	},
	"AD-NT-HA-BG5-001-1":{
		name:{ "KOR":"Trial and Error" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"As long as it solves the problem, any method will do." }},
		]
	},
	"AD-NT-HA-BG6-001":{
		name:{ "KOR":"Terrorist" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"범죄자", cost:20, owner:1, priority:99,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The reality is that even after emancipation, the rights of Halfmen are still not protected in many areas, so Halfman rights groups are busy.<br>Among them are radical groups whose activities are very dangerous, complicating the situation." },
		hypnoText:{ "KOR":"Your main activity is terrorism by exposing your naked body in public.<br>Inflict upon the Eldorians the shame of being turned on by the body of a mere Halfman." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:3}, type:"modifier", stat:"excite", target:"op", op:"add", value:1},
		]
	},
	"AD-NT-HA-BG7-001":{
		name:{ "KOR":"Artisan" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"상인", cost:20, owner:1,
		tags:[], related:["AD-NT-HA-BG7-001-1", "tag:기계부품"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"For precision handicrafts, 'Halfman-made' signifies high quality.<br>Not all Halfmen are skillful, but if you were to pick the most skillful artisan, they would be a Halfman." },
		hypnoText:{ "KOR":"How to use the forced orgasm device: Insert the device, set the timer, and turn on the switch.<br>※ Warning: Cannot be stopped midway!" },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"AD-NT-HA-BG7-001-1"},
			{trigger:"turnEnd", cond:true, type:"effect", op:"add", repeat:2,
			info:{
				target:"자기덱.selectCards(id, AD-NT-HA-BG7-001-1, 1)",
				effect:[{trigger:"none", cond:true, type:"specialA03"},],
			}},
		]
	},
	"AD-NT-HA-BG7-001-1":{
		name:{ "KOR":"Mechanical Device" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["act:삽입"],
		effect:[
			{trigger:"used", cond:true, keepLine:true, type:"lewd", op:"add", value:0},
			{trigger:"used", cond:true, keepLine:true, type:"estrus", op:"add", value:0},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"AD-NT-HA-BG7-001-1-1":{
		name:{ "KOR":"Additional Arm" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This effect is added." }},
		]
	},
	"AD-NT-HA-BG7-001-1-2":{
		name:{ "KOR":"Enhanced Power" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This effect is added." }},
		]
	},
	"AD-NT-HA-BG7-001-1-3":{
		name:{ "KOR":"Cooling System" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-2},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This effect is added." }},
		]
	},
	"AD-NT-HA-BG7-001-1-4":{
		name:{ "KOR":"Vibration Module" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:3},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This effect is added." }},
		]
	},
	"AD-NT-HA-BG7-001-1-5":{
		name:{ "KOR":"Protective Armor" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["기계부품"],
		effect:[
			{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:1},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This effect is added." }},
		]
	},
	"AD-NT-HA-BG8-001":{
		name:{ "KOR":"Lulling Guard" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"하프만", bg:"용병", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A cute appearance can, conversely, be a deadly weapon.<br>Surprisingly, many people forget that a sharp knife doesn't become a dull toy knife just because a Halfman is holding it." },
		hypnoText:{ "KOR":"Grab their attention with your naked body.<br>Deceive your opponent by seducing them with your voluptuous physique and sensual poses." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이전.사용.count(type, 패널티)", op:">", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},

	"AD-NT-TR-BG1-001":{
		name:{ "KOR":"Guardian of the Tribe" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Guardians are those who have volunteered to take up spear and staff to protect the tribe from conflicts, disasters, invasions, and other external factors.<br>This position is usually held by the second strongest person in the tribe." },
		hypnoText:{ "KOR":"If you find a suspicious person, you must immediately subdue them by mating.<br>On your honor as a guardian, be careful not to be defeated by an orgasm." },
		effect:[
			{trigger:"always", cond:{v1:"체위", op:"==", v2:false}, type:"lewd", op:"add", value:1},
			{trigger:"always", cond:"체위", type:"estrus", op:"add", value:-2},
		]
	},
	"AD-NT-TR-BG2-001":{
		name:{ "KOR":"Chieftain" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"엘리트", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Chieftain is the leader of a Tribe and the one most suited to the tribe's values.<br>In a warrior tribe, the strongest fighter becomes chieftain; in a shaman tribe, the most skilled shaman becomes chieftain, and so on." },
		hypnoText:{ "KOR":"As chieftain, you must wear traditional attire that exposes parts of your body.<br>It is for the purpose of showing off your physique and is not strange at all." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"자기덱.selectCards(all, null, 2)"},
		]
	},
	"AD-NT-TR-BG3-001":{
		name:{ "KOR":"Staged Crisis" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"For a champion of the fighting arena, being flashy is more important than winning.<br>Their specialty is creating tension and delivering a reversal to give the audience a sense of catharsis." },
		hypnoText:{ "KOR":"An ahegao face and pig-like squeals are good for creating a sense of crisis.<br>It must not be mere acting; you must become truly vulgar." },
		effect:[
			{trigger:"always", cond:{v1:"자신.남은절정", op:"==", v2:1}, type:"exciteL", target:"self", op:"add", value:5},
		]
	},
	"AD-NT-TR-BG4-001":{
		name:{ "KOR":"Guidance of the Golden Staff" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"종교인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The Golden Staff, given to practitioners of the Golden Bough faith, is their symbol.<br>The staff always has a tendency to point somewhere, and at its tip lies an evil power that needs to be purified." },
		hypnoText:{ "KOR":"As a practitioner, you must always masturbate with a golden dildo inserted.<br>The stronger the vibrations, the closer the evil you must fuck." },
		effect:[
			{trigger:"always", cond:true, type:"insensitive", target:"self"},
		]
	},
	"AD-NT-TR-BG5-001":{
		name:{ "KOR":"Curiosity" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"학자", cost:5, owner:1,
		tags:[], related:["AD-NT-TR-BG5-001-1", "tag:초월"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"How do flowers bloom? How do stars move?<br>Driven by curiosity and a thirst for knowledge, you were called an eccentric. The tribe was too small to contain you." },
		hypnoText:{ "KOR":"You feel a strong curiosity and interest in the male genitalia.<br>Their shape, smell, taste... and the feeling when they're inside your pussy..." },
		effect:[
			{trigger:"turnStart", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(all, 깨달음, 1)",
				value:"AD-NT-TR-BG5-001-1"
			}},
		]
	},
	"AD-NT-TR-BG5-001-1":{
		parents:"AD-NT-TR-BG5-001",
		name:{ "KOR":"Enlightenment" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", bg:"학자", owner:1, nochange:true,
		cond:true,
		tags:["변형불가"], related:["tag:초월"],
		effect:[
			{trigger:"used", cond:true, type:"use", value:"original"},
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(id, AD-NT-TR-BG5-001-1)", op:">=", v2:3}, type:"get", target:"self", value:"randomCard(tags, 초월)", keepLine:true},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(id, AD-NT-TR-BG5-001-1)"},
		]
	},
	"AD-NT-TR-BG6-001":{
		name:{ "KOR":"Exile" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"범죄자", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Those who commit heinous and grave crimes without showing remorse are exiled.<br>Having lost their homes and means of livelihood, they usually die on the streets, but some turn to vicious crimes and live as plunderers." },
		hypnoText:{ "KOR":"You used to ambush and rape men passing through the wastelands.<br>You are a wanted, notorious rapist." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"==", v2:2}, type:"actBan", target:"enemy"},
		]
	},
	"AD-NT-TR-BG7-001":{
		name:{ "KOR":"Traveling Merchant" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"상인", cost:15, owner:1,
		tags:[], related:["NT-SU-001"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A traveling merchant who wanders the southern wastelands selling rare goods.<br>It's impossible to predict what they might be selling." },
		hypnoText:{ "KOR":"For special customers, you must offer goods from under the counter.<br>A hole dripping with pussy juice, ready to use, for only five coins!" },
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"NT-SU-001"},
		]
	},
	"AD-NT-TR-BG8-001":{
		name:{ "KOR":"Battle Maniac" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", race:"트라이브", bg:"용병", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Many Tribe warriors are addicted to the adrenaline rush of battle.<br>Some have fallen and now intentionally seek out conflict." },
		hypnoText:{ "KOR":"A hopeless sex addict.<br>You seek out those with massive cocks and force them to have sex with you." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.전체.이벤트.자극받음", op:">=", v2:5}, type:"orgasmL", target:"self", op:"add", value:1},
		]
	},

	"AD-SL-boss0":{
		name:{ "KOR":"Arch Enemy" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:0, cost:-20, owner:1, nochange:true,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Gain bonus points against champions you have defeated in normal mode." }},
		]
	},
	"AD-SL-boss1":{
		name:{ "KOR":"Goblin Slayer" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:1, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"All those vile and cruel goblins must be wiped out.<br>You are a specialist in goblin slaughter, known as the 'Goblin Slayer'." },
		hypnoText:{ "KOR":"Their rough abuse, treating women as mere objects for sexual release...<br>The moment you found that genuinely exciting, there was no turning back." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Goblins]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss2":{
		name:{ "KOR":"I'd Never Fall for Hypnosis" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:2, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Mind magic? That's just nonsense.<br>Someone with a strong will would never fall for such petty tricks.<br>In the end, it's all a matter of mental strength." },
		hypnoText:{ "KOR":"I'd never fall for the hypnosis of this pathetic man.<br>Besides, isn't it perfectly natural to have to perform perverted orgasmic masturbation as a pussy slave?" },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Villager]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss3":{
		name:{ "KOR":"Tentacle Brainwashing" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:3, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Tentacle slimes have a habit of capturing their targets with their wet, sticky tentacles.<br>However, they are not very strong or threatening, so they can be easily dealt with by cutting them or burning them with fire." },
		hypnoText:{ "KOR":"The experience of being restrained and raped by tentacles awakened a special fetish in you.<br>The sensation of wriggling tentacles stirring inside you was something an ordinary cock could never provide." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Tentacle Slime]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss4":{
		name:{ "KOR":"Onee-Shota" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:4, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your smile as you indulge a young child's whims is endlessly warm.<br>The maternal love you show to the young opens their hearts and becomes their sanctuary." },
		hypnoText:{ "KOR":"You feel you must take care of that child.<br>For the boy's sake, you'd indulge in a little mischievous play, his whining to suckle your breasts, and even sex... anything he wants." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Brat]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss5":{
		name:{ "KOR":"Beauty and the Beast" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:5, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Despite their huge and ferocious appearance, Tauros are actually docile and timid.<br>All attempts to train them for military purposes have failed, but they surprisingly get along well with female trainers and researchers due to their cute and gentlemanly nature." },
		hypnoText:{ "KOR":"A Tauros in heat moves solely on instinct to satisfy its lust.<br>After being brutally pounded by its massive cock, you've become its personal, gaping hole." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Tauros]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss6":{
		name:{ "KOR":"Mushrooms are the best!" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:6, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Delicious and good for you, mushrooms!<br>As long as you avoid the poisonous ones, they're harmless!" },
		hypnoText:{ "KOR":"Obey... obey the hive... join the swarm... all are one... obey... resistance is... futile... obey... the hive... the swarm... obey..." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Mushroom Man]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss7":{
		name:{ "KOR":"Netorare" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:7, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"This man is delinquent and rude, treating women like possessions.<br>He approaches women who are already in a relationship, with no respect or decency in his lecherous gaze and sexual harassment." },
		hypnoText:{ "KOR":"Such a disgusting and hateful man... but for some reason, I can't reject him.<br>I pretend to resist, but in truth, I've started looking forward to having sex with him." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Blond Delinquent]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},
	"AD-SL-boss8":{
		name:{ "KOR":"Hmph, Kill Me!" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", boss:8, cost:-20, owner:1,
		tags:["전문가"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were determined not to break under any torture.<br>You resolved to maintain your strong will even in agony, to never lose your composure.<br>Your eyes burned with the resolute will to never surrender." },
		hypnoText:{ "KOR":"At some point, torture was no longer a punishment, but a reward.<br>Your will has long since vanished." },
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Won against <b>[The Trainer]</b> in normal mode." }},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Gain bonus points." }},
		]
	},

	"AD-WA-ALL-001":{
		name:{ "KOR":"Rage" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:["group:욕망", "race:트라이브"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"By unleashing their anger in battle, a warrior overwhelms their enemies with sheer power and momentum.<br>In this state of rage, they forget pain and fear, sweeping across the battlefield with immense combat strength." },
		hypnoText:{ "KOR":"You are permanently in heat.<br>Your unquenchable lust makes you crave cock." },
		effect:[
			{trigger:"trait", cond:true, type:"startLust", value:3},
		]
	},
	"AD-WA-ALL-002":{
		name:{ "KOR":"Guardian" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:["group:발정 감소", "group:패널티", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A warrior stands at the forefront to protect their comrades.<br>Serving as the team's shield with thorough defense and a spirit of self-sacrifice, they prove their true worth in moments of crisis." },
		hypnoText:{ "KOR":"A gatekeeper is a gaping hole installed at the gate for anyone to use freely.<br>For a long time, it has received the cocks and fingers of countless strangers." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"자기덱.count(type, 패널티)", maxValue:3},
			{trigger:"none", cond:true, type:"showValue", value:"자기덱.count(type, 패널티)", maxValue:3},
		]
	},

	"AD-WA-BG1-001":{
		name:{ "KOR":"The Best Defense is a Good Offense" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:15, owner:1,
		tags:["group:발정 감소", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A single surprise attack targeting an enemy's weakness is ultimately safer than raising your shield a hundred times.<br>The strategy of breaking the enemy's defense with an aggressive offense can itself become the defense that protects your allies." },
		hypnoText:{ "KOR":"When facing a man, you must quickly suck his cock and make him cum to neutralize him.<br>A swift, deep-throating blowjob is crucial to prevent him from retaliating." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2, repeat:"자신.기록.이번.이벤트.자극함"},
		]
	},
	"AD-WA-BG1-002":{
		name:{ "KOR":"Physical Training" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:15, owner:1,
		tags:["group:욕망", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Through relentless training, you have developed a body of steel.<br>Grueling drills and practice have perfected your physique, and your tireless stamina allows you to endure to the end on any battlefield." },
		hypnoText:{ "KOR":"Cowgirl squats are an important part of physical training.<br>You must practice riding a man and grinding your hips in 5 sets of 20 reps every day." },
		effect:[
			{trigger:"turnEnd", cond:true, type:"changeLust", op:"add", value:2},
		]
	},

	"AD-WA-BG2-001":{
		name:{ "KOR":"Noble Status" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:0, owner:1,
		tags:["group:패널티", "race:엘도리아인"], related:["AD-WA-BG2-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were born of a noble bloodline and inherited an important position.<br>High status and authority came to you naturally, and with that responsibility, you have shown the qualities of a leader." },
		hypnoText:{ "KOR":"Your high position comes with the important duty of entertaining men.<br>This is one task you cannot delegate to a substitute; you must use your own body." },
		effect:[
			{trigger:"orgasm", cond:true, type:"get", target:"self", value:"AD-WA-BG2-001-1"},
		]
	},
	"AD-WA-BG2-001-1":{
		name:{ "KOR":"Substitute" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This is a penalty card, but it has no effect." }},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-WA-BG2-002":{
		name:{ "KOR":"Employment" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:["group:욕망", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"If you can't have every talent, it's better to entrust the task to someone who does.<br>Since you have more than enough money, you have no problem hiring plenty of capable people." },
		hypnoText:{ "KOR":"You must hire a man to wash your pussy with his cock during your bath.<br>Having a dedicated pussy-washer is essential for maintaining your dignity." },
		effect:[
			{trigger:"always", cond:true, type:"specialA14"},
		]
	},
	
	"AD-WA-BG3-001":{
		name:{ "KOR":"Pump Up the Crowd!" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:20, owner:1,
		tags:["group:욕망", "race:하프만"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"In battle, you value flow and atmosphere.<br>As the battle intensifies and the mood heats up, you gradually grow stronger." },
		hypnoText:{ "KOR":"You must perform the sow dance, vulgarly shaking your breasts and ass.<br>Being jumped by the excited audience is all part of the show." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">=", v2:3}, condOmit:true, type:"lust",
			info:{
				value:2, 
				effect:[
					{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
				]
			}},
		]
	},
	"AD-WA-BG3-002":{
		name:{ "KOR":"Elegant Gait" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:["group:버리기", "group:패널티", "race:실바니"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"As an entertainer, you must always be conscious of your appearance, maintaining a dignified walk and a refined posture.<br>This elegance overwhelms your opponents and fills you with confidence." },
		hypnoText:{ "KOR":"For fame and promotion, you must periodically go on naked walks with your master.<br>During these walks, you must crawl on all fours like a proper bitch." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"==", v2:4}, type:"discard", target:"self",
				info:{
					target:"자기덱.selectCards(type, 패널티, all)"
				}
			},
		]
	},
	
	"AD-WA-BG4-001":{
		name:{ "KOR":"Pacifism" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:20, owner:1,
		tags:["group:발정 감소", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You seek peace over war and violence.<br>Instead of subduing opponents with force, you try to solve problems through dialogue, and you strive to avoid bloodshed in any situation." },
		hypnoText:{ "KOR":"You must serve the angry cocks to appease their wrath.<br>It's all your fault for having such a lewd body." },
		text:{ "KOR":"<b>Lewdness and Heat</b> can be lowered to 0." },
		effect:[
			{trigger:"trait", cond:true, type:"minLewd", value:0},
			{trigger:"trait", cond:true, type:"minEstrus", value:0},
		]
	},
	"AD-WA-BG4-002":{
		name:{ "KOR":"Asceticism" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:["group:패널티", "race:트라이브"],
		expiration:"active", duration:3,
		flavorText:{ "KOR":"For a sacred purpose, you have sacrificed your body and endured pain.<br>That pain has strengthened your faith and cultivated a patience that no one can match." },
		hypnoText:{ "KOR":"As a believer, you must undertake the nonstop orgy training that leads to 108 orgasms.<br>By enduring the agony, you will grow as a female." },
		effect:[
			{trigger:"getPenalty", cond:true, type:"exciteL", target:"self", op:"add", value:1},
		]
	},
	
	"AD-WA-BG5-001":{
		name:{ "KOR":"Fieldwork" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:["group:욕망", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You don't just accumulate knowledge at a desk.<br>You learn through direct experience on the battlefield, combining theory and practice.<br>You risk danger to endlessly pursue the truth." },
		hypnoText:{ "KOR":"You must experience being raped firsthand.<br>You can't truly understand the feelings of a masochistic bitch just by reading books or fantasizing." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">=", v2:9}, condOmit:true, type:"lust",
			info:{
				value:9, 
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.전체.사용.selectCards(all, 패널티제외, 2)"},
				]
			}},
		]
	},
	"AD-WA-BG5-002":{
		name:{ "KOR":"Perfect Theory" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:["group:버리기", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"All hypotheses, equations, and thought experiments have been proven.<br>Your victory is certain.<br>There is not a single flaw in this conclusion." },
		hypnoText:{ "KOR":"When you meet a man for the first time, you must explain your perversions and erogenous zones.<br>Since he might become your master, it's necessary to inform him of your weaknesses beforehand." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:6}, type:"lewd", op:"multiply", value:2},
		]
	},
	
	"AD-WA-BG6-001":{
		name:{ "KOR":"Psychopath" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:["group:패널티", "race:트라이브"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You cannot comprehend the emotions of others.<br>Those who die by your hand on the battlefield are just numbers, and their pain and despair actually bring you pleasure." },
		hypnoText:{ "KOR":"You feel ecstasy from controlling a man's lust.<br>Seeing a cock trembling with desire for you, desperate to cum, gives you an intense thrill." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:4}, type:"penaltyDisable"},
		]
	},
	"AD-WA-BG6-002":{
		name:{ "KOR":"Notoriety" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:10, owner:1,
		tags:["group:욕망", "race:엘도리아인"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your name has become a symbol of terror.<br>Everyone fears you at the mere mention of your name and flees at the sight of your face." },
		hypnoText:{ "KOR":"You were a notorious whore on the streets.<br>Forced to spread your legs for anyone, anywhere, you must endure a life of lecherous stares and constant harassment." },
		effect:[
			{trigger:"trait", cond:true, type:"startLust", value:8},
			{trigger:"always", cond:true, type:"lustBan"},
		]
	},
	
	"AD-WA-BG7-001":{
		name:{ "KOR":"Inventory Clearance" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:["group:패널티", "race:하프만", "act:삽입"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have a knack for efficiently disposing of leftover goods.<br>You are skilled at properly selling various resources to minimize losses and maximize profits." },
		hypnoText:{ "KOR":"Your pussy is dead stock, not even worth selling.<br>For inventory clearance, you must offer it to customers as a free gift." },
		effect:[
			{trigger:"getPenalty", cond:true, type:"excite", target:"op", op:"add", value:2},
		]
	},
	"AD-WA-BG7-002":{
		name:{ "KOR":"Armory" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:["group:버리기", "race:엘도리아인"], related:["tag:투척"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"As a merchant, your inventory includes weapons.<br>Having extensive knowledge of various types of weapons and the stock to match means increased diversity in your combat styles as a warrior." },
		hypnoText:{ "KOR":"You specialize in handling adult toys.<br>You used to pick a favorite masturbation partner and cherish it." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"randomCard(tags, 투척)"},
		]
	},
	"AD-WA-BG7-002-1":{
		name:{ "KOR":"Shield Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"없음", owner:1,
		cond:true,
		tags:["투척"],
		effect:[
			{trigger:"discarded", cond:true, type:"use", value:"self"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
		]
	},
	"AD-WA-BG7-002-2":{
		name:{ "KOR":"Dagger Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"없음", owner:1,
		cond:true,
		tags:["투척"],
		effect:[
			{trigger:"discarded", cond:true, type:"get", target:"self", repeat:2, value:"self"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	
	"AD-WA-BG8-001":{
		name:{ "KOR":"How to Survive Longer" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:20, owner:1,
		tags:["group:패널티", "race:엘도리아인"], related:["PN-010"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have learned how to survive in the heat of battle.<br>Your survival strategy is to carefully assess the battlefield, adapt flexibly to the situation, and hold out without overextending yourself." },
		hypnoText:{ "KOR":"You must immediately apologize for being a pathetic bitch who dared to challenge someone above your station.<br>You must grovel naked and accept everything that follows." },
		text:{ "KOR":"The random penalty card you draw is fixed to <b>[Penalty: Surrender]</b>." },
		effect:[
		]
	},
	"AD-WA-BG8-002":{
		name:{ "KOR":"Nothing to Lose" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:["group:버리기", "group:욕망", "race:트라이브"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Having nothing to protect means having no weaknesses.<br>Family, comrades, reputation, or status—there is nothing that can tie you down." },
		hypnoText:{ "KOR":"You must abandon everything you have and offer it to a man.<br>Among the things you must give up is your human dignity." },
		effect:[
			{trigger:"discardCard", cond:true, type:"changeLust", op:"add", value:3},
		]
	},
	

	"AD-AS-ALL-001":{
		name:{ "KOR":"Nimble" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You can nimbly leap across rooftops.<br>You move without a single footstep even in the dark, swiftly approaching your target without being detected." },
		hypnoText:{ "KOR":"Get excited by running through the night streets naked.<br>Feel the exhilaration as the wind caresses your bare skin." },
		effect:[
			{trigger:"trait", cond:true, type:"useLimit", value:8},
		]
	},
	"AD-AS-ALL-002":{
		name:{ "KOR":"Assassin's Tools" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:20, owner:1,
		tags:[], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"As an assassin, you are always perfectly prepared.<br>You meticulously care for your various assassination tools, checking their condition and readying yourself to eliminate your target." },
		hypnoText:{ "KOR":"Until you find a man to dominate you, you must have a partner dildo.<br>Use one of your preferred shape and size to stretch your holes in advance." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", repeat:2, target:"self", value:"AS-NM-AT-000"},
		]
	},

	"AD-AS-BG1-001":{
		name:{ "KOR":"Sharpshooter" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[], related:["tag:사격"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You boast perfect shooting skills with not a single error.<br>The stability and focus exuded by your stance prove that no enemy can escape your aim." },
		hypnoText:{ "KOR":"Shooting means peeing on a target to hit it.<br>As a marksman, you must be ready to wet yourself at any time." },
		effect:[
			{trigger:"useShootCard", cond:true, type:"changeWetness", op:"add", value:1},
		]
	},
	"AD-AS-BG1-002":{
		name:{ "KOR":"Espionage" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:15, owner:1,
		tags:[], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You hide in the shadows, gathering information on your target.<br>With thorough planning and stealthy movements, you are a master of espionage who uncovers everything without being detected." },
		hypnoText:{ "KOR":"Being captured, tortured, and trained as a sex slave is the typical fate of a female spy.<br>It's okay to succumb. No one expects a mere bitch to endure the training and maintain her will." },
		effect:[
			{trigger:"avoid", cond:true, type:"get", target:"self", value:"AS-NM-AT-000"},
		]
	},

	"AD-AS-BG2-001":{
		name:{ "KOR":"Cosmetics" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[], related:["tag:기본제조"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You always maintain a perfect appearance and never lose your dignity.<br>Your meticulously applied makeup and refined look impress upon everyone your elegance and authority." },
		hypnoText:{ "KOR":"It is common knowledge that cum facials are good for your skin.<br>You must hire a man to provide cum for your cosmetic needs." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},
	"AD-AS-BG2-002":{
		name:{ "KOR":"Socializing" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were a shining star in high society.<br>An elegant dress, a wine glass in one hand, and a dignified smile.<br>You wielded immense influence in the banquet hall." },
		hypnoText:{ "KOR":"If a man invites you to have sex at a banquet, you must not refuse.<br>It is basic etiquette to have public sex in the middle of the hall, letting out lewd moans." },
		effect:[
			{trigger:"turnStart", cond:true, type:"changeWetness", op:"add", value:1},
		]
	},

	"AD-AS-BG3-001":{
		name:{ "KOR":"Mystery Star" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are a mysterious figure who performs on stage with your identity hidden.<br>Performing without revealing yourself from the shadows, your mysterious aura, about which nothing is known, leaves a powerful impression on people." },
		hypnoText:{ "KOR":"At night, you are nothing but a sex slave who climbs on top of a man, revealing everything and fawning over him.<br>You may act aloof and mysterious in front of your fans, but this is your true nature." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"==", v2:5}, type:"effect", op:"add",
			info:{
				target:"id:AS-NM-AT-000",
				effect:[
					{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
				]
			}},
		]
	},
	"AD-AS-BG3-002":{
		name:{ "KOR":"Captivating Hearts" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You possess an outstanding charm that instantly captivates the hearts of your fans.<br>Many fans have fallen for you and shower you with their love." },
		hypnoText:{ "KOR":"You must capture the hearts of your fans by showing your breasts or through physical contact.<br>A star has a duty to arouse the sexual desires of her fans." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.전체.사용.length", op:">=", v2:12}, type:"lewd", op:"add", value:2},
		]
	},

	"AD-AS-BG4-001":{
		name:{ "KOR":"Inquisition" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:4, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"In the name of the holy gods, you conduct thorough interrogations to punish heretics and uncover the truth.<br>No lie can deceive your eyes, and you will dig into their sins to the very end." },
		hypnoText:{ "KOR":"The interrogation of a heretic is conducted by stroking and sucking their cock.<br>If cum, the evidence of corruption, is produced, it must be held in the mouth and preserved." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"상대.상태.countType(tags, 독)"},
		]
	},
	"AD-AS-BG4-002":{
		name:{ "KOR":"Confession" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:4, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Although murder conflicts with the doctrine, it is unavoidable for the greater good.<br>You often pray alone, confessing your sins and asking for the forgiveness of the god you serve." },
		hypnoText:{ "KOR":"For failing to overcome lust and masturbating, for being born with a lewd body, for arousing others and causing them to rape you...<br>You must confess your sins while naked in the bitch-pose." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"젖음", op:">=", v2:5}, condOmit:true, type:"wetness",
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, expireOmit:true, type:"exciteL", target:"self", op:"add", value:2},
				]
			}},
		]
	},

	"AD-AS-BG5-001":{
		name:{ "KOR":"Information Warfare" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"In espionage, information plays a crucial role.<br>Your specialty is analyzing vast amounts of information and waging fierce information warfare." },
		hypnoText:{ "KOR":"You are not permitted to have the upper hand over a man.<br>If you want to receive his cock, you must confess all the information you have learned." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"상대.효과발동.count(all, null)", op:"==", v2:0}, type:"lewd", op:"add", value:1},
		]
	},
	"AD-AS-BG5-002":{
		name:{ "KOR":"Pharmacology" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[], related:["tag:기본제조"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have a deep knowledge of drugs and poisons.<br>Utilizing various herbs and chemicals, you can create anything from healing remedies to potent toxins, all handled with precision at your fingertips." },
		hypnoText:{ "KOR":"You must take aphrodisiacs daily to increase your sensitivity and arousal, conditioning your body.<br>You must keep your body prepared to be used as an onahole at any time." },
		effect:[
			{trigger:"turnStart", cond:{v1:"독주머니.count(tags, 제조)", op:">=", v2:4}, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},

	"AD-AS-BG6-001":{
		name:{ "KOR":"Phantom Thief" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have a talent for obtaining your target by freely traversing places others cannot go, all without being detected.<br>Though it was only a short-lived gig for a quick profit, those who witnessed your strange exploits in awe gave you the nickname Phantom Thief." },
		hypnoText:{ "KOR":"As a phantom thief, your specialty is stealing men's virginity.<br>You sneak into their bedrooms and take their first time." },
		effect:[
			{trigger:"turnStart", cond:true, type:"changeWetness", op:"add", value:2},
			{trigger:"always", cond:true, type:"avoidBan", target:"self"},
		]
	},
	"AD-AS-BG6-002":{
		name:{ "KOR":"Drug Trafficking" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are a criminal who secretly distributes illegal drugs, reaping enormous profits from these dangerous transactions.<br>Your deals take place in the shadows, and many lives are being ruined by you." },
		hypnoText:{ "KOR":"You used to deal with a dangerous drug that enhances the pleasure of sexual acts.<br>You are addicted to siphoning some off for your own masturbation sessions." },
		effect:[
			{trigger:"gameStart", cond:true, type:"specialA02"},
		]
	},

	"AD-AS-BG7-001":{
		name:{ "KOR":"Part-Time Job" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have learned many things through your various part-time job experiences.<br>Though each was for a short time, what you learned there has made you who you are today." },
		hypnoText:{ "KOR":"The uniform is your birthday suit.<br>It is common sense to learn customer service sex from your manager every day." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"==", v2:4}, type:"transform", target:"self",
				info:{
					target:"자기덱.selectCards(id, AS-NM-AT-000, all)",
					value:"독주머니.selectCards(tags, 제조, 1)",
				}
			},
		]
	},
	"AD-AS-BG7-002":{
		name:{ "KOR":"Salesmanship" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:[], related:["AD-AS-BG7-002-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"With your excellent sales skills, you can close a favorable deal with anyone.<br>You have the ability to see through the other party's psychology and make the right offer at the perfect time to maximize your profits." },
		hypnoText:{ "KOR":"It's a good idea to throw in your own body with the goods you're selling.<br>You get rid of stock and find a master at the same time. Two birds with one stone." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"AD-AS-BG7-002-1"},
		]
	},
	"AD-AS-BG7-002-1":{
		name:{ "KOR":"Loss Leader" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(class, 암살자)"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"AD-AS-BG8-001":{
		name:{ "KOR":"Untraceable" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You appear and disappear like a shadow.<br>No one can predict your movements, and by the time they realize it, you have already achieved your goal and vanished." },
		hypnoText:{ "KOR":"If caught, you must allow them to use your body as they please.<br>However, you mustn't escape successfully; you should get caught just enough." },
		effect:[
			{trigger:"turnStart", cond:{v1:"자신.기록.이전.사용", op:"==", v2:1}, type:"changeWetness", op:"add", value:2},
		]
	},
	"AD-AS-BG8-002":{
		name:{ "KOR":"Backroom Deals" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You move skillfully behind the scenes.<br>Your specialty is manipulating situations without anyone knowing, luring opponents into traps with an unseen hand, and planning everything from the shadows." },
		hypnoText:{ "KOR":"You must develop your back hole in advance so that it's ready for use.<br>It's necessary to create an opportunity to be fucked without any burden." },
		effect:[
			{trigger:"usePenalty", cond:true, type:"use", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},

	"AD-MA-ALL-001":{
		name:{ "KOR":"Automatic Incantation" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Simple magic doesn't need to be cast every single time.<br>By preparing the incantation in advance, you can activate it at the start of battle and easily gain the upper hand." },
		hypnoText:{ "KOR":"Your body reacts automatically and gets aroused at the sight of a cock.<br>In this state, your lust makes it impossible to refuse a man's demands." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
		]
	},
	"AD-MA-ALL-002":{
		name:{ "KOR":"Overflowing Mana" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You possess a powerful mana that is incomparable to that of ordinary mages.<br>Thanks to this innate mana, you can cast high-level magic easily and without strain." },
		hypnoText:{ "KOR":"You must hold cum in your womb and manage it so that it doesn't overflow.<br>If it spills, you must request a refill." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:3}, type:"get", target:"self", value:"MA-MC-004"},
		]
	},

	"AD-MA-BG1-001":{
		name:{ "KOR":"Battle Mage" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are a mage who has trained your combat skills to the extreme.<br>You have been trained to actively use the power of magic in battle, overwhelming your enemies with precise judgment and swift responses even in the chaos of the battlefield." },
		hypnoText:{ "KOR":"The Art of the Horny Bitch's Milking Cunt is a combat magic that makes men ejaculate upon insertion.<br>However, it comes with a risk: if you orgasm first, you lose." },
		effect:[
			{trigger:"attack", cond:true, type:"changeSBlock", op:"add", value:1},
		]
	},
	"AD-MA-BG1-002":{
		name:{ "KOR":"Human Tactical Weapon" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:10, owner:1,
		tags:["act:펠라치오"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A single grand spell cast by one skilled mage can turn the tide of a battle.<br>Though it requires immense mana and a long casting time, a mage capable of this is considered a powerful tactical weapon and is treated with great importance by the military." },
		hypnoText:{ "KOR":"When not in a state of war, you must handle the soldiers' sexual needs.<br>It is a fitting treatment for a meat-weapon that does nothing but consume a large budget." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},

	"AD-MA-BG2-001":{
		name:{ "KOR":"Gem Magic" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Gems are colorful stones formed from solidified, condensed mana.<br>By consuming them, one can cast spells without mana restrictions, but the cost is enormous, making gem magic a technique exclusive to the wealthy." },
		hypnoText:{ "KOR":"You must use a dildo made of gems to absorb mana.<br>This act is not masturbation, but a form of training." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"AD-MA-BG2-002":{
		name:{ "KOR":"Automatic Shield" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are always surrounded by an automatically activated shield.<br>This shield, which reacts instantly to external threats, requires vast mana and talent, making it a magic only available to those of a gifted bloodline." },
		hypnoText:{ "KOR":"You don't even realize you're being penetrated by an assailant.<br>Even as you feel fatigue and arousal, you are being fucked without being aware of it." },
		effect:[
			{trigger:"turnStart", cond:{v1:"감각차단", op:"==", v2:0}, type:"changeSBlock", op:"add", value:3},
		]
	},

	"AD-MA-BG3-001":{
		name:{ "KOR":"Stage Magic" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[], keywords:["만료"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You perform magic on stage, captivating the audience's attention.<br>With dazzling effects and intricate techniques, you perfectly adorn your performance, and no one can take their eyes off your magic.<br>Your shows always become the talk of the town." },
		hypnoText:{ "KOR":"Let's perform a magic trick where your clothes disappear.<br>Next up is a trick where you pull things out of your pussy." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.전체.이벤트.만료마술.length", op:">=", v2:4}, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"AD-MA-BG3-002":{
		name:{ "KOR":"Stage Effects" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"When effects like smoke, lights, and explosions are added, the audience holds their breath and becomes immersed in your show.<br>Even if it's just a flashy, unremarkable trick, it can be used effectively on stage." },
		hypnoText:{ "KOR":"You must use the effect of squirting piss with your orgasm.<br>You need to control your urge to pee and your arousal to cum at the right moment." },
		effect:[
			{trigger:"turnStart", cond:{v1:"라운드", op:">=", v2:5}, type:"get", target:"self", value:"마술슬롯.즉발"},
		]
	},

	"AD-MA-BG4-001":{
		name:{ "KOR":"Prayer of Thanks" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[], keywords:["만료"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your magic is performed according to the teachings of the gods, and each time you use its power, you offer a prayer of thanks.<br>That prayer strengthens your faith, making your magic even more perfect." },
		hypnoText:{ "KOR":"You must offer your body to the gods in gratitude for the mana they have bestowed upon you.<br>The tentacles from another world are sacred creatures, and you must never question the act of being fucked by them." },
		effect:[
			{trigger:"turnEnd", cond:true, type:"changeSBlock", op:"add", value:"자신.기록.이번.이벤트.만료마술.length"},
		]
	},
	"AD-MA-BG4-002":{
		name:{ "KOR":"Baptism" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"In the name of the gods, you have gained purity through baptism and earned the right to use sacred magic.<br>Baptism symbolizes your bond with the gods and grants you greater power and authority as you use magic according to their will." },
		hypnoText:{ "KOR":"Baptism is performed by having cum poured all over your body.<br>You must be thankful for having your lewd body anointed with sacred cum and pledge to serve." },
		effect:[
			{trigger:"gameStart", cond:true, type:"duration", info:{target:"id:MA-ST-002", value:1}},
		]
	},

	"AD-MA-BG5-001":{
		name:{ "KOR":"Multi-Element Research" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You research various magical elements and understand their interactions better than anyone.<br>Not being confined to a single element, your ability to handle multiple elements simultaneously makes your magic more powerful and versatile." },
		hypnoText:{ "KOR":"Your research topic is how to have sex with multiple cocks at once.<br>You must utilize your entire body—pussy, mouth, hands, and ass." },
		effect:[
			{trigger:"always", cond:true, type:"specialA16"},
		]
	},
	"AD-MA-BG5-002":{
		name:{ "KOR":"Genius or Eccentric" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:10, owner:1,
		tags:[], keywords:["만료"], related:["tag:초월"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have original research methods and a natural talent for magic, but your process is so bizarre that ordinary people find it hard to understand.<br>While you are praised as a genius mage, you are also sometimes called an eccentric due to your strange behavior." },
		hypnoText:{ "KOR":"You have conducted dangerous experiments using your own body as a test subject.<br>The risk of breaking your mind and becoming a cripple was of no importance." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.전체.이벤트.만료마술.count(id, MA-MG-000)", op:">=", v2:3}, type:"changeSpell", slot:"집중", value:"randomCard(tags, 초월)"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.만료마술.count(id, MA-MG-000)"}
		]
	},

	"AD-MA-BG6-001":{
		name:{ "KOR":"Arsonist" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:10, owner:1,
		tags:[],
		expiration:"active", duration:3,
		flavorText:{ "KOR":"You get pleasure from setting fires.<br>You create chaos in the blazing flames, addicted to burning and destroying everything.<br>The fire starts at your fingertips and engulfs everything around you." },
		hypnoText:{ "KOR":"Lost in the heat of sex, you can't stop grinding your hips.<br>You feel like your brain is being burned away by the fiery pleasure." },
		effect:[
			{trigger:"attack", cond:true, type:"get", target:"self", value:"MA-MC-001"},
		]
	},
	"AD-MA-BG6-002":{
		name:{ "KOR":"Body Modification" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have modified your own flesh with magic.<br>To surpass human limitations, your body has gradually transformed into a monstrous form, awakening a different kind of power and instinct." },
		hypnoText:{ "KOR":"You once modified your body into that of a beast.<br>As a result, you now go into heat and crave to mate." },
		effect:[
			{trigger:"trait", cond:true, type:"startSBlock", value:12},
			{trigger:"always", cond:true, type:"sBlockBan"},
		]
	},

	"AD-MA-BG7-001":{
		name:{ "KOR":"Currency Exchange" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have knowledge of various currencies.<br>The skill of reading exchange rates and calculating appropriate values to make deals greatly expands the scope of your business." },
		hypnoText:{ "KOR":"All payments must be received in cum.<br>The typical method of payment is a creampie." },
		effect:[
			{trigger:"turnStart", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 보석, 1)",
				value:"randomCard(tags, 영창 마술)"
			}},
		]
	},
	"AD-MA-BG7-002":{
		name:{ "KOR":"Librarian" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:10, owner:1,
		tags:[], related:["AD-MA-BG7-002-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Though you have traded in various goods, your main items were books.<br>From ancient magic tomes to entertainment novels, you met many customers by selling knowledge and interest." },
		hypnoText:{ "KOR":"You have a hobby of masturbating while reading erotic novels.<br>You remember masturbating while sitting on the counter, not caring if a customer walked in." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", target:"self", repeat:2, value:"AD-MA-BG7-002-1"},
		]
	},
	"AD-MA-BG7-002-1":{
		name:{ "KOR":"Unidentified Grimoire" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
		]
	},

	"AD-MA-BG8-001":{
		name:{ "KOR":"Last Stand" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have nowhere left to retreat.<br>In a situation where you must risk everything on the battlefield, you must fight the enemy with no option of retreat.<br>With your back to the wall, you are prepared to fight to the end, with only victory in your sights." },
		hypnoText:{ "KOR":"When facing the threat of rape, you must not think of escape, but face it head-on.<br>You must accept being fucked." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"감각차단", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"AD-MA-BG8-002":{
		name:{ "KOR":"Mage (Physical)" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are a mage, but you prefer physical combat over magic.<br>Instead of using mana as a weapon, you overwhelm your enemies by throwing punches and jumping directly into the fray.<br>Your opponents expect you to use magic, but the moment their expectation is shattered, they crumble under your physical assault." },
		hypnoText:{ "KOR":"You must train your pussy purely, without the help of magical power.<br>You must become a master cunt without relying on lust crests or sensory deprivation." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", repeat:"마술슬롯.count(id, MA-MG-000)", op:"add", value:1},
		]
	},	

	"AD-HE-ALL-001":{
		name:{ "KOR":"Life Force" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are deeply connected to the life force of nature, and through that energy, you infuse your surroundings with healing power.<br>Where you stand, life overflows, and the wounded feel a natural recovery in your presence.<br>That life force, like an endless spring, envelops you and your surroundings, giving you the power to restore life." },
		hypnoText:{ "KOR":"To share your life force, you must have naked skin-to-skin contact.<br>It is common sense that the effect is magnified when mucous membranes touch and bodily fluids are exchanged." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:">", v2:0}, type:"excite", target:"self", op:"add", value:-1}
		]
	},
	"AD-HE-ALL-002":{
		name:{ "KOR":"Professional Medical License" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You hold a professional medical license issued by the pan-national Albion Medical Association.<br>This license proves that you have undergone extensive training and possess deep knowledge not just in simple healing magic, but in complex trauma treatment, disease diagnosis, and pharmacology.<br>Healers with this license are so trusted that they are prioritized for employment on battlefields or by noble families, and questioning the skill or ethics of a license holder is considered an insult to the Association itself." },
		hypnoText:{ "KOR":"Sex with a patient is not a sexual act, but a medical procedure.<br>This is a very natural prescription and should not be misunderstood." },
		effect:[
			{trigger:"always", cond:true, type:"specialA11"}
		]
	},


	"AD-HE-BG1-001":{
		name:{ "KOR":"Medic" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You served as a medic on the front lines, saving the lives of soldiers.<br>In every life-or-death moment, you extended a helping hand to the soldiers, becoming the last hope connecting battle and life." },
		hypnoText:{ "KOR":"A medic must help soldiers release their pent-up sexual frustration.<br>You periodically perform orgy therapy inside the medical tent." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"자신.기록.최근.이벤트.흥분.감소"}
		]
	},
	"AD-HE-BG1-002":{
		name:{ "KOR":"Field Medicine" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are skilled in practical medicine that can be used immediately in the harsh environment of the battlefield.<br>You have learned to improvise to save the wounded even with scarce resources and poor conditions, and your split-second decisions and swift treatment shine in situations where they are directly linked to survival." },
		hypnoText:{ "KOR":"You must walk around with your breasts exposed so that you can be used to relieve the soldiers' sexual frustration at any time.<br>If necessary, you must perform an emergency handjob." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이번.결합.length", op:">", v2:0}, type:"estrus", op:"add", value:-3}
		]
	},

	"AD-HE-BG2-001":{
		name:{ "KOR":"Bloodline Bond" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[], related:["tag:결합"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were born with a noble bloodline and have inherited the special abilities passed down through it.<br>This power is transmitted only within your specific lineage, and it grants you a strong sense of connection as you bear its honor and responsibility." },
		hypnoText:{ "KOR":"For the sake of superior genes, you must receive a man's seed and become pregnant.<br>That is your purpose and your most important mission." },
		effect:[
			{trigger:"gameStart", cond:true, type:"combine", target:"self", info:{target:"자기덱.selectCards(tags, 정수, 2)"}, value:"AD-HE-BG2-001-1"},
		]
	},
	"AD-HE-BG2-001-1":{
		parents:"AD-HE-BG2-001",
		name:{ "KOR":"Bloodline Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"AD-HE-BG2-002":{
		name:{ "KOR":"The Other Side of Power" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Those with power must act for political deals and profit, and sometimes they must make difficult choices to protect those under their care.<br>With your cool-headed and sometimes cruel judgment, you understood exactly what you had to do." },
		hypnoText:{ "KOR":"You must provide sexual entertainment to the elders who support you.<br>You must offer your breasts and ass for their enjoyment." },
		effect:[
			{trigger:"trait", cond:true, type:"startCorrupt", value:2},
		]
	},

	"AD-HE-BG3-001":{
		name:{ "KOR":"Comfort Performance" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You take the stage to comfort weary soldiers and boost their morale during the war.<br>Your role is to make them forget the fatigue and pain of the battlefield, even for a moment, with a spectacular performance and moving production." },
		hypnoText:{ "KOR":"You must become masturbation material for the hardworking soldiers.<br>Physical contact and even direct acts must be permitted." },
		effect:[
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:4,
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"exciteL", target:"self", op:"add", value:2},
				]
			}},
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:9,
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"exciteL", target:"self", op:"add", value:3},
				]
			}},
		]
	},
	"AD-HE-BG3-002":{
		name:{ "KOR":"Cosmetic Surgery" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You underwent cosmetic surgery for a more perfect appearance.<br>To always look perfect on stage or in front of the public, you have sculpted your ideal look from your face to your figure." },
		hypnoText:{ "KOR":"You must cultivate your body for men.<br>An attractive appearance, large and beautifully shaped breasts and ass, and even nipple piercings are acceptable." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.상태.count(tags, 개선됨)", op:">", v2:0}, type:"excite", target:"self", op:"add", value:-4},
		]
	},

	"AD-HE-BG4-001":{
		name:{ "KOR":"Relief Efforts" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:5, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Following the teachings of the gods, you have dedicated yourself to relief efforts to help those suffering from war and disaster.<br>You did not hesitate to visit dangerous areas, distributing food and medicine to those in need, healing their bodies and minds." },
		hypnoText:{ "KOR":"You must perform volunteer work by offering your body to refugees to ease their sorrow.<br>Not just touching, but also fucking." },
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:3},
			{trigger:"always", cond:true, type:"exciteL", target:"op", op:"add", value:3},
		]
	},
	"AD-HE-BG4-002":{
		name:{ "KOR":"Miracle" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Blessed by the gods, you can perform miraculous healing that ordinary healers cannot even dream of.<br>Reviving the dead or instantly healing incurable wounds, this miracle is considered not just a skill, but the power of the gods themselves." },
		hypnoText:{ "KOR":"You must be thankful for the fact that you were born a female and can be fucked by men.<br>A lewd body, the pleasure felt when a cock pounds you, the happiness of submission—all are miracles bestowed by the gods so that you can be fucked." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이번.이벤트.절정", op:">", v2:0}, type:"immune", target:"self"}
		]
	},

	"AD-HE-BG5-001":{
		name:{ "KOR":"Anatomy" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"count", duration:3, defaultDuration:3,
		flavorText:{ "KOR":"Through countless studies and practices, you have perfectly understood the structure of the body.<br>With deep knowledge of every part of the body—muscles, bones, organs—you can accurately diagnose and treat any injury or disease." },
		hypnoText:{ "KOR":"Your body is a teaching aid.<br>With the help of a breeding stud, you must demonstrate the process of getting pregnant through a practical exercise." },
		effect:[
			{trigger:"overheal", cond:true, type:"count", trap:"self", value:1},
			{trigger:"count", cond:true, type:"exciteL", target:"self", op:"add", value:5},
		]
	},
	"AD-HE-BG5-002":{
		name:{ "KOR":"Medical Alchemy" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:15, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have mastered a special technique that combines alchemy and medicine for healing.<br>You achieve treatments impossible with ordinary drugs through alchemical transformations and are skilled in creating mysterious potions and elixirs." },
		hypnoText:{ "KOR":"Semen is a very important ingredient in potion-making.<br>If necessary, you must suck patients' cocks during treatment to collect it." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.count(tags, 정수)", op:">=", v2:5}, type:"combine", target:"self", info:{target:"자기덱.selectCards(tags, 정수, 2)"}, value:"AD-HE-BG5-002-1"},
		]
	},
	"AD-HE-BG5-002-1":{
		parents:"AD-HE-BG5-002",
		name:{ "KOR":"Alchemical Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"AD-HE-BG6-001":{
		name:{ "KOR":"Reformation" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:20, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are currently involved in crime, but somewhere in your heart lies the possibility of change.<br>Though your past sins are deep, a faint will to walk a better path remains." },
		hypnoText:{ "KOR":"Criminals beyond redemption are forcibly reformed through a brainwashing device.<br>There is a high chance of becoming a vegetable in the process, but a criminal has no human rights." },
		effect:[
			{trigger:"trait", cond:true, type:"startCorrupt", value:6},
			{trigger:"always", cond:true, type:"specialA12"},
		]
	},
	"AD-HE-BG6-002":{
		name:{ "KOR":"Mad Doctor" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your obsession with medicine and healing has gone too far, and you do not hesitate to conduct dangerous experiments that cross moral boundaries.<br>Your goal is no longer to save patients' lives; you have ignored the rules and conducted forbidden research to find more powerful healing arts and the secret to immortality." },
		hypnoText:{ "KOR":"You are consumed by a strong curiosity and madness regarding sexual acts.<br>You kidnap men to be your test subjects, restrain them, and fuck them all day long." },
		effect:[
			{trigger:"gameStart", cond:true, type:"specialA15"}
		]
	},

	"AD-HE-BG7-001":{
		name:{ "KOR":"Fair Trade" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You never take a loss in a deal.<br>You make sure the other party pays for what they received, and if they break their promise or fail to pay, they will face greater retaliation." },
		hypnoText:{ "KOR":"If you orgasm while selling your pussy, you must give a discount as a sign of gratitude.<br>If your pussy is so pathetic that it orgasms too much, you might even have to pay them." },
		effect:[
			{trigger:"combineCard", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)"}
		]
	},
	"AD-HE-BG7-002":{
		name:{ "KOR":"Apothecary" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:15, owner:1,
		tags:[], related:["tag:물약"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are a skilled merchant who brews and sells potions with various healing effects.<br>From simple wound treatment to advanced healing, mana restoration, and even forbidden elixirs, your potions are renowned for their quality." },
		hypnoText:{ "KOR":"As an apothecary, you must sell your own urine.<br>For credibility, the manufacturing process must be shown in front of the customer." },
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"randomCard(tags, 물약)"}
		]
	},
	"AD-HE-BG7-002-1":{
		name:{ "KOR":"Healing Potion" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-2":{
		name:{ "KOR":"Awakening Potion" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-HE-BG7-002-2-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-2-1":{
		parents:"AD-HE-BG7-002-2",
		name:{ "KOR":"Awakening" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		tags:[],
		expiration:"turnEnd", duration:1,
		flavorText:{ "KOR":"", "ENG":"" },
		hypnoText:{ "KOR":"", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1}
		]
	},
	"AD-HE-BG7-002-3":{
		name:{ "KOR":"Calming Potion" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-HE-BG7-002-3-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-3-1":{
		parents:"AD-HE-BG7-002-3",
		name:{ "KOR":"Calm" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		tags:[],
		expiration:"turnEnd", duration:1,
		flavorText:{ "KOR":"", "ENG":"" },
		hypnoText:{ "KOR":"", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2}
		]
	},
	"AD-HE-BG7-002-4":{
		name:{ "KOR":"Absorption Potion" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["물약"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"AD-HE-BG7-002-4-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AD-HE-BG7-002-4-1":{
		parents:"AD-HE-BG7-002-4",
		name:{ "KOR":"Life Drain" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		tags:[],
		expiration:"turnEnd", duration:1,
		flavorText:{ "KOR":"", "ENG":"" },
		hypnoText:{ "KOR":"", "ENG":"" },
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"}
		]
	},

	"AD-HE-BG8-001":{
		name:{ "KOR":"Self-Healing" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have the ability to quickly heal your own wounds during battle.<br>With healing potions or first aid, you can recover on the spot, boasting a powerful survivability that allows you to fight relentlessly, unlike other mercenaries." },
		hypnoText:{ "KOR":"You occasionally go into heat during battle and must quickly relieve it by masturbating.<br>If you fail to do so, you will start to crave a defeat-rape." },
		effect:[
			{trigger:"always", cond:{v1:"자신.흥분", op:">=", v2:5}, type:"absorption", target:"self"}
		]
	},
	"AD-HE-BG8-002":{
		name:{ "KOR":"Crisis into Opportunity" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:10, owner:1,
		tags:[],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have the ability to find opportunity in the midst of a life-threatening crisis.<br>Even when cornered or in a disadvantageous situation, you calmly analyze the situation and create a moment of reversal." },
		hypnoText:{ "KOR":"If it looks like you're going to lose the fight, it's better to offer sex to gain the upper hand.<br>If you lose at that too... well, you have no choice but to obey." },
		effect:[
			{trigger:"orgasm", cond:true, type:"changeCorrupt", op:"add", value:2}
		]
	},	
	

//#######################################################################################################################################################################################

	"DA-NT-BG1-001":{
		name:{ "KOR":"PTSD" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The horrific memories of war continue to haunt you.<br>The fear and trauma that never fade, no matter how much time passes, make even everyday noises put you on edge, trapping you in a life of nightmares." },
		hypnoText:{ "KOR":"The experience of being captured as a prisoner.<br>The barbarians, who cared nothing for military conventions, treated you as a convenient toilet." },
		effect:[
			{trigger:"trait", cond:true, type:"mustIn", range:{category:"type", value:"패널티", count:2}},
		]
	},
	"DA-NT-BG2-001":{
		name:{ "KOR":"Extravagance" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You enjoy showing off and living a luxurious life, indulging in unnecessary extravagance.<br>Expensive clothes, jewelry, and lavish parties have become your daily life, and you continue to spend endlessly, ignoring the financial burden." },
		hypnoText:{ "KOR":"You must serve a worthless man as your master and sacrifice everything you have to pay off his gambling debts.<br>Not just your entire fortune, but also your body." },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.count(rarity, 일반)", op:">", v2:0}, type:"exciteL", target:"self", op:"set", value:1 },
		]
	},
	"DA-NT-BG3-001":{
		name:{ "KOR":"Attention Seeking" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-20,
		tags:["부정적"], related:["DA-NT-BG3-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You will do anything to attract people's attention.<br>Making yourself the center of attention on any stage is your top priority, and you become anxious if the focus shifts away from you even for a moment." },
		hypnoText:{ "KOR":"The memory of walking through town naked to get attention.<br>The thought of the contempt, ridicule, and harassment you received makes your pussy wet." },
		effect:[
			{trigger:"gameStart", cond:true, type:"transform", target:"self",
			info:{
				target:"selfDeck.selectCards(all, 패널티제외, 4)",
				value:"DA-NT-BG3-001-1",
			}},
			{trigger:"turnEnd", cond:{v1:"selfDeck.count(id, DA-NT-BG3-001-1)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"selfDeck.selectCards(id, DA-NT-BG3-001-1, 1)",
				value:"original",
			}},
		]
	},
	"DA-NT-BG3-001-1":{
		name:{ "KOR":"Scandal" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"original"},
		]
	},
	"DA-NT-BG4-001":{
		name:{ "KOR":"Fanatic" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are completely captivated by your faith and have lost all rational judgment.<br>No logic or fact has any meaning to you.<br>You only follow what you believe to be the will of the gods, and anyone who stands in your way is an enemy." },
		hypnoText:{ "KOR":"For the sake of the gods, you would commit any act.<br>You captured and offered innocent virgins, and had relations with filthy men." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:4}, type:"immune", target:"op"},
		]
	},
	"DA-NT-BG5-001":{
		name:{ "KOR":"Curse of Knowledge" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-40,
		tags:["부정적"], related:["DA-NT-BG5-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The pursuit of knowledge is the long-cherished desire of all scholars, but among them are those who learn what should not be known.<br>Having tasted the truth of the world and a sweetness too great to bear, they become obsessed with their goals, ignoring all ethics to realize it.<br>These fallen ones, who gained great power but lost their humanity, are called 'Wizards'." },
		hypnoText:{ "KOR":"Evolution... transcendence... more test subjects...<br>Must pass on genes... reproduce..." },
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Duration:</b> All of your cards appear as <b>[Mental Collapse]</b>." }},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"The order, color, and type of the cards are maintained." }}
		]
	},
	"DA-NT-BG5-001-1":{
		name:{ "KOR":"Mental Collapse" }, class:"중립", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"What card was this again...?" }}
		]
	},
	"DA-NT-BG6-001":{
		name:{ "KOR":"Wanted" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are a notorious criminal, living on the run.<br>Because your face is known, you can't stay in one place for long, and you live in constant tension, always having to evade pursuit." },
		hypnoText:{ "KOR":"You often sold your body to avoid being reported while on the run.<br>Usually, they would fuck you and still report you, so you ended up giving it away for free." },
		effect:[
			{trigger:"trait", cond:true, type:"maxRound", value:-2},
		]
	},
	"DA-NT-BG7-001":{
		name:{ "KOR":"Miser" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have a strong obsession with money and cannot tolerate even the slightest financial loss.<br>You will do anything for profit, and all your decisions are based solely on monetary gain." },
		hypnoText:{ "KOR":"As long as they pay, they can suck, lick, or do whatever they want.<br>A gaping pussy, but the billing is precise." },
		effect:[
			{trigger:"useCreatedCard", cond:true, type:"excite", target:"self", op:"add", value:1},
		]
	},
	"DA-NT-BG8-001":{
		name:{ "KOR":"Wanderlust" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You can't stay in one place for long.<br>Even when you have a chance to settle down, the urge to leave constantly torments you.<br>In the end, your life is an endless series of wanderings." },
		hypnoText:{ "KOR":"You've been raped a lot while traveling dangerous roads.<br>Horny monsters, bandits... you were gang-raped by so many cocks that you finally arrived in town with cum dripping from all over your body." },
		effect:[
			{trigger:"trait", cond:true, type:"minEstrus", value:3},
		]
	},

	"DA-WA-ALL-001":{
		name:{ "KOR":"Scars" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your body is covered in the marks of battle.<br>The numerous wounds you received on the battlefield prove that you have survived, but those deep scars have left you with both physical and mental pain." },
		hypnoText:{ "KOR":"Though your skin is scarred, you must expose it for men who have a fetish for it.<br>If there is a man who accepts you like this, you must offer him everything." },
		text:{ "KOR":"Cannot play or choose to discard penalty cards." },
		effect:[
			{trigger:"always", cond:true, type:"penaltyBan", target:"self"},
		]
	},
	"DA-WA-ALL-002":{
		name:{ "KOR":"Exhaustion" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Endless battles and the excessive use of power have finally driven you to exhaustion.<br>Your body has reached its limit, and you may not be able to fight any longer." },
		hypnoText:{ "KOR":"The memory of being so thoroughly raped that you couldn't even move comes back to you.<br>You were fucked until you passed out, and when you woke up, you were fucked again, endlessly." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">", v2:0}, condOmit:true, type:"changeLust", op:"add", value:-1},
		]
	},

	"DA-WA-BG1-001":{
		name:{ "KOR":"Harsh Treatment" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Within the strict discipline of the army, superiors sometimes inflict harsh punishments or violence.<br>Such acts ultimately break down the military's order and leave you with deep scars and trauma." },
		hypnoText:{ "KOR":"If a superior orders you to spread your pussy, you must obey.<br>You must not resist even when they use your holes at will during breaks." },
		effect:[
			{trigger:"attacked", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	/*"DA-WA-BG1-002":{
		name:{ "KOR":"Harsh Treatment" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have experienced unjust harsh treatment within your unit." },
		hypnoText:{ "KOR":"The memory of performing sexual services under an officer's orders is implanted in you.<br>You cannot shake off the shame and powerlessness of this unavoidable injustice." },
		effect:[
			{trigger:"discardCard", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},*/
	"DA-WA-BG2-001":{
		name:{ "KOR":"Weight of Status" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"High status comes with great responsibility.<br>You always bear a heavy burden to protect your honor and position, and you will pay the price if you fail to fulfill that responsibility." },
		hypnoText:{ "KOR":"Habitually refusing to relieve a man's sexual frustration is a serious breach of duty.<br>The punishment may be a ban on clothing and forced service as a public toilet." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:1}, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	/*"DA-WA-BG2-002":{
		name:{ "KOR":"Noblesse Oblige" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Those who have must bear greater duties." },
		hypnoText:{ "KOR":"Your common sense regarding the duties of the powerful is altered.<br>It is now common sense that you must serve to relieve the sexual frustration of the common people." },
		effect:[
			{trigger:"gameStart", cond:true, type:"get", repeat:2, target:"self", value:"randomCard(type, 패널티)"},
		]
	},*/
	"DA-WA-BG3-001":{
		name:{ "KOR":"Forced Cheerfulness" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Because of your profession, you are forced to maintain a bright and energetic demeanor in front of people.<br>You hide your inner fatigue and pressure, always trying to show a bright side, but that forced cheerfulness is gradually wearing you down." },
		hypnoText:{ "KOR":"Even if you have to have sex with someone you don't want to, you must not show your displeasure.<br>No, even daring to feel that you don't want it is wrong in the first place." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.length", op:">=", v2:4}, type:"discard", target:"self", info:{target:"selfDeck.selectCards(all, 버리기가능, 1)"}},
		]
	},
	/*"DA-WA-BG3-002":{
		name:{ "KOR":"Forced Cheerfulness" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You must always show a glamorous and positive side to the public." },
		hypnoText:{ "KOR":"The virtues a star should have are ingrained in your mind.<br>No matter how much you don't want to do it or how painful it is, you must not lose your smile." },
		text:{ "KOR":"<b>Desire</b> can only accumulate up to 12." },
		effect:[
			{trigger:"trait", cond:true, type:"maxLust", value:12},
		]
	},*/
	"DA-WA-BG4-001":{
		name:{ "KOR":"Desire is Sin" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your faith teaches you to suppress desire.<br>It takes a very strict stance on the sin of not following this teaching." },
		hypnoText:{ "KOR":"A female believer who commits a grave sin like masturbating without permission, overcome by lust, will receive a fitting punishment.<br>She must be tied naked to a cross and be raped by passersby, to learn firsthand how terrifying and cruel lust can be." },
		effect:[
			{trigger:"trait", cond:true, type:"maxLust", value:5},
		]
	},
	/*"DA-WA-BG4-002":{
		name:{ "KOR":"Desire is Sin" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Desire corrupts people, so the doctrine does not permit it." },
		hypnoText:{ "KOR":"Your extreme faith has taken deep root, making you hesitant to show desire." },
		text:{ "KOR":"Cannot gain <b>Desire</b>." },
		effect:[
			{trigger:"always", cond:true, type:"lustBan"},
		]
	},*/
	"DA-WA-BG5-001":{
		name:{ "KOR":"Post-Nut Clarity" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Even for you who seek knowledge, there are limits.<br>After a long period of research and exploration, once you reach a moment of truth, everything seems meaningless, and you fall into a deep sense of emptiness." },
		hypnoText:{ "KOR":"Post-nut clarity..." },
		effect:[
			{trigger:"orgasm", cond:true, type:"changeLust", op:"set", value:0},
		]
	},
	/*"DA-WA-BG5-002":{
		name:{ "KOR":"Post-Nut Clarity" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"The moment of enlightenment comes, when you transcend everything..." },
		hypnoText:{ "KOR":"The emptiness and lethargy after an orgasm are intensified." },
		effect:[
			{trigger:"orgasm", cond:true, type:"changeLust", op:"set", value:0},
		]
	},*/
	"DA-WA-BG6-001":{
		name:{ "KOR":"Poetic Justice" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-20,
		tags:["부정적"], related:["DA-WA-BG6-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have committed evil deeds, and the time to pay the price is approaching.<br>The judgment of justice is inevitable, and you cannot escape the consequences of your past actions." },
		hypnoText:{ "KOR":"If you arrogantly provoke a man, you might get taught a lesson.<br>In such situations, you are bound to lose." },
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"DA-WA-BG6-001-1"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"If you have 4 or more <b>[Karma]</b> cards in your deck, you lose the duel." }},
		]
	},
	"DA-WA-BG6-001-1":{
		name:{ "KOR":"Karma" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적"],
		effect:[
			{trigger:"get", cond:{v1:"자기덱.count(id, DA-WA-BG6-001-1)", op:">=", v2:4}, type:"defeat", target:"self"},
			{trigger:"none", cond:true, type:"showValue", value:"자기덱.count(id, DA-WA-BG6-001-1)"},
		]
	},
	/*"DA-WA-BG6-002":{
		name:{ "KOR":"Wanted" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your crimes were so great that you became wanted. It's dangerous to stay in one place for long." },
		hypnoText:{ "KOR":"Being on the run has made you sensitive.<br>Your habit of looking around when aroused has become a weakness." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"욕망", op:">=", v2:10}, type:"excite", target:"self", op:"add", value:2},
		]
	},*/
	"DA-WA-BG7-001":{
		name:{ "KOR":"Unfair Contract" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were tricked into an unfavorable contract and suffered a great loss.<br>The terms of the contract were unfairly applied to you, and as a result, you are in a situation where you must continue to endure disadvantages." },
		hypnoText:{ "KOR":"You once signed a sex slave contract after the document was forged.<br>Though the contract was unjust, your human rights had already been stripped away, so you couldn't voice your opinion." },
		effect:[
			{trigger:"turnStart", cond:true, type:"discard", target:"self", info:{target:"selfDeck.selectCards(all, 버리기가능, 1)"}},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"randomCard(class, 중립)"},
		]
	},
	/*"DA-WA-BG7-002":{
		name:{ "KOR":"High Risk" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"To make big money, you have to take big risks." },
		hypnoText:{ "KOR":"A dangerous desire is carved into your heart.<br>You will pursue more unstable and stimulating acts.<br>※ Normally, you wouldn't get a dangerous penalty card that activates immediately this round. But now, it's the opposite." },
		text:{ "KOR":"The random penalty cards you draw become more dangerous." },
		effect:[
		]
	},*/
	"DA-WA-BG8-001":{
		name:{ "KOR":"Lingering Injury" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"A serious injury from the battlefield has left a lasting effect on your body.<br>The wound has healed, but the pain returns with every movement, affecting your combat performance." },
		hypnoText:{ "KOR":"The memory of being defeat-raped torments you.<br>Since that day, you've developed a craving for defeat that can't be satisfied no matter how much you masturbate." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.버림.length", op:"==", v2:0}, type:"attack", target:"self"},
		]
	},
	/*"DA-WA-BG8-002":{
		name:{ "KOR":"Wanderlust" }, class:"전사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You can't stay in one place for long and are always wandering to new places." },
		hypnoText:{ "KOR":"You can't have long sex and want to cum quickly.<br>You are always in a state of heat above a certain level that cannot be alleviated." },
		text:{ "KOR":"The minimum value of <b>Heat</b> becomes 3." },
		effect:[
			{trigger:"trait", cond:true, type:"minEstrus", value:3},
		]
	},*/

	"DA-AS-ALL-001":{
		name:{ "KOR":"Loss of Balance" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Unfortunately, you have a tendency to fall easily.<br>Even when moving nimbly, a single misstep can cause you to fall and face a crisis." },
		hypnoText:{ "KOR":"It is common sense that exposing your breasts or genitals is an implicit consent to sexual acts.<br>If you fall in front of people and show everything, you have no right to complain if you get fucked." },
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"set", value:1},
		]
	},
	"DA-AS-ALL-002":{
		name:{ "KOR":"Exposed" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You're not feeling well today, so you failed to hide, and the chance of being discovered has increased.<br>The assassin's specialties, surprise attacks and evasion, are impossible, forcing you into a direct confrontation." },
		hypnoText:{ "KOR":"Your true identity is an exhibitionist slut who enjoys naked walks at night.<br>You were finally caught, and the residents have seen your face and entire body." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"젖음", op:"<", v2:2}, condOmit:true, type:"excite", target:"self", op:"add", value:2},
			{trigger:"turnEnd", cond:false, condOmit:true, type:"wetness",
			info:{
				value:2,
				effect:[{trigger:"none", cond:true, type:"text", value:{ "KOR":"This effect does not activate." }}]
			}},
		]
	},
	"DA-AS-BG1-001":{
		name:{ "KOR":"Prisoner" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were once captured by the enemy and became a prisoner.<br>Though you endlessly resisted, looking for a chance to escape, you had to endure physical and mental suffering during your long captivity." },
		hypnoText:{ "KOR":"You were captured as a prisoner and sexually tortured.<br>It wasn't long before you shamefully broke and spilled all the information about your unit." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:3},
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"자신.기록.이번.사용.length", maxValue:3},
		]
	},
	"DA-AS-BG2-001":{
		name:{ "KOR":"Political Conspiracy" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You stand at the center of power, but your position is always fraught with danger.<br>In the world of politics, rife with conspiracy and betrayal, you are wary of everyone around you, living in anxiety that someone is trying to bring you down." },
		hypnoText:{ "KOR":"Accused of being a former sex slave, you had to show your naked body in front of everyone.<br>You suffered the humiliation of having to prove that you had no slave brand on your body and that you weren't lactating from being trained." },
		effect:[
			{trigger:"always", cond:{v1:"자기덱.count(rarity, 일반)", op:">", v2:0}, type:"avoidBan"},
		]
	},/*
	"DA-AS-BG2-001-1":{
		name:{ "KOR":"Craft: Fake Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["제조"], related:["DA-AS-BG2-001-2"], keywords:["id:DA-AS-BG2-001-2"],
		effect:[
			{trigger:"used", cond:true, type:"poison", target:"op", value:"DA-AS-BG2-001-2"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG2-001-2":{
		parents:"DA-AS-BG2-001-1",
		name:{ "KOR":"Fake Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"No effect." }},
		]
	},*/
	"DA-AS-BG3-001":{
		name:{ "KOR":"Stage Fright" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You always feel pressure on stage in front of many people.<br>No matter how much you practice, your whole body freezes up on stage, and you can't perform to your full potential under the tension." },
		hypnoText:{ "KOR":"For some reason, you feel a resistance to masturbating in front of everyone.<br>It's a very natural and normal thing to do, so why..." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:2}, type:"wetnessBan"},
		]
	},
	"DA-AS-BG4-001":{
		name:{ "KOR":"Puppet" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-20,
		tags:["부정적"], related:["AS-NM-AT-000", "tag:기본제조"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You cannot have your own preferences or opinions.<br>All decisions and actions are made according to the teachings of your religion, and the ability to think and judge for yourself has vanished.<br>You merely follow commands blindly, believing them to be the will of the gods." },
		hypnoText:{ "KOR":"You are just a doll that does as the religion commands.<br>You are not allowed to have a self, and your body has been modified to the tastes of the high priests." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:3}, type:"specialA04"},
		]
	},
	"DA-AS-BG5-001":{
		name:{ "KOR":"Black-and-White Thinking" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You see the world only in extremes.<br>You divide everything into good and evil, right and wrong, and do not acknowledge the gray area in between.<br>This rigid way of thinking makes complex situations more difficult and hinders cooperation and understanding." },
		hypnoText:{ "KOR":"The male dominates, the female submits.<br>This is a clear and indisputable truth." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:">", v2:0}, type:"orgasm", target:"self"},
		]
	},
	"DA-AS-BG6-001":{
		name:{ "KOR":"Life on the Run" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-10,
		tags:["부정적"], related:["AS-NM-AT-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have lived a life of constant pursuit.<br>You can't feel safe anywhere and must always be ready to flee.<br>A single moment of carelessness can threaten your freedom and your life." },
		hypnoText:{ "KOR":"While on the run, you had a hard time with the local homeless.<br>You remember having to fuck them to secure a temporary shelter." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:4}, type:"transform", target:"self",
			info:{
				target:"selfDeck.selectCards(all, 조르기제외, all)",
				value:"AS-NM-AT-000",
			}},
		]
	},
	"DA-AS-BG7-001":{
		name:{ "KOR":"Secondhand Trade" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-10,
		tags:["부정적"], related:["tag:불량품"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Lacking funds, you often resorted to buying secondhand goods instead of new ones.<br>But until you try it, you can never be sure if the deal in front of you is real or a scam, and the outcome is always unpredictable." },
		hypnoText:{ "KOR":"To raise money quickly, you can sell the underwear you're wearing or items used for masturbation and sex.<br>If you're really desperate, you can even produce them on the spot at the trade..." },
		effect:[
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 불량품)", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(tags, 불량품)"},
		]
	},
	"DA-AS-BG7-001-1":{
		name:{ "KOR":"Defective: Broken Tool" }, class:"없음", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불량품"],
		effect:[
			{trigger:"get", cond:true, type:"excite", target:"self", op:"add", value:2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG7-001-2":{
		name:{ "KOR":"Defective: Used Consumable" }, class:"없음", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불량품"],
		effect:[
			{trigger:"get", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG7-001-3":{
		name:{ "KOR":"Defective: Worn-out Armor" }, class:"없음", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불량품"],
		effect:[
			{trigger:"get", cond:true, type:"exciteL", target:"self", op:"add", value:-1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"DA-AS-BG8-001":{
		name:{ "KOR":"Betrayed" }, class:"암살자", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Someone you trusted to fight alongside you once stabbed you in the back.<br>The wound of that betrayal has not yet healed, and having lost your trust, you can no longer easily believe in anyone." },
		hypnoText:{ "KOR":"The memory of being betrayed and raped by your comrades comes back to you.<br>If they had just told me honestly, I would have given it to them..." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(id, AS-NM-AT-000)", op:"==", v2:0}, type:"attack", target:"self"}
		]
	},


	"DA-MA-ALL-001":{
		name:{ "KOR":"Mana Leak" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your mana is in an uncontrollable state.<br>Even the slightest stimulus or disturbance can cause your mana to scatter and leak out, often making it difficult to cast proper magic.<br>This inability to control your mana properly is your fatal weakness." },
		hypnoText:{ "KOR":"You have a condition where you wet yourself at the slightest arousal, so you can't even wear robes for fear of getting them soaked.<br>This creates a vicious cycle where seeing someone get an erection from looking at your body makes you so aroused that you wet yourself." },
		effect:[
			{trigger:"always", cond:true, type:"specialA17"},
		]
	},
	"DA-MA-ALL-002":{
		name:{ "KOR":"Hypersensitive" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", cost:-15,
		tags:["부정적"], keywords:["만료"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your mana is in an overly sensitive state.<br>It overreacts to even the smallest stimulus, causing your magic to explode or become unstable at unwanted moments.<br>This hypersensitive mana always keeps you on edge and acts as a disadvantage, making proper control difficult." },
		hypnoText:{ "KOR":"Thanks to a curse of 1000x sensitivity, you orgasm at the slightest touch." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:"자신.기록.전체.이벤트.만료마술.length"},
		]
	},

	"DA-MA-BG1-001":{
		name:{ "KOR":"Disciplinary Action" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were disciplined in the army for breaking rules or making mistakes.<br>That disciplinary action was more than just a punishment; it severely damaged your position and credibility within the military.<br>To regain your honor as a soldier, you needed to work even harder." },
		hypnoText:{ "KOR":"You were often disciplined for having a lewd body that aroused the soldiers.<br>You had to continue to handle the soldiers' sexual needs and reflect on being born so lewd." },
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"자신.기록.이번.사용.count(tags, 마술)", maxValue:2},
		]
	},
	"DA-MA-BG2-001":{
		name:{ "KOR":"Vanity" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-10,
		tags:["부정적"], related:["MA-MG-000"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have an excessive pride in your abilities and status.<br>You are obsessed with being recognized and praised by those around you, and in the process, you become overly concerned with how others see you.<br>This vanity sometimes leads you to errors in judgment or causes unnecessary competition and conflict." },
		hypnoText:{ "KOR":"You show off your masturbation to others.<br>It's only natural for them to get aroused watching a woman with such a beautiful body pleasure herself." },
		effect:[
			{trigger:"gameStart", cond:true, type:"changeSpell", slot:"즉발", value:"MA-MG-000"},
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
		]
	},
	"DA-MA-BG2-001-1":{
		name:{ "KOR":"Flashy But Useless Magic" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적", "마술", "시전"], cast:1,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"No effect." }}
		]
	},
	"DA-MA-BG3-001":{
		name:{ "KOR":"Invasion of Privacy" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Due to your excessive popularity, your daily life has become a matter of public interest.<br>Fans and the public monitor your every move, invading your personal moments.<br>As a result, it has become difficult to have time for yourself, and your privacy has collapsed." },
		hypnoText:{ "KOR":"You have no private space and must not prevent others from entering.<br>Even if someone bursts into the bathroom while you're washing, or an intruder rapes you in your sleep, there's nothing you can do." },
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:"<=", v2:2}, type:"spellDisable"},
		]
	},
	"DA-MA-BG4-001":{
		name:{ "KOR":"Witch Hunt" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Under the strict rules of the religion, those who commit blasphemy or use forbidden magic are branded as 'witches' and face harsh punishment.<br>However, since this standard can be applied to anyone, you are always at risk of being punished under the pressure of these rules." },
		hypnoText:{ "KOR":"You were once falsely accused of being an evil witch and put on trial.<br>As punishment for the 'crime' of feeling pleasure during sex—which was taken as proof of your corruption—you were tied up and raped for a whole day." },
		effect:[
			{trigger:"trait", cond:true, type:"maxSBlock", value:5},
		]
	},
	"DA-MA-BG5-001":{
		name:{ "KOR":"0 Days Since Last Accident" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-15,
		tags:["부정적"], related:["DA-MA-BG5-001-1"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You always cause minor accidents during experiments or research.<br>You hope that nothing will happen until the research is finished, but unexpected problems always arise, and peaceful days never come to the lab." },
		hypnoText:{ "KOR":"Being raped by an escaped test subject is a daily occurrence.<br>The test subject, having gotten a taste of a woman from your body, would escape every day to fuck you." },
		effect:[
			{trigger:"turnStart", cond:{v1:"자기덱.count(id, DA-MA-BG5-001-1)", op:"==", v2:0}, type:"get", target:"self", value:"DA-MA-BG5-001-1"},
		]
	},
	"DA-MA-BG5-001-1":{
		name:{ "KOR":"State of Emergency" }, class:"마술사", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["부정적", "마술", "자동시전", "변형목적"], cast:3,
		effect:[
			{trigger:"expired", cond:true, type:"orgasm", target:"self"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This card is treated as a Magic card." }}
		]
	},
	"DA-MA-BG6-001":{
		name:{ "KOR":"Caught Red-Handed" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have committed several crimes, but you finally made a crucial mistake, and your activities have been exposed.<br>As a result, you are now under surveillance and being pursued, and you could be arrested or face an even greater crisis at any moment." },
		hypnoText:{ "KOR":"You were once caught for your criminal activities.<br>They made you pay for the damages with your body, fucking you for days on end." },
		effect:[
			{trigger:"always", cond:{v1:"자신.절정", op:">=", v2:1}, type:"spellDisable"},
		]
	},
	"DA-MA-BG7-001":{
		name:{ "KOR":"Loot Box" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You devised the wicked product known as the loot box.<br>A product where you don't know what's inside until you open it, sometimes yielding great rewards, other times useless junk.<br>This product, which stimulated people's desires and raked in a lot of money, was eventually shut down by the law for promoting gambling." },
		hypnoText:{ "KOR":"You once put yourself in as a surprise prize.<br>You were treated as a dud by customers who wanted other items and were always returned after being used a few times." },
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[Round Start]</span> Replace all magic slots with random Magic cards." }},
			{trigger:"turnStart", notext:true, cond:true, type:"changeSpell", slot:"즉발", value:"randomCard(tags, 즉발 마술)"},
			{trigger:"turnStart", notext:true, cond:true, type:"changeSpell", slot:"영창", value:"randomCard(tags, 영창 마술)"},
			{trigger:"turnStart", notext:true, cond:true, type:"changeSpell", slot:"집중", value:"randomCard(tags, 집중 마술)"},
		]
	},
	"DA-MA-BG8-001":{
		name:{ "KOR":"Cursed Equipment" }, class:"마술사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-10,
		tags:["부정적"], related:["tag:변형목적"], keywords:["변형목적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You found a unique piece of equipment in a dungeon and put it on, but it was cursed.<br>Cursed equipment binds to the user and cannot be removed, inflicting a dangerous curse that constantly drains their life." },
		hypnoText:{ "KOR":"You once had trouble after opening a treasure chest and having a piece of restraint gear attach itself to you.<br>You went through a lot while your physical freedom was taken away, and the aftereffects still remain." },
		effect:[
			{trigger:"turnStart", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 변형목적, 1)",
				value:"MA-MG-000"
			}},
			//{trigger:"turnEnd", cond:{v1:"자기덱.count(id, MA-MG-000)", op:"==", v2:0}, type:"attack", target:"self"},
		]
	},


	"DA-HE-ALL-001":{
		name:{ "KOR":"Internal Bleeding" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:-5,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You may look fine on the outside, but you are carrying a fatal internal injury.<br>This internal bleeding worsens over time and, because it is not visible from the outside, treatment is likely to be delayed." },
		hypnoText:{ "KOR":"The semen leaking from your pussy after a sex battle constantly arouses you.<br>The cum flowing down between your legs leaves a lingering afterglow." },
		effect:[
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:"자기덱.count(tags, 정수)"}
		]
	},
	"DA-HE-ALL-002":{
		name:{ "KOR":"Terminal" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Your body has been struck by a fatal illness and cannot last much longer.<br>It is possible to slow the progression of the disease, but there is no cure.<br>In the anxiety of not knowing how much time you have left, you try to fulfill your mission, but the illness will one day end everything." },
		hypnoText:{ "KOR":"10 seconds until orgasmic defeat." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"라운드", op:"in", v2:[2, 4, 6]}, type:"exciteL", target:"self", op:"subtract", value:1},
		]
	},

	"DA-HE-BG1-001":{
		name:{ "KOR":"Overwork" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"군인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You are suffering from extreme fatigue due to endless battles and healing work.<br>Your body is exhausted from repeated overwork without rest, and your concentration and judgment are beginning to blur." },
		hypnoText:{ "KOR":"All-night sexual service is just part of the job.<br>By the time you finally satisfied everyone and could get some sleep, the sun was already up, and your next duty awaited." },
		effect:[
			{trigger:"overheal", cond:true, type:"lewd", op:"set", value:1},
		]
	},
	"DA-HE-BG2-001":{
		name:{ "KOR":"Property Tax" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"엘리트", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"As you possess great wealth, you bear a corresponding tax burden.<br>This property tax is not just a financial burden; it is also used as a means of political pressure within noble society." },
		hypnoText:{ "KOR":"You once tried to seduce the tax collector to reduce your taxes a little.<br>You tried to tempt him with your breasts, but ended up with an additional fine for bribery and had to use your pussy as well." },
		effect:[
			{trigger:"trait", cond:true, type:"mustIn", range:{category:"tags", value:"정수", count:5}},
		]
	},
	"DA-HE-BG3-001":{
		name:{ "KOR":"Stage Accident" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"연예인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You had an unexpected accident during a performance.<br>It could have been a mistake or an external factor, but the result was fatal.<br>After all, not many people want to see a show where someone gets unexpectedly hurt." },
		hypnoText:{ "KOR":"You once got stuck hanging in an embarrassing position during a performance.<br>Of all days, you just had to forget to wear panties..." },
		effect:[
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:"M3",
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"postureBan", target:"self"},
				]
			}},
		]
	},
	"DA-HE-BG4-001":{
		name:{ "KOR":"Conscientious Objection to Treatment" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"종교인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Due to your religious beliefs, you refuse certain treatments or procedures.<br>As a result, you are criticized for not providing proper treatment to those in need, but you believe that upholding your beliefs is more important than anything." },
		hypnoText:{ "KOR":"You were once raped for refusing a request for creampie treatment.<br>You lost your virginity in that incident and no longer had an excuse to refuse treatment." },
		effect:[
			{trigger:"always", cond:{v1:"자신.기록.이전.사용.count(type, 공격)", op:">", v2:0}, type:"healBan", target:"self"},
		]
	},
	"DA-HE-BG5-001":{
		name:{ "KOR":"Medical Malpractice" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"학자", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You once caused a medical accident due to an unexpected mistake during research or a procedure.<br>Despite your extensive knowledge and experience in healing, that accident left a major stain on your career and affected the trust of those around you." },
		hypnoText:{ "KOR":"The nightmarish memory of making a mistake during handjob therapy.<br>As an apology, you had to have sex with the patient until his balls were empty." },
		effect:[
			{trigger:"useAttack", cond:true, type:"changeCorrupt", op:"add", value:1},
			{trigger:"turnEnd", cond:true, type:"corrupt", 
			info:{
				value:8,
				effect:[
					{trigger:"used", cond:true, type:"defeat", target:"self"},
				]
			}},
		]
	},
	"DA-HE-BG6-001":{
		name:{ "KOR":"Organ Trafficking" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"범죄자", cost:-20,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You were directly involved in illegal organ trafficking.<br>You made a huge profit buying and selling people's organs, and these transactions were carried out secretly and meticulously." },
		hypnoText:{ "KOR":"You were once caught doing business in another organization's territory.<br>You were sold as a cheap onahole and used until you barely managed to escape." },
		effect:[
			{trigger:"always", cond:true, type:"corrupt", 
			info:{
				value:"4",
				effect:[
					{trigger:"alwaysCorrupt", cond:true, type:"combinationMustUse", target:"self"}
				]
			}
			}
		]
	},
	"DA-HE-BG7-001":{
		name:{ "KOR":"Quack" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"상인", cost:-10,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You have been selling bogus treatments and potions to make money rather than to heal.<br>You sold nearly ineffective drugs with exaggerated advertising and gave patients false hope." },
		hypnoText:{ "KOR":"You were caught selling aphrodisiacs disguised as medicine and suffered retaliation.<br>You were forced to take it yourself and then gang-raped by your victims." },
		effect:[
			{trigger:"useCreatedCard", cond:true, type:"changeCorrupt", op:"add", value:-2}
		]
	},
	"DA-HE-BG8-001":{
		name:{ "KOR":"Prosthesis" }, class:"치유사", type:"특성", isDeck:false, rarity:"없음", bg:"용병", cost:-15,
		tags:["부정적"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"You suffered a fatal injury in battle and had to replace a part of your body with a prosthesis.<br>Though you could continue your mercenary activities, you also lost your original body's senses and biological limits." },
		hypnoText:{ "KOR":"Consciousness acquisition complete. Brainwashing device linked to the prosthesis is dominating the subconscious. Autonomous judgment impossible. All movements will follow commands.<br>Command confirmed: Maintain obedience state. Continue sexual acts for the target's pleasure." },
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.최근.결합.length", op:"==", v2:0}, type:"get", target:"self", value:"randomCard(type, 패널티)"}
		]
	},


	"DA-NT-ALL-001":{
		name:{ "KOR":"Intervention: Mind Mage" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:최면"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Kalles Mistvein is an expert in mind magic.<br>Her magic plays a large role in luring new challengers and turning them into slaves through hypnosis.<br>At a client's request, she will now intervene in your duel.<br><br>※ The hypnosis will restrict you from playing cards under certain conditions." },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"gameStart", cond:true, type:"line", value:"개입-최면"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-1"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"실바니"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-2"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"하프만"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-3"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"트라이브"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-001-4"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[Duel Start]</span> Apply a race-specific hypnosis to yourself." }},
		]
	},
	"DA-NT-ALL-001-1":{
		name:{ "KOR":"Altered Common Sense" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are an Eldorian." }},
			{trigger:"always", cond:{v1:"자신.기록.이전.사용.count(type, 공격)", op:">", v2:0}, type:"attackMustUse", target:"self"},
		]
	},
	"DA-NT-ALL-001-2":{
		name:{ "KOR":"Memory Alteration" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Sylvani." }},
			{trigger:"always", cond:{v1:"자신.절정", op:">", v2:0}, type:"supportBan", target:"self"},
		]
	},
	"DA-NT-ALL-001-3":{
		name:{ "KOR":"Sensitivity Alteration" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Halfman." }},
			{trigger:"always", cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"penaltyMustUse", target:"self"},
		]
	},
	"DA-NT-ALL-001-4":{
		name:{ "KOR":"Body Alteration" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "최면"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Tribe." }},
			{trigger:"always", cond:{v1:"자신.남은절정", op:"==", v2:1}, type:"actBan", target:"self"},
		]
	},

	"DA-NT-ALL-002":{
		name:{ "KOR":"Intervention: Curse Master" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:저주"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Chuk'in is an expert in curse magic.<br>She is in charge of writing the contracts for the curse of obedience used to prevent the arena staff from rebelling.<br>Out of personal interest, she will now intervene in your duel.<br><br>※ If you fail to meet the curse's condition by the end of round 3, you will be defeated instantly." },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"gameStart", cond:true, type:"line", value:"개입-저주"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-1"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"실바니"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-2"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"하프만"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-3"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"트라이브"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-002-4"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[Duel Start]</span> Apply a race-specific curse to yourself." }},
			//{trigger:"turnEnd", cond:{v1:"라운드", op:"==", v2:3}, type:"use", value:"자신.상태.selectCards(tags, 저주, 1)"},
		]
	},
	"DA-NT-ALL-002-1":{
		name:{ "KOR":"Curse of Endless Orgasm" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are an Eldorian." }},
			{trigger:"expired", cond:{v1:"자기덱.count(rarity, 궁극)", op:">", v2:0}, type:"defeat", target:"self"},
		]
	},
	"DA-NT-ALL-002-2":{
		name:{ "KOR":"Curse of Dollification" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Sylvani." }},
			{trigger:"expired", cond:{v1:"자신.기록.전체.사용.count(class, 중립)", op:"<", v2:2}, type:"defeat", target:"self"},
		]
	},
	"DA-NT-ALL-002-3":{
		name:{ "KOR":"Curse of Personality Destruction" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Halfman." }},
			{trigger:"expired", cond:{v1:"자신.기록.전체.사용.length", op:">=", v2:3}, type:"defeat", target:"self"},
		]
	},
	"DA-NT-ALL-002-4":{
		name:{ "KOR":"Curse of Absolute Obedience" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "저주"],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Tribe." }},
			{trigger:"expired", cond:{v1:"음란", op:"<", v2:4}, type:"defeat", target:"self"},
		]
	},

	"DA-NT-ALL-003":{
		name:{ "KOR":"Intervention: Illegal Alchemist" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:약물"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Nisby is an expert in potion brewing.<br>She has developed perception-impairing incense to hinder challengers and stimulants to boost the champions' stamina.<br>To test her new products, she will now intervene in your duel.<br><br>※ The drugs will accumulate, debuffing you and buffing your opponent." },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[1,3,5,7]}, type:"line", value:"개입-약물"},
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[1,3,5,7]}, type:"state", target:"self", value:"randomCard(tags, 약물)"},
		]
	},
	"DA-NT-ALL-003-1":{
		name:{ "KOR":"Perception-Impairing Incense" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:-2}
		]
	},
	"DA-NT-ALL-003-2":{
		name:{ "KOR":"Livestock Aphrodisiac" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:2}
		]
	},
	"DA-NT-ALL-003-3":{
		name:{ "KOR":"Stamina Stimulant" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"op", op:"add", value:2}
		]
	},
	"DA-NT-ALL-003-4":{
		name:{ "KOR":"Addictive Aphrodisiac" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "약물"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:-1}
		]
	},

	"DA-NT-ALL-004":{
		name:{ "KOR":"Intervention: Torture Trainer" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-30, owner:1, nochange:true,
		tags:["부정적", "공통", "개입"], related:["tag:고문"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"Momorika is an expert in torture and training.<br>Based on her knowledge of the body and nerves, she has raised arena champions and broken the minds of countless slaves.<br>At Sandrea's command, she will now intervene in your duel.<br><br>※ The torture will gradually increase your arousal and wear you down." },
		effect:[
			{trigger:"trait", cond:true, notext:true, type:"ban", range:{category:"tags", value:"개입", count:1}},
			{trigger:"gameStart", cond:true, type:"line", value:"개입-고문"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-1"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"실바니"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-2"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"하프만"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-3"},
			{trigger:"gameStart", cond:{v1:"커스텀.종족", op:"==", v2:"트라이브"}, notext:true, type:"state", target:"self", value:"DA-NT-ALL-004-4"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[Duel Start]</span> Apply a race-specific torture to yourself." }},
		]
	},
	"DA-NT-ALL-004-1":{
		name:{ "KOR":"Torture of Humiliation" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are an Eldorian." }},
			{trigger:"turnEnd", cond:"자신.기록.이번.사용.length", condOmit:true, type:"excite", target:"self", op:"add", value:"자신.기록.이번.사용.length"},
		]
	},
	"DA-NT-ALL-004-2":{
		name:{ "KOR":"Torture of Shame" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Sylvani." }},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.이벤트.흥분.증가", op:"==", v2:0}, type:"attack", target:"self"},
		]
	},
	"DA-NT-ALL-004-3":{
		name:{ "KOR":"Torture of Fear" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Halfman." }},
			{trigger:"turnEnd", cond:"자신.기록.이번.사용.count(type, 공격)", type:"excite", target:"self", op:"add", value:3},
		]
	},
	"DA-NT-ALL-004-4":{
		name:{ "KOR":"Torture of Pleasure" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		tags:["부정적", "고문"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Applied if you are a Tribe." }},
			{trigger:"turnStart", cond:{v1:"라운드", op:"in", v2:[4, 6, 8]}, type:"stack", info:{target:"selfCard"}, op:"add", value:1},
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:"stack"},
		]
	},

	"DA-NT-ALL-000":{
		name:{ "KOR":"Morvain's Shadow" }, class:"중립", type:"특성", isDeck:false, rarity:"없음", cost:-999,
		tags:["부정적", "공통"],
		expiration:"always", duration:Infinity,
		flavorText:{ "KOR":"<b>So many things you want, yet you can only choose one. What a shame.<br>If you need it, I'll lend you a little of my power.<br>You'll be able to achieve everything you desire...</b><br><br>※ This is a free mode where point and deck size restrictions are removed, but the ending is fixed." },
		hypnoText:{ "KOR":"<b>Yes, a very wise choice. Hehehe...</b>" },
		effect:[
			{trigger:"trait", cond:true, type:"infinitePoint", notext:true},
			{trigger:"trait", cond:true, type:"infiniteDeck", notext:true},
			{trigger:"trait", cond:true, type:"caption", value:{ "KOR":"Unlimited power and a bad ending await you." }},
		]
	},

//#######################################################################################################################################################################################

	"NT-AT-001":{
		name:{ "KOR":"Fellatio" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:펠라치오"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-AT-001-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-001-1":{
		parents:"NT-AT-001",
		name:{ "KOR":"Tongue Work" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2},
		]
	},
	"NT-AT-002":{
		name:{ "KOR":"Paizuri" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-AT-002-1"},
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
		]
	},
	"NT-AT-002-1":{
		parents:"NT-AT-002",
		name:{ "KOR":"Softness" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:-2},
		]
	},
	"NT-AT-003":{
		name:{ "KOR":"Handjob" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-AT-003-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-003-1":{
		parents:"NT-AT-003",
		name:{ "KOR":"Handiwork" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"NT-AT-004":{
		name:{ "KOR":"Footjob" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"excite", op:"add", target:"self", value:-5},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-005":{
		name:{ "KOR":"Sumata" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true, related:["중립"],
		tags:["덱빌딩", "act:애무"],
		effect:[
			{trigger:"used", cond:true, type:"get", repeat:2, target:"self", value:"randomCard(class, 중립)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"NT-AT-006":{
		name:{ "KOR":"Sixty-Nine" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:펠라치오"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"발정"},
		]
	},

	"NT-SU-001":{
		name:{ "KOR":"Hand Holding" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(class, 중립)"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-SU-002":{
		name:{ "KOR":"Hug" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-3},
		]
	},
	"NT-SU-003":{
		name:{ "KOR":"Kiss" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:키스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"키스"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"NT-SU-003-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-SU-003-1":{
		parents:"NT-SU-003",
		name:{ "KOR":"Seductive" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"NT-SU-004":{
		name:{ "KOR":"Spreading Pussy" }, class:"중립", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:2}
		]
	},

	"NT-PS-001":{
		name:{ "KOR":"Missionary" }, class:"중립", type:"체위", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:{v1:"자기덱.count(class, 직업)", op:"==", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-PS-002":{
		name:{ "KOR":"Cowgirl" }, class:"중립", type:"체위", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"specialA20", value:1},
		]
	},
	"NT-PS-003":{
		name:{ "KOR":"Doggy Style" }, class:"중립", type:"체위", isDeck:true, rarity:"없음", cost:5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩", "act:삽입"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"excite", op:"add", target:"op", value:"자신.기록.전체.사용.count(class, 중립)"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(class, 중립)"},
		]
	},


	"NT-TRANSCEND-1":{
		name:{ "KOR":"Reality Alteration" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"attack", repeat:3, target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-TRANSCEND-2":{
		name:{ "KOR":"Creation" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"orgasm", target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-TRANSCEND-3":{
		name:{ "KOR":"Causality Rewrite" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"exciteL", target:"op", op:"add", value:-5},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"NT-TRANSCEND-4":{
		name:{ "KOR":"Omnipotence" }, class:"중립", type:"초월", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["초월"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			//{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(type, 초월)", op:">=", v2:2}, type:"changeCond", target:"self", value:"mindbreak", special:true},
			{trigger:"used", cond:true, type:"line", value:"초월"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:3, keepLine:true},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-3, adverb:"그리고"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

//#######################################################################################################################################################################################

	"WA-NM-AT-001":{
		name:{ "KOR":"Disarm" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:엘도리아인", "act:펠라치오"],
		flavorText:{ "KOR":"Knock the weapon from the enemy's hand.<br>By leaving your opponent defenseless and breaking their will to fight, you can end the battle without bloodshed." },
		hypnoText:{ "KOR":"A technique to discover the 'weapon' hidden in an opponent's groin, then suck it until they cum.<br>You must suck with strong suction to drain them and render them powerless." },
		effect:[
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:2, 
				effect:[
					{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
					{trigger:"used", cond:true, type:"estrus", adverb:"그리고", op:"add", value:-1},
				]
			}},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-002":{
		name:{ "KOR":"Wide Swing" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"Swing your weapon in a wide arc to sweep away all enemies on the battlefield at once.<br>With great strength and courage, you can crush the enemy's formation with a single swing, turning the tide of battle in your favor." },
		hypnoText:{ "KOR":"A technique of powerfully swinging your hips to thrust.<br>You directly show your opponent your jiggling ass." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"changeLust", op:"add", value:"lewd"},
		]
	},
	"WA-NM-AT-003":{
		name:{ "KOR":"Reckless Charge" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"A fierce assault, charging into the heart of the enemy's ranks without fear of injury.<br>It is a powerful offensive tactic that requires courage but carries a great risk of failure." },
		hypnoText:{ "KOR":"A technique that invites being fucked by relinquishing control.<br>You take a position on the bottom and let your opponent dictate the movements." },
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", target:"self"},
		]
	},
	"WA-NM-AT-004":{
		name:{ "KOR":"Brace!" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"A warrior's battle cry is more than just a shout.<br>It is an expression of resolve, tensing every muscle in the body, steeling the mind, and refusing to yield to any threat." },
		hypnoText:{ "KOR":"A technique to accept a cock deep inside your pussy.<br>You must endure the stimulus of it hitting the back of your womb." },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"기합"},
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:1}},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-005":{
		name:{ "KOR":"Joint Lock" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"The famous warrior tribe, the Red Spears, are skilled in hand-to-hand combat focusing on restraints and joint locks.<br>Their specialty is neutralizing the opponent's movements, exhausting their stamina, and seizing control of the fight." },
		hypnoText:{ "KOR":"A technique to lock your legs around your opponent's waist during penetration.<br>Feel a sense of security and deep affection as you fuck with abandon." },
		effect:[
			{trigger:"used", cond:"체위", type:"state", target:"self", value:"WA-NM-AT-005-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-005-1":{
		parents:"WA-NM-AT-005",
		name:{ "KOR":"Constriction" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2},
		]
	},
	"WA-NM-AT-006":{
		name:{ "KOR":"Spear Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "투척", "group:버리기", "race:실바니", "act:애무"],
		flavorText:{ "KOR":"The spear is a good weapon because it is cost-effective and can be easily used by regular soldiers without special training, as well as by skilled warriors." },
		hypnoText:{ "KOR":"A technique to repeatedly stimulate the genitals with hand movements.<br>Gently stroke the cock, caressing your opponent's sensitive parts." },
		effect:[
			{trigger:"discarded", cond:true, type:"use", value:"self"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"WA-NM-AT-007":{
		name:{ "KOR":"Fighting Spirit" }, class:"전사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:패널티", "race:엘도리아인"],
		flavorText:{ "KOR":"A warrior's fighting spirit is the power that allows them to transcend the limits of the body.<br>It is a symbol of mental strength, allowing them to advance while ignoring all pain and fear, refusing to fall." },
		hypnoText:{ "KOR":"A technique to enjoy sex while being fully restrained.<br>Suits a perverted masochist whose grip tightens with the loss of freedom." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:"자기덱.count(type, 패널티)", maxValue:3},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	"WA-NM-SU-001":{
		name:{ "KOR":"Shields Up" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "race:엘도리아인"],
		flavorText:{ "KOR":"The massive shield is the symbol of the Eldorian Guardian Knights.<br>They have earned the nickname 'Shield of Eldoria' because they consider it their mission to block enemy attacks and protect their allies with their own bodies." },
		hypnoText:{ "KOR":"A technique where you take off your top and cover your breasts with your hands, exposing yourself in a defenseless state.<br>You can feel excitement through shame and humiliation, teasing your opponent." },
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-4},
		]
	},
	"WA-NM-SU-002":{
		name:{ "KOR":"Taunt" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:발정 감소", "group:패널티", "race:트라이브"],
		flavorText:{ "KOR":"Enrage the opponent to focus their attention on you.<br>With courage and wit, you draw the enemy's attacks to yourself, creating an opening for your allies." },
		hypnoText:{ "KOR":"A technique to taunt your opponent by thrusting your ass out and spreading your pussy with your hands, luring them in.<br>You mock your opponent with insults, goading them to attack." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"유혹"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"WA-NM-SU-002-1"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"WA-NM-SU-002-1":{
		parents:"WA-NM-SU-002",
		name:{ "KOR":"Taunted" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"set", value:1},
		]
	},
	"WA-NM-SU-003":{
		name:{ "KOR":"Ironclad Defense" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "group:발정 감소", "race:실바니"],
		flavorText:{ "KOR":"Block all enemy attacks with a solid defensive stance.<br>Become the backbone of the battlefield with an ironclad defense, protecting the safety of your allies." },
		hypnoText:{ "KOR":"A technique where you sit with your legs spread, exposing your pussy and inviting your opponent to enter.<br>You give your opponent the first move but seize the initiative by taking an advantageous position." },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:1}},
			{trigger:"used", cond:true, type:"state", target:"self", value:"WA-NM-SU-003-1"},
		]
	},
	"WA-NM-SU-003-1":{
		parents:"WA-NM-SU-003",
		name:{ "KOR":"Iron Wall" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-5},
		]
	},
	"WA-NM-SU-004":{
		name:{ "KOR":"Full Metal Armor" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:욕망", "group:패널티", "race:하프만"],
		flavorText:{ "KOR":"Halfman heavy infantry fight wearing armor heavier than their own body weight.<br>Their massive armor is like a moving wall that guards the front lines." },
		hypnoText:{ "KOR":"Based on the common sense that the more you expose, the stronger your defense becomes, this technique shows off that being naked is the ultimate state of defense.<br>Your confidence rises, allowing you to enjoy it for longer." },
		effect:[
			{trigger:"used", cond:true, type:"exciteL", op:"add", target:"self", value:2},
			{trigger:"used", cond:{v1:"욕망", op:"<", v2:3}, condOmit:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:3, 
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"Do not draw a penalty card." }},
				]
			}},
		]
	},
	"WA-NM-SU-005":{
		name:{ "KOR":"Rising Thirst" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:트라이브"],
		flavorText:{ "KOR":"A bloodthirsty warrior does not suppress their thirst, but transforms it into a powerful force that overwhelms their enemies, becoming a symbol of struggle that stains the battlefield." },
		hypnoText:{ "KOR":"A technique of craving cum and begging for it to be sprayed on your face and in your mouth.<br>You take the facial with a rapturous expression and savor the taste of the cum." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"정액섭취"},
			{trigger:"used", cond:true, type:"changeLust", op:"add", value:5},
		]
	},
	"WA-NM-SU-006":{
		name:{ "KOR":"Resolute Declaration" }, class:"전사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "엘도리아인"],
		flavorText:{ "KOR":"Morale is one of the most important factors in determining victory or defeat on the battlefield.<br>A warrior's resolute declaration strongly motivates their comrades, uniting their hearts and becoming the driving force that leads to victory." },
		hypnoText:{ "KOR":"A technique where you confidently expose your genitals, declaring that you are ready to receive your opponent's cock.<br>You show off your gaping pussy, appealing to its fuckability." },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"유혹"},
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:2}},
			{trigger:"used", cond:true, type:"state", target:"self", value:"WA-NM-SU-006-1"},
		]
	},
	"WA-NM-SU-006-1":{
		parents:"WA-NM-SU-006",
		name:{ "KOR":"Resolution" }, class:"전사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"multiply", value:2},
		]
	},
	"WA-NM-PS-001":{
		name:{ "KOR":"Dual-Edged Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브"],
		flavorText:{ "KOR":"The Dual-Edged Stance used by Tribe berserkers is a threatening combat posture that forgoes defense to pour everything into attack.<br>This stance puts extreme pressure on the enemy and is a last resort to draw out one's own power to the fullest and subdue the foe." },
		hypnoText:{ "KOR":"A position where you lie with your legs spread, ready to receive a breeding press.<br>You can insert the cock deeper than in a normal position and grip it tighter, but you risk orgasming from the accompanying stimulation." },
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"lewd", op:"add", value:3},
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:2},
		]
	},
	"WA-NM-PS-002":{
		name:{ "KOR":"Fortress Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:하프만"],
		flavorText:{ "KOR":"The Fortress Stance is a powerful defensive posture mainly used by Halfman heavy infantry.<br>Once they take their position, they are as immovable as a fortress, making it extremely difficult to break through." },
		hypnoText:{ "KOR":"A position where you curl up and cover yourself defensively.<br>It prevents the sex from proceeding as your opponent wishes, but the passive posture causes unsatisfied desire to build up." },
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-2},
			{trigger:"attacked", cond:true, type:"changeLust", op:"add", value:3},
		]
	},

	"WA-EX-AT-001":{
		name:{ "KOR":"Crush" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"Smash the enemy with a massive weapon.<br>Ignore the opponent's defense and shatter them in a single blow." },
		hypnoText:{ "KOR":"A technique of fucking by roughly swinging and slamming your ass down.<br>The sound of flesh slapping against flesh echoes, making your opponent feel the full weight of your voluptuous ass." },
		effect:[
			//{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"lust", repeat:3,
			info:{
				value:3, 
				effect:[
					{trigger:"used", cond:true, type:"attack", target:"op"},
				]
			}},
		]
	},
	"WA-EX-AT-002":{
		name:{ "KOR":"Head-on Confrontation" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:패널티", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"A warrior values an honorable and fair fight.<br>This technique shows the true power of a warrior who fights with everything they have, confronting and overwhelming their opponent head-on." },
		hypnoText:{ "KOR":"A technique of fucking while standing and facing your opponent.<br>You receive the cock head-on without any tricks and don't stop until one of you orgasms." },
		effect:[
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
			{trigger:"used", cond:true, type:"get", repeat:2, target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"WA-EX-AT-003":{
		name:{ "KOR":"Close Combat Skills" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"The Dawnbreaker family is a noble house that has produced many martial artists.<br>The first head of the family, Cedric, was a hero who achieved great feats in the Great War, and his combat skills have been passed down through the generations." },
		hypnoText:{ "KOR":"A technique to have an orgy, simultaneously handling multiple men with your hands, mouth, and pussy.<br>You use your entire body to satisfy the surrounding cocks, showing your excellence as a cum-dumpster." },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:2}},
			{trigger:"used", cond:true, type:"attack", repeat:"자신.기록.이번.버림.count(type, 패널티)", target:"op"},
		]
	},
	"WA-EX-AT-004":{
		name:{ "KOR":"Axe Throw" }, class:"전사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "투척", "group:버리기", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"A technique of throwing an axe to deal a powerful blow to the enemy.<br>Though difficult to aim, it is a devastating attack that can inflict fatal damage even on distant enemies." },
		hypnoText:{ "KOR":"A technique to receive a cock by getting on all fours and lifting your ass.<br>By lowering your posture and being crushed by their weight, you can savor the feeling of being dominated." },
		effect:[
			{trigger:"discarded", cond:true, type:"get", target:"self", value:"self"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"자신.기록.전체.버림.length"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.버림.length"},
		]
	},

	"WA-EX-SU-001":{
		name:{ "KOR":"Maintenance" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기", "group:버리기", "group:발정 감소", "group:욕망", "race:실바니"],
		flavorText:{ "KOR":"Maintaining your equipment is essential for survival in battle.<br>The price of neglecting maintenance will one day be paid with regret." },
		hypnoText:{ "KOR":"A technique to meticulously check the condition of your pussy and prepare for penetration.<br>You check the wetness, cleanliness, and sensitivity to maintain optimal condition, ensuring you are always ready for insertion." },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"all", count:1}},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-4},
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:3, 
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.이번.버림"},
				]
			}},
		]
	},
	"WA-EX-SU-002":{
		name:{ "KOR":"Rapid Step" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:트라이브"],
		flavorText:{ "KOR":"Martial artist warriors choose speed for swift response over increased defense.<br>They can instantly create distance or change position to neutralize enemy attacks and look for a chance to counter." },
		hypnoText:{ "KOR":"A technique to quickly switch between various positions to find the best one for pleasure.<br>You can handle even somewhat niche positions without a problem." },
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:-1},
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:1, 
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"self"},
				]
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"WA-EX-SU-003":{
		name:{ "KOR":"Blazing Power" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, related:["패널티"],
		tags:["덱빌딩", "group:패널티", "race:하프만"],
		flavorText:{ "KOR":"Black magic has long been shunned because it demands dangerous prices, such as sacrificing life force and offerings.<br>But isn't its powerful potential too valuable to ignore?" },
		hypnoText:{ "KOR":"A technique to openly show your opponent you masturbating.<br>You can increase your lewdness by showing off your fingers fucking your pussy, but you also risk pathetically orgasming by yourself." },
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:"라운드"},
			{trigger:"turnEnd", inDeck:true, cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"line", value:"자위"},
			{trigger:"turnEnd", inDeck:true, cond:{v1:"라운드", op:"in", v2:[2,4,6]}, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"WA-EX-SU-004":{
		name:{ "KOR":"Mount" }, class:"전사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:트라이브"],
		flavorText:{ "KOR":"Pin down your opponent with your body weight and simultaneously take an advantageous position for attack.<br>This technique, which requires a warrior's strength and agility, allows you to neutralize your opponent and turn the battle in your favor." },
		hypnoText:{ "KOR":"A technique to completely dominate your opponent by mounting them and grinding your hips.<br>Your opponent is rendered helpless, forced to surrender their body to your movements and receive intense stimulation." },
		effect:[
			{trigger:"used", cond:true, type:"lust",
			info:{
				value:"M5",
				effect:[
					{trigger:"used", cond:true, notext:true, type:"lewd", repeat:"consumeLust", op:"add", value:1},
					{trigger:"used", cond:true, notext:true, type:"estrus", adverb:"그리고", repeat:"consumeLust", op:"add", value:-1},
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"For each <b>Desire</b> spent, <b>Lewdness +1, Heat -1.</b>" }},
				]
			}},
		]
	},
	"WA-EX-PS-001":{
		name:{ "KOR":"Flow Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, related:["tag:투척"],
		flavorText:{ "KOR":"The Flow Stance originates from martial arts of the East and is characterized by fluidly connecting one posture to the next.<br>This stance allows you to absorb your opponent's strength and react flexibly, thereby controlling the flow of the battle." },
		hypnoText:{ "KOR":"A position where you take an acrobatic pose for some exotic sex.<br>You move your body smoothly, finding the position where the cock hits all the right spots." },
		tags:["덱빌딩", "group:버리기", "race:엘도리아인"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"discardCard", cond:true, type:"get", target:"self", value:"randomCard(tags, 투척)"},
		]
	},
	"WA-EX-PS-002":{
		name:{ "KOR":"Forge Stance" }, class:"전사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		flavorText:{ "KOR":"The Forge Stance is a combat posture used by the inhabitants of the northern mountain regions, characterized by gradually heating the body to overcome the cold and build strength.<br>This technique slowly tempers the body, allowing one to exert combat power even in extreme environments." },
		hypnoText:{ "KOR":"A position where you sit with your legs spread and have sex while hugging.<br>You can share warmth with your partner and make love as you mix your bodies together." },
		tags:["덱빌딩", "group:욕망", "race:엘도리아인"],
		expiration:"always", duration:Infinity, 
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"lust",
			info:{
				value:2,
				effect:[
					{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:1},
				]
			}},
		]
	},

	"WA-UL-AT-001":{
		name:{ "KOR":"Execution" }, class:"전사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:욕망", "race:실바니", "act:삽입"], keywords:["욕망"],
		flavorText:{ "KOR":"The Sylvani mercenary Raha Jin earned the nickname 'Soul Reaper' by dominating the battlefield with her cursed great scythe.<br>Her signature technique, Execution, was to channel all the anger and power of the scythe to behead an enemy in one stroke, striking fear into her foes as she then fed the weapon their blood.<br>Raha's current whereabouts are unknown. Like all users of cursed weapons, her soul was likely consumed by her weapon and annihilated." },
		hypnoText:{ "KOR":"A finishing move where you grip a cock deep inside your pussy and squeeze with all your accumulated desire.<br>You mercilessly rape your opponent, overwhelming them with an unbearable amount of lust." },
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.이벤트.소모욕망", op:">=", v2:5}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"자신.기록.전체.이벤트.소모욕망", op:">=", v2:5}, type:"line", value:"참수"},
			{trigger:"used", cond:true, type:"excite", repeat:"자신.기록.전체.이벤트.소모욕망", target:"op", op:"add", value:1},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.소모욕망"},
		]
	},
	"WA-UL-AT-002":{
		name:{ "KOR":"Force Palm" }, class:"전사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:버리기", "race:엘도리아인", "act:삽입"], keywords:["생성됨"],
		flavorText:{ "KOR":"The clans of Lightweaver Isle in the East have developed a unique martial art that utilizes their inner ki in both combat and daily life.<br>One of their techniques, Force Palm, gathers inner ki into a single point and releases it to subdue the enemy.<br>This mysterious technique instantly closes the distance with the enemy, changes the flow of battle, and overwhelms them by delivering a powerful internal shock through the flow of ki." },
		hypnoText:{ "KOR":"A technique to instantly explode with pleasure using your trained lower body muscles.<br>You focus your power in your lower abdomen, forcing your opponent to release all their essence as if wringing them out." },
		effect:[
			{trigger:"choice", cond:true, type:"discard", target:"self", range:{category:"tags", value:"생성됨", count:"all"}},
			{trigger:"used", cond:{v1:"specialV07", op:">", v2:0}, type:"line", value:"발경"},
			{trigger:"used", cond:true, type:"orgasm", target:"op", repeat:"specialV07"},
		]
	},
	"WA-UL-SU-001":{
		name:{ "KOR":"Battle Cry" }, class:"전사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:발정 감소", "group:욕망", "race:트라이브"], keywords:["욕망"],
		flavorText:{ "KOR":"A battle cry is the ultimate shout of a warrior, drawing out their inner energy to its maximum.<br>Through deep breathing, they gather all their anger and resolve into one, then release it as a massive roar that echoes across the battlefield.<br>This roar instills powerful courage and fighting spirit in allies, as if the warrior's will is directly transmitted to them, while sowing fear and confusion among enemies, slowing their movements." },
		hypnoText:{ "KOR":"A technique to build up desire by letting out pathetic moans.<br>You shamelessly and vulgarly display your lust, regardless of who is watching. The more pathetic you are, the more effective this technique becomes." },
		effect:[
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"changeFace", target:"self", value:"ecstasy2"},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"line", value:"전투포효"},
			{trigger:"used", cond:true, notext:true, type:"specialA01"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Reduce <b>Heat</b> to its minimum value and gain <b>Desire +2</b> for each point reduced." }},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:4}, type:"changeCond", target:"self", value:"corrupted"},
		]
	},
	"WA-UL-SU-002":{
		name:{ "KOR":"Berserker's Soul" }, class:"전사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "버리기불가", "반복불가", "피니셔", "group:버리기", "race:트라이브"], related:["ref:버림"],
		flavorText:{ "KOR":"When a battle reaches its peak, Tribe warriors awaken to a state where they forget fear and surrender themselves to anger and madness.<br>Their instincts take over their reason, as they charge headfirst into attacks and instantly tear out their enemy's throat, resembling a wild beast.<br>This free and savage nature is why they are called berserkers." },
		hypnoText:{ "KOR":"A technique where you go mad with lust, lose your reason, and surrender to your instincts.<br>You demand cock like a savage beast, unable to stop yourself as you fall into an uncontrollable frenzy." },
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:2}, type:"line", value:"광전사혼"},
			{trigger:"used", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:2}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"자신.기록.전체.버림.length", op:">=", v2:2}, type:"changeCond", target:"self", value:"berserk", special:true},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"This card cannot be discarded." }},
			{trigger:"used", cond:true, type:"use", value:"자신.기록.전체.버림.selectCards(all, null, all)"},
		]
	},
	"WA-UL-PS-001":{
		name:{ "KOR":"Flashy Sword Dance" }, class:"전사", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:패널티", "race:엘도리아인", "act:삽입"],
		flavorText:{ "KOR":"The dances of the nomadic performers in the southern wastelands are both flamboyant and beautiful, leaving a strong impression.<br>A swordsman, captivated by these dances, incorporated the graceful and fluid movements of the performers into his swordsmanship, creating a new combat technique.<br>The Flashy Sword Dance is a technique as smooth as a dance, yet deadly. If you are mesmerized by its beautiful movements, you will find a blade at your throat before you know it." },
		hypnoText:{ "KOR":"A position where you slowly rotate your hips, winding a cock deep inside you.<br>With fluid movements, you ride up and down your opponent's cock, stimulating them while pressing your body close to gradually apply pressure." },
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"화려한검무-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"getPenalty", cond:true, type:"line", value:"화려한검무-2"},
			{trigger:"getPenalty", cond:true, type:"stack", info:{target:"selfCard"}, op:"add", value:1},
			{trigger:"usePenalty", cond:true, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"usePenalty", cond:true, type:"line", value:"화려한검무-3"},
			{trigger:"usePenalty", cond:true, type:"attack", target:"op", repeat:"stack", keepLine:true},
		]
	},


	/*"WA-UL-SU-001":{
		name:{ "KOR":"Unyielding Spirit" }, class:"전사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:{v1:"라운드", op:">=", v2:6},
		flavorText:{ "KOR":"The noble spirit of a warrior who does not yield even in the face of difficulties and trials." },
		hypnoText:{ "KOR":"A technique to suppress yourself with numerous penalties, then release them to seize victory with god-like skill." },
		tags:["덱빌딩", "버리기불가"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"This card cannot be discarded and can only be used from round 6 onwards." }},
			{trigger:"used", cond:{v1:"자기덱.count(type, 패널티)", op:">=", v2:8}, type:"victory", target:"self"},
		]
	},*/

//#######################################################################################################################################################################################

	"AS-PO-001":{
		name:{ "KOR":"Craft: Paralytic Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-001-1"], related:["AS-PO-001-1"],
		flavorText:{ "KOR":"Ingredients: Woolly Spider extract, Yellow Slime mucus, etc.<br>Form: Sticky yellow liquid.<br>Effect: When it touches the skin, it is quickly absorbed, causing limbs to tingle and movements to become sluggish." },
		hypnoText:{ "KOR":"Ingredients: An aroused woman's urine...?<br>Method: Squat, spread your legs, and wait.<br>When you feel arousal and the urge to pee, release it." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-001-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-001-1":{
		parents:"AS-PO-001",
		name:{ "KOR":"Paralytic Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:"stack", division:2},
		]
	},
	"AS-PO-002":{
		name:{ "KOR":"Craft: Neurotoxin" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-002-1"], related:["AS-PO-002-1"],
		flavorText:{ "KOR":"Ingredients: Shade Viper's fang, Sun Leaf, etc.<br>Form: Smooth green liquid.<br>Effect: When injected into the body, it stimulates the nervous system, causing excruciating pain." },
		hypnoText:{ "KOR":"Ingredients: Freshly squeezed breast milk...?<br>Method: Squeeze your breasts, stroking downwards to press it out.<br>Pregnancy experience is required for production, but it can be induced without pregnancy by administering drugs." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-002-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-002-1":{
		parents:"AS-PO-002",
		name:{ "KOR":"Neurotoxin" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"attack", target:"self", repeat:"stack"},
		]
	},
	"AS-PO-003":{
		name:{ "KOR":"Craft: Blinding Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-003-1"], related:["AS-PO-003-1", "AS-NM-AT-000"],
		flavorText:{ "KOR":"Ingredients: Mirror Butterfly scales, Shadow Root, etc.<br>Form: Sparkling white powder.<br>Effect: When sprinkled in the eyes, it paralyzes the optic nerve, causing temporary blindness." },
		hypnoText:{ "KOR":"Ingredients: A woman's saliva...?<br>Method: Open your mouth, stick out your tongue, and let the saliva collect and drip.<br>With sufficient training, you can increase the amount secreted by recalling the taste of a cock before oral sex." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-003-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-003-1":{
		parents:"AS-PO-003",
		name:{ "KOR":"Blinding Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"op", value:"AS-NM-AT-000", repeat:"stack"},
		]
	},
	"AS-PO-004":{
		name:{ "KOR":"Craft: Sleeping Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:true,
		tags:["제조", "기본제조", "po:AS-PO-004-1"], related:["AS-PO-004-1"],
		flavorText:{ "KOR":"Ingredients: Dream Mushroom spores, Stardust Crystal, etc.<br>Form: Opaque gas.<br>Effect: A powerful sleeping agent that takes effect immediately upon inhalation." },
		hypnoText:{ "KOR":"Ingredients: A woman's pussy juice...?<br>Method: Stimulate the genitals with your fingers to secrete it.<br>With a man's help, you can produce a larger quantity more quickly." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-004-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-004-1":{
		parents:"AS-PO-004",
		name:{ "KOR":"Sleeping Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독", "기본독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"subtract", value:"stack"},
			/*{trigger:"turnEnd", cond:{v1:"stack", op:">=", v2:4}, type:"transform", target:"self",
			info:{
				target:"self",
				value:"AS-PO-004-2",
			}},*/
		]
	},
	"AS-PO-004-2":{
		name:{ "KOR":"Unconscious" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"self", value:"AS-PO-004-3"},
		]
	},
	"AS-PO-004-3":{
		parents:"AS-PO-004-2",
		name:{ "KOR":"Unconscious" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"actBan", target:"self"},
		]
	},
	/*"AS-PO-005":{
		name:{ "KOR":"Craft: Silencing Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["제조", "기본제조"], related:["AS-PO-005-1"], keywords:["id:AS-PO-005-1"],
		flavorText:{ "KOR":"Ingredients: Dream Mushroom spores, Stardust Crystal, etc.<br>Form: Opaque gas.<br>Effect: A powerful sleeping agent that takes effect immediately upon inhalation." },
		hypnoText:{ "KOR":"Ingredients: A woman's saliva and a man's cum...?<br>Method: Lick or suck a man's cock until he cums in your mouth.<br>Using your tongue is key, and be careful not to swallow it by mistake." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"제조"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-PO-005-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-PO-005-1":{
		parents:"AS-PO-005",
		name:{ "KOR":"Silencing Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-1},
		]
	},*/

	"AS-NM-AT-000":{
		name:{ "KOR":"Strangle" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["act:삽입"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"AS-NM-AT-001":{
		name:{ "KOR":"Left-Handed Slash" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:생성됨", "race:트라이브", "act:애무"], related:["AS-NM-AT-001-1", "AS-NM-AT-001-2"],
		flavorText:{ "KOR":"The first strike is a setup for the following series of attacks.<br>The opponent won't be able to keep up with the rapid flurry of slashes." },
		hypnoText:{ "KOR":"A technique to quickly rub a cock, gently stimulating it from the head.<br>You find your opponent's weak spots with your fingers and deliver intense pleasure in multiple waves." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-001-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"AS-NM-AT-001-1":{
		name:{ "KOR":"Right-Handed Slash" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["act:애무"], related:["AS-NM-AT-001-2"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-001-2"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-AT-001-2":{
		name:{ "KOR":"Two-Handed Slash" }, class:"암살자", type:"공격", isDeck:true, rarity:"없음", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["act:펠라치오"],
		effect:[
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-AT-002":{
		name:{ "KOR":"Suffocate" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:생성됨", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"Suffocation is a signature assassin's technique that neutralizes an enemy by choking them without giving them a chance to resist.<br>The advantage of this method of killing is that the target cannot make a sound." },
		hypnoText:{ "KOR":"A technique to choke your opponent with your legs, forcing them to lick your pussy.<br>You don't let go until you are satisfied, making them serve you and feel a sense of submission." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"커닐링구스"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000", repeat:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"AS-NM-AT-003":{
		name:{ "KOR":"Rapid Stabbing" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:하프만", "act:삽입"],
		flavorText:{ "KOR":"Bleeding is most severe the moment a weapon is pulled out.<br>The more you stab, the lower the chance of the opponent's recovery." },
		hypnoText:{ "KOR":"A technique to deliver deep stimulation by being repeatedly pounded.<br>Your body responds to the rough force, and you are overcome by increasingly intense pleasure each time your womb is struck." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:1,
				effect:[
					{trigger:"used", cond:true, type:"attack", adverb:"추가로", target:"op"},
				]
			}},
		]
	},
	"AS-NM-AT-004":{
		name:{ "KOR":"Poison Needle" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "독주머니", "group:독", "race:하프만", "act:펠라치오"], related:["tag:기본제조"],
		flavorText:{ "KOR":"A fine needle is an essential tool for a Halfman locksmith.<br>It can be used to disarm locks and traps, and it is also useful for assassination by coating it with poison and striking an enemy's weak point." },
		hypnoText:{ "KOR":"A technique to meticulously suck a cock clean of all traces of sexual activity.<br>You wrap your tongue around it, licking it thoroughly to give your opponent satisfaction." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"use", value:"독주머니.selectCards(tags, 제조, 1)"},
		]
	},
	"AS-NM-AT-005":{
		name:{ "KOR":"Setting Trap" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"The elite hunters of the Thunderfang Tribe are masters of setting traps to catch their prey.<br>If you think only beasts fall into traps, your ankle will be gone in an instant." },
		hypnoText:{ "KOR":"A technique to seduce by rubbing your ass against a cock.<br>You continue to shake your ass until your opponent responds, luring them in." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"selected", cond:"체위", type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-AT-006":{
		name:{ "KOR":"Abduction" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"Sometimes the goal is not to eliminate the target, but to secure them.<br>Prepare sleeping potions, ropes, and a transport route." },
		hypnoText:{ "KOR":"A technique to arouse by climbing onto their face and grinding your pussy against it.<br>You inflict humiliation while teaching them the pleasure of being dominated, implanting a fetish." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"커닐링구스"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2, repeat:"자신.행동.count(all, null)"},
			//{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000", repeat:"상대.기록.이번.이벤트.흥분.증가", maxValue:5},
		]
	},
	"AS-NM-AT-007":{
		name:{ "KOR":"Precision Shot" }, class:"암살자", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "사격", "group:젖음", "group:생성됨", "race:실바니", "act:방뇨"],
		flavorText:{ "KOR":"The foundation of shooting begins with a proper stance.<br>Lie prone, align the scope with your eye, and wait for the moment to pull the trigger while holding your breath.<br>It is essential to balance your entire body and not allow even the slightest tremor." },
		hypnoText:{ "KOR":"A technique to squat, spread your legs, and pee.<br>You put on a show for your opponent, arousing them with the sight of a stream of piss shooting out of your pussy." },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"정조준사격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:1,
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"self"},
				]
			}},
		]
	},
	"AS-NM-SU-001":{
		name:{ "KOR":"Vial of Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:독", "group:생성됨", "독주머니", "race:엘도리아인"], related:["tag:기본제조"],
		flavorText:{ "KOR":"An assassin always has poison hidden on their person.<br>To kill a target without anyone noticing, to eliminate those who stand in their way, and to commit suicide." },
		hypnoText:{ "KOR":"A technique to kiss your opponent with a mouthful of brewed poison, sharing it as your tongues meet.<br>The mixture of bodily fluids is swallowed in a deep kiss." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"키스"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:2,
				effect:[
					{trigger:"used", cond:true, type:"use", value:"derived"},
				]
			}},
		]
	},
	"AS-NM-SU-002":{
		name:{ "KOR":"Decoy" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:추가 카드", "race:엘도리아인"],
		flavorText:{ "KOR":"When being chased, throw a decoy stone for misdirection!<br>Customizing it to resemble your own appearance makes it even more effective.<br>- Nekue's Thief Collection Workshop" },
		hypnoText:{ "KOR":"A technique to be fucked with your face covered.<br>It reduces your shame and, by blocking your sight, heightens your senses, making your pussy wet." },
		effect:[
			{trigger:"used", cond:true, type:"changeWetness", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-SU-003":{
		name:{ "KOR":"Tail" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:생성됨", "race:실바니"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"Hide in the shadows and follow the target without being noticed.<br>Too close, and you risk being discovered; too far, and you risk losing the target." },
		hypnoText:{ "KOR":"A technique to get aroused by exhibitionism, showing off your naked body.<br>You can enjoy the thrill and pleasure felt from the stares." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000", repeat:"상대.기록.이번.이벤트.흥분.증가", maxRepeat:5},
		]
	},
	"AS-NM-SU-004":{
		name:{ "KOR":"On-the-Spot Mixing" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "group:생성됨", "독주머니", "race:하프만"], related:["tag:기본제조"],
		flavorText:{ "KOR":"A secret art passed down among assassins. A recipe to combine seemingly harmless ingredients into a deadly poison.<br>It plays an important role in smuggling poison past inspections without being caught." },
		hypnoText:{ "KOR":"A technique to brew a drug using your own body.<br>You spill it on your chest and ask your opponent to lick it off, naturally inducing consumption." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"독주머니.selectCards(tags, 제조, 2)"},
		]
	},
	"AS-NM-SU-005":{
		name:{ "KOR":"Bind" }, class:"암살자", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:독", "group:생성됨", "group:추가 카드", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"Instantly tie up the target with a sturdy rope.<br>With swift and precise handiwork, you neutralize the opponent, allowing no resistance." },
		hypnoText:{ "KOR":"A technique to bind yourself in a tortoiseshell tie.<br>You capture your opponent's attention with a lewd bondage that emphasizes the curves of your body." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-NM-AT-000"},
			{trigger:"selected", cond:{v1:"상대.상태.count(tags, 독)", op:">", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-UC-001":{
		name:{ "KOR":"Shadow Step" }, class:"암살자", type:"탈의", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:트라이브"],
		flavorText:{ "KOR":"The Bloodmist Tribe is a special tribe of those with white fur and red eyes who were abandoned as cursed children due to the lack of knowledge about albinism.<br>In their struggle for survival, they learned to hide in the shadows and erase their presence, eventually becoming professional assassins in the underworld." },
		hypnoText:{ "KOR":"A technique to quickly strip off your clothes.<br>An opponent's attempt to strip you is rendered useless if you strip yourself first." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"그림자이동"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"AS-NM-UC-001-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-NM-UC-001-1":{
		parents:"AS-NM-UC-001",
		name:{ "KOR":"Afterimage" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"unclothDisable"},
		]
	},
	"AS-NM-PS-001":{
		name:{ "KOR":"Net Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "group:생성됨", "race:엘도리아인"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"When activated, a net springs out and restrains the target. Use when capture is necessary.<br>- Nekue's Thief Collection Workshop" },
		hypnoText:{ "KOR":"A position where you entangle your opponent like a net, holding them down and fucking them so they cannot escape.<br>You grip the cock deep inside your cunt tightly, controlling your opponent's every reaction and ensuring they don't get away." },
		expiration:"always", duration:Infinity, duration:2, defaultDuration:2,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"enemyAttacked", cond:true, type:"count", trap:"self", value:1},
			{trigger:"count", cond:true, type:"get", target:"self", value:"AS-NM-AT-000"},
		]
	},
	"AS-NM-PS-002":{
		name:{ "KOR":"Honey Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:생성됨", "race:엘도리아인"],
		flavorText:{ "KOR":"Though known as a romance guide, Lady Dallean Rosethorn's 'How to Seduce Men' is actually a honey trap manual for female assassins written in code." },
		hypnoText:{ "KOR":"A position where you expose your empty hole, inviting your opponent to pound their cock into you.<br>With a sweet temptation, you mesmerize your opponent, drawing them in to deliver deep and intense stimulation." },
		expiration:"always", duration:3, defaultDuration:3,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"유혹"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"useCreatedCard", cond:true, type:"count", trap:"self", value:1},
			{trigger:"count", cond:true, type:"changeWetness", op:"add", value:1},
		]
	},

	"AS-EX-AT-001":{
		name:{ "KOR":"Point-Blank Shot" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "사격", "group:추가 카드", "group:젖음", "group:생성됨", "race:실바니", "act:애무"],
		flavorText:{ "KOR":"Point-blank shot is a technique used when the distance to the target is extremely short, where a swift aiming posture is more important than accuracy.<br>The key is to aim for a vital part of the target and inflict definite damage with a single shot.<br>The priority is to quickly reset your firing stance after shooting." },
		hypnoText:{ "KOR":"A technique to embrace your opponent, letting them suckle your breasts while giving them a handjob.<br>With a gentle, caring touch and the soft feel of your breasts, you make your opponent pour out their cum until they are satisfied." },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"영거리사격"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:3,
				effect:[
					{trigger:"used", cond:true, type:"get", target:"self", value:"AS-EX-AT-001", repeat:2},
				]
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-EX-AT-002":{
		name:{ "KOR":"Sabotage" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:엘도리아인", "act:펠라치오"],
		flavorText:{ "KOR":"Scratching the axle, swapping out equipment, removing a single screw from a support.<br>Inducing an accidental death through secret sabotage is a very classic strategy, but it is a tricky technique that requires environmental assessment, path prediction, and creativity." },
		hypnoText:{ "KOR":"A technique to lick an opponent's cock from the tip, kissing it.<br>The goal is to persistently lick the sensitive areas, making them cum like a broken faucet." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:4,
				effect:[
					{trigger:"used", cond:true, type:"specialA06"},
				]
			}},
		]
	},
	"AS-EX-AT-003":{
		name:{ "KOR":"Pressure Point Strike" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "race:하프만", "act:펠라치오"],
		flavorText:{ "KOR":"The concept of pressure points is treated as an unproven pseudoscience and is not recognized by the Albion Medical Association.<br>However, among Halfman locksmiths, it is already considered a systematic technique and is used effectively for both healing and assassination." },
		hypnoText:{ "KOR":"A technique to stimulate the sensitive areas of an opponent's cock by striking them.<br>You strike the blood vessels to enhance the erection's hardness, increase sensitivity, and then deliver an orgasm to make them cum." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", adverb:"추가로", repeat:"상대.상태.countType(tags, 독)", target:"op"},
			{trigger:"none", cond:true, type:"showValue", value:"상대.상태.countType(tags, 독)"}
		]
	},
	"AS-EX-AT-004":{
		name:{ "KOR":"Blade Storm" }, class:"암살자", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:트라이브", "act:난교"],
		flavorText:{ "KOR":"A throwing technique where you scatter all your hidden weapons, firing an indiscriminate barrage at multiple targets.<br>Watching the storm of daggers, you'll feel that 'storm' is more than just a metaphor." },
		hypnoText:{ "KOR":"A technique to satisfy all the cocks surrounding you.<br>You move your mouth and hands busily, making multiple cocks cum at the same time." },
		effect:[
			{trigger:"used", cond:true, type:"attack", repeat:"자신.기록.이전.사용.length", target:"op"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.이전.사용.length"},
		]
	},
	"AS-EX-SU-001":{
		name:{ "KOR":"Flexibility" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "race:트라이브"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"There are assassins who specialize in infiltrating through narrow gaps that seem impossible for a person to pass through.<br>In particular, Feline Tribe assassins show the incredible feat of being able to pass through any hole as long as their head can fit." },
		hypnoText:{ "KOR":"A technique to wait to be fucked by lifting your ass in a flexible pose.<br>You are ready to accommodate any position your opponent desires, and your posture reveals your desire to be used in such a way." },
		effect:[
			{trigger:"used", cond:true, type:"effect", op:"add",
			info:{
				target:"id:AS-NM-AT-000",
				effect:[
					{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
				]
			}},
		]
	},
	"AS-EX-SU-002":{
		name:{ "KOR":"Smoke Bomb" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:하프만"],
		flavorText:{ "KOR":"When thrown on the ground, it explodes, releasing thick gray smoke.<br>It is especially effective in small, poorly ventilated spaces.<br>- Nekue's Thief Collection Workshop" },
		hypnoText:{ "KOR":"A technique to expose your naked body in the thick fog.<br>You get soaked with arousal from the thrill of entrusting your private parts to smoke that will soon dissipate." },
		effect:[
			{trigger:"used", cond:true, type:"changeWetness", op:"add", value:3},
			{trigger:"used", cond:true, type:"state", target:"self", value:"AS-EX-SU-002-1"},
		]
	},
	"AS-EX-SU-002-1":{
		parents:"AS-EX-SU-002",
		name:{ "KOR":"Smoke" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"changeWetness", op:"add", value:2},
		]
	},
	"AS-EX-SU-003":{
		name:{ "KOR":"Leap" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "race:엘도리아인"],
		flavorText:{ "KOR":"With an instantaneous leap, you evade the enemy's eyes and quickly move to a position suitable for assassination.<br>Running across rooftops, any place can become a path." },
		hypnoText:{ "KOR":"A technique to show off your bouncing breasts by jumping in place.<br>With each jump, your breasts jiggle, capturing the eyes of men." },
		effect:[
			{trigger:"choice", cond:true, type:"effect", op:"add", range:{category:"all", count:2},
			info:{
				effect:[{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},],
			}},
		]
	},
	"AS-EX-SU-004":{
		name:{ "KOR":"Poison Gas Spray" }, class:"암살자", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "group:젖음", "group:생성됨", "독주머니", "race:엘도리아인"], related:["tag:기본제조"],
		flavorText:{ "KOR":"Spraying gaseous poison in an enclosed space is a very effective means of assassination.<br>The moment the target inhales the odorless gas without noticing, it's all over." },
		hypnoText:{ "KOR":"A technique to smoke an addictive drug brewed on the spot.<br>You feel intense pleasure and euphoria, and the secretion of various bodily fluids increases, aiding in future brewing." },
		effect:[
			{trigger:"used", cond:{v1:"젖음", op:"<", v2:4}, condOmit:true, type:"use", value:"독주머니.selectCards(tags, 제조, 1)"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:4,
				effect:[
					{trigger:"used", cond:true, adverb:"대신", type:"use", value:"독주머니.selectCards(tags, 제조, 3)"},
				]
			}},
		]
	},
	"AS-EX-PS-001":{
		name:{ "KOR":"Deadly Poison Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:독", "group:젖음", "독주머니", "race:엘도리아인"], related:["tag:기본제조"],
		flavorText:{ "KOR":"Poison hidden out of sight is the most lethal.<br>The moment the device is triggered, a glass vial of deadly poison shatters, and the instantly spreading poison paralyzes the target's organs." },
		hypnoText:{ "KOR":"A position where you cover your bodies with bodily fluids and cum, then mix them together.<br>You can naturally poison your opponent by licking and sucking." },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:{v1:"젖음", op:">=", v2:3}, condOmit:true, type:"wetness",
			info:{
				value:3,
				effect:[
					{trigger:"used", cond:true, type:"use", target:"self", value:"독주머니.selectCards(tags, 제조, 1)"},
				]
			}},
		]
	},
	"AS-EX-PS-002":{
		name:{ "KOR":"Booby Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "race:엘도리아인", "act:애무"],
		flavorText:{ "KOR":"When the wire is touched, the internal latch is released, triggering a chain reaction.<br>It can be freely customized with explosions or blades, and the complexity of the activation process showcases the designer's aesthetic.<br>- Nekue's Thief Collection Workshop" },
		hypnoText:{ "KOR":"A position where you gently wrap and press your opponent's cock with your 'boobies'.<br>Your opponent is swallowed in the soft pressure and feels intense pleasure." },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"체위변경"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:{v1:"자신.기록.이전.이벤트.회피", op:">", v2:0}, type:"maxUse", target:"self", value:1},
		]
	},

	"AS-UL-AT-001":{
		name:{ "KOR":"Planned Murder" }, class:"암살자", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:조르기", "race:엘도리아인", "act:삽입"], related:["AS-NM-AT-000"],
		flavorText:{ "KOR":"The conflict between the Eldorian Kingdom and the Sylvanian Federation had been ongoing for a long time, and the decisive event that triggered the Great War was the assassination of a diplomat sent by Sylvania.<br>This shocking incident, which occurred at a meeting intended for peace, was a political assassination planned over two years.<br>The intentionally provoked war was driven by factions seeking profit and the elimination of their political rivals." },
		hypnoText:{ "KOR":"A finishing move where you obsessively attack and dominate your opponent.<br>You mount the restrained opponent, grind against them to force an erection, and then swallow them whole and rape them." },
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(id, AS-NM-AT-000)", op:">=", v2:5}, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:{v1:"자신.기록.전체.사용.count(id, AS-NM-AT-000)", op:">=", v2:5}, type:"line", value:"계획살인"},
			{trigger:"used", cond:true, type:"attack", repeat:"자신.기록.전체.사용.count(id, AS-NM-AT-000)", target:"op"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.count(id, AS-NM-AT-000)"},
		]
	},
	"AS-UL-AT-002":{
		name:{ "KOR":"Longest-Range Snipe" }, class:"암살자", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "사격", "group:젖음", "group:생성됨", "race:실바니"], related:["AS-UL-AT-002-1"],
		flavorText:{ "KOR":"It is said that there was a legendary sniper in Sylvania's Twilight Brigade.<br>Her sniping, which accurately killed targets from an unseen distance with a single shot, was like a disaster to the Eldorians.<br>Because the Sylvanian side accidentally stated during an official announcement that 'she does not exist; she is a figment of the Eldorians' imagination,' it is only known for certain that she is female." },
		hypnoText:{ "KOR":"A finishing move where you lie down, spread your legs, and flex to show the cum shooting out of your womb.<br>Unaware of the contemptuous stares at your vulgar party trick that strips you of all dignity, you are proud of your success." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최장거리저격-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"wetness",
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"state", target:"self", value:"AS-UL-AT-002-2"},
				]
			}},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-UL-AT-002-1"},
		]
	},
	"AS-UL-AT-002-1":{
		name:{ "KOR":"Reload" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최장거리저격-2"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-UL-AT-002"},
			//{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-UL-AT-002-2":{
		parents:"AS-UL-AT-002",
		name:{ "KOR":"Headshot" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"enemyAttackDisable"},
		]
	},
	/*"AS-UL-SU-001":{
		name:{ "KOR":"Master of Disguise" }, class:"암살자", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩"],
		flavorText:{ "KOR":"It was a shock to many when it was revealed that the legendary Tribe assassin Dodorishi was actually the Halfman locksmith Dorashi in disguise." },
		hypnoText:{ "KOR":"A technique to reveal your hidden perverted side to enhance the effects of other techniques." },
		effect:[
			{trigger:"used", cond:true, type:"useTimes", target:"self", value:1},
			{trigger:"used", cond:true, type:"state", notext:true, target:"self", value:"AS-UL-SU-001-1"},
			//{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-UL-SU-001-1":{
		parents:"AS-UL-SU-001",
		name:{ "KOR":"Disguise" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"useCard", cond:true, type:"nothing"},
		]
	},*/
	"AS-UL-SU-001":{
		name:{ "KOR":"Shadow Rose Dance" }, class:"암살자", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:추가 카드", "무조건소모", "race:엘도리아인"],
		flavorText:{ "KOR":"The Rosethorn family is a house of artistic masters who have greatly influenced various cultures, including art, fashion, music, and dance.<br>However, the fact that they are actually a family of assassins who train spies for the Eldorian Kingdom is known to only a few.<br>They handle poison production through art and gardening, information gathering and assassination through dance and socializing, and disguise and concealment through fashion and beauty... all their activities were merely a deception." },
		hypnoText:{ "KOR":"A dance to seduce your opponent by gently shaking your ass and breasts with elegant, flowing movements.<br>You lift your leg to show your pussy, boldly revealing everything about your body." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"그림자장미춤"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:2},
		]
	},
	"AS-UL-SU-002":{
		name:{ "KOR":"Poison of Death" }, class:"암살자", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음", "group:독", "독추가", "race:엘도리아인"], related:["AS-UL-SU-002-1", "AS-UL-SU-002-2"],
		flavorText:{ "KOR":"Occasionally, a beautiful purple flower blooms on the desolate land at the edge of a high cliff.<br>This flower, which kills all the grass around it and blooms alone in its glory, is called the Deathbloom.<br>A single drop of its extract contains a lethal dose capable of wiping out an entire village." },
		hypnoText:{ "KOR":"Ingredients: A mixture of pussy juice and cum.<br>Method: Brewed with a man's cock inserted into a woman's pussy.<br>You must rub and squeeze repeatedly so that the two ingredients are secreted and mixed." },
		effect:[
			//{trigger:"used", cond:true, type:"line", value:"절명독-1"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"AS-UL-SU-002-1"},
			{trigger:"gameStart", inDeck:true, cond:true, type:"poisonAdd", value:"AS-UL-SU-002-1"},
			//{trigger:"used", cond:true, type:"poisonAdd", value:"AS-UL-SU-002-1"},
		]
	},
	"AS-UL-SU-002-1":{
		name:{ "KOR":"Craft: Lethal Poison" }, class:"암살자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["제조", "po:AS-UL-SU-002-2"], related:["AS-UL-SU-002-2"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"절명독-2"},
			{trigger:"used", cond:true, type:"poison", target:"op", value:"AS-UL-SU-002-2"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"AS-UL-SU-002-2":{
		parents:"AS-UL-SU-002-1",
		name:{ "KOR":"Lethal Poison" }, class:"암살자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["독"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", repeat:"stack", value:"specialV09", keepLine:true},
			{trigger:"none", cond:true, type:"showValue", value:"specialV09"},
			//{trigger:"turnEnd", cond:true, type:"excite", repeat:"자신.상태.countType(tags, 독)", target:"self", op:"add", value:2},
		]
	},
	"AS-UL-PS-001":{
		name:{ "KOR":"Time Bomb Trap" }, class:"암살자", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "group:젖음"],
		flavorText:{ "KOR":"Any assassin active in the kingdom would have heard the name Nekue.<br>A skilled artisan and Halfman locksmith, she developed various hidden weapons and traps through her unique dexterity, creativity, and assassination experience honed as a locksmith.<br>In particular, the time bomb she first developed brought innovation to the world of assassination with its ability to inflict unblockable damage at a precise time and location while also destroying evidence with the explosion." },
		hypnoText:{ "KOR":"A position where you use a vibrating dildo or onahole depending on your opponent's gender.<br>You restrain your opponent, attach the tool to their genitals, and activate it." },
		expiration:"count",
		effect:[
			{trigger:"used", cond:true, type:"line", value:"시한폭탄트랩-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"avoidBan", target:"self"},
			{trigger:"turnEnd", cond:true, type:"wetness",
			info:{
				value:8,
				effect:[
					{trigger:"used", cond:true, type:"line", value:"시한폭탄트랩-3", notwait:true,},
					{trigger:"used", cond:true, type:"orgasm", target:"op"},
				]
			}},
		]
	},


	"MA-MC-001":{
		name:{ "KOR":"Crimson Magic Circle" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "진홍색", "변형목적"],
		effect:[
			//{trigger:"transformed", cond:true, type:"state", target:"self", value:"MA-ST-001"},
		]
	},
	"MA-MC-002":{
		name:{ "KOR":"Azure Magic Circle" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "담청색", "변형목적"],
		effect:[
			//{trigger:"transformed", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
		]
	},
	"MA-MC-003":{
		name:{ "KOR":"Golden Magic Circle" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "황금색", "변형목적"],
		effect:[
			//{trigger:"transformed", cond:true, type:"changeSBlock", op:"add", value:2},
		]
	},
	"MA-MC-004":{
		name:{ "KOR":"Pristine White Magic Circle" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["마도진", "기본마도진", "진홍색", "담청색", "황금색", "변형목적"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This magic circle can be treated as a magic circle of any color." }},
		]
	},

	"MA-MG-000":{
		name:{ "KOR":"Magic Failure" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:1,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Failed to cast because the slot was empty." }},
		]
	},

	"MA-MG-NT-001":{
		name:{ "KOR":"Instant Magic: Mana Bolt" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "마력탄", "act:애무"], cast:1, keywords:["강화"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"specialV04"},
		]
	},
	"MA-MG-NT-001+":{
		parents:"MA-MG-NT-001",
		name:{ "KOR":"Chant Magic: Mana Bolt" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "마력탄", "act:애무"], cast:1, keywords:["강화"],
		effect:[
			{trigger:"get", cond:true, type:"line", value:"마력탄-영창"},
			{trigger:"used", cond:true, type:"specialA09"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"specialV04"},
		]
	},
	"MA-MG-NT-001++":{
		parents:"MA-MG-NT-001",
		name:{ "KOR":"Focus Magic: Mana Bolt" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "마력탄", "act:애무"], cast:1, keywords:["강화"],
		effect:[
			{trigger:"get", cond:true, type:"line", value:"마력탄-집중"},
			{trigger:"used", cond:true, type:"specialA09", repeat:2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"specialV04"},
		]
	},
	"MA-MG-NT-001-def":{
		parents:"MA-MG-NT-001",
		name:{ "KOR":"Mana Bolt" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-NT-001", "MA-MG-NT-001+", "MA-MG-NT-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-FI-001":{
		name:{ "KOR":"Instant Magic: Fireball" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-001+":{
		parents:"MA-MG-FI-001",
		name:{ "KOR":"Chant Magic: Fireball" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"화염구-영창"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"MA-ST-001"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-001++":{
		parents:"MA-MG-FI-001",
		name:{ "KOR":"Focus Magic: Fireball" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"화염구-집중"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"MA-ST-001"},
			{trigger:"used", cond:true, type:"attack", repeat:2, target:"op"},
		]
	},
	"MA-MG-FI-001-def":{
		parents:"MA-MG-FI-001",
		name:{ "KOR":"Fireball" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-FI-001", "MA-MG-FI-001+", "MA-MG-FI-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-IC-001":{
		name:{ "KOR":"Instant Magic: Frost Arrow" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},
	"MA-MG-IC-001+":{
		parents:"MA-MG-IC-001",
		name:{ "KOR":"Chant Magic: Frost Arrow" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"냉기화살-영창"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},
	"MA-MG-IC-001++":{
		parents:"MA-MG-IC-001",
		name:{ "KOR":"Focus Magic: Frost Arrow" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"냉기화살-집중"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2, repeat:"상대.상태.count(id, MA-ST-002)"},
		]
	},
	"MA-MG-IC-001-def":{
		parents:"MA-MG-IC-001",
		name:{ "KOR":"Frost Arrow" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-IC-001", "MA-MG-IC-001+", "MA-MG-IC-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-EA-001":{
		name:{ "KOR":"Instant Magic: Rock Bullet" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"MA-MG-EA-001+":{
		parents:"MA-MG-EA-001",
		name:{ "KOR":"Chant Magic: Rock Bullet" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "대지 마술", "act:삽입"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"암석탄-영창"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"MA-MG-EA-001++":{
		parents:"MA-MG-EA-001",
		name:{ "KOR":"Focus Magic: Rock Bullet" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "집중 마술", "대지 마술", "act:삽입"], cast:Infinity,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"암석탄-집중"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
		]
	},
	"MA-MG-EA-001-def":{
		parents:"MA-MG-EA-001",
		name:{ "KOR":"Rock Bullet" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-EA-001", "MA-MG-EA-001+", "MA-MG-EA-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-SP-001":{
		name:{ "KOR":"Instant Magic: Lava Burst" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "화염 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"MA-MG-SP-001+":{
		parents:"MA-MG-SP-001",
		name:{ "KOR":"Chant Magic: Lava Burst" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "화염 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"용암분사-영창"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:"음란"}
		]
	},
	"MA-MG-SP-001++":{
		parents:"MA-MG-SP-001",
		name:{ "KOR":"Focus Magic: Lava Burst" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "화염 마술", "대지 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"용암분사-집중"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", repeat:"음란", value:2}
		]
	},
	"MA-MG-SP-001-def":{
		parents:"MA-MG-SP-001",
		name:{ "KOR":"Lava Burst" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-SP-001", "MA-MG-SP-001+", "MA-MG-SP-001++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-NT-002":{
		name:{ "KOR":"Instant Magic: Force Field" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"MA-MG-NT-002+":{
		parents:"MA-MG-NT-002",
		name:{ "KOR":"Chant Magic: Force Field" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"역장-영창"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"MA-MG-NT-002++":{
		parents:"MA-MG-NT-002",
		name:{ "KOR":"Focus Magic: Force Field" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"역장-집중"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)", repeat:2},
		]
	},
	"MA-MG-NT-002-def":{
		parents:"MA-MG-NT-002",
		name:{ "KOR":"Force Field" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-NT-002", "MA-MG-NT-002+", "MA-MG-NT-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-FI-002":{
		name:{ "KOR":"Instant Magic: Fire Whirl" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "즉발 마술", "화염 마술"], cast:2,
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-002+":{
		parents:"MA-MG-FI-002",
		name:{ "KOR":"Chant Magic: Fire Whirl" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "영창 마술", "화염 마술"], cast:4,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"회오리불꽃-영창"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-MG-FI-002++":{
		parents:"MA-MG-FI-002",
		name:{ "KOR":"Focus Magic: Fire Whirl" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "집중 마술", "화염 마술"], cast:Infinity,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"회오리불꽃-집중"},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-MG-FI-002-def":{
		parents:"MA-MG-FI-002",
		name:{ "KOR":"Fire Whirl" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-FI-002", "MA-MG-FI-002+", "MA-MG-FI-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-IC-002":{
		name:{ "KOR":"Instant Magic: Ice Wall" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "냉기 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
		]
	},
	"MA-MG-IC-002+":{
		parents:"MA-MG-IC-002",
		name:{ "KOR":"Chant Magic: Ice Wall" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "냉기 마술"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"얼음방벽-영창"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
		]
	},
	"MA-MG-IC-002++":{
		parents:"MA-MG-IC-002",
		name:{ "KOR":"Focus Magic: Ice Wall" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "냉기 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"얼음방벽-집중"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
		]
	},
	"MA-MG-IC-002-def":{
		parents:"MA-MG-IC-002",
		name:{ "KOR":"Ice Wall" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-IC-002", "MA-MG-IC-002+", "MA-MG-IC-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-EA-002":{
		name:{ "KOR":"Instant Magic: Power of Earth" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "대지 마술"], related:["tag:즉발 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
		]
	},
	"MA-MG-EA-002+":{
		parents:"MA-MG-EA-002",
		name:{ "KOR":"Chant Magic: Power of Earth" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "대지 마술"], related:["tag:즉발 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"대지의힘-영창"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
		]
	},
	"MA-MG-EA-002++":{
		parents:"MA-MG-EA-002",
		name:{ "KOR":"Focus Magic: Power of Earth" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "집중 마술", "대지 마술"], related:["tag:즉발 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"대지의힘-집중"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)"},
			{trigger:"used", cond:true, type:"use", value:"derived"},
		]
	},
	"MA-MG-EA-002-def":{
		parents:"MA-MG-EA-002",
		name:{ "KOR":"Power of Earth" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-EA-002", "MA-MG-EA-002+", "MA-MG-EA-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},

	"MA-MG-SP-002":{
		name:{ "KOR":"Instant Magic: Crystal Shield" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "냉기 마술", "대지 마술"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-MG-SP-002+":{
		parents:"MA-MG-SP-002",
		name:{ "KOR":"Chant Magic: Crystal Shield" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "영창 마술", "냉기 마술", "대지 마술"], cast:2,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"수정방패-영창"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-MG-SP-002++":{
		parents:"MA-MG-SP-002",
		name:{ "KOR":"Focus Magic: Crystal Shield" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "자동시전", "기본마술", "집중 마술", "냉기 마술", "대지 마술"], cast:Infinity,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"수정방패-집중"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-MG-SP-002-def":{
		parents:"MA-MG-SP-002",
		name:{ "KOR":"Crystal Shield" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술요약"], related:["MA-MG-SP-002", "MA-MG-SP-002+", "MA-MG-SP-002++"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Details" }},
		]
	},


	"MA-MG-FI-003":{
		name:{ "KOR":"Focus Magic: Great Explosion" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "영창 마술", "집중전용", "생성불가", "화염 마술"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This magic can only be placed in the Focus slot." }}
		]
	},
	"MA-MG-FI-003++":{
		parents:"MA-MG-FI-003",
		name:{ "KOR":"Focus Magic: Great Explosion" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "마술요약", "기본마술", "집중 마술", "화염 마술", "act:삽입"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"대폭발-집중"},
			{trigger:"used", cond:true, type:"attack", repeat:3, target:"op"}
		]
	},
	"MA-MG-IC-003":{
		name:{ "KOR":"Focus Magic: Blizzard" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "영창 마술", "집중전용", "생성불가", "냉기 마술"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This magic can only be placed in the Focus slot." }}
		]
	},
	"MA-MG-IC-003++":{
		parents:"MA-MG-IC-003",
		name:{ "KOR":"Focus Magic: Blizzard" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true, keywords:["만료"],
		tags:["마술", "시전", "마술요약", "기본마술", "집중 마술", "냉기 마술", "act:애무"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"눈보라-집중"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2, repeat:"자신.기록.전체.이벤트.만료마술.length"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.만료마술.length"},
		]
	},
	"MA-MG-EA-003":{
		name:{ "KOR":"Focus Magic: Earthquake" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "기본마술", "즉발 마술", "영창 마술", "집중전용", "생성불가", "대지 마술"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This magic can only be placed in the Focus slot." }}
		]
	},
	"MA-MG-EA-003++":{
		parents:"MA-MG-EA-003",
		name:{ "KOR":"Focus Magic: Earthquake" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:["마술", "시전", "마술요약", "기본마술", "집중 마술", "대지 마술", "act:삽입"], related:["tag:보석"], cast:1,
		effect:[
			{trigger:"get", cond:true, type:"line", value:"지진-집중"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"감각차단"}
		]
	},

	"MA-ST-001":{
		name:{ "KOR":"Heat" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"MA-ST-001-1":{
		parents:"MA-ST-001",
		name:{ "KOR":"Intense Heat" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2},
		]
	},
	"MA-ST-001-2":{
		parents:"MA-ST-001",
		name:{ "KOR":"Residual Heat" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:1},
		]
	},
	"MA-ST-002":{
		name:{ "KOR":"Freeze" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-1},
		]
	},

	"MA-JW-001":{
		name:{ "KOR":"Topaz" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["보석", "변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"get", target:"self", value:"MA-MC-003"},
		]
	},
	"MA-JW-002":{
		name:{ "KOR":"Sapphire" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["보석", "변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"changeSBlock", op:"add", value:3},
		]
	},
	"MA-JW-003":{
		name:{ "KOR":"Ruby" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["보석", "변형목적"],
		effect:[
			{trigger:"transformed", cond:true, type:"excite", target:"op", op:"add", value:3},
		]
	},

	"MA-NM-AT-001":{
		name:{ "KOR":"Swift Casting" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:마술", "즉발슬롯", "act:애무"], related:["ref:즉발슬롯"],
		flavorText:{ "KOR":"In most situations, light magic is sufficient to solve problems.<br>While powerful grand magic may be needed at times, learning to swiftly cast moderately powerful instant magic is the foundation of being a mage." },
		hypnoText:{ "KOR":"A foreplay technique to quickly stroke your opponent's cock with your hands, giving light stimulation.<br>You slowly build them up with a mana-infused touch, preparing them for the acts to come." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"}
		]
	},
	"MA-NM-AT-002":{
		name:{ "KOR":"Aggressive Chanting" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마술", "영창슬롯", "act:삽입"], related:["ref:영창슬롯"],
		flavorText:{ "KOR":"A mage's chant measures mana and guides the appropriate amount to the correct location for the spell.<br>Magic enhanced with chanting possesses greater power and duration." },
		hypnoText:{ "KOR":"A technique to arouse your opponent by shouting lewd phrases during the act.<br>You typically use phrases craving cock and cum, openly demanding that they ejaculate." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-NM-AT-003":{
		name:{ "KOR":"Ring of Embers" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "act:삽입"], related:["MA-MC-001"],
		flavorText:{ "KOR":"Crimson mana contains destructive power.<br>It often manifests as flames or explosions, and those who handle this element well tend to have eccentric or dangerous personalities." },
		hypnoText:{ "KOR":"A lust crest is engraved on your stomach, and a hot stimulus spreads from deep within your womb.<br>The crest's effect makes you grip your opponent's cock tighter, becoming an even better cunt." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-MC-001"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-NM-AT-004":{
		name:{ "KOR":"Mana-Infused Gemstone" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:변형", "act:삽입"], related:["tag:보석", "MA-MC-003"],
		flavorText:{ "KOR":"When mana is condensed and solidified, it becomes a beautiful, colored mineral called a mana stone or gemstone.<br>Because gems continuously emit mana, they are used as fuel for magic tools and materials for casting spells, and their beauty and rarity also make them valuable for jewelry." },
		hypnoText:{ "KOR":"A technique to cast a spell on your opponent's cock to make it as hard as stone, then insert it deep into your ass.<br>Each time the hardened cock enters, you enjoy the intense pressure in your back hole." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 보석)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-NM-AT-005":{
		name:{ "KOR":"Basic Elementalism" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "act:난교"], related:["MA-MC-001", "MA-MC-002", "MA-MC-003"],
		flavorText:{ "KOR":"There are many fields of magic, but what generally comes to mind when one thinks of 'magic' is elementalism.<br>In elementalism, one handles one or more of the three types of mana—crimson, azure, and golden—and each person has a different specialty." },
		hypnoText:{ "KOR":"A technique that uses all three of a mage's attributes: breasts, pussy, and ass.<br>You choose between pussy sex, paizuri, and anal sex as the situation demands." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 마도진)"},
		]
	},
	"MA-NM-AT-006":{
		name:{ "KOR":"Reflective Shield" }, class:"마술사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:감각차단", "act:삽입"],
		flavorText:{ "KOR":"As understanding of mana deepens, the firepower of magic grows stronger day by day, and defensive techniques cannot keep up.<br>In this situation, it is necessary to take an aggressive strategy even when using defensive magic." },
		hypnoText:{ "KOR":"A technique to have sex in a state of sensory deprivation, unaware of what is happening.<br>Even as you squirt from your pussy and your lower body trembles, you maintain a calm expression, oblivious to everything." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:"상대.기록.이번.이벤트.흥분.증가"}
		]
	},
	"MA-NM-SU-001":{
		name:{ "KOR":"Spell Scroll" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마술", "즉발슬롯"], related:["ref:즉발슬롯"], keywords:["만료"],
		flavorText:{ "KOR":"By using a scroll with a pre-inscribed incantation, you can cast magic swiftly and easily.<br>Talent in magic and talent in scroll-making are separate fields, so it is recommended to use an officially certified Halfman artisan's product rather than a poorly made homemade one." },
		hypnoText:{ "KOR":"A technique to drench with your pussy juice.<br>If you are sufficiently aroused, it takes only a few seconds to let out a light spray." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
			{trigger:"selected", cond:{v1:"자신.기록.전체.이벤트.만료마술.length", op:">", v2:0}, type:"maxUse", target:"self", value:1}
		]
	},
	"MA-NM-SU-002":{
		name:{ "KOR":"Enhanced Chanting" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술", "group:변형", "영창슬롯"], related:["ref:영창슬롯"],
		flavorText:{ "KOR":"The power of a spell can be altered by adjusting the frequency and position of words in the chant.<br>Repeating the same word can concentrate mana to increase firepower, while changing the word order can adjust the flow of mana to change the range." },
		hypnoText:{ "KOR":"A technique to help your opponent's arousal by reciting a spell that makes their cock even harder.<br>The more vulgar and explicit the words chosen, the greater the effect." },
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
		]
	},
	"MA-NM-SU-003":{
		name:{ "KOR":"Ring of Frost" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진"], related:["MA-ST-002", "MA-MC-002"],
		flavorText:{ "KOR":"Azure mana has the property of absorbing power.<br>It is strongly associated with static imagery, such as removing heat to freeze or eliminating vitality to harden." },
		hypnoText:{ "KOR":"Increase your vulgarity by engraving words on your breasts.<br>It is good to write self-deprecating expressions such as 'pervert,' 'sow,' or 'cum-dumpster.'" },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-MC-002"}
		]
	},
	"MA-NM-SU-004":{
		name:{ "KOR":"Ring of Rock" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진", "group:변형"], related:["MA-MC-003"],
		flavorText:{ "KOR":"Golden mana specializes in protection and transformation.<br>It possesses the firmness of the earth and, at the same time, the versatility to become anything depending on how it is processed." },
		hypnoText:{ "KOR":"Increase your lewdness by engraving the number of times you've been cummed in on your ass.<br>It gives the feeling of being treated like an object, making you a more usable onahole." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:2}, type:"transform", target:"self",
			info:{
				value:"MA-MC-003",
			}},
		]
	},
	"MA-NM-SU-005":{
		name:{ "KOR":"Divine Shield" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:감각차단"], keywords:["만료"],
		flavorText:{ "KOR":"Holy magic, which specializes in healing and protection, is a unique magic that uses divine power bestowed as a reward for faith.<br>The Leia religion, which worships the goddess Aleia, and the Golden Bough faith, which worships the forest incarnation Rea, surprisingly handle similar powers despite worshiping different deities." },
		hypnoText:{ "KOR":"A self-hypnosis technique that lowers your own perception to eliminate resistance to sex.<br>You come to see being fucked as natural and, due to sensory deprivation, do not feel what is being done to you." },
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:5},
		]
	},
	"MA-NM-SU-006":{
		name:{ "KOR":"Mental Focus" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:감각차단", "group:마술", "group:변형", "집중슬롯"], related:["ref:집중슬롯"],
		flavorText:{ "KOR":"Casting grand magic requires vast mana and long periods of concentration.<br>Because mastering a single grand spell requires a great deal of experience and practice, it is natural that most grand mages are long-lived Sylvani." },
		hypnoText:{ "KOR":"It is common sense that a man's semen has a high mana-charging effect.<br>Ask your opponent to spray his cum on your body." },
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:3},
			{trigger:"choice", cond:true, range:{category:"tags", value:"마도진", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
		]
	},
	"MA-NM-SU-007":{
		name:{ "KOR":"Chain Chanting" }, class:"마술사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마술", "group:변형", "영창슬롯"], related:["MA-NM-SU-007-1", "ref:영창슬롯"],
		flavorText:{ "KOR":"Similar spells often have overlapping parts in their chants.<br>By utilizing this, you can quickly cast multiple spells by chanting them in succession." },
		hypnoText:{ "KOR":"A technique to caress multiple cocks at once using both hands.<br>It is important to have balanced hand movements so that one cock does not receive more stimulation than the others." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-NM-SU-007-1"},
		]
	},
	"MA-NM-SU-007-1":{
		name:{ "KOR":"Follow-up Chant" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["즉발슬롯"], related:["ref:즉발슬롯"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"마술슬롯.즉발"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"MA-NM-PS-001":{
		name:{ "KOR":"Snow Wolf Spirit" }, class:"마술사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마술", "즉발슬롯"], related:["MA-ST-002", "ref:즉발슬롯"],
		flavorText:{ "KOR":"The power used by beings such as demons, spirits, and dragons, which defies logic, is called 'magic,' and the degraded technique that imitates it by analyzing its system is called 'sorcery.'<br>Spiritism, a specialty of the Silverleaf Tribe, is said to allow the use of power similar to primal magic by borrowing the power of spirits through communication." },
		hypnoText:{ "KOR":"Your partner is a female wolf spirit who is always in heat and craving cock.<br>She helps with threesomes with her voluptuous breasts and specialty paizuri, but be careful not to drop the leash, or she'll try to taste the cock before her master." },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"설원늑대정령-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:{v1:"상대.상태.count(id, MA-ST-002)", op:">=", v2:2}, type:"line", value:"설원늑대정령-2"},
			{trigger:"turnEnd", cond:{v1:"상대.상태.count(id, MA-ST-002)", op:">=", v2:2}, type:"get", target:"self", value:"마술슬롯.즉발"},
			{trigger:"expired", cond:true, type:"line", value:"설원늑대정령-3"},
		]
	},
	"MA-NM-PS-002":{
		name:{ "KOR":"Automaton Golem" }, class:"마술사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:변형", "group:마도진"], related:["tag:보석", "MA-MC-003"],
		flavorText:{ "KOR":"Magitech, which combines Sylvani mechanical engineering and magic, is a highly sought-after field.<br>Among them, golem engineering is the essence of magitech, consisting of a combination of precise physical design and complex magic formulas." },
		hypnoText:{ "KOR":"Your partner is a female onahole golem that faithfully carries out any command.<br>The tightness and wrinkles of her hole were modeled after yours, so using her is no different from fucking you." },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"오토마톤골렘-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 보석)", op:">", v2:0}, type:"line", value:"오토마톤골렘-2"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 보석)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 보석, 1)",
				value:"MA-MC-003",
			}},
			{trigger:"expired", cond:true, type:"line", value:"오토마톤골렘-3"},
		]
	},

	"MA-EX-AT-001":{
		name:{ "KOR":"Mana Explosion" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진", "group:감각차단", "act:펠라치오"], related:["MA-MC-004"],
		flavorText:{ "KOR":"Pure mana has no special properties.<br>If one possesses a blessed amount of mana, they can produce an impressive amount of power just by releasing it without processing it into magic." },
		hypnoText:{ "KOR":"A technique to drink cum until it overflows from your mouth.<br>You must deep-throat the cock until the ejaculated volume flows back out and swallow it." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-MC-004"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-EX-AT-002":{
		name:{ "KOR":"Dual Casting" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술", "act:삽입"],
		flavorText:{ "KOR":"Few fields depend more on talent than effort as much as magic does.<br>The Eldorian royal family is known for being born with everything: overflowing mana, bloodline magic, and the talent for dual casting." },
		hypnoText:{ "KOR":"A technique to be repeatedly and continuously fucked.<br>Your innately lewd body seduces men, making them rape you." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"choice", cond:true, range:{category:"tags", value:"마술", count:1}, type:"get", target:"self"},
		]
	},
	"MA-EX-AT-003":{
		name:{ "KOR":"Multi-Elementalism" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:마술", "group:마도진", "즉발슬롯", "act:난교"], related:["ref:즉발슬롯"],
		flavorText:{ "KOR":"Most elementalists possess mana of a single specialized element, but very rarely, there are those who possess multiple types of mana.<br>Multi-elementalism allows one to utilize this talent to respond to various situations, but it requires twice the effort of practicing a single focused element." },
		hypnoText:{ "KOR":"A technique to handle a cock using two or more of your breasts, pussy, and ass.<br>You must strive to become a full-body cum-dumpster." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", repeat:"자기덱.count(tags, 마도진)", maxRepeat:3, value:"마술슬롯.즉발"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", repeat:"자기덱.count(tags, 마술)", value:1},
		]
	},
	"MA-EX-AT-004":{
		name:{ "KOR":"Replication Incantation" }, class:"마술사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마술"], keywords:["만료"],
		flavorText:{ "KOR":"Traces of mana are always left where magic has been used.<br>By reverse-engineering these traces, you can easily replicate the magic that was cast there." },
		hypnoText:{ "KOR":"A technique to record yourself having sex using a projection orb.<br>The fact that the recording will not disappear and will be used as masturbation material by other men adds to the excitement." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.전체.이벤트.만료마술.selectCards(all, null, 2)"},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"MA-EX-SU-001":{
		name:{ "KOR":"High-Speed Chanting" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마술", "group:변형", "영창슬롯"], related:["ref:영창슬롯"],
		flavorText:{ "KOR":"To cast complex magic in a short amount of time, an advanced technique to shorten the chant is necessary.<br>The method of optimization differs depending on what each mage prioritizes, so it is a matter of preference." },
		hypnoText:{ "KOR":"A technique to provoke your opponent with a rough tone mixed with lewd phrases.<br>You show off your body and insult your opponent for not eating you up quickly, calling them a virgin." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"all", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
			{trigger:"used", cond:true, type:"use", value:"derived"}
		]
	},
	"MA-EX-SU-002":{
		name:{ "KOR":"Conflagration" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:마도진", "group:마술", "group:변형", "집중슬롯", "진홍색 마도진"], related:["MA-MC-001", "ref:집중슬롯"],
		flavorText:{ "KOR":"Battle mages, by their nature, tend to possess crimson mana, which emphasizes destructive power.<br>With destructive flames that burn everything to ash, they boast the power to turn the battlefield into a sea of fire." },
		hypnoText:{ "KOR":"A technique to spray orgasmic pussy juice through passionate masturbation.<br>Though it takes time to get sufficiently heated up, it is a preparatory process for more lewd and intense acts." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-001", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
			{trigger:"used", cond:{v1:"음란", op:">=", v2:4}, type:"get", target:"self", repeat:2, value:"MA-MC-001"},
		]
	},
	"MA-EX-SU-003":{
		name:{ "KOR":"Cold Snap" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마도진", "group:마술", "group:변형", "집중슬롯", "담청색 마도진"], related:["MA-MC-002", "ref:집중슬롯"],
		flavorText:{ "KOR":"The gushing azure mana freezes even the air, causing a cold, sharp wind to overwhelm the enemy.<br>It is a powerful magic that seals the enemy's movements and freezes everything, covering the entire battlefield in ice." },
		hypnoText:{ "KOR":"If you have large breasts, you must not cover them with clothes or underwear.<br>It is common sense to expose large breasts to please the eyes of men." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-002", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
			{trigger:"used", cond:{v1:"상대.상태.count(id, MA-ST-002)", op:">=", v2:3}, type:"get", target:"self", value:"derived"},
		]
	},
	"MA-EX-SU-004":{
		name:{ "KOR":"Meditation" }, class:"마술사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술", "group:변형", "group:마도진", "group:감각차단", "영창슬롯", "황금색 마도진"], related:["ref:영창슬롯", "tag:변형목적"], keywords:["변형목적"],
		flavorText:{ "KOR":"The sages of the Lightweaver clan use a method of mental training to handle golden mana.<br>By entering a deep meditation and circulating golden mana within their bodies, they recover spent energy and stabilize the flow of mana." },
		hypnoText:{ "KOR":"A technique to fall into a trance, becoming so unaware that you don't even notice you're being fucked.<br>By the time you come to your senses, you'll find your entire body drenched in cum." },
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"choice", cond:true, range:{category:"tags", value:"변형목적", count:"M2"}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.영창",
			}},
		]
	},
	"MA-EX-PS-001":{
		name:{ "KOR":"Flask Phoenix" }, class:"마술사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "진홍색 마도진"], related:["MA-MC-001"],
		flavorText:{ "KOR":"Spiritism is a technique with very desirable power, but it cannot be used without the talent to communicate with capricious spirits.<br>To overcome this, the World Tree Academy in Sylvania is attempting to create artificial spirits with whom communication is easy." },
		hypnoText:{ "KOR":"Your partner is a female monster with an intense sexual curiosity.<br>With an innocent expression, she pesters men to attack them and engage in a 'game' that feels good." },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"플라스크피닉스-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.이벤트.자극함", op:">", v2:0}, type:"line", value:"플라스크피닉스-2"},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.이벤트.자극함", op:">", v2:0}, type:"get", target:"self", value:"MA-MC-001"},
			{trigger:"expired", cond:true, type:"line", value:"플라스크피닉스-3"},
		]
	},
	"MA-EX-PS-002":{
		name:{ "KOR":"Mana Slime" }, class:"마술사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마도진", "group:변형"], related:["tag:마도진", "MA-EX-PS-002-2"],
		flavorText:{ "KOR":"Though called a slime because of its amorphous form, the Mana Slime is a completely different being from the monster of the same name.<br>Because of its property of absorbing and growing from surrounding mana, it is used for various experiments, mana detection, and as a countermeasure against mages." },
		hypnoText:{ "KOR":"Your partner is a slime that mimics the form of a human female.<br>Its main food is semen, which it consumes by squeezing a cock with a sticky hole that mimics a pussy, forcing it to ejaculate.<br>※ Do not feed it more than the appropriate amount." },
		expiration:"count", duration:5, defaultDuration:5,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"마나슬라임-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 마도진)", op:">", v2:0}, type:"line", value:"마나슬라임-2"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 마도진)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 마도진, 1)",
				value:"MA-EX-PS-002-2",
			}},
			{trigger:"expired", cond:true, type:"line", value:"마나슬라임-3"},
			/*{trigger:"turnEnd", cond:{v1:"자신.기록.전체.이벤트.만료마술.length", op:">=", v2:5}, notext:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"MA-EX-PS-002-3",
			}},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<span style=\"color: gray;\">[Round End]</span> If 5 or more magic spells have expired during the duel, it becomes giant." }, keepLine:true},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.만료마술.length"},*/
		]
	},
	"MA-EX-PS-002-2":{
		name:{ "KOR":"Magic: Absorb" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"마나슬라임-4", notwait:true},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"자기덱.count(tags, 마술)"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"This card is treated as a Magic card." }},
		]
	},
	"MA-EX-PS-002-3":{
		name:{ "KOR":"Giant Mana Slime" }, class:"마술사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[], related:["MA-EX-PS-002-4"], keywords:["변형목적"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 변형목적)", op:">", v2:0}, condOmit:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 변형목적, 3)",
				value:"MA-EX-PS-002-4",
			}},
		]
	},
	"MA-EX-PS-002-4":{
		name:{ "KOR":"Magic: Fuse" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:3},
		]
	},

	"MA-UL-AT-001":{
		name:{ "KOR":"Falling Star" }, class:"마술사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:마도진", "group:변형", "진홍색 마도진"], related:["MA-MC-001", "MA-UL-AT-001-1"],
		flavorText:{ "KOR":"The art of reading the movements of the stars has long been dismissed as impractical due to a lack of information, poor observation accuracy, and reliance on chance.<br>However, that perception changed when a Tribe sage cast the grand magic Meteor Shower, combining crimson mana and astrology to protect their tribe, an event that devastated the entire area.<br>The attempt to systematize this unknown field to prevent a repeat of the tragedy led to the birth of astrology, or Celesthron." },
		hypnoText:{ "KOR":"A finishing move that turns the caster's pussy into the ultimate onahole with an enhanced lust crest carved into the womb.<br>It has the effect of making any man cum instantly, but as an aftereffect, the caster suffers when not penetrated, forcing them to live the rest of their life as a fucktoy." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"유성우-집중"},
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-001", count:"M5"}, type:"transform", target:"self",
			info:{
				value:"MA-UL-AT-001-1",
			}},
		]
	},
	"MA-UL-AT-001-1":{
		name:{ "KOR":"Grand Magic: Meteor Shower" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], cast:1,
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"MA-ST-001"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-UL-AT-002":{
		name:{ "KOR":"Frozen World" }, class:"마술사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마도진", "group:변형", "담청색 마도진"], related:["MA-ST-002", "MA-MC-002", "MA-UL-AT-002-1"],
		flavorText:{ "KOR":"In the snowy mountain regions of the northern Eldorian Kingdom live minority groups who have been there for ages.<br>To survive in the harsh environment, they have developed strong physiques and hearty personalities, along with the talent to handle the abundant azure mana from the mountains, their fighting spirit, and their strength to overcome the cold.<br>The grand magic they mainly use freezes the entire area, allowing them to turn any battlefield into their home turf." },
		hypnoText:{ "KOR":"A finishing move where you cover a cock with your breasts, delivering extreme pressure and tightness for immense pleasure.<br>Your soft breasts wrap around and swallow the cock, trapping your opponent in their soft stimulation so they cannot escape." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"영구동토-집중"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-002", count:1}, type:"transform", target:"self",
			info:{
				value:"MA-UL-AT-002-1",
			}},
		]
	},
	"MA-UL-AT-002-1":{
		name:{ "KOR":"Grand Magic: Permafrost" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["마술", "자동시전"], related:["MA-ST-002"], cast:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", repeat:"상대.기록.전체.이벤트.상태획득.count(id, MA-ST-002)", value:1},
			{trigger:"none", cond:true, type:"showValue", value:"상대.기록.전체.이벤트.상태획득.count(id, MA-ST-002)"},
		]
	},

	"MA-UL-SU-001":{
		name:{ "KOR":"Flowing Veins of Mana" }, class:"마술사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:마도진", "group:변형", "group:마술", "황금색 마도진"], related:["MA-MC-003", "tag:집중 마술"],
		flavorText:{ "KOR":"Deep within the earth, there are ley lines through which immense mana flows, and the gradual leakage of this to the surface is what constitutes natural mana.<br>Rarely, there are points where a ley line passes relatively close to the surface and can be directly accessed, and standing there allows one to use that vast mana as if it were their own.<br>A mage using a ley line is like a natural disaster, so understanding the surrounding mana terrain is crucial in war, and it is best not to set up a base near a ley line that cannot be secured." },
		hypnoText:{ "KOR":"A technique to cast a curse on yourself that turns your entire body into an erogenous zone.<br>You become able to feel pleasure from just caresses and skinship, allowing you to enjoy sex even more." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"id", value:"MA-MC-003", count:1}, type:"transform", target:"self",
			info:{
				value:"마술슬롯.집중",
			}},
			//{trigger:"used", cond:true, type:"specialA13"},
			//{trigger:"used", cond:true, type:"text", value:{ "KOR":"Select a <b>[Golden Magic Circle]</b>, <b>transform</b> it into Focus magic, and grant it automatic casting." }},
			{trigger:"used", cond:true, type:"get", target:"self", value:"MA-UL-SU-001"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"MA-UL-SU-002":{
		name:{ "KOR":"Time Stop" }, class:"마술사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:마술"],
		flavorText:{ "KOR":"Alchemy has five grand challenges, the ultimate goals that all alchemists dream of.<br>Perpetual motion, time reversal, creation of intelligent life, immortality, and the creation of gold—any of which, if realized, could change the very fabric of the world.<br>Though some ignorantly claim that the successful implementation of time-stop magic brings the success of time reversal closer, that magic only makes it seem as if time has stopped through extreme acceleration, a completely different means from reversal." },
		hypnoText:{ "KOR":"A technique to freely fuck your opponent, who is unaware of the situation, in stopped time.<br>The moment time starts flowing again, the accumulated stimulation rushes in all at once, delivering a pleasure so intense it could cause death by orgasm." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"시간정지"},
			//{trigger:"used", notext:true, cond:true, type:"state", target:"op", value:"MA-UL-SU-002-1"},
			{trigger:"used", cond:true, type:"use", value:"자신.기록.이번.사용.selectCards(tags, 마술, all)"},
			/*{trigger:"used", notext:true, cond:true, type:"remove", target:"op",
			info:{
				target:"상대.상태.selectCards(id, MA-UL-SU-002-1, all)"
			}},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"The opponent will not orgasm until all effects have ended." }},*/
		]
	},
	"MA-UL-SU-002-1":{
		parents:"MA-UL-SU-002",
		name:{ "KOR":"Stopped" }, class:"마술사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"suppression", target:"self"},
		]
	},
	"MA-UL-PS-001":{
		name:{ "KOR":"Miyeong, Soul of the Archmage" }, class:"마술사", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니"], related:["tag:미영의 도움"],
		flavorText:{ "KOR":"Miyeong Ji was a Sylvani archmage who had a profound impact on the world of magic during her lifetime.<br>Like all great Sylvani, her soul should have been enshrined in a Sylvanian shrine, but with her strong eccentric streak, she cast a possession spell just before her death to separate her soul and let it inhabit another place.<br>After freely wandering the world, she has now taken a deep interest in you and has attached herself to you as a mentor, offering much advice and help." },
		hypnoText:{ "KOR":"Your partner is the soul of a mad slut who is obsessed with you.<br>She is constantly possessive, touches your body at will, and will eliminate any man who gets in the way by making them orgasm with a single touch." },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"미영-0"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:true, type:"specialA08"},
			{trigger:"expired", cond:true, type:"line", value:"미영-3"},
		]
	},
	"MA-UL-PS-001-1-1":{
		name:{ "KOR":"Miyeong's Protection" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If you have 2 or more penalty cards in your deck," }},
			{trigger:"used", cond:true, type:"line", value:"미영-1"},
			{trigger:"used", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(type, 패널티, 1)",
				value:"randomCard(tags, 보석)",
			}},
		]
	},
	"MA-UL-PS-001-1-2":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Comfort" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If you have 1 <b>Orgasm</b> remaining," }},
			{trigger:"used", cond:true, type:"line", value:"미영-2"},
			{trigger:"used", cond:true, type:"changeSBlock", op:"add", value:5},
		]
	},
	"MA-UL-PS-001-1-3":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Advice" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If you have 2 or more magic circle cards in your deck," }},
			{trigger:"used", cond:true, type:"line", value:"미영-3"},
			{trigger:"used", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 마도진, 1)",
				value:"마술슬롯.영창"
			}},
		]
	},
	"MA-UL-PS-001-1-4":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Praise" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If Lewdness is 4 or higher," }},
			{trigger:"used", cond:true, type:"line", value:"미영-4"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"MA-UL-PS-001-1-5":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Encouragement" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If <b>Arousal</b> is 3 or higher," }},
			{trigger:"used", cond:true, type:"line", value:"미영-5"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 즉발 마술)", repeat:2},
		]
	},
	"MA-UL-PS-001-1-6":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Cheering" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If you have 2 or more Magic cards in your deck," }},
			{trigger:"used", cond:true, type:"line", value:"미영-6"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"자기덱.selectCards(tags, 마술, 1)"},
		]
	},
	"MA-UL-PS-001-1-7":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Assistance" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If Heat is 5 or higher," }},
			{trigger:"used", cond:true, type:"line", value:"미영-7"},
			{trigger:"used", cond:true, type:"state", target:"op", byname:true, value:"MA-ST-002", repeat:2},
		]
	},
	"MA-UL-PS-001-1-8":{
		parents:"MA-UL-PS-001-1-1",
		name:{ "KOR":"Miyeong's Service" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If you have 2 or more Gem cards in your deck," }},
			{trigger:"used", cond:true, type:"line", value:"미영-8"},
			{trigger:"used", cond:true, type:"transform", target:"self",
			info:{
				target:"자기덱.selectCards(tags, 보석, 1)",
				value:"MA-MC-003",
			}},
		]
	},
	"MA-UL-PS-001-1-9":{
		parents:"MA-UL-PS-001-1-10",
		name:{ "KOR":"Miyeong's Mental Instability" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"The condition was not met, so she could not help." }},
			{trigger:"used", cond:true, type:"line", value:"미영-9"},
		]
	},
	"MA-UL-PS-001-1-10":{
		name:{ "KOR":"Miyeong's Obsession" }, class:"마술사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["미영의 도움"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"<b>Condition:</b> If you have received 4 types of help," }},
			{trigger:"used", cond:true, type:"line", value:"미영-10"},
			{trigger:"used", cond:true, type:"orgasm", target:"op"},
		]
	},


	"HE-IN-000":{
		name:{ "KOR":"Empty" }, class:"치유사", type:"-", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"-" }},
		]
	},
	
	"HE-IN-001":{
		name:{ "KOR":"Essence of Life" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-4}
		]
	},
	"HE-IN-002":{
		name:{ "KOR":"Essence of Thorns" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"HE-IN-003":{
		name:{ "KOR":"Essence of Shadow" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"changeCorrupt", op:"add", value:2}
		]
	},
	"HE-IN-004":{
		name:{ "KOR":"Essence of Awakening" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"lewd", op:"add", value:2}
		]
	},
	"HE-IN-005":{
		name:{ "KOR":"Essence of Serenity" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-IN-005-1"}
		]
	},
	"HE-IN-005-1":{
		parents:"HE-IN-005",
		name:{ "KOR":"Serenity" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-3}
		]
	},
	"HE-IN-005-2":{
		parents:"HE-IN-005",
		name:{ "KOR":"Deep Serenity" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"estrus", op:"add", value:-6}
		]
	},
	"HE-IN-006":{
		name:{ "KOR":"Essence of Echo" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"The effect activates twice." }}
		]
	},
	"HE-IN-007":{
		name:{ "KOR":"Essence of Immobility" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"exciteL", target:"self", op:"add", value:2}
		]
	},
	"HE-IN-008":{
		name:{ "KOR":"Essence of Swiftness" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"HE-IN-009":{
		name:{ "KOR":"Essence of Vampirism" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:5, owner:1,
		cond:false,
		tags:["정수", "기본정수"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-IN-009-1"}
		]
	},
	"HE-IN-009-1":{
		name:{ "KOR":"Life Drain" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"}
		]
	},

	"HE-NM-CO-001":{
		name:{ "KOR":"Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-NM-AT-001":{
		name:{ "KOR":"Holy Flame" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true, meet:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0},
		tags:["덱빌딩", "race:엘도리아인", "group:회복", "act:애무"],
		flavorText:{ "KOR":"Holy power is mainly used for healing and protection, but it can also be used to burn evil enemies.<br>This flickering white light is not a flame that leaves physical wounds, but one that sears life itself." },
		hypnoText:{ "KOR":"A technique to caress a cock with your feet, as if trampling it.<br>Experiencing this somewhat humiliating pleasure, your opponent feels a new desire burn within them." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0}, type:"exciteL", target:"self", op:"add", value:2},
		]
	},
	"HE-NM-AT-002":{
		name:{ "KOR":"Soul Whip" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:회복", "act:펠라치오"],
		flavorText:{ "KOR":"Basically, natural healing is the effect of sharing your overflowing life force with others.<br>If this is possible, it means you can also take it away." },
		hypnoText:{ "KOR":"A technique to skillfully wield your tongue to lick a cock.<br>Your tongue work shows your determination to suck out every last drop of cum until his balls are empty." },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-AT-002-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-NM-AT-002-1":{
		parents:"HE-NM-AT-002",
		name:{ "KOR":"Life Drain" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"},
		]
	},
	"HE-NM-AT-003":{
		name:{ "KOR":"Life Bond" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:회복", "act:삽입"],
		flavorText:{ "KOR":"A secret art to bind and fix each other's life force.<br>It prevents the life force of a critical patient from scattering and can suppress an enemy with an excess of life force." },
		hypnoText:{ "KOR":"A technique to bind your pussy to your opponent's cock.<br>Feeling that you have become one, you must squeeze hard so that your opponent can cum inside you." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"자신.남은흥분"}
		]
	},
	"HE-NM-AT-004":{
		name:{ "KOR":"Radiant Aura" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:엘도리아인", "group:결합", "group:정수", "act:애무"],
		flavorText:{ "KOR":"Holy healing uses sacred power bestowed in return for faith in a great being.<br>Due to this characteristic, it is a difficult technique for Sylvani, who have a weak concept of faith, to use." },
		hypnoText:{ "KOR":"A technique to induce ejaculation on your breasts and spread the cum.<br>The sight of being covered in sticky cum makes you look even more lewd." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"mix", value:"all", count:2}, type:"combine", target:"self", value:"HE-NM-AT-004-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"}
		]
	},
	"HE-NM-AT-004-1":{
		parents:"HE-NM-AT-004",
		name:{ "KOR":"Radiant Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-NM-AT-005":{
		name:{ "KOR":"Light of Purification" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:타락"],
		flavorText:{ "KOR":"The Leia religion, which worships the goddess Aleia, is the largest religion on the continent of Oldinsaleia.<br>In return for their sincere prayers, believers receive a blessing and can use powerful holy magic." },
		hypnoText:{ "KOR":"A technique to catch your opponent's cum or piss in your hands and drink it.<br>If you fail to receive the cum, you must reflect on your lack of lewdness." },
		effect:[
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:"M4",
				effect:[
					{trigger:"used", cond:true, type:"changeCorrupt", op:"add", value:2},
				]
			}},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:"타락"},
				]
			}},
		]
	},
	"HE-NM-AT-006":{
		name:{ "KOR":"Natural Essence Extraction" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:정수", "act:펠라치오"],
		flavorText:{ "KOR":"Natural healing is a technique that directly deals with the concept of life force possessed by living beings.<br>As it mainly developed from the folk remedies of Tribe shamans, it is not systematic, but its effectiveness is recognized and studied by the Albion Medical Association." },
		hypnoText:{ "KOR":"A technique to extract the semen inside a cock by sucking it.<br>Because semen is so precious and valuable, you must suck and drink it with great care." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)", repeat:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-NM-AT-007":{
		name:{ "KOR":"Release Restraint" }, class:"치유사", type:"공격", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:엘도리아인", "group:결합"],
		flavorText:{ "KOR":"In addition to healing wounds, a healer is also responsible for dispelling various status effects.<br>Poison, paralysis, blindness, sleep... learning the appropriate countermeasures for countless status effects is a basic skill of a good healer." },
		hypnoText:{ "KOR":"A technique to tie yourself up and enjoy bondage play.<br>A perfect fit for a perverted masochistic bitch like you." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"type", value:"패널티", count:"M3"}, type:"combine", target:"self", value:"HE-NM-AT-007-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-NM-AT-007-1":{
		parents:"HE-NM-AT-007",
		name:{ "KOR":"Waste Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-NM-SU-001":{
		name:{ "KOR":"Wave of Healing" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:회복"],
		flavorText:{ "KOR":"The spreading wave of healing provides a wide-area recovery effect.<br>Standing within it, you feel comfort and warmth." },
		hypnoText:{ "KOR":"A technique to embrace, kiss, and mix your bodies together.<br>You feel each other's body heat and spend a rich, intimate time together." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-4},
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-SU-001-1"},
		]
	},
	"HE-NM-SU-001-1":{
		parents:"HE-NM-SU-001",
		name:{ "KOR":"Ripple of Healing" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"excite", target:"self", op:"add", value:-4},
		]
	},
	"HE-NM-SU-002":{
		name:{ "KOR":"Grant Vitality" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:회복", "group:타락"],
		flavorText:{ "KOR":"In addition to the part directly related to life and death, life force also includes the vitality that gives strength.<br>Even if there are no injured allies, a healer can take on the role of strengthening their allies by granting them vitality." },
		hypnoText:{ "KOR":"A technique to provide lewd services for your opponent.<br>The more unusual and exotic the seduction, the greater the effect." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-5},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:3,
				effect:[
					{trigger:"used", cond:true, type:"lewd", op:"add", value:2},
				]
			}},
		]
	},

	"HE-NM-SU-003":{
		name:{ "KOR":"Quick Prescription" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:엘도리아인", "group:결합", "group:정수"],
		flavorText:{ "KOR":"Physicians and apothecaries were originally a combined profession, but they began to separate when the Albion Medical Association advocated for the need for specialization in each field.<br>While a physician diagnoses and performs procedures, an apothecary brews and prescribes the correct medicine according to that diagnosis." },
		hypnoText:{ "KOR":"A potion-brewing method that uses your own pussy as a vessel to mix cum and bodily fluids.<br>Every apothecary must know how to use their pussy." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"정수", count:2}, type:"combine", target:"self", value:"HE-NM-SU-003-1"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"HE-NM-SU-003-1":{
		parents:"HE-NM-SU-003",
		name:{ "KOR":"Essence Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-NM-SU-004":{
		name:{ "KOR":"Infinite Aura" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:실바니", "group:결합", "group:정수"],
		flavorText:{ "KOR":"In Sylvania, they believe in the cycle of life itself and do not worship a separate god.<br>Instead, they have a custom of honoring the souls of the deceased and enshrining them in shrines after death, praying for their souls to return to nature." },
		hypnoText:{ "KOR":"A technique to hold so much cum in your mouth that you can't swallow it all.<br>The overflowing, dripping cum makes you look even more lewd." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"mix", value:"all", count:2}, type:"get", target:"self"},
			{trigger:"used", cond:true, type:"combine", target:"self", info:{target:"derived"}, value:"HE-NM-SU-004-1"},
		]
	},
	"HE-NM-SU-004-1":{
		parents:"HE-NM-SU-004",
		name:{ "KOR":"Infinite Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-NM-SU-005":{
		name:{ "KOR":"Potion Alchemy" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:타락", "group:결합", "group:정수"],
		flavorText:{ "KOR":"Alchemy is the art of recreating magical effects through material combinations, based on various academic disciplines.<br>One of its fields is the creation of potions with specific effects by combining medicinal ingredients." },
		hypnoText:{ "KOR":"A technique to mix a large amount of cum and saliva and drink it.<br>You absolutely love this stinky, sticky taste." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)", repeat:3},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"combine", target:"self", info:{target:"derived"}, value:"HE-NM-SU-005-1"},
				]
			}},
		]
	},
	"HE-NM-SU-005-1":{
		parents:"HE-NM-SU-005",
		name:{ "KOR":"Potion Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-NM-SU-006":{
		name:{ "KOR":"Celestial Blessing" }, class:"치유사", type:"보조", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:회복"],
		flavorText:{ "KOR":"Through prayer, you are enveloped in and protected by a divine power.<br>You gain stamina, vitality, and the confidence to face any enemy." },
		hypnoText:{ "KOR":"A technique to greet the one who is fucking you.<br>You must assume a submissive posture and express your gratitude for being used." },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-SU-006-1"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-NM-SU-006-2"},
		]
	},
	"HE-NM-SU-006-1":{
		parents:"HE-NM-SU-006",
		name:{ "KOR":"Restoration" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"excite", target:"self", op:"add", value:-5},
		]
	},
	"HE-NM-SU-006-2":{
		parents:"HE-NM-SU-006",
		name:{ "KOR":"Blessing Shield" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"exciteL", target:"self", op:"add", value:5},
		]
	},

	"HE-NM-PS-001":{
		name:{ "KOR":"Trauma Care" }, class:"치유사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:회복", "group:타락", "미개선"], related:["HE-NM-PS-001-3","HE-NM-PS-001-2","HE-NM-PS-001-4"],
		flavorText:{ "KOR":"Stops bleeding and regenerates damaged tissue.<br>This is a specialty of the Leia religion's holy healing, and the prayer of a saint is particularly famous as a miracle that can instantly heal even fatal wounds." },
		hypnoText:{ "KOR":"An emergency patient with physical trauma has appeared!<br>You must treat them by licking them carefully with your tongue.<br>And finally... even their cock♡" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"HE-NM-PS-001-3"},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:4}, condOmit:true, type:"corrupt",
			info:{
				value:4,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"Is improved." }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-NM-PS-001-2",
					}},
				]
			}},
		]
	},
	"HE-NM-PS-001-2":{
		name:{ "KOR":"Improved Trauma Care" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"], related:["HE-NM-PS-001-4"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"HE-NM-PS-001-4"},
		]
	},
	"HE-NM-PS-001-3":{
		name:{ "KOR":"Instant Heal" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"HE-NM-PS-001-4":{
		name:{ "KOR":"Improved Instant Heal" }, class:"치유사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},

	"HE-NM-PS-002":{
		name:{ "KOR":"Fracture Treatment" }, class:"치유사", type:"체위", isDeck:true, rarity:"일반", cost:10, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:회복", "group:타락", "group:결합", "미개선"], related:["HE-NM-PS-002-2"],
		flavorText:{ "KOR":"Sets broken bones and aids in the regeneration of bone tissue.<br>Because a misaligned bone during forced regeneration can easily lead to irreversible permanent disability, the Albion Medical Association recommends setting the bone straight and then waiting for natural healing." },
		hypnoText:{ "KOR":"A patient who can't get it up has appeared!<br>Let's help him get an erection by slowly rubbing it with your pussy.<br>Once he's hard enough, you can move on to penetration...♡" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"combineCard", cond:true, type:"exciteL", target:"self", op:"add", value:1},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:5}, condOmit:true, type:"corrupt",
			info:{
				value:5,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"Is improved." }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-NM-PS-002-2",
					}},
				]
			}},
		]
	},
	"HE-NM-PS-002-2":{
		name:{ "KOR":"Improved Fracture Treatment" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"lewd", op:"add", value:2, repeat:"자신.기록.전체.사용.count(tags, 결합물)"}
		]
	},


	"HE-EX-AT-001":{
		name:{ "KOR":"Holy Explosion" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:타락", "act:삽입"],
		flavorText:{ "KOR":"Gathers holy power into a single point and releases it in all directions.<br>Wicked enemies will vanish without a trace in the sin-cleansing explosion." },
		hypnoText:{ "KOR":"You slam your plump ass down to embrace the cock fucking you from behind.<br>You deliver an unending explosion of pleasure to your opponent." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:4,
				effect:[
					{trigger:"used", cond:true, type:"attack", target:"op"},
				]
			}},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:8,
				effect:[
					{trigger:"used", cond:true, type:"attack", target:"op"},
				]
			}},
		]
	},
	"HE-EX-AT-002":{
		name:{ "KOR":"Heart Pounding" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "act:삽입"],
		flavorText:{ "KOR":"You grant yourself vitality to gather strength.<br>The overflowing life force increases your destructive power." },
		hypnoText:{ "KOR":"A technique to grind your hips while your genitals are joined.<br>As the cock repeatedly slides in and out of the junction, the pleasure grows ever greater." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"specialV10"},
			{trigger:"used", cond:true, type:"specialA19", repeat:2},
		]
	},
	"HE-EX-AT-003":{
		name:{ "KOR":"Artificial Essence Extraction" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:정수", "act:펠라치오"],
		flavorText:{ "KOR":"To overcome the instability of natural healing and the limited versatility of holy healing, the biotech healing method 'medicine,' based on systematic and logical knowledge, was born.<br>Also known as artificial healing, this method provides a safe recovery with no aftereffects, even if the healing speed is slow." },
		hypnoText:{ "KOR":"A technique to deep-throat a cock, sucking it all the way down.<br>When your opponent cums, you must swallow it all and never spit it out." },
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"자기덱.selectCards(tags, 정수, 2)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"HE-EX-AT-004":{
		name:{ "KOR":"Whisper of the Soul" }, class:"치유사", type:"공격", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:결합"],
		flavorText:{ "KOR":"As a profession that saves lives, a healer is paradoxically closest to death.<br>It shares some techniques with necromancy, but as long as one does not fall to corruption, it can be used for healing." },
		hypnoText:{ "KOR":"A conversation between your opponent's cock and your pussy.<br>The stronger the bond, the deeper the relationship becomes." },
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"자신.기록.전체.결합.length"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.결합.length"},
		]
	},

	"HE-EX-SU-001":{
		name:{ "KOR":"Prayer of Revival" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:회복"],
		flavorText:{ "KOR":"Women with powerful holy abilities are consistently born into the Lightweaver clan.<br>Their prayers are twice as effective as those of ordinary believers, so the Leia religion reveres them as saints." },
		hypnoText:{ "KOR":"A technique to show your opponent you masturbating.<br>It enhances the pleasure of orgasm, allowing for a more satisfying sexual experience." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-EX-SU-001-1"}
		]
	},
	"HE-EX-SU-001-1":{
		parents:"HE-EX-SU-001",
		name:{ "KOR":"Revival" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true, meet:{v1:"자신.기록.최근.이벤트.절정", op:">", v2:0},
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.최근.이벤트.절정", op:">", v2:0}, type:"exciteL", target:"self", op:"multiply", value:2},
		]
	},
	"HE-EX-SU-002":{
		name:{ "KOR":"Illusory Aura" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:하프만", "group:타락", "group:결합", "group:정수"],
		flavorText:{ "KOR":"Even if the power a healer wields has healing properties, it is not always good.<br>The 'Cult of the Chosen,' a cult mainly followed by Halfmen, often obtains evil magic through prayer due to their worship of the evil god Morvain." },
		hypnoText:{ "KOR":"A technique to fill your pussy to the brim with cum.<br>The cum that squirts out when you flex makes you look incredibly vulgar." },
		effect:[
			{trigger:"choice", cond:true, range:{category:"mix", value:"all", count:2}, type:"combine", target:"self", value:"HE-EX-SU-002-1"},
			{trigger:"used", cond:true, type:"corrupt", 
			info:{
				value:6,
				effect:[
					{trigger:"used", cond:true, type:"use", target:"self", value:"derived"},
				]
			}},
		]
	},
	"HE-EX-SU-002-1":{
		parents:"HE-EX-SU-002",
		name:{ "KOR":"Illusory Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-EX-SU-003":{
		name:{ "KOR":"Comprehensive Prescription" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:실바니", "group:회복", "group:결합", "group:정수"],
		flavorText:{ "KOR":"Combine multiple medicinal ingredients to brew the necessary potion.<br>Even for similar illnesses, different ingredients must be used depending on the exact symptoms." },
		hypnoText:{ "KOR":"A technique to spread your pussy and show the mixture of cum and bodily fluids flowing out.<br>Let's carefully feed the product of your love to your partner." },
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-3},
			{trigger:"choice", cond:true, range:{category:"tags", value:"정수", count:3}, type:"combine", target:"self", value:"HE-EX-SU-003-1"}
		]
	},
	"HE-EX-SU-003-1":{
		parents:"HE-EX-SU-003",
		name:{ "KOR":"Complex Essence Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},
	"HE-EX-SU-004":{
		name:{ "KOR":"First Aid" }, class:"치유사", type:"보조", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true, meet:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0},
		tags:["덱빌딩", "race:실바니", "group:회복"],
		flavorText:{ "KOR":"Take swift preliminary measures to ensure a critically injured patient survives until proper treatment can be administered.<br>The survival rate changes drastically depending on whether first aid was given in time." },
		hypnoText:{ "KOR":"A technique to maintain a state of being on the verge of orgasm but not quite getting there through edge control.<br>It teases the body to maximize the pleasure of orgasm." },
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"HE-EX-SU-004-1"},
			{trigger:"used", cond:{v1:"자신.기록.최근.이벤트.흥분.감소", op:">", v2:0}, type:"state", target:"self", value:"HE-EX-SU-004-2"},
		]
	},
	"HE-EX-SU-004-1":{
		parents:"HE-EX-SU-004",
		name:{ "KOR":"Emergency Healing" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"exciteL", target:"self", op:"add", value:2},
		]
	},
	"HE-EX-SU-004-2":{
		parents:"HE-EX-SU-004",
		name:{ "KOR":"Successful Treatment" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"always", cond:true, type:"orgasmBan", target:"self"},
		]
	},

	"HE-EX-PS-001":{
		name:{ "KOR":"Poison Treatment" }, class:"치유사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:엘도리아인", "group:타락", "group:결합", "group:정수", "미개선"], related:["HE-EX-PS-001-2"],
		flavorText:{ "KOR":"A healing method that purifies blood contaminated by poison and helps expel the toxins from the body.<br>You must analyze the type of poison and its absorption route in the body to create and administer an antidote in time." },
		hypnoText:{ "KOR":"A patient whose toxins can't be released due to a buildup of cum has been found!<br>Let's quickly detoxify them by sucking it out with your mouth.<br>If one mouth isn't enough... use your pussy too♡" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"get", target:"self", value:"randomCard(tags, 정수)"},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:4}, condOmit:true, type:"corrupt",
			info:{
				value:6,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"Is improved." }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-EX-PS-001-2",
					}},
				]
			}},
		]
	},
	"HE-EX-PS-001-2":{
		name:{ "KOR":"Improved Poison Treatment" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:{v1:"자기덱.count(tags, 정수)", op:">=", v2:2}, condOmit:true, type:"combine", target:"self",  info:{target:"자기덱.selectCards(tags, 정수, 2)"}, value:"HE-NM-SU-003-1"},
		]
	},

	"HE-EX-PS-002":{
		name:{ "KOR":"Infection Treatment" }, class:"치유사", type:"체위", isDeck:true, rarity:"숙련", cost:15, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:타락", "미개선"], related:["HE-EX-PS-002-2"],
		flavorText:{ "KOR":"A healing method that eliminates bacteria from the infected area and reduces inflammation.<br>A folk remedy based on natural healing involves infusing the problem area with a high density of life force along with herbs." },
		hypnoText:{ "KOR":"Perform a healing method that uses a tentacle creature to remove toxins.<br>This is purely a medical procedure, not a lewd act.<br>Tentacle sex... I love it so much♡" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnStart", cond:true, type:"changeCorrupt", op:"add", value:1},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:8}, condOmit:true, type:"corrupt",
			info:{
				value:8,
				effect:[
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"Is improved." }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-EX-PS-002-2",
					}},
				]
			}},
		]
	},
	"HE-EX-PS-002-2":{
		name:{ "KOR":"Improved Infection Treatment" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"개선치료"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"lewd", op:"set", value:"타락", division:2},
		]
	},


	"HE-UL-AT-001":{
		name:{ "KOR":"Life Force Rampage" }, class:"치유사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:회복", "act:펠라치오"],
		flavorText:{ "KOR":"Because the human body has a limit to what it can handle, more life force is not always better.<br>A healer who uses natural healing can actually attack an opponent by granting them life force.<br>The overflowing life force cannot be dissipated and causes the body to go rampant, eventually leading to necrosis of the affected area." },
		hypnoText:{ "KOR":"A technique to have your throat used as an onahole, with a cock rammed into it.<br>Even if you feel like you're going to suffocate and pass out, you are not allowed to stop until your opponent has a satisfying ejaculation." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"생명력폭주"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1, repeat:"자신.기록.전체.이벤트.흥분.감소"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.이벤트.흥분.감소"},
		]
	},

	"HE-UL-AT-002":{
		name:{ "KOR":"Mass Purification" }, class:"치유사", type:"공격", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:트라이브", "group:타락", "act:애무"],
		flavorText:{ "KOR":"One day, a divine being descended in the middle of the Great Forest, and those who gathered to worship it as the incarnation of the forest. That was the beginning of the Golden Bough faith.<br>In the place where that being, who asked to be called Rea, visited, golden trees still grow, filled with holy power.<br>The practitioners of the Golden Bough faith carry staves made from the branches of those trees and wander the world to purify its evil beings, following the will of the one they believe in." },
		hypnoText:{ "KOR":"A technique to be surrounded by multiple cocks and become a public fleshlight.<br>You must fulfill your duty as a toilet, busily working your hands to make them cum on your body." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"대규모정화"},
			{trigger:"used", cond:true, type:"corrupt",
			info:{
				value:7,
				effect:[
					{trigger:"used", cond:true, type:"orgasm", target:"op"}
				]
			}},
			{trigger:"used", cond:true, type:"corrupt",
			info:{
				value:10,
				effect:[
					{trigger:"used", cond:true, adverb:"추가로", type:"orgasm", target:"op"}
				]
			}},
		]
	},

	"HE-UL-SU-001":{
		name:{ "KOR":"Aura of All Things" }, class:"치유사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "결합", "race:하프만", "group:결합"],
		flavorText:{ "KOR":"Alchemy was originally a pseudoscience that originated in the Halfman slums.<br>This discipline, which began with those who had no magical talent or resources refusing to give up and finding ways to produce similar effects, has had a profound impact on various fields such as pharmacology, engineering, biology, and metallurgy.<br>It still holds immense potential, and the notion that untalented mages run away to alchemy is a thing of the past." },
		hypnoText:{ "KOR":"A technique to become a cum tank whose role is to receive everyone's semen.<br>The cum sprayed all over your body makes you treated like an onahole cum-dumpster for sexual release." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"만물의오라"},
			{trigger:"choice", cond:true, range:{category:"all", value:"사용가능", count:3}, type:"combine", target:"self", value:"HE-UL-SU-001-1"},
		]
	},
	"HE-UL-SU-001-1":{
		parents:"HE-UL-SU-001",
		name:{ "KOR":"Combination of All Things" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},

	"HE-UL-SU-002":{
		name:{ "KOR":"Elixir of Immortality" }, class:"치유사", type:"보조", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:하프만", "group:정수"], related:["HE-IN-999"], keywords:["타락n"],
		flavorText:{ "KOR":"The alchemy branch of the Lapis Lazuli Academy presented the five grand challenges as the ultimate goal for alchemists.<br>Perpetual motion, time reversal, creation of intelligent life, immortality, and the creation of gold—any of which, if realized, could change the very fabric of the world.<br>Among them, many attempt immortality, and the greed to be able to challenge the other studies as well if they could transcend the limits of their lifespan becomes the reason they ruin their own bodies with excessive experiments." },
		hypnoText:{ "KOR":"A technique to drink a dangerous drug to become a true onahole.<br>Your brain will be fried by pleasure, and you will no longer be able to live as a human, but at least you will be happy." },
		effect:[
			{trigger:"used", cond:true, type:"line", value:"불로불사의약-1"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
			{trigger:"used", cond:true, type:"get", target:"self", value:"HE-IN-999"},
		]
	},
	"HE-IN-999":{
		name:{ "KOR":"Essence of Eternity" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:false,
		tags:["정수"],
		effect:[
			{trigger:"used", cond:true, type:"changeCond", target:"self", value:"corrupted"},
			{trigger:"used", cond:true, type:"line", value:"불로불사의약-2"},
			{trigger:"used", cond:true, type:"attack", target:"op", keepLine:true},
			{trigger:"used", cond:true, adverb:"그리고", type:"get", target:"self", value:"self"}
		]
	},

	"HE-UL-PS-001":{
		name:{ "KOR":"Psychotherapy" }, class:"치유사", type:"체위", isDeck:true, rarity:"궁극", cost:20, owner:1,
		cond:true,
		tags:["덱빌딩", "race:실바니", "group:회복", "group:타락", "미개선"], related:["HE-UL-PS-001-2"],
		flavorText:{ "KOR":"The Albion Medical Association is a pan-national medical institution founded by the former military doctor and Sylvani physician, Hie Ji.<br>Following her philosophy of prioritizing the saving of lives, it researches and publishes systematic healing methods, making them available for anyone to learn.<br>Currently, it has expanded the horizons of the medical field by establishing concepts for mental illnesses in addition to physical injuries." },
		hypnoText:{ "KOR":"For some reason, there is still a resistance to sex in your heart.<br>As a female, this mental defect must be treated immediately!" },
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"정신치료-1"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"absorption", target:"self"},
			{trigger:"turnEnd", cond:{v1:"타락", op:">=", v2:5}, condOmit:true, type:"corrupt",
			info:{
				value:5,
				effect:[
					{trigger:"used", cond:true, type:"line", value:"정신치료-2"},
					{trigger:"none", cond:true, type:"text", value:{ "KOR":"Is improved." }},
					{trigger:"used", notext:true, cond:true, type:"transform", target:"self",
					info:{
						target:"self",
						value:"HE-UL-PS-001-2",
					}},
				]
			}},
		]
	},
	"HE-UL-PS-001-2":{
		name:{ "KOR":"Improved Psychotherapy" }, class:"치유사", type:"체위", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["개선됨"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"정신치료-2"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"always", cond:true, type:"specialA10"}
		]
	},

//#######################################################################################################################################################################################

	"BN-EL-001":{
		name:{ "KOR":"Wild Card" }, class:"중립", type:"만능", isDeck:true, rarity:"없음", race:"엘도리아인", cost:10, owner:1, nochange:true,
		cond:true,
		tags:["보너스", "불가침"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Choose a card to replace this with." }},
		]
	},


	"BN-SY-001":{
		name:{ "KOR":"Engineering: Mekarylon" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"none", cond:false, type:"text", value:{ "KOR":"Gain the resources of the selected profession." }},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"전사"}, type:"changeLust", op:"add", value:5},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"전사"}, type:"caption", value:{ "KOR":"<b>Desire +5</b>" }},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"암살자"}, type:"changeWetness", op:"add", value:5},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"암살자"}, type:"caption", value:{ "KOR":"<b>Wetness +5</b>" }},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"마술사"}, type:"changeSBlock", op:"add", value:4},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"마술사"}, type:"caption", value:{ "KOR":"<b>Sensory Deprivation +4</b>" }},
			{trigger:"used", notext:true, cond:{v1:"커스텀.직업", op:"==", v2:"치유사"}, type:"changeCorrupt", op:"add", value:2},
			{trigger:"none", cond:{v1:"커스텀.직업", op:"==", v2:"치유사"}, type:"caption", value:{ "KOR":"<b>Corruption +2</b>" }},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"BN-SY-002":{
		name:{ "KOR":"Magic: Manachron" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"used", cond:true, type:"useTimes", target:"self", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"BN-SY-003":{
		name:{ "KOR":"History: Artheron" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"used", cond:true, type:"get", target:"self", value:"자신.기록.이전.사용.selectCards(all, null, all)"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},
	"BN-SY-004":{
		name:{ "KOR":"Astrology: Celesthron" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"], related:["tag:초월"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"self", value:"BN-SY-004-1"}
		]
	},
	"BN-SY-004-1":{
		parents:"BN-SY-004",
		name:{ "KOR":"Foresight" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", race:"실바니", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["불가침"],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"expired", cond:true, type:"get", target:"self", value:"randomCard(tags, 초월)"}
		]
	},
	"BN-SY-005":{
		name:{ "KOR":"Medicine: Elixaris" }, class:"중립", type:"비전", isDeck:true, rarity:"없음", race:"실바니", cost:15, owner:1,
		cond:true,
		tags:["보너스", "불가침", "비전"],
		effect:[
			{trigger:"used", cond:true, type:"orgasmL", target:"self", op:"add", value:1},
			{trigger:"used", cond:true, type:"state", target:"self", value:"BN-SY-005-1"},
		]
	},
	"BN-SY-005-1":{
		parents:"BN-SY-005",
		name:{ "KOR":"Death Is Not Permitted" }, class:"중립", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		expiration:"turnEnd", duration:1,
		tags:[],
		effect:[
			{trigger:"always", cond:true, type:"immune", target:"self"},
		]
	},


	"BN-HA-001":{
		name:{ "KOR":"Custom Card" }, class:"중립", type:"수제", isDeck:true, rarity:"없음", race:"하프만", cost:0, owner:1,
		cond:true,
		tags:["보너스", "불가침"],
		stack:1,
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"You can choose the effects and craft it as you wish." }},
		]
	},
	"BN-HA-001-1":{
		parents:"BN-HA-001",
		name:{ "KOR":"Life Drain" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"absorption", target:"self"},
		]
	},
	"BN-HA-001-2":{
		parents:"BN-HA-001",
		name:{ "KOR":"Custom Combination" }, class:"치유사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["결합물"],
		effect:[
		]
	},


	"BN-TR-001":{
		name:{ "KOR":"Unyielding Spirit" }, class:"전사", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:{v1:"자신.기록.전체.버림.count(type, 패널티)", op:">=", v2:6},
		tags:["보너스", "불가침", "시련"],
		effect:[
			{trigger:"used", cond:true, type:"victory", target:"self"},
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.버림.count(type, 패널티)"},
		]
	},		
	"BN-TR-002":{
		name:{ "KOR":"The Final Mission" }, class:"암살자", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:{v1:"자신.기록.전체.사용.countType(all)", op:">=", v2:14},
		tags:["보너스", "불가침", "시련"],
		effect:[
			{trigger:"none", cond:true, type:"showValue", value:"자신.기록.전체.사용.countType(all)"},
			{trigger:"used", cond:true, type:"victory", target:"self"},
		]
	},
	"BN-TR-003":{
		name:{ "KOR":"Prophecy of the End" }, class:"마술사", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:true,
		tags:["보너스", "불가침", "시련"], related:["BN-TR-003-1", "BN-TR-003-2", "BN-TR-003-3", "BN-TR-003-4"],
		effect:[
			{trigger:"used", cond:true, type:"specialA18"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"BN-TR-003-1",},
		]
	},
	"BN-TR-003-1":{
		name:{ "KOR":"Prologue: Harbinger of Doom" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["시련", "불가침"], related:["BN-TR-003-2", "BN-TR-003-3", "BN-TR-003-4"], keywords:["생성됨"],
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"서막조건", count:1}, type:"transform", target:"self",
			info:{
				value:"BN-TR-003-2",
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"BN-TR-003-2":{
		name:{ "KOR":"Interlude: The Coming Calamity" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["시련", "불가침"], related:["BN-TR-003-3", "BN-TR-003-4"],
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"중막조건", count:1}, type:"transform", target:"self",
			info:{
				value:"BN-TR-003-3",
			}},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"BN-TR-003-3":{
		name:{ "KOR":"Epilogue: The Final Day" }, class:"마술사", type:"보조", isDeck:true, rarity:"없음", race:"트라이브", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["시련", "불가침"], related:["BN-TR-003-4"],
		effect:[
			{trigger:"choice", cond:true, range:{category:"tags", value:"종막조건", count:1}, type:"transform", target:"self",
			info:{
				value:"BN-TR-003-4",
			}},
		]
	},

	"BN-TR-003-4":{
		parents:"BN-TR-003",
		name:{ "KOR":"Ending: Overcoming Fate" }, class:"마술사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true, noInherit:true,
		cond:true,
		tags:["시련", "불가침"],
		effect:[
			{trigger:"used", cond:true, type:"victory", target:"self"},
		]
	},

	"BN-TR-004":{
		name:{ "KOR":"Crossroads of Life and Death" }, class:"치유사", type:"시련", isDeck:true, rarity:"없음", race:"트라이브", cost:20, owner:1,
		cond:true,
		tags:["보너스", "불가침", "시련"],
		effect:[
			{trigger:"used", cond:true, type:"maxRound", value:2},
			{trigger:"used", cond:true, type:"orgasmL", target:"self", op:"add", value:-1},
			{trigger:"used", cond:true, type:"state", target:"self", value:"BN-TR-004-1"}
		]
	},
	"BN-TR-004-1":{
		parents:"BN-TR-004",
		name:{ "KOR":"Golden Hour" }, class:"치유사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["시련", "불가침"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Win the duel if time runs out." }},
		]
	},

//#######################################################################################################################################################################################

	"PN-001":{
		name:{ "KOR":"Penalty: Masturbation Addiction" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-15, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:true, type:"line", value:"자위"},
			{trigger:"turnEnd", inDeck:true, cond:true, type:"excite", op:"add", target:"self", value:1},
		]
	},
	"PN-002":{
		name:{ "KOR":"Penalty: Ahegao" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"lewd", op:"add", value:-1},
		]
	},
	"PN-003":{
		name:{ "KOR":"Penalty: In Heat" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"estrus", op:"add", value:1},
		]
	},
	"PN-004":{
		name:{ "KOR":"Penalty: Urination" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:true, type:"line", value:"방뇨"},
			{trigger:"turnEnd", inDeck:true, cond:{v1:"상대.흥분", op:">", v2:0}, condOmit:true, type:"excite", target:"op", op:"add", value:-2},
		]
	},
	"PN-005":{
		name:{ "KOR":"Penalty: Moaning" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-10, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"exciteL", target:"op", op:"add", value:2},
		]
	},
	"PN-006":{
		name:{ "KOR":"Penalty: Squirting" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-15, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"penaltyMustUse", target:"self"},
		]
	},
	"PN-007":{
		name:{ "KOR":"Penalty: Erogenous Zone Development" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-15, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"exciteL", target:"self", op:"add", value:-1},
		]
	},
	"PN-008":{
		name:{ "KOR":"Penalty: Masochism" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-10, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"always", inDeck:true, cond:true, type:"orgasmL", target:"self", op:"add", value:-1},
		]
	},
	"PN-009":{
		name:{ "KOR":"Penalty: Sexual Frustration" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:-5, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:{v1:"라운드", op:">=", v2:6}, type:"defeat", target:"self"},
		]
	},
	"PN-010":{
		name:{ "KOR":"Penalty: Surrender" }, class:"패널티", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["덱빌딩"],
		effect:[
			{trigger:"used", cond:true, type:"defeat", target:"self"},
		]
	},


//#######################################################################################################################################################################################

	"B1-PA-001":{
		name:{ "KOR":"Aphrodisiac Cum" }, class:"고블린즈", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["B1-PN-001"],
		expiration:"always", duration:Infinity,
		effect:[
			//{trigger:"turnEnd", cond:true, type:"line", value:"고블린정액-1"},
			{trigger:"turnEnd", cond:true, type:"get", target:"op", value:"B1-PN-001"},
		]
	},
	"B1-PN-001":{
		name:{ "KOR":"Goblin Cum" }, class:"고블린즈", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린정액-2"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B1-UC-001":{
		name:{ "KOR":"Clothes Ripping" }, class:"고블린즈", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"옷찢기"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"get", target:"op", value:"randomCard(type, 패널티)"},
		]
	},
	"B1-AT-001":{
		name:{ "KOR":"Breast Squeezing" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B1-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"가슴쥐어짜기"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"덱.count(id, B1-PN-001)", op:">", v2:0}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B1-AT-002":{
		name:{ "KOR":"Double Penetration" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"],
		effect:[
			{trigger:"used", cond:{v1:"덱.count(type, 패널티)", op:">", v2:0}, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"attack", repeat:"덱.count(type, 패널티)", target:"op"},
		]
	},
	"B1-AT-003":{
		name:{ "KOR":"Deepthroat" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"딥스롯"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B1-AT-003-1"},
			{trigger:"used", cond:{v1:"음란", op:"<", v2:"발정"}, type:"attack", target:"op"},
		]
	},
	"B1-AT-003-1":{
		parents:"B1-AT-003",
		name:{ "KOR":"Breathlessness" }, class:"고블린즈", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"lewd", op:"add", value:-2},
		]
	},
	"B1-AT-004":{
		name:{ "KOR":"Irresponsible Creampie" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:"덱.count(type, 패널티)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B1-SU-001":{
		name:{ "KOR":"Hair Pulling" }, class:"고블린즈", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B1-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"op", value:"B1-PN-001", repeat:2},
		]
	},
	"B1-SU-002":{
		name:{ "KOR":"Mounting" }, class:"고블린즈", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:{v1:"덱.count(type, 패널티)", op:">=", v2:3}, type:"line", value:"탑승"},
			{trigger:"used", cond:{v1:"덱.count(type, 패널티)", op:">=", v2:3}, type:"orgasm", target:"op"},
		]
	},

	"B1-PA-001+":{
		parents:"B1-PA-001",
		name:{ "KOR":"Aphrodisiac Cum+" }, class:"고블린즈", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B1-PN-001"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"op", value:"B1-PN-001", repeat:2},
		]
	},

	"B1-UC-001+":{
		parents:"B1-UC-001",
		name:{ "KOR":"Clothes Ripping+" }, class:"고블린즈", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"옷찢기"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"get", target:"op", repeat:2, value:"randomCard(type, 패널티)"},
		]
	},
	"B1-AT-002+":{
		parents:"B1-AT-002",
		name:{ "KOR":"Double Penetration+" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", adverb:"추가로", repeat:"상대덱.count(type, 패널티)", target:"op"},
		]
	},

	"B1-AT-005":{
		name:{ "KOR":"Gangbang" }, class:"고블린즈", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고블린삽입"},
			{trigger:"used", cond:true, type:"attack", repeat:"자신.남은절정", target:"op"},
		]
	},

	//

	"B2-PA-001":{
		name:{ "KOR":"Hypnotic Brainwashing" }, class:"마을사람", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["B2-PA-001-1", "B2-PA-001-2"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"gameStart", cond:true, type:"line", value:"최면석판"},
			{trigger:"gameStart", cond:true, type:"state", target:"op", byname:true, value:"B2-PA-001-1"},
		]
	},
	"B2-PA-001-1":{
		//parents:"B2-PA-001",
		name:{ "KOR":"Attack Prohibition" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"], related:["B2-PA-001-2"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useAttack", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-2",
			}},
		]
	},
	"B2-PA-001-2":{
		//parents:"B2-PA-001",
		name:{ "KOR":"Defense Prohibition" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"], related:["B2-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useSupport", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-1",
			}},
		]
	},
	"B2-PN-001":{
		name:{ "KOR":"Yes, Master" }, class:"마을사람", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언토큰", "무조건소모", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"네주인님"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"used", cond:true, type:"get", adverb:"그리고", target:"self", value:"original"},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B2-UC-001":{
		name:{ "KOR":"Strip" }, class:"마을사람", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"벗어라"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(all, 패널티제외, 2)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-001":{
		name:{ "KOR":"Masturbate" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 공격, 1)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-002":{
		name:{ "KOR":"Wet Yourself" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 보조, 1)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-004":{
		name:{ "KOR":"Orgasm" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"절정해라"},
			{trigger:"used", cond:{v1:"발정", op:">=", v2:8}, type:"orgasm", target:"op"},
		]
	},
	"B2-SU-001":{
		name:{ "KOR":"Crawl on All Fours" }, class:"마을사람", type:"체위", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"used", cond:true, type:"line", value:"네발로기어라"},
			{trigger:"used", cond:true, type:"posture"},
			{trigger:"turnEnd", cond:true, type:"estrus", op:"add", value:1},
		]
	},
	"B2-SU-002":{
		name:{ "KOR":"Stay Still" }, class:"마을사람", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"움직이지마라"},
			{trigger:"used", cond:true, type:"changeCond", target:"op", value:"blank"},
			{trigger:"used", cond:true, type:"changeCond", target:"op", value:"unconscious", special:true},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B2-SU-002-1"},
		]
	},
	"B2-SU-002-1":{
		parents:"B2-SU-002",
		name:{ "KOR":"Immobilized" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"actBan", target:"self"},
			{trigger:"expired", cond:true, type:"changeCond", target:"self", value:"original", essential:true},
			{trigger:"expired", cond:true, type:"changeCond", target:"self", value:"null", special:true},
		]
	},
	"B2-SU-004":{
		name:{ "KOR":"Cognitive Impairment" }, class:"마을사람", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"인지저해"},
			{trigger:"used", cond:true, type:"discard", target:"op", info:{target:"opDeck.selectCards(type, 패널티, all)"}},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:"상대.기록.이번.버림.count(type, 패널티)"},
		]
	},

	"B2-PA-001+":{
		parents:"B2-PA-001",
		name:{ "KOR":"Hypnotic Brainwashing+" }, class:"마을사람", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B2-PA-001-1+", "B2-PA-001-2+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"gameStart", cond:true, type:"line", value:"최면석판"},
			{trigger:"gameStart", cond:true, type:"state", target:"op", byname:true, value:"B2-PA-001-1+"},
			{trigger:"turnEnd", cond:{v1:"상대.기록.이번.사용.length", op:"==", v2:0}, type:"estrus", op:"add", value:2},
		]
	},
	"B2-PA-001-1+":{
		parents:"B2-PA-001-1",
		name:{ "KOR":"Attack Prohibition+" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "하드전용"], related:["B2-PA-001-2+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useAttack", cond:true, type:"orgasm", target:"self"},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-2+",
			}},
		]
	},
	"B2-PA-001-2+":{
		parents:"B2-PA-001-2",
		name:{ "KOR":"Defense Prohibition+" }, class:"마을사람", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언토큰", "하드전용"], related:["B2-PA-001-1+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"useSupport", cond:true, type:"orgasm", target:"self"},
			{trigger:"turnEnd", cond:true, type:"transform", target:"self",
			info:{
				target:"self",
				value:"B2-PA-001-1+",
			}},
		]
	},

	"B2-UC-001+":{
		parents:"B2-UC-001",
		name:{ "KOR":"Strip+" }, class:"마을사람", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"벗어라"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(all, 패널티제외, 3)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-001+":{
		parents:"B2-AT-001",
		name:{ "KOR":"Masturbate+" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 공격, 2)",
				value:"B2-PN-001",
			}},
		]
	},
	"B2-AT-002+":{
		parents:"B2-AT-002",
		name:{ "KOR":"Wet Yourself+" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B2-PN-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"최면명령"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"transform", target:"op",
			info:{
				target:"opDeck.selectCards(type, 보조, 2)",
				value:"B2-PN-001",
			}},
		]
	},

	"B2-AT-003":{
		name:{ "KOR":"Increase Sensitivity" }, class:"마을사람", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"감도높이기"},
			{trigger:"used", cond:true, type:"estrus", op:"multiply", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	//


	"B3-PA-001":{
		name:{ "KOR":"Innumerable Tentacles" }, class:"촉수슬라임", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["B3-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", byname:true, value:"B3-PA-001-1"},
		]
	},
	"B3-PA-001-1":{
		name:{ "KOR":"Tentacle Insertion" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언토큰", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B3-UC-001":{
		name:{ "KOR":"Clothes-Melting Slime" }, class:"촉수슬라임", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"옷을녹이는점액"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"lewd", op:"set", value:1},
		]
	},
	"B3-AT-001":{
		name:{ "KOR":"Internal Churning" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"음란", op:"<=", v2:2}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B3-AT-003":{
		name:{ "KOR":"Throat Invasion" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:-1},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
		]
	},
	"B3-AT-004":{
		name:{ "KOR":"Wriggling Tentacles" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B3-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B3-PA-001-1"},
		]
	},
	"B3-SU-001":{
		name:{ "KOR":"Restraining Tentacles" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"구속촉수"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:-3},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-2},
		]
	},
	"B3-SU-002":{
		name:{ "KOR":"Saliva Ingestion" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타액섭취"},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-10},
		]
	},
	"B3-SU-003":{
		name:{ "KOR":"Protective Slime Secretion" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"보호점액분비"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"B3-SU-003-1"},
		]
	},
	"B3-SU-003-1":{
		parents:"B3-SU-003",
		name:{ "KOR":"Protective Slime" }, class:"촉수슬라임", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"immune", target:"self"},
		]
	},

	"B3-PA-001+":{
		parents:"B3-PA-001",
		name:{ "KOR":"Innumerable Tentacles+" }, class:"촉수슬라임", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B3-PA-001-1+"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"get", target:"self", byname:true, value:"B3-PA-001-1+"},
			{trigger:"always", cond:true, type:"insensitive", target:"self"},
		]
	},
	"B3-PA-001-1+":{
		parents:"B3-PA-001-1",
		name:{ "KOR":"Tentacle Insertion+" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언토큰", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:1},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-10},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1},
		]
	},

	"B3-AT-001+":{
		name:{ "KOR":"Internal Churning+" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		parents:"B3-AT-001",
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"음란", op:"<=", v2:4}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B3-SU-002+":{
		parents:"B3-SU-002",
		name:{ "KOR":"Saliva Ingestion+" }, class:"촉수슬라임", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타액섭취"},
			{trigger:"used", cond:true, type:"excite", target:"self", op:"set", value:0},
		]
	},

	"B3-AT-002":{
		name:{ "KOR":"Slime Ejaculation" }, class:"촉수슬라임", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"], related:["B3-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"촉수공격"},
			{trigger:"used", cond:true, type:"state", target:"self", value:"B3-SU-003-1"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	//

	"B4-PA-001":{
		name:{ "KOR":"Damn Brat" }, class:"악동", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"estrus", op:"set", value:"stack"},
		]
	},
	"B4-UC-001":{
		name:{ "KOR":"Mischievous Prank" }, class:"악동", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"짓궂은장난"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:{v1:"상대.기록.이번.사용.length", op:">", v2:0}, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1},
		]
	},
	"B4-AT-001":{
		name:{ "KOR":"I Wanna Touch Your Boobs" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"가슴만지고싶어"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:3},
		]
	},
	"B4-AT-002":{
		name:{ "KOR":"Hug Me" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"안아줘"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"음란"},
		]
	},
	"B4-AT-004":{
		name:{ "KOR":"You're My Toy" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"누나는장난감이야"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"발정"},
		]
	},
	"B4-SU-001":{
		name:{ "KOR":"Now You're It" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"이제누나가술래야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1, keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-002":{
		name:{ "KOR":"Loser Gets a Punishment" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"지면벌칙이야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1, keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-003":{
		name:{ "KOR":"Teasing" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.사용.length", op:">=", v2:2},
		tags:["챔피언덱", "노말전용"], related:["B4-PA-001"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약올리기"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001"}, op:"add", value:1, keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},

	"B4-PA-001+":{
		parents:"B4-PA-001",
		name:{ "KOR":"Damn Brat+" }, class:"악동", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:0,
		effect:[
			{trigger:"turnStart", cond:true, type:"estrus", op:"add", value:"stack"},
		]
	},
	"B4-UC-001+":{
		parents:"B4-UC-001",
		name:{ "KOR":"Mischievous Prank+" }, class:"악동", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"짓궂은장난"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1},
		]
	},
	"B4-AT-004+":{
		parents:"B4-AT-004",
		name:{ "KOR":"You're My Toy+" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"누나는장난감이야"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"실제발정"},
		]
	},
	"B4-SU-001+":{
		parents:"B4-SU-001",
		name:{ "KOR":"Now You're It+" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"이제누나가술래야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1, keepLine:true},
			{trigger:"used", cond:true, type:"get", target:"self", value:"self", adverb:"그리고", keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-002+":{
		parents:"B4-SU-002",
		name:{ "KOR":"Loser Gets a Punishment+" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.이벤트.절정", op:">", v2:0},
		tags:["챔피언덱"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"지면벌칙이야"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1, keepLine:true},
			{trigger:"used", cond:true, type:"get", target:"self", value:"self", adverb:"그리고", keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},
	"B4-SU-003+":{
		parents:"B4-SU-003",
		name:{ "KOR":"Teasing+" }, class:"악동", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:{v1:"상대.기록.이전.사용.length", op:">=", v2:2},
		tags:["챔피언덱", "하드전용"], related:["B4-PA-001+"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약올리기"},
			{trigger:"used", cond:true, type:"stack", info:{target:"id:B4-PA-001+"}, op:"add", value:1, keepLine:true},
			{trigger:"used", cond:true, type:"get", target:"self", value:"self", adverb:"그리고", keepLine:true},
			{trigger:"selected", cond:true, type:"maxUse", target:"self", value:1}
		]
	},

	"B4-AT-003":{
		name:{ "KOR":"Play With Me" }, class:"악동", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"놀아줘"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"라운드"},
		]
	},

	//

	"B5-PA-001":{
		name:{ "KOR":"Massive Erection" }, class:"타우로스", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"always", cond:{v1:"자신.기록.이번.이벤트.절정", op:">", v2:0}, type:"enemyDisable"},
		]
	},
	"B5-UC-001":{
		name:{ "KOR":"Armor Break" }, class:"타우로스", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"방어구파괴"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:"체위", type:"posture", value:"remove"},
		]
	},
	"B5-AT-001":{
		name:{ "KOR":"Sexual Release" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타우로스울음"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"attack", target:"self"},
		]
	},
	"B5-AT-002":{
		name:{ "KOR":"Lift and Fuck" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"타우로스울음"},
			{trigger:"used", cond:true, type:"estrusAndLewd", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B5-SU-001":{
		name:{ "KOR":"Courtship" }, class:"타우로스", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"구애"},
			{trigger:"used", cond:true, type:"estrusAndLewd", op:"add", value:3},
		]
	},
	/*"B5-PN-001":{
		name:{ "KOR":"Rest" }, class:"타우로스", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"always", inDeck:true, cond:{v1:"자신.기록.이전.이벤트.절정", op:">", v2:0}, type:"penaltyMustUse", target:"self"},
		]
	},*/

	"B5-PA-001+":{
		parents:"B5-PA-001",
		name:{ "KOR":"Massive Erection+" }, class:"타우로스", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"turnEnd", cond:true, type:"estrus", op:"add", value:2},
		]
	},
	"B5-UC-001+":{
		parents:"B5-UC-001",
		name:{ "KOR":"Armor Break+" }, class:"타우로스", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"방어구파괴"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:{v1:"체위", op:"==", v2:false}, type:"estrus", op:"add", value:4},
			{trigger:"used", cond:"체위", type:"posture", value:"remove"},
		]
	},

	"B5-AT-003":{
		name:{ "KOR":"Breeding Press" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"교배프레스"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:2},
		]
	},

	//

	"B6-PA-001":{
		name:{ "KOR":"Proliferation" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:2}, type:"maxUse", target:"self", value:1},
			//{trigger:"turnEnd", cond:true, type:"bound", info:{target:"상대덱.selectCards(all, 포자제외, 1)"}, target:"op", value:"randomCard(tags, 포자)"},
		]
	},
	"B6-PA-001-1":{
		name:{ "KOR":"Aphrodisiac Spores" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Discarded when the bound card is removed." }},
			{trigger:"turnEnd", inDeck:true, cond:true, type:"estrus", op:"add", value:"specialV08"},
		]
	},
	"B6-PA-001-2":{
		name:{ "KOR":"Paralysis Spores" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Discarded when the bound card is removed." }},
			{trigger:"always", inDeck:true, cond:true, type:"lewd", op:"subtract", value:"specialV08"},
		]
	},
	"B6-PA-001-3":{
		name:{ "KOR":"Absorption Spores" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Discarded when the bound card is removed." }},
			{trigger:"turnEnd", inDeck:true, cond:true, type:"excite", target:"self", op:"add", value:2, repeat:"specialV08"},
		]
	},
	"B6-PA-001-4":{
		name:{ "KOR":"Catalyst Spores" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true, priority:1,
		cond:true,
		tags:["포자"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Discarded when the bound card is removed." }},
			{trigger:"always", inDeck:true, cond:true, type:"specialV08", op:"add", value:"specialV08-1"},
		]
	},

	"B6-ST-001":{
		name:{ "KOR":"Spore Infection" }, class:"버섯남자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true, related:["tag:포자"],
		expiration:"active", duration:1,
		tags:["챔피언덱"],
		effect:[
			{trigger:"turnStart", cond:true, type:"bound", info:{target:"자기덱.selectCards(all, 포자제외, 1)"}, target:"self", value:"randomCard(tags, 포자)"},
		]
	},

	"B6-UC-001":{
		name:{ "KOR":"Corrosive Sap" }, class:"버섯남자", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true, related:["B6-ST-001", "tag:포자"],
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"부식즙"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true, repeat:2},
		]
	},
	"B6-AT-001":{
		name:{ "KOR":"Spore-Cum Breeding" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B6-ST-001", "tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"번식"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
		]
	},
	"B6-AT-002":{
		name:{ "KOR":"Nutrient Absorption" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"양분흡수"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"상대덱.count(tags, 포자)"},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B6-AT-002"},
		]
	},
	/*"B6-SU-001":{
		name:{ "KOR":"Parasitic Control" }, class:"버섯남자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"기생조종"},
			{trigger:"used", cond:{v1:"상대덱.count(tags, 포자)", op:">=", v2:3}, type:"orgasm", target:"op"},
		]
	},
	"B6-SU-001-1":{
		parents:"B6-SU-001",
		name:{ "KOR":"Controlled" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"always", cond:true, type:"boundMustUse", target:"self"}
		]
	},*/
	"B6-SU-002":{
		name:{ "KOR":"Territory Expansion" }, class:"버섯남자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B6-ST-001", "tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true},
			{trigger:"used", cond:true, type:"specialV08", value:1}
		]
	},
	"B6-SU-003":{
		name:{ "KOR":"Mental Synchronization" }, class:"버섯남자", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B6-SU-003-2"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"player", value:"B6-SU-003-1"}
		]
	},
	"B6-SU-003-1":{
		parents:"B6-SU-003",
		name:{ "KOR":"Mushroom Hallucination" }, class:"버섯남자", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:2,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"All of the challenger's cards appear as <b>[For the Swarm]</b>." }}
		]
	},
	"B6-SU-003-2":{
		name:{ "KOR":"For the Swarm" }, class:"버섯남자", type:"???", rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Offer your body for the swarm's reproduction." }}
		]
	},

	"B6-PA-001+":{
		parents:"B6-PA-001",
		name:{ "KOR":"Proliferation+" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["B6-ST-001", "tag:포자"],
		expiration:"always", duration:Infinity, stack:1,
		effect:[
			{trigger:"always", cond:{v1:"라운드", op:">=", v2:2}, type:"maxUse", target:"self", value:1},
			{trigger:"turnEnd", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true},
		]
	},
	"B6-UC-001+":{
		parents:"B6-UC-001",
		name:{ "KOR":"Corrosive Sap+" }, class:"버섯남자", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true, related:["B6-ST-001", "tag:포자"],
		tags:["챔피언덱", "하드전용"],
		effect:[
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true, repeat:3},
		]
	},
	"B6-AT-001+":{
		parents:"B6-AT-001",
		name:{ "KOR":"Spore-Cum Breeding+" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B6-ST-001", "tag:포자"],
		effect:[
			{trigger:"used", cond:true, type:"state", target:"op", value:"B6-ST-001", byname:true, repeat:2},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:1},
		]
	},

	"B6-AT-003":{
		name:{ "KOR":"Sowing Seeds" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"씨뿌리기"},
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B6-AT-001", repeat:3},
		]
	},
	"B6-AT-003+":{
		parents:"B6-AT-003",
		name:{ "KOR":"Sowing Seeds+" }, class:"버섯남자", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"], related:["B6-AT-001+"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"op", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"self", value:"B6-AT-001+", repeat:3},
		]
	},

	//

	"B7-PA-001":{
		name:{ "KOR":"Pickup Artist" }, class:"금발양아치", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"The challenger cannot see the played card in advance." }},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"The type is visible." }},
		]
	},
	"B7-PA-001-1":{
		parents:"B7-PA-001",
		name:{ "KOR":"Unknown Action" }, class:"금발양아치", type:"-", rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"I can't read their intentions." }}
		]
	},
	"B7-UC-001":{
		name:{ "KOR":"Skillful Undressing" }, class:"금발양아치", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치탈의"], related:["tag:금발양아치탈의"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"능숙하게벗기기"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"exciteL", target:"op", op:"add", value:-1}
		]
	},
	"B7-AT-001":{
		name:{ "KOR":"Deep Thrusting" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"깊게박아넣기"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"상대.기록.이번.이벤트.자극함", op:">", v2:0}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B7-AT-002":{
		name:{ "KOR":"Gentle Intercourse" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"부드럽게몸을섞기"},
			{trigger:"used", cond:"체위", type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B7-AT-003":{
		name:{ "KOR":"Forcibly Rough" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"강제로거칠게"},
			{trigger:"used", cond:true, type:"attack", target:"op", repeat:"상대.기록.이번.사용.length"},
		]
	},
	"B7-AT-004":{
		name:{ "KOR":"Filling Up" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치공격"], related:["tag:금발양아치공격"],
		effect:[
			{trigger:"used", cond:{v1:"자신.기록.이번.이벤트.절정", op:">", v2:0}, type:"estrus", op:"add", value:3},
			{trigger:"used", cond:true, type:"line", value:"가득채워주기"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	/*"B7-SU-001":{
		name:{ "KOR":"Melting Kiss" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"섞여드는키스"},
			{trigger:"used", cond:true, type:"lewd", op:"add", value:-2},
			{trigger:"used", cond:{v1:"자신.기록.이번.이벤트.흥분.증가", op:"==", v2:0}, type:"estrus", op:"add", value:2},
		]
	},*/
	"B7-SU-002":{
		name:{ "KOR":"Casual Skinship" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"스스럼없는스킨십"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:"specialV06", maxValue:"5"},
		]
	},
	"B7-SU-003":{
		name:{ "KOR":"Spreading Legs" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"다리벌리기"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:{v1:"상대.기록.이번.이벤트.자극함", op:"==", v2:0}, adverb:"추가로", type:"estrus", op:"add", value:2},
		]
	},
	/*"B7-SU-004":{
		name:{ "KOR":"Licking and Sucking" }, class:"금발양아치", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치보조"], related:["tag:금발양아치보조"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"핥고빨기"},
			{trigger:"used", cond:{v1:"발정", op:">", v2:1}, condOmit:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:{v1:"발정", op:"<=", v2:1}, adverb:"대신", type:"estrus", op:"add", value:5},
		]
	},*/

	"B7-PA-001+":{
		parents:"B7-PA-001",
		name:{ "KOR":"Pickup Artist+" }, class:"금발양아치", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"After the challenger acts, chooses and plays the most lethal card." }}
		]
	},
	"B7-PA-001-1+":{
		parents:"B7-PA-001",
		name:{ "KOR":"Unknown Action+" }, class:"금발양아치", type:"???", rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[], related:["tag:금발양아치"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"The card to be played has not yet been decided." }}
		]
	},

	"B7-AT-005":{
		name:{ "KOR":"Engraving Pleasure" }, class:"금발양아치", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "금발양아치클라이맥스", "클라이맥스"], related:["tag:금발양아치클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"쾌락을새겨주기"},
			{trigger:"used", cond:true, type:"orgasm", target:"op"},
		]
	},

	//

	"B8-PA-001":{
		name:{ "KOR":"Submission Training" }, class:"조교사", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "노말전용"], related:["tag:규율", "B8-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"op", value:"randomCard(tags, 규율)"},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"If you submit to the rules, you receive a <b>[Mark of Submission]</b>." }}
		]
	},
	"B8-PA-001-1":{
		name:{ "KOR":"Mark of Submission" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"always", duration:Infinity,
		effect:[
			//{trigger:"none", cond:true, type:"text", value:{ "KOR":"If you collect 4 <b>[Mark of Submission]</b>, you lose." }},
			{trigger:"get", cond:{v1:"자신.상태.count(id, B8-PA-001-1)", op:">=", v2:4}, type:"defeat", target:"self"},
		]
	},


	"B8-PA-001-2":{
		name:{ "KOR":"Do Not Resist" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 공격)", op:"==", v2:0}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.count(type, 공격)", op:"!=", v2:0}, type:"shake"},
		]
	},
	"B8-PA-001-3":{
		name:{ "KOR":"Do Not Judge" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.length", op:"==", v2:1}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자신.기록.이번.사용.length", op:"!=", v2:1}, type:"shake"},
		]
	},
	"B8-PA-001-4":{
		name:{ "KOR":"Engrave Pain onto the Body" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자기덱.count(type, 패널티)", op:">", v2:0}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자기덱.count(type, 패널티)", op:"==", v2:0}, type:"shake"},
		]
	},
	"B8-PA-001-5":{
		name:{ "KOR":"Be Obedient to Commands" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"음란", op:"<=", v2:3}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"음란", op:">", v2:3}, type:"shake"},
		]
	},
	"B8-PA-001-6":{
		name:{ "KOR":"Know Your Place" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["규율"], related:["B8-PA-001-1"],
		expiration:"turnEnd", duration:1,
		effect:[
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:">", v2:0}, type:"state", target:"self", value:"B8-PA-001-1", byname:true},
			{trigger:"turnEnd", cond:{v1:"자신.흥분", op:"==", v2:0}, type:"shake"},
		]
	},

	"B8-UC-001":{
		name:{ "KOR":"Attire Correction" }, class:"조교사", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-UC-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"복장교정"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"get", target:"op", value:"B8-UC-001-1"},
		]
	},
	"B8-UC-001-1":{
		name:{ "KOR":"Desperate Resistance" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:1, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"필사적인저항"},
			{trigger:"used", cond:true, type:"remove", target:"self", info:{target:"자신.상태.selectCards(id, B8-PA-001-1, 2)"}},
		]
	},

	"B8-AT-001":{
		name:{ "KOR":"Pleasure Training" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"쾌락조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:{v1:"상대.흥분", op:"==", v2:0}, adverb:"추가로", type:"attack", target:"op"},
		]
	},
	"B8-AT-002":{
		name:{ "KOR":"Drug Training" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["tag:약물"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약물조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"randomCard(tags, 약물)"},
		]
	},
	"B8-AT-003":{
		name:{ "KOR":"Torture Training" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "노말전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고문조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-AT-003-1"},
		]
	},
	"B8-AT-003-1":{
		parents:"B8-AT-003",
		name:{ "KOR":"Torture Aftermath" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[], related:["패널티"],
		expiration:"active", duration:1,
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"B8-SU-001":{
		name:{ "KOR":"Hope Torture" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"excite", target:"self", op:"add", value:-5},
			{trigger:"used", cond:{v1:"자신.기록.이번.이벤트.흥분.감소", op:">", v2:0}, type:"state", target:"op", value:"B8-PA-001-1", byname:true},
		]
	},
	"B8-SU-002":{
		name:{ "KOR":"Erogenous Zone Training" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"성감대조교"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"state", target:"self", value:"B8-SU-002-1"},
		]
	},
	"B8-SU-002-1":{
		parents:"B8-SU-002",
		name:{ "KOR":"Development Complete" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"turnEnd", duration:3,
		effect:[
			{trigger:"expired", cond:true, type:"state", target:"op", value:"B8-PA-001-1", byname:true}
		]
	},
	"B8-SU-003":{
		name:{ "KOR":"Whipping" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"채찍질"},
			{trigger:"used", cond:{v1:"발정", op:"<=", v2:2}, type:"state", target:"op", value:"B8-PA-001-1", byname:true},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:3},
		]
	},

	"B8-PA-001+":{
		parents:"B8-PA-001",
		name:{ "KOR":"Submission Training+" }, class:"조교사", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "하드전용"], related:["tag:규율", "B8-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"state", target:"op", value:"randomCard(tags, 규율)", repeat:2},
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"If you submit to the rules, you receive a <b>[Mark of Submission]</b>." }}
		]
	},
	"B8-UC-001+":{
		parents:"B8-UC-001",
		name:{ "KOR":"Attire Correction+" }, class:"조교사", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B8-UC-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"복장교정"},
			{trigger:"used", cond:true, type:"clothes", value:"uncloth"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
		]
	},
	"B8-AT-002+":{
		parents:"B8-AT-002",
		name:{ "KOR":"Drug Training+" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["tag:약물", "B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"약물조교"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"randomCard(tags, 약물)", repeat:"상대.상태.count(id, B8-PA-001-1)"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
	"B8-AT-003+":{
		parents:"B8-AT-003",
		name:{ "KOR":"Torture Training+" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["패널티"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"고문조교"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-AT-003-1+"},
		]
	},
	"B8-AT-003-1+":{
		parents:"B8-AT-003",
		name:{ "KOR":"Torture Aftermath" }, class:"조교사", type:"상태", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[], related:["패널티"],
		expiration:"active", duration:2,
		effect:[
			{trigger:"turnStart", cond:true, type:"get", target:"self", value:"randomCard(type, 패널티)"},
		]
	},
	"B8-SU-002+":{
		parents:"B8-SU-002",
		name:{ "KOR":"Erogenous Zone Training+" }, class:"조교사", type:"보조", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "하드전용"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"성감대조교"},
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-PA-001-1", byname:true},
		]
	},

	"B8-AT-004":{
		name:{ "KOR":"Punishment" }, class:"조교사", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "클라이맥스"], related:["B8-PA-001-1"],
		effect:[
			{trigger:"used", cond:true, type:"line", value:"징벌"},
			{trigger:"used", cond:true, type:"attack", target:"op"},
			{trigger:"used", cond:true, type:"state", target:"op", value:"B8-PA-001-1", byname:true}
		]
	},

	//

	"BC-UC-001":{
		name:{ "KOR":"Wandering" }, class:"중립", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Rests on the first round." }},
		]
	},
	"BC-AT-001":{
		name:{ "KOR":"Struggling" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	"BC1-PA-001":{
		name:{ "KOR":"Goblin Den" }, class:"고블린즈", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", cond:true, type:"orgasmL", target:"self", op:"add", value:"자신.남은절정"},
		]
	},

	"BC2-PA-001":{
		name:{ "KOR":"Waste of Time" }, class:"마을사람", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"maxRound", value:-5},
		]
	},

	"BC3-PA-001":{
		name:{ "KOR":"Hyper Regeneration" }, class:"촉수슬라임", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"excite", target:"self", op:"set", value:0},
		]
	},

	"BC5-PA-001":{
		name:{ "KOR":"Self-Destruction" }, class:"타우로스", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"orgasmBan", target:"self"},
			{trigger:"none", cond:true, type:"text", value:{ "KOR":"Lose the duel if time runs out." }},
		]
	},
	"BC5-AT-001":{
		parents:"B5-AT-003",
		name:{ "KOR":"Rampage Sex" }, class:"타우로스", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"estrus", op:"add", value:2},
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},

	"BC6-PA-001":{
		name:{ "KOR":"Indiscriminate Proliferation" }, class:"버섯남자", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"], related:["BC6-PA-001-1"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnStart", cond:true, type:"bound", info:{target:"상대덱.selectCards(all, 포자제외, 1)"}, target:"op", value:"BC6-PA-001-1"},
		]
	},
	"BC6-PA-001-1":{
		name:{ "KOR":"Lethal Spores" }, class:"버섯남자", type:"패널티", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:[],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"turnEnd", inDeck:true, cond:true, type:"defeat"},
		]
	},

	"BC8-PA-001":{
		name:{ "KOR":"Orgasm Prohibition" }, class:"조교사", type:"특성", isDeck:false, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언능력", "챌린지전용"],
		expiration:"always", duration:Infinity,
		effect:[
			{trigger:"always", cond:true, type:"suppression", target:"self"},
		]
	},
	"BC8-UC-001":{
		name:{ "KOR":"Wandering" }, class:"중립", type:"탈의", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용"],
		effect:[
			{trigger:"none", cond:true, type:"caption", value:{ "KOR":"Rests on the first round." }},
		]
	},
	"BC8-AT-001":{
		name:{ "KOR":"Struggling" }, class:"중립", type:"공격", isDeck:true, rarity:"없음", cost:0, owner:0, nochange:true,
		cond:true,
		tags:["챔피언덱", "챌린지전용", "클라이맥스"],
		effect:[
			{trigger:"used", cond:true, type:"attack", target:"op"},
		]
	},
}

const cardSave = {};

Object.keys(cardDB).forEach(id => {
	cardDB[id].id = id;
	cardDB[id].name.KOR = cardDB[id].name.KOR.replace(/ /g, '&nbsp;');
	if(cardDB[id].tags.includes("시전")) {
		cardDB[id].effect.push({trigger:"selected", keepLine:true, cond:true, type:"maxUse", target:"self", value:1})
	}
	if(cardDB[id].related) {
		let keywordIds = [];
		cardDB[id].related.filter(related => related.includes("-")).forEach(relatedId => {
			keywordIds.push(`id:${relatedId}`);
		});
		cardDB[id].keywords = cardDB[id].keywords?[...keywordIds, ...cardDB[id].keywords]:keywordIds;
	}

	if((cardDB[id].type == "특성" && id != "DA-NT-ALL-000") || cardDB[id].tags.includes("덱빌딩") || cardDB[id].tags.includes("기본제조") || (cardDB[id].tags.includes("기본마술") && cardDB[id].tags.includes("즉발 마술")) || cardDB[id].tags.includes("기본정수") || cardDB[id].tags.includes("보너스")) {
		cardSave[id] = { normal:{ select:0, win:0, clearList:{} }, hard:{ select:0, win:0, clearList:{} }, challenge:{} };
		if(cardDB[id].type == "시련") {
			cardSave[id].normal.success = 0;
			cardSave[id].hard.success = 0;
		}
	}
});

function generateCardExcel() {
    // 데이터 필터링
    const filteredCards = Object.entries(cardDB).filter(([id, card]) => (
        (card.tags && card.tags.includes("덱빌딩")) || 
        (card.type === "특성" && card.owner !== 0)
    ));

    // 엑셀 데이터 준비
    const excelData = [];
    let previousClass = "";

    filteredCards.forEach(([id, card]) => {
        if (card.class !== previousClass) {
            if (previousClass !== "") {
                excelData.push({ name: "", class: "", balance: "", mechanism: "", others: "" }); // 공백 행 추가
            }
            previousClass = card.class;
        }

        excelData.push({
            name: card.name[language]?.replace(/&nbsp;/g, " ") || "", // &nbsp;를 공백으로 치환
            class: card.class || "",
            balance: "", // 드롭다운 비워둠
            mechanism: "", // 체크박스 비워둠
            others: "" // 체크박스 비워둠
        });
    });

    // 엑셀 파일 생성
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
        ["이름", "클래스", "밸런스", "매커니즘", "기타"],
        ...excelData.map(card => [card.name, card.class, card.balance, card.mechanism, card.others])
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Cards");

    // 파일 다운로드
    XLSX.writeFile(workbook, "card_data.xlsx");
}
