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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Goblins"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Kikik! Look what we got!<br>Fresh meat...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Villager"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "Heh heh... Now that's a prime piece of ass they brought me.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], 
			lineList:[
				{
					cond:true, pos:0,
					text: "*A wet squelch... followed by a hundred writhing limbs...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Imp"}], 
			lineList:[
				{
					cond:true, pos:0,
					text: "Hey, big sis! You gonna play with me? Pleeease?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Tauros"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "MMMOOOOOO!!!<br>*A guttural snort echoes in the arena...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gggghk... G'gogok...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], 
			lineList:[
				{
					cond:true, pos:0,
					text: "Well, look at you. Not bad at all.<br>How about you become my personal plaything?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Trainer"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"An undisciplined female.<br>Your training begins now.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Goblins"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "Kiek! Another womb to fill!<br>A new broodmare for the tribe!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Villager"}], 
			lineList:[
				{
					cond:true, pos:0,
					text: "N'gyah ha! You're back for more, eh? This time, I'll break you for good!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "*A low, predatory gurgle... It remembers you...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Imp"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "Big sis! You came back to play!<br>I've been thinking of all the naughty things we can do!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Tauros"}], 
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text: "MMMOOOOO!!!<br>*It recognizes your scent. It wants to breed.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "*You have returned. Why do you resist unity? Join the swarm.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], 
			lineList:[
				{
					cond:true, pos:0,
					text: "You again? Heh. You're the first bitch who ever made me work for it.<br>Today, I'm breaking that pride of yours.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Trainer"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Let's check the results of your training.",
				},
			]
		},
	],

	"등장":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text: "I am ready. Awaiting your command.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"We're doing this... *here*?<br>With all these people watching?!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Please... be gentle with me.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"I can't wait any longer... <br>Let's get this started already.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Beginning semen extraction.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text: "Ugh, it's that time again...<br>Just have to get through this. Again.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text: "Hello again! I'm ready for you.<br>Please use me well today.♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text: "Haaah... I'm already dripping for you.♡",
				},
			]
		},
	],

	"패배":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Goblins"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kikik.<br>The female is weak...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Villager"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Uhit, don't stop, just cum~!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Gurgle gurgle... Drip...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Imp"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:" You lost already?<br>And you're a grown-up? How lame~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Tauros"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Hoo, hoo...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*A new host... You will reproduce for the swarm.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"A solid 4/10.<br>What a boring fuck.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Trainer"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Now you know your place.",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Goblins"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kikik, guys...<br>Ravage her as you please...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Villager"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Subduing a woman stronger than me<br>is always the best~!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Grrreong... Graaah...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Imp"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Sis, you are my toy.<br>Forever.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Tauros"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Hoo, hoo...<br>Prrrr...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*For the expansion of the swarm,<br>become a seedbed.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Finally broke you.<br>Fucking arrogant bitch, playing hard to get.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Trainer"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"It's over.<br>Prepare for shipment.",
				},
			]
		},
	],

	"플레이어-패배":[ // PLAYER DEFEAT
		{
			priority:2, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text: "Defeat confirmed.♡<br>I am now your property. Please use me as you see fit.♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text: "No... no more... please...♡ I give up... I'll do anything...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text: "I... I lost...?<br>Does that mean... I'm your toy now...?♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text: "Haaaah♡ So this is what it feels like to lose...<br>I can't fight it anymore... It's just too good...♡",
				},
			]
		},
		{
			priority:0, cond:["and", "특수승리"], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text: "System overload... Function ceasing...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"Save me♡ Save meee...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"I'll be...<br>I'll be your sex slave...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Something this pleasurable...<br>There's no way I can resist...♡",
				},
			]
		},
	],

	"승리":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Goblins"}], 
			lineList:[
				{
					cond:["or", {v1:"특수승리", op:"!=", v2:true}, {v1:"Champion.Orgasm", op:">=", v2:5}], pos:0,
                    text: "Kiek...!<br>Strong female... Too strong...!",
				},
				{
					cond:["and", "특수승리", {v1:"Champion.Orgasm", op:"<", v2:5}], pos:0,
					text:"S-scary female... Run away!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Villager"}], 
			lineList:[
				{
					cond:true, pos:0,
					 text: "Ohhh! My balls... completely drained...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Pshhh... Bubble...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Imp"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Whoa... Big sis, you're amazing...♡ S-so strong...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Tauros"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "*Heavy, exhausted snorts...<br>It collapses with a heavy *thud*.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "*The host body collapses... spores cease to flow...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Kgh... Now I want you even more.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Trainer"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Lady Sandrea, please forgive me...",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Goblins"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Gah! Retreat! Retreat! This one's too much!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Villager"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"N'gyaaah! I'm... I'm empty! There's nothing left to give!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "*With a final, pained shudder, its tentacles retract...*",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Imp"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "No fair... You were supposed to be my toy...♡<br>How could you be so strong...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Tauros"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "*A low groan... it collapses to its knees, utterly spent.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"*Human...<br>This is not what we agreed upon...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Tch... To lose to a slut like you... This isn't over.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"Champion.Name", op:"==", v2:"Trainer"}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Impossible...<br>Could my methods have failed...?",
				},
			]
		},
	],

	"플레이어-승리":[
		{
			priority:1, cond: {v1:"플레이어.표정", op:"in", v2:["corrupted"]}, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Ejaculation confirmed.♡<br>Mission accomplished.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
                    text: "Heh. Done already? Pathetic.♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"},], pos:1, keepOriginal:true,
                    text: "Wow, that felt amazing! Thank you for playing with me!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
                    text: "That's it? Get up. I'm not done with you yet.♡",
				},
			]
		},
		{
			priority:0, cond: true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Mission complete.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"It's finally over...<br>Thank god I won...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Yay, I won!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Heh, that was the most fun I've had in a while.♡",
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Limit... I have reached my limit...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
                    text: "No... I can't...  <br>I can't fight this feeling anymore...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
                    text: "I... I think I understand now... This feeling is...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"This is my limit... <br>okay, okay, you win...  <br>I can't hold back any longer...♡",
				},
			]
		},
	],
	"플레이어-항복":[
		{
			priority:1, cond:true, 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
                    text: "I am a worthless sex toy. <br>I surrender my body to my new Master.♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
                    text: "I was wrong... so wrong...  <br>I'm sorry for fighting back...♡  <br>P-please... use me...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
                    text: "Oh... I see now. It's silly for a girl to fight back...  <br>My only purpose is to please you...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true, portrait:"corrupted", effect:"diffusion", keepPort:true,
					text:"I surrender!♡ I lost!♡ <br>My life is over...♡",
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
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Goblins"}], pos:0,
					text:"Kerek I'm cumming!",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Villager"}], pos:0,
					text:"Ugh... Here it comes! Here it cums!",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], pos:0,
                    text: "*Its whole body starts to quiver violently...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tauros"}], pos:0,
                    text: "*Heavy, ragged snorts... Its hips tense up...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Imp"}], pos:0,
                    text: "Ngh! Sis, I'm gonna... I'm gonna CUM!",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], pos:0,
                    text: "*A low thrumming vibrates through its body...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], pos:0,
                    text: "Fuck, you're so tight... Can't... hold back...",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Trainer"}], pos:0,
					text:"You serve your purpose well...",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Goblins"}], pos:0,
					text:"Kiek! Can't stop it!",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Villager"}], pos:0,
					text:"Ohot... You're so tight!",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tauros"}], pos:0,
					text:"Hook♡ Hook♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Imp"}], pos:0,
					text: "Your pussy feels so warm, big sis!♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], pos:0,
					text:"Ah, fuck, I can't hold it in...",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Trainer"}], pos:0,
					text:"Hngh... Not bad at all.",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Goblins"}], pos:0,
					text:"Kerek... It's coming♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Villager"}], pos:0,
					text:"Uhot♡ I'm cumming♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tauros"}], pos:0,
					text:"Hook♡ Hook♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Imp"}], pos:0,
					text:"Ugh♡ Hold on, sis♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], pos:0,
					text:"*Brrrr...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], pos:0,
					text:"Damn, that feels amazing...♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Trainer"}], pos:0,
					text:"Nngh... How could I...",
				},
			]
		},

	],

	"패배사정":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Goblins"}], pos:0,
					text:"Kyaak, I'm being squeezed dry♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Villager"}], pos:0,
					text:"Uhooot♡ Best... fucking... ever...♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tentacle Slime"}], pos:0,
					text:"*Shudder shudder...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Tauros"}], pos:0,
					text:"MMMRRRROOOOOHH!!,
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Imp"}], pos:0,
                    text: "N-no way...♡<br>Big sis is milking me dry...<br>I'm supposed to be the incubus!♡",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Mushroom Man"}], pos:0,
                    text: "*The host body expels its last spores... then goes limp...*",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}], pos:0,
                   text: "Hnngh! Fuck... You're the best damn ride I've ever had!",
				},
				{
					cond:["and", {v1:"Champion.Name", op:"==", v2:"Trainer"}], pos:0,
                    text: "Unnngh... Worthless... fucking... cunt...",
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
                    text: "*Splooge♡ Splurt♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
                    text: "*Spurt♡ Sploooge♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
                    text: "*Splurt♡ Splurt♡ Sploooge♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
                    text: "*Splooge♡ Throb♡ Splurt♡*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*Splurt♡ Spurt♡*",
				},
			]
		},
	],

	"Goblins-교체":[
		{
			priority:7, cond:{v1:"Champion.Orgasm", op:"==", v2:1}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Keke, my turn now!",
				}
			]
		},
		{
			priority:6, cond:{v1:"Champion.Orgasm", op:"==", v2:2}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"G'hyark! Wreck that female!",
				}
			]
		},
		{
			priority:5, cond:{v1:"Champion.Orgasm", op:"==", v2:3}, 
			lineList:[
				{
					cond:true, pos:0,
					text:"Outta the way, moron!",
				}
			]
		},
		{
			priority:4, cond:{v1:"Champion.Orgasm", op:"==", v2:4}, 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Kyak! Useless! Let a real goblin show you how it's done.",
				}
			]
		},
		{
			priority:3, cond:[{v1:"모드", op:"==", v2:1}, {v1:"Champion.Orgasm", op:"==", v2:5}], 
			lineList:[
				{
					cond:true, pos:0,
					text:"Alright. *My* turn.",
				}
			]
		},
		{
			priority:2, cond:[{v1:"모드", op:"==", v2:1}, {v1:"Champion.Orgasm", op:"==", v2:6}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Don't let her rest! Next one in!",
				}
			]
		},
		{
			priority:1, cond:[{v1:"모드", op:"==", v2:1}, {v1:"Champion.Orgasm", op:"==", v2:7}], 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Kyakya... Been waiting for this hole!",
				}
			]
		},
		{
			priority:0, cond:true, 
			lineList:[
				{
					cond:true, pos:0,
                    text: "Kerek! Me again! Round two!",
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
                    text: "Keke, painting the female white!",
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
                    text: "Kikik, rip it all off! No need for clothes!",
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
                    text: "*Rough hands grope and squeeze mercilessly*",
				},
			]
		},
	],
	"고블린penetration":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "Make goblin babies! Breed for us!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "Fill the fuck-toy's cunt!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "This hole is our cum dumpster now!",
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
					text: "Mmph! Ggghk...!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:true, pos:1, keepOriginal:true,
					 text: "Mmmph...♡ Glk...♡",
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
					 text: "Giddy-up, human-horse! Faster!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"*Slap! Slap!*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, effect:"shake", portrait:"ecstasy2",
					    text: "Yes, Master!♡ G-Going forward...♡ Ungh!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text: "N-No! Stop!♡ M-my body won't... stop moving... Aah!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, effect:"shake", portrait:"ecstasy2",
					 text: "O-Okay!♡ Faster! Giddy-up... ungh!♡ I'm going!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, effect:"shake", portrait:"ecstasy2",
					text: "Hah!♡ You want faster? You'll get faster!♡ Nngh!♡",
				},
				{
					cond:true, pos:0,
					text: "Kyahaha! She's just like a dumb animal!",
				},
			]
		},
	],

	"Goblins-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Kekeke... Look at that body. Perfect for a cum dumpster!",
				},
				{
					cond:true, pos:1,
					text:"Understood.<br>I will serve as the goblins' cum dumpster.",
				},
				{
					cond:true, pos:0,
					text:"Ooh, look! She's spreading her legs on her own!<br>This one's already a broken fucktoy, kyahaha!",
				},
				{
					cond:true, pos:1,
					text: "I await your cum.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"You filthy, barbaric creatures...<br>Don't you dare touch me!",
				},
				{
					cond:true, pos:0,
					text:"Kekeke...Refusing the duel, are we, female? <br>That's a forfeit. An instant loss.",
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
					text:"(Damn it, I can't believe this... with *goblins*? But... it's the rules. I have to...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Kekeke... What a nice body... Show us your hole!",
				},
				{
					cond:true, pos:1,
					text:"Okay~!<br>Here you go, this is my pussy!",
				},
				{
					cond:true, pos:0,
					text:"Kyakya! Look at this shameless slut,<br>striking such a dirty pose!",
				},
				{
					cond:true, pos:1,
					text:"Huh? But you asked me to show you...<br>why is that a dirty pose?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Kekeke... We're gonna grab you by the hair and pound that ass!",
				},
				{
					cond:true, pos:1,
					text:"Ooh, how delightfully savage.♡<br>And then? What's next?",
				},
				{
					cond:true, pos:0,
					text:"We'll fuck your cunt and your ass at the same time and cover your whole body in our seed!",
				},
				{
					cond:true, pos:1,
					text: "Haaa♡ Don't just talk about it... The thought alone is making me drip.♡",
                },
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
				text: "Kyakya! Look who's back for more! Ready to spread those legs, female?",
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
					text: "Kyaak, she's ready! Hah! Get her, boys!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Keke, back again? Today, we're gonna break you for good!",
				},
				{
					cond:true, pos:1,
					text: "Not you little shits again... I hate how the stink of your spunk never washes out.",
				},
				{
					cond:true, pos:0,
					text:"Enough talk!<br>Hurry up and spread your legs!",
				},
				{
					cond:true, pos:1,
					 text: "Haaah... Fine. It's not like I have a choice. My job is to get fucked, right?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "You know, thanks to you guys, my body has become so much more sensitive.",
				},
				{
					cond:true, pos:1,
					 text: "Today, could you try to hit my cervix? And maybe choke me with your cock until I can't breathe?♡",
				},
				{
					cond:true, pos:0,
				text: "Kyaak! Shut up, you weirdo! We'll fuck you how *we* want!",
				},
				{
					cond:true, pos:1,
					text: "Oh, right. I'm sorry... It was selfish of me to ask...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I've been waiting♡<br>I can't live a single day without your cocks anymore♡",
				},
				{
					cond:true, pos:1,
					text: "I really liked it when you choked me last time... Can we do that again?♡",
				},
				{
					cond:true, pos:0,
					 text: "Gah! This bitch is too cocky! We'll make you scream and beg for it!",
				},
				{
					cond:true, pos:1,
					 text: "Oh, is that how you like it? I can start begging for you right now, if you want.♡",
				},
			]
		},
	],
	"Goblins-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Kyakya, look at her dripping! Getting wet from being raped, are we?",
				},
				{
					cond:true, pos:1,
					text:"That is correct.<br>The secreted fluid is evidence of my arousal.",
				},
				{
					cond:true, pos:0,
					 text: "You filthy slut! Did our goblin cocks feel that good?",
				},
				{
					cond:true, pos:1,
					text:"Yes, that's right.<br>I felt pleasure and came from your cocks.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "N-No way... Me? Getting off on a goblin's cock...? Impossible... I didn't feel a thing!",
				},
				{
					cond:true, pos:0,
					text: "Kyakya, stop lying! We saw you twitching! You came like a pathetic little sow!",
				},
				{
					cond:true, pos:0,
					 text: "You're so weak! One little cock and you fall apart!",
				},
				{
					cond:true, pos:1, effect:"shake",
					 text: "Shut up! I only came, like, once! That doesn't count!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "Oooh♡ I didn't know a goblin's cock could feel so good...",
				},
				{
					cond:true, pos:0,
					text: "Kyakya! Listen to her! Saying it feels good while we're running a train on her! What a pervert!",
				},
				{
					cond:true, pos:1,
					text:"Huh? Am I a... masochistic pervert...?",
				},
				{
					cond:true, pos:1,
					 text: "Oh, okay! I guess I'm a pervert then! ♪",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
					text: "We'll see about that! Let's try your other hole!",
				},
				{
					cond:true, pos:1, effect:"shake",
					 text: "Aah, yes! Bring it on!♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					text: "Nnggh!♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					 text: "*A warm gush soaks the floor...*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Keke, look at the little pervert, came already!",
				},
				{
					cond:true, pos:1,
					 text: "Shut up! Anyone would come this fast with... with this much stimulation!",
				},
				{
					cond:true, pos:0,
					text: "Kyahaha! So you admit you're just a weak little female! A dirty slut!"
				},
				{
					cond:true, pos:1,
					text: "What? Of course I am... wait, what did I just say?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "Wow!♡ That felt amazing!",
				},
				{
					cond:true, pos:0,
					text: "Kyakya! What a perverted female! Your holes are already full with our seed!",
				},
				{
					cond:true, pos:1,
					text: "Oh, thank you! But I'm not full yet, I can take a lot more!♡",
				},
				{
					cond:true, pos:0,
					 text: "Alright! Let's use your ass-hole too, then!<br>It's great that females have so many holes!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"This female's hole tightens up completely when she cums!<br>She was born to be a fucktoy!",
				},
				{
					cond:true, pos:1,
					text:"I've really missed this♡<br>Break me♡  Harder, deeper!♡",
				},
				{
					cond:true, pos:0,
					text: "Kyaak, she's squeezing even tighter! Everyone, all at once!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text: "Yeees!♡ Fill all my holes at once!♡",
				},
			]
		},
	],
	"Goblins-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Kyakya! Look at her! She's down and twitching!",
				},
				{
					cond:true, pos:1,
					text:"You can still...<br>use me more...♡",
				},
				{
					cond:true, pos:0,
					text:"Can't even speak properly, keke.<br> Let's stuff both her holes at once!",
				},
				{
					cond:true, pos:1,
					text:"Yes, my anus is also... available♡<br>Please... insert...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"The female's pussy is wet and tight.<br>Feels good.",
				},
				{
					cond:true, pos:1,
					text:"Damn it, my body is moving on its own... it just keeps feeling good...♡ N-no, I don't want to cum... I don't...♡",
				},
				{
					cond:true, pos:0,
					 text: "Kyakya, you can say no all you want, but your cunt is soaked. A female's body always gives in to seed!",
				},
				{
					cond:true, pos:1,
					 text: "With every thrust...♡ I'm remembering... I'm just a weak female after all...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "I'm cumming!♡<br>My pussy just came from the goblins' cocks♡",
				},
				{
					cond:true, pos:0,
					text:"Kyahaha, this bitch has come so much! Her brain's melted!",
				},
				{
					cond:true, pos:1,
					  text: "Cumming...♡ I'm just cumming and cumming...♡",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "Haaang!♡ Yes, harder! Pound this slutty cunt of mine!♡",
				},
				{
					cond:true, pos:0,
					 text: "Kyakya, she's completely gone! A mindless fuck-beast in heat!",
				},
				{
					cond:true, pos:1,
					text: "Breed me!♡ Fill me up!♡ Knock me up with your goblin seed!♡",
				},
				{
					cond:true, pos:0,
					 text: "You got it! We'll give you everything you're begging for!",
				},
				{
					cond:true, pos:1,
					text: "Cock... Goblin cocks... need more...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					text:"Orgasm... confirmed...♡<br>Reporting... climax...♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Confirm... confirmed...♡<br>Pussy... climax♡",
				},
				{
					cond:true, pos:0,
					  text: "Kyakya! She's broken! Too many orgasms fried her brain!",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Reporting... c-confirmed...♡<br>Orgasm... c-cunt...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"(Damn, getting gangbanged by goblin cocks feels so good♡)",
				},
				{
					cond:true, pos:0,
					text: "Kyahaha! Look at her! Seed leaking from all her holes! What a pathetic slut!",
				},
				{
					cond:true, pos:1,
					text:"Oh, no... precious cum<br> Can't let it go to waste... I have to quickly lick it up♡",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"*lick♡ slurp♡*",
				},
				{
					cond:true, pos:0,
					text:"Seriously! She's licking semen off the floor!<br> The female's gone completely crazy!",  
				},
				{
					cond:true, pos:1,
					 text: "Shut up...♡ You're just little goblins... but your cum is so... delicious...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "Mmm, the smell of goblin cum...♡ I think I'm addicted...♡",
				},
				{
					cond:true, pos:1,
					 text: "Could you please fill my womb up? Please?♡",
				},
				{
					cond:true, pos:0,
					 text: "Kekeke, she's completely lost in her heat!",
				},
				{
					cond:true, pos:0,
					 text: "She's still shaking from the last one, and she's already spreading for more!",
				},
				{
					cond:true, pos:1,
					text: "P-please, put it in...♡ I want to be pregnant with goblin babies...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "Aaaah♡ I fucking LOVE goblin cock!♡",
				},
				{
					cond:true, pos:1,
					text: "That feeling of being stretched wide open and pounded deep inside...♡ It's pure bliss...♡",
				},
				{
					cond:true, pos:0,
					 text: "Kyakya, her cunt is still twitching! Pound her harder!",
				},
				{
					cond:true, pos:1,
					 text: "Aaaah♡ Yesss, come inside me!♡ Fill me up and knock me up!♡",
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
					text:"Listen carefully.<br>Now you are my personal fucktoy~",
				},
				{
					cond:true, pos:1, effect:"hypnotized",
					text: "...Me... fucktoy...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Heh heh... Time to be my little fucktoy again~",
				},
				{
					cond:true, pos:1, effect:"hypnotized",
					text: "...Yes... fucktoy...",
				},
			]
		},
	],
	"네주인님":[
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					 text: "Executing command.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					 text: "Ugh... It's a command, so... I have to...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text: "Yes, Master!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text: "Whatever you say, Master...♡",
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text: "Hmph... Only because you're the master...♡ Not because I want to or anything...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text: "Yes, Master!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					 text: "Heh heh. Everyone knows you're supposed to be naked for these duels.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Understood.<br>Beginning to undress.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text: "Sh-shut up! I know! I was just about to!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text: "Oh! I completely forgot! Sorry, I'll take them off right now.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					  text: "Oh, right. Silly me, forgetting something so basic.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Now why would a good little fucktoy be wearing clothes? Hmm~?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text: "My apologies.<br>I will undress immediately.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Ugh...! Why, why was I wearing clothes?<br>Ugh, this is so embarrassing! Don't look!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text: "Oh, you're right! Fucktoys should always be naked. I made a mistake...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					  text: "You're right.♡ Why am I even wearing these rags?",
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
					   text: "Obey me!",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					 text: "Heh heh... Dance for me, puppet!",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"diffusion",
					text: "You can't resist me!",
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
					 text: "Let's crank that sensitivity up to 100!♡",
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
					 text: "Sensitivity... MAXIMIZED!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, portrait:"ecstasy2", effect:"shake",
					text: "Report: Sensitivity levels... critical...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, portrait:"ecstasy2", effect:"shake",
					 text: "W-What did you do?! Every touch feels... Aaah!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, portrait:"ecstasy2", effect:"shake",
					 text: "Whoa!♡ My skin is all tingly and hot!♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, portrait:"ecstasy2", effect:"shake",
					 text: "Ooh...♡ Now *this* is what I'm talking about.♡",
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
					 text: "Who told you a fucktoy could stand on two legs? Get on all fours. Now!",
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
					 text: "Freeze.♡ Don't you dare move an inch.",
				},
			]
		},
	],
	"Orgasm해라":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					 text: "When I snap my fingers... you will cum.♡",
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
					 text: "Heh heh... you won't even feel my hands on you~",
				},
				{
					cond:true, pos:1, keepOriginal:true,
					text: "Huh...?",
				},
			]
		},
	],

	"Villager-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "I am Master's designated sex-processing unit.",
				},
				{
					cond:true, pos:1,
					 text: "My function is to receive Master's cock.",
				},
				{
					cond:true, pos:0,
					 text: "Heh heh...♡ That's a good toy. So obedient.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "Seriously? *This* pathetic creep is my opponent?",
				},
				{
					cond:true, pos:1,
					 text: "You're ugly, you stink... just looking at you makes me sick.",
				},
				{
					cond:true, pos:0,
					text:"Oh, so mean~<br>But I can still use your little cunt, right?",
				},
				{
					cond:true, pos:1,
					text:"Hah? What are you even asking!<br>So annoying...",
				},
				{
					cond:true, pos:1,
					 text: "I'm a fucking toy, aren't I? Obviously you can use me however you want!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Let's test this hypnosis... Piss on the floor for me.",
				},
				{
					cond:true, pos:1,
					 text: "Huh? Oh... okay.",
				},
				{
					cond:true, pos:1, effect:"shake",
					  text: "*A small puddle forms at your feet...*",
				},
				{
					cond:true, pos:0,
					 text: "Heh heh, perfect. What a good girl.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					  "Whoa, pulling down my pants right at the start.<br>Aren't you being a bit too aggressive~?"
				},
				{
					cond:true, pos:1,
					 text: "Isn't this just basic fucktoy etiquette?♡",
				},
				{
					cond:true, pos:1,
					text: "Come on, get hard already.♡ Aren't you going to let me take care of that for you?",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					text: "Paizuri, cleaning fellatio, doggy style, cowgirl, anal, lactation, bondage, golden shower... and 137 other subroutines are available for execution.",
				},
				{
					cond:true, pos:0,
					 text: "Alright, alright, I get it. I'll just pick my favorites.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Good, you're completely under my hypnotic control♡",
				},
				{
					cond:true, pos:1,
					text:"Hypnosis? You still seriously believe in that crap?<br>There's no way I'd fall for it, you idiot.",
				},
				{
					cond:true, pos:0,
					  text: "Heh heh, is that so? Then what's your purpose here?♡",
				},
				{
					cond:true, pos:1,
					text:"Obviously, to be a fucktoy that services my master's cock.<br>Don't even know that? You really are an idiot.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Heh heh... Do you even realize what you're doing right now?",
				},
				{
					cond:true, pos:1,
					 text: "Huh? I'm spreading my pussy for you, Master.",
				},
				{
					cond:true, pos:1,
					text: "Isn't this what a fucktoy is supposed to do to get fucked?",
				},
				{
					cond:true, pos:0,
					text: "No no.♡ You're doing great~",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "Come on, what are you waiting for? Fill my little fuck-hole up.♡",
				},
				{
					cond:true, pos:0,
					 text: "Heh heh... My, aren't we a shameless little slut?",
				},
				{
					cond:true, pos:0,
					 text: "You've really grown into the role.♡",
				},
				{
					cond:true, pos:1,
					text:"Hurry♡ Hurry♡<br>Just fuck me already♡",
				},
			]
		},
	],
	"Villager-이벤트-행동불가":[ 
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					 text: "Heh heh... Can't move, can you?",
				},
				{
					cond:true, pos:0,
					  text: "I can grope you and tease you all I want...",
				},
				{
					cond:true, pos:0,
					text: "...and you can't do a thing to stop me, can you?",
				},
				{
					cond:true, pos:0,
					 text: "It's your own fault for having such a slutty body to begin with~",
				},
			]
		},
	],
	"Villager-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					 text: "Nope. Not good enough. You need to let me know when you're about to cum.",
				},
				{
					cond:true, pos:0,
					 text: "From now on, you'll squeal like a pig when you cum. Understand?",
				},
				{
					cond:true, pos:1,
					text:"I will correct myself.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					  text: "Oink! Oiiink! OINK!♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
				 text: "Hey. After I use your hole, what are you supposed to say?",
				},
				{
					cond:true, pos:1,
					 text: "Nngh... Th-thank you... for using me...",
				},
				{
					cond:true, pos:0,
				  text: "Hmm? Can't hear you. Thank me for what?",
				},
				{
					cond:true, pos:1,
				  text: "Thank you... for using my fucktoy cunt... for your pleasure, Master...",
				},
				{
					cond:true, pos:1,
					 text: "(How did my life come to this... being this creep's fucktoy...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
				  text: "So, what does a good fucktoy do after she cums?",
				},
				{
					cond:true, pos:1,
					  text: "Huh? Oh... I'm sorry, I don't know. What do I do?",
				},
				{
					cond:true, pos:0,
					text: "You have to spread your legs wide and show Master your messy, cum-soaked pussy!",
				},
				{
					cond:true, pos:1,
					text:"Aha! That's right!<br>You know everything, Master!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"You came already~<br>What a cheap little fucktoy.♡",
				},
				{
					cond:true, pos:1,
					 text: "Your cock is just that good, Master.♡ Any girl would've come by now.",
				},
				{
					cond:true, pos:0,
					text: "Such a sweet talker. As a reward, maybe I'll breed you next time.♡",
				},
				{
					cond:true, pos:1,
					text:"Yay!♡<br> You promise?♡ I'm so happy to be your favorite toy, Master!♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text: "Oink!♡ Oiiink! OINK!♡",
				},
				{
					cond:true, pos:0,
					 text: "What the hell was that?",
				},
				{
					cond:true, pos:1,
					 text: "As per your previous command<br> I am squeal like a sow when I cum.",
				},
				{
					cond:true, pos:0,
					 text: "Oh yeah, I forgot about that. Remind me, what other rules did I give you?",
				},
				{
					cond:true, pos:1,
					text:"Do not wear clothes. Piss myself when nipples are pinched. Cum when fingers are snapped...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Heh heh, my cock feel that good? You're squeezing so tight.♡",
				},
				{
					cond:true, pos:1,
					text: "Hmph...♡ I'm just doing my job as a fucktoy.<br>Don't get the wrong idea.",
				},
				{
					cond:true, pos:0,
					text: "Sure, sure. Keep telling yourself that with that slutty look on your face.♡",
				},
				{
					cond:true, pos:1,
					 text: "Shut up.♡ The only good thing about you is that cock.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Heh heh, what are you doing over there, all spread open?",
				},
				{
					cond:true, pos:1,
					 text: "Oh? This is the 'Post-Orgasm Presentation Pose,' isn't it?",
				},
				{
					cond:true, pos:1,
					  text: "It's to let you know that I've come. See? My pussy is still twitching and dripping...",
				},
				{
					cond:true, pos:1,
					text:"It's a basic fucktoy pose, to display my readiness for more, Master.",
				},
				{
					cond:true, pos:0,
					text: "Oh, right, right. That was the 'rule' I made up. Heh heh...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Heh heh... Right here. This spot always makes you cum.♡",
				},
				{
					cond:true, pos:1,
					text: "Aaah...♡ You've learned my body so well, Master.♡",
				},
				{
					cond:true, pos:1,
					text: "Guess I'm your fucktoy for life now.♡ You're going to take responsibility for breaking me in so perfectly, right?",
				},
				{
					cond:true, pos:0,
					 text: "Responsibility? Not my style. I'll just toss you aside when I get bored.♡",
				},
				{
					cond:true, pos:1,
					text: "Then I'll just have to make sure you *never* get bored.♡",
				},
			]
		},
	],
	"Villager-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					 text: "*Your body is wracked with uncontrollable shivers...*",
				},
				{
					cond:true, pos:0,
					text: "Hmm? Acting a little funny, aren't we?",
				},
				{
					cond:true, pos:1,
					text: "Must... clench...♡ My... my cunt... for Master...♡",
				},
				{
					cond:true, pos:1,
					 text: "Must... grip... harder...♡",
				},
				{
					cond:true, pos:0,
					text: "Heh heh... Looks like you've finally broken.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "It doesn't... feel good...♡ I'm only doing this... because I'm your fucktoy...♡",
				},
				{
					cond:true, pos:0,
					 text: "Tch, how boring. If you're going to be like that, maybe I should just throw you out.",
				},
				{
					cond:true, pos:1, effect:"shake",
					 text: "W-What...?!",
				},
				{
					cond:true, pos:1,
					 text: "N-No! I'm sorry... It's my fault... Please, don't throw me away...!",
				},
				{
					cond:true, pos:1,
					text: "I'll spread my legs wider... My cunt feels good, right...? Please... I'll be good...",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "Haaah♡ P-Please, wait... Just a little break...♡",
				},
				{
					cond:true, pos:0,
					text: "What's that? A fucktoy asking for a break?",
				},
				{
					cond:true, pos:0,
					text: "Toys don't get breaks. Now, present your hole.",
				},
				{
					cond:true, pos:1,
					 text: "Y-You're right...♡ I'm sorry... I shouldn't have said that...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "Aaaah♡ I love how Master's cock probes so deep inside my slutty cunt...♡",
				},
				{
					cond:true, pos:0,
					 text: "Heh heh...♡ A real beauty, someone I could never even talk to... now she's getting off on my cock.♡",
				},
				{
					cond:true, pos:0,
					text: "This slutty body must've had other owners before, right?♡",
				},
				{
					cond:true, pos:0,
					text: "But now, these tits, this cunt... they're all mine.♡",
				},
				{
					cond:true, pos:1,
					text: "That's right... I'm all yours, Master...♡ So please, keep using me... forever...♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					text: "*With a violent shudder, you squirts uncontrollably...♡*",
				},
				{
					cond:true, pos:0,
					 text: "Whoa, that's a flood... Are you okay, squirting like that?",
				},
				{
					cond:true, pos:1,
					text:"Ahek♡ Heek♡",
				},
				{
					cond:true, pos:0,
					  text: "Guess not. Heh. Well, I've had my fun with you.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "Heh heh... Still got that tough-girl act? Even while you're cumming your brains out?",
				},
				{
					cond:true, pos:1,
					 text: "I-It doesn't feel good...♡ I'm just... a f-fucktoy... doing her job...♡",
				},
				{
					cond:true, pos:0,
				    text: "Then what's with that tongue?<br>So desperately trying to lick my balls?",
				},
				{
					cond:true, pos:1,
					text: "I hate it...♡ So disgusting...♡ Go to hell...♡",
				},
				{
					cond:true, pos:1,
					text: "(Gods, I love his cock so much...♡)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "I'm feeling generous. Tell me what you want.",
				},
				{
					cond:true, pos:1,
					 text: "Th-Then... please put your cock in my hole... and just... stir it all around...♡",
				},
				{
					cond:true, pos:1,
					 text: "And... r-rub my nipples... and kiss me...♡ And fill my womb with all your cum...♡",
				},
				{
					cond:true, pos:0,
				 text: "Too complicated. I'll just fuck you how I want. Shut up and spread 'em.♡",
				},
				{
					cond:true, pos:1,
					  text: "Y-Yes, Master...♡ I'm sorry...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "Let's pause for a second, make this last longer.♡",
				},
				{
					cond:true, pos:1,
					 text: "Cock...♡ More cock...♡ Pound me...♡",
				},
				{
					cond:true, pos:0,
					 text: "Hey, I said break. You just came again. Don't you care about losing?",
				},
				{
					cond:true, pos:1,
					 text: "Fuck me...♡ Break my cunt...♡ More...♡",
				},
				{
					cond:true, pos:0,
					 text: "So deep in heat you can't even think. Alright, fine. Let's keep going.",
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
					text: "*A glob of acidic mucus shoots out, splattering across your clothes... and they begin to dissolve.*",
				},
			]
		},
	],
	"촉수attack":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "*Slimy tendrils squirm and probe...*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "*A wet, writhing mass slides against your skin...*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "*A thick tentacle slithers up your leg...*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "*A cold, smooth limb slides into a sensitive crevice...*",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text: "*Suckers pulse and squish against your flesh...*",
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
					 text: "*A thick tentacle wraps around you, squeezing tight!*",
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
					 text: "*A tendril forces a strange, sweet saliva down your throat... Gulp...*",
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
					text: "*The slime gurgles as it coats itself in a thick, protective layer of mucus.*",
				},
			]
		},
	],


	"Tentacle Slime-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "*A low gurgle echoes as a mass of tentacles writhes before you...*",
				},
				{
					cond:true, pos:1,
					text:"I cannot understand the command.<br>What should I do?",
				},
				{
					cond:true, pos:0,
					 text: "*A single tentacle slithers forward, tapping the ground expectantly.*",
				},
				{
					cond:true, pos:1,
					text:"Mate with this tentacle...<br>Understood.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					 text: "You have got to be kidding me! Couldn't they have sent something with a normal cock?!",
				},
				{
					cond:true, pos:1,
					 text: "Sex with a blob of goo? How does that even work?!",
				},
				{
					cond:true, pos:0,
					 text: "*In response, a dozen tentacles unfurl, writhing hungrily.*",
				},
				{
					cond:true, pos:1,
					 text: "T-Tentacles?! Oh, gods, that's disgusting...",
				},
				{
					cond:true, pos:1,
					text: "D-Don't tell me I have to stick *that* inside of me...?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "*A gelatinous blob wobbles and gurgles.*",
				},
				{
					cond:true, pos:1,
					text: "Oh, wow! My opponent is a cute little slime!",
				},
				{
					cond:true, pos:1,
					 text: "It's still my opponent, though, so I have to try my best.",
				},
				{
					cond:true, pos:1,
					text:"It's common sense to use your pussy to catch a slime...<br>right?",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					 text: "*The creature oozes and drips, its tentacles squirming...*",
				},
				{
					cond:true, pos:1,
					text: "Haaah... this sticky feeling isn't half bad.♡ So, how are you planning to use me?",
				},
				{
					cond:true, pos:0,
					text: "*A thick, glistening tentacle rises to meet your gaze.*",
				},
				{
					cond:true, pos:1,
					 text: "Oh, I see.♡ Well, don't be shy. Come on in.♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					 text: "If you are prepared, I will now assume the receptive position.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Ugh... I really hate tentacles...",
				},
				{
					cond:true, pos:1,
					 text: "Getting tied up, helpless, while they force their way into every single one of your holes...",
				},
				{
					cond:true, pos:1,
					text: "...it just feels way too fucking good.",
				},
				{
					cond:true, pos:1, effect:"shake",
					 text: "I-I mean, it's awful! Painful!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					text: "Whoa, you got so big! I've never seen a slime this huge before!",
				},
				{
					cond:true, pos:0,
					text:"*Krrreung... Gurgle...*",
				},
				{
					cond:true, pos:1,
					text: "And all those tentacles... they're so long and thick...",
				},
				{
					cond:true, pos:1,
					text: "I know what happens next... You're going to put all of these inside me, aren't you?♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:0,
					text: "*The massive slime pulses with a deep, hungry groan.*",
				},
				{
					cond:true, pos:1,
					text: "So big... and all those writhing limbs... It's magnificent.♡",
				},
				{
					cond:true, pos:1,
					 text: "Whoever engineered this beast... they really know what a girl wants.♡",
				},
			]
		},
	],
	"Tentacle Slime-이벤트-보호점액":[ 
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"!=", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					   text:"*With a wet splat, a thick mucus covers your body...*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I've been covered in a strange slime...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:" My movements are becoming sluggish",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					 text:"Agh, what is this stuff?! It's so sticky!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					 text:"(Shit... it's getting hard to move...!)",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text:"Eek, it's cold! And so gooey...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"(Huh...?<br>I can't move my body...!)",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Ooh, cold... What's this little trick?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"(Ahh... trying to hold me still, are we? Kinky.♡)",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					 text:"*Another wave of sticky mucus envelops you...♡*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I am completely covered...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I can't move...<br>as I wish♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"More of this crap...?♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"So you're just going to tie me up and have your way with me?♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Wow, there's so much of it now...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"It's so sticky, It's so hard to move...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Getting desperate, are we?♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Pinning me down so I can't fight back?♡",
				},
			]
		},
	],
	"Tentacle Slime-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Orgasm confirmed.<br>Continued stimulation will likely result in defeat.",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"Orgasm achieved.<br>Initiating squirt.",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					text:"*Your body convulses as she releases a torrent...*",
				},
				{
					cond:true, pos:0,
					text:"*Gulp gulp gulp*",
				},
				{
					cond:true, pos:1,
					text:"It has been consumed. If more is required, I can produce another orgasm.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Tentacle Slime-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*The tentacles pulse and throb, burrowing deeper...*",
				},
				{
					cond:true, pos:1,
					text:"The human form... is ill-suited for this level of penetration...♡",
				},
				{
					cond:true, pos:0,
					text:"*They swell inside her, filling every void...*",
				},
				{
					cond:true, pos:1,
					text:"Reporting that the body's durability... has reached its limit...<br>Danger... ",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					 text:"It's wringing me out...♡ I'm coming again, and again...♡",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
					 text:"Got 'em! I got your panties, big sis~!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					 text:"...My undergarments... have been removed.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					  text:"Hey! Get back here, you little thief!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text:"Huh? Wait, when did you...? My panties are gone!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					 text:"Heh, didn't even feel it. Not bad, kid.",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:true, pos:0,
					  text:"What color panties are you wearing today~?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I am not wearing any.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					 text:"Hah! I knew you'd try that again! That's why I didn't wear any today, you little brat!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					  text:"Panties? I'm not wearing any!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					  text:"Want to check for yourself?♡ I decided to go commando today.♡",
				},
				{
					cond:true, pos:0,
					  text:"Liar~ Let me see~",
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
					 text:"Big sis~ Your boobs look so soft... Can I touch 'em? Please? Just a little!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"C'mon, let me touch 'em~ You're gonna let me anyway, right~?",
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
					text:"Big sis, give me a hug~",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Big sis, I wanna stick my pee-pee in your special place~♡",
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
					 text:"Let's play house, big sis! You can be the puppy!",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:0,
					 text:"Hehe, you twitch every time I push in! It's so funny!",
				},
			]
		},
	],
	"누나는장난감이야":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"플레이어.표정", op:"in", v2:["normal", "excited", "blank"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Please... release me. This 'game' has gone far enough...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					 text:"Are you going to untie me or not, you little shit?!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text:"Oh, I'm all tied up. I can't move at all.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"My, this is quite the position. I almost feel... embarrassed.♡",
				},
				{
					cond:true, pos:0,
					text:"So that's what your hole looks like up close~ What happens if I poke it with this?",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"Ah!♡ N-No, don't!♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake",
					 text:"Mmph...♡ Nngh...♡",
				},
				{
					cond:true, pos:0,
					text:"Whoa, you're all wet down there! Did you like that? You're such a perv, big sis~",
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
					text:"She's a perverted adult<br>who gets turned on by my cock~",
				},
				{
					cond:{v1:"모드", op:"==", v2:1}, pos:0,
					text:"It's hilarious how you get wet<br>the moment I put my finger in~",
				},
			]
		},
	],

	"Imp-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Imp-이벤트-망할꼬맹이":[ 
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
	"Imp-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Imp-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
					text:"*With a furious bellow, it charges and shatters your armor!*",
				},
			]
		},
	],
	"Tauros울음":[
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*MMMOOOOOO!!!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					 text:"*A low growl rumbles in its chest...*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"*It paws the ground, snorting aggressively.*",
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
					text:"*With a powerful roar, it slams its massive body against yours!*",
				},
			]
		},
		{
			priority:0, cond:true, repeatable:true,
			lineList:[
				{
					cond:true, pos:0, effect:"shake",
					text:"*It drives you into the ground with overwhelming force! MOOO!*",
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"A very large cock.<br>There is a high probability that my pussy will not be able to withstand it.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"You have to be joking... There's no way something that huge will fit...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text:"Th-that's... is that a normal size for... one of those?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Oh my... You're planning to use *that* on me...?♡",
				},
			]
		},
		{
			priority:0, cond:{v1:"모드", op:"==", v2:1},
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Analyzing the cock.<br>It appears to be... larger than before.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"D-Don't think just showing me that thing is going to scare me...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					 text:"I-It's still so big... I can't believe it fit inside me last time.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					 text:"So big... so powerful...♡ Just looking at it makes my womb ache...♡",
				},
			]
		},
	],


	"Tauros-휴식":[ 
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"!=", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					 text:"*The beast takes a step back, breathing heavily.*",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"==", v2:"corrupted"}], repeatable:true,
			lineList:[
				{
					cond:true, pos:0,
					text:"Hoo... Hoo... <br>*It lets out a low growl, catching its breath before the next assault.*",
				},
			]
		},
	],

	"Tauros-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"A-are... you kidding me?<br>Is that really a cock?",
				},
				{
					cond:true, pos:1,
					 text:"It's a fucking battering ram! There's no way that'll fit!",
				},
				{
					cond:true, pos:0,
					text:"*Prrr...*",
				},
				{
					cond:true, pos:1, effect:"shake",
					text:"H-Hey! Stay back! Don't you come near me!",
				},
				{
					cond:true, pos:1,
					  text:"My body is not some disposable toy for a fucking animal!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrreung...*",
				},
				{
					cond:true, pos:1,
					 text:"Oh, you poor thing... You must be in pain, being so... swollen.",
				},
				{
					cond:true, pos:1,
					text:"Don't worry.<br>You can use my pussy if it will make you feel better.",
				},
				{
					cond:true, pos:1,
				 text:"Hehe... Wow, up close it's even... bigger than I thought.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
			lineList:[
				{
					cond:true, pos:1,
				      text:"If I take something that massive... my cunt will be stretched out forever...♡",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					 text:"I will now serve my purpose as its vessel.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					  text:"You again...",
				},
				{
					cond:true, pos:1,
					 text:"After you... no other cock feels like anything...",
				},
				{
					cond:true, pos:1,
					  text:"A-ah, never mind! Just... bring it on!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Krrr...*",
				},
				{
					cond:true, pos:1,
					  text:"So, my purpose was to be a onahole for Master Tauros's big cock, right?",
				},
				{
					cond:true, pos:1,
					 text:"Is that why my hole got stretched out? So it would fit you perfectly?",
				},
				{
					cond:true, pos:1,
				  text:"I'm so happy I get to fulfill my purpose again!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Tauros-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy",
					text:"Hnngh... Haaaak...♡",
				},
				{
					cond:true, pos:1,
					  text:"I... I can withstand this... for my master...♡",
				},
				{
					cond:true, pos:0,
					text:"*Kuaaaang!!<br>Prrrr...*",
				},
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2",
					  text:"Nnggghhh...!!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"A minor orgasm has occurred...<br>but there is no problem.",
				},
				{
					cond:true, pos:0,
					text:"*Hoo hoo*",
				},
				{
					cond:true, pos:1,
				   text:"My legs are trembling... but I can still serve.",
				},
				{
					cond:true, pos:1,
					   text:"I will focus on gripping you tighter.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Tauros-이벤트-Corruption":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:true, pos:1, effect:"shake", portrait:"ecstasy2", keepPort:true,
					 text:"*Your body convulses uncontrollably, eyes rolling back...*",
				},
				{
					cond:true, pos:1,
					  text:"Unnngh...♡ Ggghk...♡",
				},
				{
					cond:true, pos:1, portrait:"ecstasy2",
					text:"Ahhhk!♡ Aaaahhh!♡",
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
					 text:"*A fine, corrosive mist sprays from its cap...*",
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
					text:"*It lets out a dry, clicking sound as it prepares to spread its seed...*",
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
					  text:"*Small tendrils latch onto you, draining your warmth...*",
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
					 text:"*A puff of spores erupts from its body!*",
				},
			]
		},
	],

	"Mushroom Man-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:1,
					 text:"The opponent appears mushroom, yet it seems to possess... reproductive capabilities.",
				},
				{
					cond:true, pos:1,
					 text:"If that is the case, my duty is clear.",
				},
				{
					cond:true, pos:0,
					text:"Eunggogogok...",
				},
				{
					cond:true, pos:1,
					text:"I am prepared to to mate with it.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
			lineList:[
				{
					cond:true, pos:1,
					   text:"What the hell is that? A walking corpse? That's disgusting...",
				},
				{
					cond:true, pos:1,
					 text:"You expect me to do *it* with that thing? No fucking way! Stay back!",
				},
				{
					cond:true, pos:0, effect:"shake",
					text:"Pshhh... *It releases a cloud of fine spores in her direction...*",
				},
				{
					cond:true, pos:1,
					 text:"(Huh...? Suddenly... my body feels heavy... My head's getting foggy...)",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
					text:"Wow♡ For an shroom, that's a pretty magnificent piece♡<br>Looks like I'm in for some fun♡",
				},
			]
		},

		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*You will become one with us. Offer your flesh to the swarm.*",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Mushroom Man-이벤트-정신동기화":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Soldier"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Soldier"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Soldier"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Soldier"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Noble"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Noble"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Noble"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"*Be lost in your illusion.*",
				},
				{
					cond:true, pos:1,
					text:"Raising the honor... of the beastfolk...",
				},
				{
					cond:true, pos:1,
					text:"Peace... and tranquility... have come...",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Celebrity"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Celebrity"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Celebrity"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Celebrity"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Cleric"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Cleric"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Cleric"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Merchant"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Merchant"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Merchant"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Merchant"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Mercenary"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Mercenary"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Mercenary"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Mercenary"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Soldier"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Noble"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Celebrity"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Cleric"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Merchant"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Background", op:"==", v2:"Mercenary"}],
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
	"Mushroom Man-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Mushroom Man-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
					cond:"Position", pos:0,
					text:"Leave everything to me,<br>all you have to do is feel.",
				},
				{
					cond:{v1:"Position", op:"==", v2:false}, pos:0,
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
					cond:{v1:"Champion.기록.이번.이벤트.Orgasm", op:">", v2:0}, pos:0,
					text:"Kgh, you're so tight...<br>You don't mind if I cum inside, right?",
				},
				{
					cond:{v1:"Champion.기록.이번.이벤트.Orgasm", op:"==", v2:0}, pos:0,
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

	"Blonde Thug-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Blonde Thug-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Blonde Thug-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Potion조교":[
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

	"필사적인Resistant":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will never submit.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"You think... I'll lose...<br>to a guy like you...?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I haven't...<br>given in yet...!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"How boring...<br>It doesn't even tickle...!",
				},
			]
		},
	],

	"Trainer-이벤트-개전":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
					text:"No, your name from now on is Fucktoy.",
				},
				{
					cond:true, pos:1, name:"성처리 육변기",
					text:"Understood.<br>My name is Fucktoy.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:0,
					text:"Get on your knees, sex-slave.",
				},
				{
					cond:true, pos:1,
					text:"H-huh?<br>Me...?",
				},
				{
					cond:true, pos:0,
					text:"Who else here is a sex-slave but you?",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
					text:"Eek...! I-I'm sorry!<br>For a sex-slave to speak without permission...",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Trainer-이벤트-조교성공":[
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
	"Trainer-이벤트-Excitement":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1,
					text:"I'm sorry... for being a worthless sex-slave with a pussy<br>that cums just from being fucked... I'm sorry...",
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
					text:"A sex-slave shouldn't dare to have desires...<br>Mercy, punishment... it's all up to master's decision...",
				},
				{
					cond:true, pos:0,
					text:"Hahaha, that's the correct answer!<br>You've become a proper sex-slave!",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
	"Trainer-이벤트-Corruption":[
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
			lineList:[
				{
					cond:true, pos:1, portrait:"ecstasy2", keepPort:true,
					text:"N-no...♡<br>I-I'm sorry...♡",
				},
				{
					cond:true, pos:1,
					text:"I'm... a pathetic sex-slave...<br>who can't even hold back an orgasm...♡",
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Obedient"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Resistant"}],
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
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Naive"}],
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
					text:"Please pound master's cock<br>into this sex-slave's pussy...♡",
				},
				{
					cond:true, pos:0,
					text:"Haha, I misspoke.<br>You weren't human to begin with.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"모드", op:"==", v2:1}, {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}],
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


	"fellatio":[
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

	"caress":[
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

	"kiss":[
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

	"penetration":[
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Will you... fuck me here...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Why do you like things like this...<br>Pervert...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I want you to fuck me here...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"This place is empty,<br>won't someone fuck me~",
				},
			]
		},
	],

	"Position변경":[
		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will assume a more efficient position♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Doing it like this...<br>is a little better...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"It will feel good if we do it in this position♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"I like this position better♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will change my position.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"I'll decide the position...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I like this position.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Let's enjoy this position.",
				},
			]
		},
	],

	"Transcendent":[
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I have acquired the truth♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"This endlessly flowing forbidden language...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Ah, my brain feels like it's going to burn out...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Let me feel more of this power♡",
				},
			]
		},
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will realize the forbidden knowledge♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Show me more♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Infinite truth... is piercing through me♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Please, spray your semen in my mouth.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Ugh, hurry up and cum...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Please, spray your semen in my mouth.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Spray your semen in my mouth!",
				},
			]
		},
	],

	"urination":[
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, effect:"diffusion",
					text:"Pour your semen into me,<br>without leaving anything behind♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, effect:"diffusion",
					text:"My womb is trembling...♡<br>It's begging for your semen♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, effect:"diffusion",
					text:"I can't take it anymore♡ I'll tighten up♡<br>Please splooge all over me♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, effect:"diffusion",
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will focus my strength on my lower abdomen,<br>and squeeze♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Do you think... your pathetic cock<br>can win against my trained pussy?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I'll show you the results of my training♡<br>Please watch me, master!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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

	"광Warrior혼":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will release...<br>all my sexual desire.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"I must face my inner desires...<br>Ooooh... Ooooooh♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Nnngh... I can't take it anymore♡<br>I want to do lots of pleasant things♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"I'll release everything inside me♡<br>I can't handle... what happens next♡",
				},
				{
					cond:true, pos:1, effect:"diffusion", portrait:"corrupted", keepPort:true, keepOriginal:true,
					text:"Ohoook♡ Hek♡ Heek♡",
				},
			]
		},
	],
	"광Warrior혼-2":[
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Please admire my body.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"This outfit is so embarrassing...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Please take a closer look<br>at my lewd form.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>I request to mate♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>How much further are you going to humiliate me...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Hehek♡ I can't take it♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Fuck me♡ Fuck me with your cock♡",
				},
			]
		},
		{
			priority:1, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>I offer my body to Lord Cock♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>I'm begging like this♡ Ugh... Give me your cock♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, effect:"shake",
					text:"*jiggle jiggle*<br>Aing♡ Hurry up and ravage me♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, effect:"shake",
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Initiating mating♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Hurry... hurry up and finish...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"It's time for the mating I've been waiting for♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Reporting that that part felt good.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Wh-where are you licking...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I won't let you go until I'm satisfied.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will change into attire suitable for a duel.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"How is it... Now that I've undressed first, you can't do anything, right?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Where are you looking?<br>Those are my clothes.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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

	"Crafted":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Drink. This is my juice.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"D-drink it... quickly...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Please drink lots of the juice I made.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"It came from this hole...♡ Want more?",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Please accept everything that comes from this body.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Why are you enjoying drinking this... It's disgusting...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I prepared it with what comes from my body.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"I made it with my whole body... Try swallowing it all♡",
				},
			]
		},
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I offer this to you.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"W-why are you getting excited drinking something like this...<br>You pervert...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"This is the taste of my heat... Please drink it all up.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"According to the plan, I will begin the extraction process♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Hurry up and cum it all out...♡<br>Let's just get this over with♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Fill my womb completely...♡<br>Until it overflows outside♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will fire.<br>Hnngh...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"No, don't look...<br>Hnngh♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Haah, I'm coming!<br>Nnggh...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Ooh♡<br>Thank you for the charge♡*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"No... I don't want to do it again...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Nngh♡ Thank you for cumming inside...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"In the shadow that embraces all.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Don't look at me like that...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Gently, with all my heart.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will use my last resort.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"I didn't want to use this...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"The end is coming.<br>One drop is enough.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Do not leave any behind, drink it all.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"(This is how you make it, right?)",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Please accept everything that overflows from my pussy♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will use a tool.<br>*click*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Wear this!<br>*click*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"It's a special onahole.<br>*click*",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"cast:자지", op:"in", v2:"Magic Slot.영창.태그"}], pos:1,
					text:"*O steadfast cock,<br>sow thy seed in this female♡*",
				},
				{
					cond:["and", {v1:"cast:보지", op:"in", v2:"Magic Slot.영창.태그"}], pos:1,
					text:"*O soaking wet pussy,<br>prepare to receive Lord Cock♡*",
				},
				{
					cond:["and", {v1:"cast:가슴", op:"in", v2:"Magic Slot.영창.태그"}], pos:1,
					text:"*With the touch of soft breasts,<br>lead the male to pleasure♡*",
				},
				{
					cond:["and", {v1:"cast:엉덩이", op:"in", v2:"Magic Slot.영창.태그"}], pos:1,
					text:"*O luscious ass,<br>let desire penetrate you♡*",
				}
			]
		},
	],

	"Magic Missile-영창":[
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
	"Magic Missile-집중":[
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"I will control time.<br>Prepare for the oncoming pleasure.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Stop!<br>From now on, it's my time!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Time, stop!<br>I'll show you the pleasure of an eternal moment!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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

	"Essence결합":[
		{
			priority:0, cond:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"This is merely a medical procedure.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"I'm getting a bad feeling about this...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I can feel myself getting stronger.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Beginning treatment.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"This is just a medical procedure.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I'll start the treatment!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Erection confirmed♡<br>Initiating rapid ejaculation therapy♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"This is just a medical procedure♡<br>There's absolutely no other intention♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"I will now begin treatment of the erect cock♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Corrupted erect cock detected♡<br>Initiating purification sex immediately♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"You've shown your true colors, you wicked thing♡<br>I'll purify you right now with my sacred pussy♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"My goodness, what a wicked cock♡<br>I'll purify it by sucking it right now♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"We become... one...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"We are becoming... one...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"We are becoming... one...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"This medicine will make me<br>a perfect onahole.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"If I drink this...<br>I might not be able to return to being human...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"If I drink this,<br>I'll be able to fight better, right?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, portrait:"ecstasy2",
					text:"Ingestion complete♡<br>Effect manifesting♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, portrait:"ecstasy2",
					text:"My body... my body is getting hot...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, portrait:"ecstasy2",
					text:"Heek, my head... feels strange...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, portrait:"ecstasy2",
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Attempting personality manipulation.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Even after my personality is altered...<br>can I still be called 'me'...?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"To be able to control my mind,<br>that's a wonderful thing.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"Manipulation complete.<br>Target personality: Total perverted slut♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"Nnnggh♡ N-no♡<br>I am... not a total perverted slut...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, effect:"diffusion", portrait:"ecstasy2",
					text:"Nnnggh♡ I-I am♡<br>a total perverted slut...♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Nothing changed?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Aha♡ I was already a total perverted slut♡",
				},
			]
		},
	],


	"player-moan":[
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

	"플레이어-Orgasm준비":[

	],
	"플레이어-Orgasm":[
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
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Haang♡ I came♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"Nngh, I caaame♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Aang♡ I came♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Nngh♡ I came♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Aah♡ This feels good♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Feels good♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Haang♡ Feels good♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Feels good♡",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["corrupted"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Orgasm, has arrived♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"Haang♡ Orgasm is here♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Nngh♡ Orgasm has arrived♡",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Aang♡ Orgasm is here♡",
				}
			]
		},

		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"Aah♡<br>No way... me...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Nngh♡<br>I came...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Aah♡<br>It's fine... just once...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["normal", "excited"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1, keepOriginal:true,
					text:"Aang♡<br>This can't be happening...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1, keepOriginal:true,
					text:"Haang♡<br>I came again...",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1, keepOriginal:true,
					text:"Aang♡<br>Th-this is dangerous...",
				}
			]
		},

		{
			priority:1, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], 
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
					text:"Nngh♡<br>I have orgasmed.",
				},
			]
		},
		{
			priority:0, cond:["and", {v1:"플레이어.표정", op:"in", v2:["blank"]}], repeatable:true,
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1, keepOriginal:true,
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
			priority:2, cond:["and", {v1:"Champion.Name", op:"==", v2:"Blonde Thug"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Eldorian"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Haha, to think the academy's greatest genius would be in a place like this.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Who... are you?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Hmph, do you know me?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Oh my, do you know me?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Did you know?<br>I was the one who sent you the invitation.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Thank you.<br>Are you well-versed in mind magic?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"It was you?<br>You've got a good eye for people.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Thank you for the invitation.<br>I'd love to talk with you more.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Eldorian"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"This is common sense.<br>Isn't it?",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Silvani"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Hypnotizing a Sylvani<br>is a very easy task.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Halfling"}],
			lineList:[
				{
					cond:true, pos:2, name:"칼레스",
					text:"Become more sensitive.<br>More suitable for a sex slave.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Soldier"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Inchouk!<br>Aren't you a wanted criminal!",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Inchouk!<br>What is a criminal like you doing here?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Inchouk!<br>I can't believe it... I'll arrest you as soon as this is over.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Silvani"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Lord Chouk?<br>I heard you went missing.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Chouk?<br>I was wondering where you went, so you were here?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Lord Chouk!<br>You were gone, but you were here?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Eldorian"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Think you can finish before pleasure turns to pain?",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Silvani"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Dance! My puppet!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Halfling"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Let me hear the sound of your mind breaking!",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}],
			lineList:[
				{
					cond:true, pos:2, name:"추크",
					text:"Let's see if you can break the leash!",
				}
			]
		},
	],
	"개입-Potion":[
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Scholar"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Ooh, what is that drug?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Hey, that drug is?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Oh, is that drug what I think it is?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
					text:"Uh, did you make that?",
				},
				{
					cond:true, pos:2, name:"니스비",
					text:"Interested in my special drug?<br>Then, drink up!",
				},
			]
		},
		{
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Halfling"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Comrade?<br>What are you doing in a place like this.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Comrade!<br>Are you also trapped here?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"To meet a comrade in a place like this.<br>Nice to see you.",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
			priority:2, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"Champion.Name", op:"==", v2:"Trainer"}],
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
			priority:1, cond:["and", {v1:"모드", op:"==", v2:0}, {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}, {v1:"커스텀.Background", op:"==", v2:"Rogue"}],
			lineList:[
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Obedient"}], pos:1,
					text:"Huh?<br>Are you also an exile?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Resistant"}], pos:1,
					text:"Ooh,<br>were you also cast out from your beastfolk?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Naive"}], pos:1,
					text:"Are you perhaps an exile like me?",
				},
				{
					cond:["and", {v1:"커스텀.Personality", op:"==", v2:"Aggressive"}], pos:1,
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
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Eldorian"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"You are a sow...<br>Engrave it deep in your mind.",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Silvani"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"I'll strip off all your masks...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Halfling"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"I'll make it so you can never stand on two feet again...",
				}
			]
		},
		{
			priority:0, cond:["and", {v1:"커스텀.Race", op:"==", v2:"Beastfolk"}],
			lineList:[
				{
					cond:true, pos:2, name:"모모리카",
					text:"The boundary between pleasure and pain...<br>I'll erase it...",
				}
			]
		},
	],
}