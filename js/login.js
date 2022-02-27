import User from './User.js';

if ( JSON.parse(localStorage.getItem('user')) ) {
  location.href = '../index.html';
}

// https://getbootstrap.com/docs/5.1/components/popovers/

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//SIGN-IN

const $loginForm = document.querySelector('#loginForm');
const $createAccountForm = document.querySelector('#createAccountForm');
const accounts = JSON.parse(localStorage.getItem('signedAccount')) || [];
let timerInterval;

$loginForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const $userName = document.querySelector('#userName');
    const $userPassword = document.querySelector('#pwd');

    if ( $userName.value == 'coder' && $userPassword.value == 'house') {
      resetUserCart();
      localStorage.setItem('user', JSON.stringify( new User() ));
      login();
        
    } else if ( accountInDB($userName.value, $userPassword.value) ) {
      resetUserCart();
      localStorage.setItem('user', JSON.stringify( new User($userName.value, $userPassword.value) )); 
      login();
    
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

  // CREATE ACCOUNT

$createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resetUserCart();

    const $userName = document.querySelector('#userInput');
    const $userPassword = document.querySelector('#userPassword');
    
    if (userNameInBd($userName.value) || $userName.value == 'coder') {
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
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal...',
            text: 'El usuario ya se encuentra registrado en la base de datos.',
          })
        }
      });

    } else {
      const newUser = new User($userName.value, $userPassword.value);
      accounts.push(newUser);
      
      localStorage.setItem('user', JSON.stringify( newUser ));
      localStorage.setItem('signedAccount', JSON.stringify(accounts));

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
          location.href = '../index.html';
        }
      });
    }

});

const resetUserCart = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('cart');
};

const accountInDB = (userName, password) => accounts.some(account => account.userName == userName && account.password == password);
const userNameInBd = (userName) => accounts.some(account => account.userName == userName); 

const login = () => {
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
        location.href = '../index.html';
      }
    });
};