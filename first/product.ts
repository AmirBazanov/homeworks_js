export class Product {

    constructor(name: string, price: number, quantity: number, description: string) {
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.name = name;
    }

    price: number;
    quantity: number;
    description: string;
    name: string;

    static sortByString = (str: string) => {

    }
}

let arrOfProducts = [new Product('fd', 2, 22, 'ssss'),
    new Product('fd', 2, 222, 'ssss'), new Product('hi', 12, 2, 'ssss'),
    new Product('hh', 12, 2, 'ssss')]

console.log(arrOfProducts)