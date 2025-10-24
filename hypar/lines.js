const line = {
	"테스트":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"This is a test message.<br>Please check the speed.",
				},
			]
		}
	],
//###################################################################################################################################################################################
	"조우":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kikik... Kiek!<br>A new female...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Uhehe, another good woman this time, huh?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle... Wriggle...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Hi, sis!<br>Let's play!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Moooooo!!!<br>Grrrr...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Ggggeuk... Gogogok...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Oh, you're pretty cute.<br>Wanna be my woman?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"An undisciplined female.<br>I will begin your training.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kiek... A new broodmare...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Buhit, this time I'll make you mine for sure~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrreung... Grrrrreuk...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, I wanna do lewd things with you again today!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"Moooooo!!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Why do you reject the swarm?*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"You're the first one<br>to reject me like this.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Let's check the results of the training.",
				},
			]
		},
	],

	"등장":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Ready for the duel.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"We're doing it here...?<br>There are too many people watching?!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"Please be gentle.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"I can't take it anymore... Let's start now♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Beginning semen extraction.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Is it that time again...<br>I'll try to endure it somehow.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"I'll be in your care again today.<br>Please take good care of me.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"My pussy... is already ready♡",
				},
			]
		},
	],

	"패배":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kikik.<br>The female is weak...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Uhit, don't stop, just cum~!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle... Drip...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"You lost already?<br>You're an adult, how pathetic~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Hoo, hoo...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*New host, reproduce for the swarm.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"4 out of 10.<br>What a boring pussy.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Now you know your place.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kikik, guys...<br>Ravage her as you please...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Subduing a woman stronger than me<br>is always the best~!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Grrreong... Graaah...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, you are my toy.<br>Forever.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Hoo, hoo...<br>Prrrr...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*For the expansion of the swarm,<br>become a seedbed.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Finally conquered.<br>Playing hard to get, what an arrogant bitch.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"It's over.<br>Prepare for shipment.",
				},
			]
		},
	],

	"플레이어-패배":[
		{
			priority:2, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"I have been defeated♡<br>I will become your sex slave♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Save me♡ Save meee...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"I'll be...<br>I'll be your sex slave...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Something this pleasurable...<br>There's no way I can resist...♡",
				},
			]
		},
		{
			priority:0, cond:["and", "특수승리"], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"... ...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Save me♡ Save meee...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"I'll be...<br>I'll be your sex slave...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Something this pleasurable...<br>There's no way I can resist...♡",
				},
			]
		},
	],

	"승리":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:["or", {v1:"특수승리", op:"!=", v2:true}, {v1:"챔피언.절정", op:">=", v2:5}], pos:0,
					text:"Goblin, comrade...<br>No more...",
				},
				{
					cond:["and", "특수승리", {v1:"챔피언.절정", op:"<", v2:5}], pos:0,
					text:"Scary... female...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Oooh...<br>I'm being squeezed dry♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Pshhh... Bubble...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis...♡<br>You're so strong...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Hoo... hoo...<br>*thud*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Stagger, stagger...<br>thud*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kgh... Now I want you even more.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Lady Sandrea, please forgive me...",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Retreat, retreat...!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"마을사람"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Oook...♡<br>Nothing more's coming out...♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Pshhh... Bubble bubble...*",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"악동"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Nooo...<br>All the essence I've gathered...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"타우로스"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Grooo... Kuo...<br>*thud*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Human...<br>This is not what we agreed upon...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Me...<br>To a mere whore...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"챔피언.이름", op:"==", v2:"조교사"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"This can't be...<br>Did my training fail...?",
				},
			]
		},
	],

	"플레이어-승리":[
		{
			priority:1, cond: {v1:"플레이어.표정", op:"in", v2:["corrupted"]}, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Ejaculation confirmed♡<br>Good work.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Premature ejaculator♡<br>You suck♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"},], pos:1, keepOriginal:true,
					text:"It felt really good for me too♡<br>Good work♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Get up...<br>I'm not satisfied yet♡",
				},
			]
		},
		{
			priority:0, cond: true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Mission complete.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"It's over...<br>I won, what a relief...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"I won this time.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"I had fun for the first time in a while♡",
				},
			]
		},
	],
//###################################################################################################################################################################################

	"플레이어-시간초과":[
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Limit... This is my limit...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"I... I can't take it anymore...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"I... have realized...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"This is my limit... I can't take it anymore♡",
				},
			]
		},
	],
	"플레이어-항복":[
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"I am a worthless slut,<br>I declare my defeat to Master Cock♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"I'm sorry for being so arrogant♡<br>P-please forgive me♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"It's only natural...<br>that a female can't win against Master Cock♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"I declare defeat♡ I lost♡<br>My life is over♡",
				},
			]
		},
	],


	"모르베인-등장":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true, name:"모르베인",
					text:"Hahaha!!<br>I've waited for this very moment!",
				}
			]
		}
	],

//###################################################################################################################################################################################

	"사정준비":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"Kerek♡ I'm cumming♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"Ugh...♡ It's coming♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"Hook♡ Hook♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"I'm gonna cum♡ Sis♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"This bitch, what a tight pussy♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"You're somewhat useful...",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"Kyaak, I can't hold it in♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"Ohot...♡ You're so tight♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"Hook♡ Hook♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"Sis's pussy feels so good♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"Ha, I can't hold this in...♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"Ugh... Not bad.",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"Kerek... It's coming♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"Uhot♡ I'm cumming♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"Hook♡ Hook♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"Ugh♡ Hold on, sis♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"Damn, this feels good♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"Kgh... How could this...",
				},
			]
		},

	],

	"패배사정":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"고블린즈"}], pos:0,
					text:"Kyaak, I'm being squeezed dry♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"마을사람"}], pos:0,
					text:"Uhooot♡ This feels unbelievably good♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"촉수슬라임"}], pos:0,
					text:"*Shudder shudder...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"타우로스"}], pos:0,
					text:"Huoooook♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"악동"}], pos:0,
					text:"N-no♡<br>I'm supposed to be the incubus...♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"버섯남자"}], pos:0,
					text:"*This body...<br>is no longer usable...*",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}], pos:0,
					text:"Kgh♡ You're the best woman I've ever had♡",
				},
				{
					cond:["and", {v1:"챔피언.이름", op:"==", v2:"조교사"}], pos:0,
					text:"Female slaaaaave♡",
				},
			]
		},
	],

	"사정":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Splooge♡ Sploooge♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Splooge♡ Splurt♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Ssplooooge♡ Splurt♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Spurt♡ Sploooge♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Splurt♡ Splurt♡*",
				},
			]
		},
	],

	"고블린즈-교체":[
		{
			priority:7, cond:{v1:"챔피언.절정", op:"==", v2:1}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Keke, my turn.",
				}
			]
		},
		{
			priority:6, cond:{v1:"챔피언.절정", op:"==", v2:2}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kyaruk... Ravage the female!",
				}
			]
		},
		{
			priority:5, cond:{v1:"챔피언.절정", op:"==", v2:3}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Move it, idiot!",
				}
			]
		},
		{
			priority:4, cond:{v1:"챔피언.절정", op:"==", v2:4}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kyak.<br>Useless fools, can't even dominate one female.",
				}
			]
		},
		{
			priority:3, cond:[{v1:"모드", op:"==", v2:1}, {v1:"챔피언.절정", op:"==", v2:5}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Now, it's my turn.",
				}
			]
		},
		{
			priority:2, cond:[{v1:"모드", op:"==", v2:1}, {v1:"챔피언.절정", op:"==", v2:6}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Switch without resting!",
				}
			]
		},
		{
			priority:1, cond:[{v1:"모드", op:"==", v2:1}, {v1:"챔피언.절정", op:"==", v2:7}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kyakya... Waited long for this.",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kerek... My turn again!",
				}
			]
		},
	],

//###################################################################################################################################################################################

	"고블린정액-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Keke, cumming on the female.",
				},
			]
		},
	],

	"옷찢기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Kikik, strip off all those cumbersome clothes...!",
				},
			]
		},
	],
	"가슴쥐어짜기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*Grope grope squeeze*",
				},
			]
		},
	],
	"고블린삽입":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Get pregnant with a goblin child!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Cumming in the fuck-toy pussy!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Using the female's pussy,<br>as a cum dumpster!",
				},
			]
		},
	],


	"딥스롯":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Mmph..!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Mmph..♡",
				},
			]
		},
	],

	"탑승":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Giddy-up, giddy-up.<br>Go forward!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap♡ Slap♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"I'm going♡<br>Forward... I'm going♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Aah♡ Stop it♡<br>M-my body... is moving on its own♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Aah♡ I'll go♡<br>Forward... I'll go♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Aah♡ Okay♡<br>I'll go... forward♡",
				},
				{
					cond:true, pos:0,
					text:"Kyakakya! Completely livestock!",
				},
			]
		},
	],

	"고블린즈-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kekeke... The female's body is so lewd...<br>I want to make her my cum dumpster!",
				},
				{
					cond:true, pos:1,
					text:"Understood.<br>From now on, I will become the Goblins' cum dumpster.",
				},
				{
					cond:true, pos:0,
					text:"Ooh, she's spreading her legs on her own!<br>This female is already a fucktoy in her mind, kyakya!",
				},
				{
					cond:true, pos:1,
					text:"Please use me as you wish.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Filthy... and barbaric creatures...<br>Don't touch my body!",
				},
				{
					cond:true, pos:0,
					text:"Kekeke... Are you refusing the duel, female?<br>Then that's a forfeit. An immediate loss.",
				},
				{
					cond:true, pos:1,
					text:"Th-that's not what I meant!",
				},
				{
					cond:true, pos:1,
					text:"Ugh... Fine.<br>Just get it over with quickly...",
				},
				{
					cond:true, pos:1,
					text:"(Damn it, damn it... me, having sex with goblins...<br>But... it's a duel, so I guess I have no choice...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kekeke... The female's body is so lewd...<br>I wanna fuck her. Show me your pussy!",
				},
				{
					cond:true, pos:1,
					text:"Okay~!<br>This is what my pussy looks like.",
				},
				{
					cond:true, pos:0,
					text:"Kyakya! Look at this shameless pervert,<br>in such an embarrassing pose!",
				},
				{
					cond:true, pos:1,
					text:"Huh? Why is spreading my pussy because you asked...<br>an embarrassing pose?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kekeke... The female's body is so lewd...<br>I'm gonna grab you by the hair and pound you from behind!",
				},
				{
					cond:true, pos:1,
					text:"My, how wild♡<br>And then? What's next?",
				},
				{
					cond:true, pos:0,
					text:"I'll fuck your front and back holes at the same time,<br>and splatter my semen all over your body!",
				},
				{
					cond:true, pos:1,
					text:"Haa♡ How wonderful♡<br>Just hearing it is making me wet♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kyakya! We meet again!<br>Female, are you ready to spread?",
				},
				{
					cond:true, pos:1,
					text:"Yes, of course.",
				},
				{
					cond:true, pos:1,
					text:"My pussy, mouth, and anus are all ready.",
				},
				{
					cond:true, pos:0,
					text:"Kyaak, I can't wait!<br>I'm pouncing on you now!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Keke, we meet again, female.<br>Today, I'll make you my fucktoy for sure!",
				},
				{
					cond:true, pos:1,
					text:"You guys again?<br>I hate how the smell of semen clings to my body every time...",
				},
				{
					cond:true, pos:0,
					text:"Enough talk!<br>Hurry up and spread your legs!",
				},
				{
					cond:true, pos:1,
					text:"Haa... Fine, I get it.<br>What choice do I have, my role is to be fucked...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Thanks to you goblins, I've become more sensitive.",
				},
				{
					cond:true, pos:1,
					text:"Today, I'd like you to rub my cervix with your cock...<br>and fuck my throat until I'm about to suffocate♡",
				},
				{
					cond:true, pos:0,
					text:"Kyaak, shut up you pervert!<br>We'll fuck you however we want!",
				},
				{
					cond:true, pos:1,
					text:"Ah, you're right.<br>I'm sorry for making such selfish requests...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I've been waiting♡<br>I can't live a single day without your cocks anymore♡",
				},
				{
					cond:true, pos:1,
					text:"The way you choked me last time felt so good,<br>are you going to do it again today♡",
				},
				{
					cond:true, pos:0,
					text:"Kyaak, this female's casual attitude is pissing me off.<br>I'll make you beg on your knees, crying and cumming!",
				},
				{
					cond:true, pos:1,
					text:"Is that what you like?<br>I can do that for you right now, you know♡",
				},
			]
		},
	],
	"고블린즈-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kyakya, pussy juice is dripping down.<br>Did you get turned on while being forcibly raped!",
				},
				{
					cond:true, pos:1,
					text:"That is correct.<br>The secreted fluid is evidence of my arousal.",
				},
				{
					cond:true, pos:0,
					text:"You perverted female.<br>Did the goblin cock feel that good!",
				},
				{
					cond:true, pos:1,
					text:"Yes, that's right.<br>I felt pleasure and came from your cocks.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"N-no way... Me, with a goblin's cock...<br>I couldn't have felt anything...",
				},
				{
					cond:true, pos:0,
					text:"Kyakya, just admit it!<br>The female came pathetically!",
				},
				{
					cond:true, pos:0,
					text:"You're weak, pathetic!<br>A loser who can't do anything once a cock is in her pussy!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Don't be ridiculous!<br>I only came once!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haang♡ Was the goblin's cock<br>this pleasurable.",
				},
				{
					cond:true, pos:0,
					text:"Kyakya, she says it feels good while being gangbanged.<br>This bitch is a total masochistic pervert!",
				},
				{
					cond:true, pos:1,
					text:"Huh? Am I a... masochistic pervert...?",
				},
				{
					cond:true, pos:1,
					text:"I see,<br>I'm a masochistic pervert~♪",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Keke, this female is all talk.<br>She came so quickly.",
				},
				{
					cond:true, pos:1,
					text:"What can I do, your cocks just feel too good♡",
				},
				{
					cond:true, pos:1,
					text:"But, this is just the beginning.<br>It won't be easy to break me♡",
				},
				{
					cond:true, pos:0,
					text:"Keke, all talk!<br>We'll shove them deeper into both your holes!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Aaang♡ Come inside♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Reporting.<br>The spot you are currently rubbing is my G-spot.",
				},
				{
					cond:true, pos:0,
					text:"Kekeke, cum and piss yourself!",
				},
				{
					cond:true, pos:1,
					text:"Understood.<br>I will urinate upon climax as ordered.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy", keepPort:true,
					text:"Oook♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*drip... drip...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Keke, you pervert.<br>You came so quickly again!",
				},
				{
					cond:true, pos:1,
					text:"Shut up.<br>Any female would normally cum this fast.",
				},
				{
					cond:true, pos:0,
					text:"Kyahaha, now she admits she's a female!",
				},
				{
					cond:true, pos:1,
					text:"What are you talking about?<br>I was always a female... Huh? Wait?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haang♡ That felt really good just now.",
				},
				{
					cond:true, pos:0,
					text:"Kyakya! What a perverted female!<br>Her holes are already full of semen!",
				},
				{
					cond:true, pos:1,
					text:"Oh? Thank you.<br>But I can still take more♡",
				},
				{
					cond:true, pos:0,
					text:"Alright! We'll use your back hole too!<br>It's great that females have so many holes!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"This female's hole tightens up completely when she cums!<br>She was born to be a fucktoy!",
				},
				{
					cond:true, pos:1,
					text:"I've really missed this♡<br>Break me♡ Deeper, harder♡",
				},
				{
					cond:true, pos:0,
					text:"Kyaak, she's tightening up even more!<br>I can't do this alone, everyone, attack!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Haang♡ Fuck me with all of them♡",
				},
			]
		},
	],
	"고블린즈-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kyakya! The female has collapsed!<br>She's trembling!",
				},
				{
					cond:true, pos:1,
					text:"You can still...<br>use me more...♡",
				},
				{
					cond:true, pos:0,
					text:"Can't even speak properly, keke.<br>We'll stab your front and back holes at the same time!",
				},
				{
					cond:true, pos:1,
					text:"Yes, my anus is also... available♡<br>Please insert it deeper♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"The female's pussy is wet and tight.<br>Your hole feels good.",
				},
				{
					cond:true, pos:1,
					text:"Damn it, my body is moving on its own... feeling pleasure♡<br>I don't want to... I don't want to cum♡",
				},
				{
					cond:true, pos:0,
					text:"Kyakya, even if you say no, your pussy is dripping with juice.<br>Females are eventually tamed by semen!",
				},
				{
					cond:true, pos:1,
					text:"Every time the goblin cock moves in and out♡<br>I realize... that I'm just a female♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I caaame♡<br>My pussy just came from the goblins' cocks♡",
				},
				{
					cond:true, pos:0,
					text:"Kyahaha, this bitch has come so much, she's half-lost her mind!",
				},
				{
					cond:true, pos:1,
					text:"I caaame♡ I just orgasmed♡",
				},
				{
					cond:true, pos:0,
					text:"We'll fuck you more,<br>until you're completely broken!",
				},
				{
					cond:true, pos:1,
					text:"I caaame♡<br>My pussy came from all the pounding♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haang♡ Harder♡<br>Pound my fucktoy pussy♡",
				},
				{
					cond:true, pos:0,
					text:"Kyakya, she's completely corrupted.<br>The female's in heat and not in her right mind.",
				},
				{
					cond:true, pos:1,
					text:"Splooge splooge, cum in me♡<br>Fill my womb and get me pregnant♡",
				},
				{
					cond:true, pos:0,
					text:"Alright!<br>We'll ravage you as much as you want!",
				},
				{
					cond:true, pos:1,
					text:"Cock♡ Goblin cooock♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"Climax... confirmed...♡<br>Reporting... climax...♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Confirm... confirmed...♡<br>Pussy... climax♡",
				},
				{
					cond:true, pos:0,
					text:"Kyakya! The female is broken!<br>Her mind is shattered from too many orgasms!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Reporting... c-confirmed...♡<br>Climax... p-pussy...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"(Damn, getting gangbanged by goblin cocks feels so good♡)",
				},
				{
					cond:true, pos:0,
					text:"Kyahaha, semen is dripping from her holes!<br>So lewd and pathetic!",
				},
				{
					cond:true, pos:1,
					text:"Oh, no... my precious semen♡<br>I have to quickly lick it up♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*lick♡ slurp♡*",
				},
				{
					cond:true, pos:0,
					text:"Seriously! She's licking semen off the floor!<br>The female has gone crazy from too many orgasms!",
				},
				{
					cond:true, pos:1,
					text:"Shut up♡ You're just a goblin...♡<br>And you have such delicious semen♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"The smell of goblin semen♡<br>It's so good, I think I'm getting addicted♡",
				},
				{
					cond:true, pos:1,
					text:"I'd love it if you could cum deep inside my pussy♡",
				},
				{
					cond:true, pos:0,
					text:"Kekeke, this female is completely in heat!",
				},
				{
					cond:true, pos:0,
					text:"She just came and her legs are trembling,<br>but she's already spreading them again!",
				},
				{
					cond:true, pos:1,
					text:"P-put it in, please♡<br>I want to get pregnant with a goblin's child♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Aah♡ I love goblin cooock♡",
				},
				{
					cond:true, pos:1,
					text:"The feeling of it splitting my pussy open and rubbing inside♡<br>I'm so happy, it feels so good♡",
				},
				{
					cond:true, pos:0,
					text:"Kyakya, the female's pussy is twitching.<br>I'll pound you hard!",
				},
				{
					cond:true, pos:1,
					text:"Aah♡ Here it comes♡<br>Fill my womb and get me pregnant♡",
				},
			]
		},
	],

