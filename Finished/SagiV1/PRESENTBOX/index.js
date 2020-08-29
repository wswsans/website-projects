var Small, Big, ImageChange, RouletteResult,
  objDef,
  resVar,
  i, Remaining, ct

// node.style.width = '90px'; node.style.height = '76px'

function wait (msec) {
  objDef = new $.Deferred()
  setTimeout(function () {
    objDef.resolve(msec)
  }, msec)
  return objDef.promise()
}

Small = function (node, size) {
  if (ct >= 0) {
    wait(1).done(function () {
      node.style.width = node.style.height = size + 'px'
      if (size >= 0) { Small(node, size--) }
    })
    if (size === 0) { ImageChange(node, size) }
    console.log(size--)
  }
}

ImageChange = function (node, size) {
  if (Math.floor(Math.random() * 5) + 0 === 2) {
    node.src = 'PresentImages/' + ['MacBookAir1', 'MacBookAir2', 'MacBookPro', 'MacPro', 'NintendoSwitch', 'PlayStation4'][Math.floor(Math.random() * 5) + 0] + '.jpg'
    resVar = true
  }
  Remaining--
  $('#Remaining')[0].firstChild.nodeValue = 'あと' + Remaining + '回'
  node.onclick = function () { console.log('だめ') }
  Big(node, size++)
}

Big = function (node, size) {
  wait(1).done(function () {
    node.style.width = node.style.height = size + 'px'
    if (size <= 80) { Big(node, size++) }
  })
  if (size === 80) { RouletteResult(node) }
  console.log(size++)
}

RouletteResult = function (node) {
  if (Remaining <= 0) {
    if (!resVar) {
      alert('おしぃ!\n今回のチャレンジは失敗してしまいました...\n(まぁ，リログすればもう一回できるけど)')
    }
  } else {
    if (resVar) {
      alert('やったね!\n商品をゲットしました!')
      setTimeout(function () {
        alert('...')
        alert('とでも言うと思った?')
        alert('バカだねぇ')
        alert('世界そんな優しくないよ')
        alert('^q^ < 処理落ち')
        location.href = './baka.html'
        // while (true) { console.log('ばーか') }
      }, 1000)
    }
  }
}

window.onload = function () {
  Remaining = 10; ct = 10 * 60
  resVar = false
  $('#Remaining')[0].firstChild.nodeValue = 'あと' + Remaining + '回'
  for (i of $('#Boxes')[0].children) { i.children.Box.style.height = i.children.Box.style.width = '80px' }
  for (i of $('#Images')[0].children) { i.children[0].style.height = i.children[0].style.width = '80px' }
}

setInterval(function () {
  $('#ct')[0].firstChild.nodeValue = '残り' + ct + '秒'
  console.log(ct)
  ct--
  if (ct === 0) {
    alert('時間が経ったから，もうだめ\nまた今度!\n(といってもリログすればよし)')
  }
}, 1000)
