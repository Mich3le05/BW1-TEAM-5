
/*NON ho la piu pallida idea di come questa cosa funzioni. 
ricerche varie tramite stackoverflow, da cui ho rubato codice, e altri siti, dove ho trovato il fill per gli oggetti svg
*/

/*PARTE STELLINE */
document.querySelectorAll('.star').forEach((star, index, starsArray) => {
    star.addEventListener('click', () => {
      // Cambia il colore delle stelle a partire da quella cliccata fino alla fine
      for (let i = index; i < starsArray.length; i++) {
        starsArray[i].querySelector('path').setAttribute('fill', '#000000'); // Cambia il colore
      }
    });
  });

  // Seleziona tutte le stelle
const stars = document.querySelectorAll('.star');

// Aggiungi un event listener su ogni stella
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Colora tutte le stelle a sinistra della stella cliccata (inclusa la stella stessa) di azzurrino
    for (let i = 0; i <= index; i++) {
      const path = stars[i].querySelector('path');
      path.setAttribute('fill', '#00FFFF');  // Azzurrino
    }
  });
});

/*FINE STELLINE*/


/*PARTE BOTTONE*/

const bottonecliccato = function () {
    if (inputFeedback.value.trim() !== "") {

        window.location.href = "https://epicode.com/it/?utm_source=adwords&utm_campaign=Brand&utm_adgroup=brandphrase&utm_term=epicode&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=11897141170&hsa_grp=115607542316&hsa_ad=717726046297&hsa_src=g&hsa_tgt=kwd-1083842420863&hsa_kw=epicode&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P_R9G0ZaFxvBKzPKXXel4Glv0aSdu6XkyGUV2d-DoCoFWVxWgeKX1QaAoCZEALw_wcB";
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