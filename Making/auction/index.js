console.log('Script for index.html')
var start, end,
	tmp
start = Number(new Date())
$(function () {
	if (window.location.search == '') {
		window.location.search = '?link=products'
	}
	gets = {origin: window.location.search.slice(1).split('&'), parameter: {}}
	for (Num in gets.origin) {
		tmp = gets.origin[Num].split('=')
		gets.parameter[tmp[0]] = tmp.slice(1).join('=')
		tmp = ''
	}
	if (gets.parameter.link == '') { window.location.search = '?link=products' }
	url = 'https://script.google.com/macros/s/' + ['AKfycbxHmxtwmGzKGF_UXrWzqGlFaLPVa3CxpAyZzjRILricFvdfEMI', 'AKfycbxtCDvcJEyM0ju0qDkIh8ftFZCQJFxJ-ox_NpWnK5atVdi35K1a'][1] + '/exec'
	$.ajax('./files/Frame_' + gets.parameter.link + '.html', 'get')
	.done(function (data) {
		console.log('Frame loaded!')
		$('section#contents')[0].innerHTML = String(data)
		document.title = $('input#title')[0].value + ' - オークションサイト'
		tmp = String(data).split('<script type="text/javascript">')
		tmp = tmp.slice(1)
		console.log('Script for Frame:', gets.parameter.link)
		for (Num in tmp){
			eval(tmp[Num].split('</script>')[0])
		}
	})
	.fail(function (data) {
		console.log('404 Not Found.')
		document.title = '404 Not Found'
		window.location.search = '?link=products'
		// $('section#contents')[0].innerHTML = 'This link is not found.\nAfter 5 seconds, Move index page.'
	})
})