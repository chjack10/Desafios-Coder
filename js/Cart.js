export default class Cart {
  
  constructor() {
    this.items = [];
    this.subTotal = 0;
  }

  addItem(item) {
    const { id, price, amount } = item;
    const itemIndex = this.items.findIndex(product => product.id === id);

    itemIndex === -1
    ? this.items.push(item)
    : this.items[itemIndex].amount += amount;

    this.subTotal += price * amount;
  }

  printItems() {
    this.items.length === 0
      ? console.warn("No tenes productos en el carrito")
      : console.log('En el carrito:', ...this.items);
  }
}
