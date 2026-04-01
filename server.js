const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let messages = [];

app.get('/api/messages', (req, res) => {
    res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const newMsg = { id: Date.now(), text: req.body.text };
    messages.push(newMsg);
    res.json(newMsg);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});