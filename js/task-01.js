// Scrieți un script care:

// Va număra și afișa în consolă numărul total de categorii din
// ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories,
// va găsi și afișa în consolă titlul elementului(tag - ul < h2 >)
// și numărul de elemente din acea categorie(toate elementele < li >).

const categories = document.querySelectorAll("#categories .item"); // Am selectat categoriile 
console.log(`Number of categories: ${categories.length}`); // Am afisat numarul lor

categories.forEach((category) => {    //Itereaza prin fiecare element din lista de categorii
    const title = category.querySelector("h2").textContent; //Selecteaza h2 din categorie si obtine textul din interiorul acestuia
    const elements = category.querySelectorAll("li"); //Selecteaza toate elementele li specifice categoriei

    console.log(`\nCategory: ${title}`);
    console.log(`Elements: ${elements.length}`);
});