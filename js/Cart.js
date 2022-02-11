export default class Cart {
  
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
    this.subTotal = 0;
  }
  
  addItem(item) {
    const itemIndex = this.items.findIndex(product => product.id == item.id);

    if ( itemIndex == -1 ) {
      this.items.push(item);

    } else {
      this.items[itemIndex].quantity += item.quantity;
    }
    
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.subTotal += item.price * item.quantity;
  }

  removeItem(id) {
    const itemIndex = this.items.findIndex(product => product.id == id);
    this.subTotal -= this.items[itemIndex].price * this.items[itemIndex].quantity;
  
    this.items.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  updateItemQuantity(id, quantity) {
    const itemIndex = this.items.findIndex(product => product.id == id);
    
    this.subTotal -= this.items[itemIndex].price * this.items[itemIndex].quantity;
    this.items[itemIndex].quantity = quantity;
    this.subTotal += this.items[itemIndex].price * this.items[itemIndex].quantity;
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  reset() {
    if (confirm('Estas seguro que querés vaciar el carrito?')) { 
      localStorage.clear();
      this.items = [];
      this.subTotal = 0; 
    }
  }

  getIva() {
    return this.subTotal * 0.21;
  }

  getTotal() {
    return this.getIva() + this.subTotal;
  }
}