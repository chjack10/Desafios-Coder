export default class Cart {
  
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  addItem(item) {
    const itemIndex = this.items.findIndex(product => product.id == item.id);

    itemIndex == -1
    ? this.items.push(item)
    : this.items[itemIndex].quantity += item.quantity; 

    // if ( itemIndex == -1 ) {
    //   this.items.push(item);

    // } else {
    //   this.items[itemIndex].quantity += item.quantity;
    // }
    
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  removeItem(id) {
    const itemIndex = this.items.findIndex(product => product.id == id);
  
    this.items.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  updateItemQuantity(id, quantity) {
    const itemIndex = this.items.findIndex(product => product.id == id);
  
    this.items[itemIndex].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  reset() {
    if (confirm('Estas seguro que querés vaciar el carrito?')) { 
      localStorage.clear();
      this.items = [];
    }
  }

  getSubTotal() {
    // return parseFloat( (this.items.reduce((acc, item) => item.quantity * item.price + acc , 0)).toFixed(2) );
    const summatory = (...args) => args.reduce((acc, current) => acc += current);
    const values = this.items.map(item => item.price * item.quantity);

    return parseFloat( summatory(...values).toFixed(2) );
  }

  getIva() {
    return parseFloat( (this.getSubTotal() * 0.21).toFixed(2) );
  }

  getTotal() {
    return parseFloat( (this.getIva() + this.getSubTotal()).toFixed(2) );
  }
}