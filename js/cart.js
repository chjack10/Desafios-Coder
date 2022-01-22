const totalProductPrice = itemPrice => {
    let amount;
    let validInput;

    do {
        amount = parseInt(prompt('Ingresá la cantidad').trim());
        isNaN(amount) || amount < 1 ? alert('Error: Ingresá una cantidad válida') : validInput = true;

    } while(!validInput)

    return amount * itemPrice;
};

export default totalProductPrice;