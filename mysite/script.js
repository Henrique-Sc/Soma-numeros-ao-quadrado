function soma() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var quadradoNum1 = num1 ** 2;
    var quadradoNum2 = num2 ** 2;
    var soma = quadradoNum1 + quadradoNum2;

    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('mostrarN1').innerHTML = (num1 + '² = ' + quadradoNum1);
    document.getElementById('mostrarN2').innerHTML = (num2 + '² = ' + quadradoNum2);
    document.getElementById('mostrarSoma').innerHTML = 'Soma: ' + soma;
}