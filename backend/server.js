const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Career Guidance AI Running");
});

app.post("/chat", (req, res) => {
    const msg = req.body.message.toLowerCase();

    let reply = "I am Career AI Assistant";

    if (msg.includes("python")) {
        reply = "Python is best for AI, ML, Data Science.";
    }
    else if (msg.includes("java")) {
        reply = "Java is used in backend and Android apps.";
    }
    else if (msg.includes("ai")) {
        reply = "AI includes Machine Learning, Deep Learning, Data Science.";
    }
    else if (msg.includes("career")) {
        reply = "Choose Web Dev, AI Engineer, Data Analyst.";
    }
    else if (msg.includes("hello")) {
        reply = "Hello 👋 Welcome to Echo Hackers Career AI";
    }

    res.json({ reply });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