//###################################################################################################################################################################################

	"최면석판":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Listen carefully.<br>You are my personal fucktoy~",
				},
				{
					cond:true, pos:1, effect:"hypnotized",
					text:"... ... ...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Today, you will become my fucktoy through hypnosis again~",
				},
				{
					cond:true, pos:1, effect:"hypnotized",
					text:"... ... ...",
				},
			]
		},
	],
	"네주인님":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will carry out the command.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"It's a command,<br>so I have to follow it...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Yes, master!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I'll follow your command, master♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Please give me your command♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Hmph, it's just because it's master's command<br>that I'm following it...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Yes, master♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Following my master's command♡<br>feels so good♡",
				},
			]
		},
	],
	"벗어라":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Hey, isn't it common sense to be naked for a duel?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Understood.<br>Beginning to undress.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Ugh...! I-I know, okay?<br>I was just about to take them off!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Ah, I completely forgot.<br>Sorry, I'll hurry and undress.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Thanks for telling me.<br>I forgot something so obvious♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}],
			lineList:[
				{
					cond:true, pos:0,
					text:"That's strange, why is a fucktoy wearing clothes~?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I apologize for the disturbance.<br>I will undress immediately.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Ugh...! Why, why was I wearing clothes?<br>I-it's embarrassing... Don't look!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Oh? It's common sense for a fucktoy to always be naked,<br>I made a mistake...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Huh? You're right♡<br>Why was I wearing this crap?",
				},
			]
		},
	],
	"최면명령":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"Follow my command!",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"Hehe, move as I wish!",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"You have no choice but to listen to me!",
				},
			]
		},
	],
	"감도높이기":[
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}],
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"Sensitivity x100♡",
				},
				{
					cond:true, pos:1, effect:"shake", keepOriginal:true,
					text:"... ...♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"Sensitivity x100♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"Sensitivity has greatly increased♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"Gaaah♡<br>What is this...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"Aaaang♡<br>My body feels hot♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text:"Haang♡<br>This is amazing♡",
				},
			]
		},
	],
	"네발로기어라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"How arrogant for a fucktoy to stand on two feet♡<br>Get on all fours right now!",
				},
			]
		},
	],
	"움직이지마라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"Stop♡<br>Don't move from there!",
				},
			]
		},
	],
	"절정해라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"When I snap my fingers,<br>you will cum♡",
				},
				{
					cond:true, pos:0,
					text:"*Snap!*",
				},
			]
		},
	],
	"인지저해":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Uhehe♡<br>You won't even notice me groping you~",
				},
				{
					cond:true, pos:1, keepOriginal:true,
					text:"...?",
				},
			]
		},
	],

	"마을사람-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I am my master's sex-processing fucktoy.",
				},
				{
					cond:true, pos:1,
					text:"My role is to be fucked<br>by my master's cock.",
				},
				{
					cond:true, pos:0,
					text:"Yes♡<br>It's good that you're so obedient~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haa...<br>Is this pathetic-looking man really my opponent?",
				},
				{
					cond:true, pos:1,
					text:"Ugly, smelly, and filthy,<br>I wish you would just disappear from my sight.",
				},
				{
					cond:true, pos:0,
					text:"Oh, so mean~<br>But I can still use your pussy, right?",
				},
				{
					cond:true, pos:1,
					text:"Ha? What are you asking!<br>So annoying...",
				},
				{
					cond:true, pos:1,
					text:"I'm a fucktoy,<br>so it's obvious you can use me however you want!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Shall we check if the hypnosis worked?<br>Piss yourself right now~",
				},
				{
					cond:true, pos:1,
					text:"...?<br>Yes, okay.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*drip... drip...*",
				},
				{
					cond:true, pos:0,
					text:"Hehe, perfect, good♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Whoa, pulling down my pants right at the start.<br>Aren't you being a bit too aggressive~?",
				},
				{
					cond:true, pos:1,
					text:"What are you talking about?<br>It's basic for a fucktoy♡",
				},
				{
					cond:true, pos:1,
					text:"Hurry up and get hard, master♡<br>Aren't you going to let me service you?",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Please give any command to this fucktoy.",
				},
				{
					cond:true, pos:0,
					text:"Uhehe, anything?<br>Like what, for example?",
				},
				{
					cond:true, pos:1,
					text:"Paizuri, cleaning fellatio, doggy style, cowgirl, anal sex, lactation play, bondage, golden shower, and 137 other acts and positions are available.",
				},
				{
					cond:true, pos:0,
					text:"Ah~ Got it.<br>I'll just order what I like♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Good, you're perfectly under my hypnotic control♡",
				},
				{
					cond:true, pos:1,
					text:"Hypnosis? You still seriously believe in that crap?<br>There's no way I'd fall for it, you idiot.",
				},
				{
					cond:true, pos:0,
					text:"Uhehe, really?<br>Then explain your role to me♡",
				},
				{
					cond:true, pos:1,
					text:"Obviously, to be a fucktoy that services my master's cock.<br>Don't even know that? You really are an idiot.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Hehe, I wonder if you even know what you're doing right now?",
				},
				{
					cond:true, pos:1,
					text:"Huh?<br>I am currently spreading my pussy for you, master.",
				},
				{
					cond:true, pos:1,
					text:"Is there a problem with preparing to receive a cock<br>as a fucktoy?",
				},
				{
					cond:true, pos:0,
					text:"No, no♡<br>You're doing very well~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Hurry and cum in my fucktoy pussy,<br>splooge splooge♡",
				},
				{
					cond:true, pos:0,
					text:"Uhehe... Aren't you being too slutty?",
				},
				{
					cond:true, pos:0,
					text:"You've become even more fitting for a fucktoy♡",
				},
				{
					cond:true, pos:1,
					text:"Hurry♡ Hurry♡<br>Just fuck me already♡",
				},
			]
		},
	],
	"마을사람-이벤트-행동불가":[ 
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Hehehe... You can't move, can you?",
				},
				{
					cond:true, pos:0,
					text:"Even if I grope and rub you as I please...",
				},
				{
					cond:true, pos:0,
					text:"You can't resist at all, right?",
				},
				{
					cond:true, pos:0,
					text:"In the first place...<br>it's your fault for having such a lewd body~",
				},
			]
		},
	],
	"마을사람-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Ooh♡ You suddenly got tighter,<br>what's going on~",
				},
				{
					cond:true, pos:1,
					text:"Reporting.<br>I have just had a light orgasm.",
				},
				{
					cond:true, pos:0,
					text:"No, no.<br>You need to tell me clearly when you're going to cum~",
				},
				{
					cond:true, pos:0,
					text:"From now on, when you cum, squeal like a sow.<br>Got it?",
				},
				{
					cond:true, pos:1,
					text:"I will correct myself.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"Oink♡ Oink oiiink♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Hey, aren't there words you should say after I've used your hole?",
				},
				{
					cond:true, pos:1,
					text:"Kgh...<br>Th-thank you... for using me...",
				},
				{
					cond:true, pos:0,
					text:"Aah~ I can't hear you.<br>Thank you for what?",
				},
				{
					cond:true, pos:1,
					text:"Thank you for using... my fucktoy pussy for master's...<br>masturbation...",
				},
				{
					cond:true, pos:1,
					text:"(Why was I born as this man's fucktoy...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Wait, what should a fucktoy do after cumming?",
				},
				{
					cond:true, pos:1,
					text:"Huh?<br>Um... I'm sorry. What should I do?",
				},
				{
					cond:true, pos:0,
					text:"You have to show your master your cum-soaked pussy<br>by striking a wide-legged pose!",
				},
				{
					cond:true, pos:1,
					text:"Aha! That's right!<br>As expected, master knows everything.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You came already~<br>What a worthless fucktoy♡",
				},
				{
					cond:true, pos:1,
					text:"Master's cock just feels too good♡<br>Any female would have come, you know?",
				},
				{
					cond:true, pos:0,
					text:"Such a good girl, aren't you?<br>As a reward, I'll cum inside you next time♡",
				},
				{
					cond:true, pos:1,
					text:"Yay♡<br>I'm so happy to be my master's fucktoy♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"Oink♡ Oink oiiink♡",
				},
				{
					cond:true, pos:0,
					text:"What, what was that all of a sudden?",
				},
				{
					cond:true, pos:1,
					text:"There was an order from master<br>to squeal like a sow when I cum.",
				},
				{
					cond:true, pos:0,
					text:"Was there? I forgot~<br>What other orders were there?",
				},
				{
					cond:true, pos:1,
					text:"Do not wear clothes. Incontinent when nipples are pinched. Cum when fingers are snapped...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Uhehe, does my cock feel that good?<br>You're clinging to it and won't let go♡",
				},
				{
					cond:true, pos:1,
					text:"Hmph...♡ I'm just servicing you as a fucktoy, okay?<br>Don't get the wrong idea.",
				},
				{
					cond:true, pos:0,
					text:"Yeah, yeah~<br>Saying that with such a slutty face♡",
				},
				{
					cond:true, pos:1,
					text:"Shut up♡<br>The only useful thing about you is your cock♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Uhehe, what are you doing standing there with your legs spread?",
				},
				{
					cond:true, pos:1,
					text:"Huh? This is...<br>the wide-legged pussy pose, isn't it?",
				},
				{
					cond:true, pos:1,
					text:"To inform that I, as a fucktoy, have cum,<br>my pussy is twitching and dripping juice...",
				},
				{
					cond:true, pos:1,
					text:"It's a basic fucktoy pose,<br>with the purpose of showing it to my master.",
				},
				{
					cond:true, pos:0,
					text:"Yes, right,<br>that was the setting, uhehe♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Hehehe, you always cum when I rub you here♡",
				},
				{
					cond:true, pos:1,
					text:"Aaang♡ Master has found all my weak spots♡",
				},
				{
					cond:true, pos:1,
					text:"I have no choice but to be master's fucktoy forever♡<br>You'll take responsibility, right?",
				},
				{
					cond:true, pos:0,
					text:"No way~ Responsibility is what I hate the most~<br>I'll throw you away when I get bored♡",
				},
				{
					cond:true, pos:1,
					text:"Then, I'll have to make sure you never get bored of me♡",
				},
			]
		},
	],
	"마을사람-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"*shiver shiver...*",
				},
				{
					cond:true, pos:0,
					text:"Hmm? You seem a little strange~?",
				},
				{
					cond:true, pos:1,
					text:"I'll... I'll tighten♡<br>My, my pussy...♡",
				},
				{
					cond:true, pos:1,
					text:"I'll tighten...♡ I will tighten♡",
				},
				{
					cond:true, pos:0,
					text:"You came so much you broke~<br>",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"It... doesn't feel good... at all♡<br>I'm just... doing it... because I'm a fucktoy...♡",
				},
				{
					cond:true, pos:0,
					text:"Ha, how disappointing...<br>If you keep acting like this... I'll have to throw you away.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Eh...?",
				},
				{
					cond:true, pos:1,
					text:"I-I'm sorry... It's my fault.<br>Please don't throw me away...",
				},
				{
					cond:true, pos:1,
					text:"I'll spread my legs... My pussy felt good, didn't it...?<br>Please... forgive me...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haah♡ W-wait...<br>Please... give me a break...♡",
				},
				{
					cond:true, pos:0,
					text:"What is a fucktoy talking about?",
				},
				{
					cond:true, pos:0,
					text:"There's no way you'd be allowed a break~<br>Hurry up and offer your pussy♡",
				},
				{
					cond:true, pos:1,
					text:"Y-you're right♡<br>I'm sorry... for my thoughtless remark...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Aaang♡ I love it when master's cock<br>pokes deep inside my fucktoy pussy♡",
				},
				{
					cond:true, pos:0,
					text:"Hehe♡ A beauty I wouldn't even have been able to talk to normally...<br>is getting off on my cock♡",
				},
				{
					cond:true, pos:0,
					text:"This lewd body must have belonged to another man originally♡",
				},
				{
					cond:true, pos:0,
					text:"But now, her tits and pussy are all mine~♡",
				},
				{
					cond:true, pos:1,
					text:"That's right, I'm yours, master♡<br>So keep using me♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"*Sploosh♡<br>drip drip drip...♡*",
				},
				{
					cond:true, pos:0,
					text:"Whoa, that's a lot of pussy juice~<br>Is it okay to squirt that much?",
				},
				{
					cond:true, pos:1,
					text:"Ahek♡ Heek♡",
				},
				{
					cond:true, pos:0,
					text:"Looks like it's not okay~<br>Well, I've used you for a long time♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Hehe, I wonder if you can keep up the arrogant talk<br>while cumming so spectacularly?",
				},
				{
					cond:true, pos:1,
					text:"It... doesn't feel good... at all♡<br>I'm just... doing it... because I'm a fucktoy...♡",
				},
				{
					cond:true, pos:0,
					text:"Then what about this tongue,<br>desperately trying to lick my cock♡",
				},
				{
					cond:true, pos:1,
					text:"I hate it... so much...♡<br>Disgusting...♡ Go die...♡",
				},
				{
					cond:true, pos:1,
					text:"(Master's cock... I love it so much♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"I'm in a good mood♡<br>Tell me what you want me to do♡",
				},
				{
					cond:true, pos:1,
					text:"Th-then, please put your cock in my female hole...<br>and stir it around everywhere♡",
				},
				{
					cond:true, pos:1,
					text:"And... r-rub my nipples... and kiss...♡<br>Fill my womb... with lots of semen...♡",
				},
				{
					cond:true, pos:0,
					text:"Ah, that's too long♡<br>I'll just fuck you as I please, so shut up and spread 'em♡",
				},
				{
					cond:true, pos:1,
					text:"Y-yes♡<br>I'm sorry...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Let's take a break so we can enjoy this longer♡<br>Stop for a moment~",
				},
				{
					cond:true, pos:1,
					text:"Cock♡ Cooock♡<br>Pound pound♡",
				},
				{
					cond:true, pos:0,
					text:"No, I said take a break~<br>You just came again, don't you care if you lose?",
				},
				{
					cond:true, pos:1,
					text:"Fuck me♡ Bang bang♡<br>Fuck my pussy♡",
				},
				{
					cond:true, pos:0,
					text:"You're so deep in heat you can't even follow commands♡<br>Alright~ Let's continue♡",
				},
			]
		},
	],


