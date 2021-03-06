// Tuple
const dadosClientel: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

// dadosCliente1[0]=100;
// dadosCliente1[1]='Carlos';

console.log(dadosClientel);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly arrayI
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];
console.log(array1);
console.log(array2);
