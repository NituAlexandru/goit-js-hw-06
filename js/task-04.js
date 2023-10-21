// Exercițiul 4
// Contorul este format dintr-un tag span și două butoane care,
// atunci când sunt apăsate, ar trebui să-și mărească sau scadă valoarea cu unu.

// Declarați o variabilă counterValue ce va stoca valoarea curentă a
// contorului și asignați - i valoarea 0 pentru început.
// Adăugați click handler pe butoane, în interiorul cărora vei mări
// sau micșora valoarea contorului.
// Actualizați interfața cu noua valoare a variabilei counterValue.

// Varianta 1

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value'); //valoarea contorului

// let counterValue = 0; //Va stoca valoarea curenta

// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1; //Scade 1 din valoarea contorului
//     valueEl.textContent = counterValue; //Actualizeaza valoarea
// })

// incrementBtn.addEventListener('click', () => {
//     counterValue += 1; //Creste 1 din valoarea contorului
//     valueEl.textContent = counterValue; //Actualizeaza valoarea
// });

// Varianta 2

const valueEl = document.querySelector("#value");
let counterValue = 0;

const buttons = document.querySelectorAll("#counter button"); //Selecteaza toate elementele button din interiorul elementului cu id-ul counter
for (const button of buttons) { // Itereaza prin fiecare button
  button.addEventListener("click", () => {
    if (button.dataset.action === "decrement") { //Verifica daca data-action este egala cu val decrement
      counterValue -= 1;
    } else if (button.dataset.action === "increment") {
      counterValue += 1;
    }
    valueEl.textContent = counterValue; //actualizeaza textul din span
  });
}
