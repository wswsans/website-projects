console.log('CountDown Script Connected!')
// クラス取得
var times, // Class("time") cookieーへ追加するときのリスト
  ctReam, // 残り時間
  ctList, // リスト
  name, // 名前Input
  // 時間変数
  year,
  day,
  hour,
  minute,
  second,
  time,
  // 変数取得
  content, // cookieーリスト
  r, // cookieー取得変数
  val, // cookieの設定のための変数
  timeAll, // 時間設定時に色々まとめる変数
  ct, // ランダムに使用可能
  ctTimeVal, // setIntervalで使用
  ctTimeValLs, // setIntervalでの、リスト まとめるやつ
  rema, // 残り時間
  name, // 終了時の名前
  result, // del-> 確認メッセージ
  // 関数
  // set_ct, // カウントダウン表セット
  edit, // 編集
  ctFunc, // 関数, メイン構造
  setCookie, // cookieーセット関数
  del, // 削除関数
  // 時間表示必要変数
  str,
  divide,
  dReamaining,
  i, n, m

times = document.getElementsByClassName('time')
ctList = document.getElementsByClassName('ct_list')
ctReam = document.getElementsByClassName('ct_ream')

divide = function (left, right) { dReamaining = left; ct = 0; while (dReamaining >= right) { dReamaining -= right; ct++ } return [ct, dReamaining] }

window.onload = function () {
  time = new Date()
  times[0].value = time.getFullYear()
  times[1].value = time.getMonth()
  times[2].value = time.getDay()
  times[3].value = time.getHours()
  times[4].value = time.getMinutes() + 1
  times[5].value = 0

  r = document.cookie.split('; ')
  r.forEach(function (value) {
    content = value.split('=')
    if (content[0].substr(0, 3) === 'ct_') {
      ctFunc(content[0].substr(3), content[1])
      // 2
    }
  })
  // 1
}

edit = function (edit_name) {
  console.log('edit, ' + edit_name)
  for (m = ctReam.length - 1; m >= 0; m--) {
    // 7 console.log(ctReam[m].parentNode, document.getElementsByName(edit_name)[0], edit_name)
    if (ctReam[m].parentNode === document.getElementsByName(edit_name)[0]) {
      document.getElementsByClassName('name')[0].value = edit_name
      ctTimeVal = ctReam[m].parentNode.getElementsByClassName('ct_time')[0].firstChild.nodeValue.substr(10).split(' ')
      ctTimeValLs = []
      for (n = ctTimeVal.length - 1; n >= 0; n--) { ctTimeValLs.push(parseInt(ctTimeVal[n].slice(0, -1))) }
      for (i = times.length - 1; i >= 0; i--) { times[i].value = ctTimeValLs[5 - i] }
    }
  }
}

del = function (del_name) {
  console.log('delete, ' + del_name)
  result = confirm('本当に削除しますか?')
  if (result) {
    document.cookie = 'ct_' + del_name + '=0; max-age=0'
    alert('削除しました')
    location.reload(true)
  }
}

setCookie = function () {
  times = document.getElementsByClassName('time')
  val = document.getElementsByClassName('name')[0].value
  if (!val) { alert('名前が入力されてません'); return false }
  for (i = times.length - 1; i >= 0; i--) { if (!times[i].value) { alert(times[i].placeholder + 'が入力されてません'); return false } }
  for (i = times.length - 1; i >= 0; i--) { val += '.' + times[i].value }
  document.cookie = 'ct_' + document.getElementsByClassName('name')[0].value + '=' + encodeURIComponent(val)
  console.log('Cookie Setted!')
  location.reload(true)
}

ctFunc = function (ct_name, val) {
  ct = val.split('.')
  timeAll = ct[6] + '年 ' + ct[5] + '月 ' + ct[4] + '日 ' + ct[3] + '時 ' + ct[2] + '分 ' + ct[1] + '秒'
  ctList[0].innerHTML += '<dl class="ct_dl" name="' + ct_name + '"> <dt class="ct_name">Name: ' + ct_name + '</dt> <dd class="ct_time">End Time: ' + timeAll + '</dd> <dd class="ct_ream">Stop Time: ERR</dd> <span class="del btn" onclick="del(\'' + ct_name + '\')">Delete</span> <span class="edit btn" onclick="edit(\'' + ct_name + '\')">Edit</span> </dl>'
  console.log(ct_name + ' Setted!')
}

setInterval(function () {
  time = new Date()
  for (i = ctReam.length - 1; i >= 0; i--) {
    ctTimeVal = ctReam[i].parentNode.getElementsByClassName('ct_time')[0].firstChild.nodeValue.substr(10).split(' ')
    ctTimeValLs = []
    for (n = ctTimeVal.length - 1; n >= 0; n--) { ctTimeValLs.push(parseInt(ctTimeVal[n].slice(0, -1))) }
    // 3
    rema = ctTimeValLs[5] * 365 * 24 * 60 * 60 + ctTimeValLs[3] * 24 * 60 * 60 + ctTimeValLs[2] * 60 * 60 + ctTimeValLs[1] * 60 + ctTimeValLs[0]
    rema -= time.getFullYear() * 365 * 24 * 60 * 60 + time.getDay() * 24 * 60 * 60 + time.getHours() * 60 * 60 + time.getMinutes() * 60 + time.getSeconds()
    // 5

    str = String(rema)
    if (rema <= 0) {
      end_name = ctReam[i].parentNode.getElementsByTagName('dt')[0].firstChild.nodeValue.substr(6)
      document.cookie = 'ct_' + end_name + '="0"; max-age=0'
      alert(end_name + 'が終了しました!!!')
      location.reload(true)
      // 4
    }

    year = String((rema >= 365 * 24 * 60 * 60) ? divide(rema, 365 * 24 * 60 * 60)[0] : 0)
    rema -= (rema >= 365 * 24 * 60 * 60) ? divide(rema, 365 * 24 * 60 * 60)[0] * 365 * 24 * 60 * 60 : 0

    day = String((rema >= 24 * 60 * 60) ? divide(rema, 24 * 60 * 60)[0] : 0)
    rema -= (rema >= 24 * 60 * 60) ? divide(rema, 24 * 60 * 60)[0] * 24 * 60 * 60 : 0

    hour = String((rema >= 60 * 60) ? divide(rema, 60 * 60)[0] : 0)
    rema -= (rema >= 60 * 60) ? divide(rema, 60 * 60)[0] * 60 * 60 : 0

    minute = String((rema >= 60) ? divide(rema, 60)[0] : 0)
    rema -= (rema >= 60) ? divide(rema, 60)[0] * 60 : 0

    second = rema

    // month = String((day >= ) ? divide(day, 24 * 60 * 60)[0] : 0)
    // day -=

    // 6
    ctReam[i].firstChild.nodeValue = 'Stop Time: ' + year + '年 ' + day + '日 ' + hour + '時 ' + minute + '分 ' + second + '秒'
  }
}, 500)
