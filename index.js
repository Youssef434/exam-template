const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, 'dist', 'exam-templates')))

app.route("/*").get((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'exam-templates', 'index.html'));
})

app.listen(process.env.PORT || port, () => {
  console.log("server running at port " + port)
})