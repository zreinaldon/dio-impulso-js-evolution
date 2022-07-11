//split - transforma uma string em um array de string
//join - transforma um array de string em uma string

function verificar (palavra) {
    if(typeof(palavra) !== "string") {
        return console.log("Informe uma string!");
    }

    let palindromo = palavra.split("").reverse().join('');

    if(palindromo == palavra) { 
        return console.log("A palavra digitada é um palindromo");
    }

    console.log("Não é um palindromo")

}

verificar("ama");