'use strict'

function mostrarDiferenca(){
    const val1 = +document.getElementById('val1').value;
    const val2 = +document.getElementById('val2').value; 
    const result = document.getElementById('showBox');  
    let hold;

    if(val1 > val2)
    hold = val1 - val2
    else if(val2 > val1)
    hold = val2 - val1

    showBox.textContent = `A diferenca entre os numeros e: ${hold}`

}

document.getElementById('calcular').addEventListener('click', mostrarDiferenca); 