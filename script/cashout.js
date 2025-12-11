document.getElementById('btn-cashout').addEventListener('click',
    function(event){
        event.preventDefault()
        const cashoutPin = document.getElementById('cashout-pin').value;
        const convertedCashoutPin = parseInt(cashoutPin);
        
        
        
        //  amount;
        const cashoutAmount = document.getElementById("cashout-amount").value;
        const convertedCashoutAmount = parseFloat(cashoutAmount);

        // agent number
        const agentNumber = document.getElementById('agent-number').value;

        // current amount;
        const currentBalance = document.getElementById('current-amount').innerText;
        const convertedCurrentBalance = parseFloat(currentBalance);
        
        
        // verify ;
        if(agentNumber && cashoutAmount && cashoutPin){
           
            if(agentNumber.length === 11 && convertedCashoutPin === 1234){
                const minus = convertedCurrentBalance - convertedCashoutAmount;
                document.getElementById('current-amount').innerText=minus;
                document.getElementById('cashout-pin').value='';
            }
            else{
                alert('invalid agent number or pin')
            }
           
        }
        else{
            alert('Enter agent number or amount or pin')
        }
        
    })