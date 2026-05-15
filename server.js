const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Career Guidance Backend is Running 🚀");
});

// Chat API (simple logic)
app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();

    let reply = "Sorry, I didn't understand that. Try asking about careers.";

    if (userMessage.includes("python")) {
        reply = "Python is great for AI, Data Science, and Web Development.";
    }
    else if (userMessage.includes("web")) {
        reply = "Web development includes HTML, CSS, JavaScript, React.";
    }
    else if (userMessage.includes("ai")) {
        reply = "AI career includes Machine Learning, Deep Learning, and Data Science.";
    }
    else if (userMessage.includes("job")) {
        reply = "Top jobs: Software Engineer, Data Analyst, AI Engineer.";
    }

    res.json({ reply });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
