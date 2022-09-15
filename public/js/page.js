const spanUser = document.getElementsByClassName('user');

spanUser.innerHTML = localStorage.getItem('User');

console.log(spanUser);
