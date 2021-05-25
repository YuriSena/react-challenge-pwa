// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function ex1 (n, c) {
    var vet = [];
    for(let i=0; i<n; i++){
        vet.push(c);
    }
    return vet;
}

console.log("Exercício 1) " + ex1(3, "a") + "\n");


// --------------------------------------------------------------------------------------------
// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const ex2 = (arr) => {
    let inv = [];
    for(let i=arr.length-1; i > -1; i--){
        inv.push(arr[i]);
    }
    return inv;
}

console.log("Exercício 2) " + ex2([1,2,3,4]) + '\n');


// --------------------------------------------------------------------------------------------
// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

const ex3 = (arr) => {
    arr = arr.filter(a => (a != false, a != undefined, a, a != 0, a != null));
    arr = arr.filter(a => a);
    return arr;
}

console.log("Exercício 3) " + ex3([1,2,'', undefined, false, null]) + "\n");


// --------------------------------------------------------------------------------------------
// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}


const ex4 = (arr) => {
    // let obj = {};
    // for(let a of arr){
    //     obj = {...(a.reduce())};
    // }
    const obj = {};
    arr.forEach(e => { Object.assign(obj, { [e[0]]: e[1] }) });
    return obj;
}

console.log("Exercício 4) ");
console.log(ex4([['c',2],['d',4]]));
console.log("\n");



// --------------------------------------------------------------------------------------------
// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const ex5 = (arr, ...itens) => {
    let vet = [];
    for(let i=0; i<arr.length; i++){
        aux = 0;
        for(let j=0; j<itens.length; j++) {
            if(arr[i] == itens[j]) {
                aux = 1;
            }
        }
        if(aux == 0) {
            vet.push(arr[i]);
        }
    }
    
    return vet;
}

console.log("Exercício 5) " + ex5([5,4,3,2,5], 5,3) + '\n');



// --------------------------------------------------------------------------------------------
// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const ex6 = (arr) =>  {
    arr = arr.filter((itens, index, self) => (self.findIndex((t) => t == itens) === index))
    return arr;
}

console.log("Exercício 6) " + ex6([1,2,3,3,2,4,5,4,7,3]) + "\n");



// --------------------------------------------------------------------------------------------
// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

const ex7 = (arr1, arr2) => arr1.toString() == arr2.toString();

console.log("Exercício 7) " + ex7([1,2,3,4],[1,2,3,4]) + '\n');



// --------------------------------------------------------------------------------------------
// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

const ex8 = (arr) => arr = arr.flat();

console.log("Exercício 8) ");
console.log(ex8([1, 2, [3], [4, 5]]));




// --------------------------------------------------------------------------------------------
// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

const ex9 = (arr, tam) => {
    var aux = [];
    for (var i=0; i<arr.length; i+=tam){
    aux.push(arr.slice(i,i+tam));
    }
    return aux;
}

console.log("Exercício 9) ");
console.log(ex9([1, 2, 3, 4, 5], 3));



// --------------------------------------------------------------------------------------------
// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

const ex10 = (arr1, arr2) =>  {
    let aux = [];
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            if(arr1[i] == arr2[j]){
                aux.push(arr1[i]);
            }
        }
    }
    return aux;
}

console.log("Exercício 10) ");
console.log(ex10([6, 8,], [8, 9]));