const express = require('express');
const app = express();
const path = require('path');
const port = 25557;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    res.status(200).render('index');
});

app.get("/discord", (req, res) => {
    res.status(200).redirect('https://discord.gg/h7U9Kc2hCd');
});

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Listening to: http://localhost:${port}`);
})