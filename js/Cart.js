export default class Cart {
  
  constructor() {
    this.items = [];
    this.subTotal = 0;
  }
  
  addItem(item) {
    const itemIndex = this.items.findIndex(product => product.id == item.id);

    itemIndex == -1
    ? this.items.push(item)
    : this.items[itemIndex].quantity += item.quantity;

    this.subTotal += item.price * item.quantity;
  }

  removeItem(id) {
    const itemIndex = this.items.findIndex(product => product.id == id);
    this.subTotal -= this.items[itemIndex].price * this.items[itemIndex].quantity;
  
    this.items.splice(itemIndex, 1);
  }

  updateItemQuantity(id, quantity) {
    const itemIndex = this.items.findIndex(product => product.id == id);
    
    this.subTotal -= this.items[itemIndex].price * this.items[itemIndex].quantity;
    this.items[itemIndex].quantity = quantity;
    this.subTotal += this.items[itemIndex].price * this.items[itemIndex].quantity;
  }

  getIva() {
    return this.subTotal * 0.21;
  }

  getTotal() {
    return this.getIva() + this.subTotal;
  }
}