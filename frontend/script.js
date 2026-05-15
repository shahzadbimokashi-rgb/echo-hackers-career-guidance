function send() {
    let msg = document.getElementById("msg").value;

    if (!msg) return;

    document.getElementById("chatbox").innerHTML +=
        "<p><b>You:</b> " + msg + "</p>";

    fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("chatbox").innerHTML +=
            "<p><b>AI:</b> " + data.reply + "</p>";
    });
}