//###################################################################################################################################################################################

	"옷을녹이는점액":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Splat*",
				},
			]
		},
	],
	"촉수공격":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Wriggle wriggle*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Squirm squirm*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Slither slither*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Slide*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Squish squish*",
				},
			]
		},
	],
	"구속촉수":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Squeeze*",
				},
			]
		},
	],
	"타액섭취":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gulp gulp*",
				},
			]
		},
	],
	"보호점액분비":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Gurgle gurgle*",
				},
			]
		},
	],


	"촉수슬라임-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle... Wriggle...*",
				},
				{
					cond:true, pos:1,
					text:"I cannot understand the command.<br>What should I do?",
				},
				{
					cond:true, pos:0,
					text:"*Slither slither*",
				},
				{
					cond:true, pos:1,
					text:"Mate with this tentacle...<br>Understood. I understand.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Hey, couldn't it at least be a humanoid enemy?!",
				},
				{
					cond:true, pos:1,
					text:"Sex with a slime...?<br>How do you even do that!",
				},
				{
					cond:true, pos:0,
					text:"*Wriggle wriggle...*",
				},
				{
					cond:true, pos:1,
					text:"T-tentacles?<br>Disgusting...",
				},
				{
					cond:true, pos:1,
					text:"D-don't tell me, I have to... do it with that...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle... Wriggle...*",
				},
				{
					cond:true, pos:1,
					text:"I didn't expect my opponent to be a small, cute slime.",
				},
				{
					cond:true, pos:1,
					text:"But, since it's an enemy, I must defeat it.",
				},
				{
					cond:true, pos:1,
					text:"It's 'common sense' to use your pussy to catch a slime...<br>right?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Squirm squirm... Drip...*",
				},
				{
					cond:true, pos:1,
					text:"Haa... This sticky stuff isn't so bad♡<br>How are you going to play with me?",
				},
				{
					cond:true, pos:0,
					text:"*Slither... Slither...*",
				},
				{
					cond:true, pos:1,
					text:"Alright♡<br>Try entering my hole♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Based on experience, when facing a slime,<br>there is no need to wet the pussy by masturbating.",
				},
				{
					cond:true, pos:1,
					text:"This is because the slime's mucus serves<br>as a substitute for lubrication.",
				},
				{
					cond:true, pos:0,
					text:"*Krrreung... Gurgle...*",
				},
				{
					cond:true, pos:1,
					text:"If you are ready, I will spread my genitals<br>to accept the tentacle.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Ugh... I really hate tentacles...",
				},
				{
					cond:true, pos:1,
					text:"Being tied up, unable to move,<br>and getting fucked in every hole...",
				},
				{
					cond:true, pos:1,
					text:"It just feels too good...",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Ah, no. I mean, it's painful.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Wow, it's gotten huge!<br>I've never seen a slime this big before!",
				},
				{
					cond:true, pos:0,
					text:"*Krrreung... Gurgle...*",
				},
				{
					cond:true, pos:1,
					text:"The tentacles... they're so big and there are so many.",
				},
				{
					cond:true, pos:1,
					text:"I know...<br>I'm going to put these in my pussy now, right♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Grrrr... Gurgle...*",
				},
				{
					cond:true, pos:1,
					text:"Big... and wriggling...<br>It's so wonderful♡",
				},
				{
					cond:true, pos:1,
					text:"To modify a slime like this...<br>The arena knows what it's doing♡",
				},
			]
		},
	],
	"촉수슬라임-이벤트-보호점액":[ 
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"!=", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Splat...*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Contact with a special mucus has been made.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Movement will be restricted.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Ugh, what...<br>I didn't hear it could spit something like this...!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"(M-my body...<br>I can't move well...!)",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Ah, it's cold...<br>It's so sticky...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"(Huh...?<br>I can't move my body...!)",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Ah, cold...<br>What's this now?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"(Ahh...<br>It's a mucus to restrain my movements♡)",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Splat♡<br>Gurgle♡ Gurgle♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I'm covered in mucus.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I can't move...<br>as I wish♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"What is this...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"You're tying me up, what are you planning to do♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Oh, what is this mucus♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"It's so sticky, I can't move well♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Such a bold move...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"You must have been afraid of me♡",
				},
			]
		},
	],
	"촉수슬라임-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Orgasm confirmed.<br>Defeat is expected if this continues.",
				},
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"The tentacle seems to be focusing on...<br>stimulating sensitive areas.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Assessment: This slime possesses<br>excellent techniques for raping women.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"No way...<br>Me, coming from a slime's tentacle...?",
				},
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"St-stop! I just came!<br>Damn it, don't rub... that sensitive spot...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Aaah... I feel like I'm going to pee...",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Hnngh♡",
				},
				{
					cond:true, pos:0,
					text:"*Gulp gulp*",
				},
				{
					cond:true, pos:1,
					text:"Haa... Thank you for cleaning me up...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Yes, right there♡<br>Aaang♡",
				},
				{
					cond:true, pos:1,
					text:"A place a cock can't reach...<br>the tentacle is probing it♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Orgasm achieved.<br>Initiating female ejaculation.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"*shiver...*",
				},
				{
					cond:true, pos:0,
					text:"*Gulp gulp gulp*",
				},
				{
					cond:true, pos:1,
					text:"Consumption confirmed.<br>If more is needed, I will orgasm again.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Hmph, to a mere tentacle...<br>I will never surrender♡",
				},
				{
					cond:true, pos:0,
					text:"*Squirm squirm...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Nn♡ Ah...<br>There, rub it a little more...♡",
				},
				{
					cond:true, pos:1,
					text:"No, I didn't feel anything, okay?<br>I will never surrender♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Wriggle wriggle*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Nnngh♡<br>Master Slime's tentacles feel so good♡",
				},
				{
					cond:true, pos:1,
					text:"People outside the arena<br>probably don't know about something this good, right?",
				},
				{
					cond:true, pos:1,
					text:"I wish everyone would come here.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle*",
				},
				{
					cond:true, pos:1,
					text:"Aaang♡<br>Here it comes♡",
				},
				{
					cond:true, pos:1,
					text:"To be fucked this deep...<br>only a tentacle will do now♡",
				},
			]
		},
	],
	"촉수슬라임-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle... Gurgle gurgle...*",
				},
				{
					cond:true, pos:1,
					text:"The human body is...<br>unsuitable for tentacle sex... confirmed...",
				},
				{
					cond:true, pos:0,
					text:"*shudder shudder...<br>throb...*",
				},
				{
					cond:true, pos:1,
					text:"Reporting that the body's durability... has reached its limit...<br>Danger... Danger...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Throb throb*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"Mmph♡ Mmmph...♡",
				},
				{
					cond:true, pos:1,
					text:"(M-my throat is filled with a tentacle...♡<br>Pussy and anus too... at the same time...♡)",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"(I-I'm going to die...♡<br>At this rate, I'll die...♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Throb throb♡<br>Rub rub♡*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"*shiver... drip drip...*",
				},
				{
					cond:true, pos:1,
					text:"If... Master Slime desires it...",
				},
				{
					cond:true, pos:1,
					text:"I must have been...<br>a feeding trough that squirts bodily fluids...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Tentacle sex feels so good♡",
				},
				{
					cond:true, pos:0,
					text:"*Throb throb♡*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Aaang♡ My insides are being ravaged♡",
				},
				{
					cond:true, pos:1,
					text:"All my holes are filled with<br>the slime's sticky mucus♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"All my bodily fluids... are being sucked out...♡",
				},
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle♡*",
				},
				{
					cond:true, pos:1,
					text:"I'm being squeezed dry...♡<br>I'm cumming again...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haang♡ It feels so good when the tentacle churns my insides♡",
				},
				{
					cond:true, pos:1,
					text:"A-actually, I've always liked... tentacle sex♡",
				},
				{
					cond:true, pos:1,
					text:"I couldn't get satisfied with other kinds of sex...<br>so I masturbated imagining doing it with a slime♡",
				},
				{
					cond:true, pos:0,
					text:"*Wriggle wriggle...♡*",
				},
				{
					cond:true, pos:1,
					text:"A tentacle is coming♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Aah♡ No♡<br>Nothing... is coming out of my pussy anymore♡",
				},
				{
					cond:true, pos:0,
					text:"*Squirm...♡<br>Rub rub♡*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Oook♡ If you rub my nipples...<br>m-milk will come out♡",
				},
				{
					cond:true, pos:1,
					text:"Eheh♡ I still had something left to give...<br>Master Slime... you're so smart...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Throb throb*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"Mmph♡ Mmmph...♡",
				},
				{
					cond:true, pos:1,
					text:"(All my holes are♡<br>filled with tentacles♡)",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"(I'm so happyyy...♡)",
				},
			]
		},
	],

