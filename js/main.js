 /*----- state variables -----*/
    let firstCard, secondCard;
    let picked = false;
    let lockTable = false;
   
    
    const deck = document.querySelectorAll('.card');

    function cardFlip() {
        if (lockTable)return;
        this.classList.add('flip');
        if (!picked) {
            picked = true;
            firstCard = this;
        } else {
            picked = false;
            secondCard = this;

            checkIfMatch()
        }
    }

function checkIfMatch() {
  if (firstCard.dataset.name === secondCard.dataset.name) {
    keepFliped();
  } else {
    unflip();
  }
}

function keepFliped() {
  firstCard.removeEventListener('click', cardFlip);
  secondCard.removeEventListener('click', cardFlip);
}

function unflip() {
    lockTable = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

    lockTable = false;
}, 1500);
}

deck.forEach(card => card.addEventListener('click', cardFlip))

    //psuedocode
    //state variables
    //board: array
    //0 = no fliped cards
    //1 = 1 flipped card
    //-1 = 2 flipped card
    //pair match: null = no match
    //2 = match