getDonation('main-btn').addEventListener('click',function(){
    const cardContainer = getDonation('card-container');
    const historyContainer = document.getElementById('history-container');
    cardContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden')
})

getDonation('history-btn').addEventListener('click',function(){
    const cardContainer = getDonation('card-container');
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
    cardContainer.classList.add('hidden')
})