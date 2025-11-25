const express = require('express')
const app = express()

app.get('/test', (req, res) => {
    res.json({msg: 'ok'})
})

app.listen(80, () => {
    console.log(`server start on: http://127.0.0.1`)
})
