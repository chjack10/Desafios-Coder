import totalProductPrice from './cart.js';
import showTotal from './bill.js';

let subTotal = 0;
let itemPrice;
let productId;
let repeat = true;

alert('Vamos a simular una factura');

do {
    productId = parseInt(prompt('Ingresá el código del producto que quieras seleccionar').trim());
    
    switch(productId) {

        case 0:
            repeat = false;
            break;
    
        case 1:
            itemPrice = 10.13;
            subTotal += totalProductPrice(itemPrice);
            break;
    
        case 2:
            itemPrice = 20.30;
            subTotal += totalProductPrice(itemPrice);
            break;
            
        case 3:
            itemPrice = 8.53;
            subTotal += totalProductPrice(itemPrice);
            break;
    
        case 4:
            itemPrice = 5.78;
            subTotal += totalProductPrice(itemPrice);
            break;
    
        case 5:
            itemPrice = 32.87;
            subTotal += totalProductPrice(itemPrice);
            break;

        case 6:
            itemPrice = 14.10;
            subTotal += totalProductPrice(itemPrice);
            break;
        
        default:
            alert('Error: Ingresá un código válido');
    }
    
} while (repeat);

showTotal(subTotal);