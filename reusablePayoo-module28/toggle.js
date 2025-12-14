document.getElementById('add-money-section').style.display='none'
document.getElementById('cashout-section').style.display='none'
document.getElementById('transaction-section').style.display='none'

document.getElementById('add-money').addEventListener('click',
    function(){
       handleToggle('add-money-section', 'block');
       handleToggle('cashout-section', 'none')
       handleToggle('transaction-section', 'none');
       
    }
)



