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

    static parseStrings = (str: string) => {
        const filteredProducts: Product[] = [];
        const sliced: string[] = str.split('&')
        const props: string[][] = [];
        sliced.forEach((el) => {
            props.push(el.split('-'))
        })
        arrOfProducts.find((product: Product) => {
            const isCriterionPass: boolean[] = []
            props.forEach(el => {
                if (el[1].match(/\d$/g)) {
                    const criterion: string = el[1].slice(0, el[1].length - 1)
                    const value: number = Number(el[1].slice(el[1].length - 1, el[1].length))
                    isCriterionPass.push(Product.compareNumber(criterion, el[0], value, product)!)
                } else {
                    const criterion: string = el[1]
                    const value: string = el[2]
                    isCriterionPass.push(Product.compareString(criterion, value, el[0], product)!)

                }
            })
            if (new Set(isCriterionPass).size == 1 && isCriterionPass[0]) {
                filteredProducts.push(product)
            }

        })
        return filteredProducts

    }

    private static compareString = (criterion: string, value: string, type: string, product: Record<string, any>) => {
        switch (criterion) {
            case 'contains':
                return !!product[type].match(new RegExp(value, 'g'));
            case 'ends':
                return !!product[type].match(new RegExp(value + '$', 'g'));
            case 'starts':
                return !!product[type].match(new RegExp('^' + value, 'g'));
        }
    }

    private static compareNumber = (criterion: string, type: string, value: number, product: Record<string, any>) => {
        switch (criterion) {
            case '>':
                return product[type] > value;

            case '<':
                return product[type] < value;

            case '<=':
                return product[type] <= value;

            case '>=':
                return product[type] >= value;
            case '=':
                return product[type] == value;

        }
    }
}

let arrOfProducts = [new Product('asdfd', 22, 22, 'abc'),
    new Product('fd', 2, 222, 'ssssabc'),
    new Product('hi', 12, 2, 'ssssabc'),
    new Product('hh', 12, 2, 'ssss')]

console.log(Product.parseStrings('name-ends-fd&price->=2&quantity->5&description-ends-abc'))
