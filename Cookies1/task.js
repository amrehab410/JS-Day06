function getCookie(cookieName) {
  var cookies = document.cookie.split(';')
  var outCookie = 0
  for (var i = 0; i < cookies.length; i++) {
    var finalCookie = cookies[i].split('=')
    if (finalCookie[0].trim() == cookieName) {
      outCookie = finalCookie[0].trim() + '=' + finalCookie[1].trim()
    }
  }
  console.log(outCookie)
  return outCookie
}

function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = cookieName + '=' + cookieValue + ';expires=' + expiryDate
}

function deleteCookie(cookieName) {
  var date = new Date()
  date.setDate(date.getDate() - 1)
  getCookie(cookieName)
  var cookieValue = 'amr'
  document.cookie = cookieName + '=' + cookieValue + ';expires=' + date
}

function allCookieList() {
  console.log(document.cookie)
}

function hasCookie(cookieName) {
  if (getCookie(cookieName) != 0) {
    console.log('this cookie exists')
  } else {
    console.log("this cookie doesn't exist")
  }
}

var newDate = new Date()
newDate.setDate(newDate.getDate() + 5)
//deleteCookie('pass')
// setCookie('pass', 'amr', newDate)
//setCookie('name', 'amr', newDate)
getCookie('name')
//hasCookie('email')
