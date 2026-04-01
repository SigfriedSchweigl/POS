function toggleSolution(id) {
  const element = document.getElementById(id);
  element.classList.toggle("show");
}

function copyCode(button) {
  const pre = button.parentElement.querySelector("pre");
  const text = pre.innerText;

  navigator.clipboard.writeText(text).then(() => {

    // alten Timer löschen
    if (button._timeout) {
      clearTimeout(button._timeout);
    }

    button.innerText = "Kopiert!";

    // neuen Timer setzen
    button._timeout = setTimeout(() => {
      button.innerText = "Kopieren";
    }, 1500);

  }).catch(() => {

    if (button._timeout) {
      clearTimeout(button._timeout);
    }

    button.innerText = "Fehler";

    button._timeout = setTimeout(() => {
      button.innerText = "Kopieren";
    }, 1500);
  });
}
