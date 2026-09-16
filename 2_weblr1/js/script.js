const ul = document.getElementById('ul');
const ultwo = document.getElementById('ultwo');
const btn = document.getElementById('btn');
const lettersDiv = document.getElementById('letters');

const name = ["О", "л", "я"];

for (const letter of name) {
    const li = document.createElement("li");
    li.textContent = letter;
    li.addEventListener("mouseover", () => {
        alert(li.textContent);
    });
    ul.appendChild(li);
}

function askName() {
    setTimeout(() => {
    const input = prompt("Введіть прізвище та ім'я:");
    if (input != null) {
        let litwo = document.createElement("li");
        litwo.textContent = input;
        ultwo.appendChild(litwo);
        askName();
    }}, 1);
}

askName();

btn.addEventListener("click", () => {
    lettersDiv.innerHTML = "";
    lettersDiv.classList.toggle("active");
    for (const letter of name) {
    const div = document.createElement("div");
    div.textContent = letter;
    div.addEventListener("mouseover", () => {
        alert(`Це літера [${div.textContent}]`);
    });
    lettersDiv.appendChild(div);
}
})