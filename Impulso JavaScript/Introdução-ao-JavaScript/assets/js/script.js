/*
var divNumero = document.getElementById('numero');
var numero = 0;

function subtrair () {
    numero -= 1;
    divNumero.innerHTML = numero;
}

function somar () {
    numero += 1;
    divNumero.innerHTML = numero;
}
*/

var divNumero = document.getElementById('numero');

var botaoSoma = document.getElementById('botaoSoma');
var botaoSubtrai = document.getElementById('botaoSubtrai');
var aviso = document.getElementById('texto-aviso');
var numero = 0;

botaoSoma.addEventListener('click', () => {
    if(numero <= 9) {
        numero += 1;
        divNumero.innerHTML = numero;
        aviso.innerHTML = 'Última ação: Somando'
    }

    if(numero == 10) {
        aviso.innerHTML = 'Você chegou ao limite! Você pode decrementar também :)'
    }

    if(numero < 0) {
        divNumero.style.color = '#badb73';
    }

    if (numero >= 0) {
        divNumero.style.color = '#efeae4';
    }

})

botaoSubtrai.addEventListener('click', () => {
    if(numero >= -9) {
        numero -= 1;
        divNumero.innerHTML = numero;
        aviso.innerHTML = 'Última ação: Subtraindo'
    }

    if(numero == -10) {
        aviso.innerHTML = 'Você chegou ao limite! Você pode encrementar também :)'
    }

    if(numero < 0) {
        divNumero.style.color = '#badb73';
    }

    if (numero >= 0) {
        divNumero.style.color = '#efeae4';
    }
})