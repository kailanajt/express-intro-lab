// import modules

import express from 'express'

// import { students } from './data/students-data'
import {students} from './data/students-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)

app.get('/', function(req, res) {
    // res.render('students/index')
    res.send('<h1>Hello</h1>')
})

app.get('/home', function (req, res){
  res.render('home')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students : students
  })
})
// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})