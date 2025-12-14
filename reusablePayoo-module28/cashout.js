
document.getElementById('cashout').addEventListener('click',
    function (){
        handleToggle('add-money-section', 'none');
        handleToggle('transaction-section', 'none');
        handleToggle('cashout-section','block');
        
    }
)


document.getElementById('btn-cashout').addEventListener('click',
    function(event){
       event.preventDefault();
       const agentNumber = document.getElementById('agent-number').value;

       const amount = getInputValueById('cashout-amount');
       const pin = getInputValueById('cashout-pin');
       const mainBalance = getInnerTextById('current-amount');

        
       if(agentNumber.length===11){
        if(!isNaN(amount) && amount > 0 && amount <= mainBalance){
            if(pin === 1234){
                const minus = mainBalance - amount;
               setInnerTextByIdAndValue('current-amount', minus);


                // transaction history;
                const transactionBox = document.getElementById('transaction-box');

                const p = document.createElement('p');
                p.innerText=`
                    cash out ${amount} from this acount ${agentNumber}, and total balance : ${minus}
                `
                transactionBox.appendChild(p)









            }
            else{
                alert('Enter Valid pin')
            }
        }
        else{
            alert('Enter valid amount')
        }
       }
       else{
        alert('please valid number')
       }
        
    }
)