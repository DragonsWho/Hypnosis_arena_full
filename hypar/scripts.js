const version = "2.0";

const choiceValues = {race:"엘도리아인", face:"A", class:"", background:"군인"}
let playRecord = {};

let language = "KOR";

const raceTag = {
	"엘도리아인":"El",
	"실바니":"Sy",
	"하프만":"Ha",
	"트라이브":"Tr",
}
const classNum = {"전사":1, "암살자":2, "마술사":3, "치유사":4};

const psTag = {
	"A":["정중함", "정중함"],
	"B":["거만함", "거만함"],
	"C":["온화함", "온화함"],
	"D":["무례함", "무례함"],
}

const bgTag = {
	"군인":"bg1",
	"엘리트":"bg2",
	"연예인":"bg3",
	"종교인":"bg4",
	"학자":"bg5",
	"범죄자":"bg6",
	"상인":"bg7",
	"용병":"bg8",
}

let collectionTab = 0;
let collectionPos = 0;
let collectionPath = [];
const collection = {
	boss:{
		/*boss1:true,
		boss2:true,
		boss3:true,

		bossH1:true,
		bossH2:true,
		bossH3:true,*/
	},
	ending:{
		/*
		normal_win_bg1:true,
		normal_win_bg2:true,
		normal_win_bg3:true,
		normal_win_bg4:true,
		normal_win_bg5:true,
		normal_win_bg6:true,
		normal_win_bg7:true,
		normal_win_bg8:true,

		normal_lose_bg1:true,
		normal_lose_bg2:true,
		normal_lose_bg3:true,
		normal_lose_bg4:true,
		normal_lose_bg5:true,
		normal_lose_bg6:true,
		normal_lose_bg7:true,
		normal_lose_bg8:true,

		hard_win_bg1:true,
		hard_win_bg2:true,
		hard_win_bg3:true,
		hard_win_bg4:true,
		hard_win_bg5:true,
		hard_win_bg6:true,
		hard_win_bg7:true,
		hard_win_bg8:true,

		hard_lose_bg1:true,
		hard_lose_bg2:true,
		hard_lose_bg3:true,
		hard_lose_bg4:true,
		hard_lose_bg5:true,
		hard_lose_bg6:true,
		hard_lose_bg7:true,
		hard_lose_bg8:true,
		*/
	},
}

let skip = false;
let gamemode = 0;
let playerName = "";
let clothesNum = 1;
let deckName = "";

const imageSrc = "image/"//"https://flccncn.neocities.org/HAtest85794/image/";

const deck = [];
const startDeck = [];
const startState = [];
const startPoisonSac = [];
const startSpellSlot = [];
const startEssence = [];
const deckData = {};
let profilePos = -1;
let deckPos = -1;

const opDeck = [];

const poisonSac = [];
const spellSlot = [deepCopy(cardDB["MA-MG-000"]), deepCopy(cardDB["MA-MG-000"]), deepCopy(cardDB["MA-MG-000"])];
const essences = [];

let selectedSpellSlot = 0;

let maxDeckSize = 10;

const action = [];
const player = {name:"", excite:0, real_excite:0, excite_mul:1, exciteL:5, real_exciteL:5, exciteL_mul:1, orgasm:0, orgasmL:3, real_orgasmL:3, orgasmL_mul:1, overkill:0, action:[], select:[], state:[], record:[], condition:"normal", specialCond:null, tags:[], useTimes:1, immune:false, modifier:{lewd:{add:0, subtract:0}, estrus:{add:0, subtract:0}, excite:{add:0, subtract:0}, exciteL:{add:0, subtract:0}, orgasmL:{add:0, subtract:0}}, effectActive:[]}
const enemy = {name:"", excite:0, real_excite:0, excite_mul:1, exciteL:5, real_exciteL:5, exciteL_mul:1, orgasm:0, orgasmL:5, real_orgasmL:5, orgasmL_mul:1, overkill:0, action:[], select:[], state:[], record:[], condition:"normal", useTimes:1, immune:false, modifier:{excite:{add:0, subtract:0}, exciteL:{add:0, subtract:0}, orgasmL:{add:0, subtract:0}}, effectActive:[]}

const recordForm = {use:[], discard:[], transform:[], combine:[], event:{orgasm:0, attack:0, attacked:0, avoid:0, lewd:{up:0, down:0}, estrus:{up:0, down:0}, excite:{up:0, down:0}, exciteL:{up:0, down:0}, orgasmL:{up:0, down:0}, gain:{lust:0, wetness:0, sBlock:0, corrupt:0}, consumeLust:0, get:[], getState:[], expiredSpell:[]}};
const cardRecord = [];
const cardRecordForm = {card:undefined, round:0, lewd:0, estrus:0, lust:0, consumeLust:0, wetness:0, sBlock:0, corrupt:0, player:{ attack:0, attacked:0, avoid:0, excite:0, exciteL:0, orgasm:0, orgasmL:0, use:[], discard:[], transform:[], combine:[], get:[], getState:[] }, enemy:{ attacked:0, excite:0, exciteL:0, orgasm:0, orgasmL:0, use:[], discard:[], transform:[], get:[], getState:[] }};

let minEstrus = 1;
let maxEstrus = Infinity;
let estrus = 2;
let real_estrus = 2;
let estrus_mul = 1;
let minLewd = 1;
let maxLewd = Infinity;
let lewd = 2;
let real_lewd = 2;
let lewd_mul = 1;

let posture = null;
let lust = 0;
let maxLust = Infinity;
let wetness = 0;
let maxWetness = Infinity;
let minWetness = 0;
let sBlock = 0;
let delayedEx = 0;
let maxSBlock = Infinity;
let corrupt = 0;

let nelson = 1;
let trace = 0;
let magicMissile = 1;
let spore = 1;
let real_spore = 1;
let vitality = 1;
const miyeongUsedHelp = [];
let firstAid = false;
let prophecy = [0, 0, 0];

let specialEnd = false;
let playerCorrupted = false;

let point = 100;

function init() {
	let ct = loadObject("playRecord");
	if(ct) {
		playRecord.playCount = (ct.playCount)?ct.playCount:0;
		playRecord.winCount = (ct.winCount)?ct.winCount:0;
		playRecord.hardWinCount = (ct.hardWinCount)?ct.hardWinCount:0;
		playRecord.bossRecord = (ct.bossRecord)?ct.bossRecord:{};
	} else {
		playRecord = {
			playCount: 0,
			winCount: 0,
			hardWinCount: 0,
			bossRecord: {
			},
		}
	}

	let ln = loadObject("language");
	if(ln) {
		language = ln;
	} else {
		language = "KOR";
	}

	const agree = loadObject("agree");
	if(agree) {
		document.getElementById("agree").checked = true;
		document.getElementById("startButton").classList.toggle("disabled");
		if(playRecord.winCount > 0) {
			document.getElementById("hardmodeButton").classList.toggle("disabled");
		}
		if(playRecord.hardWinCount > 0) {
			document.getElementById("challengeButton").classList.toggle("disabled");
		}
	}
	if(playRecord.winCount > 0) {
		document.querySelector("#hardmodeButton > h2").style.display = "none";
		document.getElementById("hardmodeTitle").style.display = "block";
	}
	if(Object.entries(playRecord.bossRecord).every(([key, value]) => /^boss(H?\d)$/.test(key) && value.win >= 1) > 0) {
        //document.getElementById("challengeButton").style.display = "block";
	}

	if(playRecord.playCount > 0) {
		const disappear2nd = document.getElementsByClassName('2ndDisappear');
		for(let dnd of disappear2nd) {
			dnd.style.display = "none";
		}
		const unlock2nd = document.getElementsByClassName('2ndUnlock');
		for(let und of unlock2nd) {
			und.style.display = "block";
		}

		const usable2nd = document.getElementsByClassName('2ndUsable');
		for(let usnd of usable2nd) {
			if(usnd.classList.contains("disabled")) {
				usnd.classList.remove("disabled");
			}
		}

		document.getElementById('trait').style.display = "flex";
		Object.keys(cardDB).forEach(id => {
			if(cardDB[id].type == "특성") {
				const traitPreviewDiv = createCard(cardDB[id], 32, false, 99);
				traitPreviewDiv.style.display = "none";
				traitPreviewDiv.classList.add("traitPreview");
				document.getElementById('traitPreviewList').appendChild(traitPreviewDiv);
			}
		})
	}

	const cardSaveData = loadObject("card");
	if(cardSaveData) {
		function deepAssign(target, ...sources) {
		    sources.forEach(source => {
		        if (source && typeof source === 'object') {
		            Object.keys(source).forEach(key => {
		                if (source[key] && typeof source[key] === 'object') {
		                    target[key] = deepAssign(target[key] || {}, source[key]);
		                } else {
		                    target[key] = source[key];
		                }
		            });
		        }
		    });
		    return target;
		}
		deepAssign(cardSave, cardSaveData);
	} else {
		saveObject("card", cardSave);
	}

	let cl = loadObject("collection");

	const collectionCard = document.getElementById("collectionCard");
	const collectionTrait = document.getElementById("collectionTrait");

	function createTitledElement(titleText) {
	    // 컨테이너 요소 생성
	    const container = document.createElement('div');
	    container.className = 'categoryTitle';
	    container.style.display = 'flex';
	    container.style.alignItems = 'center';
	    container.style.justifyContent = 'center';
	    container.style.width = '100%';
	    
	    // 왼쪽 가로선 생성
	    const leftLine = document.createElement('div');
	    leftLine.style.flexGrow = '1';
	    leftLine.style.height = '1px';
	    leftLine.style.backgroundColor = 'var(--color-box)';
	    leftLine.style.marginRight = '10px'; // 제목과의 간격

	    // 제목 생성
	    const title = document.createElement('h2');
	    title.style.whiteSpace = 'nowrap';
	    title.style.color = 'var(--color-box)'
	    title.style.fontSize = '2em'
	    title.textContent = `❖ ${titleText} ❖`;

	    // 오른쪽 가로선 생성
	    const rightLine = document.createElement('div');
	    rightLine.style.flexGrow = '1';
	    rightLine.style.height = '1px';
	    rightLine.style.backgroundColor = 'var(--color-box)';
	    rightLine.style.marginLeft = '10px'; // 제목과의 간격

	    // 요소들을 컨테이너에 추가
	    container.appendChild(leftLine);
	    container.appendChild(title);
	    container.appendChild(rightLine);

	    return container;
	}
	
	collectionCard.appendChild(createTitledElement("전사"));
	Object.values(cardDB).filter(cd => cd.class == '전사' && cd.tags.includes('덱빌딩')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	
	collectionCard.appendChild(createTitledElement("암살자"));
	Object.values(cardDB).filter(cd => cd.class == '암살자' && cd.tags.includes('덱빌딩')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	Object.values(cardDB).filter(cd => cd.tags.includes('기본제조')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	
	collectionCard.appendChild(createTitledElement("마술사"));
	Object.values(cardDB).filter(cd => cd.class == '마술사' && cd.tags.includes('덱빌딩')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	Object.values(cardDB).filter(cd => cd.tags.includes('마술요약')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	
	collectionCard.appendChild(createTitledElement("치유사"));
	Object.values(cardDB).filter(cd => cd.class == '치유사' && cd.tags.includes('덱빌딩')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	Object.values(cardDB).filter(cd => cd.tags.includes('기본정수')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});

	collectionCard.appendChild(createTitledElement("중립"));
	Object.values(cardDB).filter(cd => cd.class == '중립' && cd.tags.includes('덱빌딩')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});

	collectionCard.appendChild(createTitledElement("엘도리아인"));
	Object.values(cardDB).filter(cd => cd.race == '엘도리아인' && cd.tags.includes('보너스')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});

	collectionCard.appendChild(createTitledElement("실바니"));
	Object.values(cardDB).filter(cd => cd.race == '실바니' && cd.tags.includes('보너스')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});

	collectionCard.appendChild(createTitledElement("하프만"));
	Object.values(cardDB).filter(cd => cd.race == '하프만' && cd.tags.includes('보너스')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});

	collectionCard.appendChild(createTitledElement("트라이브"));
	Object.values(cardDB).filter(cd => cd.race == '트라이브' && cd.tags.includes('보너스')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});
	
	collectionCard.appendChild(createTitledElement("패널티"));
	Object.values(cardDB).filter(cd => cd.class == '패널티' && cd.tags.includes('덱빌딩')).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionCard.appendChild(cardDiv);
	});

	collectionTrait.appendChild(createTitledElement("중립"));
	Object.values(cardDB).filter(cd => cd.class == "중립" && cd.type == '특성' && cd.boss != 0).forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionTrait.appendChild(cardDiv);
	});

	collectionTrait.appendChild(createTitledElement("전사"));
	Object.values(cardDB).filter(cd => cd.class == "전사" && cd.type == '특성').forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionTrait.appendChild(cardDiv);
	});

	collectionTrait.appendChild(createTitledElement("암살자"));
	Object.values(cardDB).filter(cd => cd.class == "암살자" && cd.type == '특성').forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionTrait.appendChild(cardDiv);
	});

	collectionTrait.appendChild(createTitledElement("마술사"));
	Object.values(cardDB).filter(cd => cd.class == "마술사" && cd.type == '특성').forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionTrait.appendChild(cardDiv);
	});

	collectionTrait.appendChild(createTitledElement("치유사"));
	Object.values(cardDB).filter(cd => cd.class == "치유사" && cd.type == '특성').forEach(cd => {
		const cardDiv = createCard(cd, 28, true, 100);
		collectionTrait.appendChild(cardDiv);
	});

	document.getElementById("collectionChamp").appendChild(createTitledElement("일반"));
	let _hardStart = false;
	let _challengeStart = false;
	Object.keys(champList).forEach(id => {
		let champData = champList[id];

		/*if(champData.category == '첫상대') {
			collectionCard.appendChild(createTitledElement(champData.name[language]));
			Object.values(cardDB).filter(cd => cd.class == champData.name.KOR && cd.tags.includes('챔피언덱')).forEach(cd => {
				const cardDiv = createCard(cd, 28, true, 100);
				collectionCard.appendChild(cardDiv);
			});

			collectionTrait.appendChild(createTitledElement(champData.name[language]));
			Object.values(cardDB).filter(cd => cd.class == champData.name.KOR && cd.tags.includes('챔피언능력')).forEach(cd => {
				const cardDiv = createCard(cd, 28, true, 100);
				collectionTrait.appendChild(cardDiv);
			});
		} else */
		if(champData.category == '마지막상대' && !_hardStart) {
			_hardStart = true;
			document.getElementById("collectionChamp").appendChild(createTitledElement("하드"));
		}
		if(champData.category == '챌린지') {
			if(!(cl && cl.boss[id])) {
				return;
			}
			if(!_challengeStart) {
				_challengeStart = true;
				document.getElementById("collectionChamp").appendChild(createTitledElement("챌린지"));
			}
		}

		if(!playRecord.bossRecord[id]) {
			playRecord.bossRecord[id] = {win:0, lose:0};
		}

		const boxDiv = document.createElement('div');
		boxDiv.className = 'box button';
		boxDiv.style.flex = `0 calc(${isMobileDevice()?33:25}% - 20px)`;
		boxDiv.setAttribute('data-id', id);
		boxDiv.setAttribute('onclick', 'selectCollection.call(this, \'boss\', this.getAttribute(\'data-id\'))');

		const boxImgDiv = document.createElement('div');
		boxImgDiv.className = 'box-img';
		const img = document.createElement('img');
		img.src = `${imageSrc}/face/portrait_${champData.img}_normal.webp`;
		img.setAttribute('onerror', 'handleImgError(this)');
		img.alt = '';
		boxImgDiv.appendChild(img);

		const hr1 = document.createElement('hr');

		boxDiv.appendChild(boxImgDiv);
		boxDiv.appendChild(hr1);

		Object.keys(champData.name).forEach(lang => {
			const h2 = document.createElement('h2');
			h2.className = `box-title langText ${lang}`;

			if((cl && cl.boss[id])) {
				collection.boss[id] = true;
				h2.textContent = champData.name[lang];
			} else {
				boxDiv.classList.add("disabled");
				h2.textContent = "????";
			}
			boxDiv.appendChild(h2);
		})
		
		const hr2 = document.createElement('hr');

		const boxContentDiv = document.createElement('div');
		boxContentDiv.className = 'box-content';

		Object.keys(champData.name).forEach(lang => {
			const p = document.createElement('p');
			p.className = `box-text langText ${lang}`;
			p.innerHTML = champData.condDesc[lang];
			boxContentDiv.appendChild(p);
		})

		boxDiv.appendChild(hr2);
		boxDiv.appendChild(boxContentDiv);

		document.getElementById("collectionChamp").appendChild(boxDiv);
	});
	let endingCount = 0;
	const endingTitles = ["일반-패배", "일반-승리", "하드-패배", "하드-승리", "기타"];
	Object.keys(endingList).forEach(id => {
		if(endingList[id].category == "기타" && !(cl && cl.ending[id])) {
			return;
		}
		if(endingCount % 8 == 0) {
			document.getElementById("collectionEnding").appendChild(createTitledElement(endingTitles[Math.floor(endingCount/8)]));
		}
		endingCount++;
		let endingData = endingList[id];

		const boxDiv = document.createElement('div');
		boxDiv.className = 'box button';
		boxDiv.style.flex = `0 calc(${isMobileDevice()?33:25}% - 20px)`;;
		boxDiv.setAttribute('data-id', id);
		boxDiv.setAttribute('onclick', 'selectCollection.call(this, \'ending\', this.getAttribute(\'data-id\'))');

		const boxImgDiv = document.createElement('div');
		boxImgDiv.className = 'box-img';
		const img = document.createElement('img');
		img.src = 'image/'+endingData.img+'.webp';
		img.setAttribute('onerror', 'handleImgError(this)');
		img.alt = '';
		boxImgDiv.appendChild(img);

		const hr1 = document.createElement('hr');

		boxDiv.appendChild(boxImgDiv);
		boxDiv.appendChild(hr1);

		Object.keys(endingData.name).forEach(lang => {
			const h2 = document.createElement('h2');
			h2.className = `box-title langText ${lang}`;

			if((cl && cl.ending[id])) {
				collection.ending[id] = true;
				h2.textContent = endingData.name[lang];
			} else {
				boxDiv.classList.add("disabled");
				img.style.filter = 'blur(8px)'
				h2.textContent = "????";
			}
			boxDiv.appendChild(h2);
		})

		const hr2 = document.createElement('hr');

		const boxContentDiv = document.createElement('div');
		boxContentDiv.className = 'box-content';

		Object.keys(endingData.name).forEach(lang => {
			const p = document.createElement('p');
			p.className = `box-text langText ${lang}`;
			p.innerHTML = endingData.condDesc[lang];
			boxContentDiv.appendChild(p);
		})

		boxDiv.appendChild(hr2);
		boxDiv.appendChild(boxContentDiv);

		document.getElementById("collectionEnding").appendChild(boxDiv);
	});

	initEnemyCardSelect();
/*
	Object.keys(cardDB).forEach(id => {
		const _cd = createCard(cardDB[id], 28);
        if(cardDB[id] && (!cardDB[id].nochange && !(cardDB[id].parents && cardDB[cardDB[id].parents].nochange))) {
            const _img = document.createElement('img');
            _img.className = "card-image-original";
            _img.src = `${imageSrc}card/${cardDB[id].parents?cardDB[id].parents:id}-real.webp`;
            _cd.querySelector("div.card-image").appendChild(_img);
			document.getElementById("cardListTest").appendChild(_cd);
        }
		const _cd2 = createCard(cardDB[id], 28);
		document.getElementById("cardListTest").appendChild(_cd2);

	})
*/

	if(isMobileDevice()) {
		/*document.querySelectorAll(".race, .class, .background, .ps, .classDetail").forEach(element => {
		    element.style.flex = "0 calc(50% - 20px)";
		});
		document.querySelectorAll(".face").forEach(element => {
		    element.style.flex = "0 calc(33% - 20px)";
		});*/
	}
}
function generateFacePattern() {
	function getRandomElement(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

    const faces = ["A", "B", "C", "D", "E"];
    const clothes = [1, 2, 3, 4];

    let _face = [];
    let _clothes = [];

    const pattern = playRecord.playCount == 0 ? 6 : Math.floor(Math.random() * 100) < 50 ? 1 : Math.floor(Math.random() * 100) < 20 ? 5 : Math.floor(Math.random() * 3) + 2;

    if (gamemode == 1) {
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
            _clothes.push(5);
        }
    } else if (gamemode == 2) {
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
            _clothes.push(0);
        }
    } else if (pattern === 1) {
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
        }
        _clothes = clothes.sort(() => Math.random() - 0.5);
    } else if (pattern === 2) {
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
        }
        _clothes = [1, 2, 3, 4];
    } else if (pattern === 3) {
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
            _clothes.push(getRandomElement(clothes));
        }
    } else if (pattern === 4) {
        const randomClothes = getRandomElement(clothes);
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
            _clothes.push(randomClothes);
        }
    } else if (pattern === 5) {
        for (let i = 0; i < 4; i++) {
            _face.push(getRandomElement(faces));
            _clothes.push(0);
        }
    } else if (pattern === 6) {
        _face = ["A", "A", "A", "A"];
        _clothes = [1, 1, 1, 1];
    }

    //console.log({ pattern, _face, _clothes })

	const raceImgs = document.getElementsByClassName("race");

	for(let i=0; i<4; i++) {
		if(_clothes[i] == 0) {
			raceImgs[i].querySelectorAll('img')[0].src = `${imageSrc}face/portrait_player_${["El","Sy","Ha","Tr"][i]}_${_face[i]}_${(Math.random()*2>1)?"excited":"corrupted"}.webp`;
			raceImgs[i].querySelectorAll('img')[1].style.display = "none";
		} else if(_clothes[i] == 5) {
			raceImgs[i].querySelectorAll('img')[0].src = `${imageSrc}face/portrait_player_${["El","Sy","Ha","Tr"][i]}_${_face[i]}_${["normal", "normal", "normal", "corrupted"][Math.floor(Math.random()*4)]}.webp`;
			raceImgs[i].querySelectorAll('img')[1].src = `${imageSrc}face/portrait_player_${["El","Sy","Ha","Tr"][i]}_${_face[i]}_c5.webp`;
		} else {
			raceImgs[i].querySelectorAll('img')[0].src = `${imageSrc}face/portrait_player_${["El","Sy","Ha","Tr"][i]}_${_face[i]}_normal.webp`;
			raceImgs[i].querySelectorAll('img')[1].src = `${imageSrc}face/portrait_player_${["El","Sy","Ha","Tr"][i]}_${_face[i]}_c${_clothes[i]}.webp`;
		}
	}
}

function changeLanguage(lang) {
	language = lang;
	saveObject('language', lang);

	const lnBtns = document.getElementsByClassName('language');
	for(let btn of lnBtns) {
		if(btn.id == lang) {
			btn.classList.add('active');
		} else {
			btn.classList.remove('active');
		}
	}

	const texts = document.getElementsByClassName('langText');
	for(let t of texts) {
		if(t.classList.contains(lang)) {
			if(t.tagName.toLowerCase() === "div") {
				t.style.display = 'block';
			} else {
				t.style.display = '';
			}
		} else {
			t.style.display = 'none';
		}
	}

	const cards = document.getElementsByClassName('card');
	for(let cd of cards) {
		cardTextUpdate(cd, cardDB[cd.getAttribute('data-id')]);
	}
}

function getWord(keyword) {
	return dictionary[keyword]?dictionary[keyword][language]:keyword;
}

function collectionTabChange(n) {
	collectionTab = n;
	const ctabs = document.querySelectorAll('.collectionTab');
	for(let div of ctabs) {
		if(Number(div.getAttribute("data-num")) == n ^ div.classList.contains("active")) {
			div.classList.toggle("active");
		} 
	}
	const clists = document.querySelectorAll('.collectionList');
	for(let div of clists) {
		if(Number(div.getAttribute("data-num")) == n) {
			div.style.display = "flex";
		} else {
			div.style.display = "none";
		}
	}
	document.getElementById('collectionView').style.display = "none";
	document.getElementById('collectionCardView').style.display = "none";
	document.getElementById('collectionEndingView').style.display = "none";
	collectionPos = 1;
	collectionPath.splice(0);

	returnButtonUpdate();
}

function collectionBack() {
	switch(collectionPos) {
	case 1:
		document.getElementById('startPart').style.display = "flex";
		document.getElementById('collectionPart').style.display = "none";
		collectionPos -= 1;
		break;
	case 2:
		collectionPath.pop();
		if(collectionPath.length > 0) {
			let _recent = collectionPath[collectionPath.length - 1];
			selectCollection(_recent.type, _recent.id, false);
		} else {
			const clists = document.querySelectorAll('.collectionList');
			for(let div of clists) {
				if(Number(div.getAttribute("data-num")) == collectionTab) {
					div.style.display = "flex";
				} else {
					div.style.display = "none";
				}
			}
			document.getElementById('collectionView').style.display = "none";
			document.getElementById('collectionCardView').style.display = "none";
			document.getElementById('collectionEndingView').style.display = "none";
			window.scrollTo({ top: scrollPos, behavior: 'instant' });
			collectionPos -= 1;
		}
		break;
	}

	returnButtonUpdate();
}

var scrollPos = 0;

function selectCollection(type, id, history = true) {
	if(history && (collectionPath.length == 0 || !(collectionPath[collectionPath.length - 1].type == type && collectionPath[collectionPath.length - 1].id == id))) {
		collectionPath.push({type:type, id:id});
	}
	if(collectionPos != 2) {
		scrollPos = window.scrollY || document.documentElement.scrollTop;
		collectionPos = 2;
	}
	const collectionImg = document.getElementById('collectionImg');
	const collectionImgSmall = document.getElementById('collectionImgSmall');

	collectionImg.style.display = 'none';
	collectionImgSmall.style.display = 'block';

	const relatedDetail = document.getElementById('relatedDetail');
	const bossCardDetail = document.getElementById('bossCardDetail');

	relatedDetail.style.display = 'none';
	bossCardDetail.style.display = 'none';

	switch(type) {
	case "card":
		document.getElementById('collectionCardView').style.display = "block";
		document.getElementById('collectionImgSwap').style.display = "block";
		document.getElementById('collectionImgDetail').style.display = "block";

		const relatedCards = document.getElementById('relatedCards');
		relatedCards.innerHTML = '';

		const cardData = cardDB[id];
		var palette;
		if(cardData.tags.includes("부정적") || cardData.type == '패널티') { 
			palette = cardColor["부정적"];
		} else {
			palette = cardColor[cardData.class];
		}

		document.getElementById('collectionName').innerHTML = cardData.name[language];
		document.getElementById('collectionImgSwap').classList.remove("active");
		if(cardData.nochange) {
			document.getElementById('collectionImgSwap').classList.add("disabled");
			if(cardData.parents && !cardData.noInherit) {
				collectionImgSmall.src = `${imageSrc}card/${cardData.parents}.webp`;
				collectionImg.src = `${imageSrc}cardEx/${cardData.parents}.webp`;
			} else {
				collectionImgSmall.src = `${imageSrc}card/${id}.webp`;
				collectionImg.src = `${imageSrc}cardEx/${id}.webp`;
			}
		} else {
			document.getElementById('collectionImgSwap').classList.remove("disabled");
			document.getElementById('collectionImgSwap').setAttribute('onclick', `toggleCardImg.call(this, '${id}')`);

			if((cardData.type != "특성" && document.getElementById("originalImg").checked) || (cardData.type == "특성" && document.getElementById("originalImg2").checked)) {
				if(cardData.parents && !cardData.noInherit) {
					collectionImgSmall.src = `${imageSrc}card/${cardData.parents}.webp`;
					collectionImg.src = `${imageSrc}cardEx/${cardData.parents}.webp`;
				} else {
					collectionImgSmall.src = `${imageSrc}card/${id}.webp`;
					collectionImg.src = `${imageSrc}cardEx/${id}.webp`;
				}
				document.getElementById('collectionImgSwap').classList.add("active");
			} else {
				if(cardData.parents && !cardData.noInherit) {
					if(cardDB[cardData.parents].nochange) {
						collectionImgSmall.src = `${imageSrc}card/${cardData.parents}.webp`;
						collectionImg.src = `${imageSrc}cardEx/${cardData.parents}.webp`;
					} else {
						collectionImgSmall.src = `${imageSrc}card/${cardData.parents}-real.webp`;
						collectionImg.src = `${imageSrc}cardEx/${cardData.parents}-real.webp`;
					}
				} else {
					collectionImgSmall.src = `${imageSrc}card/${id}-real.webp`;
					collectionImg.src = `${imageSrc}cardEx/${id}-real.webp`;
				}
			}
		}
		var cltext = "";
		cltext += `
		    <div style="display: flex;">
		`
		if(cardData.class) {
			cltext += `<div style="border: 1px solid var(--color-active); border-radius:32px; padding:16px; margin:16px;"><b>직업:</b> ${cardData.class}</div>`;
		}
		if(cardData.type) {
			cltext += `<div style="border: 1px solid var(--color-active); border-radius:32px; padding:16px; margin:16px;"><b>종류:</b> ${cardData.type!="특성"?cardData.type:(cardData.tags.includes("부정적")?"단점":"장점")}</div>`;
		}
		if(cardData.rarity && cardData.rarity != '없음') {
			cltext += `<div style="border: 1px solid var(--color-active); border-radius:32px; padding:16px; margin:16px;"><b>등급:</b> ${cardData.rarity}</div>`;
		}
		if(cardData.race) {
			cltext += `<div style="border: 1px solid var(--color-active); border-radius:32px; padding:16px; margin:16px;"><b>종족:</b> ${cardData.race}</div>`;
		}
		if(cardData.bg) {
			cltext += `<div style="border: 1px solid var(--color-active); border-radius:32px; padding:16px; margin:16px;"><b>배경:</b> ${cardData.bg}</div>`;
		}
		if(cardData.cost && cardData.cost != 0) {
			cltext += `<div style="border: 1px solid var(--color-active); border-radius:32px; padding:16px; margin:16px;"><b>비용:</b> ${cardData.cost}pt</div>`;
		}
		cltext += `</div>`;
		cltext += `<div style="border: 1px solid var(--color-active); padding:16px;">${createCardText(cardData)}</div><br>`
		if(cardData.flavorText) {
			cltext += `<blockquote style="border-bottom: 1px solid var(--color-active);"><b>플레이버 텍스트:</b><br>${cardData.flavorText[language]}</blockquote>`;
		}
		if(cardData.hypnoText) {
			cltext += `<blockquote style="border-bottom: 1px solid var(--color-active);"><b>개변 플레이버 텍스트:</b><br>${cardData.hypnoText[language]}</blockquote>`;
		}
		if(cardSave[cardData.id]) {
			cltext += `
			    <div style="display: flex; gap: 16px; margin-top:64px;">
			`;

			if (cardSave[cardData.id].normal && Object.keys(cardSave[cardData.id].normal.clearList).length > 0) {
			    cltext += `
			        <div style="width: 50%; border: 1px solid var(--color-active); border-radius:32px; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
					    <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px; text-align: center;">
					        일반 모드 클리어
					    </div>
					    
					    <div style="display: flex; align-items: center; gap: 16px;">
					        <div style="width: 50px; height: 50px; background: ${palette.name}; border-radius: 100%; display: flex; justify-content: center; align-items: center; flex-shrink: 0; filter: grayscale(1);">
					            <span style="font-size: 24px; line-height: 1;">⭐</span>
					        </div>
					        <div>${Object.keys(cardSave[cardData.id].normal.clearList)
					            .sort((a, b) => Object.keys(champList).indexOf(a) - Object.keys(champList).indexOf(b))
					            .map(id => champList[id].name[language])
					            .join(", ")}</div>
					    </div>
					</div>
			    `;
			}

			if (cardSave[cardData.id].hard && Object.keys(cardSave[cardData.id].hard.clearList).length > 0) {
			    cltext += `
			        <div style="width: 50%; border: 1px solid var(--color-active); border-radius:32px; padding: 16px; display: flex; flex-direction: column; gap: 16px;">
					    <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px; text-align: center;">
					        하드 모드 클리어
					    </div>
					    
					    <div style="display: flex; align-items: center; gap: 16px;">
				            <div style="width: 50px; height: 50px; background: ${palette.name}; border-radius: 100%; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
				                <span style="font-size: 24px; line-height: 1;">⭐</span>
				            </div>
				            <div>${Object.keys(cardSave[cardData.id].hard.clearList)
				                .sort((a, b) => Object.keys(champList).indexOf(a) - Object.keys(champList).indexOf(b))
				                .map(id => champList[id].name[language])
				                .join(", ")}</div>
					    </div>
					</div>
			    `;
			}

			cltext += `
			    </div>
			`;

		}

		document.getElementById('collectionDesc').innerHTML = cltext;

		if(cardData.related) {
			const relatedList = [];
	    	let replacementIDs = [];

			cardData.related.forEach(item => {
				switch(item) {
				case "중립":
					replacementIDs = Object.values(cardDB)
					    .filter(card => card.class === "중립" && card.type != "패널티" && card.type != "체위" && card.tags.includes("덱빌딩") && !card.tags.includes("생성불가"))
					    .map(card => card.id);

					relatedList.push(...replacementIDs);
					break;
				case "중립공격":
					replacementIDs = Object.values(cardDB)
					    .filter(card => card.class === "중립" && card.type == "공격" && card.tags.includes("덱빌딩") && !card.tags.includes("생성불가"))
					    .map(card => card.id);

					relatedList.push(...replacementIDs);
					break;
				case "패널티":
					replacementIDs = Object.values(cardDB)
					    .filter(card => card.type === "패널티" && card.tags.includes("덱빌딩") && !card.tags.includes("생성불가"))
					    .map(card => card.id);

					relatedList.push(...replacementIDs);
					break;
				case "궁극":
					replacementIDs = Object.values(cardDB)
					    .filter(card => card.rarity === "궁극" && card.class == choiceValues.class && !card.tags.includes("생성불가"))
					    .map(card => card.id);

					relatedList.push(...replacementIDs);
					break;
				default:
					if(item.startsWith("tag:")) {
						replacementIDs = Object.values(cardDB)
						    .filter(card => card.tags.includes(item.substr(4)) && !card.tags.includes("생성불가") && !(item.substr(4) == '즉발 마술' && card.id == 'MA-MG-EA-002'))
						    .map(card => card.id);

						relatedList.push(...replacementIDs);
					} else if(item.startsWith("ref:")) {
						let cardPool = [];
						switch(item.substr(4)) {
						case "독주머니":
							replacementIDs = Object.values(cardDB)
						    .filter(card => card.tags.includes("기본제조") && !card.tags.includes("생성불가"))
						    .map(card => card.id);
							break;
						case "즉발슬롯":
							replacementIDs = Object.values(cardDB)
						    .filter(card => card.tags.includes("기본마술") && card.tags.includes("즉발 마술") && !card.tags.includes("생성불가"))
						    .map(card => card.id);
							break;
						case "영창슬롯":
							replacementIDs = Object.values(cardDB)
						    .filter(card => card.tags.includes("기본마술") && card.tags.includes("영창 마술") && !card.tags.includes("생성불가"))
						    .map(card => card.id);
							break;
						case "집중슬롯":
							replacementIDs = Object.values(cardDB)
						    .filter(card => card.tags.includes("기본마술") && card.tags.includes("집중 마술") && !card.tags.includes("생성불가"))
						    .map(card => card.id);
							break;
						}

						relatedList.push(...replacementIDs);
					} else {
						relatedList.push(item);
					}
					break;
				}
			});

			if(relatedList.length > 0) {
				relatedDetail.style.display = 'block';

		    	for(let _c of relatedList) {
		    		const _cd = cardDB[_c];
		    		const cardDiv = createCard(_cd, 24, true, 100);
		    		relatedCards.appendChild(cardDiv);
		    	}
		    }
		} else {
			
		}
		break;
	case "boss":
		document.getElementById('collectionCardView').style.display = "block";
		document.getElementById('collectionImgSwap').style.display = "none";
		document.getElementById('collectionImgDetail').style.display = "none";
		document.getElementById('collectionName').innerHTML = champList[id].fullName[language];
		var cltext = "";
		cltext += `<div style="border: 1px solid var(--color-active); padding:16px;">${champList[id].description[language]}</div><br>`;
		const _stats = champList[id].stats;

		cltext += `
		    <div style="display: flex;">
		`
		cltext += `<div style="width:50%; border: 1px solid var(--color-active); padding:16px; margin-right:8px;"><span style="font-size: 20px;"><b>[${getWord("능력치")}]</b></span><br><b>${getWord("흥분 한계")}: </b>${_stats.exciteL}<br><b>${getWord("절정 한계")}: </b>${_stats.orgasmL}</div><br>`;
		cltext += `<div style="width:50%; border: 1px solid var(--color-active); padding:16px; margin-left:8px;"><span style="font-size: 20px;"><b>[${getWord("전적")}]</b></span><br><b>${getWord("도전자")} ${getWord("승리")}:</b> ${playRecord.bossRecord[id].win}<br><b>${getWord(champList[id].name["KOR"])} ${getWord("승리")} :</b> ${playRecord.bossRecord[id].lose}</div><br>`;
		cltext += `</div>`;

		document.getElementById('collectionDesc').innerHTML = cltext;
		collectionImg.src = `${imageSrc}/face/portrait_${champList[id].img}_normal.webp`;

		const bossStateDetail = document.getElementById('bossStateDetail');
		const bossDeckDetail = document.getElementById('bossDeckDetail');
		bossStateDetail.innerHTML = '';
		bossDeckDetail.innerHTML = '';
		bossCardDetail.style.display = 'block';

    	for(let _c of champList[id].state) {
    		const _cd = cardDB[_c];
    		const cardDiv = createCard(_cd, 24, true, 100);
    		bossStateDetail.appendChild(cardDiv);
    	}
    	for(let _c of champList[id].deck) {
    		const _cd = cardDB[_c];
    		const cardDiv = createCard(_cd, 24, true, 100);
    		bossDeckDetail.appendChild(cardDiv);
    	}
		break;
	case "ending":
		document.getElementById('collectionEndingView').style.display = "block";
		document.getElementById('collectionEndingName').textContent = endingList[id].name[language];
		document.getElementById('collectionEndingDesc').innerHTML = '';
		createStory(document.getElementById("collectionEndingDesc"), endingList[id].endingId);
		if(id == "morvainEnd") {
			createStory(document.getElementById("collectionEndingDesc"), "morvainComment");
		}
		break;
	}
	const clists = document.querySelectorAll('.collectionList');
	for(let div of clists) {
		div.style.display = "none";
	}
	document.getElementById('collectionView').style.display = "flex";
	window.scrollTo({ top: 0, behavior: 'instant' });

	returnButtonUpdate();
}

function returnButtonUpdate() {
	const returnButtonText = document.querySelector(`.returnButton.${language}`);
	returnButtonText.innerHTML = `${dictionary['돌아가기'][language]}`
	if(collectionPath.length >= 2) {
		const priorPath = collectionPath[collectionPath.length - 2];
		if(priorPath.type == 'card') {
			returnButtonText.innerHTML += ` (${cardDB[priorPath.id].name[language]})`;
		}
		if(priorPath.type == 'boss') {
			returnButtonText.innerHTML += ` (${champList[priorPath.id].name[language]})`;
		}
	}
}

function toggleCardImg(id) {
    var img = document.getElementById("collectionImg");
    var imgSmall = document.getElementById("collectionImgSmall");
    var swapButton = document.getElementById('collectionImgSwap');

	img.style.display = 'none';
	imgSmall.style.display = 'block';

    if (!swapButton.classList.contains("active")) {
    	swapButton.classList.add("active");
    	if(cardDB[id].parents && !cardDB[id].noInherit) {
    		imgSmall.src = `${imageSrc}card/${cardDB[id].parents}.webp`;
    		img.src = `${imageSrc}cardEx/${cardDB[id].parents}.webp`;
    	} else {
    		imgSmall.src = `${imageSrc}card/${id}.webp`;
    		img.src = `${imageSrc}cardEx/${id}.webp`;
    	}
    } else {
    	swapButton.classList.remove("active");
    	if(cardDB[id].parents && !cardDB[id].noInherit) {
    		imgSmall.src = `${imageSrc}card/${cardDB[id].parents}-real.webp`;
    		img.src = `${imageSrc}cardEx/${cardDB[id].parents}-real.webp`;
    	} else {
    		imgSmall.src = `${imageSrc}card/${id}-real.webp`;
    		img.src = `${imageSrc}cardEx/${id}-real.webp`;
    	}
    }
}

function openImgTab() {
    var img = document.getElementById("collectionImg");
    if (img) {
        var src = img.src;
        window.open(src, '_blank');
    } else {
        console.log("Image with id 'collectionImg' not found.");
    }
}

function initCardSelect() {
	for(let id in cardDB) {
		const card = deepCopy(cardDB[id]);
		if(card.type == '특성') {
			if((!card.race || card.race == choiceValues.race) && (card.class == '중립' || card.class == choiceValues.class) && (!card.bg || card.bg == choiceValues.background) && (card.boss == undefined || (enemy.id == `bossH${card.boss}`) && collection.boss[`boss${card.boss}`]) && !(gamemode == 2 && card.id != "DA-NT-ALL-000" && card.class == '중립' && !card.race && !card.bg)) {
				const cardDiv = createCard(card, 30, true, 1);
				document.getElementById('trait').appendChild(cardDiv);
				adjustCardFontSize(cardDiv);
				const deckCardDiv = createCard(card, 32);
				deckCardDiv.style.display = "none";
				deckCardDiv.classList.add("deckCard");
				document.getElementById('yourState').appendChild(deckCardDiv);
				adjustCardFontSize(deckCardDiv);
			}
		} else if((card.class == '중립' || card.class == choiceValues.class || card.type == '패널티') && card.tags.includes("덱빌딩")) {
			const cardDiv = createCard(card, 30, true, 0);
			if(card.class == '중립') {
				document.getElementById('neutral').appendChild(cardDiv);
			}
			if(card.class == choiceValues.class) {
				if(card.rarity == '일반') {
					document.getElementById('normal').appendChild(cardDiv);
				}
				if(card.rarity == '숙련') {
					document.getElementById('expert').appendChild(cardDiv);
				}
				if(card.rarity == '궁극') {
					document.getElementById('ultimate').appendChild(cardDiv);
				}
			}
			if(card.type == '패널티') {
				document.getElementById('penalty').appendChild(cardDiv);
			}
			adjustCardFontSize(cardDiv);

			const deckCardDiv = createCard(card, 32);
			deckCardDiv.style.display = "none";
			deckCardDiv.classList.add("deckCard");
			document.getElementById('yourDeck').appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		} else if(choiceValues.class == "암살자" && card.tags.includes("기본제조")) {
			const poisonSacDiv = document.getElementById('poison');
			const cardDiv = createCard(card, 30, true, 2);
			poisonSacDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);
			const deckCardDiv = createCard(card, 32);
			deckCardDiv.style.display = "none";
			deckCardDiv.classList.add("deckCard");
			document.getElementById('yourPoisonSac').appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		} else if(choiceValues.class == "마술사" && card.tags.includes("기본마술")) {
			const spellSlotDiv = document.getElementById('spellSlot');
			const cardDiv = createCard(card, 30, true, 3);
			spellSlotDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);
		} else if(choiceValues.class == "치유사" && card.tags.includes("기본정수")) {
			const essenceDiv = document.getElementById('essence');
			const cardDiv = createCard(card, 30, true, 4);
			essenceDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);
		} else if(choiceValues.race == "엘도리아인" && card.race == "엘도리아인" && card.tags.includes("보너스") && gamemode != 2) {
			const wildcardDiv = document.getElementById('wildcard');
			const cardDiv = createCard(card, 30, true, 51);
			cardDiv.id = "selectWildcard";
			wildcardDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);

			const deckCardDiv = createCard(card, 32);
			deckCardDiv.classList.add("deckCard");
			document.getElementById('yourDeck').appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		} else if(choiceValues.race == "실바니" && card.race == "실바니" && card.tags.includes("보너스") && gamemode != 2) {
			const arcaneDiv = document.getElementById('arcane');
			const cardDiv = createCard(card, 30, true, 0);
			arcaneDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);

			const deckCardDiv = createCard(card, 32);
			deckCardDiv.classList.add("deckCard");
			document.getElementById('yourDeck').appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		} else if(choiceValues.race == "하프만" && card.race == "하프만" && card.tags.includes("보너스") && gamemode != 2) {
			const customDiv = document.getElementById('customCardContainer');
			const cardDiv = createCard(card, 30, true, 53);
			cardDiv.id = "selectCustomCard";
			customDiv.appendChild(cardDiv);
			addEffectBlock();
			adjustCardFontSize(cardDiv);

			const deckCardDiv = createCard(card, 32);
			deckCardDiv.classList.add("deckCard");
			document.getElementById('yourDeck').appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		} else if(choiceValues.class == card.class && choiceValues.race == "트라이브" && card.race == "트라이브" && card.tags.includes("보너스") && gamemode != 2) {
			const trialDiv = document.getElementById('trial');
			const cardDiv = createCard(card, 30, true, 0);
			trialDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);

			const deckCardDiv = createCard(card, 32);
			deckCardDiv.classList.add("deckCard");
			document.getElementById('yourDeck').appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		} 
	}
	document.getElementById('instantSpell').appendChild(createCard(cardDB["MA-MG-000"], 32));
	document.getElementById('chantSpell').appendChild(createCard(cardDB["MA-MG-000"], 32));
	document.getElementById('focusedSpell').appendChild(createCard(cardDB["MA-MG-000"], 32));

	for(let i=0; i<3; i++) {
		document.getElementById('yourSpellSlot').appendChild(createCard(cardDB["MA-MG-000"], 32));
	}
	for(let i=0; i<5; i++) {
		const ingDiv = createCard(cardDB["HE-IN-000"], 24);
		ingDiv.classList.add('disabled');
		document.getElementById('selectedEssence').appendChild(ingDiv);

		const ingDiv2 = createCard(cardDB["HE-IN-000"], 32);
		ingDiv2.style.display = 'none';
		document.getElementById('yourEssence').appendChild(ingDiv2);
	}
	cardStateUpdate();
}

function capitalizeFirst(string) {
    if (language == "ENG") {
        return string.replace(/^(<[^>]+>)*(\w)/, (match, p1 = '', p2) => p1 + p2.toUpperCase());
    } else {
        return string;
    }
}

function initEnemyCardSelect() {
	Object.values(champList).forEach(champ => {
		const enemyContainer = document.getElementById(champ.category == "첫상대"?'enemyContainer':(champ.category == "마지막상대"?'enemyHardContainer':'enemyChallengeContainer'));
		const enemyDescContainer = document.getElementById(champ.category == "첫상대"?'enemyDescContainer':(champ.category == "마지막상대"?'enemyHardDescContainer':'enemyChallengeDescContainer'));

	    const enemyDiv = createChampDiv(champ);
	    enemyContainer.appendChild(enemyDiv);
	    const enemyDescDiv = createChampDescriptionDiv(champ)
	    enemyDescContainer.appendChild(enemyDescDiv);

		for(let id of champ.deck) {
			const card = deepCopy(cardDB[id]);
			card.owner = 0;
			const deckCardDiv = createCard(card, 32, false, 99);
			document.getElementById(champ.id+"Deck").appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		}
		for(let id of champ.state) {
			const card = deepCopy(cardDB[id]);
			card.owner = 0;
			const deckCardDiv = createCard(card, 32, false, 99);
			document.getElementById(champ.id+"Ability").appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		}
	});

	/*for(let id in cardDB) {
		const card = deepCopy(cardDB[id]);
		if(card.tags.includes("챔피언능력")) {
			if(!card.tags.includes("하드전용")) {
				const deckCardDiv = createCard(card, 32, false, 99);
				document.getElementById(card.class+"능력").appendChild(deckCardDiv);
				adjustCardFontSize(deckCardDiv);
			}
			/*if(!card.tags.includes("노말전용")) {
				const deckCardDiv = createCard(card, 32);
				document.getElementById(card.class+"(하드)능력").appendChild(deckCardDiv);
				adjustCardFontSize(deckCardDiv);
			}
		}
		if(card.tags.includes("챔피언토큰")) {
			if(!card.tags.includes("하드전용")) {
				const deckCardDiv = createCard(card, 32, false, 99);
				document.getElementById(card.class+"토큰").appendChild(deckCardDiv);
				adjustCardFontSize(deckCardDiv);
			}
			if(!card.tags.includes("노말전용")) {
				const deckCardDiv = createCard(card, 32);
				document.getElementById(card.class+"(하드)토큰").appendChild(deckCardDiv);
				adjustCardFontSize(deckCardDiv);
			}
		}
	}
	for(let champ of champions["노말"]) {
		for(let id of opDeckList[champ]) {
			const card = deepCopy(cardDB[id]);
			card.owner = 0;
			const deckCardDiv = createCard(card, 32, false, 99);
			document.getElementById(champ+"덱").appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		}
	}
	for(let champ of champions["하드"]) {
		for(let id of opDeckList[champ]) {
			const card = deepCopy(cardDB[id]);
			card.owner = 0;
			const deckCardDiv = createCard(card, 32);
			document.getElementById(champ+"덱").appendChild(deckCardDiv);
			adjustCardFontSize(deckCardDiv);
		}
	}
	*/
	cardStateUpdate();
}


function nextButton(n, dispose=true) {
	var partElement;
	if(typeof n === 'number') {
		const partDiv = document.getElementById('part'+n);
		if(partDiv) {
			partElement = partDiv;
		} else {
			if(gamemode == 0) {
				partElement = document.getElementById('normalPart'+n);
			} else if(gamemode == 1) {
				partElement = document.getElementById('hardPart'+n);
			} else if(gamemode == 2) {
				partElement = document.getElementById('challengePart'+n);
			}
		}
	} else {
		partElement = document.getElementById(n);
	}

	if (partElement) {
		partElement.style.display = 'flex';
	} else {
		console.error('ID', n, '인 개체가 존재하지 않음.');
		return;
	}

	if(dispose && this) {
		this.parentNode.removeChild(this);
	}
}

function changeEvent(num) {
	switch(num) {
	case 1:
		document.getElementById("enemyHardContainer").style.display = 'none';
		document.getElementById("enemyChallengeContainer").style.display = 'none';
		if(skip || gamemode == 2) {
			document.getElementById('rulePart').style.display = "flex";
			ruleTab(0);
		} else {
			nextButton(5, false); 
		}
		break;
	case 2:

		break;
	case 3:
		var startButton = document.getElementById('continueButton');
		var skipButton = document.getElementById('skipButton');

		skipButton.parentNode.removeChild(skipButton);
		startButton.parentNode.removeChild(startButton);

		skip = true;
		nextButton("profileRace", false);
		generateFacePattern();
		stateUpdate();
		document.getElementById("quickBar").style.display = "flex";
		if(gamemode == 2) {
			document.getElementById('quickPs').style.display = 'none';
		}
		break;
	case 4:

		break;
	case 5:
		var skipButton = document.getElementById('skipButton');
		if(skipButton) {
			skipButton.parentNode.removeChild(skipButton);
		}
		break;
	case 6:
		const charData = deepCopy(choiceValues);
		charData.name = playerName;
		charData.onlyName = player.name;
		charData.surname = player.surname;
		saveObjectArray("recentProfiles", charData, 200, profilePos);

		var profile = document.getElementById('profileSelect');
		if(profile) {
			profile.parentNode.removeChild(profile);
		}

		const quickBarElement = document.getElementById('quickBar');
		quickBarElement.style.display = 'none';

		if(skip || gamemode == 2) {
			var skipPartElements = document.getElementsByClassName('skipPart');
			for(let skipPart of skipPartElements) {
				skipPart.style.display = 'none';
			}
			if(gamemode == 2) {
				document.getElementById('challengeChampPart').style.display = "flex";
			} else if(gamemode == 1) {
				document.getElementById('hardChampPart').style.display = "flex";
			} else {
				document.getElementById('rulePart').style.display = "flex";
				ruleTab(0);
			}
		} else {
			if(gamemode == 0) {
				createStory(document.getElementById("storyEntrance"), `intro_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`);
				createStory(document.getElementById("storyEntrance"), `intro_all`);
				createStory(document.getElementById("storyRule"), `rule_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`);
				createStory(document.getElementById("storyChamp"), `champ`);
			} else if(gamemode == 1) {
				if(storyText[`introH_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`]) {
					createStory(document.getElementById("storyEntrance"), `introH_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`);
				} else {
					createStory(document.getElementById("storyEntrance"), `introH_def_${bgTag[choiceValues.background]}`);
				}
				createStory(document.getElementById("storyEntrance"), `introH_all`);
				createStory(document.getElementById("storyRule"), `ruleH_all`);
				createStory(document.getElementById("storyHardChamp"), `champH`);
			}
		}

		const deckList = loadObject("class"+classNum[choiceValues.class]) || [];
	    let index = 0;

	    while (!deckName) {
	        const potentialName = `deck ${index}`;
	        if (!deckList.some(dc => dc.name === potentialName)) {
	            deckName = potentialName;
	        } else {
	            index++;
	        }
	    }

	    document.getElementById('deckName').textContent = deckName;

	    //엔딩스킵
		//battleEnd = 0;changeEvent(11);
		break;
	case 7:
		initCardSelect();
		document.getElementById("deckInfo").style.display = "flex";
		document.getElementById("scrollToBottom").style.bottom = "72px";
		document.getElementById("quickBar2").style.display = "flex";

		if(playRecord.playCount != 0 && gamemode != 2) {
			document.getElementById('quickRaceBonus').style.display = "block";
			if(choiceValues.race == "엘도리아인") {
				document.getElementById('wildcard').style.display = "flex";
			}
			if(choiceValues.race == "실바니") {
				document.getElementById('arcane').style.display = "flex";
			}
			if(choiceValues.race == "하프만") {
				document.getElementById('custom').style.display = "flex";
			}
			if(choiceValues.race == "트라이브") {
				document.getElementById('trial').style.display = "flex";
			}
		}

		if(choiceValues.class == "암살자") {
			document.getElementById('poison').style.display = "flex";
			document.getElementById('quickPoison').style.display = "block";
		}
		if(choiceValues.class == "마술사") {
			document.getElementById('spellSlot').style.display = "flex";
			document.getElementById('quickSpellSlot').style.display = "block";
		}
		if(choiceValues.class == "치유사") {
			document.getElementById('essence').style.display = "flex";
			document.getElementById('quickEssence').style.display = "block";
		}

		var optionDivs = document.getElementById("quickBar2").getElementsByClassName("option");
        var visibleOptionDivs = Array.from(optionDivs).filter(function(div) {
            return div.style.display != "none";
        });
        visibleOptionDivs.forEach(function(div) {
            div.style.flex = `0 calc(${(isMobileDevice()?200:100)/visibleOptionDivs.length}% - 36px)`;
        });

        let classInfo, classGroups;
        switch(choiceValues.class) {
        case "전사":
        	classInfo = document.getElementById("warriorInfo");
        	classGroups = ["욕망", "발정 감소", "버리기", "패널티"];
        	break;
        case "암살자":
        	classInfo = document.getElementById("assassinInfo");
        	classGroups = ["젖음", "추가 카드", "생성됨", "독"];
        	break;
        case "마술사":
        	classInfo = document.getElementById("mageInfo");
        	classGroups = ["감각차단", "변형", "마도진", "마술"];
        	break;
        case "치유사":
        	classInfo = document.getElementById("healerInfo");
        	classGroups = ["회복", "타락", "결합", "정수"];
        	break;
        }
        classInfo.style.display = "flex";
        const representCards = selectRepresentCards(classGroups);
        const classInfoImgs = classInfo.querySelectorAll("img.classInfoImg");
        const classInfoImgSmalls = classInfo.querySelectorAll("img.classInfoImgSmall");
        const classInfoNames = classInfo.querySelectorAll("blockquote.classDetailCardName");
        for(let i=0; i<4; i++) {
        	classInfoImgs[i].src = `${imageSrc}cardEx/${representCards[i].id}-real.webp`
        	classInfoImgSmalls[i].src = `${imageSrc}card/${representCards[i].id}-real.webp`
        	classInfoNames[i].innerHTML = `${getWord(choiceValues.class)}의 ${getWord(representCards[i].type)} 카드 <b>[${representCards[i].name[language]}]</b>`
        }
		break;
	case 8:
		deck.sortCards();
		player.state.sortCards();
		var addCards = document.getElementById('deckBuild');
		addCards.style.display = 'none';

		startDeck.push(...deepCopy(deck));
		startState.push(...deepCopy(player.state));
		startPoisonSac.push(...deepCopy(poisonSac));
		startSpellSlot.push(...deepCopy(spellSlot));
		startEssence.push(...deepCopy(essences));

		deckData.name = deckName;
		if(startState.some(st => st.race) || startDeck.some(cd => cd.race)) {
			deckData.race = (startState.find(st => st.race)||startDeck.find(cd => cd.race)).race;
		} else {
			deckData.race = '-';
		}
		if(startState.some(st => st.bg)) {
			deckData.background = startState.find(st => st.bg).bg;
		} else {
			deckData.background = '-';
		}
		deckData.deck = startDeck.map(cd => cd.id);
		if(deckData.deck.some(cd => cd == "BN-HA-001")) {
			deckData.custom = cardDB["BN-HA-001"];
		}
		deckData.state = startState.map(st => st.id.startsWith("AD-SL")?"AD-SL-boss0":st.id);

		if(choiceValues.class == '암살자') {
			deckData.poisonSac = startPoisonSac.map(po => po.id);
		}
		if(choiceValues.class == '마술사') {
			deckData.spellSlot = startSpellSlot.map(sp => sp.id);
		}
		if(choiceValues.class == '치유사') {
			deckData.essences = startEssence.map(ing => ing.id);
		}

		saveObjectArray("class"+classNum[choiceValues.class], deckData, 200, deckPos);

		const startDeckDiv = document.getElementById("startDeck");
		const startStateDiv = document.getElementById("startState");
		const startPoisonSacDiv = document.getElementById("startPoisonSac");
		const startSpellSlotDiv = document.getElementById("startSpellSlot");
		const startEssenceDiv = document.getElementById("startEssence");
		const startWildcardDiv = document.getElementById("startWildcard");
		for(let startCd of startDeck) {
			const cardDiv = createCard(startCd, 32);
			startDeckDiv.appendChild(cardDiv);
			adjustCardFontSize(cardDiv);
		}
		if(startState.length > 0) {
			for(let startSt of startState) {
				const cardDiv = createCard(startSt, 32);
				startStateDiv.appendChild(cardDiv);
				adjustCardFontSize(cardDiv);
			}
		} else {
			document.getElementById("stateView").style.display = 'none';
		}
		if(startPoisonSac.length > 0) {
			document.getElementById("poisonSacView").style.display = 'flex';
			for(let startPs of startPoisonSac) {
				const cardDiv = createCard(startPs, 32);
				startPoisonSacDiv.appendChild(cardDiv);
				adjustCardFontSize(cardDiv);
			}
		}
		if(choiceValues.class == '마술사' && startSpellSlot.some(spell => spell != null)) {
			document.getElementById("spellSlotView").style.display = 'flex';
			for(let startSp of startSpellSlot) {
				let cardDiv;
				if(startSp == null) {
					cardDiv = createCard(cardDB["MA-MG-000"], 32);
				} else {
					cardDiv = createCard(startSp, 32);
					startSpellSlotDiv.appendChild(cardDiv);
					adjustCardFontSize(cardDiv);
				}
			}
		}
		if(startEssence.length > 0) {
			document.getElementById("essenceView").style.display = 'flex';
			for(let startIng of startEssence) {
				const cardDiv = createCard(startIng, 32);
				startEssenceDiv.appendChild(cardDiv);
				adjustCardFontSize(cardDiv);
			}
		}

		document.getElementById("inputDeckName").style.display = "none";

		if(deckData.wildcard) {
			const _wildcard = deepCopy(cardDB[deckData.wildcard]);
			_wildcard.owner = 1;
			_wildcard.tags.push("만능");
			deck.splice(deck.findIndex(cd => cd.id == "BN-EL-001"), 1, _wildcard);

			document.getElementById("wildcardView").style.display = 'flex';
			const cardDiv = createCard(_wildcard, 32);
			startWildcardDiv.appendChild(cardDiv);
		}
		deck.push(...essences);

		if(skip && gamemode == 0) {
			var skipPartElements = document.getElementsByClassName('skipPart');
			for(let skipPart of skipPartElements) {
				skipPart.style.display = 'none';
			}
			nextButton("normalChampPart", false);
		}
		break;
	case 9:
		document.getElementById('prePart').style.display = "none";
		document.getElementById('battlePart').style.display = "flex";
		battleInit();
		break;
	case 10:
		if(player.state.some(st => st.id == "DA-NT-ALL-000")) {
			if(gamemode == 2) {
				if(battleEnd == 0) {
					collection.ending["challenge_win"] = true;
				} else {
					collection.ending["challenge_lose"] = true;
				}
			} else {
				collection.ending["morvainEnd"] = true;
			}
		} else {
			playRecord.playCount += 1;
			if(battleEnd == 0) {
				collection.boss[enemy.id] = true;
				playRecord.winCount += 1;
				playRecord.bossRecord[enemy.id].win += 1;
				if(gamemode == 1) {
					playRecord.hardWinCount += 1;
					collection.ending[`hard_win_${bgTag[choiceValues.background]}`] = true;
				} else if(gamemode == 0) {
					collection.ending[`normal_win_${bgTag[choiceValues.background]}`] = true;
				}
			} else {
				playRecord.bossRecord[enemy.id].lose += 1;
				if(gamemode == 1) {
					collection.ending[`hard_lose_${bgTag[choiceValues.background]}`] = true;
				} else if(gamemode == 0) {
					collection.ending[`normal_lose_${bgTag[choiceValues.background]}`] = true;
				}
			}
			saveObject("playRecord", playRecord);
			deckData.deck.forEach(cd => {
				if(cardSave[cd]) {
					cardSave[cd][gamemode == 1?"hard":"normal"].select += 1;
					if(battleEnd == 0) {
						cardSave[cd][gamemode == 1?"hard":"normal"].win += 1;
						cardSave[cd][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
					}
					if(cardDB[cd].tags.includes("시련") && (finishCard.id == cd || finishCard.parents == cd)) {
						cardSave[cd][gamemode == 1?"hard":"normal"].success += 1;
						cardSave[cd][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
					}
				}
			});
			deckData.state.forEach(st => {
				if(cardSave[st]) {
					cardSave[st][gamemode == 1?"hard":"normal"].select += 1;
					if(battleEnd == 0) {
						cardSave[st][gamemode == 1?"hard":"normal"].win += 1;
						cardSave[st][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
					}
				}
			});
			if(deckData.wildcard) {
				if(cardSave[deckData.wildcard]) {
					cardSave[deckData.wildcard][gamemode == 1?"hard":"normal"].select += 1;
					if(battleEnd == 0) {
						cardSave[deckData.wildcard][gamemode == 1?"hard":"normal"].win += 1;
						cardSave[deckData.wildcard][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
					}
				}
			}
			if(deckData.poisonSac) {
				deckData.poisonSac.forEach(po => {
					if(cardSave[po]) {
						cardSave[po][gamemode == 1?"hard":"normal"].select += 1;
						if(battleEnd == 0) {
							cardSave[po][gamemode == 1?"hard":"normal"].win += 1;
							cardSave[po][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
						}
					}
				});
			}
			if(deckData.spellSlot) {
				deckData.spellSlot.forEach(sp => {
					const spId = cardDB[sp].parents?cardDB[sp].parents:sp;
					if(cardSave[spId]) {
						cardSave[spId][gamemode == 1?"hard":"normal"].select += 1;
						if(battleEnd == 0) {
							cardSave[spId][gamemode == 1?"hard":"normal"].win += 1;
							cardSave[spId][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
						}
					}
				});
			}
			if(deckData.essences) {
				[...new Set(deckData.essences)].forEach(es => {
					if(cardSave[es]) {
						cardSave[es][gamemode == 1?"hard":"normal"].select += 1;
						if(battleEnd == 0) {
							cardSave[es][gamemode == 1?"hard":"normal"].win += 1;
							cardSave[es][gamemode == 1?"hard":"normal"].clearList[enemy.id] = true;
						}
					}
				});
			}
			saveObject("card", cardSave);
		}
		saveObject("collection", collection);
		makeEnding();
		break;
	case 11:
		document.getElementById('battlePart').style.display = "none";
		document.getElementById('postPart').style.display = "flex";

		const _afterStory = document.getElementById('afterStory');
		if(player.state.some(st => st.id == "DA-NT-ALL-000")) {
			const _winDiv = document.getElementById('winStory');
			_winDiv.style.display = "flex";
			createStory(_winDiv, `morvainEnd`);
			createStory(_afterStory, `morvainComment`);
			_afterStory.style.userSelect = 'text';
			_afterStory.style.overflowWrap = "anywhere";
		} else {
			if(battleEnd == 0) {
				const _winDiv = document.getElementById('winStory');
				_winDiv.style.display = "flex";
				if(gamemode == 0) {
					createStory(_winDiv, `win_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`);
					createStory(_afterStory, `win_${bgTag[choiceValues.background]}`);
				} else if(gamemode == 1) {
					createStory(_winDiv, `win_hard`);
					createStory(_winDiv, `winH_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`);
					createStory(_afterStory, `winH_${bgTag[choiceValues.background]}`);
				}
			}
			if(battleEnd == 1) {
				const _loseDiv = document.getElementById('loseStory');
				_loseDiv.style.display = "flex";
				if(gamemode == 0) {
					createStory(_loseDiv, `lose_normal`);
					createStory(_afterStory, `lose_${bgTag[choiceValues.background]}`);
				} else if(gamemode == 1) {
					createStory(_loseDiv, `lose_hard`);
					createStory(_afterStory, `loseH_${bgTag[choiceValues.background]}`);
				}
			}
		}
		break;
	case 12:
		window.scrollTo(0, 0);
		Object.keys(choiceValues).forEach(key => delete choiceValues[key]);

		document.getElementById('startPart').style.display = "none";
		document.getElementById('prePart').style.display = "flex";
		
		const normals = document.querySelectorAll('.normalMode');
		for(let div of normals) {
			div.style.display = (gamemode == 0)?"flex":"none";
		}
		const hards = document.querySelectorAll('.hardMode');
		for(let div of hards) {
			div.style.display = (gamemode == 1)?"flex":"none";
		}
		const challenges = document.querySelectorAll('.challengeMode');
		for(let div of challenges) {
			div.style.display = (gamemode == 2)?"flex":"none";
		}
		break;
	case 13:
		const hardEnemies = document.getElementsByClassName("enemyTypeHard");
		for(let div of hardEnemies) {
			div.style.display = "none";
		}

		if(skip) {
			nextButton(4, false);
			stateUpdate();
			document.getElementById("quickBar").style.display = "flex";
			if(gamemode == 2) {
				document.getElementById('quickPs').style.display = 'none';
			}

			var skipPartElements = document.getElementsByClassName('skipPart');
			for(let skipPart of skipPartElements) {
				skipPart.style.display = 'none';
			}
		}
		break;
	case 14:
		document.getElementById('text4_1').style.display = "none";
		document.getElementById('text4_2').style.display = "block";
		break;
	case 15:
		document.getElementById('startPart').style.display = "none";
		document.getElementById('collectionPart').style.display = "flex";
		window.scrollTo({ top: 0, behavior: 'instant' });
		collectionPos = 1;
		break;
	}
}

function selectChoice(category) {
	let choiceElements = document.getElementsByClassName(category);
	for(let e of choiceElements) {
		let value = e.querySelector("h2.box-title").textContent;
		if(this === e) {
			choiceValues[category] = value;
			if(!e.classList.contains('active')) {
				e.classList.add('active');
			}
		} else {
			if(e.classList.contains('active')) {
				e.classList.remove('active');
			}
		}
	}

	if(category == 'race') {
		profilePos = -1;
	}

	stateUpdate();
}

function getRandom(arr) {
    if(arr.length == 0) {
    	return null;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let rulePage = 0;

function ruleTab(num) {
	rulePage = num;
	const prePageButton = document.getElementById('prePageButton');
	const postPageButton = document.getElementById('postPageButton');
	if(num > 0 ^ !prePageButton.classList.contains('disabled')) {
		prePageButton.classList.toggle('disabled');
	}
	if(num < 14 ^ !postPageButton.classList.contains('disabled')) {
		postPageButton.classList.toggle('disabled');
	}
    document.querySelectorAll('.ruleTab').forEach(tab => {
        if ((!tab.dataset.maxnum && tab.dataset.num == num) || (tab.dataset.num <= num && tab.dataset.maxnum >= num)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    let cards = [];
    const ruleTitle = document.getElementById('rule-title');
    const ruleText = document.getElementById('rule-text');
    const ruleCard = document.getElementById('box-card');
    const ruleData = ruleDescription[language][num];
    ruleTitle.innerHTML = ruleData.title;
    ruleText.innerHTML = ruleData.desc;
    ruleCard.innerHTML = '';

    function createPortrait(target) {
    	const battleDiv = document.createElement("div");
	    battleDiv.style.fontFamily = "'Jua', sans-serif";
	    battleDiv.style.width = "45vh"

	    // 이미지 박스 생성
	    const boxImgDiv = document.createElement("div");
	    boxImgDiv.classList.add("box-img", "portraitBattle");
	    boxImgDiv.style.maxWidth = "100%";
	    boxImgDiv.style.marginBottom = "20px";

	    // 이미지 요소 생성
	    const img1 = document.createElement("img");
	    let bossNum = Math.floor(Math.random()*8)+1;
	    switch(target) {
	    case "player":
	    	img1.src = `image/face/portrait_player_${getRandom(Object.values(raceTag))}_${getRandom(['A', 'B', 'C', 'D', 'E'])}_${getRandom(['normal', 'excited', 'corrupted'])}.webp`;
	    	break;
	    case "defeat":
	    	img1.src = `image/face/portrait_player_${getRandom(Object.values(raceTag))}_${getRandom(['A', 'B', 'C', 'D', 'E'])}_ecstasy2.webp`;
	    	break;
	    case "enemy":
	    	img1.src = `image/face/portrait_boss${bossNum}_normal.webp`;
	    	break;
	    }
	    
	    img1.alt = "";

	    boxImgDiv.appendChild(img1);
	    battleDiv.appendChild(boxImgDiv);

	    // 상태 컨테이너 생성
	    const containerDiv = document.createElement("div");
	    containerDiv.classList.add("container");

	    // 흥분 상태 생성
	    const exciteP = document.createElement("p");
	    exciteP.style.flex = "0 calc(50% - 20px)";
	    exciteP.style.margin = "0 auto";
	    exciteP.style.fontSize = "2.5vh";
	    exciteP.style.textAlign = "center";
	    exciteP.textContent = `${getWord("흥분")}: `;

	    const exciteVal = document.createElement("span");
	    exciteVal.classList.add("number");
	    exciteVal.textContent = `${target == 'defeat'?5:0}/${target == 'enemy'?champList[`boss${bossNum}`]?.stats.exciteL:5}`;
	    exciteP.appendChild(exciteVal);

	    // 절정 상태 생성
	    const orgasmP = document.createElement("p");
	    orgasmP.style.flex = "0 calc(50% - 20px)";
	    orgasmP.style.margin = "0 auto";
	    orgasmP.style.fontSize = "2.5vh";
	    orgasmP.style.textAlign = "center";
	    orgasmP.textContent = `${getWord("절정")}: `;

	    const orgasmVal = document.createElement("span");
	    orgasmVal.classList.add("number");
	    orgasmVal.textContent = `${target == 'defeat'?3:0}/${target == 'enemy'?champList[`boss${bossNum}`]?.stats.orgasmL:3}`;
	    orgasmP.appendChild(orgasmVal);

	    // 요소 조립
	    containerDiv.appendChild(exciteP);
	    containerDiv.appendChild(orgasmP);
	    battleDiv.appendChild(containerDiv);

	    return battleDiv;
    }

    switch(num) {
    case 0:
		for(let i=0; i<12; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") || cd.tags.includes("보너스") || (cd.type == "특성" && cd.owner != 0))), 24, false, 101));
		}
    	arrangeCards(cards, ruleCard, 4, 3, true)
    	break;
    case 1:
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.class == "중립" && cd.tags.includes("덱빌딩"))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.rarity == "일반" && (!choiceValues.class || cd.class == choiceValues.class))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.rarity == "숙련" && (!choiceValues.class || cd.class == choiceValues.class))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.rarity == "궁극" && (!choiceValues.class || cd.class == choiceValues.class))), 24, false, 101));
    	arrangeCards(cards, ruleCard, 2, 2, false)
    	break;
    case 2:
    	Object.values(cardDB).filter(cd => cd.type == "패널티" && cd.tags.includes("덱빌딩")).forEach(cd => {
    		cards.push(createCard(cd, 24, false, 101));
    	})
    	arrangeCards(cards, ruleCard, 4, 3, false)
    	break;
    case 3:
		for(let i=0; i<9; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "특성" && cd.owner != 0)), 24, false, 101));
		}
    	arrangeCards(cards, ruleCard, 3, 3, false)
    	break;
    case 4:
    	Object.values(cardDB).filter(cd => cd.tags.includes("개입")).forEach(cd => {
    		cards.push(createCard(cd, 24, false, 101));
    	})
    	cards.push(createCard(cardDB["DA-NT-ALL-000"], 24, false, 101));
    	arrangeCards(cards, ruleCard, 4, 2, false)
    	break;
    case 5:
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "만능")), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "비전")), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "수제")), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "시련")), 24, false, 101));
    	arrangeCards(cards, ruleCard, 2, 2, false)
    	break;
    case 6:
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") && cd.related && cd.keywords)), 24, false, 99));
    	arrangeCards(cards, ruleCard, 1, 1, false)
    	break;
    case 7:
		ruleCard.appendChild(createPortrait('player'));
    	break;
    case 8:
		for(let i=0; i<6; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") && cd.effect.some(e => e.type == "attack"))), 24, false, 101));
		}
    	arrangeCards(cards, ruleCard, 3, 2, false)
    	break;
    case 9:
		ruleCard.appendChild(createPortrait('enemy'));
    	break;
    case 10:
		ruleCard.appendChild(createPortrait('defeat'));
    	break;
    case 11:
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "공격" && cd.tags.includes("덱빌딩"))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "보조" && cd.tags.includes("덱빌딩"))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "체위" && cd.tags.includes("덱빌딩"))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "탈의" && !cd.tags.includes("챌린지전용"))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "패널티" && cd.tags.includes("덱빌딩"))), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "초월" || cd.type == "만능" || cd.type == "비전" || cd.type == "수제" || cd.type == "시련")), 24, false, 101));
    	arrangeCards(cards, ruleCard, 3, 2, false)
    	break;
    case 12:
		for(let i=0; i<3; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") && cd.type == "공격")), 24, false, 101));
		}
		for(let i=0; i<3; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") && cd.type == "보조")), 24, false, 101));
		}
    	arrangeCards(cards, ruleCard, 3, 2, false)
    	break;
    case 13:
		for(let i=0; i<3; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.type == "체위")), 24, false, 101));
		}
    	arrangeCards(cards, ruleCard, 3, 1, false)
    	break;
    case 14:
    	getRandom(Object.values(champList).filter(champ => champ.category == "첫상대")).deck.forEach(id => {
    		cards.push(createCard(cardDB[id], 24, false, 101));
    	})
    	arrangeCards(cards, ruleCard, 4, 2, false)
    	break;
    case 15:
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.id == "AD-NT-BG1-001")), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.id == "NT-SU-004")), 24, false, 101));
    	arrangeCards(cards, ruleCard, 2, 1, false)
    	break;
    case 16:
		for(let i=0; i<3; i++) {
			cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") && cd.effect.some(e => e.type == "maxUse"))), 24, false, 101));
		}
    	arrangeCards(cards, ruleCard, 3, 1, false)
    	break;
    case 17:
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.id == "NT-AT-006")), 24, false, 101));
		cards.push(createCard(getRandom(Object.values(cardDB).filter(cd => cd.id == "AS-NM-AT-006")), 24, false, 101));
    	arrangeCards(cards, ruleCard, 2, 1, false)
    	break;
    case 18:
    	Object.values(cardDB).filter(cd => cd.type == "패널티" && cd.tags.includes("덱빌딩")).forEach(cd => {
    		cards.push(createCard(cd, 24, false, 101));
    	})
    	arrangeCards(cards, ruleCard, 4, 3, false)
    	break;
    }
}

function arrangeCards(cards, container, cols=4, rows=3, randomPos=false) {
    // 컨테이너 내용물 비우기
    container.innerHTML = '';

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const cellWidth = containerWidth / cols;
    const cellHeight = containerHeight / rows;

    const centerX = containerWidth / 2; // 컨테이너 중심 X좌표
    const centerY = containerHeight / 2; // 컨테이너 중심 Y좌표

    const shiftX = containerWidth * 0.2; // 좌상단으로 5% 이동 (X축)
    const shiftY = containerHeight * 0.2; // 좌상단으로 5% 이동 (Y축)

    const numbers = Array.from({ length: cols*rows }, (_, i) => i); // 0부터 n까지의 숫자 배열 생성
    const cardPos = [];

    if(randomPos) {
	    for (let i = 0; i < Math.min(cards.length, cols*rows); i++) {
	        const randomIndex = Math.floor(Math.random() * numbers.length); // 랜덤 인덱스 선택
	        cardPos.push(numbers[randomIndex]); // 랜덤한 숫자를 결과 배열에 추가
	        numbers.splice(randomIndex, 1); // 선택된 숫자는 제거하여 중복 방지
	    }
	} else {
		cardPos.push(...numbers);
	}

    cards.forEach((card, index) => {
        // 카드의 스타일 설정
        card.style.position = "absolute";

        if (index < cols*rows) {
        	pos = cardPos[index];
        } else {
        	pos = Math.floor(Math.random() * (cols*rows));
        }
        // 규칙적 배치 (10개까지)
        const row = Math.floor(pos / cols);
        const col = pos % cols;

        // 그리드 전체 크기 계산
        const gridWidth = cols * cellWidth;
        const gridHeight = rows * cellHeight;

        // 그리드 중심 기준으로 배치 좌표 계산
        const baseX = centerX - gridWidth / 2 + col * cellWidth + cellWidth / 2 - shiftX;
        const baseY = centerY - gridHeight / 2 + row * cellHeight + cellHeight / 2 - shiftY;

        // 랜덤 오프셋 추가 (넓어진 범위)
        const offsetX = (Math.random() - 0.5) * cellWidth * (randomPos?0.6:0.05); // 셀 크기의 60%까지 이동
        const offsetY = (Math.random() - 0.5) * cellHeight * (randomPos?0.6:0.05);

        card.style.left = `${Math.min(Math.max(baseX + offsetX, 0), containerWidth - card.clientWidth)}px`;
        card.style.top = `${Math.min(Math.max(baseY + offsetY, 0), containerHeight - card.clientHeight)}px`;
        card.style.transform = `rotate(${randomPos?Math.random() * 40 - 20:Math.random() * 30 - 15}deg)`; // -20 ~ 20도 회전

        // 컨테이너에 카드 추가
        container.appendChild(card);
    });
}


function selectRepresentCards(group) {
    const deckBuildingCards = Object.keys(cardDB).filter(id => cardDB[id].tags.includes("덱빌딩")).map(id => cardDB[id]);

    function backtrack(selectedCards, usedRaces, index) {
        if (index === group.length) {
            return selectedCards;
        }

        const grp = group[index];
        const matchingCards = deckBuildingCards.filter(card => 
            card.tags.includes(`group:${grp}`) &&
            card.tags.some(tag => tag.startsWith("race:"))
        );

        shuffle(matchingCards);

        const candidates = matchingCards.filter(card => {
            const raceTag = card.tags.find(tag => tag.startsWith("race:"));
            const race = raceTag.split(":")[1];
            return !usedRaces.has(race);
        });

        for (let candidate of candidates) {
            const raceTag = candidate.tags.find(tag => tag.startsWith("race:"));
            const race = raceTag.split(":")[1];

            selectedCards.push(candidate);
            usedRaces.add(race);

            const result = backtrack(selectedCards, usedRaces, index + 1);
            if (result) {
                return result;
            }

            selectedCards.pop();
            usedRaces.delete(race);
        }

        return null;
    }

    const result = backtrack([], new Set(), 0);
    console.log(result);
    return result || [];
}

function selectEnemy(id) {
	let choiceElements = document.getElementsByClassName("enemyType");
	for(let e of choiceElements) {
		if(this === e) {
			enemy.id = id;
			enemy.name = champList[id].name[language];
			if(!e.classList.contains('active')) {
				e.classList.add('active');
			}
		} else {
			if(e.classList.contains('active')) {
				e.classList.remove('active');
			}
		}
	}
	let enemyDescElements = document.getElementsByClassName("enemyDescription");
	for(let e of enemyDescElements) {
		if(e.id == id+"desc") {
			e.style.display = "block";
		} else {
			e.style.display = "none";
		}
	}
	let battleStartButton = document.getElementById(champList[id].category == '첫상대'?"battleStart":(champList[id].category == '마지막상대'?"hardEnemyConfirm":"challengeEnemyConfirm"));
	if(battleStartButton.style.display == "none") {
		battleStartButton.style.display = "block";
	}
	const allCards = document.getElementsByClassName("card")
	for(let card of allCards) {
		adjustCardFontSize(card);
	}
}

function selectHardEnemy() {
	let choiceElements = document.getElementsByClassName("enemyTypeHard");
	for(let e of choiceElements) {
		let value = e.querySelector("h2.box-title").textContent;
		const enemyDiv = document.getElementById(value);
		if(this === e) {
			enemy.name = value;
			let enemyElements = document.getElementsByClassName("enemyDescription");
			enemyDiv.style.display = "block";
			if(!e.classList.contains('active')) {
				e.classList.add('active');
			}
		} else if(enemyDiv) {
			enemyDiv.style.display = "none";
			if(e.classList.contains('active')) {
				e.classList.remove('active');
			}
		}
	}
	let battleStartButton = document.getElementById("battleStartHard");
	if(battleStartButton.style.display == "none") {
		battleStartButton.style.display = "block";
	}
	const allCards = document.getElementsByClassName("card")
	for(let card of allCards) {
		adjustCardFontSize(card);
	}
}

function randomSelect(category) {
	let choiceElements = Array.from(document.getElementsByClassName(category)).filter(div => div.style.display !== 'none' && !div.classList.contains('disabled') && div.querySelector("h2.box-title").textContent != '기타');
	let choiceElement = getRandom(choiceElements);

	if(choiceElement) {
		choiceElement.click();
		//selectChoice.call(choiceElement, choiceElement.getAttribute('data-category'));
	}
}

function inputName(form = true) {
	let name, surname;

	function nameRefine(name) {
		name = name.replace(/[^가-힣\s]/g, '');
        name = name.replace(/\s+/g, ' ');
        return name.trim();
	}
	if(form) {
		switch(choiceValues.race) {
		case "엘도리아인":
			name = prompt("이름을 입력하세요. (최대 6글자)", player.name);
			if (name !== null) {
		    	name = nameRefine(name);
		    	if(name.length > 6) {
		        	name = name.substring(0, 6);
		        }

		        if (name !== '') {
		        	player.name = name;
		        } else {
		        	name = player.name;
		        }
		    }

			surname = prompt("가문명을 입력하세요. (0~6글자)", player.surname);
			if (surname !== null) {
		    	surname = nameRefine(surname);
		    	if(surname.length > 6) {
		        	surname = surname.substring(0, 6);
		        }

		        player.surname = surname;
		    }
		    if(surname == '') {
		    	playerName = name;
		    } else {
		    	playerName = `${name} ${surname}`;
		    }
			break;
		case "실바니":
			name = prompt("이름을 입력하세요. (1~2글자)", player.name);
			if (name !== null) {
		    	name = nameRefine(name);
		    	if(name.length > 2) {
		        	name = name.substring(0, 2);
		        }

		        if (name !== '') {
		        	player.name = name;
		        } else {
		        	name = player.name;
		        }
		    }

			surname = prompt("씨족명을 입력하세요. (1글자)", player.surname);
			if (surname !== null) {
		    	surname = nameRefine(surname);
		    	if(surname.length > 1) {
		        	surname = surname.substring(0, 1);
		        }

		        if (surname !== '') {
		        	player.surname = surname;
		        } else {
		        	surname = player.surname;
		        }
		    }

		    playerName = `${name} ${surname}`;
			break;
		case "하프만":
			surname = null;
			name = prompt("이름을 입력하세요. (2~4글자)", player.name);
			if (name !== null) {
		    	name = nameRefine(name);
		    	if(name.length == 1) {
		    		name = name.repeat(2);
		    	}
		    	if(name.length > 4) {
		        	name = name.substring(0, 4);
		        }

		        if (name !== '') {
		        	player.name = name;
		        } else {
		        	name = player.name;
		        }
		    }
    		player.surname = '';
        	playerName = name;
			break;
		case "트라이브":
			name = prompt("이름을 입력하세요. (AA리B)", player.name);
			if (name !== null) {
		    	name = nameRefine(name);
		    	let _name = `${name[0]}${name[0]}리`;
		    	if(name.length >= 4) {
		    		_name += name[3];
		    	}
		    	if(name.length == 3) {
		    		if(name[2] === '리') {
		    			_name += name[1];
		    		} else {
		    			_name += name[2];
		    		}
		    	}
		    	if(name.length == 2) {
		    		if(name[1] === '리') {
		    			_name += name[0];
		    		} else {
		    			_name += name[1];
		    		}
		    	}
		    	if(name.length == 1) {
		    		_name += name[0];
		    	}

		        if (name !== '') {
		    		name = _name;
		        	player.name = name;
		        } else {
		        	name = player.name;
		        }
		    }

			surname = prompt("씨족명을 입력하세요. (최대 5글자)", player.surname);
			if (surname !== null) {
		    	surname = nameRefine(surname);
		    	if(surname.length > 5) {
		        	surname = surname.substring(0, 5);
		        }

		        if (surname !== '') {
		        	player.surname = surname;
		        } else {
		        	surname = player.surname;
		        }
		    }

		    playerName = `${surname}의 ${name}`;
			break;
		}
	} else {
		name = prompt("이름을 입력하세요.", playerName);
		if (name !== null) {
	    	name = nameRefine(name);
	    	if(name.length > 12) {
	        	name = name.substring(0, 12);
	        }
	        if (name !== '') {
	        	player.name = name;
		    	player.surname = '';
		    	playerName = name;
	        }
	    }
    }

    document.getElementById('playerName').textContent = playerName;
    stateUpdate();
}

function inputDeckName() {
    let name = prompt("이름을 입력하세요.", deckName);
    
    if (name !== null) {
        name = name.replace(/\s+/g, ' ');
        name = name.trim();
    	if(name.length > 15) {
        	name = name.substring(0, 15);
        }
        if (name !== '') {
        	deckName = name;
        	document.getElementById('deckName').textContent = deckName;
        }
    }
}

function randomName(race) {
	let name;
	switch(race) {
	case "엘도리아인":
		let namePartE;
		if(language == "KOR") {
			while(true) {
				namePartE = combineKorean(getRandom(namePool.namePart1E["KOR"]), getRandom(namePool.namePart2E["KOR"]));
				let result = namePartE[0];
				for (let i = 1; i < namePartE.length; i++) {
					if (namePartE[i] !== namePartE[i - 1]) {
						result += namePartE[i];
					}
				}
				namePartE = result;
				if(namePartE.length > 1) {
					break;
				}
			}
			
		} else {
			namePartE = getRandom(namePool.namePart1E[language]) + getRandom(namePool.namePart2E[language]);
		}
		const familyNameCE = namePool.familyNameCE[language];
		const familyName1E = namePool.familyName1E[language];
		const familyName2E = namePool.familyName2E[language];
		var part1 = getRandom(familyName1E);
		do {
			part2 = getRandom(familyName2E);
		} while(part2 == part1 || (part1 + part2).length > 6)

		name = [namePartE, (Math.random()*10 > 9)?getRandom(familyNameCE):(part1+part2)];
	    playerName = capitalizeFirst(name[0]);
	    if((Math.random()*10) < 9) {
	    	playerName += " " + capitalizeFirst(name[1]);
		}
		player.name = capitalizeFirst(name[0]);
		player.surname = capitalizeFirst(name[1]);
        document.getElementById('playerName').textContent = playerName;
		break;
	case "실바니":
		const namePart1S = namePool.namePart1S[language];
		const namePart2S = namePool.namePart2S[language];

		const familyNameS = namePool.familyNameS[language];
		const familyNameMinorS = namePool.familyNameMinorS[language];
		
		var part1, part2;
		do {
			part1 = Math.floor(Math.random()*2);
			part2 = Math.floor(Math.random()*2);
		} while(part1 == 0 && part2 == 0);

		name = [namePart1S[part1][Math.floor(Math.random()*namePart1S[part1].length)], namePart2S[part2][Math.floor(Math.random()*namePart2S[part2].length)], ((Math.random()*10) < 7)?getRandom(familyNameS):getRandom(familyNameMinorS)];
		playerName = capitalizeFirst(name[0]) + name[1] + " " + capitalizeFirst(name[2]);
		player.name = capitalizeFirst(name[0]) + name[1];
		player.surname = capitalizeFirst(name[2]);
        document.getElementById('playerName').textContent = playerName;
		break;
	case "하프만":
		const namePart1H = namePool.namePart1H[language];
		const namePart2H = namePool.namePart2H[language];
		name = [getRandom(namePart1H), ((Math.random()*10) > 7)?getRandom(namePart1H):"", ((Math.random()*10) > 9)?getRandom(namePart1H):"", getRandom(namePart2H)];
		playerName = name[0] + name[1] + name[2] + name[3];
		playerName = capitalizeFirst(playerName);
		player.name = playerName;
		player.surname = "";
        document.getElementById('playerName').textContent = playerName;
		break;
	case "트라이브":
		const familyNameCT = namePool.familyNameCT[language];
		const familyName1T = namePool.familyName1T[language];
		const familyName2T = namePool.familyName2T[language];
		const namePart1T = namePool.namePart1T[language];
		const namePart2T = namePool.namePart2T[language];
		var part1 = getRandom(namePart1T);
		var part2;
		do {
			part2 = getRandom(namePart2T);
		} while(part2 == part1)
		name = [(Math.random()*100 > 95)?getRandom(familyNameCT):getRandom(familyName1T)+getRandom(familyName2T), part1, part2];
		playerName = capitalizeFirst(name[1] + name[1] + namePool.namePartMiddleT[language] + name[2]);
		player.name = playerName;
		player.surname = capitalizeFirst(name[0]);
		if(language == "ENG") {
			playerName += " of " + name[0];
		} else {
			playerName = name[0] + "의 " + playerName;
		}
        document.getElementById('playerName').textContent = playerName;
		break;
	}
	stateUpdate();
}

function combineKorean(partA, partB) {
  const CHO = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  const JUNG = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
  const JONG = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

  // 한글 유니코드 분해 및 조합
  function decomposeHangul(syllable) {
    const baseCode = syllable.charCodeAt(0) - 0xAC00;
    const jongIndex = baseCode % 28;
    const jungIndex = ((baseCode - jongIndex) / 28) % 21;
    const choIndex = (((baseCode - jongIndex) / 28) - jungIndex) / 21;
    return { cho: CHO[choIndex], jung: JUNG[jungIndex], jong: JONG[jongIndex] };
  }

  function composeHangul(cho, jung, jong = "") {
    const choIndex = CHO.indexOf(cho);
    const jungIndex = JUNG.indexOf(jung);
    const jongIndex = JONG.indexOf(jong);
    const unicode = 0xAC00 + (choIndex * 21 * 28) + (jungIndex * 28) + jongIndex;
    return String.fromCharCode(unicode);
  }

  const lastCharA = partA[partA.length - 1];
  const firstCharB = partB[0];

  const lastCharCheck = (CHO.indexOf(lastCharA) == -1)
  const lastCharInfo = decomposeHangul(lastCharA);
  const firstCharInfo = decomposeHangul(firstCharB);

  if (!lastCharCheck && firstCharInfo.cho === "ㅇ") {
  	partA = partA.slice(0, partA.length-1);
    partB = composeHangul(lastCharA, firstCharInfo.jung, firstCharInfo.jong) + partB.slice(1);
  } else if (lastCharInfo.jong === "" && firstCharInfo.cho === "ㅇ" && lastCharInfo.jung === firstCharInfo.jung) {
    partB = partB.slice(1);
  }

  return partA + partB;
}


function clothesChange(num) {
	clothesNum = num;
	const _clothesButton = document.getElementsByClassName("clothesChange");
	const _clothes = document.getElementsByClassName("clothesPreview");

	//document.getElementById("faceLine").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_${clothesNum==0?"corrupted":"normal"}.webp`;

	for(let _clbtn of _clothesButton) {
		if(_clbtn.getAttribute("data-num") == clothesNum) {
			_clbtn.classList.add("active");
		} else {
			_clbtn.classList.remove("active");
		}
	}
	if(clothesNum == 0) {
		for(let _cl of _clothes) {
			_cl.style.display = "none";
		}
	} else {
		for(let _cl of _clothes) {
			_cl.style.display = "block";
			_cl.src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_c${clothesNum}.webp`
		}
	}
}

function stateUpdate() {
	let txt = "";

	if(choiceValues.race) {
		let nametxt = dictionary["namingRule"][choiceValues.race][language];
		let namingRule = document.getElementById('namingRule');
		namingRule.querySelector("p.box-text").innerHTML = nametxt;

		if(document.getElementById("quickName").classList.contains("disabled")) {
			document.getElementById("quickName").classList.remove("disabled");
		}
		if(document.getElementById("quickApp").classList.contains("disabled")) {
			document.getElementById("quickApp").classList.remove("disabled");
			document.getElementById("profileApp").style.display = "flex";
		}
		document.getElementById("quickRace").innerHTML = `<b>${getWord("종족")}: </b>`+getWord(choiceValues.race);
		document.getElementById("faceA").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_A_normal.webp`;
		document.getElementById("faceB").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_B_normal.webp`;
		document.getElementById("faceC").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_C_normal.webp`;
		document.getElementById("faceD").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_D_normal.webp`;
		document.getElementById("faceE").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_E_normal.webp`;
	} else {
		document.getElementById("quickRace").innerHTML = `<b>${getWord("종족")}</b>`
	}
	if(player.name) {
		document.getElementById("quickName").innerHTML = `<b>${getWord("이름")}: </b>${player.name}`
	}
	if(choiceValues.face) {
		document.getElementById("quickApp").innerHTML = `<b>${getWord("얼굴")}: </b>`+choiceValues.face;
		if(document.getElementById("quickClass").classList.contains("disabled")) {
			document.getElementById("facePreview").style.display = "flex";
			document.getElementById("quickClass").classList.remove("disabled");
			document.getElementById("profileClass").style.display = "flex";
		}
		document.getElementById("faceNormal").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_normal.webp`;
		//document.getElementById("faceAngry").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_angry.webp`;
		//document.getElementById("faceSad").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_sad.webp`;
		//document.getElementById("faceBlank").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_blank.webp`;
		document.getElementById("faceExcited").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_excited.webp`;
		document.getElementById("faceEcstasy").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_ecstasy.webp`;
		document.getElementById("faceEcstasy2").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_ecstasy2.webp`;
		document.getElementById("faceCorrupted").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_corrupted.webp`;

		//document.getElementById("faceLine").src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_${clothesNum==0?"corrupted":"normal"}.webp`;
		if(gamemode == 1) {
			document.querySelectorAll('.clothesChange').forEach((element, index) => {
				if (index < 4) {
					element.style.display = 'none';
				} else if (index === 4) {
					element.style.display = 'flex';
				}
			});
			clothesNum = 5;
		}
		if(gamemode == 2) {
			document.querySelectorAll('.clothesChange').forEach((element, index) => {
				if (index < 4) {
					element.style.display = 'none';
				}
			});
			clothesNum = 0;
		}
		clothesChange(clothesNum);
	} else {
		document.getElementById("quickApp").innerHTML = `<b>${getWord("얼굴")}</b>`;
	}
	/*
	if(choiceValues.personality) {
		document.getElementById("quickPs").innerHTML = `<b>${getWord("유형")}: </b>`+psTag[choiceValues.personality][hardmode?1:0];
		if(document.getElementById("quickClass").classList.contains("disabled")) {
			document.getElementById("quickClass").classList.remove("disabled");
			document.getElementById("profileClass").style.display = "flex";
		}
	} else {
		document.getElementById("quickPs").innerHTML = `<b>${getWord("유형")}</b>`;
	}*/
	if(choiceValues.class) {
		document.getElementById("quickClass").innerHTML = `<b>${getWord("직업")}: </b>`+getWord(choiceValues.class);
		if(document.getElementById("quickBg").classList.contains("disabled")) {
			document.getElementById("quickBg").classList.remove("disabled");
			document.getElementById("profileBg").style.display = "flex";
		}
	} else {
		document.getElementById("quickClass").innerHTML = `<b>${getWord("직업")}</b>`
	}
	if(choiceValues.background) {
		document.getElementById("quickBg").innerHTML = `<b>${getWord("배경")}: </b>`+getWord(choiceValues.background);
		if(playRecord.playCount > 0) {
			document.getElementById('traitPreview').style.display = "flex";
		}
		if(gamemode != 2) {
			if(document.getElementById("quickPs").classList.contains("disabled")) {
				document.getElementById("quickPs").classList.remove("disabled");
				document.getElementById("profilePs").style.display = "flex";
			}
		} else {

		}
	} else {
		document.getElementById("quickBg").innerHTML = `<b>${getWord("배경")}</b>`
		document.getElementById('traitPreview').style.display = "none";
	}

	const backgroundElements = document.querySelectorAll('.background');
	for(let subDiv of backgroundElements) {
		if((subDiv.classList.contains(choiceValues.race) || subDiv.classList.contains("전종족")) && (subDiv.classList.contains(choiceValues.class) || subDiv.classList.contains("전직업"))) {
			subDiv.classList.remove("disabled");
		} else {
			if(subDiv.classList.contains("active")) {
				subDiv.classList.remove("active");
				choiceValues.background = null;
				document.getElementById("quickBg").innerHTML = `<b>${getWord("배경")}</b>`
				document.getElementById('traitPreview').style.display = "none";
			}
			subDiv.classList.add("disabled");
		}
	}

	const traitPreviews = document.querySelectorAll('.traitPreview');
	for(let preview of traitPreviews) {
		let id = preview.getAttribute('data-id');
		const card = cardDB[id];
		if(preview.style.display == "none" && (!card.race || card.race == choiceValues.race) && (card.class == '중립' || card.class == choiceValues.class) && (!card.bg || card.bg == choiceValues.background) && card.boss == undefined && !(gamemode == 2 && card.id != "DA-NT-ALL-000" && card.class == '중립' && !card.race && !card.bg)) {
			preview.style.display = "flex";
			adjustCardFontSize(preview);
		}
		if(preview.style.display != "none" && !((!card.race || card.race == choiceValues.race) && (card.class == '중립' || card.class == choiceValues.class) && (!card.bg || card.bg == choiceValues.background) && card.boss == undefined && !(gamemode == 2 && card.id != "DA-NT-ALL-000" && card.class == '중립' && !card.race && !card.bg))) {
			preview.style.display = "none";
		}
	}

	if(choiceValues.ps) {
		document.getElementById("quickPs").innerHTML = `<b>${getWord("성격")}: </b>`+getWord(choiceValues.ps);
	} else {
		document.getElementById("quickPs").innerHTML = `<b>${getWord("성격")}</b>`
	}

	var partElement = document.getElementById('profileConfirm');
	if(choiceValues.race && choiceValues.face && choiceValues.class && choiceValues.background && (choiceValues.ps || gamemode == 2)) {
		txt =
		`
		<b>${"이름"}:</b> ${playerName}<br><br>
		<b>${"종족"}:</b> ${choiceValues.race} | <b>${"성별"}:</b> ${"여성"}<br><br>
		<b>${"직업"}:</b> ${choiceValues.class} ${gamemode != 2?`| <b>${"성격"}:</b> ${choiceValues.ps}`:""}<br><br>
		`
		const profileNum = gamemode == 1?"profile2":(gamemode == 2?"profile3":"profile");
		if(storyProfile[profileNum][choiceValues.background][choiceValues.race]) {
			txt += translateText(storyProfile[profileNum][choiceValues.background][choiceValues.race], { "name":playerName });
		} else {
			txt += translateText(storyProfile[profileNum][choiceValues.background], { "name":playerName });
		}
		
		//txt += translateText(storyProfile["notice"], { });

		const fullImg = partElement.querySelectorAll("img");
		let profileFace;
		if(gamemode == 2 || choiceValues.ps == "적극") {
			profileFace = 'corrupted';
		} else {
			profileFace = 'normal';
		} 
		fullImg[0].src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_${profileFace}.webp`;
		if(gamemode == 0) {
			fullImg[1].src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_c${classNum[choiceValues.class]}.webp`;
		}
		if(gamemode == 1) {
			fullImg[1].src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_c5.webp`;
		}
		if(gamemode == 2) {
			fullImg[1].style.display = 'none';
		}

		const doppleImgs = document.getElementsByClassName("dopplePortrait")
		for(let _img of doppleImgs) {
			_img.src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_corrupted.webp`;
		}

		partElement.style.display = 'flex';
		document.getElementById('quickEnd').classList.remove('disabled');
	} else {
		document.getElementById('quickEnd').classList.add('disabled');
		partElement.style.display = 'none';
	}

	let profile = document.getElementById('profile');
	profile.querySelector("p.box-text").innerHTML = txt;
}

function createStory(div, part) {
	let stories = storyText[part];
	if(!stories) { return false; }
	for(let _s of stories) {
		if(checkCondition(_s.cond, 0)) {
			if(_s.type == "text") {
				const _divText = createStoryText(_s);
				div.appendChild(_divText);
			} else if(_s.type == "dialogue") {
				if(_s.character == "player" && ((_s.psText && !_s.psText[choiceValues.ps]) || (_s.classText && !_s.classText[choiceValues.class]))) {
					continue;
				}
				let _ch, _name;
				if(_s.character == "player") {
					_ch = `${raceTag[choiceValues.race]}_${choiceValues.face}`
					_name = playerName;
				} else {
					_ch = _s.character;
					_name = npcName[_s.character][language];
				}
				if(_s.name) {
					_name = _s.name[language];
				}
				const _divDialogue = createDialogue(_name, _s, _ch, _s.expression, _s.pos);
				div.appendChild(_divDialogue);
			} else if(_s.type == "line") {
				const _divLine = document.createElement("hr");
				_divLine.className = "storyLine";
				div.appendChild(_divLine);
			} else if(_s.type == "img") {
				const _divImg = createStoryImg(_s);
				div.appendChild(_divImg);
			} else if(_s.type == "title") {
				const _divImg = createStoryTitle(_s);
				div.appendChild(_divImg);
			}
		} else {
			continue;
		}
	}
	const hypnoTexts = document.querySelectorAll('.hypnoText');
	hypnoTexts.forEach(el => {
	    const originalText = el.textContent;
	    el.textContent = '';

	    Array.from(originalText).forEach(letter => {
	        const span = document.createElement('span');
	        span.classList.add('hypnoLetter');
	        span.textContent = letter === ' ' ? '\u00A0' : letter; // 공백은 &nbsp;로 처리
	        el.appendChild(span);
	    });

	    const hypnoLetters = el.querySelectorAll('.hypnoLetter');
	    hypnoLetters.forEach(letter => {
	        for (let i = 1; i <= 8; i++) {
	            let randomX = (Math.random() * 2 - 1).toFixed(1) + 'px';
	            let randomY = (Math.random() * 2 - 1).toFixed(1) + 'px';
	            letter.style.setProperty(`--random-x${i}`, `translateX(${randomX})`);
	            letter.style.setProperty(`--random-y${i}`, `translateY(${randomY})`);
	        }
	    });
	});
}

function createStoryText(textObj) {
    var divOuter = document.createElement("div");
    var divContent = document.createElement("div");
    var p = document.createElement("p");
    let txt;

    //속성 설정
    divOuter.className = "box";
    divOuter.style.flex = "0 calc(90% - 20px)";
    divContent.className = "box-content";
    p.className = "box-text";

    if(textObj.psText) {
    	txt = textObj.psText[choiceValues.ps];
    } else if(textObj.classText) {
    	txt = textObj.classText[choiceValues.class];
    } else {
    	txt = textObj;
    }

    p.innerHTML = translateText(txt, infoTextData() );


    //요소 구조 설정
    divContent.appendChild(p);
    divOuter.appendChild(divContent);

    return divOuter;
}

function createStoryTitle(textObj) {
    var divOuter = document.createElement("div");
    var divContent = document.createElement("h2");
    let txt;

    //속성 설정
    divOuter.className = "box";
    divOuter.style.flex = "0 calc(100% - 20px)";
    divContent.className = "box-title";

    if(textObj.psText) {
    	txt = textObj.psText[choiceValues.ps];
    } else if(textObj.classText) {
    	txt = textObj.classText[choiceValues.class];
    } else {
    	txt = textObj;
    }

    divContent.innerHTML = translateText(txt, infoTextData() );


    //요소 구조 설정
    divOuter.appendChild(divContent);

    return divOuter;
}

function createDialogue(name, textObj, portrait, expression, pos) {
    var divOuter = document.createElement("div");
    var divContent = document.createElement("div");
    var divImg = document.createElement("div");
    var img = document.createElement("img");
    var p = document.createElement("p");
    let txt;

    //속성 설정
    divOuter.className = "box dialogue";
    divOuter.style.flex = "0 calc(90% - 20px)";
    if(pos==0) {divOuter.style.marginRight = "auto"}
    if(pos==1) {divOuter.style.marginLeft = "auto"}
    divContent.className = "box-content";
    divContent.style.alignItems = "center";
    divImg.className = "box-img portrait";
    img.src = imageSrc+"face/portrait_"+(textObj.character=="player"?"player_":"")+portrait+"_"+expression+".webp";
    img.alt = "";
    p.className = "box-text";

    if(textObj.psText) {
    	txt = textObj.psText[choiceValues.ps];
    } else if(textObj.classText) {
    	txt = textObj.classText[choiceValues.class];
    } else {
    	txt = textObj;
    }

    p.innerHTML = `<b>[${name}]</b><br><br>${translateText(txt, infoTextData() )}`;


    //요소 구조 설정
    divImg.appendChild(img);

    if(textObj.character == "player" && !textObj.nude) {
    	var img2 = document.createElement("img");
    	img2.className = "clothes";
	    img2.src = imageSrc+"face/portrait_player_"+portrait+"_c"+classNum[choiceValues.class]+".webp";
	    img2.alt = "";
    	divImg.appendChild(img2);
    }

    if(textObj.negative) {
    	divImg.style.filter = "invert(1)";
    }

    if(textObj.blur) {
    	divOuter.style.filter = "blur(5px)";
    }

    divContent.appendChild(divImg);
    divContent.appendChild(p);
    divOuter.appendChild(divContent);

    return divOuter;
}

function createStoryImg(imgObj) {
    var divOuter = document.createElement("div");
    var divContent = document.createElement("div");
    var divImg = document.createElement("div");
    var img = document.createElement("img");

    //속성 설정
    divOuter.className = "box story-img";
    divContent.className = "box-content";
    divImg.className = "box-img"
    img.src = imageSrc+imgObj.img+".webp";
    img.style.border = "solid grey";


    //요소 구조 설정
    divImg.appendChild(img);
    divContent.appendChild(divImg);
    divOuter.appendChild(divContent);

    return divOuter;
}

function createChampDiv(champ) {
    const container = document.createElement('div');
    container.className = 'box button enemyType';
    container.style.flex = `0 calc(${isMobileDevice()?33:25}% - 20px)`;;
    container.onclick = function() { selectEnemy.call(this, champ.id); };

    const imgDiv = document.createElement('div');
    imgDiv.className = 'box-img';
    const img = document.createElement('img');
    img.src = `${imageSrc}face/portrait_${champ.img}_normal.webp`;
    img.onerror = function() { handleImgError(this); };
    img.alt = '';
    imgDiv.appendChild(img);
    container.appendChild(imgDiv);

    const hr1 = document.createElement('hr');
    container.appendChild(hr1);

    const nameH2 = document.createElement('h2');
    nameH2.className = 'box-title';
    nameH2.textContent = champ.name[language];
    container.appendChild(nameH2);

    const hr2 = document.createElement('hr');
    container.appendChild(hr2);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'box-content';
    const contentP = document.createElement('p');
    contentP.className = 'box-text';
    contentP.textContent = champ.look[language];
    contentDiv.appendChild(contentP);
    container.appendChild(contentDiv);

    if(playRecord.playCount == 0 && !["boss1", "boss2", "boss3"].includes(champ.id)) {
    	container.classList.add("disabled");
    	container.classList.add("2ndUsable");
    }

    return container;
}

function createChampDescriptionDiv(champ) {
    const container = document.createElement('div');
    container.className = 'container enemyDescription';
    container.id = champ.id + "desc";
    container.style.display = 'none';

    const box1 = document.createElement('div');
    box1.className = 'box halfimage';
    box1.style.flex = '0 calc(100% - 20px)';
    
    const title1 = document.createElement('h2');
    title1.className = 'box-title';
    title1.textContent = language === 'KOR' ? `챔피언: ${champ.fullName.KOR}` : `Champion: ${champ.fullName.ENG}`;
    box1.appendChild(title1);
    
    const content1 = document.createElement('div');
    content1.className = 'box-content';
    
    const imgDiv = document.createElement('div');
    imgDiv.className = 'box-img';
    const img = document.createElement('img');
    img.src = `${imageSrc}face/portrait_${champ.img}_${champ.realImg?champ.realImg:"normal"}.webp`;
    img.onerror = function() { handleImgError(this); };
    img.alt = '';
    imgDiv.appendChild(img);
    content1.appendChild(imgDiv);
    
    const description1 = document.createElement('p');
    description1.className = 'box-text';
    description1.innerHTML = champ.description[language];
    content1.appendChild(description1);
    
    box1.appendChild(content1);
    container.appendChild(box1);

    // Add other sections similarly...

    const box2 = document.createElement('div');
    box2.className = 'box';
    box2.style.flex = '0 calc(100% - 20px)';
    
    const content2 = document.createElement('div');
    content2.className = 'box-content';
    
    const description2 = document.createElement('p');
    description2.className = 'box-text';
    description2.innerHTML = `
        <b>${language === 'KOR' ? '흥분 한계' : 'Excitement Limit'}: </b>${champ.stats.exciteL}<br>
        <b>${language === 'KOR' ? '절정 한계' : 'Orgasm Limit'}: </b>${champ.stats.orgasmL}<br>
        <br>
        <b>${language === 'KOR' ? '특기' : 'Specialty'}: </b><br>
        ${champ.stats.specialties[language].join('<br>')}<br>
    `;
    content2.appendChild(description2);
    
    box2.appendChild(content2);
    container.appendChild(box2);

    const spacer1 = document.createElement('div');
    spacer1.style.width = '100%';
    spacer1.style.height = '80px';
    container.appendChild(spacer1);

    const abilitiesContainer = document.createElement('div');
    abilitiesContainer.className = 'container cardList';
    abilitiesContainer.id = `${champ.id}Ability`;
    
    const abilitiesBox = document.createElement('div');
    abilitiesBox.className = 'box';
    abilitiesBox.style.flex = '0 calc(100% - 20px)';
    
    const abilitiesTitle = document.createElement('h2');
    abilitiesTitle.className = 'box-title';
    abilitiesTitle.textContent = language === 'KOR' ? '챔피언의 능력' : "Champion's Abilities";
    abilitiesBox.appendChild(abilitiesTitle);
    
    abilitiesContainer.appendChild(abilitiesBox);
    container.appendChild(abilitiesContainer);

    const spacer2 = document.createElement('div');
    spacer2.style.width = '100%';
    spacer2.style.height = '80px';
    container.appendChild(spacer2);

    const deckContainer = document.createElement('div');
    deckContainer.className = 'container cardList';
    deckContainer.id = `${champ.id}Deck`;
    
    const deckBox = document.createElement('div');
    deckBox.className = 'box';
    deckBox.style.flex = '0 calc(100% - 20px)';
    
    const deckTitle = document.createElement('h2');
    deckTitle.className = 'box-title';
    deckTitle.textContent = language === 'KOR' ? '챔피언의 덱' : "Champion's Deck";
    deckBox.appendChild(deckTitle);
    
    deckContainer.appendChild(deckBox);
    container.appendChild(deckContainer);

    return container;
}

function adjustSize(size) {
    const deviceWidth = window.screen.width; // 실제 기기 해상도 기반 체크

    if (deviceWidth < 480) {
        return size * 0.6; // 작은 스마트폰 (iPhone SE, Galaxy Mini)
    } else if (deviceWidth < 768) {
        return size * 0.7; // 일반 스마트폰
    } else if (deviceWidth < 1024) {
        return size * 0.85; // 태블릿
    }
    return size; // 기본 (PC)
}


function createCard(card, size, button=false, type=0) {
	function createKeywords(card) {
		const keywords = new Set(card.keywords || []);
		if(card.tags.includes("클라이맥스")) {
			keywords.add("클라이맥스");
		}
		if(card.type == "체위") {
			keywords.add("체위");
		}
		if(card.tags.includes("정수")) {
			keywords.add("정수");
		}
		if(card.effect.some(e => e.inDeck)) {
			keywords.add("소지");
		}
		if(card.effect.some(e => e.type == "attack")) {
			keywords.add("자극");
		}
		if(card.effect.some(e => e.type == "discard")) {
			keywords.add("버리기");
		}
		if(card.effect.some(e => e.type == "transform")) {
			keywords.add("변형");
		}
		if(card.effect.some(e => e.type == "combine")) {
			keywords.add("결합");
		}
		if(card.effect.some(e => e.type == "maxUse" && !e.notext) || card.effect.filter(e => e.type == "effect").some(e => e.info.effect.some(_e => _e.type == "maxUse"))) {
			keywords.add("추가카드");
		}
		if(card.effect.some(e => e.type == "changeLust")) {
			keywords.add("욕망");
		}
		if(card.effect.some(e => e.type == "lust")) {
			if(card.effect.some(e => e.type == "lust" && typeof e.info.value === 'string' && e.info.value.startsWith('M'))) {
				keywords.add("욕망최대n");
			}
			if(card.effect.some(e => e.type == "lust" && typeof e.info.value === 'number')) {
				keywords.add("욕망n");
			}
		}
		if(card.effect.some(e => e.type == "stack")) {
			keywords.add("강화");
		}
		if(card.related && card.related.includes("AS-NM-AT-000")) {
			keywords.add("id:AS-NM-AT-000");
		}
		if(card.effect.some(e => e.type == "changeWetness")) {
			keywords.add("젖음");
		}
		if(card.effect.some(e => e.type == "wetness")) {
			keywords.add("젖음n");
		}
		if(card.effect.some(e => e.type == "changeSBlock")) {
			keywords.add("감각차단");
		}
		if(card.related && card.related.includes("MA-ST-002")) {
			keywords.add("id:MA-ST-002");
		}
		if(card.cast && card.tags.includes("자동시전")) {
			keywords.add("자동시전");
		}
		if(card.effect.some(e => e.type == "absorption" || (e.type == "state" && cardDB[e.value] && cardDB[e.value].effect.some(_e => _e.type == "absorption")))) {
			keywords.add("정기흡수");
		}
		if(card.effect.some(e => e.type == "corrupt")) {
			if(card.effect.some(e => e.type == "corrupt" && typeof e.info.value === 'string' && e.info.value.startsWith('M'))) {
				keywords.add("타락n이하");
			}
			if(card.effect.some(e => e.type == "corrupt" && typeof e.info.value === 'number')) {
				keywords.add("타락n");
			}
		} else if(card.effect.some(e => e.type == "changeCorrupt")) {
			keywords.add("타락");
		}
		if(card.effect.some(e => e.type == "count")) {
			keywords.add("카운트");
		}

		return [...keywords];
	}
	if(card) {
		var palette;
		if(card.tags.includes("부정적") || card.type == '패널티') {
			palette = cardColor["부정적"];
		} else {
			palette = cardColor[card.class];
		}
		const cardDiv = document.createElement('div');
		cardDiv.style.width = adjustSize(size)+"vmin";
		cardDiv.style.height = adjustSize(size*3/2)+"vmin";

		let _keywords = createKeywords(card);
        if (_keywords.length) {
		    cardDiv?.addEventListener('mouseenter', function (e) {
		    	currentHoverElement = e.target;
		    	if(phase != "battle") {
		            displayTooltip(e, _keywords);
		        }
		    });

		    cardDiv?.addEventListener('mouseleave', function () {
		        hideTooltip();
		    });
        }

	    if(button) {
	    	cardDiv.className = 'card button type'+type;
	    	switch(type) {
	    	case 0:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.onclick = function() { addCard(this, deck) };
	    		break;
	    	case 1:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.onclick = function() { addCard(this, player.state) };
	    		break;
	    	case 2:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.onclick = function() { addCard(this, poisonSac) };
	    		break;
	    	case 3:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.classList.add("spellCard");
	    		cardDiv.onclick = function() { addSpell(this) };
	    		break;
	    	case 4:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.onclick = function() { addEssence(this) };
	    		break;
	    	case 5:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.onclick = function() { removeEssence(this) };
	    		break;

	    	case 10:
	    		cardDiv.classList.add("battleCard");
	    		cardDiv.onclick = function() { useCard(this) };
	    		cardDiv.oncontextmenu = function(event) {
				    event.preventDefault();
				    relatedModalOpen(card);
				};
	    		break;
	    	case 11:
	    		cardDiv.oncontextmenu = function(event) {
				    event.preventDefault();
				    relatedModalOpen(card);
				};
	    		break;

	    	case 51:
	    		cardDiv.classList.add("deckBuild");
	    		cardDiv.onclick = function() { wildcardModalOpen(); };
	    		break;
	    	case 52:
	    		cardDiv.onclick = function() { addWildcard(card.id); };
	    		break;
	    	case 53:
	    		cardDiv.onclick = function() { addCustomCard(); };
	    		break;

	    	case 100:
	    		cardDiv.classList.add("binderCard");
	    		cardDiv.setAttribute('data-id', card.id);
	    		cardDiv.onclick = function() { selectCollection("card", card.id) };
	    		break;
	    	}
	    } else {
	    	cardDiv.className = 'card';
	    	if(type) {
	    		cardDiv.classList.add('type'+type);
	    	}
	    }
	    if(card.tags.includes("만능")) {
	    	cardDiv.classList.add("wildcard");
	    }
	    if(card.type == "단점" || card.type == "패널티") {
	    	//cardDiv.classList.add("bad");
	    }
	    cardDiv.setAttribute('data-id', card.id);
	    cardDiv.style.background = palette.border;

	    // 이미지 컨테이너 생성
	    const imageDiv = document.createElement('div');
	    imageDiv.className = 'card-image';
	    const filterDiv = document.createElement('div');
	    filterDiv.className = 'filter';
	    imageDiv.appendChild(filterDiv);
	    const image = document.createElement('img');
	    image.className = 'card-image-normal';
	    if(card.parents && !card.noInherit) {
	    	image.src = imageSrc+"card/"+card.parents+".webp";
	    } else {
		    image.src = imageSrc+"card/"+card.id+".webp";
		}
	    image.onerror = function() { handleImgError(this); }; // 이미지 로드 실패 시 처리
	    imageDiv.appendChild(image);

	    // 카드 이름 생성
	    const nameDiv = document.createElement('div');
	    nameDiv.style.fontSize = adjustSize(size/10)+"vmin";
	    nameDiv.className = 'card-name';
	    nameDiv.innerHTML = card.name[language];
	    nameDiv.style.background = palette.name;

	    // 카드 설명 생성
	    const textDiv = document.createElement('div');
	    textDiv.style.fontSize = adjustSize(size*1.6/30)+"vmin";
	    textDiv.className = 'card-text';
	    textDiv.style.background = palette.textbox;
	    const pDescription = document.createElement('p');
	    pDescription.className = 'card-description';
	    if(card.text) {
	    	pDescription.innerHTML = card.text[language];
	    } else {
		    pDescription.innerHTML = createCardText(card);
		}
	    textDiv.appendChild(pDescription);

	    // 카드 종류 생성
	    const typeDiv = document.createElement('div');
	    typeDiv.style.fontSize = adjustSize(size/15)+"vmin";
	    typeDiv.className = 'card-type';
	    typeDiv.textContent = getWord(card.type);
		typeDiv.style.background = card.rarity == "일반"?cardColor["등급"].normal:(card.rarity == "숙련"?cardColor["등급"].expert:(card.rarity == "궁극"?cardColor["등급"].ultimate:palette.name));

		const _cardId = card.tags.includes("마술요약") && card.parents && !card.noInherit?card.parents:card.id;

		if(type == 100 && cardSave[_cardId] && (!card.tags.includes("기본마술") || card.tags.includes("마술요약")) && (cardSave[_cardId].normal?.win > 0 || (cardSave[_cardId].hard?.win > 0)) ) {
			const clearMark = document.createElement('p');
			if(card.tags.includes("시련") && (cardSave[_cardId].normal.success || cardSave[_cardId].hard.success)) {
				clearMark.innerText = "🏅"
			} else {
				clearMark.innerText = "⭐"
			}
			if(cardSave[_cardId].hard?.win == 0) {
				clearMark.style.filter = "grayscale(1)";
			}
			//}
			clearMark.style.position = 'absolute';
		    clearMark.style.top = '-32px';
		    clearMark.style.left = '-8px';
		    clearMark.style.fontSize = adjustSize(size/10)+"vmin";
		    clearMark.style.pointerEvents = 'none';
		    clearMark.style.background = palette.name;
		    clearMark.style.borderRadius = "100%"
		    clearMark.style.padding = "8px"
		    cardDiv.style.position = 'relative';
	    	cardDiv.appendChild(clearMark);
		}

	    // 모든 요소를 카드 컨테이너에 추가
	    cardDiv.appendChild(imageDiv);
	    cardDiv.appendChild(nameDiv);
	    cardDiv.appendChild(textDiv);
	    cardDiv.appendChild(typeDiv);

	    // 생성된 카드 요소 반환
	    if(button && [0, 1, 2, 3, 4, 51, 53].includes(type)) {
		    if(!card.nochange) {
		    	const image2 = document.createElement('img');
			    image2.className = 'card-image-original';
			    if(card.parents && !card.noInherit) {
			    	image2.src = imageSrc+"card/"+card.parents+"-real.webp";
			    } else {
				    image2.src = imageSrc+"card/"+card.id+"-real.webp";
				}
			    image2.onerror = function() { handleImgError(this); }; // 이미지 로드 실패 시 처리
			    imageDiv.appendChild(image2);
		    }

	    	const totalDiv = document.createElement('div');
		    totalDiv.className = 'container';
			totalDiv.style.alignContent = "center";
			totalDiv.style.alignItems = "center";
			totalDiv.style.flexDirection = 'column';
			totalDiv.style.width = "320px";
			totalDiv.style.margin = "0.5%";

			if(card.type == "특성") {
				const categoryDiv = document.createElement('div');
		    	categoryDiv.className = 'box categoryDiv';
		    	categoryDiv.innerText = "";
		    	if(card.race) {
		    		categoryDiv.innerText += card.race;
		    	}
		    	if(card.class != "중립") {
		    		if(categoryDiv.innerText) {
		    			categoryDiv.innerText += " - ";
		    		}
		    		categoryDiv.innerText += card.class;
		    	}
		    	if(card.bg) {
		    		if(categoryDiv.innerText) {
		    			categoryDiv.innerText += " - ";
		    		}
		    		categoryDiv.innerText += card.bg;
		    	}
		    	if(card.boss != undefined) {
		    		if(categoryDiv.innerText) {
		    			categoryDiv.innerText += " - ";
		    		}
		    		categoryDiv.innerText += `${champList[`boss${card.boss}`].name[language]} 격파`;
		    	}
		    	if(!categoryDiv.innerText) {
			    	categoryDiv.innerText += "공통"
			    }
			    totalDiv.appendChild(categoryDiv);
			}
	    	
			totalDiv.appendChild(cardDiv);

	    	const relatedButton = document.createElement('div');
	    	relatedButton.className = 'box button relatedButton';
	    	relatedButton.innerText = "관련 카드";
	    	relatedButton.setAttribute('data-card', card.id);
	    	relatedButton.onclick = function() { relatedModalOpen(cardDB[this.getAttribute("data-card")]) };
	    	totalDiv.appendChild(relatedButton);

		    if(!card.related) {
		    	relatedButton.innerText = "관련 카드 없음";
		    	relatedButton.classList.add("disabled");
		    }

			const flavorTextBoxDiv = document.createElement('div');
		    flavorTextBoxDiv.className = 'box';
			flavorTextBoxDiv.style.padding = "0 20px";
			flavorTextBoxDiv.style.width = "100%";
			flavorTextBoxDiv.style.flexGrow = "1";

			const costDiv = document.createElement('p');
			costDiv.className = 'card-cost';
			costDiv.innerHTML = "<b>"+((card.cost<0)?"+":"")+(card.cost!=-999?-card.cost:"<span class='glitchNumbers'></span> ")+"pt</b>";
			if(card.cost<0) {
				costDiv.style.color = "rgba(0, 128, 0, 1)"
			}

			costDiv.style.fontSize = adjustSize(size/15)+"vmin";
			costDiv.style.textAlign = "center";
			flavorTextBoxDiv.appendChild(costDiv);

			const flavorTextContainer = document.createElement('div');
			flavorTextContainer.style.padding = '0 0 20px 0';

			if(card.flavorText) {
				const flavorTextDiv = document.createElement('blockquote');
				flavorTextDiv.innerHTML = card.flavorText[language];
				flavorTextDiv.className = 'flavorText';
				flavorTextContainer.appendChild(flavorTextDiv);
				flavorTextBoxDiv.appendChild(flavorTextContainer);
			}

			if(card.hypnoText) {
				const hypnoTextDiv = document.createElement('blockquote');
				hypnoTextDiv.innerHTML = `<b>${card.hypnoText[language]}</b>`;
				hypnoTextDiv.className = 'hypnoTextQuote';
				hypnoTextDiv.style.filter = 'blur(5px)';
				flavorTextContainer.appendChild(hypnoTextDiv);

			}

			totalDiv.appendChild(flavorTextBoxDiv);
			totalDiv.setAttribute('data-id', card.id);
			return totalDiv;
	    } else if(type == 10) {
	    	if(card.tags.includes("자동시전")) {
	    		cardDiv.classList.add("spell");
	    	}

	    	return cardDiv;
	    } else if(type == 99) {
		    if(!card.nochange) {
		    	const image2 = document.createElement('img');
			    image2.className = 'card-image-original';
			    if(card.parents && !card.noInherit) {
			    	image2.src = imageSrc+"card/"+card.parents+"-real.webp";
			    } else {
				    image2.src = imageSrc+"card/"+card.id+"-real.webp";
				}
			    image2.onerror = function() { handleImgError(this); }; // 이미지 로드 실패 시 처리
			    imageDiv.appendChild(image2);
		    }
	    	const totalDiv = document.createElement('div');
		    totalDiv.className = 'container';
			totalDiv.style.alignContent = "center";
			totalDiv.style.alignItems = "center";
			totalDiv.style.flexDirection = 'column';
			totalDiv.style.width = "320px";
			totalDiv.style.margin = "0.5%";
			totalDiv.setAttribute('data-id', card.id);
			totalDiv.appendChild(cardDiv);

	    	const relatedButton = document.createElement('div');
	    	relatedButton.className = 'box button relatedButton';
	    	relatedButton.innerText = "관련 카드";
	    	relatedButton.setAttribute('data-card', card.id);
	    	relatedButton.onclick = function() { relatedModalOpen(cardDB[this.getAttribute("data-card")]) };
	    	totalDiv.appendChild(relatedButton);

		    if(!card.related || card.related.length == 0) {
		    	relatedButton.innerText = "관련 카드 없음";
		    	relatedButton.classList.add("disabled");
		    }

			return totalDiv;
	    } else {
		    if(type == 1 && !card.nochange) {
			    if(card.parents && !card.noInherit) {
			    	image.src = imageSrc+"card/"+card.parents+"-real.webp";
			    } else {
				    image.src = imageSrc+"card/"+card.id+"-real.webp";
				}
		    }
		    if(type == 100 || type == 101) {
		    	if(!card.nochange) {
			    	const image2 = document.createElement('img');
				    image2.className = 'card-image-original';
				    if(card.parents && !card.noInherit) {
				    	image2.src = imageSrc+"card/"+card.parents+"-real.webp";
				    } else {
					    image2.src = imageSrc+"card/"+card.id+"-real.webp";
					}
				    image2.onerror = function() { handleImgError(this); }; // 이미지 로드 실패 시 처리
				    imageDiv.appendChild(image2);
			    }
		    }
		    return cardDiv;
	    }
	}
}

function changeCardSize(cardDiv, size) {
	return new Promise((resolve) => {
		cardDiv.style.width = adjustSize(size)+"vmin";
		cardDiv.style.height = adjustSize(size*3/2)+"vmin";

	    const nameDiv = cardDiv.querySelector('div.card-name');
	    nameDiv.style.fontSize = adjustSize(size/10)+"vmin";

	    const textDiv = cardDiv.querySelector('div.card-text');
	    textDiv.style.fontSize = adjustSize(size*1.6/30)+"vmin";

	    const typeDiv = cardDiv.querySelector('div.card-type');
	    typeDiv.style.fontSize = adjustSize(size/15)+"vmin";

	    cardDiv?.addEventListener('transitionend', function() {
	        adjustCardFontSize(cardDiv);
            resolve();
	    }, { once: true });
	});
}

Array.prototype.sortCards = function(sortType = 'id') {
    if (sortType === 'priority') {
        this.sort((cardA, cardB) => {
            // priority가 없는 경우 0으로 간주
            const priorityA = typeof cardA.priority === 'number' ? cardA.priority : 0;
            const priorityB = typeof cardB.priority === 'number' ? cardB.priority : 0;
            
            // 내림차순 정렬
            return priorityB - priorityA;
        });
    } else {
        // 'id' 순으로 정렬
        const idOrder = Object.keys(cardDB);
        this.sort((cardA, cardB) => {
            return idOrder.indexOf(cardA.id) - idOrder.indexOf(cardB.id);
        });
    }
};




/*
##########################################################################################################################################################################################
// ====================================================================================== Card Text ======================================================================================
##########################################################################################################################################################################################
*/

function translateText(translationObject, valueObject) {
	let template = translationObject[language] ?? translationObject;
	for (const key in valueObject) {
		let value = valueObject[key];
		if (key === "repeat" && value === "") {
            template = template.replace(new RegExp(`\\s*{${key}}\\s*`, 'g'), (match) => {
                return (/^\s/.test(match) && /\s$/.test(match)) ? ' ' : '';
            });
        } else {
			template = template.replace(`{${key}}`, value);
		}
	}
	return replaceWithPostposition(template);
}

function createCardText(card, reverse=false) {
	const effect = card.effect;
	let text = "";

    const typeDeck = ["cardDB", "deck", "enemyDeck", "selfDeck", "opDeck", "poisonSac"];
    const typeStat = ["lewd", "real_lewd", "estrus", "real_estrus", "excite", "exciteL", "remainExcite", "orgasm", "orgasmL", "remainOrgasm", "lust", "wetness", "sBlock", "delayedEx", "corrupt"];

	function stringObjectify(str) {
		if(typeof str === 'number') {
			return [str];
		}

		if(typeof str === 'boolean') {
			return [str];
		}

		if(typeof str === 'object' && str !== null) {
			return [str];
		}

		const replacements = {
	    	"플레이어": "player",
	    	"챔피언": "enemy",
	    	"상대": "op",
	    	"자신": "self",

	    	"카드풀": "cardDB",
	    	"덱": "deck",
	    	"챔피언덱": "enemyDeck",
	    	"자기덱": "selfDeck",
	    	"상대덱": "opDeck",
	    	"독주머니": "poisonSac",

	    	"라운드": "round",
	    	"최대라운드": "maxRound",
			"최대행동": "maxUse",
			"적최대행동": "maxUseE",

	    	"음란": "lewd",
	    	"실제음란": "real_lewd",
	    	"발정": "estrus",
	    	"실제발정": "real_estrus",
	    	"흥분": "excite",

	    	"체위": "posture",
	    	"욕망": "lust",
	    	"젖음": "wetness",
	    	"감각차단": "sBlock",
	    	"지연흥분": "delayedEx",
	    	"타락": "corrupt",

	    	"남은흥분": "remainExcite",
	    	"흥분한계": "exciteL",
	    	"절정": "orgasm",
	    	"남은절정": "remainOrgasm",
	    	"절정한계": "orgasmL",

	    	"행동": "action",
	    	"기록": "record",
    		"효과발동": "effectActive",

	    	"전부": "all",
	    	"전체": "all",
	    	"이번": "thisTurn",
	    	"이전": "lastTurn",
	    	"최근": "recentTurn",

	    	"소모욕망": "consumeLust",

	    	"사용": "use",
	    	"버림": "discard",
	    	"변형": "transform",
	    	"결합": "combine",
	    	"제거": "vanish",

	    	"증가": "up",
	    	"감소": "down",

	    	"이벤트": "event",
	    	"발정기록": "estrus",
	    	"음란기록": "lewd",
	    	"자극함": "attack",
	    	"자극받음": "attacked",
	    	"획득": "get",
	    	"상태획득": "getState",
    		"회피": "avoid",
	    	"만료마술": "expiredSpell",

	    	"상태": "state",
	    	"이름": "name",
	    	"타입": "type",
	    	"희귀도": "rarity",
	    	"태그": "tags",

	    	"파생": "derived",

	    	"마술슬롯": "spellSlot",
	    	"즉발": "instant",
	    	"영창": "chant",
	    	"집중": "focused",

	    	"커스텀": "choiceValues",
	    	"캐릭터": "charData",
	    	"종족": "race",
	    	"직업": "class",
	    	"배경": "background",
	    	"성격": "ps",
	    	"표정": "condition",
	    	"특수상태": "specialCond",

	    	"모드": "gamemode",
	    	"특수승리": "specialEnd",
	    };

	    const parts = str.split('.');
		const result = [];

		parts.forEach(part => {
			if(replacements[part]) {
				result.push(replacements[part]);
			} else {
				const match = part.match(/^([^(]+)\(([^)]+)\)$/);
				if (match) {
					const args = match[2].split(',').map(arg => arg.trim());
					result.push({ func: match[1], args: args });
				} else {
					result.push(part);
				}
			}
		});

		return result;
	}

	function cardTagName(tag, cardType = getWord("카드")) {
		let _card;
		switch(tag) {
			case "생성됨":
				_card = "생성된 카드";
				break;
			case "변형목적":
				_card = "변형 목적의 카드";
				break;
			case "독":
				_card = "독";
				break;
			case "기본독":
				_card = "다른 독";
				break;
			case "즉발 마술":
				_card = "즉발 마술";
				break;
			case "영창 마술":
				_card = "영창 마술";
				break;
			case "집중 마술":
				_card = "집중 마술";
				break;
			case "두번변형됨":
				_card = "두 번 이상 변형된 카드";
				break;
			case "서막조건":
				switch(prophecy[0]) {
				case 0:
					_card = "<span style=\"color: gray;\"><i>(중립, 패널티, 보석, 마술)</i></span> 카드";
					break;
				case 1:
					_card = "중립 카드";
					break;
				case 2:
					_card = "패널티 카드";
					break;
				case 3:
					_card = "보석 카드";
					break;
				case 4:
					_card = "마술 카드";
					break;
				}					
				break;
			case "중막조건":
				switch(prophecy[1]) {
				case 0:
					_card = "<span style=\"color: gray;\"><i>(<b>[진홍색 마도진]</b>, <b>[담청색 마도진]</b>, <b>[황금색 마도진]</b>)</i></span>";
					break;
				case 1:
					_card = "<b>[진홍색 마도진]</b>";
					break;
				case 2:
					_card = "<b>[담청색 마도진]</b>";
					break;
				case 3:
					_card = "<b>[황금색 마도진]</b>";
					break;
				}
				break;
			case "종막조건":
				switch(prophecy[2]) {
				case 0:
					_card = "<span style=\"color: gray;\"><i>(집중 마술, <b>[순백색 마도진]</b>, 슬롯에 없는 마술, 두 번 이상 변형된)</i></span> 카드";
					break;
				case 1:
					_card = "집중 마술 카드";
					break;
				case 2:
					_card = "<b>[순백색 마도진]</b>";
					break;
				case 3:
					_card = "슬롯에 없는 마술 카드";
					break;
				case 3:
					_card = "두 번 이상 변형된";
					break;
				}
				break;
			case "개선됨":
				_card = "개선된 체위";
				break;
			default:
				_card = cardType?`${tag} ${cardType}`:tag;
				break;
		}
		return _card;
	}

	function objToText(obj, pos=1) {
		if(!isNaN(obj[0])) {
			return obj[0];
		}
		
		if(Array.isArray(obj[0])) {
			let txt = "";
			let first = true;
			for(let a of obj[0]) {
				if(!first) {
					txt += ", ";
				}
				txt += a;
				first = false;
			}
			return txt;
		}

		function cardTypeText(cardsData, type, cardpool = false) {
			var _card = "";
			if(cardsData.args[0] == "all") {
				_card = type;
			}
			if(cardsData.args[0] == "id") {
				_card = "<b>["+cardDB[cardsData.args[1]].name[language].replace(/ /g, '&nbsp;')+"]</b>";
			}
			if(cardsData.args[0] == "name") {
				_card = "<b>["+cardsData.args[1]+"]/<b>";
			}
			if(cardsData.args[0] == "type") {
				_card = getWord(cardsData.args[1])+(type?(" "+type):"");
			}
			if(cardsData.args[0] == "class") {
				_card = getWord(cardsData.args[1])+(type?(" "+type):"");
			}
			if(cardsData.args[0] == "rarity") {
				_card = getWord(cardsData.args[1])+(type?(" "+type):"");
			}
			if(cardsData.args[0] == "tags") {
				_card = cardTagName(cardsData.args[1]);
			}
			if(cardsData.func == "selectCards") {
				if(cardsData.args[2] == "all") {
					_card = translateText(cardTexts["target"][cardpool?"카드종류전부":"카드전부"], { "cards":_card });
				} else {
					if(cardsData.args[1] == "제조" && cardsData.args[2] != 1) {
						_card = translateText(cardTexts["target"]["서로다른제조"], { });
					}
					_card = translateText(cardTexts["target"][cardpool?"카드종류들":"카드들"], { "cards":_card, "amount":cardsData.args[2] });
				}
			}
			if(cardsData.func == "countType") {
				_card = translateText(cardTexts["target"]["카드종류"], { "cards":_card });
			}
			
			return _card;
		}

		if(typeDeck.includes(obj[0])) {
			let deck, cards;
			switch(obj[0]) {
			case "deck": deck = translateText(cardTexts["target"]["덱"], { "owner":getWord("도전자") }); break;
			case "enemyDeck": deck = translateText(cardTexts["target"]["덱"], { "owner":getWord("챔피언") }); break;
			case "opDeck": deck = reverse?`${getWord("덱")}`:translateText(cardTexts["target"]["덱"], { "owner":getWord("상대") }); break;
			case "selfDeck": deck = reverse?translateText(cardTexts["target"]["덱"], { "owner":getWord("상대") }):`${getWord("덱")}`; break;
			case "poisonSac": deck = getWord("독주머니"); break;
			}

			if(typeof obj[1] === "object") {
				cards = cardTypeText(obj[1], getWord("카드"), obj[0] == "cardDB");
			} else if(obj[1] == "length") {
				cards = getWord("카드");
			}
			if(obj[0] == "cardDB") {
				return cards;
			}
			return translateText(cardTexts["target"][pos==0?"덱조건":"덱목적"], { "deck":deck, "cards":cards });
		}

		if(typeStat.includes(obj[1])) {
			let owner, stat;
			switch(obj[0]) {
			case "player": owner = getWord("도전자"); break;
			case "enemy": owner = getWord("챔피언"); break;
			case "op": owner = reverse?"":getWord("상대"); break;
			case "self": owner = reverse?getWord("상대"):""; break;
			}
			switch(obj[1]) {
			case "excite": stat = `<b>${getWord("흥분")}</b>`; break;
			case "remainExcite": stat = "남은 <b>흥분</b>"; break;
			case "exciteL": stat = `<b>${getWord("흥분한계")}</b>`; break;
			case "orgasm": stat = `<b>${getWord("절정")}</b> 횟수`; break;
			case "remainOrgasm": stat = "남은 <b>절정</b> 횟수"; break;
			case "orgasmL": stat = `<b>${getWord("절정한계")}</b>`; break;
			}
			if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
				return stat;
			} else {
				return translateText(cardTexts["target"]["스탯"], { "owner":owner, "stat":stat });
			}
		}

		if(obj[1] == 'state') {
			let owner, state;
			switch(obj[0]) {
			case "player": owner = getWord("도전자"); break;
			case "enemy": owner = getWord("챔피언"); break;
			case "op": owner = reverse?"":getWord("상대"); break;
			case "self": owner = reverse?getWord("상대"):""; break;
			}
			if(obj[2].args) {
				state = cardTypeText(obj[2], "");
				/*if(obj[2].args[0] == "id") {
					state = "<b>["+cardDB[obj[2].args[1]].name[language].replace(/ /g, '&nbsp;')+"]</b>";
				}
				if(obj[2].args[0] == "name") {
					state = "<b>["+obj[2].args[1]+"]</b>";
				}
				if(obj[2].args[0] == "tags") {
					switch(obj[2].args[1]) {
					case "독":
						state = getWord("독");
						break;
					}
				}*/
				if(pos == 0) {
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["상태자신목적"], { "state":state });;
					} else {
						return translateText(cardTexts["target"]["상태목적"], { "owner":owner, "state":state });
					}
				} else {
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["상태자신"], { "state":state });;
					} else {
						return translateText(cardTexts["target"]["상태"], { "owner":owner, "state":state });
					}
				}
			}
		}

		if(obj[1] == "action") {
			let actor, cards;
			switch(obj[0]) {
			case "player": actor = getWord("도전자"); break;
			case "enemy": actor = getWord("챔피언"); break;
			case "op": actor = reverse?"":getWord("상대"); break;
			case "self": actor = reverse?getWord("상대"):""; break;
			}

			if(obj.length > 2) {
				cards = cardTypeText(obj[2], getWord("카드"));

				if(obj[2].args.length >= 3 && args[2] != "all") {
					cards = getWord(obj[2].args[2])
				}
			} else {
				cards = getWord("카드");
			}

			if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
				return translateText(cardTexts["target"]["사용카드자신"], { "cards":cards });
			} else {
				return translateText(cardTexts["target"]["사용카드"], { "actor":actor, "cards":cards });
			}
		}

		if(obj[1] == "record") {
			let actor, time, cards;
			switch(obj[0]) {
			case "player": actor = getWord("도전자"); break;
			case "enemy": actor = getWord("챔피언"); break;
			case "op": actor = reverse?"":getWord("상대"); break;
			case "self": actor = reverse?getWord("상대"):""; break;
			}
			switch(obj[2]) {
			case "all":
				time = translateText(cardTexts["target"]["결투동안"], {});
				break;
			case "thisTurn":
				time = translateText(cardTexts["target"]["이번라운드"], {});
				break;
			case "lastTurn":
				time = translateText(cardTexts["target"]["이전라운드"], {});
				break;
			case "recentTurn":
				time = translateText(cardTexts["target"]["최근라운드"], {});
				break;
			}
			if(obj[3] != "event") {
				if(typeof obj[4] === 'object') {
					cards = cardTypeText(obj[4], getWord("카드"));
				} else {
					cards = getWord("카드");
				}
			}

			switch(obj[3]) {
			case "use":
				if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
					return translateText(cardTexts["target"]["기록사용자신"], { "time":time, "cards":cards });
				} else {
					return translateText(cardTexts["target"]["기록사용"], { "time":time, "actor":actor, "cards":cards });
				}
				break;
			case "discard":
				if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
					return translateText(cardTexts["target"]["기록버림자신"], { "time":time, "cards":cards });
				} else {
					return translateText(cardTexts["target"]["기록버림"], { "time":time, "actor":actor, "cards":cards });
				}
				break;
			case "transform":
				return translateText(cardTexts["target"]["기록변형"], { "time":time });
				break;
			case "combine":
				return translateText(cardTexts["target"]["기록결합"], { "time":time });
				break;
			case "event":
				//orgasm:0, attack:0, attacked:0, excite:{up:0, down:0}, get:[], getState:[]}
				switch(obj[4]) {
				case "orgasm":
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["기록절정자신"], { "time":time });
					} else {
						return translateText(cardTexts["target"]["기록절정"], { "time":time, "actor":actor });
					}
					break;
				case "attack":
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["기록자극자신"], { "time":time });
					} else {
						return translateText(cardTexts["target"]["기록자극"], { "time":time, "actor":actor });
					}
					break;
				case "attacked":
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["기록자극받음자신"], { "time":time });
					} else {
						return translateText(cardTexts["target"]["기록자극받음"], { "time":time, "actor":actor });
					}
					break;
				case "excite":
					if(obj[5] == 'up') {
						if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
							return translateText(cardTexts["target"]["기록흥분증가자신"], { "time":time });
						} else {
							return translateText(cardTexts["target"]["기록흥분증가"], { "time":time, "actor":actor });
						}
					}
					if(obj[5] == 'down') {
						if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
							return translateText(cardTexts["target"]["기록흥분감소자신"], { "time":time });
						} else {
							return translateText(cardTexts["target"]["기록흥분감소"], { "time":time, "actor":actor });
						}
					}
					break;
				case "lewd":
					if(obj[5] == 'up') {
						return translateText(cardTexts["target"]["기록음란증가"], { "time":time });
					}
					if(obj[5] == 'down') {
						return translateText(cardTexts["target"]["기록음란감소"], { "time":time });
					}
					break;
				case "estrus":
					if(obj[5] == 'up') {
						return translateText(cardTexts["target"]["기록발정증가"], { "time":time });
					}
					if(obj[5] == 'down') {
						return translateText(cardTexts["target"]["기록발정감소"], { "time":time });
					}
					break;
				case "get":
					if(typeof obj[5] === 'object') {
						cards = cardTypeText(obj[5], getWord("카드"));
					} else if(obj[5] == 'length') {
						cards = getWord("카드");
					}
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["기록획득자신"], { "time":time, "cards":cards });
					} else {
						return translateText(cardTexts["target"]["기록획득"], { "time":time, "cards":cards, "actor":actor });
					}
					break;
				case "getState":
					if(typeof obj[5] === 'object') {
						cards = cardTypeText(obj[5], getWord("상태"));
					} else if(obj[5] == 'length') {
						cards = getWord("상태");
					}
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["기록획득자신"], { "time":time, "cards":cards });
					} else {
						return translateText(cardTexts["target"]["기록획득"], { "time":time, "cards":cards, "actor":actor });
					}
					break;
				case "gain":
					switch(obj[5]) {
					case "lust":
						return translateText(cardTexts["target"]["기록욕망획득"], { "time":time });
						break;
					case "wetness":
						return translateText(cardTexts["target"]["기록젖음획득"], { "time":time });
						break;
					case "sBlock":
						return translateText(cardTexts["target"]["기록감각차단획득"], { "time":time });
						break;
					case "corrupt":
						return translateText(cardTexts["target"]["기록타락획득"], { "time":time });
						break;
					}
					break;
				case "consumeLust":
					return translateText(cardTexts["target"]["기록소모한욕망"], { "time":time });
					break;
				case "avoid":
					if((!reverse && obj[0] == "self") || (reverse && obj[0] == "op")) {
						return translateText(cardTexts["target"]["기록회피자신"], { "time":time });
					} else {
						return translateText(cardTexts["target"]["기록회피"], { "time":time, "actor":actor });
					}
					break;
				case "expiredSpell":
					if(obj[5] == "length") {
						cards = getWord("마술");
					} else {
						if(obj[5].args[0] == "all") {
							cards = getWord("마술");
						}
						if(obj[5].args[0] == "id") {
							cards = "<b>["+cardDB[obj[5].args[1]].name[language].replace(/ /g, '&nbsp;')+"]</b>";
						}
						if(obj[5].args[0] == "name") {
							cards = "<b>["+obj[5].args[1]+"]</b>";
						}
						if(obj[5].args[0] == "type") {
							cards = getWord(obj[5].args[1])+" "+getWord("마술");
						}
						if(obj[5].args[0] == "rarity") {
							cards = getWord(obj[5].args[1])+" "+getWord("마술");
						}
						if(obj[5].args[0] == "tags") {
        					cards = cardTagName(obj[5].args[1], getWord("마술"));
						}
						if(obj[5].func == "selectCards") {
							if(obj[5].args[2] == "all") {
								cards = translateText(cardTexts["target"]["카드전부"], { "cards":cards });
							} else {
								cards = translateText(cardTexts["target"]["카드들"], { "cards":cards, "amount":obj[5].args[2] });
							}
						}
					}
					return translateText(cardTexts["target"]["기록만료마술"], { "time":time, "cards":cards });
					break;
				}
				break;
			}
		}		

		if(obj[0] == "original") {
			return getWord("원본")

			switch(obj[1]) {
			case "id":
				
				break;
			case "type":
				return translateText(cardTexts["target"]["기록소모한욕망"], { "card":getWord("원본"), "category":getWord("종류") });
				break;
			}
		}

		if(obj[0] == "spellSlot") {
			if(obj[1].args) {
				return translateText(cardTexts["target"]["마술슬롯"], { "cards":cardTypeText(obj[1], "") });
			} else {
				let _checkBattle = document.getElementById('battlePart')?.style.display != 'none';
				switch(obj[1]) {
					case "instant": return spellSlot[0] && _checkBattle?`<b>[${spellSlot[0].name[language]}]</b>`:`${getWord("즉발")} ${getWord("마술")}`; break;
					case "chant": return spellSlot[1] && _checkBattle?`<b>[${spellSlot[1].name[language]}]</b>`:`${getWord("영창")} ${getWord("마술")}`; break;
					case "focused": return spellSlot[2] && _checkBattle?`<b>[${spellSlot[2].name[language]}]</b>`:`${getWord("집중")} ${getWord("마술")}`; break;
				}
			}
		}

		switch(obj[0]) {
		case "lewd": return `<b>${getWord("음란")}</b>`; break;
		case "real_lewd": return `<b>${getWord("실제음란")}</b>`; break;
		case "estrus": return `<b>${getWord("발정")}</b>`; break;
		case "real_estrus": return `<b>${getWord("실제발정")}</b>`; break;
		case "round": return getWord("라운드"); break;
		case "consumeLust": return `${translateText(cardTexts["target"]["소모한욕망"])}`; break;
		case "selfCard": return "self"; break;
		case "derived": return getWord("파생"); break;
		case "posture": return `<b>${getWord("체위")}</b>`; break;
		case "lust": return `<b>${getWord("욕망")}</b>`; break;
		case "wetness": return `<b>${getWord("젖음")}</b>`; break;
		case "stack": return `*${card.stack}*`; break;
		case "sBlock": return `<b>${getWord("감각차단")}</b>`; break;
		case "delayedEx": return `<b>${getWord("지연흥분")}</b>`; break;
		case "corrupt": return `<b>${getWord("타락")}</b>`; break;

		case "specialV02": return nelson; break;
		case "specialV04": return `*${magicMissile}*`; break;
		case "specialV05": return `${translateText(cardTexts["special"]["specialV05"], { })}`; break;
		case "specialV06": return `${translateText(cardTexts["special"]["specialV06"], { })}`; break;
		case "specialV07": return `${translateText(cardTexts["special"]["specialV07"], { })}`; break;
		case "specialV08": return `${spore}`; break;
		case "specialV08-1": return `${real_spore}`; break;
		case "specialV09": return `${translateText(cardTexts["special"]["specialV09"], { amount:returnText("specialV09", card.owner) })}`; break;
        case "specialV10": return `*${vitality}*`; break;
		}

	}

	function numberToString(num) {
		if(typeof num === 'number') {
			let txt = "";
			const ten = Math.floor(num/10);
			const one = Math.floor(num%10);
			switch(ten) {
			case 1:
				txt = "열"
				break;
			case 2:
				txt = "스물"
				break;
			case 3:
				txt = "서른"
				break;
			case 4:
				txt = "마흔"
				break;
			case 5:
				txt = "쉰"
				break;
			case 6:
				txt = "예순"
				break;
			case 7:
				txt = "일흔"
				break;
			case 8:
				txt = "여든"
				break;
			case 9:
				txt = "아흔"
				break;
			}
			switch(one) {
			case 1:
				txt += "한"
				break;
			case 2:
				txt += "두"
				break;
			case 3:
				txt += "세"
				break;
			case 4:
				txt += "네"
				break;
			case 5:
				txt += "다섯"
				break;
			case 6:
				txt += "여섯"
				break;
			case 7:
				txt += "일곱"
				break;
			case 8:
				txt += "여덟"
				break;
			case 9:
				txt += "아홉"
				break;
			}

			return txt;
		} else {
			return num;
		}
	}

	let lastEffect = null;
	const preAdverb = ["그리고"];

	function conditionText(cond, trigger = "") {
		let text = "";
		if(typeof cond === 'string') {
			let v = stringObjectify(cond);
			let vText = objToText(v, 0);
			text += translateText(cardTexts["condition"]["존재"], { "object":vText });
		} else if(typeof cond === 'object') {
		    let v1 = stringObjectify(cond.v1);
		    let v2 = stringObjectify(cond.v2);

		    let v1text = objToText(v1, 0);
		    let v2text = objToText(v2, 1);

		    if((cond.op == "==" && cond.v2 === true) || (cond.op == "!=" && cond.v2 === false)) {
		    	text += translateText(cardTexts["condition"]["존재"], { "object":v1text });
		    }
		    if((cond.op == "==" && cond.v2 === false) || (cond.op == "!=" && cond.v2 === true)) {
		    	text += translateText(cardTexts["condition"]["비존재"], { "object":v1text });
		    }

			if(v1[0] == "round") {
				switch(cond.op) {
				case "==":
					if(trigger == 'turnEnd') {
						text += translateText(cardTexts["condition"]["라운드일치종료시"], { "amount":v2text });
					} else if(trigger == 'turnStart') {
						text += translateText(cardTexts["condition"]["라운드일치시작시"], { "amount":v2text });
					} else {
						text += translateText(cardTexts["condition"][card.type == "특성"?"라운드일치특성":(typeof v2text === 'number'?"라운드일치숫자":"라운드일치값")], { "amount":v2text });
					}
					break;
				case ">":
					text += translateText(cardTexts["condition"][card.type == "특성"?"라운드초과특성":(typeof v2text === 'number'?"라운드초과숫자":"라운드초과값")], { "amount":v2text });
					break;
				case "<":
					text += translateText(cardTexts["condition"][card.type == "특성"?"라운드미만특성":(typeof v2text === 'number'?"라운드미만숫자":"라운드미만값")], { "amount":v2text });
					break;
				case ">=":
					text += translateText(cardTexts["condition"][card.type == "특성"?"라운드이상특성":(typeof v2text === 'number'?"라운드이상숫자":"라운드이상값")], { "amount":v2text });
					break;
				case "<=":
					text += translateText(cardTexts["condition"][card.type == "특성"?"라운드이하특성":(typeof v2text === 'number'?"라운드이하숫자":"라운드이하값")], { "amount":v2text });
					break;
				case "!=":
					text += translateText(cardTexts["condition"][card.type == "특성"?"라운드불일치특성":(typeof v2text === 'number'?"라운드불일치숫자":"라운드불일치값")], { "amount":v2text });
					break;
				case "in":
					if(trigger == 'turnEnd') {
						text += translateText(cardTexts["condition"]["라운드포함종료시"], { "amount":v2text });
					} else if(trigger == 'turnStart') {
						text += translateText(cardTexts["condition"]["라운드포함시작시"], { "amount":v2text });
					} else {
						text += translateText(cardTexts["condition"][card.type == "특성"?"라운드포함특성":"라운드포함"], { "amount":v2text });
					}
					break;
				}
			}
			if(typeDeck.includes(v1[0])) {
				switch(cond.op) {
				case "==": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["덱카드없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"덱카드일치숫자":"덱카드일치값"], { "target":v1text, "amount":v2text });
					}
					break;
				case ">": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["덱카드있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"덱카드초과숫자":"덱카드초과값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "<": 
					if(typeof v2text === 'number' && v2[0] <= 1) {
						text += translateText(cardTexts["condition"]["덱카드없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"덱카드미만숫자":"덱카드미만값"], { "target":v1text, "amount":v2text });
					}
					break;
				case ">=": 
					if(typeof v2text === 'number' && v2[0] == 1) {
						text += translateText(cardTexts["condition"]["덱카드있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"덱카드이상숫자":"덱카드이상값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "<=": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["덱카드없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"덱카드이하숫자":"덱카드이하값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "!=": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["덱카드있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"덱카드불일치숫자":"덱카드불일치값"], { "target":v1text, "amount":v2text });
					}
					break;
				}
			}

			if(v1[1] == 'state') {
				switch(cond.op) {
				case "==": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["상태없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"상태일치숫자":"상태일치값"], { "target":v1text, "amount":v2text });
					}
					break;
				case ">": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["상태있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"상태초과숫자":"상태초과값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "<": 
					if(typeof v2text === 'number' && v2[0] <= 1) {
						text += translateText(cardTexts["condition"]["상태없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"상태미만숫자":"상태미만값"], { "target":v1text, "amount":v2text });
					}
					break;
				case ">=": 
					if(typeof v2text === 'number' && v2[0] == 1) {
						text += translateText(cardTexts["condition"]["상태있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"상태이상숫자":"상태이상값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "<=": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["상태없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"상태이하숫자":"상태이하값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "!=": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["상태있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"상태불일치숫자":"상태불일치값"], { "target":v1text, "amount":v2text });
					}
					break;
				}
			}

			if(typeStat.includes(v1[0]) || typeStat.includes(v1[1])) {
				switch(cond.op) {
				case "==": text += translateText(cardTexts["condition"]["값일치"], { "target":v1text, "amount":v2text }); break;
				case ">": text += translateText(cardTexts["condition"]["값초과"], { "target":v1text, "amount":v2text }); break;
				case "<": text += translateText(cardTexts["condition"]["값미만"], { "target":v1text, "amount":v2text }); break;
				case ">=": text += translateText(cardTexts["condition"]["값이상"], { "target":v1text, "amount":v2text }); break;
				case "<=": text += translateText(cardTexts["condition"]["값이하"], { "target":v1text, "amount":v2text }); break;
				case "!=": text += translateText(cardTexts["condition"]["값불일치"], { "target":v1text, "amount":v2text }); break;
				}
			}

			if(v1[1] == "effectActive") {
				let owner, state;
				switch(v1[0]) {
				case "player": owner = getWord("도전자"); break;
				case "enemy": owner = getWord("챔피언"); break;
				case "op": owner = reverse?"":getWord("상대"); break;
				case "self": owner = reverse?getWord("상대"):""; break;
				}

				if((!reverse && v1[0] == "self") || (reverse && v1[0] == "op")) {
					text += translateText(cardTexts["target"]["효과발동자신"], { });
				} else {
					text += translateText(cardTexts["target"]["효과발동"], { "actor":owner });
				}
			}

			if(v1[1] == "action") {
				switch(cond.op) {
				case "==": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["낸카드없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"낸카드일치숫자":"낸카드일치값"], { "target":v1text, "amount":v2text });
					}
					break;
				case ">": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["낸카드있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"낸카드초과숫자":"낸카드초과값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "<": 
					if(typeof v2text === 'number' && v2[0] <= 1) {
						text += translateText(cardTexts["condition"]["낸카드없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"낸카드미만숫자":"낸카드미만값"], { "target":v1text, "amount":v2text });
					}
					break;
				case ">=": 
					if(typeof v2text === 'number' && v2[0] == 1) {
						text += translateText(cardTexts["condition"]["낸카드있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"낸카드이상숫자":"낸카드이상값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "<=": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["낸카드없음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"낸카드이하숫자":"낸카드이하값"], { "target":v1text, "amount":v2text });
					}
					break;
				case "!=": 
					if(typeof v2text === 'number' && v2[0] == 0) {
						text += translateText(cardTexts["condition"]["낸카드있음"], { "target":v1text });
					} else {
						text += translateText(cardTexts["condition"][typeof v2text === 'number'?"낸카드불일치숫자":"낸카드불일치값"], { "target":v1text, "amount":v2text });
					}
					break;
				}
			}
			if(v1[1] == "record") {
				let time, actor;
				switch(v1[0]) {
				case "player": actor = getWord("도전자"); break;
				case "enemy": actor = getWord("챔피언"); break;
				case "op": actor = reverse?"":getWord("상대"); break;
				case "self": actor = reverse?getWord("상대"):""; break;
				}
				switch(v1[2]) {
				case "all":
					time = ""//translateText(cardTexts["target"]["결투동안"], {});
					break;
				case "thisTurn":
					time = translateText(cardTexts["target"]["이번라운드"], {});
					break;
				case "lastTurn":
					time = translateText(cardTexts["target"]["이전라운드"], {});
					break;
				case "recentTurn":
					time = translateText(cardTexts["target"]["최근라운드"], {});
					break;
				}

				let _eventType, target;
				var tempText = v2text;
				if(!isNaN(tempText)) {
					if(v1[3] != "event" || v1[4] == "get" || v1[4] == "expiredSpell") {
						tempText = translateText(cardTexts["target"]["횟수카드"], { "amount":tempText });
					} else if(v1[4] == "getState") {
						tempText = translateText(cardTexts["target"]["횟수상태"], { "amount":tempText });
					} else if(v1[4] == "excite") {
						tempText = tempText;
					} else {
						tempText = translateText(cardTexts["target"]["횟수숫자"], { "amount":tempText });
					}
					
				} else {
					if(["==", "!="].includes(cond.op)) {
						tempText = translateText(cardTexts["target"]["횟수값"], { "amount":tempText });
					}
				}
				if(v1[3] == "event") {
					switch(v1[4]) {
					case "attack":
						_eventType = "자극";
						break;
					case "attacked":
						_eventType = "자극받음";
						break;
					case "orgasm":
						_eventType = "절정";
						break;
					case "avoid":
						_eventType = "회피";
						break;
					case "excite":
					case "get":
					case "getState":
					case "expiredSpell":
					case "consumeLust":
						target = v1text
						_eventType = "횟수";
						break;
					}
				} else {
					_eventType = "횟수";
					target = v1text
				}

				if(v1[3] != "event" || v1[4] == "get" || v1[4] == "getState" || v1[4] == "expiredSpell" || v1[4] == "consumeLust" || v1[4] == "excite") {
					switch(cond.op) {
					case "==": 
						if(typeof v2text !== 'number' || v2[0] != 0) {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}일치`], { "target":target, "amount":tempText });
						} else {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}부정`], { "target":target });
						}
						break;
					case ">":
						if(typeof v2text !== 'number' || v2[0] != 0) {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}초과`], { "target":target, "amount":tempText });
						} else {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}`], { "target":target });
						}
						break;
					case "<":
						if(typeof v2text !== 'number' || v2[0] > 1) {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}미만`], { "target":target, "amount":tempText });
						} else {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}부정`], { "target":target });
						}
						break;
					case ">=": 
						if(typeof v2text !== 'number' || v2[0] > 1) {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}이상`], { "target":target, "amount":tempText });
						} else {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}`], { "target":target });
						}
						break;
					case "<=":
						if(typeof v2text !== 'number' || v2[0] >= 1) {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}이하`], { "target":target, "amount":tempText });
						} else {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}부정`], { "target":target });
						}
						break;
					case "!=":
						if(typeof v2text !== 'number' || v2[0] != 0) {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}불일치`], { "target":target, "amount":tempText });
						} else {
							text += translateText(cardTexts["condition"][`이벤트${_eventType}`], { "target":target });
						}
						break;
					}
				} else {
					switch(cond.op) {
					case "==": 
						if(typeof v2text !== 'number' || v2[0] != 0) {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신일치`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}일치`], { "time":time, "actor":actor, "amount":tempText });
							}
						} else {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신부정`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}부정`], { "time":time, "actor":actor, "amount":tempText });
							}
						}
						break;
					case ">":
						if(typeof v2text !== 'number' || v2[0] != 0) {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신초과`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}초과`], { "time":time, "actor":actor, "amount":tempText });
							}
						} else {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신`], { "time":time });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}`], { "time":time, "actor":actor });
							}
						}
						break;
					case "<":
						if(typeof v2text !== 'number' || v2[0] > 1) {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신미만`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}미만`], { "time":time, "actor":actor, "amount":tempText });
							}
						} else {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신부정`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}부정`], { "time":time, "actor":actor, "amount":tempText });
							}
						}
						break;
					case ">=": 
						if(typeof v2text !== 'number' || v2[0] > 1) {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신이상`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}이상`], { "time":time, "actor":actor, "amount":tempText });
							}
						} else {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신`], { "time":time });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}`], { "time":time, "actor":actor });
							}
						}
						break;
					case "<=":
						if(typeof v2text !== 'number' || v2[0] >= 1) {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신이하`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}이하`], { "time":time, "actor":actor, "amount":tempText });
							}
						} else {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신부정`], { "time":time });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}부정`], { "time":time, "actor":actor });
							}
						}
						break;
					case "!=":
						if(typeof v2text !== 'number' || v2[0] != 0) {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신불일치`], { "time":time, "amount":tempText });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}불일치`], { "time":time, "actor":actor, "amount":tempText });
							}
						} else {
							if(v1[0] == "self") {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}자신`], { "time":time });
							} else {
								text += translateText(cardTexts["condition"][`이벤트${_eventType}`], { "time":time, "actor":actor });
							}
						}
						break;
					}
				}
			}

			if(v1[0] == "stack") {
				switch(cond.op) {
				case "==": text += translateText(cardTexts["condition"]["강화일치"], { "amount":v2text }); break;
				case ">": text += translateText(cardTexts["condition"]["강화초과"], { "amount":v2text }); break;
				case "<": text += translateText(cardTexts["condition"]["강화미만"], { "amount":v2text }); break;
				case ">=": text += translateText(cardTexts["condition"]["강화이상"], { "amount":v2text }); break;
				case "<=": text += translateText(cardTexts["condition"]["강화이하"], { "amount":v2text }); break;
				case "!=": text += translateText(cardTexts["condition"]["강화불일치"], { "amount":v2text }); break;
				}
			}

			if(v1[0] == "original") {
				var _card;
				switch(v1[1]) {
				case "id":
					_card = `<b>[${cardDB[cond.v2].name[language]}]</b>`;
					break;
				case "type":
					_card = `${getWord(cond.v2)} ${getWord("카드")}`;
					break;
				case "tags":
					_card = cardTagName(cond.v2);
					break;
				}

				if(cond.op == "==") {
					text += translateText(cardTexts["condition"][`원본일치`], { "card":_card });
				}
				if(cond.op == "!=") {
					text += translateText(cardTexts["condition"][`원본불일치`], { "card":_card });
				}
			}
		}

		return text;
	}

	function effectText(e, outside=false, index=null) {
		if(e.notext || (e.type == "caption" && !checkCondition(e.cond, 0)) || e.type == "line" || e.type == "changeCond" || e.type == "changeFace" || e.type == "shake" || e.type == "clothes") {
			return "";
		}

		let text = "";
		let lineWrap = e.keepLine?false:true;

		if(e.inDeck && !(lastEffect && lastEffect.inDeck)) {
			text += translateText(cardTexts["effect"]["헤더"], { "value":getWord("소지") });
		} else if(e.trigger == "always" && e.type != "corrupt" && (!card.tags || !card.tags.includes("독"))) {
			text += translateText(cardTexts["effect"]["헤더"], { "value":getWord("지속") });
		}

		if(card.tags && card.tags.includes("정수") && e.trigger != "always" && !e.adverb) {
			text += translateText(cardTexts["effect"]["헤더"], { "value":getWord("정수") });
		}

		switch(card.expiration) {
		case "always":
			//text += "결투 동안 "
			break;
		case "turnEnd":
			if(!["caption", "showValue"].includes(e.type) && (!card.tags || !card.tags.includes("독"))){
				if(e.trigger == "expired") {
					text += translateText(cardTexts["trigger"]["n라운드후"], { "amount":card.duration });
				} else {
					if(card.duration == 1) {
						var check = false;
						for(let e of effect) {
							if(e.trigger != "turnEnd") {
								check = true;
							}
						}
						if(check) {
							text += translateText(cardTexts["trigger"]["이라운드"]);
						}
					} else if(card.duration == 2) {
						text += translateText(cardTexts["trigger"]["다음라운드"]);
					} else {
						text += translateText(cardTexts["trigger"]["n라운드"], { "amount":card.duration });
					}
				}
			}
			break;
		}

		if(e.adverb && preAdverb.includes(e.adverb)) {
			text += e.adverb + " ";
		}

		if(outside && card.expiration == "active" && !e.expireOmit && !["caption", "showValue"].includes(e.type)) {
			if(card.duration == 1) {
				if(card.type == "특성") {
					text += translateText(cardTexts["trigger"]["처음으로"]);
				} else {
					text += translateText(cardTexts["trigger"]["다음으로"]);
				}
			} else if(card.duration > 1) {
				if(card.type == "특성") {
					text += translateText(cardTexts["trigger"]["처음n번"], { "duration":card.duration });
				} else {
					text += translateText(cardTexts["trigger"]["다음n번"], { "duration":card.duration });
				}
			}
		}

		if(!e.triggerOmit && !(lastEffect && lastEffect.trigger == e.trigger)) {
			switch(e.trigger) {
			case "gameStart":
				text += translateText(cardTexts["trigger"]["결투시작시"]);
				break;
			case "turnStart":
				if(!(e.cond.v1 == "라운드" && e.cond.op == "==" || e.cond.op == "in")) {
					text += translateText(cardTexts["trigger"]["라운드시작시"]);
				}
				break;
			case "turnEnd":
				if(!(e.cond.v1 == "라운드" && (e.cond.op == "==" || e.cond.op == "in"))) {
					text += translateText(cardTexts["trigger"]["라운드종료시"]);
				}
				break;
			case "get":
				text += translateText(cardTexts["trigger"]["획득시"]);
				break;
			case "getPs":
				text += translateText(cardTexts["trigger"]["체위획득시"]);
				break;
			case "exPs":
				text += translateText(cardTexts["trigger"]["체위상실시"]);
				break;
			case "getAndExPs":
				text += translateText(cardTexts["trigger"]["체위획득상실시"]);
				break;
			case "transformed":
				text += translateText(cardTexts["trigger"]["변형될시"]);
				break;
			case "combined":
				text += translateText(cardTexts["trigger"]["결합될시"]);
				break;
			case "orgasm":
				text += translateText(cardTexts["trigger"]["절정시"]);
				break;
			case "orgasmAny":
				text += translateText(cardTexts["trigger"]["누군가절정시"]);
				break;
			case "discarded":
				text += translateText(cardTexts["trigger"]["버려질시"]);
				break;
			case "expired":
				if(card.expiration == "active" || card.cast !== undefined) {
					text += translateText(cardTexts["trigger"]["만료시"]);
				}
				break;
			case "discardCard":
				text += translateText(cardTexts["trigger"]["버릴시"]);
				break;
			case "attack":
				text += translateText(cardTexts["trigger"]["자극시"]);
				break;
			case "attacked":
				text += translateText(cardTexts["trigger"]["자극받을시"]);
				break;
			case "enemyAttacked":
				text += translateText(cardTexts["trigger"]["상대자극받을시"]);
				break;
			case "someAttacked":
				text += translateText(cardTexts["trigger"]["누군가자극받을시"]);
				break;
			case "avoid":
				text += translateText(cardTexts["trigger"]["회피시"]);
				break;
			case "useCard":
				text += translateText(cardTexts["trigger"]["사용시"]);
				break;
			case "useAttack":
				text += translateText(cardTexts["trigger"]["공격사용시"]);
				break;
			case "useSupport":
				text += translateText(cardTexts["trigger"]["보조사용시"]);
				break;
			case "usePosture":
				text += translateText(cardTexts["trigger"]["체위사용시"]);
				break;
			case "usePenalty":
				text += translateText(cardTexts["trigger"]["패널티사용시"]);
				break;
			case "useShootCard":
				text += translateText(cardTexts["trigger"]["사격사용시"]);
				break;
			case "useCardOp":
				text += translateText(cardTexts["trigger"]["상대사용시"]);
				break;
			case "useAttackOp":
				text += translateText(cardTexts["trigger"]["상대공격사용시"]);
				break;
			case "useSupportOp":
				text += translateText(cardTexts["trigger"]["상대보조사용시"]);
				break;
			case "usePostureOp":
				text += translateText(cardTexts["trigger"]["상대체위사용시"]);
				break;
			case "usePenaltyOp":
				text += translateText(cardTexts["trigger"]["상대패널티사용시"]);
				break;
			case "useCardPlayer":
				text += translateText(cardTexts["trigger"]["도전자사용시"]);
				break;
			case "useAttackPlayer":
				text += translateText(cardTexts["trigger"]["도전자공격사용시"]);
				break;
			case "useSupportPlayer":
				text += translateText(cardTexts["trigger"]["도전자보조사용시"]);
				break;
			case "usePosturePlayer":
				text += translateText(cardTexts["trigger"]["도전자체위사용시"]);
				break;
			case "usePenaltyPlayer":
				text += translateText(cardTexts["trigger"]["도전자패널티사용시"]);
				break;
			case "useCardEnemy":
				text += translateText(cardTexts["trigger"]["챔피언사용시"]);
				break;
			case "useAttackEnemy":
				text += translateText(cardTexts["trigger"]["챔피언공격사용시"]);
				break;
			case "useSupportEnemy":
				text += translateText(cardTexts["trigger"]["챔피언보조사용시"]);
				break;
			case "usePostureEnemy":
				text += translateText(cardTexts["trigger"]["챔피언체위사용시"]);
				break;
			case "usePenaltyEnemy":
				text += translateText(cardTexts["trigger"]["챔피언패널티사용시"]);
				break;
			case "useCardAny":
				text += translateText(cardTexts["trigger"]["누군가사용시"]);
				break;
			case "useAttackAny":
				text += translateText(cardTexts["trigger"]["누군가공격사용시"]);
				break;
			case "useSupportAny":
				text += translateText(cardTexts["trigger"]["누군가보조사용시"]);
				break;
			case "usePostureAny":
				text += translateText(cardTexts["trigger"]["누군가체위사용시"]);
				break;
			case "usePenaltyAny":
				text += translateText(cardTexts["trigger"]["누군가패널티사용시"]);
				break;
			case "useCreatedCard":
				text += translateText(cardTexts["trigger"]["생성사용시"]);
				break;
			case "getCard":
				text += translateText(cardTexts["trigger"]["카드획득시"]);
				break;
			case "getPenalty":
				text += translateText(cardTexts["trigger"]["패널티획득시"]);
				break;
			case "transformCard":
				text += translateText(cardTexts["trigger"]["카드변형시"]);
				break;
			case "spellExpired":
				text += translateText(cardTexts["trigger"]["마술만료시"]);
				break;
			case "combineCard":
				text += translateText(cardTexts["trigger"]["결합시"]);
				break;
			case "overheal":
				text += translateText(cardTexts["trigger"]["초과치유시"]);
				break;

			case "count":
				if(true/*!(e.adverb && preAdverb.includes(e.adverb))*/) {
					text += translateText(cardTexts["effect"]["헤더값"], { "value":getWord("카운트"), "amount":card.duration });
				}
				break;
			}
		}

		if(e.cond !== true && !e.default && !e.condOmit) {
			text += conditionText(e.cond, e.trigger);
		}

		let repeatText = "";
		let repeatType = "";
	    if(e.repeat && e.repeat != 1) {
		    let repeat = stringObjectify(e.repeat);
			repeatText = objToText(repeat, 1);
			if(!isNaN(repeatText) || /^\*\d+\*$/.test(repeatText)) {
				repeatType = "constant";
				if(e.type == "get" || e.type == "poisonAdd") {
					repeatText = translateText(cardTexts["target"][`횟수카드`], { "amount":repeatText });
				} else if(e.op != "set") {
					repeatText = translateText(cardTexts["target"][`횟수숫자`], { "amount":repeatText });
				}
			} else {
				repeatType = "specific";
				if(repeatText.endsWith(getWord("카드")) || repeatText.endsWith(getWord("]</b>"))) {
					repeatText = translateText(cardTexts["target"][`수량`], { "target":repeatText });
				}
				if(e.op != "set") {
					repeatText = translateText(cardTexts["target"][`횟수값`], { "amount":repeatText });
				}
			}
		}

		if(e.adverb && !preAdverb.includes(e.adverb)) {
			text += e.adverb + " ";
		}

		var eValue, eValueText;
		if(e.value !== undefined) {
			eValue = stringObjectify(e.value);
			eValueText = objToText(eValue, 1);
			if(e.additional) {
				eValueText = `${eValueText}${e.additional>=0?'+':''}${e.additional}`
			}
			if(e.multiple) {
				eValueText = `${eValueText}×${e.multiple}`
			}
			if(e.division) {
				let realValue = e.value == "stack"?card.stack:returnText(e.value, card.owner);
				eValueText = e.division==2?`${eValueText}의 절반<span style="color: gray;"><i>(${Math.floor(realValue/2)})</i></span>`:`${eValueText}/${e.division} <span style="color: gray;"><i>(${Math.floor(realValue/e.division)})</i></span>`
			}
		}

		function changeValueText(value, op, amount, repeat, modified = 0) {
			let txt = "";
			if(typeof amount !== "number" && amount.endsWith(getWord("카드"))) {
				amount = translateText(cardTexts["target"][`수량`], { "target":amount });
			}
			switch(op) {
			case "add":
				if(typeof amount === "number") {
					if(amount == 0) {
						return false;
					}
					txt += translateText(cardTexts["effect"][amount>0?"증가숫자":"감소숫자"], { "value":value, "amount":modified?amount+modified:amount, "repeat":repeat });
				} else {
					if(amount.endsWith(getWord("카드"))) {
						amount = translateText(cardTexts["target"][`수량`], { "target":amount });
					}
					txt += translateText(cardTexts["effect"]["증가값"], { "value":value, "amount":amount });
					if(repeat) {
						txt += "<br>" + translateText(cardTexts["effect"]["반복"], { "repeat":repeat });
					}
				}
				break;
			case "subtract":
				if(typeof amount === "number") {
					if(amount == 0) {
						return false;
					}
					txt += translateText(cardTexts["effect"][amount>0?"감소숫자":"증가숫자"], { "value":value, "amount":modified?-amount-modified:-amount, "repeat":repeat });
				} else {
					txt += translateText(cardTexts["effect"]["감소값"], { "value":value, "amount":amount });
					if(repeat) {
						txt += "<br>" + translateText(cardTexts["effect"]["반복"], { "repeat":repeat });
					}
				}
				break;
			case "multiply":
				if(Number.isInteger(e.value)) {
					if(amount == 1) {
						return false;
					}
					txt += translateText(cardTexts["effect"]["배수숫자"], { "value":value, "amount":amount });
					if(repeat) {
						txt += "<br>" + translateText(cardTexts["effect"]["반복"], { "repeat":repeat });
					}
				}
				break;
			case "set":
				if(typeof amount === "number") {
					txt += translateText(cardTexts["effect"]["지정숫자"], { "value":value, "amount":amount });
				} else {
					if(repeat) {
						if(isNaN(repeat)) {
							repeat = translateText(cardTexts["target"]["반복배수값"], { "repeat":repeat });
						} else {
							repeat = translateText(cardTexts["target"]["반복배수숫자"], { "repeat":repeat });
						}
						
						txt += translateText(cardTexts["effect"]["지정숫자"], { "value":value, "amount":amount });
					} else {
						txt += translateText(cardTexts["effect"]["지정값"], { "value":value, "amount":amount });
					}
				}
				break;
			}
			return txt;
		}

		function choiceRange(range) {
			var _card = "";
			var _cardText = "";
			switch(range.category) {
			case "all":
				_card = "카드";
				break;
			case "id":
				_card = "<b>["+cardDB[range.value].name[language].replace(/ /g, '&nbsp;')+"]</b>";
				break;
			case "name":
				_card = "<b>["+range.value+"]</b>";
				break;
			case "type":
				_card = range.value + " " + getWord("카드");
				break;
			case "rarity":
				_card = range.value + " " + getWord("카드");
				break;
			case "class":
				_card = range.value + " " + getWord("카드");
				break;
			case "tags":
				_card = cardTagName(range.value);
				break;
			case "mix":
				_card = "정수 카드를 포함해";
				break;
			}
			if(range.count == 'all') {
				_card = translateText(cardTexts["target"]["카드전부"], { "cards":_card })
			} else if(typeof range.count === 'string' && range.count.startsWith('M')) {
				_card = translateText(cardTexts["target"]["카드들"], { "cards":_card, "amount":`${getWord("최대")} ${range.count.slice(1)}` })
			} else if(range.count > 1) {
				_card = translateText(cardTexts["target"]["카드들"], { "cards":_card, "amount":range.count })
			}
			return _card;
		}

		let owner, _changeText, _modified = 0;
		let actorObj = card.owner == 0?enemy:player;
		switch(e.type) {
		case "text":
			text += e.value[language];
			break;
		case "caption":
			text += '<span style="color: gray;"><i>('+e.value[language]+")</i></span>";
			break;
		case "showValue":
			if(document.getElementById('battlePart')?.style.display != 'none') {
				var _value = returnText(e.value, card.owner);
				if(e.repeat) {
					_value *= e.repeat;
				}
				if(e.maxValue) {
					_value = Math.min(_value, e.maxValue);
				}
				text += `<span style="color: gray;"><i>(${getWord("현재")}&nbsp;${_value})</i></span>`;
			} else {
				return "";
			}
			break;
		case "estrus":
			if(typeof eValueText === "number") {
				if((e.op == "add" && eValueText > 0) || (e.op == "subtract" && eValueText < 0)) {
					_modified = player.modifier.estrus.add;
				}
				if((e.op == "add" && eValueText < 0) || (e.op == "subtract" && eValueText > 0)) {
					_modified = -player.modifier.estrus.subtract;
				}
			}
			_changeText = changeValueText(`<b>${getWord("발정")}</b>`, e.op, eValueText, repeatText, _modified);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
		case "lewd":
			if(typeof eValueText === "number") {
				if((e.op == "add" && eValueText > 0) || (e.op == "subtract" && eValueText < 0)) {
					_modified = player.modifier.lewd.add;
				}
				if((e.op == "add" && eValueText < 0) || (e.op == "subtract" && eValueText > 0)) {
					_modified = -player.modifier.lewd.subtract;
				}
			}
			_changeText = changeValueText(`<b>${getWord("음란")}</b>`, e.op, eValueText, repeatText, _modified);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
		case "estrusAndLewd":
			let _modifiedL = 0;
			let _modifiedE = 0;
			if(typeof eValueText === "number") {
				if((e.op == "add" && eValueText > 0) || (e.op == "subtract" && eValueText < 0)) {
					_modifiedL = player.modifier.lewd.add;
					_modifiedE = player.modifier.estrus.add;
				}
				if((e.op == "add" && eValueText < 0) || (e.op == "subtract" && eValueText > 0)) {
					_modifiedL = -player.modifier.lewd.subtract;
					_modifiedE = -player.modifier.estrus.subtract;
				}
			}
			if(_modifiedE == _modifiedL) {
				_changeText = changeValueText(`<b>${getWord("음란과 발정")}</b>`, e.op, eValueText, repeatText, _modified);
			} else {
				_changeText = changeValueText(`<b>${getWord("음란")}</b>`, e.op, eValueText, repeatText, _modifiedL) + "<br>" + changeValueText(`<b>${getWord("발정")}</b>`, e.op, eValueText, repeatText, _modifiedE);
			}
			
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
		case "excite":
			switch(e.target) {
			case "player": owner = getWord("도전자"); break;
			case "enemy": owner = getWord("챔피언"); break;
			case "op": owner = reverse?"":getWord("상대"); break;
			case "self": owner = reverse?getWord("상대"):""; break;
			}
			if(typeof eValueText === "number") {
				let targetObj = e.target == "enemy" || (e.target == "op" && card.owner == 1) || (e.target == "self" && card.owner == 0)?enemy:player;
				if((e.op == "add" && eValueText > 0) || (e.op == "subtract" && eValueText < 0)) {
					_modified = targetObj.modifier.excite.add;
				}
				if((e.op == "add" && eValueText < 0) || (e.op == "subtract" && eValueText > 0)) {
					_modified = -targetObj.modifier.excite.subtract;
				}
			}
			if(e.target == "self") {
				_changeText = changeValueText(`<b>${getWord("흥분")}</b>`, e.op, eValueText, repeatText, _modified);
				if(!_changeText) {
					return "";
				}
				text += _changeText;
			} else {
				_changeText = changeValueText(translateText(cardTexts["target"]["스탯"], { "owner":owner, "stat":`<b>${getWord("흥분")}</b>` }), e.op, eValueText, repeatText, _modified);
				if(!_changeText) {
					return "";
				}
				text += _changeText;
			}
			break;
		case "exciteL":
			switch(e.target) {
			case "player": owner = getWord("도전자"); break;
			case "enemy": owner = getWord("챔피언"); break;
			case "op": owner = reverse?"":getWord("상대"); break;
			case "self": owner = reverse?getWord("상대"):""; break;
			}
			if(typeof eValueText === "number") {
				let targetObj = e.target == "enemy" || (e.target == "op" && card.owner == 1) || (e.target == "self" && card.owner == 0)?enemy:player;
				if((e.op == "add" && eValueText > 0) || (e.op == "subtract" && eValueText < 0)) {
					_modified = targetObj.modifier.exciteL.add;
				}
				if((e.op == "add" && eValueText < 0) || (e.op == "subtract" && eValueText > 0)) {
					_modified = -targetObj.modifier.exciteL.subtract;
				}
			}
			if(e.target == "self") {
				_changeText = changeValueText(`<b>${getWord("흥분 한계")}</b>`, e.op, eValueText, repeatText, _modified);
				if(!_changeText) {
					return "";
				}
				text += _changeText;
			} else {
				_changeText = changeValueText(translateText(cardTexts["target"]["스탯"], { "owner":owner, "stat":`<b>${getWord("흥분 한계")}</b>` }), e.op, eValueText, repeatText, _modified);
				if(!_changeText) {
					return "";
				}
				text += _changeText;
			}
			break;
		case "orgasm":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?getWord("자신"):getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):getWord("자신"); break;
			}
			text += translateText(cardTexts["effect"]["절정"], { "target":_target, "repeat1":repeatType == "specific"?repeatText:"", "repeat2":repeatType == "constant"?repeatText:"" });
			break;
		case "orgasmL":
			switch(e.target) {
			case "player": owner = getWord("도전자"); break;
			case "enemy": owner = getWord("챔피언"); break;
			case "op": owner = reverse?"":getWord("상대"); break;
			case "self": owner = reverse?getWord("상대"):""; break;
			}
			if(typeof eValueText === "number") {
				let targetObj = e.target == "enemy" || (e.target == "op" && card.owner == 1) || (e.target == "self" && card.owner == 0)?enemy:player;
				if((e.op == "add" && eValueText > 0) || (e.op == "subtract" && eValueText < 0)) {
					_modified = targetObj.modifier.orgasmL.add;
				}
				if((e.op == "add" && eValueText < 0) || (e.op == "subtract" && eValueText > 0)) {
					_modified = -targetObj.modifier.orgasmL.subtract;
				}
			}
			if(e.target == "self") {
				_changeText = changeValueText(`<b>${getWord("절정 한계")}</b>`, e.op, eValueText, repeatText, _modified);
				if(!_changeText) {
					return "";
				}
				text += _changeText;
			} else {
				_changeText = changeValueText(translateText(cardTexts["target"]["스탯"], { "owner":owner, "stat":`<b>${getWord("절정 한계")}</b>` }), e.op, eValueText, repeatText, _modified);
				if(!_changeText) {
					return "";
				}
				text += _changeText;
			}
			break;
		case "attack":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?getWord("자신"):getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):getWord("자신"); break;
			}
			text += translateText(cardTexts["effect"]["자극"], { "target":_target, "repeat1":repeatType == "specific"?repeatText:"", "repeat2":repeatType == "constant"?repeatText:"" });
			break;
		case "state":
			if(e.byname) {
				switch(e.target) {
				case "player": owner = getWord("도전자"); break;
				case "enemy": owner = getWord("챔피언"); break;
				case "op": owner = reverse?getWord("자신"):getWord("상대"); break;
				case "self": owner = reverse?getWord("상대"):getWord("자신"); break;
				}
				var _stateName = `<b>[${cardDB[e.value].name[language].replace(/ /g, '&nbsp;')}]</b>`;
				if(e.target == "self") {
					text += translateText(cardTexts["effect"]["상태부여이름"], { "target":owner, "state":_stateName, "repeat":repeatText });
				} else {
					text += translateText(cardTexts["effect"]["상태부여이름"], { "target":owner, "state":_stateName, "repeat":repeatText });
				}
				/*if(e.value == 'MA-ST-002') {
					text += `<br><span style=\"color: gray;\"><i>(${createCardText(cardDB[e.value])})</i></span>`
				}*/
				
			} else {
				if(e.value.startsWith("random")) {
					let _getState = "";
					_getState += getWord("무작위")+" ";
					const regex = /\(([^)]+)\)/;
				    const found = e.value.match(regex);
				    if (found && found[1]) {
				        const values = found[1].split(',').map(item => item.trim());
						if(values[0] == "tags") {
							_getState += cardTagName(values[1], "");
						}
				    }
					switch(e.target) {
					case "player": owner = getWord("도전자"); break;
					case "enemy": owner = getWord("챔피언"); break;
					case "op": owner = reverse?getWord("자신"):getWord("상대"); break;
					case "self": owner = reverse?getWord("상대"):getWord("자신"); break;
					}
				    text += translateText(cardTexts["effect"]["상태부여이름"], { "target":owner, "state":_getState, "repeat":repeatText });
				} else {
					const st = cardDB[e.value];
					text += createCardText(st, e.target == "op");
				}
			}
			break;
		case "posture":
			if(e.value == "remove") {
				text += translateText(cardTexts["effect"]["체위삭제"], {  });
			} else if(card.isDeck) {
				return "";//text += translateText(cardTexts["effect"]["체위부여"], {  });
			} else {
				return "";
			}
			break;
		case "get":
			let _getcard = "";
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if(e.trigger == "choice") {
				_getcard = choiceRange(e.range);
				text += translateText(cardTexts["effect"]["덱카드선택획득"], { "card":_getcard, "repeat":repeatText });
			} else {
				if(e.value.startsWith("random")) {
					_getcard += getWord("무작위")+" ";
					const regex = /\(([^)]+)\)/;
				    const found = e.value.match(regex);
				    if (found && found[1]) {
				        const values = found[1].split(',').map(item => item.trim());
						if(values[0] == "all") {
							_getcard += getWord("카드");
						}
						if(values[0] == "class") {
							_getcard += getWord(values[1]) + " " + getWord("카드");
						}
						if(values[0] == "type") {
							_getcard += getWord(values[1]) + " " + getWord("카드");
						}
						if(values[0] == "rarity") {
							_getcard += getWord(values[1]) + " " + getWord("카드");
						}
						if(values[0] == "tags") {
							_getcard += cardTagName(values[1]);
						}
				    }
				} else if(e.value == "self") {
	        		_getcard += translateText(cardTexts["target"]["복사본"], { "card":getWord("재귀파생") });
				} else if(e.value == "derived") {
	        		_getcard += translateText(cardTexts["target"]["복사본"], { "card":getWord("파생") });
				} else if(e.value == "original") {
	    			if(card.original) {
	    				_getcard += `<b>[${card.original.name[language].replace(/ /g, '&nbsp;')}]</b>`;
	    			} else {
	        			_getcard += getWord("원본")//translateText(cardTexts["target"]["복사본"], { "card":getWord("원본") });
	        		}
				} else if(e.value == "originals") {
	    			if(card.originals) {
	    				_getcard += card.originals.filter(org => !org.tags.includes("정수")).map(cd => `<b>[${cd.name[language].replace(/ /g, '&nbsp;')}]</b>`).join(", ");
	    			} else {
	        			_getcard += getWord("소재")//translateText(cardTexts["target"]["복사본"], { "card":getWord("원본") });
	        		}
				} else if(typeof e.value === 'string' && e.value.includes("-")) {
					const newCard = cardDB[e.value];
					_getcard += '<b>['+newCard.name[language].replace(/ /g, '&nbsp;')+']</b>';
				} else if(e.value.startsWith("자기덱") || e.value.startsWith("상대덱") || e.value.startsWith("덱") || e.value.startsWith("챔피언덱")) {
					_getcard += translateText(cardTexts["target"]["복사본"], { "card":eValueText });
				} else {
					_getcard += eValueText;
				}

				if(e.target == "player" || e.target == "enemy" || (!reverse && e.target == "op") || (reverse && e.target == "self")) {
					text += translateText(cardTexts["effect"]["덱카드추가"], { "target":_target, "card":_getcard, "repeat":repeatText });
				} else {
					text += translateText(cardTexts["effect"]["덱카드획득"], { "card":_getcard, "repeat":repeatText });
				}
			}
			break;
		case "defeat":
			if(e.cond === true) {
				text += getWord("즉시")+" ";
			}
			text += translateText(cardTexts["effect"]["패배"]);
			break;
		case "victory":
			text += translateText(cardTexts["effect"]["승리"]);
			break;
		case "maxUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if(e.target == "self") {
				text += translateText(cardTexts["effect"]["추가카드자신"], { "amount":eValueText });
			} else {
				text += translateText(cardTexts["effect"]["추가카드"], { "target":_target, "amount":eValueText });
			}
			
			break;
		case "lust":
			if(typeof e.info.value === 'string' && e.info.value.startsWith("M")) {
				text += translateText(cardTexts["effect"]["헤더값"], { value:getWord("욕망"), amount:`${getWord("최대")} ${e.info.value.slice(1)}` });
			} else {
				text += translateText(cardTexts["effect"]["헤더값"], { value:getWord("욕망"), amount:typeof e.info.value === "number"?e.info.value:getWord(e.info.value) });
			}
			for(let le of e.info.effect) {
				text += effectText(le);
			}
			if(repeatText) {
				text += translateText(cardTexts["effect"]["반복"], { "repeat":repeatText });
			}
			break;
		case "wetness":
			text += translateText(cardTexts["effect"]["헤더값"], { value:getWord("젖음"), amount:typeof e.info.value === "number"?e.info.value:getWord(e.info.value) });
			for(let we of e.info.effect) {
				text += effectText(we);
			}
			if(repeatText) {
				text += translateText(cardTexts["effect"]["반복"], { "repeat":repeatText });
			}
			break;
		case "corrupt":
			if(typeof e.info.value === 'string' && e.info.value.startsWith("M")) {
				text += translateText(cardTexts["effect"]["헤더값"], { value:getWord(e.trigger=="always"?"지속 타락":"타락"), amount:`${e.info.value.slice(1)} ${getWord("이하")}` });
			} else {
				text += translateText(cardTexts["effect"]["헤더값"], { value:getWord(e.trigger=="always"?"지속 타락":"타락"), amount:typeof e.info.value === "number"?e.info.value:getWord(e.info.value) });
			}
			for(let we of e.info.effect) {
				text += effectText(we);
			}
			if(repeatText) {
				text += translateText(cardTexts["effect"]["반복"], { "repeat":repeatText });
			}
			break;
		case "discard":
			var _card;
			if(e.trigger == "choice") {
				_card = choiceRange(e.range);
				text += translateText(cardTexts["effect"]["선택버리기"], { "card":_card });
			} else {
				_card = objToText(stringObjectify(e.info.target));
				text += translateText(cardTexts["effect"]["버리기"], { "card":_card });
			}
			break;
		case "remove":
			var _state;
			_state = objToText(stringObjectify(e.info.target));
			text += translateText(cardTexts["effect"]["제거하기"], { "state":_state });
			break;
		case "use":
        	let usedAction;
        	if(typeof e.value === 'string') {
	        	if(e.value.startsWith("random")) {
					_card = getWord("무작위")+" ";
					const regex = /\(([^)]+)\)/;
				    const found = e.value.match(regex);
				    if (found && found[1]) {
				        const values = found[1].split(',').map(item => item.trim());
						if(values[0] == "class") {
							_card += getWord(values[1]) + " " + getWord("카드");
						}
						if(values[0] == "type") {
							_card += getWord(values[1]) + " " + getWord("카드");
						}
						if(values[0] == "rarity") {
							_card += getWord(values[1]) + " " + getWord("카드");
						}
						if(values[0] == "tags") {
							_card += cardTagName(values[1]);
						}
				    }
				} else if(e.value == "self") {
	        		_card = getWord("재귀파생")
				} else if(e.value == "original") {
	    			if(card.original) {
	    				_card = `<b>[${card.original.name[language].replace(/ /g, '&nbsp;')}]</b>`;
	    			} else {
	        			_card = getWord("원본");
	        		}
				} else if(e.value == "originals") {
	    			if(card.originals) {
	    				_card = card.originals.filter(org => !org.tags.includes("정수")).map(cd => `<b>[${cd.name[language].replace(/ /g, '&nbsp;')}]</b>`).join(", ");
	    			} else {
	        			_card = getWord("소재");
	        		}
				} else if(e.value.includes("-")) {
					const newCard = cardDB[e.value];
					_card = '<b>['+newCard.name[language].replace(/ /g, '&nbsp;')+']</b>';
				} else {
					_card = eValueText;
				}
			} else {
				_card = '<b>['+e.value.name[language].replace(/ /g, '&nbsp;')+']</b>';
			}
			if(e.trigger == "choice") {
				var tCard;
	        	tCard = choiceRange(e.range);
	        	text += translateText(cardTexts["effect"]["선택사용"], { "select":tCard, "card":_card, "repeat":repeatText });
	        } else {
				text += translateText(cardTexts["effect"]["사용"], { "card":_card, "repeat":repeatText });
	        }
        	break;
        case "changeLust":
			_changeText = changeValueText(`<b>${getWord("욕망")}</b>`, e.op, eValueText, repeatText);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
        	break;
		case "changeWetness":
			_changeText = changeValueText(`<b>${getWord("젖음")}</b>`, e.op, eValueText, repeatText);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
		case "changeSBlock":
			_changeText = changeValueText(`<b>${getWord("감각차단")}</b>`, e.op, eValueText, repeatText);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
		case "changeDelayedEx":
			_changeText = changeValueText(`<b>${getWord("지연흥분")}</b>`, e.op, eValueText, repeatText);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
		case "changeCorrupt":
			_changeText = changeValueText(`<b>${getWord("타락")}</b>`, e.op, eValueText, repeatText);
			if(!_changeText) {
				return "";
			}
			text += _changeText;
			break;
        case "effect":
        	let _effectTexts = "";
        	let _specialText = false;
        	let _amount;
        	var _card;

        	for(let addEf of e.info.effect) {
        		if(addEf.type == "specialA03") {
        			_effectTexts = getWord("무작위");
        			_specialText = true;
        			break;
        		}
        		_effectTexts += effectText(addEf)+"<br>";
        	}

			if(e.trigger == "choice") {
				_card = choiceRange(e.range);
				text += translateText(cardTexts["effect"]["선택효과추가"], { "card":_card, "effect":_effectTexts, "repeat":repeatText });
			} else {
				var tValue = stringObjectify(e.info.target);
				if(e.info.target.startsWith("id:")) {
					_card = `모든 <b>[${cardDB[e.info.target.slice(3)].name[language]}]</b>`
				} else {
	        		_card = objToText(tValue, 1);
				}
	        	if(_specialText) {
	        		text += translateText(cardTexts["effect"]["특별한효과추가"], { "card":_card, "effect":_effectTexts, "repeat":repeatText });
	        	} else {
		        	if(_card == "self") {
		        		text += translateText(cardTexts["effect"]["효과추가"], { "card":getWord("재귀파생"), "effect":_effectTexts, "repeat":repeatText });
		        	} else {
		        		text += translateText(cardTexts["effect"]["효과추가"], { "card":_card, "effect":_effectTexts, "repeat":repeatText });
		        	}
		        }
			}
        	break;
		case "poison":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?getWord("자신"):getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):getWord("자신"); break;
			}
			if(e.value.startsWith("randomCard")) {
				text += translateText(cardTexts["effect"]["독부여무작위"], { "target":_target, "repeat":repeatText });
			} else {
				text += translateText(cardTexts["effect"]["독부여지정"], { "target":_target, "poison":"<b>["+cardDB[e.value].name[language]+"]</b>", "repeat":repeatText });
				if(e.value == "AS-PO-004-1") {
					let remainRepeat = cardDB["AS-PO-004-1"].maxStack;
					if(enemy.state.some(st => st.id == "AS-PO-004-1")) {
						remainRepeat -= enemy.state.find(st => st.id == "AS-PO-004-1").stack;
					}
					//text += "<br><span style=\"color: gray;\"><i>("+translateText(cardTexts["effect"]["헤더"], { "value":getWord("독") }) + translateText(cardTexts["special"]["specialA07_2"], { "stack":remainRepeat } )+")</i></span>";
				} else {
					//text += "<br><span style=\"color: gray;\"><i>("+createCardText(cardDB[e.value])+")</i></span>";
				}
			}
			break;
		case "poisonAdd":
			var _value;
			if(e.value.startsWith("random")) {
				_value = `${getWord("무작위")} ${getWord("제조")} ${getWord("카드")}`
			} else if(cardDB[e.value]) {
				_value = `<b>[${cardDB[e.value].name[language]}]</b>`;
			}
			text += translateText(cardTexts["effect"]["독추가"], { "value":_value, "repeat":repeatText });
			break;
		case "count":
			/*if(e.trap == "all") {
				_target = translateText(cardTexts["target"]["모든트랩"])
				if(typeof eValueText === "number") {
					text += translateText(cardTexts["effect"]["카운트지정감소숫자"], { "target":_target, "amount":eValueText, "repeat":repeatText });
				} else {
					text += translateText(cardTexts["effect"]["카운트지정감소값"], { "target":_target, "amount":eValueText, "repeat":repeatText });
				}
			} else {*/
				if(typeof eValueText === "number") {
					text += translateText(cardTexts["effect"]["카운트감소숫자"], { "amount":eValueText, "repeat":repeatText });
				} else {
					text += translateText(cardTexts["effect"]["카운트감소값"], { "amount":eValueText, "repeat":repeatText });
				}
			//}
			break;
		case "maintained":
			//text += "사용한 카드가 사라지지 않는다.";
			break;
		case "useTimes":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if(e.target == "self") {
				text += translateText(cardTexts["effect"]["반복발동자신"], { "amount":eValueText });
			} else {
				text += translateText(cardTexts["effect"]["반복발동"], { "target":_target, "amount":eValueText });
			}
			break;
        case "duration":
        	var tValue = stringObjectify(e.info.target);
			if(e.info.target.startsWith("id:")) {
				_card = `모든 <b>[${cardDB[e.info.target.slice(3)].name[language]}]</b>`
			} else {
        		_card = objToText(tValue, 1);
			}
			var dValue = stringObjectify(e.info.value);
			var dValueText = objToText(dValue, 1);
        	text += translateText(cardTexts["effect"][e.info.value>0?"증가숫자":"감소숫자"], { "value":translateText(cardTexts["target"]["지속시간"], { "target":_card }), "amount":dValueText, "repeat":repeatText });
        	break;
        case "transform":
        	var tCard, oCard = "";
    		if(e.info.value.startsWith("random")) {
				oCard += getWord("무작위")+" ";
				const regex = /\(([^)]+)\)/;
			    const found = e.info.value.match(regex);
			    if (found && found[1]) {
			        const values = found[1].split(',').map(item => item.trim());
					if(values[0] == "class") {
						oCard += getWord(values[1]) + " " + getWord("카드");
					}
					if(values[0] == "type") {
						oCard += getWord(values[1]) + " " + getWord("카드");
					}
					if(values[0] == "rarity") {
						oCard += getWord(values[1]) + " " + getWord("카드");
					}
					if(values[0] == "tags") {
						oCard += cardTagName(values[1]);
					}
			    }
			} else if(e.info.value == "original") {
				oCard = getWord("원본");
			} else if(typeof e.info.value === 'string' && e.info.value.includes("-")) {
				const newCard = cardDB[e.info.value];
				oCard = '<b>['+newCard.name[language].replace(/ /g, '&nbsp;')+']</b>';
			} else {
				oCard = objToText(stringObjectify(e.info.value), 1);
			}


    		if(e.info.target == "self") {
        		if(e.info.value == "original") {
        			if(card.original) {
        				text += translateText(cardTexts["effect"]["복구"], { "target":card.original.name[language].replace(/ /g, '&nbsp;') });
        			} else {
        				text += translateText(cardTexts["effect"]["복구"], { "target":getWord("원본") });
	        		}
        		} else {
        			text += translateText(cardTexts["effect"]["재귀변형"], { "object":oCard });
        		}
        	} else {
				if(e.trigger == "choice") {
	        		tCard = choiceRange(e.range);
					text += translateText(cardTexts["effect"]["선택변형"], { "card":tCard, "object":oCard });
				} else {
	        		tCard = objToText(stringObjectify(e.info.target));
	        		text += translateText(cardTexts["effect"]["변형"], { "target":tCard, "object":oCard });
				}
        	}
        	break;
        case "combine":
        	var tCard;
			if(e.trigger == "choice") {
	        	tCard = choiceRange(e.range);
				text += translateText(cardTexts["effect"]["선택결합"], { "card":tCard });
			} else {
        		tCard = objToText(stringObjectify(e.info.target));
        		text += translateText(cardTexts["effect"]["결합"], { "target":tCard });
			}
			if(repeatText) {
				text += '<br>' + translateText(cardTexts["effect"]["반복"], { "repeat":repeatText });
			}
        	break;
        case "immune":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["면역자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["면역"], { "actor":_target });
			}
        	break;
        case "actBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["카드사용불가자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["카드사용불가"], { "actor":_target });
			}
        	break;
        case "attackBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["공격사용불가자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["공격사용불가"], { "actor":_target });
			}
        	break;
        case "supportBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["보조사용불가자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["보조사용불가"], { "actor":_target });
			}
        	break;
        case "postureBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["체위사용불가자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["체위사용불가"], { "actor":_target });
			}
        	break;
        case "unclothBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["탈의사용불가자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["탈의사용불가"], { "actor":_target });
			}
        	break;
        case "penaltyBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["패널티사용불가자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["패널티사용불가"], { "actor":_target });
			}
        	break;
        case "attackMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["공격강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["공격강제사용"], { "actor":_target });
			}
        	break;
        case "supportMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["보조강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["보조강제사용"], { "actor":_target });
			}
        	break;
        case "postureMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["체위강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["체위강제사용"], { "actor":_target });
			}
        	break;
        case "unclothMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["탈의강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["탈의강제사용"], { "actor":_target });
			}
        	break;
        case "penaltyMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["패널티강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["패널티강제사용"], { "actor":_target });
			}
        	break;
        case "combinationMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["결합물강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["결합물강제사용"], { "actor":_target });
			}
        	break;
        case "boundMustUse":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["결속강제사용자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["결속강제사용"], { "actor":_target });
			}
        	break;
        case "maxRound":
        	text += translateText(cardTexts["effect"]["최대라운드"], { "amount":(e.value>=0)?"+"+e.value:e.value });
        	break;
        case "maxDeck":
        	text += `<b>${getWord("덱크기")} ${e.value>=0?"+":""}${e.value}</b>`
        	break;
        case "modifier":
        	let _stat;
        	if(e.target) {
				switch(e.target) {
				case "player": _target = getWord("도전자"); break;
				case "enemy": _target = getWord("챔피언"); break;
				case "op": _target = reverse?"":getWord("상대"); break;
				case "self": _target = reverse?getWord("상대"):""; break;
				}
				_stat = objToText(stringObjectify(`${e.target}.${e.stat}`));
        	} else {
        		_stat = objToText(stringObjectify(e.stat));
        	}
        	if(e.op == "add") {
        		text += translateText(cardTexts["effect"]["추가증가"], { "stat":_stat, "amount":e.value })
        	}
        	if(e.op == "subtract") {
        		text += translateText(cardTexts["effect"]["추가감소"], { "stat":_stat, "amount":e.value })
        	}
        	break;
        case "steal":
        	var cards = objToText(stringObjectify(e.value));
        	text += translateText(cardTexts["effect"]["강탈"], { "cards":cards })
        	break;

        case "mustIn":
        	switch(e.range.category) {
        	case "type":
        	case "rarity":
        	case "tags":
        		_card = cardTagName(e.range.value);
        		break;
        	}
        	text += translateText(cardTexts["effect"]["덱포함필수"], { "card":_card, "amount":e.range.count })
        	break;
        case "ban":
        	switch(e.range.category) {
        	case "type":
        	case "rarity":
        	case "tags":
        		_card = cardTagName(e.range.value);
        		break;
        	}
        	if(e.range.value <= 1) {
        		text += translateText(cardTexts["effect"]["덱포함금지"], { "card":_card })
        	} else {
        		text += translateText(cardTexts["effect"]["덱포함수량"], { "card":_card, "amount":e.range.count })
        	}
        	break;
        case "minLewd":
        	text += translateText(cardTexts["effect"]["최저음란"], { "amount":e.value })
        	break;
        case "maxLewd":
        	text += translateText(cardTexts["effect"]["최대음란"], { "amount":e.value })
        	break;
        case "minEstrus":
        	text += translateText(cardTexts["effect"]["최저발정"], { "amount":e.value })
        	break;
        case "maxEstrus":
        	text += translateText(cardTexts["effect"]["최대발정"], { "amount":e.value })
        	break;
        case "startLust":
        	text += translateText(cardTexts["effect"]["시작욕망"], { "amount":e.value })
        	break;
        case "enemyDisable":
        	text += translateText(cardTexts["effect"]["챔피언비활성화"], { })
        	break;
        case "enemyAttackDisable":
        	text += translateText(cardTexts["effect"]["챔피언공격비활성화"], { })
        	break;
        case "unclothDisable":
        	text += translateText(cardTexts["effect"]["탈의비활성화"], { })
        	break;
        case "penaltyDisable":
        	text += translateText(cardTexts["effect"]["패널티비활성화"], { })
        	break;
        case "poisonDisable":
        	text += translateText(cardTexts["effect"]["독비활성화"], { })
        	break;
        case "spellDisable":
        	text += translateText(cardTexts["effect"]["마술비활성화"], { })
        	break;
        case "lustBan":
        	text += translateText(cardTexts["effect"]["욕망금지"], { })
        	break;
        case "maxLust":
        	text += translateText(cardTexts["effect"]["욕망제한"], { "amount":e.value })
        	break;
        case "wetnessBan":
        	text += translateText(cardTexts["effect"]["젖음금지"], { })
        	break;
        case "avoidBan":
        	text += translateText(cardTexts["effect"]["회피금지"], { })
        	break;
        case "startSBlock":
        	text += translateText(cardTexts["effect"]["시작감각차단"], { "amount":e.value })
        	break;
        case "sBlockBan":
        	text += translateText(cardTexts["effect"]["감각차단금지"], { })
        	break;
        case "maxSBlock":
        	text += translateText(cardTexts["effect"]["감각차단제한"], { "amount":e.value })
        	break;
        case "startCorrupt":
        	text += translateText(cardTexts["effect"]["시작타락"], { "amount":e.value })
        	break;
        case "useLimit":
        	text += translateText(cardTexts["effect"]["최대사용"], { "amount":e.value })
        	break;
        case "stack":
        	var tValue = stringObjectify(e.info.target);
			if(e.info.target.startsWith("id:")) {
				var _cardData = cardDB[e.info.target.slice(3)];
				_card = `${_cardData.type == "특성"?"":"모든 "}<b>[${_cardData.name[language]}]</b>`
			} else if(e.info.target == "self" || e.info.target == "selfCard") {
				_card = 'self';
			} else {
        		_card = objToText(tValue, 1);
			}
			switch(e.op) {
			case "add":
				text += translateText(cardTexts["effect"]["스택"], { "card":_card=="self"?getWord("재귀파생"):_card, "amount":eValueText })
				break;
			case "reset":
				text += translateText(cardTexts["effect"]["스택초기화"], { "card":_card=="self"?getWord("재귀파생"):_card })
				break;
			}
        	
        	break;
        case "orgasmBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["절정금지자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["절정금지"], { "actor":_target });
			}
        	break;
        case "suppression":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["억압자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["억압"], { "actor":_target });
			}
        	break;
        case "insensitive":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["무감자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["무감"], { "actor":_target });
			}
        	break;
        case "absorption":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["정기흡수자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["정기흡수"], { "actor":_target });
			}
        	break;
        case "changeSpell":
			var oCard = "";
			if(e.value.startsWith("random")) {
				oCard += getWord("무작위")+" ";
				const regex = /\(([^)]+)\)/;
			    const found = e.value.match(regex);
			    if (found && found[1]) {
			        const values = found[1].split(',').map(item => item.trim());
					if(values[0] == "tags") {
						oCard += cardTagName(values[1]);
					}
			    }
			} else if(cardDB[e.value]) {
				oCard = `<b>[${cardDB[e.value].name[language]}]</b>`;
			}
        	text += translateText(cardTexts["effect"]["마술교체"], { "slot":`${getWord(e.slot)}`, "card":oCard })
        	break;
        case "bound":
        	var tCard, oCard = "";
    		if(e.value.startsWith("random")) {
				oCard += getWord("무작위")+" ";
				const regex = /\(([^)]+)\)/;
			    const found = e.value.match(regex);
			    if (found && found[1]) {
			        const values = found[1].split(',').map(item => item.trim());
					if(values[0] == "class") {
						oCard += getWord(values[1]);
					}
					if(values[0] == "type") {
						oCard += getWord(values[1]);
					}
					if(values[0] == "rarity") {
						oCard += getWord(values[1]);
					}
					if(values[0] == "tags") {
						oCard += cardTagName(values[1], "");
					}
					oCard += " " + getWord("카드");
			    }
			} else if(typeof e.value === 'string' && e.value.includes("-")) {
				const newCard = cardDB[e.value];
				oCard = '<b>['+newCard.name[language].replace(/ /g, '&nbsp;')+']</b>';
			} else {
				oCard = objToText(stringObjectify(e.value), 1);
			}
			if(e.trigger == "choice") {
	        	tCard = choiceRange(e.range);
				text += translateText(cardTexts["effect"]["선택결속"], { "card":oCard, "target":tCard });
			} else {
        		tCard = objToText(stringObjectify(e.info.target));
        		text += translateText(cardTexts["effect"]["결속"], { "card":oCard, "target":tCard });
			}
        	break;
        case "healBan":
			switch(e.target) {
			case "player": _target = getWord("도전자"); break;
			case "enemy": _target = getWord("챔피언"); break;
			case "op": _target = reverse?"":getWord("상대"); break;
			case "self": _target = reverse?getWord("상대"):""; break;
			}
			if((!reverse && e.target == "self") || (reverse && e.target == "op")) {
				text += translateText(cardTexts["effect"]["치료금지자신"], { "actor":_target });
			} else {
				text += translateText(cardTexts["effect"]["치료금지"], { "actor":_target });
			}
        	break;

        case "specialA02":
        	text += translateText(cardTexts["special"]["specialA02"], { });
        	break;
        case "specialA04":
        	text += translateText(cardTexts["special"]["specialA04"], { });
        	break;
        case "specialA05":
        	text += translateText(cardTexts["special"]["specialA05"], { "repeat":repeatText, "trace":Math.min(trace, 3) });
        	break;
        case "specialA06":
        	text += translateText(cardTexts["special"]["specialA06"], { });
        	break;
        case "specialA07":
        	text += translateText(cardTexts["special"]["specialA07"], { "stack":(card.stack?card.stack:0), "maxStack":(card.maxStack?card.maxStack:0) });
        	break;
        case "specialA08":
        	text += translateText(cardTexts["special"]["specialA08"], { "count":Math.max(3 - miyeongUsedHelp.length, 0) });
        	break;
        case "specialA09":
        	text += translateText(cardTexts["special"]["specialA09"], { "repeat":repeatText });
        	break;
        case "specialA10":
        	text += translateText(cardTexts["special"]["specialA10"], {});
        	break;
        case "specialA11":
        	text += translateText(cardTexts["special"]["specialA11"], {});
        	break;
        case "specialA12":
        	text += translateText(cardTexts["special"]["specialA12"], {});
        	break;
        case "specialA13":
        	text += translateText(cardTexts["special"]["specialA13"], {});
        	break;
        case "specialA14":
        	text += translateText(cardTexts["special"]["specialA14"], {});
        	break;
        case "specialA15":
        	text += translateText(cardTexts["special"]["specialA15"], {});
        	break;
        case "specialA16":
        	text += translateText(cardTexts["special"]["specialA16"], {});
        	break;
        case "specialA17":
        	text += translateText(cardTexts["special"]["specialA17"], {});
        	break;
        case "specialA18":
        	text += translateText(cardTexts["special"]["specialA18"], {});
        	break;
        case "specialA19":
        	text += translateText(cardTexts["special"]["specialA19"], {});
        	break;
        case "specialA20":
        	text += translateText(cardTexts["special"]["specialA20"], { "value":e.value });
        	break;

        case "specialV08":
        	text += translateText(cardTexts["special"][e.trigger == "always"?"specialV08":"specialV08영구"], { "amount":eValueText });
        	break;
		}

		if(e.maxValue && e.type != "showValue" && e.value && typeof e.value !== 'number') {
			text += ' <span style="color: gray;"><i>(최대&nbsp;'+e.maxValue+")</i></span>";
		}
		if(e.maxRepeat && e.repeat && typeof e.repeat !== 'number') {
			text += ' <span style="color: gray;"><i>(최대&nbsp;'+e.maxRepeat+"번)</i></span>";
		}

		if(lineWrap) {
			text += "<br>";
		} else {
			text += " ";
		}

		if(e.type == "caption") {
			lastEffect = null;
		} else {
			lastEffect = e;
		}

		if(index == null) {
			return capitalizeFirst(text) + (lineWrap?"<br>":"");
		} else if(text != '') {
			return `<span class='text${index}'>${capitalizeFirst(text)}</span>${lineWrap?"<br>":""}`;
		}
	}

	if(card.tags && card.tags.includes("클라이맥스")) {
		text += translateText(cardTexts["effect"]["클라이맥스"], { }) + "<br>";
	}

	if(card.bound) {
		text += translateText(cardTexts["effect"]["결속됨"], { "card":card.bound.name[language] }) + "<br>";
	}

	if(card.cond === false) {
		text += translateText(cardTexts["condition"]["낼수없음"], {}) + "<br>";
	} else if(card.isDeck && card.cond !== true) {
		text += translateText(cardTexts["condition"]["낼수있음"], { "cond":conditionText(card.cond, card.expiration) }) + "<br>";
	}

	if(card.cast && card.tags && card.tags.includes("자동시전")) {
		if(card.cast == Infinity) {
			text += translateText(cardTexts["effect"]["영구시전"], { }) + "<br>";
		} else {
			text += translateText(cardTexts["effect"]["자동시전"], { "amount":card.cast }) + "<br>";
		}
	}

	if(card.tags && card.tags.includes("독")) {
		text += translateText(cardTexts["effect"]["헤더"], { "value":getWord("독") });
	}

	let index = 0;
	for(let e of effect) {
		text += effectText(e, true, index++);
	}

	if(card.tags && card.tags.includes("독") && card.expiration == "turnEnd") {
		text += ' <span style="color: gray;"><i>('+card.duration+"라운드 남음)</i></span>";
	}

	if(card.stack && card.stack >= 2) {
		text += '<span style="color: gray;"><i>('+card.stack+"회 중첩됨)</i></span>";
	}
	if(card.cast && (!card.tags || !card.tags.includes("자동시전")) && card.cast > 1) {
		text += translateText(cardTexts["effect"][card.cast==Infinity?"무한시전":"시전"], { "amount":card.cast });
	}

	if(["공격", "보조", "탈의", "마술", "비전", "정수", "패널티"].includes(card.type)) {
    	text = text.replace(/지속:/g, '');
	}

	if (text.startsWith('<br>')) {
        text = text.substring(4, text.length - 4);
    }
    text = text.replace(/(<br>){2,}/g, '<br>');
    text = text.replace(/<br>,/g, ',');
    text = text.replace(/<br>"/g, '"');
    text = text.replace(/<br><\//g, '</');
	if (text.endsWith('<br>')) {
        text = text.substring(0, text.length - 4);
    }

    for (let item of preAdverb) {
        const pattern = new RegExp('.<br>' + item, 'g');
        text = text.replace(pattern, ", "+item);
    }

    if(battleEnd == -1 && ((card.type == "패널티" && options.penaltyDisable) || (card.type == "탈의" && options.unclothDisable) || (card.isDeck && options.enemyDisable && card.owner == 0) || (card.type == "공격" && options.enemyAttackDisable && card.owner == 0) || (card.tags && card.tags.includes("독") && options.poisonDisable) || (card.tags && card.tags.includes("마술") && options.spellDisable))) {
    	text = `<s>${text}</s>`
    }

	return text;
}

/*
##########################################################################################################################################################################################
##########################################################################################################################################################################################
*/
function replaceWithPostposition(inputString) {
	const pattern = /\[([^\]]+)\/([^\]]+)\]/g;

	let output = inputString;
	let match;

	while ((match = pattern.exec(output)) !== null) {
		const baseString = output.slice(0, match.index);
		const value1 = match[1];
		const value2 = match[2];

		const replacement = selectPostposition(baseString, value1, value2);
		output = output.replace(match[0], replacement);
		pattern.lastIndex = 0;
	}
	return output;
}

function attachPostposition(string, value1, value2) {
    return string + selectPostposition(string, value1, value2);
}

function selectPostposition(string, value1, value2) {
	const str = string.toString().replace(/[^\d가-힣]/g, '');
	let lastChar = str.charAt(str.length - 1);

	let postposition;
	switch (lastChar) {
	case '0':
	case '1':
	case '3':
	case '6':
	case '7':
	case '8':
		if(value1 == '으로' && (lastChar == '1' || lastChar == '7' || lastChar == '8')) {
			postposition = value2;
		} else {
			postposition = value1;
		}
		break;
	case '2':
	case '4':
	case '5':
	case '9':
		postposition = value2;
		break;
	default:
	    const lastCharUnicode = lastChar.charCodeAt(0);

	    const HANGUL_START = 44032;
	    const HANGUL_END = 55203;

	    if (lastCharUnicode >= HANGUL_START && lastCharUnicode <= HANGUL_END) {
	        if((lastCharUnicode - HANGUL_START) % 28 !== 0 && !(value1 == '으로' && (lastCharUnicode - HANGUL_START) % 28 == 8)) {
	        	postposition = value1;
	        } else {
	        	postposition = value2;
	        }
	    } else {
	        postposition = value2;
	    }
	  break;
	}

	return `${postposition}`;
}

function deepCopy(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj;
    if (hash.has(obj)) return hash.get(obj);

    const result = new obj.constructor();
    hash.set(obj, result);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === 'bound' || key === 'original' || key === 'originals') {
                result[key] = obj[key];
            } else {
                result[key] = deepCopy(obj[key], hash);
            }
        }
    }

    return result;
}


let dazzled = false;

function addCard(div, deck) {
	const card = div;
	const id = card.getAttribute('data-id');
	let cardData = deepCopy(cardDB[id]);
	const block = card.parentElement;
	if(card.classList.contains("active")) {
		let index = deck.findIndex(obj => obj.id === id);
		if (index !== -1) {
		    deck.splice(index, 1);
		}
		card.classList.remove("active");
		point += cardDB[id].cost;
		if(card.querySelector("img.card-image-original")) {
			card.querySelector("img.card-image-original").style.opacity = "1";
		}
		if(block.querySelector("blockquote.hypnoTextQuote")) {
			if(block.querySelector("blockquote.flavorText")) {
				block.querySelector("blockquote.flavorText").style.filter = "";
			}
			block.querySelector("blockquote.hypnoTextQuote").style.filter = "blur(5px)";
		}
	} else {
		cardData.owner = 1;
		deck.push(cardData);
		card.classList.add("active");
		point -= cardDB[id].cost;
		if(card.querySelector("img.card-image-original")) {
			card.querySelector("img.card-image-original").style.opacity = "0";
		}
		if(block.querySelector("blockquote.hypnoTextQuote")) {
			if(block.querySelector("blockquote.flavorText")) {
				block.querySelector("blockquote.flavorText").style.filter = "blur(5px)";
			}
			block.querySelector("blockquote.hypnoTextQuote").style.filter = "";
		}
	}
	infoUpdate();
	cardStateUpdate();

	if(!dazzled) {
		let classInfo;
	    switch(choiceValues.class) {
	    case "전사":
	    	classInfo = document.getElementById("warriorInfo");
	    	break;
	    case "암살자":
	    	classInfo = document.getElementById("assassinInfo");
	    	break;
	    case "마술사":
	    	classInfo = document.getElementById("mageInfo");
	    	break;
	    case "치유사":
	    	classInfo = document.getElementById("healerInfo");
	    	break;
	    }
        const classInfoImgs = classInfo.querySelectorAll("img.classInfoImg");
        const classInfoImgSmalls = classInfo.querySelectorAll("img.classInfoImgSmall");
	    for(let i=0; i<4; i++) {
	    	classInfoImgs[i].src = classInfoImgs[i].src.replace("-real", "");
	    	classInfoImgs[i].style.display = "none";
	    	classInfoImgSmalls[i].src = classInfoImgSmalls[i].src.replace("-real", "");
	    	classInfoImgSmalls[i].style.display = "block";
	    }
	    dazzled = true;
	}
}

function addSpell(div) {
	const card = div;
	const id = card.getAttribute('data-id');
	let cardData = deepCopy(cardDB[id]);

	const spellCards = document.querySelectorAll('.spellCard');
	spellCards.forEach(function(cd) {
		const block = cd.parentElement;
		if(cd == div) {
			if(cd.classList.contains("active")) {
				spellSlot[selectedSpellSlot] = deepCopy(cardDB["MA-MG-000"]);
			} else {
				cardData.owner = 1;
				spellSlot[selectedSpellSlot] = cardData;
			}
		}
	})
	
	infoUpdate();
	cardStateUpdate();

	if(!dazzled) {
		let classInfo = document.getElementById("mageInfo");
        const classInfoImgs = classInfo.querySelectorAll("img.classInfoImg");
        const classInfoImgSmalls = classInfo.querySelectorAll("img.classInfoImgSmall");
	    for(let i=0; i<4; i++) {
	    	classInfoImgs[i].src = classInfoImgs[i].src.replace("-real", "");
	    	classInfoImgs[i].style.display = "none";
	    	classInfoImgSmalls[i].src = classInfoImgSmalls[i].src.replace("-real", "");
	    	classInfoImgSmalls[i].style.display = "block";
	    }
	    dazzled = true;
	}
}

function addEssence(div) {
	const card = div;
	const id = card.getAttribute('data-id');
	let cardData = deepCopy(cardDB[id]);

	if(essences.length < 5) {
		if(essences.length >= 2) {
			point -= 5;
		}
		essences.push(cardData);
		essenceUpdate();
	}
	
	infoUpdate();
	cardStateUpdate();

	if(!dazzled) {
		let classInfo = document.getElementById("healerInfo");
        const classInfoImgs = classInfo.querySelectorAll("img.classInfoImg");
        const classInfoImgSmalls = classInfo.querySelectorAll("img.classInfoImgSmall");
	    for(let i=0; i<4; i++) {
	    	classInfoImgs[i].src = classInfoImgs[i].src.replace("-real", "");
	    	classInfoImgs[i].style.display = "none";
	    	classInfoImgSmalls[i].src = classInfoImgSmalls[i].src.replace("-real", "");
	    	classInfoImgSmalls[i].style.display = "block";
	    }
	    dazzled = true;
	}
}

function removeEssence(div) {
	const card = div;
	const id = card.getAttribute('data-num');

	if(essences.length > 2) {
		point += 5;
	}
	essences.splice(id, 1);

	essenceUpdate();
	infoUpdate();
	cardStateUpdate();

}

function essenceUpdate() {
	document.getElementById('selectedEssence').innerHTML = '';
	for(let i=0; i<5; i++) {
		let cardDiv;
		if(essences[i]) {
			cardDiv = createCard(essences[i], 24, true, 5);
		} else {
			cardDiv = createCard(cardDB["HE-IN-000"], 24);
			cardDiv.classList.add("disabled");
		}
		cardDiv.setAttribute('data-num', i);
		document.getElementById('selectedEssence').appendChild(cardDiv);
	}
}

function checkNum(deck, category, value) {
	let count = 0;
	for(let card of deck) {
		if(card[category] == value) {
			count += 1;
		}
	}
	return count;
}

function cardStateUpdate() {
	function cardAddableCheck(card) {
		var _check = true;
		if(card.id == "DA-NT-ALL-000") {
			return true;
		}
		if(card.type == "특성") {
			if(countCard(player.state, "type", "특성") >= 4 && countCard(player.state, "id", "DA-NT-ALL-000") == 0) {
				_check = false;
			}
			card.effect.forEach(e => {
				if(e.trigger == "trait" && e.type == "ban") {
					let range = e.range;
					if(countCard(deck, range.category, range.value) + countCard(player.state, range.category, range.value) >= range.count) {
						_check = false;
					}
				}
				if(e.trigger == "trait" && e.type == "mustIn" && e.range.value != "정수") {
					let range = e.range;
					if(range.count - countCard(deck, range.category, range.value) > maxDeckSize - deck.length) {
						_check = false;
					}
				}
			});
		} else {
			for(let st of player.state) {
				st.effect.forEach(e => {
					if(e.trigger == "trait" && e.type == "ban") {
						let range = e.range;
						if(card[range.category] == range.value && countCard(deck, range.category, range.value)+1 >= range.count) {
							_check = false;
						}
					}
					if(e.trigger == "trait" && e.type == "mustIn" && e.range.value != "정수") {
						let range = e.range;
						if(card[range.category] != range.value && range.count - countCard(deck, range.category, range.value) >= maxDeckSize - deck.length) {
							_check = false;
						}
					}
				});
			}
			if(card.type == "비전" && countCard(deck, "type", "비전") >= 1) {
				_check = false;
			}
		}
		return _check;
	}

	useLimit = 5;
	maxRound = 8;
	maxUse = 1;
	maxUseE = 1;
	maxDeckSize = 10;
	minEstrus = 1;
	maxEstrus = Infinity;
	minLewd = 1;
	maxLewd= Infinity;
	maxLust = Infinity;
	maxWetness = Infinity;
	maxSBlock = Infinity;
	infinitePoint = false;
	lust = 0;
	wetness = 0;
	sBlock = 0;
	corrupt = 0;
	player.state.forEach(st => {
		st.effect.forEach(e => {
			if(e.trigger == "trait") {
				switch(e.type) {
				case "maxRound":
					maxRound += e.value;
					break;
				case "maxUse":
					if(e.target == "self" || e.target == "player") {
						maxUse += e.value;
					} else if(e.target == "op" || e.target == "enemy") {
						maxUseE += e.value;
					}
				case "maxDeck":
					maxDeckSize = Math.min(maxDeckSize + e.value, 99);
					break;
				case "minEstrus":
					minEstrus = e.value;
					break;
				case "maxEstrus":
					maxEstrus = e.value;
					break;
				case "minLewd":
					minLewd = e.value;
					break;
				case "maxLewd":
					maxLewd = e.value;
					break;
				case "maxLust":
					maxLust = e.value;
					break;
				case "maxWetness":
					maxWetness = e.value;
					break;
				case "maxSBlock":
					maxSBlock = e.value;
				case "startLust":
					lust += e.value;
					break;
				case "startWetness":
					wetness += e.value;
					break;
				case "startSBlock":
					sBlock += e.value;
					break;
				case "startCorrupt":
					corrupt += e.value;
					break;
        		case "useLimit":
        			useLimit = e.value;
        			break;
        		case "infinitePoint":
        			maxDeckSize = 99;
        			infinitePoint = true;
        			break;
				}
			}
		})
	})

	/*const allCards = document.getElementsByClassName("card")
	for(let card of allCards) {
		adjustCardFontSize(card);
	}*/

	const cards = document.getElementsByClassName("deckBuild");
	for(let card of cards) {
		const id = card.getAttribute('data-id')
		const data = cardDB[id];
		if(data) {
			if(!card.classList.contains("active") && (card.classList.contains("disabled") ^ ( (((data.type != "특성" && (data.tags.includes("덱빌딩") || data.tags.includes("보너스")) && deck.length >= maxDeckSize)) || !cardAddableCheck(data)) ) )) {
				card.classList.toggle("disabled");
			}
		}

		if(gamemode == 2 && id == "DA-NT-ALL-000") {
			if(!card.classList.contains("active")) {
				addCard(card, player.state);
			}
		}
	}

	const deckBuildResult = document.getElementById("deckBuildResult");
	const quickDeckConfirm = document.getElementById("quickDeckConfirm");
	if(deck.length == 0 && player.state.length == 0 && deckBuildResult.style.display != "none") {
		deckBuildResult.style.display = "none";
		//quickDeckConfirm.classList.add("disabled");
	}
	if((deck.length > 0 || player.state.length > 0) && deckBuildResult.style.display == "none") {
		deckBuildResult.style.display = "flex";
		//quickDeckConfirm.classList.remove("disabled");
	}
	const yourDeck = document.getElementById("yourDeck");
	if(deck.length == 0 && yourDeck.style.display != "none") {
		yourDeck.style.display = "none";
	}
	if(deck.length > 0 && yourDeck.style.display == "none") {
		yourDeck.style.display = "flex";
	}
	const yourState = document.getElementById("yourState");
	if(player.state.length == 0 && yourState.style.display != "none") {
		yourState.style.display = "none";
	}
	if(player.state.length > 0 && yourState.style.display == "none") {
		yourState.style.display = "flex";
	}
	const yourPoisonSac = document.getElementById("yourPoisonSac");
	if(poisonSac.length == 0 && yourPoisonSac.style.display != "none") {
		yourPoisonSac.style.display = "none";
	}
	if(poisonSac.length > 0 && yourPoisonSac.style.display == "none") {
		yourPoisonSac.style.display = "flex";
	}
	const yourSpellSlot = document.getElementById("yourSpellSlot");
	if(choiceValues.class != '마술사' && yourSpellSlot.style.display != "none") {
		yourSpellSlot.style.display = "none";
	}
	if(choiceValues.class == '마술사' && yourSpellSlot.style.display == "none") {
		yourSpellSlot.style.display = "flex";
	}
	if(choiceValues.class == '마술사') {
		const instantSpellDiv = document.getElementById('instantSpell');
		const chantSpellDiv = document.getElementById('chantSpell');
		const focusedSpellDiv = document.getElementById('focusedSpell');
		const spellDivs = [instantSpellDiv, chantSpellDiv, focusedSpellDiv];
		const spellButtons = [document.getElementById("instantSpellButton"), document.getElementById("chantSpellButton"), document.getElementById("focusedSpellButton")];

		function updateSpellSlot(slot, spell) {
		    const div = spellDivs[slot];
		    const button = spellButtons[slot];

		    cardTextUpdate(div.firstElementChild, (spellSlot[slot] == null)?cardDB["MA-MG-000"]:spellSlot[slot]);
		    cardTextUpdate(yourSpellSlot.getElementsByClassName('card')[slot], (spellSlot[slot] == null)?cardDB["MA-MG-000"]:spellSlot[slot]);

		    if (selectedSpellSlot == slot) {
		        button.classList.add("active");
		    } else {
		        button.classList.remove("active");
		    }
		}

		[0, 1, 2].forEach(slot => updateSpellSlot(slot));

		const spellCards = document.querySelectorAll('.spellCard');
		spellCards.forEach(function(cd) {
			const id = cd.getAttribute('data-id');

			if((selectedSpellSlot == 0 && cardDB[id].tags.includes("즉발 마술")) || (selectedSpellSlot == 1 && cardDB[id].tags.includes("영창 마술")) || (selectedSpellSlot == 2 && cardDB[id].tags.includes("집중 마술"))) {
				cd.parentElement.style.display = "flex";
			} else {
				cd.parentElement.style.display = "none";
			}

			if(selectedSpellSlot != 2 && cardDB[id].tags.includes("집중전용") && !cd.classList.contains("disabled")) {
				cd.classList.add("disabled");
			} else if((selectedSpellSlot == 2 || cardDB[id].tags.includes("집중전용")) && cd.classList.contains("disabled")) {
				cd.classList.remove("disabled");
			}
			if((!spellSlot[selectedSpellSlot] || spellSlot[selectedSpellSlot].id != id) && cd.classList.contains("active")) {
				cd.classList.remove("active");

				if(cd.querySelector("img.card-image-original")) {
					cd.querySelector("img.card-image-original").style.opacity = "1";
				}
			}
			if(spellSlot[selectedSpellSlot] && spellSlot[selectedSpellSlot].id == id && !cd.classList.contains("active")) {
				cd.classList.add("active");

				if(cd.querySelector("img.card-image-original")) {
					cd.querySelector("img.card-image-original").style.opacity = "0";
				}
			}
		})
	}

	const yourEssence = document.getElementById("yourEssence");
	if((choiceValues.class != '치유사' || essences.length > 0) && yourEssence.style.display != "none") {
		yourEssence.style.display = "none";
	}
	if(choiceValues.class == '치유사' && essences.length > 0 && yourEssence.style.display == "none") {
		yourEssence.style.display = "flex";
	}
	if(choiceValues.class == '치유사') {
		const ingCards = yourEssence.querySelectorAll('.card');
		ingCards.forEach((cd, index) => {
			const ingData = essences[index];
			if(ingData) {
				cd.style.display = "block";
				cardTextUpdate(cd, ingData)
			} else {
				cd.style.display = "none";
			}
		});
	}

	const deckCards = document.getElementsByClassName("deckCard");
	for(let card of deckCards) {
		const id = card.getAttribute('data-id')
		if(id) {
			if(card.style.display == "none" && (checkNum(deck, "id", id) || checkNum(player.state, "id", id) || checkNum(poisonSac, "id", id))) {
				card.style.display = "block";
			}
			if(card.style.display != "none" && !(checkNum(deck, "id", id) || checkNum(player.state, "id", id) || checkNum(poisonSac, "id", id))) {
				card.style.display = "none";
			}
		}
	}

    document.getElementById("cost").innerHTML = `${getWord("포인트")}: ` + (infinitePoint?`<span class='glitchNumbers'>${glitchNumber}</span>`:point);
    document.getElementById("deck").innerHTML = `${getWord("덱")}: ` + deck.length+(maxDeckSize<99?("/"+maxDeckSize):"");
    document.getElementById("cards").innerHTML = `${getWord("공격")} ${getWord("카드")}: ` + checkNum(deck, "type", "공격");
    document.getElementById("cards").innerHTML += ` | ${getWord("보조")} ${getWord("카드")}: ` + checkNum(deck, "type", "보조");
    document.getElementById("cards").innerHTML += ` | ${getWord("기타")} ${getWord("카드")}: ` + (deck.length - (checkNum(deck, "type", "공격") + checkNum(deck, "type", "보조") + checkNum(deck, "type", "패널티")));
	document.getElementById("cards").innerHTML += ` | ${getWord("패널티")} ${getWord("카드")}: ` + checkNum(deck, "type", "패널티");
	if(essences.length > 0) {
		document.getElementById("deck").innerHTML += ` + ${essences.length}/5`
		document.getElementById("cards").innerHTML += ` + ${getWord("정수")} ${getWord("카드")}: ` + essences.length;
	}

    document.getElementById("stats").innerHTML = `${getWord("음란")}: ${lewd} | ${getWord("발정")}: ${estrus} | ${getWord("흥분 한계")}: ${player.exciteL} | ${getWord("절정 한계")}: ${player.orgasmL}`;
    switch(choiceValues.class) {
    case "전사":
    	document.getElementById("stats").innerHTML += ` | ${getWord("욕망")}: `+lust;
    	break;
    case "암살자":
    	document.getElementById("stats").innerHTML += ` | ${getWord("젖음")}: `+wetness;
    	break;
    }

	const completeButton = (gamemode == 1)?"completeHard":((gamemode == 2)?"completeChallenge":"complete")
	if(document.getElementById(completeButton).classList.contains("disabled") ^ (!player.state.some(st => st.id == "DA-NT-ALL-000") && (deck.length != maxDeckSize || point < 0 || (countCard(player.state, "type", "특성") >= 5) || (player.state.some(st => st.id == "DA-HE-BG2-001") && essences.length < 5)) )) {
		document.getElementById(completeButton).classList.toggle("disabled");
	}

	let warningText = "";
	if(point < 0 && !player.state.some(st => st.id == "DA-NT-ALL-000")) {
		warningText += "※ 포인트가 0보다 낮아져선 안됩니다.<br>"
	}
	if(countCard(player.state, "type", "특성") >= 5 && !player.state.some(st => st.id == "DA-NT-ALL-000")) {
		warningText += "※ 특성은 4개까지만 고를 수 있습니다.<br>"
	}
	if(deck.some(cd => cd.tags.includes("독주머니")) && (poisonSac.length == 0 && !deck.some(cd => cd.tags.includes("독추가")))) {
		warningText += "※ 독주머니가 비어있어서 일부 카드가 효과를 잃었습니다.<br>"
	}
	if((deck.some(cd => cd.tags.includes("즉발슬롯")) && spellSlot[0].id == 'MA-MG-000') || (deck.some(cd => cd.tags.includes("영창슬롯")) && spellSlot[1].id == 'MA-MG-000') || (deck.some(cd => cd.tags.includes("집중슬롯")) && spellSlot[2].id == 'MA-MG-000')) {
		warningText += "※ 마술 슬롯이 비어있어서 일부 카드가 효과를 발휘하지 못합니다.<br>"
	}
	if(player.state.some(st => st.id == "AD-HE-ALL-002") && essences.length == 0) {
		warningText += "※ 정수 카드를 고르지 않아서 일부 특성이 효과를 잃었습니다.<br>"
	}
	if(player.state.some(st => st.id == "DA-HE-BG2-001") && essences.length < 5) {
		warningText += "※ 덱에 정수 카드를 5장 넣어야 합니다.<br>"
	}
	if(warningText) {
		document.getElementById("deckWarning").style.display = "block";
		document.getElementById("deckWarning").querySelector("p").innerHTML = "<span style='color:red; font-weight: bold;'>"+warningText+"</span>";
	} else {
		document.getElementById("deckWarning").style.display = "none";
	}
}


function adjustCardFontSize(card) {
	const nameDiv = card.querySelector("div.card-name");
	adjustFontSize(nameDiv, adjustSize(32/10));
	const textDiv = card.querySelector("div.card-text");
	adjustFontSize(textDiv, adjustSize(32*1.6/30));
}

async function adjustFontSize(container, defaultSize) {
    const originalTransition = container.style.transition;
    container.style.transition = 'none';
    
    var fontSize = `${defaultSize}vmin`;
    var minFontSize = 0;
    
    while (container.scrollHeight > container.offsetHeight+10 && fontSize > minFontSize) {
        fontSize -= 0.1;
        container.style.fontSize = fontSize + 'px';
    }

    container.style.transition = originalTransition;
}

//#####################################################################################################################################################################################################

let combatOptions = {
	line_useCard:true,
	line_event:true,

	line_speed:30,
	line_time:2000,

	log_line:true,
	log_effect:true,

	cardWait_mode:"항상",
	cardWait_time:1000,

	animation_show:true,
	animation_speed:2
};
combatOptions = new Proxy(loadObject("option") || combatOptions, {
    set(target, property, value) {
        target[property] = value;
        saveObject("option", target);
        return true;
    }
});
let turnSpeed = combatOptions.animation_speed;

function changeTurnSpeed(type = "set", value = combatOptions.animation_speed) {
	if(type == "set") {
		turnSpeed = value;
	} else if(type == "multiply") {
		turnSpeed = combatOptions.animation_speed * value;
	} else if(type == "reset") {
		turnSpeed = combatOptions.animation_speed;
	}
}

let round = 0;
var maxRound = 8;
let battleEnd = -1;

let maxUse = 1;
let useLimit = 5;
let useCount = 0;
let maxUseE = 1;

const options = {
	maxUse:1,
	maxUseE:1,
	wetnessIncrease:1,
	corruptIncrease:1,
	maintain:false,
	lustBan:false,
	wetnessBan:false,
	avoidBan:false,
	sBlockBan:false,
	enemyDisable:false,
	enemyAttackDisable:false,
	unclothDisable:false,
	penaltyDisable:false,
	poisonDisable:false,
	spellDisable:false,
}

const statTooltips = {
	lewd:{ add:[], multiply:[], set:null, extra:[] },
	estrus:{ add:[], multiply:[], set:null, extra:[] },

	player:{
		exciteL:{ add:[], multiply:[], set:null, extra:[] },
		orgasmL:{ add:[], multiply:[], set:null, extra:[] }
	},
	enemy:{
		exciteL:{ add:[], multiply:[], set:null, extra:[] },
		orgasmL:{ add:[], multiply:[], set:null, extra:[] }
	},
}

var phase = "roundStart";
let clickable = false;
let selectMode = false;
let selectType = null;
const selectCond = {category:"", value:""}

const eventList = [];
let finishCard;

function battleInit() {
	forceLandscape();
	switch(choiceValues.class) {
	case "전사":
		document.getElementById("viewLust").style.display = "flex";
		break;
	case "암살자":
		document.getElementById("viewWetness").style.display = "flex";
		break;
	case "마술사":
		document.getElementById("viewSBlock").style.display = "flex";
		break;
	case "치유사":
		document.getElementById("viewCorrupt").style.display = "flex";
		break;
	}

	if(choiceValues.ps == "적극" || gamemode == 2) {
		player.condition = "corrupted";
	}
	changePortrait(player.condition, 1);
	const enemyPortraitDiv = document.getElementById("enemyPortrait");
	enemyPortraitDiv.querySelector("img").src = `${imageSrc}face/portrait_${champList[enemy.id].img}_normal.webp`;
	enemy.real_exciteL = champList[enemy.id].stats.exciteL;
	enemy.real_orgasmL = champList[enemy.id].stats.orgasmL;

	for(let id of champList[enemy.id].deck) {
		const opCard = deepCopy(cardDB[id]);
		opCard.owner = 0;
		opDeck.push(opCard);
	}
	for(let id of champList[enemy.id].state) {
		const opState = deepCopy(cardDB[id]);
		opState.owner = 0;
		enemy.state.push(opState);
	}

	for(let card of deck) {
		const cardDiv = createCard(card, 28, true, 10);
		document.getElementById('playerDeck').appendChild(cardDiv);
		adjustCardFontSize(cardDiv);
	}

	for(let state of player.state) {
		const stateDiv = createCard(state, 28, true, 11);
		document.getElementById('playerState').appendChild(stateDiv);
		adjustCardFontSize(stateDiv);
	}

	for(let state of enemy.state) {
		const stateDiv = createCard(state, 28, true, 11);
		document.getElementById('enemyState').appendChild(stateDiv);
		adjustCardFontSize(stateDiv);
	}

	infoUpdate();
	eventList.push({type:"battleStart"});
	eventList.push({type:"roundStart"});
	eventProgress();
}

function infoUpdate() {
	options.maintain = false;
	options.lustBan = false;
	options.wetnessBan = false;
	options.sBlockBan = false;
	options.enemyDisable = false;
	options.enemyAttackDisable = false;
	options.unclothDisable = false;
	options.penaltyDisable = false;
	options.poisonDisable = false;
	options.spellDisable = false;
	maxUse = options.maxUse;
	maxUseE = options.maxUseE;

	const roundDiv = document.getElementById("round");
	roundDiv.innerHTML = "Round "+round+"/"+maxRound;

	enemy.immune = false;
	enemy.excite = enemy.real_excite;
	enemy.excite_mul = 1;
	enemy.excite_set = null;
	enemy.exciteL = enemy.real_exciteL;
	enemy.exciteL_mul = 1;
	enemy.exciteL_set = null;
	enemy.orgasmL = enemy.real_orgasmL;
	enemy.orgasmL_mul = 1;
	enemy.orgasmL_set = null;
	enemy.ban = { all:false, attack:false, support:false, uncloth:false, posture:false, penalty:false, combination:false };
	enemy.mustuse = { attack:false, support:false, uncloth:false, posture:false, penalty:false, combination:false };
	enemy.orgasmBan = false;
	enemy.suppression = false;
	enemy.insensitive = false;
	enemy.absorption = false;
	enemy.healBan = false;
	enemy.modifier.excite.add = 0;
	enemy.modifier.excite.subtract = 0;
	enemy.modifier.exciteL.add = 0;
	enemy.modifier.exciteL.subtract = 0;

	player.immune = false;
	player.excite = player.real_excite;
	player.excite_mul = 1;
	player.excite_set = null;
	player.exciteL = player.real_exciteL;
	player.exciteL_mul = 1;
	player.exciteL_set = null;
	player.orgasmL = player.real_orgasmL;
	player.orgasmL_mul = 1;
	player.orgasmL_set = null;
	player.ban = { all:false, attack:false, support:false, uncloth:false, posture:false, penalty:false, combination:false, bound:false };
	player.mustuse = { attack:false, support:false, uncloth:false, posture:false, penalty:false, combination:false, bound:false };
	player.orgasmBan = false;
	player.suppression = false;
	player.insensitive = false;
	player.absorption = false;
	player.healBan = false;
	player.modifier.lewd.add = 0;
	player.modifier.lewd.subtract = 0;
	player.modifier.estrus.add = 0;
	player.modifier.estrus.subtract = 0;
	player.modifier.excite.add = 0;
	player.modifier.excite.subtract = 0;
	player.modifier.exciteL.add = 0;
	player.modifier.exciteL.subtract = 0;

	real_estrus = Math.min(Math.max(real_estrus, minEstrus), maxEstrus);
	real_lewd = Math.min(Math.max(real_lewd, minLewd), maxLewd);

	estrus = real_estrus;
	estrus_mul = 1;
	estrus_set = null;
	lewd = real_lewd;
	lewd_mul = 1;
	lewd_set = null;

	spore = real_spore;

	function statTooltipReset(stat) {
		stat.add.splice(0);
		stat.multiply.splice(0);
		stat.set = null;
		stat.extra.splice(0);
	}

	statTooltipReset(statTooltips.lewd);
	statTooltipReset(statTooltips.estrus);
	statTooltipReset(statTooltips.player.exciteL);
	statTooltipReset(statTooltips.player.orgasmL);
	statTooltipReset(statTooltips.enemy.exciteL);
	statTooltipReset(statTooltips.enemy.orgasmL);

	let _state = player.state.slice();
	_state.sortCards('priority');
	for(let st of _state) {
		stateEffect(st, "always");
	}
	let _opState = enemy.state.slice();
	_opState.sortCards('priority');
	for(let st of _opState) {
		stateEffect(st, "always");
	}

	let _deck = deck.slice();
	_deck.sortCards('priority');
	for(let cd of _deck) {
		stateEffect(cd, "always");
	}
	let _opDeck = opDeck.slice();
	_opDeck.sortCards('priority');
	for(let cd of _opDeck) {
		stateEffect(cd, "always");
	}
	if(phase == "turn") {
		for(let act of action) {
			let cd = deck[act];
			stateEffect(cd, "selected");
		}
	}

	enemy.excite *= enemy.excite_mul;
	enemy.exciteL *= enemy.exciteL_mul;
	enemy.orgasmL *= enemy.orgasmL_mul;

	player.excite *= player.excite_mul;
	player.exciteL *= player.exciteL_mul;
	player.orgasmL *= player.orgasmL_mul;

	estrus *= estrus_mul;
	lewd *= lewd_mul;

	if(enemy.excite_set) {
		enemy.excite = enemy.excite_set;
	}
	if(enemy.exciteL_set) {
		enemy.exciteL = enemy.exciteL_set;
	}
	if(enemy.orgasmL_set) {
		enemy.orgasmL = enemy.orgasmL_set;
	}

	if(player.excite_set) {
		player.excite = player.excite_set;
	}
	if(player.exciteL_set) {
		player.exciteL = player.exciteL_set;
	}
	if(player.orgasmL_set) {
		player.orgasmL = player.orgasmL_set;
	}

	if(estrus_set) {
		estrus = estrus_set;
	}

	estrus = Math.min(Math.max(estrus, minEstrus), maxEstrus);

	if(player.state.some(st => st.id == "AD-NT-EL-BG1-001")) {
		lewd += Math.max(real_estrus - estrus, 0);
	}

	if(lewd_set) {
		lewd = lewd_set;
	}

	maxUse = Math.max(Math.min(maxUse, useLimit), 0)
	maxUseE = Math.max(Math.min(maxUseE, useLimit), 0)

	lewd = Math.min(Math.max(lewd, minLewd), maxLewd);

	enemy.exciteL = Math.max(enemy.exciteL, 1);
	enemy.excite = Math.min(enemy.excite, enemy.exciteL);
	enemy.orgasmL = Math.max(enemy.orgasmL, 1);
	enemy.orgasm = Math.min(enemy.orgasm, enemy.orgasmL);

	player.exciteL = Math.max(player.exciteL, 1);
	player.excite = Math.min(player.excite, player.exciteL);
	player.orgasmL = Math.max(player.orgasmL, 1);
	player.orgasm = Math.min(player.orgasm, player.orgasmL);

	const playerPort = document.getElementById("playerPortrait")
	const playerPortFilter = playerPort.querySelector("div.filter");
	if(player.suppression || player.orgasmBan) {
	    playerPortFilter.style.background = 'rgba(150, 150, 150, 0.5)';
	    playerPortFilter.style.opacity = 0.5;
	} else {
	    playerPortFilter.style.opacity = 0;
	}
	if(player.insensitive) {
	    playerPort.style.outline = 'aqua solid 4px';
	} else {
	    playerPort.style.outline = '';
	}
	if(player.absorption) {
	    playerPort.style.boxShadow = '0 0 30px rgba(255, 150, 200, 1)';
	} else {
	    playerPort.style.boxShadow = '';
	}

	const enemyPort = document.getElementById("enemyPortrait");
	const enemyPortFilter = enemyPort.querySelector("div.filter");
	if(enemy.suppression || enemy.orgasmBan) {
	    enemyPortFilter.style.background = 'rgba(150, 150, 150, 0.5)';
	    enemyPortFilter.style.opacity = 0.5;
	} else {
		enemyPortFilter.style.opacity = 0;
	}
	if(enemy.insensitive) {
	    enemyPort.style.outline = 'aqua solid 4px';
	} else {
	    enemyPort.style.outline = '';
	}
	if(enemy.absorption) {
	    enemyPort.style.boxShadow = '0 0 30px rgba(255, 150, 200, 1)';
	} else {
	    enemyPort.style.boxShadow = '';
	}


	const eExDiv = document.getElementById("enemyExcite");
	eExDiv.innerHTML = enemy.excite;
	if(enemy.immune) {
		eExDiv.style.color = 'rgba(0, 180, 255, 1)'
	} else if(enemy.excite > enemy.real_excite || enemy.healBan) {
		eExDiv.style.color = 'rgba(255, 0, 0, 1)'
	} else if(enemy.excite < enemy.real_excite) {
		eExDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		eExDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const eExLDiv = document.getElementById("enemyExciteL");
	eExLDiv.innerHTML = enemy.exciteL;
	if(enemy.exciteL < enemy.real_exciteL) {
		eExLDiv.style.color = 'rgba(255, 0, 0, 1)'
	} else if(enemy.exciteL > enemy.real_exciteL) {
		eExLDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		eExLDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const eAcDiv = document.getElementById("enemyOrgasm");
	eAcDiv.innerHTML = enemy.orgasm;
	if(enemy.orgasmBan) {
		eAcDiv.style.color = 'rgba(100, 100, 100, 1)';
	} else {
		eAcDiv.style.color = 'rgba(255, 255, 255, 1)';
	}

	const eAcLDiv = document.getElementById("enemyOrgasmL");
	eAcLDiv.innerHTML = enemy.orgasmL;
	if(enemy.orgasmL < enemy.real_orgasmL) {
		eAcLDiv.style.color = 'rgba(255, 0, 0, 1)'
	} else if(enemy.orgasmL > enemy.real_orgasmL) {
		eAcLDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		eAcLDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const pExDiv = document.getElementById("playerExcite");
	pExDiv.innerHTML = player.excite;
	if(player.immune) {
		pExDiv.style.color = 'rgba(0, 180, 255, 1)'
	} else if(player.excite > player.real_excite || player.healBan) {
		pExDiv.style.color = 'rgba(255, 0, 0, 1)'
	} else if(player.excite < player.real_excite) {
		pExDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		pExDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const pExLDiv = document.getElementById("playerExciteL");
	pExLDiv.innerHTML = player.exciteL;
	if(player.exciteL < player.real_exciteL) {
		pExLDiv.style.color = 'rgba(255, 0, 0, 1)'
	} else if(player.exciteL > player.real_exciteL) {
		pExLDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		pExLDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const pAcDiv = document.getElementById("playerOrgasm");
	pAcDiv.innerHTML = player.orgasm;
	if(player.orgasmBan) {
		pAcDiv.style.color = 'rgba(100, 100, 100, 1)';
	} else {
		pAcDiv.style.color = 'rgba(255, 255, 255, 1)';
	}

	const pAcLDiv = document.getElementById("playerOrgasmL");
	pAcLDiv.innerHTML = player.orgasmL;
	if(player.orgasmL < player.real_orgasmL) {
		pAcLDiv.style.color = 'rgba(255, 0, 0, 1)'
	} else if(player.orgasmL > player.real_orgasmL) {
		pAcLDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		pAcLDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const lewdDiv = document.getElementById("lewd");
	lewdDiv.innerHTML = lewd
	if(lewd != real_lewd) {
		lewdDiv.innerHTML += "<span style='color:rgba(255, 255, 255, 1); font-size: 2vh;'>("+real_lewd+")</span>";
	}
	if(lewd < real_lewd) {
		lewdDiv.style.color = 'rgba(0, 0, 255, 1)'
	} else if(lewd > real_lewd) {
		lewdDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else {
		lewdDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const estrusDiv = document.getElementById("estrus");
	estrusDiv.innerHTML = estrus;
	if(estrus != real_estrus) {
		estrusDiv.innerHTML += "<span style='color:rgba(255, 255, 255, 1); font-size: 2vh;'>("+real_estrus+")</span>";
	}
	if(estrus > real_estrus) {
		estrusDiv.style.color = 'rgba(0, 255, 0, 1)'
	} else if(estrus < real_estrus) {
		estrusDiv.style.color = 'rgba(0, 0, 255, 1)'
	} else {
		estrusDiv.style.color = 'rgba(255, 255, 255, 1)'
	}

	const postureDiv = document.getElementById("posture");
	if(posture) {
		postureDiv.innerHTML = posture.name[language];
		/*const trapPs = player.state.find((st) => st.tags.includes("트랩"));
		if(trapPs) {
			postureDiv.innerHTML += "("+trapPs.duration+")"
		}*/
	} else {
		postureDiv.innerHTML = "없음";
	}

	const lustDiv = document.getElementById("lust");
	lustDiv.innerHTML = lust;
	const wetnessDiv = document.getElementById("wetness");
	wetnessDiv.innerHTML = wetness;
	const sBlockDiv = document.getElementById("sBlock");
	sBlockDiv.innerHTML = ` ${sBlock}`;
	const corruptDiv = document.getElementById("corrupt");
	corruptDiv.innerHTML = `${corrupt}`;
}

function toggleTab(tabId, buttonId) {
    const tab = document.getElementById(tabId);
    const button = document.getElementById(buttonId);

    const isCurrentlyActive = tab.style.display === "flex";
    tab.style.display = isCurrentlyActive ? "none" : "flex";

    button.classList.toggle("active", !isCurrentlyActive);

    if (!isCurrentlyActive) {
        const battlecards = document.getElementsByClassName("battleCard");
        for (let bc of battlecards) {
            adjustCardFontSize(bc);
        }
    }
}

function initializeTabs() {
    const tabs = [
        { tabId: "enemyAction", buttonId: "enemyActionButton" },
        { tabId: "enemyState", buttonId: "enemyStateButton" },
        { tabId: "playerDeck", buttonId: "playerDeckButton" },
        { tabId: "playerState", buttonId: "playerStateButton" }
    ];

    for (let { tabId, buttonId } of tabs) {
        const tab = document.getElementById(tabId);
        const button = document.getElementById(buttonId);

        tab.style.display = "none";
        button?.addEventListener("click", () => toggleTab(tabId, buttonId));
    }
}

function closeAllTabs() {
    const tabs = document.getElementsByClassName("battleContent");
    for (let tab of tabs) {
        tab.style.display = "none"; // 모든 탭 닫기
    }
}

function returnAllTabs() {
    const buttons = [
        { buttonId: "enemyActionButton", tabId: "enemyAction" },
        { buttonId: "enemyStateButton", tabId: "enemyState" },
        { buttonId: "playerDeckButton", tabId: "playerDeck" },
        { buttonId: "playerStateButton", tabId: "playerState" }
    ];

    for (let { buttonId, tabId } of buttons) {
        const button = document.getElementById(buttonId);
        const tab = document.getElementById(tabId);

        if (button.classList.contains("active")) {
            tab.style.display = "flex";
        } else {
            tab.style.display = "none";
        }
    }
}

function isTabOpen(tabId) {
    const tab = document.getElementById(tabId);
    return tab.style.display === "flex";
}

function buttonUpdate() {
	const battleButtons = document.getElementsByClassName("battleButton");
	for(let button of battleButtons) {
		if(clickable ^ !button.classList.contains("disabled")) {
			button.classList.toggle("disabled");
		}
	}
}

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
const waitOrClick = (timeToDelay) => {
    return new Promise((resolve) => {
        // Set up the timeout
        const timeoutId = setTimeout(() => {
            // Remove the click event listener when timeout is reached
            document.removeEventListener('click', handleClick);
            resolve();
        }, timeToDelay);

        // Click event handler
        const handleClick = () => {
            // Clear the timeout and resolve the promise immediately
            clearTimeout(timeoutId);
            document.removeEventListener('click', handleClick);
            resolve();
        };

        // Add click event listener
        document?.addEventListener('click', handleClick);
    });
};

async function eventProgress() {
	while(eventList.length) {
		const event = eventList[0];
		switch(event.type) {
		case "show":
			await showMessage(event.value);
			break;
		case "talk":
			await addLine(event.value.text);
			break;
		case "roundStart":
			await roundStart();
			break;
		case "battleStart":
			await battleStart();
			break;
		case "combat":
			await combat();
			break;
		}
		eventList.splice(0, 1);
	}
}

async function showMessage(text, duration = 500 * 2, effect = null) {
    return new Promise(async (resolve) => {
        const messageWrapper = document.getElementById('message-wrapper');
        const messageElement = document.getElementById('message');

        messageElement.innerHTML = text;
        messageWrapper.style.visibility = 'visible';

        await animationFloatIn(messageElement, "down", 20, 0);
        await wait(duration);
        if(effect == "diffusion") {
        	await animationDiffusion(messageElement, 1.2);
	        await wait(duration);
	    }
        if(effect == "shake") {
        	await animationShake(messageElement);
	        await wait(duration);
	    }
        await animationFloatOut(messageElement, "down");

        messageWrapper.style.visibility = 'hidden';

        resolve();
    });
}

let typingTimer;
let talkQueue = [];
let isTyping = false;

function typeWriter(text, elementId) {
    return new Promise((resolve) => {
        const element = document.getElementById(elementId);
        const endOfMessageIndicator = document.getElementById('end-of-message-indicator');
        let i = 0;
        isTyping = true;

        element.innerHTML = '';
        currentText = '';
        endOfMessageIndicator.style.display = 'none';

        // * * 로 감싸진 부분을 이탤릭체와 회색으로 변환하여 임시로 저장
        const formattedText = text.replace(/\*([^\*]+)\*/g, '<span style="font-style: italic; color: gray;">$1</span>');

        function completeTyping() {
            element.innerHTML = formattedText;
            endOfMessageIndicator.style.display = 'block';
            resolve();
        }

        async function typing() {
            if (!isTyping || eventSkip) {
                completeTyping();
                return;
            }

            if (i < formattedText.length) {
                if (formattedText.slice(i, i + 4) === '<br>') {
                    currentText += '<br>';
                    i += 4;
                    element.innerHTML = currentText;
                    await wait(500);
                } else if (formattedText.charAt(i) === '<') {
                    const tagEnd = formattedText.indexOf('>', i) + 1;
                    currentText += formattedText.slice(i, tagEnd);
                    i = tagEnd;
                } else {
                    currentText += formattedText.charAt(i);
                    i++;
                }
                element.innerHTML = currentText;
                element.innerHTML += ')'.repeat((currentText.match(/\(/g)?.length || 0) - (currentText.match(/\)/g)?.length || 0)).replace(/<br>\)/g, ')<br>');
                setTimeout(typing, combatOptions.line_speed);
            } else {
                completeTyping();
            }
        }

        document?.addEventListener('click', () => {
            if (isTyping) {
                isTyping = false;
            }
        });

        typing();
    });
}

async function talkEffect(message, pos = 0, div = null) {
	const speechBubble = document.getElementById('speech-bubble');
	const contentDiv = document.getElementById('content');
	const endOfMessageIndicator = document.getElementById('end-of-message-indicator');

	const _talkNum = talkQueue.length == 0?0:talkQueue[talkQueue.length - 1] + 1;
	talkQueue.push(_talkNum);

	let isInterrupted = false;
	isTyping = false;
	await wait(50);

	speechBubble.style.position = "fixed";
	if (pos == -1) {
		speechBubble.classList.remove("speechArrow");
		speechBubble.style.left = 'calc(45vh + 10px)';
		speechBubble.style.top = '50%';
		speechBubble.style.transform = 'translate(0%, -50%)';
	} else if (pos == 0) {
		var targetDiv = document.getElementById('enemyPortrait');
		var rect = targetDiv.getBoundingClientRect();
		speechBubble.classList.add("speechArrow");
		speechBubble.style.left = rect.right + 10 + 'px';
		speechBubble.style.top = rect.top + rect.height/2 + 'px';
		speechBubble.style.transform = 'translateY(-50%)';
	} else if (pos == 1) {
		var targetDiv = document.getElementById('playerPortrait');
		var rect = targetDiv.getBoundingClientRect();
		speechBubble.classList.add("speechArrow");
		speechBubble.style.left = rect.right + 10 + 'px';
		speechBubble.style.top = rect.top + rect.height/2 + 'px';
		speechBubble.style.transform = 'translateY(-50%)';
	} else if (pos >= 2) {
		speechBubble.style.position = "absolute";
		var targetDiv = div;
		var rect = targetDiv.getBoundingClientRect();
		speechBubble.classList.add("speechArrow");
		speechBubble.style.left = rect.right + 10 + 'px';
		speechBubble.style.top =  window.pageYOffset + rect.top + rect.height/2 + 'px';
		speechBubble.style.transform = 'translateY(-50%)';
	}

	contentDiv.innerHTML = '';
	speechBubble.style.display = 'block';
	endOfMessageIndicator.style.display = 'none';

	await typeWriter(message, 'content');
	await wait(1);

	let elapsed = 0;
    let userResponse = 'timeout';

    document?.addEventListener('click', () => {
        if (!isInterrupted) {
            isInterrupted = true;
        }
    });

    while (elapsed < combatOptions.line_time) {
    	if(talkQueue.length >= 2) {
            userResponse = 'newcall';
            break;
    	}

        if (isInterrupted) {
            userResponse = 'interrupted';
            break;
        }

        await wait(10);
        elapsed += 10;
    }

    talkQueue.splice(0, 1);

    if (userResponse != 'newcall') {
        speechBubble.style.display = 'none';
    }
}

async function linePreview() {
	const speechBubble = document.getElementById('speech-bubble');
	const _targetLine = storyText[`entrance_${raceTag[choiceValues.race]}_${bgTag[choiceValues.background]}`].find(line => line.type == 'dialogue' && line.character == 'player');
	let txt;
	if(_targetLine.psText) {
    	txt = translateText(_targetLine.psText[choiceValues.ps], infoTextData() );
    } else if(_targetLine.classText) {
    	txt = translateText(_targetLine.classText[choiceValues.class], infoTextData() );
    } else {
    	txt = translateText(_targetLine, infoTextData() );
    }
    //let firstIndex = txt.indexOf('<br>');
	//txt = firstIndex === -1 ? txt : txt.substring(0, txt.indexOf('<br>', firstIndex + 4) === -1 ? txt.length : txt.indexOf('<br>', firstIndex + 4));
	speechBubble.style.display = 'none';
	await wait(1);
	talkEffect(txt, 2, document.getElementById('profilePreviewPortrait'));
}

let eventSkip = false;

async function addLine(lines, div=null, doCheck=true) {
    let data = null;

    if(!lines) {
    	return 0;
    }

    if(Array.isArray(lines)) {
        lines.sort((a, b) => b.priority - a.priority);
        let i = 0;
        while (i < lines.length) {
            let cp = lines[i].priority;
            let checked = [];
            while (i < lines.length && lines[i].priority === cp) {
                if(checkCondition(lines[i].cond, 1) && !lines[i].check) {
                    checked.push(lines[i]);
                }
                i++;
            }
            if (checked.length) {
            	let index = Math.floor(Math.random() * checked.length);
                data = checked[index].lineList;
                if(doCheck && !checked[index].check && !checked[index].repeatable){
                	checked[index].check = true;
                }
                break;
            }
        }
    } else {
        data = [lines];
    }
    if(data) {
    	for(let _line of data) {
    		if(eventSkip) {
    			break;
    		}
    		if(checkCondition(_line.cond, 1)) {
    			if(_line.pos == 1 && player.condition == "corrupted" && player.specialCond == 'pig') {
    				_line = getRandom(line["플레이어-암퇘지"]);
    			}
    			if(_line.pos == 1 && player.specialCond == 'gag') {
    				_line = getRandom(line["플레이어-재갈"]);
    			}
    			if(_line.pos == 1 && player.specialCond == 'mindbreak') {
    				_line = getRandom(line["플레이어-정신붕괴"]);
    			}
    			if(_line.pos == 1 && player.specialCond == 'unconscious') {
    				_line = getRandom(line["플레이어-무의식"]);
    			}
    			if(!_line.keepOriginal) {
	    			if(_line.pos == 1 && player.specialCond == 'berserk') {
	    				_line = getRandom(line["플레이어-광폭화"]);
	    			}
	    		}

	    		if(_line.portrait && _line.pos != 2) {
		    		changePortrait(_line.portrait, _line.pos);
		    	}
	    		if(_line.effect) {
	    			const _portraitDiv = (_line.pos == 0)?document.getElementById("enemyPortrait"):document.getElementById("playerPortrait");
	    			switch(_line.effect) {
	    			case "hypnotized":
	    				animationColorize(_portraitDiv, 'rgba(160, 50, 160, 0.5)');
	    				break;
	    			case "emphasis":
	    				animationEmphasis(_portraitDiv, 1.5);
	    				break;
	    			case "diffusion":
	    				animationDiffusion(_portraitDiv);
	    				break;
	    			case "shake":
	    				animationShake(_portraitDiv);
	    				break;
	    			}
	    		}
	    		let txt = translateText(_line.text, infoTextData() )
	    		if(_line.name || [0, 1].includes(_line.pos)) {
		    		addLogLine(txt, _line.name ?? [enemy.name, player.name][_line.pos]);
		    	}
			    await talkEffect(txt, _line.pos, div);
	    		if(_line.portrait && !_line.keepPort && _line.pos != 2) {
	    			changePortrait(_line.pos == 1?player.condition:enemy.condition, _line.pos);
	    		}
			}
    	}
    	//changePortrait(player.condition, 1);
	}
}

async function changePortrait(state, target, animation = false) {
	const portraitDiv = (target == 0)?document.getElementById("enemyPortrait").querySelectorAll("img"):document.getElementById("playerPortrait").querySelectorAll("img");

	if(animation) {
        await animationDisappear(portraitDiv[0], 300);
	}

	if(state == "original") {
		if(playerCorrupted) {
			if(enemy.name == "버섯남자") {
				eValue = "blank";
			} else {
				eValue = "corrupted";
			}
		} else {
			if(choiceValues.ps == "적극") {
				eValue = "corrupted";
			} else {
				eValue = "excited";
			}
		}
	}

	if(target == 0) {
		portraitDiv[0].src = `${imageSrc}face/portrait_${champList[enemy.id].img}_${state}.webp`;
	} else if(target == 1) {
		portraitDiv[0].src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_${state}.webp`;
		if(portraitDiv[1].style.display != "none") {
			portraitDiv[1].src = `${imageSrc}face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_c${gamemode == 1?5:classNum[choiceValues.class]}.webp`;
		}
	}

	if(animation) {
        await animationAppear(portraitDiv[0], 300);
	}
}

function checkCondition(cond, subject) {
    if(cond === null || cond === undefined) {
        return false;
    } else if(typeof cond === 'boolean') {
        return cond;
    } else if(typeof cond === 'string') {
        return returnText(cond, subject);
    } else if(Array.isArray(cond)) {
        switch(cond[0]) {
        case "and":
        case "&&":
            for(let c of cond.slice(1)){
                if(!checkCondition(c, subject)) {
                    return false;
                }
            }
            return true;
            break;
        case "or":
        case "||":
            for(let c of cond.slice(1)){
                if(checkCondition(c, subject)) {
                    return true;
                }
            }
            return false;
            break;
        default:
            console.log(cond);
            console.log("and/or 외의 잘못된 값 입력");
            return false;
            break;
        }
    } else {
        let obj, sub, num;
        let value = [];
        for(let v of [cond.v1, cond.v2]) {
            if(typeof v === 'number' || typeof v === 'boolean' || Array.isArray(v)) {
                value.push(v);
            }
            if(typeof v === 'string') {
                value.push(returnText(v, subject));
            }
        }

        switch(cond.op) {
        case "==":
            return value[0] == value[1];
            break;
        case ">":
            return value[0] > value[1];
            break;
        case "<":
            return value[0] < value[1];
            break;
        case ">=":
            return value[0] >= value[1];
            break;
        case "<=":
            return value[0] <= value[1];
            break;
        case "!=":
            return value[0] != value[1];
            break;
        case "includes":
            if(Array.isArray(value[0])) {
                return value[0].includes(value[1]);
            } else {
                console.log(value[0]);
                console.log(value[1]);
                console.log("잘못된 인자 입력");
                return false;
            }
            break;
        case "in":
            return value[1].includes(value[0]);
            break;

        default:
            console.log(cond);
            console.log(cond.op);
            console.log("잘못된 연산자 입력");
            return false;
            break;
        }
    }
}

function returnText(v, self=null) {
    if (!isNeedReplace(v)) {
        return v;
    }

    const selfObj = (self==0)?enemy:((self==1)?player:null);

    const replacements = {
    	"카드": cardDB,
    	"card": cardDB,

    	"플레이어": player,
    	"player": player,

    	"챔피언": enemy,
    	"enemy": enemy,

    	"상대": (self==0)?player:enemy,
    	"op": (self==0)?player:enemy,

    	"자신": (self==1)?player:enemy,
    	"self": (self==1)?player:enemy,

    	"카드풀": Object.values(cardDB),
    	"cardDB": Object.values(cardDB),

    	"덱": deck,
    	"deck": deck,

    	"챔피언덱": opDeck,
    	"enemyDeck": opDeck,

    	"자기덱": (self==0)?opDeck:deck,
    	"selfDeck": (self==0)?opDeck:deck,

    	"상대덱": (self==1)?opDeck:deck,
    	"opDeck": (self==1)?opDeck:deck,

	    "독주머니": poisonSac,
	    "poisonSac": poisonSac,

    	"라운드": round,
    	"round": round,

    	"최대라운드": maxRound,
    	"maxRound": maxRound,

    	"최대행동": maxUse,
    	"maxUse": maxUse,
    	"적최대행동": maxUseE,
    	"maxUseE": maxUseE,

    	"음란": lewd,
    	"lewd": lewd,
    	"실제음란": real_lewd,
    	"real_lewd": real_lewd,

    	"발정": estrus,
    	"estrus": estrus,
    	"실제발정": real_estrus,
    	"real_estrus": real_estrus,

    	"체위": posture,
    	"posture": posture,

    	"욕망": lust,
    	"lust": lust,

    	"젖음": wetness,
    	"wetness": wetness,

    	"감각차단": sBlock,
    	"sBlock": sBlock,
    	"지연흥분": delayedEx,
    	"delayedEx": delayedEx,

    	"타락": corrupt,
    	"corrupt": corrupt,

    	"흥분": "excite",
    	"남은흥분": "remainExcite",
    	"흥분한계": "exciteL",
    	"절정": "orgasm",
    	"남은절정": "remainOrgasm",
    	"절정한계": "orgasmL",
    	"행동": "action",
    	"효과발동": "effectActive",

    	"기록": "record",

    	"전체": "all",
    	"이번": "thisTurn",
    	"이전": "lastTurn",
    	"최근": "recentTurn",

    	"소모욕망": "consumeLust",

    	"사용": "use",
    	"버림": "discard",
    	"변형": "transform",
    	"결합": "combine",
	    "제거": "vanish",

    	"증가": "up",
    	"감소": "down",

    	"이벤트": "event",
    	"발정기록": "estrus",
    	"음란기록": "lewd",
    	"자극함": "attack",
    	"자극받음": "attacked",
    	"획득": "get",
    	"상태획득": "getState",
    	"회피": "avoid",
    	"만료마술": "expiredSpell",

    	"상태": "state",
    	"이름": "name",
    	"타입": "type",
    	"희귀도": "rarity",
    	"태그": "tags",

    	"파생": "derived",

    	"마술슬롯": spellSlot,
    	"spellSlot": spellSlot,
    	"즉발": 0,
    	"instant": 0,
    	"영창": 1,
    	"chant": 1,
    	"집중": 2,
    	"focused": 2,

    	"커스텀": choiceValues,
    	"custom": choiceValues,

    	"피니시": finishCard,
    	"finish": finishCard,

    	"승리": (battleEnd == 0),
    	"victory": (battleEnd == 0),

    	"종족": "race",
    	"직업": "class",
	    "배경": "background",
    	"성격": "ps",
	    "표정": "condition",
	    "특수상태": "specialCond",

    	"모드": gamemode,
    	"gamemode": gamemode,

    	"clothesNum": clothesNum,
	    "특수승리": specialEnd,

	    "우세": domination,
	    "불리": !domination,
    };

    const path = v.split(/\.|\[|\]/).filter(Boolean);
    let current = "";
    let common = true;
    let not = false;
    if(path[0].startsWith("!")) {
        path[0] = path[0].slice(1);
        not = true;
    }
    for (let part of path) {
        if(typeof part === 'string') {
            const pattern = /^([가-힣a-zA-Z0-9]+)\((\d+|[-가-힣a-zA-Z0-9,\s]+)\)$/;
            const match = part.match(pattern);

            let val, args;

            if (match) {
                switch(match[1]) {
                case "count":
                	val = match[2].split(',').map(s => s.trim());
                	args = val.map(v => v);
                    //args = val.map(v => returnText(v, self));
                    return countCard(current, args[0], args[1]);
                	break;
                case "countType":
                	val = match[2].split(',').map(s => s.trim());
                	args = val.map(v => v);
                    //args = val.map(v => returnText(v, self));
                    return countCardType(current, args[0], args[1]);
                	break;
                case "randomCard":
                	val = match[2].split(',').map(s => s.trim());
                	args = val.map(v => v);
                    return randomCard(args[0], args[1]);
                	break;
                case "selectCards":
                	val = match[2].split(',').map(s => s.trim());
                	args = val.map(v => v);
                	if(args.length < 3) {
                		args.push("all");
                	}
                    return selectCards(current, args[0], args[1], args[2]);
                	break;
                default:
                    break;
                }
            }
        }
        if (replacements[part] !== undefined) {
            part = replacements[part];
        }

        switch(part) {
        case "specialV01":
        	part = returnText("자신.기록.전체.사용.count(type, 패널티)", self) + returnText("자신.기록.전체.버림.count(type, 패널티)", self);
        	break;
        case "specialV02":
        	part = nelson;
        	break;
        case "specialV03":
        	part = trace;
        	break;
        case "specialV04":
        	part = magicMissile;
        	break;
        case "specialV06":
        	part = returnText("플레이어.기록.전체.버림.length", self)+returnText("플레이어.기록.전체.변형.length", self)+returnText("플레이어.기록.전체.결합.length", self);
        	break;
        case "specialV07":
        	part = Math.floor(returnText("자신.기록.이번.버림.length", self)/4);
        	break;
        case "specialV08":
        	part = spore;
        	break;
        case "specialV08-1":
        	part = real_spore;
        	break;
        case "specialV09":
        	part = selfObj.state.filter(st => st.tags.includes("기본독")).reduce((acc, po) => acc + po.stack, 0);
        	break;
        case "specialV10":
        	part = vitality;
        	break;
        }

        if (!current) {
            current = part;
        } else {
	        common = true;
            switch(part) {
            case "all":
            	let tempRecord = deepCopy(recordForm);
            	for(let tr of current) {
            		tempRecord.use = tempRecord.use.concat(tr.use);
            		tempRecord.discard = tempRecord.discard.concat(tr.discard);
            		tempRecord.transform = tempRecord.transform.concat(tr.transform);
            		tempRecord.combine = tempRecord.combine.concat(tr.combine);
            		for(let ev in tr.event) {
            			if(Array.isArray(tempRecord.event[ev])) {
            				tempRecord.event[ev] = tempRecord.event[ev].concat(tr.event[ev]);
            			} else if(typeof tempRecord.event[ev] === 'object' && tempRecord.event[ev] !== null) {
            				for(let tev in tempRecord.event[ev]) {
            					tempRecord.event[ev][tev] += tr.event[ev][tev];
            				}
            			} else {
            				tempRecord.event[ev] += tr.event[ev];
            			}
            		}
            	}
            	current = tempRecord;
            	current.vanish = [...current.discard, ...current.transform, ...current.combine];
            	common = false;
            	break;
            case "thisTurn":
            	current = (current.length > 0)?deepCopy(current[round - 1]):deepCopy(recordForm);
            	current.vanish = [...current.discard, ...current.transform, ...current.combine];
            	common = false;
            	break;
            case "lastTurn":
            	current = (current.length > 1)?current[round - 2]:deepCopy(recordForm);
            	current.vanish = [...current.discard, ...current.transform, ...current.combine];
            	common = false;
            	break;
            case "recentTurn":
            	let lastRecord = (current.length > 1)?deepCopy(current[round - 2]):deepCopy(recordForm);
            	current = (current.length > 0)?deepCopy(current[round - 1]):deepCopy(recordForm);
            	current.use = current.use.concat(lastRecord.use);
        		current.discard = current.discard.concat(lastRecord.discard);
        		current.transform = current.transform.concat(lastRecord.transform);
        		current.combine = current.combine.concat(lastRecord.combine);
        		for(let ev in lastRecord.event) {
        			if(Array.isArray(current.event[ev])) {
        				current.event[ev] = current.event[ev].concat(lastRecord.event[ev]);
        			} else if(typeof current.event[ev] === 'object' && current.event[ev] !== null) {
        				for(let tev in current.event[ev]) {
        					current.event[ev][tev] += lastRecord.event[ev][tev];
        				}
        			} else {
        				current.event[ev] += lastRecord.event[ev];
        			}
        		}

            	current.vanish = [...current.discard, ...current.transform, ...current.combine];
            	common = false;
            	break;

            case "remainExcite":
            	current = Math.max(current.exciteL - current.excite, 0);
            	common = false;
            	break;
            case "remainOrgasm":
            	current = Math.max(current.orgasmL - current.orgasm, 0);
            	common = false;
            	break;
            }
        	if(common) {
	            if (current[part] !== undefined) {
	                current = current[part];
	            } else {
	                current = null;
	            }
	        }
        }
    }
    if(not) {
        current = !current;
    }
    if(current === undefined || current === null) {
    	return false;
    }
    return current;
}

function isNeedReplace(str) {
	if (typeof str === 'number') {
		return false;
	}
    if(str.indexOf('.') === -1) {
        return true;
    }
    if(str.startsWith('.') || str.endsWith('.')) {
        return false;
    }
    const punctuation = /[\s.,!?]/;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            if (i > 0 && punctuation.test(str[i - 1])) {
                return false;
            }
            if (i < str.length - 1 && punctuation.test(str[i + 1])) {
                return false;
            }
        }
    }
    return true;
}

function countCard(cards, category, value=null) {
	if(category == "all") {
		return cards.length;
	}
	let count = 0;
	for(let card of cards) {
		if(card[category]) {
			if((category == 'tags' && (card.tags.includes(value) || (value == "변형목적" && card.type == "패널티"))) || card[category] == value || (category == 'class' && value == "직업" && ["전사", "암살자", "마술사", "치유사"].includes(card.class)) || (card.id == 'MA-MC-004' && category == 'id' && cardDB[value].tags.includes('마도진'))) {
				count += 1;
			}
		}
	}
	return count;
}
function countCardType(cards, category, value=null) {
	const uniqueIds = new Set();

	if(category == "all") {
		cards.forEach(function(cd) {
			uniqueIds.add(cd.id);
		})
	} else {
		cards.filter(cd => cd[category] && ((category == 'tags' && cd.tags.includes(value)) || cd[category] == value || (category == 'class' && value == "직업" && ["전사", "암살자", "마술사", "치유사"].includes(card.class)) || (cd.id == 'MA-MC-004' && category == 'id' && cardDB[value].tags.includes('마도진')))).forEach(function(cd) {
			uniqueIds.add(cd.id);
		})
	}
  	return uniqueIds.size;
}

const selectedTransc = [];

function randomCard(category, value=null) {
	let cardPool;
	if(category == "all") {
		cardPool = Object.keys(cardDB).filter(function(id) {
			const card = cardDB[id];
		    return card.tags.includes("덱빌딩") && card.type != "패널티" && card.type != "체위" && (card.class == '중립' || card.class == choiceValues.class);
		});
	} else {
		cardPool = Object.keys(cardDB).filter(function(id) {
			const card = cardDB[id];
			if(category == 'type') {
				switch(value) {
				case "공격":
				case "보조":
				case "체위":
					return card.tags.includes("덱빌딩") && (card.class == '중립' || card.class == choiceValues.class) && card[category] == value;
					break;
				case "패널티":
					if(player.state.some(st => st.id == "AD-WA-BG8-001")) {
						return id == "PN-010";
					} else {
						return card.tags.includes("덱빌딩") && card[category] == value && !(id == "PN-009" && round >= 6) && !(id == "PN-008" && player.orgasm >= player.orgasmL - 1) && !(id == "PN-007" && player.excite >= player.exciteL - 1);
					}
					break;
				}
			}
			if(category == 'class') {
				switch(value) {
				case "중립":
					return card.type != '단점' && card.type != '패널티' && card.type != "체위" && card.tags.includes("덱빌딩") && card[category] == value;
					break;
				case "중립공격":
					return card.type == '공격' && card.tags.includes("덱빌딩") && card.class == '중립';
					break;
				case "직업":
					return card.tags.includes("덱빌딩") && card.type != "체위" && card[category] == choiceValues.class;
					break;
				default:
					return card.tags.includes("덱빌딩") && card[category] == value;
					break;
				}
			}
			if(category == 'rarity') {
				return card.tags.includes("덱빌딩") && card.type != "체위" && card.class == choiceValues.class && card[category] == value;
			}
			if(category == 'tags') {
				switch(value) {
				case "초월":
					return card.tags.includes(value) && (!selectedTransc.includes(card.id) || selectedTransc.length >= 4);
					break;
				case "제조":
					return poisonSac.some(po => card.id == po.id) && card.tags.includes(value) && !deck.some(cd => card.id == cd.id) && !enemy.state.some(st => card.id + "-1" == st.id);
					break;
				case "즉발 마술":
					return card.id != "MA-MG-EA-002" && card.tags.includes(value);
					break;
				case "마도진":
					if(player.state.some(st => st.id == "AD-MA-BG5-001")) {
						return card.tags.includes('마도진') && deck.some(cd => (id == 'MA-MC-001' && cd.tags.includes("진홍색 마도진")) || (id == 'MA-MC-002' && cd.tags.includes("담청색 마도진")) || (id == 'MA-MC-003' && cd.tags.includes("황금색 마도진")) || (id == 'MA-MC-004' && cd.tags.includes("순백색 마도진")) );
					} else {
						return card.type == '마도진' && id != 'MA-MC-004';
					}
					break;
				case "서막조건":
					return (prophecy[0] == 1 && card.class == "중립") || (prophecy[0] == 2 && card.type == "패널티") || (prophecy[0] == 3 && card.tags.includes("보석")) || (prophecy[0] == 4 && card.tags.includes("마술"));
					break;
				case "중막조건":
					return (prophecy[1] == 1 && card.id == "MA-MC-001") || (prophecy[1] == 2 && card.id == "MA-MC-002") || (prophecy[1] == 3 && card.id == "MA-MC-003");
					break;
				case "종막조건":
					return (prophecy[2] == 1 && card.tags.includes("집중 마술")) || (prophecy[2] == 2 && card.id == "MA-MC-004") || (prophecy[2] == 3 && card.tags.includes("마술") && !spellSlot.some(spell => spell.id == card.id)) || (prophecy[2] == 4 && card.tags.includes("두번변형됨"));
					break;
				case "정수":
					return card.tags.includes("기본정수") && (!player.state.some(st => st.id == "AD-HE-ALL-002") || essences.length == 0 || essences.some(es => es.id == card.id));
					break;
				case "포자":
					return card.tags.includes(value) && (card.id != "B6-PA-001-4" || deck.some(cd => cd.tags.includes(value) && cd.id != "B6-PA-001-4"));
					break;
				case "규율":
					return card.tags.includes(value) && (card.id != "B8-PA-001-2" || round >= 2) && (card.id != "B8-PA-001-4" || deck.some(cd => cd.type == "패널티")) && (card.id != "B8-PA-001-5" || lewd <= 3) && (card.id != "B8-PA-001-6" || ([3,5,7,8].includes(round)) || ([4,6].includes(round) && player.excite > 0));
					break;
				default:
					return card.tags.includes(value);
					break;
				}
			}
		    return card[category] == value;
		});
	}
	cardPool = cardPool.filter(id => !cardDB[id].tags.includes("생성불가"))
	if(category == "tags" && value == "마도진" && cardPool.length == 0) {
		cardPool = ["MA-MC-001", "MA-MC-002", "MA-MC-003"];
	}
	if(category == "tags" && value == "제조" && cardPool.length == 0) {
		cardPool = poisonSac.map(po => po.id);
	}
	let result = (cardPool.length)?getRandom(cardPool):null
	return result;
}

function selectCards(cards, category, value=null, count="all") {
	if(category == "all") {
		let result = cards.slice().filter(cd => !cd.tags.includes("불가침"));
		if(value == "패널티제외") {
			result = result.filter(cd => cd.type != "패널티");
		}
		if(value == "탈의제외") {
			result = result.filter(cd => cd.type != "탈의");
		}
		if(value == "추가카드제외") {
			result = result.filter(cd => cd.cond != false && !cd.effect.some(e => e.type == "maxUse") && !cd.tags.includes("자동시전"));
		}
		if(value == "조르기제외") {
			result = result.filter(cd => cd.id != "AS-NM-AT-000");
		}
		if(value == "사용가능") {
			result = result.filter(cd => cd.cond != false);
		}
		if(value == "초월제외") {
			result = result.filter(cd => cd.cond != false && !cd.tags.includes('초월'));
		}
		if(value == "깨달음") {
			result = result.filter(cd => cd.cond != false && !cd.tags.includes('초월') && cd.id != 'AD-NT-TR-BG5-001-1');
		}
		if(value == "버리기가능") {
			result = result.filter(cd => !cd.tags.includes("버리기불가"));
		}
		if(value == "결합가능") {
			result = result.filter(cd => !cd.tags.includes("결합불가"));
			const matchingValues = result.filter(cd => cd.effect.some(e => e.trigger == "choice"));
		    if (matchingValues.length > 1) {
		    	const randomValue = matchingValues[Math.floor(Math.random() * matchingValues.length)];
		    	result.filter(cd => !cd.effect.some(e => e.trigger == "choice") || cd === randomValue);
		    }
		}
		if(value == "포자제외") {
			result = result.filter(cd => !cd.tags.includes("포자"));
		}
		if(value == "결속") {
			result = result.filter(cd => cd.bounded && cd.bounded.length);
		}
		if(count == "all") {
			return result;
		}

		for (let i = result.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[result[i], result[j]] = [result[j], result[i]];
		}

		return result.slice(0, Math.min(count, result.length));
	}
	let result = [];
	for(let card of cards) {
		if(card.tags.includes("불가침")) {
			continue;
		}
		if(card[category]) {
			if((category == 'tags' && (card.tags.includes(value) || (value == "변형목적" && card.type == "패널티"))) || (category == 'class' && value == '직업' && card[category] == choiceValues.class) || 
				(category == 'tags' && value == '서막조건' && ( (prophecy[0] == 1 && card.class == "중립") || (prophecy[0] == 2 && card.type == "패널티") || (prophecy[0] == 3 && card.tags.includes("보석")) || (prophecy[0] == 4 && card.tags.includes("마술")) )) || 
				(category == 'tags' && value == '중막조건' && ((prophecy[1] == 1 && card.id == "MA-MC-001") || (prophecy[1] == 2 && card.id == "MA-MC-002") || (prophecy[1] == 3 && card.id == "MA-MC-003"))) || 
				(category == 'tags' && value == '종막조건' && ((prophecy[2] == 1 && card.tags.includes("집중 마술")) || (prophecy[2] == 2 && card.id == "MA-MC-004") || (prophecy[2] == 3 && card.tags.includes("마술") && !spellSlot.some(spell => spell.id == card.id)) || (prophecy[2] == 4 && card.tags.includes("두번변형됨")))) || 
				card[category] == value) {
				result.push(card);
			}
		}
	}
	if(count == "all") {
		return result;
	}
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	if(category == "tags" && value == "정수") {
		const avoidDuplicates = ["HE-IN-006", "HE-IN-008", "HE-IN-009"];
		const uniqueSet = new Set();
		let tempResult = [];
		for(let i = 0; i < result.length; i++) {
			if(!(avoidDuplicates.includes(result[i].id) && uniqueSet.has("HE-IN-006")) && !(result[i].id == "HE-IN-006" && avoidDuplicates.some(id => uniqueSet.has(id)))) {
				uniqueSet.add(result[i].id);
				tempResult.push(result[i]);
			}
		}
		if(tempResult.length >= count) {
			result = tempResult;
		}
		for(let i = 0; i < count - 1; i++) {
			if(result[i].id == "HE-IN-002") {
				let cardBack = result.splice(i, 1)[0];
        		result.splice(count - 1, 0, cardBack);
			}
		}
	}
	return result.slice(0, Math.min(count, result.length));
}

async function battleStart() {
	await showMessage("결투 시작");
    addLogText("【 결투 시작 】")
	await wait(500);
	await addLine(line["조우"]);
	await addLine(line["등장"]);

	initializeTabs();
}

async function roundStart() {
	maxUse = 1;
	maxUseE = 1;
	round += 1;
	phase = "roundStart";

	player.record.push(deepCopy(recordForm));
	enemy.record.push(deepCopy(recordForm));

	changeTurnSpeed("reset");

	if(round == 1) {
		document.getElementById("useActions").style.display = 'flex';
		const pDeck = deck.slice();
		pDeck.sortCards('priority');
		for(let cd of pDeck) {
			await actionEffect(cd, "gameStart");
			if(battleEnd != -1) {
				break;
			}
		}
		const eDeck = opDeck.slice();
		eDeck.sortCards('priority');
		for(let cd of eDeck) {
			await actionEffect(cd, "gameStart");
			if(battleEnd != -1) {
				break;
			}
		}
		const pState = player.state.slice();
		pState.sortCards('priority');
		for(let st of pState) {
			await actionEffect(st, "gameStart");
			if(battleEnd != -1) {
				break;
			}
		}
		const eState = enemy.state.slice();
		eState.sortCards('priority');
		for(let st of eState) {
			await actionEffect(st, "gameStart");
			if(battleEnd != -1) {
				break;
			}
		}

		if(battleEnd != -1) {
			combatEnd();
			return 0;
		}
	}

	await showMessage("라운드 "+round);
    addLogText("<br>========== 『 라운드 "+round+" 』 ==========")
    addLogText("<br>【 라운드 시작 】");

    player.effectActive = [];
    enemy.effectActive = [];

    if(choiceValues.class == '치유사') {
    	const corruptNumber = document.getElementById("corrupt");
    	var preV = corrupt;
    	corrupt = Math.max(corrupt + options.corruptIncrease, 0);
    	infoUpdate();
    	addLogText("타락 "+(options.corruptIncrease >= 0?"+":"")+options.corruptIncrease+" <i>( "+(preV)+" -> "+corrupt+" )</i>");
    	animationEmphasis(corruptNumber)
    	animationColorizeNum(corruptNumber, 'rgba(160, 50, 160, 0.5)');
    	await animationNegative(document.getElementById("playerPortrait"), false);

    }

    if(battleEnd == -1) {
	    const pDeck = deck.slice();
		pDeck.sortCards('priority');
		for(let cd of pDeck) {
			await actionEffect(cd, "turnStart");
			if(battleEnd != -1) {
				break;
			}
		}
	}

	if(battleEnd == -1) {
		const eDeck = opDeck.slice();
		eDeck.sortCards('priority');
		for(let cd of eDeck) {
			await actionEffect(cd, "turnStart");
			if(battleEnd != -1) {
				break;
			}
		}
	}

	if(battleEnd == -1) {
		const pState = player.state.slice();
		pState.sortCards('priority');
		for(let st of pState) {
			await stateEffect(st, "turnStart");
			if(battleEnd != -1) {
				break;
			}
		}
	}

	if(battleEnd == -1) {
		const eState = enemy.state.slice();
		eState.sortCards('priority');
		for(let st of eState) {
			await stateEffect(st, "turnStart");
			if(battleEnd != -1) {
				break;
			}
		}
	}
	await boundCheck();
    changeTurnSpeed("reset");

	if(battleEnd != -1) {
		combatEnd();
		return 0;
	}

	const actionDiv = document.getElementById("useActions");
	actionDiv.style.display = "none";

	const battleContentDivs = document.querySelectorAll('.battleContent');
	battleContentDivs.forEach(battleContentDiv => {
	    const battleCardDivs = battleContentDiv.querySelectorAll('.card');
	    battleCardDivs.forEach(battleCardDiv => {
	        battleCardDiv.remove();
	    });
	});

    deck.forEach(function(cd) {
    	const newCardDiv = createCard(cd, 28, true, 10);
    	document.getElementById('playerDeck').appendChild(newCardDiv);
    });
    player.state.forEach(function(st) {
    	const newStateDiv = createCard(st, 28, true, 11);
    	document.getElementById('playerState').appendChild(newStateDiv);
    });
    enemy.state.forEach(function(st) {
    	const newStateDiv = createCard(st, 28, true, 11);
    	document.getElementById('enemyState').appendChild(newStateDiv);
    });
    if(!enemy.state.some(st => st.id == "B7-PA-001+")) {
		enemyActionSelect();
	} else {
		const cardDiv = createCard(cardDB["B7-PA-001-1+"], 28, true, 11);
		document.getElementById('enemyAction').appendChild(cardDiv);
		adjustCardFontSize(cardDiv)
	}

	await wait(500);
	const deckCards = document.getElementsByClassName("battleCard");
	for(let i=0; i<deck.length; i++) {
		const card = deckCards[i];
		const data = deck[i];
		if(player.state.some(st => st.id == "DA-NT-BG5-001")) {
			card.querySelector("img").src = imageSrc+"card/DA-NT-BG5-001-1.webp";
			card.querySelector("p.card-description").innerHTML = createCardText(cardDB["DA-NT-BG5-001-1"]);
			card.querySelector("div.card-name").innerHTML = cardDB["DA-NT-BG5-001-1"].name[language];
		} else if(player.state.some(st => st.id == "B6-SU-003-1")) {
			card.querySelector("img").src = imageSrc+"card/B6-SU-003-2.webp";
			var palette = cardColor["버섯남자"];

			const pDescription = card.querySelector("p.card-description");
			const pName = card.querySelector("div.card-name");
			const pType = card.querySelector("div.card-type");

			card.style.background = palette.border;
			pDescription.style.background = palette.textbox;
			pName.style.background = palette.name;
			pType.style.background = card.rarity == "일반"?cardColor["등급"].normal:(card.rarity == "숙련"?cardColor["등급"].expert:(card.rarity == "궁극"?cardColor["등급"].ultimate:palette.name));
			pDescription.innerHTML = createCardText(cardDB["B6-SU-003-2"]);
			pType.innerHTML = getWord(cardDB["B6-SU-003-2"].type);
			pName.innerHTML = cardDB["B6-SU-003-2"].name[language];
		} else {
			cardTextUpdate(card, data);
		}
	}
	const playerStates = document.getElementById("playerState").querySelectorAll("div.card");
	for(let i=0; i<playerStates.length; i++) {
		const card = playerStates[i];
		const data = player.state[i];
		cardTextUpdate(card, data);
	}
	const enemyStates = document.getElementById("enemyState").querySelectorAll("div.card");
	for(let i=0; i<enemyStates.length; i++) {
		const card = enemyStates[i];
		const data = enemy.state[i];
		cardTextUpdate(card, data);
	}

	phase = "turn";

	clickable = true;
	returnAllTabs();
	infoUpdate()
	buttonUpdate();
	battleCardUpdate();
}

function checkSelectable(type, card, category, value) {
	if(player.select[action.length - 1].includes(card)) {
		return true;
	}
	if(card.tags.includes("불가침")) {
		return false;
	}
	if(type == "discard" && (card.tags.includes("버리기불가") || (player.state.some(st => st.id == "DA-WA-ALL-001") && card.type == "패널티") )) {
		return false;
	}
	if(type == "transform" && (card.tags.includes("변형불가"))) {
		return false;
	}
	if(type == "use" || type == "combine") {
		if(card.tags.includes("결합불가") || card.tags.includes("결합") || (category == "사용가능" && !checkCondition(card.cond, 1))) {
			return false;
		}
		if(card.effect.some(e => e.trigger == "choice") && player.select[player.select.length - 1].some(cd => cd.effect.some(e => e.trigger == "choice"))) {
			return false;
		}
	}
	if(category == "mix") {
		if((card.tags.includes("정수") || player.select[player.select.length - 1].some(cd => cd.tags.includes("정수"))) && !card.tags.includes("결합불가") && !card.tags.includes("결합")) {
			return true;
		} else {
			return false;
		}
	}
	if(category == "all") {
		return true;
	}
	if(category == "tags" && card.tags.includes(value)) {
		return true;
	}
	if(category == "tags" && value == "서막조건") {
		if((prophecy[0] == 1 && card.class == "중립") || (prophecy[0] == 2 && card.type == "패널티") || (prophecy[0] == 3 && card.tags.includes("보석")) || (prophecy[0] == 4 && card.tags.includes("마술"))) {
			return true;
		}
	}
	if(category == "tags" && value == "중막조건") {
		if((prophecy[1] == 1 && card.id == "MA-MC-001") || (prophecy[1] == 2 && card.id == "MA-MC-002") || (prophecy[1] == 3 && card.id == "MA-MC-003")) {
			return true;
		}
	}
	if(category == "tags" && value == "종막조건") {
		if((prophecy[2] == 1 && card.tags.includes("집중 마술")) || (prophecy[2] == 2 && card.id == "MA-MC-004") || (prophecy[2] == 3 && card.tags.includes("마술") && !spellSlot.some(spell => spell.id == card.id)) || (prophecy[2] == 4 && card.tags.includes("두번변형됨"))) {
			return true;
		}
	}
	if(card[category] == value) {
		return true;
	}
	if(card.id == 'MA-MC-004' && category == 'id' && cardDB[value].tags.includes('마도진')) {
		return true;
	}

	return false;
}


function useCard(div) {
	const card = div;
	if(card.classList.contains("disabledCard")) {
		return 0;
	}
	//const id = card.getAttribute('data-id');
	const children = Array.from(div.parentElement.children);
    const index = children.indexOf(div) - 1;
    if(!selectMode || action[action.length - 1] == index) {
		if(card.classList.contains("active")) {
			if (index !== -1) {
				//actionEffect(deck[index], "unselected");
				for(let sc of player.select[action.indexOf(index)]) {
					let sIndex = deck.indexOf(sc) + 1;
					children[sIndex].classList.remove("selected");
				}
				player.select.splice(action.indexOf(index), 1);
			    action.splice(action.indexOf(index), 1);
			}
			if(selectMode) {
				selectMode = false;
				selectType = null;
				clickable = true;
				buttonUpdate();
			}
			card.classList.remove("active");
			useCount -= 1;
		} else {
			action.push(index);
			player.select.push([]);
			//actionEffect(deck[index], "selected");
			for(let e of deck[index].effect) {
				if(e.trigger == "choice" && checkCondition(e.cond, 1)) {
					selectMode = true;
					selectType = e.type;
					clickable = false;
					selectCond.category = e.range.category;
					selectCond.value = e.range.value;
					if(typeof e.range.count == 'number') {
						selectCount = e.range.count;
					} else {
						const cards = document.getElementsByClassName("battleCard");
						selectCount = 0;
						for(let i=0; i<deck.length; i++) {
							let cardData = deck[i];
							if(i != index && checkSelectable(e.type, cardData, selectCond.category, selectCond.value) && !(cards[i].classList.contains("active") || cards[i].classList.contains("selected"))) {
								selectCount++;
							}
						}
						if(e.range.count.startsWith('M')) {
							selectCount = Math.min(selectCount, parseInt(e.range.count.slice(1)));
						}
						if(selectCount == 0) {
							selectMode = false;
							selectType = null;
							clickable = true;
						}
					}
					buttonUpdate();
				}
			}
			card.classList.add("active");
			useCount += 1;
		}
	} else {
		if(card.classList.contains("selected")) {
			player.select[player.select.length - 1].splice(player.select[player.select.length - 1].indexOf(deck[index]), 1);
			card.classList.remove("selected");
			selectCount += 1;
		} else {
			player.select[player.select.length - 1].push(deck[index]);
			card.classList.add("selected");
			selectCount -= 1;

			if(selectCount == 0) {
				selectMode = false;
				selectType = null;
				clickable = true;
				buttonUpdate();
			}
		}

	}
	infoUpdate();
	battleCardUpdate();
}

function enemyActionSelect() {
	const cardPriority = champList[enemy.id].cardPriority;
	const selectPos = [];
	while(enemy.action.length < Math.min(maxUseE, useLimit)) {
		let maxPriority = -Infinity;
		const highest = [];
		let i = 0;
		for(let card of opDeck) {
			if(checkCondition(card.cond, 0) && !(enemy.ban.all) && !(enemy.ban.attack && card.type == "공격") && !(enemy.ban.support && card.type == "보조") && !(enemy.ban.uncloth && card.type == "탈의") && !(enemy.ban.penalty && card.type == "패널티") && !(enemy.mustuse.attack && card.type != "공격") && !(enemy.mustuse.support && card.type != "보조") && !(enemy.mustuse.uncloth && card.type != "탈의") && !(enemy.mustuse.penalty && card.type != "패널티") && !(enemy.mustuse.bound && !card.bounded) && !selectPos.includes(i)) {
				let priority = 0;
				if(cardPriority[card.id]) {
					for(let p of cardPriority[card.id]) {
						if(checkCondition(p.cond, 0)) {
							priority += returnText(p.priority, 0);
						}
					}
				}
				if(priority > maxPriority) {
					maxPriority = priority;
					highest.splice(0);
				}
				if(priority >= maxPriority) {
					highest.push([i, card]);
				}
			}
			i++;
		}
		if(highest.length > 0) {
			let selected = getRandom(highest);
			selectPos.push(selected[0]);
			enemy.action.push(selected[1]);
			stateEffect(selected[1], "selected");
		} else {
			break;
		}
	}

	if(!enemy.state.some(st => st.id == "B7-PA-001+")) {
		for(let card of enemy.action) {
			const cardDiv = createCard(card, 28, true, 11);

			if(enemy.state.some(st => st.id == "B7-PA-001")) {
				cardDiv.querySelector("img").src = imageSrc+"card/B7-PA-001.webp";
				cardDiv.querySelector("p.card-description").innerHTML = createCardText(cardDB["B7-PA-001-1"]);
				cardDiv.querySelector("div.card-name").innerHTML = cardDB["B7-PA-001-1"].name[language];
			}

			document.getElementById('enemyAction').appendChild(cardDiv);
			adjustCardFontSize(cardDiv);
		}
	}
}

function battleCardUpdate() {
	/*const textboxs = document.getElementsByClassName("card-text")
	for(let textbox of textboxs) {
		adjustFontSize(textbox);
	}*/
	function badcardCheck(cd) {
		if(player.state.some(st => st.id == "B2-PA-001-1" || st.id == "B2-PA-001-1+") && cd.type == "공격") {
			return true;
		}
		if(player.state.some(st => st.id == "B2-PA-001-2" || st.id == "B2-PA-001-2+") && cd.type == "보조") {
			return true;
		}
		return false;
	}

	while(action.length > Math.min(maxUse, useLimit)) {
		const _action = action.slice();
		let index = _action[_action.length - 1];
		const cardDiv = document.getElementsByClassName("battleCard")[index];
		useCard(cardDiv);
	}

	let selectable = false;
	const cards = document.getElementsByClassName("battleCard");
	for(let i=0; i<cards.length; i++) {
		const card = cards[i];
		const data = deck[i];

		if(data) {
			if(!selectMode && !checkCondition(data.cond, 1)) {
				if(card.classList.contains("active")) {
					if(action.includes(i)) {
						action.splice(action.indexOf(i), 1);
					}
					card.classList.remove("active");
					useCount -= 1;
				}
				if(!card.classList.contains("disabledCard")) {
					card.classList.add("disabledCard");
				}
			} else {
				if(badcardCheck(data) ^ card.classList.contains("bad")) {
					card.classList.toggle("bad");
				}

				if((data.meet != undefined && checkCondition(data.meet, 1)) ^ card.classList.contains("meet")) {
					card.classList.toggle("meet");
				}

				if(!card.classList.contains("disabledCard") ^ ((selectMode && ((card.classList.contains("active") && action[action.length - 1] == i) || (!card.classList.contains("active") && checkSelectable(selectType, data, selectCond.category, selectCond.value) ) ) && ((!card.classList.contains("selected") || player.select[action.length - 1].includes(data))) ) || (!selectMode && !card.classList.contains("selected") && ((action.length < Math.min(maxUse, useLimit) && cardUsableCheck(data)) || card.classList.contains("active"))) ) ) {
					card.classList.toggle("disabledCard");
				}

				if(!card.classList.contains("active") && !card.classList.contains("disabledCard")) {
					selectable = true;
				}
			}
		}
	}

	const alertDiv = document.getElementById("cardSelectAlert");
	alertDiv.style.color = "red";
	if(clickable && selectable && action.length == 0) {
		alertDiv.innerHTML = "카드 미선택! "
	} else if(clickable && selectable && action.length < Math.min(maxUse, useLimit)) {
		alertDiv.innerHTML = "카드를 더 고를 수 있음! "
	} else if(selectMode) {
		alertDiv.innerHTML = "카드를 선택해야 함! "
	} else {
		alertDiv.style.color = "black";
		alertDiv.innerHTML = ""
	}
	if(selectMode) {
		alertDiv.innerHTML += "("+selectCount+"장 남음)"
	} else {
		alertDiv.innerHTML += "("+action.length+"/"+maxUse+")"
	}
}

function cardTextUpdate(div, card) {
	const img1 = div.querySelector('img.card-image-normal');
	const img2 = div.querySelector('img.card-image-original');

    if(card.parents && !card.noInherit) {
    	img1.src = imageSrc+"card/"+card.parents+".webp";
    	if(img2) {
    		img2.src = imageSrc+"card/"+card.parents+"-real.webp";
    	}
    } else {
	    img1.src = imageSrc+"card/"+card.id+".webp";
    	if(img2) {
    		img2.src = imageSrc+"card/"+card.id+"-real.webp";
    	}
	}

	var palette;
	if(card.tags.includes("부정적") || card.type == '패널티') {
		palette = cardColor["부정적"];
	} else if(card.bounded) {
		palette = cardColor["버섯남자"];
	} else {
		palette = cardColor[card.class];
	}

	const pDescription = div.querySelector("p.card-description");
	const pName = div.querySelector("div.card-name");
	const pType = div.querySelector("div.card-type");

	div.style.background = palette.border;
	pDescription.style.background = palette.textbox;
	pName.style.background = palette.name;
	pType.style.background = card.rarity == "일반"?cardColor["등급"].normal:(card.rarity == "숙련"?cardColor["등급"].expert:(card.rarity == "궁극"?cardColor["등급"].ultimate:palette.name));

	if(card.text) {
    	pDescription.innerHTML = card.text[language];
    } else {
	    pDescription.innerHTML = createCardText(card);
	}
	if(pName) {
		pName.innerHTML = card.name[language];
	}
	if(pType) {
		pType.innerHTML = getWord(card.type);
	}

	if(card.tags.includes("만능")) {
		div.classList.add("wildcard");
	} else if(div.classList.contains("wildcard")) {
		div.classList.remove("wildcard");
	}
	adjustCardFontSize(div);
}

function cardUsableCheck(card) {
	if(player.ban.all) {
		return false;
	}
	if((player.ban.attack || (round == 1 && !player.state.some(st => st.id == "AD-NT-EL-BG6-001"))) && card.type == "공격") {
		return false;
	}
	if(player.ban.support && card.type == "보조") {
		return false;
	}
	if(player.ban.posture && card.type == "체위") {
		return false;
	}
	if(player.ban.penalty && card.type == "패널티") {
		return false;
	}
	if(player.mustuse.attack && card.type != "공격") {
		return false;
	}
	if(player.mustuse.support && card.type != "보조") {
		return false;
	}
	if(player.mustuse.posture && card.type != "체위") {
		return false;
	}
	if(player.mustuse.penalty && card.type != "패널티") {
		return false;
	}
	if(player.mustuse.combination && !card.tags.includes("결합물")) {
		return false;
	}
	if(player.mustuse.bound && !card.bounded) {
		return false;
	}
	if(player.state.some(st => st.id == "DA-NT-BG6-002") && card.type == "패널티") {
		return false;
	}
	if(player.state.some(st => st.id == "DA-NT-BG7-002") && round == 1) {
		return false;
	}
	if(player.state.some(st => st.id == "DA-AS-BG4-001") && round <= 3 && (card.tags.includes("제조") || card.id == "AS-NM-AT-000")) {
		return false;
	}
	if(card.tags.includes("마도진")) {
		return false;
	}
	if(card.tags.includes("자동시전")) {
		return false;
	}

	return true;
}

function battleEndCheck() {
	if(battleEnd == -1) {
    	if(player.orgasm >= player.orgasmL) {
    		player.condition = "ecstasy2";
    		changePortrait("ecstasy2", 1);
    		battleEnd = 1;
    	} else if(enemy.orgasm >= enemy.orgasmL) {
    		battleEnd = 0;
    	}
    }
}

async function combat() {
	phase = "battle";
	await showMessage("전투");

	const deckDiv = document.getElementById("playerDeck");
	const opActionDiv = document.getElementById("enemyAction");

	for(let card of deckDiv.querySelectorAll("card")) {
		if(card.classList.contains("active")) {
			card.classList.remove("active");
		}
		if(card.classList.contains("disabledCard")) {
			card.classList.remove("disabledCard");
		}
	}

	const battlecards = document.getElementsByClassName("battleCard");
	for(let bc of battlecards) {
		if(bc.classList.contains("active")) {
			bc.classList.remove("active");
		}
		if(bc.classList.contains("selected")) {
			bc.classList.remove("selected");
		}
	}

	const actionDiv = document.getElementById("useActions");

	const actions = [];

	for(let cd of deck) {
		if(cd.tags.includes("자동시전")) {
			player.action.push(cd);
		}
	}
	let preIndex = player.action.length;

	for(let index of action) {
		const card = deck[index];
		player.action.push(card);
	}

	actions.push(...player.action);
	actionDiv.style.display = "flex";

	let turnOwner = 1;
	if(player.action.length == 0) {
		turnOwner = 0;
		if(enemy.state.some(st => st.id == "B7-PA-001+")) {
			enemyActionSelect();
		}
		actions.push(...enemy.action);
	}

	await wait(1000);

	for(let index = 0; index < actions.length && battleEnd == -1; index++) {
		let card, actor, actorObj, opObj;
		card = actions[index];
		if(turnOwner == 1) {
			actor = 1;
			actorDeck = deck;
			actorObj = player;
			opObj = enemy;
		} else {
			actor = 0
			actorDeck = opDeck;
			actorObj = enemy;
			opObj = player;
		}

		if(!actorDeck.includes(card)) {
			continue;
		}

		var cardText = createCardText(card);
		cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
		addLogText("<br>【 "+actorObj.name+"의 <span title=\""+cardText+"\"><b>["+card.name[language]+"]</b></span> 효과 】", null, 0, true, "", cardText);

		card.played = true;
		await actionEffect(card, "used", turnOwner == 1?index-preIndex:0, 32, false);

		if(actor == 0) {
			enemy.record[round - 1].use.push(card);
			if(!card.tags.includes("클라이맥스")) {
				const opDeckIndex = opDeck.indexOf(card);
				opDeck.splice(opDeckIndex, 1);
			}
		}
		if(actor == 1) {
			if(choiceValues.class == "암살자" && battleEnd == -1 && !options.wetnessBan) {
				var preV = wetness;
				wetness = Math.min(wetness + options.wetnessIncrease, maxWetness);
				infoUpdate();
				addLogText("젖음 +"+options.wetnessIncrease+" <i>( "+(preV)+" -> "+wetness+" )</i>");
				let wetnessNumber = document.getElementById("wetness");
				animationEmphasis(wetnessNumber);
				await animationColorizeNum(wetnessNumber, 'rgba(0, 255, 255, 0.5)');
			}
			player.record[round - 1].use.push(card);

			if(card.cast !== undefined) {
				card.cast--;
				if(card.cast <= 0) {
					await actionEffect(card, "expired", 0, 28);
					card.cast = cardDB[card.id].cast;
					player.record[round - 1].event.expiredSpell.push(card);
					var _states = player.state.slice();
		        	for(let st of _states) {
		        		await stateEffect(st, "spellExpired");
					}
					const deckIndex = deck.indexOf(card);
					deck.splice(deckIndex, 1);
				}
			} else if((!options.maintain || card.tags.includes("무조건소모"))) {
				const deckIndex = deck.indexOf(card);
				deck.splice(deckIndex, 1);
			}

			if(index == actions.length - 1) {
				turnOwner = 0;
				if(enemy.state.some(st => st.id == "B7-PA-001+")) {
					enemyActionSelect();
				}
				actions.push(...enemy.action);
			}
		}
		await boundCheck();
		infoUpdate();

		if(battleEnd != -1 && card.tags.includes("피니셔")) {
			finishCard = card;
			card.tags.push("피니시");
		}
	}
	turnSpeed = combatOptions.animation_speed;
	if(battleEnd != -1) {
		await wait(500);
	}

	var opCards = opActionDiv.querySelectorAll("div.card");
    opCards.forEach(function(element) {
        element.remove();
    });

	var usedCards = actionDiv.querySelectorAll("div.card");
    usedCards.forEach(function(element) {
        element.remove();
    });

    changeTurnSpeed("reset", 1);

    actionDiv.style.transform = '';
    if(battleEnd == -1) {
    	addLogText("<br>【 라운드 종료 】");
    	await wait(500);
		await showMessage("라운드 종료");
		await wait(500);
    }

	const pState = player.state.slice();
	pState.sortCards('priority');
	for(let st of pState) {
		if(battleEnd != -1) {
			break;
		}
		await stateEffect(st, "turnEnd");
		if(st.expiration == "turnEnd") {
			st.duration -= 1;
			if(st.duration <= 0) {
				await actionEffect(st, "expired");
				player.state.splice(player.state.indexOf(st), 1);
			}
		}
		battleEndCheck();
	}

	const eState = enemy.state.slice();
	eState.sortCards('priority');
	for(let st of eState) {
		if(battleEnd != -1) {
			break;
		}
		await stateEffect(st, "turnEnd");
		if(st.expiration == "turnEnd") {
			st.duration -= 1;
			if(st.duration <= 0) {
				await actionEffect(st, "expired");
				enemy.state.splice(enemy.state.indexOf(st), 1);
			}
		}
		battleEndCheck();
	}

	const pDeck = deck.slice();
	pDeck.sortCards('priority');
	for(let cd of pDeck) {
		if(battleEnd != -1) {
			break;
		}
		await actionEffect(cd, "turnEnd");
		battleEndCheck();
	}
	const eDeck = opDeck.slice();
	eDeck.sortCards('priority');
	for(let cd of eDeck) {
		if(battleEnd != -1) {
			break;
		}
		await actionEffect(cd, "turnEnd");
		battleEndCheck();
	}

	wetness = minWetness;
	infoUpdate();

	if(round >= maxRound && battleEnd == -1) {
		if(player.state.some(st => st.id == "BN-TR-004-1") || enemy.state.some(st => st.id == "BC5-PA-001")) {
			//await addLine(line["플레이어-시간초과"]);
			finishCard = player.state.some(st => st.id == "BN-TR-004-1")?cardDB['BN-TR-004']:cardDB['BC5-PA-001'];
			const enemyPort = document.getElementById("enemyPortrait");
			const enemyExNumber = document.getElementById("enemyExcite");
			const enemyAcNumber = document.getElementById("enemyOrgasm");
	    	animationEmphasis(enemyPort, 1.5);
	    	await animationColorize(enemyPort, 'rgba(255, 255, 255, 0.5)', 2000);
	    	enemy.orgasm = 99;
	    	enemy.real_excite = 0;
	    	infoUpdate();
	    	animationColorizeNum(enemyExNumber, 'rgba(0, 0, 255, 0.5)');
	    	await animationColorizeNum(enemyAcNumber, 'rgba(255, 0, 255, 0.5)');
			battleEnd = 0;
			round += 1;
		} else {
			await addLine(line["플레이어-시간초과"]);
			await addLine(line["플레이어-항복"]);
			changePortrait("ecstasy2", 1);
			const playerPort = document.getElementById("playerPortrait");
			const playerExNumber = document.getElementById("playerExcite");
			const playerAcNumber = document.getElementById("playerOrgasm");
	    	animationEmphasis(playerPort, 1.5);
	    	await animationColorize(playerPort, 'rgba(255, 255, 255, 0.5)', 2000);
	    	player.orgasm = 99;
	    	player.real_excite = 0;
	    	infoUpdate();
	    	animationColorizeNum(playerExNumber, 'rgba(0, 0, 255, 0.5)');
	    	await animationColorizeNum(playerAcNumber, 'rgba(255, 0, 255, 0.5)');
			addLogText("<br><br>【 시간 초과! 】")
			battleEnd = 1;
			round += 1;
		}
	}
	await boundCheck();
	changeTurnSpeed("reset");

	if(battleEnd != -1) {
		await combatEnd();
		return 0;
	}

	if(true) {
		const eventSkipHandler = (event) => {
	        if (event.key === 'Escape') {
	            eventSkip = true;
	            document.removeEventListener('keydown', eventSkipHandler);
	        }
	    };

	    document?.addEventListener('keydown', eventSkipHandler);

	    await turnEndEvent();

	    eventSkip = false;
	    document.removeEventListener('keydown', eventSkipHandler);
	}

	changePortrait(player.condition, 1);

	action.length = 0;
	player.action = [];
	player.select = [];
	enemy.action = [];
	enemy.select = [];
}

async function combatEnd() {
	eventList.splice(0);
	addLogNewline();
	if(player.state.some(st => st.id == "DA-NT-ALL-000")) {
		document.getElementById('speech-bubble').style.filter = "invert(1)";
		await addLine(line["모르베인-등장"]);
		const playerPort = document.getElementById("playerPortrait");
		await animationNegative(playerPort, true, 1000);
		if(battleEnd == 0) {
			await showMessage("승리..?", 2000);
		}
		if(battleEnd == 1) {
			await showMessage("패배..?", 2000);
		}
	} else {
		player.specialCond = null;
		if(battleEnd == 0) {
			await addLine(line["승리"]);
			await addLine(line["플레이어-승리"]);
	    	addLogText("<br><br><b>【 "+player.name+"의 승리 】</b>");
			await showMessage("승리", 2000);
		}
		if(battleEnd == 1) {
			await addLine(line["패배"]);
			await addLine(line["플레이어-패배"]);
	    	addLogText("<br><br><b>【 "+player.name+"의 패배 】</b>");
			await showMessage("패배", 2000);
		}
	}
	unlockOrientation();
	changeEvent(11);
}

let enemyScore = 0;
let playerScore = 0;
let domination = true;
let eventsRecord = [];

async function turnEndEvent() {
	const _playerRecord = player.record[round - 1];
	const _enemyRecord = enemy.record[round - 1];
	let _score = -1;
	let _specialEvent = false;
	let eventLine = `${enemy.name}-이벤트`;
	let specialCond = null;
	
	if(round == 1) {
		eventLine += "-개전";
		_specialEvent = true;
	} else {
		switch(enemy.id) {
		case "boss1":
			if(!eventsRecord.includes("고블린즈-탑승") && enemy.action.some(cd => cd.id == "B1-SU-002") && _playerRecord.event.orgasmL.down > 0) {
				eventLine += "-탑승";
				_specialEvent = true;
				_score = 0;
				enemyScore++;
				player.condition = "corrupted";
				specialCond = "mindbreak";
				playerCorrupted = true;
				eventsRecord.push("고블린즈-탑승");
			}
			break;
		case "boss2":
			if(!eventsRecord.includes("마을사람-행동불가") && player.state.some(cd => cd.id == "B2-SU-002-1")) {
				eventLine += "-행동불가";
				_specialEvent = true;
				eventsRecord.push("마을사람-행동불가");
			}
			break;
		case "boss3":
			break;
		case "boss4":
			if(!eventsRecord.includes("악동-망할꼬맹이") && enemy.condition == 'normal' && enemy.state.some(cd => cd.id == "B4-PA-001" && cd.stack >= 3)) {
				eventLine += "-망할꼬맹이";
				_specialEvent = true;
				enemy.condition = "openEye";
				changePortrait("openEye", 0);
				eventsRecord.push("악동-망할꼬맹이");
			}
			break;
		case "boss5":
			break;
		case "boss6":
			if(!eventsRecord.includes("버섯남자-정신동기화") && enemy.action.some(cd => cd.id == "B6-SU-003")) {
				eventLine += "-정신동기화";
				//changePortrait("someone", 0, true);
				_specialEvent = true;
				eventsRecord.push("버섯남자-정신동기화");
			}/* else if(eventsRecord.includes("버섯남자-정신동기화") && !eventsRecord.includes("버섯남자-정신동기화해제")) {
				eventLine += "-정신동기화해제";
				//changePortrait("normal", 0, true);
				_specialEvent = true;
				eventsRecord.push("버섯남자-정신동기화해제");
			}*/
			break;
		}

		if(!_specialEvent) {
			let _corruptCheck = false;
			if(!eventsRecord.includes("플레이어-타락") && (player.orgasm >=2 || player.orgasmL - player.orgasm <= 1)) {
				eventLine += "-타락";
				_specialEvent = true
				eventsRecord.push("플레이어-타락");
			}
			if(!eventsRecord.includes("플레이어-타락") && !eventsRecord.includes("플레이어-흥분") && player.orgasm > 0) {
				eventLine += "-흥분";
				_specialEvent = true
				eventsRecord.push("플레이어-흥분");
			}
		}
	}
	if(combatOptions.line_event && _specialEvent && line[eventLine]) {
		await wait(500);
		await addLine(line[eventLine]);
		await wait(500);
	}
	changePortrait(player.condition, 1);
	if(specialCond) {
		player.specialCond = specialCond;
	}
}

const shownCards = [];

function calculateDisplayTime(card) {
    if (combatOptions.cardWait_mode == "없음" || (combatOptions.cardWait_mode == "한 번만" && shownCards.includes(card.id))) {
        return 1//turnSpeed/2;
    } else {
        shownCards.push(card.id);
        return combatOptions.cardWait_time;
    }
}

const inDeckTrigger = ["used", "get", "discarded", "transformed", "combined", "expired"];
async function actionEffect(action, trigger="used", index=0, size=32, noImg=false, disappear=true) {
	const playerPort = document.getElementById("playerPortrait");
	const enemyPort = document.getElementById("enemyPortrait");
	const estrusNumber = document.getElementById("estrus");
	const lewdNumber = document.getElementById("lewd");
	const enemyExNumber = document.getElementById("enemyExcite");
	const enemyExLNumber = document.getElementById("enemyExciteL");
	const enemyAcNumber = document.getElementById("enemyOrgasm");
	const enemyAcLNumber = document.getElementById("enemyOrgasmL");
	const playerExNumber = document.getElementById("playerExcite");
	const playerExLNumber = document.getElementById("playerExciteL");
	const playerAcNumber = document.getElementById("playerOrgasm");
	const playerAcLNumber = document.getElementById("playerOrgasmL");

	const postureName = document.getElementById("posture");
	const lustNumber = document.getElementById("lust");
	const wetnessNumber = document.getElementById("wetness");
	const sBlockNumber = document.getElementById("sBlock");
	const corruptNumber = document.getElementById("corrupt");

	var derived;
	var defActive = false;
	var usedLust = 0;

	var actor = action.owner;

	const cardRecordData = deepCopy(cardRecordForm);
	cardRecordData.round = round;
	cardRecordData.card = action;

	let actorObj, opObj;
	if(actor == 0) {
		actorObj = enemy;
		opObj = player;
	}
	if(actor == 1) {
		actorObj = player;
		opObj = enemy;
	}

	var effectActive = false;

	async function effectApply(e, trigger, actor) {
		const actionCardDiv = document.getElementById('useActions').lastChild;
		let textSpan;
		if(action.effect.includes(e)) {
			textSpan = actionCardDiv.querySelector(`span.text${action.effect.indexOf(e)}`);
			if(textSpan) {
				textSpan.classList.add("runningText");
				//animationColorizeNum(textSpan, `rgba(0, 150, 0, 1)`);
			}
		}

		if(actorObj.state.some(st => st.id == "HE-UL-PS-001-2") && e.type == "excite" && e.target == "self" && (e.op == "subtract" || (e.value < 0))) {
			e = deepCopy(e);
			e.target = "op";
			e.op = e.op == "add"?e.op = "subtract":e.op = "add";
		}

        if((e.trigger == trigger || (e.trigger == "choice" && trigger == "used")) && !(!inDeckTrigger.includes(trigger) && action.isDeck && !e.inDeck) && checkCondition(e.cond, actor) && (!e.alter || !defActive) && !(action.type == "패널티" && options.penaltyDisable) && !(action.type == "탈의" && options.unclothDisable) && !(options.enemyDisable && actor == 0 && action.isDeck) && !(options.enemyAttackDisable && actor == 0 && action.type == "공격" && action.isDeck)) {
        	let target, tpos, eValue, tText;
        	var selectPool = [];
        	let repeat = 1;

        	if(e.target) {
        		switch(e.target) {
        		case "player":
        			target = player;
        			tpos = 1;
        			tText = player.name;
        			break;
        		case "enemy":
        			target = enemy;
        			tpos = 0;
        			tText = enemy.name;
        			break;
        		case "self":
        			target = (actor==0)?enemy:player;
        			tpos = (actor==0)?0:1;
        			tText = (actor==0)?enemy.name:player.name;
        			break;
        		case "op":
        			target = (actor==1)?enemy:player;
        			tpos = (actor==1)?0:1;
        			tText = (actor==1)?enemy.name:player.name;
        			break;
        		}
        	}
        	if(e.repeat !== undefined) {
        		repeat = returnText(e.repeat, actor);
        		if(repeat == "consumeLust") {
        			repeat = usedLust;
        		}
        		if(repeat == "stack") {
        			repeat = action.stack;
        		}
        		if(repeat == "specialV05") {
        			repeat = player.select[index].filter(org => org.tags.includes("정수")).length;
        		}
        		if(e.maxRepeat) {
        			repeat = Math.min(repeat, e.maxRepeat);
        		}
        	}

        	if(e.consumeLust !== undefined) {
        		repeat = Math.floor(usedLust/e.consumeLust);
        	}
        	if(e.value !== undefined) {
        		if(e.value == "derived" || e.value == "파생") {
        			eValue = derived;
        		} else if(e.value == "consumeLust") {
        			eValue = usedLust;
        		} else if(e.value == "stack") {
        			eValue = action.stack;
        		} else if(typeof e.value === 'string') {
	        		eValue = returnText(e.value, actor);
	        	} else {
	        		eValue = e.value;
	        	}
        		if(e.additional) {
        			eValue += e.additional;
        		}
        		if(e.multiple) {
        			eValue *= e.multiple;
        		}
        		if(e.division) {
        			eValue = Math.floor(eValue/e.division);
        		}
        		if(e.maxValue) {
        			eValue = Math.min(eValue, e.maxValue);
        		}
        	}

        	if(repeat > 0 && (e.value === undefined || eValue > 0)) {
        		effectActive = true;
        	}

        	if(e.trigger == "choice") {
        		if(actor == 1) {
        			selectPool = player.select[index];
        		}
        		if(actor == 0) {
        			//selectPool = [];
        		}
        	}

        	if(repeat > 0) {
	            switch(e.type) {
	            case "line":
	            	if(combatOptions.line_useCard && action.played) {
		            	if(e.notwait) {
		            		addLine(line[e.value], actionCardDiv);
		            	} else {
	            			await wait(300);
		            		await addLine(line[e.value], actionCardDiv);
		            	}
		            }
	            	if(e.value == "정신치료-2") {
	            		choiceValues.ps = "적극";
	            		changePortrait("corrupted", 1);
	            	}
	            	break;
	            case "changeFace":
	            	await changePortrait(e.value, tpos, true);
	            	break;
	            case "changeCond":
	            	if(e.value == "original") {
	            		if(e.special) {
	            			eValue = "normal";
	            		} else {
	            			if(playerCorrupted) {
	            				if(enemy.name == "버섯남자") {
	            					eValue = "blank";
	            				} else {
	            					eValue = "corrupted";
	            				}
	            			} else {
	            				if(choiceValues.ps == "적극") {
	            					eValue = "corrupted";
	            				} else {
	            					eValue = "excited";
	            				}
	            			}
	            		}
	            	} else if(e.value == "null") {
	            		eValue = null;
	            	} else {
	            		eValue = e.value;
	            	}
	            	if(e.special) {
	            		target.specialCond = eValue;
	            	} else {
		            	if(target.condition != eValue) {
			            	target.condition = eValue;
			            	await changePortrait(target.condition, tpos, true);
			            }
			        }
	            	break;
	            case "clothes":
	            	if(e.value = "uncloth") {
						const playerClothes = document.getElementById("playerClothes");
						animationShake(playerPort);
						await animationDisappear(playerClothes);
						playerClothes.style.display = "none";
					}
	            	break;
	            case "shake":
	            	await animationShake(actionCardDiv);
	            	break;

	            case "estrus":
	            	var preV = real_estrus;
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
		            	if(eValue > 0) {
		            		eValue += player.modifier.estrus.add;
		            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
		            	} else if(eValue < 0) {
		            		eValue += player.modifier.estrus.subtract;
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
		            		real_estrus = Math.min(Math.max(real_estrus + eValue, minEstrus), maxEstrus);
		            	}
		            	addLogText("발정 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
			            	real_estrus = Math.min(Math.max(real_estrus * eValue, minEstrus), maxEstrus);
			            }
		            	addLogText("발정 x"+(eValue*repeat)+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	if(eValue > real_estrus) {
		            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	real_estrus = Math.min(Math.max(eValue*repeat, minEstrus), maxEstrus);
		            	addLogText("발정을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
		            	break;
		            }
		            if(real_estrus - preV > 0) {
		            	player.record[round - 1].event.estrus.up += (real_estrus - preV);
		            } else if(real_estrus - preV < 0) {
		            	player.record[round - 1].event.estrus.down -= (real_estrus - preV);
		            }
		            cardRecordData.estrus += (real_estrus - preV);
	            	infoUpdate();
	            	await animationEmphasis(estrusNumber);
	            	break;
	            case "lewd":
	            	var preV = real_lewd;
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
		            	if(eValue > 0) {
		            		eValue += player.modifier.lewd.add;
		            		animationColorize(playerPort, 'rgba(255, 0, 255, 0.5)');
		            	} else if(eValue < 0) {
		            		eValue += player.modifier.lewd.subtract;
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
			            	real_lewd = Math.min(Math.max(real_lewd + eValue, minLewd), maxLewd);
			            }
		            	addLogText("음란 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+real_lewd+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		animationColorize(playerPort, 'rgba(255, 0, 255, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
			            	real_lewd = Math.min(Math.max(real_lewd * eValue, minLewd), maxLewd);
			            }
		            	addLogText("음란 x"+(eValue*repeat)+" <i>( "+preV+" -> "+real_lewd+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	if(eValue > real_lewd) {
		            		animationColorize(playerPort, 'rgba(255, 0, 255, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	real_lewd = Math.min(Math.max(eValue*repeat, minLewd), maxLewd);
		            	addLogText("음란을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+real_lewd+" )</i>", action, actor);
		            	break;
		            }
		            if(real_lewd - preV > 0) {
		            	player.record[round - 1].event.lewd.up += (real_lewd - preV);
		            } else if(real_estrus - preV < 0) {
		            	player.record[round - 1].event.lewd.down -= (real_lewd - preV);
		            }
		            cardRecordData.lewd += (real_lewd - preV);
	            	infoUpdate();
	            	await animationEmphasis(lewdNumber)
	            	break;
	            case "estrusAndLewd":
	            	var preV = real_lewd;
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
            			let eValueL = eValue;
		            	if(eValue > 0) {
		            		eValueL += player.modifier.lewd.add;
		            		animationColorize(playerPort, 'rgba(255, 0, 255, 0.5)');
		            	} else if(eValue < 0) {
		            		eValueL += player.modifier.lewd.subtract;
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
		            		real_lewd = Math.min(Math.max(real_lewd + eValueL, minLewd), maxLewd);
		            	}
		            	addLogText("음란 "+((eValue>0)?"+":"")+(eValueL*repeat)+" <i>( "+preV+" -> "+real_lewd+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		animationColorize(playerPort, 'rgba(255, 0, 255, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
		            		real_lewd = Math.min(Math.max(real_lewd * eValue, minLewd), maxLewd);
		            	}
		            	addLogText("음란 x"+(eValue*repeat)+" <i>( "+preV+" -> "+real_lewd+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	if(eValue > real_lewd) {
		            		animationColorize(playerPort, 'rgba(255, 0, 255, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	real_lewd = Math.min(Math.max(eValue*repeat, minLewd), maxLewd);
		            	addLogText("음란을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+real_lewd+" )</i>", action, actor);
		            	break;
		            }
		            if(real_lewd - preV > 0) {
		            	player.record[round - 1].event.lewd.up += (real_lewd - preV);
		            } else if(real_estrus - preV < 0) {
		            	player.record[round - 1].event.lewd.down -= (real_lewd - preV);
		            }
		            cardRecordData.lewd += (real_lewd - preV);
	            	infoUpdate();
	            	await animationEmphasis(lewdNumber);
	            	var preV = real_estrus;
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
            			let eValueE = eValue;
		            	if(eValue > 0) {
		            		eValueE += player.modifier.estrus.add;
		            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
		            	} else if(eValue < 0) {
		            		eValueE += player.modifier.estrus.subtract;
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
		            		real_estrus = Math.min(Math.max(real_estrus + eValueE, minEstrus), maxEstrus);
		            	}
		            	addLogText("발정 "+((eValue>0)?"+":"")+(eValueE*repeat)+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	for(let i=0; i<repeat; i++) {
		            		real_estrus = Math.min(Math.max(real_estrus * eValue, minEstrus), maxEstrus);
		            	}
		            	addLogText("발정 x"+(eValue*repeat)+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	if(eValue > real_estrus) {
		            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
		            	} else {
		            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
		            	}
		            	real_estrus = Math.min(Math.max(eValue*repeat, minEstrus), maxEstrus);
		            	addLogText("발정을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
		            	break;
		            }
		            if(real_estrus - preV > 0) {
		            	player.record[round - 1].event.estrus.up += (real_estrus - preV);
		            } else if(real_estrus - preV < 0) {
		            	player.record[round - 1].event.estrus.down -= (real_estrus - preV);
		            }
		            cardRecordData.estrus += (real_estrus - preV);
	            	infoUpdate();
	            	await animationEmphasis(estrusNumber);
	            	break;
	            case "excite":
	            	var preV = target.real_excite;
	            	var preV3 = preV;
	            	var preB = delayedEx;
	            	var targetPort, exciteNumber, changeColor;
	            	if(target === player) {
	            		targetPort = playerPort;
	            		exciteNumber = playerExNumber;
	            	}
	            	if(target === enemy) {
	            		targetPort = enemyPort;
	            		exciteNumber = enemyExNumber;
	            	}
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
		            	if(eValue > 0) {
		            		eValue += target.modifier.excite.add;
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		eValue -= target.modifier.excite.subtract;
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(eValue > 0 && target.immune) {
		            		addLogText(tText+"의 흥분은 증가하지 않았다.", action, actor);
		            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            	} else if(eValue < 0 && target.healBan) {
		            		addLogText(tText+"의 흥분은 회복되지 않았다.", action, actor);
		            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            	} else {
		            		var _accumEx = 0;
		            		var _accumBlock = 0;
		            		var preBlock = sBlock;
			            	for(let i=0; i<repeat; i++) {
			            		let _exChange = eValue;
			            		if(target === player && sBlock > 0 && eValue > 0) {
			            			_exChange = Math.max(eValue - sBlock, 0);
			            			_accumBlock += Math.min(eValue, sBlock);
			            			if(_exChange > 0) {
			            				sBlock = 0;
			            			} else {
			            				sBlock -= eValue;
			            			}
			            		}

			            		target.real_excite = Math.min(Math.max(target.real_excite + _exChange, 0), target.exciteL);

				            	_accumEx += _exChange;
				            	if(_exChange != 0 && target.real_excite >= target.exciteL) {
				            		if(_accumEx > 0 && combatOptions.animation_show) {
				            			//await wait([40, 70, 100, 150, 200][turnSpeed]);
		            					await animationBounce(actionCardDiv, 'left');
				            			//await wait([100, 150, 200, 300, 400][turnSpeed]);
				            		}
				            		animationColorize(targetPort, changeColor);

				            		if(_accumBlock > 0) {
				            			addLogText(tText+"의 감각이 차단되어 "+(_accumBlock)+" 만큼의 흥분을 막음 <i>( "+preBlock+" -> "+sBlock+" )</i>", action, actor);
				            			_accumBlock = 0;
			            				animationColorizeNum(sBlockNumber, 'rgba(255, 0, 0, 0.5)');
				            		}
				            		addLogText(tText+"의 흥분 "+((_accumEx>0)?"+":"")+(_accumEx)+" <i>( "+preV+" -> "+target.real_excite+" )</i>", action, actor);
				            		infoUpdate();

				            		var _changed = target.real_excite - preV;
						            cardRecordData[tpos==1?"player":"enemy"].excite += _changed;
					            	if(_changed>0) {
					            		target.record[round-1].event.excite.up += _changed
					            	}
					            	if(_changed<0) {
					            		target.record[round-1].event.excite.down -= _changed
					            	}

						            if(_changed > 0) {
						            	if(target == player) {
						            		if(!options.lustBan && choiceValues.class == "전사") {
						            			let preLust = lust;
							            		lust = Math.min(Math.max(0, lust + _changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1)), maxLust);
							            		addLogText("욕망 +"+(_changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1))+" <i>( "+preLust+" -> "+lust+" )</i>");
							            		infoUpdate();
							            		animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
						            			player.record[round-1].event.gain.lust += Math.max(lust - preLust, 0);
							            	}
							            	addLine(line["플레이어-신음"]);
							            }
						            	if(actor == 1 && target === enemy) {
						            		if(action.tags.includes("act:펠라치오")) {
						            			addLine(line["펠라치오"], actionCardDiv);
						            		} else if(action.tags.includes("act:애무")) {
						            			addLine(line["애무"], actionCardDiv);
						            		} else if(action.tags.includes("act:키스")) {
						            			addLine(line["키스"], actionCardDiv);
						            		} else if(action.tags.includes("act:삽입")) {
						            			addLine(line["삽입"], actionCardDiv);
						            		} else if(action.tags.includes("act:방뇨")) {
						            			addLine(line["방뇨"], actionCardDiv);
						            		}
						            	}
					            		animationShake(targetPort);
						            }
	            					await animationColorizeNum(exciteNumber, changeColor);
						            if(_changed > 0) {
						            	if(target != actorObj && actorObj.absorption && !actorObj.healBan) {
						            		if(actorObj.state.some(st => st.id == "HE-UL-PS-001-2")) {
							            		var preV2 = target.real_excite;
							            		target.real_excite = Math.min(Math.max(target.real_excite + _changed, 0), target.exciteL);
							            		target.record[round-1].event.excite.up += target.real_excite - preV2;
							            		addLogText("정기를 흡수하여 "+target.name+"의 흥분을 "+(_changed)+" 증가"+" <i>( "+preV2+" -> "+target.real_excite+" )</i>");
							            		infoUpdate();
				            					animationColorize(targetPort, changeColor);
							            		await animationColorizeNum(tpos == 1?playerExNumber:enemyExNumber, changeColor);
						            		} else {
							            		var preV2 = actorObj.real_excite;
							            		actorObj.real_excite = Math.min(Math.max(actorObj.real_excite - (_changed), 0), actorObj.exciteL);
							            		actorObj.record[round-1].event.excite.down -= actorObj.real_excite - preV2;
							            		addLogText("정기를 흡수하여 "+actorObj.name+"의 흥분을 "+(_changed)+" 회복"+" <i>( "+preV2+" -> "+actorObj.real_excite+" )</i>");
							            		infoUpdate();
							            		animationColorize(actor == 1?playerPort:enemyPort, 'rgba(255, 150, 200, 0.5)');
							            		await animationColorizeNum(actor == 1?playerExNumber:enemyExNumber, 'rgba(255, 150, 200, 0.5)');

							            		if(_changed > preV2) {
									            	var _states = actorObj.state.slice();
									            	for(let st of _states) {
									            		await stateEffect(st, "overheal");
									            	}
							            		}
							            	}
						            	}
						            }

	            					if(target.real_excite >= target.exciteL) {
				            			await orgasmEffect(target, 0);
	            					}
						            _accumEx = 0;
				            		_r = 0;
			            			preV = target.real_excite;
				            	}
			            	}
			            	if(_accumEx != 0) {
			            		if(_accumEx > 0 && combatOptions.animation_show) {
			            			//await wait([40, 70, 100, 150, 200][turnSpeed]);
	            					await animationBounce(actionCardDiv, 'left');
			            			//await wait([100, 150, 200, 300, 400][turnSpeed]);
			            		}

			            		if(_accumBlock > 0) {
			            			addLogText(tText+"의 감각이 차단되어 "+(_accumBlock)+" 만큼의 흥분을 막음 <i>( "+preBlock+" -> "+sBlock+" )</i>", action, actor);
			            			animationColorizeNum(sBlockNumber, 'rgba(255, 0, 0, 0.5)');
			            		}
			            		addLogText(tText+"의 흥분 "+((_accumEx>0)?"+":"")+(_accumEx)+" <i>( "+preV+" -> "+target.real_excite+" )</i>", action, actor);
			            		infoUpdate();
			            		animationColorize(targetPort, changeColor);

					            cardRecordData[tpos==1?"player":"enemy"].excite += target.real_excite - preV;
				            	if(_accumEx>0) {
				            		target.record[round-1].event.excite.up += target.real_excite - preV;
				            	}
				            	if(_accumEx<0) {
				            		target.record[round-1].event.excite.down -= target.real_excite - preV;
				            	}

					            if(_accumEx > 0) {
					            	if(target == player) {
					            		if(!options.lustBan && choiceValues.class == "전사") {
					            			let preLust = lust;
						            		lust = Math.min(Math.max(0, lust + _accumEx * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1)), maxLust);
						            		addLogText("욕망 +"+(_accumEx * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1))+" <i>( "+preLust+" -> "+lust+" )</i>");
						            		infoUpdate();
						            		animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
						            		player.record[round-1].event.gain.lust += Math.max(lust - preLust, 0);
						            	}
						            	addLine(line["플레이어-신음"]);
					            	}
					            	if(actor == 1 && target === enemy) {
					            		if(action.tags.includes("act:펠라치오")) {
					            			addLine(line["펠라치오"], actionCardDiv);
					            		} else if(action.tags.includes("act:애무")) {
					            			addLine(line["애무"], actionCardDiv);
					            		} else if(action.tags.includes("act:키스")) {
					            			addLine(line["키스"], actionCardDiv);
					            		} else if(action.tags.includes("act:삽입")) {
					            			addLine(line["삽입"], actionCardDiv);
					            		} else if(action.tags.includes("act:방뇨")) {
					            			addLine(line["방뇨"], actionCardDiv);
					            		}
					            	}
				            		animationShake(targetPort);
					            }
            					await animationColorizeNum(exciteNumber, changeColor);
					            if(_accumEx < 0 && preV + _accumEx < 0) {
					            	var _states = target.state.slice();
					            	for(let st of _states) {
					            		await stateEffect(st, "overheal");
					            	}
					            }
					            if(_accumEx > 0) {
					            	if(target != actorObj && actorObj.absorption && !actorObj.healBan) {
					            		if(actorObj.state.some(st => st.id == "HE-UL-PS-001-2")) {
						            		var preV2 = target.real_excite;
						            		target.real_excite = Math.min(Math.max(target.real_excite + _accumEx, 0), target.exciteL);
						            		target.record[round-1].event.excite.up += target.real_excite - preV2;
						            		addLogText("정기를 흡수하여 "+target.name+"의 흥분을 "+(_accumEx)+" 증가"+" <i>( "+preV2+" -> "+target.real_excite+" )</i>");
						            		infoUpdate();
			            					animationColorize(targetPort, changeColor);
						            		await animationColorizeNum(tpos == 1?playerExNumber:enemyExNumber, changeColor);
					            		} else {
						            		var preV2 = actorObj.real_excite;
						            		actorObj.real_excite = Math.min(Math.max(actorObj.real_excite - (_accumEx), 0), actorObj.exciteL);
						            		actorObj.record[round-1].event.excite.down -= actorObj.real_excite - preV2;
						            		addLogText("정기를 흡수하여 "+actorObj.name+"의 흥분을 "+(_accumEx)+" 회복"+" <i>( "+preV2+" -> "+actorObj.real_excite+" )</i>");
						            		infoUpdate();
						            		animationColorize(actor == 1?playerPort:enemyPort, 'rgba(255, 150, 200, 0.5)');
						            		await animationColorizeNum(actor == 1?playerExNumber:enemyExNumber, 'rgba(255, 150, 200, 0.5)');

						            		if(_accumEx > preV2) {
								            	var _states = actorObj.state.slice();
								            	for(let st of _states) {
								            		await stateEffect(st, "overheal");
								            	}
						            		}
						            	}
					            	}
					            }
			            	}
			            	
			            }
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	if(eValue > 1 && target.immune) {
		            		addLogText(tText+"의 흥분은 증가하지 않았다.", action, actor);
		            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            	} else {
			            	for(let i=0; i<repeat; i++) {
				            	target.real_excite = Math.min(Math.max(target.real_excite * eValue, 0), target.exciteL);
				            }
		            		var _changed = target.real_excite - preV;
				            cardRecordData[tpos==1?"player":"enemy"].excite += _changed;
			            	addLogText(tText+"의 흥분 x"+(eValue*repeat)+" <i>( "+preV+" -> "+target.real_excite+" )</i>", action, actor);
			            	infoUpdate();
				            
				            if(_changed > 0) {
				            	if(target == player && !options.lustBan && choiceValues.class == "전사") {
			            			let preLust = lust;
				            		lust = Math.min(Math.max(0, lust + _changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1)), maxLust);
				            		addLogText("욕망 +"+(_changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1))+" <i>( "+preLust+" -> "+lust+" )</i>");
				            		infoUpdate();
				            		animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
						            player.record[round-1].event.gain.lust += Math.max(lust - preLust, 0);
				            	}
				            }
        					await animationColorizeNum(exciteNumber, changeColor);
				            if(_changed > 0) {
				            	if(target != actorObj && actorObj.absorption && !actorObj.healBan) {
				            		if(actorObj.state.some(st => st.id == "HE-UL-PS-001-2")) {
					            		var preV2 = target.real_excite;
					            		target.real_excite = Math.min(Math.max(target.real_excite + _changed, 0), target.exciteL);
					            		target.record[round-1].event.excite.up += target.real_excite - preV2;
					            		addLogText("정기를 흡수하여 "+target.name+"의 흥분을 "+(_changed)+" 증가"+" <i>( "+preV2+" -> "+target.real_excite+" )</i>");
					            		infoUpdate();
		            					animationColorize(targetPort, changeColor);
					            		await animationColorizeNum(tpos == 1?playerExNumber:enemyExNumber, changeColor);
				            		} else {
					            		var preV2 = actorObj.real_excite;
					            		actorObj.real_excite = Math.min(Math.max(actorObj.real_excite - (_changed), 0), actorObj.exciteL);
					            		actorObj.record[round-1].event.excite.down -= actorObj.real_excite - preV2;
					            		addLogText("정기를 흡수하여 "+actorObj.name+"의 흥분을 "+(_changed)+" 회복"+" <i>( "+preV2+" -> "+actorObj.real_excite+" )</i>");
					            		infoUpdate();
					            		animationColorize(actor == 1?playerPort:enemyPort, 'rgba(255, 150, 200, 0.5)');
					            		await animationColorizeNum(actor == 1?playerExNumber:enemyExNumber, 'rgba(255, 150, 200, 0.5)');

					            		if(_changed > preV2) {
							            	var _states = actorObj.state.slice();
							            	for(let st of _states) {
							            		await stateEffect(st, "overheal");
							            	}
					            		}
					            	}
				            	}
				            }
			            }
		            	break;
	            	case "set":
		            	if(eValue > target.real_excite) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	if(eValue > target.real_excite && target.immune) {
		            		addLogText(tText+"의 흥분은 증가하지 않았다.", action, actor);
		            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            	} else {
			            	target.real_excite = Math.min(Math.max(eValue*repeat, 0), target.exciteL);
		            		var _changed = target.real_excite - preV;
				            cardRecordData[tpos==1?"player":"enemy"].excite += _changed;
			            	addLogText(tText+"의 흥분을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+target.real_excite+" )</i>", action, actor);
			            	infoUpdate();
				            if(_changed > 0) {
				            	if(target == player && !options.lustBan && choiceValues.class == "전사") {
			            			let preLust = lust;
				            		lust = Math.min(Math.max(0, lust + _changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1)), maxLust);
				            		addLogText("욕망 +"+(_changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1))+" <i>( "+preLust+" -> "+lust+" )</i>");
				            		infoUpdate();
				            		animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
				            		player.record[round-1].event.gain.lust += Math.max(lust - preLust, 0);
				            	}
				            }
        					await animationColorizeNum(exciteNumber, changeColor);
			            	var _changed = _changed;
				            if(_changed > 0) {
				            	if(target != actorObj && actorObj.absorption && !actorObj.healBan) {
				            		if(actorObj.state.some(st => st.id == "HE-UL-PS-001-2")) {
					            		var preV2 = target.real_excite;
					            		target.real_excite = Math.min(Math.max(target.real_excite + _changed, 0), target.exciteL);
					            		target.record[round-1].event.excite.up += target.real_excite - preV2;
					            		addLogText("정기를 흡수하여 "+target.name+"의 흥분을 "+(_changed)+" 증가"+" <i>( "+preV2+" -> "+target.real_excite+" )</i>");
					            		infoUpdate();
		            					animationColorize(targetPort, changeColor);
					            		await animationColorizeNum(tpos == 1?playerExNumber:enemyExNumber, changeColor);
				            		} else {
					            		var preV2 = actorObj.real_excite;
					            		actorObj.real_excite = Math.min(Math.max(actorObj.real_excite - (_changed), 0), actorObj.exciteL);
					            		actorObj.record[round-1].event.excite.down -= actorObj.real_excite - preV2;
					            		addLogText("정기를 흡수하여 "+actorObj.name+"의 흥분을 "+(_changed)+" 회복"+" <i>( "+preV2+" -> "+actorObj.real_excite+" )</i>");
					            		infoUpdate();
					            		animationColorize(actor == 1?playerPort:enemyPort, 'rgba(255, 150, 200, 0.5)');
					            		await animationColorizeNum(actor == 1?playerExNumber:enemyExNumber, 'rgba(255, 150, 200, 0.5)');

					            		if(_changed > preV2) {
							            	var _states = actorObj.state.slice();
							            	for(let st of _states) {
							            		await stateEffect(st, "overheal");
							            	}
					            		}
					            	}
				            	}
				            }
			            }
		            	break;
		            }
	            	break;
	            case "exciteL":
	            	var preV = target.real_exciteL;
	            	var targetPort, exciteNumber, changeColor;
	            	if(target === player) {
	            		targetPort = playerPort;
	            		exciteNumber = playerExLNumber;
	            	}
	            	if(target === enemy) {
	            		targetPort = enemyPort;
	            		exciteNumber = enemyExLNumber;
	            	}
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
		            	if(eValue > 0) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	animationColorize(targetPort, changeColor);
		            	for(let i=0; i<repeat; i++) {
			            	target.real_exciteL += eValue;
			            }
		            	addLogText(tText+"의 흥분 한계 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+target.real_exciteL+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	for(let i=0; i<repeat; i++) {
			            	target.real_exciteL = target.real_exciteL * eValue;
			            }
		            	addLogText(tText+"의 흥분 한계 x"+(eValue*repeat)+" <i>( "+preV+" -> "+target.real_exciteL+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	if(eValue > target.real_exciteL) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	target.real_exciteL = eValue*repeat;
		            	addLogText(tText+"의 흥분 한계를 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+target.real_exciteL+" )</i>", action, actor);
		            	break;
		            }
            		var _changed = target.real_exciteL - preV;
	            	if(_changed>0) {
	            		target.record[round-1].event.exciteL.up += _changed
	            	}
	            	if(_changed<0) {
	            		target.record[round-1].event.exciteL.down -= _changed
	            	}
		            cardRecordData[tpos==1?"player":"enemy"].exciteL += _changed;
	            	target.real_excite = Math.min(target.exciteL, target.real_excite);
	            	infoUpdate();
	            	await animationColorizeNum(exciteNumber, changeColor);
	            	break;
	            case "orgasm":
	            	for(let i=0; i<repeat; i++) {
		            	addLogText(tText+"를 절정시킴", action, actor);
		            	await animationDiffusion(actionCardDiv);
		            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            	await orgasmEffect(target, 1);
		            }
	            	break;
	            case "orgasmL":
	            	var preV = target.real_orgasmL;
	            	var targetPort, orgasmNumber, changeColor;
	            	if(target === player) {
	            		targetPort = playerPort;
	            		orgasmNumber = playerAcLNumber;
	            	}
	            	if(target === enemy) {
	            		targetPort = enemyPort;
	            		orgasmNumber = enemyAcLNumber;
	            	}
	            	switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
	            	case "add":
		            	if(eValue > 0) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	animationColorize(targetPort, changeColor);
		            	for(let i=0; i<repeat; i++) {
			            	target.real_orgasmL = target.real_orgasmL + eValue;
			            }
		            	addLogText(tText+"의 절정 한계 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+target.real_orgasmL+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	if(eValue > 1) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	for(let i=0; i<repeat; i++) {
			            	target.real_orgasmL = target.real_orgasmL * eValue;
			            }
		            	addLogText(tText+"의 절정 한계 x"+(eValue*repeat)+" <i>( "+preV+" -> "+target.real_orgasmL+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	if(eValue > target.real_orgasmL) {
		            		changeColor = 'rgba(255, 0, 0, 0.5)';
		            	} else {
		            		changeColor = 'rgba(0, 0, 255, 0.5)';
		            	}
		            	if(combatOptions.animation_show) {
			            	await animationColorize(actionCardDiv, changeColor);
			            }
		            	target.real_orgasmL = eValue*repeat;
		            	addLogText(tText+"의 절정 한계를 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+target.real_orgasmL+" )</i>", action, actor);
		            	break;
		            }
            		var _changed = target.real_orgasmL - preV;
	            	if(_changed>0) {
	            		target.record[round-1].event.orgasmL.up += _changed
	            	}
	            	if(_changed<0) {
	            		target.record[round-1].event.orgasmL.down -= _changed
	            	}
		            cardRecordData[tpos==1?"player":"enemy"].orgasmL += _changed;
	            	infoUpdate();
	            	await animationColorizeNum(orgasmNumber, changeColor);
	            	break;
	            case "attack":
	            	for(let i=0; i<repeat; i++) {
		            	var preV = target.real_excite;
		            	var preB = delayedEx;
		            	var numberDiv, exDiv, targetPort, aValue;
		            	var _states = actorObj.state.slice();
		            	for(let st of _states) {
		            		await stateEffect(st, "attack");
						}

		            	if(target === player) {
		            		numberDiv = estrusNumber;
			            	exDiv = playerExNumber;
			            	targetPort = playerPort;
			            	aValue = estrus + target.modifier.excite.add;
			            }
		            	if(target === enemy) {
			            	numberDiv = lewdNumber;
			            	exDiv = enemyExNumber;
			            	targetPort = enemyPort;
			            	aValue = lewd + target.modifier.excite.add;
			            }

			            if(i == 0) {
			            	await animationColorizeNum(numberDiv, 'rgba(255, 0, 0, 0.5)');
			            }

			            if(combatOptions.animation_show) {
				            await wait([40, 70, 100, 150, 200][turnSpeed]);
				            animationBounce(actionCardDiv, 'left');
				            await wait([100, 150, 200, 300, 400][turnSpeed]);
				        }

		            	actorObj.record[round-1].event.attack += 1;
		            	target.record[round-1].event.attacked += 1;
		            	cardRecordData[tpos==1?"player":"enemy"].attacked += 1;

		            	if((target === player && (estrus <= 0 || (wetness >= estrus && !options.avoidBan))) || (target === enemy && lewd <= 0)) {
		            		player.record[round-1].event.avoid += 1;
		            		addLogText(attachPostposition(tText, "을 ", "를 ")+"<b>[자극]</b>하였으나 <b>회피</b>했다.", action, actor);
		            		if(target === player && estrus > 0) {
	        					animationColorizeNum(wetnessNumber, 'rgba(0, 0, 255, 0.5)');
		            		}
			            	animationShake(targetPort);
					        await animationColorizeNum(exDiv, 'rgba(255, 0, 0, 0.5)');

			            	var _states = target.state.slice();
			            	for(let st of _states) {
			            		await stateEffect(st, "avoid");
							}
			            } else {
			            	if(target.immune) {
			            		addLogText(tText+"의 흥분은 증가하지 않았다.", action, actor);
					            await animationColorizeNum(exDiv, 'rgba(255, 0, 0, 0.5)');
			            	} else {
			            		let _exChange = aValue;
			            		if(target === player && sBlock > 0 && aValue > 0) {
			            			_exChange = Math.max(aValue - sBlock, 0);
			            			var preBlock = sBlock;
			            			if(_exChange > 0) {
			            				sBlock = 0;
			            			} else {
			            				sBlock -= aValue;
			            			}
			            			addLogText(tText+"의 감각이 차단되어 "+(Math.min(aValue, preBlock))+" 만큼의 흥분을 막음 <i>( "+preBlock+" -> "+sBlock+" )</i>", action, actor);
		            				animationColorizeNum(sBlockNumber, 'rgba(255, 0, 0, 0.5)');
			            		}

			            		if(_exChange > 0) {
					            	if(target === player) {
						            	addLine(line["플레이어-신음"]);
					            	}
					            	if(actor == 1 && target === enemy) {
					            		if(action.tags.includes("act:펠라치오")) {
					            			addLine(line["펠라치오"], actionCardDiv);
					            		} else if(action.tags.includes("act:애무")) {
					            			addLine(line["애무"], actionCardDiv);
					            		} else if(action.tags.includes("act:키스")) {
					            			addLine(line["키스"], actionCardDiv);
					            		} else if(action.tags.includes("act:삽입")) {
					            			addLine(line["삽입"], actionCardDiv);
					            		} else if(action.tags.includes("act:방뇨")) {
					            			addLine(line["방뇨"], actionCardDiv);
					            		} else if(action.tags.includes("act:난교")) {
					            			addLine(line[["펠라치오", "애무", "키스", "삽입"][Math.floor(Math.random()*4)]], actionCardDiv);
					            		}
					            	}
					            	target.real_excite = Math.min(Math.max(target.real_excite + _exChange, 0), target.exciteL);
					            	var _changed = target.real_excite - preV;
			            			cardRecordData[tpos==1?"player":"enemy"].excite += _changed;
					            	if(_changed>0) {
					            		target.record[round-1].event.excite.up += _changed
					            	}
					            	if(_changed<0) {
					            		target.record[round-1].event.excite.down -= _changed
					            	}
					            	addLogText(attachPostposition(tText, "을 ", "를 ")+"자극하여 흥분 +"+_exChange+" <i>( "+preV+" -> "+target.real_excite+" )</i>", action, actor);
					            	infoUpdate();
					            	animationShake(targetPort);

				            		var _changed = target.real_excite - preV;

					            	if(target === player) {
					            		if (!options.lustBan && choiceValues.class == "전사") {
						            		let preLust = lust;
						            		lust += _changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1);
						            		lust = Math.min(lust, maxLust);
							            	addLogText("욕망 +"+(_changed * (player.state.some(st => st.id == "AD-WA-BG2-002")?2:1))+" <i>( "+preLust+" -> "+lust+" )</i>");
							            	infoUpdate();
						            		animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
						            		player.record[round-1].event.gain.lust += Math.max(lust - preLust, 0);
						            	}
					            	}

					            	await animationColorizeNum(exDiv, 'rgba(255, 0, 0, 0.5)');

					            	if(_changed > 0 && target != actorObj && actorObj.absorption && !actorObj.healBan) {
					            		if(actorObj.state.some(st => st.id == "HE-UL-PS-001-2")) {
						            		var preV2 = target.real_excite;
						            		target.real_excite = Math.min(Math.max(target.real_excite + _changed, 0), target.exciteL);
						            		target.record[round-1].event.excite.up += target.real_excite - preV2;
						            		addLogText("정기를 흡수하여 "+target.name+"의 흥분을 "+(_changed)+" 증가"+" <i>( "+preV2+" -> "+target.real_excite+" )</i>");
						            		infoUpdate();
			            					animationColorize(targetPort, changeColor);
						            		await animationColorizeNum(tpos == 1?playerExNumber:enemyExNumber, changeColor);
					            		} else {
						            		var preV2 = actorObj.real_excite;
				            				actorObj.real_excite = Math.min(Math.max(actorObj.real_excite - _changed, 0), actorObj.exciteL);
				            				actorObj.record[round-1].event.excite.down -= actorObj.real_excite - preV2;
						            		addLogText("정기를 흡수하여 "+actorObj.name+"의 흥분을 "+_changed+" 회복"+" <i>( "+preV2+" -> "+actorObj.real_excite+" )</i>");
						            		infoUpdate();
						            		animationColorize(actor == 1?playerPort:enemyPort, 'rgba(255, 150, 200, 0.5)');
						            		await animationColorizeNum(actor == 1?playerExNumber:enemyExNumber, 'rgba(255, 150, 200, 0.5)');

						            		if(_changed > preV2) {
								            	var _states = actorObj.state.slice();
								            	for(let st of _states) {
								            		await stateEffect(st, "overheal");
								            	}
						            		}
						            	}
					            	}
					            } else {
					            	animationShake(targetPort);
					            	await animationColorizeNum(exDiv, 'rgba(255, 0, 0, 0.5)');
					            }
				            }

				            if(player.excite >= player.exciteL) {
				            	await orgasmEffect(player, 0);
				            }
				            if(enemy.excite >= enemy.exciteL) {
				            	await orgasmEffect(enemy, 0);
				            }

			            	var _states = target.state.slice();
			            	for(let st of _states) {
			            		await stateEffect(st, "attacked");
			            		await stateEffect(st, "someAttacked");
							}
							var enemyObj = target == player ? enemy : player;
							var _enemyStates = enemyObj.state.slice();
			            	for(let st of _enemyStates) {
		            			await stateEffect(st, "enemyAttacked");
			            		await stateEffect(st, "someAttacked");
							}
			            	
			            }
			        }
	            	break;
	            case "state":
	            	const newStates = [];
	            	if(Array.isArray(eValue)) {
	            		for(let ns of eValue) {
	            			newStates.push(deepCopy(ns));
	            		}
	            	} else if(e.value == "self") {
	            		newStates.push(deepCopy(action));
	            	} else if(e.value == "original") {
	            		newStates.push(deepCopy(action.original));
	            	} else if(e.value == "originals") {
	            		newStates.push(...deepCopy(action.originals.filter(org => !org.tags.includes("정수"))));
	            	} else if(typeof eValue === 'string') {
	            		if(e.value.startsWith("randomCard")) {
	            			for(let i=0; i<repeat; i++) {
	            				eValue = returnText(e.value, actor)
	            				if(eValue) {
		            				const ns = deepCopy(cardDB[eValue]);
					            	ns.owner = tpos;
				            		newStates.push(ns);
				            	}
	            			}
	            			repeat = 1;
	            		} else {
		            		const ns = deepCopy(cardDB[eValue]);
			            	ns.owner = tpos;
		            		newStates.push(ns);
		            	}
	            	} else {
	            		newStates.push(deepCopy(eValue));
	            	}
	            	for(let newState of newStates) {
	            		if(!newState || newState.tags.includes("생성불가")) {
	            			continue;
	            		}
	            		for(let i=0; i<repeat; i++) {
		            		let ns = deepCopy(newState);
		            		if(!ns.tags.includes("생성됨")) {
			            		ns.tags.push("생성됨");
			            	}
			            	target.state.push(ns);
			            	derived.push(ns);
			            	target.record[round-1].event.getState.push(ns);
		            		cardRecordData[tpos==1?"player":"enemy"].getState.push(ns);
			            }
						var cardText = createCardText(newState);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(`${tText}의 상태에 <span title="${cardText}"><b>[${newState.name[language]}]</b></span> ${(repeat>1)?repeat+"장 ":""}추가`, action, actor, true, newState.name[language], cardText);
		            	infoUpdate();

						var tempStateDiv = createCard(newState, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;
						await animationFloatIn(tempStateDiv, 'left', 40);
						await wait([200, 300, 500, 750, 1000][turnSpeed])
					    if(repeat > 1) {
					    	await animationCopies(tempStateDiv, repeat, combatOptions.cardWait_mode == "없음" || (combatOptions.cardWait_mode == "한 번만" && shownCards.includes(newState.id)));
					    }
					    await waitOrClick(calculateDisplayTime(newState));
					    await actionEffect(newState, "get", index);
					    await animationFlyAway(tempStateDiv, (target == player)?'down':'up');
		            	tempStateDiv.remove();
		            }


	            	/*for(let i=0; i<repeat; i++) {
		            	if(e.value.startsWith("randomCard")) {
		        			eValue = returnText(e.value, actor)
		        		}
		            	var st = deepCopy(cardDB[eValue]);
		            	st.owner = tpos;
		            	target.state.push(st);
						target.record[round-1].event.getState.push(st);
		            	cardRecordData[tpos==1?"player":"enemy"].getState.push(st);
						var cardText = createCardText(st);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(tText+"에게 <span title=\""+cardText+"\"><b>["+st.name[language]+"]</b></span> 부여<br><i>("+cardText+")</i>", action, actor);
		            	infoUpdate();

						var tempStateDiv = createCard(st, 28);
						tempStateDiv.style.opacity = 0;
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;


					    await animationFloatIn(tempStateDiv, 'left', 40);
					    await waitOrClick(turnSpeed*3);
		            	await animationFlyAway(tempStateDiv, (target == player)?'down':'up');
		            	tempStateDiv.remove();
						await actionEffect(st, "getState");
		            }*/
	            	break;
	            case "posture":
	            	if(eValue == "remove") {
						const tState = player.state.slice();
						tState.sortCards('priority');
		            	for(let st of tState) {
		            		if(st.type == "체위") {
								var tempStateDiv = createCard(st, 28);
								var actionsContainer = document.getElementById('useActions');
								actionsContainer.appendChild(tempStateDiv);
								adjustCardFontSize(tempStateDiv);
								actionsContainer.scrollLeft = actionsContainer.scrollWidth;

							    await animationFlyIn(tempStateDiv, 'down', 40);
							    await waitOrClick(calculateDisplayTime(st));
								await actionEffect(st, "exPs", index, 28, true);
								await actionEffect(st, "getAndExPs", index, 28, true);
				            	await animationDisappear(tempStateDiv);
				            	tempStateDiv.remove();

								var cardText = createCardText(st);
								cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
								addLogText("체위 <span title=\""+cardText+"\"><b>["+attachPostposition(st.name[language]+"]</b></span>", "을 ", "를 ")+"제거", action, actor);

		            			player.state.splice(player.state.indexOf(st), 1);
		            			infoUpdate();
		            		}
		            	}
	            		posture = null;
	            	} else {
		            	var ps = deepCopy(action);
		            	ps.isDeck = false;
						const tState = player.state.slice();
						tState.sortCards('priority');
		            	for(let st of tState) {
		            		if(st.type == "체위") {
		            			var tempStateDiv = createCard(st, 28);
								var actionsContainer = document.getElementById('useActions');
								actionsContainer.appendChild(tempStateDiv);
								adjustCardFontSize(tempStateDiv);
								actionsContainer.scrollLeft = actionsContainer.scrollWidth;

							    await animationFlyIn(tempStateDiv, 'down', 40);
							    await waitOrClick(calculateDisplayTime(st));
								await actionEffect(st, "exPs", index, 28, true);
								await actionEffect(st, "getAndExPs", index, 28, true);
				            	await animationDisappear(tempStateDiv);
				            	tempStateDiv.remove();

		            			player.state.splice(player.state.indexOf(st), 1);
		            		}
		            	}
		            	player.state.push(ps);
						/*if(posture) {
			            	posture.isDeck = true;
			            	deck.push(posture);
							player.record[round-1].event.get.push(posture);
		            		cardRecordData[tpos==1?"player":"enemy"].get.push(posture);
						}*/
						posture = ps;
						player.record[round-1].event.getState.push(ps);
		            	cardRecordData[tpos==1?"player":"enemy"].getState.push(ps);
		            	infoUpdate();

						var cardText = createCardText(ps);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(`체위를 <span title="${cardText}"><b>[${attachPostposition(ps.name[language]+"]</b></span>", "으로", "로")} 변경`, action, actor, true, ps.name[language], cardText);

						var tempStateDiv = createCard(ps, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationFloatIn(tempStateDiv, 'left', 40);
					    await waitOrClick(calculateDisplayTime(ps));
						await actionEffect(ps, "getPs", index, 28, true);
						await actionEffect(ps, "getAndExPs", index, 28, true);
		            	
		            	await animationFlyAway(tempStateDiv, 'down');
		            	tempStateDiv.remove();
		            }
	            	break;
	            case "get":
	            	const newCards = [];
	            	if(e.trigger == "choice") {
	            		newCards.push(...deepCopy(selectPool))
	            	} else if(Array.isArray(eValue)) {
	            		newCards.push(...deepCopy(eValue));
	            	} else if(e.value == "self") {
	            		newCards.push(deepCopy(action));
	            	} else if(e.value == "original") {
	            		newCards.push(deepCopy(action.original));
	            	} else if(e.value == "originals") {
	            		newCards.push(...deepCopy(action.originals.filter(org => !org.tags.includes("정수"))));
	            	} else if(typeof eValue === 'string') {
	            		if(e.value.startsWith("randomCard")) {
	            			for(let i=0; i<repeat; i++) {
	            				eValue = returnText(e.value, actor)
	            				if(eValue) {
		            				const nc = deepCopy(cardDB[eValue]);
					            	nc.owner = tpos;
				            		newCards.push(nc);

				            		if(nc.tags.includes("초월") && !selectedTransc.includes(nc.id)) {
				            			selectedTransc.push(nc.id);
				            		}
				            	}
	            			}
	            			repeat = 1;
	            		} else {
		            		const nc = deepCopy(cardDB[eValue]);
			            	nc.owner = tpos;
		            		newCards.push(nc);
		            	}
	            	} else {
	            		newCards.push(deepCopy(eValue));
	            	}
	            	for(let newCard of newCards) {
	            		if(!newCard || newCard.tags.includes("생성불가")) {
	            			continue;
	            		}
	            		for(let i=0; i<repeat; i++) {
		            		let nc = deepCopy(newCard);
		            		if(!nc.tags.includes("생성됨")) {
			            		nc.tags.push("생성됨");
			            	}
			            	if(target === player) {
			            		deck.push(nc);
			            	}
			            	if(target === enemy) {
			            		opDeck.push(nc);
			            	}
			            	derived.push(nc);
			            	target.record[round-1].event.get.push(nc);
		            		cardRecordData[tpos==1?"player":"enemy"].get.push(nc);
			            }
						var cardText = createCardText(newCard);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(`${tText}의 덱에 <span title="${cardText}"><b>[${newCard.name[language]}]</b></span> ${(repeat>1)?repeat+"장 ":""}추가`, action, actor, true, newCard.name[language], cardText);
		            	infoUpdate();

						var tempStateDiv = createCard(newCard, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationFloatIn(tempStateDiv, 'left', 40);
						await wait([200, 300, 500, 750, 1000][turnSpeed])
					    if(repeat > 1) {
					    	await animationCopies(tempStateDiv, repeat, combatOptions.cardWait_mode == "없음" || (combatOptions.cardWait_mode == "한 번만" && shownCards.includes(newCard.id)));
					    }
					    if(newCards.length <= 3) {
						    await waitOrClick(calculateDisplayTime(newCard));
						}
					    await actionEffect(newCard, "get", index);
					    await animationFlyAway(tempStateDiv, (target == player)?'down':'up');
		            	tempStateDiv.remove();
					    var _states = target.state.slice();
					    for(let i=0; i<repeat; i++) {
			            	for(let st of _states) {
			            		await stateEffect(st, "getCard");
			            		if(newCard.type == "패널티") {
			            			await stateEffect(st, "getPenalty");
			            		}
			            	}
			            }
			            var tdeck = (target == player)?deck:opDeck;
					    var _deck = tdeck.slice();
					    for(let i=0; i<repeat; i++) {
			            	for(let cd of _deck) {
			            		await stateEffect(cd, "getCard");
			            		if(newCard.type == "패널티") {
			            			await stateEffect(cd, "getPenalty");
			            		}
			            	}
			            }
		            }
	            	break;
	            case "lust":
	            	for(let i=0; i<repeat; i++) {
		            	var preV = lust;
		            	let lustCost;
		            	if(e.info.value == '전부') {
		            		lustCost = lust;
		            	} else if(typeof e.info.value === 'string' && e.info.value.startsWith("M")) {
		            		lustCost = Math.min(lust, Number(e.info.value.slice(1)));
		            	} else {
		            		lustCost = e.info.value;
		            	}
		            	if(lust >= lustCost) {
		            		usedLust = lustCost;
		            		lust -= lustCost;
		            		player.record[round-1].event.consumeLust += lustCost;
		            		cardRecordData.consumeLust += lustCost;
		            		addLogText("욕망을 "+lustCost+" 소모"+" <i>( "+preV+" -> "+lust+" )</i>", action, actor);
		            		infoUpdate();
		            		await animationColorizeNum(lustNumber, 'rgba(0, 0, 255, 0.5)');
		            		for(let le of e.info.effect) {
		            			await effectApply(le, "used", actor);
		            		}
		            	}
		            }
	            	break;
	            case "wetness":
	            	for(let i=0; i<repeat; i++) {
		            	let wetnessCost = e.info.value;
		            	if(wetness >= wetnessCost) {
		            		animationColorizeNum(wetnessNumber, 'rgba(0, 0, 255, 0.5)');
		            		addLogText(`충분히 젖어있다. <i>(${wetness}/${wetnessCost})</i>`, action, actor);
		            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            		for(let we of e.info.effect) {
		            			await effectApply(we, "used", actor);
		            		}
		            	}
		            }
	            	break;
	            case "corrupt":
	            	for(let i=0; i<repeat; i++) {
		            	let corruptCost;
		            	if(typeof e.info.value === 'string' && e.info.value.startsWith("M")) {
		            		corruptCost = Number(e.info.value.slice(1));
			            	if(corrupt <= corruptCost) {
			            		animationColorizeNum(corruptNumber, 'rgba(160, 50, 160, 0.5)');
			            		addLogText(`아직 순수하다. <i>(${corrupt}/${corruptCost})</i>`, action, actor);
			            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
			            		for(let we of e.info.effect) {
			            			await effectApply(we, "used", actor);
			            		}
			            	}
		            	} else {
		            		corruptCost = e.info.value;
			            	if(corrupt >= corruptCost) {
			            		animationColorizeNum(corruptNumber, 'rgba(160, 50, 160, 0.5)');
			            		addLogText(`충분히 타락했다. <i>(${corrupt}/${corruptCost})</i>`, action, actor);

			            		/*const _cdImg = actionCardDiv.querySelector(`img`)
			            		if(action.type != "체위" && !_cdImg.src.endsWith("corrupted.webp")) {
			            			await animationXscale(actionCardDiv, 1, 0)
			            			_cdImg.src = _cdImg.src.replace(".webp", "-corrupted.webp");
			            			await animationXscale(actionCardDiv, 0, 1)
			            		}*/

			            		await wait([200, 300, 500, 750, 1000][turnSpeed]);
			            		for(let we of e.info.effect) {
			            			await effectApply(we, "used", actor);
			            		}
			            	}
		            	}
		            }
	            	break;
	            case "discard":
	            	if(e.trigger != "choice") {
	            		selectPool = returnText(e.info.target, actor);
	            	} else {
	            		//player.select[index] = [];
	            	}
	            	for(let dsC of selectPool) {
						var cardText = createCardText(dsC);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
	            		addLogText(attachPostposition(tText, "이 ", "가 ")+attachPostposition("<span title=\'"+cardText+"\'><b>["+dsC.name[language]+"]</b>", "을 ", "를 ")+"버림", action, actor);

	            		var tempStateDiv = createCard(dsC, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationFlyIn(tempStateDiv, (target==player)?'down':'up');

					    if(selectPool.length <= 3) {
					    	await waitOrClick(calculateDisplayTime(dsC));
						}

		            	await actionEffect(dsC, "discarded", index, 28, true);

		            	await animationDisappear(tempStateDiv);
				        tempStateDiv.remove();

	            		if(target === player) {
	            			player.record[round-1].discard.push(dsC);
		            		deck.splice(deck.indexOf(dsC), 1);
		            	}
	            		if(target === enemy) {
	            			enemy.record[round-1].discard.push(dsC);
		            		opDeck.splice(opDeck.indexOf(dsC), 1);
		            	}
	            		cardRecordData[tpos==1?"player":"enemy"].discard.push(dsC);


		            	var _states = actorObj.state.slice();
		            	for(let st of _states) {
		            		await stateEffect(st, "discardCard");
		            	}
	            	}
	            	break;
	            case "remove":
	            	selectPool = returnText(e.info.target, actor);
	            	for(let rmS of selectPool) {
						var cardText = createCardText(rmS);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
	            		addLogText(tText+"의 "+attachPostposition("<span title=\'"+cardText+"\'><b>["+rmS.name[language]+"]</b>", "이 ", "가 ")+"제거됨", action, actor);

	            		var tempStateDiv = createCard(rmS, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationFlyIn(tempStateDiv, (target==player)?'down':'up');
					    await waitOrClick(calculateDisplayTime(rmS));

		            	await actionEffect(rmS, "expired", index, 28);

		            	await animationDisappear(tempStateDiv);
				        tempStateDiv.remove();
						
						target.state.splice(target.state.indexOf(rmS), 1);
	            	}
	            	//player.select[index] = [];
	            	break;
	            case "use":
	            	for(let i=0; i<repeat; i++) {
		            	const usedActions = [];
		            	if(Array.isArray(eValue)) {
		            		usedActions.push(...eValue)
		            	} else if(e.value == "self") {
		            		usedActions.push(deepCopy(action));
		            	} else if(e.value == "original") {
		            		usedActions.push(deepCopy(action.original));
		            	} else if(e.value == "originals") {
		            		usedActions.push(...deepCopy(action.originals.filter(org => !org.tags.includes("정수"))));
		            	} else if(typeof eValue === 'string') {
		            		const ua = deepCopy(cardDB[eValue]);
			            	ua.owner = actor;
		            		usedActions.push(ua);
		            	} else {
		            		usedActions.push(eValue);
		            	}
		            	for(let usedAction of usedActions) {
		            		if(usedAction.tags.includes("반복불가")) {
		            			continue;
		            		}
							var cardText = createCardText(usedAction);
							cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
		            		addLogText(`<span title="${cardText}"><b>[${usedAction.name[language]}]</b></span>의 효과 발동`, action, actor, e.value != "self", usedAction.name[language], cardText);
		            		cardRecordData[actor==1?"player":"enemy"].use.push(usedAction);
		            		usedAction.source = action;
			            	await actionEffect(usedAction, "used", index, 28, e.value=="self"/*, usedAction.cast&&usedAction.cast>1*/);
			            }
			        }
	            	break;
	            case "effect":
	            	let _effectTexts = "";
	            	if(e.trigger != "choice") {
		            	if(e.info.target == 'derived' || e.info.target == '파생') {
		            		selectPool = derived;
		            	} else if(e.info.target == 'selfCard' || e.info.target == 'self') {
		            		selectPool = [action];
		            	} else if(e.info.target.startsWith("id:")) {
		            		let _id = e.info.target.slice(3);
		            		selectPool.push(cardDB[_id]);
		            		deck.forEach(function(cd) {
		            			if(cd.id == _id) {
		            				selectPool.push(cd);
		            			}
		            		})
		            	} else {
		            		selectPool = returnText(e.info.target, actor);
		            	}
		            }
	            	switch(e.op) {
	            	case "add":
	            		let _rs;
		            	for(let cd of selectPool) {
	            			let _check = false;
	            			for(let newEffect of e.info.effect) {
	            				if(newEffect.type == "specialA03") {
				            		let _randomParts = [
					            		{trigger:"used", cond:true, type:"attack", target:"op"},
					            		{trigger:"used", cond:true, type:"lewd", op:"add", value:1},
					            		{trigger:"used", cond:true, type:"estrus", op:"add", value:-2},
					            		{trigger:"used", cond:true, keepLine:true, type:"excite", target:"op", op:"add", value:3},
					            		{trigger:"used", cond:true, keepLine:true, type:"exciteL", target:"self", op:"add", value:1},
					            	];
					            	_rs = Math.floor(Math.random()*_randomParts.length);
	            					newEffect = _randomParts[_rs];
	            					_effectTexts = createCardText({effect:[newEffect]})
	            				}
	            				for(let i=0; i<repeat; i++) {
		            				let exEffect = cd.effect.find((exEffect) => exEffect.trigger == newEffect.trigger && exEffect.cond == newEffect.cond && exEffect.type == newEffect.type && (exEffect.target == newEffect.target) && (exEffect.op == newEffect.op) && (!exEffect.repeat || typeof exEffect.repeat === 'number'));
		        					if(exEffect) {
		        						switch(newEffect.type) {
		        						case "estrus":
		        						case "lewd":
		        							if(newEffect.op == "add") {
		        								exEffect.value += newEffect.value;
		        								_check = true;
		        							}
		        							if(newEffect.op == "multiply") {
		        								exEffect.value *= newEffect.value;
		        								_check = true;
		        							}
		        							break;
		        						case "excite":
		        						case "exciteL":
		        						case "orgasmL":
	            							if(newEffect.op == "add") {
	            								exEffect.value += newEffect.value;
	            								_check = true;
	            							}
	            							if(newEffect.op == "multiply") {
	            								exEffect.value *= newEffect.value;
	            								_check = true;
	            							}
		        							break;
		        						case "maxUse":
		        							if(exEffect.value < newEffect.value) {
		        								exEffect.value = newEffect.value;
		        							}
		        							_check = true;
		        							break;
		        						case "changeLust":
		        						case "changeWetness":
		        						case "changeSBlock":
		        						case "changeCorrupt":
		        							if(newEffect.op == "add") {
		        								exEffect.value += newEffect.value;
		        								_check = true;
		        							}
		        							if(newEffect.op == "multiply") {
		        								exEffect.value *= newEffect.value;
		        								_check = true;
		        							}
		        							break;

		        						default:
		        							if(newEffect.repeat) {
		        								exEffect.repeat = (exEffect.repeat)?exEffect.repeat+newEffect.repeat:newEffect.repeat+1;
		        							} else {
		        								exEffect.repeat = (exEffect.repeat)?exEffect.repeat+1:2;
		        							}
		        							_check = true;
		        							break;
		        						}
		        					}
		        					if(!_check) {
		        						cd.effect.push(deepCopy(newEffect));
		        					}
		            			}	            			
		            		}
		            	}
		            	if(selectPool.length) {
		            		if(e.trigger != "choice" && e.info.target.startsWith("id:")) {
		            			addLogText(`모든 <b>[${cardDB[e.info.target.slice(3)].name[language]}]</b>에 "${_effectTexts?_effectTexts:createCardText({effect:e.info.effect})}" 효과 추가.`, action, actor);
		            		} else {
		            			addLogText(`${selectPool.map(cd => `<b>[${cd.name[language]}]</b>`).join(", ")}에 "${_effectTexts?_effectTexts:createCardText({effect:e.info.effect})}" 효과 추가.`, action, actor);
		            		}

		            		if(_rs !== undefined) {
		            			let _partsCard = cardDB[`AD-NT-HA-BG7-001-1-${_rs+1}`];
		            			var tempStateDiv = createCard(_partsCard, 28);
								tempStateDiv.style.opacity = 0;
								var actionsContainer = document.getElementById('useActions');
								actionsContainer.appendChild(tempStateDiv);
								adjustCardFontSize(tempStateDiv);
								actionsContainer.scrollLeft = actionsContainer.scrollWidth;

							    await animationAppear(tempStateDiv);
							    await waitOrClick(calculateDisplayTime(_partsCard));
				            	await animationDisappear(tempStateDiv);
				            	tempStateDiv.remove();
		            		}
		            	} else {
		            		addLogText("효과를 추가할 카드가 없음", action, actor);
		            	}
	            		break;
	            	}
	            	await waitOrClick([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;
	            case "defeat":
	            	var targetPort, targetExNumber, targetAcNumber;
	            	if(target === player) {
	            		targetPort = playerPort;
	            		targetExNumber = playerExNumber;
	            		targetAcNumber = playerAcNumber;
	            		changePortrait("ecstasy2", 1);
	            	}
	            	if(target === enemy) {
	            		targetPort = enemyPort;
	            		targetExNumber = enemyExNumber;
	            		targetAcNumber = enemyAcNumber;
	            	}
	            	await animationDiffusion(actionCardDiv);
	            	animationEmphasis(targetPort, 1.5);
	            	await animationColorize(targetPort, 'rgba(255, 255, 255, 0.5)', 2000);
	            	target.orgasm = 99;
	            	target.real_excite = 0;
	            	battleEnd = tpos;
	            	specialEnd = true;
	            	addLogText(tText+"의 패배", action, actor);
	            	infoUpdate();
	            	animationColorizeNum(targetExNumber, 'rgba(0, 0, 255, 0.5)');
	            	await animationColorizeNum(targetAcNumber, 'rgba(255, 0, 255, 0.5)');
	            	break;
	            case "victory":
	            	var targetPort, targetExNumber, targetAcNumber;
	            	if(target === enemy) {
	            		opObj = player;
	            		targetPort = playerPort;
	            		targetExNumber = playerExNumber;
	            		targetAcNumber = playerAcNumber;
	            		changePortrait("ecstasy2", 1);
	            	}
	            	if(target === player) {
	            		opObj = enemy;
	            		targetPort = enemyPort;
	            		targetExNumber = enemyExNumber;
	            		targetAcNumber = enemyAcNumber;
	            	}
	            	await animationDiffusion(actionCardDiv);
	            	animationEmphasis(targetPort, 1.5);
	            	await animationColorize(targetPort, 'rgba(255, 255, 255, 0.5)', 2000);
	            	opObj.orgasm = 99;
	            	opObj.real_excite = 0;
	            	battleEnd = tpos^1;
	            	specialEnd = true;
	            	addLogText(tText+"의 승리", action, actor);
	            	infoUpdate();
	            	animationColorizeNum(targetExNumber, 'rgba(0, 0, 255, 0.5)');
	            	await animationColorizeNum(targetAcNumber, 'rgba(255, 0, 255, 0.5)');
	            	break;
	            case "changeLust":
	            	var preV = lust;
	        		switch(e.op) {
	            	case "add":
	            		if(eValue < 0 || !options.lustBan) {
			            	for(let i=0; i<repeat; i++) {
				            	lust = Math.min(Math.max(lust + eValue * (eValue>0 && player.state.some(st => st.id == "AD-WA-BG2-002")?2:1), 0), maxLust);
				            }
				            if(eValue > 0) {
				            	player.record[round-1].event.gain.lust += lust - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(255, 0, 0, 0.5)');
					            }
				            }
			            	addLogText("욕망 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+lust+" )</i>", action, actor);
			            }
		            	break;
	            	case "multiply":
	            		if(eValue < 1 || !options.lustBan) {
			            	for(let i=0; i<repeat; i++) {
				            	lust = Math.min(Math.max(lust * eValue, 0), maxLust);
				            }
				            if(eValue > 1) {
				            	player.record[round-1].event.gain.lust += lust - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(255, 0, 0, 0.5)');
					            }
				            }
			            	addLogText("욕망 x"+(eValue*repeat)+" <i>( "+preV+" -> "+lust+" )</i>", action, actor);
			            }
		            	break;
	            	case "set":
	            		if(eValue < lust || !options.lustBan) {
			            	lust = Math.min(eValue*repeat, maxLust);
				            if(lust > preV) {
				            	player.record[round-1].event.gain.lust += lust - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(255, 0, 0, 0.5)');
					            }
				            }
			            	addLogText("욕망을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+lust+" )</i>", action, actor);
			            }
		            	break;
		            }
		            var _changed = lust - preV
		            cardRecordData.lust += _changed;
	            	infoUpdate();

	            	animationEmphasis(lustNumber);
	        		await animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
	            	break;
	            case "changeWetness":
	            	var preV = wetness;
	        		switch(e.op) {
	            	case "add":
	            		if(eValue < 0 || !options.wetnessBan) {
			            	for(let i=0; i<repeat; i++) {
				            	wetness = Math.min(Math.max(wetness + eValue, 0), maxWetness);
				            }
				            if(eValue > 0) {
				            	player.record[round-1].event.gain.wetness += wetness - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(0, 255, 255, 0.5)');
					            }
				            }
			            	addLogText("젖음 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+wetness+" )</i>", action, actor);
			            }
		            	break;
	            	case "multiply":
	            		if(eValue < 1 || !options.wetnessBan) {
			            	for(let i=0; i<repeat; i++) {
				            	wetness = Math.min(Math.max(wetness * eValue, 0), maxWetness);
				            }
				            if(eValue > 1) {
				            	player.record[round-1].event.gain.wetness += wetness - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(0, 255, 255, 0.5)');
					            }
				            }
			            	addLogText("젖음 x"+(eValue*repeat)+" <i>( "+preV+" -> "+wetness+" )</i>", action, actor);
			            }
		            	break;
	            	case "set":
	            		if(eValue < wetness || !options.wetnessBan) {
			            	wetness = Math.min(eValue*repeat, maxWetness);
				            if(wetness > preV) {
				            	player.record[round-1].event.gain.wetness += wetness - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(0, 255, 255, 0.5)');
					            }
				            }
			            	addLogText("젖음을  "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+wetness+" )</i>", action, actor);
			            }
		            	break;
		            }
		            var _changed = wetness - preV
		            cardRecordData.wetness += _changed;
	            	infoUpdate();

	            	animationEmphasis(wetnessNumber);
	        		await animationColorizeNum(wetnessNumber, 'rgba(0, 255, 255, 0.5)');
	            	break;
	            case "changeSBlock":
	            	var preV = sBlock;
	        		switch(e.op) {
	            	case "add":
	            		if(eValue < 0 || !options.sBlockBan) {
			            	for(let i=0; i<repeat; i++) {
				            	sBlock = Math.min(Math.max(sBlock + eValue, 0), maxSBlock);
				            }
				            if(eValue > 0) {
				            	player.record[round-1].event.gain.sBlock += sBlock - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(255, 255, 0, 0.5)');
					            }
				            }
			            	addLogText("감각차단 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+sBlock+" )</i>", action, actor);
			            }
		            	break;
	            	case "multiply":
	            		if(eValue < 1 || !options.sBlockBan) {
			            	for(let i=0; i<repeat; i++) {
				            	sBlock = Math.min(Math.max(sBlock * eValue, 0), maxSBlock);
				            }
				            if(eValue > 1) {
				            	player.record[round-1].event.gain.sBlock += sBlock - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(255, 255, 0, 0.5)');
					            }
				            }
			            	addLogText("감각차단 x"+(eValue*repeat)+" <i>( "+preV+" -> "+sBlock+" )</i>", action, actor);
			            }
		            	break;
	            	case "set":
	            		if(eValue < sBlock || !options.sBlockBan) {
			            	sBlock = Math.min(eValue*repeat, maxSBlock);
				            if(sBlock > preV) {
				            	player.record[round-1].event.gain.sBlock += sBlock - preV;
		            			if(combatOptions.animation_show) {
					            	await animationColorize(actionCardDiv, 'rgba(255, 255, 0, 0.5)');
					            }
				            }
			            	addLogText("감각차단을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+sBlock+" )</i>", action, actor);
			            }
		            	break;
		            }
		            var _changed = sBlock - preV
		            cardRecordData.sBlock += _changed;
	            	infoUpdate();

	            	animationEmphasis(sBlockNumber);
	        		await animationColorizeNum(sBlockNumber, 'rgba(255, 255, 0, 0.5)');
	            	break;
	            case "changeDelayedEx":
	            	var preV = delayedEx;
	        		switch(e.op) {
	            	case "add":
		            	for(let i=0; i<repeat; i++) {
			            	delayedEx = Math.min(Math.max(delayedEx + eValue, 0), Infinity);
			            }
		            	if(combatOptions.animation_show) {
					        await animationColorize(actionCardDiv, 'rgba(255, 255, 0, 0.5)');
					    }
		            	addLogText("지연된 흥분 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+delayedEx+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	for(let i=0; i<repeat; i++) {
			            	delayedEx = Math.min(Math.max(delayedEx * eValue, 0), Infinity);
			            }
		            	if(combatOptions.animation_show) {
					        await animationColorize(actionCardDiv, 'rgba(255, 255, 0, 0.5)');
					    }
			            addLogText("지연된 흥분 x"+(eValue*repeat)+" <i>( "+preV+" -> "+delayedEx+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	delayedEx = Math.min(eValue*repeat, Infinity);
		            	if(combatOptions.animation_show) {
					        await animationColorize(actionCardDiv, 'rgba(255, 255, 0, 0.5)');
					    }
		            	addLogText("지연된 흥분을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+delayedEx+" )</i>", action, actor);
		            	break;
		            }
		            var _changed = delayedEx - preV
		            cardRecordData.delayedEx += _changed;
	            	infoUpdate();

	        		await animationColorizeNum(delayedExNumber, 'rgba(255, 255, 0, 0.5)');
	            	break;
	            case "changeCorrupt":
	            	var preV = corrupt;
	        		switch(e.op) {
	            	case "add":
		            	for(let i=0; i<repeat; i++) {
			            	corrupt = Math.min(Math.max(corrupt + eValue, 0), Infinity);
			            }
		            	if(combatOptions.animation_show) {
					        await animationColorize(actionCardDiv, 'rgba(160, 50, 160, 0.5)');
					    }
		            	addLogText("타락 "+((eValue>0)?"+":"")+(eValue*repeat)+" <i>( "+preV+" -> "+corrupt+" )</i>", action, actor);
		            	break;
	            	case "multiply":
		            	for(let i=0; i<repeat; i++) {
			            	corrupt = Math.min(Math.max(corrupt * eValue, 0), Infinity);
			            }
		            	if(combatOptions.animation_show) {
					        await animationColorize(actionCardDiv, 'rgba(160, 50, 160, 0.5)');
					    }
			            addLogText("타락 x"+(eValue*repeat)+" <i>( "+preV+" -> "+corrupt+" )</i>", action, actor);
		            	break;
	            	case "set":
		            	corrupt = Math.min(eValue*repeat, Infinity);
		            	if(combatOptions.animation_show) {
					        await animationColorize(actionCardDiv, 'rgba(160, 50, 160, 0.5)');
					    }
		            	addLogText("타락을 "+attachPostposition(eValue*repeat, "으로 ", "로 ")+"만듦"+" <i>( "+preV+" -> "+corrupt+" )</i>", action, actor);
		            	break;
		            }
		            var _changed = corrupt - preV
		            cardRecordData.corrupt += _changed;
	            	infoUpdate();

	        		animationColorizeNum(corruptNumber, 'rgba(160, 50, 160, 0.5)');
	            	await animationNegative(document.getElementById("playerPortrait"), false);
	            	break;
	            case "poison":
	            	for(let i=0; i<repeat; i++) {
		            	if(e.value.startsWith("randomCard")) {
		        			eValue = returnText(e.value, actor)
		        		}
		        		var _poison;
		        		if(target.state.some(st => st.id == eValue)) {
		        			_poison = target.state.find(st => st.id == eValue);
		        			if(_poison.expiration == "turnEnd") {
		        				_poison.duration = 2;
		        			}

		        			let tempCardDiv;
					        tempCardDiv = createCard(_poison, 28);
					        var actionsContainer = document.getElementById('useActions');
					        actionsContainer.appendChild(tempCardDiv);
					        adjustCardFontSize(tempCardDiv);
					        actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					        await animationFlyIn(tempCardDiv, (target == enemy) ? 'up' : 'down');
					        await wait([200, 300, 500, 750, 1000][turnSpeed]);

						    let preV = _poison.stack;
					    	await animationXscale(tempCardDiv, 1, 0);
					    	_poison.stack += 1;
					    	cardTextUpdate(tempCardDiv, _poison);
					    	await animationXscale(tempCardDiv, 0, 1);

						    addLogText(`강화됨 <i>( ${preV} -> ${_poison.stack} )</i>`, _poison, actor);

						    await wait([200, 300, 500, 750, 1000][turnSpeed]);
						    await animationFlyAway(tempCardDiv, (target == enemy) ? 'up' : 'down');
						    tempCardDiv.remove();
		        		} else {
		        			_poison = deepCopy(cardDB[eValue]);
		        			if(!_poison.stack) {
		        				_poison.stack = 1;
		        			}
			            	_poison.owner = tpos;
			            	target.state.push(_poison);
							target.record[round-1].event.getState.push(_poison);
			            	cardRecordData[tpos==1?"player":"enemy"].getState.push(_poison);

							var tempCardDiv = createCard(_poison, 28);
							tempCardDiv.style.opacity = 0;
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempCardDiv);
							adjustCardFontSize(tempCardDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

						    await animationFloatIn(tempCardDiv, 'left', 40);
						    await waitOrClick(calculateDisplayTime(_poison));
			            	await animationFlyAway(tempCardDiv, (target == player)?'down':'up');
			            	tempCardDiv.remove();
		        		}
						var cardText = createCardText(_poison);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(`${tText}에게 <span title="${cardText}"><b>[${_poison.name[language]}]</b></span> 부여`, action, actor, true, _poison.name[language], cardText);
		            	infoUpdate();
						await actionEffect(_poison, "getState");
		            }
	            	break;
	            case "poisonAdd":
	            	for(let i=0; i<repeat; i++) {
		            	if(e.value.startsWith("randomCard")) {
		        			eValue = returnText(e.value, actor)
		        		}
		        		var _poison = deepCopy(cardDB[eValue]);
		        		poisonSac.push(_poison);

		        		var cardText = createCardText(_poison);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(`${attachPostposition(`<span title=${cardText}"><b>[${_poison.name[language]}]</b></span>`, "을", "를")} 독주머니에 추가`, action, actor, true, _poison.name[language], cardText);
		            	infoUpdate();

						var tempPoisonDiv = createCard(_poison, 28);
						tempPoisonDiv.style.opacity = 0;
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempPoisonDiv);
						adjustCardFontSize(tempPoisonDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationAppear(tempPoisonDiv);
		            	await waitOrClick(calculateDisplayTime(_poison));
		            	await animationDisappear(tempPoisonDiv);
		            	tempPoisonDiv.remove();
		        	}
	            	break;
	            case "count":
					var tdeck = (actor == 1)?deck:opDeck;
					var _state = actorObj.state.slice();
					if(e.trap == "self") {
		            	var trapCardDiv;
						trapCardDiv = document.querySelector('#useActions .card:last-child');

						var preV = action.duration;
            			for(let i=0; i<repeat; i++) {
		            		action.duration = Math.max(action.duration - eValue, 0);
		            	}
		            	cardTextUpdate(trapCardDiv, action);
		            	addLogText("카운트 -"+(eValue*repeat)+" <i>( "+preV+" -> "+action.duration+" )</i>", action, actor);
		            	await wait(100);
		            	if(action.duration <= 0) {
		            		addLogText("카운트 효과 발동!", action, actor);
			            	if(combatOptions.animation_show) {
			            		await animationShake(trapCardDiv);
			            	}
		            		await actionEffect(action, "count", 0, 32, true);

		            		action.duration = action.defaultDuration;
		            	}
	            		infoUpdate();
					} else if(e.trap == "all") {
		            	for(let cd of _state) {
		            		if(cd.expiration == "count") {
		            			var trapCardDiv;
	            				trapCardDiv = createCard(cd, 28);
								trapCardDiv.style.opacity = 0;
								var actionsContainer = document.getElementById('useActions');
								actionsContainer.appendChild(trapCardDiv);
								adjustCardFontSize(trapCardDiv);
								actionsContainer.scrollLeft = actionsContainer.scrollWidth;
								await animationAppear(trapCardDiv);

				            	var preV = cd.duration;
		            			for(let i=0; i<repeat; i++) {
				            		cd.duration = Math.max(cd.duration - eValue, 0);
				            	}
				            	cardTextUpdate(trapCardDiv, cd);
								var cardText = createCardText(cd);
								cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
				            	addLogText("<span title=\""+cardText+"\"><b>["+cd.name[language]+"]</b></span>의 카운트 -"+(eValue*repeat)+" <i>( "+preV+" -> "+cd.duration+" )</i>", action, actor);
            					await waitOrClick(calculateDisplayTime(cd));
				            	if(cd.duration <= 0) {
				            		addLogText("트랩 발동!", cd, actor);
		            				if(combatOptions.animation_show) {
					            		await animationShake(trapCardDiv);
					            	}
				            		await actionEffect(cd, "count");

		            				action.duration = action.defaultDuration;
				            	}
			            		infoUpdate();
	            				await animationDisappear(trapCardDiv);
	            				trapCardDiv.remove();
			            	}
		            	}
	            	}
	            	break;
	            case "useTimes":
	            	for(let i=0; i<repeat; i++) {
		            	target.useTimes += eValue;
		            }
	            	addLogText("다음으로 사용하는 "+tText+"의 카드의 효과가 "+(eValue*repeat)+"번 더 발동함", action, actor);
	            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;
	            case "duration":
	            	if(e.info.target == 'derived' || e.info.target == '파생') {
	            		selectPool = derived;
	            	} else if(e.info.target == 'selfCard' || e.info.target == 'self') {
	            		selectPool = [action];
	            	} else if(e.info.target.startsWith("id:")) {
	            		let _id = e.info.target.slice(3);
	            		selectPool.push(cardDB[_id]);
	            		deck.forEach(function(cd) {
	            			if(cd.id == _id) {
	            				selectPool.push(cd);
	            			}
	            		})
	            	} else {
	            		selectPool = returnText(e.info.target, actor);
	            	}
	            	var dValue = returnText(e.info.value, actor);
	            	for(let st of selectPool) {
	            		for(let i=0; i<repeat; i++) {
		            		st.duration += dValue;
		            	}
	            		if(st.duration <= 0) {
							await actionEffect(st, "expired");
							if(tpos == 0) {
								enemy.state.splice(enemy.state.indexOf(st), 1);
							}
							if(tpos == 1) {
								player.state.splice(player.state.indexOf(st), 1);
							}
						}
	            	}
	            	if(selectPool.length) {
	            		if(e.info.target.startsWith("id:")) {
	            			addLogText(`모든 <b>[${cardDB[e.info.target.slice(3)].name[language]}]</b>의 지속 시간 ${((dValue>=0)?"+":"")+dValue*repeat}`, action, actor);
	            		} else {
	            			addLogText(`${selectPool.map(cd => `<b>[${cd.name[language]}]</b>`).join(", ")}의 지속 시간 ${((dValue>=0)?"+":"")+dValue*repeat}`, action, actor);
	            		}
	            	}
	            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;
	            case "transform":
	            	var tCards;
	            	let trsCount = 0;
	            	if(e.trigger == "choice") {
	            		tCards = selectPool;
	            	} else {
	            		if(e.info.target == "self") {
		            		tCards = [action];
		            	} else {
		            		tCards = returnText(e.info.target, actor);
		            	}
	            	}
	            	for(let tc of tCards) {
	            		if(e.info.target != "self") {
		            		var tempStateDiv = createCard(tc, 28);
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempStateDiv);
							adjustCardFontSize(tempStateDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

			            	await animationFlyIn(tempStateDiv, (target == player)?'down':'up');
			            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
						    await waitOrClick(calculateDisplayTime(tc));
							await actionEffect(tc, "transformed", 0, 28, true);
			            	await animationXscale(tempStateDiv, 1, 0);
			            	tempStateDiv.remove();
			            }

	            		var oCard, nc;
	            		if(e.info.value == "original") {
	            			nc = tc.original;
	            		} else {
	            			oCard = returnText(e.info.value, actor);
	            			if(typeof oCard == "string") {
	            				nc = deepCopy(cardDB[oCard]);
	            			} else {
	            				nc = deepCopy(oCard);
	            				if(!nc && e.info.value.startsWith("마술슬롯")) {
	            					nc = deepCopy(cardDB['MA-MG-000']);
	            				}
	            			}
	            			if(nc) {
		            			nc.owner = tpos;
			            		nc.original = tc;
			            		nc.tags.push("생성됨");
			            		nc.tags.push("변형됨");
			            		if(tc.tags.includes("변형됨")) {
			            			nc.tags.push("두번변형됨");
			            		}

			            		if(nc.tags.includes("초월") && !selectedTransc.includes(nc.id)) {
			            			selectedTransc.push(nc.id);
			            		}

			            		if(nc.id == 'AD-NT-TR-BG5-001-1') {
			            			const _maxUseEffect = tc.effect.find(e => e.trigger == 'selected' && e.type == 'maxUse');
			            			if(_maxUseEffect) {
			            				nc.effect.push(_maxUseEffect);
			            			}
			            			const _choiceEffect = tc.effect.find(e => e.trigger == 'choice');
			            			if(_choiceEffect) {
			            				nc.effect[0].trigger = "choice";
			            				nc.effect[0].range = _choiceEffect.range;
			            			}
			            		}
				            }
		            	}

		            	if(nc) {
		            		let targetObj;
		            		if(tc.isDeck) {
				            	if(target === player) {
				            		targetObj = deck;
				            		if (choiceValues.class == '마술사' && actor == 1) {
			            				trsCount++;
			            			}
				            	}
				            	if(target === enemy) {
				            		targetObj = opDeck;
				            	}
				            } else {
				            	if(target === player) {
				            		targetObj = player.state;
				            	}
				            	if(target === enemy) {
				            		targetObj = enemy.state;
				            	}
				            }
		            		if(tc.bound) {
		            			nc.bound = tc.bound;
		            			targetObj.forEach(cd => {
		            				if(cd.bounded && cd.bounded.includes(tc)) {
		            					cd.bounded[cd.bounded.indexOf(tc)] = nc;
		            				}
		            			})
		            		}
				            nc.isDeck = tc.isDeck;
				            //targetObj[targetObj.indexOf(tc)] = nc;
				            if (targetObj.indexOf(tc) != -1) {
					            targetObj.splice(targetObj.indexOf(tc), 1);
					        }
				            targetObj.push(nc);
			            	derived.push(nc);
			            	actorObj.record[round-1].transform.push(nc);
			            	cardRecordData[actor==1?"player":"enemy"].transform.push(nc);

			            	var cardText1 = createCardText(tc);
			            	var cardText2 = createCardText(nc);
							cardText1 = cardText1.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							cardText2 = cardText2.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							addLogText(`${tText}의 ${attachPostposition(`<span title=${cardText1}"><b>[${tc.name[language]}]</b></span>`, "을", "를")} ${attachPostposition(`<span title="${cardText2}"><b>[${nc.name[language]}]</b></span>`, "으로", "로")} 변형함`, action, actor, true, nc.name[language], cardText2);

							if(e.info.target != "self") {
				            	var tempStateDiv = createCard(nc, 28);
								var actionsContainer = document.getElementById('useActions');
								actionsContainer.appendChild(tempStateDiv);
								adjustCardFontSize(tempStateDiv);
								actionsContainer.scrollLeft = actionsContainer.scrollWidth;

				            	await animationXscale(tempStateDiv, 0, 1);
							    await waitOrClick(calculateDisplayTime(nc));
				            	await animationFlyAway(tempStateDiv, (target == player)?'down':'up');
				            	tempStateDiv.remove();
				            } else {
				            	await animationXscale(actionCardDiv, 1, 0);
				            	cardTextUpdate(actionCardDiv, nc);
				            	await animationXscale(actionCardDiv, 0, 1);
							    await waitOrClick(calculateDisplayTime(nc));
				            }

						    var _states = target.state.slice();
						    for(let i=0; i<repeat; i++) {
				            	for(let st of _states) {
				            		await stateEffect(st, "transformCard");
				            	}
				            }
				            var tdeck = (target == player)?deck:opDeck;
						    var _deck = tdeck.slice();
						    for(let i=0; i<repeat; i++) {
				            	for(let cd of _deck) {
				            		await stateEffect(cd, "transformCard");
				            	}
				            }
			            }
	            	}
	            	if(trsCount > 0 && !options.sBlockBan && !player.state.some(st => st.id == "DA-MA-ALL-001")) {
	            		var preV = sBlock;
				        sBlock = Math.min(Math.max(sBlock + trsCount, 0), maxSBlock);
				        player.record[round-1].event.gain.sBlock += sBlock - preV;
            			addLogText("감각차단 +"+trsCount+" <i>( "+preV+" -> "+sBlock+" )</i>");
			            cardRecordData.sBlock += sBlock - preV;
		            	infoUpdate();
		            	animationEmphasis(sBlockNumber);
		        		await animationColorizeNum(sBlockNumber, 'rgba(255, 255, 0, 0.5)');
	            	}
	            	break;
	            case "changeSpell":
	            	var tc = returnText(`마술슬롯.${e.slot}`, actor);

            		var tempStateDiv = createCard(tc, 28);
					var actionsContainer = document.getElementById('useActions');
					actionsContainer.appendChild(tempStateDiv);
					adjustCardFontSize(tempStateDiv);
					actionsContainer.scrollLeft = actionsContainer.scrollWidth;

	            	await animationFlyIn(tempStateDiv, 'down');
				    await waitOrClick(calculateDisplayTime(tc));
	            	await animationXscale(tempStateDiv, 1, 0);
	            	tempStateDiv.remove();

            		var oCard, nc;
        			oCard = returnText(e.value, actor);
        			if(typeof oCard == "string") {
        				nc = deepCopy(cardDB[oCard]);
        			} else {
        				nc = deepCopy(oCard);
        				if(!nc && e.value.startsWith("마술슬롯")) {
        					nc = deepCopy(cardDB['MA-MG-000']);
        				}
        			}

	            	if(nc) {
	            		if(nc.tags.includes("초월") && !selectedTransc.includes(nc.id)) {
	            			selectedTransc.push(nc.id);
	            		}
	            		
            			nc.owner = actor;
			            spellSlot[spellSlot.indexOf(tc)] = nc;
		            	derived.push(nc);
		            	cardRecordData[actor==1?"player":"enemy"].transform.push(nc);

		            	var cardText = createCardText(nc);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText(`${e.slot} 슬롯을 ${attachPostposition(`<span title="${cardText}"><b>[${nc.name[language]}]</b></span>`, "으로", "로")} 교체함`, action, actor, true, nc.name[language], cardText);

		            	var tempStateDiv = createCard(nc, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

		            	await animationXscale(tempStateDiv, 0, 1);
					    await waitOrClick(calculateDisplayTime(nc));
		            	await animationFlyAway(tempStateDiv, 'down');
		            	tempStateDiv.remove();
		            }
	            	break;
	            case "steal":
	            	const stealCards = [];
	            	if(Array.isArray(eValue)) {
	            		for(let sc of eValue) {
	            			stealCards.push(deepCopy(sc));
	            		}
	            	}
	            	function replaceLewdAndEstrus(obj) {
						for (let key in obj) {
							if (obj.hasOwnProperty(key)) {
								if (typeof obj[key] === 'object' && obj[key] !== null) {
									replaceLewdAndEstrus(obj[key]);
								} else {
									if (obj[key] === "lewd") {
										obj[key] = "estrus";
									} else if (obj[key] === "estrus") {
										obj[key] = "lewd";
									} else if (obj[key] === "음란") {
										obj[key] = "발정";
									} else if (obj[key] === "발정") {
										obj[key] = "음란";
									}
								}
							}
						}
					}
	            	for(let stealCard of stealCards) {
	            		stealCard.owner = (stealCard.owner == 0)?1:0;
	            		for(let ste of stealCard.effect) {
	            			replaceLewdAndEstrus(ste);
	            			if((ste.type == "get" || ste.type == "state") && cardDB[ste.value]) {
	            				cardDB[ste.value+"(R)"] = deepCopy(cardDB[ste.value]);
	            				cardDB[ste.value+"(R)"].parents = (cardDB[ste.value].parents)?cardDB[ste.value].parents:ste.value;
	            				ste.value = ste.value+"(R)";
	            				replaceLewdAndEstrus(cardDB[ste.value].effect);
	            			}
	            		}

		            	if(actor == 1) {
		            		deck.push(stealCard);
		            		opDeck.splice(opDeck.indexOf(stealCard), 1);
		            	}
		            	if(actor == 0) {
		            		opDeck.push(stealCard);
		            		deck.splice(deck.indexOf(stealCard), 1);
		            	}
		            	derived.push(stealCard);
		            	actorObj.record[round-1].event.get.push(stealCard);
	            		cardRecordData[actor==1?"player":"enemy"].get.push(stealCard);

						var cardText = createCardText(stealCard);
						cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
						addLogText("상대 덱으로부터 "+attachPostposition("<span title=\""+cardText+"\"><b>["+stealCard.name[language]+"]</b></span>", "을 ", "를 ")+" 훔쳐옴.", action, actor);
		            	infoUpdate();

						var tempStateDiv = createCard(stealCard, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationFlyIn(tempStateDiv, (actor == 1)?'up':'down');
					    await waitOrClick(calculateDisplayTime(stealCard));
		            	await animationFlyAway(tempStateDiv, (actor == 0)?'up':'down');
		            	tempStateDiv.remove();
					    await actionEffect(stealCard, "get", index);
					    var _states = actorObj.state.slice();
						_states.sortCards('priority');
					    for(let i=0; i<repeat; i++) {
			            	for(let st of _states) {
			            		await stateEffect(st, "getCard");
			            		if(stealCard.type == "패널티") {
			            			await stateEffect(st, "getPenalty");
			            		}
			            	}
			            }
			            var adeck = (actor == 1)?deck:opDeck;
					    var _deck = adeck.slice();
						_deck.sortCards('priority');
					    for(let i=0; i<repeat; i++) {
			            	for(let cd of _deck) {
			            		await stateEffect(cd, "getCard");
			            		if(stealCard.type == "패널티") {
			            			await stateEffect(cd, "getPenalty");
			            		}
			            	}
			            }
		            }
	            	break;
	            case "stack":	            	
	            	if(e.info.target == 'derived' || e.info.target == '파생') {
	            		selectPool = derived;
	            	} else if(e.info.target == 'selfCard' || e.info.target == 'self') {
	            		selectPool = [action];
	            	} else if(e.info.target.startsWith("id:")) {
	            		let _id = e.info.target.slice(3);
	            		selectPool.push(cardDB[_id]);
	            		(actorObj=="player"?deck:opDeck).forEach(function(cd) {
	            			if(cd.id == _id) {
	            				selectPool.push(cd);
	            			}
	            		})
	            		actorObj.state.forEach(function(st) {
	            			if(st.id == _id) {
	            				selectPool.push(st);
	            			}
	            		})
	            	} else {
	            		selectPool = returnText(e.info.target, actor);
	            	}

	            	function groupByIdAndStack(pool) {
					    const grouped = {};
					    for (let cd of pool) {
					        const key = `${cd.id}_${cd.stack}`;
					        if (!grouped[key]) {
					            grouped[key] = { cards: [], count: 0 };
					        }
					        grouped[key].cards.push(cd);
					        grouped[key].count += 1;
					    }
					    return grouped;
					}

					for (let [key, group] of Object.entries(groupByIdAndStack(selectPool))) {
					    let tempCardDiv;
					    const firstCard = group.cards[0];

					    if (e.info.target != 'selfCard' && e.info.target != 'self') {
					        tempCardDiv = createCard(firstCard, 28);
					        var actionsContainer = document.getElementById('useActions');
					        actionsContainer.appendChild(tempCardDiv);
					        adjustCardFontSize(tempCardDiv);
					        actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					        await animationFlyIn(tempCardDiv, (actor == 0) ? 'up' : 'down', 40);
					        await wait([200, 300, 500, 750, 1000][turnSpeed]);
					    } else {
					        tempCardDiv = actionCardDiv;
					    }

					    let preV = firstCard.stack;
					    for(let _i = eValue - 1; _i >= 0; _i--) {
					    	await animationXscale(tempCardDiv, 1, 0);
					    	group.cards.forEach(cd => cd.stack += 1);
					    	cardTextUpdate(tempCardDiv, firstCard);
					    	await animationXscale(tempCardDiv, 0, 1);
					    }

					    if (!e.info.target.startsWith("id:")) {
					        if (group.count > 1) {
					            addLogText(`${group.count}장 강화됨 <i>( ${preV} -> ${firstCard.stack} )</i>`, firstCard, actor);
					        } else {
					            addLogText(`강화됨 <i>( ${preV} -> ${firstCard.stack} )</i>`, firstCard, actor);
					        }
					    } else {
					        addLogText(`강화됨 <i>( ${preV} -> ${firstCard.stack} )</i>`, firstCard, actor);
					    }

					    await wait([200, 300, 500, 750, 1000][turnSpeed]);

					    if (e.info.target != 'selfCard' && e.info.target != 'self') {
					        await animationFlyAway(tempCardDiv, (actor == 0) ? 'up' : 'down');
					        tempCardDiv.remove();
					    }
					}
	            	break;
	            case "combine":
	            	var tCards;
	            	if(e.trigger == "choice") {
	            		tCards = selectPool;
	            	} else {
	            		if(e.info.target == "derived") {
	            			tCards = [...derived];
	            		} else {
	            			tCards = returnText(e.info.target, actor);
	            		}
	            	}
	            	if(Array.isArray(tCards) && tCards.length >= 2) {
		            	let tempCardDivs = [];
		            	let targetObj;
		            	if(target === player) {
		            		targetObj = deck;
		            	}
		            	if(target === enemy) {
		            		targetObj = opDeck;
		            	}
		            	for(let tc of tCards) {
		            		await actionEffect(tc, "combined", index, 28, false);

		            		let tempCardDiv = createCard(tc, 28)
		            		tempCardDivs.push(tempCardDiv);
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempCardDiv);
							adjustCardFontSize(tempCardDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;
							if (targetObj.includes(tc)) {
								targetObj.splice(targetObj.indexOf(tc), 1);
							}

		            		if(!combatOptions.animation_show) {
					    		await animationAppear(tempCardDiv);
					    		await animationDisappear(tempCardDiv);
					    	}
				        }

		            	if(combatOptions.animation_show) {
					      	let lastCardDiv;
					        lastCardDiv = await animationFlyInStack(tempCardDivs, 'down');
					        await animationXscale(lastCardDiv, 1, 0);
					        lastCardDiv.remove();
					    }

	            		var oCard, nc, ncDiv;
            			oCard = returnText(e.value, actor);
            			if(typeof oCard == "string") {
            				nc = deepCopy(cardDB[oCard]);
            			} else {
            				nc = deepCopy(oCard);
            			}
            			if(nc) {
	            			let _maxuseContains = false, _e;
	            			let _echoIn = tCards.some(cd => cd.id == "HE-IN-006");
            				nc.parents = action.id;
	            			nc.owner = tpos;
	            			nc.originals = [];
			            	for(let tc of tCards) {
			            		nc.originals.push(tc);
			            		if(tc.tags.includes("정수")) {
			            			let _e = deepCopy(tc.effect);
			            			if(tc.id == "HE-IN-002" || tc.id == "HE-IN-999") {
			            				//nc.type = "공격";
			            			}
			            			switch(tc.id) {
			            			case "HE-IN-005":
			            				if(_echoIn) {
						            		_e[0].value = `${tc.id}-2`;
						            	}
			            				nc.effect.push(..._e);
			            				break;
			            			case "HE-IN-006":
			            				break;
			            			case "HE-IN-008":
			            				_maxuseContains = true;
			            				break;
			            			case "HE-IN-009":
										nc.effect.push(..._e);
			            				break;
			            			default:
			            				if(_echoIn) {
						            		_e.forEach(__e => __e.repeat = __e.repeat?__e.repeat*2:2);
						            	}
			            				nc.effect.push(..._e);
			            				break;
			            			}
			            		} else {
		            				if(tc.effect.some(__e => __e.trigger == "choice")) {
		            					_e = {trigger:"choice", range:deepCopy(tc.effect.find(__e => __e.trigger == "choice").range), cond:true, type:"use", value:tc};
		            				} else {
		            					_e = {trigger:"used", cond:true, type:"use", value:tc};
		            				}
		            				if(tc.type == "공격") {
		            					//nc.type = "공격";
		            				}
		            				if(_echoIn) {
					            		_e.repeat = 2;
					            	}
			            			nc.effect.push(_e);

			            			if(nc.keywords) {
			            				if(!nc.keywords.includes(tc.id)) {
				            				nc.keywords.push(`id:${tc.id}`);
				            			}
			            			} else {
			            				nc.keywords = [`id:${tc.id}`];
			            			}
			            		}
			            	}
			            	
			            	if(_maxuseContains) {
			            		nc.effect.push({trigger:"selected", cond:true, type:"maxUse", target:"self", value:1});
			            	}

		            		if(nc.isDeck) {
				            	if(target === player) {
				            		targetObj = deck;
				            	}
				            	if(target === enemy) {
				            		targetObj = opDeck;
				            	}
				            } else {
				            	if(target === player) {
				            		targetObj = player.state;
				            	}
				            	if(target === enemy) {
				            		targetObj = enemy.state;
				            	}
				            }

				            nc.tags.push(...["결합불가", "생성됨"]);
				            targetObj.push(nc);
			            	derived.push(nc);
			            	cardRecordData[actor==1?"player":"enemy"].combine.push(nc);
			            	target.record[round-1].combine.push(nc);

			            	var cardText = createCardText(nc);
							cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							addLogText(tText+"의 "+attachPostposition(tCards.map(cd => `<b>[${cd.name[language]}]</b>`).join(", "), "을 ", "를 ")+attachPostposition("<span title=\""+cardText+"\"><b>["+nc.name[language]+"]</b></span>", "으로 ", "로 ")+"결합함", action, actor);
			            	
			            	var tempStateDiv = createCard(nc, 28);
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempStateDiv);
							adjustCardFontSize(tempStateDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

			            	await animationXscale(tempStateDiv, 0, 1);



						    await waitOrClick(calculateDisplayTime(nc));
			            	await animationFlyAway(tempStateDiv, (target == player)?'down':'up');
			            	tempStateDiv.remove();
							
						    var _states = target.state.slice();
							_states.sortCards('priority');
						    for(let i=0; i<repeat; i++) {
				            	for(let st of _states) {
				            		await stateEffect(st, "combineCard");
				            	}
				            }
				            var tdeck = (target == player)?deck:opDeck;
						    var _deck = tdeck.slice();
							_deck.sortCards('priority');
						    for(let i=0; i<repeat; i++) {
				            	for(let cd of _deck) {
				            		await stateEffect(cd, "combineCard");
				            	}
				            }
		            	}
		            }
	            	break;
	            case "bound":
	            	var tCards;
	            	if(e.trigger == "choice") {
	            		tCards = selectPool;
	            	} else {
	            		tCards = returnText(e.info.target, actor);
	            	}
	            	for(let tc of tCards) {
	            		var tempCardDiv = createCard(tc, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempCardDiv);
						adjustCardFontSize(tempCardDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

		            	await animationFlyIn(tempCardDiv, (target == player)?'down':'up');
		            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
					    await waitOrClick(calculateDisplayTime(tc));

	            		var oCard, nc;
            			oCard = returnText(e.value, actor);
            			if(typeof oCard == "string") {
            				nc = deepCopy(cardDB[oCard]);
            			} else {
            				nc = deepCopy(oCard);
            			}
            			if(nc) {
	            			nc.owner = tpos;
		            		nc.bound = tc;
		            		if(tc.bounded === undefined) {
		            			tc.bounded = [];
		            		}
		            		tc.bounded.push(nc);
		            		nc.tags.push(...["생성됨"]);

		            		let targetObj;
			            	if(target === player) {
			            		targetObj = deck;
			            	}
			            	if(target === enemy) {
			            		targetObj = opDeck;
			            	}
				            targetObj.splice(targetObj.indexOf(tc)+1, 0, nc);
			            	derived.push(nc);
			            	actorObj.record[round-1].event.get.push(nc);
			            	cardRecordData[actor==1?"player":"enemy"].get.push(nc);

			            	var cardText1 = createCardText(tc);
			            	var cardText2 = createCardText(nc);
							cardText1 = cardText1.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							cardText2 = cardText2.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							addLogText(`${tText}의 <span title=${cardText1}"><b>[${tc.name[language]}]</b></span>에 ${attachPostposition(`<span title="${cardText2}"><b>[${nc.name[language]}]</b></span>`, "을", "를")} 결속함`, action, actor, true, nc.name[language], cardText2);

			            	var tempCardDiv2 = createCard(nc, 28);
							tempCardDiv2.style.opacity = 0;
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempCardDiv2);
							adjustCardFontSize(tempCardDiv2);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

							await animationAppear(tempCardDiv2)
						    await wait([200, 300, 500, 750, 1000][turnSpeed]);
						    await waitOrClick(calculateDisplayTime(nc));
						    await animationFloatOut(tempCardDiv2, "left", 40);
			            	tempCardDiv2.remove();
						    await wait([200, 300, 500, 750, 1000][turnSpeed]);
			            	await animationFlyAway(tempCardDiv, (target == player)?'down':'up');
			            	tempCardDiv.remove();

						    var _states = target.state.slice();
							_states.sortCards('priority');
						    for(let i=0; i<repeat; i++) {
				            	for(let st of _states) {
				            		await stateEffect(st, "getCard");
				            		if(nc.type == "패널티") {
				            			await stateEffect(st, "getPenalty");
				            		}
				            	}
				            }
				            var tdeck = (target == player)?deck:opDeck;
						    var _deck = tdeck.slice();
							_deck.sortCards('priority');
						    for(let i=0; i<repeat; i++) {
				            	for(let cd of _deck) {
				            		await stateEffect(cd, "getCard");
				            		if(nc.type == "패널티") {
				            			await stateEffect(cd, "getPenalty");
				            		}
				            	}
				            }
			            }
	            	}
	            	break;
				case "maxRound":
					maxRound += eValue;
					addLogText(`최대 라운드가 ${eValue} 증가`, action, actor);
		            infoUpdate();
		            await wait([200, 300, 500, 750, 1000][turnSpeed]);
					break;

	            case "specialA01":
	            	if(3 > real_estrus) {
	            		animationColorize(playerPort, 'rgba(255, 0, 0, 0.5)');
				        await animationColorize(actionCardDiv, 'rgba(255, 0, 0, 0.5)');
	            	} else {
	            		animationColorize(playerPort, 'rgba(0, 0, 255, 0.5)');
				        await animationColorize(actionCardDiv, 'rgba(0, 0, 255, 0.5)');
	            	}
	            	var preV = real_estrus;
	            	let spav = real_estrus - minEstrus;
	            	real_estrus = minEstrus;
	        		addLogText("발정을 최저값으로 만듦"+" <i>( "+preV+" -> "+real_estrus+" )</i>", action, actor);
	            	infoUpdate();
	            	await animationEmphasis(estrusNumber);
	            	if(spav > 0 && !options.lustBan) {
		            	preV = lust;
	            		lust = Math.min(lust + spav*2, maxLust);
	            		addLogText("욕망 +"+spav*2+" <i>( "+preV+" -> "+lust+" )</i>", action, actor);
	            		infoUpdate();
	            		await animationColorizeNum(lustNumber, 'rgba(255, 0, 0, 0.5)');
	            	}
	            	break;
	            case "specialA02":
	            	const _poisons = poisonSac.map(_poison => _poison.id)
	            	for(let _po of poisonSac) {
	            		_po.effect.find(e => e.type == "poison").repeat = 2;
	            		const _po2 = cardDB[_po.tags.find(tg => tg.startsWith("po:")).slice(3)];
	            		_po2.expiration = "turnEnd";
	            		_po2.duration = 2;

	            		var cardText = createCardText(_po);
		            	cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
		            	addLogText("<span title=\""+cardText+"\"><b>["+_po.name[language]+"]</b></span>이 개조되었다.", action, actor);
	        			var tempStateDiv = createCard(_po, 28);
						tempStateDiv.style.opacity = 0;
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

					    await animationAppear(tempStateDiv);
					    await waitOrClick(calculateDisplayTime(_po));
		            	await animationDisappear(tempStateDiv);
		            	tempStateDiv.remove();
	            	}

	            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;
	            case "specialA03":

	            	break;
	            case "specialA04":

	            	break;
	            case "specialA05":
	            	for(let i=0; i<repeat; i++) {
		            	trace++;
		            	addLogText(`무작위 초월 카드를 얻을 준비를 했다. (${trace}/3)`, action, actor);
		            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
		            	if(trace >= 3) {
		            		trace = 0;
		            		let newCard = deepCopy(cardDB[randomCard("tags", "초월")]);
		            		if(!newCard.tags.includes("생성됨")) {
			            		newCard.tags.push("생성됨");
			            	}
		            		deck.push(newCard);

			            	derived.push(newCard);
			            	player.record[round-1].event.get.push(newCard);
		            		cardRecordData[tpos==1?"player":"enemy"].get.push(newCard);

							var cardText = createCardText(newCard);
							cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							addLogText(tText+"의 덱에 <span title=\""+cardText+"\"><b>["+newCard.name[language]+"]</b></span> 1장 추가", action, actor);
			            	infoUpdate();

							var tempStateDiv = createCard(newCard, 28);
							tempStateDiv.style.opacity = 0;
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempStateDiv);
							adjustCardFontSize(tempStateDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

						    await animationAppear(tempStateDiv);
						    await waitOrClick(calculateDisplayTime(newCard));
			            	await animationDisappear(tempStateDiv);
			            	tempStateDiv.remove();
						    await actionEffect(newCard, "get", index);
						    var _states = player.state.slice();
							_states.sortCards('priority');
						    for(let i=0; i<repeat; i++) {
				            	for(let st of _states) {
				            		await stateEffect(st, "getCard");
				            	}
				            }
						    var _deck = deck.slice();
							_deck.sortCards('priority');
						    for(let i=0; i<repeat; i++) {
				            	for(let cd of _deck) {
				            		await stateEffect(cd, "getCard");
				            	}
				            }
		            	}
		            }
	            	break;
	            case "specialA06":
	            	for(let i=0; i<repeat; i++) {
	            		if(posture) {
	            			switch(posture.id) {
	            			case "NT-PS-001":
	            				posture.effect.find(e => e.type == "maxUse").value *= 2;
	            				break;
	            			case "NT-PS-002":
	            				posture.effect.find(e => e.type == "specialA20").value *= 2;
	            				break;
	            			case "NT-PS-003":
	            				var _e = posture.effect.find(e => e.type == "excite");
	            				_e.repeat = (_e.repeat ?? 1) * 2;
	            				break;
	            			case "AS-NM-PS-001":
	            				var _e = posture.effect.find(e => e.type == "get");
	            				_e.repeat = (_e.repeat ?? 1) * 2;
	            				break;
	            			case "AS-NM-PS-002":
	            				posture.effect.find(e => e.type == "changeWetness").value *= 2;
	            				break;
	            			case "AS-EX-PS-001":
	            				var _e = posture.effect.find(e => e.type == "wetness");
	            				var _e2 = _e.info.effect.find(e => e.type == "use");

	            				var regex = /독주머니\.selectCards\(tags, 제조, (\d+)\)/;
								var match = _e2.value.match(regex);

								if (match) {
								    var n = parseInt(match[1], 10);
								    _e2.value = `독주머니.selectCards(tags, 제조, ${n*2})`
								}
	            				break;
	            			case "AS-EX-PS-002":
	            				posture.effect.find(e => e.type == "maxUse").value *= 2;
	            				break;
	            			case "AS-UL-PS-001":
	            				var _e = posture.effect.find(e => e.type == "wetness")?.info.effect.find(e => e.type == "orgasm");
	            				_e.repeat = (_e.repeat ?? 1) * 2;
	            				break;
	            			}

							var cardText = createCardText(posture);
							cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							addLogText(`<span title="${cardText}"><b>[${posture.name[language]}]</b></span>의 효과가 강화됨`, action, actor, true, posture.name[language], cardText);
			            	infoUpdate();

	            			var tempStateDiv = createCard(posture, 28);
							tempStateDiv.style.opacity = 0;
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempStateDiv);
							adjustCardFontSize(tempStateDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

						    await animationAppear(tempStateDiv);
						    await waitOrClick(calculateDisplayTime(posture));
			            	await animationDisappear(tempStateDiv);
			            	tempStateDiv.remove();
	            		}
	            	}
	            	break;
	            case "specialA07":
	            	break;
	            case "specialA08":
	            	let miyeongHelp;
	            	const miyeong = Object.keys(cardDB).filter(id => cardDB[id].tags.includes("미영의 도움") && id != "MA-UL-PS-001-1-10");
	            	const validHelp = [];
	            	miyeong.forEach(function(id) {
	            		if(!miyeongUsedHelp.includes(id)) {
		            		switch(id) {
		            		case "MA-UL-PS-001-1-1":
		            			if(countCard(deck, "type", "패널티") >= 2) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-2":
		            			if(player.real_orgasmL - player.orgasm <= 1) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-3":
		            			if(countCard(deck, "tags", "마도진") >= 2) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-4":
		            			if(lewd >= 4) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-5":
		            			if(player.excite >= 3) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-6":
		            			if(countCard(deck, "tags", "마술") >= 2) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-7":
		            			if(estrus >= 5) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		case "MA-UL-PS-001-1-8":
		            			if(countCard(deck, "tags", "보석") >= 2) {
		            				validHelp.push(id);
		            			}
		            			break;
		            		}
	            		}
	            	});

	            	if(miyeongUsedHelp.length >= 3) {
	            		miyeongHelp = "MA-UL-PS-001-1-10";
	            	} else if(validHelp.length > 0) {
	            		miyeongHelp = getRandom(validHelp);
	            		miyeongUsedHelp.push(miyeongHelp);
	            	} else {
	            		miyeongHelp = "MA-UL-PS-001-1-9";
	            	}
	            	await actionEffect(deepCopy(cardDB[miyeongHelp]), "used", index, 28);

	            	break;
	            case "specialA09":
	            	var preV = magicMissile;
	            	magicMissile += Math.max(repeat, 1);
	            	addLogText("모든 마력탄의 효과가 강화됨 <i>( "+preV+" -> "+magicMissile+" )</i>", action, actor);
	            	cardTextUpdate(actionCardDiv, action);
	            	await animationColorize(actionCardDiv, 'rgba(150, 0, 255, 0.5)');
					await waitOrClick([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;
	            case "specialA10":
	            	break;
	            case "specialA11":
	            	break;
	            case "specialA12":
	            	break;
	            case "specialA13":
	            	break;
	            case "specialA14":
	            	break;
	            case "specialA15":
	            	tCards = deck.filter(cd => cd.tags.includes("미개선"));
	            	for(let tc of tCards) {
	            		var tempStateDiv = createCard(tc, 28);
						var actionsContainer = document.getElementById('useActions');
						actionsContainer.appendChild(tempStateDiv);
						adjustCardFontSize(tempStateDiv);
						actionsContainer.scrollLeft = actionsContainer.scrollWidth;

		            	await animationFlyIn(tempStateDiv, 'down');
		            	await wait([200, 300, 500, 750, 1000][turnSpeed]);
					    await waitOrClick(calculateDisplayTime(tc));
						await actionEffect(tc, "transformed", 0, 28, true);
		            	await animationXscale(tempStateDiv, 1, 0);
		            	tempStateDiv.remove();

	            		var nc;
	            		nc = deepCopy(cardDB[tc.id+"-2"]);
            			if(nc) {
	            			nc.owner = 1;
		            		nc.original = tc;
		            		nc.tags.push(...["변형됨", "생성됨"]);
			            }

		            	if(nc) {
		            		let targetObj = deck;
		            		if(tc.bound) {
		            			nc.bound = tc.bound;
		            			targetObj.forEach(cd => {
		            				if(cd.bounded && cd.bounded.includes(tc)) {
		            					cd.bounded[cd.bounded.indexOf(tc)] = nc;
		            				}
		            			})
		            		}
				            nc.isDeck = tc.isDeck;
				            targetObj[targetObj.indexOf(tc)] = nc;
				            /*targetObj.splice(targetObj.indexOf(tc), 1);
				            targetObj.push(nc);*/
			            	derived.push(nc);
			            	actorObj.record[round-1].transform.push(nc);
			            	cardRecordData[actor==1?"player":"enemy"].transform.push(nc);

			            	var cardText1 = createCardText(tc);
			            	var cardText2 = createCardText(nc);
							cardText1 = cardText1.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							cardText2 = cardText2.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
							addLogText(`${player.name}의 ${attachPostposition(`<span title=${cardText1}"><b>[${tc.name[language]}]</b></span>`, "을", "를")} ${attachPostposition(`<span title="${cardText2}"><b>[${nc.name[language]}]</b></span>`, "으로", "로")} 변형함`, action, actor, true, nc.name[language], cardText2);

			            	var tempStateDiv = createCard(nc, 28);
							var actionsContainer = document.getElementById('useActions');
							actionsContainer.appendChild(tempStateDiv);
							adjustCardFontSize(tempStateDiv);
							actionsContainer.scrollLeft = actionsContainer.scrollWidth;

			            	await animationXscale(tempStateDiv, 0, 1);
						    await waitOrClick(calculateDisplayTime(nc));
			            	await animationFlyAway(tempStateDiv, 'down');
			            	tempStateDiv.remove();

						    var _states = player.state.slice();
						    for(let i=0; i<repeat; i++) {
				            	for(let st of _states) {
				            		await stateEffect(st, "transformCard");
				            	}
				            }
				            var tdeck = deck;
						    var _deck = tdeck.slice();
						    for(let i=0; i<repeat; i++) {
				            	for(let cd of _deck) {
				            		await stateEffect(cd, "transformCard");
				            	}
				            }
			            }
	            	}
	            	break;
	            case "specialA18":
	            	prophecy[0] = Math.floor(Math.random() * 4) + 1;
	            	prophecy[1] = Math.floor(Math.random() * 3) + 1;
	            	prophecy[2] = Math.floor(Math.random() * 4) + 1;

	            	cardDB['BN-TR-003-2'].tags.push(["진홍색 마도진", "담청색 마도진", "황금색 마도진"][prophecy[1] - 1])
	            	if(prophecy[2] == 2) {
	            		cardDB['BN-TR-003-3'].tags.push("순백색 마도진");
	            	}

	            	let _condCardNames = [
	            		["중립 카드", "패널티 카드", "보석 카드", "마술 카드"], 
	            		[`<b>[${cardDB['MA-MC-001'].name[language]}]</b>`, `<b>[${cardDB['MA-MC-002'].name[language]}]</b>`, `<b>[${cardDB['MA-MC-003'].name[language]}]</b>`], 
	            		["집중 마술 카드", `<b>[${cardDB['MA-MC-004'].name[language]}]</b>`, "슬롯에 없는 마술 카드", "두 번 이상 변형된 카드"]
	            	];

	            	await animationDiffusion(actionCardDiv);
	            	var i = 0;
	            	let prophecyCards = [cardDB["BN-TR-003-1"], cardDB["BN-TR-003-2"], cardDB["BN-TR-003-3"]];
	            	for(let pc of prophecyCards) {
		            	var tempCardDiv = createCard(pc, 28);
						tempCardDiv.style.opacity = 0;
				        var actionsContainer = document.getElementById('useActions');
				        actionsContainer.appendChild(tempCardDiv);
				        adjustCardFontSize(tempCardDiv);
				        actionsContainer.scrollLeft = actionsContainer.scrollWidth;
				        addLogText(`<b>[${pc.name[language]}]</b>의 조건이 ${attachPostposition(_condCardNames[i][prophecy[i++] - 1], "으로", "로")} 결정됨`, action, actor);
				        await animationAppear(tempCardDiv);
					    await waitOrClick(calculateDisplayTime(pc));
		            	await animationDisappear(tempCardDiv);
		            	tempCardDiv.remove();
		            }


	            	break;
	            case "specialA19":
	            	var preV = vitality;
	            	vitality += Math.max(repeat, 1);
	            	addLogText("모든 <b>[격동하는 활력]</b> 효과가 강화됨 <i>( "+preV+" -> "+vitality+" )</i>", action, actor);
	            	cardTextUpdate(actionCardDiv, action);
	            	await animationColorize(actionCardDiv, 'rgba(255, 200, 0, 0.5)');
					await waitOrClick([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;

	            case "specialV08":
	            	var preV = real_spore;
	            	real_spore += Math.max(repeat, 1);
	            	addLogText("모든 포자의 효과가 영구적으로 강화됨 <i>( "+preV+" -> "+real_spore+" )</i>", action, actor);
	            	cardTextUpdate(actionCardDiv, action);
	            	await animationColorize(actionCardDiv, 'rgba(150, 0, 255, 0.5)');
					await waitOrClick([200, 300, 500, 750, 1000][turnSpeed]);
	            	break;
	            }

	            if(player.excite >= player.exciteL) {
	            	await orgasmEffect(player, 0);
	            }
	            if(enemy.excite >= enemy.exciteL) {
	            	await orgasmEffect(enemy, 0);
	            }

	            if(e.default) {
	            	defActive = true;
	            }
		    }
        }
        if(textSpan) {
			textSpan.classList.remove("runningText");
			textSpan.classList.add("completeText");
			//await wait(turnSpeed/5);
		}
    }

    if(player.excite >= player.exciteL) {
    	await orgasmEffect(player, 0);
    }
    if(enemy.excite >= enemy.exciteL) {
    	await orgasmEffect(enemy, 0);
    }

    async function orgasmEffect(target, type) {
    	if(target.orgasmBan || (type == 0 && target.suppression) || (type == 1 && target.insensitive)) {
    		return 0;
    	}
    	let _tpos, _tText, _op, tDeck, optDeck;
    	if(target === player) {
    		_op = enemy;
    		_tpos = 1;
    		_tText = player.name;
    		tDeck = deck;
    		optDeck = opDeck;
    		if(player.condition != "ecstasy2") {
	    		changePortrait(player.condition=="corrupted"?"ecstasy2":"ecstasy", 1);
	    	}
    	}
    	if(target === enemy) {
    		_op = player;
    		_tpos = 0;
    		_tText = enemy.name;
    		tDeck = opDeck;
    		optDeck = deck;
    	}

    	var targetPort, targetExNumber, targetAcNumber;
    	target.record[round-1].event.orgasm += 1;
    	cardRecordData[_tpos==1?"player":"enemy"].orgasm += 1;
    	target.orgasm += 1;
    	target.real_excite = 0;
    	if(target.orgasm <= target.orgasmL) {
	    	addLogText(_tText+"의 절정"+" <i>( "+(target.orgasm-1)+" -> "+target.orgasm+" )</i>");
	    } else {
	    	target.overkill += 1;
	    	if(target.overkill > 2) {
		    	turnSpeed = Math.max(turnSpeed - 1, 0);
		    }
    		//document.documentElement.style.setProperty('--scaledown-speed', `${turnSpeed / 500}s`);
	    	addLogText(_tText+"의 절정"+" <i>( 한계 초과 "+(target.overkill)+" )</i>");
	    }
    	if(target === player) {
	        if(player.orgasm >= player.orgasmL) {
	        	player.condition = "ecstasy2";
	        }
    		targetPort = playerPort;
    		targetExNumber = playerExNumber;
    		targetAcNumber = playerAcNumber;
    		await addLine(line["플레이어-절정준비"]);
    		addLine(line["플레이어-절정"]);
	        await wait(50);
    	}
    	if(target === enemy) {
    		targetPort = enemyPort;
    		targetExNumber = enemyExNumber;
    		targetAcNumber = enemyAcNumber;
	        if(enemy.orgasm >= enemy.orgasmL) {
	        	await addLine(line["패배사정"]);
	        } else {
	        	await addLine(line["사정준비"]);
	        }
	        addLine(line["사정"]);
	        await wait(50);
    	}
    	if(target.orgasm == target.orgasmL) {
    		await animationShake(targetPort);
    		//changeTurnSpeed("multiply", 2);
			document.documentElement.style.setProperty('--scaledown-speed', `${3}s`);
    	}
    	await animationEmphasis(targetPort, 1.5);
    	await wait(1000);
    	if(target.orgasm == target.orgasmL) {
    		//changeTurnSpeed("reset");
			document.documentElement.style.setProperty('--scaledown-speed', `${1}s`);
    	}
    	infoUpdate();
    	animationColorizeNum(targetExNumber, 'rgba(0, 0, 255, 0.5)');
    	await animationColorizeNum(targetAcNumber, 'rgba(255, 0, 255, 0.5)');

    	battleEndCheck();
		if(battleEnd != -1 && !finishCard && !action.tags.includes("피니셔아님")) {
			finishCard = action;
			action.tags.push("피니시");
		}

    	var _states = target.state.slice();
    	_states.push(...tDeck.slice());
		_states.sortCards('priority');
    	for(let st of _states) {
    		await stateEffect(st, "orgasm");
    		await stateEffect(st, "orgasmAny");
		}
    	var _opstates = _op.state.slice();
    	_opstates.push(...optDeck.slice());
		_opstates.sortCards('priority');
    	for(let st of _opstates) {
    		await stateEffect(st, "orgasmAny");
		}

		if(target === player) {
			if(battleEnd == -1) {
		        if(player.orgasm >= 1 && player.condition == "normal") {
		        	player.condition = "excited";
		        }
		        if(player.orgasm >= 2 || player.orgasm == player.orgasmL - 1) {
		        	player.condition = "corrupted";
		        }
		        await changePortrait(player.condition, 1, true);
		    }
	    } else {
	    	if(enemy.name == "고블린즈" && battleEnd == -1) {
	    		if(gamemode == 0) {
		    		await changePortrait((enemy.orgasm % 5 == 0)?"normal":(enemy.orgasm % 5) + 1, 0, true);
		    		await addLine(line["고블린즈-교체"]);
		    	} else if(gamemode == 1) {
		    		await changePortrait((enemy.orgasm % 8 == 0)?"normal":(enemy.orgasm % 8) + 1, 0, true);
		    		await addLine(line["고블린즈-교체"]);
		    	}
	    	}
	    	if(enemy.name == "타우로스" && battleEnd == -1) {
	    		if(gamemode == 0) {
		    		await addLine(line["타우로스-휴식"]);
		    	}
	    	}
	    }
    }

	let effect = action.effect;
	let effectExists = false;
	effect.forEach(function(e) {
		if( (((e.trigger === trigger) || (e.trigger === "choice" && trigger === "used")) && !(!inDeckTrigger.includes(trigger) &&  action.isDeck && !e.inDeck) && (e.type != 'count' || action.duration > 0)) && !(action.type == "패널티" && options.penaltyDisable) && !(action.type == "탈의" && options.unclothDisable) && !(options.enemyDisable && actor == 0 && action.isDeck) && !(options.enemyAttackDisable && actor == 0 && action.type == "공격" && action.isDeck) && ((e.type != "line" && e.type != "changeCond" && e.type != "changeFace") || e.essential) ) {
			if(checkCondition(e.cond, actor)) {
				effectExists = true;
			}
		}
	});
	if((effectExists || trigger == "used")) {
		cardRecord.push(cardRecordData);
		var currentAction, talker;
		var useTimes = 1;
		if(actor == 0) {
			talker = "챔피언";
		}
		if(actor == 1) {
			talker = "플레이어";
		}
		if(trigger == "count") {
			/*if(line[talker+"-"+"발동-"+action.id]) {
				await addLine(line[talker+"-발동-"+action.id]);
			} else {
				var _check = false;
				for(let tag of action.tags) {
					if(line[talker+"-발동-"+tag]) {
						await addLine(line[talker+"-발동-"+tag]);
						_check = true;
					}
				}
				if(!_check && line[talker+"-발동-"+action.type]) {
					await addLine(line[talker+"-발동-"+action.type]);
				}
			}*/
		} else if(phase != "turn" && trigger != "get") {
			if(!noImg) {
				currentAction = createCard(action, size);
				var actionsContainer = document.getElementById('useActions');
				actionsContainer.appendChild(currentAction);
				adjustCardFontSize(currentAction);
				actionsContainer.scrollLeft = actionsContainer.scrollWidth;
			    await animationFlyIn(currentAction, (action.owner == 1)?'down':'up');
			    await waitOrClick(calculateDisplayTime(action));
			}

		    if(action.played) {
		    	delete action.played;
				/*if(line[talker+"-"+"사용-"+action.id]) {
					await addLine(line[talker+"-사용-"+action.id]);
				} else {
					var _check = false;
					for(let tag of action.tags) {
						if(line[talker+"-사용-"+tag]) {
							await addLine(line[talker+"-사용-"+tag]);
							_check = true;
						}
					}
					if(!_check && line[talker+"-사용-"+action.type]) {
						await addLine(line[talker+"-사용-"+action.type]);
					}
				}*/

				useTimes = actorObj.useTimes;

				let useType;
				switch(action.type) {
				case "공격":
					useType = "useAttack";
					break;
				case "보조":
					useType = "useSupport";
					break;
				case "체위":
					useType = "usePosture";
					break;
				case "탈의":
					useType = "useUncloth";
					break;
				case "패널티":
					useType = "usePenalty";
					break;
				}
				if(useType){
					var tDeck = (actor == 1)?deck:opDeck;
					var optDeck = (actor == 0)?deck:opDeck;
					var _states = actorObj.state.slice();
					_states.push(...tDeck.slice());
					_states.sortCards('priority');
					for(let st of _states) {
						await stateEffect(st, "useCard");
						await stateEffect(st, useType);
						await stateEffect(st, "useCardAny");
						await stateEffect(st, useType+"Any");
						if(action.tags.includes("생성됨")) {
							await stateEffect(st, "useCreatedCard");
						}
						if(action.tags.includes("사격")) {
							await stateEffect(st, "useShootCard");
						}
					}
					var _opstates = opObj.state.slice();
					_opstates.push(...optDeck.slice());
					_opstates.sortCards('priority');
					var _postfix = (actor == 0)?"Enemy":"Player";
					for(let st of _opstates) {
						await stateEffect(st, "useCardOp");
						await stateEffect(st, "useCard"+_postfix);
						await stateEffect(st, useType+_postfix);
						await stateEffect(st, "useCardAny");
						await stateEffect(st, useType+"Any");
					}
				}
			} else {
				if(action.source && action.source.id == "WA-UL-SU-002") {
					await addLine(line["광전사혼-2"]);
				}
				/*if(line[talker+"-"+"효과-"+action.id]) {
					await addLine(line[talker+"-효과-"+action.id]);
				} else {
					var _check = false;
					for(let tag of action.tags) {
						if(line[talker+"-효과-"+tag]) {
							await addLine(line[talker+"-효과-"+tag]);
							_check = true;
						}
					}
					if(!_check && line[talker+"-효과-"+action.type]) {
						await addLine(line[talker+"-효과-"+action.type]);
					}
				}*/
			}
			//await wait(turnSpeed);
		}

		if(actorObj.state.some(st => st.id == "NT-PS-002") && action.class == "중립" && action.type == "공격") {
			useTimes += actorObj.state.find(st => st.id == "NT-PS-002").effect.find(e => e.type == 'specialA20').value ?? 1;
		}

		for(let i=0; i<useTimes; i++) {
			derived = [];
			for(let e of effect) {
		    	await effectApply(e, trigger, actor);
    			infoUpdate();
		    }
		}
		if(useTimes > 1) {
			actorObj.useTimes = 1;
		}
		if(trigger == "used" && effectActive) {
			actorObj.effectActive.push(action);
		}

		if(trigger == "used" && action.cast > 0) {
			
		} 

		battleEndCheck();
		if(battleEnd != -1 && !finishCard && !action.tags.includes("피니셔아님")) {
			finishCard = action;
			action.tags.push("피니시");
		}

	    if(phase != "turn" && trigger != "get" && trigger != "count" && !noImg) {
	    	if(!effectExists) {
	    		await animationShake(currentAction);
	    	}
	    	if(trigger == "used" && disappear) {
	    		await animationDisappear(currentAction);
	    	} else {
	    		await animationFlyAway(currentAction, (action.owner == 1)?'down':'up', false);
	    	}
			
			currentAction.remove();
		}
	}
    infoUpdate();
}

async function boundCheck() {
	let _deck = deck.slice();
	for(let cd of _deck) {
    	if(cd.bound && !deck.includes(cd.bound)) {
    		var cardText = createCardText(cd);
			cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
    		addLogText("결속한 카드가 소실되어 "+attachPostposition("<span title=\'"+cardText+"\'><b>["+cd.name[language]+"]</b>", "이 ", "가 ")+"버려짐", null, 1);

    		var tempCardDiv = createCard(cd, 28);
			var actionsContainer = document.getElementById('useActions');
			actionsContainer.appendChild(tempCardDiv);
			adjustCardFontSize(tempCardDiv);
			actionsContainer.scrollLeft = actionsContainer.scrollWidth;

		    await animationFlyIn(tempCardDiv, 'down');
		    await actionEffect(cd, "discarded", 0, 28, true);
		    player.record[round-1].discard.push(cd);
			deck.splice(deck.indexOf(cd), 1);

        	var _states = player.state.slice();
			_states.sortCards('priority');
        	for(let st of _states) {
        		await stateEffect(st, "discardCard");
        	}
        	await animationDisappear(tempCardDiv);
	        tempCardDiv.remove();

	        infoUpdate();
		}
	}

	let _opDeck = opDeck.slice();
	for(let cd of _opDeck) {
    	if(cd.bound && !opDeck.includes(cd.bound)) {
    		var cardText = createCardText(cd);
			cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
    		addLogText("결속한 카드가 소실되어 "+attachPostposition("<span title=\'"+cardText+"\'><b>["+cd.name[language]+"]</b>", "이 ", "가 ")+"버려짐", null, 1);

    		var tempCardDiv = createCard(cd, 28);
			var actionsContainer = document.getElementById('useActions');
			actionsContainer.appendChild(tempCardDiv);
			adjustCardFontSize(tempCardDiv);
			actionsContainer.scrollLeft = actionsContainer.scrollWidth;

		    await animationFlyIn(tempCardDiv, 'down');
		    await actionEffect(cd, "discarded", 0, 28, true);
		    enemy.record[round-1].discard.push(cd);
			opDeck.splice(opDeck.indexOf(cd), 1);

        	var _states = enemy.state.slice();
			_states.sortCards('priority');
        	for(let st of _states) {
        		await stateEffect(st, "discardCard");
        	}
        	await animationDisappear(tempCardDiv);
	        tempCardDiv.remove();

	        infoUpdate();
		}
	}
}

function animationAppear(div, _speed=500) {
	div.style.opacity = 0;
    return new Promise((resolve) => {
        let opacity = 0;
        const intervalId = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(intervalId);
                resolve();
            } else {
                opacity += 0.1;
                div.style.opacity = opacity;
            }
        }, _speed/10);
    });
}

function animationDisappear(div, _speed=500) {
	div.style.opacity = 1;
    return new Promise((resolve) => {
        let opacity = 1;
        const intervalId = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(intervalId);
                resolve();
            } else {
                opacity -= 0.1;
                div.style.opacity = opacity;
            }
        }, _speed/10);
    });
}

async function animationColorize(element, color, duration = [500, 750, 1000, 1000, 1000][turnSpeed]) {
    const filter = element.querySelector("div.filter");
    filter.style.background = color;
    filter.style.opacity = 1;
    await wait(duration/2);
    filter.style.opacity = 0;
    await wait(duration/2);
}

async function animationNegative(element, permanent = false, duration = 500) {
	element.style.transition = "all 0.5s";
    element.style.filter = "invert(1)";
    await wait(duration);
    if(!permanent) {
	    element.style.filter = "";
	    await wait(duration);
    }
}

async function animationColorizeNum(element, color, duration = [500, 750, 1000, 1000, 1000][turnSpeed]) {
	const originalColor = element.style.color;
    element.style.color = color;
    await wait(duration/2);
    element.style.color = originalColor;
    await wait(duration/2);
}

function animationShake(element, direction='horizontal', duration=500) {
	const directions = {
        'horizontal': `shake`,
        'vertical': `shake2`,
        'rotate': `shake3`
    };

    return new Promise((resolve) => {
    	const singleShakeDuration = 500;
        const iterationCount = duration / singleShakeDuration;

        element.style.animationDuration = `${singleShakeDuration}ms`;
        element.style.animationIterationCount = iterationCount.toString();
        element.classList.add(directions[direction]);

        function handleAnimationEnd() {
            element.classList.remove("shake");
            element.style.animationDuration = '';
            element.style.animationIterationCount = '';
            element.removeEventListener("animationend", handleAnimationEnd);
            resolve();
        }

        element?.addEventListener("animationend", handleAnimationEnd);
    });
}

function animationEmphasis(element, scale = 2) {
    if (element.animationInProgress) {
        return;
    }

    element.animationInProgress = true;

    return new Promise((resolve) => {
        const originalTransition = element.style.transition;
        element.style.transition = "none";
        element.style.transform = `scale(${scale})`;

        // CSS 변수로부터 애니메이션 속도 가져오기
        const computedStyle = getComputedStyle(element);
        const scaleDownSpeed = computedStyle.getPropertyValue("--scaledown-speed") || "0s";

        // --scaledown-speed 값을 초 단위 숫자로 변환
        const animationDurationMs = parseFloat(scaleDownSpeed) * 1000;

        // 애니메이션 종료 처리 함수
        const handleAnimationEnd = (event) => {
            if (event.animationName !== "scaleDown") return; // 특정 애니메이션만 처리
            element.classList.remove("scale-down");
            element.style.transform = "";
            element.style.transition = originalTransition;
            element.removeEventListener("animationend", handleAnimationEnd);
            element.animationInProgress = false;
            resolve();
        };

        // 강제 종료 타이머 (CSS 속도 기반)
        const forceFinishTimeout = setTimeout(() => {
            element.classList.remove("scale-down");
            element.style.transform = "";
            element.style.transition = originalTransition;
            element.animationInProgress = false;
            resolve();
        }, animationDurationMs);

        // 애니메이션 적용
        requestAnimationFrame(() => {
            element.style.transition = "";
            element.classList.add("scale-down");
            element.addEventListener("animationend", handleAnimationEnd);
        });
    });
}

async function animationXscale(element, startScale = 1, endScale = 1, speed = turnSpeed) {
	if (!combatOptions.animation_show) {
		if(startScale == 0) {
	        //await animationAppear(element);
	        return;
	    }
		if(endScale == 0) {
	        //await animationDisappear(element);
	        return;
	    }
    }

    if (element.animationInProgress) {
        element.removeEventListener("transitionend", element.handleTransitionEnd);
        element.classList.remove('xscale-down');
        element.style.transform = '';
        element.animationInProgress = false;
    }

    return new Promise((resolve) => {
        const originalTransition = element.style.transition;
        element.style.transition = "none";
        element.style.transform = `scaleX(${startScale})`;
        element.animationInProgress = true;

        element.handleTransitionEnd = function() {
            element.classList.remove('xscale-down');
            element.style.transform = '';
            element.style.transition = originalTransition;
            element.removeEventListener("transitionend", element.handleTransitionEnd);
            element.animationInProgress = false;
            resolve();
        };

        // 애니메이션 시작
        requestAnimationFrame(() => {
            requestAnimationFrame(() => { // 두 번째 requestAnimationFrame 호출
                element.style.transition = `transform ${[200, 300, 400, 500, 750][speed]}ms ease`;
                element.style.transform = `scaleX(${endScale})`;
                element?.addEventListener("transitionend", element.handleTransitionEnd);
            });
        });
    });
}

function animationFloat(element, direction, speed = turnSpeed, distance = 20) {
    if (element.animationInProgress) {
        element.removeEventListener("transitionend", element.handleTransitionEnd);
        element.style.transform = '';
    }

    const directions = {
        'up': `translateY(-${distance}px)`,
        'down': `translateY(${distance}px)`,
        'left': `translateX(-${distance}px)`,
        'right': `translateX(${distance}px)`
    };

    return new Promise((resolve) => {
        const originalTransition = element.style.transition;
        element.style.transition = "none";
        element.style.transform = `translate(0, 0)`;
        element.animationInProgress = true;

        element.handleTransitionEnd = function() {
            element.style.transform = '';
            element.style.transition = originalTransition;
            element.removeEventListener("transitionend", element.handleTransitionEnd);
            element.animationInProgress = false;
            resolve();
        };

        setTimeout(() => {
            element.style.transition = `transform ${[200, 300, 400, 500, 700][speed]}ms ease-out`;
            element.style.transform = directions[direction] || directions['up'];
            element?.addEventListener("transitionend", element.handleTransitionEnd);
        }, 0);
    });
}

async function animationFloatIn(element, direction, distance = 20, speed = turnSpeed) {
	if (!combatOptions.animation_show) {
        //await animationAppear(element);
        return;
    }
    if (element.animationInProgress) {
        element.removeEventListener("transitionend", element.handleTransitionEnd);
        element.style.transform = '';
        element.style.opacity = '';
    }

    const directions = {
        'up': `translateY(-${distance}px)`,
        'down': `translateY(${distance}px)`,
        'left': `translateX(-${distance}px)`,
        'right': `translateX(${distance}px)`
    };

    return new Promise((resolve) => {
        element.style.transition = 'none';
        element.style.transform = directions[direction] || directions['up'];
        element.style.opacity = '0';
        element.animationInProgress = true;

        // 강제 리플로우를 발생시켜 초기 스타일을 적용
        element.getBoundingClientRect();

        element.handleTransitionEnd = function() {
            element.style.transform = '';
            element.style.opacity = '';
            element.style.transition = '';
            element.removeEventListener("transitionend", element.handleTransitionEnd);
            element.animationInProgress = false;
            resolve();
        };

        // 애니메이션 시작
        requestAnimationFrame(() => {
            element.style.transition = `transform ${[200, 300, 400, 500, 700][speed]}ms ease-out, opacity ${[200, 300, 400, 500, 700][speed]}ms ease-out`;
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
            element?.addEventListener("transitionend", element.handleTransitionEnd);
        });
    });
}

async function animationFloatOut(element, direction, distance = 20, speed = turnSpeed) {
	if (!combatOptions.animation_show) {
        //await animationDisappear(element);
        return;
    }
    if (element.animationInProgress) {
        element.removeEventListener("transitionend", element.handleTransitionEnd);
        element.style.transform = '';
        element.style.opacity = '';
    }

    const directions = {
        'up': `translateY(-${distance}px)`,
        'down': `translateY(${distance}px)`,
        'left': `translateX(-${distance}px)`,
        'right': `translateX(${distance}px)`
    };

    return new Promise((resolve) => {
        element.style.transition = 'none';
        element.style.transform = '';
        element.style.opacity = '1';
        element.animationInProgress = true;

        // 강제 리플로우를 발생시켜 초기 스타일을 적용
        element.getBoundingClientRect();

        element.handleTransitionEnd = function() {
            element.style.transition = '';
            element.removeEventListener("transitionend", element.handleTransitionEnd);
            element.animationInProgress = false;
            resolve();
        };

        // 애니메이션 시작
        requestAnimationFrame(() => {
            element.style.transition = `transform ${[200, 300, 500, 750, 1000][speed]}ms ease-out, opacity ${[200, 300, 500, 750, 1000][speed]}ms ease-out`;
            element.style.transform = directions[direction] || directions['up'];
            element.style.opacity = '0';
            element?.addEventListener("transitionend", element.handleTransitionEnd);
        });
    });
}


async function animationFlyAway(element, direction, rebound = true) {
	if (!combatOptions.animation_show) {
        //await animationDisappear(element);
        return;
    }
    const oppositeDirections = {
        'up': 'down',
        'down': 'up',
        'left': 'right',
        'right': 'left'
    };

    function applyMainAnimation() {
        return new Promise((resolve) => {
            const directions = {
                'up': 'translateY(-100vh)',
                'down': 'translateY(100vh)',
                'left': 'translateX(-100vw)',
                'right': 'translateX(100vw)'
            };
            const originalTransition = element.style.transition;
            element.style.transition = `transform ${500}ms ease`;
            element.animationInProgress = true;

            element.handleTransitionEnd = function() {
                element.style.transform = '';
                element.style.transition = originalTransition;
                element.removeEventListener("transitionend", element.handleTransitionEnd);
                element.animationInProgress = false;
                resolve();
            };

            setTimeout(() => {
                element.style.transform = directions[direction] || directions['up'];
                element?.addEventListener("transitionend", element.handleTransitionEnd);
            }, 0);
        });
    }

    if (rebound) {
        return animationFloat(element, oppositeDirections[direction]).then(applyMainAnimation);
    } else {
        return applyMainAnimation();
    }
}

async function animationFlyIn(element, direction) {
	if (!combatOptions.animation_show) {
        //await animationAppear(element);
        return;
    }

    if (element.animationInProgress) {
        element.removeEventListener("transitionend", element.handleTransitionEnd);
        element.style.transform = '';
        element.style.opacity = '';
        element.animationInProgress = false;
    }

    const directions = {
        'up': 'translateY(-100vh)',
        'down': 'translateY(100vh)',
        'left': 'translateX(-100vw)',
        'right': 'translateX(100vw)'
    };

    return new Promise((resolve) => {
        element.style.transition = 'none';
        element.style.transform = directions[direction] || directions['up'];
        element.animationInProgress = true;

        // 강제 리플로우를 발생시켜 초기 스타일을 적용
        element.getBoundingClientRect();

        element.handleTransitionEnd = function() {
            element.style.transform = '';
            element.style.transition = '';
            element.removeEventListener("transitionend", element.handleTransitionEnd);
            element.animationInProgress = false;
            resolve();
        };

        // 애니메이션 시작
        requestAnimationFrame(() => {
            requestAnimationFrame(() => { // 두 번째 requestAnimationFrame 호출
                element.style.transition = `transform ${500}ms ease-out`;
                element.style.transform = 'translate(0, 0)';
                element?.addEventListener("transitionend", element.handleTransitionEnd);
            });
        });
    });
}

function animationFlyInStack(elements, direction = 'up') {
    const directions = {
        'up': 'translateY(-100vh)',
        'down': 'translateY(100vh)',
        'left': 'translateX(-100vw)',
        'right': 'translateX(100vw)'
    };

    const firstElement = elements[0];
    const otherElements = elements.slice(1);

    // 첫 번째 요소의 위치를 기준으로 나머지 요소를 절대 위치로 설정

    otherElements.forEach(element => {
        element.style.position = 'absolute';
    });
    const rect = firstElement.getBoundingClientRect();
    otherElements.forEach(element => {
        element.style.top = `${rect.top}px`;
        element.style.left = `${rect.left}px`;
        element.style.margin = 0;
        element.style.zIndex = 9999; // Ensure the copies stack correctly
    });

    return new Promise((resolve) => {
        // 초기 위치 설정
        elements.forEach(element => {
            element.style.transition = 'none';
            element.style.transform = directions[direction];
            element.style.opacity = '0';
        });

        // 강제 리플로우
        elements.forEach(element => element.getBoundingClientRect());

        // 애니메이션 시작
        requestAnimationFrame(() => {
            elements.forEach((element, index) => {
                requestAnimationFrame(() => {
                    element.style.transition = `transform ${500}ms ease-out ${index * 100}ms, opacity ${500}ms ease-out ${index * 100}ms`;
                    element.style.transform = 'translate(0, 0)';
                    element.style.opacity = '1';
                });
            });
        });

        // 모든 애니메이션이 끝난 후 처리
        setTimeout(() => {
            elements.splice(0, elements.length - 1).forEach(element => element.remove());
            
            const lastElement = elements[elements.length - 1];
            lastElement.style.position = '';
            lastElement.style.top = '';
            lastElement.style.left = '';
            lastElement.style.margin = '';
            lastElement.style.zIndex = '';

            resolve(lastElement);
        }, elements.length * 100 + 500);
    });
}

function animationBounce(element, direction) {
    if (element.animationInProgress) {
        element.removeEventListener("transitionend", element.handleTransitionEnd);
        element.style.transform = '';
    }

    const oppositeDirections = {
        'up': 'translateY(10px)',
        'down': 'translateY(-10px)',
        'left': 'translateX(10px)',
        'right': 'translateX(-10px)'
    };

    const mainDirections = {
        'up': 'translateY(-40px)',
        'down': 'translateY(40px)',
        'left': 'translateX(-40px)',
        'right': 'translateX(40px)'
    };

    const bounceBackDirections = {
        'up': 'translateY(0)',
        'down': 'translateY(0)',
        'left': 'translateX(0)',
        'right': 'translateX(0)'
    };

    return new Promise((resolve) => {
        const originalTransition = element.style.transition;
        element.style.transition = `transform ${[100, 125, 150, 175, 200][turnSpeed]}ms ease-in-out`;
        element.style.transform = oppositeDirections[direction] || oppositeDirections['up'];
        element.animationInProgress = true;

        function handleTransitionEndBounce() {
            element.style.transition = `transform ${[200, 250, 300, 400, 500][turnSpeed]}ms ease-out`;
            element.style.transform = bounceBackDirections[direction] || bounceBackDirections['up'];
            element?.addEventListener("transitionend", handleTransitionEndFinal);
        }

        function handleTransitionEndFinal() {
            element.style.transform = '';
            element.style.transition = originalTransition;
            element.removeEventListener("transitionend", handleTransitionEndFinal);
            element.animationInProgress = false;
            resolve();
        }

        function handleTransitionEndMain() {
            element.style.transition = `transform ${[20, 30, 40, 50, 50][turnSpeed]}ms ease-out`;
            element.style.transform = mainDirections[direction] || mainDirections['up'];
            element?.addEventListener("transitionend", handleTransitionEndBounce);
        }

        element?.addEventListener("transitionend", handleTransitionEndMain);

        setTimeout(() => {
            element.style.transform = oppositeDirections[direction] || oppositeDirections['up'];
        }, 0);
    });
}

function animationDiffusion(element, size=1.5) {
	if (!combatOptions.animation_show) {
		return true;
    }
    const elementCopy = element.cloneNode(true);
    const rect = element.getBoundingClientRect();

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    elementCopy.style.position = 'absolute';
    elementCopy.style.top = `${rect.top + scrollTop}px`;
    elementCopy.style.left = `${rect.left + scrollLeft}px`;
    elementCopy.style.width = `${rect.width}px`;
    elementCopy.style.height = `${rect.height}px`;
    elementCopy.style.margin = 0;
    elementCopy.style.transform = 'scale(1)';
    elementCopy.style.opacity = '1';
    elementCopy.style.transition = 'none';
    elementCopy.style.zIndex = 9999; // Ensure the copy is on top
    document.body.appendChild(elementCopy);

    elementCopy.getBoundingClientRect();

    requestAnimationFrame(() => {
        elementCopy.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        elementCopy.style.transform = `scale(${size})`;
        elementCopy.style.opacity = '0';
    });

    elementCopy?.addEventListener('transitionend', () => {
        elementCopy.remove();
    });
}

function animationCopies(element, numCopies = 5, nowait = true) {
    return new Promise((resolve) => {
	    const rect = element.getBoundingClientRect();
	    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	    const copies = [];

	    // 복사본 생성 및 초기 스타일 설정
	    for (let i = 0; i < numCopies; i++) {
	        const elementCopy = element.cloneNode(true);
	        elementCopy.style.position = 'absolute';
	        elementCopy.style.top = `${rect.top + scrollTop}px`;
	        elementCopy.style.left = `${rect.left + scrollLeft}px`;
	        elementCopy.style.width = `${rect.width}px`;
	        elementCopy.style.height = `${rect.height}px`;
	        elementCopy.style.margin = 0;
	        //elementCopy.style.transform = `translateY(${i * 5}px)`;
	        elementCopy.style.opacity = '1';
	        elementCopy.style.transition = 'none';
	        elementCopy.style.zIndex = 9999 - i; // Ensure the copies stack correctly
	        document.body.appendChild(elementCopy);
	        copies.push(elementCopy);
	    }

	    // 강제 리플로우를 발생시켜 초기 스타일을 적용
	    copies.forEach(copy => copy.getBoundingClientRect());

	    // 애니메이션 시작: 오른쪽으로 펼쳐짐
	    requestAnimationFrame(() => {
	        copies.forEach((copy, index) => {
	            copy.style.transition = `transform 500ms ease-out ${index * 100}ms, opacity 500ms ease-out ${index * 100}ms`;
	            copy.style.transform = `translate(${index * 20}px, ${index * 5}px) rotate(${index * 5}deg)`;
	        });
	    });

	    // 잠시 후 다시 합쳐짐
	    setTimeout(() => {
	        requestAnimationFrame(() => {
	            copies.forEach((copy, index) => {
	                copy.style.transition = `transform 500ms ease-in ${index * 100}ms, opacity 500ms ease-in ${index * 100}ms`;
	                copy.style.transform = `translate(0, 0) rotate(0)`;
	            });
	        });
	    }, numCopies * 100 + (!nowait?combatOptions.cardWait_time:300));

	    setTimeout(() => {
            let remainingCopies = numCopies;

            copies.forEach(copy => {
                copy.style.opacity = '0';
                copy?.addEventListener('transitionend', () => {
                    copy.remove();
                    remainingCopies--;

                    if (remainingCopies === 0) {
                        resolve();
                    }
                }, { once: true }); // Ensure the event listener is only called once
            });
        }, numCopies * 100 + (!nowait?combatOptions.cardWait_time:300) + 1000);
	});
}

async function stateEffect(state, trigger) {
	var owner = state.owner;
	let actorObj = owner == 0?enemy:player;
	if(!state) {
		console.log(state);
		console.log(owner);
		console.log(trigger);
	}

	if((state.type == "패널티" && options.penaltyDisable) || (state.type == "탈의" && options.unclothDisable) || (state.tags.includes("독") && options.poisonDisable) || (state.tags.includes("마술") && options.spellDisable)) {
		return 0;
	}

	let effect = state.effect;
    for(let e of effect) {
        if(e.trigger == trigger && !(trigger != "selected" && state.isDeck && !e.inDeck) && checkCondition(e.cond, owner)) {
        	var eValue, repeat, target, tpos;
        	if(e.value !== undefined) {
        		if(e.value == "stack") {
        			eValue = state.stack;
        		} else if(typeof e.value === 'string') {
	        		eValue = returnText(e.value, owner);
	        	} else {
	        		eValue = e.value;
	        	}
        		if(e.additional) {
        			eValue += e.additional;
        		}

        		if(e.additional) {
        			eValue += e.additional;
        		}
        		if(e.multiple) {
        			eValue *= e.multiple;
        		}
        		if(e.division) {
        			eValue = Math.floor(eValue/e.division);
        		}

        		if(e.maxValue) {
        			eValue = Math.min(eValue, e.maxValue);
        		}
        	}
        	if(e.repeat) {
        		repeat = returnText(e.repeat, owner)
        	} else {
        		repeat = 1;
        	}

        	if(e.target) {
        		switch(e.target) {
        		case "player":
        			target = player;
        			tpos = 1;
        			break;
        		case "enemy":
        			target = enemy;
        			tpos = 0;
        			break;
        		case "self":
        			target = (owner==0)?enemy:player;
        			tpos = (owner==0)?0:1;
        			break;
        		case "op":
        			target = (owner==1)?enemy:player;
        			tpos = (owner==1)?0:1;
        			break;
        		}
        	}

        	if(trigger == "always" || trigger == "alwaysCorrupt" || trigger == "selected") {
        		let _statTooltip, _statTooltipData;
        		switch(e.type) {
        		case "estrus":
        			switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
        			case "add":
        				if(eValue > 0) {
        					eValue += player.modifier.estrus.add;
        				}
        				if(eValue < 0) {
        					eValue += player.modifier.estrus.subtract;
        				}
        				estrus += eValue*repeat;
        				_statTooltipData = statTooltips.estrus.add;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value += eValue*repeat;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue*repeat });
	        			}
        				break;
        			case "multiply":
        				for(let i=0; i<repeat; i++) {
        					estrus_mul *= eValue;
        				}
        				_statTooltipData = statTooltips.estrus.multiply;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value *= eValue;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue });
	        			}
        				break;
        			case "set":
        				estrus_set = eValue*repeat;
        				statTooltips.estrus.set = { id:state.id, value:eValue*repeat };
        				break;
        			}
        			break;
        		case "lewd":
        			switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
        			case "add":
        				if(eValue > 0) {
        					eValue += player.modifier.lewd.add;
        				}
        				if(eValue < 0) {
        					eValue += player.modifier.lewd.subtract;
        				}
        				lewd += eValue*repeat;
        				_statTooltipData = statTooltips.lewd.add;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value += eValue*repeat;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue*repeat });
	        			}
        				break;
        			case "multiply":
        				for(let i=0; i<repeat; i++) {
        					lewd_mul *= eValue;
        				}
        				_statTooltipData = statTooltips.lewd.multiply;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value *= eValue;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue });
	        			}
        				break;
        			case "set":
        				lewd_set = eValue*repeat;
        				statTooltips.lewd.set = { id:state.id, value:eValue*repeat };
        				break;
        			}
        			break;
        		case "estrusAndLewd":
        			switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
        			case "add":
        				let eValueL = eValue;
        				let eValueE = eValue;
        				if(eValue > 0) {
        					eValueE += player.modifier.estrus.add;
        				}
        				if(eValue < 0) {
        					eValueE += player.modifier.estrus.subtract;
        				}
        				if(eValue > 0) {
        					eValueL += player.modifier.lewd.add;
        				}
        				if(eValue < 0) {
        					eValueL += player.modifier.lewd.subtract;
        				}
        				estrus += eValueE*repeat;
        				lewd += eValueL*repeat;
        				_statTooltipData = statTooltips.lewd.add;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value += eValue*repeat;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue*repeat });
	        			}
        				_statTooltipData = statTooltips.estrus.add;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value += eValue*repeat;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue*repeat });
	        			}
        				break;
        			case "multiply":
        				for(let i=0; i<repeat; i++) {
	        				estrus_mul *= eValue;
	        				lewd_mul *= eValue;
	        			}
        				_statTooltipData = statTooltips.lewd.multiply;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value *= eValue;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue });
	        			}
        				_statTooltipData = statTooltips.estrus.multiply;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value *= eValue;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue });
	        			}
        				break;
        			case "set":
        				estrus_set = eValue*repeat;
        				lewd_set = eValue*repeat;
        				statTooltips.lewd.set = { id:state.id, value:eValue*repeat };
        				statTooltips.estrus.set = { id:state.id, value:eValue*repeat };
        				break;
        			}
        			break;
        		case "excite":
        			switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
        			case "add":
        				target.excite += eValue*repeat;
        				break;
        			case "multiply":
        				for(let i=0; i<repeat; i++) {
	        				target.excite_mul *= eValue;
	        			}
        				break;
        			case "set":
        				target.excite_set = eValue*repeat;
        				break;
        			}
        			break;
        		case "exciteL":
        			switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
        			case "add":
        				target.exciteL += eValue*repeat;
        				_statTooltipData = statTooltips[tpos == 0?"enemy":"player"].exciteL.add;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value += eValue*repeat;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue*repeat });
	        			}
        				break;
        			case "multiply":
        				for(let i=0; i<repeat; i++) {
	        				target.exciteL_mul *= eValue;
	        			}
        				_statTooltipData = statTooltips[tpos == 0?"enemy":"player"].exciteL.multiply;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value *= eValue;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue });
	        			}
        				break;
        			case "set":
        				target.exciteL_set = eValue*repeat;
        				statTooltips[tpos == 0?"enemy":"player"].exciteL.set = { id:state.id, value:eValue*repeat };
        				break;
        			}
        			break;
        		case "orgasm":
        			target.orgasm += repeat;
        			break;
        		case "orgasmL":
        			switch(e.op) {
	            	case "subtract":
	            		eValue *= -1;
        			case "add":
        				target.orgasmL += eValue*repeat;
        				_statTooltipData = statTooltips[tpos == 0?"enemy":"player"].orgasmL.add;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value += eValue*repeat;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue*repeat });
	        			}
        				break;
        			case "multiply":
        				for(let i=0; i<repeat; i++) {
	        				target.orgasmL_mul *= eValue;
	        			}
        				_statTooltipData = statTooltips[tpos == 0?"enemy":"player"].orgasmL.multiply;
        				_statTooltip = _statTooltipData.find(t => t.id == state.id)
        				if(_statTooltip) {
        					_statTooltip.value *= eValue;
        				} else {
	        				_statTooltipData.push({ id:state.id, value:eValue });
	        			}
        				break;
        			case "set":
        				target.orgasmL_set = eValue*repeat;
        				statTooltips[tpos == 0?"enemy":"player"].orgasmL.set = { id:state.id, value:eValue*repeat };
        				break;
        			}
        			break;
        		case "corrupt":
	            	let corruptCost = e.info.value;
	            	if(corrupt >= corruptCost) {
	            		stateEffect({type:state.type, tags:[], effect:e.info.effect}, "alwaysCorrupt")
	            	}
        			break;
        		case "maintained":
        			options.maintain = true;
        			break;
        		case "lustBan":
        			options.lustBan = true;
        			break;
        		case "wetnessBan":
        			options.wetnessBan = true;
        			break;
        		case "avoidBan":
        			options.avoidBan = true;
        			break;
        		case "sBlockBan":
        			options.sBlockBan = true;
        			break;
        		case "enemyDisable":
        			options.enemyDisable = true;
        			break;
        		case "enemyAttackDisable":
        			options.enemyAttackDisable = true;
        			break;
        		case "unclothDisable":
        			options.unclothDisable = true;
        			break;
        		case "penaltyDisable":
        			options.penaltyDisable = true;
        			break;
        		case "poisonDisable":
        			options.poisonDisable = true;
        			break;
        		case "spellDisable":
        			options.spellDisable = true;
        			break;
        		case "maxUse":
        			if(tpos == 1) {
        				maxUse += eValue;
        			} else if(tpos == 0) {
        				maxUseE += eValue;
        			}
        			break;
        		case "immune":
        			target.immune = true;
        			statTooltips[tpos == 0?"enemy":"player"].exciteL.extra.push({ id:state.id, value:"immune" });
        			break;
        		case "healBan":
        			target.healBan = true;
        			break;
        		case "actBan":
        			target.ban.all = true;
        			break;
        		case "attackBan":
        			target.ban.attack = true;
        			break;
        		case "supportBan":
        			target.ban.support = true;
        			break;
        		case "postureBan":
        			target.ban.posture = true;
        			break;
        		case "penaltyBan":
        			target.ban.penalty = true;
        			break;
        		case "unclothBan":
        			target.ban.uncloth = true;
        			break;
        		case "attackMustUse":
        			target.mustuse.attack = true;
        			break;
        		case "supportMustUse":
        			target.mustuse.support = true;
        			break;
        		case "postureMustUse":
        			target.mustuse.posture = true;
        			break;
        		case "penaltyMustUse":
        			target.mustuse.penalty = true;
        			break;
        		case "unclothMustUse":
        			target.mustuse.uncloth = true;
        			break;
        		case "combinationMustUse":
        			target.mustuse.combination = true;
        			break;
        		case "boundMustUse":
        			target.mustuse.bound = true;
        			break;
        		case "modifier":
        			switch(e.stat) {
        			case "lewd":
        				player.modifier.lewd[e.op] += eValue;
        				break;
        			case "estrus":
        				player.modifier.estrus[e.op] += eValue;
        				break;
        			case "excite":
        				target.modifier.excite[e.op] += eValue;
        				break;
        			case "exciteL":
        				target.modifier.exciteL[e.op] += eValue;
        				break;
        			}
        			break;
        		case "orgasmBan":
        			target.orgasmBan = true;
        			statTooltips[tpos == 0?"enemy":"player"].orgasmL.extra.push({ id:state.id, value:"orgasmBan" });
        			break;
        		case "suppression":
        			target.suppression = true;
        			statTooltips[tpos == 0?"enemy":"player"].orgasmL.extra.push({ id:state.id, value:"suppression" });
        			break;
        		case "insensitive":
        			target.insensitive = true;
        			statTooltips[tpos == 0?"enemy":"player"].orgasmL.extra.push({ id:state.id, value:"insensitive" });
        			break;
        		case "absorption":
        			target.absorption = true;
        			break;
        		case "specialA12":
        			options.corruptIncrease = -1;
        			break;
        		case "specialV08":
        			spore += eValue;
        			break;
        		}
        	}
        }
    }
	const effectExists = (effect.some(e => e.trigger === trigger && trigger != 'always' && trigger != 'alwaysCorrupt' && trigger != 'selected' && checkCondition(e.cond, owner)));
	if(effectExists) {
		await actionEffect(state, trigger);
		if(state.expiration == 'active') {
			state.duration -= 1;
			if(state.duration <= 0) {
				await actionEffect(state, "expired");
				if(owner == 0) {
					enemy.state.splice(enemy.state.indexOf(state), 1);
				}
				if(owner == 1) {
					player.state.splice(player.state.indexOf(state), 1);
				}
			}
		}
        await wait([100, 150, 200, 300, 400][turnSpeed]);
	}
}

function addLogText(text, card=null, owner=0, effect=false, effectCardName="", effectText="") {
	const logContainer = document.getElementById('log-container');
	const endlogContainer = document.getElementById('end-log-container');
	var newText = "";
	if(card) {
		let cardText = createCardText(card);
		cardText = cardText.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
		let ownerColor;
		if(owner == 0) {
			ownerColor = 'red';
		} else {
			ownerColor = 'lime';
		}
		newText += "<span title=\""+cardText+"\" style=\"color: "+ownerColor+";\">❖ <b>["+card.name[language]+"]:</b></span> ";
	}
	newText += text;
	if(effect && effectText) {
		effectText = effectText.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '').replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
		newText += ` <span class="effectTextLog" style="color:#b3b3b3; font-style:italic; font-size:1.5vmin; display:${combatOptions.log_effect?"inline":"none"};">(${effectCardName?`<b>[${effectCardName}]:</b> `:""}${effectText})</span>`;
	}
	newText += "<br>";
	logContainer.innerHTML += `<span class="textLog">${newText}</span>`;

	newText = newText.replace(/lime/g, "green");
	newText = newText.replace(/b3b3b3/g, "505050");
	endlogContainer.innerHTML += newText;

	logContainer.scrollTop = logContainer.scrollHeight;
}
function addLogLine(text, talker) {
	const logContainer = document.getElementById('log-container');
	const endlogContainer = document.getElementById('end-log-container');
	var newText = "";
	if(text) {
		let lineText = text.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]*>/g, '');
		newText += `<span class="lineLog" style="color:#b3b3b3; font-style:italic; padding-left:16px; font-size:1.5vmin; display:${combatOptions.log_line?"block":"none"};"><b>${talker}:</b> ${lineText}<br></span>`;
	}
	logContainer.innerHTML += newText;

	newText = newText.replace(/b3b3b3/g, "505050");
	endlogContainer.innerHTML += newText;

	logContainer.scrollTop = logContainer.scrollHeight;
}
function addLogNewline(num = 1) {
	const logContainer = document.getElementById('log-container');
	const endlogContainer = document.getElementById('end-log-container');
	var newText = "<br>".repeat(num);
	logContainer.innerHTML += newText;
	endlogContainer.innerHTML += newText;

	logContainer.scrollTop = logContainer.scrollHeight;
}

function makeEnding() {
	const groupedByCardId = cardRecord.reduce((acc, cd) => {
	    const cardId = cd.card.id;

	    if (!acc[cardId]) {
	        acc[cardId] = {
	            cards: [],
	            getMax: function (path) {
	                return this.cards.reduce((max, item) => {
	                    const value = getNestedValue(item, path);
	                    return Math.max(max, value || 0);
	                }, -Infinity);
	            },
	            getMin: function (path) {
	                return this.cards.reduce((min, item) => {
	                    const value = getNestedValue(item, path);
	                    return Math.min(min, value || 0);
	                }, Infinity);
	            },
	            getSum: function (path) {
	                return this.cards.reduce((sum, item) => {
	                    const value = getNestedValue(item, path);
	                    return sum + (value || 0);
	                }, 0);
	            },
	            getAverage: function (path) {
	                const sum = this.getSum(path);
	                return this.cards.length ? sum / this.cards.length : 0;
	            }
	        };
	    }

	    acc[cardId].cards.push(cd);

	    return acc;
	}, {});

	console.log(groupedByCardId);

	function getNestedValue(obj, path) {
	    return path.split('.').reduce((current, key) => (current ? current[key] : undefined), obj);
	}

	function calcNested(obj, arrayPath, valuePath, operation) {
	    const array = getNestedValue(obj, arrayPath);
	    if (!Array.isArray(array)) {
	        throw new Error(`${arrayPath} is not a valid array`);
	    }

	    const values = array.map(item => getNestedValue(item, valuePath) || 0);
	    switch (operation) {
	        case 'sum':
	            return values.reduce((sum, val) => sum + val, 0);
	        case 'max':
	            return Math.max(...values);
	        case 'min':
	            return Math.min(...values);
	        default:
	            throw new Error(`${operation} is not a valid operation`);
	    }
	}

	function findIdsWithTag(groupedByCardId, tag) {
	    return Object.keys(groupedByCardId).filter(id =>
	        groupedByCardId[id].cards.some(record =>
	            record.card.tags.includes(tag)
	        )
	    );
	}
/*
	const combinedCards = Object.values(
		cardRecord.reduce((acc, cd) => {
			const cardId = cd.card.id;

			if (!acc[cardId]) {
				acc[cardId] = {
					...cd,
					round: cd.round,
					player: { attack: 0, attacked: 0, avoid: 0, excite: 0, exciteL: 0, orgasm: 0, orgasmL: 0, use: [], discard: [], transform: [], combine: [], get: [], getState: [] },
					enemy: { attacked: 0, excite: 0, exciteL: 0, orgasm: 0, orgasmL: 0, use: [], discard: [], transform: [], get: [], getState: [] }
				};
			}

			const group = acc[cardId];

			['lewd', 'estrus', 'lust', 'consumeLust', 'wetness', 'sBlock', 'corrupt'].forEach(prop => {
			group[prop] = (group[prop] || 0) + (cd[prop] || 0);
			});

			group.round = Math.max(group.round, cd.round);

			['player', 'enemy'].forEach(entity => {
			['attack', 'attacked', 'avoid', 'excite', 'exciteL', 'orgasm', 'orgasmL'].forEach(prop => {
			group[entity][prop] = (group[entity][prop] || 0) + (cd[entity][prop] || 0);
			});

			['use', 'discard', 'transform', 'combine', 'get', 'getState'].forEach(prop => {
			group[entity][prop] = (group[entity][prop] || []).concat(cd[entity][prop] || []);
			});
			});

			if (cd.card.tags.includes("피니시") && !group.card.tags.includes("피니시")) {
				group.card.tags.push("피니시");
			}

			return acc;
		}, {})
	);
	console.log(combinedCards);
*/
	const endingDiv = document.getElementById('endingDocument');

	var imgPos = 0;
	var bodyCost = 0;

	function createEndingLog(log) {
		const logDiv = document.createElement('div');
		logDiv.className = 'box-content';

		const logImg = document.createElement('div');
		logImg.style.flex = '0 calc(30% - 20px)';
		logImg.style.textAlign = 'center'

		if(log.img) {
		    const image = document.createElement('img');
		    image.src = imageSrc+log.img+".webp";
		    image.onerror = function() { handleImgError(this); };
		    logImg.appendChild(image);
		}

	    const blankDiv = document.createElement('div');
	    blankDiv.style.flex = '0 calc(30% - 20px)';

	    if(imgPos == 0) {
		    logDiv.appendChild(logImg);
		} else {
		    logDiv.appendChild(blankDiv);
		}

		const logTxt = document.createElement('p');
		logTxt.className = 'box-text';
		logTxt.style.flex = '0 calc(40% - 20px)';
		let lTxt = log.text;

		logTxt.innerHTML = lTxt;
		logDiv.appendChild(logTxt);

	    if(imgPos == 1) {
		    logDiv.appendChild(logImg);
		} else {
		    logDiv.appendChild(blankDiv);
		}

		if(log.img) {
			imgPos = imgPos^1;
		}
		return logDiv;
	}

	function selectReview(reviews, maxNum) {
		const sortedArray = reviews.sort((a, b) => b.rate - a.rate);

		const numToSelect = Math.min(maxNum, sortedArray.length);

		const selectedItems = [];
		for (let i = 0; i < numToSelect; i++) {
			const itemsAtCurrentRate = sortedArray.filter(item => item.rate === sortedArray[i].rate && !selectedItems.includes(item));
			const randomItem = itemsAtCurrentRate[Math.floor(Math.random() * itemsAtCurrentRate.length)];
			selectedItems.push(randomItem);
		}

		for (let i = selectedItems.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[selectedItems[i], selectedItems[j]] = [selectedItems[j], selectedItems[i]]; // ES6 구조 분해 할당을 사용하여 요소 교환
		}

		return selectedItems;
	}

	const endingProfileLog = { img:"", text:"" };

    endingProfileLog.img = `face/portrait_player_${raceTag[choiceValues.race]}_${choiceValues.face}_corrupted`;

	let pTxt = "";
	if(battleEnd == 1) {
		pTxt += "<b>상품명:</b> ";
		if(gamemode == 1) {
			pTxt += ((choiceValues.race != "엘도리아인")?choiceValues.race+" ":"") +"성노예<br>";
		} else if(gamemode == 0) {
			pTxt += player.name + ", " +  ((choiceValues.race != "엘도리아인")?choiceValues.race+" ":"") + " 성노예<br>";
		}
	} else {
		pTxt += "<b>이름:</b> " + playerName + "<br>";
	}

	pTxt += `<b>종족:</b> ${choiceValues.race} | <b>직업:</b> ${choiceValues.class} | <b>배경:</b> ${choiceValues.background}`;

	pTxt += "<br><br>- 결투 요약 -<br>";
	pTxt += `<b>사용 카드 수:</b> ${calcNested(player, "record", "use.length", "sum")}장<br>`;
	if(calcNested(player, "record", "discard.length", "sum") > 0) {
		pTxt += `<b>버린 카드 수:</b> ${calcNested(player, "record", "discard.length", "sum")}장<br>`;
	}
	if(player.record.some(record => record.use.length >= 2)) {
		pTxt += `<b>한 라운드에 사용한 최대 카드 수:</b> ${calcNested(player, "record", "use.length", "max")}장<br>`;
	}
	if(calcNested(player, "record", "transform.length", "sum") > 0) {
		pTxt += `<b>변형한 카드 수:</b> ${calcNested(player, "record", "transform.length", "sum")}장<br>`;
	}
	if(calcNested(player, "record", "combine.length", "sum") > 0) {
		pTxt += `<b>결합한 카드 수:</b> ${calcNested(player, "record", "combine.length", "sum")}장<br>`;
	}
	if(calcNested(player, "record", "event.gain.lust", "sum") > 0) {
		pTxt += `<b>얻은 욕망:</b> ${calcNested(player, "record", "event.gain.lust", "sum")}<br>`;
	}
	if(calcNested(player, "record", "event.gain.wetness", "sum") > 0) {
		pTxt += `<b>얻은 젖음:</b> ${calcNested(player, "record", "event.gain.wetness", "sum")}<br>`;
	}
	if(calcNested(player, "record", "event.gain.sBlock", "sum") > 0) {
		pTxt += `<b>얻은 감각차단:</b> ${calcNested(player, "record", "event.gain.sBlock", "sum")}<br>`;
	}
	if(calcNested(player, "record", "event.gain.corrupt", "sum") > 0) {
		pTxt += `<b>얻은 타락:</b> ${calcNested(player, "record", "event.gain.corrupt", "sum")}<br>`;
	}
	pTxt += `<br><b>[자극]한 횟수:</b> ${calcNested(player, "record", "event.attack", "sum")}회<br>`;
	pTxt += `<b>[자극]받은 횟수:</b> ${calcNested(player, "record", "event.attacked", "sum")}회<br>`;
	if(calcNested(player, "record", "event.avoid", "sum") > 0) {
		pTxt += `<b>[자극]을 회피한 횟수:</b> ${calcNested(player, "record", "event.avoid", "sum")}회<br>`;
	}
	pTxt += `<br>`;
	pTxt += `<b>누적 흥분:</b> ${calcNested(player, "record", "event.excite.up", "sum")}<br>`;
	pTxt += `<b>누적 상대의 흥분:</b> ${calcNested(enemy, "record", "event.excite.up", "sum")}<br>`;
	if(calcNested(player, "record", "event.excite.down", "sum") > 0) {
		pTxt += `<b>회복한 흥분:</b> ${calcNested(player, "record", "event.excite.down", "sum")}<br>`;
	}
	pTxt += `<br><b>절정 횟수:</b> ${calcNested(player, "record", "event.orgasm", "sum")}회<br>`;
	pTxt += `<br><b>상대의 절정 횟수:</b> ${calcNested(enemy, "record", "event.orgasm", "sum")}회<br>`;
	if(player.overkill > 0) {
		pTxt += `<b>한계 초과:</b> ${player.overkill}회<br>`;
	}
	if(enemy.overkill > 0) {
		pTxt += `<b>상대의 한계 초과:</b> ${enemy.overkill}회<br>`;
	}

	endingProfileLog.text = pTxt;
	endingDiv.appendChild(createEndingLog(endingProfileLog));
	
	if(battleEnd == 0) {
		const titleDiv = document.createElement("h2");
		titleDiv.className = 'box-title';
		titleDiv.textContent = "상대";
		endingDiv.appendChild(titleDiv);

		const _champData = champList[enemy.id];
		endingDiv.appendChild(createEndingLog({"img":`face/portrait_${_champData.img}_normal`, "text":_champData.logDesc[language]}));

		var ftext = "";
		let fid = findIdsWithTag(groupedByCardId, "피니시")[0];
		if(finishCard && fid) {
			const fdata = groupedByCardId[fid];
			if(finishCard.parents) {
				fid = finishCard.parents;
			} else {
				fid = finishCard.id;
			}

			if(fdata.getSum('enemy.excite') > 0) {
				if(fdata.getSum('enemy.attacked') > 0) {
					ftext += `상대를 ${fdata.getSum('enemy.attacked') > 1?`${fdata.getSum('enemy.attacked')}번 `:""}자극하여, ${fdata.getSum('enemy.excite')} 만큼의 흥분을 안겨주어 절정하게 만들었다.`
				} else {
					ftext += `상대에게 ${fdata.getSum('enemy.excite')} 만큼의 흥분을 안겨주어 절정하게 만들었다.`
				}
			} else if(fdata.getSum('enemy.exciteL') < 0) {
				ftext += `상대의 흥분 한계를 ${-fdata.getSum('enemy.exciteL')} 만큼 감소시켜 절정하게 만들었다.`
			} else if(fdata.getSum('enemy.orgasmL') < 0) {
				ftext += `상대의 절정 한계를 ${-fdata.getSum('enemy.orgasmL')} 만큼 감소시켜 패배하게 만들었다.`
			} else if(fdata.getSum('enemy.orgasm') > 0) {
				ftext += `상대를 강제로 ${fdata.getSum('enemy.orgasm') > 1?`${fdata.getSum('enemy.orgasm')}번 `:""}절정하게 만들었다.`
			} else if(fdata.getSum('player.use.length') > 0) {
				ftext += `${fdata.getSum('player.use.length')}장의 카드의 효과를 발동시켜 승리했다.`
			} else {
				ftext += `특수한 조건을 만족하여 상대에게 절정을 안겨주었다.`
			}

			endingDiv.appendChild(createEndingLog({"img":"card/"+fid, "text":"<b>마무리 - ["+cardDB[fid].name[language]+"]</b>"+(cardDB[fid].hypnoText?`<blockquote>${cardDB[fid].hypnoText[language]}</blockquote>`:"")+"<br>"+ftext}));
		}
	}
	if(battleEnd == 1) {
		const titleDiv = document.createElement("h2");
		titleDiv.className = 'box-title';
		titleDiv.textContent = "상대";
		endingDiv.appendChild(titleDiv);

		const _champData = champList[enemy.id];
		endingDiv.appendChild(createEndingLog({"img":`face/portrait_${_champData.img}_normal`, "text":_champData.logDesc[language]}));

		var ftext = "";
		let fid = findIdsWithTag(groupedByCardId, "피니시")[0]; //combinedCards.find(cd => cd.card.tags.includes("피니시"));
		if(finishCard && fid) {
			const fdata = groupedByCardId[fid];
			if(finishCard.parents) {
				fid = finishCard.parents;
			} else {
				fid = finishCard.id;
			}

			if(fdata.getSum('player.excite') > 0) {
				if(fdata.getSum('player.attacked') > 0) {
					ftext += `${fdata.getSum('player.attacked') > 1?`${fdata.getSum('player.attacked')}번 `:""}자극당해 ${fdata.getSum('player.excite')} 만큼의 흥분을 느껴 절정하고 말았다.`
				} else {
					ftext += `${fdata.getSum('player.excite')} 만큼의 흥분을 느껴 절정하고 말았다.`
				}
			} else if(fdata.getSum('player.exciteL') < 0) {
				ftext += `흥분 한계가 ${-fdata.getSum('player.exciteL')} 만큼 감소해 절정하고 말았다.`
			} else if(fdata.getSum('player.orgasmL') < 0) {
				ftext += `절정 한계가 ${-fdata.getSum('player.orgasmL')} 만큼 감소해 굴복하고 말았다.`
			} else if(fdata.getSum('player.orgasm') > 0) {
				ftext += `강제로 ${fdata.getSum('player.orgasm') > 1?`${fdata.getSum('player.orgasm')}번 `:""}절정해 굴복하고 말았다.`
			} else if(fdata.getSum('enemy.use.length') > 0) {
				ftext += `${fdata.getSum('enemy.use.length')}장의 카드의 효과가 발동해 패배했다.`
			} else {
				ftext += `특수한 조건에 의해 견디지 못하고 패배 선언을 하고 말았다.`
			}

			endingDiv.appendChild(createEndingLog({"img":"card/"+fid, "text":"<b>패배 원인 - ["+cardDB[fid].name[language]+"]</b><br><br>"+ftext}));
		}
	}
}

function downloadDivAsImage(element, name='image') {
	var canvasPromise  = html2canvas(document.getElementById(element));
	canvasPromise.then(function(canvas) {
		const image = canvas.toDataURL('image/png');

		const a = document.createElement('a');
		a.href = image;
		a.download = name+'.png';
		a.click();
	});
}

function encodeObject(obj) {
	const jsonString = JSON.stringify(obj);
	const utf8EncodedString = unescape(encodeURIComponent(jsonString));
	return btoa(utf8EncodedString);
}

function decodeObject(encodedStr) {
    try {
        const cleanEncodedStr = encodedStr
            .split('\n') // 줄별로 나눔
            .filter(line => !line.trim().startsWith('#')) // #으로 시작하지 않는 줄만 필터링
            .join('\n'); // 다시 문자열로 결합

        const decodedString = atob(cleanEncodedStr);
        const jsonString = decodeURIComponent(escape(decodedString));
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("잘못된 값 디코딩:", e.message);
        return null;
    }
}


function copyToClipboard(text) {
	navigator.clipboard.writeText(text).then(() => {
		console.log("클립보드에 복사되었습니다.");
		document.getElementById(`deckCopy`).querySelector(`h2.box-title.langText.${language}`).innerHTML = "📋 덱 코드 복사 (복사됨)";
	}).catch(err => {
		console.error("클립보드 복사에 실패했습니다.", err);
	});
}

function copyDeckCode() {
    const deckCode = {
        version: version,
        name: /^deck \\d+$/.test(deckName) ? undefined : deckName,
        class: choiceValues.class,
        race: choiceValues.race,
        bg: choiceValues.background,
        deck: [],
        state: []
    };

    startDeck.forEach(cd => deckCode.deck.push(cd.id));
    startState.forEach(st => deckCode.state.push(st.id));

    if (startPoisonSac.length > 0) {
        deckCode.poisonSac = [];
        startPoisonSac.forEach(po => deckCode.poisonSac.push(po.id));
    }

    if (choiceValues.class === '마술사' && startSpellSlot.some(spell => spell != null)) {
        deckCode.spellSlot = [];
        startSpellSlot.forEach(sp => deckCode.spellSlot.push(sp.id));
    }

    if (startEssence.length > 0) {
        deckCode.essences = [];
        startEssence.forEach(es => deckCode.essences.push(es.id));
    }

    let metaInfo = `### 덱 정보\n`;
    metaInfo += deckCode.name?`# 이름: ${deckCode.name}\n`:``;
    metaInfo += `# 직업: ${deckCode.class}\n`;
    metaInfo += `# 종족: ${deckCode.race}\n`;
    metaInfo += `# 배경: ${deckCode.bg}\n\n`;

    metaInfo += `### 덱\n`;
    deckCode.deck.forEach(id => {
    	metaInfo += `# [${cardDB[id].name[language]}]\n`;
    })
    if (deckCode.state.length > 0) {
	    metaInfo += `\n### 특성\n`;
	    deckCode.state.forEach(id => {
	    	metaInfo += `# [${cardDB[id].name[language]}]\n`;
	    })
    }
    if (deckCode.poisonSac) {
	    metaInfo += `\n### 독주머니\n`;
	    deckCode.poisonSac.forEach(id => {
	    	metaInfo += `# [${cardDB[id].name[language]}]\n`;
	    })
    }
    if (deckCode.spellSlot) {
	    metaInfo += `\n### 마술 슬롯\n`;
	    deckCode.spellSlot.forEach(id => {
	    	metaInfo += `# [${cardDB[id].name[language]}]\n`;
	    })
    }
    if (deckCode.essences) {
	    metaInfo += `\n### 정수\n`;
	    deckCode.essences.forEach(id => {
	    	metaInfo += `# [${cardDB[id].name[language]}]\n`;
	    })
    }

    const deckCodeString = `${metaInfo}\n${encodeObject(deckCode)}`.replace(/&nbsp;/g, ' ');
    console.log(deckCodeString);
    copyToClipboard(deckCodeString);
}

async function inputDeckCode() {
    try {
        // 클립보드에서 텍스트 읽기
        let inputData = await navigator.clipboard.readText();

        if (!inputData) {
            alert("클립보드에서 텍스트를 읽을 수 없습니다.");
            return;
        }

        const deckCode = decodeObject(inputData);
        const deckCodeLog = document.getElementById("deckCodeLog");

        if (deckCode) {
            if (!(deckCode.version && deckCode.deck && deckCode.state)) {
                deckCodeLog.innerHTML = "잘못된 형식의 코드입니다.";
                return 0;
            }
            if (deckCode.version != version) {
                deckCodeLog.innerHTML = "이전 버전의 코드입니다.";
                return 0;
            }
            if (deckCode.class != choiceValues.class) {
                deckCodeLog.innerHTML = "직업이 일치하지 않습니다.";
                return 0;
            }
            if (playRecord.playCount == 0 && deckCode.state.length > 0) {
                confirm("현재 회차에서는 특성을 선택할 수 없어 누락됩니다.");
            } else if (deckCode.bg != choiceValues.background && deckCode.state.length > 0) {
                confirm("배경이 코드와 일치하지 않습니다.\n일부 특성이 누락될 수 있습니다.");
            }

            var _check = loadDeck(deckCode);

            if (_check) {
                deckCodeLog.innerHTML = "성공적으로 덱을 불러왔습니다.";
            } else {
                deckCodeLog.innerHTML = "일부 특성 또는 카드를 찾지 못했습니다.";
            }

			deckPos = -1;
        } else {
            deckCodeLog.innerHTML = "잘못된 형식의 코드입니다.";
            return 0;
        }
    } catch (error) {
        console.error("클립보드 읽기 오류:", error);
        alert("클립보드에서 텍스트를 읽는 중 오류가 발생했습니다.");
    }
}

function loadDeck(data) {
	clearDeck();

	var _check = true;

	if(data.name) {
		deckName = data.name;
        document.getElementById('deckName').textContent = deckName;
	}

	for (let state of data.state) {
		if(playRecord.playCount == 0) {
			_check = false;
			break;
		}
		if (!cardDB[state]) {
			_check = false;
			continue;
		}

		if(state.startsWith("AD-SL")) {
			if(gamemode == 0) {
				_check = false;
				continue;
			} else {
				state = `AD-SL-boss${enemy.id.slice(5)}`;
			}
		}

		const name = cardDB[state].name[language];
		const innerDivs = document.querySelectorAll('.deckBuild.type1 .card-name');

		let foundDiv = null;
		innerDivs.forEach(div => {
			if (div.innerHTML === name) {
				const outerDiv = div.closest('.deckBuild.type1');
				if (outerDiv && !outerDiv.classList.contains('disabled')) {
					foundDiv = outerDiv;
				}
			}
		});

		if (!foundDiv) {
			_check = false;
			continue;
		}

		addCard(foundDiv, player.state);
	}

	for (let card of data.deck) {
		if (!cardDB[card]) {
			_check = false;
			continue;
		}

		if(card == "BN-EL-001") {
			continue;
		}

		if(card == "BN-HA-001") {
			if(data.custom && choiceValues.race == "하프만") {
				cardDB["BN-HA-001"] = data.custom;
				const costDiv = document.getElementById('selectCustomCard').querySelector("p.card-cost");
				costDiv.innerHTML = "<b>"+((data.custom.cost<0)?"+":"")+(-data.custom.cost)+"pt</b>";
				if(data.custom.cost<0) {
					costDiv.style.color = "rgba(0, 128, 0, 1)"
				} else {
					costDiv.style.color = "";
				}
			    cardTextUpdate(document.getElementById('selectCustomCard').querySelector("div.card"), cardDB["BN-HA-001"]);
				addCustomCard();
			} else {
				_check = false;
			}
			continue;
		}

		const name = cardDB[card].name[language];
		const innerDivs = document.querySelectorAll('.deckBuild.type0 .card-name');

		let foundDiv = null;
		innerDivs.forEach(div => {
			if (div.innerHTML === name) {
				const outerDiv = div.closest('.deckBuild.type0');
				if (outerDiv && !outerDiv.classList.contains('disabled')) {
					foundDiv = outerDiv;
				}
			}
		});

		if (!foundDiv) {
			_check = false;
			continue;
		}

		addCard(foundDiv, deck);
	}

	if(data.poisonSac) {
		for (let poison of data.poisonSac) {
			if (!cardDB[poison]) {
				_check = false;
				continue;
			}

			const name = cardDB[poison].name[language];
			const innerDivs = document.querySelectorAll('.deckBuild.type2 .card-name');

			let foundDiv = null;
			innerDivs.forEach(div => {
				if (div.innerHTML === name) {
					const outerDiv = div.closest('.deckBuild.type2');
					if (outerDiv && !outerDiv.classList.contains('disabled')) {
						foundDiv = outerDiv;
					}
				}
			});

			if (!foundDiv) {
				_check = false;
				continue;
			}

			addCard(foundDiv, poisonSac);
		}
	}
	if(data.spellSlot) {
		let i = 0;
		for (let spell of data.spellSlot) {
			if (!cardDB[spell]) {
				_check = false;
				i++;
				continue;
			}

			spellSlot[i++] = deepCopy(cardDB[spell]);
		}
	}
	if(data.essences) {
		point -= 5*Math.max(data.essences.length-2, 0);
		essences.splice(0);
		data.essences.forEach(id => {
			essences.push(deepCopy(cardDB[id]));
		});
		essenceUpdate();
	}
	if(data.wildcard) {
		if(choiceValues.race == "엘도리아인") {
			addWildcard(data.wildcard);
		} else {
			_check = false;
		}
	}

	infoUpdate();
	cardStateUpdate();

	return _check;
}

function clearDeck() {
	const type0Divs = document.querySelectorAll('.deckBuild.type0.active');
	type0Divs.forEach(div => {
		addCard(div, deck);
	});

	const type1Divs = document.querySelectorAll('.deckBuild.type1.active');
	type1Divs.forEach(div => {
		addCard(div, player.state);
	});

	const type2Divs = document.querySelectorAll('.deckBuild.type2.active');
	type2Divs.forEach(div => {
		addCard(div, poisonSac);
	});

	for(let i=0; i<3; i++) {
		spellSlot[i] = deepCopy(cardDB['MA-MG-000']);
	}

	point += Math.max(essences.length-2, 0) * 5;
	essences.splice(0);

	if(deckData.wildcard) {
		const wildcardDiv = document.getElementById("selectWildcard").querySelector('div.card');
		addCard(wildcardDiv, deck);
		cardTextUpdate(wildcardDiv, cardDB["BN-EL-001"]);
		delete deckData.wildcard;
	}

	if(deck.some(cd => cd.id == "BN-HA-001")) {
		addCustomCard();
		if(deckData.custom) {
			delete deckData.custom;
		}
	}

	deckPos = -1;

	essenceUpdate();
	infoUpdate();
	cardStateUpdate();
}

function saveObject(key, obj) {
	const jsonString = JSON.stringify(obj);
	localStorage.setItem(`HA_${key}`, jsonString);
}

function loadObject(key) {
	try {
		const jsonString = localStorage.getItem(`HA_${key}`);
		if (jsonString) {
			return JSON.parse(jsonString);
		}
		console.log("저장 값 없음");
		return null;
	} catch(e) {
		console.log("잘못된 저장 값");
		return null;
	}
}

function saveObjectArray(key, obj, len, pos = undefined) {
    let array = loadObject(key) || [];

    if (pos === undefined || pos < 0 || pos >= array.length) {
        array.unshift(obj);
    } else {
        array.splice(pos, 1);
        array.unshift(obj);
    }

    if (array.length > len) {
        array.pop();
    }

    saveObject(key, array);
}

function randomAll() {
	randomSelect('race');
	randomSelect('face');
	randomSelect('class');
	randomSelect('background');
	randomSelect('ps');

	//document.getElementById("profileConfirm").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function testSet(result) {
	battleEnd = result;
	changeEvent(11);
}

document.getElementById('turnEndButton')?.addEventListener('click', function(event) {
    event.stopPropagation();

    clickable = false;
	closeAllTabs();
	buttonUpdate();
	battleCardUpdate();

	eventList.push({type:"combat"});
	eventList.push({type:"roundStart"});

	eventProgress();
});


const modal = document.getElementById("modal");

function profileModalOpen() {
    const modal = document.getElementById("modal");
    modal.innerHTML = ''; // 기존 내용을 지움
    modal.style.display = "flex";

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const title = document.createElement('h2');
    title.className = 'box-title'
    title.textContent = '최근 프로필 불러오기';
    modalBody.appendChild(title);

    const caption = document.createElement('div');
    caption.className = 'caption';
    const captions = [
        { className: 'captionNum', text: '번호' },
        { className: 'captionName', text: '이름' },
        { className: '', text: '종족' },
        { className: 'captionFace', text: '얼굴' },
        { className: 'captionPs', text: '성격' },
        { className: '', text: '직업' },
        { className: '', text: '배경' }
    ];
    captions.forEach(captionInfo => {
        const span = document.createElement('span');
        span.className = `caption-item ${captionInfo.className}`;
        span.textContent = captionInfo.text;
        caption.appendChild(span);
    });

    const profileList = document.createElement('div');
    profileList.className = 'profile-list';
    profileList.id = 'profileList';
    modalBody.appendChild(profileList);

    profileList.appendChild(caption);

    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);

    const profiles = loadObject('recentProfiles') || [];

    if (profiles.length === 0) {
        const noProfiles = document.createElement('p');
        noProfiles.style.textAlign = 'center';
        noProfiles.textContent = '저장된 프로필이 없습니다.';
        profileList.appendChild(noProfiles);
        return;
    }

    profiles.forEach((profile, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'profile-item';
        listItem.innerHTML = `
            <span class="captionNum">${index+1}</span>
            <span class="captionName">${profile.name}</span>
            <span>${profile.race}</span>
            <span class="captionFace">${profile.face}</span>
            <span class="captionPs">${profile.ps && gamemode != 2?profile.ps:'-'}</span>
            <span><span style="color: ${cardColor[profile.class].border}; text-shadow: -1px 0px ${cardColor[profile.class].name}, 0px 1px ${cardColor[profile.class].name}, 1px 0px ${cardColor[profile.class].name}, 0px -1px ${cardColor[profile.class].name};">${profile.class}</span></span>
            <span>${profile.background}</span>
        `;
        listItem.onclick = () => showProfileDetail(profile, index);
        profileList.appendChild(listItem);
    });
}

function deckModalOpen() {
    const modal = document.getElementById("modal");
    modal.innerHTML = ''; // 기존 내용을 지움
    modal.style.display = "flex";

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const titleBox = document.createElement('div');
    titleBox.className = 'box';

    const title = document.createElement('h2');
    title.className = 'box-title'
    title.textContent = '최근 덱 불러오기';
    titleBox.appendChild(title);

    const checkboxContainer = document.createElement('div');
    checkboxContainer.style.display = 'flex';
    checkboxContainer.style.margin = '10px 0';

    const profileList = document.createElement('div');
    profileList.className = 'profile-list';
    profileList.id = 'profileList';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'deckToggleCheckbox';

    const label = document.createElement('label');
    label.htmlFor = 'deckToggleCheckbox';
    label.textContent = '종족, 배경, 모드 일치';

    checkbox?.addEventListener('change', (event) => {
        deckListRefresh(profileList);
    });

    const checkbox2 = document.createElement('input');
    checkbox2.type = 'checkbox';
    checkbox2.id = 'morvainToggleCheckbox';
    checkbox2.style.marginLeft = '64px';

    const label2 = document.createElement('label');
    label2.htmlFor = 'morvainToggleCheckbox';
    label2.innerHTML = '<b>[모르베인의 그림자]</b> 제외';

    checkbox2?.addEventListener('change', (event) => {
        deckListRefresh(profileList);
    });

    // 컨테이너에 체크박스와 레이블을 추가
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(checkbox2);
    checkboxContainer.appendChild(label2);
    titleBox.appendChild(checkboxContainer);
    modalBody.appendChild(titleBox);

    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);

    modalBody.appendChild(profileList);
    deckListRefresh(profileList);
}

function deckListRefresh(div) {
	div.innerHTML = '';

    const caption = document.createElement('div');
    caption.className = 'caption';
    const captions = [
        { className: 'captionNum', text: '번호' },
        { className: '', text: '직업' },
        { className: '', text: '종족' },
        { className: '', text: '배경' },
        { className: 'captionName', text: '이름' },
    ];
    captions.forEach(captionInfo => {
        const span = document.createElement('span');
        span.className = `caption-item ${captionInfo.className}`;
        span.textContent = captionInfo.text;
        caption.appendChild(span);
    });

    div.appendChild(caption);

	let decks = loadObject('class'+classNum[choiceValues.class]) || [];
	if(document.getElementById('deckToggleCheckbox').checked) {
		decks = decks.filter(dc => (dc.race == "-" || choiceValues.race == dc.race) && (dc.background == "-" || choiceValues.background == dc.background) && (gamemode == 1 || !dc.state.some(st => st.startsWith("AD-SL"))));
	}
	if(document.getElementById('morvainToggleCheckbox').checked) {
		decks = decks.filter(dc => !dc.state.some(st => st == 'DA-NT-ALL-000'));
	}

	if (decks.length === 0) {
        const noDecks = document.createElement('p');
        noDecks.style.textAlign = 'center';
        noDecks.textContent = '저장된 덱이 없습니다.';
        div.appendChild(noDecks);
        return ;
    }

    decks.forEach((dc, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'profile-item';
        listItem.innerHTML = `
            <span class="captionNum">${index+1}</span>
            <span>${choiceValues.class}${dc.state.some(st => st.startsWith("AD-SL"))?" (하드)":""/*(dc.deck.some(cd => cardDB[cd] && (cardDB[cd].type == "만능" || cardDB[cd].type == "비전" || cardDB[cd].type == "수제" || cardDB[cd].type == "시련"))?" (일반)":"")*/}</span>
            <span style="color: ${dc.race == "-" || choiceValues.race == dc.race?"var(--color-text)":"red"}">${dc.race}</span>
            <span style="color: ${dc.background == "-" || choiceValues.background == dc.background?"var(--color-text)":"red"}">${dc.background}</span>
            <span class="captionName">${dc.name}</span>
        `;
        listItem.onclick = () => showDeckDetail(dc, 'class'+classNum[choiceValues.class], index);
        div.appendChild(listItem);
    });
}

function showProfileDetail(profile, index) {
    const modal = document.getElementById("modal");
    modal.innerHTML = ''; // 기존 내용을 지움

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const profileDetail = document.createElement('div');
    let profileFace;
	if(profile.ps == "적극" || gamemode == 2) {
		profileFace = 'corrupted';
	} else {
		profileFace = 'normal';
	} 
    profileDetail.className = 'profile-detail';
    profileDetail.innerHTML = `
    	<div class="box-img portrait" style="margin:20px; max-width:512px">
            <img src="${imageSrc}face/portrait_player_${raceTag[profile.race]}_${profile.face}_${profileFace}.webp" alt="Face Image">
            ${gamemode != 2?(`<img class="clothes" src="${imageSrc}face/portrait_player_${raceTag[profile.race]}_${profile.face}_c${gamemode == 0?classNum[profile.class]:5}.webp" onerror="handleImgError(this)" alt="">`):""}
        </div>
        <div class="container">
            <div class="box" style="flex: 0 calc(100% - 20px);">
			    <div class="info-item">
			        <span class="value" style="font-size: 32px; font-weight: bolder; padding-left:16px; border-left:8px solid grey">${profile.name}</span>
			    </div>
			    <div class="info-item">
			        <span class="value" style="font-size: 24px;">${profile.race}</span><span class="value" style="font-size: 18px;">/ 여성</span>
			    </div>
			    <div class="info-item">
			        <span class="value" style="font-size: 24px;">${profile.class}</span><span class="value" style="font-size: 20px;">(${profile.background})</span>
			    </div>
			    <div class="info-item">
			        <span class="value" style="font-size: 18px;">${{"순종":"- 순종적이고 충실함.", "저항":"- 반항적이고 자존심 강함.", "무지":"- 순진하고 단순함.", "적극":"- 적극적이고 도발적.", "없음":""}[profile.ps && gamemode != 2?profile.ps:"없음"]}</span>
			    </div>
			</div>
	        <div class="box button" style="flex: 0 calc(40% - 20px); text-align: center; background: var(--color-active); outline: double var(--color-active);" onclick="loadProfile(${index})">불러오기</div>
	        <div class="box button" style="flex: 0 calc(30% - 20px); text-align: center;" onclick="if(profilePos == ${index}) { profilePos = -1; } deleteData('recentProfiles', ${index}); profileModalOpen();">삭제하기</div>
	        <div class="box button" style="flex: 0 calc(30% - 20px); text-align: center;" onclick="profileModalOpen()">뒤로가기</div>
        </div>
    `;

    modalBody.appendChild(profileDetail);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
}

function showDeckDetail(dc, key, index) {
	function deckDataNameInput() {
	    let name = prompt("이름을 입력하세요.", dc.name);
	    
	    if (name !== null) {
	        name = name.replace(/\s+/g, ' ');
	        name = name.trim();
	    	if(name.length > 15) {
	        	name = name.substring(0, 15);
	        }
	        if (name !== '') {
	        	dc.name = name;
    			deckNameText.textContent = `덱 이름: ${dc.name}`;
    			if(deckPos == index) {
    				deckPos = 0;
    			}
    			deleteData(key, index);
				saveObjectArray(key, dc, 200);
    			index = 0;
	        }
	    }
	}

    const modal = document.getElementById("modal");
    modal.innerHTML = ''; // 기존 내용을 지움

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.background = 'var(--color-background)'
    modalContent.style.paddingBottom = '0px';

    const deckDetail = document.createElement('div');
    deckDetail.className = 'container';

	const deckNameDiv = document.createElement('div');
	deckNameDiv.className = 'box';
	deckNameDiv.style.flex = '0 calc(80% - 20px)';

    const deckNameText = document.createElement('h2');
    deckNameText.className = 'box-title'
    deckNameText.textContent = `덱 이름: ${dc.name}`;
    deckNameDiv.appendChild(deckNameText);
    deckDetail.appendChild(deckNameDiv);

	const deckNameChangeDiv = document.createElement('div');
	deckNameChangeDiv.className = 'box button';
	deckNameChangeDiv.style.flex = '0 calc(20% - 20px)';
    deckNameChangeDiv?.addEventListener('click', deckDataNameInput);

    const deckNameChangeText = document.createElement('h2');
    deckNameChangeText.className = 'box-title'
    deckNameChangeText.textContent = `이름 변경`;
    deckNameChangeDiv.appendChild(deckNameChangeText);
    deckDetail.appendChild(deckNameChangeDiv);

	if(dc.state.length > 0) {
		const stateDiv = document.createElement('div');
		stateDiv.className = 'box container cardList';
		stateDiv.style.flex = '0 calc(100% - 20px)';

	    const stateTitle = document.createElement('h2');
	    stateTitle.className = 'box-title'
	    stateTitle.textContent = '특성';
	    stateDiv.appendChild(stateTitle);
	    deckDetail.appendChild(stateDiv);

	    dc.state.forEach(function(st) {
	    	const _st = cardDB[st];
	    	if(_st) {
		    	const _div = createCard(_st, 24);
		    	stateDiv.appendChild(_div);
		    	if((_st.race && _st.race != choiceValues.race) || (_st.bg && _st.bg != choiceValues.background) || (_st.boss != undefined && (gamemode != 1 || !collection.boss[`boss${enemy.id.slice(5)}`]))) {
		    		_div.style.opacity = "0.5"
		    		_div.style.filter = "sepia(100%)"
		    	}
		    }
	    });
	}

	if(dc.poisonSac && dc.poisonSac.length > 0) {
		const poDiv = document.createElement('div');
		poDiv.className = 'box container cardList';
		poDiv.style.flex = '0 calc(100% - 20px)';

	    const poTitle = document.createElement('h2');
	    poTitle.className = 'box-title'
	    poTitle.textContent = '독주머니';
	    poDiv.appendChild(poTitle);
	    deckDetail.appendChild(poDiv);

	    dc.poisonSac.forEach(function(po) {
	    	const _div = createCard(cardDB[po], 24);
	    	poDiv.appendChild(_div);
	    });
	}

	if(dc.spellSlot && dc.spellSlot.length > 0) {
		const spDiv = document.createElement('div');
		spDiv.className = 'box container cardList';
		spDiv.style.flex = '0 calc(100% - 20px)';

	    const spTitle = document.createElement('h2');
	    spTitle.className = 'box-title'
	    spTitle.textContent = '마술 슬롯';
	    spDiv.appendChild(spTitle);
	    deckDetail.appendChild(spDiv);

	    dc.spellSlot.forEach(function(sp) {
	    	const _div = createCard(cardDB[sp], 24);
	    	spDiv.appendChild(_div);
	    });
	}

	if(dc.essences && dc.essences.length) {
		const ingDiv = document.createElement('div');
		ingDiv.className = 'box container cardList';
		ingDiv.style.flex = '0 calc(100% - 20px)';

	    const ingTitle = document.createElement('h2');
	    ingTitle.className = 'box-title'
	    ingTitle.textContent = '정수';
	    ingDiv.appendChild(ingTitle);
	    deckDetail.appendChild(ingDiv);

	    dc.essences.forEach(function(ing) {
	    	const _div = createCard(cardDB[ing], 24);
	    	ingDiv.appendChild(_div);
	    });
	}

	if(dc.deck.length > 0) {
		const deckDiv = document.createElement('div');
		deckDiv.className = 'box container cardList';
		deckDiv.style.flex = '0 calc(100% - 20px)';

	    const deckTitle = document.createElement('h2');
	    deckTitle.className = 'box-title'
	    deckTitle.textContent = '덱';
	    deckDiv.appendChild(deckTitle);
	    deckDetail.appendChild(deckDiv);

	    dc.deck.forEach(function(cd) {
	    	const _cd = cardDB[cd];
	    	if(_cd) {
		    	const _div = createCard(cd == "BN-HA-001" && dc.custom?dc.custom:cardDB[cd], 24);
		    	deckDiv.appendChild(_div);
		    	if((_cd.race && _cd.race != choiceValues.race)) {
		    		_div.style.opacity = "0.5"
		    		_div.style.filter = "sepia(100%)"
		    	}
		    }
	    });
	}

	if(dc.wildcard) {
		const wildDiv = document.createElement('div');
		wildDiv.className = 'box container cardList';
		wildDiv.style.flex = '0 calc(100% - 20px)';

	    const wildTitle = document.createElement('h2');
	    wildTitle.className = 'box-title'
	    wildTitle.textContent = '만능 카드';
	    wildDiv.appendChild(wildTitle);
	    deckDetail.appendChild(wildDiv);

	    const _wildcard = deepCopy(cardDB[dc.wildcard]);
	    _wildcard.tags.push("만능");
    	const _div = createCard(_wildcard, 24);
	    if(choiceValues.race != "엘도리아인") {
	    	_div.style.opacity = "0.5"
		    _div.style.filter = "sepia(100%)"
	    }
    	wildDiv.appendChild(_div);
	}


    const buttonContainer = document.createElement('div');
	buttonContainer.style.position = 'sticky';
	buttonContainer.style.bottom = '0';
	buttonContainer.style.left = '0';
	buttonContainer.style.width = '100%';
	buttonContainer.style.display = 'flex';
	buttonContainer.style.justifyContent = 'space-around';
	buttonContainer.style.backgroundColor = 'var(--color-background)';
	buttonContainer.style.padding = '20px 0';
	buttonContainer.style.zIndex = '51';
	buttonContainer.style.borderTop = '2px solid var(--color-bar)';

    const loadDeckButton = document.createElement('div');
    loadDeckButton.className = 'box button active';
    loadDeckButton.style.flex = '0 calc(40% - 20px)';
    loadDeckButton.style.textAlign = 'center';
    loadDeckButton.textContent = '불러오기';
    loadDeckButton?.addEventListener('click', function() {
    	var _check = loadDeck(dc);
    	deckPos = index;
    	modal.style.display = 'none';
		const deckCodeLog = document.getElementById("deckCodeLog");
		if(_check) {
			deckCodeLog.innerHTML = "성공적으로 덱을 불러왔습니다.";
		} else {
			deckCodeLog.innerHTML = "일부 특성 또는 카드를 찾지 못했습니다.";
		}
    });

    const deleteDeckButton = document.createElement('div');
    deleteDeckButton.className = 'box button';
    deleteDeckButton.style.flex = '0 calc(30% - 20px)';
    deleteDeckButton.style.textAlign = 'center';
    deleteDeckButton.textContent = '삭제하기';
    deleteDeckButton?.addEventListener('click', function() {
    	if(deckPos == index) {
    		deckPos = -1;
    	}
    	deleteData(key, index);
    	deckModalOpen();
    });

    const backButton = document.createElement('div');
    backButton.className = 'box button';
    backButton.style.flex = '0 calc(30% - 20px)';
    backButton.style.textAlign = 'center';
    backButton.textContent = '뒤로가기';
    backButton?.addEventListener('click', function() {
        deckModalOpen();
    });

    buttonContainer.appendChild(loadDeckButton);
    buttonContainer.appendChild(deleteDeckButton);
    buttonContainer.appendChild(backButton);

    modalContent.appendChild(deckDetail);
    modalContent.appendChild(buttonContainer);
    modal.appendChild(modalContent);
}


function loadProfile(index) {
    console.log("프로필 불러오기:", profile);
    // 필요한 로직 추가
    const charLoadLog = document.getElementById("charLoadLog");
    const profiles = loadObject('recentProfiles') || [];
    const charData = profiles[index];

	if(!charData) {
		charLoadLog.innerHTML = "기록이 존재하지 않습니다.";
		return 0;
	}

	if(!(charData.name && charData.onlyName && charData.race && charData.face && charData.class && charData.background)) {
		charLoadLog.innerHTML = "기록이 존재하지 않습니다.(손상됨)";
		return 0;
	}

	const continueButton = document.getElementById("appearanceContinue");
	if(continueButton) {
		nextButton.call(continueButton,6);
	}

	for(let key in charData) {
		if(key == 'name') {
			continue;
		}
		const innerDivs = document.querySelectorAll(`.button.${key} .box-title`);

		let foundDiv = null;
		innerDivs.forEach(div => {
			if (div.innerHTML === charData[key]) {
				foundDiv = div.closest(`.button.${key}`);
			}
		});

		if(foundDiv) {
			foundDiv.click();
			//selectChoice.call(foundDiv, key);
		}
	}
	playerName = charData.name;
	player.name = charData.onlyName;
	player.surname = charData.surname;
	document.getElementById('playerName').textContent = playerName;

	charLoadLog.innerHTML = "성공적으로 불러왔습니다.";
	document.getElementById('quickName').classList.remove('disabled');
	document.getElementById('quickApp').classList.remove('disabled');
	document.getElementById('quickClass').classList.remove('disabled');
	document.getElementById('quickBg').classList.remove('disabled');
	if(choiceValues.ps) {
		document.getElementById('quickPs').classList.remove('disabled');
	}
	if(choiceValues.ps || gamemode == 2) {
		document.getElementById('quickEnd').classList.remove('disabled');
	}
	//document.getElementById("profileConfirm").scrollIntoView({ behavior: 'smooth', block: 'start' });
	stateUpdate();
	modal.style.display = "none";
	profilePos = index;
}

function deleteData(key, index) {
    let data = loadObject(key) || [];
    data.splice(index, 1);
    saveObject(key, data);
}

function relatedModalOpen(card) {
    modal.style.display = "flex";
    modal.innerHTML = ''; // 기존 내용을 지움

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.background = 'var(--color-background)'
    modalContent.style.paddingBottom = '0px';
    modal.appendChild(modalContent);

    const relatedDetail = document.createElement('div');
    relatedDetail.className = 'container cardList';
    modalContent.appendChild(relatedDetail);

    if(card) {
    	const relatedList = [];
    	let replacementIDs;

    	if(card.original) {
    		relatedList.push(card.original);
    	}
    	if(card.originals) {
    		relatedList.push(...card.originals);
    	}
    	
    	if(card.related && card.related.length > 0) {
			card.related.forEach(item => {
				switch(item) {
				case "중립":
					replacementIDs = Object.values(cardDB)
					    .filter(cd => cd.class === "중립" && cd.type != "패널티" && cd.type != "체위" && cd.tags.includes("덱빌딩") && !cd.tags.includes("생성불가"))
					    .map(cd => cd.id);

					relatedList.push(...replacementIDs);
					break;
				case "중립공격":
					replacementIDs = Object.values(cardDB)
					    .filter(cd => cd.class === "중립" && cd.type == "공격" && cd.tags.includes("덱빌딩") && !cd.tags.includes("생성불가"))
					    .map(cd => cd.id);

					relatedList.push(...replacementIDs);
					break;
				case "패널티":
					replacementIDs = Object.values(cardDB)
					    .filter(cd => cd.type === "패널티" && cd.tags.includes("덱빌딩") && !cd.tags.includes("생성불가"))
					    .map(cd => cd.id);

					relatedList.push(...replacementIDs);
					break;
				case "궁극":
					replacementIDs = Object.values(cardDB)
					    .filter(cd => cd.rarity === "궁극" && cd.class == choiceValues.class && !cd.tags.includes("생성불가"))
					    .map(cd => cd.id);

					relatedList.push(...replacementIDs);
					break;
				default:
					if(item.startsWith("tag:")) {
						replacementIDs = Object.values(cardDB)
						    .filter(cd => cd.tags.includes(item.substr(4)) && !cd.tags.includes("생성불가") && !(item.substr(4) == '즉발 마술' && cd.id == 'MA-MG-EA-002'))
						    .map(cd => cd.id);

						relatedList.push(...replacementIDs);
					} else if(item.startsWith("ref:")) {
						let cardPool = [];
						switch(item.substr(4)) {
						case "독주머니":
							cardPool = poisonSac;
							break;
						case "즉발슬롯":
							cardPool = [spellSlot[0]];
							break;
						case "영창슬롯":
							cardPool = [spellSlot[1]];
							break;
						case "집중슬롯":
							cardPool = [spellSlot[2]];
							break;
						case "버림":
							cardPool = returnText("플레이어.기록.전체.버림", 1);
							break;
						}
						replacementIDs = Object.values(cardPool).map(cd => cd.id);

						relatedList.push(...replacementIDs);
					} else {
						relatedList.push(item);
					}
					break;
				}
			});
		}

		if(player.state.some(st => st.id == "B6-SU-003-1")) {
			relatedList.splice(0);
			relatedList.push("B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2","B6-SU-003-2");
		}

    	for(let _c of relatedList) {
    		let _cd;
    		if(typeof _c === "string") {
	    		_cd = cardDB[_c];
	    	} else {
	    		_cd = _c;
	    	}
	    	const cardDiv = createCard(_cd, 28);
    		if(_cd.tags.includes("기본제조") && !poisonSac.some(po => po.id == _cd.id)) {
    			cardDiv.classList.add("disabled");
    		}
    		relatedDetail.appendChild(cardDiv);
    	}

    	if(relatedList.length == 0) {
    		const _p = document.createElement('p');
    		_p.innerHTML = "관련 카드 없음";
    		relatedDetail.appendChild(_p);
    	}
    } else {
		const _p = document.createElement('p');
		_p.innerHTML = "관련 카드 없음";
		relatedDetail.appendChild(_p);
    }
}

modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
document?.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display != "none") {
        modal.style.display = "none";
    }
});

function wildcardModalOpen() {
	const wildcardDiv = document.getElementById("selectWildcard").querySelector('div.card');
	if(wildcardDiv.classList.contains("active")) {
		addCard(wildcardDiv, deck);
		cardTextUpdate(wildcardDiv, cardDB["BN-EL-001"]);
		delete deckData.wildcard;
	} else {
	    modal.style.display = "flex";
	    modal.innerHTML = ''; // 기존 내용을 지움

	    const modalContent = document.createElement('div');
	    modalContent.className = 'modal-content';
	    modalContent.style.background = 'var(--color-background)'
	    modalContent.style.paddingBottom = '0px';

	    const cardDetail = document.createElement('div');
	    cardDetail.className = 'container';

	    modalContent.appendChild(cardDetail);
	    modal.appendChild(modalContent);

		Object.values(cardDB).filter(cd => cd.tags.includes("덱빌딩") && (cd.class == "중립" || cd.class == "패널티" || cd.class == choiceValues.class)).forEach(cd => {
			const cardDiv = createCard(cd, 28, true, 52);
	    	cardDetail.appendChild(cardDiv);
		});
	}
}

function addWildcard(id) {
	modal.style.display = "none";
	const wildcardDiv = document.getElementById("selectWildcard").querySelector('div.card');

	addCard(wildcardDiv, deck);
	const _wildcard = deepCopy(cardDB[id]);
	_wildcard.tags.push("만능")
	cardTextUpdate(wildcardDiv, _wildcard);
	cardTextUpdate(document.getElementById('yourDeck').querySelector('div.card[data-id="BN-EL-001"]'), _wildcard);

	deckData.wildcard = id;
}

function addCustomCard() {
	const customcardDiv = document.getElementById('selectCustomCard').querySelector("div.card");
	addCard(customcardDiv, deck);
	document.getElementById('customCardOption').classList.toggle("disabled");

	if(customcardDiv.classList.contains("active")) {
		cardTextUpdate(document.getElementById('yourDeck').querySelector('div.card[data-id="BN-HA-001"]'), cardDB["BN-HA-001"]);
	}
}

let glitchNumber = "";

function getGlitchyCharacter() {
    const baseNumbers = '0123456789';
    const baseAlphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const baseSpecialCharacters = '\u2588\u2592\u2591';
    
    let baseCharacters = baseNumbers;

    const specialCharacterChance = 0.2;
    const alphabetChance = 0.1;

    if (Math.random() < alphabetChance) {
        baseCharacters = baseAlphabets;
    } else if (Math.random() < specialCharacterChance) {
        baseCharacters = baseSpecialCharacters;
    }

    const combiningCharacterRangeStart = 0x0300; // U+0300
    const combiningCharacterRangeEnd = 0x036F; // U+036F

    function getRandomCombiningCharacter() {
        const codePoint = Math.floor(Math.random() * (combiningCharacterRangeEnd - combiningCharacterRangeStart + 1)) + combiningCharacterRangeStart;
        return String.fromCharCode(codePoint);
    }

    let char = baseCharacters.charAt(Math.floor(Math.random() * baseCharacters.length));
    const numberOfCombiningCharacters = Math.floor(Math.random() * 8) + 3;
    for (let i = 0; i < numberOfCombiningCharacters; i++) {
        char += getRandomCombiningCharacter();
    }

    return char;
}

function updateGlitchNumber() {
	glitchNumber = "";
	for(let i=0; i<3; i++) {
		glitchNumber += getGlitchyCharacter();
	}
	const glitchNumbers = document.getElementsByClassName("glitchNumbers");
	for(let gn of glitchNumbers) {
		gn.innerText = glitchNumber;
	}
}

setInterval(updateGlitchNumber, 100);

let effectCounter = 0;  // 첫 번째 효과인지 확인하기 위한 카운터
let customEffect = [];  // 전역 배열로 선언된 customEffect

function addEffectBlock() {
    const effectContainer = document.getElementById("effectContainer");

    const effectBlock = document.createElement("div");
    effectBlock.classList.add("box", "effect-block");

    const conditionPart = document.createElement("div");
    conditionPart.classList.add("condition-part");

    const effectPart = document.createElement("div");
    effectPart.classList.add("effect-part");

    if (effectCounter > 0) {  // 첫 번째 블럭이 아닐 때만 삭제 버튼 추가
        const deleteButton = document.createElement("div");
        deleteButton.classList.add("box", "button", "delete-button", "active");
        deleteButton.innerText = "삭제";
        deleteButton?.addEventListener("click", function() {
    		document.getElementById('addEffectButton').style.display = 'block';
    		effectCounter--;
            effectBlock.remove();
            updateCustomCard();
        });

        effectBlock.appendChild(deleteButton);
    }

    const selectCondition = document.createElement("select");
    selectCondition.classList.add("input", "custom-input");
    selectCondition.dataset.key = "trigger";
    selectCondition.innerHTML = `
        <option value="none">없음</option>
    `;
    variableList.forEach(vl => {
    	if(vl.value != "stack" && (!vl.condition || checkCondition(vl.condition, 0))) {
	    	selectCondition.innerHTML += `<option value="${vl.value}">${vl.text}</option>`;
	    }
    });
    selectCondition?.addEventListener("change", function() {
        updateConditionOptions(this);
    });

    const selectEffect = document.createElement("select");
    selectEffect.classList.add("input", "custom-input");
    selectEffect.dataset.key = "type";
    selectEffect.innerHTML = `
        <option value="attack">자극</option>
        <option value="excite">흥분</option>
        <option value="exciteL">흥분 한계</option>
        <option value="lewd">음란</option>
        <option value="estrus">발정</option>
        <option value="get">카드 획득</option>
    `;
    if(choiceValues.class == "전사") {
    	selectEffect.innerHTML += `
    		<option value="changeLust">욕망</option>
    		<option value="discard">버리기</option>
    	`
    }
    if(choiceValues.class == "암살자") {
    	selectEffect.innerHTML += `
    		<option value="changeWetness">젖음</option>
    	`
    }
    if(choiceValues.class == "마술사") {
    	selectEffect.innerHTML += `
    		<option value="changeSBlock">감각차단</option>
    		<option value="transform">변형</option>
    	`
    }
    if(choiceValues.class == "치유사") {
    	selectEffect.innerHTML += `
    		<option value="changeCorrupt">타락</option>
    		<option value="combine">결합</option>
    	`
    }
    if(choiceValues.class != "전사") {
    	selectEffect.innerHTML += `
    		<option value="state">상태</option>
    	`
    }
	selectEffect.innerHTML += `
        <option value="maxUse">추가 카드</option>
		<option value="stack">강화</option>
	`
    selectEffect?.addEventListener("change", function() {
        updateEffectOptions(this);
    });

    const conditionLabel = document.createElement("h4");
    conditionLabel.classList.add("block-label");
    conditionLabel.innerText = "조건";

    const effectLabel = document.createElement("h4");
    effectLabel.classList.add("block-label");
    effectLabel.innerText = "효과";

    conditionPart.appendChild(conditionLabel);
    conditionPart.appendChild(selectCondition);
    updateConditionOptions(selectCondition);  // 조건 세부 내용 기본 표시

    effectPart.appendChild(effectLabel);
    effectPart.appendChild(selectEffect);
    updateEffectOptions(selectEffect);  // 효과 세부 내용 기본 표시

    const separator = document.createElement("div");
    separator.classList.add("vertical-separator");

    effectBlock.appendChild(conditionPart);
    effectBlock.appendChild(separator);
    effectBlock.appendChild(effectPart);

    effectContainer.appendChild(effectBlock);

    effectCounter++;
    if(effectCounter >= 3) {
    	document.getElementById('addEffectButton').style.display = 'none';
    }

    updateCustomCard();
}

function updateConditionOptions(conditionSelect) {
    const conditionType = conditionSelect.value;
    const conditionPart = conditionSelect.parentElement;

    let conditionDetails = conditionPart.querySelector(".condition-details");
    if (!conditionDetails) {
        conditionDetails = document.createElement("div");
        conditionDetails.classList.add("condition-details");
        conditionPart.appendChild(conditionDetails);
    }

    conditionDetails.innerHTML = ""; // 초기화
    generateFields(conditionDetails, v1Structure, conditionType);
    if(conditionType != "none") {
	    generateFields(conditionDetails, customStructure.condOp.fields);
	    generateFields(conditionDetails, customStructure.condV2.fields);
	}

    updateCustomCard();
}

function createDetailItem(labelText, dataKey, width, inputType, options = [], defValue = 0, parents = null) {
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("detail-label");
    labelDiv.style.width = "100%";
    labelDiv.style.marginTop = "8px";
    labelDiv.dataset.key = dataKey;

    if (labelText) {
        const label = document.createElement("b");
        label.innerText = `${labelText}:`;
        labelDiv.appendChild(label);
    }

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("detail-item");
    detailDiv.style.width = `calc(${width}% - 24px)`;

    let inputElement;
    if (inputType === "select") {
        inputElement = document.createElement("select");
        inputElement.classList.add("input", "custom-input");
        let _options;
        if (typeof options === 'string' && options == "variableList") {
            _options = variableList;
        } else {
            _options = options;
        }
        _options.forEach(option => {
            if ((!option.condition || checkCondition(option.condition, 0)) && (!option.required || option.required.includes(parents)) && (!option.exclude || !option.exclude.includes(parents))) {
                const optionElement = document.createElement("option");
                optionElement.value = option.value;
                optionElement.innerText = option.text;
                inputElement.appendChild(optionElement);
            }
        });
    } else if (inputType === "input") {
        inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.classList.add("input", "custom-input");
        inputElement.value = defValue;
        if (options[0] !== null) inputElement.min = options[0];
        if (options[1] !== null) inputElement.max = options[1];

        inputElement.oninput = () => {
            const min = options[0] !== null ? options[0] : Number.NEGATIVE_INFINITY;
            const max = options[1] !== null ? options[1] : Number.POSITIVE_INFINITY;

            if (inputElement.value !== "") {
                const value = parseFloat(inputElement.value);
                if (value < min) {
                    inputElement.value = min;
                } else if (value > max) {
                    inputElement.value = max;
                }
            }
        };
    }
    inputElement.dataset.key = dataKey;
    inputElement.onchange = updateCustomCard;
    detailDiv.appendChild(inputElement);

    return { labelElement: labelDiv, element: detailDiv, input: inputElement };
}

function updateEffectOptions(effectSelect) {
    const effectType = effectSelect.value;
    const effectPart = effectSelect.parentElement;

    let effectDetails = effectPart.querySelector(".effect-details");
    if (!effectDetails) {
        effectDetails = document.createElement("div");
        effectDetails.classList.add("effect-details");
        effectPart.appendChild(effectDetails);
    }

    effectDetails.innerHTML = ""; // 초기화

    if (customStructure[effectType]) {
        generateFields(effectDetails, customStructure[effectType].fields);
    }

    updateCustomCard();
}

function generateFields(container, fields, condition = null, insertAfter = null) {
    fields.forEach(field => {
        if (!field.conditions || field.conditions.includes(condition)) {
            let fieldItem;
            fieldItem = createDetailItem(field.label, field.id, field.width, field.type, field.options, field.defValue, condition);

            if(field.label) {
	            insertAfter = insertElement(container, fieldItem.labelElement, insertAfter);
	        }
            insertAfter = insertElement(container, fieldItem.element, insertAfter);

            if (field.subfields) {
                fieldItem.input.onchange = function () {
                    removeSubfields(container, field.subfields);
                    generateFields(container, field.subfields, fieldItem.input.value, fieldItem.element);
    				updateCustomCard();
                };

                removeSubfields(container, field.subfields);
                generateFields(container, field.subfields, fieldItem.input.value, fieldItem.element);
            }
        }
    });
}

// 특정 위치에 요소를 삽입하는 헬퍼 함수
function insertElement(container, element, insertAfter) {
    if (insertAfter && insertAfter.nextSibling) {
        container.insertBefore(element, insertAfter.nextSibling);
        return element;  // 삽입된 요소를 다음 삽입 위치로 반환
    } else {
        container.appendChild(element);
        return element;  // 삽입된 요소를 다음 삽입 위치로 반환
    }
}

function removeSubfields(container, subfields) {
    subfields.forEach(subfield => {
        const elementsToRemove = container.querySelectorAll(`[data-key="${subfield.id}"]`);
        elementsToRemove.forEach(element => element.remove());

        if (subfield.subfields) {
            removeSubfields(container, subfield.subfields);
        }
    });
}



// 전역 배열 customEffects 업데이트 함수
function updateCustomCard() {
	let customClass = "중립";
	let customType = "보조";
    const customEffects = cardDB["BN-HA-001"].effect;
    cardDB["BN-HA-001"].related = [];
    const customRelated = cardDB["BN-HA-001"].related;
    let customCost = 10;
    const effectBlockCount = document.querySelectorAll(".effect-block").length;
    let customCostFinalMultiply = effectBlockCount;
    customEffects.splice(0)  // 기존 데이터를 초기화

    const cardValue = {
    	"all":5,
    	"attack":4, "support":4,
    	"neutral":2, "class":4,
    	"normal":4, "expert":8, "ultimate":15,
    	"penalty":-4,
    	"created":3,
    	"self":10,
    	"nelson":3,
    	"manufacture":4,
    	"spell":5, "instantspell":4, "chantspell":6, "focusedspell":10,
    	"magiccircle":5, "red":7, "blue":7, "yellow":7, "white":10,
    	"jewel":3, "ruby":4, "sapphire":4, "topaz":4,
    	"essence":3, "essence1":4, "essence2":4, "essence3":4, "essence4":4, "essence5":4, "essence6":4, "essence7":4, "essence8":4, "essence9":4,
    	"combination":5,
    	"mix":4,
    }

    document.querySelectorAll(".effect-block").forEach((block, index) => {
        const condType = block.querySelector('select[data-key="trigger"]').value;
        const effectType = block.querySelector('select[data-key="type"]').value;

        const condObject = { "v1":condType, "v1Type":"specific" };
        const effectObject = { "effect":effectType };
        const customEffect = {};

        let customCostAdd = 0;
        let customCostMultiply = 1;
        let customCostBase = 1;
        let maxValue = Infinity;
        

        const condDetails = block.querySelectorAll('.condition-details .custom-input');
        condDetails.forEach(input => {
            const key = input.dataset.key;
            const value = input.value;
            condObject[key] = value;
        });

        if(condType == "none") {
        	customEffect.cond = true;
        } else {
        	let v1Data, v2Data, opData;
        	let _gap = 0;
        	v1Data = calculateVariable("v1", condObject, Infinity);
        	v2Data = calculateVariable("v2", condObject, Infinity);
        	opData = condObject.condOp;
        	customEffect.cond = {v1:v1Data[0], op:opData, v2:v2Data[0]};

        	if(!checkCondition({v1:v1Data[1], op:opData, v2:v2Data[1]}, 1)) {
	        	switch(condObject.condOp) {
	        	case "==":
	        		_gap = Math.abs(v1Data[1] - v2Data[1]) * 2;
	        		break;
	        	case "!=":
	        		_gap = Math.abs(v1Data[1] - v2Data[1]) * 0.5;
	        		break;
	        	case "<":
	        		_gap = Math.max(v1Data[1] - v2Data[1] + 1, 1) * 1.0;
	        		break;
	        	case ">":
	        		_gap = Math.max(v2Data[1] - v1Data[1] + 1, 1) * 1.0;
	        		break;
	        	case "<=":
	        		_gap = Math.max(v1Data[1] - v2Data[1], 0) * 1.0;
	        		break;
	        	case ">=":
	        		_gap = Math.max(v2Data[1] - v1Data[1], 0) * 1.0;
	        		break;
	        	}
	        	customCostMultiply *= 1/(1 + 0.2*_gap);
	        }
        }

        const effectDetails = block.querySelectorAll('.effect-details .custom-input');
        effectDetails.forEach(input => {
            const key = input.dataset.key;
            const value = input.value;
            effectObject[key] = value;
        });
        
        switch(condType) {
        default:
        	customEffect.trigger = "used";
        	break;
        }

        let realRepeat, expectRepeat, expectValue;
        switch(effectType) {
        case "attack":
        	customEffect.type = "attack";
        	customEffect.target = effectObject.target;
        	[ customEffect.repeat, expectRepeat ] = calculateVariable("repeat", effectObject, 3);

        	if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 3;
        	}

        	customCostAdd += 6;
        	customCostMultiply *= expectRepeat > 0?Math.pow(2.2, expectRepeat-1):0;

        	if(effectObject.target == "self") {
        		customCostAdd *= -1;
        	} else {
        		customType = "공격";
        	}
        	break;
        case "excite":
        	customEffect.type = "excite";
        	customEffect.target = effectObject.target;
        	customEffect.op = effectObject.op;
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, Infinity);

        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 5);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?Math.pow(2.2, expectRepeat-1):0;
	        }
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 5;
        	}

    		if(effectObject.op == "add") {
        		customCostAdd = expectValue;
        		if(effectObject.target == "self") {
	        		customCostAdd *= -1;
	        	}
	        	if(effectObject.target == "op" && expectValue > 0) {
	        		customType = "공격";
	        	}
        	}
    		if(effectObject.op == "subtract") {
        		customCostAdd = expectValue;
        		if(effectObject.target == "op") {
	        		customCostAdd *= -1;
	        	}
	        	if(effectObject.target == "op" && expectValue < 0) {
	        		customType = "공격";
	        	}
        	}
    		if(effectObject.op == "set") {
        		if(effectObject.target == "self") {
	        		customCostAdd *= -1;
        			customCostAdd = expectValue - 4;
	        	} else {
        			customCostAdd = expectValue - 2;
	        	}
        	}

    		if(effectObject.op == "multiply") {
        		customEffect.value = 2;
        		customCostAdd = 10;
        		if(effectObject.target == "self") {
	        		customCostAdd *= -1;
	        	}
        	}
        	break;
        case "exciteL":
        	customEffect.type = "exciteL";
        	customEffect.target = effectObject.target;
        	customEffect.op = effectObject.op;
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, Infinity);

        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 3);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 3;
        	}

    		if(effectObject.op == "add") {
        		customCostAdd = expectValue * 4;
        		if(effectObject.target == "op") {
	        		customCostAdd *= -1;
	        	}
	        	if(effectObject.target == "op" && expectValue < 0) {
	        		customType = "공격";
	        	}
        	}
    		if(effectObject.op == "subtract") {
        		customCostAdd = expectValue * 4;
        		if(effectObject.target == "self") {
	        		customCostAdd *= -1;
	        	}
	        	if(effectObject.target == "op" && expectValue > 0) {
	        		customType = "공격";
	        	}
        	}
    		if(effectObject.op == "set") {
        		if(effectObject.target == "self") {
	        		customCostAdd *= -1;
        			customCostAdd = expectValue - 5;
	        	} else {
        			customCostAdd = expectValue - 5;
	        	}
        	}

    		if(effectObject.op == "multiply") {
        		customEffect.value = 2;
        		customCostAdd = 20;
        		if(effectObject.target == "op") {
	        		customCostAdd *= -1;
	        	}
        	}
        	break;
        case "lewd":
        	customEffect.type = "lewd";
        	customEffect.op = effectObject.op;
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, 5);
        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 3);
	        	customEffect.repeat = realRepeat;
	        	customEffect.maxRepeat = 3;
	        	customCostMultiply *= expectRepeat > 0?expectValue*expectRepeat:0;
	        }
	        if(effectObject.valueType == "specific") {
        		customEffect.maxValue = 3;
        	}
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 3;
        	}

    		if(effectObject.op == "add") {
        		customCostAdd = expectValue * 2.5;
        	}
    		if(effectObject.op == "subtract") {
        		customCostAdd = -expectValue * 2.5;
        	}
    		if(effectObject.op == "set") {
        		customCostAdd = (expectValue - 2) * 2.5;
        	}

    		if(effectObject.op == "multiply") {
        		customEffect.value = 2;
        		customCostAdd = 10;
        	}
        	break;
        case "estrus":
        	customEffect.type = "estrus";
        	customEffect.op = effectObject.op;
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, Infinity);

        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, Infinity);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }

    		if(effectObject.op == "add") {
        		customCostAdd = -expectValue * 2;
        	}
    		if(effectObject.op == "subtract") {
        		customCostAdd = expectValue * 2;
        	}
    		if(effectObject.op == "set") {
        		customCostAdd = (4 - expectValue) * 5;
        	}

    		if(effectObject.op == "multiply") {
        		customEffect.value = 2;
        		customCostAdd = -10;
        	}
        	break;
        case "get":
        	customEffect.type = "get";
        	customEffect.target = "self";

        	if(effectObject.value == "manufacture" || effectObject.value == "class" || effectObject.value == "jewel") {
        		customClass = choiceValues.class;
        	}

        	if(effectObject.value == "self") {
        		customEffect.value = "self";
        	} else if(effectObject.value == "nelson") {
        		customClass = choiceValues.class;
        		customEffect.value = "AS-NM-AT-000";
        		//customRelated.push("AS-NM-AT-000");
        	} else if(effectObject.value == "instantspell") {
        		customClass = choiceValues.class;
        		if(effectObject.spellType == "spellslot") {
	        		customEffect.value = `마술슬롯.즉발`
	        		//customRelated.push("ref:즉발슬롯");
	        	}
	        	if(effectObject.spellType == "random") {
	        		customEffect.value = `randomCard(tags, 즉발 마술")`
	        		customCostMultiply *= 0.8;
	        		//customRelated.push("tag:즉발 마술");
	        	}
        	} else if(effectObject.value == "magiccircle") {
        		customClass = choiceValues.class;
        		switch(effectObject.magiccircleType) {
        		case "magiccircle":
        			customEffect.value = `randomCard(tags, 마도진)`;
        			//customRelated.push("tag:마도진");
        			break;
        		case "red":
        			customEffect.value = `MA-MC-001`;
        			//customRelated.push("MA-MC-001");
        			break;
        		case "blue":
        			customEffect.value = `MA-MC-002`;
        			//customRelated.push("MA-MC-002");
        			break;
        		case "yellow":
        			customEffect.value = `MA-MC-003`;
        			//customRelated.push("MA-MC-003");
        			break;
        		case "white":
        			customEffect.value = `MA-MC-004`;
        			//customRelated.push("MA-MC-004");
        			break;
        		}
        	} else if(effectObject.value == "jewel") {
        		customClass = choiceValues.class;
        		switch(effectObject.jewelType) {
        		case "jewel":
        			customEffect.value = `randomCard(tags, 보석)`;
        			//customRelated.push("tag:보석");
        			break;
        		case "ruby":
        			customEffect.value = `MA-JW-003`;
        			//customRelated.push("MA-JW-003");
        			break;
        		case "sapphire":
        			customEffect.value = `MA-JW-002`;
        			//customRelated.push("MA-JW-002");
        			break;
        		case "topaz":
        			customEffect.value = `MA-JW-001`;
        			//customRelated.push("MA-JW-001");
        			break;
        		}
        	} else if(effectObject.value == "essence") {
        		customClass = choiceValues.class;
        		if(effectObject.essenceType == "essence") {
        			customEffect.value = `randomCard(tags, 정수)`;
        			//customRelated.push("tag:정수");
        		} else {
        			customEffect.value = `HE-IN-00${effectObject.essenceType.slice(7)}`;
        			customRelated.push(customEffect.value);
        		}
        	} else {
        		let _param = getCategoryParameter(effectObject.value);
        		customEffect.value = `randomCard(${_param[0]}, ${_param[1]})`;
        	}
        	customCostAdd = cardValue[effectObject.value];

        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, Infinity);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?Math.pow(2.2, expectRepeat-1):0;
	        }
        	break;
        case "maxUse":
        	customEffect.trigger = "selected";
        	customEffect.type = "maxUse";
        	customEffect.target = "self";
        	customEffect.value = 1;

        	customCostFinalMultiply *= 2;
        	break;
        case "changeLust":
        	customClass = choiceValues.class;
        	customEffect.type = "changeLust";
        	customEffect.op = "add";
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, Infinity);
        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, Infinity);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }

    		customCostAdd = expectValue;
        	break;
        case "discard":
        	customClass = choiceValues.class;
        	customEffect.type = "discard";
        	customEffect.target = "self";
        	var _param = getCategoryParameter(effectObject.card);
        	if(effectObject.selectType == "choice") {
        		customEffect.trigger = "choice";
        		let discardCount = 1;
        		if(effectObject.countType == "count") {
        			discardCount = Number(effectObject.count);
        			customCostMultiply *= discardCount;
        		}
        		if(effectObject.countType == "max") {
        			discardCount = `M${effectObject.count}`;
        			customCostMultiply *= Number(effectObject.count) * 0.8;
        		}
        		if(effectObject.countType == "all") {
        			discardCount = 'all';
        			customCostMultiply *= 2.5;
        		}
        		customEffect.range = {
        			category: _param[0], value: _param[1], count: discardCount
        		}
        		customCostAdd = -cardValue[effectObject.card];
        	} else {
        		customEffect.info = {target:`selfDeck.selectCards(${_param[0]}, ${_param[1]}, ${Number(effectObject.count)})`}
        		customCostAdd = -cardValue[effectObject.card] * 1.5;
        		customCostMultiply *= Number(effectObject.count);
        	}
        	break;
        case "changeWetness":
        	customClass = choiceValues.class;
        	customEffect.type = "changeWetness";
        	customEffect.op = "add";
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, 5);
        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 3);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 3;
        	}

    		customCostAdd = expectValue * 4;
        	break;
        case "changeSBlock":
        	customClass = choiceValues.class;
        	customEffect.type = "changeSBlock";
        	customEffect.op = "add";
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, 5);
        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 3);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 3;
        	}

    		customCostAdd = expectValue * 3;
        	break;
        case "transform":
        	customClass = choiceValues.class;
        	customEffect.type = "transform";
        	customEffect.target = "self";
        	var _param, _value;
        	if(effectObject.range == "magiccircle") {
        		_param = getCategoryParameter(effectObject.magiccircleRange);
        		customCostMultiply *= 5/cardValue[effectObject.magiccircleRange];
        	} else {
	        	_param = getCategoryParameter(effectObject.range);
        		customCostMultiply *= 5/cardValue[effectObject.range];
	        }
	        if(effectObject.value == "magiccircle") {
	        	switch(effectObject.magiccircleType) {
	        	case "magiccircle":
	        		_value = `randomCard(tags, 마도진)`;
	        		break;
	        	case "red":
	        		_value = `MA-MC-001`;
	        		break;
	        	case "blue":
	        		_value = `MA-MC-002`;
	        		break;
	        	case "yellow":
	        		_value = `MA-MC-003`;
	        		break;
	        	case "white":
	        		_value = `MA-MC-004`;
	        		break;
	        	}
        		customCostAdd = cardValue[effectObject.magiccircleType];
	        } else {
        		customCostAdd = cardValue[effectObject.value];
	        	if(effectObject.spellType == "spellslot") {
	        		_value = `마술슬롯.${(effectObject.value == "focusedspell")?"집중":"영창"}`
	        		
	        	}
	        	if(effectObject.spellType == "random") {
	        		_value = `randomCard(tags, ${(effectObject.value == "focusedspell")?"집중 마술":"영창 마술"})`
	        		customCostMultiply *= 0.8;
	        	}
	        }
        	if(effectObject.selectType == "choice") {
        		customEffect.trigger = "choice";
        		let transformCount = 1;
        		if(effectObject.countType == "count") {
        			transformCount = Number(effectObject.count);
        			customCostMultiply *= transformCount;
        		}
        		if(effectObject.countType == "max") {
        			transformCount = `M${effectObject.count}`;
        			customCostMultiply *= Number(effectObject.count) * 1.2;
        		}
        		if(effectObject.countType == "all") {
        			transformCount = 'all';
        			customCostMultiply *= 2.5;
        		}
        		customEffect.range = {
        			category: _param[0], value: _param[1], count: transformCount
        		}
        		customEffect.info = {value:_value};
        	} else {
        		customEffect.info = {target:`selfDeck.selectCards(${_param[0]}, ${_param[1]}, ${Number(effectObject.count)})`, value:_value}
        		customCostMultiply *= Number(effectObject.count);
        	}
        	break;
        case "changeCorrupt":
        	customClass = choiceValues.class;
        	customEffect.type = "changeCorrupt";
        	customEffect.op = "add";
        	[ customEffect.value, expectValue ] = calculateVariable("value", effectObject, 3);
	        if(effectObject.valueType == "specific") {
        		customEffect.maxValue = 3;
        	}
        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 3);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 3;
        	}

    		customCostAdd = expectValue * 3;
        	break;
        case "combine":
        	customClass = choiceValues.class;
        	customEffect.type = "combine";
        	customEffect.target = "self";
        	customEffect.trigger = "choice";
        	customEffect.value = "BN-HA-001-2";
        	var _param = getCategoryParameter(effectObject.range);
    		let combineCount = 1;
    		if(effectObject.countType == "count") {
    			combineCount = Number(effectObject.count);
    			customCostMultiply *= combineCount;
    		}
    		if(effectObject.countType == "max") {
    			combineCount = `M${effectObject.count}`;
    			customCostMultiply *= Number(effectObject.count) * 1.2;
    		}
    		customEffect.range = {
    			category: _param[0], value: _param[1], count: combineCount
    		}
    		customCostAdd = cardValue[effectObject.range];
        	break;
        case "state":
        	customClass = choiceValues.class;
        	customEffect.type = "state";
        	switch(effectObject.stateType) {
        	case "poison":
        		customEffect.type = "use";
        		customEffect.value = "randomCard(tags, 제조)";
        		customCostAdd = 6;
        		break;
        	case "frozen":
        		customEffect.target = "op";
        		customEffect.byname = true;
        		customEffect.value = "MA-ST-002";
        		customCostAdd = 3;
        		break;
        	case "absorption":
        		customEffect.target = "self";
        		customEffect.value = "BN-HA-001-1";
        		customCostAdd = 6;
        		break;
        	}
        	if(effectObject.repeat) {
	        	[ realRepeat, expectRepeat ] = calculateVariable("repeat", effectObject, 5);
	        	customEffect.repeat = realRepeat;
	        	customCostMultiply *= expectRepeat > 0?expectRepeat:0;
	        }
	        if(effectObject.repeatType == "specific") {
        		customEffect.maxRepeat = 5;
        	}
        	break;
        case "stack":
        	customEffect.type = "stack";
        	customEffect.op = "add";
        	customEffect.info = {target:"selfCard"}
        	customEffect.value = Number(effectObject.value);
	        customCostAdd = 2;
	        customCostMultiply = customEffect.value;
        	break;
        default:
        	customEffect.type = effectType;
        	break;
        }

        function getCategoryParameter(category) {
		    switch (category) {
		        case "all":
		            return ["all", "null"];
		        case "attack":
		            return ["type", "공격"];
		        case "support":
		            return ["type", "보조"];
		        case "neutral":
		            return ["class", "중립"];
		        case "class":
		            return ["class", choiceValues.class];
		        case "normal":
		            return ["rarity", "일반"];
		        case "expert":
		            return ["rarity", "숙련"];
		        case "ultimate":
		            return ["rarity", "궁극"];
		        case "penalty":
		            return ["type", "패널티"];
		        case "created":
		            return ["tags", "생성됨"];
		        case "nelson":
		            return ["id", "AS-NM-AT-000"];
		        case "manufacture":
		            return ["tags", "제조"];
		        case "spell":
		            return ["tags", "마술"];
		        case "magiccircle":
		            return ["tags", "마도진"];
		        case "red":
		            return ["id", "MA-MC-001"];
		        case "blue":
		            return ["id", "MA-MC-002"];
		        case "yellow":
		            return ["id", "MA-MC-003"];
		        case "white":
		            return ["id", "MA-MC-004"];
		        case "jewel":
		            return ["tags", "보석"];
		        case "essence":
		            return ["tags", "정수"];
		        case "combination":
		            return ["tags", "결합물"];
		        case "mix":
		        	return ["mix", "all"]
		        default:
		            return [null, null]; // 지정된 카테고리가 없을 경우 [null, null] 반환
		    }
		}


        function calculateVariable(valueName, object, maxValue) {
        	let realValue, expectValue;
	        function repeatCardCount(category, amount, target) {
				switch(category) {
				case "all":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 10;
						} else {
							expectValue *= 10;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 10;
						} else {
							expectValue *= 8;
						}
					}
					break;
				case "attack":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 5;
						} else {
							expectValue *= 7;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 5;
						} else {
							expectValue *= 5;
						}
					}
					break;
				case "support":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 4;
						} else {
							expectValue *= 3;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 4;
						} else {
							expectValue *= 3;
						}
					}
					break;
				case "neutral":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "class":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 8;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 8;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "normal":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 4;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 4;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "expert":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 3;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 3;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "ultimate":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "penalty":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "created":
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 1;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 1;
						}
					}
					break;
				case "nelson":
	            	customClass = choiceValues.class;
					if(target == 1) {
						expectValue *= 2;
					} else {
						expectValue *= 0;
					}
					break;
				case "spell":
					customClass = choiceValues.class;
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "magiccircle":
					customClass = choiceValues.class;
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "jewel":
					customClass = choiceValues.class;
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 1;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "essence":
					customClass = choiceValues.class;
					if(amount == "count") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 0;
						}
					} else if(amount == "kind") {
						if(target == 1) {
							expectValue *= 2;
						} else {
							expectValue *= 0;
						}
					}
					break;
				case "combination":
					customClass = choiceValues.class;
					if(target == 1) {
						expectValue *= 1;
					} else {
						expectValue *= 0;
					}
					break;
				}

	        	let _param = getCategoryParameter(object[`${valueName}Card`]);
				if(amount == "kind") {
					return `.countType(${_param[0]}, ${_param[1]})`;
				} else {
					return `.count(${_param[0]}, ${_param[1]})`;
				}
			}

	    	if(object[`${valueName}Type`] == "constant") {
    			realValue = Number(object[valueName]);
    			expectValue = Number(object[valueName]);
	    	} else if(object[`${valueName}Type`] == "specific") {
	    		switch(object[valueName]) {
	    		case "lewd":
	    			realValue = "음란";
	    			expectValue = 4
	    			break;
	    		case "estrus":
	    			realValue = "발정";
	    			expectValue = 5
	    			break;
	    		case "excite":
	    			switch(object[`${valueName}ExciteDetail`]) {
					case "current":
						realValue = object[`${valueName}Target`] == "self"?"자신.흥분":"상대.흥분";
	    				expectValue = 3
						break;
					case "delayed":
						customClass = choiceValues.class;
						realValue = "지연흥분";
	    				expectValue = 3
						break;
					case "remaining":
	    				realValue = object[`${valueName}Target`] == "self"?"자신.남은흥분":"상대.남은흥분";
						if(object[`${valueName}Target`] == "self") {
							expectValue = 4
						}
						if(object[`${valueName}Target`] == "op") {
							expectValue = 8
						}
						break;
					case "thisTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이번.이벤트.흥분." + (object[`${valueName}ExciteChange`] == "increase"?"증가":"감소");
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 0.5;
	    				}
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 0.5;
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 0.8;
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 0.2;
	    				}
						break;
					case "lastTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이전.이벤트.흥분." + (object[`${valueName}ExciteChange`] == "increase"?"증가":"감소");
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 5
	    				}
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 3
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 3
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 0.5;
	    				}
						break;
					case "recentTurn":
						customClass = choiceValues.class;
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.최근.이벤트.흥분." + (object[`${valueName}ExciteChange`] == "increase"?"증가":"감소");
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 6
	    				}
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 4
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 5
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 0.6;
	    				}
						break;
					case "all":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.전체.이벤트.흥분." + (object[`${valueName}ExciteChange`] == "increase"?"증가":"감소");
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 10
	    				}
	    				if(object[`${valueName}Target`] == "self" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 5
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "increase") {
	    					expectValue = 10
	    				}
	    				if(object[`${valueName}Target`] == "op" && object[`${valueName}ExciteChange`] == "recover") {
	    					expectValue = 1;
	    				}
						break;
	    			}
	    			break;
	    		case "exciteL":
	    			realValue = object[`${valueName}Target`] == "self"?"자신.흥분한계":"상대.흥분한계";
					if(object[`${valueName}Target`] == "self") {
						expectValue = 5
					}
					if(object[`${valueName}Target`] == "op") {
						expectValue = 10
					}
	    			break;
	    		case "deck":
	    			realValue = object[`${valueName}Target`] == "self"?"자기덱":"상대덱";
	    			expectValue = 1;
	    			realValue += repeatCardCount(object[`${valueName}Card`], object[`${valueName}CardAmount`], object[`${valueName}Target`] == "self"?1:0);
	    			break;
	    		case "state":
	    			switch(object[`${valueName}State`]) {
	    			case "poison":
	    				customClass = choiceValues.class;
	    				realValue = `상대.상태.count(tags, 독)`;
	    				expectValue = 0.9;
	    				break;
	    			case "frozen":
	    				customClass = choiceValues.class;
	    				realValue = `상대.상태.count(id, MA-ST-002)`;
	    				expectValue = 0.6;
	    				break;
	    			}
	    			break;
	    		case "use":
	    			switch(object[`${valueName}Time`]) {
					case "thisTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이번.사용";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.1;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "lastTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이전.사용";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.2;
	    				} else {
	    					expectValue = 0.1;
	    				}
						break;
					case "recentTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.최근.사용";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.3;
	    				} else {
	    					expectValue = 0.1;
	    				}
						break;
					case "all":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.전체.사용";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.8;
	    				} else {
	    					expectValue = 0.8;
	    				}
						break;
	    			}
	    			realValue += repeatCardCount(object[`${valueName}Card`], object[`${valueName}CardAmount`], object[`${valueName}Target`] == "self"?1:0);
	    			break;
	    		case "get":
	    			switch(object[`${valueName}Time`]) {
					case "thisTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이번.이벤트.획득";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.1;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "lastTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이전.이벤트.획득";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.2;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "recentTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.최근.이벤트.획득";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.3;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "all":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.전체.이벤트.획득";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.6;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
	    			}
	    			realValue += repeatCardCount(object[`${valueName}Card`], object[`${valueName}CardAmount`], object[`${valueName}Target`] == "self"?1:0);
	    			break;
	    		case "discard":
	    			customClass = choiceValues.class;
	    			switch(object[`${valueName}Time`]) {
					case "thisTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이번.버림";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.05;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "lastTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.이전.버림";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.1;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "recentTurn":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.최근.버림";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.15;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
					case "all":
	    				realValue = (object[`${valueName}Target`] == "self"?"자신.":"상대.") + "기록.전체.버림";
	    				if(object[`${valueName}Target`] == "self") {
	    					expectValue = 0.3;
	    				} else {
	    					expectValue = 0;
	    				}
						break;
	    			}
	    			realValue += repeatCardCount(object[`${valueName}Card`], object[`${valueName}CardAmount`], object[`${valueName}Target`] == "self"?1:0);
	    			break;
	    		case "lust":
	    			customClass = choiceValues.class;
	    			if(object[`${valueName}Lust`] == "current") {
	    				realValue = "욕망";
	    				expectValue = 5
	    			}
	    			if(object[`${valueName}Lust`] == "consumed") {
	    				realValue = "소모욕망";
	    				expectValue = 3
	    			}
	    			break;
	    		case "wetness":
	    			customClass = choiceValues.class;
	    			realValue = "젖음";
	    			expectValue = 3
	    			break;
	    		case "sBlock":
	    			customClass = choiceValues.class;
	    			realValue = "감각차단";
	    			expectValue = 5
	    			break;
	    		case "corrupt":
	    			customClass = choiceValues.class;
	    			realValue = "타락";
	    			expectValue = 4
	    			break;
	    		case "round":
	    			realValue = "라운드";
	    			expectValue = 4
	    			break;
	    		case "stack":
	    			realValue = "stack";
	    			expectValue = 2
	    			break;
	    		}
	    	}
	    	return [ realValue, Math.min(expectValue, maxValue) ];
	    }

        customEffects.push(customEffect);
    	customCost += customCostAdd * customCostMultiply;
    });
    console.log(customEffects);
    customCost = Math.max(Math.round(customCost*customCostFinalMultiply/5)*5, 10);
    cardDB["BN-HA-001"].cost = customCost;
	cardDB["BN-HA-001"].class = customClass;
	cardDB["BN-HA-001"].type = customType;

    const costDiv = document.getElementById('selectCustomCard').querySelector("p.card-cost");
	costDiv.innerHTML = "<b>"+((customCost<0)?"+":"")+(-customCost)+"pt</b>";
	if(customCost<0) {
		costDiv.style.color = "rgba(0, 128, 0, 1)"
	} else {
		costDiv.style.color = "";
	}
    cardTextUpdate(document.getElementById('selectCustomCard').querySelector("div.card"), cardDB["BN-HA-001"]);
}

const tooltip = document.getElementById('tooltip');

let currentHoverElement = null;

function displayTooltip(event, keywords) {
	if(window.screen.width < 768 || player.state.some(st => st.id == "B6-SU-003-1")) {
		return;
	}
    tooltip.innerHTML = '';
    let _first = true;

    function createInfoDiv(name, desc) {
		const infoDiv = document.createElement('div');
        if(!_first) {
            infoDiv.style.marginTop = "16px"
        }
        
        const nameElement = document.createElement('div');
        nameElement.innerHTML = name;
        nameElement.style.fontWeight = 'bold';
        infoDiv.appendChild(nameElement);

        const descElement = document.createElement('div');
        descElement.innerHTML = desc;
        infoDiv.appendChild(descElement);

        _first = false;
        return infoDiv;
    }

    if (typeof keywords === "string") {
	    let statTooltipData, statName;
        switch(keywords) {
        case "lewd":
        	statTooltipData = statTooltips.lewd;
        	statName = "음란";
        	break;
        case "estrus":
        	statTooltipData = statTooltips.estrus;
        	statName = "발정";
        	break;
        case "player.exciteL":
        	statTooltipData = statTooltips.player.exciteL;
        	statName = "흥분 한계";
        	break;
        case "player.orgasmL":
        	statTooltipData = statTooltips.player.orgasmL;
        	statName = "절정 한계";
        	break;
        case "enemy.exciteL":
        	statTooltipData = statTooltips.enemy.exciteL;
        	statName = "흥분 한계";
        	break;
        case "enemy.orgasmL":
        	statTooltipData = statTooltips.enemy.orgasmL;
        	statName = "절정 한계";
        	break;
        }
    	if(statTooltipData.set) {
        	const infoDiv = createInfoDiv(cardDB[statTooltipData.set.id].name[language], `${statName} = ${statTooltipData.set.value}`);
            tooltip.appendChild(infoDiv);
    	} else {
        	if(statTooltipData.add.length > 0) {
        		statTooltipData.add.forEach(statTooltip => {
        			const infoDiv = createInfoDiv(cardDB[statTooltip.id].name[language], `${statName} ${statTooltip.value > 0?"+":""}${statTooltip.value}`);
	            	tooltip.appendChild(infoDiv);
        		});
        	}
        	if(statTooltipData.multiply.length > 0) {
        		statTooltipData.multiply.forEach(statTooltip => {
        			const infoDiv = createInfoDiv(cardDB[statTooltip.id].name[language], `${statName} ×${statTooltip.value}`);
	            	tooltip.appendChild(infoDiv);
        		});
        	}
        }
    	if(statTooltipData.extra.length > 0) {
    		statTooltipData.extra.forEach(statTooltip => {
    			let statDesc = "";
    			switch(statTooltip.value) {
    			case "immune":
    				statDesc = "<b>흥분</b>이 증가하지 않는다.";
    				break;
    			case "orgasmBan":
    				statDesc = "<b>절정</b>하지 않는다.";
    				break;
    			case "suppression":
    				statDesc = "<b>흥분</b>으로는 <b>절정</b>하지 않는다.";
    				break;
    			case "insensitive":
    				statDesc = "<b>흥분</b> 외의 수단으로 <b>절정</b>하지 않는다.";
    				break;
    			}
    			const infoDiv = createInfoDiv(cardDB[statTooltip.id].name[language], statDesc);
            	tooltip.appendChild(infoDiv);
    		});
    	}

    	if(_first) {
    		return;
    	}
    } else if(Array.isArray(keywords)) {
	    keywords.forEach(keyword => {
	        let keywordInfo;
	        if(keyword.startsWith("id:")) {
	        	let cardId = keyword.slice(3);
	        	keywordInfo = { name:cardDB[cardId].name, desc:{} };
	        	keywordInfo.desc[language] = createCardText(cardDB[cardId]).replace(/<\/?(?!br\b)[^>]*>/gi, '');
	        } else {
		        keywordInfo = keywordDict[keyword];
		    }
	        if (keywordInfo) {
	        	const infoDiv = createInfoDiv(keywordInfo.name[language], keywordInfo.desc[language]);
	            tooltip.appendChild(infoDiv);
	        }
    	});
	}
    
    tooltip.style.display = 'block';

    // 위치 설정
    const cardRect = event.target.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let left = cardRect.right + 10;
    let top = cardRect.top + window.scrollY;

    // 화면의 우측 공간이 부족한 경우 좌측에 띄움
    if (left + tooltipWidth > window.innerWidth) {
        left = cardRect.left - tooltipWidth - 10;
    }

    // 화면의 상단 경계를 벗어나는 경우
	if (top < window.scrollY) {
	    top = window.scrollY + 10;
	}

	// 화면의 하단 경계를 벗어나는 경우
	if (top + tooltipHeight > window.scrollY + window.innerHeight) {
	    top = window.scrollY + window.innerHeight - tooltipHeight - 10;
	}

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    tooltip.classList.add('visible');
}

function hideTooltip() {
    tooltip.classList.remove('visible');
    tooltip.style.display = 'none';
    currentHoverElement = null;
}

document?.addEventListener('mousemove', function (e) {
    if (currentHoverElement && !currentHoverElement.contains(e.target) && !tooltip.contains(e.target)) {
        hideTooltip();
    }
});

function infoTextData() {
	return { "name":player.name, "surName":player.surname, "fullName":playerName, "class":getWord(choiceValues.class) };
}


const encryptionKey = "hypnosisArena";

// AES 암호화 (CryptoJS 사용)
function encryptData(data) {
	return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
}

// AES 복호화
function decryptData(encryptedData) {
	const bytes = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
	return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

// 모달 초기화 및 동적 내용 추가
function dataModalOpen() {
	modal.innerHTML = ''; // 초기화
	modal.style.display = 'flex';

	const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.background = 'var(--color-background)'
    modal.appendChild(modalContent);

	// 동적 UI 추가
	const exportButton = document.createElement("div");
    exportButton.className = 'box button';
    exportButton.textContent = "💾 | Export Data";
    exportButton.style.fontSize = '18px';
	exportButton.onclick = exportData;

	const importButton = document.createElement("div");
    importButton.className = 'box button';
    importButton.textContent = "📂 | Import Data ";
    importButton.style.fontSize = '18px';
	importButton.onclick = importData;

	const buttonLine = document.createElement("hr");

	const resetButton = document.createElement("div");
    resetButton.className = 'box button active';
    resetButton.textContent = "🗑️ | Clear Data";
    resetButton.style.fontSize = '18px';
	resetButton.onclick = clearData;

	modalContent.appendChild(exportButton);
	modalContent.appendChild(importButton);
	modalContent.appendChild(buttonLine);
	modalContent.appendChild(resetButton);
}

// 데이터 내보내기
function exportData() {
	const data = {};
	for (const key in localStorage) {
		if (localStorage.hasOwnProperty(key)) {
			data[key] = localStorage[key];
		}
	}

	const encryptedData = encryptData(data);
	const blob = new Blob([encryptedData], { type: "text/plain" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "hypnosisArena.sav";
	link.click();
	URL.revokeObjectURL(url);
}

// 데이터 불러오기
function importData() {
	const input = document.createElement("input");
	input.type = "file";
	input.accept = ".sav";
	input.onchange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				try {
					const encryptedData = e.target.result;
					const data = decryptData(encryptedData);

					// 로컬 스토리지에 데이터 저장
					for (const key in data) {
						localStorage.setItem(key, data[key]);
					}

					alert("The data has been successfully loaded.");
					location.reload(); // 새로고침
				} catch (error) {
					alert("An error occurred while loading the file.");
				}
			};
			reader.readAsText(file);
		}
	};
	input.click();
}

function clearData() {
	if (confirm("Are you sure you want to delete all data?")) {
		localStorage.clear();
		alert("All data has been deleted.");
		location.reload(); // 새로고침
	}
}
// Button click event
document.getElementById("manage-data")?.addEventListener("click", dataModalOpen);

function combatConfigModalOpen() {
    modal.innerHTML = ''; // Clear
    modal.style.display = 'flex';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.background = 'var(--color-background)';
    modalContent.style.display = 'flex';
    modalContent.style.flexWrap = 'wrap'; // Use Flexbox for a 2-column layout
    modalContent.style.justifyContent = 'space-between'; // Evenly distribute space between blocks
    modalContent.style.gap = '20px'; // Add a gap between blocks
    modal.appendChild(modalContent);

    // Add header
    const modalHeader = document.createElement("h2");
    modalHeader.textContent = "Settings";
    modalHeader.style.textAlign = "center";
    modalHeader.style.width = "100%"; // Header takes up the full width
    modalHeader.style.marginBottom = "20px";
    modalContent.appendChild(modalHeader);

    // Option 1: Dialogue display toggles
    const dialogueToggleSection = createSection("Dialogue Display Settings", [
        createToggle("Show dialogue for specific card effects", "line_useCard", true),
        createToggle("Show special event dialogue", "line_event", true),
        (() => {
        	const header = document.createElement("h3");
		    header.style.textAlign = "center";
		    header.textContent = "Combat Log Display Settings";
		    header.style.marginBottom = "15px";

		    return header;
        })(),
        createToggle("Show dialogue in combat log", "log_line", true, (newState) => {
	        Array.from(document.getElementsByClassName('lineLog')).forEach(l => l.style.display = newState?'block':'none');
	        document.getElementById("lineLogCheckbox").checked = newState;
	    }),
        createToggle("Show card effects in combat log", "log_effect", true, (newState) => {
	        Array.from(document.getElementsByClassName('effectTextLog')).forEach(l => l.style.display = newState?'block':'none');
	        document.getElementById("effectTextLogCheckbox").checked = newState;
	    })
    ]);

    // Option 2: Dialogue speed slider
    const dialogueSpeedSection = createSection("Dialogue Speed", [
        createFixedSlider(
	        "Dialogue Speed", "line_speed", [80, 50, 30, 20, 10], ["Very Slow", "Slow", "Normal", "Fast", "Very Fast"], 2
	    ),
	    createFixedSlider(
	        "Dialogue Display Time",
	        "line_time",
	        [500, 1000, 2000, 3000, Infinity],
	        ["0.5s", "1s", "2s", "3s", "Until Skipped"],
	        1,
	        "Test", (button) => addLine(line["Test"], button)
		)
    ]);
    const testMessageContainer = document.createElement("div");
    testMessageContainer.id = "testMessageContainer";
    dialogueSpeedSection.appendChild(testMessageContainer);

    // Option 3: Card wait settings
    const cardWaitSection = createSection("Card Display Time Settings", [
        (() => {
            const wrapper = document.createElement("div");

            const cardWaitDropdown = document.createElement("select");
            ["Always", "Once", "None"].forEach(optionText => {
                const option = document.createElement("option");
                option.value = optionText;
                option.textContent = optionText;
                cardWaitDropdown.appendChild(option);
            });
            cardWaitDropdown.value = combatOptions.cardWait_mode; // global variable
            cardWaitDropdown.onchange = () => {
                combatOptions.cardWait_mode = cardWaitDropdown.value;
                if(cardWaitSliderSection.classList.contains("disabled") ^ cardWaitDropdown.value == "None") {
		            cardWaitSliderSection.classList.toggle("disabled");
		        }
            };

            const cardWaitSliderSection = createFixedSlider(
		        "Card Display Time",
		        "cardWait_time",
		        [500, 1000, 1500, 2000, 2500, 3000],
		        ["0.5s", "1s", "1.5s", "2s", "2.5s", "3s"],
		        1
		    );
            if(cardWaitSliderSection.classList.contains("disabled") ^ cardWaitDropdown.value == "None") {
	            cardWaitSliderSection.classList.toggle("disabled");
	        }

            wrapper.appendChild(cardWaitDropdown);
            wrapper.appendChild(cardWaitSliderSection);

            return wrapper;
        })()
    ]);

    // Option 4: Animation settings
    const animationSection = createSection("Animation Settings", [
        //createToggle("Show animations", "animation_show", true),
        createFixedSlider(
	        "Animation Speed", // Label text
	        "animation_speed", // Global variable name
	        [4, 3, 2, 1, 0], // Fixed values (in ms)
	        ["Very Slow", "Slow", "Normal", "Fast", "Very Fast"], // Display text
	        2
	    ),
	    createSampleAnimation()
    ]);

    // Add sections
    [dialogueToggleSection, dialogueSpeedSection, cardWaitSection, animationSection].forEach(section => {
        modalContent.appendChild(section);
    });
}

// 섹션 생성 함수 (부제목과 블럭 그룹)
function createSection(title, elements) {
    const section = document.createElement("div");
    section.style.flex = "1 1 calc(50% - 40px)"; // 2열 배치를 위한 너비 설정
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.padding = "15px";
    //section.style.border = "1px solid var(--color-border)";
    section.style.borderRadius = "5px";
    section.style.backgroundColor = "var(--color-box)";
    section.style.gap = "8px";
    section.style.overflow = "hidden";

    const header = document.createElement("h3");
    header.style.textAlign = "center";
    header.textContent = title;
    header.style.marginBottom = "15px";
    section.appendChild(header);

    elements.forEach(el => section.appendChild(el));

    return section;
}

// 공통 토글 생성 함수
function createToggle(labelText, variableName, defaultValue, onChangeCallback = () => {}) {
    const wrapper = document.createElement("label");
    wrapper.style.display = "flex";
    wrapper.style.marginBottom = "8px";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = combatOptions[variableName] ?? defaultValue;
    input.onchange = () => {
        combatOptions[variableName] = input.checked;
        onChangeCallback(input.checked);
    };

    wrapper.appendChild(input);
    wrapper.append(` ${labelText}`);
    return wrapper;
}

// 공통 슬라이더 생성 함수
function createSlider(labelText, variableName, min, max, defaultValue, buttonText = null, buttonCallback = null) {
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "10px";

    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.marginBottom = "5px";
    label.style.display = "block";

    const sliderContainer = document.createElement("div");
    sliderContainer.style.display = "flex";
    sliderContainer.style.alignItems = "center";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = min;
    slider.max = max;
    slider.value = combatOptions[variableName] ?? defaultValue;
    slider.style.marginRight = "10px";
    slider.oninput = () => {
        combatOptions[variableName] = slider.value;
        numberInput.value = slider.value;
    };

    const numberInput = document.createElement("input");
    numberInput.type = "number";
    numberInput.min = min;
    numberInput.max = max;
    numberInput.value = combatOptions[variableName] ?? defaultValue;
    numberInput.style.width = "60px";
    numberInput.onchange = () => {
        const newValue = Math.min(Math.max(numberInput.value, min), max); // 범위 제한
        combatOptions[variableName] = newValue;
        slider.value = newValue;
    };

    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(numberInput);

    wrapper.appendChild(label);
    wrapper.appendChild(sliderContainer);

    if (buttonText && buttonCallback) {
        const button = document.createElement("div");
        button.className = "box button active";
        button.textContent = buttonText;
        button.onclick = async (event) => {
		    await wait(1);
		    buttonCallback(event.target);
		}
        button.style.padding = "8px";
        button.style.width = "20%";
        wrapper.appendChild(button);
    }

    return wrapper;
}

function createFixedSlider(labelText, variableName, fixedValues, labels, defaultIndex, buttonText = null, buttonCallback = null) {
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "10px";

    const label = document.createElement("label");
    label.textContent = labelText;
    label.style.marginBottom = "5px";
    label.style.display = "block";

    const sliderContainer = document.createElement("div");
    sliderContainer.style.display = "flex";
    sliderContainer.style.alignItems = "center";

    // 슬라이더 초기값을 전역 변수에서 가져옴, 없으면 기본값 사용
    const currentValue = combatOptions[variableName] ?? fixedValues[defaultIndex];
    const currentIndex = fixedValues.indexOf(currentValue);

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = fixedValues.length - 1; // 고정된 값의 인덱스 범위
    slider.value = currentIndex >= 0 ? currentIndex : defaultIndex; // 유효한 인덱스인지 확인
    slider.style.marginRight = "10px";

    // 설명 텍스트 표시
    const description = document.createElement("span");
    description.textContent = labels[currentIndex]; // 기본값에 해당하는 설명
    description.style.marginLeft = "10px";
    description.style.display = "inline-block";
    description.style.width = "100px"; // 너비 고정
    description.style.textAlign = "right"; // 우측 정렬

    slider.oninput = () => {
        const index = parseInt(slider.value, 10); // 현재 슬라이더 위치
        combatOptions[variableName] = fixedValues[index]; // 전역 변수 업데이트
        description.textContent = labels[index]; // 설명 텍스트 업데이트
    };

    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(description);

    wrapper.appendChild(label);
    wrapper.appendChild(sliderContainer);

    if (buttonText && buttonCallback) {
        const button = document.createElement("div");
        button.className = "box button active";
        button.textContent = buttonText;
        button.onclick = async (event) => {
		    await wait(1);
		    buttonCallback(event.target);
		}
        button.style.padding = "8px";
        button.style.width = "20%";
        wrapper.appendChild(button);
    }

    return wrapper;
}

function createSampleAnimation() {
	const wrapper = document.createElement("div");
	for(let i=0; i<=4; i++) {
		const sampleInstance = document.createElement("div");
		sampleInstance.className = "box active"
		sampleInstance.style.display = "inline-block";
		sampleInstance.style.width = "0px";
		sampleInstance.style.marginRight = "16px";

		sampleAnimation(sampleInstance, i);
		wrapper.appendChild(sampleInstance);
	}

	async function sampleAnimation(div, caseNum) {
		switch(caseNum) {
		case 0:
			turnSpeed = combatOptions.animation_speed;
			await animationAppear(div);
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			turnSpeed = combatOptions.animation_speed;
			await animationDisappear(div);
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			break;
		case 1:
			turnSpeed = combatOptions.animation_speed;
			await animationShake(div);
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			turnSpeed = combatOptions.animation_speed;
			await animationEmphasis(div, 1.2);
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			turnSpeed = combatOptions.animation_speed;
			await animationDiffusion(div, 1.2);
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			break;
		case 2:
			turnSpeed = combatOptions.animation_speed;
			await animationXscale(div, 1, 0);
			await animationXscale(div, 0, 1);
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			turnSpeed = combatOptions.animation_speed;
			await animationBounce(div, 'up');
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			break;
		case 3:
			turnSpeed = combatOptions.animation_speed;
			await animationFloatIn(div, "down");
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			turnSpeed = combatOptions.animation_speed;
			await animationFloatOut(div, "up");
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			break;
		case 4:
			turnSpeed = combatOptions.animation_speed;
			await animationFlyIn(div, "right");
			await wait([200, 300, 500, 750, 1000][combatOptions.animation_speed]);
			turnSpeed = combatOptions.animation_speed;
			await animationFlyAway(div, "right");

			break;
		}

		setTimeout(() => sampleAnimation(div, caseNum), 0);
	}

	return wrapper;
}

function copyDivContent(div) {
    // div 복사본 생성
    const clonedDiv = div.cloneNode(true);

    // 모든 요소 순회하며 텍스트 노드를 래핑
    const wrapTextNodes = (node) => {
        node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                // 텍스트 노드 래핑
                const span = document.createElement('span');
                span.textContent = child.textContent;
                span.style.backgroundColor = 'transparent'; // 배경색 제거
                child.replaceWith(span);
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                wrapTextNodes(child); // 재귀적으로 처리
            }
        });
    };

    wrapTextNodes(clonedDiv);

    // 모든 요소에서 배경 제거
    const elements = clonedDiv.querySelectorAll('*');
    elements.forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        if (computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
            computedStyle.backgroundColor !== 'transparent') {
            el.style.backgroundColor = 'transparent';
        }
        el.style.background = 'none';
    });

    // 최상위 div도 동일 처리
    clonedDiv.style.backgroundColor = 'transparent';
    clonedDiv.style.background = 'none';

    // 복사용 컨테이너 생성
    const tempContainer = document.createElement('div');
    tempContainer.appendChild(clonedDiv);
    document.body.appendChild(tempContainer);

    // 클립보드에 복사
    const range = document.createRange();
    range.selectNodeContents(tempContainer);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        alert('The content has been copied to the clipboard!');
    } catch (err) {
        alert('Copy failed: ' + err);
    }

    // 임시 컨테이너 제거
    document.body.removeChild(tempContainer);
}

function logFold() {
	const logDiv = document.getElementById('end-log-container');
	const logCopyDiv = document.getElementById('end-log-copy');
	const foldText = document.getElementsByClassName('logFold');
	const unfoldText = document.getElementsByClassName('logUnfold');

	if(logDiv.style.display != "none") {
		logDiv.style.display = "none";
		logCopyDiv.style.display = "none";
		for(let fdt of foldText) {
			fdt.style.display = "none";
		}
		for(let ufdt of unfoldText) {
			ufdt.style.display = "inline";
		}
	} else {
		logDiv.style.display = "block";
		logCopyDiv.style.display = "block";
		for(let fdt of foldText) {
			fdt.style.display = "inline";
		}
		for(let ufdt of unfoldText) {
			ufdt.style.display = "none";
		}
	}
}



async function lineTest(options = {}) {
    const playerStates = options.ps || ['순종', '저항', '무지', '적극']; // 기본값 설정
    const gameModes = options.mode || [0, 1]; // hardmode 순서
    const eventNumbers = options.num || ['개전', '흥분', '타락']; // 기본값 설정

    const _tempLineData = {
        ps: choiceValues.ps,
        condition: player.condition,
        gamemode: gamemode
    };

    for (let mode of gameModes) {
        gamemode = mode;
        for (let ps of playerStates) {
            choiceValues.ps = ps;
        	for (let num of eventNumbers) {
                console.log(`현재 실행 중: \n${enemy.name}-이벤트-${num} \n(성격: ${choiceValues.ps}, 모드: ${gamemode == 1?"하드":"일반"})`);

                switch(num) {
                case "개전":
                	switch(ps) {
	                case "순종":
	                case "저항":
	                case "무지":
	                	player.condition = "normal";
	                	break;
	                case "적극":
	                	player.condition = "corrupted";
	                	break;
	                }
                	break;
                case "흥분":
                	switch(ps) {
	                case "순종":
	                case "저항":
	                case "무지":
	                	player.condition = "excited";
	                	break;
	                case "적극":
	                	player.condition = "corrupted";
	                	break;
	                }
                	break;
                case "타락":
                	player.condition = "corrupted";
                	break;
                }

                const eventSkipHandler = (event) => {
                    if (event.key === 'Escape') {
                        eventSkip = true;
                        document.removeEventListener('keydown', eventSkipHandler);
                    }
                };

                document?.addEventListener('keydown', eventSkipHandler);

                changePortrait(player.condition, 1);

                await addLine(line[`${enemy.name}-이벤트-${num}`], null, false);

                eventSkip = false;
                document.removeEventListener('keydown', eventSkipHandler);
                await wait(500);

                const proceed = confirm(`${enemy.name}-이벤트-${num} | (성격: ${choiceValues.ps}, 상태: ${player.condition}, 하드모드: ${gamemode}) 확인.`);
                if (!proceed) {
                    console.log("테스트를 중단합니다.");
                    resetLineData();
                    return;
                }
            }
        }
    }

    resetLineData();
    console.log("모든 이벤트 테스트 완료.");

    function resetLineData() {
        choiceValues.ps = _tempLineData.ps;
        player.condition = _tempLineData.condition;
        gamemode = _tempLineData.gamemode;
    }
}


async function forceLandscape() {
    if (screen.orientation && screen.orientation.lock) {
        try {
            await screen.orientation.lock("landscape"); // 가로 모드 강제
            console.log("가로 모드 강제 성공");
        } catch (error) {
            console.warn("가로 모드 강제 실패 (브라우저 미지원)");
            enforceLandscapeView();
        }
    } else {
        enforceLandscapeView();
    }
}
async function unlockOrientation() {
    if (screen.orientation && screen.orientation.unlock) {
        try {
            screen.orientation.unlock(); // 화면 방향 잠금 해제
            console.log("화면 방향 잠금 해제됨");
        } catch (error) {
            console.warn("화면 방향 잠금 해제 실패 (브라우저 미지원)");
        }
    } else {
        console.warn("orientation.unlock()이 지원되지 않는 브라우저입니다.");
    }

    // 방향 체크 기능 비활성화
    disableOrientationCheck();
}

function enforceLandscapeView() {
    checkOrientation(); // 초기 상태 확인
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
}

function checkOrientation() {
    if (window.matchMedia("(orientation: portrait)").matches) {
        document.getElementById("rotate-message").style.display = "flex";
        document.getElementById("main-content").style.display = "none";
    } else {
        document.getElementById("rotate-message").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }
}

// 🔹 unlock 이후 방향 체크를 완전히 비활성화
function disableOrientationCheck() {
    window.removeEventListener("resize", checkOrientation);
    window.removeEventListener("orientationchange", checkOrientation);

    // rotate-message를 숨기고 더 이상 나타나지 않게 설정
    document.getElementById("rotate-message").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    console.log("화면 방향 체크 기능이 비활성화되었습니다.");
}

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}