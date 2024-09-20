// step 1: get the cash out button
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

   const cashOut= document.getElementById('input-cash-out').value;
   const cashOutAmount = parseFloat(cashOut);
   const cashOutPin = document.getElementById('cash-out-pin').value;
   console.log(cashOut, cashOutPin);
   if(cashOutPin === '1234'){
    console.log('Your balance is reducing');
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - cashOutAmount;

    document.getElementById('account-balance').innerText = newBalance;
   }
   else{
    alert('Failed to cash out! Please try again')
   }
    
    
})