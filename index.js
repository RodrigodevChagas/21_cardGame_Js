//document.getElementById("id").innerText = "vem hexa"

// bonusPoints += 50
// console.log(bonusPoints)

let cardsEl = document.getElementById("cards")
let somaEl = document.getElementById("sum")
let paraEl = document.getElementById("paragrafo")
let cards = 0
let texto = ""
let cardsArray = []
let soma = 0;
let numeroAleatorio = 0

function contaCartas(){
    geraAleatorio()
    
    if(soma === 21 || (soma>21 && texto == "Jackpot")) {
        
        paraEl.style.color = 'green'
        texto == "Jackpot" ? comecarJogo() : texto = "Jackpot"
        paraEl.textContent = texto
    }
    else if (soma < 21) {
        texto = "Tire mais uma carta"
        paraEl.textContent = texto
    }
    else if( soma>21 && texto != "Jackpot"){
        paraEl.style.color = 'red'
        texto =="Você perdeu, tente de novo" ? comecarJogo() :texto = "Você perdeu, tente de novo"
        paraEl.textContent = texto
    }
}

function comecarJogo(){
    cardsArray = []
    cards = 0
    soma = 0
    texto = ""
    cardsEl.textContent = `Cartas: `
    somaEl.textContent = `Soma: `
    paraEl.style.color = 'white'
}
function geraAleatorio(){
   
    numeroAleatorio = Math.floor(Math.random() * 13) + 1
    if(cardsArray.includes(numeroAleatorio)) geraAleatorio() 
    else 
    {cardsArray.push(numeroAleatorio)
    cardsEl.textContent += `${cardsArray[cards]} `
    soma += cardsArray[cards]
    somaEl.textContent = `Soma: ${soma} `
    cards++
    }
}