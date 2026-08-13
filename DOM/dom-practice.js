let count = 0;

const countDisplay = document.getElementById("crashCount");
const logButton = document.getElementById("logButton");
const resetButton = document.getElementById("resetButton");

const warning = document.getElementById("warning");

logButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = `Crashes today: ${count}`;

    if (count >= 3) {
        warning.classList.remove("hidden");
    }
});

resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = `Crashes today: ${count}`;
    warning.classList.add("hidden");
});
