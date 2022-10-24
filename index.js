const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app(cors())

app.get('/', (req, res) => {
    res.send('Pivot Design Api Runnig')
})


app.listen(port, () => {
    console.log('port is running', port);
})