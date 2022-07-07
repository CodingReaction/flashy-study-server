const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT ?? 3000;

const app = express();

// Routers
const cardRouter = require("./routes/card");

// General Middleware
app.use(helmet());
app.use(cors());

// Routes connection
app.use("/card", cardRouter);

app.use("/", (req, res) => {
  return res.send("<h1>Home page</h1>");
});

//TODO: check why the 404 page is not reached
app.use((req, res, next) => {
  return req.statusCode(404).send("<h1>Page not found <h1>");
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
