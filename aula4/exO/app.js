function checkMultiplicacao(){
    const val = document.getElementById('val').value;
    const show = document.getElementById('showBox');
    let mult;

    mult = val * 2;
    if(mult < 30){
        show.textContent = `O resultado da divisao do ${val} por 2 E MENOR que 30, tente novamente`
    }
    else{
        show.textContent = `O resultado da divisao do ${val} por 2 E MAIOR que 30, e seu resultado e: ${mult}`
    }
}

document.getElementById('checkVals').addEventListener('click', checkMultiplicacao)