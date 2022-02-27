import Cart from './Cart.js';

// "$variable_name" means: a DOM element.

export const cart = new Cart();

const addCartEventListeners = () => {
    const $removeBtn = document.querySelectorAll('.removeItem');
                
    $removeBtn.forEach(enlistedProduct => {
        enlistedProduct.onclick = ( {target} ) => {
            cart.removeItem(target.parentNode.getAttribute('data-id'));
            target.parentNode.remove();
            refreshCartDisplay();
        };
    });

    const $quantityBtn = document.querySelectorAll('.quantity')

    $quantityBtn.forEach(enlistedProduct => {
        enlistedProduct.onchange = ( {target} ) => {
            cart.updateItemQuantity( target.parentNode.getAttribute('data-id'), target.value);
            refreshCartDisplay();
        };
    });

    document.querySelector('.resetCart').onclick = () => cart.reset(refreshCartDisplay);
}

const refreshCartDisplay = () => {
    const $cart = document.querySelector('.cart');
    const $cartNotification = document.querySelector('#cartNotification');
    const $checkoutBtn = document.querySelector('.checkoutBtn');
    const $resetCart = document.querySelector('.resetCart');
    const $subTotal = document.querySelector('.subTotal');

    if (cart.items.length === 0 ) {
        $cartNotification?.classList.add('d-none');
        $checkoutBtn?.classList.add('d-none');
        $resetCart?.classList.add('d-none');
        
        $cart.innerHTML = (`
        <li class="row justify-content-center defaultMessage">
            No tenés productos en el carrito.
        </li>
        `);

        $subTotal.innerHTML ='';
        
    } else {
        $cartNotification?.classList.remove('d-none');
        $cartNotification.innerHTML = `${cart.items.length}`;
        $checkoutBtn?.classList.remove('d-none');
        $resetCart?.classList.remove('d-none');
        
        $cart.innerHTML = '';

        cart.items.forEach(({ id, name, price, img, quantity }) => {

            $cart.innerHTML += (`
                <li class="row align-items-center justify-content-between p-2 border" data-id="${id}">
                    <img class="col-4" src="${img}" height="100" width="100">          
                    <span class="col-3 itemName">${name}</span>
                    <strong class="col-2 itemPrice">$${(price * quantity).toFixed(2)}</strong>
                    <input class="col-2 quantity" type="number" value="${quantity}" min="1" max="99">
                    <i type="button" class="bi bi-x-circle text-danger col-1 p-0 removeItem"></i>
                </li>
            `);
            
            $subTotal.innerHTML = (`
                <li>Subtotal: $${cart.getSubTotal()}</li>
                <li>     Iva: $${cart.getIva()}</li>
                <li class = "fw-bold">   Total: $${cart.getTotal()}</li>    
            `);

            addCartEventListeners();
        });
    }
};

export default refreshCartDisplay;