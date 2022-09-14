
let cards = [] // initial value
let sum = 0 // initial value
let hasBlackJack = false // initial value
let isAlive = false // more than 21 (out of the game) // initial value
let message = "" // initial value
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") // (another method of getting an HTML element by its id)
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")


function getRandomCard() {
  // generate random number between 1 & 13 (solitaire cards "ace" through "king")
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  }
}
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  let player = {
    name: "Player Name (y/n)",
    chips: sum
  }
  playerEl.textContent = player.name + ": $" + player.chips
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message // displaying the result in our interface
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      let player = {
        name: "Player Name (y/n)",
        chips: sum
      }
      playerEl.textContent = player.name + ": $" + player.chips
      renderGame()        
  }
}


