var Change, SetUp,
	en, ja,
	name, value

Change = function (val) {
	name = val.slice(-8, -3)
	value = val.slice(-2)
	console.log(name, value)
	if (name === 'index') {
		en = ['en', 'Without use ----, cannnot go next stage.', 'Do you want to Start?', 'No', 'If you want to Start, Click', 'HERE', '* The quest can be started by pressing the Enter/Return key.', 'Language', 'English', 'Japanese']
		ja = ['ja', '念力を使わないと次へ進めない', '始める?', 'やだ', 'もしも始めるなら, ', 'ここをクリック', '* Enter/Returnキーを押すと、開始できます。', '言語', '英語', '日本語']
	}
	if (name === 'click') {
		en = ['en', 'Press All Black Square!^^']
		ja = ['ja', '黒い四角を全てクリックしろ!^^']
	}
	if (name === 'keybo') {
		en = ['en', 'Press All Key!^^']
		ja = ['ja', '出てくる文字を全て打て!^^']
	}
	if (name === 'winne') {
		en = ['en', 'You\'re Winner!']
		ja = ['ja', 'あんた勝者!']
	}
	if (value === 'ja'){
		lang = ja
	} else if (value === 'en'){
		lang = en
	}
	console.log('Changed')
}

$(document).ready(function () {
	Change(location.href.slice(-8))
	console.log('Load')
})