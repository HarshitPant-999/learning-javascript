//const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

const resetButton = document.getElementById("resetButton");
const grid = parseInt(prompt("Enter grid size."))
//const gridWidth = parseInt(prompt("Enter width size."))
for (let round = 1; round <= grid; round++) {
  for (let round = 1; round <= grid; round++) {
    const box = document.createElement("div");
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "white";
    box.style.border = "1px solid black";
    box.classList.add("gridSquare");
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;;
    });
    document.body.style.width = `${grid * 50}px`;
    document.body.appendChild(box);
  }
}


resetButton.addEventListener("click", () => {
  for (const square of document.querySelectorAll(".gridSquare")) {
    color = "white";
    square.style.backgroundColor = `${color}`;
    console.log("resetting a square", square);
  };
});