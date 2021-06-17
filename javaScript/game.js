const capsule = document.getElementById("game")
const cards = document.getElementsByClassName("card")
let firstCard;
let secondCard;
let level = 1;
let nPairs;
let cartas = [];
let acertos;
let startTime;
function sortear() {
    cartas = [];
    let n;
    do {

        n = Math.floor(Math.random() * (nPairs * 2))
        if (cartas.indexOf(n) == -1) {
            cartas.push(n)
        }
    } while (cartas.length != (nPairs * 2));

}

function initialize() {
    acertos = 0;
    capsule.innerHTML = ``;
    nPairs = level + 1;
    sortear();
    let n;

    for (let index = 0; index < cartas.length; index++) {
        if (cartas[index] > nPairs - 1) {

            n = cartas[index] - nPairs;

        } else {

            n = cartas[index];

        }

        capsule.innerHTML += `      <div class="card" onclick="show(${index})">
                                        <img src="/img/${image[n]}.png" alt="${image[n]}" class="front">
                                        <img src="/img/ed_logo.PNG" alt="ed" class="back">
                                    </div>
                                    
                `
        if ((index + 1) % 5 == 0) {
            capsule.innerHTML += ` <div class="break"></div>`
        }

    }

    for (const card of cards) {
        card.children[0].style.display = `none`
    }
}

initialize()

function show(n) {
    if (!startTime) {
        startTime = new Date();
    }
    if (n == firstCard) { return; }

    cards[n].children[1].style.display = `none`
    cards[n].children[0].style.display = `block`

    if (!firstCard && firstCard != 0) {

        firstCard = n;
        return;
    }
    else {

        secondCard = n;

    }

    if (cards[secondCard].children[0].alt != cards[firstCard].children[0].alt) {

        let f = firstCard;
        let s = secondCard;
        setTimeout(() => {
            inverter(f);
            inverter(s);
        }, 500);

    } else {

        acertou(firstCard);
        acertou(secondCard);
        acertos += 1;

    }
    firstCard = null;
    secondCard = null;
    if (acertos === nPairs) {
        if (level != 9) {
            setTimeout(() => {

                level += 2;
                initialize();

            }, 500);
        }
        else {
            startTime = (new Date() - startTime) / 1000;
            record(startTime.toFixed(2))
            alert(`Parabéns\n Finalizou em  ${startTime.toFixed(2)} segundos`)

        }

    }

}
function inverter(n) {

    cards[n].children[0].style.display = `none`;
    cards[n].children[1].style.display = `block`;

}
function acertou(n) {
    cards[n].onclick = function () {
        return false;
    }

}
function game() {
    level = 1;
    initialize();
    capsule.style.display = 'flex';
    janela.style.display = `none`

}