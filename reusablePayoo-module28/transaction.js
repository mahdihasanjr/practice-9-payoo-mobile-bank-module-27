document.getElementById('transaction').addEventListener('click',
    function(){
        handleToggle('add-money-section', 'none')
        handleToggle('cashout-section', 'none')
        handleToggle('transaction-section', 'block');

    }
)