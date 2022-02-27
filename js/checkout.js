import Cart from './Cart.js';

if ( !JSON.parse(localStorage.getItem('cart')) ) {
    location.href = './login.html';
}
// CODE COPIED FROM BOOTSTRAP 5 DOCS ==> https://getbootstrap.com/docs/5.1/forms/validation/
// SWAL ADDED

(function () {
    'use strict'
    let timerInterval;
    const processPayment = () => {
    
        Swal.fire({
            title: 'Procesando el pago...',
            timer: 2000,
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
                icon: 'success',
                title: 'El pago fué realizado correctamente.',
                text: 'Que lo disfrutes!!!',
                showConfirmButton: false,
                timer: 3500
                }).then( () => {
                    localStorage.removeItem('cart');
                    location.href = '../index.html';
                })
            }
          });
    };

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission. Once all fields were validated, call swal.
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()

                } else {
                    event.preventDefault()
                    processPayment()
                }

                form.classList.add('was-validated')                
            }, false) 
        })
})();

// Load cart DOM

( () => {
    const cart = new Cart();
    const $checkOutCart = document.querySelector('#checkoutCart');
    const $paymentForm = document.querySelector('#paymentForm');
    let timerInterval;

    // APPEND BASE TEMPLATE

    $checkOutCart.innerHTML = (`
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">En tu carrito</span>
            <span class="badge bg-primary rounded-pill">${cart.items.length}</span>
        </h4>
        <ul class="list-group mb-3 itemList">

        </ul>
    `);
    
    // APPEND ITEMS IN CART

    const $itemList = document.querySelector('.itemList'); 

    cart.items.forEach(({ name, price, img, quantity }) => {

        $itemList.innerHTML += (`
        <li class="list-group-item d-flex align-items-center">
            <img class="col-2" src="../${img}" height="50" width="50">
            <h6 class="my-0 col-6">${name}</h6>
            <span class="text-muted col-2">x${quantity} u</span>
            <span class="col-2 text-end">$${(quantity * price).toFixed(2)}</span>
        </li>
        `);
    });
    
    // APPEND RESUME

    $itemList.innerHTML += (`
    <li class="list-group-item d-flex justify-content-between">
        <span class="fst-italic">Subtotal</span>
        <span>$${cart.getSubTotal()}</span>
    </li>

    <li class="list-group-item d-flex justify-content-between">
        <span class="fst-italic">Iva</span>
        <span>$${cart.getIva()}</span>
    </li>
    
    <li class="list-group-item d-flex justify-content-between bg-light">
        <span>Importe total</span>
        <strong>$${cart.getTotal()}</strong>
    </li>

    `);

}) (); // invoke immediately