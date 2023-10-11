$(document).ready(function() {
    // on ready
});

async function registerUser() {

  let data = {};
  data.name = document.getElementById('NameRegister').value;
  data.email = document.getElementById('EmailRegister').value;
  data.password = document.getElementById('PasswordRegister').value;

  let repeatPassword = document.getElementById('RepeatPasswordRegister').value;

  if(repeatPassword != data.password) {
    alert("Password do not match.");
    return;
  }

  const request = await fetch('api/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  alert("Registration successful.")
  window.location.href = 'login.html'
}
