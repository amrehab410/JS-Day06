var p = document.getElementById('resultText')
var img = document.getElementById('resultImg')
var cookieValue = 0
function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = cookieName + '=' + cookieValue + ';expires=' + expiryDate
}
function getCookie(cookieName) {
  var cookies = document.cookie.split(';')
  var outCookie = 0
  for (var i = 0; i < cookies.length; i++) {
    var finalCookie = cookies[i].split('=')
    if (finalCookie[0].trim() == cookieName) {
      outCookie = finalCookie[0].trim() + '=' + finalCookie[1].trim()
      cookieValue = finalCookie[1].trim()
    }
  }
  console.log(finalCookie[1].trim())
  return cookieValue
}
var date = new Date()
var userName = getCookie('name')
var gender = getCookie('gender')
var color = getCookie('color')
var counter = getCookie('counter')
if (gender == 'male') {
  img.src = './1.jpg'
} else {
  img.src = './2.jpg'
}
p.innerHTML =
  'Welcome <span style="color: ' +
  color +
  '";>' +
  userName +
  '</span>, You visited this site <span style="color: ' +
  color +
  '";>' +
  counter +
  '</span> times '
setCookie('counter', Number(counter) + 1, date)
