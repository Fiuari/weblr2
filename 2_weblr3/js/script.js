const numBtn = document.getElementById("next");
const outputNum = document.getElementById("out");

function* randomGenerator(min, max) {
    while (true) {
        yield Math.random() * (max - min) + min;
    }
}

const minInput = prompt("Введіть нижню межу:");
const maxInput = prompt("Введіть верхню межу:");
const min = Number(minInput);
const max = Number(maxInput);

if (
    minInput === null ||
    maxInput === null ||
    min > max
) {
    outputNum.textContent = "Введіть коректні межі: числа, де нижня межа не більша за верхню.";
    numBtn.disabled = true;
} else {
    const generator = randomGenerator(min, max);

    numBtn.addEventListener("click", () => {
        outputNum.textContent = generator.next().value.toFixed(2);
    });
}



const passwordBtn = document.getElementById("createPW");
const passwordOutput = document.getElementById("pwout");

function* passwordGenerator() {
    let password = "";
    while (true) {
        const symbol = yield;

        if (symbol === "done") {
            return password;
        }

        password += symbol;
    }
}

passwordBtn.addEventListener("click", () => {
    const generator = passwordGenerator();
    let result = generator.next();

    while (!result.done) {
        const symbol = prompt("Введіть символ пароля або 'done' для завершення:");

        if (symbol === null) {
            passwordOutput.textContent = "Створення пароля скасовано.";
            return;
        }

        result = generator.next(symbol);
    }

    passwordOutput.textContent = result.value;
});

const chatBtn = document.getElementById("chat");
const chatOutput = document.getElementById("chatout");

function* chatBot() {
    const name = yield "Hi! What is your name?";
    const mood = yield `Nice to meet you, ${name}! How are you?`;
    return `Thanks for sharing, ${mood}. Goodbye, ${name}!`;
}

chatBtn.addEventListener("click", () => {
    const generator = chatBot();
    const conversation = [];
    let step = generator.next();

    while (!step.done) {
        conversation.push(`Bot: ${step.value}`);
        const answer = prompt(step.value);

        if (answer === null) {
            conversation.push("Conversation cancelled.");
            break;
        }

        conversation.push(`You: ${answer}`);
        step = generator.next(answer);
    }

    if (step.done) {
        conversation.push(`Bot: ${step.value}`);
    }

    chatOutput.textContent = conversation.join("\n");
});

const sayBtn = document.getElementById("hello");
const user = {
    name: `${prompt("Enter your name:")}`,
    say() { alert(`Hello, ${this.name}`); }
}
sayBtn.addEventListener("click", () => {
    user.say();
})