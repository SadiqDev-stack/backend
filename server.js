const express = require("express");
const app = express();

app.use(express.static("./statics"));


app.get('/',(req,res) => {
  res.json({
    message: "welcome to backend"
  })
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server started at " + port);
});

app.get('/api',(req,res) => {
 res.json({
   message: "welcome to api"
})
})
