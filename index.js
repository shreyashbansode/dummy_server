

const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'First Deploye'
    })
})

app.listen(5000, () => {
    console.log('server is listening')
})