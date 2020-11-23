const coinForm = document.querySelector('[name="coinForm"]');
let coinBank = document.querySelector('.coinBank');

coinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let numberOfCoins = event.currentTarget.howMany.valueAsNumber;
    let typeOfCoin = event.currentTarget.whichCoin.value;
    
    const data = new FormData(coinForm);

    let numberOfCoinzzz = data.get('howMany');
    console.log("how many coinzz", numberOfCoinzzz);

    let typeOfCoinzz = data.get('whichCoin');
    console.log("typeofcoinzz", typeOfCoinzz);

    drawCoins(numberOfCoins, typeOfCoin);
});

function drawCoins(numberOfCoins, typeOfCoin) {
    for (let i = 0; i < numberOfCoins; i++) {
        let coin = document.createElement('div');
        coin.classList.add(typeOfCoin);
        let uniqueId = create_UUID();
        coin.setAttribute(`id`, uniqueId);
        coinBank.appendChild(coin);
    }
}

document.querySelector('.coinBank').addEventListener('click', function(event) {
    let id = event.target.id;
    let coinJustClicked = document.getElementById(id);
    if (coinJustClicked != null) {
    coinJustClicked.remove();
    //it does removes the element/coin that was most recently clicked, but it repositions everything. todo: fix this
    }
});

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

// const data = new FormData(formElement);
// let howMany = data.get('howMany');
// let whichCoin = data.get('whichCoin');

// inputElement.value = 3; 

// let howMany = inputElement.value;

// howMany.addEventListener('submit', e => {
//     e.preventDefault();
//     // ... handle in JavaScript here.
//   });
 