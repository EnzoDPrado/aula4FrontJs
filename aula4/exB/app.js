'use strict'

function positiveTransform(){
    const val1 = +document.getElementById('val1').value; 
    const result = document.getElementById('showBox');
    let transform;

    if(val1 < 0){
        transform = val1 * -1;
        result.textContent = transform;
    }else if(val1 > 0){
        result.textContent = 'O numero inserido e positivo';
    }else{
        result.textContent = 'O numero inserido e 0';
    }

}

document.getElementById('calcular').addEventListener('click', positiveTransform)



