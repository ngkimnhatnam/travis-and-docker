const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Testing Travis here at port", process.env.port);
});
