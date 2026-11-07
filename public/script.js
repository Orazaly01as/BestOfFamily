
const relatives = [
    "Бабушка",
    "Дедушка",
    "Мама",
    "Папа",
    "Брат",
    "Сестра",
    "Дядя",
    "Тётя",
    "Двоюродный брат",
    "Двоюродная сестра"
];

// Адрес твоего серверного приложения
const SERVER_URL = "https://ТВОЙ-СЕРВЕР";

let visitorName = "";
let currentRound = [];
let nextRound = [];
let matchIndex = 0;
let matchCount = 0;

const welcome = document.getElementById("welcome");
const game = document.getElementById("game");
const result = document.getElementById("result");

const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("restartButton").addEventListener("click", () => {
    result.hidden = true;
    welcome.hidden = false;
});

choice1.addEventListener("click", () => selectWinner(0));
choice2.addEventListener("click", () => selectWinner(1));

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function startGame() {
    visitorName = document.getElementById("visitorName").value.trim();

    if (!visitorName) {
        alert("Введи своё имя!");
        return;
    }

    if (relatives.length < 2) {
        alert("Добавь минимум двух родственников!");
        return;
    }

    welcome.hidden = true;
    result.hidden = true;
    game.hidden = false;

    currentRound = shuffle(relatives);
    nextRound = [];
    matchIndex = 0;
    matchCount = 1;

    showMatch();
}

function showMatch() {
    if (currentRound.length === 1) {
        finishGame(currentRound[0]);
        return;
    }

    if (matchIndex >= currentRound.length) {
        currentRound = nextRound;
        nextRound = [];
        matchIndex = 0;
        matchCount++;
        showMatch();
        return;
    }

    const first = currentRound[matchIndex];
    const second = currentRound[matchIndex + 1];

    document.getElementById("roundName").textContent =
        `Раунд ${matchCount}`;

    document.getElementById("matchNumber").textContent =
        `Пара ${Math.floor(matchIndex / 2) + 1}`;

    choice1.textContent = first;
    choice2.textContent = second || "Автоматический проход";
}

function selectWinner(index) {
    const winner = currentRound[matchIndex + index];

    nextRound.push(winner);

    matchIndex += 2;

    showMatch();
}

async function finishGame(champion) {
    game.hidden = true;
    result.hidden = false;

    document.getElementById("champion").textContent = champion;

    document.getElementById("resultInfo").textContent =
        `Турнир завершил: ${visitorName}`;

    // Отправляем результат на сервер
    try {
        const response = await fetch(`${SERVER_URL}/send-result`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                visitor: visitorName,
                winner: champion
            })
        });

        if (!response.ok) {
            throw new Error("Ошибка отправки");
        }

        console.log("Результат отправлен!");
    } catch (error) {
        console.error("Не удалось отправить результат:", error);
    }
}
