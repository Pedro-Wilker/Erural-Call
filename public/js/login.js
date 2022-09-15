const login = document.querySelector('.login-input');
const senha = document.querySelector('.senha-input');
const button = document.querySelector('.button-login');
const form = document.querySelector('.login-form');


const validateLogin = (target) => {
   console.log(target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("User", login.value);
    window.location= 'pages/transmissao.html';

}

login.addEventListener('login', validateLogin);
form.addEventListener('submit', handleSubmit);