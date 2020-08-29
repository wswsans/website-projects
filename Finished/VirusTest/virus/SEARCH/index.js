// 変数宣言
var Agent, // UserAgentの取得
  OS, // OSの取得
  TN, // 型番
  Browser, // ブラウザ
  OriginalVirusName,
  SiteVirusName,
  VirusName, // 名前たち。一応言うけど、効果などは何もない。
  VirusLength, // ランダムで、やってくる
  Viruses, // VirusName で活用
  load, // Function
  timer, // Function
  ct,
  time,
  timeVar,
  loadVar,
  i, // ループ
  r,
  tmp, Ver, alertString

// console.log('window.navigator.platform: ' + window.navigator.platform)
// console.log(window.navigator.userAgent)

// 変数定義
OS = { 'Mac': 'Mac OS', 'Win': 'Windows OS', 'Lin': 'Linux OS', 'iPh': 'IOS', 'iPa': 'IOS' }[window.navigator.platform.slice(0, 3)] // platformの前から3番までのところで判定
TN = { 'Mac': 'Macintosh', 'Win': 'Windows', 'Lin': 'Linux', 'iPh': 'iPhone', 'iPa': 'iPad' }[window.navigator.platform.slice(0, 3)]
Agent = window.navigator.userAgent // 簡単に取得
VirusLength = Math.floor(Math.random() * 5) + 1 // 長さ。ちなみに5は固定
OriginalVirusName = ['Trojan horse', 'Worm', 'HackVirus', 'Cat', 'GasterBlaster', 'Chara', 'M.C Donald', 'Gaster', 'NoName'] // ここから適当に出される
SiteVirusName = ['', 'Tapsnake', 'CronDNS', 'Dubfishicv'] // 他のサイトから見つけたもの (1-3: Macのウイルス)
VirusName = OriginalVirusName + SiteVirusName
VirusName = VirusName.split(',')
Viruses = '' // からにしないとUndefinedが出る=> なんか変なのが出る => ナニコレ
ct = 0

// forで回す
for (i = VirusName.length - 1; i > 0; i--) { // リストランダム化
  r = Math.floor(Math.random() * (i + 1))
  tmp = VirusName[i]
  VirusName[i] = VirusName[r]
  VirusName[r] = tmp
}
for (i = VirusLength - 1; i >= 0; i--) { // 繋げてく
  Ver = Math.floor(Math.random() * 10) + 5
  Viruses += VirusName[i] + ' V' + String(Ver) + '.' + String(Ver - 3) + '.' + String(Ver - 4) + ', '
}
Viruses = Viruses.slice(0, -2)

// IF系
if (Agent.toLowerCase().indexOf('msie') !== -1 || Agent.toLowerCase().indexOf('trident') !== -1) {
  Browser = 'Internet Exproler'
} else if (Agent.toLowerCase().indexOf('edge') !== -1) {
  Browser = 'Microsoft Edge'
} else if (Agent.toLowerCase().indexOf('chrome') !== -1) {
  Browser = 'Google Chrome'
} else if (Agent.toLowerCase().indexOf('safari') !== -1) {
  Browser = 'Safari'
} else if (Agent.toLowerCase().indexOf('firefox') !== -1) {
  Browser = 'Firefox'
} else if (Agent.toLowerCase().indexOf('opera') !== -1) {
  Browser = 'Opera'
} else {
  Browser = '?????'
}

// functions
function play_se () {
  new Audio('warning.mp3').play()
}

load = function () {
  loadVar = setTimeout(load, time)
  ct++
  $('progress#search')[0].value = ct
  time = Math.floor(Math.random() * 100) + 1
  if (ct >= 100) {
    play_se()
    $('input#label1').prop('checked', true)
    document.title = 'ウイルスが発見されました'
    alertString = '今すぐ削除した方が良いです!'
    timer()
    clearTimeout(loadVar)
  }
}

timer = function () {
  timeVar = setTimeout(timer, 1000)
  ct--
  $('td#Timer').text(ct + '秒')
  if (ct <= 0) {
    clearTimeout(timeVar)
    location.href = '../?go=cr'
  }
}

// Others
history.pushState(null, null, null)
$(window).on('popstate', function (e) {
  if (!e.originalEvent.state) {
    play_se()
    alert(alertString)
    history.pushState(null, null, null)
  }
})

$(window).on('touchmove.noScroll', function (e) {
  e.preventDefault()
})

// document がロードされたら動かすやつ
$(document).ready(function () {
  alertString = '検索中の移動はできません'
  // $('span#test').text(window.navigator.platform.slice(0, 3))
  // play_se()
  $('h1#HEAD').text('あなたの端末から' + VirusLength + '個のウイルスが発見されました')
  $('td#TN').text(TN)
  $('td#OS').text(OS)
  $('td#Browser').text(Browser)
  $('td#UserAgent').text(Agent)
  $('td#VirusName').text(Viruses)
  load()
  // $('input#label1').prop('checked', true)
})
