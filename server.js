const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Serveeri staatilisi faile
app.use(express.static(__dirname));

// Põhitee
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server töötab pordil ${PORT}`);
});