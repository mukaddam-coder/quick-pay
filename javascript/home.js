// Add money to the account
// setp 1: Add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after reload
    event.preventDefault();
    // step 2: get money to be added to the account
     const addMoneyInput = document.getElementById('input-add-money').value;
//    get the  pin number
     const pinNumber =document.getElementById('pin-number').value;
    //  step 3: verify pin number
     if(pinNumber === '1234'){
        console.log('Adding money to your account');
         //  step 4: get the current balance
         const balance = document.getElementById('account-balance').innerText;
        // step 5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        // step 6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
     }
     else{
        alert('Failed to add money! Please try again')
     }
   

})