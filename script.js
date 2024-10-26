console.log("hola mundo");
const first = (second) => {
    
    for (var numero = 0; numero <= 20; numero++) {
        if (numero % 2 === 0) {
            console.log(`El numero ${numero} es par`)
        }
        if (numero % 2 !== 0) {
            console.log(`El numero ${numero} es impar`)
        }
        console.log(`El numero ${numero} es ${numero % 2 == 0 ? 'par' : 'impar'} :)`)
    }
}

first()
