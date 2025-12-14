
document.getElementById('btn-add-money').addEventListener('click',
    function(event){
        event.preventDefault()
        
        const amount = getInputValueById('amount');
        const pin = getInputValueById('pin');
        
       const accountNumber =  document.getElementById('account-number').value;
       const selectedBank = document.getElementById('selected-bank').value;
      

       const mainBalance = getInnerTextById('current-amount')
       if(amount <= 0 || isNaN(amount)){
       alert('enter positive amount')
       return;
       }
       const date = new Date().toLocaleDateString('en-GB')
       const time = new Date().toLocaleTimeString()
       
    


        if(accountNumber.length===11){
            if(pin=== 1234){
               const sum = amount + mainBalance;
            //    document.getElementById('current-amount').innerText = sum;
               setInnerTextByIdAndValue('current-amount',sum)


            //    set transaction history
               const transactionBox = document.getElementById('transaction-box');
                
               const div =document.createElement('div');

               div.classList.add("bg-gray-200", "mt-3", "rounded-lg", "p-2");


               div.innerHTML= `
                 <h3>Added Money form ${selectedBank}</h3>
                  <h3 class="text-green-600">${amount} taka</h3>
                  <p>to ${accountNumber}</p>
                  <h3 >Total Balance : <span class = 'text-red-500'> ${sum}</span>
                  <h3> Date : ${date} <br>
                   Time: ${time}</h3>
                    
               
               `
               transactionBox.appendChild(div)
               
                 
               document.getElementById('amount').value = ''; 
            }


            else{
                alert('Enter correct Pin')
            }
        }
        else{
            alert('Enter 11 Digit Number ')
        }
 
    }
)