const express = require('express')
const app = express()
const port = 3001



app.get('/films/nowplaying', (req, res) => {
  res.send({
    name:'123',
    age:16,
    address:"12b hillsborough"
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})