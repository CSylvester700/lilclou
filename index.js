const express = require('express')
const app = express()
const port = 3000


// folder for view files
app.set('views' , "./views")
// templating engine to pug
app.set('view engine' , 'pug')


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req,res) => res.send("This Is The about section"))
app.get('/about', (req,res) => res.send("welcome To Page 1"))
app.get ('/home', (req, res) =>
res.render('home',{title: "home", message:"welcome to page one"}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))