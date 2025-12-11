
// click add money btn;
document.getElementById('btn-add-money').addEventListener('click',
    function(event){
        event.preventDefault(); 

        const pin = document.getElementById('pin').value;
        const convertedPin= parseInt(pin);
        
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);

        const accountNumber = document.getElementById('account-number').value;
        

        const currentBalance =document.getElementById('current-amount').innerText;
        const convertedCurrentBalance = parseFloat(currentBalance)
        


        if(amount && pin  && accountNumber){
           if(convertedPin ===1234 && accountNumber.length === 11 ){
            
            const sum =  convertedCurrentBalance+convertedAmount 
            document.getElementById('current-amount').innerText=sum;
            
           }
           else{
            alert('enter valid pin and 11 digit account number')
           }
        }
        else{
            alert('enter your pin and amount and account number')
        }
})

