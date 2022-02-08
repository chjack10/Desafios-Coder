class Item {
    constructor(id, name, price, img = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png', quantity = 1) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img
        this.quantity = quantity; 
    }
}

const getItems = () => [
    new Item(1, 'Café', 10.13, './img/items/cafe.png'),
    new Item(2, 'Tostados j/q', 20.3, './img/items/tostados.png'),
    new Item(3, 'Coca-cola 500ml', 8.53, './img/items/coca-cola.png'),
    new Item(4, 'Barra de cereal', 5.78, './img/items/barra-cereal.png'),
    new Item(5, 'Sanguche de milanesa', 32.87, './img/items/milanesa.png'),
    new Item(6, 'Yogurt bebible', 14.1, './img/items/yogurt.png'),
];

const getItem = id => getItems().find(el => el.id == id);

export { getItems, getItem };