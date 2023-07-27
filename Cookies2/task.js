var userName = document.getElementById('name')
var nameError = document.getElementById('nameError')
var age = document.getElementById('age')
var ageError = document.getElementById('ageError')
var male = document.getElementById('male')
var female = document.getElementById('female')
var genderError = document.getElementById('genderError')
var color = document.getElementById('color')
var colorError = document.getElementById('colorError')
var submitError = document.getElementById('submitError')
var gender = 0
var nameFlag = false
var ageFlag = false
var genderFlag = false
var colorFlag = false
var counter = 1
//  else {
//   genderError.style.display = 'block'
// }
function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = cookieName + '=' + cookieValue + ';expires=' + expiryDate
}
userName.addEventListener('focus', function (e) {
  userName.style.border = '2px solid blue'
})
userName.addEventListener('blur', function (e) {
  userName.style.border = '2px solid orange'
})
age.addEventListener('focus', function (e) {
  age.style.border = '2px solid blue'
})
age.addEventListener('blur', function (e) {
  age.style.border = '2px solid orange'
})
userName.addEventListener('input', function () {
  console.log('user' + userName.value.length)
  if (userName.value.length < 3) {
    nameError.style.display = 'block'
    nameFlag = false
  } else {
    nameError.style.display = 'none'
    nameFlag = true
  }
})
age.addEventListener('input', function () {
  // console.log('user' + userName.value.length)
  if (age.value < 18) {
    ageError.style.display = 'block'
    ageFlag = false
  } else {
    ageError.style.display = 'none'
    ageFlag = true
  }
})
function register() {
  if (male.checked) {
    gender = 'male'
    genderError.style.display = 'none'
    genderFlag = true
  } else if (female.checked) {
    gender = 'female'
    genderError.style.display = 'none'
    genderFlag = true
  } else {
    genderError.style.display = 'block'
  }
  if (color.value == '') {
    colorFlag = false
    colorError.style.display = 'block'
  } else {
    colorFlag = true
    colorError.style.display = 'none'
  }
  var date = new Date()
  setCookie('name', userName.value, date)
  setCookie('gender', gender, date)
  setCookie('color', color.value.toLowerCase(), date)
  setCookie('counter', counter, date)
  if (nameFlag && ageFlag && genderFlag && colorFlag) {
    submitError.style.display = 'none'
    open('./secondWindow.html')
  } else {
    submitError.style.display = 'block'
  }
}
