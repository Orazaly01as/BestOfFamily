
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #10251d, #07120e);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 600px;
    background: #172d23;
    border: 1px solid #315b42;
    border-radius: 24px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 15px 50px #0008;
}

header {
    margin-bottom: 35px;
}

header h1 {
    color: #8df0a7;
    font-size: 32px;
    margin-bottom: 10px;
}

header p,
#welcome p,
#gameMessage {
    color: #b9cbbd;
}

section h2 {
    margin-bottom: 20px;
}

input {
    display: block;
    width: 100%;
    padding: 15px;
    margin: 20px 0;
    background: #0c1b13;
    border: 1px solid #426c4d;
    border-radius: 12px;
    color: white;
    font-size: 16px;
}

button {
    border: none;
    cursor: pointer;
    transition: 0.2s;
}

#startButton,
#restartButton {
    background: #63d985;
    color: #102519;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    font-weight: bold;
    font-size: 16px;
}

button:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
}

.progress {
    display: flex;
    justify-content: space-between;
    color: #8df0a7;
    margin-bottom: 30px;
}

.choices {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 30px 0;
}

.choice {
    flex: 1;
    min-height: 130px;
    padding: 15px;
    background: #244b34;
    border: 2px solid #4f9d68;
    border-radius: 16px;
    color: white;
    font-size: 19px;
    font-weight: bold;
    overflow-wrap: anywhere;
}

.versus {
    color: #8df0a7;
    font-weight: bold;
}

#gameMessage {
    margin-top: 20px;
}

.trophy {
    font-size: 75px;
    margin: 20px;
}

#champion {
    font-size: 32px;
    color: #8df0a7;
    font-weight: bold;
    margin: 20px;
    overflow-wrap: anywhere;
}

#resultInfo {
    color: #b9cbbd;
    margin-bottom: 25px;
}

footer {
    margin-top: 40px;
    color: #76907d;
    font-size: 12px;
}

[hidden] {
    display: none !important;
}

@media (max-width: 450px) {
    .container {
        padding: 20px;
    }

    header h1 {
        font-size: 26px;
    }

    .choice {
        min-height: 110px;
        font-size: 16px;
    }
}
