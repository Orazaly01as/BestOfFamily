require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

// Впиши адрес своего сайта
app.use(cors({
    origin: "https://ТВОЙ-САЙТ.github.io"
}));

app.post("/send-result", async (req, res) => {
    try {
        const { visitor, winner } = req.body;

        if (
            typeof visitor !== "string" ||
            typeof winner !== "string" ||
            visitor.length > 50 ||
            winner.length > 50
        ) {
            return res.status(400).json({
                error: "Некорректные данные"
            });
        }

        const message =
            `🏆 BestOfFamily\n\n` +
            `Участник: ${visitor}\n` +
            `Победитель: ${winner}`;

        const response = await fetch(
            `https://graph.facebook.com/${process.env.GRAPH_API_VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    messaging_product: "whatsapp",
                    recipient_type: "individual",
                    to: process.env.WHATSAPP_TO,
                    type: "text",
                    text: {
                        body: message
                    }
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error(data);
            return res.status(502).json({
                error: "WhatsApp не отправил сообщение"
            });
        }

        res.json({ success: true });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Ошибка сервера"
        });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("BestOfFamily server is running!");
});