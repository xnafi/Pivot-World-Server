const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())
const courses = require('./data/catagories.json')

app.get('/', (req, res) => {
    res.send('news api runnig')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const select = courses.find(course => course.id == id)
    if (!select) {
        return res.send('invalid quarry')
    }
    res.send(select)
})


app.listen(port, () => {
    console.log('running port', port);
})