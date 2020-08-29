var width, height,
  streaming,
  video, canvas,
  context, data, imgPngSrc

width = 320 // We will scale the photo width to this
height = 0 // This will be computed based on the input stream

streaming = false

video = null
canvas = null

function clearphoto () {
  context = canvas.getContext('2d')
  context.fillStyle = '#AAA'
  context.fillRect(0, 0, canvas.width, canvas.height)
}

window.onload = function () {
  video = document.getElementById('video')
  canvas = document.getElementById('canvas')

  streaming = false
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream
      video.play()
    })
    .catch(function (err) {
      console.log('An error occured! ' + err)
    })

  video.addEventListener('canplay', function (ev) {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width)

      video.setAttribute('width', width)
      video.setAttribute('height', height)
      canvas.setAttribute('width', width)
      canvas.setAttribute('height', height)
      streaming = true
    }
  }, false)

  clearphoto()
  console.clear()
}

setInterval(function () {
  context = canvas.getContext('2d')
  if (width && height) {
    canvas.width = width
    canvas.height = height
    context.drawImage(video, 0, 0, width, height)

    data = canvas.toDataURL('image/png').replace(/^.*,/, '')
  } else {
    clearphoto()
  }

  imgPngSrc = $('canvas#canvas')[0].toDataURL()

  qrcode.callback = function (res) {
    if (!(res instanceof Error)) {
      console.log('Found', res)
      alert('Result: ' + res)
    }
  }
  qrcode.decode(imgPngSrc)
}, 1)
