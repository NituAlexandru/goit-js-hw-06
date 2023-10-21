// Exercițiul 8

// Scrieți un script de control al formularului de login.
// Gestionarea trimiterii formularului form.login - form trebuie să fie
// în cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se reîncarce.
// Dacă formularul are câmpuri goale, afișați un alert care avertizează
// că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a trimis formularul,
// colectați valorile câmpului într - un obiect în care numele câmpului
// va fi numele proprietății, iar valoarea câmpului va fi valoarea
// proprietății.Pentru a accesa elementele formularului, folosiți
// proprietatea elements.
// Afișați obiectul cu datele introduse în consolă și ștergeți valorile
// câmpurilor din formular, folosind metoda reset.

const form = document.querySelector(".login-form"); //Selecteaza form

form.addEventListener("submit", (e) => {
  // Event Listener pt submit
  e.preventDefault();
  console.log(e);

  const { email, password } = e.currentTarget.elements; //obține referințele la elementele formularului

  if (email.value === "" || password.value === "") {
    //verifica daca campurile sunt goale
      alert("Please fill in all the fields!");
      return;
  }
  // Creaza obiectul cu datale introduse
  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  e.currentTarget.reset(); // Sterge valorile introduse din formular
});


