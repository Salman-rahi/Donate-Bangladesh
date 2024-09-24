getDonation('main-btn').addEventListener('click',function(event){
    
    const mainBtn =getDonation('main-btn');
    const historyBtn =getDonation('history-btn');
    const cardContainer = getDonation('card-container');
    const historyContainer = document.getElementById('history-container');
    cardContainer.classList.remove('hidden');
    mainBtn.style.backgroundColor = '#B4F461'; 
    mainBtn.style.color = 'black';
    historyContainer.classList.add('hidden')
    historyBtn.style.backgroundColor = 'transparent';
    historyBtn.style.color = 'black';

})

getDonation('history-btn').addEventListener('click',function(){
    const mainBtn =getDonation('main-btn');
    const historyBtn =getDonation('history-btn');
    const cardContainer = getDonation('card-container');
    const historyContainer = document.getElementById('history-container');
    historyContainer.classList.remove('hidden');
    historyBtn.style.backgroundColor = '#B4F461';
    historyBtn.style.color = 'black';
    cardContainer.classList.add('hidden');
    mainBtn.style.backgroundColor = 'transparent';
    mainBtn.style.color = 'black';
})


// document.getElementById('nav-btn').addEventListener('click', function(){
//     window.location.href ='../blog.html';
// })

