function getData() {
  var xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {
    var tbody = document.getElementById('data')
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var userData = JSON.parse(xhr.response)
        console.log(userData)
        for (var x = 0; x < userData.length; x++) {
          var tr = document.createElement('tr')
          var id = document.createElement('td')
          var name = document.createElement('td')
          var email = document.createElement('td')

          id.innerHTML = userData[x].id
          name.innerHTML = userData[x].name
          email.innerHTML = userData[x].email

          tr.append(id, name, email)
          tbody.appendChild(tr)
        }
      }
    }
  }
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr.send()
}