//###################################################################################################################################################################################
	
	"짓궂은장난":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"Gotcha!<br>Sis's underwear acquired~",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"... ...<br>Movement not detected.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Th-this bastard! Since when!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Eh? Wait.<br>H-how?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Oh, I didn't even notice.<br>Impressive sleight of hand.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"What color are your panties today~?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I am not wearing any.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Hmph, you're planning to steal them again, aren't you?<br>I knew it, so I didn't wear any today!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Panties?<br>I'm not wearing any today!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Wanna know?<br>Today... I'm not wearing any♡",
				},
				{
					cond:true, pos:0,
					text:"Liar~ Take them off and show me~",
				},
			]
		},
	],
	"가슴만지게해줘":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis~ Can't I touch your breasts?<br>Just once! Just a little!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Let me touch your breasts~<br>You're going to let me anyway~",
				},
			]
		},
	],
	"안아줘":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, hug me~",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, I want to put my cock in your pussy~",
				},
			]
		},
	],
	"놀아줘":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Let's play, sis~<br>Get on all fours like a puppy~",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"The way you twitch every time I pound you is hilarious!",
				},
			]
		},
	],
	"누나는장난감이야":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Pl-please untie me.<br>This prank has gone too far...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Aren't you going to untie this?<br>You damn little brat!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Aah, I can't move.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"This position is a bit.<br>Even I feel embarrassed...?",
				},
				{
					cond:true, pos:0,
					text:"So this is what your pussy looks like~<br>What would happen if I poked it with this?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Ah♡ Nooo♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"Mmph...♡<br>Mmmph...♡",
				},
				{
					cond:true, pos:0,
					text:"Your pussy is completely soaked~<br>Did you get that turned on? You're such a pervert~",
				},
				{
					cond:true, pos:1,
					text:"Mmmph...♡",
				},
			]
		},
	],
	"이제누나가술래야":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:{v1:"모드", op:"==", v2:0}, pos:0,
					text:"That felt so good~<br>Adult women are so lewd~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"You're a pervert, sis,<br>so you like it when I fuck you with my cock, right?",
				},
			]
		},
	],
	"지면벌칙이야":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:{v1:"모드", op:"==", v2:0}, pos:0,
					text:"You came, so it's a penalty~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"Your pussy is so weak, sis~",
				},
			]
		},
	],
	"약올리기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:{v1:"모드", op:"==", v2:0}, pos:0,
					text:"She's a perverted adult<br>who gets turned on by a kid's cock~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"It's hilarious how you get wet<br>the moment I put my finger in~",
				},
			]
		},
	],

	"악동-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, can I grope your body as I please?",
				},
				{
					cond:true, pos:1,
					text:"Are you alone?<br>Are you lost?",
				},
				{
					cond:true, pos:0,
					text:"I don't know, I just want to touch~<br>Let me touch~",
				},
				{
					cond:true, pos:1,
					text:"Understood. Until we find your guardian,<br>you may play with my body.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, you have a big butt~",
				},
				{
					cond:true, pos:1,
					text:"Get away from me, you brat.<br>I can't stand kids.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"Take this!<br>*slap*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Agh♡<br>Y-you damn little brat!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, show me your pussy~",
				},
				{
					cond:true, pos:1,
					text:"Okay~ Here it is~",
				},
				{
					cond:true, pos:0,
					text:"Kikik, aren't you embarrassed showing your naked<br>pussy to a kid?",
				},
				{
					cond:true, pos:1,
					text:"Huh? Why is showing my pussy...<br>something to be embarrassed about?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"After seeing your body, sis...<br>my wee-wee feels strange!",
				},
				{
					cond:true, pos:1,
					text:"Oh my♡ You have to take care of that right away♡<br>Let big sis help you♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Ah...♡",
				},
				{
					cond:true, pos:1,
					text:"B-big♡<br>This seems bigger... than an adult's cock♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, let's play sex again today~?",
				},
				{
					cond:true, pos:1,
					text:"What role do you want me to play today?",
				},
				{
					cond:true, pos:0,
					text:"Hmm, we did pet last time.<br>Be my fucktoy today~",
				},
				{
					cond:true, pos:1,
					text:"Understood.<br>I will take on the role of a fucktoy.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, can I play with your pussy again today?",
				},
				{
					cond:true, pos:1,
					text:"No.",
				},
				{
					cond:true, pos:0,
					text:"You'll just spread your legs again soon anyway~",
				},
				{
					cond:true, pos:1,
					text:"Haa...<br>Just a little. No more than that.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"What should we play today?",
				},
				{
					cond:true, pos:0,
					text:"Today, I'm going to fuck your pussy a lot,<br>and cum all over your mouth-pussy too~",
				},
				{
					cond:true, pos:1,
					text:"Okay~<br>Let me know if there's anything else you want to do.",
				},
				{
					cond:true, pos:0,
					text:"Kikik, she's so easy~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, it's been a while~<br>I missed your pussy!",
				},
				{
					cond:true, pos:1,
					text:"You were sad big sis couldn't help you get off, right♡<br>Is your cock okay?",
				},
				{
					cond:true, pos:0,
					text:"Yeah, I masturbated a lot thinking about you!",
				},
				{
					cond:true, pos:1,
					text:"Good boy♡ But masturbating isn't enough, right?<br>I'll help you get off for real today♡",
				},
			]
		},
	],
	"악동-이벤트-망할꼬맹이":[ 
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0}, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Hehe...<br>I can feel the essence gathering...",
				},
				{
					cond:true, pos:0,
					text:"The pranks so far were bearable, right?",
				},
				{
					cond:true, pos:0,
					text:"I'm going to get serious now.<br>Sis♡",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1}, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Haa...<br>I'm tired of pretending to be a kid...",
				},
				{
					cond:true, pos:0,
					text:"But females are weak to young and cute things.",
				},
				{
					cond:true, pos:0,
					text:"I just have to keep this up a little longer♡",
				},
			]
		},
	],
	"악동-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You just came, didn't you, sis?<br>I can tell by the way you're twitching♡",
				},
				{
					cond:true, pos:1,
					text:"That is correct.<br>I have just had a light orgasm.",
				},
				{
					cond:true, pos:0,
					text:"You're an adult, sis.<br>But you got turned on by a kid?",
				},
				{
					cond:true, pos:1,
					text:"I apologize.<br>I did feel pleasure...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You just came, didn't you, sis?<br>I can tell by the way you're twitching♡",
				},
				{
					cond:true, pos:1,
					text:"N-no, I didn't!<br>There's no way I'd get turned on by a kid's prank...",
				},
				{
					cond:true, pos:0,
					text:"Then what's this water dripping from your pussy?<br>Liar♡",
				},
				{
					cond:true, pos:1,
					text:"(Ugh, this is so humiliating...<br>But it's just a kid's prank. I have to endure it.)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, did you know you're supposed to pee when you cum?",
				},
				{
					cond:true, pos:1,
					text:"R-really?<br>I didn't know... I'll pee now.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Ngh♡<br>*drip... drip...*",
				},
				{
					cond:true, pos:0,
					text:"Eheh, gross!<br>You really did it~ What an idiot~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"S-such intense pressure...♡<br>And it's a bit long... so it's reaching deep inside♡",
				},
				{
					cond:true, pos:1,
					text:"I love this cock so much♡<br>What is this♡",
				},
				{
					cond:true, pos:0,
					text:"Your bare pussy feels so good, sis♡<br>Can I cum inside?",
				},
				{
					cond:true, pos:1,
					text:"Yes, of course♡<br>Cum deep inside me♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I have just had a light orgasm.",
				},
				{
					cond:true, pos:0,
					text:"Shut up, sis~<br>A fucktoy's role is to be quiet and let its holes be used♡",
				},
				{
					cond:true, pos:1,
					text:"I apologize.<br>My understanding of my role was insufficient.",
				},
				{
					cond:true, pos:1,
					text:"I will be quiet from now on.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"Kgh...",
				},
				{
					cond:true, pos:0,
					text:"Eeh~ Are you mad because I played with your pussy, sis?",
				},
				{
					cond:true, pos:1,
					text:"Th-that's not it...",
				},
				{
					cond:true, pos:1,
					text:"Not just your fingers...<br>use your cock too...",
				},
				{
					cond:true, pos:0,
					text:"Hehe, finally being honest, are we?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"I want to show off your pussy to my friends~<br>Can I call them over and gangbang you?",
				},
				{
					cond:true, pos:1,
					text:"Haa♡<br>Yes, of course♡",
				},
				{
					cond:true, pos:0,
					text:"Those homeless guys look pitiful,<br>let's let them have a go too~",
				},
				{
					cond:true, pos:1,
					text:"Okay♡<br>You're such a good boy, knowing how to share what you like♡",
				},
				{
					cond:true, pos:0,
					text:"Just kidding. You're mine alone, sis.<br>Never spread your legs for anyone else.",
				},
				{
					cond:true, pos:1,
					text:"Okay♡<br>This side of you is adorable too♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Your pussy feels so good, sis♡<br>It's nothing compared to the other onahole sluts' pussies♡",
				},
				{
					cond:true, pos:1,
					text:"Yeah♡ Your cock feels good too, little brother♡",
				},
				{
					cond:true, pos:1,
					text:"I guess we're just a perfect match♡",
				},
				{
					cond:true, pos:1,
					text:"Because big sis can't cum<br>without little brother's cock anymore♡",
				},
			]
		},
	],
	"악동-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis~ Are you okay~?<br>You're trembling from cumming so much~",
				},
				{
					cond:true, pos:1,
					text:"I-I'm fine♡<br>No... problem...♡",
				},
				{
					cond:true, pos:0,
					text:"I want to play with you for longer~<br>You'll break at this rate, you know?",
				},
				{
					cond:true, pos:1,
					text:"D-don't worry...♡<br>Being used until I break... is also my role...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"Oook♡ Oooook♡",
				},
				{
					cond:true, pos:0,
					text:"Are you still going to lie about not having cum~?",
				},
				{
					cond:true, pos:1,
					text:"I came♡ I caaame♡<br>I'm sorry♡ Forgive me...♡",
				},
				{
					cond:true, pos:0,
					text:"Didn't you say you wouldn't get off on a kid's cock~?<br>You shouldn't lie~",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"I-I came♡ With a kid's cock...<br>pounding my pussy♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"I came♡<br>S-so... please stop...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"Haang♡ Haaaang♡",
				},
				{
					cond:true, pos:0,
					text:"You came again, sis?<br>Getting off while having sex with a kid is a bad thing, you know~",
				},
				{
					cond:true, pos:1,
					text:"I'm sorry...♡ I'm sorry...♡<br>I'm a pervert... I'm sorry♡",
				},
				{
					cond:true, pos:0,
					text:"That won't do~<br>If you do something bad, you have to be punished~♡",
				},
				{
					cond:true, pos:1,
					text:"I'll be punished...♡<br>Please punish... my perverted pussy♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"This is amaziiing♡<br>My insides are being pounded by a huge cock♡",
				},
				{
					cond:true, pos:1,
					text:"Aha♡ My tits are being groped like toys,<br>I'm falling for shota sex♡",
				},
				{
					cond:true, pos:0,
					text:"Okay, I've decided~<br>From now on, I'll use your pussy to masturbate~♡",
				},
				{
					cond:true, pos:1,
					text:"Okay♡ Okay♡<br>Big sis is little brother's onahole now♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Ngh♡<br>Mmph...♡",
				},
				{
					cond:true, pos:0,
					text:"Hehe, you look so funny right now,<br>desperately trying not to make a sound~",
				},
				{
					cond:true, pos:0,
					text:"I love you so much, sis♡<br>Will you be my personal fucktoy for real, not just for play?",
				},
				{
					cond:true, pos:1,
					text:"*nods...*",
				},
				{
					cond:true, pos:0,
					text:"Alright, you're mine now, sis~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis~♡ I'm going to cum inside, so make sure to get pregnant~♡<br>Hmm? Suddenly no response.",
				},
				{
					cond:true, pos:1,
					text:"(No... Get a grip!)",
				},
				{
					cond:true, pos:1,
					text:"(Lusting after a child is not right.<br>I may fall, but I will not abandon my humanity!)",
				},
				{
					cond:true, pos:0,
					text:"Sis~ Sis?<br>... Mommy~♡",
				},
				{
					cond:true, pos:1, effect:"diffusion",
					text:"...!!!",
				},
				{
					cond:true, pos:1,
					text:"Yes♡ This mommy will do her best to get pregnant♡<br>I love you♡ I love you♡ I love youuu♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"I love you, sis♡<br>Let's get married♡",
				},
				{
					cond:true, pos:1,
					text:"Me too♡<br>Let's get married when you grow up♡",
				},
				{
					cond:true, pos:0,
					text:"I don't want to wait.<br>Marry my wee-wee right now♡",
				},
				{
					cond:true, pos:1,
					text:"Okay♡<br>Big sis is little brother's cock's bride now♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Hehe, thanks to you, sis, I've become a real adult♡",
				},
				{
					cond:true, pos:1,
					text:"Yeah♡ That's right♡<br>And thanks to you, little brother, big sis has become a real woman♡",
				},
				{
					cond:true, pos:0,
					text:"Hey, sis~ Don't say things like that♡<br>A pervert like you isn't an ordinary woman♡",
				},
				{
					cond:true, pos:1,
					text:"That's right♡ What you made wasn't just a woman...<br>it's a perverted slut onahole dripping with pussy juice♡",
				},
			]
		},
	],

//###################################################################################################################################################################################
	
	"방어구파괴":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text:"*Kuuuoooh!!*",
				},
			]
		},
	],
	"타우로스울음":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Moooooo!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Huuuu...<br>Prrrr...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Grrrr...<br>Mooo...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Rumble... Krrr...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Huooo...<br>Fuuuu...*",
				},
			]
		},
	],
	"교배프레스":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Huooooo!!! Prrrng!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Ruuuumble... Mooo!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Hoo... Huooooo!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Grrrr... Mooo!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Huuuu... Uoooo!!!*",
				},
			]
		},
	],
	"구애":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"A very large cock.<br>There is a high probability that my pussy will not be able to withstand it.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Y-you're kidding...<br>How am I supposed to handle a cock this size...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"A-are... cocks...<br>normally this huge...?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"You're going to... ravage me... with this...♡",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Analyzing the cock.<br>It appears to be... larger than before.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Y-you think showing me something like this...<br>is going to intimidate me...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I-it's still huge, but...<br>it somehow managed to fit.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"A huge... and masculine cock♡<br>Just looking at it... is making my womb throb♡",
				},
			]
		},
	],


	"타우로스-휴식":[ 
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"!=", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Hoo... Hoo...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"==", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Hoo... Hoo...*",
				},
			]
		},
	],

	"타우로스-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					text:"To process the Tauros's sexual desire...<br>I will comply.",
				},
				{
					cond:true, pos:1,
					text:"My pussy will probably be destroyed.",
				},
				{
					cond:true, pos:1,
					text:"As a sex-processing hole for the Tauros,<br>I will do my best.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"A-are... you kidding me?<br>Is that really a cock?",
				},
				{
					cond:true, pos:1,
					text:"There's no way something that big will fit!!",
				},
				{
					cond:true, pos:0,
					text:"*Prrr...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"W-wait... Don't come closer!",
				},
				{
					cond:true, pos:1,
					text:"No, my pussy is not your disposable masturbation toy!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrreung...*",
				},
				{
					cond:true, pos:1,
					text:"You poor thing...<br>You're in pain from being so aroused, aren't you...?",
				},
				{
					cond:true, pos:1,
					text:"Don't worry.<br>Use my pussy as you please.",
				},
				{
					cond:true, pos:1,
					text:"Haha... Now that I see it up close...<br>it's even bigger...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"If I put something like that in... my pussy will be so stretched out,<br>I'll never be able to use it again...♡",
				},
				{
					cond:true, pos:1,
					text:"What should I do♡",
				},
				{
					cond:true, pos:0,
					text:"*Hoo... Hoo...*",
				},
				{
					cond:true, pos:1,
					text:"*gulp*",
				},
				{
					cond:true, pos:1,
					text:"What should I do♡ Seeing such a magnificent cock,<br>how could any female resist♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					text:"The Tauros's giant cock has been confirmed.",
				},
				{
					cond:true, pos:1,
					text:"It has grown larger than before, but<br>it is expected to fit all the way to the hilt.",
				},
				{
					cond:true, pos:1,
					text:"From now on, I will become a single onahole.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					text:"I knew you'd show up.",
				},
				{
					cond:true, pos:1,
					text:"Now my pussy can only... with your cock...",
				},
				{
					cond:true, pos:1,
					text:"A-ah, it's nothing!<br>Hmph, bring it on.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					text:"So, I was an onahole<br>for Master Tauros's cock, right?",
				},
				{
					cond:true, pos:1,
					text:"The reason my pussy is loose<br>was to accommodate the giant cock without any problems.",
				},
				{
					cond:true, pos:1,
					text:"I'm happy to finally be able to fulfill my purpose again!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					text:"I can't do it without your cock anymore♡",
				},
				{
					cond:true, pos:1,
					text:"My hole has changed to fit your shape♡<br>Take responsibility♡",
				},
			]
		},
	],
	"타우로스-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"Hnngh... Haaaak...♡",
				},
				{
					cond:true, pos:1,
					text:"I-I can... endure it♡",
				},
				{
					cond:true, pos:0,
					text:"*Kuaaaang!!<br>Prrrr...*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Uuugh...!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1, portrait:"ecstasy2", keepPort:true,
					text:"Save... Save me♡<br>Aaaak♡ This will kill me♡ I'm really going to die♡",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Krrrng!*",
				},
				{
					cond:true, pos:1,
					text:"P-painful♡<br>Oook♡ M-my body... is convulsing♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"No way♡ Aaaak♡<br>Why am I feeling... pleasure♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Mooooo!!!<br>Huooo!!!*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"Aahik♡ You're moving too hard♡<br>My body, my body won't listen to me♡",
				},
				{
					cond:true, pos:1,
					text:"Master Tauros?<br>Pl-please be a little more gentle...",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2", effect:"shake",
					text:"I-I didn't know...<br>it would be this painful...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I can't believe it♡ I-it all went in♡",
				},
				{
					cond:true, pos:1,
					text:"My insides are filled with cock♡<br>It's painful, but... I feel satisfied♡",
				},
				{
					cond:true, pos:1,
					text:"M-maybe♡ I...♡",
				},
				{
					cond:true, pos:1,
					text:"was born...<br>to be used as Master Tauros's onahole♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I had a light orgasm...<br>but there is no problem.",
				},
				{
					cond:true, pos:0,
					text:"*Hoo hoo*",
				},
				{
					cond:true, pos:1,
					text:"My legs are convulsing...<br>but I can still move.",
				},
				{
					cond:true, pos:1,
					text:"I will focus on tightening.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Hah♡ Heok♡",
				},
				{
					cond:true, pos:0,
					text:"*Grrr... Hoo...*",
				},
				{
					cond:true, pos:1,
					text:"Still... ridiculously huge...",
				},
				{
					cond:true, pos:1,
					text:"Ugh... my belly is bulging in the shape of a cock...♡",
				},
				{
					cond:true, pos:1,
					text:"(But still... maybe the pleasure<br>is a little greater than the pain♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haak♡ Hak♡",
				},
				{
					cond:true, pos:1,
					text:"I-it's all in... to the hilt♡",
				},
				{
					cond:true, pos:0,
					text:"*Grrr... Hoo...*",
				},
				{
					cond:true, pos:1,
					text:"H-how is it... my hole♡<br>It's useful, right♡",
				},
				{
					cond:true, pos:1,
					text:"My pussy must be the only one that can<br>swallow Master Tauros's cock♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Here it comes♡ The giant cock is here♡",
				},
				{
					cond:true, pos:0,
					text:"*Grrr... Hoo...*",
				},
				{
					cond:true, pos:1,
					text:"The suffocating feeling of my insides<br>being filled with just cock...♡",
				},
				{
					cond:true, pos:1,
					text:"It's the best♡<br>This is what I wanted♡",
				},
			]
		},
	],
	"타우로스-이벤트-타락":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"*quiver quiver...*",
				},
				{
					cond:true, pos:1,
					text:"Ugh♡ Aguuk...♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"Aahk♡ Ahiik♡",
				},
			]
		},
	],

