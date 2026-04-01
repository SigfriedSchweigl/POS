function toggleSolution(id) {
  const element = document.getElementById(id);
  element.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const pres = document.querySelectorAll("pre.copyable");

  pres.forEach(pre => {
    const container = document.createElement("div");
    container.className = "code-container";

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.innerText = "Kopieren";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(pre.innerText).then(() => {

        if (button._timeout) {
          clearTimeout(button._timeout);
        }

        button.innerText = "Kopiert!";

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
    });

    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);
    container.appendChild(button);
  });
});
