// Exercițiul 9

// Scrieți un script care schimbă culorile de fundal al elementului
// < body >, prin stiluri inline, atunci când se face click pe button.change
// - color și afișați valoarea culorii în span.color.

// Pentru a genera o culoare aleatorie, folosiți getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.getElementsByClassName("change-color")[0]; // Selecteaza Btn
const spanColor = document.getElementsByClassName("color")[0]; // Selecteaza spanul unde se afiseaza culoarea

changeColorBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor(); // Genereaza o culoare noua
  document.body.style.backgroundColor = newColor; // Schimba culoarea de fundal
  spanColor.textContent = newColor; // Afiseaza noua culoare
});
