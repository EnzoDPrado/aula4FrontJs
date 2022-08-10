    'use strict'

function mostrarResultado(){
const nome = document.getElementById('nome').value;
const altura = +document.getElementById('altura').value;
const peso = +document.getElementById('peso').value;
const imcForm = document.getElementById('imcForm');

if (imcForm.reportValidity()){
    const valorIMC = (peso / altura ** 2);
    let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }else if (valorIMC <25){
            classificacao = 'com peso ideal. <span class= verde>Parabens</span>'
        }else if (valorIMC <30){
            classificacao ='levemente acima do peso'        
        }else if (valorIMC <35){
            classificacao = 'com obesidade grau I'
        }else if (valorIMC <40){
            classificacao = 'com obesidade grau II'
        }else{
            classificacao = 'com obesidade grau III <span class= vermelho> SE VAI MORE </span>'

        }

    resultado.innerHTML = `${nome} seu IMC e ${valorIMC.toFixed(2)} e voce esta ${classificacao}`           

}


     
console.log(imcForm.reportValidity());
console.log('funcao mostrar')
}

document.getElementById('calcular').addEventListener('click', mostrarResultado)