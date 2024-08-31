const express = require('express');
const app = express();

app.get('/', (req, res) => { res.send('Welcome')})
app.post(() => {})
app.put(() => {})
app.delete(() => {})

module.exports = {
    app
}