const cardTexts = {
	"trigger":{
		"처음으로":{
			"KOR": "<span style=\"color: gray;\">[Activates once]</span> "
		},
		"처음n번":{
			"KOR": "<span style=\"color: gray;\">[Activates {duration} times]</span> "
		},
		"다음으로":{
			"KOR": "<span style=\"color: gray;\">[Activates once]</span> "
		},
		"다음n번":{
			"KOR": "<span style=\"color: gray;\">[Activates {duration} times]</span> "
		},
		"이라운드":{
			"KOR": "For this round, "
		},
		"다음라운드":{
			"KOR": "Until next round, "
		},
		"n라운드":{
			"KOR": "For {amount} rounds, "
		},
		"n라운드후":{
			"KOR": "After {amount} rounds, "
		},
		"결투시작시":{
			"KOR": "<span style=\"color: gray;\">[Start of Duel]</span> "
		},
		"라운드시작시":{
			"KOR": "<span style=\"color: gray;\">[Start of Round]</span> "
		},
		"라운드종료시":{
			"KOR": "<span style=\"color: gray;\">[End of Round]</span> "
		},
		"획득시":{
			"KOR": "<span style=\"color: gray;\">[On Gain]</span> "
		},
		"체위획득시":{
			"KOR": "When you gain this Position, "
		},
		"체위상실시":{
			"KOR": "When you lose this Position, "
		},
		"체위획득상실시":{
			"KOR": "When you gain or lose this Position, "
		},
		"변형될시":{
			"KOR": "<span style=\"color: gray;\">[Transformed]</span> "
		},
		"결합될시":{
			"KOR": "<span style=\"color: gray;\">[Combined]</span> "
		},
		"절정시":{
			"KOR": "On Orgasm, "
		},
		"누군가절정시":{
			"KOR": "When you or the opponent has an Orgasm, "
		},
		"버려질시":{
			"KOR": "<span style=\"color: gray;\">[Discarded]</span> "
		},
		"버릴시":{
			"KOR": "When you discard a card, "
		},
		"만료시":{
			"KOR": "<span style=\"color: gray;\">[Expired]</span> "
		},
		"자극시":{
			"KOR": "When inflicting <b>[Stimulation]</b>, "
		},
		"자극받을시":{
			"KOR": "When receiving <b>[Stimulation]</b>, "
		},
		"상대자극받을시":{
			"KOR": "When the opponent receives <b>[Stimulation]</b>, "
		},
		"누군가자극받을시":{
			"KOR": "When you or the opponent receives <b>[Stimulation]</b>, "
		},
		"회피시":{
			"KOR": "When evading, "
		},
		"사용시":{
			"KOR": "When you play a card, "
		},
		"공격사용시":{
			"KOR": "When you play an Attack card, "
		},
		"보조사용시":{
			"KOR": "When you play a Support card, "
		},
		"체위사용시":{
			"KOR": "When you play a Position card, "
		},
		"패널티사용시":{
			"KOR": "When you play a Penalty card, "
		},
		"사격사용시":{
			"KOR": "When you play a Shot card, "
		},
		"상대사용시":{
			"KOR": "When the opponent plays a card, "
		},
		"상대공격사용시":{
			"KOR": "When the opponent plays an Attack card, "
		},
		"상대보조사용시":{
			"KOR": "When the opponent plays a Support card, "
		},
		"상대체위사용시":{
			"KOR": "When the opponent plays a Position card, "
		},
		"상대패널티사용시":{
			"KOR": "When the opponent plays a Penalty card, "
		},
		"도전자사용시":{
			"KOR": "When the Challenger plays a card, "
		},
		"도전자공격사용시":{
			"KOR": "When the Challenger plays an Attack card, "
		},
		"도전자보조사용시":{
			"KOR": "When the Challenger plays a Support card, "
		},
		"도전자체위사용시":{
			"KOR": "When the Challenger plays a Position card, "
		},
		"도전자패널티사용시":{
			"KOR": "When the Challenger plays a Penalty card, "
		},
		"챔피언사용시":{
			"KOR": "When the Champion plays a card, "
		},
		"챔피언공격사용시":{
			"KOR": "When the Champion plays an Attack card, "
		},
		"챔피언보조사용시":{
			"KOR": "When the Champion plays a Support card, "
		},
		"챔피언체위사용시":{
			"KOR": "When the Champion plays a Position card, "
		},
		"챔피언패널티사용시":{
			"KOR": "When the Champion plays a Penalty card, "
		},
		"누군가사용시":{
			"KOR": "When you or the opponent plays a card, "
		},
		"누군가공격사용시":{
			"KOR": "When you or the opponent plays an Attack card, "
		},
		"누군가보조사용시":{
			"KOR": "When you or the opponent plays a Support card, "
		},
		"누군가체위사용시":{
			"KOR": "When you or the opponent plays a Position card, "
		},
		"누군가패널티사용시":{
			"KOR": "When you or the opponent plays a Penalty card, "
		},
		"생성사용시":{
			"KOR": "When playing a generated card, "
		},
		"카드획득시":{
			"KOR": "When you gain a card, "
		},
		"패널티획득시":{
			"KOR": "When you gain a Penalty card, "
		},
		"카드변형시":{
			"KOR": "When a card is Transformed, "
		},
		"마술만료시":{
			"KOR": "When a Magic expires, "
		},
		"결합시":{
			"KOR": "When combining cards, "
		},
		"초과치유시":{
			"KOR": "When you overheal <b>Excitement</b>, "
		},
	},
	"target":{
		"수량":{
			"KOR": "the number of {target}"
		},
		"반복배수숫자":{
			"KOR": " times {repeat}"
		},
		"반복배수값":{
			"KOR": " multiplied by {repeat}"
		},
		"덱":{
			"KOR": "{owner}'s deck"
		},
		"덱조건":{
			"KOR": "{cards} in {deck}"
		},
		"덱목적":{
			"KOR": "{cards} in {deck}"
		},
		"특수덱":{
			"KOR": "{amount} types of {cards}"
		},
		"스탯":{
			"KOR": "{owner}'s {stat}"
		},
		"카드정보":{
			"KOR": "{card}'s {category}"
		},
		"효과발동자신":{
			"KOR": "If none of your card effects activated this round, "
		},
		"효과발동":{
			"KOR": "If none of {actor}'s card effects activated this round, "
		},
		"사용카드자신":{
			"KOR": "{cards} played this round"
		},
		"사용카드":{
			"KOR": "{cards} played by {actor} this round"
		},
		"시작카드":{
			"KOR": "{cards} in {deck} at the start of the duel"
		},
		"상태":{
			"KOR": "the {state} {owner} has"
		},
		"상태자신":{
			"KOR": "the {state} you have"
		},
		"상태목적":{
			"KOR": "{owner}'s {state}"
		},
		"상태자신목적":{
			"KOR": "{state}"
		},

		"결투동안":{
			"KOR": "during the duel",
		},
		"이번라운드":{
			"KOR": "this round",
		},
		"이전라운드":{
			"KOR": "last round",
		},
		"최근라운드":{
			"KOR": "in recent rounds",
		},

		"기록사용":{
			"KOR": "{cards} {actor} played {time}",
		},
		"기록사용자신":{
			"KOR": "{cards} you played {time}",
		},
		"기록버림":{
			"KOR": "{cards} {actor} discarded {time}",
		},
		"기록버림자신":{
			"KOR": "{cards} you discarded {time}",
		},
		"기록변형":{
			"KOR": "cards Transformed {time}",
		},
		"기록결합":{
			"KOR": "cards Combined {time}",
		},
		"기록절정":{
			"KOR": "the number of times {actor} had an <b>Orgasm</b> {time}",
		},
		"기록절정자신":{
			"KOR": "the number of times you had an <b>Orgasm</b> {time}",
		},
		"기록자극":{
			"KOR": "the number of times {actor} inflicted <b>[Stimulation]</b> {time}",
		},
		"기록자극자신":{
			"KOR": "the number of times you inflicted <b>[Stimulation]</b> {time}",
		},
		"기록자극받음":{
			"KOR": "the number of times {actor} received <b>[Stimulation]</b> {time}",
		},
		"기록자극받음자신":{
			"KOR": "the number of times you received <b>[Stimulation]</b> {time}",
		},
		"기록흥분증가":{
			"KOR": "<b>Excitement</b> {actor} gained {time}",
		},
		"기록흥분증가자신":{
			"KOR": "<b>Excitement</b> you gained {time}",
		},
		"기록흥분감소":{
			"KOR": "<b>Excitement</b> {actor} recovered {time}",
		},
		"기록흥분감소자신":{
			"KOR": "<b>Excitement</b> you recovered {time}",
		},
		"기록음란증가":{
			"KOR": "<b>Lewdness</b> gained {time}",
		},
		"기록음란감소":{
			"KOR": "<b>Lewdness</b> lost {time}",
		},
		"기록발정증가":{
			"KOR": "<b>Heat</b> gained {time}",
		},
		"기록발정감소":{
			"KOR": "<b>Heat</b> lost {time}",
		},
		"기록욕망획득":{
			"KOR": "<b>Lust</b> gained {time}",
		},
		"기록젖음획득":{
			"KOR": "<b>Wetness</b> gained {time}",
		},
		"기록감각차단획득":{
			"KOR": "<b>Numbness</b> gained {time}",
		},
		"기록타락획득":{
			"KOR": "<b>Corruption</b> gained {time}",
		},
		"기록획득":{
			"KOR": "{cards} {actor} gained {time}",
		},
		"기록획득자신":{
			"KOR": "{cards} you gained {time}",
		},
		"기록소모한욕망":{
			"KOR": "<b>Lust</b> spent {time}",
		},
		"기록회피":{
			"KOR": "the number of times {actor} evaded {time}",
		},
		"기록회피자신":{
			"KOR": "the number of times you evaded {time}",
		},
		"기록만료마술":{
			"KOR": "{cards} expired {time}",
		},

		"횟수숫자":{
			"KOR": "{amount} times",
		},
		"횟수값":{
			"KOR": "by {amount}",
		},
		"횟수카드":{
			"KOR": "{amount}",
		},
		"횟수상태":{
			"KOR": "{amount}",
		},
		"횟수발동":{
			"KOR": "Activates {amount} times.",
		},
		"카드들":{
			"KOR": "{amount} {cards}",
		},
		"카드종류들":{
			"KOR": "{amount} types of {cards}",
		},
		"카드전부":{
			"KOR": "All {cards}",
		},
		"카드종류전부":{
			"KOR": "All types of {cards}",
		},
		"카드종류":{
			"KOR": "different {cards}",
		},
		"복사본":{
			"KOR": "a copy of {card}",
		},
		"모든트랩":{
			"KOR": "All Trap cards in your deck",
		},
		"지속시간":{
			"KOR": "the duration of {target}",
		},
		"소모한욕망":{
			"KOR": "<b>Lust</b> spent",
		},

		"서로다른제조":{
			"KOR": "different Crafted cards"
		},

		"마술슬롯":{
			"KOR": "{cards} in Magic Slots"
		},
	},
	"condition":{
		"낼수없음":{
			"KOR": "Cannot be played.",
		},
		"낼수있음":{
			"KOR": "Can be played {cond}.",
		},
		"존재":{
			"KOR": "If you have {object}, ",
		},
		"비존재":{
			"KOR": "If you do not have {object}, ",
		},
		"라운드시작시":{
			"KOR": "<span style=\"color: gray;\">[Start of Round]</span> ",
		},
		"라운드종료시":{
			"KOR": "<span style=\"color: gray;\">[End of Round]</span> ",
		},
		"라운드일치시작시":{
			"KOR": "<span style=\"color: gray;\">[Start of Round {amount}]</span> ",
		},
		"라운드일치종료시":{
			"KOR": "<span style=\"color: gray;\">[End of Round {amount}]</span> ",
		},
		"라운드일치특성":{
			"KOR": "On round {amount}, ",
		},
		"라운드일치숫자":{
			"KOR": "If it is round {amount}, ",
		},
		"라운드일치값":{
			"KOR": "If the current round is {amount}, ",
		},
		"라운드초과특성":{
			"KOR": "After round {amount}, ",
		},
		"라운드초과숫자":{
			"KOR": "If more than {amount} rounds have passed, ",
		},
		"라운드초과값":{
			"KOR": "If the current round is greater than {amount}, ",
		},
		"라운드이상특성":{
			"KOR": "From round {amount}, ",
		},
		"라운드이상숫자":{
			"KOR": "If {amount} or more rounds have passed, ",
		},
		"라운드이상값":{
			"KOR": "If the current round is {amount} or greater, ",
		},
		"라운드미만특성":{
			"KOR": "Before round {amount}, ",
		},
		"라운드미만숫자":{
			"KOR": "If it is before round {amount}, ",
		},
		"라운드미만값":{
			"KOR": "If the current round is less than {amount}, ",
		},
		"라운드이하특성":{
			"KOR": "Until round {amount}, ",
		},
		"라운드이하숫자":{
			"KOR": "If {amount} rounds have not yet passed, ",
		},
		"라운드이하값":{
			"KOR": "If the current round is {amount} or less, ",
		},
		"라운드불일치특성":{
			"KOR": "Except on round {amount}, ",
		},
		"라운드불일치숫자":{
			"KOR": "If it is not round {amount}, ",
		},
		"라운드불일치값":{
			"KOR": "If the current round is not {amount}, ",
		},
		"라운드포함시작시":{
			"KOR": "<span style=\"color: gray;\">[Start of Round {amount}]</span> ",
		},
		"라운드포함종료시":{
			"KOR": "<span style=\"color: gray;\">[End of Round {amount}]</span> ",
		},
		"라운드포함특성":{
			"KOR": "On round {amount}, ",
		},
		"라운드포함":{
			"KOR": "If it is round {amount}, ",
		},

		"덱카드없음":{
			"KOR": "If there is no {target}, ",
		},
		"덱카드있음":{
			"KOR": "If there is {target}, ",
		},
		"덱카드일치숫자":{
			"KOR": "If there are exactly {amount} {target}, ",
		},
		"덱카드일치값":{
			"KOR": "If there is exactly {amount} {target}, ",
		},
		"덱카드초과숫자":{
			"KOR": "If there are more than {amount} {target}, ",
		},
		"덱카드초과값":{
			"KOR": "If there is more than {amount} {target}, ",
		},
		"덱카드미만숫자":{
			"KOR": "If there are fewer than {amount} {target}, ",
		},
		"덱카드미만값":{
			"KOR": "If there is less than {amount} {target}, ",
		},
		"덱카드이상숫자":{
			"KOR": "If there are {amount} or more {target}, ",
		},
		"덱카드이상값":{
			"KOR": "If there is {amount} or more {target}, ",
		},
		"덱카드이하숫자":{
			"KOR": "If there are {amount} or fewer {target}, ",
		},
		"덱카드이하값":{
			"KOR": "If there is {amount} or less {target}, ",
		},
		"덱카드불일치숫자":{
			"KOR": "If there are not exactly {amount} {target}, ",
		},
		"덱카드불일치값":{
			"KOR": "If there is not exactly {amount} {target}, ",
		},

		"상태없음":{
			"KOR": "If you do not have {target}, ",
		},
		"상태있음":{
			"KOR": "If you have {target}, ",
		},
		"상태일치숫자":{
			"KOR": "If you have exactly {amount} {target}, ",
		},
		"상태일치값":{
			"KOR": "If you have exactly {amount} {target}, ",
		},
		"상태초과숫자":{
			"KOR": "If you have more than {amount} {target}, ",
		},
		"상태초과값":{
			"KOR": "If you have more than {amount} {target}, ",
		},
		"상태미만숫자":{
			"KOR": "If you have fewer than {amount} {target}, ",
		},
		"상태미만값":{
			"KOR": "If you have less than {amount} {target}, ",
		},
		"상태이상숫자":{
			"KOR": "If you have {amount} or more {target}, ",
		},
		"상태이상값":{
			"KOR": "If you have {amount} or more {target}, ",
		},
		"상태이하숫자":{
			"KOR": "If you have {amount} or fewer {target}, ",
		},
		"상태이하값":{
			"KOR": "If you have {amount} or less {target}, ",
		},
		"상태불일치숫자":{
			"KOR": "If you do not have exactly {amount} {target}, ",
		},
		"상태불일치값":{
			"KOR": "If you do not have exactly {amount} {target}, ",
		},

		"값일치":{
			"KOR": "If {target} is {amount}, ",
		},
		"값초과":{
			"KOR": "If {target} is greater than {amount}, ",
		},
		"값미만":{
			"KOR": "If {target} is less than {amount}, ",
		},
		"값이상":{
			"KOR": "If {target} is {amount} or greater, ",
		},
		"값이하":{
			"KOR": "If {target} is {amount} or less, ",
		},
		"값불일치":{
			"KOR": "If {target} is not {amount}, ",
		},

		"낸카드없음":{
			"KOR": "If there is no {target}, ",
		},
		"낸카드있음":{
			"KOR": "If there is {target}, ",
		},
		"낸카드일치숫자":{
			"KOR": "If {target} is exactly {amount}, ",
		},
		"낸카드일치값":{
			"KOR": "If {target} is exactly {amount}, ",
		},
		"낸카드초과숫자":{
			"KOR": "If {target} is more than {amount}, ",
		},
		"낸카드초과값":{
			"KOR": "If {target} is more than {amount}, ",
		},
		"낸카드미만숫자":{
			"KOR": "If {target} is less than {amount}, ",
		},
		"낸카드미만값":{
			"KOR": "If {target} is less than {amount}, ",
		},
		"낸카드이상숫자":{
			"KOR": "If {target} is {amount} or more, ",
		},
		"낸카드이상값":{
			"KOR": "If {target} is {amount} or more, ",
		},
		"낸카드이하숫자":{
			"KOR": "If {target} is {amount} or less, ",
		},
		"낸카드이하값":{
			"KOR": "If {target} is {amount} or less, ",
		},
		"낸카드불일치숫자":{
			"KOR": "If {target} is not exactly {amount}, ",
		},
		"낸카드불일치값":{
			"KOR": "If {target} is not exactly {amount}, ",
		},

		"이벤트자극":{
			"KOR": "If {actor} inflicted <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극자신":{
			"KOR": "If you inflicted <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극부정":{
			"KOR": "If {actor} did not inflict <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극자신부정":{
			"KOR": "If you did not inflict <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극일치":{
			"KOR": "If {actor} inflicted <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극자신일치":{
			"KOR": "If you inflicted <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극초과":{
			"KOR": "If {actor} inflicted <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극자신초과":{
			"KOR": "If you inflicted <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극미만":{
			"KOR": "If {actor} inflicted <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극자신미만":{
			"KOR": "If you inflicted <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극이상":{
			"KOR": "If {actor} inflicted <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극자신이상":{
			"KOR": "If you inflicted <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극이하":{
			"KOR": "If {actor} inflicted <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극자신이하":{
			"KOR": "If you inflicted <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극불일치":{
			"KOR": "If {actor} did not inflict <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극자신불일치":{
			"KOR": "If you did not inflict <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},

		"이벤트자극받음":{
			"KOR": "If {actor} received <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음자신":{
			"KOR": "If you received <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음부정":{
			"KOR": "If {actor} did not receive <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음자신부정":{
			"KOR": "If you did not receive <b>[Stimulation]</b> {time}, ",
		},
		"이벤트자극받음일치":{
			"KOR": "If {actor} received <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극받음자신일치":{
			"KOR": "If you received <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극받음초과":{
			"KOR": "If {actor} received <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극받음자신초과":{
			"KOR": "If you received <b>[Stimulation]</b> more than {amount} times {time}, ",
		},
		"이벤트자극받음미만":{
			"KOR": "If {actor} received <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극받음자신미만":{
			"KOR": "If you received <b>[Stimulation]</b> fewer than {amount} times {time}, ",
		},
		"이벤트자극받음이상":{
			"KOR": "If {actor} received <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극받음자신이상":{
			"KOR": "If you received <b>[Stimulation]</b> {amount} or more times {time}, ",
		},
		"이벤트자극받음이하":{
			"KOR": "If {actor} received <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극받음자신이하":{
			"KOR": "If you received <b>[Stimulation]</b> {amount} or fewer times {time}, ",
		},
		"이벤트자극받음불일치":{
			"KOR": "If {actor} did not receive <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},
		"이벤트자극받음자신불일치":{
			"KOR": "If you did not receive <b>[Stimulation]</b> exactly {amount} times {time}, ",
		},

		"이벤트절정":{
			"KOR": "If {actor} had an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정자신":{
			"KOR": "If you had an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정부정":{
			"KOR": "If {actor} did not have an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정자신부정":{
			"KOR": "If you did not have an <b>Orgasm</b> {time}, ",
		},
		"이벤트절정일치":{
			"KOR": "If {actor} had an <b>Orgasm</b> exactly {amount} times {time}, ",
		},
		"이벤트절정자신일치":{
			"KOR": "If you had an <b>Orgasm</b> exactly {amount} times {time}, ",
		},
		"이벤트절정초과":{
			"KOR": "If {actor} had an <b>Orgasm</b> more than {amount} times {time}, ",
		},
		"이벤트절정자신초과":{
			"KOR": "If you had an <b>Orgasm</b> more than {amount} times {time}, ",
		},
		"이벤트절정미만":{
			"KOR": "If {actor} had an <b>Orgasm</b> fewer than {amount} times {time}, ",
		},
		"이벤트절정자신미만":{
			"KOR": "If you had an <b>Orgasm</b> fewer than {amount} times {time}, ",
		},
		"이벤트절정이상":{
			"KOR": "If {actor} had an <b>Orgasm</b> {amount} or more times {time}, ",
		},
		"이벤트절정자신이상":{
			"KOR": "If you had an <b>Orgasm</b> {amount} or more times {time}, ",
		},
		"이벤트절정이하":{
			"KOR": "If {actor} had an <b>Orgasm</b> {amount} or fewer times {time}, ",
		},
		"이벤트절정자신이하":{
			"KOR": "If you had an <b>Orgasm</b> {amount} or fewer times {time}, ",
		},
		"이벤트절정불일치":{
			"KOR": "If {actor} did not have an <b>Orgasm</b> exactly {amount} times {time}, ",
		},
		"이벤트절정자신불일치":{
			"KOR": "If you did not have an <b>Orgasm</b> exactly {amount} times {time}, ",
		},

		"이벤트흥분증가":{
			"KOR": "If {target} was gained {time}, ",
		},
		"이벤트흥분증가부정":{
			"KOR": "If {target} was not gained {time}, ",
		},
		"이벤트흥분증가일치":{
			"KOR": "If exactly {amount} {target} was gained {time}, ",
		},
		"이벤트흥분증가초과":{
			"KOR": "If more than {amount} {target} was gained {time}, ",
		},
		"이벤트흥분증가미만":{
			"KOR": "If less than {amount} {target} was gained {time}, ",
		},
		"이벤트흥분증가이상":{
			"KOR": "If {amount} or more {target} was gained {time}, ",
		},
		"이벤트흥분증가이하":{
			"KOR": "If {amount} or less {target} was gained {time}, ",
		},
		"이벤트흥분증가불일치":{
			"KOR": "If not exactly {amount} {target} was gained {time}, ",
		},

		"이벤트흥분회복":{
			"KOR": "If {target} was recovered {time}, ",
		},
		"이벤트흥분회복부정":{
			"KOR": "If {target} was not recovered {time}, ",
		},
		"이벤트흥분회복일치":{
			"KOR": "If exactly {amount} {target} was recovered {time}, ",
		},
		"이벤트흥분회복초과":{
			"KOR": "If more than {amount} {target} was recovered {time}, ",
		},
		"이벤트흥분회복미만":{
			"KOR": "If less than {amount} {target} was recovered {time}, ",
		},
		"이벤트흥분회복이상":{
			"KOR": "If {amount} or more {target} was recovered {time}, ",
		},
		"이벤트흥분회복이하":{
			"KOR": "If {amount} or less {target} was recovered {time}, ",
		},
		"이벤트흥분회복불일치":{
			"KOR": "If not exactly {amount} {target} was recovered {time}, ",
		},

		"이벤트횟수":{
			"KOR": "If you have {target}, ",
		},
		"이벤트횟수부정":{
			"KOR": "If you do not have {target}, ",
		},
		"이벤트횟수일치":{
			"KOR": "If you have exactly {amount} {target}, ",
		},
		"이벤트횟수초과":{
			"KOR": "If you have more than {amount} {target}, ",
		},
		"이벤트횟수미만":{
			"KOR": "If you have less than {amount} {target}, ",
		},
		"이벤트횟수이상":{
			"KOR": "If you have {amount} or more {target}, ",
		},
		"이벤트횟수이하":{
			"KOR": "If you have {amount} or less {target}, ",
		},
		"이벤트횟수불일치":{
			"KOR": "If you do not have exactly {amount} {target}, ",
		},

		"이벤트회피":{
			"KOR": "If {actor} evaded {time}, ",
		},
		"이벤트회피자신":{
			"KOR": "If you evaded {time}, ",
		},
		"이벤트회피부정":{
			"KOR": "If {actor} did not evade {time}, ",
		},
		"이벤트회피자신부정":{
			"KOR": "If you did not evade {time}, ",
		},
		"이벤트회피일치":{
			"KOR": "If {actor} evaded exactly {amount} times {time}, ",
		},
		"이벤트회피자신일치":{
			"KOR": "If you evaded exactly {amount} times {time}, ",
		},
		"이벤트회피초과":{
			"KOR": "If {actor} evaded more than {amount} times {time}, ",
		},
		"이벤트회피자신초과":{
			"KOR": "If you evaded more than {amount} times {time}, ",
		},
		"이벤트회피미만":{
			"KOR": "If {actor} evaded fewer than {amount} times {time}, ",
		},
		"이벤트회피자신미만":{
			"KOR": "If you evaded fewer than {amount} times {time}, ",
		},
		"이벤트회피이상":{
			"KOR": "If {actor} evaded {amount} or more times {time}, ",
		},
		"이벤트회피자신이상":{
			"KOR": "If you evaded {amount} or more times {time}, ",
		},
		"이벤트회피이하":{
			"KOR": "If {actor} evaded {amount} or fewer times {time}, ",
		},
		"이벤트회피자신이하":{
			"KOR": "If you evaded {amount} or fewer times {time}, ",
		},
		"이벤트회피불일치":{
			"KOR": "If {actor} did not evade exactly {amount} times {time}, ",
		},
		"이벤트회피자신불일치":{
			"KOR": "If you did not evade exactly {amount} times {time}, ",
		},

		"원본일치":{
			"KOR": "If the original card is {card}, ",
		},
		"원본불일치":{
			"KOR": "If the original card is not {card}, ",
		},

		"강화존재":{
			"KOR": "If upgraded, ",
		},
		"강화부정":{
			"KOR": "If not upgraded, ",
		},
		"강화일치":{
			"KOR": "If upgraded exactly {amount} times, ",
		},
		"강화초과":{
			"KOR": "If upgraded more than {amount} times, ",
		},
		"강화미만":{
			"KOR": "If upgraded fewer than {amount} times, ",
		},
		"강화이상":{
			"KOR": "If upgraded {amount} or more times, ",
		},
		"강화이하":{
			"KOR": "If upgraded {amount} or fewer times, ",
		},
		"강화불일치":{
			"KOR": "If not upgraded exactly {amount} times, ",
		},
	},

	"effect":{
		"자극":{
			"KOR": "Inflict <b>[Stimulation]</b> on {repeat1} {target} {repeat2} times.",
		},
		"절정":{
			"KOR": "Cause {repeat1} {target} to <b>Orgasm</b> {repeat2} times.",
		},
		"상태부여이름":{
			"KOR": "Apply {repeat} <b>{state}</b> to {target}.",
		},
		"헤더":{
			"KOR": "<b>{value}:</b> ",
		},
		"헤더값":{
			"KOR": "<b>{value}({amount}):</b> ",
		},
		"클라이맥스":{
			"KOR": "<span style=\"color: gray;\">Climax</span>",
		},
		"자동시전":{
			"KOR": "<span style=\"color: gray;\">Auto Cast ({amount})</span>",
		},
		"영구시전":{
			"KOR": "<span style=\"color: gray;\">Auto Cast (Infinite)</span>",
		},
		"시전":{
			"KOR": "<span style=\"color: gray;\">({amount} uses)</span>",
		},
		"무한시전":{
			"KOR": "<span style=\"color: gray;\">(Infinite uses)</span>",
		},
		"반복":{
			"KOR": "Repeat {repeat} times.",
		},

		"증가숫자":{
			"KOR": "{repeat} {value}&nbsp;<b>+{amount}</b>.",
		},
		"감소숫자":{
			"KOR": "{repeat} {value}&nbsp;<b>{amount}</b>.",
		},
		"증가값":{
			"KOR": "Increase {value} by {amount}.",
		},
		"감소값":{
			"KOR": "Decrease {value} by {amount}.",
		},
		"배수숫자":{
			"KOR": "Multiply {value} by {amount}.",
		},
		"지정숫자":{
			"KOR": "Set {value} to {amount}.",
		},
		"지정값":{
			"KOR": "Make {value} equal to {amount}.",
		},

		"체위삭제":{
			"KOR": "Remove the <b>Position</b>.",
		},

		"체위부여":{
			"KOR": "<span style='color: gray;''><i>(Changes to the following <b>Position</b>.)</i></span>",
		},

		"덱카드획득":{
			"KOR": "Gain {repeat} {card}.",
		},
		"덱카드선택획득":{
			"KOR": "Choose a {card} and gain {repeat} copies of it.",
		},
		"덱카드추가":{
			"KOR": "Give {target} {repeat} {card}.",
		},


		"패배":{
			"KOR": "Lose the duel.",
		},
		"승리":{
			"KOR": "Win the duel.",
		},

		"추가카드":{
			"KOR": "{target}'s <b>Additional Cards +{amount}</b>.",
		},
		"추가카드자신":{
			"KOR": "<b>Additional Cards +{amount}</b>.",
		},

		"버리기":{
			"KOR": "Discard {card}.",
		},
		"선택버리기":{
			"KOR": "Choose a {card} to discard.",
		},
		"제거하기":{
			"KOR": "Remove {state}.",
		},
		"사용":{
			"KOR": "Activate the effect of {card} {repeat} times.",
		},
		"선택사용":{
			"KOR": "Choose {select} to activate its effect {repeat} times.",
		},
		"재귀효과추가":{
			"KOR": "Gain the effect \"{effect}\" {repeat} times.",
		},
		"선택효과추가":{
			"KOR": "Choose a {card} and add the effect \"{effect}\" to it {repeat} times.",
		},
		"효과추가":{
			"KOR": "Add the effect \"{effect}\" to {card} {repeat} times.",
		},
		"특별한효과추가":{
			"KOR": "Add the {effect} effect to {card} {repeat} times.",
		},

		"독부여무작위":{
			"KOR": "Apply a random Poison to {target} {repeat} times.<br>If they already have it, upgrade it instead.",
		},
		"독부여지정":{
			"KOR": "Apply {repeat} {poison} to {target}.<br><span style=\"color: gray;\"><i>(If they already have it, upgrade it instead.)</i></span>",
		},

		"독추가":{
			"KOR": "Add {value} to the Poison Pouch {repeat} times.",
		},

		"카운트감소숫자":{
			"KOR": "{repeat} <b>Countdown&nbsp;-{amount}</b>.",
		},
		"카운트감소값":{
			"KOR": "Decrease Countdown by {amount}, {repeat} times.",
		},
		"카운트지정감소숫자":{
			"KOR": "{repeat} {target}'s <b>Countdown&nbsp;-{amount}</b>.",
		},
		"카운트지정감소값":{
			"KOR": "Decrease {target}'s Countdown by {amount}, {repeat} times.",
		},

		"반복발동":{
			"KOR": "The effect of the next card {target} plays activates {amount} additional times.",
		},
		"반복발동자신":{
			"KOR": "The effect of the next card you play activates {amount} additional times.",
		},
		"복구":{
			"KOR": "Return {target}.",
		},
		"변형":{
			"KOR": "<b>Transform</b> {target} into {object}.",
		},
		"선택변형":{
			"KOR": "Choose a {card} to <b>Transform</b> into {object}.",
		},
		"재귀변형":{
			"KOR": "<b>Transform</b> into {object}.",
		},
		"면역":{
			"KOR": "{actor}'s <b>Excitement</b> cannot be increased.",
		},
		"면역자신":{
			"KOR": "<b>Excitement</b> cannot be increased.",
		},

		"카드사용불가":{
			"KOR": "{actor} cannot play cards.",
		},
		"카드사용불가자신":{
			"KOR": "Cannot play cards.",
		},
		"공격사용불가":{
			"KOR": "{actor} cannot play Attack cards.",
		},
		"공격사용불가자신":{
			"KOR": "Cannot play Attack cards.",
		},
		"보조사용불가":{
			"KOR": "{actor} cannot play Support cards.",
		},
		"보조사용불가자신":{
			"KOR": "Cannot play Support cards.",
		},
		"체위사용불가":{
			"KOR": "{actor} cannot play Position cards.",
		},
		"체위사용불가자신":{
			"KOR": "Cannot play Position cards.",
		},
		"탈의사용불가":{
			"KOR": "{actor} cannot play Stripping cards.",
		},
		"탈의사용불가자신":{
			"KOR": "Cannot play Stripping cards.",
		},
		"패널티사용불가":{
			"KOR": "{actor} cannot play Penalty cards.",
		},
		"패널티사용불가자신":{
			"KOR": "Cannot play Penalty cards.",
		},
		"공격강제사용":{
			"KOR": "{actor} can only play Attack cards.",
		},
		"공격강제사용자신":{
			"KOR": "Can only play Attack cards.",
		},
		"보조강제사용":{
			"KOR": "{actor} can only play Support cards.",
		},
		"보조강제사용자신":{
			"KOR": "Can only play Support cards.",
		},
		"체위강제사용":{
			"KOR": "{actor} can only play Position cards.",
		},
		"체위강제사용자신":{
			"KOR": "Can only play Position cards.",
		},
		"탈의강제사용":{
			"KOR": "{actor} can only play Stripping cards.",
		},
		"탈의강제사용자신":{
			"KOR": "Can only play Stripping cards.",
		},
		"패널티강제사용":{
			"KOR": "{actor} can only play Penalty cards.",
		},
		"패널티강제사용자신":{
			"KOR": "Can only play Penalty cards.",
		},
		"결합물강제사용":{
			"KOR": "{actor} can only play Combined cards.",
		},
		"결합물강제사용자신":{
			"KOR": "Can only play Combined cards.",
		},
		"결속강제사용":{
			"KOR": "{actor} can only play Bound cards.",
		},
		"결속강제사용자신":{
			"KOR": "Can only play Bound cards.",
		},

		"최대라운드":{
			"KOR": "<b>Max Rounds: {amount}</b>",
		},

		"최저음란":{
			"KOR": "The minimum value of <b>Lewdness</b> becomes {amount}.",
		},
		"최대음란":{
			"KOR": "The maximum value of <b>Lewdness</b> becomes {amount}.",
		},
		"최저발정":{
			"KOR": "The minimum value of <b>Heat</b> becomes {amount}.",
		},
		"최대발정":{
			"KOR": "The maximum value of <b>Heat</b> becomes {amount}.",
		},

		"추가증가":{
			"KOR": "When {stat} increases, it increases by an additional +{amount}.",
		},
		"추가감소":{
			"KOR": "When {stat} decreases, it decreases by an additional -{amount}.",
		},

		"강탈":{
			"KOR": "Steal {cards}. <span style=\"color: gray;\"><i>(The card's <b>Lewdness</b> and <b>Heat</b> effects are swapped.)</i></span>",
		},
		"챔피언비활성화":{
			"KOR": "The Champion's cards lose their effects.",
		},
		"챔피언공격비활성화":{
			"KOR": "The Champion's Attack cards lose their effects.",
		},
		"탈의비활성화":{
			"KOR": "Stripping cards lose their effects.",
		},
		"패널티비활성화":{
			"KOR": "Penalty cards lose their effects.",
		},
		"독비활성화":{
			"KOR": "Poisons lose their effects.",
		},
		"마술비활성화":{
			"KOR": "Magic cards lose their effects.",
		},

		"시작욕망":{
			"KOR": "Start with {amount} <b>Lust</b>.",
		},
		"욕망금지":{
			"KOR": "Cannot gain <b>Lust</b>.",
		},
		"욕망제한":{
			"KOR": "<b>Lust</b> cannot exceed {amount}.",
		},
		"젖음금지":{
			"KOR": "Cannot gain <b>Wetness</b>.",
		},
		"젖음제한":{
			"KOR": "<b>Lust</b> cannot exceed {amount}.",
		},
		"젖음금지":{
			"KOR": "Cannot gain <b>Wetness</b>.",
		},
		"회피금지":{
			"KOR": "Cannot evade.",
		},
		"시작감각차단":{
			"KOR": "Start with {amount} <b>Numbness</b>.",
		},
		"감각차단금지":{
			"KOR": "Cannot gain <b>Numbness</b>.",
		},
		"감각차단제한":{
			"KOR": "<b>Numbness</b> cannot exceed {amount}.",
		},
		"시작타락":{
			"KOR": "Start with {amount} <b>Corruption</b>.",
		},
		"타락금지":{
			"KOR": "Cannot gain <b>Corruption</b>.",
		},
		"타락제한":{
			"KOR": "<b>Corruption</b> cannot exceed {amount}.",
		},

		"덱포함필수":{
			"KOR": "Your deck must contain {amount} {card}.",
		},
		"덱포함금지":{
			"KOR": "Cannot add {card} to your deck.",
		},
		"덱포함수량":{
			"KOR": "Cannot have more than {amount} {card} in your deck.",
		},

		"최대사용":{
			"KOR": "The maximum number of cards you can play per round becomes {amount}.",
		},

		"절정금지":{
			"KOR": "{actor} cannot have an <b>Orgasm</b>.",
		},
		"절정금지자신":{
			"KOR": "Cannot have an <b>Orgasm</b>.",
		},
		"억압":{
			"KOR": "{actor} cannot have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"억압자신":{
			"KOR": "Cannot have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"무감":{
			"KOR": "{actor} can only have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"무감자신":{
			"KOR": "Can only have an <b>Orgasm</b> from <b>Excitement</b>.",
		},
		"정기흡수":{
			"KOR": "{actor} gains <b>Essence Drain</b>.",
		},
		"정기흡수자신":{
			"KOR": "Gain <b>Essence Drain</b>.",
		},

		"스택":{
			"KOR": "Upgrade {card} {amount} times.",
		},
		"스택초기화":{
			"KOR": "Reset {card}'s upgrades.",
		},

		"마술교체":{
			"KOR": "Replace the {slot} slot with {card}.",
		},

		"결합":{
			"KOR": "<b>Combine</b> {target} into one card.",
		},
		"선택결합":{
			"KOR": "Choose {card} to <b>Combine</b> into one card.",
		},
		
		"결속":{
			"KOR": "Bind {card} to {target}.",
		},
		"선택결속":{
			"KOR": "Choose a {target} to bind {card} to.",
		},
		"결속됨":{
			"KOR": "<span style=\"color: gray;\">(Bound with <b>[{card}]</b>.)</span>",
		},

		"치료금지":{
			"KOR": "{actor}'s <b>Excitement</b> cannot be recovered.",
		},
		"치료금지자신":{
			"KOR": "<b>Excitement</b> cannot be recovered.",
		},
	},

	"special":{
		"specialA01":{
			"KOR": "When <b>Heat</b> is temporarily decreased, <b>Lewdness</b> is temporarily increased by the same amount.",
		},
		"specialA02":{
			"KOR": "Modify Crafted cards in the Poison Pouch.<br>They apply twice at once, but only last for 2 rounds.",
		},
		"specialA04":{
			"KOR": "Cannot play Crafted cards or <b>[Pester]</b>.",
		},
		"specialA05":{
			"KOR": "Prepare to gain a random Transcendence card {repeat} times. ({trace}/3)",
		},
		"specialA06":{
			"KOR": "Position effects are doubled.",
		},
		"specialA07":{
			"KOR": "Gradually fall <b>[Unconscious]</b>. ({stack}/{maxStack})",
		},
		"specialA08":{
			"KOR": "Something offers help.<br><br>After providing 3 types of help, an obsession begins. <span style=\"color: gray;\">({count} left)</span>",
		},
		"specialA09":{
			"KOR": "Upgrade all Magic Bullets {repeat} times.",
		},
		"specialA10":{
			"KOR": "Effects that recover your <b>Excitement</b> increase the opponent's <b>Excitement</b> instead.",
		},
		"specialA11":{
			"KOR": "When gaining a random Essence card, you gain one that was in your starting deck.",
		},
		"specialA12":{
			"KOR": "Each round, <b>Corruption</b> decreases instead of increasing.",
		},
		"specialA13":{
			"KOR": "Can play Attack cards on round 1.",
		},
		"specialA14":{
			"KOR": "Gain double Lust.",
		},
		"specialA15":{
			"KOR": "Improves the Healer Positions in your deck.",
		},
		"specialA16":{
			"KOR": "Gain a needed Magic Circle instead of a random one.",
		},
		"specialA17":{
			"KOR": "Cannot gain <b>Numbness</b> from Transforming cards.",
		},
		"specialA18":{
			"KOR": "The conditions for Prelude, Interlude, and Finale are randomized.",
		},
		"specialA19":{
			"KOR": "Upgrade all <b>[Heart Throbs]</b> twice.",
		},
		"specialA20":{
			"KOR": "Neutral Attack card effects activate {value} additional times.",
		},

		"specialV05":{
			"KOR": "Number of Essence cards used as material",
		},
		"specialV06":{
			"KOR": "Number of cards the opponent discarded, Transformed, or Combined during the duel",
		},
		"specialV07":{
			"KOR": "Once for every 4 cards discarded this round",
		},
		"specialV08":{
			"KOR": "The effects of other Spores, excluding <b>[Catalyst Spore]</b>, are increased by {amount}.",
		},
		"specialV08영구":{
			"KOR": "The effects of Spores are permanently increased by {amount}.",
		},
		"specialV09":{
			"KOR": "Stacks of all Poisons except <b>[Lethal Poison]</b>",
		},
	}
}
