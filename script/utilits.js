function getDonation(event){
    let donation = document.getElementById(event);
    return donation;
}

function getAmountByInput(event){
    let amount= document.getElementById(event).value;
    let newAmount = parseFloat(amount);
    return newAmount;
}

function getAmountNumber(event){
    let amountNumber = document.getElementById(event).innerText; 
    let newAmountNumber = parseFloat(amountNumber);
    return newAmountNumber;
}



