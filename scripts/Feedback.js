/*PARTE STELLINE*/
let coloredStarsCount = 0; // Variabile per contare le stelle colorate di azzurro

document.querySelectorAll('.star').forEach((star, index, starsArray) => {
  star.addEventListener('click', () => {
    // Colora le stelle a partire da quella cliccata fino alla fine (nera)
    for (let i = index; i < starsArray.length; i++) {
      starsArray[i].querySelector('path').setAttribute('fill', '#000000'); // Colore nero
    }
  });
});

const stars = document.querySelectorAll('.star');

// Aggiungi un event listener su ogni stella per colorarla di azzurro e aggiornare il conteggio
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    coloredStarsCount = 0; // Reset conteggio

    for (let i = 0; i <= index; i++) {
      const path = stars[i].querySelector('path');
      path.setAttribute('fill', '#00FFFF'); // Azzurrino

      coloredStarsCount++; // Incrementa il conteggio delle stelle colorate
    }

    // Assicurati che le stelle dopo la cliccata siano nere
    for (let i = index + 1; i < stars.length; i++) {
      const path = stars[i].querySelector('path');
      path.setAttribute('fill', '#000000'); // Nero
    }
  });
});

/*FINE STELLINE*/

/*PARTE BOTTONE*/

const bottonecliccato = function () {
  if (inputFeedback.value.trim() !== "") {
    // Aggiungi controllo sul numero di stelle colorate
    if (coloredStarsCount >= 6) {
      // Se l'utente ha 6 o più stelle colorate, reindirizza alla gif del gattino che balla
      window.location.href = "https://giphy.com/gifs/happy-birthday-1DTBGm5Rfgymk";
    } else {
      // Altrimenti reindirizza a un gattino triste
      window.location.href = "https://giphy.com/gifs/sad-kitten-CM1rHbKDMH2BW";
    }
  } else {
    // Aggiungi la classe "shake" all'input
    inputFeedback.classList.add("shake");

    // Rimuovi la classe dopo un po' di tempo per ripristinare l'input
    setTimeout(() => {
      inputFeedback.classList.remove("shake");
    }, 500);
  }
};

const inputFeedback = document.getElementById("InputFeedback");
const buttonForm = document.getElementById("buttonForm");

// Funzione per abilitare/disabilitare il pulsante
const checkInput = function () {
  // Controlla se l'input non è vuoto
  if (inputFeedback.value.trim() !== "") {
    buttonForm.disabled = false; // Abilita il pulsante
  } else {
    buttonForm.disabled = true; // Disabilita il pulsante
  }
};

// Aggiungi un event listener all'input per il cambiamento del valore
inputFeedback.addEventListener("input", checkInput);

// Aggiungi un event listener al pulsante
buttonForm.addEventListener("click", bottonecliccato);