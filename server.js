
const express = require('express');
const app = express();

app.get('/',(req,res) => {
  
  res.json({
    message: "welcome to server"
}

})

const port = process.env.PORT
app.listen(port, () => {
  console.log("server started at port " + port)
  console.log("http://localhost:" + port)
})

