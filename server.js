const express = require("express");
const app = express();

app.use(express.json());

// rotas
const routes = require("./routes");
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
