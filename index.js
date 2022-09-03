var express = require('express');
var app = express();
app.get("/getUser", (req, res)=>{
  console.log("This is test for edit");
  res.send("Hello Jitendra khare");
});
app.listen(4000);