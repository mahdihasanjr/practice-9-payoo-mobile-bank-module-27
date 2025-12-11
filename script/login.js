

document.getElementById('btn-login').addEventListener("click",
    function (event){
        event.preventDefault()
       
        const accountNumber = document.getElementById('account-number').value;
        
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin)
       
        // check 11 digit number and pin 1234;
        if(accountNumber.length ===11){
            
            
            if( convertedPin === 1234){
               window.location.href="./menu.html";
            }
            else{
               alert('pin thik nai')
            }
        }
        else{
            alert('invalid account number')
        }

        
    }
)