//###################################################################################################################################################################################
	
	"부식즙":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Pshhh...*",
				},
			]
		},
	],

	"번식":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Gogogok...",
				},
			]
		},
	],
	"양분흡수":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Suck suck*",
				},
			]
		},
	],
	"씨뿌리기":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Pshhh...*",
				},
			]
		},
	],

	"버섯남자-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"The opponent appears to be undead,<br>but its reproductive functions seem to be working.",
				},
				{
					cond:true, pos:1,
					text:"In that case, I must have sex.",
				},
				{
					cond:true, pos:0,
					text:"Eunggogogok...",
				},
				{
					cond:true, pos:1,
					text:"I have finished preparing to mate with it.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"What is this? Is a corpse moving?<br>How disgusting...",
				},
				{
					cond:true, pos:1,
					text:"I have to have sex with a monster like this?<br>No way! Don't come near me!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Pshhh...*",
				},
				{
					cond:true, pos:1,
					text:"(Huh...? Why does my body feel so sluggish...?<br>My vision is blurring...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Wow, a giant mushroom on its head...!<br>I've never seen anything like it.",
				},
				{
					cond:true, pos:0,
					text:"Gigigigik...",
				},
				{
					cond:true, pos:1,
					text:"Anyway, I just have to have sex, right?<br>I'm ready to spread my legs.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"It's covered in mushrooms~<br>But my favorite mushroom is...",
				},
				{
					cond:true, pos:1,
					text:"...the cock-mushroom hanging down there, of course♡",
				},
				{
					cond:true, pos:0,
					text:"Gogogok...",
				},
				{
					cond:true, pos:1,
					text:"Wow♡ For an undead, that's a pretty magnificent piece♡<br>Looks like I'm in for some fun♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*You will become a part of us.<br>Offer your body for the swarm.*",
				},
				{
					cond:true, pos:1,
					text:"The one I serve is the Arena.<br>You should not mistake your master.",
				},
				{
					cond:true, pos:1,
					text:"My duty is only to have sex with you,<br>as commanded by the Arena.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*You are a tool for reproduction.<br>Follow our will.*",
				},
				{
					cond:true, pos:1,
					text:"Hmph, you think I'd be swayed by that?",
				},
				{
					cond:true, pos:1,
					text:"Well, if reproduction means sex...<br>I guess I can do that.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*You are with us.<br>Accept more spores.*",
				},
				{
					cond:true, pos:1,
					text:"Yes, my Lord.<br>My body already belongs to the Spore Lord.",
				},
				{
					cond:true, pos:1,
					text:"As a cornerstone for the domination of humanity,<br>I wish for you to use my flesh.",
				},
				{
					cond:true, pos:1,
					text:"Huh? What did I just say?<br>My mouth moved on its own...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*You will become a part of us.<br>Work for the swarm.*",
				},
				{
					cond:true, pos:1,
					text:"Sorry♡ I'm not interested in that♡",
				},
				{
					cond:true, pos:1,
					text:"I'm happy as long as I get to enjoy sex♡",
				},
			]
		},
	],
	"버섯남자-이벤트-정신동기화":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Your Majesty...?",
				},
				{
					cond:true, pos:1,
					text:"Ah, no, you mustn't...<br>It's embarrassing...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Filthy... Eldorians...",
				},
				{
					cond:true, pos:1,
					text:"Even if you beg now... it's useless...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"My lady...?",
				},
				{
					cond:true, pos:1,
					text:"Why are you... to me...<br>Am I... precious...?",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Found... my friend...",
				},
				{
					cond:true, pos:1,
					text:"I... saved you...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"A true... unrestrained... adventure...",
				},
				{
					cond:true, pos:1,
					text:"My family... acknowledged me...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Vulgar... Eldorians...",
				},
				{
					cond:true, pos:1,
					text:"The sight of you kneeling... is pleasing...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Raising the honor... of the tribe...",
				},
				{
					cond:true, pos:1,
					text:"Peace... and tranquility... have come...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"I saved... everyone...",
				},
				{
					cond:true, pos:1,
					text:"They call me... a hero...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"I hate... being in front of people now...",
				},
				{
					cond:true, pos:1,
					text:"In a quiet place... peacefully...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Everyone... likes me...",
				},
				{
					cond:true, pos:1,
					text:"I'm the continent's biggest... superstar...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"A true battle... with the strong...",
				},
				{
					cond:true, pos:1,
					text:"A life-or-death... duel...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Oh... Lady Aleia...",
				},
				{
					cond:true, pos:1,
					text:"You were... watching over me...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Oh... Lord Morvane...",
				},
				{
					cond:true, pos:1,
					text:"I chose... the right path...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Oh... Lady Rhea...",
				},
				{
					cond:true, pos:1,
					text:"My mission... has been acknowledged...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"A great... discovery...",
				},
				{
					cond:true, pos:1,
					text:"Everyone... is praising me...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"The experiment... is a great success...",
				},
				{
					cond:true, pos:1,
					text:"For the endless glory... of the Sylvanian Federation...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Finally... I'm acknowledged...",
				},
				{
					cond:true, pos:1,
					text:"I finally have... a degree...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"All knowledge... is here...",
				},
				{
					cond:true, pos:1,
					text:"Learning truly... has no end...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Wealth... and power...",
				},
				{
					cond:true, pos:1,
					text:"I am the king... of the underworld...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"A mind magic... I've never seen before...",
				},
				{
					cond:true, pos:1,
					text:"Interesting... amusing...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Freedom... for the Halfmen...",
				},
				{
					cond:true, pos:1,
					text:"No more... discrimination...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Gold and treasures... everywhere...",
				},
				{
					cond:true, pos:1,
					text:"I don't have to... wander anymore...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"The business... is in the black...",
				},
				{
					cond:true, pos:1,
					text:"The investment... is a huge success...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"A relic... from the age of myths...",
				},
				{
					cond:true, pos:1,
					text:"A great discovery... in history...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"I won't be... disturbed anymore...",
				},
				{
					cond:true, pos:1,
					text:"I can continue... with my favorite crafts...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Huge profits... a great success...",
				},
				{
					cond:true, pos:1,
					text:"A merchant company... in my name...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"You were... alive...",
				},
				{
					cond:true, pos:1,
					text:"I've finished... your revenge...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"I can do... anything...",
				},
				{
					cond:true, pos:1,
					text:"Everything... I want...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"A huge... amount of money...",
				},
				{
					cond:true, pos:1,
					text:"With this... anything is possible...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Fighting... endless fighting...",
				},
				{
					cond:true, pos:1,
					text:"It's fun... my blood boils...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Allegiance... to Lord Cock...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"엘리트"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Service... to the male...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"연예인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Everyone... lusts... for me...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"종교인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"I must... worship... Lord Cock...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Endlessly research... the pleasure of sex...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Hit me... harder...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"상인"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Semen... overflowing semen...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.배경", op:"==", v2:"용병"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"The pleasure... of sex duels...",
				},
			]
		},
	],
	"버섯남자-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I have had a light orgasm.",
				},
				{
					cond:true, pos:1,
					text:"I feel an abnormal sense of euphoria and pleasure.",
				},
				{
					cond:true, pos:1,
					text:"This is presumed to be the effect of the continuously inhaled spores.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Damn it... me, feeling pleasure while having sex<br>with this rotten thing? No way!",
				},
				{
					cond:true, pos:1,
					text:"Haa... But... my body...<br>why is it getting so hot...",
				},
				{
					cond:true, pos:1,
					text:"A little more... deeper inside me...<br>I wish you would... spray your spore-semen...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Aah♡ I came...",
				},
				{
					cond:true, pos:0,
					text:"*Accept it...<br>You are a tool for reproduction...*",
				},
				{
					cond:true, pos:1,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"I am... a tool... for reproduction...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haah♡<br>This cock deserves a pretty high score♡",
				},
				{
					cond:true, pos:1,
					text:"It feels good♡ A little tingly...<br>and I feel a bit dizzy...♡",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"Nnngh♡<br>The more I look... the more handsome he seems...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Reporting... reporting...<br>My body belongs to the Arena...",
				},
				{
					cond:true, pos:1,
					text:"No, it belongs to the Lord... No...!",
				},
				{
					cond:true, pos:1,
					text:"I am carrying out the command... of the Arena...",
				},
				{
					cond:true, pos:1,
					text:"No, the Lord's... no... I will follow the command...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Reproduce. Reproduce.<br>Reproduce. Reproduce.*",
				},
				{
					cond:true, pos:1,
					text:"If you thought I would obey your command...<br>you are gravely mistaken...",
				},
				{
					cond:true, pos:1,
					text:"This is because I want to do it...♡<br>This is... reproduction that I desire♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*You are a faithful servant.<br>Accept more spores.*",
				},
				{
					cond:true, pos:1,
					text:"Ang♡ Aang♡<br>All hail the Spore Lord♡",
				},
				{
					cond:true, pos:1,
					text:"Haang♡<br>All haail♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haa♡ I love reproduction sex so much♡",
				},
				{
					cond:true, pos:0,
					text:"*You already belong to the swarm.<br>Seep in deeper.*",
				},
				{
					cond:true, pos:1,
					text:"If it's this good, I'll do it♡<br>Spores, cock, I'll take it all♡",
				},
			]
		},
	],
	"버섯남자-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Accepting more spores...♡<br>My body belongs to the swarm...♡",
				},
				{
					cond:true, pos:1,
					text:"My womb is filled with spore-semen...♡",
				},
				{
					cond:true, pos:0,
					text:"*Reproduce...<br>Become a seedbed...*",
				},
				{
					cond:true, pos:1,
					text:"Following the command...♡<br>Initiating ovulation...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Reproduce...<br>Become a seedbed...*",
				},
				{
					cond:true, pos:1,
					text:"I have no choice...♡<br>If it's the Lord's command... I must obey...♡",
				},
				{
					cond:true, pos:1,
					text:"Because I am... a tool... for reproduction...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Reproduce...<br>Become a seedbed...*",
				},
				{
					cond:true, pos:1,
					text:"Yes... my Lord...<br>I have realized my body exists for reproduction...♡",
				},
				{
					cond:true, pos:1,
					text:"Please, this body and mind...<br>use them as nutrients... for reproduction...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haang♡ Ang♡<br>Harder♡ Fuck me harder♡",
				},
				{
					cond:true, pos:0,
					text:"*Reproduce...<br>Become a seedbed...*",
				},
				{
					cond:true, pos:1,
					text:"Yes♡ I will♡<br>Sow your seeds deep in my womb...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond: true,
					pos: 1,
					text: "All hail the Spore Lord...♡<br>All hail the Spore Lord...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "My womb to the Spore Lord...♡<br>My womb to the Spore Lord...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "Accepting more spores...♡<br>Accepting more spores...♡"
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond: true,
					pos: 1,
					text: "I can't resist...♡<br>I must not resist...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "My mind is insignificant...♡<br>My flesh is useless...♡"
				},
				{
					cond: true,
					pos: 1,
					text: "My mind is the Lord's...♡<br>My body is the swarm's...♡"
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Allegiance to the Spore Lord...♡<br>Obedience to the Spore Lord...♡",
				},
				{
					cond:true, pos:1,
					text:"My body and mind...♡<br>I offer them to the Spore Lord...♡",
				},
				{
					cond:true, pos:1,
					text:"All hail the Lord...♡<br>Long live the swarm...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haa♡<br>The Lord's cock and spores are the best♡",
				},
				{
					cond:true, pos:1,
					text:"Use my body more♡<br>I love you, my Lord♡",
				},
				{
					cond:true, pos:1,
					text:"I want to be filled with spores♡<br>I want to be covered in mushrooms♡",
				},
			]
		},
	],

