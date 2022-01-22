const showTotal = subTotal  => {    
    const iva = subTotal * 0.21;

    alert(`*** FACTURA *** \n

        Subtotal: $ ${subTotal} \n
        iva: $ ${iva.toFixed(2)} \n
        Total: $ ${(subTotal + iva).toFixed(2)}
    `);
};

export default showTotal;