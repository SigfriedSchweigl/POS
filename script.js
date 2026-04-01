function toggleSolution(id) {
  const element = document.getElementById(id);

  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleSolution(id) {
  const element = document.getElementById(id);
  element.classList.toggle("show");
}

function copyCode(button) {
  const pre = button.parentElement.querySelector("pre");
  const text = pre.innerText;

  navigator.clipboard.writeText(text).then(() => {
    const oldText = button.innerText;
    button.innerText = "Kopiert!";
    setTimeout(() => {
      button.innerText = oldText;
    }, 1500);
  });
}
