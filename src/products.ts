export interface Product {
    name : string;
    price : number;
}

const products:Product[] = [
    { name: 'Coke Zero',
      price: 1
    },
    { name: 'Gatorade',
      price: 2
    }
];

export function calcAverageProductPrice(products:Product[]) {
    if (products.length === 0)
        return 0;
    const average = products.reduce((total,next) => total + next.price,0) / products.length;
    return average;
}

function calcAverageProductPrice1(products:Product[]) {
    if (products.length === 0)
        return 0;

        return products
            .map(p => p.price)
            .reduce((sum, currentValue) => sum = sum + currentValue,0) / products.length;    
}

// console.log(calcAverageProductPrice1(products));


