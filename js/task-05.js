// Exercițiul 5

// Scrieți un script care, atunci când se introduce un text în
// input#name - input(evenimentul input), înlocuiește valoarea lui
// span#name - output cu valoarea curentă din input#name - input.
// Dacă input - ul este gol, în acel span se va afișa "Anonymous".


// Selecteaza elementul de input și elementul span
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// if else
input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
    }
    console.log(output.textContent);
});


// Varianta cu Enter

// input.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") { // Verifica daca tasta apasata este Enter
//     if (input.value === "") {
//       output.textContent = "Anonymous";
//     } else {
//       output.textContent = input.value;
//     }
//     console.log(output.textContent);
//   }
// });