import Bill from "./Bill.js";
import Cart from "./Cart.js";
import Item from "./Item.js";

// Variables load

let productId;
let repeat = true;
const cart = new Cart();

// Functions load

const getAmount = () => {
  let validInput = false;
  let amount = 0;

  do {
    amount = parseInt(prompt('Ingresá la cantidad').trim());

    isNaN(amount) || amount < 1
      ? alert("Error: Ingresá una cantidad válida")
      : (validInput = true);

  } while (!validInput);

  return amount;
}

const getProductId = () => {

  while(repeat) {
    const id = parseInt(prompt('Ingresá el código del producto que querés eliminar.').trim());

    if (id > 0 && id < 7) {
      return id;

    } else {
      alert('Ingresá un código de item válido.');
    }
  }
}

// Main

alert("Vamos a simular un carrito y una factura");

do {
  productId = parseInt(
    prompt("Ingresá el código del producto que quieras seleccionar").trim()
  );

  switch (productId) {
    
    case 0:
      repeat = false;
      break;

    case 1: 
      cart.addItem(new Item( productId, 'Café', 10.13, getAmount() ));
      break;

    case 2:
      cart.addItem(new Item( productId, 'Tostados j/q', 20.3, getAmount() ));
      break;

    case 3:
      cart.addItem(new Item( productId, 'Coca-cola 500ml', 8.53, getAmount() ));
      break;

    case 4:
      cart.addItem(new Item( productId, 'Barra de cereal', 5.78, getAmount() ));
      break;

    case 5:
      cart.addItem(new Item( productId, 'Sanguche de milanesa', 32.87, getAmount() ));
      break;

    case 6:
      cart.addItem(new Item( productId, 'Yogurt bebible', 14.1, getAmount() ));
      break;

    case 7:
      cart.printItems();
      break;

    case 8:
      cart.removeItem( getProductId() );
      break;

    default:
      alert("Error: Ingresá un código válido");
  }
} while (repeat);

const bill = new Bill(cart.subTotal);
cart.printItems();
bill.print();
