const express = require('express')
const app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

const persons = [
  {
    name: 'off: Zoë Kravitz?',
  },
  {
    name: 'off: Henry Cavill?',
  },
  {
    name: 'off: Robert Pattinson?',
  },
  {
    name: 'off: Sebastian Stan?',
  },
  {
    name: 'on: o bot?',
  },
]


app.get('/fariam', (req, res) => res.json(persons))
app.listen(port);