// Exercițiul 6

// Scrieți un script care, atunci când focalizarea este pierdută
// de pe un input(evenimentul blur), verifică dacă numărul de caractere
// introduse este corect.

// Numărul de caractere admis trebuie specificat în atributul data-length.
// Dacă este introdus numărul corect de caractere, atunci border-ul devine
// verde, în caz contrar - roșu.
// Pentru a adăuga stilurile necesare, utilizați clasele CSS valid și
// invalid pe care le - am adăugat deja la fișierele sursă ale acestui exercițiu.

const input = document.querySelector("#validation-input"); //selectare input dupa ID

input.addEventListener("blur", () => { // Se declanseaza atunci cand input isi pierde focalizarea
  const requiredLength = Number(input.dataset.length); // Obtine lungimea necesara a textului si o converteste intr-un nr.

    if (input.value.length === requiredLength) { //Daca e egal 
        input.classList.add('valid'); // adaug valid
        input.classList.remove('invalid'); // scot invalid
    } else { // daca nu
        input.classList.add('invalid'); 
        input.classList.remove('valid');
    }
    // console.log(input.classList);
});
