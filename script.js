const getPin = () => {
    const pin = Math.round(Math.random()*10000);
    const newPin = pin + '';
    if(newPin.length === 4){
        return newPin;
    }
    else{
       return getPin();
    }
    
}

const generatePin = () => {
    const pin = getPin();
    document.getElementById('generate-pin-input').value = pin;
}

document.getElementById('numbers').addEventListener('click', (e)=>{
    const number = e.target.innerText;
    if(!isNaN(number)){
        const previousPin = document.getElementById('numbers-input');
    const previousValue = previousPin.value;
    const newPin = previousValue + number;
    previousPin.value = newPin;
    }
})

const comparePin = () => {
    if(document.getElementById('generate-pin-input').value == document.getElementById('numbers-input').value ){
        document.getElementById('match-message').style.display = 'block';
        document.getElementById('not-match-message').style.display = 'none';
    }
    else{
        document.getElementById('match-message').style.display = 'none';
        document.getElementById('not-match-message').style.display = 'block';
    }
}

