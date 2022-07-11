function substituirPares (array) {

    if(array.length != 0) {
        array.forEach((num, index) => {
            if(num % 2 == 0) {
                console.log(`Substituindo ${num} por 0...`)
                array[index] = 0;
            }
        });
    
        return console.log(array);
    } else {
        return console.log(-1);
    }
}

let array = [1,3,4,6,80,33,23,90]
let array2 = [];

substituirPares (array)
substituirPares (array2)