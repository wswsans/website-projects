var TimeSet,
  ctd,
  cookies,
  date,
  TimeList,
  setTime,
  setDefault,
  i, n, m,
  Kernel,
  second, SettedSec,
  TimeNameList,
  OK, result

OK = false

setDefault = function () {
  date = new Date()
  date = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()]
  second = parseInt('1' + String(date[0]) + ('00' + String(date[1])).slice(-2) + ('00' + String(date[2])).slice(-2) + ('00' + String(date[3])).slice(-2) + ('00' + String(date[4])).slice(-2) + ('00' + String(date[5])).slice(-2))
  cookies = document.cookie.split('; ')
} // END FUNCTION setDefault

setTime = function () {
  Kernel = ['NullSTR']
  n = 0
  for (i of TimeSet) {
    if (i.value === '') {
      Kernel.push(TimeSet[i].placeholder)
      continue
    } // END IF null
    // if (i.value)
    TimeList[n] = i.value
    n++
  } // END FOR TimeSet
  if (Kernel.length > 1) {
    alert('以下の記入欄が書き込まれてません\n' + Kernel.slice(1))
    return false
  } // END IF KernelLen
  document.cookie = 'ct' + $('#name')[0].value + '=' + encodeURIComponent(TimeList.join('_'))
  location.reload(true)
} // END FUNCTION setTime

function Edit (node) {
  Kernel = node.parentNode.children[3].firstChild.nodeValue.slice(12)
  Kernel = Kernel.split(' ')
  Kernel[1] = Kernel[1].split('/')
  Kernel[2] = Kernel[2].split(':')
  TimeSet = $('#TimeSet')[0].children
  TimeSet[0].value = Kernel[0]
  TimeSet[1].value = Kernel[1][0]
  TimeSet[2].value = Kernel[1][1]
  TimeSet[3].value = Kernel[2][0]
  TimeSet[4].value = Kernel[2][1]
  TimeSet[5].value = Kernel[2][2]
  $('#Setting > #name')[0].value = node.parentNode.children[0].firstChild.nodeValue
}

function Del (node) {
  Kernel = node.parentNode.children[0].firstChild.nodeValue
  result = confirm(Kernel + 'を削除してもいいですか?')
  if (result) {
    document.cookie = 'ct' + Kernel + '=0; max-age=0'
    alert('名前: ' + Kernel + '\nを削除しました')
    location.reload(true)
  }
}

window.onload = function () {
  TimeNameList = [' ', '/', ' ', ':', ':', '']
  TimeSet = $('#TimeSet')[0].children
  ctd = $('#ctd')[0]

  setDefault()

  TimeList = ['Year', 'Month', 'Date', 'Hour', 'Minute', 'Second']
  n = 0
  for (i of TimeSet) {
    i.value = date[n]
    n++
  } // END FOR TimeSet
  TimeSet[4].value++
  TimeSet[5].value = 0

  ctd.innerHTML = ''
  for (i of cookies) {
    if (i.slice(0, 2) === 'ct') {
      Kernel = i.split('=')
      ctd.innerHTML += `
      <div id="` + Kernel[0].slice(2) + `">
        <span id="name">Name</span><br>
        <hr>
        <span id="settedTime">SettedTime: YYYY MM/DD HH:MM:SS</span><br>
        <span id="remaining">Remaining: YYYY MM/DD HH:MM:SS</span><br>
        <span id="edit" onclick="Edit(this)">Edit</span>
        <span id="del" onclick="Del(this)">Delete</span>
      </div>
      `
    } // END IF 'ct'
  } // END FOR cookies
  OK = true
  console.clear()
} // END FUNCTION onload

setInterval(function () {
  if (OK) {
    setDefault()
    for (i of cookies) {
      // console.log('1', i, Kernel, cookies.length, cookies)
      Kernel = i.split('=')
      if (Kernel[0].slice(0, 2) === 'ct') {
        // put text to HTML
        Kernel = [Kernel[0].slice(2), Kernel[1].split('_')]
        $('div#ctd div#' + Kernel[0])[0].children[0].firstChild.nodeValue = Kernel[0]
        $('div#ctd div#' + Kernel[0])[0].children[3].firstChild.nodeValue = 'SettedTime: '
        n = 0
        for (i of Kernel[1]) {
          $('div#ctd div#' + Kernel[0])[0].children[3].firstChild.nodeValue += i + TimeNameList[n]
          n++
        } // END FOR TimeName

        // End?
        SettedSec = parseInt('1' + Kernel[1][0] + ('00' + String(Kernel[1][1])).slice(-2) + ('00' + String(Kernel[1][2])).slice(-2) + ('00' + String(Kernel[1][3])).slice(-2) + ('00' + String(Kernel[1][4])).slice(-2) + ('00' + String(Kernel[1][5])).slice(-2))
        // console.log(SettedSec, second, SettedSec - second)
        if (second >= SettedSec) {
          document.cookie = 'ct' + Kernel[0] + '=0; max-age=0'
          alert('名前: ' + Kernel[0] + '\nが終了しました')
          location.reload(true)
        } // END IF second >= SettedSec

        // Count
        SettedSec = String(SettedSec).slice(-14)
        SettedSec = [SettedSec.slice(0, 4), SettedSec.slice(4, 6), SettedSec.slice(6, 8), SettedSec.slice(8, 10), SettedSec.slice(10, 12), SettedSec.slice(12, 14)]
        n = SettedSec.length - 1
        for (i of SettedSec) { SettedSec[n] = parseInt(SettedSec[n]) - date[n]; n-- }
        SettedSec[5] += 60
        SettedSec[4] -= 1
        m = [0, 12, 30, 24, 60, 60]
        n = SettedSec.length - 1
        for (i of SettedSec.slice().reverse()) {
          if (i === m[n]) {
            SettedSec[n] = 0
            SettedSec[n - 1] += 1
            // console.log(n, 'i===m[n]')
          }
          if (i < 0) {
            SettedSec[n] += m[n]
            SettedSec[n - 1] -= 1
            // console.log(n, 'i<0')
          }
          n--
        }
        $('div#ctd div#' + Kernel[0])[0].children[5].firstChild.nodeValue = 'Remaining: ' + SettedSec
      }
    }
  }
}, 1)
