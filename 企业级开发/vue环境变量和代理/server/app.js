const express = require('express')
const app = express()

app.post('/test', (req, res) => {
    res.json({ msg: 'ok' })
})

app.listen(1024, () => {
    console.log(`server start on: http://127.0.0.1:1024`);
})