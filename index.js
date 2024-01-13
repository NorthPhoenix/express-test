const express = require('express');
const app = express();

app.get("/:url", (req, res) => {
  const path = req.params["url"]
  res.send(path)
})

app.get("", (req, res) => {
  res.send("Hello from Express!")
})

app.listen(process.env.PORT ?? 3000, () => {
  console.log('Server is running on port 3000');
});
