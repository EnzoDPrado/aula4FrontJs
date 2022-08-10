'use strict'

function mediaCalculator(){
    const val1 = +document.getElementById('val1').value;
    const val2 = +document.getElementById('val2').value;
    const val3 = +document.getElementById('val3').value;
    const val4 = +document.getElementById('val4').value;
    const result = document.getElementById('showBox');
    let media;

    media = (val1 + val2 + val3 + val4) / 4;

    if(media >= 5)
        result.textContent = `O aluno foi aprovado, com a media: ${media}`;
    else
        result.textContent = `O aluno foi reprovado, com a media: ${media}`;
}

document.getElementById('calcular').addEventListener('click', mediaCalculator);