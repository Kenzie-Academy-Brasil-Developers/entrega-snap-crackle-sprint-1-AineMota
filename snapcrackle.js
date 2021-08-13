let message = '';
    let snap = document.querySelector('#snap');

    maxValue = prompt('Escolha um número entre 10 e 500.');


function snapCrackle(maxValue){

    if(10 <= maxValue && maxValue<= 500){

    for(let counter = 1; counter <= maxValue; counter++){
        
        if(!(counter % 2 === 0)) {
            message += 'Snap';
        }
        if(counter % 5 === 0){
            message += 'Crackle';

        } 
     
        if(counter % 2 === 0 && !(counter % 5 === 0) ) {
            message += counter;
        }
    message += ', ';    
    }
    return snap.innerHTML = message;

    } else{
    alert('O número está fora do intervalo solicitado.');
    } 
}
snapCrackle(maxValue);



