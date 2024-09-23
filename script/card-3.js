getDonation('donation-amount-card-3').addEventListener('click',function(){
    const inputValue =getAmountByInput('donation-input-3');
    const amountNumber = getAmountNumber('amount');
    const cardTwo = getAmountNumber('card-btn-3');
    if(isNaN(inputValue)){
        alert('Input only number please')
        document.getElementById('donation-input-3').value = '';
    }
    else if(inputValue <= 0){
        alert('Put a positive number');
        document.getElementById('donation-input-3').value = '';
    }
    else{
        if(amountNumber <= 0){
            alert('Deposit some money before donation');
            document.getElementById('donation-input-3').value = '';
        }
        else if (inputValue > amountNumber) {
            alert('Donation cannot exceed the current amount.');
            document.getElementById('donation-input-3').value = '';
        }
        else{
            const newAmount = amountNumber - inputValue;
            document.getElementById('amount').innerText = newAmount ;
            document.getElementById('card-btn-3').innerText =inputValue + cardTwo; 
            document.getElementById('donation-input-3').value = '';
        }
        

    }
})