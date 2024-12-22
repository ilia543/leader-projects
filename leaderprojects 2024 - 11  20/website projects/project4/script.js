let user = {
    username: "",
    balance: 50000,
    score: 0,
};

let isLoggedIn = false;

const usernameDisplay = document.querySelector("#username span");
const balanceDisplay = document.querySelector("#balance");
const spinButton = document.querySelector("#spinButton");
const spinResultDisplay = document.querySelector("#spin-result");
const scoreDisplay = document.querySelector("#score");
const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username-input");

const slots = ["🍒", "🍋", "🍊"];
const slotElements = [document.querySelector("#slot1"), document.querySelector("#slot2"), document.querySelector("#slot3")];

function login() {
    const username = usernameInput.value.trim();
    if (username) {
        user.username = username;
        isLoggedIn = true;
        usernameDisplay.textContent = user.username;
        loginForm.style.display = "none";
        updateDisplay();
    } else {
        alert("გთხოვთ, შეიყვანოთ მომხმარებლის სახელი!");
    }
}

function updateDisplay() {
    balanceDisplay.textContent = `ანაბარი: ${user.balance}`;
    scoreDisplay.textContent = `სრული ქულა: ${user.score}`;
}

function spinSlots() {
    if (!isLoggedIn) {
        alert("გთხოვთ, დარეგისტრირდეთ, რომ ითამაშოთ.");
        return;
    }

    if (user.balance < 50) {
        alert("არ გაქვთ საკმარისი თანხა!");
        return;
    }

    user.balance -= 50;
    const result = [getRandomSlot(), getRandomSlot(), getRandomSlot()];
    for (let i = 0; i < 3; i++) {
        slotElements[i].textContent = result[i];
    }

    checkResult(result);
}

function getRandomSlot() {
    const randomIndex = Math.floor(Math.random() * slots.length);
    return slots[randomIndex];
}

function checkResult(result) {
    if (result[0] === result[1] && result[1] === result[2]) {
        user.balance += 100;
        user.score += 10;
        spinResultDisplay.textContent = `გილოცავთ! მოიგეთ 400!`;
    } else {
        spinResultDisplay.textContent = `დატრიალება დასრულდა.`;
    }
    updateDisplay();
}

spinButton.addEventListener("click", spinSlots);
document.querySelector("#loginButton").addEventListener("click", login);