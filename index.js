//document.getElementById("id").innerText = "vem hexa"

// bonusPoints += 50
// console.log(bonusPoints)

let cardsEl = document.getElementById("cards")
let cards = 0
let texto = ""


function contaCartas(){
    
    cards++
    cardsEl.textContent = `Cartas: ${cards} - ${cards} `
    console.log(texto)
    console.log(typeof(cards))
    
    if(cards === 21) texto = "Jackpot"
    else if (cards < 21) texto = "Tire mais uma carta"
    else {
        texto = "Você perdeu, tente de novo"
        comecarJogo()
    }
}

function comecarJogo(){
    cards = 0
    cardsEl.textContent = cards
}