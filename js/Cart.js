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

  removeItem(id) {
    const itemIndex = this.items.findIndex(product => product.id === id);

    if(itemIndex === -1) {
      alert('No tenés ese producto en el carrito');

    } else { 
      alert(`${this.items[itemIndex].name} eliminado del carrito. Podés ver lo que tenés en el carrito en consola.`);

      this.subTotal -= this.items[itemIndex].price * this.items[itemIndex].amount;
      
      this.items.splice(itemIndex, 1);
      this.printItems();
    }
  }

  printItems() {
    this.items.length === 0
      ? console.warn("No tenes productos en el carrito")
      : console.log('En el carrito:', ...this.items);
  }
}
