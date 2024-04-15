const express = require("express");
const app = express();
app.get("/gadgets", (request, response) => {
  response.sendFiles("./gadgets.html", { root: __dirname });
});
app.listen(3000);

module.exports = app;
