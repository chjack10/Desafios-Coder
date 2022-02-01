export default class Bill {
    
    constructor (subTotal) {
        this.subTotal = subTotal;
        this.iva = 0.21 * this.subTotal;
        this.Total = this.subTotal + this.iva;
    }

    print() {
        alert(`*** FACTURA ***

        Subtotal: $ ${this.subTotal.toFixed(2)} \n
        iva: $ ${this.iva.toFixed(2)} \n
        Total: $ ${this.Total.toFixed(2)}
        
        *** (Productos en consola) ***
    `);
    }

}
