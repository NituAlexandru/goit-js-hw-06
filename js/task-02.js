// Scrieți un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigurați-vă că folosiți metoda
// document.createElement().
// Adăugați numele ingredientului ca conținut text.
// Adăugați clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în
// lista ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const fragment = document.createDocumentFragment(); //Am creat un fragment de document

ingredients.forEach(ingredient => { //Itereaza prin fiecare element al array-ului
  const li = document.createElement("li"); //Creaza elementul li
  li.textContent = ingredient; //Seteaza continutul lui li sa fie elem curent
  li.classList.add("item"); //Adauga clasa
  fragment.appendChild(li); //Adauga fiecare li in frag de document
});

const list = document.querySelector("#ingredients"); //Selecteaza elementul dupa id
list.appendChild(fragment); //Adauga toate elementele in ul