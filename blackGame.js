let alterMsgEl = document.getElementById("alterMsg");
let statButton = document.getElementById("stat");
let newCardButton = document.getElementById("newCard");
let newGameButton = document.getElementById("newGame");
let sumValEl = document.getElementById("sumVal");
let newCardMsgEl = document.getElementById("newCardMsg");

const getRandomCard = () =>{
    let randomCard = Math.floor(Math.random() * 13) + 1; 
    randomCard === 1 ? randomCard = 11 :randomCard > 10 && randomCard <= 13 ? randomCard = 10 : randomCard;
    return randomCard;
}

let fCard = getRandomCard();
let sCard = getRandomCard();

const cardsArray = [fCard,sCard];
let sum = 0;
sum = cardsArray[0] + cardsArray[1];


const startGame = () =>{
  alterMsgEl.innerText = "Cards: ";
for(let x = 0;x < cardsArray.length;x++){
    alterMsgEl.textContent += cardsArray[x] + "  ";
}
sumValEl.textContent = "Sum: " + sum;

sum < 21 ? comment = "Draw a new card" : 
sum === 21 ? comment = "Congratulations You've the Casino BlackJack Game" : 
comment = "You Lost the game keep on playing";

newCardMsgEl.innerText = comment;

}

statButton.addEventListener("click",startGame);

const newCardFunc = () =>{
    let newcard = getRandomCard();
    if(sum < 21){
    cardsArray.push(newcard);
    sum += newcard;
    startGame();
    }
}

newCardButton.addEventListener("click",newCardFunc);

newGameButton.addEventListener("click",function(){
    location.reload();
})