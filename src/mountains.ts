interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: "kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];

export function findNameOfTallestMountain(arrOfMountains: Mountain[]): string {
    const tallestMountain:Mountain = arrOfMountains.reduce(( mountain, tallest) => {
        return (mountain.height > tallest.height) ? mountain : tallest;
    });
    
    return tallestMountain.name;
}