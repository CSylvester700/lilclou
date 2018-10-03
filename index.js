const express = require('express')
const app = express()
const port = 3000


// folder for view files
app.set('views' , "./views")
// templating engine to pug
app.set('view engine' , 'pug')


app.get('/', (req, res) => res.render('home'), {title: "Drone Racing"})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))