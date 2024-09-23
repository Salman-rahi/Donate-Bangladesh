getDonation('donation-amount').addEventListener('click',function(){
    const inputValue =getAmountByInput('donation-input-1');
    const amountNumber = getAmountNumber('amount');
    if(isNaN(inputValue)){
        alert('Input only number please')
        document.getElementById('donation-input-1').value = '';
    }
    else if(inputValue <= 0){
        alert('Put a positive number');
        document.getElementById('donation-input-1').value = '';
    }
    else{
        if(amountNumber <= 0){
            alert('Deposit some money before donation');
            document.getElementById('donation-input-1').value = '';
        }
        else if (inputValue > amountNumber) {
            alert('Donation cannot exceed the current amount.');
            document.getElementById('donation-input-1').value = '';
        }
        else{
            const newAmount = amountNumber - inputValue;
            document.getElementById('amount').innerText = newAmount ;
            document.getElementById('card-btn-1').innerText =inputValue; 
            document.getElementById('donation-input-1').value = '';
            const historyContainer =document.getElementById('history-container');
            historyContainer.innerHTML=
            `
            
            <section class=" sm:w-10/12 mx-auto my-5 px-5 py-5 text-left space-y-3 border-2 border-gray-300 rounded-2xl">
               <h2 class="font-bold"><span>${inputValue}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h2>
               <p>Date :${new Date().toLocaleString()}</p>
            </section>
            
            
            `

        }
        

    }
})