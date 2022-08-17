function checkNumbers(){
    const val = document.getElementById('val').value;
    const show = document.getElementById('showBox');


    if(val < 0 || val > 10){
        show.textContent = `O ${val} NAO esta validado, tente novamente e digite um numero DE 1 A 9`
    }
    else{
        show.textContent = `O ${val} ESTA validado, parabens por ter digitado um numero valido`    
    }

}

document.getElementById('checkVals').addEventListener('click', checkNumbers);   