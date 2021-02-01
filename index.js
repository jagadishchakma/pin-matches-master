function generatePin() {
    const random = Math.random()*10000;
    const pin =( random + '').split('.')[0];
    if(pin.length == 4) {
        return pin;
    }else{
        console.log('shorter pin' +pin);
        return generatePin();
    }
}

// display pin generate
document.getElementById('generate-pin').addEventListener('click', function(){
    document.getElementById('pin-input').value = generatePin();
});

// get numbers using event bubble

document.getElementById('numbers').addEventListener('click', function(event) {
    const digit = event.target.innerText;
    if(isNaN(digit)){
        if(digit == 'C'){
            const typedInput=  document.getElementById('typed-pin');
            typedInput.value = '';
        }
    }else{
       const typedInput=  document.getElementById('typed-pin');
       typedInput.value = typedInput.value + digit;
    }
});

// verify pin 
document.getElementById('verify-pin').addEventListener('click', function() {
    const pin = document.getElementById('pin-input').value;
    const typedPin=  document.getElementById('typed-pin').value;
    if(pin == typedPin){
        const correct = document.getElementById('correct');
        correct.style.cssText = "display: block; transition: 5s; positoin: relative"
    } else {
        const wrong = document.getElementById('wrong');
        wrong.style.cssText = "display: block; transition: 5s; positoin: relative"
    }
});
