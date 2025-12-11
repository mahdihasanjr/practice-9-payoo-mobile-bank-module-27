
    document.getElementById('add-money-section').style.display='block';

    document.getElementById('cashout-section').style.display='none';

//  click add money card;
document.getElementById('add-money').addEventListener('click',
    function(){
         document.getElementById('add-money-section').style.display='block';

         document.getElementById('cashout-section').style.display='none';
    }
)

// click cashout card;
document.getElementById('cashout').addEventListener('click',
    function(){
        document.getElementById('cashout-section').style.display='block';
        
       document.getElementById('add-money-section').style.display='none';
    }
)