//###################################################################################################################################################################################

	"능숙하게벗기기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"Need some help?<br>Undressing is my specialty.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"Let's get undressed first.<br>You look better naked.",
				},
			]
		},
	],

	"깊게박아넣기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:">", v2:0}, pos:0,
					text:"Ha, you're so tight.<br>I'll return the favor and pound you deep.",
				},
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:"==", v2:0}, pos:0,
					text:"Has any cock reached this far?<br>No cock has rubbed the tip like this, right?",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"It goes all the way to the root.<br>Your pussy is completely shaped like my cock.",
				},
			]
		},
	],
	"부드럽게몸을섞기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:"체위", pos:0,
					text:"Leave everything to me,<br>all you have to do is feel.",
				},
				{
					cond:{v1:"체위", op:"==", v2:false}, pos:0,
					text:"If I'm just a little gentle,<br>you'll give in and spread your legs soon enough.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"This is a little bit of service~",
				},
			]
		},
	],
	"강제로거칠게":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.행동.length", op:">=", v2:2}, pos:0,
					text:"No matter how much you play hard to get,<br>it always ends like this when you spread your legs.",
				},
				{
					cond:{v1:"플레이어.행동.length", op:"<", v2:2}, pos:0,
					text:"You're just a bitch who'll moan when fucked,<br>why are you playing so hard to get...",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"I can't take this anymore.<br>I'll just use you like an onahole for a bit.",
				},
			]
		},
	],
	"가득채워주기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"챔피언.기록.이번.이벤트.절정", op:">", v2:0}, pos:0,
					text:"Kgh, you're so tight...<br>You don't mind if I cum inside, right?",
				},
				{
					cond:{v1:"챔피언.기록.이번.이벤트.절정", op:"==", v2:0}, pos:0,
					text:"It's fine~ I'll pull out.<br>(That's a lie, though.)",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"Creampie, obviously, right?",
				},
			]
		},
	],
	"스스럼없는스킨십":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.기록.전체.제거.length", op:">", v2:0}, pos:0,
					text:"She's almost completely given in.<br>So easy~",
				},
				{
					cond:{v1:"플레이어.기록.전체.제거.length", op:"==", v2:0}, pos:0,
					text:"It's not like they'll wear out just from a little groping.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"With those lewd tits and ass...<br>you're trying to seduce me, aren't you?",
				},
			]
		},
	],
	"다리벌리기":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:"==", v2:0}, pos:0,
					text:"Here, the cock you've been waiting for.",
				},
				{
					cond:{v1:"플레이어.기록.이번.이벤트.자극함", op:"!=", v2:0}, pos:0,
					text:"Relax, while I'm still being nice.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"Alright, pussy open!",
				},
			]
		},
	],
	"쾌락을새겨주기":[
		{
			priority:1, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"This is your weak spot, isn't it? The reaction is completely different.<br>Alright, I'll finish you off right now.",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Still holding out?<br>You're so stubborn.",
				},
			]
		},
	],

	"금발양아치-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Let's get to know each other by making love.",
				},
				{
					cond:true, pos:1,
					text:"This is not an act of making love,<br>it is a duel.",
				},
				{
					cond:true, pos:0,
					text:"So stiff.<br>You'll fall for me soon enough anyway.",
				},
				{
					cond:true, pos:1,
					text:"Is that an order?<br>I can act as if I have fallen for you.",
				},
				{
					cond:true, pos:0,
					text:"No need for that.<br>I like it when it's genuine~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You don't look happy.<br>With a lewd body like that, you should be enjoying sex.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Don't touch my body.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"Ouch, so prickly.<br>What are you so unhappy about?",
				},
				{
					cond:true, pos:1,
					text:"Everything.",
				},
				{
					cond:true, pos:1,
					text:"From your rude behavior,<br>to your attitude of thinking I'm your property.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Oh no, what do I do~<br>You're so lewd, my erection won't go down.",
				},
				{
					cond:true, pos:1,
					text:"Huh?<br>Oh, oh my.",
				},
				{
					cond:true, pos:1,
					text:"I'm sorry...<br>Please use my body to relieve yourself.",
				},
				{
					cond:true, pos:0,
					text:"Haha. Hey, you,<br>do people call you a dumbass often?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"You seem pretty confident in your sexual skills, huh?",
				},
				{
					cond:true, pos:0,
					text:"I'm quite a stud.<br>I'm very popular with my slaves... I mean, sex partners.",
				},
				{
					cond:true, pos:1,
					text:"I'm looking forward to it...♡<br>I hope you can satisfy me♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Today, I'm going to make you mine.<br>What do you think about that?",
				},
				{
					cond:true, pos:1,
					text:"I will do my best.<br>Please give me your command.",
				},
				{
					cond:true, pos:0,
					text:"Command, command, it's driving me crazy.",
				},
				{
					cond:true, pos:0,
					text:"I have to tell Sandrea<br>to change her hypnosis methods.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"(For a moment, the moment I saw this man's face,<br>I thought I was happy.)",
				},
				{
					cond:true, pos:1,
					text:"(No, I can't help it...<br>This guy is incredibly good at sex...)",
				},
				{
					cond:true, pos:0,
					text:"What's with the serious face?<br>Are we not having sex?",
				},
				{
					cond:true, pos:1,
					text:"W-we are.<br>I just thought about it for a bit because I hate it so much.",
				},
				{
					cond:true, pos:0,
					text:"You're grinning from ear to ear,<br>but you're still not being honest.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Long time no see.<br>Did you do everything I told you to?",
				},
				{
					cond:true, pos:1,
					text:"Yes! I masturbated every day,<br>and I've finished developing my nipples and anus.",
				},
				{
					cond:true, pos:1,
					text:"It's all thanks to you for teaching me the joy of being a woman.",
				},
				{
					cond:true, pos:0,
					text:"Puhaha, you actually did it.",
				},
				{
					cond:true, pos:0,
					text:"Alright, then I'll do my best<br>to conquer you today, shall I?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Tell me honestly.<br>How many people have you been with since you were with me last?",
				},
				{
					cond:true, pos:1,
					text:"Let's see...<br>I did it 6 times with champions in duels...",
				},
				{
					cond:true, pos:1,
					text:"For entertainment, 27? 28?<br>One time was an orgy, so I don't remember clearly♡",
				},
				{
					cond:true, pos:0,
					text:"Good grief, I guess<br>it's safe to say you've done it with every face I know.",
				},
				{
					cond:true, pos:0,
					text:"But I don't care.<br>Because I'll overwrite all of them with my cock anyway.",
				},
			]
		},
	],
	"금발양아치-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"How is it, feels good, right?",
				},
				{
					cond:true, pos:1,
					text:"That is correct.<br>I have had a light orgasm.",
				},
				{
					cond:true, pos:0,
					text:"I thought you were boring like a robot,<br>but you feel everything, don't you?",
				},
				{
					cond:true, pos:0,
					text:"This is actually fun.<br>I want to play with you a little more.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Puhaha, after acting so high and mighty.<br>Didn't you just cum?",
				},
				{
					cond:true, pos:1,
					text:"N-no, I didn't!<br>There's no way I'd get off on your pathetic sex!",
				},
				{
					cond:true, pos:0,
					text:"Then what was that trembling and tightening about?",
				},
				{
					cond:true, pos:1,
					text:"It was so boring.<br>I was yawning... that's why.",
				},
				{
					cond:true, pos:1,
					text:"(Damn it, so annoying...<br>Why is this guy so good at sex of all things?)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Ah... why is my body like this?<br>I keep feeling... a ticklish sensation inside.",
				},
				{
					cond:true, pos:0,
					text:"It's your pussy that has accepted my cock wanting me.",
				},
				{
					cond:true, pos:1,
					text:"R-really?<br>I've never felt this way before... so I'm not sure.",
				},
				{
					cond:true, pos:0,
					text:"I'll teach you the joy a woman can feel.<br>More clearly.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"So-so♡<br>You're pretty good♡",
				},
				{
					cond:true, pos:1,
					text:"The size is a passing grade♡<br>You're hitting all the right spots♡",
				},
				{
					cond:true, pos:0,
					text:"Of course.<br>I know how to handle women best.",
				},
				{
					cond:true, pos:0,
					text:"So, how about it?<br>Will you admit it and accept defeat?",
				},
				{
					cond:true, pos:1,
					text:"No♡ Not yet♡<br>I want to enjoy this a little more♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"I realized. With your state, mental pressure is difficult,<br>so I just have to engrave it into your body.",
				},
				{
					cond:true, pos:0,
					text:"How was that just now?<br>Report to me.",
				},
				{
					cond:true, pos:1,
					text:"During the thrusting,<br>the feeling of my pussy being pulled out was good, so I came.",
				},
				{
					cond:true, pos:0,
					text:"Any feedback?",
				},
				{
					cond:true, pos:1,
					text:"When you pound, if you hit the inner wall more,<br>I think I can cum even more.",
				},
				{
					cond:true, pos:0,
					text:"Got it.<br>I think I finally understand how to use you.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Choose. Should I pound you deeper?<br>Or should I stop and pull out?",
				},
				{
					cond:true, pos:1,
					text:"You want me to... say it myself?",
				},
				{
					cond:true, pos:0,
					text:"Pull out?",
				},
				{
					cond:true, pos:1,
					text:"... Pound me.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You liked it when I poked you here, right?",
				},
				{
					cond:true, pos:1,
					text:"That's right♡<br>You remembered♡",
				},
				{
					cond:true, pos:0,
					text:"Of course.<br>I don't forget things about my woman.",
				},
				{
					cond:true, pos:1,
					text:"Hehe, am I your woman?<br>Then, do you remember my name too?",
				},
				{
					cond:true, pos:0,
					text:"No.<br>Why would I remember a pussy's name?",
				},
				{
					cond:true, pos:1,
					text:"Th-that's true, too!<br>Hehe...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"How is it, my cock is the best, right?",
				},
				{
					cond:true, pos:1,
					text:"Nnngh♡<br>I can never feel like this with other cocks♡",
				},
				{
					cond:true, pos:0,
					text:"How were the other cocks?",
				},
				{
					cond:true, pos:1,
					text:"I don't know♡ I don't remember♡<br>The moment this one went in♡ I forgot everything♡",
				},
			]
		},
	],
	"금발양아치-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I... came♡",
				},
				{
					cond:true, pos:0,
					text:"That's too short.<br>You need to report properly where and how you felt it, right?",
				},
				{
					cond:true, pos:1,
					text:"My... pussy...♡<br>It felt... your cock... and came♡",
				},
				{
					cond:true, pos:0,
					text:"Really, you're so disheveled, I can't even imagine how you looked at first.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Haha, you said not to touch you.<br>Hands are off-limits, but cock is okay?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Haah♡ Feels so good...♡",
				},
				{
					cond:true, pos:0,
					text:"You said you hated that I treated you like my property, right?",
				},
				{
					cond:true, pos:0,
					text:"Your pussy has become mine,<br>so what happened?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"I didn't know about this...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"So, how was that just now?",
				},
				{
					cond:true, pos:1,
					text:"It was... amazing...♡",
				},
				{
					cond:true, pos:0,
					text:"Seeing as you still have the energy to talk,<br>I'll have to make you feel something even more amazing next.",
				},
				{
					cond:true, pos:1,
					text:"Y-yes...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haa♡ Stop it♡<br>If you do more... I think I'll really... go crazy♡",
				},
				{
					cond:true, pos:0,
					text:"You said you wanted to enjoy it for a long time, right?<br>I can go on like this for hours.",
				},
				{
					cond:true, pos:1,
					text:"It's too deep♡<br>It feels so good, I think I'm going crazy♡",
				},
				{
					cond:true, pos:0,
					text:"You acted all experienced and confident.<br>It was just the bluff of a worthless pussy.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text:"Hauuk♡ Haaaang♡",
				},
				{
					cond:true, pos:0,
					text:"Now tell me.<br>Whose body is this?",
				},
				{
					cond:true, pos:1,
					text:"Yours...♡<br>It's all... yours...♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"My breasts... my pussy...♡<br>Everything... is yours...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haa... Haa...♡ I love you...♡",
				},
				{
					cond:true, pos:1,
					text:"I thought I hated you...<br>But now... I can't live without you...♡",
				},
				{
					cond:true, pos:0,
					text:"Good, since you were honest.<br>I'll reward you by fucking you with my cock.",
				},
				{
					cond:true, pos:1,
					text:"Yay...♡ I'm so happy...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Haa... Haa... I love you♡<br>Please be my boyfriend♡",
				},
				{
					cond:true, pos:0,
					text:"Boyfriend?<br>You think you and I are on equal footing?",
				},
				{
					cond:true, pos:0,
					text:"You're just an onahole.<br>To be used and thrown away when I get bored.",
				},
				{
					cond:true, pos:1,
					text:"I don't care♡<br>As long as I'm yours, I don't care about anything♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"I'll be honest.",
				},
				{
					cond:true, pos:0,
					text:"I was planning to leave the Arena a long time ago,<br>but I stayed because of you.",
				},
				{
					cond:true, pos:0,
					text:"Why don't you just leave with me?",
				},
				{
					cond:true, pos:1,
					text:"Haa♡ I can't...♡ I belong to the Arena...♡<br>Until I lose... I can't leave...♡",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:0,
					text:"Alright.<br>At the very least, I hope I'm the one to end it.",
				},
			]
		},
	],

//###################################################################################################################################################################################
	"복장교정":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"How arrogant.<br>A female slave daring to wear clothes.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*swish, slap*",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"Who said you could wear something like that?",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*swish, slap*",
				},
			]
		},
	],

	"쾌락조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"I'll make you think of nothing but cock.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"Your pussy is no longer yours.",
				},
			]
		},
	],
	"약물조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"This is a special drug prepared for you.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"If you want the drug,<br>show me the proper attitude.",
				},
			]
		},
	],
	"고문조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"Engrave this pain and fear.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"It's no longer a punishment, but a reward.",
				},
			]
		},
	],
	"징벌":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"You need to be punished.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"That's enough, break already.",
				},
			]
		},
	],
	"성감대조교":[
		{
			priority:0, cond:{v1:"모드", op:"==", v2:0},
			lineList:[
				{
					cond:true, pos:0,
					text:"I'll develop you so you cum<br>just from being touched.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					text:"I will check the results of your development.",
				},
			]
		},
	],
	"채찍질":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Slap, slap!*",
				},
			]
		},
	],

	"필사적인저항":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will never submit.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"You think... I'll lose...<br>to a guy like you...?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I haven't...<br>given in yet...!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"How boring...<br>It doesn't even tickle...!",
				},
			]
		},
	],

	"조교사-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You, what is your name?",
				},
				{
					cond:true, pos:1,
					text:"My name is {name}.",
				},
				{
					cond:true, pos:0,
					text:"No, your name from now on is Sex-Processing Fucktoy.",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"Understood.<br>My name is Sex-Processing Fucktoy.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"I'm evaluating your product value.<br>Don't cover up, expose yourself.",
				},
				{
					cond:true, pos:1,
					text:"Shut up, I'm not a product!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Agh...<br>My, my cheek...",
				},
				{
					cond:true, pos:0,
					text:"Stand up straight.",
				},
				{
					cond:true, pos:1,
					text:"U-ugh...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Get on your knees, fuck-slave.",
				},
				{
					cond:true, pos:1,
					text:"H-huh?<br>Me...?",
				},
				{
					cond:true, pos:0,
					text:"Who else here is a fuck-slave but you?",
				},
				{
					cond:true, pos:0,
					text:"Are you not paying attention?<br>Do you want to be whipped?",
				},
				{
					cond:true, pos:1,
					text:"N-no. I'll get on my knees...<br>Please don't hit me...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"A high-quality product.<br>You'll sell for a high price.",
				},
				{
					cond:true, pos:1,
					text:"Is that a compliment?<br>Thank you♡",
				},
				{
					cond:true, pos:0,
					text:"However, your mental state is rotten.",
				},
				{
					cond:true, pos:0,
					text:"I will correct you so that you can become<br>an excellent product.",
				},
				{
					cond:true, pos:1,
					text:"Please be good and gentle♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Introduce yourself.",
				},
				{
					cond:true, pos:1,
					text:"I am a sex-processing fucktoy<br>that exists to extract semen.",
				},
				{
					cond:true, pos:1,
					text:"Not just my pussy, but oral and anal sex are also<br>freely available.",
				},
				{
					cond:true, pos:1,
					text:"Please, ravage this fucktoy's holes as you wish.",
				},
				{
					cond:true, pos:0,
					text:"Perfect.<br>Now, let's see you in action.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Do you think I'll become a slave?<br>Too bad, your training was a huge failure.",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"Heh. Isn't that because your training skills<br>were pathetic in the first place?",
				},
				{
					cond:true, pos:0,
					text:"... ...",
				},
				{
					cond:true, pos:1,
					text:"(What...<br>Why... why aren't you punishing me...?)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I heard you would be ending my life today...<br>Please take good care of me...",
				},
				{
					cond:true, pos:0,
					text:"Hmph.",
				},
				{
					cond:true, pos:1,
					text:"Eek...! I-I'm sorry!<br>For a fuck-slave to speak without permission...",
				},
				{
					cond:true, pos:1,
					text:"I'll apologize by dogeza right now...<br>Please forgive... no, punish me...",
				},
				{
					cond:true, pos:0,
					text:"(The mental training went well.)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"The contents of the survey I ordered you to submit were a mess.<br>Are you messing with me?",
				},
				{
					cond:true, pos:1,
					text:"Whyy♡ I did everything you told me to♡",
				},
				{
					cond:true, pos:0,
					text:"Preferences, desired improvements, weaknesses.<br>Is writing just 'cock' for everything what you call doing it?",
				},
				{
					cond:true, pos:1,
					text:"But I like cock♡<br>And I want to be fucked by cock more♡",
				},
				{
					cond:true, pos:1,
					text:"And I can't do anything when I'm being fucked by a cock♡",
				},
			]
		},
	],
	"조교사-이벤트-조교성공":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"",
				},
			]
		},
	],
	"조교사-이벤트-흥분":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Fucktoy, answer.<br>What was the cause of your recent orgasm?",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"Sir. Reporting.",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"During the piston movement,<br>the pressure on the G-spot was decisive.",
				},
				{
					cond:true, pos:0,
					text:"Good, report all your weak spots during training.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap!*",
				},
				{
					cond:true, pos:0,
					text:"Abandon your arrogant attitude,<br>and realize that you are merely an onahole for cock.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"U-ugh...",
				},
				{
					cond:true, pos:1,
					text:"(Every time I'm hit...<br>my mind becomes hazy...)",
				},
				{
					cond:true, pos:1,
					text:"(Am I... an onahole...?)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Who said you could cum without permission?",
				},
				{
					cond:true, pos:1,
					text:"I-I'm sorry...",
				},
				{
					cond:true, pos:0,
					text:"Get on your knees.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap slap*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Aah♡ I-it hurts...<br>but I'm getting turned on...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Present your ass.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Aha♡ W-what was that just now♡<br>It was a thrilling... moment♡",
				},
				{
					cond:true, pos:0,
					text:"You have the makings of a masochistic pervert.<br>I will awaken your true nature.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I came with my pussy.",
				},
				{
					cond:true, pos:1,
					text:"The tip of the glans scraping the back wall of my vagina,<br>giving a pulling sensation, was the decisive cause.",
				},
				{
					cond:true, pos:0,
					text:"From tightness to sensitivity, perfect.<br>Development is complete.",
				},
				{
					cond:true, pos:0,
					text:"From now on, replace the report of the cause of orgasm<br>with words like 'thanks to master's magnificent cock'.",
				},
				{
					cond:true, pos:1,
					text:"Understood.<br>Command updated.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"That was good.<br>Present your cheek.",
				},
				{
					cond:true, pos:1,
					text:"...!<br>H-here!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap!*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"(S-so happy...♡<br>But... why...?)",
				},
				{
					cond:true, pos:0,
					text:"Did you think I wouldn't know your scheme?<br>From today, a slap is a reward for doing well.",
				},
				{
					cond:true, pos:1,
					text:"*sob*<br>I... I'll be an excellent sex slave♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I'm sorry... for being a worthless fuck-slave with a pussy<br>that cums just from being fucked... I'm sorry...",
				},
				{
					cond:true, pos:0,
					text:"Then, let me ask you one thing.<br>Do you wish for punishment, or forgiveness?",
				},
				{
					cond:true, pos:1,
					text:"Th-that's...",
				},
				{
					cond:true, pos:1,
					text:"A fuck-slave shouldn't dare to have desires...<br>Mercy, punishment... it's all up to master's decision...",
				},
				{
					cond:true, pos:0,
					text:"Hahaha, that's the correct answer!<br>You've become a proper fuck-slave!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Oink♡ Oink♡<br>This sow's pussy just came♡",
				},
				{
					cond:true, pos:0,
					text:"I don't remember teaching you such lines.",
				},
				{
					cond:true, pos:1,
					text:"Yeah♡ It's my original♡<br>Everyone seems to like it when I do this♡",
				},
				{
					cond:true, pos:0,
					text:"Unbelievable.<br>Is this what they call a natural talent for being a sex slave?",
				},
			]
		},
	],
	"조교사-이벤트-타락":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Continue to report.<br>What was the cause of this orgasm?",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", name:"성처리 육변기",
					text:"Ohoook♡<br>C-cervix...♡",
				},
				{
					cond:true, pos:0,
					text:"You're too slow!<br>My hand won't wait! Next!",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", name:"성처리 육변기",
					text:"Aguuk♡<br>C-clit... oris...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"From now on, every time you cum,<br>shout 'I am an onahole'.",
				},
				{
					cond:true, pos:1,
					text:"I, I am... an onahole♡<br>I am... an onahole...♡",
				},
				{
					cond:true, pos:0,
					text:"Louder!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Ahaang♡",
				},
				{
					cond:true, pos:1,
					text:"I am an onahole♡<br>I am an onahole♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:1, portrait:"ecstasy2", keepPort:true,
					text:"N-no...♡<br>I-I'm sorry...♡",
				},
				{
					cond:true, pos:1,
					text:"I'm... a pathetic fuck-slave...<br>who can't even hold back an orgasm...♡",
				},
				{
					cond:true, pos:1,
					text:"Punish... punish me...♡",
				},
				{
					cond:true, pos:0,
					text:"Good, the training is almost complete.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Getting off... while being hit... I like it♡",
				},
				{
					cond:true, pos:1,
					text:"Hit my ass more♡<br>Spank spank♡",
				},
				{
					cond:true, pos:0,
					text:"This is your true self.",
				},
				{
					cond:true, pos:0,
					text:"Show the audience clearly<br>what kind of female you are.",
				},
				{
					cond:true, pos:1,
					text:"I am♡ a perverted masochistic sow...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"순종"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Thanks to master's magnificent cock♡<br>this fucktoy's pussy couldn't take it and came♡",
				},
				{
					cond:true, pos:0,
					text:"Perfect.<br>You're ready for shipment.",
				},
				{
					cond:true, pos:0,
					text:"From now on, perform a defeat sex<br>with the goal of submission.",
				},
				{
					cond:true, pos:1,
					text:"Command confirmed♡<br>Initiating worthless pussy sex with the goal of defeat♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"저항"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Kekeke. You're being unusually obedient today.",
				},
				{
					cond:true, pos:1,
					text:"Because♡ I'm an onahole for my master♡",
				},
				{
					cond:true, pos:1,
					text:"An onahole pussy for a cock case♡<br>I've warmed it up and made it wet♡ Use me♡",
				},
				{
					cond:true, pos:0,
					text:"How commendable.<br>I shall give you a reward right now.",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap!!*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Uhoook♡<br>M-master♡ I love youuu♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"무지"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You're just before shipment.<br>This is your last moment as a human.",
				},
				{
					cond:true, pos:0,
					text:"Do you have any last words?",
				},
				{
					cond:true, pos:1,
					text:"Please pound master's cock<br>into this fuck-slave's pussy...♡",
				},
				{
					cond:true, pos:0,
					text:"Haha, I misspoke.<br>You weren't human to begin with.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.성격", op:"==", v2:"적극"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"There were several problems, but<br>your score as a sex slave is excellent.",
				},
				{
					cond:true, pos:0,
					text:"Congratulations.<br>Prepare for shipment.",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Aang♡ I came♡",
				},
				{
					cond:true, pos:1,
					text:"Everyone in the audience, watch♡<br>Watch my pussy twitching from orgasm♡",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"You're so disobedient to the very end!",
				},
			]
		},
	],

