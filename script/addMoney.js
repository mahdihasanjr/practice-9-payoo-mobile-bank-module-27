
document.getElementById('btn-add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        
        // get amount;
        const amount =document.getElementById('amount').value;
        const convertedAmount = parseInt(amount);

        // get pin;
        const pin = document.getElementById('pin');
        const pinValue =parseInt( pin.value);
        
        // get current amount;
        const currentAmount =document.getElementById('current-amount').innerText;
        const convertedCurrnetAmount = parseInt(currentAmount);

        if(pinValue===1234){
            // sum convertedAmount and current amount;
            const sum = convertedAmount + convertedCurrnetAmount;
             // set display sum;
            document.getElementById('current-amount').innerText= sum;

            document.getElementById('amount').value='';

        }
        else{
            alert('invalid pin')
        }
      
    }
)
