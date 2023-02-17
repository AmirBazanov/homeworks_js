export class MathOperations {
    static sum = (...args: number[]) => {
        return args.reduce(function (a, b) {
            return a + b;
        })
    }
    static minus = (...args: number[]) => {
        return args.reduce(function (a, b) {
            return a - b;
        })
    }

    static multiply = (...args: number[]) => {
        return args.reduce(function (a, b) {
            return a * b;
        })
    }

    static division = (...args: number[]) => {
        return args.reduce(function (a, b) {
            return a / b;
        })
    }
}

console.log(MathOperations.division(10, 2))