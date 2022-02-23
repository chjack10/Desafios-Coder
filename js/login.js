import User from './User.js';

if ( JSON.parse(localStorage.getItem('user')) ) {
  location.href = './index.html';
}

// https://getbootstrap.com/docs/5.1/components/popovers/

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//own code

const $loginForm = document.querySelector('#loginForm');
const $loginCheckBox = document.querySelector('#loginCheckBox');
const $createAccountForm = document.querySelector('#createAccountForm');
let timerInterval;

$loginForm.addEventListener('DOMContentLoaded' , () => {
    
    // localStorage.clear();
    // localStorage.setItem('user', JSON.stringify( new User() ));

});


$loginForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const $userName = document.querySelector('#userName');
    const $userPassword = document.querySelector('#pwd');

    if ( $userName.value == 'coder' && $userPassword.value == 'house') {
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify( new User() ));

        Swal.fire({
          title: 'Autenticando...',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            location.href = './index.html';
          }
        });
        
    } else {     
        Swal.fire({
            title: 'Autenticando...',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              Swal.fire({
                  icon: 'error',
                  title: 'Algo salió mal...',
                  text: 'El usuario no existe o los datos ingresados son incorrectos.',
                })
            }
          });
    }
});

$createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.clear();

    const $userInput = document.querySelector('#userInput');
    const $userPassword = document.querySelector('#userPassword');

    localStorage.setItem('user', JSON.stringify( new User($userInput.value, $userPassword.value) ));

    Swal.fire({
        title: 'Procesando los datos...',
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          location.href = './index.html';
        }
      });
});