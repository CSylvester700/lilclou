const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req,res) => res.send("This Is The about section"))
app.get('/about', (req,res) => res.send("welcome To Page 1"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))