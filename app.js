let aleatorio1 = Math.floor(Math.random() * 6) + 1

let formarFrase = 'img/dice' + aleatorio1 + '.png'

let image1 = document.querySelectorAll ('img')[0]
image1.setAttribute('src', formarFrase)

let aleatorio2 = Math.floor(Math.random() * 6) + 1

let formarFrase2 = 'img/dice' + aleatorio2 + '.png'

document.querySelectorAll ('img')[1].setAttribute('src', formarFrase2)

if (aleatorio1 > aleatorio2) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 ganhou'
} else if( aleatorio2 > aleatorio1) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 ganhou'
} else {
    document.querySelector('h1').innerHTML = 'Empate'
}