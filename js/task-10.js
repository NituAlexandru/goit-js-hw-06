// Exercițiul 10 (nu este obligatoriu)

// Scrieți un script pentru crearea și ștergerea unei colecții de elemente.
// Utilizatorul introduce numărul de elemente în input și dă click pe butonul
// Create, după care colecția este afișată în pagină. Când se dă click pe
// butonul Destroy, colecția de elemente va fi ștearsă.

// Creați o funcție createBoxes(amount), care ia ca parametru un număr.
// Funcția va crea atâtea < div > -uri câte sunt specificate în amount și
// le va adăuga la div #boxes.

// Dimensiunile primului <div> vor fi 30px pe 30px.
// Fiecare element, cu excepția primului, ar trebui să fie cu 10px mai
// lat și mai înalt decât cel anterior.
// Toate elementele trebuie să aibă o culoare de fundal aleatoare în
// format HEX. Folosiți funcția getRandomHexColor deja existentă pentru
// a obține o culoare.

// Scrieți o funcție destroyBoxes() care va șterge conținutul div#boxes,
// ștergând astfel toate elementele create.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  createBoxes(input.value); // Apeleaza functia createBoxes cu valoarea introdusa in input
});

destroyBtn.addEventListener("click", destroyBoxes); // Apeleaza functia cand se face click pe btn destroy

function createBoxes(amount) {
  const boxes = []; // Initializeaza un array gol
  let size = 30; // Dimensiunea primului box

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div'); // nou div
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box); //Adauga box ul in array
    size += 10; // Mareste dimensiunea pt urmatorul box
  }

  boxesContainer.append(...boxes); //Adauga boxurile in container
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Sterge continutul containerului
}