//###################################################################################################################################################################################


	"펠라치오":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*slurp, smooch*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*slurp, slurp*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*schleem, schlip*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*schloooorp♡ slurp♡ sluurp♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*shlurrrp♡ schloop♡ sluuuuurp♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*sluuuuurp♡ sluuuuurp♡ shlurrrp♡*",
				},
			]
		},
	],

	"애무":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*rub rub*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*caress caress*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*stroke stroke*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*rub rub♡ caress caress♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*stroke♡ caress stroke♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*caress♡ stroke stroke♡*",
				},
			]
		},
	],

	"키스":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*smooch*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*peck*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*mwah*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"Nnngh♡ *mwah♡ slurp♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"Nnngh♡ *peck♡ peck♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"Nnngh♡ *lick♡ mwaah♡*",
				},
			]
		},
	],

	"삽입":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*throb throb*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*pound pound*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*thrust, pound pound*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*plunge♡ throb♡ throoob♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*pound♡ pound♡ pound♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*thrust♡ slap♡ slap♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*throb♡ throb♡ pound♡ pound♡*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*squish squelch♡ pound♡ pound♡*",
				},
			]
		},
	],

	"유혹":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Will you... fuck me here...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Why do you like things like this...<br>Pervert...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I want you to fuck me here...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"This place is empty,<br>won't someone fuck me~",
				},
			]
		},
	],

	"체위변경":[
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will assume a more efficient position♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Doing it like this...<br>is a little better...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"It will feel good if we do it in this position♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I like this position better♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will change my position.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"I'll decide the position...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I like this position.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Let's enjoy this position.",
				},
			]
		},
	],

	"초월":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I have acquired the truth♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"This endlessly flowing forbidden language...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Ah, my brain feels like it's going to burn out...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Let me feel more of this power♡",
				},
			]
		},
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will realize the forbidden knowledge♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Show me more♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Infinite truth... is piercing through me♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I'm being dominated♡",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"Ahee♡ Ehee♡ Hee♡",
				},
			]
		},
	],


	"기합":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Nnggh♡ Hyaaaah♡",
				}
			]
		},
	],

	"정액섭취":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Please, spray your semen in my mouth.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Ugh, hurry up and cum...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Please, spray your semen in my mouth.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Spray your semen in my mouth!",
				},
			]
		},
	],

	"방뇨":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*drip... trickle...*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*shiver... drip drip...*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*drip... trickle trickle...*",
				}
			]
		},
	],

	"자위":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*squish squelch♡*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*squish squelch♡*",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*squelch squelch♡*",
				}
			]
		},
	],


	"참수":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"diffusion",
					text:"Pour your semen into me,<br>without leaving anything behind♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"diffusion",
					text:"My womb is trembling...♡<br>It's begging for your semen♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"diffusion",
					text:"I can't take it anymore♡ I'll tighten up♡<br>Please splooge all over me♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"diffusion",
					text:"A grip into which I've poured all my desire...♡<br>You won't be able to resist♡",
				},
			]
		},
	],

	"발경":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will focus my strength on my lower abdomen,<br>and squeeze♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Do you think... your pathetic cock<br>can win against my trained pussy?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I'll show you the results of my training♡<br>Please watch me, master!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"You fell for it♡<br>You'll regret fucking me so deep.",
				},
				{
					cond:true, pos:1, effect:"diffusion", keepOriginal:true,
					text:"Haaap♡",
				},
			]
		},
	],

	"전투포효":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, effect:"diffusion", keepOriginal:true,
					text:"Haa♡ Haaaaang♡<br>Agh♡ Hnngh♡",
				},
			]
		},
	],

	"광전사혼":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will release...<br>all my sexual desire.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"I must face my inner desires...<br>Ooooh... Ooooooh♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Nnngh... I can't take it anymore♡<br>I want to do lots of pleasant things♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I'll release everything inside me♡<br>I can't handle... what happens next♡",
				},
				{
					cond:true, pos:1, effect:"diffusion", portrait:"corrupted", keepPort:true, keepOriginal:true,
					text:"Ohoook♡ Hek♡ Heek♡",
				},
			]
		},
	],
	"광전사혼-2":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"♡",
				},
			]
		},
	],

	"화려한검무-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Please admire my body.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"This outfit is so embarrassing...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Please take a closer look<br>at my lewd form.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"How is it, lewd right?<br>Are you hard?",
				},
			]
		},
	],
	"화려한검무-2":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>I request to mate♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>How much further are you going to humiliate me...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Hehek♡ I can't take it♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Fuck me♡ Fuck me with your cock♡",
				},
			]
		},
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>I offer my body to Lord Cock♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>I'm begging like this♡ Ugh... Give me your cock♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Aing♡ Hurry up and ravage me♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Haah♡ I'm already soaking wet♡",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", keepOriginal:true,
					text:"*jiggle jiggle*",
				},
			]
		},
	],
	"화려한검무-3":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Initiating mating♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Hurry... hurry up and finish...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"It's time for the mating I've been waiting for♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Cock♡ It's here♡<br>Aaaaang♡",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"*jiggle jiggle*<br>A vulgar, sow dance...♡",
				},
			]
		},
	],

	"커닐링구스":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Reporting that that part felt good.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Wh-where are you licking...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I won't let you go until I'm satisfied.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Try licking with a bit more effort.",
				},
			]
		},
	],

	"정조준사격":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"Aim... Fire.",
				},
			]
		},
	],

	"그림자이동":[
		{
			priority:0, cond:["and", {v1:"라운드", op:"==", v2:1}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will change into attire suitable for a duel.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"How is it... Now that I've undressed first, you can't do anything, right?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Where are you looking?<br>Those are my clothes.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Alright, I'm taking off these cumbersome clothes!",
				},
			]
		},
	],

	"영거리사격":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"Cock secured...<br>Initiating point-blank handjob.",
				},
			]
		},
	],

	"독가스분사":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"Pshhh...",
				},
			]
		},
	],

	"제조":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Drink. This is my juice.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"D-drink it... quickly...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Please drink lots of the juice I made.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"It came from this hole...♡ Want more?",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Please accept everything that comes from this body.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Why are you enjoying drinking this... It's disgusting...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I prepared it with what comes from my body.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I made it with my whole body... Try swallowing it all♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I offer this to you.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"W-why are you getting excited drinking something like this...<br>You pervert...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"This is the taste of my heat... Please drink it all up.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Drink it. It's my heat-juice♡",
				},
			]
		},
	],

	"계획살인":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"According to the plan, I will begin the extraction process♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Hurry up and cum it all out...♡<br>Let's just get this over with♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Fill my womb completely...♡<br>Until it overflows outside♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"This cock is mine...♡<br>I'll squeeze out all your semen♡",
				},
			]
		},
	],

	"최장거리저격-1":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will fire.<br>Hnngh...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"No, don't look...<br>Hnngh♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Haah, I'm coming!<br>Nnggh...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I'm cumming♡ I'm cuuumming♡<br>*shiver...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*Pop! Splooge...*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1,
					text:"O-one more time♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*Pop! Gush gush...*",
				},
			]
		},
	],
	"최장거리저격-2":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Ooh♡<br>Thank you for the charge♡*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"No... I don't want to do it again...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Nngh♡ Thank you for cumming inside...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Ooh♡ P-please... cum inside me♡",
				},
			]
		},
	],

	"그림자장미춤":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"In the shadow that embraces all.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Don't look at me like that...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Gently, with all my heart.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Gently, and lewdly♡",
				},
			]
		},
	],

	"절명독-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will use my last resort.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"I didn't want to use this...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"The end is coming.<br>One drop is enough.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"You won't be able to avoid this.",
				},
			]
		},
	],
	"절명독-2":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Do not leave any behind, drink it all.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"(This is how you make it, right?)",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Please accept everything that overflows from my pussy♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"This juice overflowing from my pussy...♡<br>You'll swallow it all, right?",
				},
			]
		},
	],

	"시한폭탄트랩-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will use a tool.<br>*click*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Wear this!<br>*click*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"It's a special onahole.<br>*click*",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"I'll make you feel good with this.<br>*click*",
				},
			]
		},
	],

	"시한폭탄트랩-2":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*tick tock tick tock*",
				},
			]
		},
	],

	"시한폭탄트랩-3":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*brrrrr...<br>throb throb throb*",
				},
			]
		},
	],

	"영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"cast:자지", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*O steadfast cock,<br>sow thy seed in this female♡*",
				},
				{
					cond:["and", {v1:"cast:보지", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*O soaking wet pussy,<br>prepare to receive Lord Cock♡*",
				},
				{
					cond:["and", {v1:"cast:가슴", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*With the touch of soft breasts,<br>lead the male to pleasure♡*",
				},
				{
					cond:["and", {v1:"cast:엉덩이", op:"in", v2:"마술슬롯.영창.태그"}], pos:1,
					text:"*O luscious ass,<br>let desire penetrate you♡*",
				}
			]
		},
	],

	"마력탄-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*With a magic-infused touch,<br>I shall grasp and shake the cock.*",
				},
			]
		},
	],
	"마력탄-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Let the magic at my fingertips<br>spread to the very root of the cock.*",
				},
				{
					cond:true, pos:1,
					text:"*Grasping firmly, rubbing, and squeezing to the end,<br>I shall cause an explosion of orgasmic pleasure!*",
				},
			]
		},
	],

	"화염구-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*With the heat of my pussy,<br>I shall warm the cock.*",
				},
			]
		},
	],
	"화염구-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*As the hard cock<br>melts deep inside my pussy,*",
				},
				{
					cond:true, pos:1,
					text:"*the flames of pleasure shall soar to the heavens and burn!*",
				},
			]
		},
	],

	"냉기화살-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Grasp my breasts,<br>and feel their soft touch.*",
				},
			]
		},
	],
	"냉기화살-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Your touch penetrates my breasts<br>and stains them with a soft sensation.*",
				},
				{
					cond:true, pos:1,
					text:"*Feel it with your fingertips.<br>The chill, the heartbeat, and the hardened nipples.*",
				},
			]
		},
	],

	"암석탄-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*My ass is firm,<br>ready to embrace the cock.*",
				},
			]
		},
	],
	"암석탄-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*As my round, firm ass swallows your cock,<br>your power shall be transmitted through my pelvis.*",
				},
				{
					cond:true, pos:1,
					text:"*With an ass as unshakeable as solid rock,<br>I shall overwhelm the cock and create vibrations of pleasure!*",
				},
			]
		},
	],

	"용암분사-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*With the rising heat of my womb,<br>I shall melt the cock with pleasure.*",
				},
			]
		},
	],
	"용암분사-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*As your cock delves into my pussy,<br>the boiling heat of pleasure spreads.*",
				},
				{
					cond:true, pos:1,
					text:"*The moment you ejaculate and pour inside me,<br>the heat of the earth shall burn the world!*",
				},
			]
		},
	],

	"역장-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*By the power of my breasts, genitals,<br>and ass.*",
				},
			]
		},
	],
	"역장-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*My bare breasts and ass shall become a shield,<br>captivating both the enemy's eyes and cock.*",
				},
				{
					cond:true, pos:1,
					text:"*The beauty of my nakedness shall become a force field of pleasure,<br>devouring any desire!*",
				},
			]
		},
	],

	"회오리불꽃-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*With my busy fingers,<br>watch as I reach climax.*",
				},
			]
		},
	],
	"회오리불꽃-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*The dripping pussy juice shall ignite the cock,<br>and the movement of my hand shall spread like flames.*",
				},
				{
					cond:true, pos:1,
					text:"*Until the whirlwind of pleasure devours you,<br>this flame shall not cease!*",
				},
			]
		},
	],

	"얼음방벽-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Embrace me<br>and lick, and suck.*",
				},
			]
		},
	],
	"얼음방벽-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*The cold breath enveloping my nipples shall become a barrier,<br>and the enemy's attack shall freeze.*",
				},
				{
					cond:true, pos:1,
					text:"*The frost of pleasure is engraved within my breasts.<br>I shall freeze them with a cold and sweet barrier!*",
				},
			]
		},
	],

	"대지의힘-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Towards my ass,<br>strike with your palm.*",
				},
			]
		},
	],
	"대지의힘-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Every time your palm strikes my ass,<br>the waves of pleasure shall shake the earth.*",
				},
				{
					cond:true, pos:1,
					text:"*As the rhythm of impact and pleasure become one,<br>the power of the earth shall awaken through my body!*",
				},
			]
		},
	],

	"수정방패-영창":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Embracing the crystal dildo with my pussy,<br>I shall infuse it with the magic of pleasure.*",
				},
			]
		},
	],
	"수정방패-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*As the light of the crystal fills my insides,<br>the stimulation shall become a shield and protect me.*",
				},
				{
					cond:true, pos:1,
					text:"*The movement of the crystal penetrating my body<br>shall create a wave that deflects all threats!*",
				},
			]
		},
	],

	"대폭발-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Your power shakes my entire body,<br>as you thrust your cock deep inside.*",
				},
				{
					cond:true, pos:1,
					text:"*Inside my pussy,<br>an explosion of pleasure's flames erupts!*",
				},
			]
		},
	],
	"눈보라-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*The touch of my soft breasts<br>and the cold breath from my tongue shall overtake you.*",
				},
				{
					cond:true, pos:1,
					text:"*As I lick your cock,<br>I shall create a storm of pleasure with my breasts.*",
				},
			]
		},
	],
	"지진-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*I shall open my back hole and reveal the heart of the earth.*",
				},
				{
					cond:true, pos:1,
					text:"*As your cock deeply penetrates me,<br>the world shall crumble with vibrations of pleasure!*",
				},
			]
		},
	],

	"설원늑대정령-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"Pant, pant, master!<br>Let's play!",
				}
			]
		},
	],
	"설원늑대정령-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"Cock♡ Throb throb, pant pant♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"I love the smell of cock♡ Woof woof♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"Fuck me♡ Mate with me♡",
				}
			]
		},
	],
	"설원늑대정령-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"늑대정령",
					text:"Whine...",
				}
			]
		},
	],

	"오토마톤골렘-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"Activation complete.<br>Please state your command.",
				}
			]
		},
	],
	"오토마톤골렘-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"Executing command.<br>Initiating piston movement.",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"Verifying appropriate tightness intensity.",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"Executing onahole protocol.",
				}
			]
		},
	],
	"오토마톤골렘-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"골렘",
					text:"O-op..operation...<br>Ceasing, operation...",
				}
			]
		},
	],

	"플라스크피닉스-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"Master, I like you...<br>Hold me...♡",
				}
			]
		},
	],
	"플라스크피닉스-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"I'm excited, so excited...♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"I love you, I love you...♡",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"Do more, do more...♡",
				}
			]
		},
	],
	"플라스크피닉스-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"피닉스",
					text:"No... I don't want to part...",
				}
			]
		},
	],

	"마나슬라임-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"...❤️",
				}
			]
		},
	],
	"마나슬라임-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"~💕",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"...💕",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"❤️💕",
				}
			]
		},
	],
	"마나슬라임-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"마나슬라임",
					text:"...💔",
				}
			]
		},
	],
	"마나슬라임-4":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*splat splat*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*squish squelch*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"*squish squish*",
				},
			]
		},
	],

	"유성우-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*Opening my pussy, like stars pouring from the sky,<br>I shall receive your cock deep inside.*",
				},
				{
					cond:true, pos:1,
					text:"*As the pouring hot semen accumulates in my womb,<br>the light of pleasure shall stain the night sky.*",
				},
			]
		},
	],

	"영구동토-집중":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:1,
					text:"*My full breasts form a snow-covered field,<br>and my cold breath shall envelop your cock.*",
				},
				{
					cond:true, pos:1,
					text:"*As your cock rubs up and down between my breasts,<br>a cold pleasure shall wrap around you and make you cum.*",
				},
			]
		},
	],

	"시간정지":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"I will control time.<br>Prepare for the oncoming pleasure.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Stop!<br>From now on, it's my time!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Time, stop!<br>I'll show you the pleasure of an eternal moment!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Freeze right there♡<br>Now, you won't know what's happening to you♡",
				},
			]
		},
	],

	"미영-0":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Yes, darling... did you call me?",
				}
			]
		},
	],
	"미영-1":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"This looks dangerous, so I'll get rid of it for you.<br>Don't worry, you're safe now.",
				}
			]
		},
	],
	"미영-2":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"It's okay, darling.<br>Leave it to me, you haven't lost yet.",
				}
			]
		},
	],
	"미영-3":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Wouldn't some magic be nice?<br>I'll prepare it this time.",
				}
			]
		},
	],
	"미영-4":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Ehehe.<br>Darling is the best, no matter when I see you.",
				}
			]
		},
	],
	"미영-5":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"It's okay, darling.<br>Try using this for now.",
				}
			]
		},
	],
	"미영-6":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Ehehe, fighting~!<br>Show me how cool you are!",
				}
			]
		},
	],
	"미영-7":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"I'll lend you my strength.<br>It's a joint effort between the two of us.",
				}
			]
		},
	],
	"미영-8":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Yes, leave this to me.<br>You focus on other things, darling.",
				}
			]
		},
	],
	"미영-9":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"I-I'm sorry... I'm not good enough, there's nothing I can do for you...",
				},
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"No... You're not tired of me, are you...?",
				},
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Why... why can't I do anything when darling is in trouble!!",
				},
			]
		},
	],
	"미영-10":[
		{
			priority:3, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Why, won't you look at me more?<br>Is it because of that thing...?",
				}
			]
		},
		{
			priority:2, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Darling, you can't go anywhere without me.<br>I'll get rid of anything that threatens you.",
				}
			]
		},
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Don't get between us, you vulgar bastard!",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"Die! Die!!",
				}
			]
		},
	],
	"미영-11":[
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:2, name:"미영",
					text:"You're lying, right?<br>No! Nooo!!!",
				}
			]
		},
	],

	"정수결합":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"This is merely a medical procedure.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"I'm getting a bad feeling about this...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I can feel myself getting stronger.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"We're sticking together and becoming one.",
				},
			]
		},
	],

	"치료":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Beginning treatment.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"This is just a medical procedure.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I'll start the treatment!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Looks like a doctor is needed here...♡",
				},
			]
		},
	],

	"후속치료":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Erection confirmed♡<br>Initiating rapid ejaculation therapy♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"This is just a medical procedure♡<br>There's absolutely no other intention♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"I will now begin treatment of the erect cock♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"What a healthy cock♡<br>I'll just do a little check-up...♡",
				},
			]
		},
	],

	"생명력폭주":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"Mmph♡ Mmmph..♡",
				},
			]
		},
	],

	"대규모정화":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Corrupted erect cock detected♡<br>Initiating purification sex immediately♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"You've shown your true colors, you wicked thing♡<br>I'll purify you right now with my sacred pussy♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"My goodness, what a wicked cock♡<br>I'll purify it by sucking it right now♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"To think you were harboring such a wicked cock♡<br>I'll extract your semen with a purification fellatio right now♡",
				},
			]
		},
	],

	"만물의오라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"We become... one...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"We are becoming... one...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"We are becoming... one...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Let's become... one...♡",
				},
			]
		},
	],

	"불로불사의약-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"This medicine will make me<br>a perfect onahole.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"If I drink this...<br>I might not be able to return to being human...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"If I drink this,<br>I'll be able to fight better, right?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"To be able to turn into a perfect onahole...<br>Isn't that the best...♡",
				},
			]
		},
	],

	"불로불사의약-2":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, portrait:"ecstasy2",
					text:"Ingestion complete♡<br>Effect manifesting♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, portrait:"ecstasy2",
					text:"My body... my body is getting hot...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, portrait:"ecstasy2",
					text:"Heek, my head... feels strange...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, portrait:"ecstasy2",
					text:"Haaang♡ My brain is melting from pleasure♡",
				},
			]
		},
	],

	"정신치료-1":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Attempting personality manipulation.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Even after my personality is altered...<br>can I still be called 'me'...?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"To be able to control my mind,<br>that's a wonderful thing.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Mind manipulation, how interesting♡<br>While we're at it, let's make me a total perverted slut♡",
				},
			]
		},
	],
	"정신치료-2":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"Manipulation complete.<br>Target personality: Total perverted slut♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"Nnnggh♡ N-no♡<br>I am... not a total perverted slut...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"Nnnggh♡ I-I am♡<br>a total perverted slut...♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Nothing changed?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Aha♡ I was already a total perverted slut♡",
				},
			]
		},
	],


	"플레이어-신음":[
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Nnggh♡ Hyaaaah...♡",
				}
			]
		},
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ogooh♡ St-stop...♡",
				}
			]
		},
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Gaah♡ I-I'm gonna die...♡",
				}
			]
		},
		{
			priority:2, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Oook♡ Nngoooh♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Haaaang♡ Too deep...♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Haah♡ Harder♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ahaang♡ There feels good...♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Nnngh♡ Deeper inside♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ngh, there is...♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"*twitch♡*",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ngh♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ah♡",
				}
			]
		},
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"...♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Nnngh♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ah♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Haa♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Aang♡",
				}
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Haah♡",
				}
			]
		},
	],

	"플레이어-절정준비":[

	],
	"플레이어-절정":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Nngghk... Oooh♡ Nngooooh...♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Ahhh... Aang♡ Haaaang...♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["ecstasy2"]}], repeatable:true,
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					text:"Nngooh... Nngoh♡ Nngaaah...♡",
				}
			]
		},

		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Haang♡ I came♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Nngh, I caaame♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"Aang♡ I came♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Nngh♡ I came♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Aah♡ This feels good♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Feels good♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"Haang♡ Feels good♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Feels good♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Orgasm, has arrived♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Haang♡ Orgasm is here♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Orgasm has arrived♡",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Aang♡ Orgasm is here♡",
				}
			]
		},

		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Aah♡<br>No way... me...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"Nngh♡<br>I came...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Aah♡<br>It's fine... just once...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1, keepOriginal:true,
					text:"Aang♡<br>This can't be happening...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1, keepOriginal:true,
					text:"Haang♡<br>I came again...",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1, keepOriginal:true,
					text:"Aang♡<br>Th-this is dangerous...",
				}
			]
		},

		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Nngh♡<br>I have orgasmed.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1, keepOriginal:true,
					text:"Haang♡<br>I have orgasmed again.",
				},
			]
		},
	],

	"플레이어-암퇘지":[
		{
			cond:true, pos:1,
			text:"Oiiink♡ Oink♡",
		},
		{
			cond:true, pos:1,
			text:"Oink♡ Oiiink♡",
		},
		{
			cond:true, pos:1,
			text:"Oiiink♡ Oiiink♡",
		},
		{
			cond:true, pos:1,
			text:"Oink♡ Oooink♡ Oiiink♡",
		},
		{
			cond:true, pos:1,
			text:"Oink♡ Oiiink♡",
		},
	],

	"플레이어-무의식":[
		{
			cond:true, pos:1,
			text:"... ...",
		},
	],

	"플레이어-재갈":[
		{
			cond:true, pos:1,
			text:"Mmph♡ Mmph♡",
		},
		{
			cond:true, pos:1,
			text:"Mmmph♡ Mmmmph♡",
		},
		{
			cond:true, pos:1,
			text:"Mph♡ Mmmmph♡",
		},
		{
			cond:true, pos:1,
			text:"Mph♡ Kmmph♡ Mmph♡",
		},
		{
			cond:true, pos:1,
			text:"Mmph♡ Khmmph♡",
		},
	],

	"플레이어-정신붕괴":[
		{
			cond:true, pos:1,
			text:"Ahee♡ Ahee♡",
		},
		{
			cond:true, pos:1,
			text:"Ehe♡ Hehehe♡",
		},
		{
			cond:true, pos:1,
			text:"Hue♡ Heehee♡",
		},
		{
			cond:true, pos:1,
			text:"Ahe♡ Heeungh♡",
		},
		{
			cond:true, pos:1,
			text:"Heehee♡ Eheehee♡",
		},
	],

	"플레이어-군체의식":[
		{
			cond:true, pos:1,
			text:"Ahee♡ Ahee♡",
		},
		{
			cond:true, pos:1,
			text:"Ehe♡ Hehehe♡",
		},
		{
			cond:true, pos:1,
			text:"Hue♡ Heehee♡",
		},
		{
			cond:true, pos:1,
			text:"Ahe♡ Heeungh♡",
		},
		{
			cond:true, pos:1,
			text:"Heehee♡ Eheehee♡",
		},
	],

	"플레이어-광폭화":[
		{
			cond:true, pos:1,
			text:"Cock♡ Pant♡ Pant♡",
		},
		{
			cond:true, pos:1,
			text:"Cooock♡ Fuck me♡ Mate with me♡",
		},
		{
			cond:true, pos:1,
			text:"Heuk♡ Semen♡ Pant♡ I love semen♡",
		},
		{
			cond:true, pos:1,
			text:"Ahe♡ Sex♡ Heungh♡",
		},
		{
			cond:true, pos:1,
			text:"Heek♡ Pussy♡ Feels so good♡",
		},
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Nnghk♡ Deeper♡ Stick it in♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Pussy♡ Hnngh♡ I feel it♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Heek♡ Uwaaang♡ I love♡ sex♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Aauugh♡ Give me all of it♡ Semen♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Kngh♡ Hehet♡ I love it♡ Sex♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Haah♡ Cock♡ Pant♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Semen♡ More♡ Haah♡ Fill me up♡"
	    },
	    {
	        "cond": true,
	        "pos": 1,
	        "text": "Pant pant♡ Mating♡ Pant♡ Feels good♡"
	    }
	],
	"개입-최면":[
		{
			priority:2, cond:["and", {v1:"챔피언.이름", op:"==", v2:"금발양아치"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Master,<br>are you enjoying your role as champion?",
				},
				{
					cond:true, pos:0,
					text:"Thanks to you. But what's up.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"This product had a special request from our clients.<br>I'm here to work.",
				},
				{
					cond:true, pos:0,
					text:"Ah, okay.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"You, look over here.",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Haha, to think the academy's greatest genius would be in a place like this.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Who... are you?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Hmph, do you know me?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Oh my, do you know me?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"That's an unpleasant voice.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"...Indeed. It seems the great genius<br>doesn't even remember the faculty of a defunct department.",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"But at least now, the tables have turned.",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Did you know?<br>I was the one who sent you the invitation.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Thank you.<br>Are you well-versed in mind magic?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"It was you?<br>You've got a good eye for people.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Thank you for the invitation.<br>I'd love to talk with you more.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Really?<br>Let's talk a lot after the duel~",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"You get another country's research banned,<br>and now you're shamelessly showing interest?",
				},
				{
					cond:true, pos:2, name:"칼레스",
					text:"Fine.<br>See as much as you want.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"This is common sense.<br>Isn't it?",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"실바니"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Hypnotizing a Sylvani<br>is a very easy task.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"하프만"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Become more sensitive.<br>More suitable for a sex slave.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"트라이브"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Enjoy the moment your body betrays you.",
				}
			]
		},
	],
	"개입-저주":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"군인"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Inchouk!<br>Aren't you a wanted criminal!",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Inchouk!<br>What is a criminal like you doing here?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Inchouk!<br>I can't believe it... I'll arrest you as soon as this is over.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Inchouk?<br>Don't tell me they were hiding you here?",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"Am I still wanted?<br>The police must be really bored~",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"But you won't be able to arrest me, will you?<br>Ever.",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"실바니"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Lord Chouk?<br>I heard you went missing.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Chouk?<br>I was wondering where you went, so you were here?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Lord Chouk!<br>You were gone, but you were here?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Chouk?<br>Long time no see~ Fancy meeting you here~",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"Fufu, it seems our Golden Cord Society<br>is inevitably drawn to this place.",
				},
				{
					cond:true, pos:2, name:"추크",
					text:"By the way,<br>you remember my specialty, don't you?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Think you can finish before pleasure turns to pain?",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"실바니"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Dance! My puppet!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"하프만"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Let me hear the sound of your mind breaking!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"트라이브"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Let's see if you can break the leash!",
				}
			]
		},
	],
	"개입-약물":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"학자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Ooh, what is that drug?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Hey, that drug is?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Oh, is that drug what I think it is?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Uh, did you make that?",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"Interested in my special drug?<br>Then, drink up!",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"하프만"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Comrade?<br>What are you doing in a place like this.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Comrade!<br>Are you also trapped here?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"To meet a comrade in a place like this.<br>Nice to see you.",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Hello~<br>Fancy seeing a comrade in a place like this.",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"Ahaha!<br>I'm not interested in your ideology!",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"I'm a drug-lover♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"Drink this!<br>Chug it down!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"Yes, yes!<br>The data is accumulating!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2,
					text:"Fuhihihuhe!<br>I really am a genius!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"My calculations are perfect!<br>This is it, this is it!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"라운드", op:">", v2:1}],
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"No, it's not enough yet!<br>Show me more reactions!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"The reaction is showing!<br>A new discovery!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"You are an excellent test subject!",
				}
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:2, name:"니스비",
					text:"How long will this test subject last!",
				}
			]
		},
	],
	"개입-고문":[
		{
			priority:2, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"챔피언.이름", op:"==", v2:"조교사"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"What is it,<br>Chief?",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"It's work...",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"... ...",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"Don't make a mistake...<br>Let's do it right...",
				},
				{
					cond:true, pos:0,
					text:"Yes, leave it to me.",
				},
				{
					cond:true, pos:0,
					text:"(Damn it...<br>Just a female...)",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.종족", op:"==", v2:"트라이브"}, {v1:"커스텀.배경", op:"==", v2:"범죄자"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"순종"}], pos:1,
					text:"Huh?<br>Are you also an exile?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"저항"}], pos:1,
					text:"Ooh,<br>were you also cast out from your tribe?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"무지"}], pos:1,
					text:"Are you perhaps an exile like me?",
				},
				{
					cond:["and", {v1:"커스텀.성격", op:"==", v2:"적극"}], pos:1,
					text:"Hey, nice to meet you~<br>Wanna get along, since we're both exiles?",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"... ...",
				},
				{
					cond:true, pos:2, name:"모모리카",
					text:"No idle talk...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"엘도리아인"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"You are a sow...<br>Engrave it deep in your mind.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"실바니"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"I'll strip off all your masks...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"하프만"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"I'll make it so you can never stand on two feet again...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.종족", op:"==", v2:"트라이브"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"The boundary between pleasure and pain...<br>I'll erase it...",
				}
			]
		},
	],
}