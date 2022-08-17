function checkDivisiveis(){
    const val1 = +document.getElementById('val1').value;
    const val2 = +document.getElementById('val2').value;
    const val3 = +document.getElementById('val3').value;
    const val4 = +document.getElementById('val4').value;
    const result = document.getElementById('showBox');

    let holdNumbers = [];
    let holdFalseNumbers = [];

    if(val1 % 2 == 0 || val1 % 3 == 0){
        holdNumbers.push(`O ${val1} e divisivel por 2 ou por 3\n`);
    }
    else{
        holdFalseNumbers.push(`O ${val1} NAO e divisivel por 2 ou por 3\n`);    
    }
    if(val2 % 2 == 0 || val2 % 3 == 0){
        holdNumbers.push(`O ${val2} e divisivel por 2 ou por 3\n`);
    }
    else{
        holdFalseNumbers.push(`O ${val3} NAO e divisivel por 2 ou por 3\n`);    
    }
    if(val3 % 2 == 0 || val3 % 3 == 0){
        holdNumbers.push(`O ${val3} e divisivel por 2 ou por 3\n`);
    }
    else{
        holdFalseNumbers.push(`O ${val3} NAO e divisivel por 2 ou por 3\n`);    
    }
    if(val4 % 2 == 0 || val4 % 3 == 0){
        holdNumbers.push(`O ${val4} e divisivel por 2 ou por 3\n`);
    }
    else{
        holdFalseNumbers.push(`O ${val4} NAO e divisivel por 2 ou por 3\n`);    
    }
    result.textContent = `Numeros divisiveis: ${holdNumbers}\n Numeros NAO divisiveis: ${holdFalseNumbers}`;
}

document.getElementById('checkDiv').addEventListener('click', checkDivisiveis);        