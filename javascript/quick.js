// step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step 2: prevent default behavior (reloading borwser)
    event.preventDefault();
    // step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    
    // step 4:get the pin number
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('Yor are logged in')
        window.location.href = " /home.html"
    }
    else{
        alert('Wrong Input!')
    }
  
    })