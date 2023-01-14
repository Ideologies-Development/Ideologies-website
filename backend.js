const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
    res.status(200).render('index');
})


app.listen(port, () => {
    console.log(`Listening to: http://localhost:${port}`);
})