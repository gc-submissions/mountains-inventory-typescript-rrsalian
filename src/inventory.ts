import { Product } from './products';

interface InventoryItem {
    product : Product;
    quantity : number;
}


const inventories: InventoryItem[] = [    
    { product: {name: 'motor', price:10.00} , quantity: 10 },
    { product: {name: 'sensor', price:12.50} , quantity: 4 },
    { product: {name: 'LED', price:1.00} , quantity: 20 }
];

function calcInventoryValue( items:InventoryItem[]): void {
    let totalValue;
    if (items.length === 0)
        totalValue = 0;

    totalValue = items
                    .map(item => item.product.price * item.quantity)
                    .reduce((sum, currentValue) => sum += currentValue,0);

    console.log(totalValue);    
}

console.log(calcInventoryValue(inventories));