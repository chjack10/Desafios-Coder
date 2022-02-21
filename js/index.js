import domInitialize from './dom.js';

if ( !JSON.parse(localStorage.getItem('user')) ) {
    location.href = './login.html';
}

domInitialize(); 

// User on navbar

const $welcome = document.querySelector('#userWelcome');
const {userName} = JSON.parse(localStorage.getItem('user'));

$welcome.innerHTML = `
    <i class="bi bi-person-circle fs-4 me-2"></i>${userName}</span> 
    <a type="button" id="logout">(Salir)</a>
`;

const $logout = document.querySelector('#logout');

$logout.onclick = () => {

    Swal.fire({
        title: 'Estás seguro que querés salir?',
        text: "Tu carrito va a ser reiniciado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            location.href = 'login.html';
        }
      })
};
