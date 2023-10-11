// Call the dataTables jQuery plugin
$(document).ready(function() {
    loadUsers();
  $('#users').DataTable();

  updateUserEmailToolbar();
});

function updateUserEmailToolbar() {
    document.getElementById('userEmailToolbar').outerHTML = localStorage.email;
}

function getHeaders() {
 return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token
    };
}

async function loadUsers() {
  const request = await fetch('api/users', {
    method: 'GET',
    headers: getHeaders()
  });

  const users = await request.json();


  let listHtml = '';

  for(let user of users) {
      let deleteButton = '<a href="#" onclick="deleteUser('+user.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
      let userHtml = '<tr><td>'
                +user.name+'</td><td>'
                +user.email+'</td><td>'
                +user.id+'</td><td>' + deleteButton + '</td></tr>';
      listHtml += userHtml;
  }

  console.log(users);
  document.querySelector('#users tbody').outerHTML = listHtml;
}

async function deleteUser(id) {
  if(!confirm('¿Delete this user?')) {
    return;
  }

  const request = await fetch('api/users/' + id, {
    method: 'DELETE',
    headers: getHeaders()
  });

  location.reload();
}