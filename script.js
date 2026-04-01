function toggleSolution(id) {
  const element = document.getElementById(id);

  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function copyCode(button) {
  const code = button.nextElementSibling.innerText;

  navigator.clipboard.writeText(code).then(() => {
    button.innerText = "Kopiert!";
    
    setTimeout(() => {
      button.innerText = "Kopieren";
    }, 1500);
  });
}
